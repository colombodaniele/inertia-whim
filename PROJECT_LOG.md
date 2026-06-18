# Inertia Whim Project Log

- Static website project for the band Inertia Whim.
- Source content currently lives in `Bio.txt`, `Graphics/`, `Music/`, and `Pictures/`.
- The first local build is a single-page HTML/CSS/JS site using existing image and audio assets.

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
