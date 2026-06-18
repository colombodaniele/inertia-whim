// Scroll-section controller keeps the sticky buttons synced with the visible content.
(() => {
  const buttons = Array.from(document.querySelectorAll("[data-tab]"));
  const panels = Array.from(document.querySelectorAll("[data-panel]"));
  const tabBar = document.querySelector(".tab-bar");
  const outroPanel = document.querySelector(".outro-panel");
  const enteredSiteKey = "inertiaWhimEnteredSite";
  let scrollTicking = false;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (buttons.length === 0 || panels.length === 0) {
    return;
  }

  const setActiveSection = (tabName, { replayReveal = false } = {}) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.tab === tabName;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === tabName;
      panel.classList.toggle("is-active", isActive);
      panel.setAttribute("aria-hidden", "false");
    });

    if (replayReveal) {
      window.inertiaWhimReveal?.refresh({ replayActiveTab: true });
    }
  };

  const getActiveIndex = () => {
    const activeIndex = buttons.findIndex((button) => button.classList.contains("is-active"));
    return activeIndex >= 0 ? activeIndex : 0;
  };

  const getPanel = (tabName) => panels.find((panel) => panel.dataset.panel === tabName);

  const writeHash = (tabName) => {
    if (window.location.hash !== `#${tabName}`) {
      history.replaceState(null, "", `#${tabName}`);
    }
  };

  const scrollToSection = (tabName, { updateHash = true } = {}) => {
    const panel = getPanel(tabName);

    if (!panel) {
      return;
    }

    setActiveSection(tabName);
    window.inertiaWhimReveal?.showSection(panel);
    panel.scrollIntoView({ behavior: "smooth", block: "start" });

    if (updateHash) {
      writeHash(tabName);
    }

    try {
      sessionStorage.setItem(enteredSiteKey, "true");
    } catch (error) {
      // Browsers can block storage; section navigation should still work.
    }
  };

  const updateActiveFromScroll = () => {
    const marker = (tabBar?.offsetHeight || 68) + window.innerHeight * 0.32;
    const visiblePanel = panels.find((panel) => {
      const rect = panel.getBoundingClientRect();
      return rect.top <= marker && rect.bottom >= marker;
    });

    if (visiblePanel) {
      setActiveSection(visiblePanel.dataset.panel);
    }

    updateBackgroundFade();
    scrollTicking = false;
  };

  const updateBackgroundFade = () => {
    const firstPanel = panels[0];
    if (!firstPanel) {
      return;
    }

    const stickyOffset = tabBar?.offsetHeight || 68;
    const start = firstPanel.getBoundingClientRect().top + window.scrollY;
    const end = document.documentElement.scrollHeight - window.innerHeight;
    const range = Math.max(end - start, 1);
    const progress = Math.min(Math.max((window.scrollY - start) / range, 0), 1);
    const landingRange = Math.max(start - stickyOffset, 1);
    const landingProgress = Math.min(Math.max(window.scrollY / landingRange, 0), 1);
    const fadeProgress = Math.min(Math.max((landingProgress - 0.32) / 0.58, 0), 1);
    const easedLandingProgress = fadeProgress * fadeProgress * (3 - 2 * fadeProgress);
    const tabProgress = Math.min(Math.max((landingProgress - 0.64) / 0.36, 0), 1);
    const easedTabProgress = tabProgress * tabProgress * (3 - 2 * tabProgress);
    const outroStart = outroPanel ? outroPanel.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.6 : Infinity;
    const outroProgress = outroPanel ? Math.min(Math.max((window.scrollY - outroStart) / (window.innerHeight * 0.45), 0), 1) : 0;
    const easedOutroProgress = outroProgress * outroProgress * (3 - 2 * outroProgress);
    const outroImageStart = outroPanel ? outroPanel.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.55 : Infinity;
    const outroImageEnd = end;
    const outroImageRange = Math.max(outroImageEnd - outroImageStart, 1);
    const outroImageProgress = outroPanel ? Math.min(Math.max((window.scrollY - outroImageStart) / outroImageRange, 0), 1) : 0;
    const easedOutroImageProgress = outroImageProgress * outroImageProgress * (3 - 2 * outroImageProgress);
    const backgroundOffset = prefersReducedMotion ? 0 : -160 * progress;
    const landingOffset = 0;
    const landingOpacity = 1 - easedLandingProgress;
    const overlayOpacity = 1 - easedLandingProgress;
    const tabOpacity = easedTabProgress * (1 - easedOutroProgress);
    const tabSlide = prefersReducedMotion ? 0 : 44 * ((1 - easedTabProgress) + easedOutroProgress);
    const outroBlur = prefersReducedMotion ? 0 : 12 * (1 - easedOutroImageProgress);
    const outroY = prefersReducedMotion ? 0 : 34 * (1 - easedOutroImageProgress);
    const outroScale = 0.94 + 0.06 * easedOutroImageProgress;

    document.body.style.setProperty("--blue-background-opacity", progress.toFixed(3));
    document.body.style.setProperty("--background-y", `${backgroundOffset.toFixed(1)}px`);
    document.body.style.setProperty("--landing-image-opacity", Math.max(landingOpacity, 0).toFixed(3));
    document.body.style.setProperty("--landing-image-y", `${landingOffset.toFixed(1)}px`);
    document.body.style.setProperty("--landing-overlay-opacity", Math.max(overlayOpacity, 0).toFixed(3));
    document.body.style.setProperty("--landing-tabs-opacity", tabOpacity.toFixed(3));
    document.body.style.setProperty("--landing-tabs-slide", `${tabSlide.toFixed(1)}px`);
    document.body.style.setProperty("--outro-opacity", easedOutroImageProgress.toFixed(3));
    document.body.style.setProperty("--outro-blur", `${outroBlur.toFixed(1)}px`);
    document.body.style.setProperty("--outro-y", `${outroY.toFixed(1)}px`);
    document.body.style.setProperty("--outro-scale", outroScale.toFixed(3));
  };

  const requestScrollUpdate = () => {
    if (scrollTicking) {
      return;
    }

    scrollTicking = true;
    requestAnimationFrame(updateActiveFromScroll);
  };

  const activateByOffset = (offset) => {
    const activeIndex = getActiveIndex();
    const nextIndex = Math.min(Math.max(activeIndex + offset, 0), buttons.length - 1);

    if (nextIndex !== activeIndex && buttons[nextIndex]) {
      scrollToSection(buttons[nextIndex].dataset.tab);
      return true;
    }

    return false;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      scrollToSection(button.dataset.tab);
    });
  });

  const initialTab = window.location.hash.replace("#", "");
  if (buttons.some((button) => button.dataset.tab === initialTab)) {
    setActiveSection(initialTab);
  } else if (buttons[0]) {
    setActiveSection(buttons[0].dataset.tab);
  }

  window.addEventListener("keydown", (event) => {
    const isTyping = event.target.closest("input, textarea, select");

    if (isTyping) {
      return;
    }

    if (event.key === "ArrowRight") {
      activateByOffset(1);
    } else if (event.key === "ArrowLeft") {
      activateByOffset(-1);
    }
  });

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", requestScrollUpdate, { passive: true });

  window.inertiaWhimTabs = {
    activateTab: scrollToSection,
    enteredSiteKey,
    getActiveTab: () => buttons[getActiveIndex()]?.dataset.tab || "bio",
  };

  requestAnimationFrame(updateActiveFromScroll);
})();

// Landing intro resolves the artwork from blur before revealing overlays.
(() => {
  requestAnimationFrame(() => {
    document.body.classList.add("is-landing-ready");
    document.body.classList.remove("is-landing-intro");
  });
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
    showSection: (section) => {
      section?.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
    },
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

// Music and gallery use the same centered carousel interaction.
(() => {
  const carousels = Array.from(document.querySelectorAll("[data-carousel]"));

  if (carousels.length === 0) {
    return;
  }

  carousels.forEach((carousel) => {
    const viewport = carousel.querySelector(".carousel-viewport");
    const track = carousel.querySelector("[data-carousel-track]");
    const previousButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    let isMoving = false;
    let currentTranslate = 0;
    let dragPointerId = null;
    let dragStartX = 0;
    let dragDeltaX = 0;
    let wheelUnlockTimer = null;
    let wheelLocked = false;

    if (!viewport || !track) {
      return;
    }

    const getCards = () => Array.from(track.querySelectorAll("[data-carousel-card]"));
    const getClones = () => Array.from(track.querySelectorAll("[data-carousel-clone]"));

    const createCarouselClone = (card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("data-carousel-clone", "");
      clone.setAttribute("aria-hidden", "true");

      if ("inert" in clone) {
        clone.inert = true;
      }

      return clone;
    };

    const removeCarouselClones = () => {
      getClones().forEach((clone) => clone.remove());
    };

    const setTransition = (enabled) => {
      track.style.transition = enabled ? "" : "none";
    };

    const alignToSlot = (slotIndex, { animate = true } = {}) => {
      const cards = getCards();
      const targetCard = cards[slotIndex];

      if (!targetCard) {
        return;
      }

      setTransition(animate);

      const viewportCenter = viewport.clientWidth / 2;
      const cardCenter = targetCard.offsetLeft + targetCard.offsetWidth / 2;
      currentTranslate = viewportCenter - cardCenter;
      track.style.transform = `translateX(${currentTranslate.toFixed(1)}px)`;

      if (!animate) {
        track.offsetHeight; // Apply the instant reset before restoring transitions.
        setTransition(true);
      }
    };

    const updateCardState = (centerSlot = 1) => {
      const cards = getCards();

      cards.forEach((card, index) => {
        const isActive = index === centerSlot;
        const isNeighbor = index === centerSlot - 1 || index === centerSlot + 1;

        card.classList.toggle("is-active", isActive);
        card.classList.toggle("is-neighbor", isNeighbor);
        card.setAttribute("aria-current", String(isActive));
      });

      previousButton?.toggleAttribute("disabled", cards.length < 2 || isMoving);
      nextButton?.toggleAttribute("disabled", cards.length < 2 || isMoving);
    };

    const moveCarousel = (direction) => {
      const cards = getCards();

      if (isMoving || cards.length < 2) {
        return;
      }

      isMoving = true;
      removeCarouselClones();

      let targetSlot = direction > 0 ? 2 : 1;

      if (direction > 0) {
        track.appendChild(createCarouselClone(track.firstElementChild));
      } else {
        track.insertBefore(createCarouselClone(track.lastElementChild), track.firstElementChild);
        alignToSlot(2, { animate: false });
        updateCardState(2);
      }

      updateCardState(targetSlot);
      alignToSlot(targetSlot);

      const finishMove = (event) => {
        if (event.target !== track) {
          return;
        }

        track.removeEventListener("transitionend", finishMove);
        removeCarouselClones();

        if (direction > 0) {
          track.appendChild(track.firstElementChild);
        } else {
          track.insertBefore(track.lastElementChild, track.firstElementChild);
        }

        alignToSlot(1, { animate: false });
        isMoving = false;
        updateCardState(1);
      };

      track.addEventListener("transitionend", finishMove);
    };

    previousButton?.addEventListener("click", () => moveCarousel(-1));
    nextButton?.addEventListener("click", () => moveCarousel(1));

    carousel.addEventListener("wheel", (event) => {
      const horizontalDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : 0;
      const shiftedVerticalDelta = event.shiftKey ? event.deltaY : 0;
      const delta = horizontalDelta || shiftedVerticalDelta;

      if (!delta || Math.abs(delta) < 18 || wheelLocked) {
        return;
      }

      event.preventDefault();
      wheelLocked = true;
      moveCarousel(delta > 0 ? 1 : -1);
      clearTimeout(wheelUnlockTimer);
      wheelUnlockTimer = setTimeout(() => {
        wheelLocked = false;
      }, 560);
    }, { passive: false });

    viewport.addEventListener("pointerdown", (event) => {
      if (isMoving || event.target.closest("button, input, audio, .custom-audio-player")) {
        return;
      }

      dragPointerId = event.pointerId;
      dragStartX = event.clientX;
      dragDeltaX = 0;
      carousel.classList.add("is-dragging");
      setTransition(false);
      viewport.setPointerCapture?.(event.pointerId);
    });

    viewport.addEventListener("pointermove", (event) => {
      if (dragPointerId !== event.pointerId) {
        return;
      }

      dragDeltaX = event.clientX - dragStartX;
      track.style.transform = `translateX(${(currentTranslate + dragDeltaX).toFixed(1)}px)`;
    });

    const finishDrag = (event) => {
      if (dragPointerId !== event.pointerId) {
        return;
      }

      viewport.releasePointerCapture?.(event.pointerId);
      dragPointerId = null;
      carousel.classList.remove("is-dragging");
      setTransition(true);

      if (Math.abs(dragDeltaX) > 58) {
        moveCarousel(dragDeltaX < 0 ? 1 : -1);
      } else {
        alignToSlot(1);
      }

      dragDeltaX = 0;
    };

    viewport.addEventListener("pointerup", finishDrag);
    viewport.addEventListener("pointercancel", finishDrag);

    if (getCards().length > 2) {
      track.insertBefore(track.lastElementChild, track.firstElementChild);
    }

    getCards().forEach((card) => {
      card.addEventListener("click", (event) => {
        if (event.target.closest("button, input, audio, .custom-audio-player")) {
          return;
        }

        const cards = getCards();
        const clickedIndex = cards.indexOf(card);

        if (clickedIndex === 0) {
          moveCarousel(-1);
        } else if (clickedIndex === 2) {
          moveCarousel(1);
        }
      });
    });

    updateCardState(1);
    requestAnimationFrame(() => alignToSlot(1, { animate: false }));
    window.addEventListener("resize", () => alignToSlot(1, { animate: false }), { passive: true });
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
