# Inertia Whim Project Log

- Static website project for the band Inertia Whim.
- Source content currently lives in `Bio.txt`, `Graphics/`, `Music/`, and `Pictures/`.
- The first local build is a single-page HTML/CSS/JS site using existing image and audio assets.

## 2026-09-01 16:15

- What changed: Temporarily commented out the landing-page Instagram link while preserving its URL and complete markup in place.
- Why: The account should not be publicly linked for now, but restoring it should only require removing the surrounding HTML comment markers.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Node smoke check confirmed the original URL remains preserved inside the reversible comment and is absent from active markup. `git diff --check -- index.html` passed (standard line-ending warning only).
- Follow-ups / TODOs: Remove the two surrounding comment markers when the Instagram account is ready to be linked again.

## 2026-06-17 15:20

- What changed: Created the initial project log before adding the local website files.
- Why: The project had no existing `PROJECT_LOG.md`, and the workspace instructions require a plain-English summary at the top.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: Read root directory, `Bio.txt`, `Graphics/`, `Music/`, `Pictures/`, and the prior Foreign Logic site files for reference.
- Follow-ups / TODOs: Build and smoke-test the local static website.

## 2026-06-17 15:32

- What changed: Added the first local static Inertia Whim website with a landing image, three tabs, bio/music section, contact form, and gallery.
- Why: The requested first local version needed to reuse the supplied Inertia Whim artwork, music, gallery images, and the Foreign Logic contact pattern.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `Get-ChildItem -Force`; Python smoke check for all referenced local assets and expected tab/panel structure passed; Python HTML parser check for required tags passed. An initial Bash-style heredoc test command failed in PowerShell before execution and was rerun using a PowerShell here-string.
- Follow-ups / TODOs: Open `index.html` locally for visual review and adjust copy/contact details if the management email should differ from the Foreign Logic address.

## 2026-06-17 15:45

- What changed: Renamed the first tab from `Bio + Music` to `Music`, adjusted the contact layout spacing, and replaced the plain gallery grid with a featured image plus selectable thumbnails.
- Why: The contact form was visually crowding `Management`, the first tab label was too literal, and the gallery needed a more compelling presentation than four static images in a row.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, tab/panel counts, tab title, and gallery thumbnail count passed; Python HTML parser check for required tags passed.
- Follow-ups / TODOs: Visually review `index.html` in browser, especially the contact spacing on the target screen size.

## 2026-06-17 15:55

- What changed: Reduced and constrained the contact-page `Management` heading so it cannot overflow into the `Get in touch` form card.
- Why: Browser review showed the large heading visually overlapping the contact form at desktop width.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references and the updated contact heading rule passed; Python HTML parser check passed.
- Follow-ups / TODOs: Recheck the contact page visually at desktop and mobile widths.

## 2026-06-17 16:03

- What changed: Updated the Gallery section to use the same black-white background image as the Music section.
- Why: The gallery needed to share the same visual atmosphere as the music area.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references and repeated black-white background references passed; Python HTML parser check passed.
- Follow-ups / TODOs: Visually confirm the gallery overlay balance against the selected photos.

## 2026-06-17 16:12

- What changed: Simplified the Music tab copy by changing the section label to `Music`, removing the large headline, improving the bio with London origin language, and removing song subtitles.
- Why: The Music section needed to be cleaner and more direct.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references and removed Music-tab text passed; Python HTML parser check passed.
- Follow-ups / TODOs: Review the Music section visually to confirm the shorter copy still balances the audio cards.

## 2026-06-17 16:20

- What changed: Reordered the Gallery section so Michal is the default featured image, followed by Ophelia, Dani, and Tony in the thumbnail strip.
- Why: The requested gallery order changed from the original Dani-first sequence.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, featured image, and gallery order passed; Python HTML parser check passed.
- Follow-ups / TODOs: Visually review the gallery to confirm the new default crop works well for Michal.

## 2026-06-17 16:29

- What changed: Added `Ophelia vocals - 33.wav` as the first Music tab track and made song cards use the same semi-transparent panel background as the contact form.
- Why: A third song was added to the project, and the music cards needed to feel lighter over the background image.
- Files touched: `index.html`, `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, three audio players, track order, and semi-transparent track card styling passed; Python HTML parser check passed.
- Follow-ups / TODOs: Confirm in browser that the WAV plays correctly and that the translucent cards remain readable.

## 2026-06-17 16:37

- What changed: Renamed and reordered the Music tab tracks to `Demo 33`, `Demo 11`, and `Demo 9`, and reduced the track card opacity so the background reads through more clearly.
- Why: Browser review showed the previous cards looked too opaque, and the track labels/order needed to match the requested demo names.
- Files touched: `index.html`, `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, three audio players, requested track order, and updated translucent card styling passed; Python HTML parser check passed.
- Follow-ups / TODOs: Visually confirm the new opacity remains readable while showing enough background.

## 2026-06-17 16:46

- What changed: Made the Music track cards shorter with smaller titles, a compact horizontal layout, and asymmetric rounded corners; added JavaScript so playing one audio track pauses any others.
- Why: The native audio cards were too tall and stacked playback could overlap multiple songs.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, track order, compact card CSS markers, and pause-other-players JS passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-review the compact layout because native audio controls keep browser-specific minimum heights.

## 2026-06-17 16:58

- What changed: Replaced the visible native browser audio controls with compact custom controls when JavaScript loads, kept native controls as fallback, put titles above the players, and reduced title/player sizing.
- Why: The Music tab needed a more original, smaller audio player while preserving one-at-a-time playback.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, track order, custom-player CSS/JS, native fallback audio tags, and pause-other-players behavior passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-test the custom controls by playing, pausing, seeking, and switching between all three tracks.

## 2026-06-17 17:05

- What changed: Adjusted custom audio player spacing by reducing the play button size, moving it inward, and adding right-side padding for the duration label.
- Why: Browser review showed the play button and total duration were too close to the custom player edges.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, track order, custom player spacing rules, and custom-player JS presence passed; Python HTML parser check passed.
- Follow-ups / TODOs: Visually confirm the play button and duration labels now sit comfortably inside the control.

## 2026-06-17 17:13

- What changed: Added sideways tab navigation via horizontal wheel/trackpad gestures, touch swipes, and left/right arrow keys while keeping tab button clicks unchanged.
- Why: The site needed a way to move between Music, Contact, and Gallery without clicking the tab buttons.
- Files touched: `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, tab/panel counts, track order, and sideways-navigation JS handlers passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-test swipe/trackpad behavior on desktop and mobile to tune swipe thresholds if needed.

## 2026-06-17 17:24

- What changed: Converted the tab content from hidden/show panels to a horizontal sliding track, so Music, Contact, and Gallery visibly slide across with their backgrounds during tab changes.
- Why: The previous sideways navigation switched discretely and did not show an actual scrolling/transition motion.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, tab/panel counts, no duplicate ids, track order, sliding-track CSS, and transform-based JS passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-test horizontal wheel, swipe, arrow keys, and tab clicks to confirm the slide speed feels right.

## 2026-06-17 17:36

- What changed: Added gesture preview behavior so horizontal touch/trackpad movement shifts the active panel content before committing to the next tab after a threshold.
- Why: The sliding transition previously happened only after the gesture, which felt too discrete; the requested interaction needed visible foreground movement during the gesture while the background stays anchored.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, tab/panel counts, no duplicate ids, track order, preview CSS, and touch/wheel preview JS passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-test drag thresholds and adjust `swipeDistance`, `wheelDistance`, or `previewLimit` if the preview feels too sensitive or too stiff.

## 2026-06-17 17:48

- What changed: Added a vertical landing-to-tabs preview so downward wheel/touch gestures move and fade the landing image while lifting the tab bar and tab content before snapping to the tabs after a threshold.
- Why: The user wanted the same physical preview behavior when scrolling from the landing image into the tabbed site.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, tab/panel counts, no duplicate ids, track order, landing preview CSS/JS, tab preview JS, and custom audio JS passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-test the landing threshold and tune `commitDistance`, `previewLimit`, or lift/opacity values if the transition feels too heavy or too eager.

## 2026-06-17 17:57

- What changed: Added session-aware landing entry behavior so the first landing scroll activates Music, while later landing scrolls preserve the user’s current tab.
- Why: First visits should enter the site through Music, but returning from inside the site should keep the user’s current context.
- Files touched: `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, tab/panel counts, no duplicate ids, track order, session-state markers, landing preview JS, tab preview JS, and custom audio JS passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-test first visit with no hash, then switch to Contact/Gallery, scroll back to landing, and scroll down again to confirm the active tab is preserved.

## 2026-06-17 18:08

- What changed: Made the landing image full-screen, kept the PNG source instead of the SVG wrapper, generated `Graphics/inertia_whim_circle_logo.png`, and added it as a circular landing badge.
- Why: The landing image needed to fill the viewport, and the project needed a reusable circular logo treatment. The SVG was checked and found to embed the PNG rather than provide true vector detail.
- Files touched: `index.html`, `styles.css`, `script.js`, `Graphics/inertia_whim_circle_logo.png`, `PROJECT_LOG.md`.
- Commands/tests run + results: PIL generated a 1024x1024 circular badge; Python smoke check for local references, no duplicate ids, track order, full-screen landing CSS, badge reference/dimensions, and landing preview variables passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-review the full-screen crop on desktop and mobile, and decide whether the circular crop should be adjusted or replaced with a more purpose-built logo mark.

## 2026-06-17 18:16

- What changed: Removed the visible circular badge from the landing page, kept the circular image as the browser/favicon asset, added favicon and apple-touch-icon links, and lowered the landing crop with `object-position: center 60%`.
- Why: The circular logo was needed for the browser tab, not as landing content, and the full-screen crop was cutting off the top of the wordmark.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, favicon links, no visible badge markup/CSS, no unused badge variable, no duplicate ids, track order, and badge dimensions passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-review the landing crop; adjust `object-position` again if the top of the lettering is still too tight.

## 2026-06-17 18:24

- What changed: Lowered the landing image crop further with `object-position: center 78%` and added a short horizontal gesture commit lock so one swipe/trackpad motion can move at most one tab.
- Why: Browser review showed the top lettering was still cut off, and sideways gestures could skip more than one tab in a single motion.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, no duplicate ids, track order, updated landing crop, one-gesture lock markers, landing preview JS, tab preview JS, and custom audio JS passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-review the landing crop again; tune `object-position` if the crop is still too high or now too low.

## 2026-06-17 18:32

- What changed: Corrected the landing crop in the opposite direction with `object-position: center 35%` and replaced the short gesture cooldown with a wheel momentum-burst guard.
- Why: The previous crop moved the artwork further into the cutoff, and strong trackpad momentum could still advance more than one tab after the short lock expired.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, no duplicate ids, track order, corrected crop value, wheel burst guard markers, landing preview JS, tab preview JS, and custom audio JS passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-test whether `center 35%` reveals enough of the top lettering and whether one physical horizontal gesture now moves only one tab.

## 2026-06-17 18:43

- What changed: Added a top-left landing email signup block, bottom-center Instagram and Spotify icon links, and `© 2026 Inertia Whim`; styled them in muted navy/cream tones and added local signup feedback.
- Why: The landing page needed social entry points, copyright text, and a DIIV-inspired compact signup treatment.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Looked up DIIV page structure; Python smoke check for local references, landing signup/social/copyright markup, no duplicate ids, track order, landing overlay CSS/JS, and custom audio JS passed; Python HTML parser check passed.
- Follow-ups / TODOs: Replace placeholder `href="#"` social links and the local signup placeholder with real Instagram, Spotify, and mailing-list endpoints.

## 2026-06-17 18:48

- What changed: Made the signup button's navy fill semi-transparent and adjusted the hover fill to a slightly stronger transparent navy.
- Why: The signup box's blue area looked too solid against the landing artwork.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, landing signup markup, and transparent signup button CSS passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-review contrast on the signup button over the full-screen landing image.

## 2026-06-17 18:55

- What changed: Changed the landing-to-tabs commit from native smooth scrolling plus timer cleanup to an instant scroll with a two-frame preview reset.
- Why: The previous native smooth scroll and CSS preview reset could fight each other and cause the landing image to flash during the transition.
- Files touched: `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, no duplicate ids, track order, landing commit markers, tab preview JS, and custom audio JS passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-test the landing scroll transition and confirm the flash is gone.

## 2026-06-17 19:03

- What changed: Added a landing intro state so the landing image starts blurred, resolves into focus, and then reveals the signup/social overlays with a delayed fade.
- Why: The landing page needed a more atmospheric entry sequence before the signup and social controls appear.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references, no duplicate ids, track order, landing intro CSS/JS markers, landing preview JS, and custom audio JS passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-review the timing and adjust blur amount or overlay delay if the intro feels too slow or too abrupt.

## 2026-06-17 19:09

- What changed: Increased landing intro blur from 14px to 24px, lengthened the focus transition to 1900ms, and delayed the signup/social overlay reveal to 1250ms with a longer fade.
- Why: The landing intro needed to start more blurred, resolve slightly more slowly, and wait longer before showing overlays.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for local references and updated intro timing CSS passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-review the new intro timing.

## 2026-06-17 19:20

- What changed: Added a reusable scroll/tab-entry reveal system with blur, left-slide, right-slide, and staggered delay variants; applied it to Music bio/cards, Contact copy/form, and Gallery title/image/thumbnails.
- Why: The user liked Waitate-style elements appearing on scroll from sides or from blur, and the Inertia Whim tabs needed a subtle version of that motion language.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Reviewed Waitate page structure; Python smoke check for local references, reveal markup count, reveal CSS classes, IntersectionObserver/reveal refresh JS, no duplicate ids, and track order passed; Python HTML parser check passed.
- Follow-ups / TODOs: Browser-review reveal timing inside each tab and adjust directions/stagger if any section feels too busy.

## 2026-06-17 19:29

- What changed: Made the tab reveal animations replay every time a tab becomes active, instead of only the first time each element enters view.
- Why: The user wanted the Waitate-style slide/blur entrance to happen on every Music/Contact/Gallery tab switch.
- Files touched: `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for replayable tab reveal markers, local references, tab/panel order, no duplicate ids, no one-shot `observer.unobserve`, and HTML structure passed.
- Follow-ups / TODOs: Browser-review tab switching to confirm the replay timing feels natural during horizontal slides.

## 2026-06-17 19:45

- What changed: Initialized a local Git repository, added a minimal `.gitignore`, committed the current Inertia Whim website, renamed the branch to `main`, and configured the GitHub remote to match the Foreign Logic account pattern.
- Why: The user asked to upload the local site to GitHub so it can be checked online.
- Files touched: `.gitignore`, `.git/`, `PROJECT_LOG.md`.
- Commands/tests run + results: Checked largest asset size; largest file was `Music/Ophelia vocals - 33.wav` at about 51.2 MB, below GitHub's 100 MB file limit. `git init`, `git add .`, `git commit -m "Initial Inertia Whim website"`, `git branch -M main`, `git remote set-url origin https://github.com/colombodaniele/inertia-whim.git` succeeded. Push attempts to `https://github.com/DColombo13/inertia-whim.git` and `https://github.com/colombodaniele/inertia-whim.git` both failed with `Repository not found`.
- Follow-ups / TODOs: Create or grant access to the GitHub repository `colombodaniele/inertia-whim`, then rerun `git push -u origin main`.

## 2026-06-17 19:54

- What changed: Pushed the committed Inertia Whim site to the newly created GitHub repository.
- Why: The repository was created after the first push attempt, so the local site could now be uploaded.
- Files touched: `PROJECT_LOG.md`, remote repository `https://github.com/colombodaniele/inertia-whim`.
- Commands/tests run + results: `git push -u origin main` succeeded and set `main` to track `origin/main`; GitHub warned that `Music/Ophelia vocals - 33.wav` is 51.20 MB, slightly above the recommended 50 MB but below the hard 100 MB limit. `git status --short --branch` showed `main...origin/main`; `git ls-remote --heads origin main` returned commit `1cfedff`.
- Follow-ups / TODOs: Enable GitHub Pages from the repository's `main` branch root if a public preview URL is needed.

## 2026-06-18 10:20

- What changed: Converted the post-landing site from a horizontal tab carousel into a continuous vertical scroll page with a sticky section nav, smooth section jumps, scroll-synced active tab state, and a fixed cross-fading background layer.
- Why: The user wanted a NewDad-style page where the whole site scrolls down while the Music/Contact/Gallery controls remain available at the top after the landing page.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for vertical section structure, sticky nav CSS, local asset references, background layer CSS, smooth section-scroll JS, absence of old horizontal track markers, no duplicate ids, and balanced HTML structure passed.
- Follow-ups / TODOs: Browser-review local `index.html` for scroll feel and background cross-fade timing before pushing to GitHub.

## 2026-06-18 10:31

- What changed: Removed the extra reveal replay after sticky-nav section jumps and added a reveal helper that marks the destination section visible immediately when a tab is used.
- Why: Tab navigation already has smooth scrolling, so replaying the fade-in afterward created a double-animation effect.
- Files touched: `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for tab jumps pre-showing reveals, normal scroll reveal path remaining active, local asset references, tab/panel order, no duplicate ids, and reveal CSS presence passed.
- Follow-ups / TODOs: Browser-review tab clicks locally to confirm the scroll now feels cleaner while first-time manual scrolling still fades sections in.

## 2026-06-18 10:47

- What changed: Rebuilt the Music song cards and Gallery photos as centered carousel strips with one emphasized active item, neighboring items visible at the sides, and left/right arrow controls.
- Why: The user wanted the Music and Gallery elements to behave more like the album carousel on NewDad's site.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for two carousels, seven carousel cards, two previous and two next buttons, local asset references, song order, gallery order, no duplicate ids, carousel CSS markers, carousel JS markers, and preserved custom-audio hooks passed.
- Follow-ups / TODOs: Browser-review the carousel sizing and arrow placement on desktop and mobile before pushing to GitHub.

## 2026-06-18 11:02

- What changed: Moved the Music carousel below the bio text, resized Music/Gallery carousel cards so side items remain fully visible beside the emphasized center card, and changed carousel movement to rotate real cards after each transition for continuous circular scrolling.
- Why: The user wanted the songs under the London bio, fully visible side items, and arrow clicks that keep moving in the same direction instead of visually snapping back to the start.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for vertical Music layout, full-neighbor carousel sizing markers, circular forward/backward track rotation, invisible reset after each transition, local asset references, song/gallery order, no duplicate ids, and preserved custom-audio hooks passed.
- Follow-ups / TODOs: Browser-review the local carousel motion and card sizing, especially on smaller screens.

## 2026-06-18 11:13

- What changed: Widened the Music and Gallery carousel stages to span the viewport on desktop, increased the center song/photo card widths, and moved the arrows farther toward the sides while keeping mobile carousels constrained.
- Why: The carousel cards had become smaller than before; the user wanted the main song players and gallery images closer to the earlier width while using more horizontal page space like the NewDad example.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for wider carousel CSS markers, local asset references, two carousels, seven cards, arrow controls, circular rotation JS, and custom-audio hooks passed.
- Follow-ups / TODOs: Browser-review desktop widths to confirm the arrows and side cards feel balanced.

## 2026-06-18 11:24

- What changed: Replaced the active-section background switch with a scroll-progress crossfade between the black-white and blue-cream background layers.
- Why: The user wanted just two background images that progressively fade into each other from the start to the end of the post-landing page, instead of changing quickly by tab/section.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for two background layers, page-progress opacity variable, black layer fading down, blue layer fading up, absence of the old `is-contact-background` switch, local asset references, no duplicate ids, and expected section order passed.
- Follow-ups / TODOs: Browser-review the fade pacing; adjust the start/end scroll range if the transition should complete earlier or later.

## 2026-06-18 11:32

- What changed: Added a very subtle scroll-driven parallax offset to the two fixed background layers, with a small scale buffer and reduced-motion safeguards.
- Why: The user wanted the backgrounds to drift slightly as the page scrolls, much less than foreground content, to create a distant perspective effect.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for the `--background-y` variable, background transform/scale CSS, reduced-motion guard, scroll-set parallax variable, existing background fade variable, local asset references, and no duplicate ids passed.
- Follow-ups / TODOs: Browser-review the parallax amount; adjust the current 36px total drift if it feels too still or too noticeable.

## 2026-06-18 11:43

- What changed: Increased the shared background parallax drift for both background layers, enlarged the scale buffer, added horizontal wheel/trackpad and pointer-drag carousel navigation, and padded the carousel edges so arrows sit fully inside the viewport.
- Why: The background movement was too subtle, the carousels needed to be sideways-scrollable rather than arrow-only, and the arrow circles were slightly clipped by page margins.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for stronger two-layer parallax, background transform/scale, carousel edge padding, drag cursor/touch CSS, wheel and pointer gesture JS, circular carousel rotation, local asset references, no duplicate ids, two carousels, and seven carousel cards passed.
- Follow-ups / TODOs: Browser-review drag/trackpad sensitivity and the stronger 96px total background drift.

## 2026-06-18 11:51

- What changed: Extended the background parallax range to the full document scroll height and increased total drift from 96px to 160px.
- Why: The parallax previously completed around the start of the Gallery section, so the background stopped moving after Contact; the user also wanted the movement to be more noticeable.
- Files touched: `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for full-page parallax end point, 160px drift, removal of the old last-section-start end point, both background layers using the shared transform, local asset references, no duplicate ids, and expected section order passed.
- Follow-ups / TODOs: Browser-review the stronger drift through Gallery.

## 2026-06-18 12:02

- What changed: Expanded fixed background layers beyond the viewport to prevent the parallax from exposing a black lower edge, and added temporary offscreen carousel clones during each slide so incoming cards enter from the side instead of appearing after the DOM rotation.
- Why: Browser review showed a black band at the bottom during Gallery and carousel items popping into view rather than sliding naturally from offscreen.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for extended background coverage, parallax transform, carousel clone CSS, forward/backward incoming clones, clone cleanup, track-scoped transition end handling, circular rotation, local asset references, no duplicate ids, two carousels, and seven real carousel cards passed.
- Follow-ups / TODOs: Browser-review Gallery bottom edge and carousel side-entry motion.

## 2026-06-18 12:10

- What changed: Removed carousel card scale transforms and reduced the active Music card shadow.
- Why: The song carousel looked like it had an extra outer box around the cards, and the active/neighbor scale transition caused a second small-to-large animation after sliding.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for no base/active/neighbor carousel scale transforms, reduced Music active shadow, local asset references, two carousels, seven cards, clone runway JS, and preserved audio hooks passed.
- Follow-ups / TODOs: Browser-review Music carousel to confirm the slide now feels stable and frame-free.

## 2026-06-18 12:20

- What changed: Restored center-card emphasis by giving active carousel cards a larger layout width, kept side cards smaller without scale transforms, removed Music/Gallery card shadows, and softened the Gallery caption gradient.
- Why: The user wanted the center song/image to be larger again, but without the post-slide shrink/grow animation or bottom shade/box under the carousels.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for active layout width, no carousel scale transforms, no Music/Gallery card box-shadows, softened Gallery caption shade, local asset references, two carousels, seven cards, clone runway JS, and preserved audio hooks passed.
- Follow-ups / TODOs: Browser-review center/side size contrast and confirm the bottom shade is gone.

## 2026-06-18 14:20

- What changed: Changed the Music carousel emphasis so the active song card keeps the same layout proportions as the side cards and scales up as a whole, while leaving the Gallery center-card layout unchanged.
- Why: The user liked the Gallery emphasis but wanted Music to feel proportionally bigger rather than simply wider.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for proportional Music active scaling, preserved Gallery center layout, removed carousel shadows, two carousel containers, and preserved custom-audio hooks passed.
- Follow-ups / TODOs: Browser-review the Music carousel to confirm the active song now reads as bigger rather than wider.

## 2026-06-18 14:27

- What changed: Widened the Music song cards, added a larger Music-only carousel gap, slightly shortened the song card/player height, and kept the active song emphasized with proportional scaling.
- Why: The active song card was touching the side cards and still felt wider rather than cleanly larger; the user wanted more spacing and slightly wider, less tall song boxes.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for wider Music cards, proportional active scaling, larger Music gap, shorter player controls, no carousel shadows, two carousel containers, and preserved custom-audio hooks passed.
- Follow-ups / TODOs: Browser-review the Music carousel spacing and scale on desktop; adjust `--carousel-gap` if the side cards should sit farther out.

## 2026-06-18 14:32

- What changed: Swapped the landing page artwork from `Graphics/inertia_whim_correct_top_right_HD.png` to `Graphics/Inertia Whim.png`.
- Why: The user asked to use the newer `Inertia Whim.png` image for the landing page.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check with URL-decoded local asset references passed; `Graphics/Inertia Whim.png` is now used and the old landing image reference is absent from `index.html`.
- Follow-ups / TODOs: Browser-review the landing crop because the new image may need a different `object-position`.

## 2026-06-18 14:35

- What changed: Zoomed the landing artwork out very slightly by changing the landing image scale from `1` to `0.985`.
- Why: The user asked for the new landing image to be backed off a tiny bit.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for `Graphics/Inertia Whim.png`, landing scale `0.985`, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the landing edges; if the slight scale reveals unwanted border, adjust `object-position` or use a less aggressive scale such as `0.992`.

## 2026-06-18 14:45

- What changed: Kept the tiny landing zoom-out but enlarged the landing image canvas so the scaled image still covers the viewport, and added a scroll-progress landing fade/slide handoff into the fixed site backgrounds.
- Why: The previous zoom-out exposed black side margins; the user also asked how to transition more nicely from the landing artwork to the rest-of-site backgrounds.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for oversized landing cover box, scroll handoff variables, `Graphics/Inertia Whim.png`, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the landing-to-Music scroll; adjust the fade thresholds in `script.js` if the handoff should start earlier or later.

## 2026-06-18 14:52

- What changed: Generated two wider landing artwork variants: `Graphics/Inertia Whim landing extended sides.png` with mirrored/blurred side extensions and `Graphics/Inertia Whim landing canvas sides.png` with paper/canvas-style side extensions. Updated the landing page to use the canvas-side version and slowed the landing fade so it reaches zero only at the Music section.
- Why: The original artwork aspect ratio was too narrow for the wide browser viewport, causing black side margins when zoomed out; the user also wanted the fade-out to complete only when arriving at Music.
- Files touched: `index.html`, `script.js`, `Graphics/Inertia Whim landing extended sides.png`, `Graphics/Inertia Whim landing canvas sides.png`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python/Pillow generated both side-extension variants at 2215x1065; visual inspection favored the canvas-side version. Python smoke check for the new landing image reference, alternate variant existence, slower fade formula, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the canvas-side landing image on the target viewport; switch to the mirrored-side version only if the canvas edges feel too artificial.

## 2026-06-18 15:00

- What changed: Reverted the active landing image to `Graphics/Inertia Whim.png`, restored normal full-cover sizing with no zoom-out canvas scale, and changed the landing fade curve to a slower late fade.
- Why: The user preferred the original image filling the viewport for now and wanted the fade-out to happen much more slowly while scrolling.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for the original landing image reference, normal cover sizing, removed cover-scale variable, slower `Math.pow(landingProgress, 2.8)` fade curve, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the scroll handoff; increase the exponent if the fade should hold even longer before Music.

## 2026-06-18 15:17

- What changed: Fixed the landing fade timing to use Music's real document position instead of `offsetTop`, and delayed the fade so it starts late in the landing scroll and completes when Music approaches the sticky-nav/top area.
- Why: The landing image was fully faded while Music was only beginning to appear near the bottom of the viewport; the user wanted the fade to complete much later.
- Files touched: `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for document-position fade calculation, sticky-offset landing range, late fade window, original landing image reference, normal cover sizing, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the landing-to-Music scroll; adjust the `0.58` fade start if the image should hold even longer.

## 2026-06-18 15:23

- What changed: Made the landing image fade start slightly earlier/faster while still completing near the Music/top approach, and added a late tab-bar entrance where the bar fades in and the side buttons slide inward.
- Why: The previous fade was now too slow, and the tab bar appeared too abruptly as soon as it entered view.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for faster landing fade timing, late tab fade/slide variables, original landing image reference, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the tab entrance; adjust the tab start point `0.64` or slide distance `44px` if it should enter sooner or more subtly.

## 2026-06-18 15:28

- What changed: Made the landing image fade a bit quicker, restyled the landing email signup as a translucent angled panel, and reduced the Music section's bottom spacing before Contact.
- Why: The user liked the transition but wanted the main image to fade slightly faster, the signup control to feel more designed, and the gap between songs and Contact to be closer to the Contact-to-Gallery spacing.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for faster landing fade timing, signup panel styling markers, Music bottom spacing override, original landing image reference, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the Music-to-Contact spacing on the target viewport; adjust the Music `padding-bottom` if it still feels too open.

## 2026-06-18 15:35

- What changed: Restored the Music section's original bottom/full-height behavior, moved the Music content lower, increased the gap before the song carousel, slimmed the landing signup control by removing the visible outer panel, and made the landing image fixed while it fades out in place.
- Why: The user wanted the Music bottom spacing restored, the text/songs repositioned within the section, a less boxy signup control, and the landing image to fade without scrolling upward.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for fixed landing image behavior, no scroll offset, slimmer signup styling, restored Music height, lower Music text, larger song gap, original landing image reference, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the fixed landing fade to ensure it does not visually cover Music too long during the handoff.

## 2026-06-18 15:41

- What changed: Started the fixed landing image fade earlier in the landing-to-Music scroll.
- Why: The user liked the fixed fade behavior but wanted the main image to begin fading sooner.
- Files touched: `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for earlier fade timing, unchanged fixed landing image behavior, unchanged tab timing, original landing image reference, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the fade timing; adjust the `0.32` fade start if it should begin even earlier or later.

## 2026-06-18 15:48

- What changed: Added a final scroll section after Gallery with a smaller boxed version of `Graphics/Inertia Whim.png` that fades in using the existing reveal animation.
- Why: The user wanted a closing page after Gallery that brings back the landing image in a smaller framed treatment.
- Files touched: `index.html`, `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for the new outro section, no added tab, three tab panels preserved, reveal hookup, original landing image references, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the closing frame size and inner fade; adjust `width` or inset shadow if it should feel more poster-like or more subtle.

## 2026-06-18 15:52

- What changed: Replaced the outro image's hard boxed frame with a borderless radial mask and overlay so the artwork margins fade into the page background.
- Why: The user wanted the final landing-image reprise to dissolve at the margins rather than look like a framed box.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for the outro margin fade mask, removed hard frame shadow, unchanged tab count, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the fade strength; adjust the radial mask stops if the edges should disappear more gradually.

## 2026-06-18 15:59

- What changed: Removed the dark outro overlay and changed the closing image to fade its left/right sides directly to transparency, plus added a reverse tab-bar fade/slide as the outro section comes into view.
- Why: The previous outro treatment still looked like a dark rectangular box, and the user wanted the tabs to fade away at the end with a reverse of their entrance motion.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for transparent outro side fade, removed dark overlay, reverse outro tab timing, unchanged tab count, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review whether the image also needs top/bottom fading; currently the main fade is left/right to preserve the logo shape.

## 2026-06-18 16:06

- What changed: Made the outro image fade aggressively on all sides with a circular/elliptical mask, and moved its fade-in to a later scroll-driven blur/scale/opacity animation.
- Why: The user wanted no visible contours around the final image and wanted the closing image to appear later and more noticeably while scrolling to the bottom.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for aggressive radial transparency, later scroll-driven outro fade-in, generic reveal override, unchanged tab count, reverse tab fade still present, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the radial mask; adjust the `22%/36%/67%` stops if the logo itself becomes too cropped or still shows edges.

## 2026-06-18 16:12

- What changed: Made the outro image more visible by increasing opacity, replacing the simple radial mask with layered off-center masks for an irregular edge, and reducing the scroll-in blur.
- Why: The previous outro image was too faint and the mask looked too much like a clean circle.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for the layered irregular mask, stronger image opacity, reduced outro blur, closing section presence, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the irregular fade; adjust the layered mask stops if the center should be stronger or the edge should be rougher.

## 2026-06-18 16:19

- What changed: Slightly reduced the Music carousel song card width and Music-only gap while keeping the active card scale and Gallery carousel unchanged.
- Why: The side song cards were being clipped at the viewport edges; the user wanted the cards to fit by trimming card size and center-to-side spacing only.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for smaller Music card/gap values, unchanged Gallery sizing, preserved active song scale, custom audio hooks, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the Music carousel side-card visibility; fine-tune the gap if the side cards still touch the viewport edge.

## 2026-06-18 16:24

- What changed: Reduced the Music carousel card width and Music-only gap one more small step.
- Why: The side song cards were still slightly clipped after the first sizing pass.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for the updated Music card/gap values, unchanged Gallery sizing, preserved active song scale, custom audio hooks, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the Music carousel side-card visibility on the target viewport.

## 2026-06-18 16:46

- What changed: Copied `iw_patch_initials_logo_trial_preview.png` and `extracted_low_left_patch.png` from `trials/logo_extraction/` into `Graphics/`, changed the outro logo to the initials logo asset, changed the browser/apple tab icons to the extracted low-left patch, and removed the old outro image mask.
- Why: The user noticed the active outro image and browser icon were still using old artwork instead of the requested trial logo assets.
- Files touched: `index.html`, `styles.css`, `Graphics/iw_patch_initials_logo_trial_preview.png`, `Graphics/extracted_low_left_patch.png`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for copied asset existence/dimensions, active favicon reference, active outro logo reference, no old outro landing image reference, no outro mask CSS, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-refresh hard if the favicon appears cached; Chrome may keep the old tab icon until reload/cache refresh.

## 2026-06-18 16:51

- What changed: Adjusted the outro logo scroll fade so it explicitly reaches full opacity at the document bottom, while keeping the logo image itself unmasked with `opacity: 1`.
- Why: The user wanted the logo to fade in while scrolling but be fully opaque with no static transparency at the bottom.
- Files touched: `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for document-bottom outro fade endpoint, unmasked `opacity: 1` logo CSS, active initials-logo reference, active favicon reference, and URL-decoded local asset references passed.
- Follow-ups / TODOs: Browser-review the bottom of the page; if the logo should become fully opaque earlier, move the outro fade start lower or compress its range.

## 2026-06-18 16:56

- What changed: Prepared the current static site state for GitHub push, including the active landing image, initials outro logo, and extracted favicon assets.
- Why: The user asked to push the completed local website changes to GitHub.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`, `Graphics/Inertia Whim.png`, `Graphics/extracted_low_left_patch.png`, `Graphics/iw_patch_initials_logo_trial_preview.png`.
- Commands/tests run + results: Pre-push Python smoke check for active HTML/CSS/JS refs, required local assets, three tabs, three panels, custom audio hooks, outro fade endpoint, and URL-decoded asset references passed.
- Follow-ups / TODOs: Push the committed production files to `origin/main`; leave unrelated unreferenced untracked Graphics variants out of the commit.

## 2026-06-18 17:11

- What changed: Verified live GitHub Pages HTML/CSS/JS/assets are already updated, then added cache-busting query strings to the HTML references for CSS, JS, favicon, landing image, and outro logo.
- Why: The GitHub version appeared different from local even though `origin/main` and the live Pages files were updated; the likely cause was browser/GitHub Pages caching of old static resources.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Live `Invoke-WebRequest` checks showed Pages HTML, CSS, JS, and key assets return updated content/200 status. Python smoke check for cache-busted refs and local asset resolution passed.
- Follow-ups / TODOs: Push this cache-busting commit; after deployment, hard refresh the Pages URL if the browser still shows cached favicon/assets.

## 2026-06-18 17:29

- What changed: Added mobile-only responsive overrides: contained landing artwork over a soft mobile background, centered sticky tabs, full-viewport carousel stages with smaller arrows near the screen edges, smaller Music song cards/player controls, preserved Gallery sizing with farther-out arrows, and a taller outro section so the final logo can scroll higher.
- Why: The desktop version was acceptable, but the mobile layout had cropped landing letters, left-aligned tabs, cut song players, cramped carousel arrows, and a final logo that sat too low.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for mobile-only landing/tabs/carousel/audio/outro CSS markers, preserved desktop Music/Gallery sizing, and query-string-aware local asset references passed.
- Follow-ups / TODOs: Browser-review on an actual mobile viewport; push these responsive changes if they look correct.

## 2026-06-18 17:50

- What changed: Retuned the mobile layout so the landing image uses a full-screen cover crop, centered the tab bar, reduced mobile typography and contact/song/player sizing, tightened Music carousel dimensions so side players fit better, and moved the final IW logo lower again.
- Why: The mobile version still did not match the desired full-screen landing behavior, the text and components were too large overall, and the outro logo position was better before.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for the mobile cover-crop landing, centered tabs, smaller Music carousel/player/contact typography, lower outro logo, preserved desktop carousel sizing, query-string-aware local asset references, and balanced CSS braces passed.
- Follow-ups / TODOs: Browser-review the mobile viewport; push these local-only responsive changes after approval.

## 2026-06-18 17:58

- What changed: Further narrowed the mobile Music carousel cards/player controls, kept Gallery sizing unchanged, compressed the mobile Contact section/form, kept first and last name side-by-side on mobile, and forced the management email to stay on one line.
- Why: The mobile song carousel still clipped at the screen edges, and the Contact page did not fit into one mobile viewport with the email wrapping before `.com`.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for updated mobile Music/Contact CSS markers, preserved Gallery mobile sizing, query-string-aware local asset references, and balanced CSS braces passed.
- Follow-ups / TODOs: Browser-review on a mobile viewport; adjust the Music side-card width again if the target phone still clips the side cards.

## 2026-06-18 18:06

- What changed: Changed the mobile tab bar from sticky to fixed, added mobile section top padding for the fixed bar, and made the mobile Music carousel use a full centered active card with smaller scaled side previews pushed toward the screen edges.
- Why: The tabs disappeared after navigating to Contact/Gallery on mobile, and the Music side cards were visually colliding with the active song card.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check for fixed mobile tabs, preserved Gallery mobile sizing, query-string-aware local asset references, balanced CSS braces, and a 402px mobile carousel geometry check passed; the computed Music card visual gap is about 16.8px with side previews partially offscreen.
- Follow-ups / TODOs: Browser-review on the target phone; if the side previews should be even less visible, reduce the side-card scale or move them farther out.

## 2026-06-18 18:14

- What changed: Added a carousel reset state to suppress side-card transitions during the post-arrow clone swap, added a little more mobile padding inside song cards and custom audio players, slightly reduced the mobile audio button size, and shortened the mobile landing signup width.
- Why: The active player controls were sitting too close to the player/song-card edges, a side song appeared to blink after arrow navigation completed, and the user wanted the `STAY IN THE KNOW` email box a little shorter.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed. Python smoke check for mobile player padding/signup width, carousel reset CSS/JS markers, preserved Gallery mobile sizing, query-string-aware local asset references, and balanced CSS/JS braces passed.
- Follow-ups / TODOs: Browser-review the arrow-click animation on mobile; if any blink remains, inspect whether the browser is repainting the cloned audio controls rather than the card transitions.

## 2026-06-18 18:20

- What changed: Changed the Music carousel to rotate the real song cards directly instead of using temporary cloned song cards, while leaving Gallery on the clone-based loop, and widened the mobile landing signup box slightly.
- Why: The side-song blink persisted after transition suppression, suggesting the visible flash came from removing/replacing a cloned audio card at the end of the arrow animation. The signup box had been shortened too much.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed. Python smoke check for Music real-card rotation markers, widened mobile signup width, preserved Gallery mobile sizing, query-string-aware local asset references, and balanced CSS/JS braces passed.
- Follow-ups / TODOs: Browser-review the Music arrow animation; if any blink remains, inspect whether the audio control repaint itself needs a mobile-only simplified side-preview rendering.

## 2026-06-18 18:27

- What changed: Added a mobile-only landing `<picture>` source that uses `Graphics/Inertia Whim extended top bottom 9x16.png`, made the mobile tab bar ignore scroll-driven opacity/slide variables so it remains fixed and visible, widened the mobile signup box slightly, and restored the Music carousel to the same clone-loop sliding behavior used by desktop/Gallery.
- Why: The mobile landing needed the taller artwork, the tabs were disappearing while scrolling or after tab clicks, the signup width was slightly too narrow, and the Music carousel direct-rotation experiment made the arrow animation worse.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed. Python smoke check for the mobile landing picture source, fixed visible mobile tabs, restored desktop-style carousel loop, adjusted signup width, query-string-aware local asset references, and balanced CSS/JS braces passed.
- Follow-ups / TODOs: Browser-review the Music carousel arrow animation on mobile; include `Graphics/Inertia Whim extended top bottom 9x16.png` in any future GitHub push because it is now an active mobile asset.

## 2026-06-18 18:32

- What changed: Removed the mobile-only fixed/always-visible tab bar override and the mobile tab-button transform reset, while keeping the smaller centered mobile tab sizing.
- Why: The tabs should not appear on the landing page; mobile should inherit the desktop scroll/fade/sticky tab behavior and only differ in layout and sizing.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed. Python smoke check confirmed mobile tabs no longer force `position: fixed`, `opacity: 1`, or `transform: none`, mobile landing image references resolve, restored carousel loop markers remain present, and CSS/JS braces are balanced.
- Follow-ups / TODOs: Browser-review on mobile to confirm the tabs appear after scrolling past the landing page and then stick at the top like desktop.

## 2026-06-18 18:41

- What changed: Made mobile Music carousel cards use a constant card width like desktop, with center/side emphasis coming from scale only, and delayed the tab-bar outro fade until the outro section reaches the sticky tab boundary.
- Why: The mobile Music carousel blink was caused by switching the active card from a small side width to a larger center width after the slide reset. The tabs disappeared after Contact/Gallery clicks because the outro fade began too early on the shorter mobile scroll path.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed. Python smoke check confirmed constant-width mobile Music carousel markers, restored clone-loop markers, later tab outro fade, query-string-aware local asset references, balanced CSS/JS braces, and a 402px mobile geometry check with about 31.7px gap and 41.8px visible side preview.
- Follow-ups / TODOs: Browser-review on mobile; if the carousel still blinks, inspect whether audio control repainting rather than card sizing is causing the remaining flash.

## 2026-06-18 18:55

- What changed: Added an `is-moving` carousel state and made mobile Music card `transform` transitions run only during the active slide, not during the post-slide reset. Replaced tab click `scrollIntoView()` navigation with explicit `scrollTo(panelTop - tabHeight)` navigation.
- Why: The user-provided video/description showed the slide itself was correct but the card scaled again after the slide completed, meaning the reset class swap was still animating transforms. The tab loss after Contact/Gallery clicks was likely caused by section scrolling aligning the target under/above the sticky tab bar.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed. Python smoke check confirmed mobile Music transform transitions are limited to the moving state, tab-aware scroll navigation is present, query-string-aware local asset references resolve, and CSS/JS braces are balanced.
- Follow-ups / TODOs: Browser-review the recorded mobile scenario again; if a flash remains, the next step is to simplify side-preview audio controls during carousel movement.

## 2026-06-18 18:59

- What changed: Removed the tab bar's scroll-driven outro fade-out while keeping its landing-page fade-in.
- Why: After the carousel blink fix, the top tabs were disappearing during normal scrolling; the tab bar should appear after the landing page and then remain visible/sticky through the site.
- Files touched: `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed. Python smoke check confirmed tab opacity no longer depends on outro scroll progress, the carousel moving-state blink fix remains present, query-string-aware local asset references resolve, and CSS/JS braces are balanced.
- Follow-ups / TODOs: Browser-review mobile scrolling to confirm tabs remain visible after appearing.

## 2026-06-18 19:09

- What changed: Switched the mobile landing height/image height to `100dvh`, added a scroll-driven `has-entered-site` body class, and made the mobile tab bar fixed only after the landing transition completes, with added section padding to account for the fixed bar.
- Why: Mobile Chrome viewport changes were exposing a black strip below the landing image, and sticky tabs could move out of view after appearing. The requested behavior is landing-only without tabs, then fixed visible tabs once the site content is reached.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed. Python smoke check confirmed mobile dynamic viewport landing sizing, `has-entered-site` fixed tab behavior, preserved carousel moving-state blink fix, query-string-aware local asset references, and balanced CSS/JS braces.
- Follow-ups / TODOs: Browser-review mobile scroll from landing into Music and through Contact/Gallery to confirm the landing image no longer exposes black below it and tabs stay visible after appearing.

## 2026-06-18 19:15

- What changed: Activated `has-entered-site` as soon as the tab reveal begins instead of waiting for the reveal to complete, added a `visualViewport` resize listener for mobile browser chrome changes, and set the mobile landing section/image to explicit `height: 100dvh` in addition to `min-height`.
- Why: The first downward scroll still behaved like the old version, while subsequent scrolls were correct, indicating the entered-site state and viewport measurements were being initialized too late on first pass.
- Files touched: `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed. Python smoke check confirmed early entered-site activation, visual viewport resize tracking, explicit mobile `100dvh` landing sizing, preserved carousel moving-state blink fix, query-string-aware local asset references, and balanced CSS/JS braces.
- Follow-ups / TODOs: Browser-review the first scroll after a fresh reload specifically; compare it with scrolling back up/down to verify the two passes now match.

## 2026-07-15 13:29

- What changed: Updated the Gallery carousel to use the current files in `Pictures/`: `Michal.jpeg`, `Ophelia1.jpeg`, `Ophelia2.jpeg`, `Dani1.jpg`, `Dani2.jpg`, and `Tony1.png`.
- Why: The user replaced the gallery source images and wanted the website to use the current `Pictures/` folder contents instead of the old image filenames.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed all six current gallery images are referenced, old gallery image references were removed, and all local HTML asset references resolve.
- Follow-ups / TODOs: Commit and push the gallery reference update to GitHub if repository/network permissions allow.

## 2026-07-15 14:11

- What changed: Reordered the Gallery carousel to start with `Ophelia2.jpeg`, separated same-person photos so no adjacent or wraparound pair repeats the same person, made `Dani1.jpg` display with `object-fit: contain`, and slightly zoomed out `Ophelia1.jpeg` with a targeted contain/object-position rule.
- Why: The user wanted Ophelia 2 as the main gallery image, no same-person photos next to each other, Dani1's head not cut off, and Ophelia1 slightly less cropped.
- Files touched: `index.html`, `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed the gallery starts with Ophelia2, no adjacent repeated people including wraparound, Dani1 and Ophelia1 crop classes are present, all gallery files exist, and all local HTML references resolve.
- Follow-ups / TODOs: Browser-review the visual crop of Ophelia1; commit/push after the gallery order and crop look right.

## 2026-07-15 14:18

- What changed: Reordered the Gallery carousel to `Ophelia2`, `Michal`, `Tony`, `Dani2`, `Ophelia1`, `Dani1`.
- Why: The user wanted Tony as the third image and the two Dani images switched in order while keeping the no-same-person-adjacent arrangement.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed the requested order, no adjacent repeated people including wraparound, required crop classes remain on Ophelia1/Dani1, all gallery files exist, and all local HTML references resolve.
- Follow-ups / TODOs: Browser-review the Gallery carousel order and crop; commit/push once approved.

## 2026-07-17 16:16

- What changed: Replaced the Music bio copy with the new two-paragraph band description and changed the Tony Gallery image reference from `Tony1.png` to the newly added `Andonio1.jpg`.
- Why: The user wanted updated band copy and wanted the Gallery to use the new Tony/Antonio picture.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed the new bio text is present, the old bio text and `Tony1.png` reference are gone, `Andonio1.jpg` exists, Gallery order remains intact, no adjacent repeated people exist, and all local HTML references resolve.
- Follow-ups / TODOs: Confirm whether the source file should remain named `Andonio1.jpg` or be renamed to `Antonio1.jpg`; commit/push after approval.

## 2026-07-17 16:36

- What changed: Updated the bio paragraph selector from `p:last-child` to `p:not(.section-kicker)` so both bio paragraphs share the same styling, and added a targeted `gallery-image-tony` contain rule for the new Tony image.
- Why: Splitting the bio into two paragraphs made only the second paragraph match the old `p:last-child` selector, causing a font/size mismatch. The user also wanted the new Tony image zoomed out slightly.
- Files touched: `index.html`, `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed consistent bio paragraph selector, Tony image class and contain zoom rule, preserved gallery order/no-adjacent rule, all bio text, and all local HTML references resolve.
- Follow-ups / TODOs: Browser-review Tony's crop; commit/push after approval.

## 2026-07-17 17:01

- What changed: Added a minimal icon-only landing scroll button that scrolls to the Music section, and gave tab buttons fixed widths on desktop/mobile so `MUSIC`, `CONTACT`, and `GALLERY` read with more consistent visual weight.
- Why: The user wanted a clean cue that the landing page scrolls and wanted the shorter `MUSIC` tab not to appear visually larger than the other tab labels.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed. Python smoke check confirmed the landing scroll button markup/style/handler, fixed tab widths, preserved carousel moving-state fix, all local HTML references, and balanced CSS/JS braces.
- Follow-ups / TODOs: Browser-review the arrow placement and tab widths on desktop/mobile; commit/push after approval.

## 2026-07-17 17:09

- What changed: Adjusted the targeted Tony gallery image rule from full contain to a mild cover crop with `object-position: center 44%`.
- Why: The user wanted the new Tony image zoomed in slightly more than the prior fully contained version.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed the Tony image still uses its targeted class, the crop rule now uses `object-fit: cover`, and all local HTML references resolve.
- Follow-ups / TODOs: Browser-review the Tony image crop; adjust `object-position` if the face should sit higher/lower.

## 2026-07-17 17:31

- What changed: Adjusted the Tony gallery crop again from cover to contained image with `transform: scale(1.08)`.
- Why: The user wanted the Tony image a little more zoomed out than the cover crop, but not as small as plain contain.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed the Tony image uses its targeted class, the rule now uses contain with slight scale-up and centered positioning, and all local HTML references resolve.
- Follow-ups / TODOs: Browser-review the Tony crop; adjust the scale value if it should be slightly larger or smaller.

## 2026-07-18 14:39

- What changed: Replaced the Music carousel tracks with `Serpentine`, `Ghost`, `Leech`, `Limerence`, and `The Big Lonely` in that order. The first four use their matching new MP3 files, and `The Big Lonely` uses the existing `Demo 9 Dani - new structure.mp3`.
- Why: The user added new songs and wanted them to replace the old `Demo 33`, `Demo 11`, and `Demo 9` player lineup, with `Demo 9` renamed to `The Big Lonely`.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed the five requested songs are in order, all audio files exist, old song titles/audio references were removed from the player markup, and all local HTML references resolve.
- Follow-ups / TODOs: Browser-test audio playback for the new MP3s; commit/push after approval.

## 2026-07-25 14:38

- What changed: Updated the custom audio player's border radius to match the outer song card shape (`8px 28px 8px 28px`).
- Why: The user wanted the inner audio player to use the same shape as the outer song player box.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed `.custom-audio-player` and `.track-card` use the same border radius, the old pill radius is gone, and all local HTML references resolve.
- Follow-ups / TODOs: Browser-review the Music carousel cards to confirm the inner and outer shapes now feel consistent.

## 2026-07-25 14:43

- What changed: Updated the landing signup input group to use the same `8px 28px 8px 28px` shape as the song/player boxes, and set bio paragraphs plus the booking email to use the title font family without uppercase transformation.
- Why: The user wanted the `STAY IN THE KNOW` box to match the music player geometry, and wanted the descriptive/booking text to share the title font while preserving mixed-case copy.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed the signup box, song card, and audio player share the same radius; bio text and booking email use `var(--title-font)` with `text-transform: none`; and all local HTML references resolve.
- Follow-ups / TODOs: Browser-review the text readability and signup shape on desktop/mobile.

## 2026-07-25 14:50

- What changed: Linked the landing-page Instagram icon to `https://www.instagram.com/inertiawhim` and added safe new-tab attributes.
- Why: The user provided the official Instagram account link.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed the Instagram href, `target="_blank"`, `rel="noopener noreferrer"`, and all local HTML references resolve.
- Follow-ups / TODOs: Push the link update to GitHub when ready.

## 2026-07-25 15:07

- What changed: Bumped the `styles.css` and `script.js` cache-busting query strings to `20260725-1507`.
- Why: GitHub Pages/browser caching could keep serving the previous CSS/JS after the latest push.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed; Python smoke check confirmed the updated CSS/JS query strings are present and all local HTML references resolve.
- Follow-ups / TODOs: Commit and push this cache-buster update, then reload the GitHub Pages URL with a hard refresh.

## 2026-07-25 15:16

- What changed: Updated the Contact section management email and FormSubmit destination to `inertiawhim@gmail.com`.
- Why: The user requested the management email change.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed the old booking email was removed, the new visible `mailto:` link and FormSubmit action are present, and all local HTML references resolve.
- Follow-ups / TODOs: Commit and push the email update to GitHub when ready.

## 2026-07-25 15:20

- What changed: Narrowed the mobile bio typography override to `.bio-copy p:not(.section-kicker)`, explicitly kept the title font and mixed-case transform for the bio paragraphs, and bumped the CSS/JS cache query strings to `20260725-1519`.
- Why: The mobile bio paragraph was rendering with different typography than desktop, and the updated stylesheet needs to bypass browser/GitHub Pages caching.
- Files touched: `styles.css`, `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed; Python smoke check confirmed the mobile bio font rule, updated cache token, balanced CSS braces, and all local HTML references resolve.
- Follow-ups / TODOs: Commit and push the mobile font/cache update together with the pending management email change.

## 2026-07-25 16:00

- What changed: Added a site-served `@font-face` named `InertiaCopperplate` using `Fonts/COPRGTB.TTF`, made it the first `--title-font`, and bumped the CSS/JS cache query strings to `20260725-1559`.
- Why: Windows had the intended Copperplate font installed locally, while Mac/Android fell back to different fonts; serving the font file makes title/bio/contact typography consistent across devices.
- Files touched: `styles.css`, `index.html`, `Fonts/COPRGTB.TTF`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed; Python smoke check confirmed the local font file exists, the CSS `@font-face` references it, the cache token is updated, CSS braces are balanced, and all local HTML/CSS references resolve.
- Follow-ups / TODOs: Commit and push the new font file plus HTML/CSS/log updates; confirm font licensing is acceptable for public website embedding.

## 2026-07-25 16:05

- What changed: Switched the served Copperplate font from the bold file to the lighter `Fonts/COPRGTL.TTF`, mapped it across the title-font weight range, and bumped the CSS/JS cache query strings to `20260725-1604`.
- Why: The bold Copperplate file looked heavier than the Windows desktop rendering the user wanted to match.
- Files touched: `Fonts/COPRGTL.TTF`, `styles.css`, `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Copied `COPRGTL.TTF` from `C:\Windows\Fonts`; `node --check script.js` passed; Python smoke check confirmed the lighter font file is referenced, the bold file is no longer referenced by CSS, the cache token is updated, CSS braces are balanced, and all local references resolve.
- Follow-ups / TODOs: Browser-review the lighter font on Windows, Mac, and Android; push `Fonts/COPRGTL.TTF` with the HTML/CSS/log updates if it matches.

## 2026-07-25 16:10

- What changed: Switched the served `InertiaCopperplate` font back to `Fonts/COPRGTB.TTF` but kept it mapped across `font-weight: 400 900`, and bumped the CSS/JS cache query strings to `20260725-1609`.
- Why: The light Copperplate file was too thin, while the earlier bold attempt likely looked too heavy because `font-weight: 800` could synthesize extra weight on top of a single 700-weight face.
- Files touched: `styles.css`, `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed; Python smoke check confirmed the bold Copperplate file is referenced with the wider weight mapping, the light file is no longer referenced by CSS, the cache token is updated, CSS braces are balanced, and all local references resolve.
- Follow-ups / TODOs: Browser-review the contact heading/email against the Windows desktop reference; push `Fonts/COPRGTB.TTF` with the HTML/CSS/log updates if it matches.

## 2026-07-25 16:13

- What changed: Changed `InertiaCopperplate` to use `Fonts/COPRGTL.TTF` again, but exposed it only at `font-weight: 400` so the existing `font-weight: 800` CSS rules can synthesize the heavier Windows-like rendering; bumped the CSS/JS cache query strings to `20260725-1612`.
- Why: The true bold Copperplate face remained too thick, while the light face mapped across all weights remained too thin. The likely old Windows rendering was the light face with synthetic bolding.
- Files touched: `styles.css`, `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed; Python smoke check confirmed the light Copperplate file is referenced as a normal-weight face, the bold file is no longer referenced by CSS, the cache token is updated, CSS braces are balanced, and all local references resolve.
- Follow-ups / TODOs: Use Chrome DevTools Rendered Fonts on the old/live Windows page to confirm the exact resolved face if this still does not match.

## 2026-07-26 12:04

- What changed: Created optimized WebP copies for the active landing images, fixed background images, and Gallery photos under `Graphics/optimized/` and `Pictures/optimized/`; updated active HTML/CSS references to use those optimized images with original landing PNG fallbacks; bumped CSS/JS cache query strings to `20260726-1201`.
- Why: The site was still loading several large image files, especially Gallery photos and background art, and the user wanted the Foreign Logic-style optimized image format without visible quality loss.
- Files touched: `Graphics/optimized/`, `Pictures/optimized/`, `index.html`, `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pillow conversion created WebP assets, with examples including `Dani2.jpg` 15.77 MB to `dani2.webp` 0.34 MB and background WebPs reduced to 0.64 MB / 0.47 MB; `node --check script.js` passed; Python smoke check confirmed optimized WebP files are valid, active references/cache tokens are updated, CSS braces are balanced, and all local HTML/CSS references resolve. An initial reference-check script incorrectly split a normal `src` path containing spaces and was corrected/rerun successfully.
- Follow-ups / TODOs: Browser-review desktop and mobile image quality; push the optimized folders plus HTML/CSS/log updates if the quality looks right.

## 2026-07-26 12:55

- What changed: Added a root `CNAME` file containing `inertiawhim.com`.
- Why: The GitHub Pages custom domain works in the UI, and the repository should persist the custom domain across future pushes/deployments.
- Files touched: `CNAME`, `PROJECT_LOG.md`.
- Commands/tests run + results: PowerShell check confirmed `CNAME` contains exactly `inertiawhim.com`; `git status --short` confirmed the new domain file is untracked and unrelated local files remain separate.
- Follow-ups / TODOs: Commit and push `CNAME` plus the log entry; leave unrelated `set_directory_IW.R`, unused graphics trials, and unused `Fonts/COPRGTB.TTF` out of the commit unless intentionally needed.

## 2026-07-26 13:08

- What changed: Generated standard favicon files (`favicon.ico`, `Graphics/favicon-32x32.png`, and `Graphics/apple-touch-icon.png`) from the existing low-left patch artwork, and updated the HTML icon links with cache token `20260726-1308`.
- Why: The custom domain was working, but the browser tab icon was not appearing on `inertiawhim.com`; serving a root `/favicon.ico` plus explicit PNG links improves browser favicon discovery on the new domain.
- Files touched: `favicon.ico`, `Graphics/favicon-32x32.png`, `Graphics/apple-touch-icon.png`, `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pillow generated the favicon assets; Python smoke check confirmed the icon links, 32x32 and 180x180 PNG dimensions, root ICO presence, and all local HTML/CSS references resolve.
- Follow-ups / TODOs: Push the favicon files and HTML/log update, then clear/reload the favicon cache for `inertiawhim.com` if Chrome still shows the old blank icon briefly.

## 2026-07-26 14:00

- What changed: Connected the landing `STAY IN THE KNOW` signup box to the Brevo subscription form endpoint while preserving the existing Inertia Whim visual design; changed the email field to Brevo's `EMAIL` name, added Brevo hidden fields, submitted to a hidden iframe target, updated local feedback behavior, and bumped CSS/JS cache query strings to `20260726-1358`.
- Why: The user created a Brevo newsletter form for Inertia Whim and wanted the existing landing signup UI to collect newsletter signups managed in Brevo.
- Files touched: `index.html`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed; Python smoke check confirmed the Brevo action URL, POST method, `EMAIL` field, hidden fields, iframe target, updated cache tokens, balanced CSS/JS braces, and all local references resolve. An initial over-broad check for `event.preventDefault()` was corrected to inspect only the landing signup block.
- Follow-ups / TODOs: Browser-test one real signup after pushing to confirm the contact appears in the Brevo list; verify whether Brevo's confirmation/opt-in settings show the desired message/email.

## 2026-07-26 14:21

- What changed: Improved the landing signup feedback copy to `You're on the list. Check your inbox.`, styled it with the site title font, added a fade transition, auto-hid it after a few seconds, and bumped CSS/JS cache query strings to `20260726-1417`.
- Why: The Brevo signup worked, but the on-page thank-you message was too plain and stayed visible indefinitely.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed; Python smoke check confirmed the signup feedback styling/auto-hide markers, Brevo form wiring, updated cache tokens, balanced CSS/JS braces, and all local references resolve.
- Follow-ups / TODOs: Push the feedback refinement; customize the Brevo confirmation email template and sender/domain authentication in Brevo to reduce spam placement.

## 2026-07-26 14:47

- What changed: Changed the landing signup feedback text to `Thank you. You'll hear from us soon.`
- Why: The user preferred a warmer, simpler thank-you message while keeping the existing font and auto-hide behavior.
- Files touched: `index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Python smoke check confirmed the new message copy, Brevo form wiring, signup message styling/auto-hide markers, balanced CSS/JS braces, and all local references resolve.
- Follow-ups / TODOs: Push the copy update together with the existing newsletter feedback/style changes.

## 2026-07-27 13:40

- What changed: Switched the Contact form to FormSubmit's AJAX endpoint, added an inline contact-form status message, disabled the send button while a message is being submitted, and bumped the CSS/JS cache query strings to `20260727-1340`.
- Why: The user wanted visitors to stay on `inertiawhim.com` after sending a contact message instead of landing on FormSubmit's default thank-you page.
- Files touched: `index.html`, `styles.css`, `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` passed; Python smoke check confirmed the FormSubmit AJAX action, contact-form hooks/status element, cache tokens, balanced HTML parsing, and all local asset references resolve. A first naive asset-reference parser failed on a filename containing spaces and was corrected/rerun successfully.
- Follow-ups / TODOs: Push the contact-form AJAX update to GitHub, then submit one live contact-form test to confirm FormSubmit email delivery and inline success behavior.

## 2026-08-31 18:18

- What changed: Created a local-only `research/scene-and-venues/` research area with a 28-artist London shoegaze/post-punk/90s-alt comparison list, source/method notes, and a README explaining its privacy boundary. Added `research/` to `.gitignore`.
- Why: The user requested a ranked research base for comparable artists while keeping it out of the public Inertia Whim website/repository.
- Files touched: `.gitignore`, `research/scene-and-venues/README.md`, `research/scene-and-venues/bands-london.md`, `research/scene-and-venues/sources.md`, `PROJECT_LOG.md`.
- Commands/tests run + results: Web research of official/Bandcamp/label/press sources; local PowerShell validation passed: 3 research files exist, 28 ranked bands, 46 external links, documented ranking method, and `git check-ignore` confirms the research folder is ignored. The first validation regex did not use multiline mode and was corrected before the passing rerun.
- Follow-ups / TODOs: Review the band list; then research London venues and promoters using the listed artists' recent bills.

## 2026-08-31 18:32

- What changed: Reframed the band research around 20 local-to-medium, active-scene prospects; excluded Slowdive, Ride, The Horrors and other oversized references from the working rank. Added a private visual dashboard with filterable artist cards at `research/scene-and-venues/index.html`, plus `eligible-bands.md` as its concise research record.
- Why: The initial broad ranking mixed in large established acts and was not the practical peer/booking landscape the user wanted.
- Files touched: `research/scene-and-venues/README.md`, `research/scene-and-venues/bands-london.md`, `research/scene-and-venues/eligible-bands.md`, `research/scene-and-venues/index.html`, `research/scene-and-venues/sources.md`, `PROJECT_LOG.md`.
- Commands/tests run + results: Public streaming-result check confirmed a direct current signal for deary but showed that equivalent artist data was not reliably disambiguated for all artists. Local validation passed: dashboard JavaScript parses, 20 cards and three filters exist, the Markdown shortlist has 20 ranked artists and excludes Slowdive, and Git ignores the dashboard.
- Follow-ups / TODOs: Open the local dashboard in a browser and review the visual direction/ranking; then use the finalised shortlist to research London venues and promoters.

## 2026-08-31 18:42

- What changed: Replaced the dashboard's mixed strategy filters with clearly ordered size bands: `DIY & emerging`, `Developing`, and `Step-up`. Cards now show the visibility rank and size band separately from the practical booking-use label; updated the Markdown shortlist to match.
- Why: The former `peer`, `support/study`, and `scene lead` labels conflated artist scale with how useful an artist is for outreach, making the ranking unclear.
- Files touched: `research/scene-and-venues/index.html`, `research/scene-and-venues/eligible-bands.md`, `PROJECT_LOG.md`.
- Commands/tests run + results: Local validation passed: dashboard JavaScript parses, all three ordered size-band filters/card data are present, old mixed-purpose filters are absent, and the source shortlist contains all three bands.
- Follow-ups / TODOs: Review the new scale labels in the local dashboard; then research venues/promoters from the confirmed band set.

## 2026-08-31 18:55

- What changed: Removed the benchmark-reference banner from the private scene dashboard, including its unused styling.
- Why: The user found the banner visually unnecessary once the ranked shortlist had been refined.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Investigated public Instagram/Spotify metric retrieval. Instagram profile fetches were blocked by robots/rate limits, and generic Spotify results repeatedly resolved to unrelated artists, so no unverified counts were added. Local validation passed: the banner and its styling are absent and dashboard JavaScript parses.
- Follow-ups / TODOs: To add defensible follower/listener counts per artist, obtain an authorised/exported social or streaming analytics snapshot, or manually capture the current profile counts; then update the dated dashboard metrics in one batch.

## 2026-08-31 19:16

- What changed: Added a local-only `capture_scene_metrics.ps1` trial script intended to use the already installed Chrome browser in headless mode to screenshot selected public Instagram and Spotify artist profiles into the Git-ignored research folder.
- Why: The user requested an automated visual-capture alternative to manual collection of follower and listener metrics.
- Files touched: `research/scene-and-venues/capture_scene_metrics.ps1`, `research/scene-and-venues/screenshots/`, `research/scene-and-venues/browser-trial/`, `PROJECT_LOG.md`.
- Commands/tests run + results: Script launch was initially blocked by the system PowerShell execution policy; a one-process, non-persistent bypass reached Chrome. Chrome then failed before outputting a screenshot because its GPU process crashed. Edge was tested against `example.com`, first normally and then with an isolated profile plus software-rendering flags; both failed with the same GPU crash. No Firefox executable was installed in standard locations. No artist screenshot or metric was produced.
- Follow-ups / TODOs: Do not rely on local headless browser capture until the Windows Chromium GPU failure is resolved or a different browser/runtime is installed with approval. Use an authorised analytics source when available for the automated metric ranking.

## 2026-08-31 19:21

- What changed: Added a visible-session browser-capture trial script and hardened it to fail clearly if the interactive desktop is unavailable.
- Why: The user explicitly approved use of their visible logged-in Chrome session to automate profile screenshots after headless browsers failed.
- Files touched: `research/scene-and-venues/capture_visible_browser.ps1`, `research/scene-and-venues/screenshots/visible-deary-instagram.png`, `PROJECT_LOG.md`.
- Commands/tests run + results: The visible-capture trial opened Chrome but `CopyFromScreen` returned an invalid-handle error; the resulting screenshot was inspected and was entirely black. This confirms the command environment is isolated from the user's interactive desktop and cannot inspect the visible logged-in session. The script was amended to report that condition rather than saving a misleading screenshot; PowerShell AST parsing passed.
- Follow-ups / TODOs: Browser-session screenshot collection cannot be completed from this environment. A connected analytics provider/API remains the viable automated route for consistent popularity metrics.

## 2026-08-31 19:28

- What changed: Added `run_visible_capture_trial.cmd`, a double-clickable local trial launcher for the user to run in their own Windows desktop session. It calls the visible-browser capture script for deary's public Instagram and Spotify profiles and saves two screenshots in the private research folder.
- Why: The agent environment cannot access the user's interactive display, but the same script launched directly by the user should use their real logged-in browser session without manual transcription.
- Files touched: `research/scene-and-venues/run_visible_capture_trial.cmd`, `PROJECT_LOG.md`.
- Commands/tests run + results: Static validation passed: the launcher contains both expected profile URLs/output names and its non-persistent PowerShell policy bypass, the capture script parses, and Git confirms the launcher is ignored. The launcher was intentionally not executed from the isolated agent session.
- Follow-ups / TODOs: User should double-click the trial launcher and report whether the two visible screenshots are created; if successful, expand the launcher to the full artist shortlist.

## 2026-08-31 19:32

- What changed: Changed the visible-browser screenshot script from capturing the primary monitor to capturing the current foreground browser window via the Windows window rectangle API.
- Why: The user has two monitors; Chrome opened on the upper monitor while the original primary-monitor capture recorded the lower monitor.
- Files touched: `research/scene-and-venues/capture_visible_browser.ps1`, `PROJECT_LOG.md`.
- Commands/tests run + results: PowerShell AST validation passed; checks confirm the script uses `GetForegroundWindow`/`GetWindowRect` and no longer references `PrimaryScreen`. It was not run from the isolated agent environment because that cannot access the interactive desktop.
- Follow-ups / TODOs: User should rerun the double-click launcher with the intended Chrome page left in front; validate that each saved screenshot contains the browser window before expanding to all artists.

## 2026-08-31 19:37

- What changed: Confirmed the user-run foreground-window trial produced usable Instagram and Spotify screenshots; reduced the per-page wait from 8 to 5 seconds and added an active-tab `Ctrl+W` close after each successful capture.
- Why: The trial captures showed deary's public counts clearly (7,391 Instagram followers and 36,357 Spotify monthly listeners). The user wanted quicker capture and automatic cleanup of the tabs opened by the launcher.
- Files touched: `research/scene-and-venues/capture_visible_browser.ps1`, `research/scene-and-venues/run_visible_capture_trial.cmd`, `research/scene-and-venues/screenshots/visible-deary-instagram.png`, `research/scene-and-venues/screenshots/visible-deary-spotify.png`, `PROJECT_LOG.md`.
- Commands/tests run + results: Visual inspection confirmed the two profile captures are correct and readable. Static validation passed: the PowerShell script parses, active-tab closing is present, and both trial pages use a 5-second wait.
- Follow-ups / TODOs: User can rerun the launcher to confirm closing behavior; then expand the capture list to all shortlisted artists, using verified Spotify URLs where available.

## 2026-08-31 19:41

- What changed: Added `run_visible_capture_full.cmd` to automate a full first-pass capture: 15 confirmed Instagram profiles across the shortlist plus deary's verified Spotify profile. The launcher continues after individual failures and identifies the five artists whose Instagram handles still need verification.
- Why: The user approved expansion from the successful two-page trial to the comparable-band list without manual metric transcription.
- Files touched: `research/scene-and-venues/run_visible_capture_full.cmd`, `PROJECT_LOG.md`.
- Commands/tests run + results: Static validation passed: 16 configured captures (15 Instagram and 1 verified Spotify), all five unknown-handle artists are explicitly recorded, and Git ignores the launcher. It was intentionally not executed from the isolated agent session.
- Follow-ups / TODOs: User should run the full launcher locally, then the saved screenshots can be inspected and converted into a dated Instagram-based ranking. Verify additional Spotify profile URLs before adding their listener captures.

## 2026-08-31 19:49

- What changed: Hardened visible capture so it checks that the foreground process is Chrome or Edge before saving, preventing unrelated desktop captures. Replaced incorrect/inferred links with source-backed handles for Wyldest (`@wyldest`) and Hazy Waters (`@hazy.waters`); removed unverified Instagram links from the batch and dashboard. Deleted seven accidental RStudio screenshots with the user's explicit approval.
- Why: Review of the first full run found that several handle patterns led to unrelated/unavailable accounts, while Chrome losing focus caused unrelated screen content to be captured. The earlier handles were a mix of social links and unverified name-pattern inference; that inference was incorrect and is no longer used.
- Files touched: `research/scene-and-venues/capture_visible_browser.ps1`, `research/scene-and-venues/run_visible_capture_full.cmd`, `research/scene-and-venues/index.html`, `research/scene-and-venues/screenshots/`, `PROJECT_LOG.md`.
- Commands/tests run + results: Screenshot review confirmed usable figures for deary (7,392 Instagram followers; 36,357 Spotify monthly listeners) and The Youth Play (3,764 Instagram followers). Source research validated the corrected Wyldest/Hazy Waters handles. Local validation passed: foreground-browser guard parses, launcher contains only four validated Instagram profiles plus deary Spotify, dashboard JavaScript parses, and all seven approved accidental captures are absent.
- Follow-ups / TODOs: Rerun the tightened five-page launcher; then continue verified-handle discovery before attempting any full quantitative popularity ranking.

## 2026-08-31 19:51

- What changed: Replaced the immediate non-browser foreground failure with a browser-focus recovery path. The capture script now locates, restores, foregrounds and rechecks an open Chrome/Edge window before saving a screenshot.
- Why: The user requested that the launcher continue robustly when focus returns to another application rather than stopping the batch.
- Files touched: `research/scene-and-venues/capture_visible_browser.ps1`, `PROJECT_LOG.md`.
- Commands/tests run + results: PowerShell AST validation passed; source checks confirm the script includes browser-window restore, foreground recovery and a final browser-focus verification. User-side runtime verification is still required because the agent cannot access the interactive desktop.
- Follow-ups / TODOs: Rerun the five-page launcher in the user desktop session and confirm each image captures Chrome/Edge; then continue verified-handle discovery.

## 2026-08-31 20:15

- What changed: Reorganised the private scene research workspace into archive, data, docs, scripts, and verified/inbox screenshot areas. Replaced the static shortlist dashboard with a data-driven six-tab dashboard (Artists, Venues, Promoters, Labels, Network, Research Queue), seeded only with reviewed deary/The Youth Play captures and the user-supplied adele dazeem candidate. Added the research playbook and updated the visible-browser launcher to write new captures to the inbox.
- Why: Establish a clean, repeatable, evidence-led foundation for expanding into artists, venues, promoters, labels, and their relationships without hard-coding research into the page.
- Files touched: `research/scene-and-venues/README.md`, `index.html`, `data/scene-data.js`, `docs/RESEARCH_PLAYBOOK.md`, `scripts/capture_visible_browser.ps1`, `scripts/run_profile_capture.cmd`; earlier files moved to `archive/first-pass/`; valid captures moved to `screenshots/verified/`.
- Commands/tests run + results: PowerShell AST validation passed for the capture script. Structural smoke test passed for all required files, all six dashboard tabs, seed data, and launcher inbox path. `node --check` passed for `data/scene-data.js`.
- Follow-ups / TODOs: The execution environment blocked permanent recursive deletion, so the failed browser profile and rejected captures were moved to `archive/obsolete-browser-trial/` and `archive/rejected-captures/` rather than erased. Review Module 1 dashboard locally, then build the first source-backed London venue baseline.

## 2026-08-31 20:24

- What changed: Separated artist-card research confidence from artist scale in the local dashboard and added a persistent plain-language legend.
- Why: `verified-seed`/`candidate` describe whether research has been checked, while `developing`/`unassessed` describe scale; presenting them as equal tags made the distinction unclear.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Dashboard structural checks passed for the legend and all revised labels. The inline dashboard JavaScript parsed successfully with `node --check`.
- Follow-ups / TODOs: Proceed with the first source-backed London venue baseline after visual review of the updated cards.

## 2026-08-31 20:34

- What changed: Ingested the user's private `LONDON SCENE INFO.docx` as a clearly attributed, unverified local lead source: 28 London venue leads, 11 promoter leads, and a separate personal do-not-pursue list now render in their dashboard tabs. Updated the research queue to focus on verification rather than initial discovery.
- Why: The existing document contains substantial venue, promoter, contact, and bill knowledge and is a stronger starting point than rebuilding the same list from scratch.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`. The source `.docx` was read only and not modified.
- Commands/tests run + results: Parsed the source document read-only. Node data-load test passed with exactly 28 venue and 11 promoter leads plus 12 do-not-pursue entries. Inline dashboard JavaScript and venue/promoter render-path checks passed.
- Follow-ups / TODOs: Review the imported leads visually; then verify priority venues and promoters against current official pages/listings before treating contact routes or suitability as current facts.

## 2026-08-31 20:42

- What changed: Expanded the venue baseline via current official online sources. Updated existing Two Palms and The Victoria entries and added Paper Dress Vintage, Slim Jim’s Liquor Store, The Jago, Dalston Den, Strongroom Venue, The Moustache Bar, Servant Jazz Quarters, Signature Brew Haggerston, and Sebright Arms. Added a programming-cue field to venue cards and kept research provenance out of the visible dashboard.
- Why: The user correctly identified missing relevant London spaces and requested broader online discovery, rather than a dashboard limited to the existing document.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Official venue pages were researched. Initial validation caught a missing JavaScript array separator; this was corrected. Final validation passed: 37 venue leads, 11 checked online records, expected named additions present, and inline dashboard JavaScript parses.
- Follow-ups / TODOs: Continue the online discovery/verification pass in further London clusters; then use current bills to prioritise genre fit and derive promoter relationships.

## 2026-08-31 20:44

- What changed: Added the user-nominated Peckham/Soho/Hackney leads: Peckham Levels, Sucre, Peckham Audio, Colour Factory, Trisha’s, Gerry’s Club, and TOLA Peckham. Officially supported records are marked checked; Peckham Audio, Trisha’s, and Gerry’s Club remain visible as to-verify leads because their practical current booking/live-music route was not confirmed from an authoritative current source.
- Why: Expand the discovery set with the user's local knowledge while preserving the distinction between confirmed venue facts and promising leads.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue/contact pages where available. `node --check` passed; data-load validation passed with 44 venue leads, 15 checked online records, and all seven nominated venues present.
- Follow-ups / TODOs: Continue comprehensive venue discovery, then prioritise by real current bills and booking feasibility; verify the remaining user-nominated Soho/Peckham leads directly.

## 2026-08-31 20:45

- What changed: Added Folklore Hoxton as a checked grassroots live-music and performance venue lead, with its official contact page and a programming cue.
- Why: The user identified it as another relevant Hoxton venue; its official site confirms current emerging-performer and music/performance positioning.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched official Folklore Hoxton pages. `node --check` and targeted data-load validation passed; the venue list now contains 45 leads.
- Follow-ups / TODOs: Continue the area-by-area discovery and current-bill verification pass.

## 2026-08-31 20:53

- What changed: Reworked the venue schema and visible cards around booking utility: capacity, venue format, programming, route to a gig, best contact, separate venue/listings/contact links, and last-checked date. Venue names now link to the main venue page. Enriched 16 confirmed records with available structured information; all other fields visibly remain to confirm.
- Why: The user defined the information required to make the venue list actionable for booking rather than merely a discovery archive.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed for the data file and inline dashboard JavaScript. Schema validation passed with 16 enriched venue records; Colour Factory capacity/contact checks passed.
- Follow-ups / TODOs: Systematically enrich the remaining venue records, starting with capacity, listings link, programming from current bills, and actual booking route.

## 2026-08-31 20:58

- What changed: Removed the redundant `Venue` action from venue cards.
- Why: The venue title already links to its main page; the action area should contain only practical `Listings` and `Contact` routes.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Inline JavaScript parsed successfully; static checks confirm the redundant action is absent and the title, Listings, and Contact link behavior remains.
- Follow-ups / TODOs: Continue enriching the venue database.

## 2026-08-31 20:59

- What changed: Moved capacity into the venue detail list and placed Listings and Contact links directly alongside their corresponding labels. Removed the separate action strip from venue cards.
- Why: The user requested a denser, more intuitive card layout in which operational information and its action link sit together.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Inline dashboard JavaScript parsed successfully. Structural checks passed for detail-list capacity, listings, and contact links, and confirmed capacity is absent from the tag strip.
- Follow-ups / TODOs: Continue enriching the venue database.

## 2026-08-31 21:05

- What changed: Replaced research-provenance wording in visible venue contact rows with actionable labels: `Booking / contact page` or `No public booking contact found yet`.
- Why: Phrases such as “in user notes” described the research process rather than helping the user contact a venue.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Inline JavaScript parsed successfully; static checks confirm the contact-display normalization is present.
- Follow-ups / TODOs: Continue enriching the venue database with real named contacts and booking routes.

## 2026-08-31 21:09

- What changed: Used curated London grassroots-venue lists and official venue pages as discovery sources, then added Oslo Hackney, The Dome, New Cross Inn, and The Ivy House as checked venue records with practical route/listings/contact fields.
- Why: The user asked for a further online search and correctly anticipated that curated lists can reveal additional relevant venues beyond personal notes.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched curated lists and official venue pages. `node --check` passed; data-load validation passed with 49 venue leads and 20 checked online records.
- Follow-ups / TODOs: Use further curated feeds for additional candidates, checking each against current official pages before adding it as checked.

## 2026-08-31 21:13

- What changed: Enriched Water Rats, Half Moon Putney, and Dublin Castle from current official booking/listing information, and added Jamboree as a checked venue. Captured direct booking routes, current programming signals, listings links where available, and published capacity for Half Moon.
- Why: The user identified these as priority known venues; this is the more useful next step than adding names without practical routes.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official pages and direct booking resources. `node --check` passed; targeted validation passed for all four records. The database now contains 50 venue leads.
- Follow-ups / TODOs: Continue systematic enrichment/discovery; assess recent bills to assign a genuine Inertia Whim fit rather than relying on venue genre reputation.

## 2026-08-31 21:14

- What changed: Completed the first Camden/Islington discovery batch by adding The Garage (Highbury), The Fiddler’s Elbow (Camden), and The Black Heart (Camden) as checked records with current programming/listing routes and practical booking information where published.
- Why: Begin systematic geographic expansion of the venue map, prioritising currently active independent rooms with relevant rock/alternative programming.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue pages. `node --check` and targeted data-load validation passed: 53 venue leads, 27 checked online records.
- Follow-ups / TODOs: Continue the Camden/Islington pass with further confirmed rooms, or move to the next geographic cluster; begin cross-referencing current bills once the core venue network is sufficiently broad.

## 2026-08-31 21:18

- What changed: Added O2 Academy2 Islington as a distinct smaller upstairs room (separate from the main Academy) and expanded the Deptford/New Cross cluster with Amersham Arms, HOME Deptford, and Deptford Piehouse.
- Why: The user identified the practical smaller Academy2 room and approved continuation into the next geographic area.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched official venue/contact pages. `node --check` and targeted data-load validation passed: 57 venue leads, 31 checked online records; Academy2 capacity field is present.
- Follow-ups / TODOs: Continue south-east discovery (including current bills and remaining venues), then transition to systematic bill/promoter cross-referencing.

## 2026-08-31 21:20

- What changed: Continued south-east grassroots discovery by adding Fox and Firkin, The Birds Nest, The Royal Albert, and Jumbi Peckham as checked venue records with current contact/listings/programming details.
- Why: Broaden the map beyond the established New Cross/Deptford rooms into grassroots, community, and music-bar routes, while making their likely genre fit explicit.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue pages. `node --check` and targeted data-load validation passed: 61 venue leads, 35 checked online records.
- Follow-ups / TODOs: Finish south-east candidate coverage, then begin bill mining to identify relevant promoters and comparable local artists.

## 2026-08-31 21:21

- What changed: Upgraded the existing Shacklewell Arms lead to a checked Dalston grassroots live-music venue record, including its current listings, direct contact, and LNZRT programming relationship.
- Why: The user identified it as a priority Dalston venue; it was already present only as an unverified note-derived reference.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched official Shacklewell Arms pages. `node --check` and targeted data validation passed; 36 venue records are now checked.
- Follow-ups / TODOs: Continue venue coverage or start bill/promoter mining from the now-substantial checked venue set.

## 2026-08-31 21:23

- What changed: Completed a central/Soho discovery pass: enriched The Social, added The Lower Third and 100 Club, and clarified Gerry’s Club as a checked but impractical public-gig route. Retained Trisha’s as an unverified lead.
- Why: Expand the map with current central independent/music rooms while distinguishing a true bookable venue from a private members club with no recurring public music programme.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue pages and specifications. `node --check` and targeted data-load validation passed: 63 venue leads, 40 checked online records.
- Follow-ups / TODOs: Resolve Trisha’s only if a current public music/booking route is found; continue discovery in remaining geographic clusters or begin promoter extraction from checked venue bills.

## 2026-08-31 21:26

- What changed: Completed the initial Brixton/Clapham cluster: upgraded The Windmill and Hootananny from notes, and added Brixton Jamm and Effra Social as checked records. Each is labelled with a practical genre-fit caveat where its current programme is more club/DJ-led than guitar-band-led.
- Why: Continue geographic discovery while distinguishing core targets (especially Windmill) from active but more selective-fit venues.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue/listing/contact pages. `node --check` and targeted data-load validation passed: 65 venue leads, 44 checked online records.
- Follow-ups / TODOs: Continue outer/remaining London clusters, then pivot to bill mining and promoter extraction.

## 2026-08-31 21:29

- What changed: Completed an east-London enrichment batch. Upgraded MOTH Club from an old note to a checked record and added EartH, Cafe OTO, and The Waiting Room with current venue, listings, contact, capacity (where officially published), programme and gig-route fields.
- Why: These are significant active rooms around Hackney/Dalston/Stoke Newington, but have very different practical routes: LNZRT-programmed MOTH, promoter/hire-led EartH, highly specialist Cafe OTO, and direct-hire Waiting Room.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue/contact/listing pages. `node --check` passed; targeted data-load validation passed with 68 venue leads, 48 checked records, and all four enriched records containing venue, listing and contact routes.
- Follow-ups / TODOs: Continue the geographic discovery pass, then mine checked venue bills for promoters and local comparable artists.

## 2026-08-31 21:31

- What changed: Completed a Shoreditch/Whitechapel enrichment batch: upgraded existing Village Underground and The Old Blue Last leads, and added The George Tavern as a checked grassroots record.
- Why: These fill meaningful east-central gaps and make the practical distinction between a large promoter-led venue (Village Underground) and two 150-capacity direct-contact grassroots rooms.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, listing, contact and capacity pages. `node --check` passed; targeted data-load validation passed with 69 venue leads, 51 checked records, and all three records complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue remaining geographic coverage, then pivot to bill mining for promoters and comparable local artists.

## 2026-08-31 21:34

- What changed: Upgraded three north/Angel leads to checked records: The Lexington, The Finsbury, and Hope & Anchor. Added their current listings, direct contact routes, capacities where published, programme cues, and booking approach.
- Why: These are practical small-to-medium rooms with unusually clear entry routes: a named Lexington booker, Finsbury gig application/promoter route, and Hope & Anchor artist booking form.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue pages. `node --check` passed; targeted data-load validation passed with 69 venue leads, 54 checked records, and all three enriched records complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue the remaining geographic discovery pass, then start structured bill mining for promoters and comparable London artists.

## 2026-08-31 21:38

- What changed: Upgraded three west/south-west leads to checked records: The Bedford (Balham), Camden Assembly, and The Troubadour (Earl’s Court).
- Why: This completes practical booking information for active live-music spaces in those areas while flagging that The Bedford’s current mixed programme is a selective rather than core guitar-band route.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, event and booking pages. `node --check` passed; targeted data-load validation passed with 69 venue leads, 57 checked records, and all three enriched records complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue the remaining geographic discovery pass, then start structured bill mining for promoters and comparable London artists.

## 2026-08-31 21:41

- What changed: Added Grow, Hackney and HWK as checked Hackney Wick records with current event, contact and hire/proposal routes.
- Why: Grow is a credible community/DIY live-music option, while HWK is a promoter-led club/event option; both expand the Wick map without overstating guitar-band fit. The existing Beehive lead was not changed because current search did not establish a matching Stratford live-music venue.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue/event pages. `node --check` passed; targeted data-load validation passed with 71 venue leads, 59 checked records, and both new records complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue remaining geographic coverage, then start structured bill mining for promoters and comparable London artists.

## 2026-08-31 21:45

- What changed: Continued venue discovery by adding Walthamstow Trades Hall, Signature Brew Blackhorse Road, and The Cause (Canning Town) as checked records.
- Why: The user asked to continue venue expansion rather than pivoting to promoters. These add a genuine grassroots E17 room, an active music brewery with alternative/rock bills, and a significant east-London club/events venue while making their different programme fits clear.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, event and contact pages. `node --check` passed; targeted data-load validation passed with 74 venue leads, 62 checked records, and all three additions complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue systematic London venue discovery in further underserved geographic clusters before beginning promoter and artist bill mining.

## 2026-08-31 21:49

- What changed: Added the user-requested Electric Brixton and PizzaExpress Live, represented accurately as three separate rooms (Soho, Holborn and Chelsea), plus The Clapham Grand.
- Why: Continue expanding the London map rather than pivoting prematurely. Separate PizzaExpress records preserve their different locations and capacities; each venue is marked with an appropriate programme-fit caveat.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, private-hire, events and contact pages. `node --check` passed; targeted data-load validation passed with 79 venue leads, 67 checked records, and all five additions complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue broad London venue discovery in the next geographic cluster, then mine current bills for promoters and comparable artists.

## 2026-08-31 21:52

- What changed: Added four current specialist live-music venues: The Jazz Cafe, Green Note, Ronnie Scott’s, and 606 Club.
- Why: Continue broadening the London venue map while retaining useful genre-fit guidance. These are important rooms to know, but Green Note, Ronnie Scott’s and 606 Club are specialist routes rather than default full-band targets.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, event, hire and contact pages. `node --check` passed; targeted data-load validation passed with 83 venue leads, 71 checked records, and all four additions complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue broad London venue discovery, especially remaining south/east and outer-London independent spaces; then cross-reference current bills.

## 2026-08-31 21:55

- What changed: Added Bush Hall, The Tabernacle (Notting Hill), and O2 Shepherd’s Bush Empire as checked west-London records.
- Why: Continue geographic coverage with a clear scale distinction: Bush Hall is a 450-capacity independent grassroots hall; Tabernacle is a community arts/event space; Shepherd’s Bush Empire is a large promoter-led touring room.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, events, capacity, contact and hire pages. `node --check` passed; targeted data-load validation passed with 86 venue leads, 74 checked records, and all three additions complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue broad London venue discovery before switching to current-bill mining.

## 2026-08-31 21:59

- What changed: Confirmed that New Cross Inn was already a checked record, then expanded its surrounding south-east cluster with The Greyhound (Peckham) and Avalon Cafe (SE14).
- Why: Avoid duplicate venue records while continuing expansion. Both additions have direct current contact routes, but are labelled as underground/DIY and club-oriented rather than assumed full-band targets.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, event and contact pages. `node --check` passed; targeted data-load validation passed with 88 venue leads, 76 checked records, including the existing New Cross Inn and both additions.
- Follow-ups / TODOs: Continue broad venue discovery in another London cluster; then mine current bills for promoters and comparable artists.

## 2026-08-31 22:04

- What changed: Confirmed the user-supplied Signature Brew E8 Instagram refers to the existing checked Signature Brew Haggerston record. Added Troy Bar, Hoxton Hall, and Gigi’s Underbelly; upgraded The Stag’s Head from an unverified lead.
- Why: Continue Hoxton/Old Street discovery without duplicating the Signature Brew venue. Each new record captures its practical route and makes clear whether it is jam-led, community/hire-led, or club/event-led.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, event, capacity and contact pages. `node --check` passed. An initial targeted check incorrectly required a new capacity field on the pre-existing Signature Brew record; the corrected validation passed with 91 venue leads, 80 checked records, four completed Hoxton records, and Signature Brew Haggerston confirmed checked.
- Follow-ups / TODOs: Continue broad venue discovery in another London cluster; then mine current bills for promoters and comparable artists.

## 2026-08-31 22:09

- What changed: Added Big Penny Social and Exale Taproom as checked Walthamstow / Blackhorse Beer Mile venue records.
- Why: Continue broad venue discovery while distinguishing a large self-promoted/community events space from a smaller DJ-led brewery space. Mirth, Marvel & Maud was not added because it has been superseded by Soho Theatre Walthamstow.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, events and contact pages. `node --check` passed; targeted data-load validation passed with 93 venue leads, 82 checked records, and both additions complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue broad London venue discovery in an underserved cluster; then mine current bills for promoters and comparable artists.

## 2026-08-31 22:14

- What changed: Added The Birkbeck Tavern and The Red Lion Leytonstone as checked Leyton/Leytonstone records.
- Why: Continue geographic venue coverage with a genuine local-pub route and a larger ballroom/self-promoted-event option. Leyton Technical was deliberately excluded because its own site says it has changed hands and does not provide a dependable current music route.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, programme and contact pages. `node --check` passed; targeted data-load validation passed with 95 venue leads, 84 checked records, and both additions complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue broad London venue discovery in another underserved cluster; then mine current bills for promoters and comparable artists.

## 2026-08-31 22:17

- What changed: Made the venue grid five columns wide on desktop, with 4/3/2/1-column responsive fallbacks as the viewport narrows.
- Why: The user requested more venue cards per row without compromising readability on smaller screens.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Static layout smoke check passed: venue markup uses the dedicated grid and all five desktop / 4/3/2/1 responsive breakpoints are present.
- Follow-ups / TODOs: Continue broad London venue discovery in another underserved cluster; then mine current bills for promoters and comparable artists.

## 2026-08-31 22:21

- What changed: Changed the venue grid to four desktop columns and reduced only venue-card padding, title size, body size and tag size; all venue fields remain visible.
- Why: Five full-detail cards were too narrow and produced excessive wrapping in the user’s visual check.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Static layout smoke check passed: four desktop columns, compact venue-only typography, and 3/2/1 responsive fallbacks are all present.
- Follow-ups / TODOs: Continue broad London venue discovery in another underserved cluster; then mine current bills for promoters and comparable artists.

## 2026-08-31 22:29

- What changed: Audited all eleven remaining venue leads and upgraded TAM, The Blues Kitchen, LVLS, Upstairs at the Ritzy, 229 London, The Albany, Eastcheap Records, and Dream Bags Jaguar Shoes to checked records.
- Why: The user asked that existing unverified venues be researched before continuing discovery. The remaining three (The Beehive, Peckham Audio and Trisha’s) stay unverified because either the supplied identity is ambiguous or no current reliable official booking/programme evidence was available.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, listings and contact pages. `node --check` passed; targeted data-load validation passed with 95 venue leads, 92 checked records and eight completed upgraded records.
- Follow-ups / TODOs: Continue broad London venue discovery, starting with Bow/Mile End; revisit the three unresolved leads if stronger official evidence appears.

## 2026-08-31 22:34

- What changed: Added The Victoria, Dalston and The Heritage & Arts Centre Bow as checked records.
- Why: Continued discovery after the verification pass with two materially different missing routes: a strong grassroots indie room and a self-promoted/community-concert hire space.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, listings and contact pages. `node --check` passed; targeted data-load validation passed with 97 venue leads, 94 checked records and both additions complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue broad London venue discovery in the next underserved cluster; retain the three unresolved old leads until reliable official evidence appears.

## 2026-08-31 22:40

- What changed: Added four checked Tottenham/Haringey venues: The Victoria Tottenham, Karamel N22, UNIT 58 and Bernie Grant Arts Centre.
- Why: Continued systematic discovery using only venues with a current official programme or usable public booking route. The Post Bar was deliberately not added because its official current listing says the venue is closed.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, programme, hire and contact pages. `node --check` passed; targeted data-load validation passed with 101 venue leads, 98 checked records and all four additions complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue broad London venue discovery in another underserved cluster; retain the three unresolved old leads until reliable official evidence appears.

## 2026-08-31 22:47

- What changed: Added The Pelton Arms, Greenwich Theatre, Sugar Studios, and The Lower Deck as checked Deptford/Greenwich-area records.
- Why: Continued geographical discovery with a regular grassroots pub route, a professional theatre, a flexible 450+ live-gig space, and a 500-capacity multi-room concert venue.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, programme, hire and contact pages. `node --check` passed; targeted data-load validation passed with 105 venue leads, 102 checked records and all four additions complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue broad London venue discovery in another underserved cluster; retain the three unresolved old leads until reliable official evidence appears.

## 2026-08-31 22:52

- What changed: Added The Fighting Cocks, Ram Jam Records and Loud Lounge Kingston as checked Kingston records.
- Why: Continued geographic coverage with an alternative/rock grassroots room, an independent venue that openly accepts artist submissions, and a 150-capacity self-promoted-event option.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, programme and contact pages. `node --check` passed; targeted data-load validation passed with 108 venue leads, 105 checked records and all three additions complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue broad London venue discovery in another underserved cluster; retain the three unresolved old leads until reliable official evidence appears.

## 2026-08-31 23:00

- What changed: Added The Oval Tavern, The Front Room and Stanley Arts as checked Croydon-area records.
- Why: Continued the venue-only discovery process with one grassroots pub, one curated intimate room, and one larger multi-space arts venue.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Researched current official venue, programme and hire pages. `node --check` passed; targeted data-load validation passed with 111 venue leads, 108 checked records and all three additions complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue broad London venue discovery in another underserved cluster; retain the three unresolved old leads until reliable official evidence appears.

## 2026-08-31 23:06

- What changed: Added The Bull’s Head Barnes, Eel Pie Club, and The Eel Pie as checked Barnes/Twickenham records.
- Why: Continued west-London discovery with a dedicated jazz room, a rhythm-and-blues concert club, and a pub Music Room.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; targeted data-load validation passed with 114 venue leads, 111 checked records and all three additions complete for venue/listing/contact/capacity fields.
- Follow-ups / TODOs: Continue broad London venue discovery in another underserved cluster; retain the three unresolved old leads until reliable official evidence appears.

## 2026-08-31 23:10

- What changed: Added Woolwich Works as a checked record.
- Why: Continued discovery with an active multi-space contemporary music and performance venue with a clear hire route.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; targeted data-load validation passed with 115 venue leads and 112 checked records.
- Follow-ups / TODOs: Continue broad London venue discovery in another underserved cluster; retain the three unresolved old leads until reliable official evidence appears.

## 2026-08-31 23:15

- What changed: Added House of MOBO, The Rebel Inn and Crystal Palace Bowl as checked south-London records.
- Why: Continued broad discovery with two practical grassroots/community music routes and one clearly labelled large outdoor promoter/festival route.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; targeted data-load validation passed with 118 venue leads and 115 checked records.
- Follow-ups / TODOs: Continue broad London venue discovery in another underserved cluster; retain the three unresolved old leads until reliable official evidence appears.

## 2026-08-31 23:21

- What changed: Resolved the final three venue records: corrected The Beehive from Stratford to Bow/Bromley-by-Bow, and upgraded The Beehive, Peckham Audio and Trisha’s to checked with explicit evidence/contact limitations.
- Why: The user requested verification of every existing unverified venue before more discovery.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; data-load validation passed with 118 venue leads, 118 checked records, and no remaining unverified venue records.
- Follow-ups / TODOs: Resume new-venue discovery only after this completed verification pass; keep cautious contact/capacity wording for The Beehive, Peckham Audio and Trisha’s until directly confirmed.

## 2026-08-31 23:25

- What changed: Returned the venue directory to a three-column desktop grid, with slightly roomier cards and titles; retained two- and one-column responsive fallbacks.
- Why: Four full-detail cards became too narrow and tall to scan comfortably.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Static layout smoke check passed: three desktop columns and 2/1 responsive fallbacks.
- Follow-ups / TODOs: Resume broad London venue discovery when requested.

## 2026-08-31 23:40

- What changed: Added independent Area and Venue model dropdowns to the venue directory, with combined filtering and a live result count. Venue models are derived in the UI, leaving the research data unchanged.
- Why: The directory can now be narrowed by geography and by practical route-to-gig rather than only by venue format.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless interaction smoke test passed. East + Scene-led grassroots returned matching venues; all 8 area and 9 venue-model options have at least one result.
- Follow-ups / TODOs: Add and verify Spiritual Bar, Camden in a subsequent approved web-research update; refine individual model assignments when specific booking evidence is collected.

## 2026-08-31 23:48

- What changed: Reordered the venue filters so Venue model appears before Area.
- Why: The user prefers the practical gig-route filter to be the first decision point.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Static control-order smoke check passed.
- Follow-ups / TODOs: Review and refine venue-model assignments; decide whether to rebalance broad area labels before adding more venues.

## 2026-08-31 23:55

- What changed: Replaced the eight broad venue areas with 14 populated gig-circuit filters, including Camden, Dalston / Stoke Newington, Hackney / Hackney Wick, Shoreditch / Hoxton, Soho / West End, and Peckham / New Cross / Deptford.
- Why: The previous Central and East labels hid meaningful, distinct local gig circuits.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless filter smoke test passed: all 14 areas are populated and a combined Area + Venue model filter returned expected results.
- Follow-ups / TODOs: Refine individual venue-model assignments; add and verify Spiritual Bar, Camden in a subsequent approved web-research update.

## 2026-08-31 00:05

- What changed: Documented a repeatable London listings discovery feed in the research playbook.
- Why: Songkick and Bandsintown will provide the weekly candidate feed; DICE, Resident Advisor, Skiddle and Eventbrite are supplementary sources. Listings generate reviewable candidates, not silent verified records.
- Files touched: `research/scene-and-venues/docs/RESEARCH_PLAYBOOK.md`, `PROJECT_LOG.md`.
- Commands/tests run + results: Documentation presence check passed for the discovery-feed, source and cadence sections.
- Follow-ups / TODOs: Run the first candidate scan in an approved research batch, then verify selected leads through official pages.

## 2026-08-31 00:20

- What changed: Ran the first listings-platform candidate scan and recorded nine source-linked London venue leads separately from the checked directory.
- Why: Songkick, Bandsintown and official venue pages surfaced new opportunities without weakening the evidence standard for dashboard records.
- Files touched: `research/scene-and-venues/docs/LISTINGS_CANDIDATES_2026-08-31.md`, `PROJECT_LOG.md`.
- Commands/tests run + results: Candidate-batch documentation check passed for all nine leads; `data/scene-data.js` remained unchanged.
- Follow-ups / TODOs: Verify the strongest candidates (West Hampstead Arts Club, Next Door Records Two, Chats Palace and Spanners) before adding any to the venue directory.

## 2026-08-31 00:40

- What changed: Verified and added seven listings-discovered venues: West Hampstead Arts Club, Next Door Records Two, Chats Palace, Spanners, Club Cheek, The Star of Kings and Rough Trade Denmark Street. Updated the candidate batch to mark the first four as promoted.
- Why: Official venue pages and current listings established active programming and usable contact or hire routes, while remaining capacity and deal uncertainties are stated explicitly.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `research/scene-and-venues/docs/LISTINGS_CANDIDATES_2026-08-31.md`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; browserless validation passed with 125 checked venues and all seven additions rendering under their intended venue models.
- Follow-ups / TODOs: Continue verifying the five remaining candidates; use current listing pages to add dated activity, bill and promoter evidence to existing venue reviews without inferring booking terms.

## 2026-08-31 01:00

- What changed: Verified and added six further listings-discovered venues: CLF Art Lounge Pop Up, Stone Nest, AMP Studios, Shai Space, The Grace and Cart & Horses.
- Why: Official pages confirmed current programmes, capacities or practical contact/hire routes; each record is classified by the actual gig model rather than only its building type.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; browserless validation passed with 131 checked venues, including correct model/render checks for the six new records.
- Follow-ups / TODOs: Continue discovery in underrepresented circuits and verify remaining candidates such as Venue MOT and Cavendish Arms only when an official current route is found.

## 2026-08-31 01:20

- What changed: Added four current-listings-supported grassroots records: The Cavendish Arms, The Old Dispensary, The Dog & Bell and Venue MOT.
- Why: Current ticket/listings sources confirm active music programming; where no official artist-contact route is available, the record states that limitation instead of inventing one.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; browserless validation passed with 135 checked venues and expected models (Cavendish Arms is correctly hire-led, not merely a casual pub stage).
- Follow-ups / TODOs: Continue discovery in underrepresented circuits and seek official booking routes for the new source-reviewed records before treating them as priority targets.

## 2026-08-31 01:40

- What changed: Added The Blue Basement, The Carpet Shop and The Glove That Fits from the latest listings/official-source discovery pass.
- Why: The Blue Basement offers a documented 60-capacity selective label/store route; The Carpet Shop and The Glove That Fits extend coverage of DIY and promoter-led independent scenes.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; browserless validation passed with 138 checked venues and expected gig-model classifications.
- Follow-ups / TODOs: Continue the next listings scan in North-East and West London, and keep route/contact caveats explicit for promoter-led rooms.

## 2026-08-31 02:00

- What changed: Added St John’s Music Hall, Leytonstone and The Victoria, Walthamstow.
- Why: The first adds a 400-capacity specialist music room to North-East coverage; the second is an active small local concert lead with clearly marked contact uncertainty.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; browserless validation passed with 140 checked venues and expected model classifications.
- Follow-ups / TODOs: Continue discovery in West London and seek official booking routes for source-reviewed local pub leads.

## 2026-08-31 02:20

- What changed: Added The Underworld, Dingwalls, Electric Ballroom and The Camden Club; assigned their practical gig-route models in the venue UI.
- Why: Filled major Camden gaps, spanning an emerging-artist club, specialist alternative venue, multi-room step-up route and large established room.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless venue validation passed with 144 checked venues and the four additions rendered under their intended models.
- Follow-ups / TODOs: Continue discovery in West London and seek official booking routes for source-reviewed local pub leads.

## 2026-08-31 02:40

- What changed: Added Tropic at Ruislip, The Plough Northfields, St Mary’s Acton and North Acton Pavilion as checked West London-area venue records.
- Why: Extended coverage beyond the established West-London rooms with one recurring 300-capacity ticketed programme, a small regular pub stage, and two carefully labelled self-promoted/community concert options.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless venue validation passed with 148 checked venues and all four additions rendering under their expected models.
- Follow-ups / TODOs: Continue verified discovery in another underrepresented circuit; retain the explicit production, terms and suitability caveats on the new West London records.

## 2026-08-31 03:00

- What changed: Split the crowded `Peckham / New Cross / Deptford` filter into `Peckham / Rye Lane`, `New Cross / Deptford`, and `South-East London`; reordered the area dropdown geographically; corrected several area-mapping omissions.
- Why: A 20-venue catch-all was too broad for planning gigs, and Acton/Ealing/Ruislip plus several East and South venues had been falling into `North London` through the default mapping.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless area-filter validation passed: all 16 filters render in the intended geographic order, all are populated, and the 148 venue records map to the expected counts.
- Follow-ups / TODOs: Resume promoter verification, then cross-reference compatible promoters, labels and artists.

## 2026-08-31 03:15

- What changed: Replaced the artificial `South-East London` filter with `Peckham / Nunhead` and folded Elephant & Castle into `South London`; added dynamic venue-card ordering by practical venue-model priority.
- Why: Nunhead is a meaningful Peckham-adjacent circuit, whereas two unrelated leftovers were not. Sorting now updates automatically whenever a venue's model classification is corrected, without a separate manually maintained order.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless venue validation passed with 148 records, 15 populated geographic filters, correct revised area totals, and cards dynamically ordered from established through festival venue models.
- Follow-ups / TODOs: Resume promoter verification, then cross-reference compatible promoters, labels and artists.

## 2026-08-31 03:30

- What changed: Added a combined optional `Genre focus` venue filter with seven populated, evidence-led categories; broad or mixed-programme venues intentionally remain unclassified.
- Why: Genre is useful when it is a genuine programming focus, but should not force a misleading label on every venue. The interface only displays a genre category when at least one venue currently matches it.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless genre-filter validation passed: all seven listed genres have matching venues, 33 mixed-programme venues remain unclassified, and Area + Venue model + Genre focus have a confirmed combined match.
- Follow-ups / TODOs: Refine individual genre-focus classifications alongside the existing venue-model audit; resume promoter verification afterwards.

## 2026-08-31 03:45

- What changed: Split Blues from the previous Jazz / blues / soul genre filter; added Ain’t Nothin’ But as a checked dedicated Soho blues venue; reordered the desktop filter row to Area, Genre focus, Venue model.
- Why: Blues is a distinct scene and now has three genuine focused venues. The Genre control should sit immediately to the right of Area and remain on the same desktop row.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; browserless validation passed with 149 checked venues, three Blues matches, Ain’t Nothin’ But classified as Blues + specialist, and the intended three-control filter order/layout.
- Follow-ups / TODOs: Refine individual genre-focus classifications alongside the existing venue-model audit; resume promoter verification afterwards.

## 2026-08-31 04:00

- What changed: Reordered the venue controls to Area, Gig route, Genre; renamed `Venue model` to `Gig route` and shortened `Genre focus` / `All genre focuses` to `Genre` / `All genres`.
- Why: The revised labels describe a practical booking decision more plainly, and Genre now follows Gig route as requested.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless filter-label validation passed: all controls render in the intended order with `All areas`, `All gig routes`, and `All genres` defaults.
- Follow-ups / TODOs: Refine individual genre classifications and gig-route classifications alongside promoter verification.

## 2026-08-31 04:10

- What changed: Removed R&B from the Blues genre label; Blues is now labelled `Blues / blues-rock` only.
- Why: R&B is a distinct musical category and should not be implied by a Blues filter. It will remain absent until a genuinely R&B-focused venue is verified.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless Blues-filter validation passed with three focused Blues venues and no R&B wording under the Blues option.
- Follow-ups / TODOs: Decide the final plain-language label for the practical booking-route filter; refine individual genre classifications and gig-route classifications alongside promoter verification.

## 2026-08-31 04:15

- What changed: Renamed the middle venue filter from `Gig route` to `Venue type`, with `All venue types` as its default option.
- Why: The user preferred the simpler Venue type wording. The underlying dynamic classification, filtering and sorting behaviour is unchanged.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless filter-label validation passed: Area, Venue type and Genre render in the intended order.
- Follow-ups / TODOs: Refine individual venue-type and genre classifications alongside promoter verification.

## 2026-08-31 04:25

- What changed: Styled inline venue contact and listings links in a high-contrast warm pink, with a clear hover/focus state; retained lime for action links and cream for venue-title links.
- Why: Unstyled inline anchors were falling back to low-contrast browser blue on the dark venue cards.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Inline-link style validation passed; the warm-pink contact/listing rule, hover/focus rule and existing lime action-link rule are all present.
- Follow-ups / TODOs: Continue venue-type/genre refinement and promoter verification.

## 2026-08-31 04:55

- What changed: Reordered the dashboard tabs to start with Venues, added a Jam sessions tab after it, and moved Artists immediately before Network. Added eight currently evidenced jam/open-session records.
- Why: Jam sessions are a distinct practical route to meeting players and promoters. Each card records venue, recurring day/timing, genre, playing level and a cost only where confirmed.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; browserless jam-directory validation passed with eight records, valid venue references and level values, three confirmed cost flags, required entries rendered, and the requested tab order.
- Follow-ups / TODOs: Recheck Sucre and Upstairs at the Ritzy for a current recurring jam; identify Donut Jam's regular venue/frequency before adding it; add more verified open sessions.

## 2026-09-01 09:15

- What changed: Added combined Level and Genre filters to Jam sessions; added Vortex Jazz Club and Downstairs at 180 as checked venues; added Vortex Sunday/Midweek and Down With It! Tuesday jam records.
- Why: The jam directory can now be narrowed by playing context and genre, while each new session has a verified venue record and current recurring schedule.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; browserless validation passed with 151 venues, 11 jam sessions, populated Jazz/Blues/Soul-R&B/Reggae/Cross-genre filters, valid venue links and working dynamic Level + Genre filters.
- Follow-ups / TODOs: Recheck Sucre and Upstairs at the Ritzy for a current recurring jam; identify Donut Jam's regular venue/frequency before adding it; continue research for more verified recurring sessions.

## 2026-09-01 09:30

- What changed: Added MAP Studio Cafe as a checked venue and three recurring jam records: Grow Thursday Jazz Jam, Grow first-Sunday Not The Usual Jam, and Jazz at MAP every Sunday.
- Why: These sessions have current official pages with frequency, participation context and, where available, pricing. Portobello Sessions was not added because the accessible page showed an older date window rather than a current recurrence.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check` passed; browserless validation passed with 152 venues, 14 jam sessions, valid venue references, populated jam-genre filters and a working Cross-genre filter.
- Follow-ups / TODOs: Recheck Sucre and Upstairs at the Ritzy for a current recurring jam; identify Donut Jam's regular venue/frequency before adding it; continue research for more verified recurring sessions.

## 2026-09-01 10:00

- What changed: Added an Area filter to Jam sessions and added The Finsbury's recurring Dad's Mood is Bad open mic.
- Why: Jam geography now inherits from each linked venue, preventing it from drifting from the venue directory; the official Finsbury listings support the recurring first-Wednesday session and walk-in participation.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation passed with 152 venues, 15 sessions, a linked area for every session, and working combined Area + Level + Genre filtering. `git diff --check` reported only a pre-existing blank-line-at-EOF notice in `set_directory_IW.R`.
- Follow-ups / TODOs: Recheck Sucre and Upstairs at the Ritzy for a current recurring jam; identify Donut Jam's regular venue/frequency before adding it; continue research for more verified recurring sessions.

## 2026-09-01 10:20

- What changed: Added Staffordshire St as a checked venue plus Donut Jam; added Sucre's weekly Soho Live residency and Windmill Brixton's monthly No Frills Folk Club; added Folk / acoustic to the jam-genre filter. Corrected Troy Bar's Tuesday and Thursday cards to say they are singer-only open mics with a house band, and marked both Open.
- Why: The previously suggested sessions have now been checked against current organiser, venue or listing pages. The Troy wording now distinguishes singer-open-mic participation from the Wednesday general jam.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation passed with 153 venues and 18 sessions, valid venue areas, correct Folk classification, correct Troy singer-open-mic flags, and working combined filters. `git diff --check -- research/scene-and-venues/data/scene-data.js research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Find a current recurring source for Upstairs at the Ritzy, a specific Peckham Rye session, and the intended Hoxton session before adding them as current records.

## 2026-09-01 10:35

- What changed: Added The Jago's Taosol Jam as an every-other-Wednesday open session; renamed and reclassified Troy Bar's existing Hoxton Jam as the Open Jazz `Hoxton Jazz Jam`.
- Why: The Jago's current official listings and a recent profile confirm Taosol as an ongoing, inclusive jam series. The Troy session was already present but its old broad label obscured that it is the requested jazz jam.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation passed with 153 venues and 19 sessions, correct Jago/Hoxton genre and level classifications, and working combined filters. `git diff --check -- research/scene-and-venues/data/scene-data.js research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Find a current recurring source for Upstairs at the Ritzy, a specific Peckham Rye session, and any other intended Hoxton-area session before adding it as a distinct record.

## 2026-09-01 10:50

- What changed: Added The Haggerston as a checked venue and its Sunday Jazz Jam led by the Alan Weekes Jazz Quintet.
- Why: Current venue references continue to identify the long-running Sunday series; its late, standards-led, seasoned-player format is recorded as Advanced rather than a beginner open mic.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation passed with 154 venues and 20 sessions, correct Haggerston area/genre/level, and working combined Area + Level + Genre filtering. `git diff --check -- research/scene-and-venues/data/scene-data.js research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Find a current recurring source for Upstairs at the Ritzy and a specific Peckham Rye session before adding them as current records.

## 2026-09-01 11:00

- What changed: Made the Jam sessions cards sort by playing level: Professional, then Advanced, then Open.
- Why: The directory now starts with the highest-skill contexts, while preserving all existing session information for later audit.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless validation passed: full and filtered Jam views retain Professional → Advanced → Open ordering, and combined filters still work. `git diff --check -- research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Audit uncertain session details only when requested; find current recurring sources for Upstairs at the Ritzy and Peckham Rye.

## 2026-09-01 11:10

- What changed: Rewrote the scene-directory landing copy as a general public-facing London resource; removed the private/local-only framing; added an explicit Inertia Whim–adjacent scope note only within Artists.
- Why: The future repository is intended to serve general venue, jam, promoter and label research, while the artist list remains intentionally tailored to one musical lens.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless landing/Artists-copy validation passed, including the updated title, public directory metadata, removal of private/local-only wording and rendered artist-scope note. `git diff --check -- research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Review general site wording and whether the artist-card legend should move into the Artists tab when preparing the public repository.

## 2026-09-01 11:20

- What changed: Removed the global artist count and artist-card legend; added a compact artist-only guide inside Artists; renamed `Current scale` to `Scene position` in the guide and cards.
- Why: Artist research metadata was visually and conceptually out of place on venue and jam pages. The global header now remains neutral for the whole directory.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless validation passed: the header contains no artist-specific count/legend, Artists renders its own count, scope and definitions, and all card labels use `Scene position`. `git diff --check -- research/scene-and-venues/index.html` passed. Two initial test commands failed before evaluation because PowerShell stripped nested quote escapes; the simplified final command passed.
- Follow-ups / TODOs: Visually review the Artist-tab guide in the browser; audit uncertain session details only when requested.

## 2026-09-01 11:30

- What changed: Corrected the Soho Live at Sucre session to Advanced and Jazz / funk / soul; clarified its Thursday-and-Friday schedule and line-up check.
- Why: The user identified the former Professional classification as too high. Current official Sucre copy supports a Thursday-and-Friday weekly Soho Live residency, not the proposed third-Thursday pattern.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation passed with the corrected Advanced card and schedule rendered under the matching filter. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit at the user's direction.

## 2026-09-01 11:35

- What changed: Replaced the incorrectly conflated Soho Live residency record with the separate `Sucre Jam` record: second and fourth Thursday, Jazz / funk / soul, Advanced.
- Why: The user clarified that the target is a distinct jam rather than Sucre's weekly curated Soho Live residency.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed the old residency record is absent and Sucre Jam renders under Advanced. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit at the user's direction.

## 2026-09-01 11:45

- What changed: Replaced The Jago's Taosol Wednesday record with the regular Thursday Jam; The Jago now has exactly two listed jams, Sunday and Thursday.
- Why: The user clarified that the directory should record the venue's two regular jam routes. Current sources support the free Sunday session and a Thursday jam with £5 door entry.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed exactly two Jago sessions, Thursday's Advanced / £5 detail, and correct filtered rendering. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit at the user's direction.

## 2026-09-01 11:50

- What changed: Reclassified Sucre Jam and both The Jago sessions as Open; reclassified Troy Bar's Hoxton Jazz Jam as Advanced.
- Why: Applied the user's one-by-one assessment of the practical playing level at these sessions.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless level validation confirmed the three Open sessions and Advanced Hoxton Jazz Jam, including correct Open-filter output. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit at the user's direction.

## 2026-09-01 12:05

- What changed: Replaced the three-level Jam system with Professional, Confident / style-literate, Open and Beginner-friendly; reordered Jam filters to Day, Genre, Level and Area; added day derivation from session schedules.
- Why: The directory now separates explicitly entry-level sessions from general open participation and from genre-literate, non-professional playing contexts. The new filter order starts with the most immediate planning question: when the session occurs.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation passed with all four populated levels, no legacy Advanced values, Day → Genre → Level → Area rendering, valid combined filtering and correct schedule-derived days. `git diff --check -- research/scene-and-venues/data/scene-data.js research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit; capture Donut Jam's regular weekday if it becomes published.

## 2026-09-01 12:15

- What changed: Added Ain’t Nothin’ But’s Monday Blues Jam as a recurring Jam session.
- Why: Current Soho and venue-reference sources identify the Monday blues jam within the venue’s ongoing nightly blues programme. It is marked Confident / style-literate to reflect blues-specific playing context; the current exact start time needs checking on venue listings.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation passed with 154 venues, 21 sessions, correct Monday/Blues/Soho/level classification and working four-way filtering. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit; capture the current exact time for Ain’t Nothin’ But’s Monday jam and Donut Jam's weekday if published.

## 2026-09-01 12:20

- What changed: Renamed the Jam level `Confident / style-literate` to `Skilled` throughout session data, card tags, filter values, ordering and explanatory copy.
- Why: The shorter label retains the intended meaning while making filters and cards easier to scan.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed no legacy wording, valid four-level data and working Skilled filter output. `git diff --check -- research/scene-and-venues/data/scene-data.js research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit; capture the current exact time for Ain’t Nothin’ But’s Monday jam and Donut Jam's weekday if published.

## 2026-09-01 12:25

- What changed: Changed Hoxton Jazz Jam’s displayed genre from Jazz to Jazz fusion.
- Why: Applied the user’s more precise genre assessment while retaining the broader Jazz filter grouping.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed the Jazz fusion display, Skilled level and Jazz-filter membership. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 12:30

- What changed: Reclassified Vortex Jazz Club’s Midweek Downstairs Jam as Skilled, matching its Sunday Vortex Jam Session.
- Why: Applied the user’s assessment that both Vortex sessions require the same practical playing level.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; direct data validation confirmed both Vortex sessions are Skilled. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 12:35

- What changed: Reclassified both Vortex Jazz Club sessions and Down With It! at Downstairs at 180 as Professional; revised the Jam-level definition.
- Why: The user confirmed that these specialist jazz contexts should communicate a professional playing expectation even though participant sit-ins can be possible.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed the three Professional sessions and revised definition. `git diff --check -- research/scene-and-venues/data/scene-data.js research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 12:45

- What changed: Added The Grafton (Kentish Town) as a venue and moved the current Jazz at MAP listing to it as `Jazz at The Grafton`; reframed MAP Studio Cafe as the series' historic location.
- Why: The organiser's current ticket listings say that Jazz at MAP has moved its Sunday events to The Grafton. The previous fixed door time and price were not supported by the current organiser page, so they were removed.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed The Grafton venue, correct session linkage, rendered cards and removal of unsupported details. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Reassess whether the current Grafton series still includes a participatory jam when a fresh organiser listing states this explicitly.

## 2026-09-01 12:50

- What changed: Reclassified Ainâ€™t Nothinâ€™ Butâ€™s Monday Blues Jam as Open.
- Why: Applied the userâ€™s assessment of the sessionâ€™s practical participation level.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed the session is Open and appears under the Open filter. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 12:55

- What changed: Removed `Live jam /` from The Jago Sunday Jam genre description.
- Why: The wording was redundant because the record is already in the Jam sessions directory.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; direct data validation confirmed the revised description. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 13:00

- What changed: Added alphabetical session-name ordering within each Jam level.
- Why: Jam cards now group by practical level first, then remain easy to scan within each group.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless rendering validation passed, confirming level-priority order followed by alphabetical session names. `git diff --check -- research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 13:05

- What changed: Updated both The Jago jam-session links to the venue's What’s On page.
- Why: A current listings page is more useful than the landing page or obsolete event path for checking either session.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; direct data validation confirmed both Jago sessions use `https://www.thejagodalston.com/whats-on/`. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 13:10

- What changed: Reclassified Grow, Hackney's Jazz Jam with Stratos as Skilled.
- Why: Applied the userâ€™s assessment of the sessionâ€™s playing expectation.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; direct data validation confirmed the Skilled classification. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 13:15

- What changed: Updated the Sucre Jam card to link to Sucre's dedicated Downstairs live-music page.
- Why: The live-music page is a more relevant current route than the venue landing page.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; direct data validation confirmed the dedicated live-music URL. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 13:20

- What changed: Replaced the inferred first-Wednesday schedule for Dad’s Mood is Bad at The Finsbury with the confirmed Wednesday 2 September 2026 listing; added its 7–11pm time, message-for-a-slot route, solo/band eligibility and supplied drums/cymbals.
- Why: The user supplied the organiser’s event post, which gives a specific date and participation details but does not establish a monthly recurrence.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed the supplied details and Wednesday-filter rendering. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Capture a later organiser post before treating the Finsbury open mic as recurring.

## 2026-09-01 13:25

- What changed: Simplified the Dad’s Mood is Bad card back to the standard Jam-session format.
- Why: The card now retains only the date/time, generic open-mic genre, level and organiser link, matching the information density of other entries.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; direct data validation confirmed the simplified card fields. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Capture a later organiser post before treating the Finsbury open mic as recurring.

## 2026-09-01 13:30

- What changed: Moved The Haggerston from the Hackney / Hackney Wick filter group to Dalston / Stoke Newington, with precise card area `Dalston / Kingsland Road`.
- Why: It sits immediately beside The Jago on Kingsland Road, so separating them into different practical gig-circuit areas was misleading. The linked Haggerston jam inherits this correction.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless filtering validation confirmed both venues and the Haggerston jam appear under Dalston / Stoke Newington. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 13:35

- What changed: Corrected The Finsbury’s precise area to `Finsbury Park / Manor House` and assigned it to the North London filter group; added the linked venue’s precise area to every Jam card.
- Why: Manor House was incorrectly captured by the Dalston filter rule. Jam cards now make their physical location visible without requiring users to infer it from the venue title.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed Finsbury appears under North London but not Dalston, and every Jam card renders an area. `git diff --check -- research/scene-and-venues/data/scene-data.js research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 13:40

- What changed: Changed secondary Jam-card ordering from session name to card-title venue name.
- Why: Within each level, the directory now reads alphabetically by the visible main title, matching how cards are scanned.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless rendering validation confirmed level priority followed by alphabetical venue/card-title order. `git diff --check -- research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 13:45

- What changed: Split the aggregated Blues Kitchen record into Camden and Shoreditch venue records; added The Blues Kitchen, Shoreditch’s Sunday Jazz Jam.
- Why: Official venue listings confirm that both branches run distinct Sunday jams. Separate physical venue records make the Jam-area display and filters accurate.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed separate Camden/Shoreditch venue filtering plus the Shoreditch Jam card under Shoreditch / Hoxton. `git diff --check -- research/scene-and-venues/data/scene-data.js research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Add a distinct Blues Kitchen Brixton venue record when its current programme is reviewed; no regular Brixton jam was found in this pass.

## 2026-09-01 13:50

- What changed: Added a developer credit to the research dashboard footer: Daniele Colombo with the same obfuscated contact format used on the Inertia Whim site.
- Why: The directory now identifies its developer while avoiding a directly scrapeable email address.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Static markup validation confirmed the developer credit and existing evidence-first footer text. `git diff --check -- research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Continue the one-by-one jam-session audit.

## 2026-09-01 13:55

- What changed: Added Leo’s Red Lion in Northfleet / Gravesend, Kent to the Outer London group; removed the evidence-first footer statement, retaining only the developer credit.
- Why: The user wants London-adjacent destinations in scope. The old generic footer disclaimer no longer adds useful context to the public-facing directory.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed Leo’s record, Outer London filtering and the revised footer. `git diff --check -- research/scene-and-venues/data/scene-data.js research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Continue expanding London-adjacent destinations only where they remain practical for the directory.

## 2026-09-01 14:00

- What changed: Reworded Dad’s Mood is Bad’s schedule as `Occasional Wednesdays — check Instagram for the next date.`
- Why: A single dated post should not be presented as a normal recurring-session schedule; the new wording preserves discoverability without implying a fixed cadence.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed the revised wording and Wednesday-filter visibility. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Replace the occasional wording only if the organiser establishes a stable recurrence.

## 2026-09-01 14:05

- What changed: Simplified Dad’s Mood is Bad’s schedule text to `Occasional Wednesdays`.
- Why: The user requested a cleaner card without an instructional follow-up phrase.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; direct data validation confirmed the concise schedule. `git diff --check -- research/scene-and-venues/data/scene-data.js` passed.
- Follow-ups / TODOs: Replace the occasional wording only if the organiser establishes a stable recurrence.

## 2026-09-01 14:10

- What changed: Added Saturday Blues Jam at TAM, Friends of Music and Life Jam Session at SET Social, and The Saturday Jam at Fabwick; added SET Social, Fabwick and The Ned as venue records.
- Why: The Saturday additions fill the directory’s prior Friday/Saturday research gap. The Ned’s current official programme supports programmed live music but not a participatory jam, so it is venue-only.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed all three Saturday sessions, no The Ned Jam record, correct Saturday filtering and The Ned’s central-London grouping. `git diff --check -- research/scene-and-venues/data/scene-data.js research/scene-and-venues/index.html` passed.
- Follow-ups / TODOs: Verify the Fabwick session directly with the venue/organiser if a first-party listing becomes available; research distinct Friday sessions next.

## 2026-09-01 14:15

- What changed: Corrected TAM's location to Elephant and Castle only; removed redundant `Free` cost labels from SET Social and Fabwick; added TAM's current listed starting price to its Blues Jam card.
- Why: TAM's former Canary Wharf site is closed, while the active TAM and its Saturday Blues Jam are at Mercato Metropolitano, Elephant and Castle. Jam cards should show costs only when attending requires payment.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending the data and rendering validation for this edit.
- Follow-ups / TODOs: Recheck the TAM Eventbrite price if its ticket tier changes.

## 2026-09-01 14:16

- What changed: Completed validation for the TAM location and Jam cost-label correction.
- Why: The first assertion had an escaping error and was rerun with a literal-string check.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; direct data validation confirmed TAM is Elephant and Castle, its Jam includes the 5.04 starting price, and no Jam record retains a redundant `Free` cost label. `git diff --check -- research/scene-and-venues/data/scene-data.js PROJECT_LOG.md` passed (Git emitted only its standard line-ending warning).
- Follow-ups / TODOs: Recheck the TAM Eventbrite price if its ticket tier changes.

## 2026-09-01 14:20

- What changed: Added The Broadcaster in White City and its Stonemountain Collective Jam, plus NYJO @ Levels Open Jam at Peckham Levels.
- Why: Friday was incorrectly blank in the Jam directory. Multiple current Stonemountain listings establish a first-Friday recurring musician jam; Peckham Levels describes NYJO's first-Friday monthly residency as ending in an open jam.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending data and browserless filter validation.
- Follow-ups / TODOs: Check each NYJO edition's current listing before attending, as the guest, time and ticket price vary.

## 2026-09-01 14:21

- What changed: Completed validation for the Friday venue and Jam additions.
- Why: The entries need to be discoverable through the Friday filter and linked to the correct physical venues.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; direct data validation confirmed both Friday Jams, The Broadcaster's White City location, Stonemountain's unflagged cost and NYJO's ticketed status. The Friday filter now has 2 sessions; the directory has 161 venues and 27 Jam sessions. `git diff --check -- research/scene-and-venues/data/scene-data.js PROJECT_LOG.md` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Check each NYJO edition's current listing before attending, as the guest, time and ticket price vary.

## 2026-09-01 14:25

- What changed: Reworded the NYJO @ Levels Jam schedule to state its actual format: a 45-minute NYJO set followed by an open jam on the first Friday of the month.
- Why: This is clearer and follows the event description the user supplied.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending data validation.
- Follow-ups / TODOs: Confirm a current NYJO edition when one is listed, as this source describes the March residency.

## 2026-09-01 14:26

- What changed: Finalised and validated the NYJO @ Levels schedule wording as `First Friday of every month — NYJO musicians and a guest artist, followed by an open jam`.
- Why: The source explicitly establishes the monthly series and its performance-then-jam format; the obsolete instruction to check current listings was removed.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; direct validation confirmed the old wording is absent and the monthly-series wording is present. `git diff --check -- research/scene-and-venues/data/scene-data.js PROJECT_LOG.md` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Confirm a current NYJO edition when one is listed, as this source describes the March residency.

## 2026-09-01 14:30

- What changed: Reclassified NYJO @ Levels Open Jam and Stonemountain Collective Jam from Skilled to Open.
- Why: Neither source establishes a minimum playing threshold; each explicitly presents a broad participatory jam route.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending data validation.
- Follow-ups / TODOs: Apply a Skilled label only where the organiser establishes a genuine minimum musical or style-specific expectation.

## 2026-09-01 14:31

- What changed: Completed validation for the Friday Jam reclassification.
- Why: The level filters must reflect the revised evidence standard consistently.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; direct validation confirmed both Stonemountain Collective Jam and NYJO @ Levels Open Jam are `Open`. `git diff --check -- research/scene-and-venues/data/scene-data.js PROJECT_LOG.md` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Apply a Skilled label only where the organiser establishes a genuine minimum musical or style-specific expectation.

## 2026-09-01 14:35

- What changed: Split the Jam genre filter into `Jazz` and `Jazz fusion / nu-jazz`.
- Why: Straight-ahead jazz sessions are materially different from sessions built around jazz blended with funk, soul, R&B, hip-hop, Afrobeat or contemporary/creative styles.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending genre-classification validation.
- Follow-ups / TODOs: Keep cross-genre sessions distinct unless their published format establishes a stronger jazz-fusion identity.

## 2026-09-01 14:36

- What changed: Completed validation for the new Jazz genre split.
- Why: The filters need to place straight-ahead and jazz-adjacent sessions in their intended distinct categories.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless JavaScript validation passed: Ronnie Scott's and Vortex classify as Jazz; Troy Bar Hoxton, Orii, Sucre, Stonemountain and NYJO classify as Jazz fusion / nu-jazz; the new filter label renders. `git diff --check -- research/scene-and-venues/index.html PROJECT_LOG.md` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Keep cross-genre sessions distinct unless their published format establishes a stronger jazz-fusion identity.

## 2026-09-01 14:40

- What changed: Added separate venue records for The Piano Works, Covent Garden and The Piano Works, Farringdon.
- Why: The two branches have distinct physical locations but the same house-band request format. They are relevant live-music venues, not participatory Jam-session entries or ordinary artist-submission targets.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending data and area-filter validation.
- Follow-ups / TODOs: Add a Jam record only if either branch publishes a genuine musician sit-in or open-jam format.

## 2026-09-01 14:41

- What changed: Completed validation for both Piano Works branch records.
- Why: Each record must be discoverable under the correct practical area and must not be mistaken for a Jam or ordinary band-submission route.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed both records, Covent Garden under Soho / West End, Farringdon under Islington / King’s Cross, and the house-band/non-jam distinction. The venue directory now contains 163 venues. `git diff --check -- research/scene-and-venues/data/scene-data.js PROJECT_LOG.md` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Add a Jam record only if either branch publishes a genuine musician sit-in or open-jam format.

## 2026-09-01 14:45

- What changed: Made the Jam genre classifier prioritise explicit cross-genre/open-format labels over secondary instrumentation words.
- Why: Grow's Not The Usual Jam is an electronic and acoustic improvisation session with an explicitly cross-genre format; it should not appear in Folk / acoustic simply because its description includes `acoustic`.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending filter validation.
- Follow-ups / TODOs: Apply genre labels according to the session’s stated format rather than individual instruments or supporting descriptors.

## 2026-09-01 14:46

- What changed: Completed validation for the revised Not The Usual Jam genre classification.
- Why: The Cross-genre filter must capture explicit cross-genre Jam descriptions before the acoustic fallback is considered.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless JavaScript validation confirmed Grow's Not The Usual Jam classifies as Cross-genre. `git diff --check -- research/scene-and-venues/index.html PROJECT_LOG.md` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Apply genre labels according to the session’s stated format rather than individual instruments or supporting descriptors.

## 2026-09-01 14:50

- What changed: Added White City to the West London area-map rule.
- Why: The Broadcaster's precise area is White City, which previously missed every explicit match and incorrectly fell into the North London default.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending area-filter validation.
- Follow-ups / TODOs: Audit newly added venue areas against the fallback group whenever a card appears geographically implausible.

## 2026-09-01 14:51

- What changed: Completed validation for White City's West London mapping.
- Why: The venue and its linked Jam must appear in the appropriate practical area filter.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: Browserless JavaScript validation confirmed The Broadcaster at White City maps to West London. `git diff --check -- research/scene-and-venues/index.html PROJECT_LOG.md` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Audit newly added venue areas against the fallback group whenever a card appears geographically implausible.

## 2026-09-01 14:55

- What changed: Removed the historical MAP Studio Cafe relocation note from the Grafton Jam card and renamed the Jazz-adjacent filter to `Nu-jazz / fusion`.
- Why: The card should state only the currently actionable schedule information, and the revised genre label is shorter and more natural.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending wording and filter-label validation.
- Follow-ups / TODOs: Verify whether Jazz at The Grafton is participatory before relying on it as a Jam-session lead.

## 2026-09-01 14:56

- What changed: Completed validation for the Grafton wording and Nu-jazz / fusion filter-label changes.
- Why: These are visible directory labels and must render without retaining the removed historical wording.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; direct validation confirmed the MAP Studio Cafe wording is absent and the `Nu-jazz / fusion` label is present. `git diff --check -- research/scene-and-venues/data/scene-data.js research/scene-and-venues/index.html PROJECT_LOG.md` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Verify whether Jazz at The Grafton is participatory before relying on it as a Jam-session lead.

## 2026-09-01 15:05

- What changed: Moved `archive/` and `screenshots/` out of `research/scene-and-venues` to `research/_local-archive/scene-and-venues`.
- Why: The private GitHub repository is intended to contain the live directory source only. The moved material is preserved locally without duplicating it or including the old browser-profile archive in the repository.
- Files touched: directory move only; `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; repository-content smoke check confirmed the live source is self-contained and the archive material is outside it.
- Follow-ups / TODOs: Initialise `research/scene-and-venues` as the standalone private Git repository and push it from the user's normal PowerShell environment.

## 2026-09-01 15:15

- What changed: The user initialised and pushed `research/scene-and-venues` as the private GitHub repository `colombodaniele/london-live-music-intelligence`.
- Why: The live directory is now independently versioned without including the parent Inertia Whim site or locally archived browser/research material.
- Files touched: local Git metadata within `research/scene-and-venues`; `PROJECT_LOG.md`.
- Commands/tests run + results: User ran `git init`, added only `index.html`, `README.md`, `data`, `docs` and `scripts`, committed the initial directory, renamed the branch to `main`, and pushed it to `origin/main`. Their final `git status` reported a clean working tree and the branch is up to date with `origin/main`.
- Follow-ups / TODOs: Keep the repository private until a deliberate access-controlled hosting approach is selected.

## 2026-09-01 15:20

- What changed: Added The Muddy Puddle in Stoke Newington and its two weekly El Charquito Lounge Jam sessions, on Thursday and Sunday.
- Why: The current official venue programme confirms both recurring sessions, their 4–11pm hours, open all-instruments/all-levels/all-genres format, and £5 entry.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending venue/Jam/filter validation.
- Follow-ups / TODOs: Push this post-initial-commit update to the private repository when ready.

## 2026-09-01 15:21

- What changed: Completed validation for The Muddy Puddle venue and El Charquito Thursday/Sunday Jam additions.
- Why: The entries need to inherit the correct Stoke Newington area and be discoverable as Open, Cross-genre sessions with their published entry fee.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check research/scene-and-venues/data/scene-data.js` passed; browserless validation confirmed the venue maps to Dalston / Stoke Newington, is classified DIY / community, and has exactly two Open cross-genre Jam records on Thursday and Sunday. The directory now has 164 venues and 29 Jam sessions. `git -C research/scene-and-venues diff --check` passed; the standalone repo correctly reports only modified `data/scene-data.js` and `index.html` awaiting the next commit.
- Follow-ups / TODOs: Push this post-initial-commit update to the private repository when ready.

## 2026-09-01 15:35

- What changed: Added the verified missing Jam batch: Ronnie Scott’s Vocal Jazz Jam; Dancefloor Education; The Hum’s Gypsy Jazz Night; Toulouse Lautrec’s four-week Tuesday cycle; Skehan’s Tuesday trad and Wednesday South London Jam; Jazz on the Lane at Ninety One; and The Cavern Freehouse’s Bluesday Jam. Added Bricks, The Hum, Toulouse Lautrec, Skehan’s, Ninety One Living Room and The Cavern Freehouse as venue records.
- Why: A focused current-source sweep identified several active recurring sessions absent from the directory. The Toulouse rotation is represented as separate cards because its genre changes by Tuesday-of-month.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; browserless validation confirmed all six venues and eleven Jam records, every Jam’s venue link, Raynes Park’s Outer London grouping, Skehan’s Nunhead grouping, and Toulouse Funk’s Nu-jazz / fusion classification. Directory totals: 170 venues, 40 Jam sessions. `git diff --check` passed; source repo has only the expected modified `data/scene-data.js` and `index.html` files awaiting commit.
- Follow-ups / TODOs: Confirm the current edition details for Jazz on the Lane before attending; its monthly recurrence and ticketing are listing-dependent. Push this accumulated update to the private repository when ready.

## 2026-09-01 15:40

- What changed: Made Jazz on the Lane’s female-instrumentalist and singer participation focus explicit in its visible genre field.
- Why: The gender-specific participation route is a material part of choosing the right Jam and should not be hidden in the schedule text.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending data validation.
- Follow-ups / TODOs: Confirm the current edition details for Jazz on the Lane before attending; its monthly recurrence and ticketing are listing-dependent.

## 2026-09-01 15:41

- What changed: Completed validation for Jazz on the Lane’s visible participation eligibility.
- Why: The female-instrumentalist and singer focus must appear on the card itself, not only in its schedule text.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct data validation confirmed the visible genre field includes the eligibility wording. `git diff --check` passed (standard Git line-ending warnings only).
- Follow-ups / TODOs: Confirm the current edition details for Jazz on the Lane before attending; its monthly recurrence and ticketing are listing-dependent.

## 2026-09-01 15:45

- What changed: Reclassified Toulouse Lautrec’s New Orleans and Funk Jam sessions from Open to Skilled; Latin and Blues remain Open.
- Why: The user judges the New Orleans and Funk formats to require stronger genre fluency, despite the venue’s broad participation invitation.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending Jam-level validation.
- Follow-ups / TODOs: Revisit the Latin Jam’s practical level separately if needed.

## 2026-09-01 15:46

- What changed: Completed validation for the Toulouse Lautrec Jam level changes.
- Why: The directory needs to preserve the user’s style-fluency distinction across the four rotating Tuesday sessions.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct validation confirmed New Orleans and Funk are Skilled, while Latin and Blues remain Open. `git diff --check` passed (standard Git line-ending warnings only).

## 2026-09-01 16:05

- What changed: Replaced the four Toulouse Lautrec Jam cards' generic ticketing note with their current terms: musicians are free with a bar purchase and audience tickets are £12. Linked each card to its individual official session page. Added Kennington to the South London area rule.
- Why: The exact musician/audience terms are more actionable than a generic ticketing label. Kennington was missing from the practical-area matcher, which made Toulouse Lautrec Jams fall into the North London fallback instead of South London.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Pending data syntax and area/filter validation.
- Follow-ups / TODOs: Recheck Toulouse Lautrec prices if the venue changes its Jam policy.

## 2026-09-01 16:25

- What changed: Restored the visible Instagram glyph on the Inertia Whim landing page as an intentionally non-clickable, labelled icon. Split the London directory's Artists view into Influences and London scene; the existing three practical records now live in `localArtists`, while `influences` is an empty curated-reference collection ready for future additions.
- Why: The social icon should remain part of the landing composition without sending visitors to the account. Influence references should not be confused with local peers or practical outreach leads.
- Files touched: `index.html`, `styles.css`, `research/scene-and-venues/index.html`, `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; Artist-view data/interface smoke check passed. Inertia Whim inactive-Instagram smoke check passed; `git diff --check` passed for both scoped site changes (standard line-ending warnings only).
- Follow-ups / TODOs: Add influence records only when their reference role is stated (sound, songwriting, production, live energy or visual direction).

## 2026-09-01 16:35

- What changed: Added four missing active live-music venues from the user's autumn 2026 listings: The Slaughtered Lamb, The Star (Shoreditch), House of Ora (TRAM), and The Castle (Whitechapel). Retained the existing single Hope & Anchor and Amersham Arms records. Added practical area matching for Barbican / Clerkenwell and Tooting.
- Why: The repeated listing dates establish active live-music programming, while contact, capacity and direct booking routes remain appropriately marked To verify until confirmed from a first-party source.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct validation confirmed exactly one record for all six named venues and correct mapping for Barbican / Clerkenwell, Tooting Broadway and Whitechapel. Directory total: 174 venues. `git diff --check` passed (standard line-ending warnings only).
- Follow-ups / TODOs: Verify public venue/listings/contact pages for the four new leads before treating them as direct booking routes.

## 2026-09-01 16:45

- What changed: Populated the Artists > Influences view with ten artist references in broad popularity order: The Cure, Depeche Mode, Beach House, Slowdive, My Bloody Valentine, Cocteau Twins, Ride, DIIV, Blonde Redhead and Soviet Soviet. Added local letter-mark icon tiles and concise reference tags; updated the standalone directory README to document the separate influence/local-artist collections.
- Why: Influences should be visually distinct from practical London-scene leads and should work from local files without fragile hotlinked artist photography.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `research/scene-and-venues/README.md`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct validation confirmed the ten records, exact rank order and required visual metadata; static UI validation confirmed the dedicated influence-card renderer and visual mark styles. `git diff --check` passed (standard line-ending warnings only).
- Follow-ups / TODOs: Replace the broad popularity ordering with dated platform metrics if a metrics-based ranking becomes necessary.

## 2026-09-01 16:55

- What changed: Simplified the Influence cards to artist names only; removed visible popularity labels, descriptive tags and local letter-mark icons while preserving the chosen underlying order.
- Why: These are well-known reference artists, so the extra explanatory material was unnecessary. The cards are now intentionally ready for a future approved image-background treatment.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct validation confirmed ten minimal influence records and absence of the removed UI elements; `git diff --check` passed (standard line-ending warnings only).
- Follow-ups / TODOs: Decide whether artist images should be externally referenced or supplied as licensed local press images before adding them.

## 2026-09-01 17:10

- What changed: Added a reusable optional image field for artist cards and populated the ten Influence cards with public band-photo sources delivered through 960×640 WebP resize URLs. Cards now lazy-load and asynchronously decode their background image behind a contrast-preserving overlay; the same field can be used for local-scene artists later.
- Why: Full-card imagery gives the Influence view a stronger visual identity without shipping full-resolution source files. The fixed derivative dimensions and lazy loading limit payload and defer off-screen image work.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `research/scene-and-venues/README.md`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct validation confirmed ten optimised delivery URLs and required lazy-loading/background-layer markers; `git diff --check` passed (standard line-ending warnings only). A direct remote-fetch check could not run because the web sandbox rejected the resize URL as unsafe, so browser visual verification remains needed.
- Follow-ups / TODOs: If the image CDN or a public source becomes unavailable, replace that artist's image URL with an approved local press asset under `assets/artists/`.

## 2026-09-01 17:35

- What changed: Added David Bowie, Deftones, Queens of the Stone Age, Nine Inch Nails, Black Rebel Motorcycle Club and Failure to the Influence collection, and completed public-image delivery records for all sixteen Influence cards.
- Why: The user expanded the reference set and wanted every card to receive the same optimised visual treatment rather than falling back to a plain name card.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct validation confirmed all six additions, an image delivery record for every one of the sixteen Influence artists, and contiguous hidden ordering ranks. `git diff --check` passed (standard line-ending warnings only).
- Follow-ups / TODOs: Browser-check the resulting crops and set artist-specific `object-position` values if any portrait framing needs adjustment.

## 2026-09-01 17:50

- What changed: Added Placebo and The Smashing Pumpkins to the Influence collection and completed optimised image-delivery records for both, bringing the image-backed Influence total to eighteen.
- Why: The user expanded the reference set and wanted these cards to retain the same visual treatment as the existing influence artists.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct validation confirmed both new artists have optimised delivery URLs and that all eighteen Influence records are image-backed. `git diff --check` passed (standard line-ending warnings only).
- Follow-ups / TODOs: Review crops visually in the browser and replace third-party source imagery with approved local press photos if the directory is published widely.

## 2026-09-01 18:05

- What changed: Added Lush, The Jesus and Mary Chain, Joy Division, Drab Majesty, Just Mustard, Mogwai and Verdena to the Influence collection, with an optimised image-delivery record for every new card.
- Why: The additions extend the reference set through classic and contemporary shoegaze, dream-pop, post-punk, darkwave and textural alternative music. Just Mustard is included as a non-London contemporary influence, rather than a practical local-scene lead.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct validation confirmed 25 influence records, all seven additions and their image delivery URLs, and unique hidden ranks. `git diff --check -- data/scene-data.js` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Review the seven new image crops in the browser and replace any unsuitable third-party source image with an approved local press photo before a broad public release.

## 2026-09-01 18:15

- What changed: Made each Influence artist name a visually unchanged link to its Spotify search result and reordered the cards into a core shoegaze/post-punk/dream-pop/alternative group followed by adjacent references, with each group broadly ordered by current public profile.
- Why: The cards now provide an immediate listening route without adding visible metadata, while the sequence better reflects the practical musical reference set.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Static dashboard-script validation passed; it confirmed the Spotify link template, a zero-decoration influence-link override, and an exact, unique 25-record display order. `git diff --check -- index.html` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: The ordering is intentionally a broad profile judgement rather than a dated platform-metric table; replace it with recorded Spotify/Instagram snapshots if a numerical ranking is needed later.

## 2026-09-01 18:20

- What changed: Added Swervedriver as an image-backed Influence card and placed it in the core shoegaze/alternative ordering between Lush and Verdena.
- Why: Swervedriver belongs with the first reference group and should follow the same broad public-profile ordering logic as the other classic shoegaze acts.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct validation confirmed 26 records, Swervedriver's optimised image, and its intended position in the complete unique display order. `git diff --check -- data/scene-data.js index.html` passed (standard Git line-ending warnings only).
- Follow-ups / TODOs: Review the new Swervedriver image crop in the browser before public release.

## 2026-09-01 18:25

- What changed: Moved Mogwai and Black Rebel Motorcycle Club into the core shoegaze/alternative reference group. Moved The Smashing Pumpkins, Placebo, Joy Division and Verdena into the later adjacent-influence group, retaining broad public-profile ordering within each group.
- Why: The group boundary should reflect musical fit to the Inertia Whim reference direction, rather than only broad alternative-rock lineage.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Static dashboard-script validation confirmed all 26 influence IDs are present exactly once, Mogwai and BRMC are before the core-group boundary, and the four requested later references are after it. `git diff --check -- index.html` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Replace broad profile order with dated platform metrics only if a numerical, auditable ranking is later required.

## 2026-09-01 18:30

- What changed: Added The Stone Roses as an image-backed Influence card, positioned in the first core group between Beach House and My Bloody Valentine.
- Why: Their alternative and dreamy guitar lineage makes them a relevant core reference for the collection.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct validation confirmed 27 complete Influence records, The Stone Roses image delivery URL, and the intended core-group order. `git diff --check -- data/scene-data.js index.html` passed (standard Git line-ending warnings only).
- Follow-ups / TODOs: Review the Stone Roses crop in the browser before public release.

## 2026-09-01 18:35

- What changed: Reordered the later Influence group to David Bowie, Joy Division, Nine Inch Nails, Placebo, Queens of the Stone Age and The Smashing Pumpkins, then retained Deftones, Verdena and Failure in their prior relative sequence.
- Why: The visible reference flow now matches the user's intended musical sequence.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Static dashboard-script validation confirmed the exact requested later-group sequence and a complete, unique 27-record display order. `git diff --check -- index.html` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: No new follow-up beyond the existing image-crop browser review.

## 2026-09-01 18:40

- What changed: Reordered the core Influence group to begin The Cure, My Bloody Valentine, Slowdive, Depeche Mode, Cocteau Twins and Beach House, then retain the existing sequence for all remaining artists.
- Why: The opening cards should foreground the most central references to the intended shoegaze/dream-pop direction.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Static dashboard-script validation confirmed the exact six-artist opening and a complete, unique 27-record display order. The first overly strict test pattern was corrected and rerun successfully. `git diff --check -- index.html` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: No new follow-up beyond the existing image-crop browser review.

## 2026-09-01 18:45

- What changed: Swapped Mogwai and The Stone Roses in the core Influence display order while leaving all other positions unchanged.
- Why: The reference sequence needed this precise adjustment.
- Files touched: `research/scene-and-venues/index.html`, `PROJECT_LOG.md`.
- Commands/tests run + results: Static validation confirmed Mogwai now occupies the former Stone Roses position, Stone Roses occupies the former Mogwai position, and all 27 IDs remain complete and unique. `git diff --check -- index.html` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: No new follow-up.

## 2026-09-01 18:50

- What changed: Added Bird On The Wire as a checked independent concert promoter / producer, plus Menaura and Neighbour Club as checked London-scene artist leads. Added targeted queue items for their remaining label, touring and metric checks.
- Why: Bird On The Wire is a London-rooted independent promoter with a substantial curated concert and festival programme. Menaura's official streaming/Bandcamp routes confirm its London shoegaze/art-rock profile; current coverage and Instagram confirm Neighbour Club as an active London indie band.
- Files touched: `research/scene-and-venues/data/scene-data.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct validation confirmed all three records, Menaura's Spotify artist route, Neighbour Club's Instagram route, and Bird On The Wire's category/contact. Directory totals are now five local artists and twelve promoters. `git diff --check -- data/scene-data.js` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Capture Neighbour Club's direct Spotify artist ID and meaningful metrics; verify both artists' current label and touring scope.

## 2026-09-01 19:00

- What changed: Added a reversible References tab to the Inertia Whim site, rendered from the new `influences.js` dataset as a fixed-height visual carousel of 27 image-backed reference artists. Added a second `© 2026 Inertia Whim` beneath the closing initials logo. Restored the inactive Instagram glyph's dark-blue hover treatment without making it clickable.
- Why: The public band site can now communicate its sonic world without exposing internal London-scene research or adding a long scrolling page. The carousel reuses the established gallery interaction and keeps the change isolated for easy removal.
- Files touched: `index.html`, `styles.css`, `influences.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check influences.js` and `node --check script.js` passed. Static validation confirmed four matching tabs/panels, the closing copyright, the inactive Instagram hover rule, the renderer script and all 27 influence records. `git diff --check -- index.html styles.css influences.js` passed (standard Git line-ending warnings only).
- Follow-ups / TODOs: Open the local site and visually review the References carousel, mobile four-tab fit, image crops and closing-logo copyright placement before publishing. To revert References, remove the labelled References button/panel and `influences.js` script tag, then delete `influences.js` only after explicit approval.

## 2026-09-01 19:10

- What changed: Replaced the temporary fourth References tab with an `Influences` trigger inside the Music copy. It opens the same 27-card deck in a modal overlay with Close, Escape-native dialog support and click-outside close behaviour; the original three-tab scroll flow is restored.
- Why: References should be an optional moodboard, not another scroll destination or persistent section in the public band-site navigation.
- Files touched: `index.html`, `styles.css`, `influences.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check influences.js` and `node --check script.js` passed. Static validation confirmed exactly three matching navigation tabs/panels, no References element in the scroll/tab flow, complete dialog controls/interaction markers, and retained copyright/Instagram-hover changes. `git diff --check -- index.html styles.css influences.js` passed (standard Git line-ending warnings only).
- Follow-ups / TODOs: Open the local site and review the modal at desktop and mobile widths. To remove it, delete the labelled Music trigger, modal markup and `influences.js` script tag; delete `influences.js` only after explicit approval.

## 2026-09-01 19:20

- What changed: Kept the References eyebrow plus Influences heading, and corrected the modal card layout so each reference card owns a fixed 16:10 frame; images now fill that frame with `object-fit: cover` regardless of active or neighbouring carousel position.
- Why: “Influences” is the appropriate public-facing term for an intentional artistic reference set, while “similar artists” would imply an algorithmic comparison. The fixed card frame prevents the enlarged centre card from becoming visually taller or clipping its title.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check influences.js` and `node --check script.js` passed. CSS/static validation confirmed the fixed 16:10 card frame, full-frame cover crop and References/Influences terminology pairing. `git diff --check -- styles.css influences.js index.html` passed (standard Git line-ending warnings only).
- Follow-ups / TODOs: Open the local modal once more to visually confirm the crop framing at the user's desktop and mobile viewport sizes.

## 2026-09-01 19:30

- What changed: Added a 280ms fade/lift opening animation to the Influences modal, with a reduced-motion override. Made all reference images responsive through 960px and 1600px WebP derivative candidates, with the browser selecting the appropriate source for the card size and display density.
- Why: The deck should feel intentionally opened rather than appearing abruptly. The enlarged desktop card can require more than a 960px source on high-density displays; responsive candidates improve sharpness without eagerly loading the larger derivative for every card.
- Files touched: `influences.js`, `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check influences.js` and `node --check script.js` passed. Static validation confirmed 27 unchanged reference records, responsive 960w/1600w source sets, the opening keyframes and the reduced-motion override. `git diff --check -- influences.js styles.css` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Visually identify any card that remains soft after the higher-resolution source loads; those need a better original press image, since resizing cannot restore detail absent from the source.

## 2026-09-01 19:40

- What changed: Slowed the Influences-deck opening animation to 460ms and added a 380ms matching fade/downward close animation. Close button, backdrop click and Escape now all run the same exit lifecycle; reduced-motion still closes immediately.
- Why: The deck should feel deliberate both entering and leaving, rather than only animating on entry.
- Files touched: `influences.js`, `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check influences.js` and `node --check script.js` passed. Static validation confirmed the revised timing, close keyframes/class lifecycle, Escape interception and reduced-motion fallback. `git diff --check -- influences.js styles.css` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Visually review the new open/close pacing locally and adjust timing only if it feels too slow in the browser.

## 2026-09-01 19:45

- What changed: Increased the Influences-deck opening animation from 460ms to 520ms while retaining the 380ms close timing. Added proportionally smaller title type and inset for neighbouring carousel cards, keeping their titles visible while more closely preserving the active card's line breaks.
- Why: The user wants side-card titles retained, but without long names wrapping into conspicuously more lines than when the same card is centred.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check influences.js` and `node --check script.js` passed. Static validation confirmed the 520ms opening, unchanged 380ms close, and scaled side-title rule. `git diff --check -- styles.css influences.js` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Visually review a long title such as Queens of the Stone Age in centre and side positions; tune the 70% type scale slightly only if its line break still differs at the target viewport.

## 2026-09-01 19:50

- What changed: Increased the Influences-deck opening animation to 600ms, leaving its 380ms closing animation unchanged.
- Why: The opening should feel slightly more spacious while retaining the established close response.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check influences.js` and `node --check script.js` passed. Static validation confirmed the 600ms opening and unchanged 380ms closing timing. `git diff --check -- styles.css influences.js` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: No new follow-up.

## 2026-09-01 20:00

- What changed: Increased the Influences-deck opening animation to 700ms and added a `references-open` body class that locks background scrolling from open until the close animation finishes.
- Why: The modal should preserve the underlying page position and behave as a self-contained reference deck rather than allowing the page beneath to drift.
- Files touched: `influences.js`, `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check influences.js` and `node --check script.js` passed. Static validation confirmed the 700ms opening, add/remove body-class lifecycle, scroll-lock CSS and unchanged landing reveal markers (1.25s delay; 1.1s duration). `git diff --check -- styles.css influences.js` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Browser-check the scroll lock while opening and closing the modal at desktop and mobile widths.

## 2026-09-01 20:05

- What changed: Increased the Influences-deck opening animation to 900ms, leaving its 380ms close animation and scroll lock unchanged.
- Why: The user prefers a slower, more atmospheric opening pace.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check influences.js` and `node --check script.js` passed. Static validation confirmed the 900ms opening and unchanged 380ms close timing. `git diff --check -- styles.css influences.js` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: No new follow-up.

## 2026-09-01 20:15

- What changed: Made the desktop Music carousel calculate its card width from its live viewport so three cards and their two gaps fit exactly; mobile removes the inline sizing and retains its prior responsive preview layout.
- Why: The previous fixed desktop card width left residual space, which exposed a fourth-song sliver on only the right at the initial infinite-carousel position.
- Files touched: `script.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check script.js` and `node --check influences.js` passed. Static validation confirmed the exact three-card formula, mobile fallback and resize resync. `git diff --check -- script.js` passed (standard Git line-ending warning only).
- Follow-ups / TODOs: Browser-check the Music shelf at the target desktop width and once after resizing the browser window.

## 2026-09-01 20:25

- What changed: Added a compact mobile Influences trigger, border-box modal sizing, a non-squeezing mobile header/close arrangement, and a high-specificity mobile carousel override that keeps the reference shelf within the dialog rather than inheriting page-wide carousel geometry.
- Why: Mobile review showed an oversized trigger plus clipped title/cards caused by the global mobile carousel's `100vw` width and negative margins overriding the dialog base rule.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check influences.js` and `node --check script.js` passed. Static validation confirmed compact trigger styling, dialog containment, dialog-local carousel grid and mobile header containment. `git diff --check -- styles.css influences.js index.html script.js` passed (standard Git line-ending warnings only).
- Follow-ups / TODOs: Reopen the modal at the same narrow mobile viewport to visually confirm the title, close button and carousel now fit within the dialog.

## 2026-09-01 20:30

- What changed: Removed the forced near-full-screen height from the mobile Influences dialog, allowing it to fit its header and carousel content; added a viewport-height safety cap.
- Why: Mobile review showed a large unused black area underneath the reference card.
- Files touched: `styles.css`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check influences.js` and `node --check script.js` passed. Static validation confirmed the compact mobile dialog sizing and viewport guard. `git diff --check -- styles.css influences.js index.html script.js PROJECT_LOG.md` passed (standard Git line-ending warnings only).
- Follow-ups / TODOs: Visually reopen the deck on mobile to confirm the compact panel height is preferred.

## 2026-09-01 20:40

- What changed: Made the mobile Influences dialog explicitly content-sized with no minimum height, stabilised its two-row layout, delayed carousel measurement until the native dialog has laid out, and matched the mobile Influences/Close controls' type and dimensions.
- Why: The deck still showed unused height and its opening card could be measured slightly off-centre.
- Files touched: `styles.css`, `influences.js`, `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check influences.js` and `node --check script.js` passed. Static validation confirmed content-sized dialog rules, matching control sizing, and the post-layout carousel refresh. `git diff --check -- styles.css influences.js index.html script.js PROJECT_LOG.md` passed (standard Git line-ending warnings only).
- Follow-ups / TODOs: Reopen on the same mobile viewport and confirm the panel is compact, centred and the two controls match.

## 2026-09-01 16:06

- What changed: Completed validation for the Toulouse Lautrec ticket terms and South London mapping fix.
- Why: The cards must both state the current musician/audience terms and respond correctly to the South London Jam filter.
- Files touched: `PROJECT_LOG.md`.
- Commands/tests run + results: `node --check data/scene-data.js` passed; direct data validation confirmed all four Toulouse cards have the individual official links and the musician/audience price wording; static mapping validation confirmed Kennington is included in the South London rule. `git diff --check` passed (standard line-ending warnings only).
- Follow-ups / TODOs: Recheck Toulouse Lautrec prices if the venue changes its Jam policy.
- Follow-ups / TODOs: Revisit the Latin Jam’s practical level separately if needed.
