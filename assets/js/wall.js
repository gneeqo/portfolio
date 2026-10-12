/* Project wall: play a tile's muted preview loop while it is hovered or
   focused, and put it back at frame 0 when the pointer leaves. Progressive
   enhancement only — the stills carry the page without this file.
   Skipped entirely on touch/coarse-pointer devices and when the visitor asks
   for reduced motion. */
(function () {
  if (!window.matchMedia) return;
  if (window.matchMedia('(hover: none)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var tiles = document.querySelectorAll('.wall .tile');
  Array.prototype.forEach.call(tiles, function (tile) {
    var video = tile.querySelector('video.loop');
    if (!video) return;
    var link = tile.querySelector('a');

    function start() {
      if (video.preload === 'none') video.preload = 'auto';
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
      tile.classList.add('is-playing');
    }
    function stop() {
      video.pause();
      try { video.currentTime = 0; } catch (e) {}
      tile.classList.remove('is-playing');
    }

    tile.addEventListener('mouseenter', start);
    tile.addEventListener('mouseleave', stop);
    if (link) {
      link.addEventListener('focus', start);
      link.addEventListener('blur', stop);
    }
  });
})();
