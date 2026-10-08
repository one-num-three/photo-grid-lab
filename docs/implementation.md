# Implementation notes

[中文说明](implementation.zh-CN.md)

## Structure

The landing page is plain HTML, CSS and JavaScript. It embeds the independently runnable `demo/index.html` through a same-origin iframe. The language switch reloads that iframe with an explicit language parameter; current demo position is therefore reset when the language changes.

The photo grid uses Canvas 2D; its header, slider, buttons and accessibility announcements use ordinary DOM elements. Runtime image data is embedded as data URLs. `demo/source.html` is the editable template, and `tools/build-demo.py` writes the cached images into the placeholder.

## Geometry and anchoring

`z` ranges from 0 to 4, representing column counts `[1, 3, 5, 9, 13]`. A fractional value represents a transition between adjacent levels. The single-column layout follows each photo's height-to-width ratio, clamped to 0.66–1.3. Other levels use squares.

At gesture start, `makeAnchor` stores the hit photo index, normalized coordinates inside it and the current gesture center. `applyZoom` computes the new focal geometry, compensates horizontal position and adjusts scroll to keep the same point near the gesture center. Scroll is clamped to the content bounds, so perfect anchoring is not possible for every photo near an endpoint.

Per-level leading offsets help place the focal photo in a suitable column. The offsets are internal layout state, not extra mock photos.

## Transition rendering

The first approach moved individual tiles between layouts and created distracting gaps. The final version paints two complete mosaics around the same focal rectangle and crossfades them with `t²(3−2t)`. The focal image is drawn again at full opacity.

Stable layouts draw only the viewport and nearby rows. The single-column layout uses prefix heights and binary search. The backing canvas device-pixel ratio is capped at two. This approach can show a small amount of overlapping imagery during transitions; it is not a claim about Apple's implementation.

## Parameters

| Parameter | Value |
| --- | --- |
| Column levels | 1, 3, 5, 9, 13 |
| Normal / dense gap | 1.7 / 1 CSS px |
| Pinch sensitivity | Logarithmic distance ratio × 1.35 |
| Button / release animation | Approximately 440 / 380 ms |
| Demo transition / pause | Approximately 760 / 400 ms |
| Wheel event cap | ±120 before scaling |
| Wheel release delay | 160 ms |
| Inertia speed cap | ±3600 CSS px/s |
| In-bounds velocity decay | exp(−5.2 × dt) |
| Mock data | 864 records, 28 source images |

Animation interruption, reverse zoom and scrolling share cancellation logic. A scroll that interrupts a fractional transition normalizes the level and compensates focal height before continuing. Pointer capture keeps touch/mouse gestures attached to the viewport. Safari gesture handlers supplement Pointer and wheel events.

## Accessibility and limits

Controls have accessible labels and keyboard input, and density changes can be announced. Reduced motion shortens the animations and suppresses the normal inertial throw. Individual canvas photos are not independently exposed to assistive technology yet.

This demo loads a small, repeated photo cache up front. A real library needs stable photo IDs, asynchronous thumbnails, caching, failed-load states, persistent ordering and much more testing. `window.photoGrid.state` is read-only diagnostic data; its `drawMs` is draw-function time, not a complete frame-rate measurement.

The embedded date and record ordering are mock data. Initial scroll starts partway into the library to make the center-preserving demonstration less constrained by the endpoints.

## Film

The MP4 was recorded from actual Chromium operation of the standalone demo, including the full demo sequence, simulated touch drags, inertia and button zoom. The browser capture uses a 540 × 1170 CSS-pixel viewport. The final silent H.264 MP4 is scaled to 1080 × 2340 with a browser-friendly pixel format and fast-start metadata; that export resolution does not imply native 1080-pixel capture detail. The GIF is a smaller preview of the same recording.

The website plays a smaller 720 × 1560 MP4; the download preserves the 1080 × 2340 export. Both versions contain the same recording.
