__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getFacebookBootstrapData",{enumerable:!0,get:function(){return k.getFacebookBootstrapData}}),e.getLoginStatus=function(){return D().then(o=>new Promise(t=>o.getLoginStatus(t)))},e.handleFacebookSignIn=function(o){return B(o).then(o=>{const t='connected'===o.status;if(!t){let s=n.default.t('user.login.facebook_login_unavailable');return'not_authorized'===o.status&&(s=n.default.t('user.login.facebook_login_unavailable')),{success:t,errorMessage:s}}return{success:t,accessToken:o.authResponse.accessToken}}).catch(o=>{let t=n.default.t('user.login.facebook_login_unavailable');const s=new Map([["Facebook SDK isn't supported on this page",''],[h,n.default.t('user.login.facebook_login_unavailable')],[_,''],["FB SDK init timeout",'']]);if(!s.has(o.message))throw o;{const n=s.get(o.message);n&&(t=n)}return Promise.resolve({success:!1,errorMessage:t})})},e.init=D,e.isFacebookLoaded=w,e.login=B,e.parseXFBML=function(o){return D().then(t=>(t.XFBML&&t.XFBML.parse(o),Promise.resolve()))},e.reportFbError=function(o){o.message!==h&&(0,f.reportError)(o)},e.ui=function(o){return D().then(t=>new Promise(n=>t.ui(o,n)))};var o=babelHelpers.interopRequireDefault(r(d[0])),t=babelHelpers.interopRequireDefault(r(d[1])),n=babelHelpers.interopRequireDefault(r(d[2])),s=babelHelpers.interopRequireDefault(r(d[3])),u=babelHelpers.interopRequireDefault(r(d[4])),c=babelHelpers.interopRequireDefault(r(d[5])),l=r(d[6]),f=r(d[7]),b=babelHelpers.interopRequireDefault(r(d[8])),k=r(d[9]);const p=[],_="Facebook SDK isn't enabled because the facebook_sdk_kill_switch trebuchet is enabled",h="Facebook SDK isn't supported on this page because you have opted out of Facebook third party cookies.";function w(){return!!window.FB}function F(){const t=o.default.get('facebook-init');document.querySelector(`script[src="&#x20B9;{t.sdkUrl}"]`)||(window.fbAsyncInit=()=>(function(o){for(window.FB.init({appId:o,status:!0,cookie:!0,oauth:!0,version:'v6.0'});p.length>0;)p[0](window.FB),p.shift()})(t.appId),window.Airbnb&&(window.Airbnb.FACEBOOK_PERMS=t.scope),(0,s.default)(t.sdkUrl));const n=new Promise(o=>p.push(o));return(0,u.default)(n,1e4).catch(()=>{throw(0,l.airdogCount)('facebook_sdk_init_timeout'),new Error("FB SDK init timeout")})}function D(){const n=o.default.get('facebook-init');if(null==n||!n.enabled)return Promise.reject(new Error("Facebook SDK isn't supported on this page"));if(b.default.getBootstrap('facebook_sdk_kill_switch'))return Promise.reject(new Error(_));if(w())return Promise.resolve(window.FB);const s=t.default.tld_country();return b.default.getBootstrap('facebook_sdk_default_off_country_toggle')?new Promise((o,t)=>{(0,c.default)({toolName:'facebook.com',doesCookieHaveConsentCb:n=>{n?((0,l.airdogCount)('facebook_sdk.cookie_check',1,["country:"+s,'sdk_disabled:false']),F().then(t=>o(t))):((0,l.airdogCount)('facebook_sdk.cookie_check',1,["country:"+s,'sdk_disabled:true']),t(new Error(h)))}})}):((0,l.airdogCount)('facebook_sdk.no_cookie_check',1,["country:"+s]),F())}function B(o){return D().then(t=>new Promise(n=>t.login(n,o)))}}),"17c2da",["0a58da","862e50","a9f4b1","6b26d0","9f8615","e8f252","3e4681","f2f40f","c235f8","f08ba7"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FACEBOOK_ACTION_TYPE=void 0,Object.defineProperty(e,"autologinEnabled",{enumerable:!0,get:function(){return f.autologinEnabled}}),e.default=function(){if(!(0,l.getFacebookBootstrapData)())return;(0,s.airdogCount)('facebook.js.get_login_status.started'),(0,l.getLoginStatus)().then(l=>{if((0,b.getFacebookPromptShowCount)()>=b.MAX_FACEBOOK_PROMPT_SHOW)(0,b.disableFacebookAutologin)(),(0,s.airdogCount)('facebook.js.get_login_status.logout');else{if((0,s.airdogCount)('facebook.js.get_login_status.response',1,["status:"+l.status,"is_logged_in:"+n.default.isLoggedIn(),"auto_login:"+(0,f.autologinEnabled)()]),/fb_action_ids=/.test(document.location.search)&&(u.default.getBootstrap('api_web_client_migration.fejax.enabled')&&!u.default.getBootstrap('api_web_client_migration.fejax.signup_login_dls_shared.kill_switch')?(0,c().logMigration)(_().default.post('/users/detect_fb_session'),{method:'POST',client:'niobe',migrationId:'signup_login_dls_shared',group:'fejax'}):(0,c().logMigration)(t.default.post('/users/detect_fb_session'),{method:'POST',client:'fejax',migrationId:'signup_login_dls_shared',group:'fejax'})),n.default.isLoggedIn())return;'connected'!==l.status||(0,b.hasDismissedFacebookPrompt)()||(u.default.getBootstrap('api_web_client_migration.fejax.enabled')&&!u.default.getBootstrap('api_web_client_migration.fejax.signup_login_dls_shared.kill_switch')?(0,c().logMigration)(_().default.post('/users/facebook_auto_login',{body:JSON.stringify({check_linked_airbnb_account:!0}),headers:{'X-Requested-With':'XmlHttpRequest'}}),{method:'POST',client:'niobe',migrationId:'signup_login_dls_shared',group:'fejax'}):(0,c().logMigration)(t.default.post('/users/facebook_auto_login',{check_linked_airbnb_account:!0}),{method:'POST',client:'fejax',migrationId:'signup_login_dls_shared',group:'fejax'})).then(t=>{t.has_linked_airbnb_account?(o.default.emit('initializeFacebookPrompt'),(0,b.setFacebookPromptShowCount)()):((0,b.setHideFacebookPrompt)(),(0,b.disableFacebookAutologin)())})}}).catch(l.reportFbError)},Object.defineProperty(e,"hasDismissedFacebookPrompt",{enumerable:!0,get:function(){return b.hasDismissedFacebookPrompt}});var t=babelHelpers.interopRequireDefault(r(d[0])),o=babelHelpers.interopRequireDefault(r(d[1])),n=babelHelpers.interopRequireDefault(r(d[2])),s=r(d[3]),l=r(d[4]),u=babelHelpers.interopRequireDefault(r(d[5]));function _(){const t=babelHelpers.interopRequireDefault(r(d[6]));return _=function(){return t},t}function c(){const t=r(d[7]);return c=function(){return t},t}var b=r(d[8]),f=r(d[9]);e.FACEBOOK_ACTION_TYPE={NO_AUTOLOGIN_AND_PROMPT:0,SHOW_FACEBOOK_PROMPT:1,FACEBOOK_AUTO_LOGIN:2}}),"33f027",["c3984f","abc3e4","06a99e","3e4681","17c2da","c235f8","69a7c4","7c530a","6633c2","1ec62e"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return new Promise((n,c)=>{const o=document.createElement('script');o.type='text/javascript',o.async=!0,o.onload=n,o.onerror=c,o.src=t,(document.head||document.getElementsByTagName('head')[0]).appendChild(o)})}}),"6b26d0",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logMigration=function(u,c){return Promise.resolve(u).then(()=>n({...c,result:'success'})).catch(u=>{n({...c,result:'error',responseStatus:null==u?void 0:u.status,noError:!u}),s.default.getBootstrap('niobe.rest.error_logging.kill_switch')||!u||u.status&&200!==u.status||((0,t.airdogCount)('rest_migration.debug',1,{...c,responseStatus:u.status,responseStatusText:u.statusText,message:u.message||'',name:u.name||''}),(0,o().reportNiobeError)(u,{fingerprint:['niobe'],tags:{...c}}))}).catch(()=>{}),u};var t=r(d[0]),s=babelHelpers.interopRequireDefault(r(d[1]));function o(){const t=r(d[2]);return o=function(){return t},t}function n(s){(0,t.airdogCount)('rest_migration.request',1,s)}}),"7c530a",["3e4681","c235f8","8e002d"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.buggyApolloCacheFragmentSelectionsWrite=function(n){return t('NIOBE41')},e.invalidNiobeClientType=function(n){return t(`NIOBE04 [&#x20B9;{n}]`)},e.invalidNormalizationPatch=function(){return t('NIOBE42')},e.invalidQueryRefError=function(n){return t('NIOBE11')},e.minimalistOperationGivenToApolloClient=function(n){return t(`NIOBE51 [&#x20B9;{n}]`)},e.mismatchingNiobeClientType=function(n,o){return t(`NIOBE05 [&#x20B9;{n} &#x20B9;{o}]`)},e.mismatchingQueryRef=function(n,o){return t('NIOBE13')},e.missingSerializedNiobeCache=function(){return t('NIOBE31')},e.niobeClientNotFoundFromContext=function(n){return t(`NIOBE01 [&#x20B9;{n}]`)},e.noMatchingQueryRef=function(n){return t('NIOBE12')},e.receivedQueryRefForWrongClient=function({type:n},{type:o}){return t(`NIOBE03 [&#x20B9;{n} &#x20B9;{o}]`)},e.reportNiobeError=o,e.ssrTimeoutError=function(n,o){return t(`NIOBE52 [&#x20B9;{n}]`)},e.throwNiobeError=function(n){throw n},e.unexpectedlyLoadingObservable=function(n){return t('NIOBE29')},e.unexpectedlyUnloadedPrepareLoader=function(){return t('NIOBE21')},e.unparseableSubscriptionMessage=function(n){return t(`NIOBE71 [&#x20B9;{n}]`)},e.warnNiobeError=function(n,t){o(n,t)};var n=r(d[0]);function t(t){return new n.PineappleError(t,{fingerprint:['niobe']})}function o(t,o){(0,n.reportError)(t,o)}}),"8e002d",["f2f40f"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,o){const n=new Promise((t,n)=>{setTimeout(()=>n(new Error(`Timeout after &#x20B9;{o}ms`)),o)});return Promise.race([t,n])}}),"9f8615",[]);
__r("a9f4b1").extend({"user.login.facebook_login_unavailable":"Facebook login is unavailable right now, please try again later."});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/signup-login-dls-shared/utils/getFacebookLoginStatus.5afe068f16.js.map