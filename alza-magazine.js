window.addEventListener('DOMContentLoaded', () => {
    const elm = document.createElement('script');
    elm.src = chrome.runtime.getURL('resources/alza-magazine-isDownloadable.js');
    document.body.appendChild(elm);
});
