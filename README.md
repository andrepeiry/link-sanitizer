# Link Sanitizer
## Description
Some shared URLs are poisoned with a source identifiers, allowing the owner of the site to create links between people.
If you are a bit conscious about your privacy, you may already remove them manually. 
This plugin is here to simplify and automate this "URL cropping".

**What a Source Identifier (*SI*) ?**
Clicking on [https://youtu.be/qOi4Ao40IYA?si=dummySI](https://www.youtube.com/watch?v=qOi4Ao40IYA) would indicate to YouTube that you came from a *SI* called
`dummySI`, but in reality, it will look more like a sequence of alphanumerical characters.

### In general
The extension will remove any `utm` type of tracker, as well as any `si` ones, and other known trackers.

It will also remove any tracking utilities inside the HTML page

<i>Future feature] Crop the </i>SI<i>s in the "Share" option on the pages.

## Conception
The files `js/listener.js` is the one that dispatch the listeners on the browser. Mainly
- `js/link-sanitizer.js`, which remove trackers in the URL
- `js/html-sanitizer.js`, which remove trackers in the HTML files, by using the following workers
  - `js/html-sanitizer-worker.js` Produce pair of indexes to remove in the HTML file.

The performances are to be tested for HTML files sanitization given their sizes. 

## Research
Tracking is a world that can change from day-to-day. The code is based by reading the HTML of the foolowing sites :
- [YouTube](https://youtube.com)
