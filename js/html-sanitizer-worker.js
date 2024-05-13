/**
 * A worker for @see{html-sanitizer.js}
 * @author André Peiry
 */


/**
 * // TODO
 * @param {string} html An HTML string.
 * @param {Array} del_pair An array of 2 elements containing the indexes of the
 * location to delete.
 */
function checkForComas(html, del_pair) {
    if (html.charAt(del_pair[0] - 1) === ',') {
        --del_pair[0];
        return del_pair;
    } else if (html.charAt(del_pair[1]) === ',') {
        ++del_pair[1];
        return del_pair;
    } else
        return del_pair;
}

/**
 * // TODO
 * @param {string} html An HTML string.
 * @param {string} tracker for example : <code>/trackingParam(s)?[^"]*"/gm</code>.
 * @param {number} from The index from which the search should begin.
 * @return A pair of index. The first is inclusive, the second exclusive. If
 *         none was found, will return <code>[0, 0]</code>.
 */
function trackingSimplePair(html, tracker, from) {
    let del_from = 0;
    let del_to   = 0;

    let i = 0;

    if ((i = html.indexOf(tracker, from)) !== -1) {
        return checkForComas(html, [
            i + from,
            i + from + tracker.length
        ]);
    } else
        return [0, 0];
}

/**
 * // TODO
 * @param {string} html An HTML string.
 * @param {RegExp} trackingClass for example : <code>"serviceTrackingParams"</code>.
 * @param {number} from The index from which the search should begin.
 * @return A pair of index. The first is inclusive, the second exclusive. If
 *         none was found, will return <code>[0, 0]</code>.
 */
function trackingClassPair(html, trackingClass, from) {
    let del_from = 0;
    let del_to   = 0;

    let i        = from; // Current index.

    let iP = 0; // Parentheses  ()
    let iB = 0; // Brackets     []
    let iC = 0; // Curly braces {}

    if ((i = html.indexOf(trackingClass, from)) !== -1) {
        del_from = i;

        i += trackingClass.length + 1; // avoid the ':'

        do  {
            switch (html.charAt(i)) {
                case '(' : ++iP; break;
                case ')' : --iP; break;
                case '[' : ++iB; break;
                case ']' : --iB; break;
                case '{' : ++iC; break;
                case '}' : --iC; break;
                default : break;
            }
            ++i;
        } while (iP === 0 && iB === 0 && iC === 0)

        del_to = i;

        return checkForComas(html, [del_from, del_to]);
    } else
        return [0, 0]


}

self.onmessage = function (e) {
    if (e.data !== undefined) {
        let sanitized_html = e.data.replace( "track", "");
        self.postMessage(sanitized_html);
    }
}
