window.HELP_IMPROVE_VIDEOJS = false;

// ---- BibTeX Copy ----
function copyBibtex() {
  var bibtexText = document.querySelector('#BibTeX pre code').textContent;
  navigator.clipboard.writeText(bibtexText).then(function() {
    var btn = document.querySelector('.copy-btn');
    btn.textContent = 'Copied!';
    setTimeout(function() { btn.textContent = 'Copy'; }, 1800);
  });
}

// ---- Bulma Navbar Burger ----
document.addEventListener('DOMContentLoaded', function() {

  // Navbar burgers
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'), 0
  );
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function(el) {
      el.addEventListener('click', function() {
        var target = el.dataset.target;
        var $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // ---- Carousel (if bulma-carousel is loaded) ----
  if (typeof bulmaCarousel !== 'undefined') {
    var carousels = bulmaCarousel.attach('.results-carousel', {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      autoplay: true,
      autoplaySpeed: 3000,
      breakpoints: [
        { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
        { changePoint: 640, slidesToShow: 2, slidesToScroll: 1 },
      ],
    });
  }

  // ---- Interpolation Slider (if applicable) ----
  var defined = false;
  var defined_count = 0;
  var defined_max = 100;

  // Check if interpolation elements exist
  var sliderEl = document.getElementById('interpolation-slider');
  if (sliderEl) {
    sliderEl.addEventListener('input', function() {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    sliderEl.value = 0;
  }
});

function setInterpolationImage(i) {
  var wrapper = document.getElementById('interpolation-image-wrapper');
  if (!wrapper) return;
  // If you have interpolation images, set them here:
  // var path = './static/interpolation/stacked_' + String(i).padStart(6, '0') + '.png';
  // wrapper.innerHTML = '<img src="' + path + '" />';
}
