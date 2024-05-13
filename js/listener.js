/**
 * This file contains listeners to add.
 * @author André Peiry
 */
import { sanitize_link } from './link-sanitizer.js';
import { html_page_sanitizer}  from './html-sanitizer.js';

let urls_to_checks = ["<all_urls>"];

/* =============== URL sanitizer listener =============== */
browser.webRequest.onBeforeRequest.addEventListener(
    function(details) {
        return { redirectUrl: sanitize_link(details.url) }; },
    { urls: urls_to_checks },
    ["blocking"]
);


/* =============== HTML sanitizer listener =============== */
browser.webRequest.onBeforeRequest.addEventListener(
    function(details) {
        if (details.type === "main_frame" && details.responseHeaders) {
            return { redirectUrl: URL.createObjectURL(
                new Blob([html_page_sanitizer(details.responseBody)])) };
        } else { return details; }
    }, {
        urls: urls_to_checks,
        types: ["main_frame"] },
    ["blocking"]
);
