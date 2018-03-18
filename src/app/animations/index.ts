import { trigger, state, style, transition, animate } from "@angular/animations";

export const sliderDownUp = trigger('sliderDownUp', [
  transition('* => void', [
    ///transform: 'scale(1, 0)'
    animate(300, style({height: 0}))
  ]),
  transition('void => *', [
    ///transform: 'scale(1, 1)'
    animate(300, style({height: 'auto'}))
  ])
]);