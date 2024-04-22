function sanitize_link(url) {
    return url.replaceAll( /(\?si|\?utm|\?igsh)[^\?\&\n]*/gm, "")
}

browser.webRequest.onBeforeRequest.addListener(
    function(details) {
      return { redirectUrl: sanitize_link(details.url) };
    },
    {
        urls: ["*.youtube.com/*", "*.youtu.be/*", "*.spotify.com/*", "*.instagram.com/*"] 
    },
    ["blocking"]
  );
  