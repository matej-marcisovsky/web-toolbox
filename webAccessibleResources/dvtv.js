try {
    const videoElm = document.querySelector('[data-video-options]');
    const options = JSON.parse(atob(videoElm.dataset.videoOptions));

    options.isAuthenticated = true;
    options.hasActiveMembership = true;

    videoElm.dataset.videoOptions = btoa(JSON.stringify(options));
} catch {}
