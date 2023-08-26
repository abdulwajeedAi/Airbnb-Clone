__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionOld=function({group:u}){const p=(0,n.useCx)(),w=(0,s.useSignal)(u.imagePair.old),h=(0,t.useRef)(null),{stage:y}=l.ViewTransitionState.instance,{step:_}=y.value,{ref:b}=(0,o.useElementSize)({mode:'callback-only',onSizeChanged:({width:t,height:n})=>{(t>0||n>0)&&(w.value.ready.value=!0)},skip:w.value.ready.value}),C=(0,f.readyToApply)(u,'old');return(0,v.jsx)("div",{ref:t=>{h.current=t,(0,f.attachTransitionElement)({element:t,setRoot:b,transitionElement:w})},className:p(c,C&&'view-transition-old'),style:{top:(()=>{if('FreezeScreen'!==_&&'DOMUpdate'!==_&&'CaptureNew'!==_)return 0;if(h.current&&h.current.firstChild&&h.current.firstChild.firstChild){const t=h.current.firstChild.firstChild,{y:n}=t.getBoundingClientRect();return w.value.dimensions.y-n+"px"}})()},...C,children:w.value.element})},e.oldClassFragment=void 0;var t=babelHelpers.interopRequireWildcard(r(d[0])),n=(r(d[1]),r(d[2])),o=r(d[3]),s=r(d[4]),l=r(d[5]),f=(r(d[6]),r(d[7])),v=r(d[8]);e.oldClassFragment="\n  ::view-transition-old {\n    --view-transition_mix-blend-mode: plus-lighter;       opacity: var(--view-transition-fade-effect_opacity-from);          @keyframes fade {     from {       opacity: var(--view-transition-fade-effect_opacity-from, 0);       visibility: visible;     }     to {       opacity: var(--view-transition-fade-effect_opacity-to, 1);     }   }       --view-transition-fade-effect_opacity-from: 1;--view-transition-fade-effect_opacity-to: 0;       animation: var(--reduced-motion_duration, var(--view-transition-fade-effect_duration, var(--view-transition_duration, 200ms))) var(--view-transition-fade-effect_timing-function, var(--view-transition_timing-function, linear)) var(--view-transition-fade-effect_delay, var(--view-transition_delay, 0ms)) 1 normal var(--view-transition_fill-mode, both) var(--view-transition_play-state,paused) fade;\n    left: 0;\n    width: 100%;\n    height: auto;\n    mix-blend-mode: var(--view-transition_mix-blend-mode, plus-lighter);\n\n    > [data-static-element-wrapper] > [view-transition-element] {\n      min-height: var(--view-transition-old_min-height, unset);\n      --debug-var: set;\n    }\n  }\n";const c="cbohgl0"}),"01a137",["a27fc3","ea4b89","4786a8","c376e0","265637","7bc311","a133c0","c39fcd","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionImagePair=function({group:v}){const c=(0,n.useCx)(),p=(0,s.useSignal)(v.imagePair.old),w=(0,s.useSignal)(v.imagePair.new);return(0,l.jsxs)("div",{"view-transition-image-pair":v.name,className:c(o,'view-transition-image-pair'),children:[null!==p.value&&(0,l.jsx)(u.ViewTransitionOld,{group:v}),null!==w.value&&(0,l.jsx)(t.ViewTransitionNew,{group:v})]})};babelHelpers.interopRequireDefault(r(d[0])),r(d[1]);var n=r(d[2]),s=r(d[3]),t=r(d[4]),u=r(d[5]),l=r(d[6]);const o="vi4mvdh"}),"06a17f",["a27fc3","ea4b89","4786a8","265637","58170c","01a137","14def0"]);
__d((function(g,r,i,a,m,e,d){'use strict';m.exports=r(d[0])}),"09a5e5",["b1e39b"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.slideUpFromBottomFragment=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]),s=r(d[3]),l=r(d[4]);let f,p,c,u,v,y,_,b,w=t=>t;const &#x20B9;={screen:{enter:{old:(0,t.cssFragment)(f||(f=w`
        &#x20B9;{0} {
          &#x20B9;{0}
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-down-duration, 500ms);
          --view-transition_from-filter: brightness(var(--scrim-animation_start-brightness, 1));
          --view-transition_to-filter: brightness(var(--scrim-animation_end-brightness, 0.6));
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),o.a11y.motion,l.RelativeMoveEffect.apply({endX:0,startX:0,endY:'calc(-1 * var(--slide-up-from-bottom_offset-y-to, 5.5%))',startScale:'var(--slide-up-from-bottom_scale--start, 1)',endScale:'var(--slide-up-from-bottom_scale--end, 0.94)',duration:500}),o.a11y.noMotion,l.FadeEffect.apply()),new:(0,t.cssFragment)(p||(p=w`
        &#x20B9;{0} {
          &#x20B9;{0};
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-up-duration, 500ms);
          animation-timing-function: var(
            --view-transition_timing-function,
            &#x20B9;{0}
          );
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),o.a11y.motion,l.RelativeMoveEffect.apply({startY:'var(--slide-up-from-bottom_offset-y-from, 100%)',endY:'var(--slide-up-from-bottom_offset-y-to-polyfill, 0px)',timingFunction:""+t.theme.motion.enterCurve.animationTimingFunction,duration:500}),t.theme.motion.standardCurve.animationTimingFunction,o.a11y.noMotion,l.FadeEffect.apply()),oldRoot:(0,t.cssFragment)(c||(c=w`
        &#x20B9;{0} {
          &#x20B9;{0};
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-down-duration, 500ms);
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),o.a11y.motion,l.RelativeMoveEffect.apply({startY:'var(--slide-up-from-bottom_root-offset-y-from, 24px)',endY:'var(--slide-up-from-bottom_root-offset-y-to, 2%)',startScale:'var(--slide-up-from-bottom_scale--start, 1)',endScale:'var(--slide-up-from-bottom_scale--end, 0.94)',duration:500}),o.a11y.noMotion,l.FadeEffect.apply()),newRoot:(0,t.cssFragment)(u||(u=w`
        &#x20B9;{0} {
          &#x20B9;{0};
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-up-duration, 500ms);
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),o.a11y.motion,l.RelativeMoveEffect.apply({endY:'var(--slide-up-from-bottom_root-offset-y-to, 2%)',startScale:'var(--slide-up-from-bottom_scale--start, 0.94)',endScale:'var(--slide-up-from-bottom_scale--end, 1)',duration:500}),o.a11y.noMotion,l.FadeEffect.apply())},exit:{old:(0,t.cssFragment)(v||(v=w`
        &#x20B9;{0} {
          &#x20B9;{0};
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-down-duration, 300ms);
          animation-timing-function: var(
            --view-transition_timing-function,
            &#x20B9;{0}
          );
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }

        z-index: 1;
      `),o.a11y.motion,l.RelativeMoveEffect.apply({startY:'var(--slide-up-from-bottom_offset-y-to-polyfill, 0px)',endY:'var(--slide-up-from-bottom_offset-y-from, 100%)',timingFunction:" "+t.theme.motion.exitCurve.animationTimingFunction,duration:300}),t.theme.motion.exitCurve.animationTimingFunction,o.a11y.noMotion,l.FadeEffect.apply()),new:(0,t.cssFragment)(y||(y=w`
        &#x20B9;{0} {
          &#x20B9;{0};
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-up-duration, 500ms);
          --view-transition_from-filter: brightness(var(--scrim-animation_end-brightness, 0.6));
          --view-transition_to-filter: brightness(var(--scrim-animation_start-brightness, 1));
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),o.a11y.motion,l.RelativeMoveEffect.apply({endX:0,startX:0,startY:'calc(-1 * var(--slide-up-from-bottom_offset-y-to, 5.5%))',startScale:'var(--slide-up-from-bottom_scale--start, 0.94)',endScale:'var(--slide-up-from-bottom_scale--end, 1)',duration:500}),o.a11y.noMotion,l.FadeEffect.apply()),oldRoot:(0,t.cssFragment)(_||(_=w`
        &#x20B9;{0} {
          &#x20B9;{0};
          /* animation config declaration for safari support */
          animation-duration: var(--slide-up-from-bottom_slide-down-duration, 500ms);
          --view-transition_from-filter: brightness(var(--scrim-animation_end-brightness, 0.6));
          --view-transition_to-filter: brightness(var(--scrim-animation_start-brightness, 1));
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),o.a11y.motion,l.RelativeMoveEffect.apply({endY:'var(--slide-up-from-bottom_root-offset-y-from, 24px)',duration:500}),o.a11y.noMotion,l.FadeEffect.apply())}}},F=(0,t.cssFragment)(b||(b=w`
  /* normal blending that allows new view to
    sit on top & hide old view */
  --view-transition_mix-blend-mode: normal;

  ::view-transition-group(screen) {
    z-index: 1;
    /* depends on gap between previous/new context sheets */
    clip-path: inset(calc(-1 * var(--slide-up-from-bottom_root-offset-y-from, 24px)) 0 0 0);
  }

  ::view-transition-group(root) {
    animation: none;
  }

  ::view-transition-old(root),
  ::view-transition-new(root) {
    display: none;
  }

  ::view-transition-old(minimized-screen),
  ::view-transition-new(minimized-screen) {
    display: none;
  }

  ::view-transition-group(minimized-screen) {
    z-index: -1;
  }

  ::view-transition-old(*),
  ::view-transition-new(*) {
    mix-blend-mode: normal;
  }

  &.enter::view-transition-old(screen) {
    &#x20B9;{0};
  }

  &.enter::view-transition-new(screen) {
    &#x20B9;{0};
  }

  &.exit::view-transition-old(screen) {
    &#x20B9;{0};
  }

  &.exit::view-transition-new(screen) {
    &#x20B9;{0};
  }

  &.enter::view-transition-old(root) {
    &#x20B9;{0};
  }

  &.enter::view-transition-new(root) {
    &#x20B9;{0};
  }

  &.exit::view-transition-old(root) {
    &#x20B9;{0};
  }
`),&#x20B9;.screen.enter.old,&#x20B9;.screen.enter.new,&#x20B9;.screen.exit.old,&#x20B9;.screen.exit.new,&#x20B9;.screen.enter.oldRoot,&#x20B9;.screen.enter.newRoot,&#x20B9;.screen.exit.oldRoot);e.slideUpFromBottomFragment=F;const x={name:n.DLSTransitionPattern.SlideUpFromBottom,customize:t=>(0,s.extendPattern)(x,t),fragment:F,mapping:[['--slide-up-from-bottom_scale--end',{key:'screenEndScale'}],['--slide-up-from-bottom_scale--start',{key:'screenStartScale'}],['--slide-up-from-bottom_root-offset-y-from',{key:'rootStartY'}],['--slide-up-from-bottom_root-offset-y-to',{key:'rootEndY'}],['--slide-up-from-bottom_root-start-x',{key:'rootStartX'}],['--slide-up-from-bottom_root-end-x',{key:'rootEndX'}],['--slide-up-from-bottom_slide-up-duration',{key:'slideUpDuration',type:'duration'}],['--slide-up-from-bottom_slide-down-duration',{key:'slideDownDuration',type:'duration'}]]}}),"0f74a9",["4786a8","daa5d1","65f102","e58d86","42a00f"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionDebugger=void 0;var t=r(d[0]),n=r(d[1]),u=r(d[2]),s=r(d[3]);const l=(0,t.memo)((function(){return(0,t.useEffect)(()=>{if(window.__vt=s.ViewTransitionState,!s.ViewTransitionState.debugging.evaluated.peek()){s.ViewTransitionState.debugging.evaluated.value=!0;try{const t=new URLSearchParams(window.location.search);if(null!==t.get('vt-inspect')&&(s.ViewTransitionState.debugging.enabled.value=!0),null!==t.get('vt-native')){const n=t.get('vt-native')||'true';s.ViewTransitionState.polyfill.disableNative.value='true'!==n}null!==t.get('vt-step')&&(s.ViewTransitionState.debugging.enabled.value=!0,s.ViewTransitionState.debugging.pauseAfterStage.value=t.get('vt-step'))}catch(t){}}return()=>{delete window.__vt}},[]),(0,n.useSignalEffect)(()=>{const{debugging:t}=s.ViewTransitionState;if(!t.enabled.value)return;const{stage:n}=s.ViewTransitionState.instance,l=(0,u.getInternalViewTransitionState)(),{step:o}=n.value;console.log(`Step(&#x20B9;{o})`,l)}),null}));e.ViewTransitionDebugger=l}),"17a3d7",["a27fc3","265637","65f102","7bc311"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.contextualGrowFragment=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]),c=r(d[3]);let l,s,f,y,p,&#x20B9;,w,v,u,F,E=n=>n;const h={root:{enter:{old:(0,n.cssFragment)(l||(l=E`
        &#x20B9;{0} {
          &#x20B9;{0};
          animation: &#x20B9;{0};
          --view-transition_from-filter: brightness(var(--scrim-animation_end-brightness, 1));
          --view-transition_to-filter: brightness(var(--scrim-animation_start-brightness, 0.6));
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),t.a11y.motion,c.ScaleEffect.apply({endScale:'var(--contextual-grow_scale--end, 0.94)'}),c.ScaleEffect.animation,t.a11y.noMotion,c.FadeEffect.apply())},exit:{new:(0,n.cssFragment)(s||(s=E`
        &#x20B9;{0} {
          &#x20B9;{0};
          animation: &#x20B9;{0};
          --view-transition_from-filter: brightness(var(--scrim-animation_end-brightness, 0.6));
          --view-transition_to-filter: brightness(var(--scrim-animation_start-brightness, 1));
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }

        &#x20B9;{0} {
          --view-transition_visibility: visible;
        }
      `),t.a11y.motion,c.ScaleEffect.apply({startScale:'var(--contextual-grow_scale--end, 0.94)',endScale:1}),c.ScaleEffect.animation,t.a11y.noMotion,c.FadeEffect.apply(),(0,o.descendantElements)())}},cardContainerContent:{enter:{old:(0,n.cssFragment)(f||(f=E`
        &#x20B9;{0} {
          mix-blend-mode: normal;
          &#x20B9;{0}
          animation: &#x20B9;{0};
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),t.a11y.motion,c.FadeEffect.apply({startOpacity:1,endOpacity:0,duration:75,delay:50,timingFunction:""+n.theme.motion.linearCurve.animationTimingFunction}),c.FadeEffect.animation,t.a11y.noMotion,c.FadeEffect.apply())},exit:{old:(0,n.cssFragment)(y||(y=E`
        &#x20B9;{0} {
          &#x20B9;{0}
          animation: &#x20B9;{0};
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),t.a11y.motion,c.FadeEffect.apply({startOpacity:1,endOpacity:0,duration:75,delay:50,timingFunction:""+n.theme.motion.linearCurve.animationTimingFunction}),c.FadeEffect.animation,t.a11y.noMotion,c.FadeEffect.apply()),new:(0,n.cssFragment)(p||(p=E`
        &#x20B9;{0} {
          mix-blend-mode: normal;
          &#x20B9;{0}
          animation: &#x20B9;{0};
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),t.a11y.motion,c.FadeEffect.apply({duration:75,delay:50,timingFunction:""+n.theme.motion.linearCurve.animationTimingFunction}),c.FadeEffect.animation,t.a11y.noMotion,c.FadeEffect.apply())}},cardContainer:{enter:{old:(0,n.cssFragment)(&#x20B9;||(&#x20B9;=E`
        &#x20B9;{0} {
          &#x20B9;{0};
          &#x20B9;{0};
          animation: &#x20B9;{0}, &#x20B9;{0};
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),t.a11y.motion,c.FadeEffect.apply({duration:75,startOpacity:1,endOpacity:0,delay:50,timingFunction:""+n.theme.motion.linearCurve.animationTimingFunction}),c.ScaleEffect.apply(),c.FadeEffect.animation,c.ScaleEffect.animation,t.a11y.noMotion,c.FadeEffect.apply()),new:(0,n.cssFragment)(w||(w=E`
        &#x20B9;{0} {
          &#x20B9;{0}
          animation: &#x20B9;{0};
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),t.a11y.motion,c.FadeEffect.apply({startOpacity:1,duration:75,delay:50,timingFunction:""+n.theme.motion.linearCurve.animationTimingFunction}),c.FadeEffect.animation,t.a11y.noMotion,c.FadeEffect.apply())},exit:{old:(0,n.cssFragment)(v||(v=E`
        &#x20B9;{0} {
          &#x20B9;{0};
          animation: &#x20B9;{0};
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),t.a11y.motion,c.FadeEffect.apply({startOpacity:1,duration:75,delay:50,timingFunction:""+n.theme.motion.linearCurve.animationTimingFunction}),c.FadeEffect.animation,t.a11y.noMotion,c.FadeEffect.apply()),new:(0,n.cssFragment)(u||(u=E`
        &#x20B9;{0} {
          &#x20B9;{0}
          animation: &#x20B9;{0};
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),t.a11y.motion,c.FadeEffect.apply({duration:75,delay:50,timingFunction:""+n.theme.motion.linearCurve.animationTimingFunction}),c.FadeEffect.animation,t.a11y.noMotion,c.FadeEffect.apply())}}},x=(0,n.cssFragment)(F||(F=E`
  ::view-transition {
    --view-transition_duration: 500ms;
  }

  ::view-transition-group(card-container),
  ::view-transition-group(card-container-content) {
    mix-blend-mode: normal;
    overflow: hidden;
    border-radius: var(--card-border-radius, 15px);
  }

  &.exit::view-transition-old(card-container) {
    &#x20B9;{0}
  }

  &.enter::view-transition-old(card-container) {
    &#x20B9;{0};
  }

  &.enter::view-transition-new(card-container) {
    &#x20B9;{0}
  }

  ::view-transition-new(card-container-content) {
    mix-blend-mode: normal;
  }

  &.enter::view-transition-old(card-container-content) {
    &#x20B9;{0}
  }

  &.enter::view-transition-new(card-container-content) {
    &#x20B9;{0} {
      animation-duration: 75ms;
      animation-delay: 50ms;
    }

    &#x20B9;{0} {
      &#x20B9;{0};
    }
  }

  &.exit::view-transition-old(card-container-content) {
    &#x20B9;{0}
  }

  &.exit::view-transition-new(card-container-content) {
    &#x20B9;{0}
  }

  &.exit::view-transition-new(card-container) {
    &#x20B9;{0}
  }

  &.enter::view-transition-new(root) {
    display: none;
  }

  &.exit::view-transition-old(root) {
    display: none;
  }

  /* Scale out the old screen */
  &.enter::view-transition-old(root) {
    &#x20B9;{0}
  }

  &.exit::view-transition-new(root) {
    &#x20B9;{0}
  }

  /**
   * This shows all of the old elements during the transition that would
   * otherwise be hidden due to nested elements. It also ensures that if a list
   * pattern is implemented, that the singluar list item is hidden as it will be
   * promoted.
   */
  ::view-transition-group(root) {
    ::view-transition-new {
      > [data-static-element-wrapper] > [view-transition-element] {
        visibility: visible;
      }
    }

    /* stylelint-disable-next-line selector-max-type */
    &#x20B9;{0},
    ::view-transition-old {
      /* stylelint-disable-next-line selector-max-type */
      &#x20B9;{0} {
        --view-transition_visibility: visible;
        /* stylelint-disable-next-line selector-max-type */
        [active-element='true'] {
          visibility: hidden;
        }
      }
    }
  }
`),h.cardContainer.exit.old,h.cardContainer.enter.old,h.cardContainer.enter.new,h.cardContainerContent.enter.old,t.a11y.motion,t.a11y.noMotion,c.FadeEffect.apply(),h.cardContainerContent.exit.old,h.cardContainerContent.exit.new,h.cardContainer.exit.new,h.root.enter.old,h.root.exit.new,(0,o.frozenViewTransition)('old'),(0,o.descendantElements)());e.contextualGrowFragment=x}),"17d772",["4786a8","daa5d1","2d1376","42a00f"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransition=function(){return(0,s.isSignalTransformEnabled)()?(0,p.jsx)(T,{}):(0,p.jsx)(f,{})};babelHelpers.interopRequireDefault(r(d[0])),r(d[1]);var t=r(d[2]),n=r(d[3]),o=r(d[4]),s=r(d[5]),l=r(d[6]),u=r(d[7]),c=r(d[8]),v=r(d[9]),p=(r(d[10]),r(d[11]),r(d[12]),r(d[13]),r(d[14]),r(d[15]),r(d[16]));const w={root:"r1cxi8bv",viewTransition_native:"vzpe6cu",viewTransition:"v1cz7dl7",viewTransitionContainer:"v16wj6q4",viewTransition_contextualGrow:"vda4df1",viewTransition_slideInAndFade:"v1mud78p",viewTransition_slideInFromEdge:"v4snkvz",viewTransition_slideUpFromBottom:"v1txbv48"};function f(){const o=(0,t.useCx)(),s=l.ViewTransitionState.instance,f=(0,n.useSignal)(s.transitionGroups),T=(0,n.useSignal)(s.stage),E=(0,n.useSignal)(s.className),{polyfill:_}=l.ViewTransitionState,h=(0,n.useSignal)(_.disableNative),x=(0,n.useSignal)(_.supportsNative),y=(0,n.useComputed)(()=>!h.value&&x.value);(0,n.useSignalEffect)(()=>{const t=y.value;if(document.documentElement.classList.toggle('dir',t),document.documentElement.classList.toggle('native',t),w.viewTransition_native.split(' ').forEach(n=>document.documentElement.classList.toggle(n,t)),w.viewTransition_slideInAndFade.split(' ').forEach(n=>document.documentElement.classList.toggle(n,t)),w.viewTransition_slideInFromEdge.split(' ').forEach(n=>document.documentElement.classList.toggle(n,t)),w.viewTransition_slideUpFromBottom.split(' ').forEach(n=>document.documentElement.classList.toggle(n,t)),w.viewTransition_contextualGrow.split(' ').forEach(n=>document.documentElement.classList.toggle(n,t)),!t)return;const n=Array.from(E.value||[]);return n.forEach(t=>{t.split(' ').forEach(t=>document.documentElement.classList.toggle(t,!0))}),()=>{document.documentElement.classList.remove(...n)}});const S=(0,n.useComputed)(()=>{const{step:t}=T.value;switch(t){case v.ViewTransitionStage.CaptureOld:return!0;default:return!1}}),C=(0,n.useComputed)(()=>{switch(T.value.step){case v.ViewTransitionStage.StartAnimations:case v.ViewTransitionStage.Complete:return!0;default:return!1}});function L(t){var n,o;const s=null===(n=f.peek().get('root'))||void 0===n?void 0:n.imagePair,l=null==s||null===(o=s[t].peek())||void 0===o?void 0:o.dimensions;return l&&!S.peek()?{[`--view-transition_&#x20B9;{t}-root-clip`]:`inset(-&#x20B9;{l.bottom}px &#x20B9;{l.left}px)`}:{}}const F={'--view-transition_visibility':S.value?'hidden':'visible','--view-transition_play-state':C.value?'running':'paused','--view-transition_overflow':C.value?'visible':'hidden',...L('old'),...L('new')};return y.value?(0,p.jsx)(u.ViewTransitionCoordinator,{},"native"):(0,p.jsxs)("div",{className:o(w.root,w.viewTransitionContainer,w.viewTransition_contextualGrow,w.viewTransition_slideInAndFade,w.viewTransition_slideInFromEdge,w.viewTransition_slideUpFromBottom,...Array.from(E.value||[])),children:[(0,p.jsx)("div",{"view-transition":"true",className:o(w.viewTransition,'view-transition','polyfill',!y.value&&'slideUpFromBottom_polyfill'),style:F,children:Array.from(f.value.entries()).map(([t,n])=>(0,p.jsx)(c.ViewTransitionGroup,{group:n},t))}),(0,p.jsx)(u.ViewTransitionCoordinator,{},"polyfill")]})}function T(){var n=(0,o.useSignals)();try{const f=(0,t.useCx)(),{transitionGroups:T,stage:E,className:_}=l.ViewTransitionState.instance,{disableNative:h,supportsNative:x}=l.ViewTransitionState.polyfill,y=(0,o.useComputed)(()=>!h.value&&x.value);(0,o.useSignalEffect)(()=>{const t=y.value;if(document.documentElement.classList.toggle('dir',t),document.documentElement.classList.toggle('native',t),w.viewTransition_native.split(' ').forEach(n=>document.documentElement.classList.toggle(n,t)),w.viewTransition_slideInAndFade.split(' ').forEach(n=>document.documentElement.classList.toggle(n,t)),w.viewTransition_slideInFromEdge.split(' ').forEach(n=>document.documentElement.classList.toggle(n,t)),w.viewTransition_slideUpFromBottom.split(' ').forEach(n=>document.documentElement.classList.toggle(n,t)),w.viewTransition_contextualGrow.split(' ').forEach(n=>document.documentElement.classList.toggle(n,t)),!t)return;const n=Array.from(_.value||[]);return n.forEach(t=>{t.split(' ').forEach(t=>document.documentElement.classList.toggle(t,!0))}),()=>{document.documentElement.classList.remove(...n)}});const S=(0,o.useComputed)(()=>{const{step:t}=E.value;switch(t){case v.ViewTransitionStage.CaptureOld:return!0;default:return!1}}),C=(0,o.useComputed)(()=>{switch(E.value.step){case v.ViewTransitionStage.StartAnimations:case v.ViewTransitionStage.Complete:return!0;default:return!1}});function s(t){var n,o;const s=null===(n=T.peek().get('root'))||void 0===n?void 0:n.imagePair,l=null==s||null===(o=s[t].peek())||void 0===o?void 0:o.dimensions;return l&&!S.peek()?{[`--view-transition_&#x20B9;{t}-root-clip`]:`inset(-&#x20B9;{l.bottom}px &#x20B9;{l.left}px)`}:{}}const L={'--view-transition_visibility':S.value?'hidden':'visible','--view-transition_play-state':C.value?'running':'paused','--view-transition_overflow':C.value?'visible':'hidden',...s('old'),...s('new')};return y.value?(0,p.jsx)(u.ViewTransitionCoordinator,{},"native"):(0,p.jsxs)("div",{className:f(w.root,w.viewTransitionContainer,w.viewTransition_contextualGrow,w.viewTransition_slideInAndFade,w.viewTransition_slideInFromEdge,w.viewTransition_slideUpFromBottom,...Array.from(_.value||[])),children:[(0,p.jsx)("div",{"view-transition":"true",className:f(w.viewTransition,'view-transition','polyfill',!y.value&&'slideUpFromBottom_polyfill'),style:L,children:Array.from(T.value.entries()).map(([t,n])=>(0,p.jsx)(c.ViewTransitionGroup,{group:n},t))}),(0,p.jsx)(u.ViewTransitionCoordinator,{},"polyfill")]})}finally{n.f()}}}),"18e4fb",["a27fc3","ea4b89","4786a8","265637","e086eb","9d7471","7bc311","9e4356","9adf33","65f102","01a137","58170c","17d772","273dc7","222d24","0f74a9","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RootStyleSync=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3]);const u=(0,t.memo)((function({viewTransition:t}){const u=(0,n.useSignal)(o.ViewTransitionState.polyfill.disableNative),l=(0,n.useSignal)(o.ViewTransitionState.polyfill.supportsNative),c=(0,n.useComputed)(()=>!u.value&&l.value),v=(0,n.useComputed)(()=>{if(c.value)return!1;const{step:n}=t.stage.value;switch(n){case s.ViewTransitionStage.FreezeScreen:case s.ViewTransitionStage.DOMUpdate:case s.ViewTransitionStage.CaptureNew:case s.ViewTransitionStage.StartAnimations:case s.ViewTransitionStage.CreateAnimations:return!0;default:return!1}}),S=(0,n.useComputed)(()=>{if(c.value)return!1;const{step:n}=t.stage.value;switch(n){case s.ViewTransitionStage.CaptureOld:case s.ViewTransitionStage.FreezeScreen:case s.ViewTransitionStage.DOMUpdate:case s.ViewTransitionStage.CaptureNew:case s.ViewTransitionStage.StartAnimations:case s.ViewTransitionStage.CreateAnimations:return!0;default:return!1}});return(0,n.useSignalEffect)(()=>{const n=t.scope.value||document.body,{style:s}=n,o=v.value;s.setProperty('--view-transition_visibility',o?'hidden':'visible'),s.setProperty('--view-transition_pointer-events',o?'none':'auto'),s.setProperty('--view-transition_overflow',o?'hidden':'visible'),c.value||document.documentElement.classList.toggle('view-transition',S.value)}),null}));e.RootStyleSync=u}),"19da35",["a27fc3","265637","65f102","7bc311"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SlideInFromEdge=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]),s=r(d[3]),l=r(d[4]);let c,v,f,p,u,y=n=>n;const w={screen:{enter:{old:(0,n.cssFragment)(c||(c=y`
        &#x20B9;{0} {
          &#x20B9;{0};
          animation-duration: var(--slide-in-from-edge_slide-out-duration, 500ms);
          --view-transition_from-filter: brightness(var(--scrim-animation_start-brightness, 1));
          --view-transition_to-filter: brightness(var(--scrim-animation_end-brightness, 0.6));
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),t.a11y.motion,l.RelativeMoveEffect.apply({duration:500,endX:'-30%'}),t.a11y.noMotion,l.FadeEffect.apply()),new:(0,n.cssFragment)(v||(v=y`
        height: 100%;

        &#x20B9;{0} {
          &#x20B9;{0};
          &#x20B9;{0}
          animation-duration: var(--slide-in-from-edge_slide-in-duration, 500ms);
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),t.a11y.motion,l.RelativeMoveEffect.apply({duration:500,startX:'100%'}),l.RelativeMoveEffect.align(),t.a11y.noMotion,l.FadeEffect.apply())},exit:{old:(0,n.cssFragment)(f||(f=y`
        &#x20B9;{0} {
          &#x20B9;{0};
          animation-duration: var(--slide-in-from-edge_slide-out-duration, 500ms);
          height: 100%;
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }

        z-index: 1;
      `),t.a11y.motion,l.RelativeMoveEffect.apply({duration:500,endX:'100%'}),t.a11y.noMotion,l.FadeEffect.apply()),new:(0,n.cssFragment)(p||(p=y`
        &#x20B9;{0} {
          &#x20B9;{0};
          animation-duration: var(--slide-in-from-edge_slide-in-duration, 500ms);
          --view-transition_from-filter: brightness(var(--scrim-animation_end-brightness, 0.6));
          --view-transition_to-filter: brightness(var(--scrim-animation_start-brightness, 1));
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),t.a11y.motion,l.RelativeMoveEffect.apply({duration:500,startX:'-30%'}),t.a11y.noMotion,l.FadeEffect.apply())}}},&#x20B9;=(0,n.cssFragment)(u||(u=y`
  ::view-transition-new(root) {
    animation: none;
    opacity: 1;
    mix-blend-mode: normal;
  }

  ::view-transition-group(root) {
    animation: none;
  }

  ::view-transition-old(root) {
    display: none;
  }

  ::view-transition-group(screen) {
    clip-path: inset(0 0 -400px 0);
    animation: none;
  }

  ::view-transition-image-pair(screen) {
    display: grid;
    height: 100%;
  }

  ::view-transition-new(screen),
  ::view-transition-old(screen) {
    background: var(--view-transition_panel-background, #fff);
    grid-area: 1 / 1;
    position: static;
    mix-blend-mode: normal;
    display: flex;
  }

  &.enter::view-transition-new(screen) {
    &#x20B9;{0}
  }

  &.enter::view-transition-old(screen) {
    &#x20B9;{0}
  }

  &.exit::view-transition-new(screen) {
    &#x20B9;{0}
  }

  &.exit::view-transition-old(screen) {
    &#x20B9;{0}
  }
`),w.screen.enter.new,w.screen.enter.old,w.screen.exit.new,w.screen.exit.old),_={name:o.DLSTransitionPattern.SlideInFromEdge,customize:n=>(0,s.extendPattern)(_,n),fragment:&#x20B9;,mapping:[['--slide-in-from-edge_slide-in-duration',{key:'slideInDuration',type:'duration'}],['--slide-in-from-edge_slide-out-duration',{key:'slideOutDuration',type:'duration'}]]};e.SlideInFromEdge=_}),"222d24",["4786a8","daa5d1","65f102","e58d86","42a00f"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useComputed=function(u){var o=(0,n.useRef)(u);return o.current=u,(0,n.useMemo)((function(){return(0,t.computed)((function(){return o.current()}))}),f)},e.useSignalEffect=function(u){var o=(0,n.useRef)(u);o.current=u,(0,n.useEffect)((function(){return(0,t.effect)((function(){return o.current()}))}),f)};var t=r(d[0]),n=(function(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var u=o(n);if(u&&u.has(t))return u.get(t);var f={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&Object.prototype.hasOwnProperty.call(t,l)){var p=c?Object.getOwnPropertyDescriptor(t,l):null;p&&(p.get||p.set)?Object.defineProperty(f,l,p):f[l]=t[l]}f.default=t,u&&u.set(t,f);return f})(r(d[1]));r(d[2]),u(r(d[3])),u(r(d[4]));function u(t){return t&&t.__esModule?t:{default:t}}function o(t){if("function"!=typeof WeakMap)return null;var n=new WeakMap,u=new WeakMap;return(o=function(t){return t?u:n})(t)}new Map;var f=[],c=Symbol.for("react.element");Symbol.dispose||Symbol.for("Symbol.dispose"),Promise.prototype.then.bind(Promise.resolve());Object.defineProperties(t.Signal.prototype,{&#x20B9;&#x20B9;typeof:{configurable:!0,value:c},type:{configurable:!0,value:function(t){return t.data.value}},props:{configurable:!0,get:function(){return{data:this}}},ref:{configurable:!0,value:null}})}),"250cdf",["a954a0","a27fc3","69b03d","14def0","09a5e5"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SlideInAndFade=void 0;var n=r(d[0]),t=r(d[1]),o=r(d[2]),s=r(d[3]),f=r(d[4]);let c,l,p,v,y,u=n=>n;const &#x20B9;={screen:{enter:{old:(0,n.cssFragment)(c||(c=u`
        &#x20B9;{0} {
          &#x20B9;{0};
          &#x20B9;{0};
          animation: &#x20B9;{0}, &#x20B9;{0};
          animation-duration: var(--slide-in-and-fade_fade-out-duration, 75ms),
            var(--slide-in-and-fade_move-duration, 500ms);
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }
      `),t.a11y.motion,f.RelativeMoveEffect.apply({startX:0,endX:'calc(-1 * var(--slide-in-and-fade_offset-x-to, 200px))',duration:500}),f.FadeEffect.apply({startOpacity:1,endOpacity:0,duration:75}),f.FadeEffect.animation,f.RelativeMoveEffect.animation,t.a11y.noMotion,f.FadeEffect.apply({startOpacity:1,endOpacity:0})),new:(0,n.cssFragment)(l||(l=u`
        &#x20B9;{0} {
          &#x20B9;{0};
          &#x20B9;{0}
          &#x20B9;{0};
          animation: &#x20B9;{0}, &#x20B9;{0};
          animation-duration: var(--slide-in-and-fade_fade-in-duration, 350ms),
            var(--slide-in-and-fade_move-duration, 500ms);
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }

        background: var(--view-transition_panel-background, #fff);
      `),t.a11y.motion,f.RelativeMoveEffect.apply({endX:0,startX:'var(--slide-in-and-fade_offset-x-from, 200px)',duration:500}),f.RelativeMoveEffect.align(),f.FadeEffect.apply({startOpacity:0,endOpacity:1,delay:50,duration:350}),f.FadeEffect.animation,f.RelativeMoveEffect.animation,t.a11y.noMotion,f.FadeEffect.apply({startOpacity:0,endOpacity:1}))},exit:{old:(0,n.cssFragment)(p||(p=u`
        &#x20B9;{0} {
          &#x20B9;{0};
          &#x20B9;{0};
          animation: &#x20B9;{0}, &#x20B9;{0};
          animation-duration: var(--slide-in-and-fade_fade-out-duration, 75ms),
            var(--slide-in-and-fade_move-duration, 500ms);
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }

        background: var(--view-transition_panel-background, #fff);
      `),t.a11y.motion,f.RelativeMoveEffect.apply({startX:0,endX:'var(--slide-in-and-fade_offset-x-to, 200px)',duration:500}),f.FadeEffect.apply({startOpacity:1,endOpacity:0,duration:75}),f.FadeEffect.animation,f.RelativeMoveEffect.animation,t.a11y.noMotion,f.FadeEffect.apply({startOpacity:1,endOpacity:0})),new:(0,n.cssFragment)(v||(v=u`
        &#x20B9;{0} {
          &#x20B9;{0};
          &#x20B9;{0};
          animation: &#x20B9;{0}, &#x20B9;{0};
          animation-duration: var(--slide-in-and-fade_fade-in-duration, 350ms),
            var(--slide-in-and-fade_move-duration, 500ms);
        }

        &#x20B9;{0} {
          &#x20B9;{0};
        }

        --view-transition_mix-blend-mode: normal;
      `),t.a11y.motion,f.RelativeMoveEffect.apply({endX:0,startX:'calc(-1 * var(--slide-in-and-fade_offset-x-from, 200px))',duration:500}),f.FadeEffect.apply({startOpacity:0,endOpacity:1,delay:50,duration:350}),f.FadeEffect.animation,f.RelativeMoveEffect.animation,t.a11y.noMotion,f.FadeEffect.apply({startOpacity:0,endOpacity:1}))}}},w=(0,n.cssFragment)(y||(y=u`
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }

  ::view-transition-group(root) {
    animation: none;
  }

  ::view-transition-old(root) {
    display: none;
  }

  ::view-transition-group(screen) {
    animation: none;
  }

  ::view-transition-image-pair(screen) {
    mix-blend-mode: normal;
    display: grid;
    height: 100%;
    overflow: hidden;
  }

  ::view-transition-old(screen),
  ::view-transition-new(screen) {
    display: flex;
    grid-area: 1 / 1;
    mix-blend-mode: normal;
    position: static;
  }

  ::view-transition-new(screen) {
    animation: none;
  }

  &.enter::view-transition-old(screen) {
    &#x20B9;{0}
  }

  &.enter::view-transition-new(screen) {
    &#x20B9;{0}
  }

  &.exit::view-transition-new(screen) {
    &#x20B9;{0}
  }

  &.exit::view-transition-old(screen) {
    &#x20B9;{0}
  }
`),&#x20B9;.screen.enter.old,&#x20B9;.screen.enter.new,&#x20B9;.screen.exit.new,&#x20B9;.screen.exit.old),_={name:o.DLSTransitionPattern.SlideInAndFade,customize:n=>(0,s.extendPattern)(_,n),fragment:w,mapping:[['--slide-in-and-fade_fade-in-duration',{key:'fadeInDuration',type:'duration'}],['--slide-in-and-fade_fade-out-duration',{key:'fadeOutDuration',type:'duration'}],['--slide-in-and-fade_move-duration',{key:'moveDuration',type:'duration'}]]};e.SlideInAndFade=_}),"273dc7",["4786a8","daa5d1","65f102","e58d86","42a00f"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.descendantElements=function(){return'[data-static-element-wrapper] > [view-transition-element] [view-transition-element]'},e.frozenViewTransition=function(n){return`[frozen-view-transition-&#x20B9;{n}]`}}),"2d1376",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.makeVariablesForDimensions=function(t,o){return{[`--&#x20B9;{t}_bottom`]:o.bottom+"px",[`--&#x20B9;{t}_height`]:o.height+"px",[`--&#x20B9;{t}_left`]:o.left+"px",[`--&#x20B9;{t}_right`]:o.right+"px",[`--&#x20B9;{t}_top`]:o.top+"px",[`--&#x20B9;{t}_width`]:o.width+"px"}}}),"3216a2",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.StaticTransitionElement=function({className:s,content:l,inert:c}){const o=(0,t.useCx)();return(0,n.jsx)("div",{"data-static-element-wrapper":!0,className:o(c&&"wy4jsd6",s),dangerouslySetInnerHTML:{__html:l||''},style:c?void 0:{width:'100%'}})};babelHelpers.interopRequireDefault(r(d[0])),r(d[1]);var t=r(d[2]),n=r(d[3])}),"3259b1",["a27fc3","ea4b89","4786a8","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"FadeEffect",{enumerable:!0,get:function(){return t.FadeEffect}}),Object.defineProperty(e,"RelativeMoveEffect",{enumerable:!0,get:function(){return f.RelativeMoveEffect}}),Object.defineProperty(e,"ScaleEffect",{enumerable:!0,get:function(){return n.ScaleEffect}});var t=r(d[0]),f=r(d[1]),n=r(d[2])}),"42a00f",["a133c0","c7a0f1","8b24a1"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(n){return`--view-transition-&#x20B9;{n}-effect`}function t(t,o,u){const s=n(t);return void 0!==u?`var(&#x20B9;{s}_&#x20B9;{o}, var(--view-transition_&#x20B9;{o}, &#x20B9;{u}))`:`var(&#x20B9;{s}_&#x20B9;{o}, var(--view-transition_&#x20B9;{o}))`}Object.defineProperty(e,"__esModule",{value:!0}),e.makeAnimationDefaults=function(n,u){const{delay:s,duration:c,timingFunction:v}={...o,...u},f=`var(--reduced-motion_duration, &#x20B9;{t(n,'duration',c+"ms")})`,_=t(n,'timing-function',v),&#x20B9;=t(n,'delay',s);return`&#x20B9;{f} &#x20B9;{_} &#x20B9;{&#x20B9;} 1 normal var(--view-transition_fill-mode, both) var(--view-transition_play-state,paused) &#x20B9;{n}`},e.setCommonOptions=function(t,o,s){const c=n(t),{duration:v,delay:f,timingFunction:_}=o;u(c+"_duration",v?v+"ms":void 0,s),u(c+"_transition_timing-function",_,s),u(c+"_delay",f?f+"ms":void 0,s)},e.setIfDefined=u;const o={delay:'0ms',duration:200,timingFunction:r(d[0]).theme.motion.standardCurve.animationTimingFunction};function u(n,t,o){void 0!==t&&o.set(n,t)}}),"54a6ea",["4786a8"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionNew=function({group:f}){var u;const c=(0,t.useCx)(),w=(0,o.useSignal)(f.imagePair.new),{ref:p}=(0,n.useElementSize)({mode:'callback-only',onSizeChanged:({width:t,height:n})=>{w.value&&(t>0||n>0)&&(w.value.ready.value=!0)},skip:!w.value||w.value.ready.value}),_=(0,l.readyToApply)(f,'new');return(0,s.jsx)("div",{ref:t=>(0,l.attachTransitionElement)({element:t,setRoot:p,transitionElement:w}),className:c(v,_&&'view-transition-new'),..._,children:null===(u=w.value)||void 0===u?void 0:u.element})},e.newClassFragment=void 0;babelHelpers.interopRequireDefault(r(d[0])),r(d[1]);var t=r(d[2]),n=r(d[3]),o=r(d[4]),l=r(d[5]),s=(r(d[6]),r(d[7]));e.newClassFragment="\n  ::view-transition-new {\n    --view-transition_mix-blend-mode: plus-lighter;       opacity: var(--view-transition-fade-effect_opacity-from);          @keyframes fade {     from {       opacity: var(--view-transition-fade-effect_opacity-from, 0);       visibility: visible;     }     to {       opacity: var(--view-transition-fade-effect_opacity-to, 1);     }   }              animation: var(--reduced-motion_duration, var(--view-transition-fade-effect_duration, var(--view-transition_duration, 200ms))) var(--view-transition-fade-effect_timing-function, var(--view-transition_timing-function, linear)) var(--view-transition-fade-effect_delay, var(--view-transition_delay, 0ms)) 1 normal var(--view-transition_fill-mode, both) var(--view-transition_play-state,paused) fade;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    mix-blend-mode: var(--view-transition_mix-blend-mode, plus-lighter);\n\n    > [data-static-element-wrapper] > [view-transition-element] {\n      height: auto;\n    }\n  }\n";const v="c96d1l6"}),"58170c",["a27fc3","ea4b89","4786a8","c376e0","265637","c39fcd","a133c0","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";function t(){const n=r(d[0]);return t=function(){return n},n}let n,o;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionStage=e.DLSTransitionPattern=void 0,e.configureViewTransition=u,e.getInternalViewTransitionState=function(){return s.last||s.initial},e.setInternalViewTransitionState=function(t){if(s.viewTransitionState===t)return;s.viewTransitionState=t,null!==s.initial&&(u(s.initial),s.initial=null)},e.ViewTransitionStage=n,(function(t){t.Idle="Idle",t.CaptureOld="CaptureOld",t.FreezeScreen="FreezeScreen",t.DOMUpdate="DOMUpdate",t.CaptureNew="CaptureNew",t.CreateAnimations="CreateAnimations",t.StartAnimations="StartAnimations",t.Complete="Complete"})(n||(e.ViewTransitionStage=n={})),e.DLSTransitionPattern=o,(function(t){t.ContextualGrow="contextual-grow",t.SlideUpFromBottom="slide-up-from-bottom",t.SlideInAndFade="slide-in-and-fade",t.ScaleIn="scale-in",t.SlideInFromEdge="slide-in-from-edge",t.Accordion="accordion"})(o||(e.DLSTransitionPattern=o={}));const l=new Set([o.ContextualGrow,o.SlideUpFromBottom,o.SlideInAndFade,o.SlideInFromEdge]),s={initial:null,last:null,viewTransitionState:null};function u(n){const{className:o,direction:u,pattern:c,scope:S}=n,{viewTransitionState:f}=s;if(null===f)return void(s.initial=n);s.last=n;const{instance:w}=f;(0,t().batch)(()=>{const t=w.className.value||new Set;if(w.className.value||(w.className.value=t),void 0!==o){(Array.isArray(o)?o:[o]).forEach(n=>{n&&t.add(n)})}if(c){if(!l.has(c))throw new Error('Motion pattern not supported yet.');t.add(c)}u&&t.add(u),void 0!==S&&(w.scope.value=S)})}}),"65f102",["a954a0"]);
__d((function(g,r,i,a,m,e,d){'use strict';m.exports=r(d[0])}),"69b03d",["d3dab3"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TransitionLayer=function(){return(0,p.isSignalTransformEnabled)()?(0,w.jsx)(x,{}):(0,w.jsx)(_,{})};var t=babelHelpers.interopRequireWildcard(r(d[0])),n=(r(d[1]),r(d[2])),s=r(d[3]),o=r(d[4]),l=r(d[5]),u=r(d[6]),c=r(d[7]),v=babelHelpers.interopRequireDefault(r(d[8])),T=r(d[9]),S=r(d[10]),f=r(d[11]),y=r(d[12]),b=(r(d[13]),r(d[14])),p=r(d[15]),w=r(d[16]);const V={globalTopLayer:"g1nrbpkt",transitionLayer:"t11li817",noMotion:"nd992co",noAnimation:"n5voxd9"},_=(0,t.memo)((function(){const T=(0,s.useCx)(),p=(0,o.useSignal)(S.ViewTransitionState.anyActive),_=(0,o.useSignal)(S.ViewTransitionState.debugging),{instance:x}=S.ViewTransitionState,[h,j]=(0,t.useState)(null);(0,b.setInternalViewTransitionState)(S.ViewTransitionState),null===h&&Promise.resolve().then(()=>{j((0,l.isWebSafari)())});const A=(0,c.useEvent)(async()=>new Promise(t=>{let n=()=>{};n=p.subscribe(s=>{var o;s||(null===(o=n)||void 0===o||o(),requestAnimationFrame(()=>{t()}))})}));null===n.motionPreference.system.peek()&&((0,n.initialize)(),V.globalTopLayer.split(' ').forEach(t=>document.documentElement.classList.toggle(t,!0)),S.ViewTransitionState.polyfill.disableNative.value=v.default.getBootstrap('disable_native_view_transitions')),(0,o.useSignalEffect)(()=>(u.TransitionStatus.anyActive=p.peek(),u.TransitionStatus.activeTransition=A(),u.TransitionStatus.criticalTasks=[],()=>{u.TransitionStatus.anyActive=!1,u.TransitionStatus.activeTransition=void 0,u.TransitionStatus.criticalTasks=[]}),[p.peek()]);const P=(0,o.useComputed)(()=>{if(!(_.value.enabled.value&&p.value))return!1;switch(x.stage.value.step){case b.ViewTransitionStage.Idle:case b.ViewTransitionStage.Complete:return!1;default:return!0}}),k={'--transition-layer_pointer-events':P.value?'auto':'none','--view-transition_forced-blend-mode':h?'normal':void 0},E=n.motionPreference.user.value,L=n.motionPreference.system.value;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:T(V.transitionLayer,L&&'no-motion'===E&&V.noMotion,L&&'no-animation'===E&&V.noAnimation),"data-transition-layer":!0,"data-testid":"transition-layer","aria-hidden":!0,style:k,inert:P.value?void 0:'true',children:(0,w.jsx)(f.ViewTransition,{})}),(0,w.jsx)(y.ViewTransitionDebugger,{})]})})),x=(0,t.memo)((function(){const o=(0,s.useCx)(),{anyActive:p,debugging:_,instance:x}=S.ViewTransitionState,[h,j]=(0,t.useState)(null);(0,b.setInternalViewTransitionState)(S.ViewTransitionState),null===h&&j((0,l.isWebSafari)());const A=(0,c.useEvent)(async()=>new Promise(t=>{let n=()=>{};n=p.subscribe(s=>{var o;s||(null===(o=n)||void 0===o||o(),requestAnimationFrame(()=>{t()}))})}));null===n.motionPreference.system.peek()&&((0,n.initialize)(),V.globalTopLayer.split(' ').forEach(t=>document.documentElement.classList.toggle(t,!0)),S.ViewTransitionState.polyfill.disableNative.value=v.default.getBootstrap('disable_native_view_transitions')),(0,T.useSignalEffect)(()=>(u.TransitionStatus.anyActive=p.value,u.TransitionStatus.activeTransition=A(),u.TransitionStatus.criticalTasks=[],()=>{u.TransitionStatus.anyActive=!1,u.TransitionStatus.activeTransition=void 0,u.TransitionStatus.criticalTasks=[]}));const P=(0,T.useComputed)(()=>{if(!(_.enabled.value&&p.value))return!1;switch(x.stage.value.step){case b.ViewTransitionStage.Idle:case b.ViewTransitionStage.Complete:return!1;default:return!0}}),k={'--transition-layer_pointer-events':P.value?'auto':'none','--view-transition_forced-blend-mode':h?'normal':void 0},E=n.motionPreference.user.value,L=n.motionPreference.system.value;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:o(V.transitionLayer,L&&'no-motion'===E&&V.noMotion,L&&'no-animation'===E&&V.noAnimation),"data-transition-layer":!0,"data-testid":"transition-layer","aria-hidden":!0,style:k,inert:P.value?void 0:'true',children:(0,w.jsx)(f.ViewTransition,{})}),(0,w.jsx)(y.ViewTransitionDebugger,{})]})}))}),"6e2158",["a27fc3","ea4b89","daa5d1","4786a8","265637","e9b7bf","8ffcf9","f4e9c4","c235f8","e086eb","7bc311","18e4fb","17a3d7","c55e06","65f102","9d7471","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(){const t=r(d[0]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionState=void 0,e.makeActiveStage=s;var t=r(d[1]),l=r(d[2]);function s(t,l){return l&&(l.status.value='complete',l.timing.end=performance.now()),{previousStage:l,status:(0,n().signal)('active'),step:t,timing:{begin:performance.now(),end:null}}}const o={anyActive:(0,n().signal)(!1),debugging:{enabled:(0,n().signal)(!1),evaluated:(0,n().signal)(!1),pauseAfterStage:(0,n().signal)(null)},instance:(function(){const o={active:(0,n().signal)(!1),className:(0,n().signal)(null),domUpdateCallbacks:new Set,layers:(0,n().signal)(0),scope:(0,n().signal)(null),start:(0,n().signal)(null),stage:(0,n().signal)(s(l.ViewTransitionStage.Idle,null)),transitionGroups:(0,n().signal)(new Map),updateCallbackDone:(0,n().signal)(null),wait:async()=>{for(;o.domUpdateCallbacks.size>0;){const n=[...o.domUpdateCallbacks];o.domUpdateCallbacks.clear(),await Promise.allSettled(n.map(n=>n()))}await Promise.allSettled(t.TransitionStatus.criticalTasks)}};return o})(),polyfill:{disableNative:(0,n().signal)(!1),filled:(0,n().signal)(!1),startViewTransition:(0,n().signal)(null),supportsNative:(0,n().signal)(!1)}};e.ViewTransitionState=o}),"7bc311",["a954a0","8ffcf9","65f102"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useResizeObserverPolyfill=void 0,e.useWaitForResizeObserverPolyfill=function(){return{waitForResizeObserver:(0,n.useEvent)(async()=>!('ResizeObserver'in window)&&(window.ResizeObserver=await t(),!0))}};var s=r(d[0]),n=r(d[1]);async function t(){return(await r(d[3])(d[2]).then(babelHelpers.interopRequireWildcard)).default}let u=!1;e.useResizeObserverPolyfill=()=>{const[n,o]=(0,s.useState)(!!u&&'ResizeObserver'in window),l=(0,s.useRef)(!1);return n||(u=!0,'ResizeObserver'in window?o(!0):(async function(){l.current||(l.current=!0,window.ResizeObserver=await t(),o(!0))})()),n}}),"7f17e4",["a27fc3","f4e9c4","bf224d","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useNextSignalValue=function(){const n=(0,t.useRef)(new Set),u=(0,t.useRef)(!1),c=(0,t.useCallback)((t,c,l)=>u.current||null!=l&&l.aborted?Promise.reject(new Error('Component has unmounted')):new Promise(u=>{const o=t.subscribe(t=>{if(!c||c(t)){try{null==o||o()}catch(t){}u(t),n.current.delete(o)}});null==l||l.addEventListener('abort',()=>{try{null==o||o()}catch(t){}u(null)}),n.current.add(o)}),[]);return(0,t.useEffect)(()=>{const t=n.current;return()=>{u.current=!0,t.forEach(t=>t()),t.clear()}},[]),{waitForNextValue:c}};var t=r(d[0])}),"8994c5",["a27fc3"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ScaleEffect=void 0;var t=r(d[0]),n=r(d[1]);let s,f,c=t=>t;const o=(0,t.cssFragment)(s||(s=c`
  @keyframes &#x20B9;{0} {
    from {
      filter: var(--view-transition_from-filter);
      visibility: visible;
      scale: var(--view-transition-scale-effect_from, 1);
    }

    to {
      filter: var(--view-transition_to-filter);
      scale: var(--view-transition-scale-effect_to, 0);
    }
  }
`),"scale"),l={name:"scale",apply:s=>(0,t.cssFragment)(f||(f=c`
      &#x20B9;{0}
      &#x20B9;{0}
      animation: &#x20B9;{0};
    `),o,(t=>{if(!t)return'';let s='';const{startScale:f,endScale:c}=t,o=new Map;return(0,n.setIfDefined)('--view-transition-scale-effect_from',f,o),(0,n.setIfDefined)('--view-transition-scale-effect_to',c,o),(0,n.setCommonOptions)("scale",t,o),o.forEach((t,n)=>{s+=`&#x20B9;{n}: &#x20B9;{t};`}),s})(s),l.animation),animation:(0,n.makeAnimationDefaults)("scale")};e.ScaleEffect=l}),"8b24a1",["4786a8","54a6ea"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionGroup=function({group:w}){const c=(0,n.useCx)();let f={};const P=(0,t.useSignal)(w.transition.stage);null!==w.imagePair.old.value&&(f={...f,'--view-transition-group_default-z-index':""+w.order,...(0,s.makeVariablesForDimensions)('view-transition-group-old',w.imagePair.old.value.dimensions)});null!==w.imagePair.new.value&&(f={...f,'--view-transition-group_default-z-index':""+w.order,...(0,s.makeVariablesForDimensions)('view-transition-group-new',w.imagePair.new.value.dimensions)});if(null!==w.imagePair.new.value&&null!==w.imagePair.old.value){const n=w.imagePair.old.value.dimensions,t=w.imagePair.new.value.dimensions;f={...f,'--view-transition_to-x':t.left-n.left+"px",'--view-transition_to-y':t.top-n.top+"px"}}const x=(0,t.useComputed)(()=>{switch(P.value.step){case l.ViewTransitionStage.CreateAnimations:case l.ViewTransitionStage.StartAnimations:case l.ViewTransitionStage.Complete:return!0;default:return!1}});return(0,u.jsx)("div",{className:c(v,x.value&&p,'view-transition-group'),"view-transition-group":w.name,style:f,children:(0,u.jsx)(o.ViewTransitionImagePair,{group:w})})};babelHelpers.interopRequireDefault(r(d[0])),r(d[1]);var n=r(d[2]),t=r(d[3]),o=r(d[4]),s=r(d[5]),l=r(d[6]),u=(r(d[7]),r(d[8]));const v="v34w2ga",p="vhp7t6l"}),"9adf33",["a27fc3","ea4b89","4786a8","265637","06a17f","3216a2","65f102","a835c2","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isSignalTransformEnabled=void 0;var n=babelHelpers.interopRequireDefault(r(d[0]));e.isSignalTransformEnabled=()=>'treatment'===n.default.findTreatment('web_magic_move_signal_transform')}),"9d7471",["dcc72a"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionCoordinator=void 0;var t=babelHelpers.interopRequireWildcard(r(d[0]));function n(){const t=r(d[1]);return n=function(){return t},t}var o=r(d[2]),s=r(d[3]),l=r(d[4]),u=r(d[5]),c=r(d[6]),p=r(d[7]),w=r(d[8]),v=r(d[9]),f=r(d[10]),S=r(d[11]);function T(t){const n=t||document.body;let o=[];'true'===(null==t?void 0:t.getAttribute('view-transition-element'))&&o.push(t),o=[...o,...Array.from(n.querySelectorAll('[view-transition-element="true"]'))];const s=Array.from(document.querySelectorAll("[data-transition-layer] [view-transition-element=\"true\"]"));return o.filter(t=>!s.includes(t))}function k(t,o){let s=t.getBoundingClientRect();if(o){const n=(function t(n){return null==n?null:n.scrollHeight>n.clientHeight?n:t(n.parentElement)})(t);if('HTML'!==(null==n?void 0:n.tagName)){const{scrollTop:t}=n||{scrollTop:0};s=DOMRect.fromRect({...s.toJSON(),y:s.y+t})}}const l=(function(t){const n=window.getComputedStyle(t);let o=n.getPropertyValue('view-transition-name');const s=p.ViewTransitionState.polyfill.supportsNative.peek();if(!(o&&'none'!==o||s)){if('hidden'===n.visibility||'none'===n.display)return;o=n.getPropertyValue('--view-transition-name')}return o})(t);if(!l||'none'===l)return{elementName:null,transitionElement:null};const u=t.outerHTML;return{name:l,transitionElement:{element:(0,S.jsx)(v.StaticTransitionElement,{content:u,inert:!0}),dimensions:s,ready:(0,n().signal)(!1)}}}function y(){const t="[view-transition]",n=[document.querySelector(t),...document.querySelectorAll(t+" [view-transition-group]"),...document.querySelectorAll(t+" [view-transition-image-pair]"),...document.querySelectorAll(t+" [view-transition-old]"),...document.querySelectorAll(t+" [view-transition-new]"),...document.querySelectorAll(t+" [data-leaf_root] > [data-leaf]")].flatMap(t=>t.getAnimations());return{animations:Promise.all(n.map(t=>t.finished))}}function V(){let t;return[new Promise(n=>{t=n}),function(){t()}]}const b=t.default.memo(()=>{const v=(0,t.useRef)(null),{instance:b}=p.ViewTransitionState,{waitForNextValue:A}=(0,l.useNextSignalValue)(),{scheduler:h}=(0,u.usePostTaskScheduler)({strategy:'recycle'}),C=(0,s.useComputed)(()=>{const t=Array.from(b.transitionGroups.value.values());return b.stage.value.step===w.ViewTransitionStage.CaptureOld&&(t.length>0&&t.every(t=>null===t.imagePair.old.value||t.imagePair.old.value.ready.value))}),P=(0,s.useComputed)(()=>{const t=Array.from(b.transitionGroups.value.values());return b.stage.value.step===w.ViewTransitionStage.CaptureNew&&(t.length>0&&t.every(t=>null===t.imagePair.new.value||t.imagePair.new.value.ready.value))});function N(){(0,n().batch)(()=>{p.ViewTransitionState.anyActive.value=!0,b.layers.value=0,b.active.value=!0,b.transitionGroups.value=new Map,b.stage.value=(0,p.makeActiveStage)(w.ViewTransitionStage.CaptureOld,b.stage.peek())})}function E(){(0,n().batch)(()=>{b.stage.value=(0,p.makeActiveStage)(w.ViewTransitionStage.FreezeScreen,b.stage.peek())})}async function M(){var t;(0,n().batch)(()=>{b.stage.value=(0,p.makeActiveStage)(w.ViewTransitionStage.DOMUpdate,b.stage.peek()),b.updateCallbackDone.value=h.postTask(b.wait,{priority:'user-blocking'})}),await b.updateCallbackDone.peek(),null===(t=v.current)||void 0===t||t.setUpdateCallbackDone()}function q(){(0,n().batch)(()=>{b.stage.value=(0,p.makeActiveStage)(w.ViewTransitionStage.CreateAnimations,b.stage.peek())})}function D(){var t;null===(t=v.current)||void 0===t||t.setReady(),(0,n().batch)(()=>{b.stage.value=(0,p.makeActiveStage)(w.ViewTransitionStage.StartAnimations,b.stage.peek())})}function O(){var t;(0,n().batch)(()=>{b.stage.value=(0,p.makeActiveStage)(w.ViewTransitionStage.Complete,b.stage.peek())}),null===(t=v.current)||void 0===t||t.setFinished()}async function R(){await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0))),(0,n().batch)(()=>{b.transitionGroups.value=new Map,p.ViewTransitionState.anyActive.value=!1,b.stage.value=(0,p.makeActiveStage)(w.ViewTransitionStage.Idle,b.stage.peek()),b.active.value=!1,b.className.value=null,b.scope.value=null,b.domUpdateCallbacks.clear()}),v.current=null}function x(t){if(p.ViewTransitionState.debugging.enabled.peek()&&p.ViewTransitionState.debugging.pauseAfterStage.peek()===t){console.log("Pausing after stage: "+t);const n=new AbortController,o=A(p.ViewTransitionState.debugging.pauseAfterStage,n=>t!==n,n.signal),s=A(p.ViewTransitionState.debugging.enabled,t=>!t,n.signal);return o.then(()=>{console.log("Resuming after stage: "+t),n.signal.aborted||n.abort()}),s.then(()=>{n.signal.aborted||n.abort()}),Promise.race([o,s])}}const U=(0,o.useEvent)(async t=>{t&&b.domUpdateCallbacks.add(t),await x(w.ViewTransitionStage.Idle),await h.postTask(()=>N());try{var o;if(await h.postTask(()=>(function(){const t=T(b.scope.peek()),o=new Map;if(!t.length)return;t.forEach(t=>{const{name:s,transitionElement:l}=k(t,!0);if(!s)return;const u={name:s,order:b.layers.value++,imagePair:{old:(0,n().signal)(l),new:(0,n().signal)(null)},transition:b};var c,p;if(o.has(s))throw console.error(`[view-transition-name="&#x20B9;{s}"] already exists`,{existing:null===(c=o.get(s))||void 0===c||null===(p=c.imagePair.old.peek())||void 0===p?void 0:p.element,new:l.element}),new Error(`[view-transition-name="&#x20B9;{s}"] already exists`);o.set(s,u)});const s=A(C,t=>!!t);return b.transitionGroups.value=o,s})()),await x(w.ViewTransitionStage.CaptureOld),await h.postTask(E),await x(w.ViewTransitionStage.FreezeScreen),await h.postTask(M),await x(w.ViewTransitionStage.DOMUpdate),null===(o=v.current)||void 0===o||!o.isTransitionSkipped.peek()){await h.postTask(()=>(function(){b.stage.value=(0,p.makeActiveStage)(w.ViewTransitionStage.CaptureNew,b.stage.peek());const t=T(b.scope.peek());if(!t.length)return;const o=new Map(b.transitionGroups.peek()),s=[];t.forEach(t=>{const{name:l,transitionElement:u}=k(t);if(!l)return;if(s.includes(l))throw new Error(`[view-transition-name="&#x20B9;{l}"] already exists`);s.push(l);const c=o.get(l)||{name:l,order:b.layers.value++,imagePair:{old:(0,n().signal)(null),new:(0,n().signal)(u)},transition:b};c.imagePair.new.value=u,o.set(l,c)});const l=A(P,t=>!!t);return b.transitionGroups.value=o,l})()),await x(w.ViewTransitionStage.CaptureNew),await h.postTask(q),await x(w.ViewTransitionStage.CreateAnimations);const{animations:t}=await h.postTask(y);await h.postTask(D),await x(w.ViewTransitionStage.StartAnimations),await t}}catch(t){b.stage.peek().step===w.ViewTransitionStage.CaptureOld&&await h.postTask(M),console.log(t)}finally{await h.postTask(O),await x(w.ViewTransitionStage.Complete),await h.postTask(R)}}),F=(0,o.useEvent)(t=>{const{polyfill:o}=p.ViewTransitionState;if(o.supportsNative.peek()&&!o.disableNative.peek()){t&&b.domUpdateCallbacks.add(t),N();const n=(0,o.startViewTransition.value)(()=>b.wait());return n.ready.then(()=>{b.stage.value=(0,p.makeActiveStage)(w.ViewTransitionStage.CreateAnimations,b.stage.peek())}),n.updateCallbackDone.then(()=>{b.stage.value=(0,p.makeActiveStage)(w.ViewTransitionStage.DOMUpdate,b.stage.peek())}),n.finished.then(()=>{R()}),n}return v.current=(function(){const[t,o]=V(),[s,l]=V(),[u,c]=V(),p=(0,n().signal)(!1);return{finished:t,isTransitionSkipped:p,ready:s,setFinished:o,setReady:l,setUpdateCallbackDone:c,skipTransition:function(){p.value=!0},updateCallbackDone:u}})(),U(t),v.current}),G=p.ViewTransitionState.instance;return G.start.peek()!==F&&(G.start.value=F,(function(){const{polyfill:t}=p.ViewTransitionState;t.filled.peek()&&(document.startViewTransition=t.startViewTransition.value,t.filled.value=!1)})(),(function(t){const{polyfill:n}=p.ViewTransitionState;if(!n.filled.peek()){const o='startViewTransition'in document&&null!==document.startViewTransition;o&&(n.startViewTransition.value=document.startViewTransition.bind(document)),document.startViewTransition=t,n.supportsNative.value=o,c.TransitionStatus.supportsNative.value=o,n.filled.value=!0,c.IsInitialized.peek()||requestAnimationFrame(()=>{c.IsInitialized.value=!0})}})(F)),(0,S.jsx)(f.RootStyleSync,{viewTransition:b})});e.ViewTransitionCoordinator=b}),"9e4356",["a27fc3","a954a0","f4e9c4","265637","8994c5","53bb4a","8ffcf9","7bc311","65f102","3259b1","19da35","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FadeEffect=void 0;var t=r(d[0]),n=r(d[1]);let f,o,c=t=>t;const s=(0,t.cssFragment)(f||(f=c`
  @keyframes &#x20B9;{0} {
    from {
      opacity: var(--view-transition-fade-effect_opacity-from, 0);
      visibility: visible;
    }
    to {
      opacity: var(--view-transition-fade-effect_opacity-to, 1);
    }
  }
`),"fade"),p={name:"fade",apply:f=>(0,t.cssFragment)(o||(o=c`
      --view-transition_mix-blend-mode: plus-lighter;
      opacity: var(--view-transition-fade-effect_opacity-from);

      &#x20B9;{0}
      &#x20B9;{0}
      animation: &#x20B9;{0};
    `),s,(t=>{if(!t)return'';let f='';const{startOpacity:o,endOpacity:c}=t,s=new Map;return(0,n.setIfDefined)('--view-transition-fade-effect_opacity-from',o,s),(0,n.setIfDefined)('--view-transition-fade-effect_opacity-to',c,s),(0,n.setCommonOptions)("fade",t,s),s.forEach((t,n)=>{f+=`&#x20B9;{n}: &#x20B9;{t};`}),f})(f),p.animation),animation:(0,n.makeAnimationDefaults)("fade",{timingFunction:'linear'})};e.FadeEffect=p}),"a133c0",["4786a8","54a6ea"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PolyfillOnlyMoveEffect=void 0;var t=r(d[0]),n=r(d[1]);let o,f,v=t=>t;const s=(0,t.cssFragment)(o||(o=v`
  @keyframes move {
    from {
      height: var(--view-transition-group-old_height);
      width: var(--view-transition-group-old_width);
      transform: translate(
        var(--view-transition-move-effect_from-x, 0),
        var(--view-transition-move-effect_from-y, 0)
      );
    }

    to {
      height: var(--view-transition-group-new_height);
      width: var(--view-transition-group-new_width);
      transform: translate(var(--view-transition_to-x, 0), var(--view-transition_to-y, 0));
    }
  }
`)),l={name:"move",apply:o=>(0,t.cssFragment)(f||(f=v`
      /* normal blending to allow new view to
    sit on top & hide old view */
      --view-transition_mix-blend-mode: normal;

      &#x20B9;{0}
      &#x20B9;{0}
      animation: &#x20B9;{0};
    `),s,(t=>{if(!t)return'';let o='';const{startX:f,startY:v,endX:s,endY:l}=t,w=new Map;return(0,n.setIfDefined)('--view-transition-move-effect_from-x',f,w),(0,n.setIfDefined)('--view-transition-move-effect_from-y',v,w),(0,n.setIfDefined)('--view-transition-move-effect_to-x',s,w),(0,n.setIfDefined)('--view-transition-move-effect_to-y',l,w),(0,n.setCommonOptions)("move",t,w),w.forEach((t,n)=>{o+=`&#x20B9;{n}: &#x20B9;{t};`}),o})(o),l.animation),animation:(0,n.makeAnimationDefaults)("move")};e.PolyfillOnlyMoveEffect=l}),"a835c2",["4786a8","54a6ea"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useOnResize=function({skip:c,element:s,onlyWhen:o,onResize:l}){const{waitForResizeObserver:v}=(0,u.useWaitForResizeObserverPolyfill)(),f=(0,n.useRef)(null),h=(0,n.useRef)(null),R=(0,n.useRef)(null),b=(0,n.useRef)(null),z=(0,t.useEvent)(n=>{var t;let u,c;if(null!==(t=n[0].borderBoxSize)&&void 0!==t&&t.length){const{blockSize:t,inlineSize:s}=n[0].borderBoxSize[0];c=t,u=s}else c=n[0].contentRect.height,u=n[0].contentRect.width;c!==f.current&&(R.current=f.current,f.current=c),u!==h.current&&(b.current=h.current,h.current=u),o&&!o({entries:n,height:c,previousHeight:R.current,previousWidth:b.current,width:u})||l({entries:n,previousHeight:R.current,previousWidth:b.current,width:u,height:c})}),p=(0,n.useRef)(null),w=(0,n.useRef)(s),O=(0,n.useRef)(s?[{element:s}]:[]),k=(0,n.useCallback)((n,t)=>{var u;p.current?null===(u=p.current)||void 0===u||u.observe(n,t):O.current.push({element:n,options:t})},[]),S=(0,n.useCallback)(n=>{var t;null===(t=p.current)||void 0===t||t.unobserve(n)},[]);w.current!==s&&(w.current&&S(w.current),s&&(k(s),w.current=s));const W=(0,n.useRef)(!1);return(0,n.useEffect)(()=>{if(!c){if(!W.current){if(!('ResizeObserver'in window))return void v().then(()=>{W.current=!0,n()});W.current=!0}return n(),()=>{var n;return null===(n=p.current)||void 0===n?void 0:n.disconnect()}}function n(){p.current=new ResizeObserver(z),O.current.forEach(({element:n,options:t})=>{k(n,t)}),O.current=[]}},[c,W,z,k,v]),{observe:k,unobserve:S}};var n=r(d[0]),t=r(d[1]),u=r(d[2])}),"aac0d2",["a27fc3","f4e9c4","7f17e4"]);
__d((function(g,r,i,a,m,e,d){
/** @license React v16.14.0
   * react-jsx-dev-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
'use strict';if(r(d[0]),e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;e.Fragment=o("react.fragment")}e.jsxDEV=void 0}),"b1e39b",["a27fc3"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useElementSize=function(l){const{element:s,monitor:c,skip:o,mode:h,onSizeChanged:f,threshold:b=5}=l||{},v=(0,n.useRef)(o),p=(0,n.useRef)(null),k=(0,n.useRef)(null),R=(0,n.useCallback)(n=>{k.current=n},[]),[y,z]=(0,n.useState)({height:null,width:null,entries:[],previousHeight:null,previousWidth:null,target:null}),{observe:S,unobserve:_}=(0,u.useOnResize)({skip:o,onlyWhen:({height:n,previousHeight:t,previousWidth:u,width:l})=>{const s=null===t||Math.abs(n-t)>b,o=null===u||Math.abs(l-u)>b;return'height'===c?s:'width'===c?o:o||s},onResize:n=>{const t={...n,target:p.current};'callback-only'!==h&&z(t),null==f||f(t)}}),w=(0,n.useCallback)((n,t)=>{p.current!==n&&(p.current&&_(p.current),p.current=n,n&&S(n,t))},[S,_]);(0,t.useSignalEffect)(()=>{s&&w(s.value)}),v.current!==o&&(v.current=o,o?(k.current=p.current,w(null)):(w(k.current),k.current=null));if('callback-only'===h)return{ref:w};return{...y,ref:o?R:w}};var n=r(d[0]),t=r(d[1]),u=r(d[2])}),"c376e0",["a27fc3","265637","aac0d2"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.attachTransitionElement=function({element:t,setRoot:n,transitionElement:o}){t&&!o.peek().ready.peek()&&(!(function(t){if('none'===window.getComputedStyle(t).display)return!0;const n=l('view-transition-image-pair',t.parentElement);if(!n)return!1;if('none'===window.getComputedStyle(n).display)return!0;const o=l('view-transition-group',n.parentElement);if(!o)return!1;if('none'===window.getComputedStyle(o).display)return!0;const s=l('view-transition',o.parentElement);return!!s&&'none'===window.getComputedStyle(s).display})(t)?n(t):o.value.ready.value=!0)},e.readyToApply=function(t,o){let s=!1;switch(t.transition.stage.value.step){case n.ViewTransitionStage.CaptureOld:case n.ViewTransitionStage.FreezeScreen:case n.ViewTransitionStage.DOMUpdate:case n.ViewTransitionStage.CaptureNew:s='frozen';break;case n.ViewTransitionStage.CreateAnimations:case n.ViewTransitionStage.StartAnimations:case n.ViewTransitionStage.Complete:s='apply'}if(!s)return null;if('frozen'===s)return{["frozen-view-transition-"+o]:t.name};return{["view-transition-"+o]:t.name}},e.viewTransitionElementFragment=void 0;var t=r(d[0]),n=r(d[1]);let o;const s=(0,t.cssFragment)(o||(o=(t=>t)`
  height: auto;
  left: 0;
  mix-blend-mode: var(--view-transition_forced-blend-mode, var(--view-transition_mix-blend-mode));
  position: absolute;
  top: 0;
  width: 100%;

  /* This assumes we will have a static wrapper, if we ever allow live content
  in the old side we need to update this. */
  > [data-static-element-wrapper] > [view-transition-element] [view-transition-element] {
    --view-transition_visibility: hidden;
  }

  > [data-static-element-wrapper] > [view-transition-element] {
    left: 0;
    top: 0;
    margin: 0;
    translate: 0;
    opacity: 1;
    flex: 1;
  }
`));function l(t,n){return n?n.hasAttribute(t)?n:l(t,n.parentElement):null}e.viewTransitionElementFragment=s}),"c39fcd",["4786a8","65f102"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.progressiveEasing=void 0;let n;const t=(0,r(d[0]).cssFragment)(n||(n=(n=>n)`
  :root {
    @supports (transition-timing-function: linear(0, 0 0%)) {
      /* stylelint-disable-next-line function-no-unknown */
      /* stylelint-disable-next-line airbnb-plugin/no-custom-motion-curve */
      --linaria-theme_motion-standard-curve-animation-timing-function: linear(
        0,
        0.02044 2.46%,
        0.08322 5.391%,
        0.46561 17.652%,
        0.63901 24.342%,
        0.76663 31.093%,
        0.85981 38.454%,
        0.92965 47.845%,
        0.97154 59.516%,
        0.99189 74.867%,
        0.9991
      );
      /* stylelint-disable-next-line function-no-unknown */
      /* stylelint-disable-next-line airbnb-plugin/no-custom-motion-curve */
      --linaria-theme_motion-enter-curve-animation-timing-function: linear(
        0,
        0.01942 1.83%,
        0.07956 4.02%,
        0.47488 13.851%,
        0.65981 19.572%,
        0.79653 25.733%,
        0.89048 32.693%,
        0.95081 41.254%,
        0.98361 52.535%,
        0.99665 68.277%,
        0.99988
      );
      /* stylelint-disable-next-line function-no-unknown */
      /* stylelint-disable-next-line airbnb-plugin/no-custom-motion-curve */
      --linaria-theme_motion-exit-curve-animation-timing-function: linear(
        0,
        0.01942 1.83%,
        0.07956 4.02%,
        0.47488 13.851%,
        0.65981 19.572%,
        0.79653 25.733%,
        0.89048 32.693%,
        0.95081 41.254%,
        0.98361 52.535%,
        0.99665 68.277%,
        0.99988
      );
    }
  }
`));e.progressiveEasing=t}),"c55e06",["4786a8"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RelativeMoveEffect=void 0;var t=r(d[0]),n=r(d[1]);let o,v,f=t=>t;const s='relative-move',l=(0,t.cssFragment)(o||(o=f`
  /* normal blending to allow new view to
    sit on top & hide old view */
  --view-transition_mix-blend-mode: normal;
  --view-transition-fade-effect_opacity-from: 1;

  @keyframes &#x20B9;{0} {
    from {
      filter: var(--view-transition_from-filter);
      visibility: visible;
      transform: translate(
        var(--view-transition-relative-move-effect_from-x, 0),
        var(--view-transition-relative-move-effect_from-y, 0)
      );
      scale: var(--view-transition-relative-move-effect_scale-from, 1);
    }

    to {
      filter: var(--view-transition_to-filter);
      transform: translate(
        var(--view-transition-relative-move-effect_to-x, 0),
        var(--view-transition-relative-move-effect_to-y, 0)
      );
      scale: var(--view-transition-relative-move-effect_scale-to, 1);
    }
  }
`),s),c={name:s,align:()=>"\n    margin-top: calc(\n      var(--view-transition-group-new_top, 0) - var(--view-transition-group-old_top, 0)\n    );\n  ",apply:o=>(0,t.cssFragment)(v||(v=f`
      &#x20B9;{0}
      &#x20B9;{0}
      animation: &#x20B9;{0};
    `),l,(t=>{if(!t)return'';let o='';const{startX:v,startY:f,endX:l,endY:c,startScale:w,endScale:_}=t,p=new Map;return(0,n.setIfDefined)('--view-transition-relative-move-effect_from-x',v,p),(0,n.setIfDefined)('--view-transition-relative-move-effect_from-y',f,p),(0,n.setIfDefined)('--view-transition-relative-move-effect_to-x',l,p),(0,n.setIfDefined)('--view-transition-relative-move-effect_to-y',c,p),(0,n.setIfDefined)('--view-transition-relative-move-effect_scale-from',w,p),(0,n.setIfDefined)('--view-transition-relative-move-effect_scale-to',_,p),(0,n.setCommonOptions)(s,t,p),p.forEach((t,n)=>{o+=`&#x20B9;{n}: &#x20B9;{t};`}),o})(o),c.animation),animation:(0,n.makeAnimationDefaults)(s)};e.RelativeMoveEffect=c}),"c7a0f1",["4786a8","54a6ea"]);
__d((function(g,r,i,a,m,e,d){
/**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
'use strict';var t=r(d[0]);var n="function"==typeof Object.is?Object.is:function(t,n){return t===n&&(0!==t||1/t==1/n)||t!=t&&n!=n},u=t.useState,o=t.useEffect,c=t.useLayoutEffect,s=t.useDebugValue;function f(t){var u=t.getSnapshot;t=t.value;try{var o=u();return!n(t,o)}catch(t){return!0}}var v=void 0===window.document||void 0===window.document.createElement?function(t,n){return n()}:function(t,n){var v=n(),S=u({inst:{value:v,getSnapshot:n}}),l=S[0].inst,y=S[1];return c((function(){l.value=v,l.getSnapshot=n,f(l)&&y({inst:l})}),[t,v,n]),o((function(){return f(l)&&y({inst:l}),t((function(){f(l)&&y({inst:l})}))}),[t]),s(v),v};e.useSyncExternalStore=void 0!==t.useSyncExternalStore?t.useSyncExternalStore:v}),"d3dab3",["a27fc3"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(){const t=r(d[0]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.a11y=void 0,e.initialize=function(){var n;const o=navigator.userAgent.includes('OS X'),s=navigator.userAgent.includes('iPhone')||navigator.userAgent.includes('iPad');if(!('matchMedia'in window))return void(t.system.value=!1);const u=matchMedia('(prefers-reduced-motion: reduce)');function c(n){'fast'===t.update.peek()?(t.system.value=n,t.user.value=n?o||s?'no-motion':'no-animation':'motion'):t.user.value='no-animation'}t.system.value=u.matches,window.motionPreference=t;const l=matchMedia('(update: slow)').matches,v=matchMedia('(update: none)').matches;(l||v)&&(t.update.value=l?'slow':'none');c(t.system.value),null===(n=u.addEventListener)||void 0===n||n.call(u,'change',n=>{c(n.matches)})},e.motionPreference=void 0;const t={system:(0,n().signal)(null),user:(0,n().signal)('motion'),update:(0,n().signal)('fast')};e.motionPreference=t;e.a11y={motion:'@media (prefers-reduced-motion: no-preference)',noMotion:'@media (prefers-reduced-motion: reduce), (update: slow), (update: none)'}}),"daa5d1",["a954a0"]);
__d((function(g,r,i,a,m,e,d){"use strict";function t(){const n=r(d[0]);return t=function(){return n},n}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"batch",{enumerable:!0,get:function(){return t().batch}}),Object.defineProperty(e,"computed",{enumerable:!0,get:function(){return t().computed}}),Object.defineProperty(e,"effect",{enumerable:!0,get:function(){return t().effect}}),Object.defineProperty(e,"signal",{enumerable:!0,get:function(){return t().signal}}),Object.defineProperty(e,"untracked",{enumerable:!0,get:function(){return t().untracked}}),Object.defineProperty(e,"useComputed",{enumerable:!0,get:function(){return n.useComputed}}),Object.defineProperty(e,"useSignal",{enumerable:!0,get:function(){return n.useSignal}}),Object.defineProperty(e,"useSignalEffect",{enumerable:!0,get:function(){return n.useSignalEffect}}),Object.defineProperty(e,"useSignals",{enumerable:!0,get:function(){return n.useSignals}});var n=r(d[1])}),"e086eb",["a954a0","250cdf"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extendPattern=function(n,s){const{newScreenEndX:f,newScreenEndY:o,newScreenStartX:c,newScreenStartY:u,scrimStartBrightness:_,scrimEndBrightness:&#x20B9;}=s,{name:h}=n;let S='';const p=new Map;return(0,t.setIfDefined)(`--&#x20B9;{h}_offset-y-to`,o,p),(0,t.setIfDefined)(`--&#x20B9;{h}_offset-y-from`,u,p),(0,t.setIfDefined)(`--&#x20B9;{h}_offset-x-to`,f,p),(0,t.setIfDefined)(`--&#x20B9;{h}_offset-x-from`,c,p),(0,t.setIfDefined)('--scrim-animation_start-brightness',_,p),(0,t.setIfDefined)('--scrim-animation_end-brightness',&#x20B9;,p),(0,t.setCommonOptions)(h,s,p),p.forEach((t,n)=>{S+=`&#x20B9;{n}: &#x20B9;{t};`}),n.mapping.forEach(([t,{key:n,type:f}])=>{if(void 0!==s[n]){const o=(function(t,n){switch(t){case'duration':return n+"ms";default:return n}})(f||'string',s[n]);S+=`&#x20B9;{t}: &#x20B9;{o};`}}),S};var t=r(d[0])}),"e58d86",["54a6ea"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/magic-move/TransitionLayer.d44ab07d2d.js.map