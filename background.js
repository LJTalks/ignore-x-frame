chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        // Filter out X-Frame-Options and Content-Security-Policy headers
        const headers = details.responseHeaders.filter(header => {
            const name = header.name.toLowerCase();
            return name !== 'x-frame-options' && name !== 'content-security-policy';
        });

        return {
            responseHeaders: headers
        };
    }, {
        urls: ["*://ui.dev/*"]
    },
    ["blocking", "responseHeaders"]
);