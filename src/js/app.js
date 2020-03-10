import {TimelineMax} from 'gsap';

const tl = new TimelineMax();

tl
    .from($('.logo__u'), 2, {
        y: -30
    })
    .from($('.logo__r'), 2, {
        rotation: 17,
        transformOrigin: '100% 50%'
    },'-=1.5')
    .from($('.logo__i'), 2, {
        y: 100
    },'-=1.5')
    .from($('.logo__t-top'), 9, {
        x: "100%"
    },'-=5')
    .from($('.logo__t-bottom'), 2, {
        y: 100
    },'-=5')
    .from($('.logo__y'), 2, {
        y: 100
    },'-=5')