__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireDefault(r(d[0]));babelHelpers.interopRequireDefault(r(d[1]));var t=(0,l.default)(()=>r(d[3])(d[2]).then(babelHelpers.interopRequireWildcard));e.default=t}),"1c7df6",["b4385c","d17907","bb382f","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireDefault(r(d[0]));babelHelpers.interopRequireDefault(r(d[1]));var t=(0,l.default)(()=>r(d[3])(d[2]).then(babelHelpers.interopRequireWildcard));e.default=t}),"27d966",["b4385c","d17907","c3e210","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";function t(){const n=r(d[0]);return t=function(){return n},n}function n(){const t=r(d[1]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.logModalPassportImpression=function(o,u){var l;s.default.logJitneyEvent({event_data:{ancestor_logging_ids:[],ancestor_uuids:[],component:'PassportCardModal',logging_id:'searchResults.hostminiPassport',event_data_schema:"Explore.v1.ExplorePageLoggingContext",event_data:JSON.stringify({extra_data:{hostId:o.userId,isVerified:o.isVerified,isSuperhost:o.isSuperhost,stats:null===(l=o.stats)||void 0===l?void 0:l.reduce((t,n)=>n.type?{...t,[n.type]:n.value}:t,{}),hostHighlights:u}}),uuid:(0,n().v4)()},schema:t().UniversalComponentImpressionEvent})};var s=babelHelpers.interopRequireDefault(r(d[2]))}),"357eda",["60aeb4","305dd5","c8b97a"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireDefault(r(d[0]));babelHelpers.interopRequireDefault(r(d[1]));var t=(0,l.default)(()=>r(d[3])(d[2]).then(babelHelpers.interopRequireWildcard));e.default=t}),"76c417",["b4385c","d17907","cee2d6","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=(0,r(d[0]).createContext)({preTranslatedContentAvailable:!1,preTranslatedContentEnabled:!1,setPreTranslatedContentEnabled:()=>null});e.default=t}),"7b310d",["a27fc3"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireWildcard(r(d[0])),o=babelHelpers.interopRequireDefault(r(d[1])),t=babelHelpers.interopRequireDefault(r(d[2])),n=r(d[3]);var c=function({children:c,user:u}){const[s,v]=(0,l.useState)(!!u.isAutoTranslationEnabled),[z,S]=(0,l.useState)(!1);(0,l.useEffect)(()=>{const l=(function(l){return[()=>!!l.localizedAbout,()=>{var t,n,c,u,s,v,z,S,b,f,p,H,L,h,T,y,k,F,q,P;const W=o.default.locale();return!(null===(t=l.localizedBreakfast)||void 0===t||!t.localizedString||(null===(n=l.localizedBreakfast)||void 0===n?void 0:n.detectedSourceLocale)===W)||(!(null===(c=l.localizedBiographyTitle)||void 0===c||!c.localizedString||(null===(u=l.localizedBiographyTitle)||void 0===u?void 0:u.detectedSourceLocale)===W)||(!(null===(s=l.localizedFunFact)||void 0===s||!s.localizedString||(null===(v=l.localizedFunFact)||void 0===v?void 0:v.detectedSourceLocale)===W)||(!(null===(z=l.localizedHostHospitality)||void 0===z||!z.localizedString||(null===(S=l.localizedHostHospitality)||void 0===S?void 0:S.detectedSourceLocale)===W)||(!(null===(b=l.localizedObsession)||void 0===b||!b.localizedString||(null===(f=l.localizedObsession)||void 0===f?void 0:f.detectedSourceLocale)===W)||(!(null===(p=l.localizedPets)||void 0===p||!p.localizedString||(null===(H=l.localizedPets)||void 0===H?void 0:H.detectedSourceLocale)===W)||(!(null===(L=l.localizedStayUniqueness)||void 0===L||!L.localizedString||(null===(h=l.localizedStayUniqueness)||void 0===h?void 0:h.detectedSourceLocale)===W)||(!(null===(T=l.localizedUselessSkills)||void 0===T||!T.localizedString||(null===(y=l.localizedUselessSkills)||void 0===y?void 0:y.detectedSourceLocale)===W)||(!(null===(k=l.localizedWastedTime)||void 0===k||!k.localizedString||(null===(F=l.localizedWastedTime)||void 0===F?void 0:F.detectedSourceLocale)===W)||!(null===(q=l.localizedWork)||void 0===q||!q.localizedString||(null===(P=l.localizedWork)||void 0===P?void 0:P.detectedSourceLocale)===W)))))))))},()=>{var o,t,n,c;const u=l=>{var o;return!(null===(o=l.translation)||void 0===o||!o.comments)};return(null===(o=l.reviewHighlightsFromGuests)||void 0===o||null===(t=o.reviews)||void 0===t?void 0:t.some(u))||(null===(n=l.reviewHighlightsFromHosts)||void 0===n||null===(c=n.reviews)||void 0===c?void 0:c.some(u))}].some(l=>l())})(u);S(l)},[u]);const b=(0,l.useMemo)(()=>({preTranslatedContentAvailable:z,preTranslatedContentEnabled:s,setPreTranslatedContentEnabled:v}),[z,s]);return(0,n.jsx)(t.default.Provider,{value:b,children:c})};e.default=c}),"7d99e4",["a27fc3","862e50","7b310d","14def0"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.bodyRegistry=void 0;var l=babelHelpers.interopRequireDefault(r(d[0])),t=babelHelpers.interopRequireDefault(r(d[1])),o=babelHelpers.interopRequireDefault(r(d[2])),s=babelHelpers.interopRequireDefault(r(d[3])),u=babelHelpers.interopRequireDefault(r(d[4])),f=babelHelpers.interopRequireDefault(r(d[5])),n=babelHelpers.interopRequireDefault(r(d[6])),p=babelHelpers.interopRequireDefault(r(d[7])),b=babelHelpers.interopRequireDefault(r(d[8])),c=babelHelpers.interopRequireDefault(r(d[9])),R=babelHelpers.interopRequireDefault(r(d[10])),P=babelHelpers.interopRequireDefault(r(d[11]));const H={sections:{UserProfileHeaderSection:{loader:l.default},UserProfileEmptySection:{loader:t.default},UserProfileBioSection:{loader:o.default},UserProfileReviewsSection:{loader:s.default},UserProfileInterestsSection:{loader:u.default},UserProfilePastTripsSection:{loader:f.default},UserProfileListingsSection:{loader:n.default},UserProfileExperiencesSection:{loader:p.default},UserProfileGuidebooksSection:{loader:b.default},UserProfileReportSection:{loader:c.default},UserProfileVerificationsSection:{loader:R.default},UserProfileRecognitionSection:{loader:P.default}}};e.bodyRegistry=H}),"85bba5",["27d966","edff60","e0458f","1c7df6","ba727f","e55545","76c417","8fdb47","c916fe","c35f17","9faee7","da2e9e"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireDefault(r(d[0]));babelHelpers.interopRequireDefault(r(d[1]));var t=(0,l.default)(()=>r(d[3])(d[2]).then(babelHelpers.interopRequireWildcard));e.default=t}),"8fdb47",["b4385c","d17907","78a08a","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireDefault(r(d[0]));babelHelpers.interopRequireDefault(r(d[1]));var t=(0,l.default)(()=>r(d[3])(d[2]).then(babelHelpers.interopRequireWildcard));e.default=t}),"9faee7",["b4385c","d17907","f9170b","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireDefault(r(d[0]));babelHelpers.interopRequireDefault(r(d[1]));var t=(0,l.default)(()=>r(d[3])(d[2]).then(babelHelpers.interopRequireWildcard));e.default=t}),"ba727f",["b4385c","d17907","6f333e","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireDefault(r(d[0]));babelHelpers.interopRequireDefault(r(d[1]));var t=(0,l.default)(()=>r(d[3])(d[2]).then(babelHelpers.interopRequireWildcard));e.default=t}),"c35f17",["b4385c","d17907","36a88a","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireDefault(r(d[0]));babelHelpers.interopRequireDefault(r(d[1]));var t=(0,l.default)(()=>r(d[3])(d[2]).then(babelHelpers.interopRequireWildcard));e.default=t}),"c916fe",["b4385c","d17907","a35a4f","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireDefault(r(d[0]));babelHelpers.interopRequireDefault(r(d[1]));var t=(0,l.default)(()=>r(d[3])(d[2]).then(babelHelpers.interopRequireWildcard));e.default=t}),"da2e9e",["b4385c","d17907","66112a","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireDefault(r(d[0]));babelHelpers.interopRequireDefault(r(d[1]));var t=(0,l.default)(()=>r(d[3])(d[2]).then(babelHelpers.interopRequireWildcard));e.default=t}),"e55545",["b4385c","d17907","0df865","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireDefault(r(d[0]));babelHelpers.interopRequireDefault(r(d[1]));var t=(0,l.default)(()=>r(d[3])(d[2]).then(babelHelpers.interopRequireWildcard));e.default=t}),"edff60",["b4385c","d17907","1e6809","c592d7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=babelHelpers.interopRequireWildcard(r(d[0])),s=(r(d[1]),babelHelpers.interopRequireDefault(r(d[2]))),o=babelHelpers.interopRequireDefault(r(d[3])),n=r(d[4]),l=babelHelpers.interopRequireDefault(r(d[5])),c=babelHelpers.interopRequireDefault(r(d[6])),u=r(d[7]),p=r(d[8]),f=r(d[9]),b=babelHelpers.interopRequireWildcard(r(d[10]));r(d[11]);function h(){const t=r(d[12]);return h=function(){return t},t}var v=babelHelpers.interopRequireDefault(r(d[13])),y=r(d[14]),R=babelHelpers.interopRequireDefault(r(d[15])),w=babelHelpers.interopRequireDefault(r(d[16])),x=babelHelpers.interopRequireDefault(r(d[17])),S=r(d[18]),P=babelHelpers.interopRequireWildcard(r(d[19])),D=babelHelpers.interopRequireDefault(r(d[20])),H=r(d[21]),_=r(d[22]);const T="c1lrn0gt",U="hm2cn26",M="c50kde4",j="co3jwd2",C="s1n2m3px",F="s19aae9o",k="h1t2a4tw",I="h1eaa4om",q="h18zea9z",E=Object.freeze([{width:'70%',opacity:'0.2'},{width:'87%',opacity:'0.15'},{width:'79%',opacity:'0.1'},{width:'75%',opacity:'0.05'}]);var G=(0,R.default)('PassportCardModal',{},P.shouldSkipTracking)((function({listingId:R,primaryHostPassport:G,modalCardRef:N,modalContainerRef:A,animationState:L,cardState:V="modal",cardVisibility:B="visible",onClose:O,loggingID:W,eventData:z,eventDataSchema:&#x20B9;,shouldLogImpression:K}){var J,Q;const X=(0,f.useCx)(),[Y,Z]=(0,t.useState)(!1),[ee,te]=(0,t.useState)(null),ie=(0,h().useNiobeMinimalistClient)(),{scheduler:re}=(0,y.usePostTaskScheduler)({priority:'background'}),se=(0,h().usePrefetch)(),oe="/users/show/"+G.userId;(0,t.useEffect)(()=>{let t=!0,s=null;return(async function(){try{const o=(0,p.createGlobalId)('User',G.userId||''),n=re.setTimeout(()=>{Z(!0)},75),{data:l,errors:c}=await ie.query({query:w.default,variables:{userId:o||''}});if(clearTimeout(n),!t)return;if(c)return void te(null);requestAnimationFrame(()=>{te(l||null)})}catch(t){return void te(null)}finally{Z(!1),s=re.setTimeout(()=>{se({path:oe})},5e3)}})(),()=>{t=!1,s&&clearTimeout(s)}},[G.userId]);const ne=(0,S.useEvent)(t=>{re.postTask(()=>{(0,H.logModalPassportImpression)(G,t)})}),ae=(0,t.useRef)(null),le=(0,t.useRef)(null),ce=(0,t.useRef)(null),ue=(0,S.useEvent)(t=>{if(t.target!==(null==A?void 0:A.current))return;const{scrollTop:s}=t.target;var o;ce.current||(ce.current=(null===(o=le.current)||void 0===o?void 0:o.getBoundingClientRect().top)||720);const l=Math.max(ce.current-720,0),c=ce.current,u=(s-l)/(c-l),p=(0,n.hexToRGBValues)('#F0EFE9'),f=(0,n.hexToRGBValues)('#FFFFFF'),b=Math.min(1,Math.max(0,u)),h=`rgb(&#x20B9;{Math.round(p.r+b*(f.r-p.r))}, &#x20B9;{Math.round(p.g+b*(f.g-p.g))}, &#x20B9;{Math.round(p.b+b*(f.b-p.b))})`;requestAnimationFrame(()=>{null!=A&&A.current&&null!=ae&&ae.current&&(A.current.style.backgroundColor=h,ae.current.style.backgroundColor=h,ae.current.style.opacity=s>0?'1':'0',ae.current.style.visibility=s>0?'visible':'hidden')})});(0,D.default)({componentName:'PassportCardModal',loggingID:W,eventData:z,eventDataSchema:&#x20B9;,shouldLogImpressionOnMount:K,skip:!(0,P.default)()});const de=null==ee||null===(J=ee.presentation)||void 0===J||null===(Q=J.userProfileContainer)||void 0===Q?void 0:Q.userProfile,{smartName:pe,reviewsAuthoredAsGuest:me,reviewHighlightsFromGuests:fe,reviewHighlightsFromHosts:ge,reviewsReceivedFromGuests:be,reviewsReceivedFromHosts:he,managedListingsTotalCount:ve,recognitions:ye,interests:Re,pastTrips:we,preference:xe,hostedExperiences:Se,travelGuides:Pe,managedListings:De,isAutoTranslationEnabled:He,userId:_e}=de||{},{isExperienceHost:Te,isHomeHost:Ue,isViewerProfileOwner:Me}=de||{},je=!!Ue||!!Te,Ce={'--content-overflow-y':'idle'===L?'scroll':'visible','--bio-info-grid-template-columns':'1fr','--bio-wide-gap':b.default.spacing.macro24px,'--bio-about-width':'100%','--pt-contentscroller-visible-items':2,'--reviews-section-gap':b.default.spacing.macro24px,'--reviews-contentscroller-visible-items':1,'--reviews-btn-align-self':'none','--interests-max-width':'100%','--guidebooks-contentscroller-visible-items':2,'--listings-contentscroller-visible-items':2,'--recognition-contentscroller-visible-items':2,'--recognition-contentscroller_gap':b.default.spacing.micro8px,'--experiences-contentscroller-visible-items':2,'--hide-on-wide-display':'block','--show-on-wide-display':'none','--section-divider-margin':"40px 0",'--section-heading-margin-bottom':b.default.spacing.macro24px,'--report-margin-top':'-20px'},Fe=[{type:'UserProfileBioSection',sectionData:{__typename:'UserProfileBioSection',user:de,showEditor:()=>{},collapseByLines:!0,logHighlightsTypes:ne,endOfSectionRef:le}},{type:'UserProfileReviewsSection',sectionData:{__typename:'UserProfileReviewsSection',isAutoTranslationEnabled:!!He,type:je?'host':'guest',isViewerProfileOwner:!!Me,name:pe,reviewsAuthoredAsGuest:me,reviewHighlightsFromGuests:fe,reviewHighlightsFromHosts:ge,reviewsReceivedFromGuests:be,reviewsReceivedFromHosts:he,totalManagedListingsCount:ve,enableModalScroller:!0,userId:_e||null,isTransparentControls:!0}},{type:'UserProfileVerificationsSection',sectionData:{__typename:'UserProfileVerificationsSection',user:de,inSidebar:!1}},{type:'UserProfileRecognitionSection',sectionData:{__typename:'UserProfileRecognitionSection',recognitions:ye||null,smartName:pe||null,enableModalScroller:!0}},{type:'UserProfileInterestsSection',sectionData:{__typename:'UserProfileInterestsSection',interests:Re,name:pe}},{type:'UserProfilePastTripsSection',sectionData:{__typename:'UserProfilePastTripsSection',pastTrips:we,name:pe||null,preference:xe,enableModalScroller:!0}},{type:'UserProfileListingsSection',sectionData:{__typename:'UserProfileListingsSection',isAutoTranslationEnabled:!!He,name:pe||null,id:_e||null,managedListings:De,managedListingsTotalCount:ve||0,enableModalScroller:!0}},{type:'UserProfileExperiencesSection',sectionData:{__typename:'UserProfileExperiencesSection',isAutoTranslationEnabled:!!He,name:pe||null,hostedExperiences:Se,enableModalScroller:!0}},{type:'UserProfileGuidebooksSection',sectionData:{__typename:'UserProfileGuidebooksSection',isAutoTranslationEnabled:!!He,smartName:pe||null,travelGuides:Pe,enableModalScroller:!0}},{type:'UserProfileReportSection',sectionData:{__typename:'UserProfileReportSection',user:de}}];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:X(M),ref:o.default,children:(0,_.jsx)(l.default,{onClose:O})}),(0,_.jsx)("div",{ref:ae,className:X(U),"aria-hidden":!0}),(0,_.jsxs)("div",{className:X(T),onScroll:ue,ref:A,style:Ce,children:[(0,_.jsx)("div",{className:X(j),children:(0,_.jsx)(x.default,{cardRef:N,href:oe,cardState:V,cardVisibility:B,placement:"modal",listingId:R,loggingID:"searchResults.hostminiPassport.expand",...G})}),(0,_.jsxs)("div",{className:X(k),children:[(0,_.jsx)("div",{"aria-hidden":!0,className:X(I,!Y&&q),children:E.map(({opacity:t,width:s},o)=>(0,_.jsxs)("div",{className:X(C),style:{opacity:t},children:[(0,_.jsx)("span",{className:X(F),children:(0,_.jsx)(v.default,{backgroundColor:b.default.palette.foggy,block:!1,cornerRadius:b.default.cornerRadius.tiny4px.borderRadius,height:24,width:24})}),(0,_.jsx)(v.default,{backgroundColor:b.default.palette.foggy,block:!1,cornerRadius:b.default.cornerRadius.tiny4px.borderRadius,height:16,width:s})]},o+"-shimmer-card-modal"))}),de&&(0,_.jsx)(c.default,{user:de,children:Fe.map((t,o)=>(0,_.jsx)(s.default,{loader:u.bodyRegistry.sections[t.type].loader,group:"HostPassportModalWide",order:o,heightCacheKey:t.type,children:s=>(0,_.jsx)(s,{sectionData:t.sectionData})},t.type))})]})]})]})}));e.default=G}),"f8f4a0",["a27fc3","ea4b89","a63234","20f35e","bbf5cd","0cb47d","7d99e4","85bba5","56afe0","4786a8","5aed2e","aabdb1","068abc","44e11b","53bb4a","9092d5","b054c3","ab128d","f4e9c4","a38b90","ebe485","357eda","14def0"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/listing-card/components/parts/PassportCard/PassportCardModalWide.18a8d97da9.js.map