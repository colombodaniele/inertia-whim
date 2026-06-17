// Simple tab controller keeps all sections available in one local static page.
(() => {
  const buttons = Array.from(document.querySelectorAll("[data-tab]"));
  const panels = Array.from(document.querySelectorAll("[data-panel]"));
  const track = document.querySelector("[data-tab-track]");
  const viewport = document.querySelector(".tab-viewport");
  const enteredSiteKey = "inertiaWhimEnteredSite";
  const swipeDistance = 110;
  const wheelDistance = 160;
  const previewLimit = 132;
  let touchStartX = null;
  let touchStartY = null;
  let touchDeltaX = 0;
  let touchDeltaY = 0;
  let wheelDeltaX = 0;
  let wheelResetTimer = null;
  let previewResetTimer = null;
  let wheelGestureCommitted = false;

  const activateTab = (tabName) => {
    const activeIndex = buttons.findIndex((button) => button.dataset.tab === tabName);

    buttons.forEach((button) => {
      const isActive = button.dataset.tab === tabName;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === tabName;
      panel.classList.toggle("is-active", isActive);
      panel.setAttribute("aria-hidden", String(!isActive));
    });

    if (track && activeIndex >= 0) {
      track.style.transform = `translateX(-${activeIndex * 100}vw)`;
    }

    window.inertiaWhimReveal?.refresh({ replayActiveTab: true });
  };

  window.inertiaWhimTabs = {
    activateTab,
    enteredSiteKey,
    getActiveTab: () => buttons[getActiveIndex()]?.dataset.tab || "bio",
  };

  const getActiveIndex = () => buttons.findIndex((button) => button.classList.contains("is-active"));

  const shouldIgnoreGesture = (target) => Boolean(target.closest("button, input, textarea, select, a, audio, .custom-audio-player, .contact-form"));

  const clampPreviewOffset = (offset) => {
    const activeIndex = getActiveIndex();
    const isPullingBeforeFirst = offset > 0 && activeIndex === 0;
    const isPullingAfterLast = offset < 0 && activeIndex === buttons.length - 1;
    const resistedOffset = isPullingBeforeFirst || isPullingAfterLast ? offset * 0.28 : offset;

    return Math.max(Math.min(resistedOffset, previewLimit), -previewLimit);
  };

  const setPreviewOffset = (offset, isDragging = true) => {
    if (!viewport) {
      return;
    }

    clearTimeout(previewResetTimer);
    viewport.classList.add("is-previewing");
    viewport.classList.toggle("is-dragging", isDragging);
    viewport.style.setProperty("--tab-preview-offset", `${clampPreviewOffset(offset).toFixed(1)}px`);
  };

  const resetPreviewOffset = (animate = true) => {
    if (!viewport) {
      return;
    }

    clearTimeout(previewResetTimer);
    viewport.classList.remove("is-dragging");
    viewport.classList.add("is-previewing");
    viewport.style.setProperty("--tab-preview-offset", "0px");

    if (!animate) {
      viewport.classList.remove("is-previewing");
      return;
    }

    previewResetTimer = setTimeout(() => {
      viewport.classList.remove("is-previewing");
    }, 240);
  };

  const activateByOffset = (offset) => {
    const activeIndex = getActiveIndex();
    const nextIndex = Math.min(Math.max(activeIndex + offset, 0), buttons.length - 1);

    if (nextIndex !== activeIndex && buttons[nextIndex]) {
      activateTab(buttons[nextIndex].dataset.tab);
      history.replaceState(null, "", `#${buttons[nextIndex].dataset.tab}`);
      return true;
    }

    return false;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      resetPreviewOffset(false);
      activateTab(button.dataset.tab);
      history.replaceState(null, "", `#${button.dataset.tab}`);
    });
  });

  const initialTab = window.location.hash.replace("#", "");
  if (buttons.some((button) => button.dataset.tab === initialTab)) {
    activateTab(initialTab);
  } else if (buttons[0]) {
    activateTab(buttons[0].dataset.tab);
  }

  window.addEventListener("wheel", (event) => {
    if (shouldIgnoreGesture(event.target)) {
      return;
    }

    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) * 1.15) {
      return;
    }

    event.preventDefault();

    if (wheelGestureCommitted) {
      clearTimeout(wheelResetTimer);
      wheelResetTimer = setTimeout(() => {
        wheelDeltaX = 0;
        wheelGestureCommitted = false;
        resetPreviewOffset(true);
      }, 520);
      return;
    }

    wheelDeltaX += event.deltaX;
    setPreviewOffset(-wheelDeltaX * 0.62);

    if (Math.abs(wheelDeltaX) >= wheelDistance) {
      const direction = wheelDeltaX > 0 ? 1 : -1;
      wheelDeltaX = 0;
      wheelGestureCommitted = true;
      resetPreviewOffset(false);
      activateByOffset(direction);
      clearTimeout(wheelResetTimer);
      wheelResetTimer = setTimeout(() => {
        wheelGestureCommitted = false;
      }, 520);
      return;
    }

    clearTimeout(wheelResetTimer);
    wheelResetTimer = setTimeout(() => {
      wheelDeltaX = 0;
      wheelGestureCommitted = false;
      resetPreviewOffset(true);
    }, 260);
  }, { passive: false });

  window.addEventListener("touchstart", (event) => {
    if (shouldIgnoreGesture(event.target)) {
      touchStartX = null;
      touchStartY = null;
      return;
    }

    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchDeltaX = 0;
    touchDeltaY = 0;
  }, { passive: true });

  window.addEventListener("touchmove", (event) => {
    if (touchStartX === null || touchStartY === null) {
      return;
    }

    const touch = event.touches[0];
    touchDeltaX = touch.clientX - touchStartX;
    touchDeltaY = touch.clientY - touchStartY;

    if (Math.abs(touchDeltaX) > 12 && Math.abs(touchDeltaX) > Math.abs(touchDeltaY) * 1.2) {
      event.preventDefault();
      setPreviewOffset(touchDeltaX);
    }
  }, { passive: false });

  window.addEventListener("touchend", () => {
    if (touchStartX === null || touchStartY === null) {
      return;
    }

    const deltaX = touchDeltaX;
    const deltaY = touchDeltaY;
    touchStartX = null;
    touchStartY = null;
    touchDeltaX = 0;
    touchDeltaY = 0;

    if (Math.abs(deltaX) > swipeDistance && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
      resetPreviewOffset(false);
      activateByOffset(deltaX < 0 ? 1 : -1);
      return;
    }

    resetPreviewOffset(true);
  }, { passive: true });

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      resetPreviewOffset(false);
      activateByOffset(1);
    } else if (event.key === "ArrowLeft") {
      resetPreviewOffset(false);
      activateByOffset(-1);
    }
  });
})();

// Landing intro resolves the artwork from blur before revealing overlays.
(() => {
  requestAnimationFrame(() => {
    document.body.classList.add("is-landing-ready");
    document.body.classList.remove("is-landing-intro");
  });
})();

// Landing-to-tabs preview makes the first downward gesture feel physical before snapping.
(() => {
  const landing = document.querySelector(".landing");
  const tabBar = document.querySelector(".tab-bar");

  if (!landing || !tabBar) {
    return;
  }

  const commitDistance = 190;
  const previewLimit = 230;
  let wheelDeltaY = 0;
  let wheelResetTimer = null;
  let touchStartX = null;
  let touchStartY = null;
  let touchDeltaX = 0;
  let touchDeltaY = 0;
  let previewResetTimer = null;

  const shouldIgnoreLandingGesture = (target) => Boolean(target.closest("button, input, textarea, select, a, audio, .custom-audio-player, .contact-form"));

  const isLandingActive = () => window.scrollY < Math.min(landing.offsetHeight * 0.5, 420);

  const setLandingPreview = (distance, isDragging = true) => {
    const clampedDistance = Math.max(Math.min(distance, previewLimit), 0);
    const progress = Math.min(clampedDistance / commitDistance, 1);
    const tabLift = Math.min(clampedDistance * 0.74, 168);

    clearTimeout(previewResetTimer);
    document.body.classList.add("is-landing-previewing");
    document.body.classList.toggle("is-landing-dragging", isDragging);
    document.body.style.setProperty("--landing-image-y", `${(-clampedDistance * 0.34).toFixed(1)}px`);
    document.body.style.setProperty("--landing-image-scale", (1 - progress * 0.055).toFixed(3));
    document.body.style.setProperty("--landing-image-opacity", (1 - progress * 0.32).toFixed(3));
    document.body.style.setProperty("--landing-overlay-opacity", (1 - progress * 0.48).toFixed(3));
    document.body.style.setProperty("--landing-tabs-y", `${(-tabLift).toFixed(1)}px`);
    document.body.style.setProperty("--landing-tabs-opacity", (0.2 + progress * 0.8).toFixed(3));
  };

  const resetLandingPreview = (animate = true) => {
    clearTimeout(previewResetTimer);
    document.body.classList.remove("is-landing-dragging");
    document.body.classList.add("is-landing-previewing");
    document.body.style.setProperty("--landing-image-y", "0px");
    document.body.style.setProperty("--landing-image-scale", "1");
    document.body.style.setProperty("--landing-image-opacity", "1");
    document.body.style.setProperty("--landing-overlay-opacity", "1");
    document.body.style.setProperty("--landing-tabs-y", "0px");
    document.body.style.setProperty("--landing-tabs-opacity", "1");

    if (!animate) {
      document.body.classList.remove("is-landing-previewing");
      return;
    }

    previewResetTimer = setTimeout(() => {
      document.body.classList.remove("is-landing-previewing");
    }, 280);
  };

  const commitToTabs = () => {
    const tabState = window.inertiaWhimTabs;
    const hasEnteredSite = (() => {
      try {
        return sessionStorage.getItem(tabState?.enteredSiteKey) === "true";
      } catch (error) {
        return false;
      }
    })();

    if (!hasEnteredSite && !window.location.hash) {
      tabState?.activateTab("bio");
      history.replaceState(null, "", "#bio");
    }

    try {
      sessionStorage.setItem(tabState?.enteredSiteKey || "inertiaWhimEnteredSite", "true");
    } catch (error) {
      // Browsers can block storage; the visual transition should still work.
    }

    setLandingPreview(previewLimit, false);
    tabBar.scrollIntoView({ behavior: "auto", block: "start" });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resetLandingPreview(false);
      });
    });
  };

  window.addEventListener("wheel", (event) => {
    if (shouldIgnoreLandingGesture(event.target) || !isLandingActive() || event.deltaY <= 0 || Math.abs(event.deltaY) <= Math.abs(event.deltaX) * 1.2) {
      return;
    }

    event.preventDefault();
    wheelDeltaY += event.deltaY;
    setLandingPreview(wheelDeltaY);

    if (wheelDeltaY >= commitDistance) {
      wheelDeltaY = 0;
      commitToTabs();
      return;
    }

    clearTimeout(wheelResetTimer);
    wheelResetTimer = setTimeout(() => {
      wheelDeltaY = 0;
      resetLandingPreview(true);
    }, 180);
  }, { passive: false });

  window.addEventListener("touchstart", (event) => {
    if (shouldIgnoreLandingGesture(event.target) || !isLandingActive()) {
      touchStartX = null;
      touchStartY = null;
      return;
    }

    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchDeltaX = 0;
    touchDeltaY = 0;
  }, { passive: true });

  window.addEventListener("touchmove", (event) => {
    if (touchStartX === null || touchStartY === null) {
      return;
    }

    const touch = event.touches[0];
    touchDeltaX = touch.clientX - touchStartX;
    touchDeltaY = touchStartY - touch.clientY;

    if (touchDeltaY > 12 && touchDeltaY > Math.abs(touchDeltaX) * 1.15) {
      event.preventDefault();
      setLandingPreview(touchDeltaY);
    }
  }, { passive: false });

  window.addEventListener("touchend", () => {
    if (touchStartX === null || touchStartY === null) {
      return;
    }

    const finalDeltaY = touchDeltaY;
    const finalDeltaX = touchDeltaX;
    touchStartX = null;
    touchStartY = null;
    touchDeltaX = 0;
    touchDeltaY = 0;

    if (finalDeltaY >= commitDistance && finalDeltaY > Math.abs(finalDeltaX) * 1.15) {
      commitToTabs();
      return;
    }

    resetLandingPreview(true);
  }, { passive: true });
})();

// Scroll and tab-entry reveals bring content in with subtle slide/blur motion.
(() => {
  const revealItems = Array.from(document.querySelectorAll(".reveal"));

  if (revealItems.length === 0) {
    return;
  }

  const revealVisibleItems = () => {
    revealItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.88 && rect.bottom > window.innerHeight * 0.08;

      if (isVisible) {
        item.classList.add("is-visible");
      }
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealVisibleItems();
    window.addEventListener("scroll", revealVisibleItems, { passive: true });
  }

  const restartActivePanelReveals = () => {
    const activePanel = document.querySelector(".tab-panel.is-active");

    if (!activePanel) {
      requestAnimationFrame(revealVisibleItems);
      return;
    }

    const activeItems = Array.from(activePanel.querySelectorAll(".reveal"));

    if (activeItems.length === 0) {
      requestAnimationFrame(revealVisibleItems);
      return;
    }

    activeItems.forEach((item) => {
      item.style.transition = "none";
      item.classList.remove("is-visible");
    });

    activePanel.offsetHeight; // Force the hidden reset state before replaying staggered transitions.

    activeItems.forEach((item) => {
      item.style.transition = "";
    });

    requestAnimationFrame(() => {
      activeItems.forEach((item) => item.classList.add("is-visible"));
    });
  };

  window.inertiaWhimReveal = {
    refresh: ({ replayActiveTab = false } = {}) => {
      if (replayActiveTab) {
        restartActivePanelReveals();
        return;
      }

      requestAnimationFrame(revealVisibleItems);
    },
  };

  requestAnimationFrame(revealVisibleItems);
})();

// Landing signup is a local placeholder until the real mailing-list endpoint is chosen.
(() => {
  const form = document.querySelector("[data-landing-signup]");
  const message = document.querySelector("[data-signup-message]");

  if (!form || !message) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.hidden = false;
    form.reset();
  });
})();

// Gallery thumbnails swap the large image without leaving the section.
(() => {
  const featured = document.querySelector("[data-gallery-featured]");
  const caption = document.querySelector("[data-gallery-caption]");
  const thumbs = Array.from(document.querySelectorAll("[data-gallery-src]"));

  if (!featured || !caption || thumbs.length === 0) {
    return;
  }

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      featured.src = thumb.dataset.gallerySrc;
      featured.alt = thumb.dataset.galleryAlt;
      caption.textContent = thumb.dataset.galleryAlt;

      thumbs.forEach((button) => {
        button.classList.toggle("is-active", button === thumb);
      });
    });
  });
})();

// Custom audio controls replace the browser UI only after JavaScript initializes.
(() => {
  const players = Array.from(document.querySelectorAll(".track-card audio"));

  if (players.length === 0) {
    return;
  }

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  };

  const pauseOtherPlayers = (activePlayer) => {
    players.forEach((player) => {
      if (player !== activePlayer) {
        player.pause();
      }
    });
  };

  document.body.classList.add("audio-enhanced");

  players.forEach((player) => {
    const card = player.closest(".track-card");
    const title = card?.querySelector("h2")?.textContent?.trim() || "Track";
    const controls = document.createElement("div");

    controls.className = "custom-audio-player";
    controls.innerHTML = `
      <button class="audio-toggle" type="button" aria-label="Play ${title}">
        <span class="audio-icon" aria-hidden="true"></span>
      </button>
      <div class="audio-control-body">
        <input class="audio-seek" type="range" min="0" max="100" step="0.1" value="0" aria-label="Seek ${title}">
        <div class="audio-time" aria-hidden="true">
          <span data-current-time>0:00</span>
          <span data-duration>0:00</span>
        </div>
      </div>
    `;

    player.insertAdjacentElement("afterend", controls);

    const toggle = controls.querySelector(".audio-toggle");
    const seek = controls.querySelector(".audio-seek");
    const currentTime = controls.querySelector("[data-current-time]");
    const duration = controls.querySelector("[data-duration]");

    const updateProgress = () => {
      const percentage = player.duration ? (player.currentTime / player.duration) * 100 : 0;
      seek.value = percentage;
      seek.style.setProperty("--progress", `${percentage}%`);
      currentTime.textContent = formatTime(player.currentTime);
      duration.textContent = formatTime(player.duration);
    };

    const updatePlayState = () => {
      const isPlaying = !player.paused;
      toggle.classList.toggle("is-playing", isPlaying);
      toggle.setAttribute("aria-label", `${isPlaying ? "Pause" : "Play"} ${title}`);
    };

    toggle.addEventListener("click", () => {
      if (player.paused) {
        pauseOtherPlayers(player);
        player.play().catch(updatePlayState);
      } else {
        player.pause();
      }
    });

    seek.addEventListener("input", () => {
      if (!player.duration) {
        return;
      }

      player.currentTime = (Number(seek.value) / 100) * player.duration;
      updateProgress();
    });

    player.addEventListener("play", () => {
      pauseOtherPlayers(player);
      updatePlayState();
    });
    player.addEventListener("pause", updatePlayState);
    player.addEventListener("ended", updatePlayState);
    player.addEventListener("loadedmetadata", updateProgress);
    player.addEventListener("durationchange", updateProgress);
    player.addEventListener("timeupdate", updateProgress);

    updateProgress();
    updatePlayState();
  });
})();
