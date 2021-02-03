## 10ISOplus

Wrapper for Microsoft's Windows 10 ISO download page with additional features.

### Features

- Bypasses the redirect to the Media Creation Tool page on Windows devices.
- Download options for any Windows 10 release.

### Planned updates

I've been having a lot of ideas about what this app can be and could do. The following list contains the mayor releases that are planned to be released at some point in time. No ETAs for now.

- "Proper release" update:
  - First non pre-release version, should be well tested and stable.
  - Independent userscript for product editions loading, compatible with userscript manager for those who don't want the full desktop app.
  - Independent file containing the product editions that overrides the userscript values for transparent updates.
  - Code cleanup, proper project structure and Javascript/Node.js features usage.
  - Download manager.
  - Screen when the website fails to load or the userscript stops working.
  - All publicly known ISOs available.
- UI update:
  - CSD (Frameless window), integrated with the website. Could be disabled with a flag and must be disabled by default on systems where the integration hasn't been tested.
  - Use the OS features to show the download progress, maybe override the download manager entirely (Windows 10 toasts, for example, are sometimes used as the whole download UI on some apps).
  - Resource caching and skeleton screens.
  - Packaged executable.
- Automation update:
  - New ISO support automation: When a new ISO is available, the app sends it's information to an API so it can be implemented quickly. The user must allow it and can stop the reporting at any time.
  - Tests to make sure the product edition IDs still work.
  - Tests to make sure the website integration isn't broken.
- Flashback update:
  - Windows 8 download page support.

---

Copyright 2021 Cristian Bermejo

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.