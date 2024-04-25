function sanitize_link(url) {
    return url
        .replace( /(youtu\.be)/gm, "www.youtube.com" )
        .replaceAll( /[\?\&](si|utm|igsh|feature|feat|ft)[^\?\&\n]*/gm, "" )
}

browser.webRequest.onBeforeRequest.addListener(
    function(details) { return { redirectUrl: sanitize_link(details.url) }; },
    { urls: ["*.youtube.com/*", "*.youtu.be/*", "*.spotify.com/*", "*.instagram.com/*"] },
    ["blocking"]
  );
  