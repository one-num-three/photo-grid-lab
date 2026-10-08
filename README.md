# Photo Grid Lab

**One gesture. A whole library.**

An Apple Photos-inspired pinch-to-zoom grid, handcrafted with HTML, Canvas 2D and vanilla JavaScript. Explore continuous zoom, anchored motion and a tightly packed library of mock photos.

[中文 README](README.zh-CN.md) · [Live website](https://one-num-three.github.io/photo-grid-lab/) · [Try the grid](https://one-num-three.github.io/photo-grid-lab/demo/index.html?lang=en) · [Download the film](https://github.com/one-num-three/photo-grid-lab/releases/download/v0.1.0/photo-grid-demo.mp4)

[![GitHub stars](https://img.shields.io/github/stars/one-num-three/photo-grid-lab?style=flat&color=2f7bf0)](https://github.com/one-num-three/photo-grid-lab/stargazers) [![License: MIT](https://img.shields.io/badge/code-MIT-607c66)](LICENSE)

<p align="center"><a href="https://one-num-three.github.io/photo-grid-lab/"><img src="assets/demo-preview.gif" width="260" alt="Photo grid moving smoothly between large photographs and a dense mosaic"></a></p>

## What to try

- **Continuous zoom:** move between 1, 3, 5, 9 and 13 photos per row; settle into the nearest density when the gesture ends.
- **An anchored photo:** keep the photograph under your fingers in view as the grid changes around it, within the available scroll bounds.
- **Tight transitions:** two complete mosaics scale and crossfade around the same focal image.
- **A little momentum:** drag, release and let the grid coast, with resistance and spring-back at the edges.
- **A live playground:** bilingual landing page, standalone demo, a real browser recording and earlier album-camera design concepts.
- **No runtime dependencies:** no framework, backend, analytics or account required. The standalone demo includes its photos and works offline.

The grid contains **864 mock records from 28 sample photographs**. Repeated photographs and simulated dates are intentional: this is an interaction study, not a connection to your photo library.

## Controls

| Input | Action |
| --- | --- |
| Two-finger pinch | Continuously zoom in or out |
| One-finger drag | Scroll, then coast after release |
| Ctrl / Command + wheel | Zoom around the pointer |
| Ordinary wheel / mouse drag | Browse the grid |
| Bottom buttons / slider | Change photo size |
| Alt + vertical drag | Simulate a continuous zoom gesture |
| Double-click | Move one level closer; the single-column view returns to three columns |
| `+` / `-` | Change zoom level |
| Arrow keys / Page Up / Page Down | Scroll; a focused slider uses arrows to zoom |
| Home / End | Reach the scroll bounds; a focused slider uses these keys for size bounds |
| Demo button | Play or stop the full density sequence |

Use the website language button or add `?lang=en` / `?lang=zh` to the page or standalone demo URL. Safari gesture handlers are included, but actual macOS trackpad behavior still needs hardware testing.

## Run locally

The standalone prototype can be opened directly:

```text
demo/index.html
```

For the full website and its embedded live playground, serve this directory over HTTP:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`. There is no package installation or site build step.

## Project layout

```text
index.html                  Bilingual showcase
style.css / app.js          Layout, language switching, image viewer
demo/index.html             Self-contained runnable grid
demo/source.html            Editable grid template
demo/photos/                Cached demo photographs
demo/photo-sources.json     Source URLs for the sample photographs
tools/build-demo.py         Offline template-to-demo build
assets/                     Preview GIF, film poster, design concepts, social card
media/photo-grid-demo.mp4   Portrait recording for download
media/photo-grid-demo-web.mp4  Smaller video for web playback
docs/                       Implementation notes, QA and sharing copy
```

To change the grid, edit `demo/source.html` and rebuild the embedded photo data:

```sh
python tools/build-demo.py
```

The generator uses only Python's standard library and the tracked photo cache. Direct edits to `demo/index.html` are overwritten when rebuilding.

## How the motion works

1. Hit-test the gesture center and store the photo index plus the position inside that photo.
2. Calculate the two neighboring layouts and interpolate the focal photo's geometry.
3. Scale the complete mosaics around that shared focal photo and crossfade them, keeping the focal image opaque.
4. Compensate the scroll and horizontal offset, then gently snap to a stable density.

Canvas draws the visible area and nearby rows instead of creating hundreds of image elements. Read [the implementation notes](docs/implementation.md) for the parameters, interruption handling and limitations.

## Status

This is a **web interaction prototype**, not a native iOS app or a pixel-perfect reproduction of Apple Photos. The album-camera images are earlier visual concepts; they are not functional screens.

Desktop Chromium and emulated multi-touch checks cover the principal inputs, density levels, interruption handling, responsive layout and reduced motion. Real iPhone Safari, real macOS trackpads and production-size libraries still need validation. Canvas photographs are not individually accessible to screen readers yet. See [QA](docs/QA.md).

The film records the actual browser prototype; it has no soundtrack. The portrait MP4 and preview GIF are included so the project can be shared without requiring viewers to install anything.

## Contribute

Issues and pull requests are welcome, particularly for gesture edge cases, browser compatibility, keyboard and screen-reader access, and native implementations of the same interaction. When reporting a gesture issue, include your browser, device and the action sequence.

If the interaction gives you an idea, a star helps other people discover it. Sharing the live playground alongside a short clip is appreciated.

## Credits and license

Original project code is available under the [MIT License](LICENSE). Sample photographs remain under the [Unsplash License](https://unsplash.com/license), including their use in screenshots and recordings. Photo sources are recorded in [the source list](demo/photo-sources.json); see [third-party notices](THIRD_PARTY_NOTICES.md).

An independent interaction study inspired by Apple Photos. This project is not affiliated with, endorsed by or a product of Apple.
