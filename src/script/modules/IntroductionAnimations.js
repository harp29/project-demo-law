import TweenLite  from 'gsap';

class IntroductionAnimations {
    constructor() {
        this.LoadingAnimations();
    }

    LoadingAnimations() {
        const jsLoadPage = document.querySelector('#js-load-page');

        TweenLite.to(jsLoadPage, 0.8, {
             opacity: 0,
             autoAlpha: 0,
             delay: 1.5,
             ease: Power4.Linear,
             onComplete: function(){
                 jsLoadPage.style.display = 'none';
             }
         });

    };

};

export default IntroductionAnimations;