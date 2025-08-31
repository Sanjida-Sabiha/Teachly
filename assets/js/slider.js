

  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      Infinity:true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.pagination',
        clickable: true,
      },
    });
  });




  /* Header Menu */
  
  document.getElementById('mobileMenuButton').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobileMenu');
    var menuOpenIcon = document.getElementById('menuOpenIcon');
    var menuCloseIcon = document.getElementById('menuCloseIcon');

    // Toggle mobile menu visibility
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
    }
});



//ProgressBar//

const progressBar = document.getElementById('progress-bar');
const sliderHandle = document.getElementById('slider-handle');
const progressContainer = progressBar.parentElement;
const userLabel = document.getElementById('user-label');

let isDragging = false;

// Function to update progress bar, handle position, and user label
function updateProgressBar(event) {
    const rect = progressContainer.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    let percentage = (offsetX / rect.width) * 100;

    // Constrain percentage between 0% and 100%
    percentage = Math.max(0, Math.min(100, percentage));

    // Update width of progress bar and position of handle
    progressBar.style.width = `${percentage}%`;
    sliderHandle.style.left = `${percentage}%`;
    userLabel.style.left = `${percentage}%`;

    // Update user label content
    userLabel.textContent = `${Math.round(percentage)}`;

    // Apply rising and falling effect
    userLabel.style.transform = `translate(0, ${percentage < 0 ? '-50%' : '0'})`;
}

// Throttle function to improve performance
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if (Date.now() - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Mouse events for dragging
sliderHandle.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Apply throttled update for smoother experience
document.addEventListener(
    'mousemove',
    throttle((event) => {
        if (isDragging) {
            updateProgressBar(event);
        }
    }, 10) // Throttle limit in milliseconds
);

// Optional: Click-to-move feature
progressContainer.addEventListener('click', updateProgressBar);
