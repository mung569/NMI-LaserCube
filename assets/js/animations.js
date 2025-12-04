document.addEventListener('DOMContentLoaded', function () {
  const wrappers = document.querySelectorAll('.asset-wrapper');

  wrappers.forEach(wrapper => {
    const video = wrapper.querySelector('video.asset-video');
    if (!video) return;

    // Ensure muted & playsinline are set (defensive)
    video.muted = true;
    video.playsInline = true; // old property
    video.setAttribute('playsinline', '');

    // mouseenter: try to play
    wrapper.addEventListener('mouseenter', () => {
      wrapper.classList.add('hovering');
      // reset to start for consistent hover
      try { video.currentTime = 0; } catch (e) {}
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          // Autoplay blocked — still show video overlay so user can click to play if desired
          console.warn('Video play blocked: ', err);
        });
      }
    });

    // mouseleave: pause and hide
    wrapper.addEventListener('mouseleave', () => {
      wrapper.classList.remove('hovering');
      video.pause();
      try { video.currentTime = 0; } catch (e) {}
    });

    // touch support: tap to toggle (mobile)
    let tapped = false;
    wrapper.addEventListener('touchstart', (e) => {
      // Prevent double-tap zoom triggering weirdness; treat touch as a toggle
      e.preventDefault();
      if (!tapped) {
        tapped = true;
        wrapper.classList.add('hovering');
        video.play().catch(()=>{});
      } else {
        tapped = false;
        wrapper.classList.remove('hovering');
        video.pause();
        try { video.currentTime = 0; } catch (e) {}
      }
      // reset tapped after short time
      setTimeout(()=> { tapped = false; }, 600);
    }, { passive: false });
  });
});
