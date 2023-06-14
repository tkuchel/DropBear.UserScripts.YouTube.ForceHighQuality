// ==UserScript==
// @name     YouTube Highest Quality
// @version  1
// @grant    none
// @match    http*://*.youtube.com/*
// ==/UserScript==

function setQuality() {
    var player = document.querySelector('#movie_player');
    if (player && 'setPlaybackQualityRange' in player) {
        player.setPlaybackQualityRange('hd2160', 'hd2160');
    }
}

// Create a MutationObserver to monitor changes to the body of the page
// and try to set the quality when changes are detected
var observer = new MutationObserver(setQuality);
observer.observe(document.body, {childList: true, subtree: true});

// Also try to set the quality right away
setQuality();
