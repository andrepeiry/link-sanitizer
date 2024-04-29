/**
 * This file contains listeners to add.
 */

/*
 * Add a listener before the URL is loaded and sanitize it.
 */
browser.webRequest.onBeforeRequest.addListener(
    function(details) { return { redirectUrl: sanitize_link(details.url) }; },
    {
        urls: [
            "*.youtube.com/*",
            "*.youtu.be/*",
            "*.spotify.com/*",
            "*.instagram.com/*"
        ]
    },
    ["blocking"]
);
