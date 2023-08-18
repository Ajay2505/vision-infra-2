const nav = document.querySelector('.normal-nav');
const navOptions = document.querySelector('.nav-options');

navOptions.style.height = `${nav.offsetHeight}px`;

class HoverButton {
    constructor(el) {
    this.el = el;
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener(); 
    }
    
    attachEventsListener() {
    window.addEventListener('mousemove', e => this.onMouseMove(e));
    window.addEventListener('resize', e => this.calculatePosition(e));
    }
    
    calculatePosition() {
    gsap.set(this.el, {
        x: 0,
        y: 0,
        scale: 1
    });
    const box = this.el.getBoundingClientRect();
    this.x = box.left + (box.width * 0.5);
    this.y = box.top + (box.height * 0.5);
    this.width = box.width;
    this.height = box.height;
    }
    
    onMouseMove(e) {
    let hover = false;
    let hoverArea = (this.hover ? 0.7 : 0.5);
    let x = e.clientX - this.x;
    let y = e.clientY - this.y;
    let distance = Math.sqrt( x*x + y*y );
    if (distance < (this.width * hoverArea)) {
        hover = true;
        if (!this.hover) {
            this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
    }
    
    if(!hover && this.hover) {
        this.onLeave();
        this.hover = false;
    }
    }
    
    onHover(x, y) {
    gsap.to(this.el,  {
        x: (x - this.x) * 0.4,
        y: (y - this.y) * 0.4,
        scale: 1.15,
        ease: 'power2.out',
        duration: 0.4
    });
    this.el.style.zIndex = 10;
    }
    onLeave() {
    gsap.to(this.el, {
        x: 0,
        y: 0,
        scale: 1,
        ease: 'elastic.out(1.2, 0.4)',
        duration: 0.7
    });
    this.el.style.zIndex = 1;
    }
}

const btn1 = document.querySelector('.ball');
new HoverButton(btn1);


// Get references to all the card bottoms and points wrappers
const cardBottoms = document.querySelectorAll('.card_bottom-sec_7');
const pointsWrappers = document.querySelectorAll('.points');
const closeButtons = document.querySelectorAll('.close_btn');

// Hide all the points initially
pointsWrappers.forEach(wrapper => {
  wrapper.style.display = 'none';
});

// Add click event listeners to all the card bottoms
cardBottoms.forEach((cardBottom, index) => {
  cardBottom.addEventListener('click', () => {
    // Toggle the visibility of the points
    if (pointsWrappers[index].style.display === 'none') {
      pointsWrappers[index].style.display = 'block';
    } else {
      pointsWrappers[index].style.display = 'none';
    }
  });
});

// Add click event listeners to all the close buttons
closeButtons.forEach((closeButton, index) => {
  closeButton.addEventListener('click', () => {
    // Hide the points when the close button is clicked
    pointsWrappers[index].style.display = 'none';
  });
});

const inputs = document.querySelectorAll('.form_wrapper input');

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.previousElementSibling.classList.add('active-2');
  });

  input.addEventListener('blur', () => {
    if (!input.value) {
      input.previousElementSibling.classList.remove('active-2');
    }
  });

  // Check if the input field has a value when the page loads
  if (input.value) {
    input.previousElementSibling.classList.add('active-2');
  }
});



const navbar = document.querySelector('.sticky-bar');

function handleScroll() {
  if (window.scrollY >= 100) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
}

window.addEventListener('scroll', handleScroll);



$(document).ready(function(){
    $('.accordion-collapse.collapse').on('show.bs.collapse', function () {
        $(this).siblings('.accordion-button').addClass('active');
    });
    $('.accordion-collapse.collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.accordion-button').removeClass('active');
    });
});

document.querySelector(".play_buttin_wrapper").addEventListener("click", () => {
    document.querySelector(".modal_video_wrapper").classList.add("show");
    document.querySelector(".modal_video_wrapper video").play();
});

document.querySelector(".close_icon").addEventListener("click", () => {
  document.querySelector(".modal_video_wrapper").classList.remove("show");
  document.querySelector(".modal_video_wrapper video").pause();
});