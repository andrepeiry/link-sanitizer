/**
 * This file contains everything to sanitize a link.
 * @author André Peiry
 */

/**
 * Given a URL, will remove trackers in it.
 * @param url A URL to sanitize.
 * @returns {string} The sanitize URL.
 */
export function sanitize_link(url) {
    return url
        .replace( "youtu.be", "www.youtube.com" )
        .replaceAll( /[?&](si|utm|igsh|feature|feat|ft)[^?&\n]*/gm, "" )
}
