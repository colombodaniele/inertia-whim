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
