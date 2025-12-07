# Universal Video Shortcut

A Chrome extension that allows you to navigate through video time using keyboard shortcuts on any website.

## Features

This extension enables keyboard shortcuts for time navigation in video players on any website. You can use the same shortcuts on videos from YouTube, Netflix, Vimeo, and any other website.

## Shortcuts

You can navigate through video time using the following keyboard shortcuts:

- **`,` (comma)**: Move back 20 seconds
- **`.` (period)**: Move forward 20 seconds
- **`;` (semicolon)**: Move back 40 seconds
- **`'` (apostrophe)**: Move forward 40 seconds
- **`[` (left bracket)**: Move back 80 seconds
- **`]` (right bracket)**: Move forward 80 seconds

## Installation

You can install it from the Chrome Web Store:

**[Install from Chrome Web Store](https://chromewebstore.google.com/detail/universal-video-shortcut/ihfdlbgmmodefmalflhochihemeckdge)**

## Usage

1. Install the extension.
2. Press the shortcuts above on a webpage with a video playing.
3. All video elements on the page will move simultaneously.

## How It Works

This extension detects all `<video>` tags on webpages and manipulates the `currentTime` property of videos through keyboard events. Therefore, it works consistently across video players on any website.

