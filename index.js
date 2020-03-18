



   


function pageTransition() {
    var tl = gsap.timeline();

    tl.to('ul.transition li', { duration: .2, scaleY: 1, transformOrigin: "bottom left", stagger: .2 })
    tl.to('ul.transition li', { duration: .2, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from('.left', { duration: 1, translateY: 50, opacity: 0})
    tl.from('.figma', { duration: 1.3, translateX: 50, opacity: 0}, "-=.8")
    tl.from('.figma_two', { duration: 1, translateY: -30, opacity: .9}, "-=.8")
    tl.from('.figma_four', { duration: 1, translateX: -50, opacity: 0}, "-=.8")

    tl.from('.figma_three', { duration: 1.3, translateX: 50, opacity: 0}, "-=.8")
    tl.from('.figma_five', { duration: 3.3, translateX: 100, opacity: 0}, "-=.8")

}


function delay(n) {
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

barba.init({
    sync: true,

    transitions: [{

        async leave(data) {
      
          const done = this.async();
      
          pageTransition();
          await delay(1100);
          done();
        },

        async enter(data) {
            contentAnimation();
           
        },

        async once(data) {
            contentAnimation();
        }
      
      }]
})

