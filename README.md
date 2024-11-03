# Custom Ignore X-Frame Chrome Extension

This is a Chrome extension that bypasses `X-Frame-Options` and `Content-Security-Policy` headers for specified websites, allowing them to be loaded in iframes. This extension is designed for local use and limited to specific trusted sites.

## Features

- Removes `X-Frame-Options` and `Content-Security-Policy` headers from specified domains.
- Allows embedding of protected sites in iframes.
- Includes a toolbar icon (optional) to toggle the extension.

## Setup Instructions

1. **Clone or Download the Repository**:

   - Clone this repository or download it as a zip file.

2. **Edit `manifest.json` (if needed)**:

   - In `manifest.json`, you can modify the `host_permissions` to specify additional trusted domains where the extension should apply.

3. **Load the Extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** by toggling the switch in the top right corner.
   - Click on **Load unpacked** and select the folder where this extension is located.
   - The extension will now be loaded in Chrome with a custom icon in the toolbar.

## Files

- `manifest.json`: Configuration file for the Chrome extension, specifying permissions, background scripts, and icons.
- `background.js`: Script to intercept HTTP headers and remove `X-Frame-Options` and `Content-Security-Policy` headers on specified URLs.
- `icon.png`: Icon displayed in the Chrome toolbar.

## Permissions

The extension requires the following permissions:

- **`webRequest` and `webRequestBlocking`**: Needed to modify HTTP headers on specified requests.
- **`host_permissions`**: Defines the URLs on which the extension is active. By default, this is set to `*://ui.dev/*`, allowing the extension to run on any path within the `ui.dev` domain. Modify this if you need it on additional trusted sites.

## Usage

1. **Enable the Extension**: After loading the extension in Chrome, it will automatically intercept requests to the specified domains and remove the `X-Frame-Options` and `Content-Security-Policy` headers.
2. **Embedding in an Iframe**: Navigate to a page on `ui.dev` (or another specified domain) that you want to embed in an iframe. The site should now load successfully without blocking the iframe.
3. **Toggle the Extension** (Optional): You can add a toggle button in the toolbar to enable or disable the extension, but this will require additional JavaScript to handle the toggle functionality.

## Notes

- **Security Caution**: This extension removes important security headers, so use it only on trusted sites. It is intended for personal, local testing and development use.
- **Testing**: If you encounter issues, check the Chrome Developer Tools Console for any error messages related to the extension.

---

### Example `manifest.json` Configuration

To extend the permissions to additional domains, modify the `host_permissions` array:

```json
"host_permissions": [
  "*://ui.dev/*",
  "*://another-trusted-site.com/*"
]
```
