
  const animations = {
    init() {
      this.animateHeader();
    },
    animateHeader() {
      const $openMenu = document.querySelector('.header__hamburger');
      const $closeMenu = document.querySelector('.nav__close');
      let tl = gsap.timeline();
  
      $openMenu.addEventListener('click', () => {
        if (tl.reversed()) {
          tl.restart();
        } else {
          tl.to(".nav__mobile", { 
            x: "100vw",
            duration: 0.25 
          });
        }
      }); 
  
      $closeMenu.addEventListener('click', () => {
        tl.reverse()
      })
    },
  }

animations.init();
