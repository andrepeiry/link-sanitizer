/**
 * This file contains scripts to remove tracker in an HTML page file.
 * @author André Peiry
 */

/**
 * Simple trackers in an HTML file, in the form
 * <code>"tracker":"TR4CK3R"</code>
 * @type {string[]}
 */
let tracker = [
    "trackingParam",
    "trackingParams",
    "clickTrackingParams"
];

/**
 * Complex trackers in an HTML file, in the form
 * <code>"serviceTrackingParams":[{"service":"GFEEDBACK","params":[{"key":...</code>
 * .
 * @type {string[]}
 */
let trackingClass = [
    "serviceTrackingParams"
]

/**
 * Tracking option in an HTML file. They must be switched to false.
 * @type {string[]}
 */
let trackingOptions = [
    "\"enable_loggingcontext_trackingparams\":true",
    "\u0026embeds_web_enable_ve_conversion_logging_tracking_no_allow_list\u003dtrue",
    "\u0026enable_loggingcontext_trackingparams\u003dtrue",
    "\u0026fix_ads_tracking_for_swf_config_deprecation_mweb\u003dtrue"
];


/**
 * Remove all tracker parameter in an HTML page.
 * @param {string} html_page An HTML page.
 * @returns {string} The HTML string without its tracking things.
 */
export function html_page_sanitizer(html_page) {
    let trackingOptionsNeutralized = []
    trackingOptions.forEach(to => trackingOptionsNeutralized.push(
        to.replaceAll("true", "false")));

    /* TODO Generates worker and there communication
     *  - Have a dedicated worker for bool substitution. */



    return details;
}
