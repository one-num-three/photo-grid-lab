# Release checks

## Coverage inventory

- English and Chinese: navigation, copy, gallery, accessible control names and README links.
- Live playground: start the real demo from the landing page; open the standalone version; zoom, scroll and interrupt.
- Film: MP4 loads, decodes, plays and downloads; poster matches the recorded grid.
- Concepts: open each image, close with the button, Escape or backdrop; keyboard focus returns.
- Responsive: 320, 390, 768, 1024 and 1440 px; no horizontal document overflow or clipped main heading.
- Reduced motion: navigation and the demo remain usable.
- Links: correct repository, two READMEs and deployed relative assets under a GitHub Pages project path.
- Publication: public repository and successful GitHub Pages build; live site, demo and MP4 resolve.
- Exploratory: change language during the demo; quickly reverse zoom and scroll during a transition.

## Results

Local checks completed on 2026-10-08 with Windows Chrome/Chromium and Playwright.

- English and Chinese: copy, document language, iframe language and accessible labels changed correctly. Switching language during a running demo reset it to a ready default state as intended.
- Live playground: the landing-page button started the actual embedded demo. The phone-width button scrolled to it and started playback. Reduced motion still allowed density changes.
- Film: H.264 MP4 metadata loaded. Native play control advanced current time and decoded frames. Web playback uses a 720 × 1560 version; the download is a 1080 × 2340 export of the same 540 × 1170 browser capture. Duration is 21.16 seconds.
- Concepts: all three opened. Button, Escape and outside-click close paths worked; Escape restored focus to the opening button.
- Layout: English and Chinese at 320, 390, 768, 1024 and 1440 px showed no document horizontal overflow or clipped hero heading.
- Browser errors: no page script errors were recorded in these checks or the film recording.
- Core grid: five levels, center anchoring, wheel, simulated multi-touch, inertia and interrupted zoom were checked during the original prototype work. This release preserves that engine and adds language text.

Desktop, mobile, social-card and sampled film frames were visually inspected. Real iPhone Safari, real macOS trackpads, every edge gesture combination and production photo-library memory load remain unverified.

## Online deployment checks

GitHub Pages completed its first build on 2026-10-08. The published site at `https://one-num-three.github.io/photo-grid-lab/` returned HTTP 200.

- Landing-page demo input started the actual iframe animation.
- A clean session reached 5, 9, 13, 9, 5, 3 and 1 columns through the visible controls; each sampled final state was stable.
- Language switching changed both the landing page and the standalone grid text.
- The published web MP4 played through the native controls, advanced current time and decoded frames; metadata was 720 × 1560 and 21.16 seconds.
- Published concept images loaded in the preview dialog.
- Both README files, the social image, GIF and downloadable MP4 returned HTTP 200 with appropriate content types.
- No page script errors were recorded during the live checks.

The downloadable MP4 is 1080 × 2340; its 18,872,693-byte file was present at the published media URL. The web version is 10,608,978 bytes and the preview GIF is 3,074,874 bytes.
