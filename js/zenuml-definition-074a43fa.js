const Tr = (t) => {
  console.error("Log function was called before initialization", t);
}, mn = {
  trace: Tr,
  debug: Tr,
  info: Tr,
  warn: Tr,
  error: Tr,
  fatal: Tr
};
let Su;
const M4 = (t, e, n, r, s) => {
  t.info("Mermaid utils injected"), mn.trace = t.trace, mn.debug = t.debug, mn.info = t.info, mn.warn = t.warn, mn.error = t.error, mn.fatal = t.fatal, Su = n;
}, F4 = {
  parser: { yy: {} },
  parse: () => {
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      //[rjy] 1. 修改了occurrence[data-v-054f42d1]的padding，top从16改为5
      //[rjy] 2. 添加“.zenuml-name{color:black}.zenuml”
      //[rjy] 3. 删除 ol,ul,menu{list-style:none;margin:0;padding:0}
      //[rjy] 4. 删除 h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}
      t.appendChild(document.createTextNode('.tooltip[data-v-70836592]{cursor:pointer;position:relative;display:block;width:100%;text-align:center;z-index:10}.tooltip span[data-v-70836592]{border-bottom:1px dotted}.tooltip[data-v-70836592]:after{display:none;content:attr(data-tooltip);background:#e8e9e9;max-width:500px;width:200px;position:absolute;left:-200px;right:0;margin:auto;opacity:0;height:auto;font-size:14px;padding:10px;border-radius:4px;color:#111;text-align:left}.tooltip.bottom[data-v-70836592]:after{top:80%;transition:opacity .3s ease .3s,top .3s cubic-bezier(.175,.885,.32,1.275) .3s}.tooltip.bottom[data-v-70836592]:hover:after{display:block;top:130%;opacity:1}.lifeline .line[data-v-6efc771f]{background-size:1px 20px}.interaction{border:dashed transparent 0}.interaction.sync{border-right-width:7px}.interaction.inited-from-occurrence,.interaction.self-invocation{border-left-width:7px}.interaction.return{border-left-width:7px;border-right-width:7px}.interaction.return-to-start{border-left-width:0}.interaction:hover{cursor:pointer}.message{position:relative}.message>.name{text-align:center}.interaction.right-to-left>.occurrence{left:-14px}.interaction.self>.occurrence{left:-8px;margin-top:-10px}.fragment{border-width:1px;margin:8px 0 0;padding-bottom:10px}.sequence-diagram *{box-sizing:inherit}.sequence-diagram{line-height:normal}.participant{border-width:2px;padding:8px 4px;min-width:88px;max-width:250px;text-align:center;pointer-events:all}.no-fill svg.arrow polyline[data-v-ca07199a]{fill:none!important}.async>.message>.point>svg.arrow>polyline[data-v-ca07199a]{fill:none}.right-to-left.point[data-v-ca07199a]{left:0;right:auto}.right-to-left.point>svg>polyline.right[data-v-ca07199a]{display:none}.right-to-left.point>svg>polyline.left[data-v-ca07199a]{display:inline}.point>svg>polyline.left[data-v-ca07199a]{display:none}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}fieldset{margin:0;padding:0}legend{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root{--color-bg-base: #fff;--color-text-base: #000;--color-text-secondary: #333;--color-border-base: #000}.theme-default{--color-text-base: #222;--color-border-base: #666;--color-message-arrow: #000;--color-bg-occurrence: #dedede}.theme-mermaid{--color-bg-base: #fff;--color-text-base: #222;--color-border-base: #666;--color-bg-occurrence: #dedede}.theme-mermaid .footer{visibility:hidden}.theme-darcula{--color-bg-canvas: #ffffff;--color-bg-frame: #2b2b2b;--color-border-frame: #cccccc;--color-bg-title: #2b2b2b;--color-text-title: #f8f8f2;--color-bg-participant: #44475a;--color-text-participant: #f8f8f2;--color-border-participant: #cccccc;--color-text-message: #ffb86c;--color-message-arrow: #cccccc;--color-bg-message-hover: #a6d2ff;--color-text-message-hover: #174ad4;--color-text-comment: #666666;--color-bg-fragment-header: #44475a;--color-text-fragment: #8be9fd;--color-border-fragment: #cccccc;--color-bg-occurrence: #44475a;--color-border-occurrence: #555555;--color-text-link: #a6d2ff;--color-text-control: #e2ba88}.theme-sky{--color-bg-canvas: #ffffff;--color-bg-frame: #ffffff;--color-border-frame: #cccccc;--color-bg-title: #deecfb;--color-text-title: #032c72;--color-bg-participant: #deecfb;--color-text-participant: #032c72;--color-border-participant: #032c72;--color-text-message: #032c72;--color-message-arrow: #032c72;--color-bg-message-hover: #a6d2ff;--color-text-message-hover: #174ad4;--color-text-comment: #666666;--color-bg-fragment-header: #f0f0f0;--color-text-fragment: #032c72;--color-border-fragment: #032c72;--color-bg-occurrence: #deecfb;--color-border-occurrence: #555555;--color-text-link: #a6d2ff;--color-text-control: #a6d2ff}.theme-idle-afternoon{--color-bg-canvas: #d8dad9;--color-bg-frame: #d8dad9;--color-border-frame: #324939;--color-bg-title: #d8dad9;--color-text-title: #182e27;--color-bg-participant: #f3f5f7;--color-text-participant: #182e27;--color-border-participant: #182e27;--color-text-message: #030809;--color-message-arrow: #324939;--color-bg-message-hover: #aea690;--color-text-message-hover: #000000;--color-text-comment: #030809;--color-bg-fragment-header: #f0f0f0;--color-text-fragment: #182e27;--color-border-fragment: #344337;--color-bg-occurrence: #f3f5f7;--color-border-occurrence: #344337;--color-text-link: #344337;--color-text-control: #97a49b}.theme-coles{--color-bg-canvas: #ffffff;--color-bg-frame: #ffde00;--color-border-frame: #ee141f;--color-bg-title: #ffffff;--color-text-title: #182e27;--color-bg-participant: #f3f5f7;--color-text-participant: #000000;--color-border-participant: #344337;--color-text-message: #000000;--color-message-arrow: #000000;--color-bg-message-hover: #ee141f;--color-text-message-hover: #ffffff;--color-text-comment: #000000;--color-bg-fragment-header: #ee141f;--color-text-fragment: #ffffff;--color-border-fragment: #ee141f;--color-bg-occurrence: #f3f5f7;--color-border-occurrence: #344337;--color-text-link: #344337;--color-text-control: #97a49b}.theme-coles .footer{background-color:#fff}.theme-woolworths{--color-bg-canvas: #e6eaf3;--color-bg-frame: #e6eaf3;--color-border-frame: #049e50;--color-bg-title: #ffffff;--color-text-title: #12522f;--color-bg-participant: #aacb51;--color-text-participant: #000000;--color-border-participant: #344337;--color-text-message: #12522f;--color-message-arrow: #049e50;--color-bg-message-hover: #fffefb;--color-text-message-hover: #ffffff;--color-text-comment: #000000;--color-bg-fragment-header: #aacb51;--color-text-fragment: #12522f;--color-border-fragment: #049e50;--color-bg-occurrence: #aacb51;--color-border-occurrence: #344337;--color-text-link: #344337;--color-text-control: #335c80}.theme-anz{--color-bg-canvas: #ffffff;--color-bg-frame: #ffffff;--color-border-frame: #089fd8;--color-bg-title: #ffffff;--color-text-title: #006e9c;--color-bg-participant: #fcfdf8;--color-text-participant: #00abd8;--color-border-participant: #00abd8;--color-text-message: #42a4e0;--color-message-arrow: #089fd8;--color-bg-message-hover: #006e9c;--color-text-message-hover: #ffffff;--color-text-comment: #000000;--color-bg-fragment-header: #42a4e0;--color-text-fragment: #006e9c;--color-border-fragment: #089fd8;--color-bg-occurrence: #fcfdf8;--color-border-occurrence: #006e9c;--color-text-link: #c9d8e7;--color-text-control: #335c80}.theme-anz .fragment .header{color:#fff}.theme-nab{--color-bg-canvas: #f2f4f6;--color-bg-participant: #c30000;--color-text-participant: #ffffff;--color-border-participant: #c30000;--color-text-message: #c30000;--color-bg-fragment-header: #c30000;--color-text-fragment-header: #ffffff}.theme-google{--color-white: #ffffff;--color-red-google: #db4437;--color-blue-google: #4285f4;--color-green-google: #0f9d58;--color-yellow-google: #f4b400;--color-bg-canvas: var(--color-white);--color-bg-frame: #f2f4f6;--color-border-frame: #4285f4;--color-bg-title: #4285f4;--color-text-title: #ffffff;--color-bg-participant: var(--color-red-google);--color-text-participant: #ffffff;--color-border-participant: #4285f4;--color-text-message: var(--color-red-google);--color-message-arrow: var(--color-red-google);--color-bg-message-hover: #fffefb;--color-text-message-hover: #ffffff;--color-text-comment: #000000;--color-bg-fragment-header: var(--color-green-google);--color-text-fragment: #ffffff;--color-border-fragment: #4285f4;--color-bg-occurrence: #f4b400;--color-border-occurrence: #4285f4;--color-text-link: #c9d8e7;--color-text-control: #335c80}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.zenuml .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.zenuml .pointer-events-none{pointer-events:none}.zenuml .pointer-events-auto{pointer-events:auto}.zenuml .invisible{visibility:hidden}.zenuml .fixed{position:fixed}.zenuml .absolute{position:absolute}.zenuml .relative{position:relative}.zenuml .sticky{position:sticky}.zenuml .inset-0{top:0px;right:0px;bottom:0px;left:0px}.zenuml .bottom-1{bottom:.25rem}.zenuml .left-1{left:.25rem}.zenuml .right-1{right:.25rem}.zenuml .top-0{top:0px}.zenuml .top-8{top:2rem}.zenuml .left-1\\/2{left:50%}.zenuml .right-0{right:0px}.zenuml .left-full{left:100%}.zenuml .z-40{z-index:40}.zenuml .z-10{z-index:10}.zenuml .col-span-2{grid-column:span 2 / span 2}.zenuml .col-span-1{grid-column:span 1 / span 1}.zenuml .col-span-4{grid-column:span 4 / span 4}.zenuml .float-right{float:right}.zenuml .m-1{margin:.25rem}.zenuml .m-2{margin:.5rem}.zenuml .m-auto{margin:auto}.zenuml .mx-auto{margin-left:auto;margin-right:auto}.zenuml .mx-2{margin-left:.5rem;margin-right:.5rem}.zenuml .-my-px{margin-top:-1px;margin-bottom:-1px}.zenuml .ml-4{margin-left:1rem}.zenuml .mt-3{margin-top:.75rem}.zenuml .mt-4{margin-top:1rem}.zenuml .mb-4{margin-bottom:1rem}.zenuml .mt-8{margin-top:2rem}.zenuml .-mt-12{margin-top:-3rem}.zenuml .mt-1{margin-top:.25rem}.zenuml .mb-0{margin-bottom:0}.zenuml .mt-2{margin-top:.5rem}.zenuml .box-border{box-sizing:border-box}.zenuml .block{display:block}.zenuml .inline-block{display:inline-block}.zenuml .inline{display:inline}.zenuml .flex{display:flex}.zenuml .inline-flex{display:inline-flex}.zenuml .table{display:table}.zenuml .grid{display:grid}.zenuml .contents{display:contents}.zenuml .hidden{display:none}.zenuml .h-10{height:2.5rem}.zenuml .h-5{height:1.25rem}.zenuml .h-0{height:0px}.zenuml .h-screen{height:100vh}.zenuml .h-full{height:100%}.zenuml .h-4{height:1rem}.zenuml .h-6{height:1.5rem}.zenuml .h-12{height:3rem}.zenuml .h-8{height:2rem}.zenuml .h-14{height:3.5rem}.zenuml .h-3{height:.75rem}.zenuml .min-h-screen{min-height:100vh}.zenuml .w-full{width:100%}.zenuml .w-96{width:24rem}.zenuml .w-28{width:7rem}.zenuml .w-4{width:1rem}.zenuml .w-6{width:1.5rem}.zenuml .w-8{width:2rem}.zenuml .w-11\\/12{width:91.666667%}.zenuml .w-px{width:1px}.zenuml .w-3{width:.75rem}.zenuml .min-w-\\[100px\\]{min-width:100px}.zenuml .max-w-full{max-width:100%}.zenuml .max-w-7xl{max-width:80rem}.zenuml .flex-shrink-0,.zenuml .shrink-0{flex-shrink:0}.zenuml .flex-grow,.zenuml .grow{flex-grow:1}.zenuml .origin-top-left{transform-origin:top left}.zenuml .-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.zenuml .-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.zenuml .-translate-y-8{--tw-translate-y: -2rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.zenuml .-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.zenuml .-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.zenuml .translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.zenuml .transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.zenuml .cursor-pointer{cursor:pointer}.zenuml .resize{resize:both}.zenuml .grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.zenuml .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.zenuml .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.zenuml .flex-row-reverse{flex-direction:row-reverse}.zenuml .flex-col{flex-direction:column}.zenuml .flex-nowrap{flex-wrap:nowrap}.zenuml .items-start{align-items:flex-start}.zenuml .items-end{align-items:flex-end}.zenuml .items-center{align-items:center}.zenuml .justify-center{justify-content:center}.zenuml .justify-between{justify-content:space-between}.zenuml .justify-around{justify-content:space-around}.zenuml .gap-5{gap:1.25rem}.zenuml .overflow-hidden{overflow:hidden}.zenuml .overflow-visible{overflow:visible}.zenuml .overflow-y-auto{overflow-y:auto}.zenuml .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.zenuml .whitespace-normal{white-space:normal}.zenuml .whitespace-nowrap{white-space:nowrap}.zenuml .rounded{border-radius:.25rem}.zenuml .rounded-sm{border-radius:.125rem}.zenuml .rounded-md{border-radius:.375rem}.zenuml .rounded-lg{border-radius:.5rem}.zenuml .rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.zenuml .rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.zenuml .rounded-b-md{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem}.zenuml .border-2{border-width:2px}.zenuml .border{border-width:1px}.zenuml .border-b-2{border-bottom-width:2px}.zenuml .border-b{border-bottom-width:1px}.zenuml .border-t{border-top-width:1px}.zenuml .border-r{border-right-width:1px}.zenuml .border-solid{border-style:solid}.zenuml .border-dashed{border-style:dashed}.zenuml .border-red-900{--tw-border-opacity: 1;border-color:rgb(127 29 29 / var(--tw-border-opacity))}.zenuml .border-skin-frame{border-color:var(--color-border-frame, var(--color-border-base, #000))}.zenuml .border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.zenuml .border-skin-participant{border-color:var(--color-border-participant, var(--color-border-frame, var(--color-border-base, #000)))}.zenuml .border-skin-fragment{border-color:var(--color-border-fragment, var(--color-border-frame, var(--color-border-base, #000)))}.zenuml .border-skin-message-arrow{border-color:var(--color-message-arrow, var(--color-border-frame, var(--color-border-base, #000)))}.zenuml .border-skin-occurrence{border-color:var(--color-border-occurrence, var(--color-border-frame, var(--color-border-base, #000)))}.zenuml .bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.zenuml .bg-skin-canvas{background-color:var(--color-bg-canvas, var(--color-bg-base, #fff))}.zenuml .bg-skin-frame{background-color:var(--color-bg-frame, var(--color-bg-canvas, var(--color-bg-base, #fff)))}.zenuml .bg-skin-title{background-color:var(--color-bg-title, var(--color-bg-frame, var(--color-bg-canvas, var(--color-bg-base, #fff))))}.zenuml .bg-skin-base{background-color:var(--color-bg-base)}.zenuml .bg-green-200{--tw-bg-opacity: 1;background-color:rgb(187 247 208 / var(--tw-bg-opacity))}.zenuml .bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.zenuml .bg-gray-500{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.zenuml .bg-skin-lifeline{background-color:var(--color-border-participant, var(--color-border-participant, var(--color-border-frame, var(--color-border-base, #000))))}.zenuml .bg-skin-participant{background-color:var(--color-bg-participant, var(--color-bg-frame, var(--color-bg-canvas, var(--color-bg-base, #fff))))}.zenuml .bg-gray-400{--tw-bg-opacity: 1;background-color:rgb(156 163 175 / var(--tw-bg-opacity))}.zenuml .bg-skin-divider{background-color:var(--color-border-participant, var(--color-border-frame, var(--color-border-base, #000)))}.zenuml .bg-skin-fragment-header{background-color:var(--color-bg-fragment-header, transparent)}.zenuml .bg-skin-occurrence{background-color:var(--color-bg-occurrence, var(--color-bg-participant, var(--color-bg-frame, var(--color-bg-canvas, var(--color-bg-base, #fff)))))}.zenuml .bg-opacity-75{--tw-bg-opacity: .75}.zenuml .fill-current{fill:currentColor}.zenuml .fill-none{fill:none}.zenuml .stroke-current{stroke:currentColor}.zenuml .stroke-2{stroke-width:2}.zenuml .object-contain{object-fit:contain}.zenuml .p-1{padding:.25rem}.zenuml .p-2{padding:.5rem}.zenuml .p-0{padding:0}.zenuml .px-1{padding-left:.25rem;padding-right:.25rem}.zenuml .px-3{padding-left:.75rem;padding-right:.75rem}.zenuml .py-1{padding-top:.25rem;padding-bottom:.25rem}.zenuml .px-2{padding-left:.5rem;padding-right:.5rem}.zenuml .py-2{padding-top:.5rem;padding-bottom:.5rem}.zenuml .px-4{padding-left:1rem;padding-right:1rem}.zenuml .py-5{padding-top:1.25rem;padding-bottom:1.25rem}.zenuml .px-px{padding-left:1px;padding-right:1px}.zenuml .pb-8{padding-bottom:2rem}.zenuml .pt-8{padding-top:2rem}.zenuml .pt-4{padding-top:1rem}.zenuml .pb-20{padding-bottom:5rem}.zenuml .pb-4{padding-bottom:1rem}.zenuml .pb-32{padding-bottom:8rem}.zenuml .pb-2{padding-bottom:.5rem}.zenuml .pr-24{padding-right:6rem}.zenuml .pt-24{padding-top:6rem}.zenuml .pb-10{padding-bottom:2.5rem}.zenuml .text-left{text-align:left}.zenuml .text-center{text-align:center}.zenuml .align-bottom{vertical-align:bottom}.zenuml .text-xs{font-size:.75rem;line-height:1rem}.zenuml .text-sm{font-size:.875rem;line-height:1.25rem}.zenuml .text-base{font-size:1rem;line-height:1.5rem}.zenuml .text-xl{font-size:1.25rem;line-height:1.75rem}.zenuml .text-lg{font-size:1.125rem;line-height:1.75rem}.zenuml .font-bold{font-weight:700}.zenuml .font-semibold{font-weight:600}.zenuml .font-medium{font-weight:500}.zenuml .italic{font-style:italic}.zenuml .leading-6{line-height:1.5rem}.zenuml .leading-4{line-height:1rem}.zenuml .zenuml-name{color:black}.zenuml .text-skin-title{color:var(--color-text-title, var(--color-text-message, var(--color-text-base, #000)))}.zenuml .text-skin-control{color:var(--color-text-control, var(--color-text-secondary, var(--color-text-base, #000)))}.zenuml .text-skin-link{color:var(--color-text-link, var(--color-text-secondary, var(--color-text-base, #000)))}.zenuml .text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.zenuml .text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.zenuml .text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.zenuml .text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.zenuml .text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.zenuml .text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.zenuml .text-skin-participant{color:var(--color-text-participant, var(--color-text-message, var(--color-text-base, #000)))}.zenuml .text-skin-base{color:var(--color-text-base)}.zenuml .text-skin-message{color:var(--color-text-message, var(--color-text-base, #000))}.zenuml .text-skin-comment{color:var(--color-text-comment, var(--color-text-secondary, var(--color-text-base, #000)))}.zenuml .text-skin-fragment-header{color:var(--color-text-fragment-header, var(--color-text-message, #000))}.zenuml .text-skin-fragment{color:var(--color-text-fragment, var(--color-text-message, #000))}.zenuml .text-skin-message-arrow{color:var(--color-message-arrow, var(--color-border-frame, var(--color-border-base, #000)))}.zenuml .opacity-50{opacity:.5}.zenuml .shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.zenuml .shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.zenuml .shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.zenuml .shadow-slate-500\\/50{--tw-shadow-color: rgb(100 116 139 / .5);--tw-shadow: var(--tw-shadow-colored)}.zenuml .blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.zenuml .grayscale{--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.zenuml .filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.zenuml .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.zenuml .transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.zenuml .transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.zenuml .hover\\:whitespace-normal:hover{white-space:normal}.zenuml .hover\\:bg-yellow-300:hover{--tw-bg-opacity: 1;background-color:rgb(253 224 71 / var(--tw-bg-opacity))}.zenuml .hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.zenuml .hover\\:bg-skin-message-hover:hover{background-color:var(--color-bg-message-hover, var(--color-text-base, #000))}.zenuml .hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.zenuml .hover\\:text-gray-500:hover{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.zenuml .hover\\:text-skin-message-hover:hover{color:var(--color-text-message-hover, var(--color-bg-base, #fff))}.zenuml .hover\\:opacity-100:hover{opacity:1}.zenuml .focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.zenuml .focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.zenuml .focus\\:ring-inset:focus{--tw-ring-inset: inset}.zenuml .focus\\:ring-indigo-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity))}.zenuml .group:hover .group-hover\\:flex{display:flex}@media (min-width: 640px){.zenuml .sm\\:my-8{margin-top:2rem;margin-bottom:2rem}.zenuml .sm\\:block{display:block}.zenuml .sm\\:inline-block{display:inline-block}.zenuml .sm\\:h-screen{height:100vh}.zenuml .sm\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.zenuml .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.zenuml .sm\\:gap-6{gap:1.5rem}.zenuml .sm\\:p-2{padding:.5rem}.zenuml .sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.zenuml .sm\\:align-middle{vertical-align:middle}}@media (min-width: 1024px){.zenuml .lg\\:mx-auto{margin-left:auto;margin-right:auto}.zenuml .lg\\:mx-0{margin-left:0;margin-right:0}.zenuml .lg\\:max-w-none{max-width:none}.zenuml .lg\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.zenuml .lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.zenuml .lg\\:px-8{padding-left:2rem;padding-right:2rem}}.zenuml .\\[\\&\\>svg\\]\\:h-full>svg{height:100%}.zenuml .\\[\\&\\>svg\\]\\:w-full>svg{width:100%}.zenuml{font-family:Helvetica,Verdana,serif;font-size:16px}.zenuml .frame .sequence-diagram .comments code{background-color:#f9f2f4;padding:2px;margin:1px 0;border-radius:2px}.zenuml .frame .sequence-diagram .comments .rest-api .http-method-post{color:#0d4b3b}.zenuml .frame .sequence-diagram .comments .rest-api .http-method-get{color:#2f3d89}.zenuml .frame .sequence-diagram .comments .rest-api .http-method-delete{color:#7e1e23}.zenuml .frame .sequence-diagram .comments ol,.zenuml .frame .sequence-diagram .comments ul{margin:0;padding-left:20px}.zenuml .frame .sequence-diagram .comments ul li{list-style-type:none}.zenuml .frame .sequence-diagram .comments ul li input[type=checkbox]{margin-left:-1em}.zenuml .frame .sequence-diagram .comments table{border-collapse:collapse;border-spacing:0;empty-cells:show;border-color:#cbcbcb}.zenuml .frame .sequence-diagram .comments table td,.zenuml .frame .sequence-diagram .comments table th{padding:.5em}.zenuml .frame .sequence-diagram .comments table thead{background-color:#e0e0e0}.zenuml .frame .sequence-diagram .comments table td{background-color:transparent}.theme-blue .sequence-diagram .divider .name{border-radius:4px;border:1px solid #e28553;color:#e28553}.theme-blue .sequence-diagram .divider .left,.theme-blue .sequence-diagram .divider .right{background:#e28553}.theme-blue .sequence-diagram .lifeline .participant{border-color:#032c72;background:rgba(146,192,240,.3)}.theme-blue .sequence-diagram .lifeline .participant label{color:#032c72}.theme-blue .sequence-diagram .lifeline .line{border-left-color:#032c72}.theme-blue .sequence-diagram .message{border-bottom-color:#032c72}.theme-blue .sequence-diagram .message .name{color:#032c72}.theme-blue .sequence-diagram .message svg polyline{stroke:#032c72}.theme-blue .sequence-diagram .message svg polyline.head{fill:#032c72}.theme-blue .sequence-diagram .occurrence{border-color:#032c72;background-color:#fff}.theme-blue .sequence-diagram .fragment{border-radius:4px;border-color:#042e6e4d}.theme-blue .sequence-diagram .fragment .header .name{background:rgba(4,46,110,.1)}.theme-blue .sequence-diagram .fragment .header label{color:#032c72}.theme-black-white .sequence-diagram .divider .name{border-radius:0;border-color:#000;box-shadow:2px 2px #000}.theme-black-white .sequence-diagram .divider .left,.theme-black-white .sequence-diagram .divider .right{background:#000}.theme-black-white .sequence-diagram .lifeline .participant{border-color:#000;background:#fff;box-shadow:2px 2px #000}.theme-black-white .sequence-diagram .lifeline .line{border-left-color:#0006}.theme-black-white .sequence-diagram .message{border-bottom-color:#000}.theme-black-white .sequence-diagram .message .name{color:#000}.theme-black-white .sequence-diagram .message svg polyline{stroke:#000}.theme-black-white .sequence-diagram .message svg polyline.head{fill:#000}.theme-black-white .sequence-diagram .occurrence{border-color:#000;background-color:#f5f5f5}.theme-black-white .sequence-diagram .fragment{border-color:#0000004d}.theme-black-white .sequence-diagram .fragment .header .name{background:rgba(0,0,0,.07)}.theme-star-uml .sequence-diagram .lifeline .participant{border-color:#b94065;background-color:#fffec8}.theme-star-uml .sequence-diagram .lifeline .line{border-left-color:#b94065}.theme-star-uml .sequence-diagram .message{border-bottom-color:#b94065}.theme-star-uml .sequence-diagram .message svg polyline{stroke:#b94065}.theme-star-uml .sequence-diagram .message svg polyline.head{fill:#b94065}.theme-star-uml .sequence-diagram .occurrence{background-color:#fffec8;border-color:#b94065}.blue-river .sequence-diagram{color:#5452f6}.blue-river .sequence-diagram .life-line-layer .lifeline.actor .participant:before{filter:invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)}.blue-river .sequence-diagram .life-line-layer .participant{background:#2097f7;box-shadow:4px 4px #83c4f8;border-radius:9px;color:#fff}.blue-river .sequence-diagram .life-line-layer .participant .interface{font-size:.8em}.blue-river .sequence-diagram .life-line-layer .line{border-left-color:#2097f7}.blue-river .sequence-diagram .message-layer .message{border-bottom-color:#2097f7}.blue-river .sequence-diagram .message-layer .message svg.arrow polyline{stroke:#2097f7;fill:#2097f7}.blue-river .sequence-diagram .message-layer .message.self svg.arrow polyline{fill:none}.blue-river .sequence-diagram .message-layer .message.self svg.arrow polyline.head{fill:#2097f7}.blue-river .sequence-diagram .message-layer .occurrence{background:#e5fde8;border-color:#65bf73;box-shadow:4px 4px #93c69b}.blue-river .sequence-diagram .message-layer .fragment{border-color:#2097f7}.blue-river .sequence-diagram .message-layer .fragment .header .name label{display:inline-block;min-width:50px;background:#5452f6;color:#fff;padding:2px 0 2px 10px}.blue-river .sequence-diagram .message-layer .fragment .header .name:after{content:"SO";display:inline-block;background:#5452f6;margin-left:-23px;width:34px;transform:translateY(-2px);height:22px;-webkit-clip-path:polygon(66% 0,100% 0,100% 66%,66% 100%);clip-path:polygon(66% 0,100% 0,100% 66%,66% 100%)}.blue-river .sequence-diagram .message-layer .fragment .header>label{display:inline-block;min-width:50px;font-weight:700;color:#fff;background:#65bf73}.blue-river .sequence-diagram .message-layer .fragment .comments{border-color:inherit}.blue-river .sequence-diagram .message-layer .fragment .divider{border-bottom-color:inherit}:root{--background: #282a36;--hover: #2b2b2b;--occurance-border: #6e7191;--border: #585b74;--white: #f8f8f2;--current: #44475a;--comment: #6272a4;--cyan: #8be9fd;--green: #50fa7b;--orange: #ffb86c;--pink: #ff79c6;--purple: #bd93f9;--red: #ff5555;--yellow: #f1fa8c;--crayola: #a9b7c6}body .zenuml.theme-dark{background-color:var(--background)}.zenuml.theme-dark .header{color:var(--crayola);font-weight:700}.zenuml.theme-dark .sequence-diagram .lifeline-group:hover{background-color:#223049}.zenuml.theme-dark .sequence-diagram .lifeline .participant{border-color:var(--border);border-radius:2px;background:var(--background)}.zenuml.theme-dark .sequence-diagram .lifeline .participant label{color:var(--cyan)}.zenuml.theme-dark .sequence-diagram .lifeline .line{background:var(--border)}.zenuml.theme-dark .fragment>.header>.condition{color:var(--crayola);padding:6px}.zenuml.theme-dark .sequence-diagram .fragment .header label{color:var(--crayola);padding:6px}.zenuml.theme-dark .sequence-diagram .fragment .header .name{border-bottom-color:var(--border)}.zenuml.theme-dark .sequence-diagram .fragment .header .name label{color:var(--pink);font-weight:400}.zenuml.theme-dark .sequence-diagram .fragment{border-color:var(--border)}.zenuml.theme-dark .sequence-diagram .comments{border:none;background:transparent;color:var(--comment)}.zenuml.theme-dark .sequence-diagram .fragment .segment:not(:first-child){border-top-color:var(--border)}.zenuml.theme-dark .sequence-diagram .interaction{color:var(--orange)}.zenuml.theme-dark .sequence-diagram .message{border-bottom-color:var(--border)}.zenuml.theme-dark .sequence-diagram .message .name:hover{color:var(--crayola)}.zenuml.theme-dark .sequence-diagram .message svg polyline{fill:var(--border);stroke:var(--border)}.zenuml.theme-dark .sequence-diagram .message.self svg>polyline:not(.head){fill:none}.zenuml.theme-dark .sequence-diagram .occurrence{background-color:var(--current);box-shadow:0 0 0 1px var(--occurance-border);border-radius:2px}.zenuml.theme-dark .sequence-diagram .divider .left,.zenuml.theme-dark .sequence-diagram .divider .right{background:var(--border)}.zenuml.theme-dark .sequence-diagram .divider .name{color:var(--comment)}.zenuml.theme-dark .interaction .message>.name:hover{background-color:#228b22;color:#fff}p[data-v-15224042]{margin:0;line-height:1.25em}.occurrence[data-v-054f42d1]{width:15px;padding:5px 0 16px 5px}[data-v-054f42d1]>.statement-container:last-child>.interaction.return:last-of-type{margin-bottom:0;border-bottom:0;transform:translateY(1px)}[data-v-054f42d1]>.statement-container:last-child>.interaction.return:last-of-type>.message{bottom:-17px;height:0}.right-to-left.occurrence[data-v-054f42d1]{left:-14px}.occurrence{margin-top:-2px}.interaction .occurrence.source[data-v-05daaa2d]{position:absolute;height:calc(100% + 14px);left:-12px;display:none}.interaction .occurrence.source.right-to-left[data-v-05daaa2d]{left:unset;right:-13px}.message.self[data-v-25f755f6]{transform:translate(-5px)}.interaction .invisible-occurrence[data-v-eb21ece9]{height:20px}.interaction.async[data-v-eb21ece9] .message{width:100%}.collapsible-header[data-v-b41acdfc]{display:flex;width:100%;justify-content:space-between}.collapse-button[data-v-b41acdfc]{display:none}.fragment:hover .collapsible-header .collapse-button.expanded[data-v-b41acdfc]{display:inline-block!important}*[data-v-125017f4],*[data-v-4545e2e3]{border-color:inherit}.fragment.par>.block>.statement-container:not(:first-child){border-top-color:inherit;border-top-width:1px;border-top-style:solid}*[data-v-771edb8e],*[data-v-06cc8e56],*[data-v-1ae75b06]{border-color:inherit}.divider[data-v-9e567e69]{display:flex;align-items:center}.name[data-v-9e567e69]{margin:0;padding:2px 6px}.left[data-v-9e567e69],.right[data-v-9e567e69]{height:1px;flex-grow:1}')), document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var z4 = Object.defineProperty, D4 = (t, e, n) => e in t ? z4(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, W = (t, e, n) => (D4(t, typeof e != "symbol" ? e + "" : e, n), n), mi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function B4(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return '"[Circular]"';
  }
}
var U4 = H4;
function H4(t, e, n) {
  var r = n && n.stringify || B4, s = 1;
  if (typeof t == "object" && t !== null) {
    var i = e.length + s;
    if (i === 1)
      return t;
    var o = new Array(i);
    o[0] = r(t);
    for (var a = 1; a < i; a++)
      o[a] = r(e[a]);
    return o.join(" ");
  }
  if (typeof t != "string")
    return t;
  var l = e.length;
  if (l === 0)
    return t;
  for (var c = "", u = 1 - s, d = -1, p = t && t.length || 0, g = 0; g < p; ) {
    if (t.charCodeAt(g) === 37 && g + 1 < p) {
      switch (d = d > -1 ? d : 0, t.charCodeAt(g + 1)) {
        case 100:
        case 102:
          if (u >= l || e[u] == null)
            break;
          d < g && (c += t.slice(d, g)), c += Number(e[u]), d = g + 2, g++;
          break;
        case 105:
          if (u >= l || e[u] == null)
            break;
          d < g && (c += t.slice(d, g)), c += Math.floor(Number(e[u])), d = g + 2, g++;
          break;
        case 79:
        case 111:
        case 106:
          if (u >= l || e[u] === void 0)
            break;
          d < g && (c += t.slice(d, g));
          var _ = typeof e[u];
          if (_ === "string") {
            c += "'" + e[u] + "'", d = g + 2, g++;
            break;
          }
          if (_ === "function") {
            c += e[u].name || "<anonymous>", d = g + 2, g++;
            break;
          }
          c += r(e[u]), d = g + 2, g++;
          break;
        case 115:
          if (u >= l)
            break;
          d < g && (c += t.slice(d, g)), c += String(e[u]), d = g + 2, g++;
          break;
        case 37:
          d < g && (c += t.slice(d, g)), c += "%", d = g + 2, g++, u--;
          break;
      }
      ++u;
    }
    ++g;
  }
  return d === -1 ? t : (d < p && (c += t.slice(d)), c);
}
const Ac = U4;
var V4 = on;
const Rs = X4().console || {}, G4 = {
  mapHttpRequest: xi,
  mapHttpResponse: xi,
  wrapRequestSerializer: o1,
  wrapResponseSerializer: o1,
  wrapErrorSerializer: o1,
  req: xi,
  res: xi,
  err: W4
};
function j4(t, e) {
  return Array.isArray(t) ? t.filter(function(n) {
    return n !== "!stdSerializers.err";
  }) : t === !0 ? Object.keys(e) : !1;
}
function on(t) {
  t = t || {}, t.browser = t.browser || {};
  const e = t.browser.transmit;
  if (e && typeof e.send != "function")
    throw Error("pino: transmit option must have a send function");
  const n = t.browser.write || Rs;
  t.browser.write && (t.browser.asObject = !0);
  const r = t.serializers || {}, s = j4(t.browser.serialize, r);
  let i = t.browser.serialize;
  Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf("!stdSerializers.err") > -1 && (i = !1);
  const o = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof n == "function" && (n.error = n.fatal = n.warn = n.info = n.debug = n.trace = n), (t.enabled === !1 || t.browser.disabled) && (t.level = "silent");
  const a = t.level || "info", l = Object.create(n);
  l.log || (l.log = Is), Object.defineProperty(l, "levelVal", {
    get: u
  }), Object.defineProperty(l, "level", {
    get: d,
    set: p
  });
  const c = {
    transmit: e,
    serialize: s,
    asObject: t.browser.asObject,
    levels: o,
    timestamp: Y4(t)
  };
  l.levels = on.levels, l.level = a, l.setMaxListeners = l.getMaxListeners = l.emit = l.addListener = l.on = l.prependListener = l.once = l.prependOnceListener = l.removeListener = l.removeAllListeners = l.listeners = l.listenerCount = l.eventNames = l.write = l.flush = Is, l.serializers = r, l._serialize = s, l._stdErrSerialize = i, l.child = g, e && (l._logEvent = I1());
  function u() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function d() {
    return this._level;
  }
  function p(_) {
    if (_ !== "silent" && !this.levels.values[_])
      throw Error("unknown level " + _);
    this._level = _, Ar(c, l, "error", "log"), Ar(c, l, "fatal", "error"), Ar(c, l, "warn", "error"), Ar(c, l, "info", "log"), Ar(c, l, "debug", "log"), Ar(c, l, "trace", "log");
  }
  function g(_, k) {
    if (!_)
      throw new Error("missing bindings for child Pino");
    k = k || {}, s && _.serializers && (k.serializers = _.serializers);
    const j = k.serializers;
    if (s && j) {
      var b = Object.assign({}, r, j), m = t.browser.serialize === !0 ? Object.keys(b) : s;
      delete _.serializers, uo([_], m, b, this._stdErrSerialize);
    }
    function y(C) {
      this._childLevel = (C._childLevel | 0) + 1, this.error = Sr(C, _, "error"), this.fatal = Sr(C, _, "fatal"), this.warn = Sr(C, _, "warn"), this.info = Sr(C, _, "info"), this.debug = Sr(C, _, "debug"), this.trace = Sr(C, _, "trace"), b && (this.serializers = b, this._serialize = m), e && (this._logEvent = I1(
        [].concat(C._logEvent.bindings, _)
      ));
    }
    return y.prototype = this, new y(this);
  }
  return l;
}
on.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal"
  }
};
on.stdSerializers = G4;
on.stdTimeFunctions = Object.assign({}, { nullTime: Ru, epochTime: Iu, unixTime: K4, isoTime: Q4 });
function Ar(t, e, n, r) {
  const s = Object.getPrototypeOf(e);
  e[n] = e.levelVal > e.levels.values[n] ? Is : s[n] ? s[n] : Rs[n] || Rs[r] || Is, $4(t, e, n);
}
function $4(t, e, n) {
  !t.transmit && e[n] === Is || (e[n] = function(r) {
    return function() {
      const s = t.timestamp(), i = new Array(arguments.length), o = Object.getPrototypeOf && Object.getPrototypeOf(this) === Rs ? Rs : this;
      for (var a = 0; a < i.length; a++)
        i[a] = arguments[a];
      if (t.serialize && !t.asObject && uo(i, this._serialize, this.serializers, this._stdErrSerialize), t.asObject ? r.call(o, q4(this, n, i, s)) : r.apply(o, i), t.transmit) {
        const l = t.transmit.level || e.level, c = on.levels.values[l], u = on.levels.values[n];
        if (u < c)
          return;
        Z4(this, {
          ts: s,
          methodLevel: n,
          methodValue: u,
          transmitLevel: l,
          transmitValue: on.levels.values[t.transmit.level || e.level],
          send: t.transmit.send,
          val: e.levelVal
        }, i);
      }
    };
  }(e[n]));
}
function q4(t, e, n, r) {
  t._serialize && uo(n, t._serialize, t.serializers, t._stdErrSerialize);
  const s = n.slice();
  let i = s[0];
  const o = {};
  r && (o.time = r), o.level = on.levels.values[e];
  let a = (t._childLevel | 0) + 1;
  if (a < 1 && (a = 1), i !== null && typeof i == "object") {
    for (; a-- && typeof s[0] == "object"; )
      Object.assign(o, s.shift());
    i = s.length ? Ac(s.shift(), s) : void 0;
  } else
    typeof i == "string" && (i = Ac(s.shift(), s));
  return i !== void 0 && (o.msg = i), o;
}
function uo(t, e, n, r) {
  for (const s in t)
    if (r && t[s] instanceof Error)
      t[s] = on.stdSerializers.err(t[s]);
    else if (typeof t[s] == "object" && !Array.isArray(t[s]))
      for (const i in t[s])
        e && e.indexOf(i) > -1 && i in n && (t[s][i] = n[i](t[s][i]));
}
function Sr(t, e, n) {
  return function() {
    const r = new Array(1 + arguments.length);
    r[0] = e;
    for (var s = 1; s < r.length; s++)
      r[s] = arguments[s - 1];
    return t[n].apply(this, r);
  };
}
function Z4(t, e, n) {
  const r = e.send, s = e.ts, i = e.methodLevel, o = e.methodValue, a = e.val, l = t._logEvent.bindings;
  uo(
    n,
    t._serialize || Object.keys(t.serializers),
    t.serializers,
    t._stdErrSerialize === void 0 ? !0 : t._stdErrSerialize
  ), t._logEvent.ts = s, t._logEvent.messages = n.filter(function(c) {
    return l.indexOf(c) === -1;
  }), t._logEvent.level.label = i, t._logEvent.level.value = o, r(i, t._logEvent, a), t._logEvent = I1(l);
}
function I1(t) {
  return {
    ts: 0,
    messages: [],
    bindings: t || [],
    level: { label: "", value: 0 }
  };
}
function W4(t) {
  const e = {
    type: t.constructor.name,
    msg: t.message,
    stack: t.stack
  };
  for (const n in t)
    e[n] === void 0 && (e[n] = t[n]);
  return e;
}
function Y4(t) {
  return typeof t.timestamp == "function" ? t.timestamp : t.timestamp === !1 ? Ru : Iu;
}
function xi() {
  return {};
}
function o1(t) {
  return t;
}
function Is() {
}
function Ru() {
  return !1;
}
function Iu() {
  return Date.now();
}
function K4() {
  return Math.round(Date.now() / 1e3);
}
function Q4() {
  return new Date(Date.now()).toISOString();
}
function X4() {
  function t(e) {
    return typeof e < "u" && e;
  }
  try {
    return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
      get: function() {
        return delete Object.prototype.globalThis, this.globalThis = this;
      },
      configurable: !0
    }), globalThis;
  } catch {
    return t(self) || t(window) || t(this) || {};
  }
}
const J4 = V4({
  level: "warn"
}), Sc = ["log", "trace", "debug", "info", "warn", "error"];
function e3(t, e) {
  t[e] = (console[e] || console.log).bind(console);
}
function t3(t, e, n) {
  t[e] = (console[e] || console.log).bind(console, n[0], n[1]);
}
function n3(t) {
  Sc.forEach((n) => e3(t, n));
  const e = t.child;
  return t.child = function(n) {
    const r = e.call(t, n);
    return Sc.forEach((s) => t3(r, s, ["%c" + n.name || "", "color: #00f"])), r;
  }, t;
}
let js = n3(J4);
function Jr(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let s = 0; s < r.length; s++)
    n[r[s]] = !0;
  return e ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const r3 = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt", s3 = /* @__PURE__ */ Jr(r3);
function be(t) {
  if (V(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], s = Ve(r) ? l3(r) : be(r);
      if (s)
        for (const i in s)
          e[i] = s[i];
    }
    return e;
  } else if (Ve(t) || ye(t))
    return t;
}
const i3 = /;(?![^(]*\))/g, o3 = /:([^]+)/, a3 = /\/\*.*?\*\//gs;
function l3(t) {
  const e = {};
  return t.replace(a3, "").split(i3).forEach((n) => {
    if (n) {
      const r = n.split(o3);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function ze(t) {
  let e = "";
  if (Ve(t))
    e = t;
  else if (V(t))
    for (let n = 0; n < t.length; n++) {
      const r = ze(t[n]);
      r && (e += r + " ");
    }
  else if (ye(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
function c3(t) {
  if (!t)
    return null;
  let { class: e, style: n } = t;
  return e && !Ve(e) && (t.class = ze(e)), n && (t.style = be(n)), t;
}
const u3 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ou = /* @__PURE__ */ Jr(u3);
function Nu(t) {
  return !!t || t === "";
}
function h3(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = bn(t[r], e[r]);
  return n;
}
function bn(t, e) {
  if (t === e)
    return !0;
  let n = Rc(t), r = Rc(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Os(t), r = Os(e), n || r)
    return t === e;
  if (n = V(t), r = V(e), n || r)
    return n && r ? h3(t, e) : !1;
  if (n = ye(t), r = ye(e), n || r) {
    if (!n || !r)
      return !1;
    const s = Object.keys(t).length, i = Object.keys(e).length;
    if (s !== i)
      return !1;
    for (const o in t) {
      const a = t.hasOwnProperty(o), l = e.hasOwnProperty(o);
      if (a && !l || !a && l || !bn(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function $s(t, e) {
  return t.findIndex((n) => bn(n, e));
}
const Ke = (t) => Ve(t) ? t : t == null ? "" : V(t) || ye(t) && (t.toString === Mu || !le(t.toString)) ? JSON.stringify(t, Pu, 2) : String(t), Pu = (t, e) => e && e.__v_isRef ? Pu(t, e.value) : Fr(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, s]) => (n[`${r} =>`] = s, n), {})
} : yr(e) ? {
  [`Set(${e.size})`]: [...e.values()]
} : ye(e) && !V(e) && !ji(e) ? String(e) : e, Fe = {}, Mr = [], Nt = () => {
}, d3 = () => !1, p3 = /^on[^a-z]/, Sn = (t) => p3.test(t), _a = (t) => t.startsWith("onUpdate:"), _e = Object.assign, wa = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, f3 = Object.prototype.hasOwnProperty, Ce = (t, e) => f3.call(t, e), V = Array.isArray, Fr = (t) => qs(t) === "[object Map]", yr = (t) => qs(t) === "[object Set]", Rc = (t) => qs(t) === "[object Date]", le = (t) => typeof t == "function", Ve = (t) => typeof t == "string", Os = (t) => typeof t == "symbol", ye = (t) => t !== null && typeof t == "object", ho = (t) => ye(t) && le(t.then) && le(t.catch), Mu = Object.prototype.toString, qs = (t) => Mu.call(t), g3 = (t) => qs(t).slice(8, -1), ji = (t) => qs(t) === "[object Object]", Ca = (t) => Ve(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, zr = /* @__PURE__ */ Jr(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), po = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, m3 = /-(\w)/g, xt = po((t) => t.replace(m3, (e, n) => n ? n.toUpperCase() : "")), x3 = /\B([A-Z])/g, ft = po((t) => t.replace(x3, "-$1").toLowerCase()), Zs = po((t) => t.charAt(0).toUpperCase() + t.slice(1)), Dr = po((t) => t ? `on${Zs(t)}` : ""), $r = (t, e) => !Object.is(t, e), Vn = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, $i = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, cn = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Ic;
const L3 = () => Ic || (Ic = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let Rt;
class Ea {
  constructor(e = !1) {
    this.detached = e, this.active = !0, this.effects = [], this.cleanups = [], this.parent = Rt, !e && Rt && (this.index = (Rt.scopes || (Rt.scopes = [])).push(this) - 1);
  }
  run(e) {
    if (this.active) {
      const n = Rt;
      try {
        return Rt = this, e();
      } finally {
        Rt = n;
      }
    }
  }
  on() {
    Rt = this;
  }
  off() {
    Rt = this.parent;
  }
  stop(e) {
    if (this.active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function Fu(t) {
  return new Ea(t);
}
function zu(t, e = Rt) {
  e && e.active && e.effects.push(t);
}
function y3() {
  return Rt;
}
function v3(t) {
  Rt && Rt.cleanups.push(t);
}
const ka = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, Du = (t) => (t.w & qn) > 0, Bu = (t) => (t.n & qn) > 0, b3 = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= qn;
}, _3 = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      Du(s) && !Bu(s) ? s.delete(t) : e[n++] = s, s.w &= ~qn, s.n &= ~qn;
    }
    e.length = n;
  }
}, O1 = /* @__PURE__ */ new WeakMap();
let vs = 0, qn = 1;
const N1 = 30;
let $t;
const ir = Symbol(""), P1 = Symbol("");
class Ws {
  constructor(e, n = null, r) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, zu(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = $t, n = Gn;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = $t, $t = this, Gn = !0, qn = 1 << ++vs, vs <= N1 ? b3(this) : Oc(this), this.fn();
    } finally {
      vs <= N1 && _3(this), qn = 1 << --vs, $t = this.parent, Gn = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    $t === this ? this.deferStop = !0 : this.active && (Oc(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Oc(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
function w3(t, e) {
  t.effect && (t = t.effect.fn);
  const n = new Ws(t);
  e && (_e(n, e), e.scope && zu(n, e.scope)), (!e || !e.lazy) && n.run();
  const r = n.run.bind(n);
  return r.effect = n, r;
}
function C3(t) {
  t.effect.stop();
}
let Gn = !0;
const Uu = [];
function es() {
  Uu.push(Gn), Gn = !1;
}
function ts() {
  const t = Uu.pop();
  Gn = t === void 0 ? !0 : t;
}
function Et(t, e, n) {
  if (Gn && $t) {
    let r = O1.get(t);
    r || O1.set(t, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = ka()), Hu(s);
  }
}
function Hu(t, e) {
  let n = !1;
  vs <= N1 ? Bu(t) || (t.n |= qn, n = !Du(t)) : n = !t.has($t), n && (t.add($t), $t.deps.push(t));
}
function un(t, e, n, r, s, i) {
  const o = O1.get(t);
  if (!o)
    return;
  let a = [];
  if (e === "clear")
    a = [...o.values()];
  else if (n === "length" && V(t)) {
    const l = cn(r);
    o.forEach((c, u) => {
      (u === "length" || u >= l) && a.push(c);
    });
  } else
    switch (n !== void 0 && a.push(o.get(n)), e) {
      case "add":
        V(t) ? Ca(n) && a.push(o.get("length")) : (a.push(o.get(ir)), Fr(t) && a.push(o.get(P1)));
        break;
      case "delete":
        V(t) || (a.push(o.get(ir)), Fr(t) && a.push(o.get(P1)));
        break;
      case "set":
        Fr(t) && a.push(o.get(ir));
        break;
    }
  if (a.length === 1)
    a[0] && M1(a[0]);
  else {
    const l = [];
    for (const c of a)
      c && l.push(...c);
    M1(ka(l));
  }
}
function M1(t, e) {
  const n = V(t) ? t : [...t];
  for (const r of n)
    r.computed && Nc(r);
  for (const r of n)
    r.computed || Nc(r);
}
function Nc(t, e) {
  (t !== $t || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
const E3 = /* @__PURE__ */ Jr("__proto__,__v_isRef,__isVue"), Vu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Os)
), k3 = /* @__PURE__ */ fo(), T3 = /* @__PURE__ */ fo(!1, !0), A3 = /* @__PURE__ */ fo(!0), S3 = /* @__PURE__ */ fo(!0, !0), Pc = /* @__PURE__ */ R3();
function R3() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = ke(this);
      for (let i = 0, o = this.length; i < o; i++)
        Et(r, "get", i + "");
      const s = r[e](...n);
      return s === -1 || s === !1 ? r[e](...n.map(ke)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      es();
      const r = ke(this)[e].apply(this, n);
      return ts(), r;
    };
  }), t;
}
function fo(t = !1, e = !1) {
  return function(n, r, s) {
    if (r === "__v_isReactive")
      return !t;
    if (r === "__v_isReadonly")
      return t;
    if (r === "__v_isShallow")
      return e;
    if (r === "__v_raw" && s === (t ? e ? Yu : Wu : e ? Zu : qu).get(n))
      return n;
    const i = V(n);
    if (!t && i && Ce(Pc, r))
      return Reflect.get(Pc, r, s);
    const o = Reflect.get(n, r, s);
    return (Os(r) ? Vu.has(r) : E3(r)) || (t || Et(n, "get", r), e) ? o : rt(o) ? i && Ca(r) ? o : o.value : ye(o) ? t ? Aa(o) : _n(o) : o;
  };
}
const I3 = /* @__PURE__ */ Gu(), O3 = /* @__PURE__ */ Gu(!0);
function Gu(t = !1) {
  return function(e, n, r, s) {
    let i = e[n];
    if (pr(i) && rt(i) && !rt(r))
      return !1;
    if (!t && (!Ns(r) && !pr(r) && (i = ke(i), r = ke(r)), !V(e) && rt(i) && !rt(r)))
      return i.value = r, !0;
    const o = V(e) && Ca(n) ? Number(n) < e.length : Ce(e, n), a = Reflect.set(e, n, r, s);
    return e === ke(s) && (o ? $r(r, i) && un(e, "set", n, r) : un(e, "add", n, r)), a;
  };
}
function N3(t, e) {
  const n = Ce(t, e);
  t[e];
  const r = Reflect.deleteProperty(t, e);
  return r && n && un(t, "delete", e, void 0), r;
}
function P3(t, e) {
  const n = Reflect.has(t, e);
  return (!Os(e) || !Vu.has(e)) && Et(t, "has", e), n;
}
function M3(t) {
  return Et(t, "iterate", V(t) ? "length" : ir), Reflect.ownKeys(t);
}
const ju = {
  get: k3,
  set: I3,
  deleteProperty: N3,
  has: P3,
  ownKeys: M3
}, $u = {
  get: A3,
  set(t, e) {
    return !0;
  },
  deleteProperty(t, e) {
    return !0;
  }
}, F3 = /* @__PURE__ */ _e({}, ju, {
  get: T3,
  set: O3
}), z3 = /* @__PURE__ */ _e({}, $u, {
  get: S3
}), Ta = (t) => t, go = (t) => Reflect.getPrototypeOf(t);
function Li(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const s = ke(t), i = ke(e);
  n || (e !== i && Et(s, "get", e), Et(s, "get", i));
  const { has: o } = go(s), a = r ? Ta : n ? Ia : Ps;
  if (o.call(s, e))
    return a(t.get(e));
  if (o.call(s, i))
    return a(t.get(i));
  t !== s && t.get(e);
}
function yi(t, e = !1) {
  const n = this.__v_raw, r = ke(n), s = ke(t);
  return e || (t !== s && Et(r, "has", t), Et(r, "has", s)), t === s ? n.has(t) : n.has(t) || n.has(s);
}
function vi(t, e = !1) {
  return t = t.__v_raw, !e && Et(ke(t), "iterate", ir), Reflect.get(t, "size", t);
}
function Mc(t) {
  t = ke(t);
  const e = ke(this);
  return go(e).has.call(e, t) || (e.add(t), un(e, "add", t, t)), this;
}
function Fc(t, e) {
  e = ke(e);
  const n = ke(this), { has: r, get: s } = go(n);
  let i = r.call(n, t);
  i || (t = ke(t), i = r.call(n, t));
  const o = s.call(n, t);
  return n.set(t, e), i ? $r(e, o) && un(n, "set", t, e) : un(n, "add", t, e), this;
}
function zc(t) {
  const e = ke(this), { has: n, get: r } = go(e);
  let s = n.call(e, t);
  s || (t = ke(t), s = n.call(e, t)), r && r.call(e, t);
  const i = e.delete(t);
  return s && un(e, "delete", t, void 0), i;
}
function Dc() {
  const t = ke(this), e = t.size !== 0, n = t.clear();
  return e && un(t, "clear", void 0, void 0), n;
}
function bi(t, e) {
  return function(n, r) {
    const s = this, i = s.__v_raw, o = ke(i), a = e ? Ta : t ? Ia : Ps;
    return !t && Et(o, "iterate", ir), i.forEach((l, c) => n.call(r, a(l), a(c), s));
  };
}
function _i(t, e, n) {
  return function(...r) {
    const s = this.__v_raw, i = ke(s), o = Fr(i), a = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, c = s[t](...r), u = n ? Ta : e ? Ia : Ps;
    return !e && Et(i, "iterate", l ? P1 : ir), {
      next() {
        const { value: d, done: p } = c.next();
        return p ? { value: d, done: p } : {
          value: a ? [u(d[0]), u(d[1])] : u(d),
          done: p
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Pn(t) {
  return function(...e) {
    return t === "delete" ? !1 : this;
  };
}
function D3() {
  const t = {
    get(s) {
      return Li(this, s);
    },
    get size() {
      return vi(this);
    },
    has: yi,
    add: Mc,
    set: Fc,
    delete: zc,
    clear: Dc,
    forEach: bi(!1, !1)
  }, e = {
    get(s) {
      return Li(this, s, !1, !0);
    },
    get size() {
      return vi(this);
    },
    has: yi,
    add: Mc,
    set: Fc,
    delete: zc,
    clear: Dc,
    forEach: bi(!1, !0)
  }, n = {
    get(s) {
      return Li(this, s, !0);
    },
    get size() {
      return vi(this, !0);
    },
    has(s) {
      return yi.call(this, s, !0);
    },
    add: Pn("add"),
    set: Pn("set"),
    delete: Pn("delete"),
    clear: Pn("clear"),
    forEach: bi(!0, !1)
  }, r = {
    get(s) {
      return Li(this, s, !0, !0);
    },
    get size() {
      return vi(this, !0);
    },
    has(s) {
      return yi.call(this, s, !0);
    },
    add: Pn("add"),
    set: Pn("set"),
    delete: Pn("delete"),
    clear: Pn("clear"),
    forEach: bi(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = _i(s, !1, !1), n[s] = _i(s, !0, !1), e[s] = _i(s, !1, !0), r[s] = _i(s, !0, !0);
  }), [
    t,
    n,
    e,
    r
  ];
}
const [B3, U3, H3, V3] = /* @__PURE__ */ D3();
function mo(t, e) {
  const n = e ? t ? V3 : H3 : t ? U3 : B3;
  return (r, s, i) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? r : Reflect.get(Ce(n, s) && s in r ? n : r, s, i);
}
const G3 = {
  get: /* @__PURE__ */ mo(!1, !1)
}, j3 = {
  get: /* @__PURE__ */ mo(!1, !0)
}, $3 = {
  get: /* @__PURE__ */ mo(!0, !1)
}, q3 = {
  get: /* @__PURE__ */ mo(!0, !0)
}, qu = /* @__PURE__ */ new WeakMap(), Zu = /* @__PURE__ */ new WeakMap(), Wu = /* @__PURE__ */ new WeakMap(), Yu = /* @__PURE__ */ new WeakMap();
function Z3(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function W3(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Z3(g3(t));
}
function _n(t) {
  return pr(t) ? t : xo(t, !1, ju, G3, qu);
}
function Ku(t) {
  return xo(t, !1, F3, j3, Zu);
}
function Aa(t) {
  return xo(t, !0, $u, $3, Wu);
}
function Y3(t) {
  return xo(t, !0, z3, q3, Yu);
}
function xo(t, e, n, r, s) {
  if (!ye(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const i = s.get(t);
  if (i)
    return i;
  const o = W3(t);
  if (o === 0)
    return t;
  const a = new Proxy(t, o === 2 ? r : n);
  return s.set(t, a), a;
}
function Ln(t) {
  return pr(t) ? Ln(t.__v_raw) : !!(t && t.__v_isReactive);
}
function pr(t) {
  return !!(t && t.__v_isReadonly);
}
function Ns(t) {
  return !!(t && t.__v_isShallow);
}
function Sa(t) {
  return Ln(t) || pr(t);
}
function ke(t) {
  const e = t && t.__v_raw;
  return e ? ke(e) : t;
}
function Ra(t) {
  return $i(t, "__v_skip", !0), t;
}
const Ps = (t) => ye(t) ? _n(t) : t, Ia = (t) => ye(t) ? Aa(t) : t;
function Oa(t) {
  Gn && $t && (t = ke(t), Hu(t.dep || (t.dep = ka())));
}
function Lo(t, e) {
  t = ke(t), t.dep && M1(t.dep);
}
function rt(t) {
  return !!(t && t.__v_isRef === !0);
}
function zi(t) {
  return Qu(t, !1);
}
function K3(t) {
  return Qu(t, !0);
}
function Qu(t, e) {
  return rt(t) ? t : new Q3(t, e);
}
class Q3 {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : ke(e), this._value = n ? e : Ps(e);
  }
  get value() {
    return Oa(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || Ns(e) || pr(e);
    e = n ? e : ke(e), $r(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : Ps(e), Lo(this));
  }
}
function X3(t) {
  Lo(t);
}
function Xu(t) {
  return rt(t) ? t.value : t;
}
const J3 = {
  get: (t, e, n) => Xu(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const s = t[e];
    return rt(s) && !rt(n) ? (s.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function Na(t) {
  return Ln(t) ? t : new Proxy(t, J3);
}
class e5 {
  constructor(e) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: r } = e(() => Oa(this), () => Lo(this));
    this._get = n, this._set = r;
  }
  get value() {
    return this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function t5(t) {
  return new e5(t);
}
function n5(t) {
  const e = V(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = Ju(t, n);
  return e;
}
class r5 {
  constructor(e, n, r) {
    this._object = e, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
}
function Ju(t, e, n) {
  const r = t[e];
  return rt(r) ? r : new r5(t, e, n);
}
var eh;
class s5 {
  constructor(e, n, r, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[eh] = !1, this._dirty = !0, this.effect = new Ws(e, () => {
      this._dirty || (this._dirty = !0, Lo(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r;
  }
  get value() {
    const e = ke(this);
    return Oa(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
eh = "__v_isReadonly";
function i5(t, e, n = !1) {
  let r, s;
  const i = le(t);
  return i ? (r = t, s = Nt) : (r = t.get, s = t.set), new s5(r, s, i || !s, n);
}
function o5(t, ...e) {
}
function an(t, e, n, r) {
  let s;
  try {
    s = r ? t(...r) : t();
  } catch (i) {
    vr(i, e, n);
  }
  return s;
}
function Ct(t, e, n, r) {
  if (le(t)) {
    const i = an(t, e, n, r);
    return i && ho(i) && i.catch((o) => {
      vr(o, e, n);
    }), i;
  }
  const s = [];
  for (let i = 0; i < t.length; i++)
    s.push(Ct(t[i], e, n, r));
  return s;
}
function vr(t, e, n, r = !0) {
  const s = e ? e.vnode : null;
  if (e) {
    let i = e.parent;
    const o = e.proxy, a = n;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](t, o, a) === !1)
            return;
      }
      i = i.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      an(l, null, 10, [t, o, a]);
      return;
    }
  }
  a5(t, n, s, r);
}
function a5(t, e, n, r = !0) {
  console.error(t);
}
let Ms = !1, F1 = !1;
const ut = [];
let tn = 0;
const Br = [];
let gn = null, tr = 0;
const th = /* @__PURE__ */ Promise.resolve();
let Pa = null;
function Ys(t) {
  const e = Pa || th;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function l5(t) {
  let e = tn + 1, n = ut.length;
  for (; e < n; ) {
    const r = e + n >>> 1;
    Fs(ut[r]) < t ? e = r + 1 : n = r;
  }
  return e;
}
function yo(t) {
  (!ut.length || !ut.includes(t, Ms && t.allowRecurse ? tn + 1 : tn)) && (t.id == null ? ut.push(t) : ut.splice(l5(t.id), 0, t), nh());
}
function nh() {
  !Ms && !F1 && (F1 = !0, Pa = th.then(rh));
}
function c5(t) {
  const e = ut.indexOf(t);
  e > tn && ut.splice(e, 1);
}
function Ma(t) {
  V(t) ? Br.push(...t) : (!gn || !gn.includes(t, t.allowRecurse ? tr + 1 : tr)) && Br.push(t), nh();
}
function Bc(t, e = Ms ? tn + 1 : 0) {
  for (; e < ut.length; e++) {
    const n = ut[e];
    n && n.pre && (ut.splice(e, 1), e--, n());
  }
}
function qi(t) {
  if (Br.length) {
    const e = [...new Set(Br)];
    if (Br.length = 0, gn) {
      gn.push(...e);
      return;
    }
    for (gn = e, gn.sort((n, r) => Fs(n) - Fs(r)), tr = 0; tr < gn.length; tr++)
      gn[tr]();
    gn = null, tr = 0;
  }
}
const Fs = (t) => t.id == null ? 1 / 0 : t.id, u5 = (t, e) => {
  const n = Fs(t) - Fs(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function rh(t) {
  F1 = !1, Ms = !0, ut.sort(u5);
  try {
    for (tn = 0; tn < ut.length; tn++) {
      const e = ut[tn];
      e && e.active !== !1 && an(e, null, 14);
    }
  } finally {
    tn = 0, ut.length = 0, qi(), Ms = !1, Pa = null, (ut.length || Br.length) && rh();
  }
}
let Nr, wi = [];
function sh(t, e) {
  var n, r;
  Nr = t, Nr ? (Nr.enabled = !0, wi.forEach(({ event: s, args: i }) => Nr.emit(s, ...i)), wi = []) : typeof window < "u" && window.HTMLElement && !(!((r = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || r === void 0) && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    sh(s, e);
  }), setTimeout(() => {
    Nr || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, wi = []);
  }, 3e3)) : wi = [];
}
function h5(t, e, ...n) {
}
const Fa = {
  MODE: 2
};
function d5(t) {
  _e(Fa, t);
}
function Uc(t, e) {
  const n = e && e.type.compatConfig;
  return n && t in n ? n[t] : Fa[t];
}
function Pe(t, e, n = !1) {
  if (!n && e && e.type.__isBuiltIn)
    return !1;
  const r = Uc("MODE", e) || 2, s = Uc(t, e);
  return (le(r) ? r(e && e.type) : r) === 2 ? s !== !1 : s === !0 || s === "suppress-warning";
}
function ot(t, e, ...n) {
  if (!Pe(t, e))
    throw new Error(`${t} compat has been disabled.`);
}
function wn(t, e, ...n) {
  return Pe(t, e);
}
function vo(t, e, ...n) {
  return Pe(t, e);
}
const z1 = /* @__PURE__ */ new WeakMap();
function za(t) {
  let e = z1.get(t);
  return e || z1.set(t, e = /* @__PURE__ */ Object.create(null)), e;
}
function Da(t, e, n) {
  if (V(e))
    e.forEach((r) => Da(t, r, n));
  else {
    e.startsWith("hook:") ? ot("INSTANCE_EVENT_HOOKS", t, e) : ot("INSTANCE_EVENT_EMITTER", t);
    const r = za(t);
    (r[e] || (r[e] = [])).push(n);
  }
  return t.proxy;
}
function p5(t, e, n) {
  const r = (...s) => {
    Ba(t, e, r), n.call(t.proxy, ...s);
  };
  return r.fn = n, Da(t, e, r), t.proxy;
}
function Ba(t, e, n) {
  ot("INSTANCE_EVENT_EMITTER", t);
  const r = t.proxy;
  if (!e)
    return z1.set(t, /* @__PURE__ */ Object.create(null)), r;
  if (V(e))
    return e.forEach((o) => Ba(t, o, n)), r;
  const s = za(t), i = s[e];
  return i ? n ? (s[e] = i.filter((o) => !(o === n || o.fn === n)), r) : (s[e] = void 0, r) : r;
}
function f5(t, e, n) {
  const r = za(t)[e];
  return r && Ct(r.map((s) => s.bind(t.proxy)), t, 6, n), t.proxy;
}
const bo = "onModelCompat:";
function g5(t) {
  const { type: e, shapeFlag: n, props: r, dynamicProps: s } = t, i = e;
  if (n & 6 && r && "modelValue" in r) {
    if (!Pe(
      "COMPONENT_V_MODEL",
      { type: e }
    ))
      return;
    const o = i.model || {};
    ih(o, i.mixins);
    const { prop: a = "value", event: l = "input" } = o;
    a !== "modelValue" && (r[a] = r.modelValue, delete r.modelValue), s && (s[s.indexOf("modelValue")] = a), r[bo + l] = r["onUpdate:modelValue"], delete r["onUpdate:modelValue"];
  }
}
function ih(t, e) {
  e && e.forEach((n) => {
    n.model && _e(t, n.model), n.mixins && ih(t, n.mixins);
  });
}
function m5(t, e, n) {
  if (!Pe("COMPONENT_V_MODEL", t))
    return;
  const r = t.vnode.props, s = r && r[bo + e];
  s && an(s, t, 6, n);
}
function x5(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const r = t.vnode.props || Fe;
  let s = n;
  const i = e.startsWith("update:"), o = i && e.slice(7);
  if (o && o in r) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`, { number: d, trim: p } = r[u] || Fe;
    p && (s = n.map((g) => Ve(g) ? g.trim() : g)), d && (s = n.map(cn));
  }
  let a, l = r[a = Dr(e)] || r[a = Dr(xt(e))];
  !l && i && (l = r[a = Dr(ft(e))]), l && Ct(l, t, 6, s);
  const c = r[a + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[a])
      return;
    t.emitted[a] = !0, Ct(c, t, 6, s);
  }
  return m5(t, e, s), f5(t, e, s);
}
function oh(t, e, n = !1) {
  const r = e.emitsCache, s = r.get(t);
  if (s !== void 0)
    return s;
  const i = t.emits;
  let o = {}, a = !1;
  if (!le(t)) {
    const l = (c) => {
      const u = oh(c, e, !0);
      u && (a = !0, _e(o, u));
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !i && !a ? (ye(t) && r.set(t, null), null) : (V(i) ? i.forEach((l) => o[l] = null) : _e(o, i), ye(t) && r.set(t, o), o);
}
function _o(t, e) {
  return !t || !Sn(e) ? !1 : e.startsWith(bo) ? !0 : (e = e.slice(2).replace(/Once$/, ""), Ce(t, e[0].toLowerCase() + e.slice(1)) || Ce(t, ft(e)) || Ce(t, e));
}
let Xe = null, Ur = null;
function zs(t) {
  const e = Xe;
  return Xe = t, Ur = t && t.type.__scopeId || null, Ur || (Ur = t && t.type._scopeId || null), e;
}
function br(t) {
  Ur = t;
}
function _r() {
  Ur = null;
}
const L5 = (t) => Ua;
function Ua(t, e = Xe, n) {
  if (!e || t._n)
    return t;
  const r = (...s) => {
    r._d && j1(-1);
    const i = zs(e);
    let o;
    try {
      o = t(...s);
    } finally {
      zs(i), r._d && j1(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, n && (r._ns = !0), r;
}
function Di(t) {
  const { type: e, vnode: n, proxy: r, withProxy: s, props: i, propsOptions: [o], slots: a, attrs: l, emit: c, render: u, renderCache: d, data: p, setupState: g, ctx: _, inheritAttrs: k } = t;
  let j, b;
  const m = zs(t);
  try {
    if (n.shapeFlag & 4) {
      const C = s || r;
      j = It(u.call(C, C, d, i, g, p, _)), b = l;
    } else {
      const C = e;
      j = It(C.length > 1 ? C(i, { attrs: l, slots: a, emit: c }) : C(i, null)), b = e.props ? l : v5(l);
    }
  } catch (C) {
    ws.length = 0, vr(C, t, 1), j = ne(at);
  }
  let y = j;
  if (b && k !== !1) {
    const C = Object.keys(b), { shapeFlag: F } = y;
    C.length && F & 7 && (o && C.some(_a) && (b = b5(b, o)), y = qt(y, b));
  }
  if (Pe("INSTANCE_ATTRS_CLASS_STYLE", t) && n.shapeFlag & 4 && y.shapeFlag & 7) {
    const { class: C, style: F } = n.props || {};
    (C || F) && (y = qt(y, {
      class: C,
      style: F
    }));
  }
  return n.dirs && (y = qt(y), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && (y.transition = n.transition), j = y, zs(m), j;
}
function y5(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Mt(r)) {
      if (r.type !== at || r.children === "v-if") {
        if (e)
          return;
        e = r;
      }
    } else
      return;
  }
  return e;
}
const v5 = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || Sn(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, b5 = (t, e) => {
  const n = {};
  for (const r in t)
    (!_a(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function _5(t, e, n) {
  const { props: r, children: s, component: i } = t, { props: o, children: a, patchFlag: l } = e, c = i.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Hc(r, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (o[p] !== r[p] && !_o(c, p))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? Hc(r, o, c) : !0 : !!o;
  return !1;
}
function Hc(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (e[i] !== t[i] && !_o(n, i))
      return !0;
  }
  return !1;
}
function Ha({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; )
    (t = e.vnode).el = n, e = e.parent;
}
const ah = (t) => t.__isSuspense, w5 = {
  name: "Suspense",
  __isSuspense: !0,
  process(t, e, n, r, s, i, o, a, l, c) {
    t == null ? E5(e, n, r, s, i, o, a, l, c) : k5(t, e, n, r, s, o, a, l, c);
  },
  hydrate: T5,
  create: Va,
  normalize: A5
}, C5 = w5;
function Ds(t, e) {
  const n = t.props && t.props[e];
  le(n) && n();
}
function E5(t, e, n, r, s, i, o, a, l) {
  const { p: c, o: { createElement: u } } = l, d = u("div"), p = t.suspense = Va(t, s, r, e, d, n, i, o, a, l);
  c(null, p.pendingBranch = t.ssContent, d, null, r, p, i, o), p.deps > 0 ? (Ds(t, "onPending"), Ds(t, "onFallback"), c(
    null,
    t.ssFallback,
    e,
    n,
    r,
    null,
    i,
    o
  ), Hr(p, t.ssFallback)) : p.resolve();
}
function k5(t, e, n, r, s, i, o, a, { p: l, um: c, o: { createElement: u } }) {
  const d = e.suspense = t.suspense;
  d.vnode = e, e.el = t.el;
  const p = e.ssContent, g = e.ssFallback, { activeBranch: _, pendingBranch: k, isInFallback: j, isHydrating: b } = d;
  if (k)
    d.pendingBranch = p, nn(p, k) ? (l(k, p, d.hiddenContainer, null, s, d, i, o, a), d.deps <= 0 ? d.resolve() : j && (l(
      _,
      g,
      n,
      r,
      s,
      null,
      i,
      o,
      a
    ), Hr(d, g))) : (d.pendingId++, b ? (d.isHydrating = !1, d.activeBranch = k) : c(k, s, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = u("div"), j ? (l(null, p, d.hiddenContainer, null, s, d, i, o, a), d.deps <= 0 ? d.resolve() : (l(
      _,
      g,
      n,
      r,
      s,
      null,
      i,
      o,
      a
    ), Hr(d, g))) : _ && nn(p, _) ? (l(_, p, n, r, s, d, i, o, a), d.resolve(!0)) : (l(null, p, d.hiddenContainer, null, s, d, i, o, a), d.deps <= 0 && d.resolve()));
  else if (_ && nn(p, _))
    l(_, p, n, r, s, d, i, o, a), Hr(d, p);
  else if (Ds(e, "onPending"), d.pendingBranch = p, d.pendingId++, l(null, p, d.hiddenContainer, null, s, d, i, o, a), d.deps <= 0)
    d.resolve();
  else {
    const { timeout: m, pendingId: y } = d;
    m > 0 ? setTimeout(() => {
      d.pendingId === y && d.fallback(g);
    }, m) : m === 0 && d.fallback(g);
  }
}
function Va(t, e, n, r, s, i, o, a, l, c, u = !1) {
  const { p: d, m: p, um: g, n: _, o: { parentNode: k, remove: j } } = c, b = cn(t.props && t.props.timeout), m = {
    vnode: t,
    parent: e,
    parentComponent: n,
    isSVG: o,
    container: r,
    hiddenContainer: s,
    anchor: i,
    deps: 0,
    pendingId: 0,
    timeout: typeof b == "number" ? b : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !0,
    isHydrating: u,
    isUnmounted: !1,
    effects: [],
    resolve(y = !1) {
      const { vnode: C, activeBranch: F, pendingBranch: G, pendingId: Y, effects: S, parentComponent: oe, container: se } = m;
      if (m.isHydrating)
        m.isHydrating = !1;
      else if (!y) {
        const Ae = F && G.transition && G.transition.mode === "out-in";
        Ae && (F.transition.afterLeave = () => {
          Y === m.pendingId && p(G, se, ie, 0);
        });
        let { anchor: ie } = m;
        F && (ie = _(F), g(F, oe, m, !0)), Ae || p(G, se, ie, 0);
      }
      Hr(m, G), m.pendingBranch = null, m.isInFallback = !1;
      let ue = m.parent, $e = !1;
      for (; ue; ) {
        if (ue.pendingBranch) {
          ue.effects.push(...S), $e = !0;
          break;
        }
        ue = ue.parent;
      }
      $e || Ma(S), m.effects = [], Ds(C, "onResolve");
    },
    fallback(y) {
      if (!m.pendingBranch)
        return;
      const { vnode: C, activeBranch: F, parentComponent: G, container: Y, isSVG: S } = m;
      Ds(C, "onFallback");
      const oe = _(F), se = () => {
        !m.isInFallback || (d(
          null,
          y,
          Y,
          oe,
          G,
          null,
          S,
          a,
          l
        ), Hr(m, y));
      }, ue = y.transition && y.transition.mode === "out-in";
      ue && (F.transition.afterLeave = se), m.isInFallback = !0, g(
        F,
        G,
        null,
        !0
      ), ue || se();
    },
    move(y, C, F) {
      m.activeBranch && p(m.activeBranch, y, C, F), m.container = y;
    },
    next() {
      return m.activeBranch && _(m.activeBranch);
    },
    registerDep(y, C) {
      const F = !!m.pendingBranch;
      F && m.deps++;
      const G = y.vnode.el;
      y.asyncDep.catch((Y) => {
        vr(Y, y, 0);
      }).then((Y) => {
        if (y.isUnmounted || m.isUnmounted || m.pendingId !== y.suspenseId)
          return;
        y.asyncResolved = !0;
        const { vnode: S } = y;
        $1(y, Y, !1), G && (S.el = G);
        const oe = !G && y.subTree.el;
        C(
          y,
          S,
          k(G || y.subTree.el),
          G ? null : _(y.subTree),
          m,
          o,
          l
        ), oe && j(oe), Ha(y, S.el), F && --m.deps === 0 && m.resolve();
      });
    },
    unmount(y, C) {
      m.isUnmounted = !0, m.activeBranch && g(m.activeBranch, n, y, C), m.pendingBranch && g(m.pendingBranch, n, y, C);
    }
  };
  return m;
}
function T5(t, e, n, r, s, i, o, a, l) {
  const c = e.suspense = Va(e, r, n, t.parentNode, document.createElement("div"), null, s, i, o, a, !0), u = l(t, c.pendingBranch = e.ssContent, n, c, i, o);
  return c.deps === 0 && c.resolve(), u;
}
function A5(t) {
  const { shapeFlag: e, children: n } = t, r = e & 32;
  t.ssContent = Vc(r ? n.default : n), t.ssFallback = r ? Vc(n.fallback) : ne(at);
}
function Vc(t) {
  let e;
  if (le(t)) {
    const n = mr && t._c;
    n && (t._d = !1, P()), t = t(), n && (t._d = !0, e = wt, Qh());
  }
  return V(t) && (t = y5(t)), t = It(t), e && !t.dynamicChildren && (t.dynamicChildren = e.filter((n) => n !== t)), t;
}
function lh(t, e) {
  e && e.pendingBranch ? V(t) ? e.effects.push(...t) : e.effects.push(t) : Ma(t);
}
function Hr(t, e) {
  t.activeBranch = e;
  const { vnode: n, parentComponent: r } = t, s = n.el = e.el;
  r && r.subTree === n && (r.vnode.el = s, Ha(r, s));
}
function ch(t, e) {
  if (et) {
    let n = et.provides;
    const r = et.parent && et.parent.provides;
    r === n && (n = et.provides = Object.create(r)), n[t] = e;
  }
}
function or(t, e, n = !1) {
  const r = et || Xe;
  if (r) {
    const s = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
    if (s && t in s)
      return s[t];
    if (arguments.length > 1)
      return n && le(e) ? e.call(r.proxy) : e;
  }
}
function S5(t, e) {
  return Ks(t, null, e);
}
function uh(t, e) {
  return Ks(t, null, { flush: "post" });
}
function R5(t, e) {
  return Ks(t, null, { flush: "sync" });
}
const Ci = {};
function ar(t, e, n) {
  return Ks(t, e, n);
}
function Ks(t, e, { immediate: n, deep: r, flush: s, onTrack: i, onTrigger: o } = Fe) {
  const a = et;
  let l, c = !1, u = !1;
  if (rt(t) ? (l = () => t.value, c = Ns(t)) : Ln(t) ? (l = () => t, r = !0) : V(t) ? (u = !0, c = t.some((y) => Ln(y) || Ns(y)), l = () => t.map((y) => {
    if (rt(y))
      return y.value;
    if (Ln(y))
      return Bn(y);
    if (le(y))
      return an(y, a, 2);
  })) : le(t) ? e ? l = () => an(t, a, 2) : l = () => {
    if (!(a && a.isUnmounted))
      return d && d(), Ct(t, a, 3, [p]);
  } : l = Nt, e && !r) {
    const y = l;
    l = () => {
      const C = y();
      return V(C) && vo("WATCH_ARRAY", a) && Bn(C), C;
    };
  }
  if (e && r) {
    const y = l;
    l = () => Bn(y());
  }
  let d, p = (y) => {
    d = b.onStop = () => {
      an(y, a, 4);
    };
  }, g;
  if (Zr)
    if (p = Nt, e ? n && Ct(e, a, 3, [
      l(),
      u ? [] : void 0,
      p
    ]) : l(), s === "sync") {
      const y = o2();
      g = y.__watcherHandles || (y.__watcherHandles = []);
    } else
      return Nt;
  let _ = u ? new Array(t.length).fill(Ci) : Ci;
  const k = () => {
    if (b.active)
      if (e) {
        const y = b.run();
        (r || c || (u ? y.some((C, F) => $r(C, _[F])) : $r(y, _)) || V(y) && Pe("WATCH_ARRAY", a)) && (d && d(), Ct(e, a, 3, [
          y,
          _ === Ci ? void 0 : u && _[0] === Ci ? [] : _,
          p
        ]), _ = y);
      } else
        b.run();
  };
  k.allowRecurse = !!e;
  let j;
  s === "sync" ? j = k : s === "post" ? j = () => Qe(k, a && a.suspense) : (k.pre = !0, a && (k.id = a.uid), j = () => yo(k));
  const b = new Ws(l, j);
  e ? n ? k() : _ = b.run() : s === "post" ? Qe(b.run.bind(b), a && a.suspense) : b.run();
  const m = () => {
    b.stop(), a && a.scope && wa(a.scope.effects, b);
  };
  return g && g.push(m), m;
}
function I5(t, e, n) {
  const r = this.proxy, s = Ve(t) ? t.includes(".") ? hh(r, t) : () => r[t] : t.bind(r, r);
  let i;
  le(e) ? i = e : (i = e.handler, n = e);
  const o = et;
  Zn(this);
  const a = Ks(s, i.bind(r), n);
  return o ? Zn(o) : jn(), a;
}
function hh(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function Bn(t, e) {
  if (!ye(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), rt(t))
    Bn(t.value, e);
  else if (V(t))
    for (let n = 0; n < t.length; n++)
      Bn(t[n], e);
  else if (yr(t) || Fr(t))
    t.forEach((n) => {
      Bn(n, e);
    });
  else if (ji(t))
    for (const n in t)
      Bn(t[n], e);
  return t;
}
function Ga() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Xs(() => {
    t.isMounted = !0;
  }), Bs(() => {
    t.isUnmounting = !0;
  }), t;
}
const Ut = [Function, Array], dh = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ut,
    onEnter: Ut,
    onAfterEnter: Ut,
    onEnterCancelled: Ut,
    onBeforeLeave: Ut,
    onLeave: Ut,
    onAfterLeave: Ut,
    onLeaveCancelled: Ut,
    onBeforeAppear: Ut,
    onAppear: Ut,
    onAfterAppear: Ut,
    onAppearCancelled: Ut
  },
  setup(t, { slots: e }) {
    const n = pn(), r = Ga();
    let s;
    return () => {
      const i = e.default && wo(e.default(), !0);
      if (!i || !i.length)
        return;
      let o = i[0];
      if (i.length > 1) {
        for (const k of i)
          if (k.type !== at) {
            o = k;
            break;
          }
      }
      const a = ke(t), { mode: l } = a;
      if (r.isLeaving)
        return a1(o);
      const c = Gc(o);
      if (!c)
        return a1(o);
      const u = qr(c, a, r, n);
      fr(c, u);
      const d = n.subTree, p = d && Gc(d);
      let g = !1;
      const { getTransitionKey: _ } = c.type;
      if (_) {
        const k = _();
        s === void 0 ? s = k : k !== s && (s = k, g = !0);
      }
      if (p && p.type !== at && (!nn(c, p) || g)) {
        const k = qr(p, a, r, n);
        if (fr(p, k), l === "out-in")
          return r.isLeaving = !0, k.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && n.update();
          }, a1(o);
        l === "in-out" && c.type !== at && (k.delayLeave = (j, b, m) => {
          const y = ph(r, p);
          y[String(p.key)] = p, j._leaveCb = () => {
            b(), j._leaveCb = void 0, delete u.delayedLeave;
          }, u.delayedLeave = m;
        });
      }
      return o;
    };
  }
};
dh.__isBuiltIn = !0;
const ja = dh;
function ph(t, e) {
  const { leavingVNodes: n } = t;
  let r = n.get(e.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(e.type, r)), r;
}
function qr(t, e, n, r) {
  const { appear: s, mode: i, persisted: o = !1, onBeforeEnter: a, onEnter: l, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: d, onLeave: p, onAfterLeave: g, onLeaveCancelled: _, onBeforeAppear: k, onAppear: j, onAfterAppear: b, onAppearCancelled: m } = e, y = String(t.key), C = ph(n, t), F = (S, oe) => {
    S && Ct(S, r, 9, oe);
  }, G = (S, oe) => {
    const se = oe[1];
    F(S, oe), V(S) ? S.every((ue) => ue.length <= 1) && se() : S.length <= 1 && se();
  }, Y = {
    mode: i,
    persisted: o,
    beforeEnter(S) {
      let oe = a;
      if (!n.isMounted)
        if (s)
          oe = k || a;
        else
          return;
      S._leaveCb && S._leaveCb(!0);
      const se = C[y];
      se && nn(t, se) && se.el._leaveCb && se.el._leaveCb(), F(oe, [S]);
    },
    enter(S) {
      let oe = l, se = c, ue = u;
      if (!n.isMounted)
        if (s)
          oe = j || l, se = b || c, ue = m || u;
        else
          return;
      let $e = !1;
      const Ae = S._enterCb = (ie) => {
        $e || ($e = !0, ie ? F(ue, [S]) : F(se, [S]), Y.delayedLeave && Y.delayedLeave(), S._enterCb = void 0);
      };
      oe ? G(oe, [S, Ae]) : Ae();
    },
    leave(S, oe) {
      const se = String(t.key);
      if (S._enterCb && S._enterCb(!0), n.isUnmounting)
        return oe();
      F(d, [S]);
      let ue = !1;
      const $e = S._leaveCb = (Ae) => {
        ue || (ue = !0, oe(), Ae ? F(_, [S]) : F(g, [S]), S._leaveCb = void 0, C[se] === t && delete C[se]);
      };
      C[se] = t, p ? G(p, [S, $e]) : $e();
    },
    clone(S) {
      return qr(S, e, n, r);
    }
  };
  return Y;
}
function a1(t) {
  if (Qs(t))
    return t = qt(t), t.children = null, t;
}
function Gc(t) {
  return Qs(t) ? t.children ? t.children[0] : void 0 : t;
}
function fr(t, e) {
  t.shapeFlag & 6 && t.component ? fr(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function wo(t, e = !1, n) {
  let r = [], s = 0;
  for (let i = 0; i < t.length; i++) {
    let o = t[i];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === He ? (o.patchFlag & 128 && s++, r = r.concat(wo(o.children, e, a))) : (e || o.type !== at) && r.push(a != null ? qt(o, { key: a }) : o);
  }
  if (s > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
function $a(t) {
  return le(t) ? { setup: t, name: t.name } : t;
}
const lr = (t) => !!t.type.__asyncLoader;
function Bi(t) {
  le(t) && (t = { loader: t });
  const {
    loader: e,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    timeout: i,
    suspensible: o = !0,
    onError: a
  } = t;
  let l = null, c, u = 0;
  const d = () => (u++, l = null, p()), p = () => {
    let g;
    return l || (g = l = e().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), a)
        return new Promise((k, j) => {
          a(_, () => k(d()), () => j(_), u + 1);
        });
      throw _;
    }).then((_) => g !== l && l ? l : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), c = _, _)));
  };
  return $a({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const g = et;
      if (c)
        return () => l1(c, g);
      const _ = (m) => {
        l = null, vr(m, g, 13, !r);
      };
      if (o && g.suspense || Zr)
        return p().then((m) => () => l1(m, g)).catch((m) => (_(m), () => r ? ne(r, {
          error: m
        }) : null));
      const k = zi(!1), j = zi(), b = zi(!!s);
      return s && setTimeout(() => {
        b.value = !1;
      }, s), i != null && setTimeout(() => {
        if (!k.value && !j.value) {
          const m = new Error(`Async component timed out after ${i}ms.`);
          _(m), j.value = m;
        }
      }, i), p().then(() => {
        k.value = !0, g.parent && Qs(g.parent.vnode) && yo(g.parent.update);
      }).catch((m) => {
        _(m), j.value = m;
      }), () => {
        if (k.value && c)
          return l1(c, g);
        if (j.value && r)
          return ne(r, {
            error: j.value
          });
        if (n && !b.value)
          return ne(n);
      };
    }
  });
}
function l1(t, e) {
  const { ref: n, props: r, children: s, ce: i } = e.vnode, o = ne(t, r, s);
  return o.ref = n, o.ce = i, delete e.vnode.ce, o;
}
const Qs = (t) => t.type.__isKeepAlive, fh = {
  name: "KeepAlive",
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(t, { slots: e }) {
    const n = pn(), r = n.ctx;
    if (!r.renderer)
      return () => {
        const m = e.default && e.default();
        return m && m.length === 1 ? m[0] : m;
      };
    const s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    let o = null;
    const a = n.suspense, { renderer: { p: l, m: c, um: u, o: { createElement: d } } } = r, p = d("div");
    r.activate = (m, y, C, F, G) => {
      const Y = m.component;
      c(m, y, C, 0, a), l(Y.vnode, m, y, C, Y, a, F, m.slotScopeIds, G), Qe(() => {
        Y.isDeactivated = !1, Y.a && Vn(Y.a);
        const S = m.props && m.props.onVnodeMounted;
        S && vt(S, Y.parent, m);
      }, a);
    }, r.deactivate = (m) => {
      const y = m.component;
      c(m, p, null, 1, a), Qe(() => {
        y.da && Vn(y.da);
        const C = m.props && m.props.onVnodeUnmounted;
        C && vt(C, y.parent, m), y.isDeactivated = !0;
      }, a);
    };
    function g(m) {
      c1(m), u(m, n, a, !0);
    }
    function _(m) {
      s.forEach((y, C) => {
        const F = W1(y.type);
        F && (!m || !m(F)) && k(C);
      });
    }
    function k(m) {
      const y = s.get(m);
      !o || y.type !== o.type ? g(y) : o && c1(o), s.delete(m), i.delete(m);
    }
    ar(
      () => [t.include, t.exclude],
      ([m, y]) => {
        m && _((C) => bs(m, C)), y && _((C) => !bs(y, C));
      },
      { flush: "post", deep: !0 }
    );
    let j = null;
    const b = () => {
      j != null && s.set(j, u1(n.subTree));
    };
    return Xs(b), Eo(b), Bs(() => {
      s.forEach((m) => {
        const { subTree: y, suspense: C } = n, F = u1(y);
        if (m.type === F.type) {
          c1(F);
          const G = F.component.da;
          G && Qe(G, C);
          return;
        }
        g(m);
      });
    }), () => {
      if (j = null, !e.default)
        return null;
      const m = e.default(), y = m[0];
      if (m.length > 1)
        return o = null, m;
      if (!Mt(y) || !(y.shapeFlag & 4) && !(y.shapeFlag & 128))
        return o = null, y;
      let C = u1(y);
      const F = C.type, G = W1(lr(C) ? C.type.__asyncResolved || {} : F), { include: Y, exclude: S, max: oe } = t;
      if (Y && (!G || !bs(Y, G)) || S && G && bs(S, G))
        return o = C, y;
      const se = C.key == null ? F : C.key, ue = s.get(se);
      return C.el && (C = qt(C), y.shapeFlag & 128 && (y.ssContent = C)), j = se, ue ? (C.el = ue.el, C.component = ue.component, C.transition && fr(C, C.transition), C.shapeFlag |= 512, i.delete(se), i.add(se)) : (i.add(se), oe && i.size > parseInt(oe, 10) && k(i.values().next().value)), C.shapeFlag |= 256, o = C, ah(y.type) ? y : C;
    };
  }
};
fh.__isBuildIn = !0;
const gh = fh;
function bs(t, e) {
  return V(t) ? t.some((n) => bs(n, e)) : Ve(t) ? t.split(",").includes(e) : t.test ? t.test(e) : !1;
}
function mh(t, e) {
  Lh(t, "a", e);
}
function xh(t, e) {
  Lh(t, "da", e);
}
function Lh(t, e, n = et) {
  const r = t.__wdc || (t.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return t();
  });
  if (Co(e, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Qs(s.parent.vnode) && O5(r, e, n, s), s = s.parent;
  }
}
function O5(t, e, n, r) {
  const s = Co(e, t, r, !0);
  Us(() => {
    wa(r[e], s);
  }, n);
}
function c1(t) {
  t.shapeFlag &= -257, t.shapeFlag &= -513;
}
function u1(t) {
  return t.shapeFlag & 128 ? t.ssContent : t;
}
function Co(t, e, n = et, r = !1) {
  if (n) {
    const s = n[t] || (n[t] = []), i = e.__weh || (e.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      es(), Zn(n);
      const a = Ct(e, n, t, o);
      return jn(), ts(), a;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Rn = (t) => (e, n = et) => (!Zr || t === "sp") && Co(t, (...r) => e(...r), n), yh = Rn("bm"), Xs = Rn("m"), vh = Rn("bu"), Eo = Rn("u"), Bs = Rn("bum"), Us = Rn("um"), bh = Rn("sp"), _h = Rn("rtg"), wh = Rn("rtc");
function Ch(t, e = et) {
  Co("ec", t, e);
}
function N5(t) {
  ot("INSTANCE_CHILDREN", t);
  const e = t.subTree, n = [];
  return e && Eh(e, n), n;
}
function Eh(t, e) {
  if (t.component)
    e.push(t.component.proxy);
  else if (t.shapeFlag & 16) {
    const n = t.children;
    for (let r = 0; r < n.length; r++)
      Eh(n[r], e);
  }
}
function kh(t) {
  ot("INSTANCE_LISTENERS", t);
  const e = {}, n = t.vnode.props;
  if (!n)
    return e;
  for (const r in n)
    Sn(r) && (e[r[2].toLowerCase() + r.slice(3)] = n[r]);
  return e;
}
const P5 = {
  beforeMount: "bind",
  mounted: "inserted",
  updated: ["update", "componentUpdated"],
  unmounted: "unbind"
};
function M5(t, e, n) {
  const r = P5[t];
  if (r)
    if (V(r)) {
      const s = [];
      return r.forEach((i) => {
        const o = e[i];
        o && (wn("CUSTOM_DIR", n, i, t), s.push(o));
      }), s.length ? s : void 0;
    } else
      return e[r] && wn("CUSTOM_DIR", n, r, t), e[r];
}
function ko(t, e) {
  const n = Xe;
  if (n === null)
    return t;
  const r = Io(n) || n.proxy, s = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [o, a, l, c = Fe] = e[i];
    o && (le(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Bn(a), s.push({
      dir: o,
      instance: r,
      value: a,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return t;
}
function en(t, e, n, r) {
  const s = t.dirs, i = e && e.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    i && (a.oldValue = i[o].value);
    let l = a.dir[r];
    l || (l = M5(r, a.dir, n)), l && (es(), Ct(l, n, 8, [
      t.el,
      a,
      t,
      e
    ]), ts());
  }
}
const qa = "components", F5 = "directives", z5 = "filters";
function fe(t, e) {
  return To(qa, t, !0, e) || t;
}
const Th = Symbol();
function Js(t) {
  return Ve(t) ? To(qa, t, !1) || t : t || Th;
}
function Ah(t) {
  return To(F5, t);
}
function Sh(t) {
  return To(z5, t);
}
function To(t, e, n = !0, r = !1) {
  const s = Xe || et;
  if (s) {
    const i = s.type;
    if (t === qa) {
      const a = W1(i, !1);
      if (a && (a === e || a === xt(e) || a === Zs(xt(e))))
        return i;
    }
    const o = jc(s[t] || i[t], e) || jc(s.appContext[t], e);
    return !o && r ? i : o;
  }
}
function jc(t, e) {
  return t && (t[e] || t[xt(e)] || t[Zs(xt(e))]);
}
function D5(t) {
  const e = t.type, n = e.render;
  if (!(!n || n._rc || n._compatChecked || n._compatWrapped)) {
    if (n.length >= 2) {
      n._compatChecked = !0;
      return;
    }
    if (vo("RENDER_FUNCTION", t)) {
      const r = e.render = function() {
        return n.call(this, Zi);
      };
      r._compatWrapped = !0;
    }
  }
}
function Zi(t, e, n) {
  if (t || (t = at), typeof t == "string") {
    const i = ft(t);
    (i === "transition" || i === "transition-group" || i === "keep-alive") && (t = `__compat__${i}`), t = Js(t);
  }
  const r = arguments.length, s = V(e);
  return r === 2 || s ? ye(e) && !s ? Mt(e) ? Ei(ne(t, null, [e])) : Ei(qc(ne(t, $c(e, t)), e)) : Ei(ne(t, null, e)) : (Mt(n) && (n = [n]), Ei(qc(ne(t, $c(e, t), n), e)));
}
const B5 = /* @__PURE__ */ Jr("staticStyle,staticClass,directives,model,hook");
function $c(t, e) {
  if (!t)
    return null;
  const n = {};
  for (const r in t)
    if (r === "attrs" || r === "domProps" || r === "props")
      _e(n, t[r]);
    else if (r === "on" || r === "nativeOn") {
      const s = t[r];
      for (const i in s) {
        let o = U5(i);
        r === "nativeOn" && (o += "Native");
        const a = n[o], l = s[i];
        a !== l && (a ? n[o] = [].concat(a, l) : n[o] = l);
      }
    } else
      B5(r) || (n[r] = t[r]);
  if (t.staticClass && (n.class = ze([t.staticClass, n.class])), t.staticStyle && (n.style = be([t.staticStyle, n.style])), t.model && ye(e)) {
    const { prop: r = "value", event: s = "input" } = e.model || {};
    n[r] = t.model.value, n[bo + s] = t.model.callback;
  }
  return n;
}
function U5(t) {
  return t[0] === "&" && (t = t.slice(1) + "Passive"), t[0] === "~" && (t = t.slice(1) + "Once"), t[0] === "!" && (t = t.slice(1) + "Capture"), Dr(t);
}
function qc(t, e) {
  return e && e.directives ? ko(t, e.directives.map(({ name: n, value: r, arg: s, modifiers: i }) => [
    Ah(n),
    r,
    s,
    i
  ])) : t;
}
function Ei(t) {
  const { props: e, children: n } = t;
  let r;
  if (t.shapeFlag & 6 && V(n)) {
    r = {};
    for (let i = 0; i < n.length; i++) {
      const o = n[i], a = Mt(o) && o.props && o.props.slot || "default", l = r[a] || (r[a] = []);
      Mt(o) && o.type === "template" ? l.push(o.children) : l.push(o);
    }
    if (r)
      for (const i in r) {
        const o = r[i];
        r[i] = () => o, r[i]._ns = !0;
      }
  }
  const s = e && e.scopedSlots;
  return s && (delete e.scopedSlots, r ? _e(r, s) : r = s), r && So(t, r), t;
}
function Rh(t) {
  if (Pe("RENDER_FUNCTION", Xe, !0) && Pe("PRIVATE_APIS", Xe, !0)) {
    const e = Xe, n = () => t.component && t.component.proxy;
    let r;
    Object.defineProperties(t, {
      tag: { get: () => t.type },
      data: { get: () => t.props || {}, set: (s) => t.props = s },
      elm: { get: () => t.el },
      componentInstance: { get: n },
      child: { get: n },
      text: { get: () => Ve(t.children) ? t.children : null },
      context: { get: () => e && e.proxy },
      componentOptions: {
        get: () => {
          if (t.shapeFlag & 4)
            return r || (r = {
              Ctor: t.type,
              propsData: t.props,
              children: t.children
            });
        }
      }
    });
  }
}
const h1 = /* @__PURE__ */ new Map(), Ih = {
  get(t, e) {
    const n = t[e];
    return n && n();
  }
};
function H5(t) {
  if (h1.has(t))
    return h1.get(t);
  const e = t.render, n = (r, s) => {
    const i = pn(), o = {
      props: r,
      children: i.vnode.children || [],
      data: i.vnode.props || {},
      scopedSlots: s.slots,
      parent: i.parent && i.parent.proxy,
      slots() {
        return new Proxy(s.slots, Ih);
      },
      get listeners() {
        return kh(i);
      },
      get injections() {
        if (t.inject) {
          const a = {};
          return zh(t.inject, a), a;
        }
        return {};
      }
    };
    return e(Zi, o);
  };
  return n.props = t.props, n.displayName = t.name, n.compatConfig = t.compatConfig, n.inheritAttrs = !1, h1.set(t, n), n;
}
function Cn(t, e, n, r) {
  let s;
  const i = n && n[r];
  if (V(t) || Ve(t)) {
    s = new Array(t.length);
    for (let o = 0, a = t.length; o < a; o++)
      s[o] = e(t[o], o, void 0, i && i[o]);
  } else if (typeof t == "number") {
    s = new Array(t);
    for (let o = 0; o < t; o++)
      s[o] = e(o + 1, o, void 0, i && i[o]);
  } else if (ye(t))
    if (t[Symbol.iterator])
      s = Array.from(t, (o, a) => e(o, a, void 0, i && i[a]));
    else {
      const o = Object.keys(t);
      s = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const c = o[a];
        s[a] = e(t[c], c, a, i && i[a]);
      }
    }
  else
    s = [];
  return n && (n[r] = s), s;
}
function Oh(t, e) {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (V(r))
      for (let s = 0; s < r.length; s++)
        t[r[s].name] = r[s].fn;
    else
      r && (t[r.name] = r.key ? (...s) => {
        const i = r.fn(...s);
        return i && (i.key = r.key), i;
      } : r.fn);
  }
  return t;
}
function Za(t, e, n = {}, r, s) {
  if (Xe.isCE || Xe.parent && lr(Xe.parent) && Xe.parent.isCE)
    return e !== "default" && (n.name = e), ne("slot", n, r && r());
  let i = t[e];
  i && i._c && (i._d = !1), P();
  const o = i && Nh(i(n)), a = Me(He, {
    key: n.key || o && o.key || `_${e}`
  }, o || (r ? r() : []), o && t._ === 1 ? 64 : -2);
  return !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a;
}
function Nh(t) {
  return t.some((e) => Mt(e) ? !(e.type === at || e.type === He && !Nh(e.children)) : !0) ? t : null;
}
function Ph(t, e) {
  const n = {};
  for (const r in t)
    n[e && /[A-Z]/.test(r) ? `on:${r}` : Dr(r)] = t[r];
  return n;
}
function V5(t) {
  const e = {};
  for (let n = 0; n < t.length; n++)
    t[n] && _e(e, t[n]);
  return e;
}
function G5(t, e, n, r, s) {
  if (n && ye(n)) {
    V(n) && (n = V5(n));
    for (const i in n)
      if (zr(i))
        t[i] = n[i];
      else if (i === "class")
        t.class = ze([t.class, n.class]);
      else if (i === "style")
        t.style = ze([t.style, n.style]);
      else {
        const o = t.attrs || (t.attrs = {}), a = xt(i), l = ft(i);
        if (!(a in o) && !(l in o) && (o[i] = n[i], s)) {
          const c = t.on || (t.on = {});
          c[`update:${i}`] = function(u) {
            n[i] = u;
          };
        }
      }
  }
  return t;
}
function j5(t, e) {
  return Ro(t, Ph(e));
}
function $5(t, e, n, r, s) {
  return s && (r = Ro(r, s)), Za(t.slots, e, r, n && (() => n));
}
function q5(t, e, n) {
  return Oh(e || { $stable: !n }, Mh(t));
}
function Mh(t) {
  for (let e = 0; e < t.length; e++) {
    const n = t[e];
    n && (V(n) ? Mh(n) : n.name = n.key || "default");
  }
  return t;
}
const Zc = /* @__PURE__ */ new WeakMap();
function Z5(t, e) {
  let n = Zc.get(t);
  if (n || Zc.set(t, n = []), n[e])
    return n[e];
  const r = t.type.staticRenderFns[e], s = t.proxy;
  return n[e] = r.call(s, null, s);
}
function W5(t, e, n, r, s, i) {
  const o = t.appContext.config.keyCodes || {}, a = o[n] || r;
  if (i && s && !o[n])
    return Wc(i, s);
  if (a)
    return Wc(a, e);
  if (s)
    return ft(s) !== n;
}
function Wc(t, e) {
  return V(t) ? !t.includes(e) : t !== e;
}
function Y5(t) {
  return t;
}
function K5(t, e) {
  for (let n = 0; n < e.length; n += 2) {
    const r = e[n];
    typeof r == "string" && r && (t[e[n]] = e[n + 1]);
  }
  return t;
}
function Q5(t, e) {
  return typeof t == "string" ? e + t : t;
}
function X5(t) {
  const e = (r, s, i) => {
    r[s] = i;
  }, n = (r, s) => {
    delete r[s];
  };
  _e(t, {
    $set: (r) => (ot("INSTANCE_SET", r), e),
    $delete: (r) => (ot("INSTANCE_DELETE", r), n),
    $mount: (r) => (ot("GLOBAL_MOUNT", null), r.ctx._compat_mount || Nt),
    $destroy: (r) => (ot("INSTANCE_DESTROY", r), r.ctx._compat_destroy || Nt),
    $slots: (r) => Pe("RENDER_FUNCTION", r) && r.render && r.render._compatWrapped ? new Proxy(r.slots, Ih) : r.slots,
    $scopedSlots: (r) => {
      ot("INSTANCE_SCOPED_SLOTS", r);
      const s = {};
      for (const i in r.slots) {
        const o = r.slots[i];
        o._ns || (s[i] = o);
      }
      return s;
    },
    $on: (r) => Da.bind(null, r),
    $once: (r) => p5.bind(null, r),
    $off: (r) => Ba.bind(null, r),
    $children: N5,
    $listeners: kh
  }), Pe("PRIVATE_APIS", null) && _e(t, {
    $vnode: (r) => r.vnode,
    $options: (r) => {
      const s = _e({}, ei(r));
      return s.parent = r.proxy.$parent, s.propsData = r.vnode.props, s;
    },
    _self: (r) => r.proxy,
    _uid: (r) => r.uid,
    _data: (r) => r.data,
    _isMounted: (r) => r.isMounted,
    _isDestroyed: (r) => r.isUnmounted,
    $createElement: () => Zi,
    _c: () => Zi,
    _o: () => Y5,
    _n: () => cn,
    _s: () => Ke,
    _l: () => Cn,
    _t: (r) => $5.bind(null, r),
    _q: () => bn,
    _i: () => $s,
    _m: (r) => Z5.bind(null, r),
    _f: () => Sh,
    _k: (r) => W5.bind(null, r),
    _b: () => G5,
    _v: () => xr,
    _e: () => Te,
    _u: () => q5,
    _g: () => j5,
    _d: () => K5,
    _p: () => Q5
  });
}
const D1 = (t) => t ? t2(t) ? Io(t) || t.proxy : D1(t.parent) : null, Vr = /* @__PURE__ */ _e(/* @__PURE__ */ Object.create(null), {
  $: (t) => t,
  $el: (t) => t.vnode.el,
  $data: (t) => t.data,
  $props: (t) => t.props,
  $attrs: (t) => t.attrs,
  $slots: (t) => t.slots,
  $refs: (t) => t.refs,
  $parent: (t) => D1(t.parent),
  $root: (t) => D1(t.root),
  $emit: (t) => t.emit,
  $options: (t) => ei(t),
  $forceUpdate: (t) => t.f || (t.f = () => yo(t.update)),
  $nextTick: (t) => t.n || (t.n = Ys.bind(t.proxy)),
  $watch: (t) => I5.bind(t)
});
X5(Vr);
const d1 = (t, e) => t !== Fe && !t.__isScriptSetup && Ce(t, e), B1 = {
  get({ _: t }, e) {
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: a, appContext: l } = t;
    let c;
    if (e[0] !== "$") {
      const g = o[e];
      if (g !== void 0)
        switch (g) {
          case 1:
            return r[e];
          case 2:
            return s[e];
          case 4:
            return n[e];
          case 3:
            return i[e];
        }
      else {
        if (d1(r, e))
          return o[e] = 1, r[e];
        if (s !== Fe && Ce(s, e))
          return o[e] = 2, s[e];
        if ((c = t.propsOptions[0]) && Ce(c, e))
          return o[e] = 3, i[e];
        if (n !== Fe && Ce(n, e))
          return o[e] = 4, n[e];
        U1 && (o[e] = 0);
      }
    }
    const u = Vr[e];
    let d, p;
    if (u)
      return e === "$attrs" && Et(t, "get", e), u(t);
    if ((d = a.__cssModules) && (d = d[e]))
      return d;
    if (n !== Fe && Ce(n, e))
      return o[e] = 4, n[e];
    if (p = l.config.globalProperties, Ce(p, e)) {
      const g = Object.getOwnPropertyDescriptor(p, e);
      if (g.get)
        return g.get.call(t.proxy);
      {
        const _ = p[e];
        return le(_) ? Object.assign(_.bind(t.proxy), _) : _;
      }
    }
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: s, ctx: i } = t;
    return d1(s, e) ? (s[e] = n, !0) : r !== Fe && Ce(r, e) ? (r[e] = n, !0) : Ce(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (i[e] = n, !0);
  },
  has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: s, propsOptions: i } }, o) {
    let a;
    return !!n[o] || t !== Fe && Ce(t, o) || d1(e, o) || (a = i[0]) && Ce(a, o) || Ce(r, o) || Ce(Vr, o) || Ce(s.config.globalProperties, o);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : Ce(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
}, J5 = /* @__PURE__ */ _e({}, B1, {
  get(t, e) {
    if (e !== Symbol.unscopables)
      return B1.get(t, e, t);
  },
  has(t, e) {
    return e[0] !== "_" && !s3(e);
  }
});
function Fh(t, e) {
  for (const n in e) {
    const r = t[n], s = e[n];
    n in t && ji(r) && ji(s) ? Fh(r, s) : t[n] = s;
  }
  return t;
}
let U1 = !0;
function ep(t) {
  const e = ei(t), n = t.proxy, r = t.ctx;
  U1 = !1, e.beforeCreate && Yc(e.beforeCreate, t, "bc");
  const {
    data: s,
    computed: i,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: p,
    beforeUpdate: g,
    updated: _,
    activated: k,
    deactivated: j,
    beforeDestroy: b,
    beforeUnmount: m,
    destroyed: y,
    unmounted: C,
    render: F,
    renderTracked: G,
    renderTriggered: Y,
    errorCaptured: S,
    serverPrefetch: oe,
    expose: se,
    inheritAttrs: ue,
    components: $e,
    directives: Ae,
    filters: ie
  } = e;
  if (c && zh(c, r, null, t.appContext.config.unwrapInjectedRef), o)
    for (const z in o) {
      const de = o[z];
      le(de) && (r[z] = de.bind(n));
    }
  if (s) {
    const z = s.call(n, n);
    ye(z) && (t.data = _n(z));
  }
  if (U1 = !0, i)
    for (const z in i) {
      const de = i[z], Je = le(de) ? de.bind(n, n) : le(de.get) ? de.get.bind(n, n) : Nt, On = !le(de) && le(de.set) ? de.set.bind(n) : Nt, At = Ja({
        get: Je,
        set: On
      });
      Object.defineProperty(r, z, {
        enumerable: !0,
        configurable: !0,
        get: () => At.value,
        set: (Nn) => At.value = Nn
      });
    }
  if (a)
    for (const z in a)
      Dh(a[z], r, n, z);
  if (l) {
    const z = le(l) ? l.call(n) : l;
    Reflect.ownKeys(z).forEach((de) => {
      ch(de, z[de]);
    });
  }
  u && Yc(u, t, "c");
  function Le(z, de) {
    V(de) ? de.forEach((Je) => z(Je.bind(n))) : de && z(de.bind(n));
  }
  if (Le(yh, d), Le(Xs, p), Le(vh, g), Le(Eo, _), Le(mh, k), Le(xh, j), Le(Ch, S), Le(wh, G), Le(_h, Y), Le(Bs, m), Le(Us, C), Le(bh, oe), b && wn("OPTIONS_BEFORE_DESTROY", t) && Le(Bs, b), y && wn("OPTIONS_DESTROYED", t) && Le(Us, y), V(se))
    if (se.length) {
      const z = t.exposed || (t.exposed = {});
      se.forEach((de) => {
        Object.defineProperty(z, de, {
          get: () => n[de],
          set: (Je) => n[de] = Je
        });
      });
    } else
      t.exposed || (t.exposed = {});
  F && t.render === Nt && (t.render = F), ue != null && (t.inheritAttrs = ue), $e && (t.components = $e), Ae && (t.directives = Ae), ie && Pe("FILTERS", t) && (t.filters = ie);
}
function zh(t, e, n = Nt, r = !1) {
  V(t) && (t = H1(t));
  for (const s in t) {
    const i = t[s];
    let o;
    ye(i) ? "default" in i ? o = or(i.from || s, i.default, !0) : o = or(i.from || s) : o = or(i), rt(o) && r ? Object.defineProperty(e, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : e[s] = o;
  }
}
function Yc(t, e, n) {
  Ct(V(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function Dh(t, e, n, r) {
  const s = r.includes(".") ? hh(n, r) : () => n[r];
  if (Ve(t)) {
    const i = e[t];
    le(i) && ar(s, i);
  } else if (le(t))
    ar(s, t.bind(n));
  else if (ye(t))
    if (V(t))
      t.forEach((i) => Dh(i, e, n, r));
    else {
      const i = le(t.handler) ? t.handler.bind(n) : e[t.handler];
      le(i) && ar(s, i, t);
    }
}
function ei(t) {
  const e = t.type, { mixins: n, extends: r } = e, { mixins: s, optionsCache: i, config: { optionMergeStrategies: o } } = t.appContext, a = i.get(e);
  let l;
  return a ? l = a : !s.length && !n && !r ? Pe("PRIVATE_APIS", t) ? (l = _e({}, e), l.parent = t.parent && t.parent.proxy, l.propsData = t.vnode.props) : l = e : (l = {}, s.length && s.forEach((c) => cr(l, c, o, !0)), cr(l, e, o)), ye(e) && i.set(e, l), l;
}
function cr(t, e, n, r = !1) {
  le(e) && (e = e.options);
  const { mixins: s, extends: i } = e;
  i && cr(t, i, n, !0), s && s.forEach((o) => cr(t, o, n, !0));
  for (const o in e)
    if (!(r && o === "expose")) {
      const a = ur[o] || n && n[o];
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const ur = {
  data: Kc,
  props: zn,
  emits: zn,
  methods: zn,
  computed: zn,
  beforeCreate: dt,
  created: dt,
  beforeMount: dt,
  mounted: dt,
  beforeUpdate: dt,
  updated: dt,
  beforeDestroy: dt,
  beforeUnmount: dt,
  destroyed: dt,
  unmounted: dt,
  activated: dt,
  deactivated: dt,
  errorCaptured: dt,
  serverPrefetch: dt,
  components: zn,
  directives: zn,
  watch: np,
  provide: Kc,
  inject: tp
};
ur.filters = zn;
function Kc(t, e) {
  return e ? t ? function() {
    return (Pe("OPTIONS_DATA_MERGE", null) ? Fh : _e)(le(t) ? t.call(this, this) : t, le(e) ? e.call(this, this) : e);
  } : e : t;
}
function tp(t, e) {
  return zn(H1(t), H1(e));
}
function H1(t) {
  if (V(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function dt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function zn(t, e) {
  return t ? _e(_e(/* @__PURE__ */ Object.create(null), t), e) : e;
}
function np(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = _e(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = dt(t[r], e[r]);
  return n;
}
function rp(t, e, n) {
  return new Proxy({}, {
    get(r, s) {
      if (s === "$options")
        return ei(t);
      if (s in e)
        return e[s];
      const i = t.type.inject;
      if (i) {
        if (V(i)) {
          if (i.includes(s))
            return or(s);
        } else if (s in i)
          return or(s);
      }
    }
  });
}
function Bh(t, e) {
  return !!(t === "is" || (t === "class" || t === "style") && Pe("INSTANCE_ATTRS_CLASS_STYLE", e) || Sn(t) && Pe("INSTANCE_LISTENERS", e) || t.startsWith("routerView") || t === "registerRouteInstance");
}
function sp(t, e, n, r = !1) {
  const s = {}, i = {};
  $i(i, Ao, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), Uh(t, e, s, i);
  for (const o in t.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? t.props = r ? s : Ku(s) : t.type.props ? t.props = s : t.props = i, t.attrs = i;
}
function ip(t, e, n, r) {
  const { props: s, attrs: i, vnode: { patchFlag: o } } = t, a = ke(s), [l] = t.propsOptions;
  let c = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let p = u[d];
        if (_o(t.emitsOptions, p))
          continue;
        const g = e[p];
        if (l)
          if (Ce(i, p))
            g !== i[p] && (i[p] = g, c = !0);
          else {
            const _ = xt(p);
            s[_] = V1(l, a, _, g, t, !1);
          }
        else {
          if (Sn(p) && p.endsWith("Native"))
            p = p.slice(0, -6);
          else if (Bh(p, t))
            continue;
          g !== i[p] && (i[p] = g, c = !0);
        }
      }
    }
  } else {
    Uh(t, e, s, i) && (c = !0);
    let u;
    for (const d in a)
      (!e || !Ce(e, d) && ((u = ft(d)) === d || !Ce(e, u))) && (l ? n && (n[d] !== void 0 || n[u] !== void 0) && (s[d] = V1(l, a, d, void 0, t, !0)) : delete s[d]);
    if (i !== a)
      for (const d in i)
        (!e || !Ce(e, d) && !Ce(e, d + "Native")) && (delete i[d], c = !0);
  }
  c && un(t, "set", "$attrs");
}
function Uh(t, e, n, r) {
  const [s, i] = t.propsOptions;
  let o = !1, a;
  if (e)
    for (let l in e) {
      if (zr(l) || (l.startsWith("onHook:") && wn("INSTANCE_EVENT_HOOKS", t, l.slice(2).toLowerCase()), l === "inline-template"))
        continue;
      const c = e[l];
      let u;
      if (s && Ce(s, u = xt(l)))
        !i || !i.includes(u) ? n[u] = c : (a || (a = {}))[u] = c;
      else if (!_o(t.emitsOptions, l)) {
        if (Sn(l) && l.endsWith("Native"))
          l = l.slice(0, -6);
        else if (Bh(l, t))
          continue;
        (!(l in r) || c !== r[l]) && (r[l] = c, o = !0);
      }
    }
  if (i) {
    const l = ke(n), c = a || Fe;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = V1(s, l, d, c[d], t, !Ce(c, d));
    }
  }
  return o;
}
function V1(t, e, n, r, s, i) {
  const o = t[n];
  if (o != null) {
    const a = Ce(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && le(l)) {
        const { propsDefaults: c } = s;
        n in c ? r = c[n] : (Zn(s), r = c[n] = l.call(Pe("PROPS_DEFAULT_THIS", s) ? rp(s, e) : null, e), jn());
      } else
        r = l;
    }
    o[0] && (i && !a ? r = !1 : o[1] && (r === "" || r === ft(n)) && (r = !0));
  }
  return r;
}
function Hh(t, e, n = !1) {
  const r = e.propsCache, s = r.get(t);
  if (s)
    return s;
  const i = t.props, o = {}, a = [];
  let l = !1;
  if (!le(t)) {
    const u = (d) => {
      le(d) && (d = d.options), l = !0;
      const [p, g] = Hh(d, e, !0);
      _e(o, p), g && a.push(...g);
    };
    !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  if (!i && !l)
    return ye(t) && r.set(t, Mr), Mr;
  if (V(i))
    for (let u = 0; u < i.length; u++) {
      const d = xt(i[u]);
      Qc(d) && (o[d] = Fe);
    }
  else if (i)
    for (const u in i) {
      const d = xt(u);
      if (Qc(d)) {
        const p = i[u], g = o[d] = V(p) || le(p) ? { type: p } : Object.assign({}, p);
        if (g) {
          const _ = e0(Boolean, g.type), k = e0(String, g.type);
          g[0] = _ > -1, g[1] = k < 0 || _ < k, (_ > -1 || Ce(g, "default")) && a.push(d);
        }
      }
    }
  const c = [o, a];
  return ye(t) && r.set(t, c), c;
}
function Qc(t) {
  return t[0] !== "$";
}
function Xc(t) {
  const e = t && t.toString().match(/^\s*function (\w+)/);
  return e ? e[1] : t === null ? "null" : "";
}
function Jc(t, e) {
  return Xc(t) === Xc(e);
}
function e0(t, e) {
  return V(e) ? e.findIndex((n) => Jc(n, t)) : le(e) && Jc(e, t) ? 0 : -1;
}
const Vh = (t) => t[0] === "_" || t === "$stable", Wa = (t) => V(t) ? t.map(It) : [It(t)], op = (t, e, n) => {
  if (e._n)
    return e;
  const r = Ua((...s) => Wa(e(...s)), n);
  return r._c = !1, r;
}, Gh = (t, e, n) => {
  const r = t._ctx;
  for (const s in t) {
    if (Vh(s))
      continue;
    const i = t[s];
    if (le(i))
      e[s] = op(s, i, r);
    else if (i != null) {
      const o = Wa(i);
      e[s] = () => o;
    }
  }
}, jh = (t, e) => {
  const n = Wa(e);
  t.slots.default = () => n;
}, ap = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = ke(e), $i(e, "_", n)) : Gh(e, t.slots = {});
  } else
    t.slots = {}, e && jh(t, e);
  $i(t.slots, Ao, 1);
}, lp = (t, e, n) => {
  const { vnode: r, slots: s } = t;
  let i = !0, o = Fe;
  if (r.shapeFlag & 32) {
    const a = e._;
    a ? n && a === 1 ? i = !1 : (_e(s, e), !n && a === 1 && delete s._) : (i = !e.$stable, Gh(e, s)), o = e;
  } else
    e && (jh(t, e), o = { default: 1 });
  if (i)
    for (const a in s)
      !Vh(a) && !(a in o) && delete s[a];
};
function cp(t) {
  t.optionMergeStrategies = new Proxy({}, {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in ur && wn("CONFIG_OPTION_MERGE_STRATS", null))
        return ur[n];
    }
  });
}
let _t, nr;
function up(t, e) {
  _t = e({});
  const n = nr = function l(c = {}) {
    return r(c, l);
  };
  function r(l = {}, c) {
    ot("GLOBAL_MOUNT", null);
    const { data: u } = l;
    u && !le(u) && wn("OPTIONS_DATA_FN", null) && (l.data = () => u);
    const d = t(l);
    c !== n && $h(d, c);
    const p = d._createRoot(l);
    return l.el ? p.$mount(l.el) : p;
  }
  n.version = "2.6.14-compat:3.2.45", n.config = _t.config, n.use = (l, ...c) => (l && le(l.install) ? l.install(n, ...c) : le(l) && l(n, ...c), n), n.mixin = (l) => (_t.mixin(l), n), n.component = (l, c) => c ? (_t.component(l, c), n) : _t.component(l), n.directive = (l, c) => c ? (_t.directive(l, c), n) : _t.directive(l), n.options = { _base: n };
  let s = 1;
  n.cid = s, n.nextTick = Ys;
  const i = /* @__PURE__ */ new WeakMap();
  function o(l = {}) {
    if (ot("GLOBAL_EXTEND", null), le(l) && (l = l.options), i.has(l))
      return i.get(l);
    const c = this;
    function u(p) {
      return r(p ? cr(_e({}, u.options), p, ur) : u.options, u);
    }
    u.super = c, u.prototype = Object.create(n.prototype), u.prototype.constructor = u;
    const d = {};
    for (const p in c.options) {
      const g = c.options[p];
      d[p] = V(g) ? g.slice() : ye(g) ? _e(/* @__PURE__ */ Object.create(null), g) : g;
    }
    return u.options = cr(d, l, ur), u.options._base = u, u.extend = o.bind(u), u.mixin = c.mixin, u.use = c.use, u.cid = ++s, i.set(l, u), u;
  }
  n.extend = o.bind(n), n.set = (l, c, u) => {
    ot("GLOBAL_SET", null), l[c] = u;
  }, n.delete = (l, c) => {
    ot("GLOBAL_DELETE", null), delete l[c];
  }, n.observable = (l) => (ot("GLOBAL_OBSERVABLE", null), _n(l)), n.filter = (l, c) => c ? (_t.filter(l, c), n) : _t.filter(l);
  const a = {
    warn: Nt,
    extend: _e,
    mergeOptions: (l, c, u) => cr(l, c, u ? void 0 : ur),
    defineReactive: Lp
  };
  return Object.defineProperty(n, "util", {
    get() {
      return ot("GLOBAL_PRIVATE_UTIL", null), a;
    }
  }), n.configureCompat = d5, n;
}
function hp(t, e, n) {
  dp(t, e), cp(t.config), _t && (gp(t, e, n), pp(t), fp(t));
}
function dp(t, e) {
  e.filters = {}, t.filter = (n, r) => (ot("FILTERS", null), r ? (e.filters[n] = r, t) : e.filters[n]);
}
function pp(t) {
  Object.defineProperties(t, {
    prototype: {
      get() {
        return t.config.globalProperties;
      }
    },
    nextTick: { value: Ys },
    extend: { value: nr.extend },
    set: { value: nr.set },
    delete: { value: nr.delete },
    observable: { value: nr.observable },
    util: {
      get() {
        return nr.util;
      }
    }
  });
}
function fp(t) {
  t._context.mixins = [..._t._context.mixins], ["components", "directives", "filters"].forEach((e) => {
    t._context[e] = Object.create(_t._context[e]);
  });
  for (const e in _t.config) {
    if (e === "isNativeTag" || Z1() && (e === "isCustomElement" || e === "compilerOptions"))
      continue;
    const n = _t.config[e];
    t.config[e] = ye(n) ? Object.create(n) : n, e === "ignoredElements" && Pe("CONFIG_IGNORED_ELEMENTS", null) && !Z1() && V(n) && (t.config.compilerOptions.isCustomElement = (r) => n.some((s) => Ve(s) ? s === r : s.test(r)));
  }
  $h(t, nr);
}
function $h(t, e) {
  const n = Pe("GLOBAL_PROTOTYPE", null);
  n && (t.config.globalProperties = Object.create(e.prototype));
  const r = Object.getOwnPropertyDescriptors(e.prototype);
  for (const s in r)
    s !== "constructor" && n && Object.defineProperty(t.config.globalProperties, s, r[s]);
}
function gp(t, e, n) {
  let r = !1;
  t._createRoot = (s) => {
    const i = t._component, o = ne(i, s.propsData || null);
    o.appContext = e;
    const a = !le(i) && !i.render && !i.template, l = () => {
    }, c = Ka(o, null, null);
    return a && (c.render = l), Qa(c), o.component = c, o.isCompatRoot = !0, c.ctx._compat_mount = (u) => {
      if (r)
        return;
      let d;
      if (typeof u == "string") {
        const g = document.querySelector(u);
        if (!g)
          return;
        d = g;
      } else
        d = u || document.createElement("div");
      const p = d instanceof SVGElement;
      return a && c.render === l && (c.render = null, i.template = d.innerHTML, Xa(c, !1, !0)), d.innerHTML = "", n(o, d, p), d instanceof Element && (d.removeAttribute("v-cloak"), d.setAttribute("data-v-app", "")), r = !0, t._container = d, d.__vue_app__ = t, c.proxy;
    }, c.ctx._compat_destroy = () => {
      if (r)
        n(null, t._container), delete t._container.__vue_app__;
      else {
        const { bum: u, scope: d, um: p } = c;
        u && Vn(u), Pe("INSTANCE_EVENT_HOOKS", c) && c.emit("hook:beforeDestroy"), d && d.stop(), p && Vn(p), Pe("INSTANCE_EVENT_HOOKS", c) && c.emit("hook:destroyed");
      }
    }, c.proxy;
  };
}
const mp = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
], xp = /* @__PURE__ */ new WeakSet();
function Lp(t, e, n) {
  if (ye(n) && !Ln(n) && !xp.has(n)) {
    const s = _n(n);
    V(n) ? mp.forEach((i) => {
      n[i] = (...o) => {
        Array.prototype[i].call(s, ...o);
      };
    }) : Object.keys(n).forEach((i) => {
      try {
        p1(n, i, n[i]);
      } catch {
      }
    });
  }
  const r = t.$;
  r && t === r.proxy ? (p1(r.ctx, e, n), r.accessCache = /* @__PURE__ */ Object.create(null)) : Ln(t) ? t[e] = n : p1(t, e, n);
}
function p1(t, e, n) {
  n = ye(n) ? _n(n) : n, Object.defineProperty(t, e, {
    enumerable: !0,
    configurable: !0,
    get() {
      return Et(t, "get", e), n;
    },
    set(r) {
      n = ye(r) ? _n(r) : r, un(t, "set", e, r);
    }
  });
}
function qh() {
  return {
    app: null,
    config: {
      isNativeTag: d3,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let yp = 0;
function vp(t, e) {
  return function(n, r = null) {
    le(n) || (n = Object.assign({}, n)), r != null && !ye(r) && (r = null);
    const s = qh(), i = /* @__PURE__ */ new Set();
    let o = !1;
    const a = s.app = {
      _uid: yp++,
      _component: n,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: l2,
      get config() {
        return s.config;
      },
      set config(l) {
      },
      use(l, ...c) {
        return i.has(l) || (l && le(l.install) ? (i.add(l), l.install(a, ...c)) : le(l) && (i.add(l), l(a, ...c))), a;
      },
      mixin(l) {
        return s.mixins.includes(l) || s.mixins.push(l), a;
      },
      component(l, c) {
        return c ? (s.components[l] = c, a) : s.components[l];
      },
      directive(l, c) {
        return c ? (s.directives[l] = c, a) : s.directives[l];
      },
      mount(l, c, u) {
        if (!o) {
          const d = ne(n, r);
          return d.appContext = s, c && e ? e(d, l) : t(d, l, u), o = !0, a._container = l, l.__vue_app__ = a, Io(d.component) || d.component.proxy;
        }
      },
      unmount() {
        o && (t(null, a._container), delete a._container.__vue_app__);
      },
      provide(l, c) {
        return s.provides[l] = c, a;
      }
    };
    return hp(a, s, t), a;
  };
}
function Wi(t, e, n, r, s = !1) {
  if (V(t)) {
    t.forEach((p, g) => Wi(p, e && (V(e) ? e[g] : e), n, r, s));
    return;
  }
  if (lr(r) && !s)
    return;
  const i = r.shapeFlag & 4 ? Io(r.component) || r.component.proxy : r.el, o = s ? null : i, { i: a, r: l } = t, c = e && e.r, u = a.refs === Fe ? a.refs = {} : a.refs, d = a.setupState;
  if (c != null && c !== l && (Ve(c) ? (u[c] = null, Ce(d, c) && (d[c] = null)) : rt(c) && (c.value = null)), le(l))
    an(l, a, 12, [o, u]);
  else {
    const p = Ve(l), g = rt(l);
    if (p || g) {
      const _ = () => {
        if (t.f) {
          const k = p ? Ce(d, l) ? d[l] : u[l] : l.value;
          s ? V(k) && wa(k, i) : V(k) ? k.includes(i) || k.push(i) : p ? (u[l] = [i], Ce(d, l) && (d[l] = u[l])) : (l.value = [i], t.k && (u[t.k] = l.value));
        } else
          p ? (u[l] = o, Ce(d, l) && (d[l] = o)) : g && (l.value = o, t.k && (u[t.k] = o));
      };
      o ? (_.id = -1, Qe(_, n)) : _();
    }
  }
}
let Mn = !1;
const ki = (t) => /svg/.test(t.namespaceURI) && t.tagName !== "foreignObject", Ti = (t) => t.nodeType === 8;
function bp(t) {
  const { mt: e, p: n, o: { patchProp: r, createText: s, nextSibling: i, parentNode: o, remove: a, insert: l, createComment: c } } = t, u = (b, m) => {
    if (!m.hasChildNodes()) {
      n(null, b, m), qi(), m._vnode = b;
      return;
    }
    Mn = !1, d(m.firstChild, b, null, null, null), qi(), m._vnode = b, Mn && console.error("Hydration completed but contains mismatches.");
  }, d = (b, m, y, C, F, G = !1) => {
    const Y = Ti(b) && b.data === "[", S = () => k(b, m, y, C, F, Y), { type: oe, ref: se, shapeFlag: ue, patchFlag: $e } = m;
    let Ae = b.nodeType;
    m.el = b, $e === -2 && (G = !1, m.dynamicChildren = null);
    let ie = null;
    switch (oe) {
      case gr:
        Ae !== 3 ? m.children === "" ? (l(m.el = s(""), o(b), b), ie = b) : ie = S() : (b.data !== m.children && (Mn = !0, b.data = m.children), ie = i(b));
        break;
      case at:
        Ae !== 8 || Y ? ie = S() : ie = i(b);
        break;
      case hr:
        if (Y && (b = i(b), Ae = b.nodeType), Ae === 1 || Ae === 3) {
          ie = b;
          const Le = !m.children.length;
          for (let z = 0; z < m.staticCount; z++)
            Le && (m.children += ie.nodeType === 1 ? ie.outerHTML : ie.data), z === m.staticCount - 1 && (m.anchor = ie), ie = i(ie);
          return Y ? i(ie) : ie;
        } else
          S();
        break;
      case He:
        Y ? ie = _(b, m, y, C, F, G) : ie = S();
        break;
      default:
        if (ue & 1)
          Ae !== 1 || m.type.toLowerCase() !== b.tagName.toLowerCase() ? ie = S() : ie = p(b, m, y, C, F, G);
        else if (ue & 6) {
          m.slotScopeIds = F;
          const Le = o(b);
          if (e(m, Le, null, y, C, ki(Le), G), ie = Y ? j(b) : i(b), ie && Ti(ie) && ie.data === "teleport end" && (ie = i(ie)), lr(m)) {
            let z;
            Y ? (z = ne(He), z.anchor = ie ? ie.previousSibling : Le.lastChild) : z = b.nodeType === 3 ? xr("") : ne("div"), z.el = b, m.component.subTree = z;
          }
        } else
          ue & 64 ? Ae !== 8 ? ie = S() : ie = m.type.hydrate(b, m, y, C, F, G, t, g) : ue & 128 && (ie = m.type.hydrate(b, m, y, C, ki(o(b)), F, G, t, d));
    }
    return se != null && Wi(se, null, C, m), ie;
  }, p = (b, m, y, C, F, G) => {
    G = G || !!m.dynamicChildren;
    const { type: Y, props: S, patchFlag: oe, shapeFlag: se, dirs: ue } = m, $e = Y === "input" && ue || Y === "option";
    if ($e || oe !== -1) {
      if (ue && en(m, null, y, "created"), S)
        if ($e || !G || oe & 48)
          for (const ie in S)
            ($e && ie.endsWith("value") || Sn(ie) && !zr(ie)) && r(b, ie, null, S[ie], !1, void 0, y);
        else
          S.onClick && r(b, "onClick", null, S.onClick, !1, void 0, y);
      let Ae;
      if ((Ae = S && S.onVnodeBeforeMount) && vt(Ae, y, m), ue && en(m, null, y, "beforeMount"), ((Ae = S && S.onVnodeMounted) || ue) && lh(() => {
        Ae && vt(Ae, y, m), ue && en(m, null, y, "mounted");
      }, C), se & 16 && !(S && (S.innerHTML || S.textContent))) {
        let ie = g(b.firstChild, m, b, y, C, F, G);
        for (; ie; ) {
          Mn = !0;
          const Le = ie;
          ie = ie.nextSibling, a(Le);
        }
      } else
        se & 8 && b.textContent !== m.children && (Mn = !0, b.textContent = m.children);
    }
    return b.nextSibling;
  }, g = (b, m, y, C, F, G, Y) => {
    Y = Y || !!m.dynamicChildren;
    const S = m.children, oe = S.length;
    for (let se = 0; se < oe; se++) {
      const ue = Y ? S[se] : S[se] = It(S[se]);
      if (b)
        b = d(b, ue, C, F, G, Y);
      else {
        if (ue.type === gr && !ue.children)
          continue;
        Mn = !0, n(null, ue, y, null, C, F, ki(y), G);
      }
    }
    return b;
  }, _ = (b, m, y, C, F, G) => {
    const { slotScopeIds: Y } = m;
    Y && (F = F ? F.concat(Y) : Y);
    const S = o(b), oe = g(i(b), m, S, y, C, F, G);
    return oe && Ti(oe) && oe.data === "]" ? i(m.anchor = oe) : (Mn = !0, l(m.anchor = c("]"), S, oe), oe);
  }, k = (b, m, y, C, F, G) => {
    if (Mn = !0, m.el = null, G) {
      const oe = j(b);
      for (; ; ) {
        const se = i(b);
        if (se && se !== oe)
          a(se);
        else
          break;
      }
    }
    const Y = i(b), S = o(b);
    return a(b), n(null, m, S, Y, y, C, ki(S), F), Y;
  }, j = (b) => {
    let m = 0;
    for (; b; )
      if (b = i(b), b && Ti(b) && (b.data === "[" && m++, b.data === "]")) {
        if (m === 0)
          return i(b);
        m--;
      }
    return b;
  };
  return [u, d];
}
const Qe = lh;
function Zh(t) {
  return Yh(t);
}
function Wh(t) {
  return Yh(t, bp);
}
function Yh(t, e) {
  const n = L3();
  n.__VUE__ = !0;
  const { insert: r, remove: s, patchProp: i, createElement: o, createText: a, createComment: l, setText: c, setElementText: u, parentNode: d, nextSibling: p, setScopeId: g = Nt, insertStaticContent: _ } = t, k = (f, x, E, R = null, A = null, D = null, $ = !1, B = null, U = !!x.dynamicChildren) => {
    if (f === x)
      return;
    f && !nn(f, x) && (R = qe(f), Kt(f, A, D, !0), f = null), x.patchFlag === -2 && (U = !1, x.dynamicChildren = null);
    const { type: I, ref: N, shapeFlag: re } = x;
    switch (I) {
      case gr:
        j(f, x, E, R);
        break;
      case at:
        b(f, x, E, R);
        break;
      case hr:
        f == null && m(x, E, R, $);
        break;
      case He:
        $e(f, x, E, R, A, D, $, B, U);
        break;
      default:
        re & 1 ? F(f, x, E, R, A, D, $, B, U) : re & 6 ? Ae(f, x, E, R, A, D, $, B, U) : (re & 64 || re & 128) && I.process(f, x, E, R, A, D, $, B, U, lt);
    }
    N != null && A && Wi(N, f && f.ref, D, x || f, !x);
  }, j = (f, x, E, R) => {
    if (f == null)
      r(x.el = a(x.children), E, R);
    else {
      const A = x.el = f.el;
      x.children !== f.children && c(A, x.children);
    }
  }, b = (f, x, E, R) => {
    f == null ? r(x.el = l(x.children || ""), E, R) : x.el = f.el;
  }, m = (f, x, E, R) => {
    [f.el, f.anchor] = _(f.children, x, E, R, f.el, f.anchor);
  }, y = ({ el: f, anchor: x }, E, R) => {
    let A;
    for (; f && f !== x; )
      A = p(f), r(f, E, R), f = A;
    r(x, E, R);
  }, C = ({ el: f, anchor: x }) => {
    let E;
    for (; f && f !== x; )
      E = p(f), s(f), f = E;
    s(x);
  }, F = (f, x, E, R, A, D, $, B, U) => {
    $ = $ || x.type === "svg", f == null ? G(x, E, R, A, D, $, B, U) : oe(f, x, A, D, $, B, U);
  }, G = (f, x, E, R, A, D, $, B) => {
    let U, I;
    const { type: N, props: re, shapeFlag: q, transition: X, dirs: ge } = f;
    if (U = f.el = o(f.type, D, re && re.is, re), q & 8 ? u(U, f.children) : q & 16 && S(f.children, U, null, R, A, D && N !== "foreignObject", $, B), ge && en(f, null, R, "created"), re) {
      for (const Se in re)
        Se !== "value" && !zr(Se) && i(U, Se, null, re[Se], D, f.children, R, A, ve);
      "value" in re && i(U, "value", null, re.value), (I = re.onVnodeBeforeMount) && vt(I, R, f);
    }
    Y(U, f, f.scopeId, $, R), ge && en(f, null, R, "beforeMount");
    const Ne = (!A || A && !A.pendingBranch) && X && !X.persisted;
    Ne && X.beforeEnter(U), r(U, x, E), ((I = re && re.onVnodeMounted) || Ne || ge) && Qe(() => {
      I && vt(I, R, f), Ne && X.enter(U), ge && en(f, null, R, "mounted");
    }, A);
  }, Y = (f, x, E, R, A) => {
    if (E && g(f, E), R)
      for (let D = 0; D < R.length; D++)
        g(f, R[D]);
    if (A) {
      let D = A.subTree;
      if (x === D) {
        const $ = A.vnode;
        Y(f, $, $.scopeId, $.slotScopeIds, A.parent);
      }
    }
  }, S = (f, x, E, R, A, D, $, B, U = 0) => {
    for (let I = U; I < f.length; I++) {
      const N = f[I] = B ? Dn(f[I]) : It(f[I]);
      k(null, N, x, E, R, A, D, $, B);
    }
  }, oe = (f, x, E, R, A, D, $) => {
    const B = x.el = f.el;
    let { patchFlag: U, dynamicChildren: I, dirs: N } = x;
    U |= f.patchFlag & 16;
    const re = f.props || Fe, q = x.props || Fe;
    let X;
    E && Xn(E, !1), (X = q.onVnodeBeforeUpdate) && vt(X, E, x, f), N && en(x, f, E, "beforeUpdate"), E && Xn(E, !0);
    const ge = A && x.type !== "foreignObject";
    if (I ? se(f.dynamicChildren, I, B, E, R, ge, D) : $ || Je(f, x, B, null, E, R, ge, D, !1), U > 0) {
      if (U & 16)
        ue(B, x, re, q, E, R, A);
      else if (U & 2 && re.class !== q.class && i(B, "class", null, q.class, A), U & 4 && i(B, "style", re.style, q.style, A), U & 8) {
        const Ne = x.dynamicProps;
        for (let Se = 0; Se < Ne.length; Se++) {
          const Ge = Ne[Se], Z = re[Ge], ae = q[Ge];
          (ae !== Z || Ge === "value") && i(B, Ge, Z, ae, A, f.children, E, R, ve);
        }
      }
      U & 1 && f.children !== x.children && u(B, x.children);
    } else
      !$ && I == null && ue(B, x, re, q, E, R, A);
    ((X = q.onVnodeUpdated) || N) && Qe(() => {
      X && vt(X, E, x, f), N && en(x, f, E, "updated");
    }, R);
  }, se = (f, x, E, R, A, D, $) => {
    for (let B = 0; B < x.length; B++) {
      const U = f[B], I = x[B], N = U.el && (U.type === He || !nn(U, I) || U.shapeFlag & 70) ? d(U.el) : E;
      k(U, I, N, null, R, A, D, $, !0);
    }
  }, ue = (f, x, E, R, A, D, $) => {
    if (E !== R) {
      if (E !== Fe)
        for (const B in E)
          !zr(B) && !(B in R) && i(f, B, E[B], null, $, x.children, A, D, ve);
      for (const B in R) {
        if (zr(B))
          continue;
        const U = R[B], I = E[B];
        U !== I && B !== "value" && i(f, B, I, U, $, x.children, A, D, ve);
      }
      "value" in R && i(f, "value", E.value, R.value);
    }
  }, $e = (f, x, E, R, A, D, $, B, U) => {
    const I = x.el = f ? f.el : a(""), N = x.anchor = f ? f.anchor : a("");
    let { patchFlag: re, dynamicChildren: q, slotScopeIds: X } = x;
    X && (B = B ? B.concat(X) : X), f == null ? (r(I, E, R), r(N, E, R), S(x.children, E, N, A, D, $, B, U)) : re > 0 && re & 64 && q && f.dynamicChildren ? (se(f.dynamicChildren, q, E, A, D, $, B), (x.key != null || A && x === A.subTree) && Ya(f, x, !0)) : Je(f, x, E, N, A, D, $, B, U);
  }, Ae = (f, x, E, R, A, D, $, B, U) => {
    x.slotScopeIds = B, f == null ? x.shapeFlag & 512 ? A.ctx.activate(x, E, R, $, U) : ie(x, E, R, A, D, $, U) : Le(f, x, U);
  }, ie = (f, x, E, R, A, D, $) => {
    const B = f.isCompatRoot && f.component, U = B || (f.component = Ka(f, R, A));
    if (Qs(f) && (U.ctx.renderer = lt), B || Qa(U), U.asyncDep) {
      if (A && A.registerDep(U, z), !f.el) {
        const I = U.subTree = ne(at);
        b(null, I, x, E);
      }
      return;
    }
    z(U, f, x, E, A, D, $);
  }, Le = (f, x, E) => {
    const R = x.component = f.component;
    if (_5(f, x, E))
      if (R.asyncDep && !R.asyncResolved) {
        de(R, x, E);
        return;
      } else
        R.next = x, c5(R.update), R.update();
    else
      x.el = f.el, R.vnode = x;
  }, z = (f, x, E, R, A, D, $) => {
    const B = () => {
      if (f.isMounted) {
        let { next: N, bu: re, u: q, parent: X, vnode: ge } = f, Ne = N, Se;
        Xn(f, !1), N ? (N.el = ge.el, de(f, N, $)) : N = ge, re && Vn(re), (Se = N.props && N.props.onVnodeBeforeUpdate) && vt(Se, X, N, ge), Pe("INSTANCE_EVENT_HOOKS", f) && f.emit("hook:beforeUpdate"), Xn(f, !0);
        const Ge = Di(f), Z = f.subTree;
        f.subTree = Ge, k(
          Z,
          Ge,
          d(Z.el),
          qe(Z),
          f,
          A,
          D
        ), N.el = Ge.el, Ne === null && Ha(f, Ge.el), q && Qe(q, A), (Se = N.props && N.props.onVnodeUpdated) && Qe(() => vt(Se, X, N, ge), A), Pe("INSTANCE_EVENT_HOOKS", f) && Qe(() => f.emit("hook:updated"), A);
      } else {
        let N;
        const { el: re, props: q } = x, { bm: X, m: ge, parent: Ne } = f, Se = lr(x);
        if (Xn(f, !1), X && Vn(X), !Se && (N = q && q.onVnodeBeforeMount) && vt(N, Ne, x), Pe("INSTANCE_EVENT_HOOKS", f) && f.emit("hook:beforeMount"), Xn(f, !0), re && yt) {
          const Ge = () => {
            f.subTree = Di(f), yt(re, f.subTree, f, A, null);
          };
          Se ? x.type.__asyncLoader().then(
            () => !f.isUnmounted && Ge()
          ) : Ge();
        } else {
          const Ge = f.subTree = Di(f);
          k(null, Ge, E, R, f, A, D), x.el = Ge.el;
        }
        if (ge && Qe(ge, A), !Se && (N = q && q.onVnodeMounted)) {
          const Ge = x;
          Qe(() => vt(N, Ne, Ge), A);
        }
        Pe("INSTANCE_EVENT_HOOKS", f) && Qe(() => f.emit("hook:mounted"), A), (x.shapeFlag & 256 || Ne && lr(Ne.vnode) && Ne.vnode.shapeFlag & 256) && (f.a && Qe(f.a, A), Pe("INSTANCE_EVENT_HOOKS", f) && Qe(() => f.emit("hook:activated"), A)), f.isMounted = !0, x = E = R = null;
      }
    }, U = f.effect = new Ws(
      B,
      () => yo(I),
      f.scope
    ), I = f.update = () => U.run();
    I.id = f.uid, Xn(f, !0), I();
  }, de = (f, x, E) => {
    x.component = f;
    const R = f.vnode.props;
    f.vnode = x, f.next = null, ip(f, x.props, R, E), lp(f, x.children, E), es(), Bc(), ts();
  }, Je = (f, x, E, R, A, D, $, B, U = !1) => {
    const I = f && f.children, N = f ? f.shapeFlag : 0, re = x.children, { patchFlag: q, shapeFlag: X } = x;
    if (q > 0) {
      if (q & 128) {
        At(I, re, E, R, A, D, $, B, U);
        return;
      } else if (q & 256) {
        On(I, re, E, R, A, D, $, B, U);
        return;
      }
    }
    X & 8 ? (N & 16 && ve(I, A, D), re !== I && u(E, re)) : N & 16 ? X & 16 ? At(I, re, E, R, A, D, $, B, U) : ve(I, A, D, !0) : (N & 8 && u(E, ""), X & 16 && S(re, E, R, A, D, $, B, U));
  }, On = (f, x, E, R, A, D, $, B, U) => {
    f = f || Mr, x = x || Mr;
    const I = f.length, N = x.length, re = Math.min(I, N);
    let q;
    for (q = 0; q < re; q++) {
      const X = x[q] = U ? Dn(x[q]) : It(x[q]);
      k(f[q], X, E, null, A, D, $, B, U);
    }
    I > N ? ve(f, A, D, !0, !1, re) : S(x, E, R, A, D, $, B, U, re);
  }, At = (f, x, E, R, A, D, $, B, U) => {
    let I = 0;
    const N = x.length;
    let re = f.length - 1, q = N - 1;
    for (; I <= re && I <= q; ) {
      const X = f[I], ge = x[I] = U ? Dn(x[I]) : It(x[I]);
      if (nn(X, ge))
        k(X, ge, E, null, A, D, $, B, U);
      else
        break;
      I++;
    }
    for (; I <= re && I <= q; ) {
      const X = f[re], ge = x[q] = U ? Dn(x[q]) : It(x[q]);
      if (nn(X, ge))
        k(X, ge, E, null, A, D, $, B, U);
      else
        break;
      re--, q--;
    }
    if (I > re) {
      if (I <= q) {
        const X = q + 1, ge = X < N ? x[X].el : R;
        for (; I <= q; )
          k(null, x[I] = U ? Dn(x[I]) : It(x[I]), E, ge, A, D, $, B, U), I++;
      }
    } else if (I > q)
      for (; I <= re; )
        Kt(f[I], A, D, !0), I++;
    else {
      const X = I, ge = I, Ne = /* @__PURE__ */ new Map();
      for (I = ge; I <= q; I++) {
        const tt = x[I] = U ? Dn(x[I]) : It(x[I]);
        tt.key != null && Ne.set(tt.key, I);
      }
      let Se, Ge = 0;
      const Z = q - ge + 1;
      let ae = !1, me = 0;
      const Ee = new Array(Z);
      for (I = 0; I < Z; I++)
        Ee[I] = 0;
      for (I = X; I <= re; I++) {
        const tt = f[I];
        if (Ge >= Z) {
          Kt(tt, A, D, !0);
          continue;
        }
        let Bt;
        if (tt.key != null)
          Bt = Ne.get(tt.key);
        else
          for (Se = ge; Se <= q; Se++)
            if (Ee[Se - ge] === 0 && nn(tt, x[Se])) {
              Bt = Se;
              break;
            }
        Bt === void 0 ? Kt(tt, A, D, !0) : (Ee[Bt - ge] = I + 1, Bt >= me ? me = Bt : ae = !0, k(tt, x[Bt], E, null, A, D, $, B, U), Ge++);
      }
      const st = ae ? _p(Ee) : Mr;
      for (Se = st.length - 1, I = Z - 1; I >= 0; I--) {
        const tt = ge + I, Bt = x[tt], Tc = tt + 1 < N ? x[tt + 1].el : R;
        Ee[I] === 0 ? k(null, Bt, E, Tc, A, D, $, B, U) : ae && (Se < 0 || I !== st[Se] ? Nn(Bt, E, Tc, 2) : Se--);
      }
    }
  }, Nn = (f, x, E, R, A = null) => {
    const { el: D, type: $, transition: B, children: U, shapeFlag: I } = f;
    if (I & 6) {
      Nn(f.component.subTree, x, E, R);
      return;
    }
    if (I & 128) {
      f.suspense.move(x, E, R);
      return;
    }
    if (I & 64) {
      $.move(f, x, E, lt);
      return;
    }
    if ($ === He) {
      r(D, x, E);
      for (let N = 0; N < U.length; N++)
        Nn(U[N], x, E, R);
      r(f.anchor, x, E);
      return;
    }
    if ($ === hr) {
      y(f, x, E);
      return;
    }
    if (R !== 2 && I & 1 && B)
      if (R === 0)
        B.beforeEnter(D), r(D, x, E), Qe(() => B.enter(D), A);
      else {
        const { leave: N, delayLeave: re, afterLeave: q } = B, X = () => r(D, x, E), ge = () => {
          N(D, () => {
            X(), q && q();
          });
        };
        re ? re(D, X, ge) : ge();
      }
    else
      r(D, x, E);
  }, Kt = (f, x, E, R = !1, A = !1) => {
    const { type: D, props: $, ref: B, children: U, dynamicChildren: I, shapeFlag: N, patchFlag: re, dirs: q } = f;
    if (B != null && Wi(B, null, E, f, !0), N & 256) {
      x.ctx.deactivate(f);
      return;
    }
    const X = N & 1 && q, ge = !lr(f);
    let Ne;
    if (ge && (Ne = $ && $.onVnodeBeforeUnmount) && vt(Ne, x, f), N & 6)
      we(f.component, E, R);
    else {
      if (N & 128) {
        f.suspense.unmount(E, R);
        return;
      }
      X && en(f, null, x, "beforeUnmount"), N & 64 ? f.type.remove(f, x, E, A, lt, R) : I && (D !== He || re > 0 && re & 64) ? ve(I, x, E, !1, !0) : (D === He && re & 384 || !A && N & 16) && ve(U, x, E), R && O(f);
    }
    (ge && (Ne = $ && $.onVnodeUnmounted) || X) && Qe(() => {
      Ne && vt(Ne, x, f), X && en(f, null, x, "unmounted");
    }, E);
  }, O = (f) => {
    const { type: x, el: E, anchor: R, transition: A } = f;
    if (x === He) {
      te(E, R);
      return;
    }
    if (x === hr) {
      C(f);
      return;
    }
    const D = () => {
      s(E), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (f.shapeFlag & 1 && A && !A.persisted) {
      const { leave: $, delayLeave: B } = A, U = () => $(E, D);
      B ? B(f.el, D, U) : U();
    } else
      D();
  }, te = (f, x) => {
    let E;
    for (; f !== x; )
      E = p(f), s(f), f = E;
    s(x);
  }, we = (f, x, E) => {
    const { bum: R, scope: A, update: D, subTree: $, um: B } = f;
    R && Vn(R), Pe("INSTANCE_EVENT_HOOKS", f) && f.emit("hook:beforeDestroy"), A.stop(), D && (D.active = !1, Kt($, f, x, E)), B && Qe(B, x), Pe("INSTANCE_EVENT_HOOKS", f) && Qe(() => f.emit("hook:destroyed"), x), Qe(() => {
      f.isUnmounted = !0;
    }, x), x && x.pendingBranch && !x.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve());
  }, ve = (f, x, E, R = !1, A = !1, D = 0) => {
    for (let $ = D; $ < f.length; $++)
      Kt(f[$], x, E, R, A);
  }, qe = (f) => f.shapeFlag & 6 ? qe(f.component.subTree) : f.shapeFlag & 128 ? f.suspense.next() : p(f.anchor || f.el), Qt = (f, x, E) => {
    f == null ? x._vnode && Kt(x._vnode, null, null, !0) : k(x._vnode || null, f, x, null, null, null, E), Bc(), qi(), x._vnode = f;
  }, lt = {
    p: k,
    um: Kt,
    m: Nn,
    r: O,
    mt: ie,
    mc: S,
    pc: Je,
    pbc: se,
    n: qe,
    o: t
  };
  let Lt, yt;
  return e && ([Lt, yt] = e(lt)), {
    render: Qt,
    hydrate: Lt,
    createApp: vp(Qt, Lt)
  };
}
function Xn({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function Ya(t, e, n = !1) {
  const r = t.children, s = e.children;
  if (V(r) && V(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = s[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[i] = Dn(s[i]), a.el = o.el), n || Ya(o, a)), a.type === gr && (a.el = o.el);
    }
}
function _p(t) {
  const e = t.slice(), n = [0];
  let r, s, i, o, a;
  const l = t.length;
  for (r = 0; r < l; r++) {
    const c = t[r];
    if (c !== 0) {
      if (s = n[n.length - 1], t[s] < c) {
        e[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        a = i + o >> 1, t[n[a]] < c ? i = a + 1 : o = a;
      c < t[n[i]] && (i > 0 && (e[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = e[o];
  return n;
}
const wp = (t) => t.__isTeleport, _s = (t) => t && (t.disabled || t.disabled === ""), t0 = (t) => typeof SVGElement < "u" && t instanceof SVGElement, G1 = (t, e) => {
  const n = t && t.to;
  return Ve(n) ? e ? e(n) : null : n;
}, Cp = {
  __isTeleport: !0,
  process(t, e, n, r, s, i, o, a, l, c) {
    const { mc: u, pc: d, pbc: p, o: { insert: g, querySelector: _, createText: k, createComment: j } } = c, b = _s(e.props);
    let { shapeFlag: m, children: y, dynamicChildren: C } = e;
    if (t == null) {
      const F = e.el = k(""), G = e.anchor = k("");
      g(F, n, r), g(G, n, r);
      const Y = e.target = G1(e.props, _), S = e.targetAnchor = k("");
      Y && (g(S, Y), o = o || t0(Y));
      const oe = (se, ue) => {
        m & 16 && u(y, se, ue, s, i, o, a, l);
      };
      b ? oe(n, G) : Y && oe(Y, S);
    } else {
      e.el = t.el;
      const F = e.anchor = t.anchor, G = e.target = t.target, Y = e.targetAnchor = t.targetAnchor, S = _s(t.props), oe = S ? n : G, se = S ? F : Y;
      if (o = o || t0(G), C ? (p(t.dynamicChildren, C, oe, s, i, o, a), Ya(t, e, !0)) : l || d(t, e, oe, se, s, i, o, a, !1), b)
        S || Ai(e, n, F, c, 1);
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const ue = e.target = G1(e.props, _);
        ue && Ai(e, ue, null, c, 0);
      } else
        S && Ai(e, G, Y, c, 1);
    }
    Kh(e);
  },
  remove(t, e, n, r, { um: s, o: { remove: i } }, o) {
    const { shapeFlag: a, children: l, anchor: c, targetAnchor: u, target: d, props: p } = t;
    if (d && i(u), (o || !_s(p)) && (i(c), a & 16))
      for (let g = 0; g < l.length; g++) {
        const _ = l[g];
        s(_, e, n, !0, !!_.dynamicChildren);
      }
  },
  move: Ai,
  hydrate: Ep
};
function Ai(t, e, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(t.targetAnchor, e, n);
  const { el: o, anchor: a, shapeFlag: l, children: c, props: u } = t, d = i === 2;
  if (d && r(o, e, n), (!d || _s(u)) && l & 16)
    for (let p = 0; p < c.length; p++)
      s(c[p], e, n, 2);
  d && r(a, e, n);
}
function Ep(t, e, n, r, s, i, { o: { nextSibling: o, parentNode: a, querySelector: l } }, c) {
  const u = e.target = G1(e.props, l);
  if (u) {
    const d = u._lpa || u.firstChild;
    if (e.shapeFlag & 16)
      if (_s(e.props))
        e.anchor = c(o(t), e, a(t), n, r, s, i), e.targetAnchor = d;
      else {
        e.anchor = o(t);
        let p = d;
        for (; p; )
          if (p = o(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            e.targetAnchor = p, u._lpa = e.targetAnchor && o(e.targetAnchor);
            break;
          }
        c(d, e, u, n, r, s, i);
      }
    Kh(e);
  }
  return e.anchor && o(e.anchor);
}
const kp = Cp;
function Kh(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n !== t.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid), n = n.nextSibling;
    e.ut();
  }
}
const f1 = /* @__PURE__ */ new Map();
function Tp(t) {
  if (f1.has(t))
    return f1.get(t);
  let e, n;
  const r = new Promise((o, a) => {
    e = o, n = a;
  }), s = t(e, n);
  let i;
  return ho(s) ? i = Bi(() => s) : ye(s) && !Mt(s) && !V(s) ? i = Bi({
    loader: () => s.component,
    loadingComponent: s.loading,
    errorComponent: s.error,
    delay: s.delay,
    timeout: s.timeout
  }) : s == null ? i = Bi(() => r) : i = t, f1.set(t, i), i;
}
function Ap(t, e) {
  return t.__isBuiltIn ? t : (le(t) && t.cid && (t = t.options), le(t) && vo("COMPONENT_ASYNC", e, t) ? Tp(t) : ye(t) && t.functional && wn("COMPONENT_FUNCTIONAL", e, t) ? H5(t) : t);
}
const He = Symbol(void 0), gr = Symbol(void 0), at = Symbol(void 0), hr = Symbol(void 0), ws = [];
let wt = null;
function P(t = !1) {
  ws.push(wt = t ? null : []);
}
function Qh() {
  ws.pop(), wt = ws[ws.length - 1] || null;
}
let mr = 1;
function j1(t) {
  mr += t;
}
function Xh(t) {
  return t.dynamicChildren = mr > 0 ? wt || Mr : null, Qh(), mr > 0 && wt && wt.push(t), t;
}
function ee(t, e, n, r, s, i) {
  return Xh(T(t, e, n, r, s, i, !0));
}
function Me(t, e, n, r, s) {
  return Xh(ne(t, e, n, r, s, !0));
}
function Mt(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function nn(t, e) {
  return t.type === e.type && t.key === e.key;
}
function Sp(t) {
}
const Ao = "__vInternal", Jh = ({ key: t }) => t ?? null, Ui = ({ ref: t, ref_key: e, ref_for: n }) => t != null ? Ve(t) || rt(t) || le(t) ? { i: Xe, r: t, k: e, f: !!n } : t : null;
function T(t, e = null, n = null, r = 0, s = null, i = t === He ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Jh(e),
    ref: e && Ui(e),
    scopeId: Ur,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Xe
  };
  return a ? (So(l, n), i & 128 && t.normalize(l)) : n && (l.shapeFlag |= Ve(n) ? 8 : 16), mr > 0 && !o && wt && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && wt.push(l), g5(l), Rh(l), l;
}
const ne = Rp;
function Rp(t, e = null, n = null, r = 0, s = null, i = !1) {
  if ((!t || t === Th) && (t = at), Mt(t)) {
    const a = qt(t, e, !0);
    return n && So(a, n), mr > 0 && !i && wt && (a.shapeFlag & 6 ? wt[wt.indexOf(t)] = a : wt.push(a)), a.patchFlag |= -2, a;
  }
  if (Fp(t) && (t = t.__vccOpts), t = Ap(t, Xe), e) {
    e = e2(e);
    let { class: a, style: l } = e;
    a && !Ve(a) && (e.class = ze(a)), ye(l) && (Sa(l) && !V(l) && (l = _e({}, l)), e.style = be(l));
  }
  const o = Ve(t) ? 1 : ah(t) ? 128 : wp(t) ? 64 : ye(t) ? 4 : le(t) ? 2 : 0;
  return T(t, e, n, r, s, o, i, !0);
}
function e2(t) {
  return t ? Sa(t) || Ao in t ? _e({}, t) : t : null;
}
function qt(t, e, n = !1) {
  const { props: r, ref: s, patchFlag: i, children: o } = t, a = e ? Ro(r || {}, e) : r, l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && Jh(a),
    ref: e && e.ref ? n && s ? V(s) ? s.concat(Ui(e)) : [s, Ui(e)] : Ui(e) : s,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== He ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && qt(t.ssContent),
    ssFallback: t.ssFallback && qt(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx
  };
  return Rh(l), l;
}
function xr(t = " ", e = 0) {
  return ne(gr, null, t, e);
}
function ti(t, e) {
  const n = ne(hr, null, t);
  return n.staticCount = e, n;
}
function Te(t = "", e = !1) {
  return e ? (P(), Me(at, null, t)) : ne(at, null, t);
}
function It(t) {
  return t == null || typeof t == "boolean" ? ne(at) : V(t) ? ne(
    He,
    null,
    t.slice()
  ) : typeof t == "object" ? Dn(t) : ne(gr, null, String(t));
}
function Dn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : qt(t);
}
function So(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (V(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), So(t, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = e._;
      !s && !(Ao in e) ? e._ctx = Xe : s === 3 && Xe && (Xe.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    le(e) ? (e = { default: e, _ctx: Xe }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [xr(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Ro(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const s in r)
      if (s === "class")
        e.class !== r.class && (e.class = ze([e.class, r.class]));
      else if (s === "style")
        e.style = be([e.style, r.style]);
      else if (Sn(s)) {
        const i = e[s], o = r[s];
        o && i !== o && !(V(i) && i.includes(o)) && (e[s] = i ? [].concat(i, o) : o);
      } else
        s !== "" && (e[s] = r[s]);
  }
  return e;
}
function vt(t, e, n, r = null) {
  Ct(t, e, 7, [
    n,
    r
  ]);
}
const Ip = qh();
let Op = 0;
function Ka(t, e, n) {
  const r = t.type, s = (e ? e.appContext : t.appContext) || Ip, i = {
    uid: Op++,
    vnode: t,
    type: r,
    parent: e,
    appContext: s,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Ea(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: Hh(r, s),
    emitsOptions: oh(r, s),
    emit: null,
    emitted: null,
    propsDefaults: Fe,
    inheritAttrs: r.inheritAttrs,
    ctx: Fe,
    data: Fe,
    props: Fe,
    attrs: Fe,
    slots: Fe,
    refs: Fe,
    setupState: Fe,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = e ? e.root : i, i.emit = x5.bind(null, i), t.ce && t.ce(i), i;
}
let et = null;
const pn = () => et || Xe, Zn = (t) => {
  et = t, t.scope.on();
}, jn = () => {
  et && et.scope.off(), et = null;
};
function t2(t) {
  return t.vnode.shapeFlag & 4;
}
let Zr = !1;
function Qa(t, e = !1) {
  Zr = e;
  const { props: n, children: r } = t.vnode, s = t2(t);
  sp(t, n, s, e), ap(t, r);
  const i = s ? Np(t, e) : void 0;
  return Zr = !1, i;
}
function Np(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = Ra(new Proxy(t.ctx, B1));
  const { setup: r } = n;
  if (r) {
    const s = t.setupContext = r.length > 1 ? n2(t) : null;
    Zn(t), es();
    const i = an(r, t, 0, [t.props, s]);
    if (ts(), jn(), ho(i)) {
      if (i.then(jn, jn), e)
        return i.then((o) => {
          $1(t, o, e);
        }).catch((o) => {
          vr(o, t, 0);
        });
      t.asyncDep = i;
    } else
      $1(t, i, e);
  } else
    Xa(t, e);
}
function $1(t, e, n) {
  le(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ye(e) && (t.setupState = Na(e)), Xa(t, n);
}
let Yi, q1;
function Pp(t) {
  Yi = t, q1 = (e) => {
    e.render._rc && (e.withProxy = new Proxy(e.ctx, J5));
  };
}
const Z1 = () => !Yi;
function Xa(t, e, n) {
  const r = t.type;
  if (D5(t), !t.render) {
    if (!e && Yi && !r.render) {
      const s = t.vnode.props && t.vnode.props["inline-template"] || r.template || ei(t).template;
      if (s) {
        const { isCustomElement: i, compilerOptions: o } = t.appContext.config, { delimiters: a, compilerOptions: l } = r, c = _e(_e({
          isCustomElement: i,
          delimiters: a
        }, o), l);
        c.compatConfig = Object.create(Fa), r.compatConfig && _e(c.compatConfig, r.compatConfig), r.render = Yi(s, c);
      }
    }
    t.render = r.render || Nt, q1 && q1(t);
  }
  n || (Zn(t), es(), ep(t), ts(), jn());
}
function Mp(t) {
  return new Proxy(t.attrs, {
    get(e, n) {
      return Et(t, "get", "$attrs"), e[n];
    }
  });
}
function n2(t) {
  const e = (r) => {
    t.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Mp(t));
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Io(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(Na(Ra(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in Vr)
          return Vr[n](t);
      },
      has(e, n) {
        return n in e || n in Vr;
      }
    }));
}
function W1(t, e = !0) {
  return le(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Fp(t) {
  return le(t) && "__vccOpts" in t;
}
const Ja = (t, e) => i5(t, e, Zr);
function zp() {
  return null;
}
function Dp() {
  return null;
}
function Bp(t) {
}
function Up(t, e) {
  return null;
}
function Hp() {
  return r2().slots;
}
function Vp() {
  return r2().attrs;
}
function r2() {
  const t = pn();
  return t.setupContext || (t.setupContext = n2(t));
}
function Gp(t, e) {
  const n = V(t) ? t.reduce((r, s) => (r[s] = {}, r), {}) : t;
  for (const r in e) {
    const s = n[r];
    s ? V(s) || le(s) ? n[r] = { type: s, default: e[r] } : s.default = e[r] : s === null && (n[r] = { default: e[r] });
  }
  return n;
}
function jp(t, e) {
  const n = {};
  for (const r in t)
    e.includes(r) || Object.defineProperty(n, r, {
      enumerable: !0,
      get: () => t[r]
    });
  return n;
}
function $p(t) {
  const e = pn();
  let n = t();
  return jn(), ho(n) && (n = n.catch((r) => {
    throw Zn(e), r;
  })), [n, () => Zn(e)];
}
function s2(t, e, n) {
  const r = arguments.length;
  return r === 2 ? ye(e) && !V(e) ? Mt(e) ? ne(t, null, [e]) : ne(t, e) : ne(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Mt(n) && (n = [n]), ne(t, e, n));
}
const i2 = Symbol(""), o2 = () => or(i2);
function qp() {
}
function Zp(t, e, n, r) {
  const s = n[r];
  if (s && a2(s, t))
    return s;
  const i = e();
  return i.memo = t.slice(), n[r] = i;
}
function a2(t, e) {
  const n = t.memo;
  if (n.length != e.length)
    return !1;
  for (let r = 0; r < n.length; r++)
    if ($r(n[r], e[r]))
      return !1;
  return mr > 0 && wt && wt.push(t), !0;
}
const l2 = "3.2.45", Wp = {
  createComponentInstance: Ka,
  setupComponent: Qa,
  renderComponentRoot: Di,
  setCurrentRenderingInstance: zs,
  isVNode: Mt,
  normalizeVNode: It
}, Yp = Wp, Kp = Sh, Qp = {
  warnDeprecation: h5,
  createCompatVue: up,
  isCompatEnabled: Pe,
  checkCompatEnabled: vo,
  softAssertCompatEnabled: wn
}, hn = Qp, Xp = "http://www.w3.org/2000/svg", rr = typeof document < "u" ? document : null, n0 = rr && /* @__PURE__ */ rr.createElement("template"), Jp = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const s = e ? rr.createElementNS(Xp, t) : rr.createElement(t, n ? { is: n } : void 0);
    return t === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (t) => rr.createTextNode(t),
  createComment: (t) => rr.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => rr.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  insertStaticContent(t, e, n, r, s, i) {
    const o = n ? n.previousSibling : e.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; e.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      n0.innerHTML = r ? `<svg>${t}</svg>` : t;
      const a = n0.content;
      if (r) {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      e.insertBefore(a, n);
    }
    return [
      o ? o.nextSibling : e.firstChild,
      n ? n.previousSibling : e.lastChild
    ];
  }
};
function e9(t, e, n) {
  const r = t._vtc;
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
function t9(t, e, n) {
  const r = t.style, s = Ve(n);
  if (n && !s) {
    for (const i in n)
      Y1(r, i, n[i]);
    if (e && !Ve(e))
      for (const i in e)
        n[i] == null && Y1(r, i, "");
  } else {
    const i = r.display;
    s ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (r.display = i);
  }
}
const r0 = /\s*!important$/;
function Y1(t, e, n) {
  if (V(n))
    n.forEach((r) => Y1(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = n9(t, e);
    r0.test(n) ? t.setProperty(ft(r), n.replace(r0, ""), "important") : t[r] = n;
  }
}
const s0 = ["Webkit", "Moz", "ms"], g1 = {};
function n9(t, e) {
  const n = g1[e];
  if (n)
    return n;
  let r = xt(e);
  if (r !== "filter" && r in t)
    return g1[e] = r;
  r = Zs(r);
  for (let s = 0; s < s0.length; s++) {
    const i = s0[s] + r;
    if (i in t)
      return g1[e] = i;
  }
  return e;
}
const i0 = "http://www.w3.org/1999/xlink";
function r9(t, e, n, r, s) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(i0, e.slice(6, e.length)) : t.setAttributeNS(i0, e, n);
  else {
    if (i9(t, e, n, s))
      return;
    const i = Ou(e);
    n == null || i && !Nu(n) ? t.removeAttribute(e) : t.setAttribute(e, i ? "" : n);
  }
}
const s9 = /* @__PURE__ */ Jr("contenteditable,draggable,spellcheck");
function i9(t, e, n, r = null) {
  if (s9(e)) {
    const s = n === null ? "false" : typeof n != "boolean" && n !== void 0 ? "true" : null;
    if (s && hn.softAssertCompatEnabled("ATTR_ENUMERATED_COERCION", r, e, n, s))
      return t.setAttribute(e, s), !0;
  } else if (n === !1 && !Ou(e) && hn.softAssertCompatEnabled("ATTR_FALSE_VALUE", r, e))
    return t.removeAttribute(e), !0;
  return !1;
}
function o9(t, e, n, r, s, i, o) {
  if (e === "innerHTML" || e === "textContent") {
    r && o(r, s, i), t[e] = n ?? "";
    return;
  }
  if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
    t._value = n;
    const l = n ?? "";
    (t.value !== l || t.tagName === "OPTION") && (t.value = l), n == null && t.removeAttribute(e);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const l = typeof t[e];
    l === "boolean" ? n = Nu(n) : n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0);
  } else if (n === !1 && hn.isCompatEnabled("ATTR_FALSE_VALUE", s)) {
    const l = typeof t[e];
    (l === "string" || l === "number") && (n = l === "number" ? 0 : "", a = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  a && t.removeAttribute(e);
}
function xn(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function a9(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
function l9(t, e, n, r, s = null) {
  const i = t._vei || (t._vei = {}), o = i[e];
  if (r && o)
    o.value = r;
  else {
    const [a, l] = c9(e);
    if (r) {
      const c = i[e] = d9(r, s);
      xn(t, a, c, l);
    } else
      o && (a9(t, a, o, l), i[e] = void 0);
  }
}
const o0 = /(?:Once|Passive|Capture)$/;
function c9(t) {
  let e;
  if (o0.test(t)) {
    e = {};
    let n;
    for (; n = t.match(o0); )
      t = t.slice(0, t.length - n[0].length), e[n[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : ft(t.slice(2)), e];
}
let m1 = 0;
const u9 = /* @__PURE__ */ Promise.resolve(), h9 = () => m1 || (u9.then(() => m1 = 0), m1 = Date.now());
function d9(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ct(p9(r, n.value), e, 5, [r]);
  };
  return n.value = t, n.attached = h9(), n;
}
function p9(t, e) {
  if (V(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((r) => (s) => !s._stopped && r && r(s));
  } else
    return e;
}
const a0 = /^on[a-z]/, f9 = (t, e, n, r, s = !1, i, o, a, l) => {
  e === "class" ? e9(t, r, s) : e === "style" ? t9(t, n, r) : Sn(e) ? _a(e) || l9(t, e, n, r, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : g9(t, e, r, s)) ? o9(t, e, r, i, o, a, l) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), r9(t, e, r, s, o));
};
function g9(t, e, n, r) {
  return r ? !!(e === "innerHTML" || e === "textContent" || e in t && a0.test(e) && le(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || a0.test(e) && Ve(n) ? !1 : e in t;
}
function c2(t, e) {
  const n = $a(t);
  class r extends Oo {
    constructor(i) {
      super(n, i, e);
    }
  }
  return r.def = n, r;
}
const m9 = (t) => c2(t, C2), x9 = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Oo extends x9 {
  constructor(e, n = {}, r) {
    super(), this._def = e, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Ys(() => {
      this._connected || (X1(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    this._resolved = !0;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    new MutationObserver((r) => {
      for (const s of r)
        this._setAttr(s.attributeName);
    }).observe(this, { attributes: !0 });
    const e = (r, s = !1) => {
      const { props: i, styles: o } = r;
      let a;
      if (i && !V(i))
        for (const l in i) {
          const c = i[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = cn(this._props[l])), (a || (a = /* @__PURE__ */ Object.create(null)))[xt(l)] = !0);
        }
      this._numberProps = a, s && this._resolveProps(r), this._applyStyles(o), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((r) => e(r, !0)) : e(this._def);
  }
  _resolveProps(e) {
    const { props: n } = e, r = V(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && r.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of r.map(xt))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(i) {
          this._setProp(s, i);
        }
      });
  }
  _setAttr(e) {
    let n = this.getAttribute(e);
    const r = xt(e);
    this._numberProps && this._numberProps[r] && (n = cn(n)), this._setProp(r, n, !1);
  }
  _getProp(e) {
    return this._props[e];
  }
  _setProp(e, n, r = !0, s = !0) {
    n !== this._props[e] && (this._props[e] = n, s && this._instance && this._update(), r && (n === !0 ? this.setAttribute(ft(e), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ft(e), n + "") : n || this.removeAttribute(ft(e))));
  }
  _update() {
    X1(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const e = ne(this._def, _e({}, this._props));
    return this._instance || (e.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const r = (i, o) => {
        this.dispatchEvent(new CustomEvent(i, {
          detail: o
        }));
      };
      n.emit = (i, ...o) => {
        r(i, o), ft(i) !== i && r(ft(i), o);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof Oo) {
          n.parent = s._instance, n.provides = s._instance.provides;
          break;
        }
    }), e;
  }
  _applyStyles(e) {
    e && e.forEach((n) => {
      const r = document.createElement("style");
      r.textContent = n, this.shadowRoot.appendChild(r);
    });
  }
}
function L9(t = "$style") {
  {
    const e = pn();
    if (!e)
      return Fe;
    const n = e.type.__cssModules;
    return n && n[t] || Fe;
  }
}
function y9(t) {
  const e = pn();
  if (!e)
    return;
  const n = e.ut = (s = t(e.proxy)) => {
    Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach((i) => Q1(i, s));
  }, r = () => {
    const s = t(e.proxy);
    K1(e.subTree, s), n(s);
  };
  uh(r), Xs(() => {
    const s = new MutationObserver(r);
    s.observe(e.subTree.el.parentNode, { childList: !0 }), Us(() => s.disconnect());
  });
}
function K1(t, e) {
  if (t.shapeFlag & 128) {
    const n = t.suspense;
    t = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      K1(n.activeBranch, e);
    });
  }
  for (; t.component; )
    t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el)
    Q1(t.el, e);
  else if (t.type === He)
    t.children.forEach((n) => K1(n, e));
  else if (t.type === hr) {
    let { el: n, anchor: r } = t;
    for (; n && (Q1(n, e), n !== r); )
      n = n.nextSibling;
  }
}
function Q1(t, e) {
  if (t.nodeType === 1) {
    const n = t.style;
    for (const r in e)
      n.setProperty(`--${r}`, e[r]);
  }
}
const Fn = "transition", ds = "animation", ni = (t, { slots: e }) => s2(ja, h2(t), e);
ni.displayName = "Transition";
ni.__isBuiltIn = !0;
const u2 = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, v9 = ni.props = /* @__PURE__ */ _e({}, ja.props, u2), Jn = (t, e = []) => {
  V(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, l0 = (t) => t ? V(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function h2(t) {
  const e = {};
  for (const z in t)
    z in u2 || (e[z] = t[z]);
  if (t.css === !1)
    return e;
  const { name: n = "v", type: r, duration: s, enterFromClass: i = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = i, appearActiveClass: c = o, appearToClass: u = a, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: g = `${n}-leave-to` } = t, _ = hn.isCompatEnabled("TRANSITION_CLASSES", null);
  let k, j, b;
  if (_) {
    const z = (de) => de.replace(/-from$/, "");
    t.enterFromClass || (k = z(i)), t.appearFromClass || (j = z(l)), t.leaveFromClass || (b = z(d));
  }
  const m = b9(s), y = m && m[0], C = m && m[1], { onBeforeEnter: F, onEnter: G, onEnterCancelled: Y, onLeave: S, onLeaveCancelled: oe, onBeforeAppear: se = F, onAppear: ue = G, onAppearCancelled: $e = Y } = e, Ae = (z, de, Je) => {
    Xt(z, de ? u : a), Xt(z, de ? c : o), Je && Je();
  }, ie = (z, de) => {
    z._isLeaving = !1, Xt(z, d), Xt(z, g), Xt(z, p), de && de();
  }, Le = (z) => (de, Je) => {
    const On = z ? ue : G, At = () => Ae(de, z, Je);
    Jn(On, [de, At]), c0(() => {
      Xt(de, z ? l : i), _ && Xt(de, z ? j : k), Vt(de, z ? u : a), l0(On) || u0(de, r, y, At);
    });
  };
  return _e(e, {
    onBeforeEnter(z) {
      Jn(F, [z]), Vt(z, i), _ && Vt(z, k), Vt(z, o);
    },
    onBeforeAppear(z) {
      Jn(se, [z]), Vt(z, l), _ && Vt(z, j), Vt(z, c);
    },
    onEnter: Le(!1),
    onAppear: Le(!0),
    onLeave(z, de) {
      z._isLeaving = !0;
      const Je = () => ie(z, de);
      Vt(z, d), _ && Vt(z, b), p2(), Vt(z, p), c0(() => {
        !z._isLeaving || (Xt(z, d), _ && Xt(z, b), Vt(z, g), l0(S) || u0(z, r, C, Je));
      }), Jn(S, [z, Je]);
    },
    onEnterCancelled(z) {
      Ae(z, !1), Jn(Y, [z]);
    },
    onAppearCancelled(z) {
      Ae(z, !0), Jn($e, [z]);
    },
    onLeaveCancelled(z) {
      ie(z), Jn(oe, [z]);
    }
  });
}
function b9(t) {
  if (t == null)
    return null;
  if (ye(t))
    return [x1(t.enter), x1(t.leave)];
  {
    const e = x1(t);
    return [e, e];
  }
}
function x1(t) {
  return cn(t);
}
function Vt(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t._vtc || (t._vtc = /* @__PURE__ */ new Set())).add(e);
}
function Xt(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.remove(r));
  const { _vtc: n } = t;
  n && (n.delete(e), n.size || (t._vtc = void 0));
}
function c0(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let _9 = 0;
function u0(t, e, n, r) {
  const s = t._endId = ++_9, i = () => {
    s === t._endId && r();
  };
  if (n)
    return setTimeout(i, n);
  const { type: o, timeout: a, propCount: l } = d2(t, e);
  if (!o)
    return r();
  const c = o + "end";
  let u = 0;
  const d = () => {
    t.removeEventListener(c, p), i();
  }, p = (g) => {
    g.target === t && ++u >= l && d();
  };
  setTimeout(() => {
    u < l && d();
  }, a + 1), t.addEventListener(c, p);
}
function d2(t, e) {
  const n = window.getComputedStyle(t), r = (_) => (n[_] || "").split(", "), s = r(`${Fn}Delay`), i = r(`${Fn}Duration`), o = h0(s, i), a = r(`${ds}Delay`), l = r(`${ds}Duration`), c = h0(a, l);
  let u = null, d = 0, p = 0;
  e === Fn ? o > 0 && (u = Fn, d = o, p = i.length) : e === ds ? c > 0 && (u = ds, d = c, p = l.length) : (d = Math.max(o, c), u = d > 0 ? o > c ? Fn : ds : null, p = u ? u === Fn ? i.length : l.length : 0);
  const g = u === Fn && /\b(transform|all)(,|$)/.test(r(`${Fn}Property`).toString());
  return {
    type: u,
    timeout: d,
    propCount: p,
    hasTransform: g
  };
}
function h0(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((n, r) => d0(n) + d0(t[r])));
}
function d0(t) {
  return Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function p2() {
  return document.body.offsetHeight;
}
const f2 = /* @__PURE__ */ new WeakMap(), g2 = /* @__PURE__ */ new WeakMap(), m2 = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ _e({}, v9, {
    tag: String,
    moveClass: String
  }),
  setup(t, { slots: e }) {
    const n = pn(), r = Ga();
    let s, i;
    return Eo(() => {
      if (!s.length)
        return;
      const o = t.moveClass || `${t.name || "v"}-move`;
      if (!k9(s[0].el, n.vnode.el, o))
        return;
      s.forEach(w9), s.forEach(C9);
      const a = s.filter(E9);
      p2(), a.forEach((l) => {
        const c = l.el, u = c.style;
        Vt(c, o), u.transform = u.webkitTransform = u.transitionDuration = "";
        const d = c._moveCb = (p) => {
          p && p.target !== c || (!p || /transform$/.test(p.propertyName)) && (c.removeEventListener("transitionend", d), c._moveCb = null, Xt(c, o));
        };
        c.addEventListener("transitionend", d);
      });
    }), () => {
      const o = ke(t), a = h2(o);
      let l = o.tag || He;
      !o.tag && hn.checkCompatEnabled("TRANSITION_GROUP_ROOT", n.parent) && (l = "span"), s = i, i = e.default ? wo(e.default()) : [];
      for (let c = 0; c < i.length; c++) {
        const u = i[c];
        u.key != null && fr(u, qr(u, a, r, n));
      }
      if (s)
        for (let c = 0; c < s.length; c++) {
          const u = s[c];
          fr(u, qr(u, a, r, n)), f2.set(u, u.el.getBoundingClientRect());
        }
      return ne(l, null, i);
    };
  }
};
m2.__isBuiltIn = !0;
const x2 = m2;
function w9(t) {
  const e = t.el;
  e._moveCb && e._moveCb(), e._enterCb && e._enterCb();
}
function C9(t) {
  g2.set(t, t.el.getBoundingClientRect());
}
function E9(t) {
  const e = f2.get(t), n = g2.get(t), r = e.left - n.left, s = e.top - n.top;
  if (r || s) {
    const i = t.el.style;
    return i.transform = i.webkitTransform = `translate(${r}px,${s}px)`, i.transitionDuration = "0s", t;
  }
}
function k9(t, e, n) {
  const r = t.cloneNode();
  t._vtc && t._vtc.forEach((o) => {
    o.split(/\s+/).forEach((a) => a && r.classList.remove(a));
  }), n.split(/\s+/).forEach((o) => o && r.classList.add(o)), r.style.display = "none";
  const s = e.nodeType === 1 ? e : e.parentNode;
  s.appendChild(r);
  const { hasTransform: i } = d2(r);
  return s.removeChild(r), i;
}
const Wn = (t) => {
  const e = t.props["onUpdate:modelValue"] || t.props["onModelCompat:input"];
  return V(e) ? (n) => Vn(e, n) : e;
};
function T9(t) {
  t.target.composing = !0;
}
function p0(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Ki = {
  created(t, { modifiers: { lazy: e, trim: n, number: r } }, s) {
    t._assign = Wn(s);
    const i = r || s.props && s.props.type === "number";
    xn(t, e ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let a = t.value;
      n && (a = a.trim()), i && (a = cn(a)), t._assign(a);
    }), n && xn(t, "change", () => {
      t.value = t.value.trim();
    }), e || (xn(t, "compositionstart", T9), xn(t, "compositionend", p0), xn(t, "change", p0));
  },
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: r, number: s } }, i) {
    if (t._assign = Wn(i), t.composing || document.activeElement === t && t.type !== "range" && (n || r && t.value.trim() === e || (s || t.type === "number") && cn(t.value) === e))
      return;
    const o = e ?? "";
    t.value !== o && (t.value = o);
  }
}, el = {
  deep: !0,
  created(t, e, n) {
    t._assign = Wn(n), xn(t, "change", () => {
      const r = t._modelValue, s = Wr(t), i = t.checked, o = t._assign;
      if (V(r)) {
        const a = $s(r, s), l = a !== -1;
        if (i && !l)
          o(r.concat(s));
        else if (!i && l) {
          const c = [...r];
          c.splice(a, 1), o(c);
        }
      } else if (yr(r)) {
        const a = new Set(r);
        i ? a.add(s) : a.delete(s), o(a);
      } else
        o(y2(t, i));
    });
  },
  mounted: f0,
  beforeUpdate(t, e, n) {
    t._assign = Wn(n), f0(t, e, n);
  }
};
function f0(t, { value: e, oldValue: n }, r) {
  t._modelValue = e, V(e) ? t.checked = $s(e, r.props.value) > -1 : yr(e) ? t.checked = e.has(r.props.value) : e !== n && (t.checked = bn(e, y2(t, !0)));
}
const tl = {
  created(t, { value: e }, n) {
    t.checked = bn(e, n.props.value), t._assign = Wn(n), xn(t, "change", () => {
      t._assign(Wr(t));
    });
  },
  beforeUpdate(t, { value: e, oldValue: n }, r) {
    t._assign = Wn(r), e !== n && (t.checked = bn(e, r.props.value));
  }
}, L2 = {
  deep: !0,
  created(t, { value: e, modifiers: { number: n } }, r) {
    const s = yr(e);
    xn(t, "change", () => {
      const i = Array.prototype.filter.call(t.options, (o) => o.selected).map((o) => n ? cn(Wr(o)) : Wr(o));
      t._assign(t.multiple ? s ? new Set(i) : i : i[0]);
    }), t._assign = Wn(r);
  },
  mounted(t, { value: e }) {
    g0(t, e);
  },
  beforeUpdate(t, e, n) {
    t._assign = Wn(n);
  },
  updated(t, { value: e }) {
    g0(t, e);
  }
};
function g0(t, e) {
  const n = t.multiple;
  if (!(n && !V(e) && !yr(e))) {
    for (let r = 0, s = t.options.length; r < s; r++) {
      const i = t.options[r], o = Wr(i);
      if (n)
        V(e) ? i.selected = $s(e, o) > -1 : i.selected = e.has(o);
      else if (bn(Wr(i), e)) {
        t.selectedIndex !== r && (t.selectedIndex = r);
        return;
      }
    }
    !n && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function Wr(t) {
  return "_value" in t ? t._value : t.value;
}
function y2(t, e) {
  const n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
const nl = {
  created(t, e, n) {
    Si(t, e, n, null, "created");
  },
  mounted(t, e, n) {
    Si(t, e, n, null, "mounted");
  },
  beforeUpdate(t, e, n, r) {
    Si(t, e, n, r, "beforeUpdate");
  },
  updated(t, e, n, r) {
    Si(t, e, n, r, "updated");
  }
};
function v2(t, e) {
  switch (t) {
    case "SELECT":
      return L2;
    case "TEXTAREA":
      return Ki;
    default:
      switch (e) {
        case "checkbox":
          return el;
        case "radio":
          return tl;
        default:
          return Ki;
      }
  }
}
function Si(t, e, n, r, s) {
  const i = v2(t.tagName, n.props && n.props.type)[s];
  i && i(t, e, n, r);
}
function A9() {
  Ki.getSSRProps = ({ value: t }) => ({ value: t }), tl.getSSRProps = ({ value: t }, e) => {
    if (e.props && bn(e.props.value, t))
      return { checked: !0 };
  }, el.getSSRProps = ({ value: t }, e) => {
    if (V(t)) {
      if (e.props && $s(t, e.props.value) > -1)
        return { checked: !0 };
    } else if (yr(t)) {
      if (e.props && t.has(e.props.value))
        return { checked: !0 };
    } else if (t)
      return { checked: !0 };
  }, nl.getSSRProps = (t, e) => {
    if (typeof e.type != "string")
      return;
    const n = v2(
      e.type.toUpperCase(),
      e.props && e.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(t, e);
  };
}
const S9 = ["ctrl", "shift", "alt", "meta"], R9 = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => S9.some((n) => t[`${n}Key`] && !e.includes(n))
}, ri = (t, e) => (n, ...r) => {
  for (let s = 0; s < e.length; s++) {
    const i = R9[e[s]];
    if (i && i(n, e))
      return;
  }
  return t(n, ...r);
}, I9 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, O9 = (t, e) => {
  let n, r = null;
  return r = pn(), hn.isCompatEnabled("CONFIG_KEY_CODES", r) && r && (n = r.appContext.config.keyCodes), (s) => {
    if (!("key" in s))
      return;
    const i = ft(s.key);
    if (e.some((o) => o === i || I9[o] === i))
      return t(s);
    {
      const o = String(s.keyCode);
      if (hn.isCompatEnabled("V_ON_KEYCODE_MODIFIER", r) && e.some((a) => a == o))
        return t(s);
      if (n)
        for (const a of e) {
          const l = n[a];
          if (l && (V(l) ? l.some((c) => String(c) === o) : String(l) === o))
            return t(s);
        }
    }
  };
}, si = {
  beforeMount(t, { value: e }, { transition: n }) {
    t._vod = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : ps(t, e);
  },
  mounted(t, { value: e }, { transition: n }) {
    n && e && n.enter(t);
  },
  updated(t, { value: e, oldValue: n }, { transition: r }) {
    !e != !n && (r ? e ? (r.beforeEnter(t), ps(t, !0), r.enter(t)) : r.leave(t, () => {
      ps(t, !1);
    }) : ps(t, e));
  },
  beforeUnmount(t, { value: e }) {
    ps(t, e);
  }
};
function ps(t, e) {
  t.style.display = e ? t._vod : "none";
}
function N9() {
  si.getSSRProps = ({ value: t }) => {
    if (!t)
      return { style: { display: "none" } };
  };
}
const b2 = /* @__PURE__ */ _e({ patchProp: f9 }, Jp);
let Cs, m0 = !1;
function _2() {
  return Cs || (Cs = Zh(b2));
}
function w2() {
  return Cs = m0 ? Cs : Wh(b2), m0 = !0, Cs;
}
const X1 = (...t) => {
  _2().render(...t);
}, C2 = (...t) => {
  w2().hydrate(...t);
}, No = (...t) => {
  const e = _2().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const s = E2(r);
    if (!s)
      return;
    const i = e._component;
    !le(i) && !i.render && !i.template && (i.template = s.innerHTML), s.innerHTML = "";
    const o = n(s, !1, s instanceof SVGElement);
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, e;
}, P9 = (...t) => {
  const e = w2().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const s = E2(r);
    if (s)
      return n(s, !0, s instanceof SVGElement);
  }, e;
};
function E2(t) {
  return Ve(t) ? document.querySelector(t) : t;
}
let x0 = !1;
const M9 = () => {
  x0 || (x0 = !0, A9(), N9());
};
var F9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  render: X1,
  hydrate: C2,
  createApp: No,
  createSSRApp: P9,
  initDirectivesForSSR: M9,
  defineCustomElement: c2,
  defineSSRCustomElement: m9,
  VueElement: Oo,
  useCssModule: L9,
  useCssVars: y9,
  Transition: ni,
  TransitionGroup: x2,
  vModelText: Ki,
  vModelCheckbox: el,
  vModelRadio: tl,
  vModelSelect: L2,
  vModelDynamic: nl,
  withModifiers: ri,
  withKeys: O9,
  vShow: si,
  reactive: _n,
  ref: zi,
  readonly: Aa,
  unref: Xu,
  proxyRefs: Na,
  isRef: rt,
  toRef: Ju,
  toRefs: n5,
  isProxy: Sa,
  isReactive: Ln,
  isReadonly: pr,
  isShallow: Ns,
  customRef: t5,
  triggerRef: X3,
  shallowRef: K3,
  shallowReactive: Ku,
  shallowReadonly: Y3,
  markRaw: Ra,
  toRaw: ke,
  effect: w3,
  stop: C3,
  ReactiveEffect: Ws,
  effectScope: Fu,
  EffectScope: Ea,
  getCurrentScope: y3,
  onScopeDispose: v3,
  computed: Ja,
  watch: ar,
  watchEffect: S5,
  watchPostEffect: uh,
  watchSyncEffect: R5,
  onBeforeMount: yh,
  onMounted: Xs,
  onBeforeUpdate: vh,
  onUpdated: Eo,
  onBeforeUnmount: Bs,
  onUnmounted: Us,
  onActivated: mh,
  onDeactivated: xh,
  onRenderTracked: wh,
  onRenderTriggered: _h,
  onErrorCaptured: Ch,
  onServerPrefetch: bh,
  provide: ch,
  inject: or,
  nextTick: Ys,
  defineComponent: $a,
  defineAsyncComponent: Bi,
  useAttrs: Vp,
  useSlots: Hp,
  defineProps: zp,
  defineEmits: Dp,
  defineExpose: Bp,
  withDefaults: Up,
  mergeDefaults: Gp,
  createPropsRestProxy: jp,
  withAsyncContext: $p,
  getCurrentInstance: pn,
  h: s2,
  createVNode: ne,
  cloneVNode: qt,
  mergeProps: Ro,
  isVNode: Mt,
  Fragment: He,
  Text: gr,
  Comment: at,
  Static: hr,
  Teleport: kp,
  Suspense: C5,
  KeepAlive: gh,
  BaseTransition: ja,
  withDirectives: ko,
  useSSRContext: o2,
  ssrContextKey: i2,
  createRenderer: Zh,
  createHydrationRenderer: Wh,
  queuePostFlushCb: Ma,
  warn: o5,
  handleError: vr,
  callWithErrorHandling: an,
  callWithAsyncErrorHandling: Ct,
  resolveComponent: fe,
  resolveDirective: Ah,
  resolveDynamicComponent: Js,
  registerRuntimeCompiler: Pp,
  isRuntimeOnly: Z1,
  useTransitionState: Ga,
  resolveTransitionHooks: qr,
  setTransitionHooks: fr,
  getTransitionRawChildren: wo,
  initCustomFormatter: qp,
  get devtools() {
    return Nr;
  },
  setDevtoolsHook: sh,
  withCtx: Ua,
  pushScopeId: br,
  popScopeId: _r,
  withScopeId: L5,
  renderList: Cn,
  toHandlers: Ph,
  renderSlot: Za,
  createSlots: Oh,
  withMemo: Zp,
  isMemoSame: a2,
  openBlock: P,
  createBlock: Me,
  setBlockTracking: j1,
  createTextVNode: xr,
  createCommentVNode: Te,
  createStaticVNode: ti,
  createElementVNode: T,
  createElementBlock: ee,
  guardReactiveProps: e2,
  toDisplayString: Ke,
  camelize: xt,
  capitalize: Zs,
  toHandlerKey: Dr,
  normalizeProps: c3,
  normalizeClass: ze,
  normalizeStyle: be,
  transformVNodeArgs: Sp,
  version: l2,
  ssrUtils: Yp,
  resolveFilter: Kp,
  compatUtils: hn
});
function z9(...t) {
  const e = No(...t);
  return hn.isCompatEnabled("RENDER_FUNCTION", null) && (e.component("__compat__transition", ni), e.component("__compat__transition-group", x2), e.component("__compat__keep-alive", gh), e._context.directives.show = si, e._context.directives.model = nl), e;
}
function D9() {
  const t = hn.createCompatVue(No, z9);
  return _e(t, F9), t;
}
const k2 = D9();
k2.compile = () => {
};
function B9() {
  return T2().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function T2() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const U9 = typeof Proxy == "function", H9 = "devtools-plugin:setup", V9 = "plugin:settings:set";
let fs, J1;
function G9() {
  var t;
  return fs !== void 0 || (typeof window < "u" && window.performance ? (fs = !0, J1 = window.performance) : typeof global < "u" && (!((t = global.perf_hooks) === null || t === void 0) && t.performance) ? (fs = !0, J1 = global.perf_hooks.performance) : fs = !1), fs;
}
function j9() {
  return G9() ? J1.now() : Date.now();
}
class $9 {
  constructor(e, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = n;
    const r = {};
    if (e.settings)
      for (const o in e.settings) {
        const a = e.settings[o];
        r[o] = a.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${e.id}`;
    let i = Object.assign({}, r);
    try {
      const o = localStorage.getItem(s), a = JSON.parse(o);
      Object.assign(i, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return i;
      },
      setSettings(o) {
        try {
          localStorage.setItem(s, JSON.stringify(o));
        } catch {
        }
        i = o;
      },
      now() {
        return j9();
      }
    }, n && n.on(V9, (o, a) => {
      o === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (o, a) => this.target ? this.target.on[a] : (...l) => {
        this.onQueue.push({
          method: a,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (o, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...l) => (this.targetQueue.push({
        method: a,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[a](...l)) : (...l) => new Promise((c) => {
        this.targetQueue.push({
          method: a,
          args: l,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(e) {
    this.target = e;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function q9(t, e) {
  const n = t, r = T2(), s = B9(), i = U9 && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
    s.emit(H9, t, e);
  else {
    const o = i ? new $9(n, s) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: e,
      proxy: o
    }), o && e(o.proxiedTarget);
  }
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var Z9 = "store";
function ns(t, e) {
  Object.keys(t).forEach(function(n) {
    return e(t[n], n);
  });
}
function A2(t) {
  return t !== null && typeof t == "object";
}
function W9(t) {
  return t && typeof t.then == "function";
}
function Y9(t, e) {
  return function() {
    return t(e);
  };
}
function S2(t, e, n) {
  return e.indexOf(t) < 0 && (n && n.prepend ? e.unshift(t) : e.push(t)), function() {
    var r = e.indexOf(t);
    r > -1 && e.splice(r, 1);
  };
}
function R2(t, e) {
  t._actions = /* @__PURE__ */ Object.create(null), t._mutations = /* @__PURE__ */ Object.create(null), t._wrappedGetters = /* @__PURE__ */ Object.create(null), t._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = t.state;
  Po(t, n, [], t._modules.root, !0), rl(t, n, e);
}
function rl(t, e, n) {
  var r = t._state, s = t._scope;
  t.getters = {}, t._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var i = t._wrappedGetters, o = {}, a = {}, l = Fu(!0);
  l.run(function() {
    ns(i, function(c, u) {
      o[u] = Y9(c, t), a[u] = Ja(function() {
        return o[u]();
      }), Object.defineProperty(t.getters, u, {
        get: function() {
          return a[u].value;
        },
        enumerable: !0
      });
    });
  }), t._state = _n({
    data: e
  }), t._scope = l, t.strict && e6(t), r && n && t._withCommit(function() {
    r.data = null;
  }), s && s.stop();
}
function Po(t, e, n, r, s) {
  var i = !n.length, o = t._modules.getNamespace(n);
  if (r.namespaced && (t._modulesNamespaceMap[o], t._modulesNamespaceMap[o] = r), !i && !s) {
    var a = sl(e, n.slice(0, -1)), l = n[n.length - 1];
    t._withCommit(function() {
      a[l] = r.state;
    });
  }
  var c = r.context = K9(t, o, n);
  r.forEachMutation(function(u, d) {
    var p = o + d;
    Q9(t, p, u, c);
  }), r.forEachAction(function(u, d) {
    var p = u.root ? d : o + d, g = u.handler || u;
    X9(t, p, g, c);
  }), r.forEachGetter(function(u, d) {
    var p = o + d;
    J9(t, p, u, c);
  }), r.forEachChild(function(u, d) {
    Po(t, e, n.concat(d), u, s);
  });
}
function K9(t, e, n) {
  var r = e === "", s = {
    dispatch: r ? t.dispatch : function(i, o, a) {
      var l = Qi(i, o, a), c = l.payload, u = l.options, d = l.type;
      return (!u || !u.root) && (d = e + d), t.dispatch(d, c);
    },
    commit: r ? t.commit : function(i, o, a) {
      var l = Qi(i, o, a), c = l.payload, u = l.options, d = l.type;
      (!u || !u.root) && (d = e + d), t.commit(d, c, u);
    }
  };
  return Object.defineProperties(s, {
    getters: {
      get: r ? function() {
        return t.getters;
      } : function() {
        return I2(t, e);
      }
    },
    state: {
      get: function() {
        return sl(t.state, n);
      }
    }
  }), s;
}
function I2(t, e) {
  if (!t._makeLocalGettersCache[e]) {
    var n = {}, r = e.length;
    Object.keys(t.getters).forEach(function(s) {
      if (s.slice(0, r) === e) {
        var i = s.slice(r);
        Object.defineProperty(n, i, {
          get: function() {
            return t.getters[s];
          },
          enumerable: !0
        });
      }
    }), t._makeLocalGettersCache[e] = n;
  }
  return t._makeLocalGettersCache[e];
}
function Q9(t, e, n, r) {
  var s = t._mutations[e] || (t._mutations[e] = []);
  s.push(function(i) {
    n.call(t, r.state, i);
  });
}
function X9(t, e, n, r) {
  var s = t._actions[e] || (t._actions[e] = []);
  s.push(function(i) {
    var o = n.call(t, {
      dispatch: r.dispatch,
      commit: r.commit,
      getters: r.getters,
      state: r.state,
      rootGetters: t.getters,
      rootState: t.state
    }, i);
    return W9(o) || (o = Promise.resolve(o)), t._devtoolHook ? o.catch(function(a) {
      throw t._devtoolHook.emit("vuex:error", a), a;
    }) : o;
  });
}
function J9(t, e, n, r) {
  t._wrappedGetters[e] || (t._wrappedGetters[e] = function(s) {
    return n(
      r.state,
      r.getters,
      s.state,
      s.getters
    );
  });
}
function e6(t) {
  ar(function() {
    return t._state.data;
  }, function() {
  }, { deep: !0, flush: "sync" });
}
function sl(t, e) {
  return e.reduce(function(n, r) {
    return n[r];
  }, t);
}
function Qi(t, e, n) {
  return A2(t) && t.type && (n = e, e = t, t = t.type), { type: t, payload: e, options: n };
}
var t6 = "vuex bindings", L0 = "vuex:mutations", L1 = "vuex:actions", Rr = "vuex", n6 = 0;
function r6(t, e) {
  q9(
    {
      id: "org.vuejs.vuex",
      app: t,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [t6]
    },
    function(n) {
      n.addTimelineLayer({
        id: L0,
        label: "Vuex Mutations",
        color: y0
      }), n.addTimelineLayer({
        id: L1,
        label: "Vuex Actions",
        color: y0
      }), n.addInspector({
        id: Rr,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), n.on.getInspectorTree(function(r) {
        if (r.app === t && r.inspectorId === Rr)
          if (r.filter) {
            var s = [];
            M2(s, e._modules.root, r.filter, ""), r.rootNodes = s;
          } else
            r.rootNodes = [
              P2(e._modules.root, "")
            ];
      }), n.on.getInspectorState(function(r) {
        if (r.app === t && r.inspectorId === Rr) {
          var s = r.nodeId;
          I2(e, s), r.state = o6(
            l6(e._modules, s),
            s === "root" ? e.getters : e._makeLocalGettersCache,
            s
          );
        }
      }), n.on.editInspectorState(function(r) {
        if (r.app === t && r.inspectorId === Rr) {
          var s = r.nodeId, i = r.path;
          s !== "root" && (i = s.split("/").filter(Boolean).concat(i)), e._withCommit(function() {
            r.set(e._state.data, i, r.state.value);
          });
        }
      }), e.subscribe(function(r, s) {
        var i = {};
        r.payload && (i.payload = r.payload), i.state = s, n.notifyComponentUpdate(), n.sendInspectorTree(Rr), n.sendInspectorState(Rr), n.addTimelineEvent({
          layerId: L0,
          event: {
            time: Date.now(),
            title: r.type,
            data: i
          }
        });
      }), e.subscribeAction({
        before: function(r, s) {
          var i = {};
          r.payload && (i.payload = r.payload), r._id = n6++, r._time = Date.now(), i.state = s, n.addTimelineEvent({
            layerId: L1,
            event: {
              time: r._time,
              title: r.type,
              groupId: r._id,
              subtitle: "start",
              data: i
            }
          });
        },
        after: function(r, s) {
          var i = {}, o = Date.now() - r._time;
          i.duration = {
            _custom: {
              type: "duration",
              display: o + "ms",
              tooltip: "Action duration",
              value: o
            }
          }, r.payload && (i.payload = r.payload), i.state = s, n.addTimelineEvent({
            layerId: L1,
            event: {
              time: Date.now(),
              title: r.type,
              groupId: r._id,
              subtitle: "end",
              data: i
            }
          });
        }
      });
    }
  );
}
var y0 = 8702998, s6 = 6710886, i6 = 16777215, O2 = {
  label: "namespaced",
  textColor: i6,
  backgroundColor: s6
};
function N2(t) {
  return t && t !== "root" ? t.split("/").slice(-2, -1)[0] : "Root";
}
function P2(t, e) {
  return {
    id: e || "root",
    label: N2(e),
    tags: t.namespaced ? [O2] : [],
    children: Object.keys(t._children).map(
      function(n) {
        return P2(
          t._children[n],
          e + n + "/"
        );
      }
    )
  };
}
function M2(t, e, n, r) {
  r.includes(n) && t.push({
    id: r || "root",
    label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
    tags: e.namespaced ? [O2] : []
  }), Object.keys(e._children).forEach(function(s) {
    M2(t, e._children[s], n, r + s + "/");
  });
}
function o6(t, e, n) {
  e = n === "root" ? e : e[n];
  var r = Object.keys(e), s = {
    state: Object.keys(t.state).map(function(o) {
      return {
        key: o,
        editable: !0,
        value: t.state[o]
      };
    })
  };
  if (r.length) {
    var i = a6(e);
    s.getters = Object.keys(i).map(function(o) {
      return {
        key: o.endsWith("/") ? N2(o) : o,
        editable: !1,
        value: ea(function() {
          return i[o];
        })
      };
    });
  }
  return s;
}
function a6(t) {
  var e = {};
  return Object.keys(t).forEach(function(n) {
    var r = n.split("/");
    if (r.length > 1) {
      var s = e, i = r.pop();
      r.forEach(function(o) {
        s[o] || (s[o] = {
          _custom: {
            value: {},
            display: o,
            tooltip: "Module",
            abstract: !0
          }
        }), s = s[o]._custom.value;
      }), s[i] = ea(function() {
        return t[n];
      });
    } else
      e[n] = ea(function() {
        return t[n];
      });
  }), e;
}
function l6(t, e) {
  var n = e.split("/").filter(function(r) {
    return r;
  });
  return n.reduce(
    function(r, s, i) {
      var o = r[s];
      if (!o)
        throw new Error('Missing module "' + s + '" for path "' + e + '".');
      return i === n.length - 1 ? o : o._children;
    },
    e === "root" ? t : t.root._children
  );
}
function ea(t) {
  try {
    return t();
  } catch (e) {
    return e;
  }
}
var Zt = function(t, e) {
  this.runtime = e, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var n = t.state;
  this.state = (typeof n == "function" ? n() : n) || {};
}, F2 = { namespaced: { configurable: !0 } };
F2.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Zt.prototype.addChild = function(t, e) {
  this._children[t] = e;
};
Zt.prototype.removeChild = function(t) {
  delete this._children[t];
};
Zt.prototype.getChild = function(t) {
  return this._children[t];
};
Zt.prototype.hasChild = function(t) {
  return t in this._children;
};
Zt.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
Zt.prototype.forEachChild = function(t) {
  ns(this._children, t);
};
Zt.prototype.forEachGetter = function(t) {
  this._rawModule.getters && ns(this._rawModule.getters, t);
};
Zt.prototype.forEachAction = function(t) {
  this._rawModule.actions && ns(this._rawModule.actions, t);
};
Zt.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && ns(this._rawModule.mutations, t);
};
Object.defineProperties(Zt.prototype, F2);
var wr = function(t) {
  this.register([], t, !1);
};
wr.prototype.get = function(t) {
  return t.reduce(function(e, n) {
    return e.getChild(n);
  }, this.root);
};
wr.prototype.getNamespace = function(t) {
  var e = this.root;
  return t.reduce(function(n, r) {
    return e = e.getChild(r), n + (e.namespaced ? r + "/" : "");
  }, "");
};
wr.prototype.update = function(t) {
  z2([], this.root, t);
};
wr.prototype.register = function(t, e, n) {
  var r = this;
  n === void 0 && (n = !0);
  var s = new Zt(e, n);
  if (t.length === 0)
    this.root = s;
  else {
    var i = this.get(t.slice(0, -1));
    i.addChild(t[t.length - 1], s);
  }
  e.modules && ns(e.modules, function(o, a) {
    r.register(t.concat(a), o, n);
  });
};
wr.prototype.unregister = function(t) {
  var e = this.get(t.slice(0, -1)), n = t[t.length - 1], r = e.getChild(n);
  !r || !r.runtime || e.removeChild(n);
};
wr.prototype.isRegistered = function(t) {
  var e = this.get(t.slice(0, -1)), n = t[t.length - 1];
  return e ? e.hasChild(n) : !1;
};
function z2(t, e, n) {
  if (e.update(n), n.modules)
    for (var r in n.modules) {
      if (!e.getChild(r))
        return;
      z2(
        t.concat(r),
        e.getChild(r),
        n.modules[r]
      );
    }
}
function c6(t) {
  return new kt(t);
}
var kt = function(t) {
  var e = this;
  t === void 0 && (t = {});
  var n = t.plugins;
  n === void 0 && (n = []);
  var r = t.strict;
  r === void 0 && (r = !1);
  var s = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new wr(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = s;
  var i = this, o = this, a = o.dispatch, l = o.commit;
  this.dispatch = function(u, d) {
    return a.call(i, u, d);
  }, this.commit = function(u, d, p) {
    return l.call(i, u, d, p);
  }, this.strict = r;
  var c = this._modules.root.state;
  Po(this, c, [], this._modules.root), rl(this, c), n.forEach(function(u) {
    return u(e);
  });
}, il = { state: { configurable: !0 } };
kt.prototype.install = function(t, e) {
  t.provide(e || Z9, this), t.config.globalProperties.$store = this;
  var n = this._devtools !== void 0 ? this._devtools : !1;
  n && r6(t, this);
};
il.state.get = function() {
  return this._state.data;
};
il.state.set = function(t) {
};
kt.prototype.commit = function(t, e, n) {
  var r = this, s = Qi(t, e, n), i = s.type, o = s.payload, a = { type: i, payload: o }, l = this._mutations[i];
  !l || (this._withCommit(function() {
    l.forEach(function(c) {
      c(o);
    });
  }), this._subscribers.slice().forEach(function(c) {
    return c(a, r.state);
  }));
};
kt.prototype.dispatch = function(t, e) {
  var n = this, r = Qi(t, e), s = r.type, i = r.payload, o = { type: s, payload: i }, a = this._actions[s];
  if (a) {
    try {
      this._actionSubscribers.slice().filter(function(c) {
        return c.before;
      }).forEach(function(c) {
        return c.before(o, n.state);
      });
    } catch {
    }
    var l = a.length > 1 ? Promise.all(a.map(function(c) {
      return c(i);
    })) : a[0](i);
    return new Promise(function(c, u) {
      l.then(function(d) {
        try {
          n._actionSubscribers.filter(function(p) {
            return p.after;
          }).forEach(function(p) {
            return p.after(o, n.state);
          });
        } catch {
        }
        c(d);
      }, function(d) {
        try {
          n._actionSubscribers.filter(function(p) {
            return p.error;
          }).forEach(function(p) {
            return p.error(o, n.state, d);
          });
        } catch {
        }
        u(d);
      });
    });
  }
};
kt.prototype.subscribe = function(t, e) {
  return S2(t, this._subscribers, e);
};
kt.prototype.subscribeAction = function(t, e) {
  var n = typeof t == "function" ? { before: t } : t;
  return S2(n, this._actionSubscribers, e);
};
kt.prototype.watch = function(t, e, n) {
  var r = this;
  return ar(function() {
    return t(r.state, r.getters);
  }, e, Object.assign({}, n));
};
kt.prototype.replaceState = function(t) {
  var e = this;
  this._withCommit(function() {
    e._state.data = t;
  });
};
kt.prototype.registerModule = function(t, e, n) {
  n === void 0 && (n = {}), typeof t == "string" && (t = [t]), this._modules.register(t, e), Po(this, this.state, t, this._modules.get(t), n.preserveState), rl(this, this.state);
};
kt.prototype.unregisterModule = function(t) {
  var e = this;
  typeof t == "string" && (t = [t]), this._modules.unregister(t), this._withCommit(function() {
    var n = sl(e.state, t.slice(0, -1));
    delete n[t[t.length - 1]];
  }), R2(this);
};
kt.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), this._modules.isRegistered(t);
};
kt.prototype.hotUpdate = function(t) {
  this._modules.update(t), R2(this, !0);
};
kt.prototype._withCommit = function(t) {
  var e = this._committing;
  this._committing = !0, t(), this._committing = e;
};
Object.defineProperties(kt.prototype, il);
var ol = cl(function(t, e) {
  var n = {};
  return ll(e).forEach(function(r) {
    var s = r.key, i = r.val;
    n[s] = function() {
      var o = this.$store.state, a = this.$store.getters;
      if (t) {
        var l = ul(this.$store, "mapState", t);
        if (!l)
          return;
        o = l.context.state, a = l.context.getters;
      }
      return typeof i == "function" ? i.call(this, o, a) : o[i];
    }, n[s].vuex = !0;
  }), n;
}), al = cl(function(t, e) {
  var n = {};
  return ll(e).forEach(function(r) {
    var s = r.key, i = r.val;
    n[s] = function() {
      for (var o = [], a = arguments.length; a--; )
        o[a] = arguments[a];
      var l = this.$store.commit;
      if (t) {
        var c = ul(this.$store, "mapMutations", t);
        if (!c)
          return;
        l = c.context.commit;
      }
      return typeof i == "function" ? i.apply(this, [l].concat(o)) : l.apply(this.$store, [i].concat(o));
    };
  }), n;
}), zt = cl(function(t, e) {
  var n = {};
  return ll(e).forEach(function(r) {
    var s = r.key, i = r.val;
    i = t + i, n[s] = function() {
      if (!(t && !ul(this.$store, "mapGetters", t)))
        return this.$store.getters[i];
    }, n[s].vuex = !0;
  }), n;
});
function ll(t) {
  return u6(t) ? Array.isArray(t) ? t.map(function(e) {
    return { key: e, val: e };
  }) : Object.keys(t).map(function(e) {
    return { key: e, val: t[e] };
  }) : [];
}
function u6(t) {
  return Array.isArray(t) || A2(t);
}
function cl(t) {
  return function(e, n) {
    return typeof e != "string" ? (n = e, e = "") : e.charAt(e.length - 1) !== "/" && (e += "/"), t(e, n);
  };
}
function ul(t, e, n) {
  var r = t._modulesNamespaceMap[n];
  return r;
}
var h6 = typeof mi == "object" && mi && mi.Object === Object && mi, D2 = h6, d6 = D2, p6 = typeof self == "object" && self && self.Object === Object && self, f6 = d6 || p6 || Function("return this")(), Cr = f6, g6 = Cr, m6 = function() {
  return g6.Date.now();
}, x6 = m6;
String.prototype.seed = String.prototype.seed || Math.round(Math.random() * Math.pow(2, 32));
String.prototype.hashCode = function() {
  const t = this.toString();
  let e, n;
  const r = t.length & 3, s = t.length - r;
  let i = String.prototype.seed;
  const o = 3432918353, a = 461845907;
  let l = 0;
  for (; l < s; )
    n = t.charCodeAt(l) & 255 | (t.charCodeAt(++l) & 255) << 8 | (t.charCodeAt(++l) & 255) << 16 | (t.charCodeAt(++l) & 255) << 24, ++l, n = (n & 65535) * o + (((n >>> 16) * o & 65535) << 16) & 4294967295, n = n << 15 | n >>> 17, n = (n & 65535) * a + (((n >>> 16) * a & 65535) << 16) & 4294967295, i ^= n, i = i << 13 | i >>> 19, e = (i & 65535) * 5 + (((i >>> 16) * 5 & 65535) << 16) & 4294967295, i = (e & 65535) + 27492 + (((e >>> 16) + 58964 & 65535) << 16);
  switch (n = 0, r) {
    case 3:
      n ^= (t.charCodeAt(l + 2) & 255) << 16;
    case 2:
      n ^= (t.charCodeAt(l + 1) & 255) << 8;
    case 1:
      n ^= t.charCodeAt(l) & 255, n = (n & 65535) * o + (((n >>> 16) * o & 65535) << 16) & 4294967295, n = n << 15 | n >>> 17, n = (n & 65535) * a + (((n >>> 16) * a & 65535) << 16) & 4294967295, i ^= n;
  }
  return i ^= t.length, i ^= i >>> 16, i = (i & 65535) * 2246822507 + (((i >>> 16) * 2246822507 & 65535) << 16) & 4294967295, i ^= i >>> 13, i = (i & 65535) * 3266489909 + (((i >>> 16) * 3266489909 & 65535) << 16) & 4294967295, i ^= i >>> 16, i >>> 0;
};
/*! https://mths.be/codepointat v0.2.0 by @mathias */
String.prototype.codePointAt || function() {
  var t = function() {
    let n;
    try {
      const r = {}, s = Object.defineProperty;
      n = s(r, r, r) && s;
    } catch {
    }
    return n;
  }();
  const e = function(n) {
    if (this == null)
      throw TypeError();
    const r = String(this), s = r.length;
    let i = n ? Number(n) : 0;
    if (i !== i && (i = 0), i < 0 || i >= s)
      return;
    const o = r.charCodeAt(i);
    let a;
    return o >= 55296 && o <= 56319 && s > i + 1 && (a = r.charCodeAt(i + 1), a >= 56320 && a <= 57343) ? (o - 55296) * 1024 + a - 56320 + 65536 : o;
  };
  t ? t(String.prototype, "codePointAt", {
    value: e,
    configurable: !0,
    writable: !0
  }) : String.prototype.codePointAt = e;
}();
/*! https://mths.be/fromcodepoint v0.2.1 by @mathias */
String.fromCodePoint || function() {
  const t = function() {
    let s;
    try {
      const i = {}, o = Object.defineProperty;
      s = o(i, i, i) && o;
    } catch {
    }
    return s;
  }(), e = String.fromCharCode, n = Math.floor, r = function(s) {
    const i = [];
    let o, a, l = -1;
    const c = arguments.length;
    if (!c)
      return "";
    let u = "";
    for (; ++l < c; ) {
      let d = Number(arguments[l]);
      if (!isFinite(d) || d < 0 || d > 1114111 || n(d) !== d)
        throw RangeError("Invalid code point: " + d);
      d <= 65535 ? i.push(d) : (d -= 65536, o = (d >> 10) + 55296, a = d % 1024 + 56320, i.push(o, a)), (l + 1 === c || i.length > 16384) && (u += e.apply(null, i), i.length = 0);
    }
    return u;
  };
  t ? t(String, "fromCodePoint", {
    value: r,
    configurable: !0,
    writable: !0
  }) : String.fromCodePoint = r;
}();
class M {
  constructor() {
    this.source = null, this.type = null, this.channel = null, this.start = null, this.stop = null, this.tokenIndex = null, this.line = null, this.column = null, this._text = null;
  }
  getTokenSource() {
    return this.source[0];
  }
  getInputStream() {
    return this.source[1];
  }
  get text() {
    return this._text;
  }
  set text(e) {
    this._text = e;
  }
}
M.INVALID_TYPE = 0;
M.EPSILON = -2;
M.MIN_USER_TOKEN_TYPE = 1;
M.EOF = -1;
M.DEFAULT_CHANNEL = 0;
M.HIDDEN_CHANNEL = 1;
function Yr(t, e) {
  if (!Array.isArray(t) || !Array.isArray(e))
    return !1;
  if (t === e)
    return !0;
  if (t.length !== e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e[n] && (!t[n].equals || !t[n].equals(e[n])))
      return !1;
  return !0;
}
class Ft {
  constructor() {
    this.count = 0, this.hash = 0;
  }
  update() {
    for (let e = 0; e < arguments.length; e++) {
      const n = arguments[e];
      if (n != null)
        if (Array.isArray(n))
          this.update.apply(this, n);
        else {
          let r = 0;
          switch (typeof n) {
            case "undefined":
            case "function":
              continue;
            case "number":
            case "boolean":
              r = n;
              break;
            case "string":
              r = n.hashCode();
              break;
            default:
              n.updateHashCode ? n.updateHashCode(this) : console.log("No updateHashCode for " + n.toString());
              continue;
          }
          r = r * 3432918353, r = r << 15 | r >>> 32 - 15, r = r * 461845907, this.count = this.count + 1;
          let s = this.hash ^ r;
          s = s << 13 | s >>> 32 - 13, s = s * 5 + 3864292196, this.hash = s;
        }
    }
  }
  finish() {
    let e = this.hash ^ this.count * 4;
    return e = e ^ e >>> 16, e = e * 2246822507, e = e ^ e >>> 13, e = e * 3266489909, e = e ^ e >>> 16, e;
  }
  static hashStuff() {
    const e = new Ft();
    return e.update.apply(e, arguments), e.finish();
  }
}
function B2(t) {
  return t ? t.hashCode() : -1;
}
function U2(t, e) {
  return t ? t.equals(e) : t === e;
}
function L6(t) {
  return t === null ? "null" : t;
}
function Un(t) {
  return Array.isArray(t) ? "[" + t.map(L6).join(", ") + "]" : "null";
}
const Ri = "h-";
class Pt {
  constructor(e, n) {
    this.data = {}, this.hashFunction = e || B2, this.equalsFunction = n || U2;
  }
  add(e) {
    const n = Ri + this.hashFunction(e);
    if (n in this.data) {
      const r = this.data[n];
      for (let s = 0; s < r.length; s++)
        if (this.equalsFunction(e, r[s]))
          return r[s];
      return r.push(e), e;
    } else
      return this.data[n] = [e], e;
  }
  has(e) {
    return this.get(e) != null;
  }
  get(e) {
    const n = Ri + this.hashFunction(e);
    if (n in this.data) {
      const r = this.data[n];
      for (let s = 0; s < r.length; s++)
        if (this.equalsFunction(e, r[s]))
          return r[s];
    }
    return null;
  }
  values() {
    return Object.keys(this.data).filter((e) => e.startsWith(Ri)).flatMap((e) => this.data[e], this);
  }
  toString() {
    return Un(this.values());
  }
  get length() {
    return Object.keys(this.data).filter((e) => e.startsWith(Ri)).map((e) => this.data[e].length, this).reduce((e, n) => e + n, 0);
  }
}
class Ie {
  hashCode() {
    const e = new Ft();
    return this.updateHashCode(e), e.finish();
  }
  evaluate(e, n) {
  }
  evalPrecedence(e, n) {
    return this;
  }
  static andContext(e, n) {
    if (e === null || e === Ie.NONE)
      return n;
    if (n === null || n === Ie.NONE)
      return e;
    const r = new Es(e, n);
    return r.opnds.length === 1 ? r.opnds[0] : r;
  }
  static orContext(e, n) {
    if (e === null)
      return n;
    if (n === null)
      return e;
    if (e === Ie.NONE || n === Ie.NONE)
      return Ie.NONE;
    const r = new ks(e, n);
    return r.opnds.length === 1 ? r.opnds[0] : r;
  }
}
class Es extends Ie {
  constructor(e, n) {
    super();
    const r = new Pt();
    e instanceof Es ? e.opnds.map(function(i) {
      r.add(i);
    }) : r.add(e), n instanceof Es ? n.opnds.map(function(i) {
      r.add(i);
    }) : r.add(n);
    const s = H2(r);
    if (s.length > 0) {
      let i = null;
      s.map(function(o) {
        (i === null || o.precedence < i.precedence) && (i = o);
      }), r.add(i);
    }
    this.opnds = Array.from(r.values());
  }
  equals(e) {
    return this === e ? !0 : e instanceof Es ? Yr(this.opnds, e.opnds) : !1;
  }
  updateHashCode(e) {
    e.update(this.opnds, "AND");
  }
  evaluate(e, n) {
    for (let r = 0; r < this.opnds.length; r++)
      if (!this.opnds[r].evaluate(e, n))
        return !1;
    return !0;
  }
  evalPrecedence(e, n) {
    let r = !1;
    const s = [];
    for (let o = 0; o < this.opnds.length; o++) {
      const a = this.opnds[o], l = a.evalPrecedence(e, n);
      if (r |= l !== a, l === null)
        return null;
      l !== Ie.NONE && s.push(l);
    }
    if (!r)
      return this;
    if (s.length === 0)
      return Ie.NONE;
    let i = null;
    return s.map(function(o) {
      i = i === null ? o : Ie.andContext(i, o);
    }), i;
  }
  toString() {
    const e = this.opnds.map((n) => n.toString());
    return (e.length > 3 ? e.slice(3) : e).join("&&");
  }
}
class ks extends Ie {
  constructor(e, n) {
    super();
    const r = new Pt();
    e instanceof ks ? e.opnds.map(function(i) {
      r.add(i);
    }) : r.add(e), n instanceof ks ? n.opnds.map(function(i) {
      r.add(i);
    }) : r.add(n);
    const s = H2(r);
    if (s.length > 0) {
      const i = s.sort(function(a, l) {
        return a.compareTo(l);
      }), o = i[i.length - 1];
      r.add(o);
    }
    this.opnds = Array.from(r.values());
  }
  equals(e) {
    return this === e ? !0 : e instanceof ks ? Yr(this.opnds, e.opnds) : !1;
  }
  updateHashCode(e) {
    e.update(this.opnds, "OR");
  }
  evaluate(e, n) {
    for (let r = 0; r < this.opnds.length; r++)
      if (this.opnds[r].evaluate(e, n))
        return !0;
    return !1;
  }
  evalPrecedence(e, n) {
    let r = !1;
    for (let s = 0; s < this.opnds.length; s++) {
      const i = this.opnds[s], o = i.evalPrecedence(e, n);
      if (r |= o !== i, o === Ie.NONE)
        return Ie.NONE;
    }
    return r ? null : this;
  }
  toString() {
    const e = this.opnds.map((n) => n.toString());
    return (e.length > 3 ? e.slice(3) : e).join("||");
  }
}
function H2(t) {
  const e = [];
  return t.values().map(function(n) {
    n instanceof Ie.PrecedencePredicate && e.push(n);
  }), e;
}
function v0(t, e) {
  if (t === null) {
    const n = { state: null, alt: null, context: null, semanticContext: null };
    return e && (n.reachesIntoOuterContext = 0), n;
  } else {
    const n = {};
    return n.state = t.state || null, n.alt = t.alt === void 0 ? null : t.alt, n.context = t.context || null, n.semanticContext = t.semanticContext || null, e && (n.reachesIntoOuterContext = t.reachesIntoOuterContext || 0, n.precedenceFilterSuppressed = t.precedenceFilterSuppressed || !1), n;
  }
}
class Ye {
  constructor(e, n) {
    this.checkContext(e, n), e = v0(e), n = v0(n, !0), this.state = e.state !== null ? e.state : n.state, this.alt = e.alt !== null ? e.alt : n.alt, this.context = e.context !== null ? e.context : n.context, this.semanticContext = e.semanticContext !== null ? e.semanticContext : n.semanticContext !== null ? n.semanticContext : Ie.NONE, this.reachesIntoOuterContext = n.reachesIntoOuterContext, this.precedenceFilterSuppressed = n.precedenceFilterSuppressed;
  }
  checkContext(e, n) {
    (e.context === null || e.context === void 0) && (n === null || n.context === null || n.context === void 0) && (this.context = null);
  }
  hashCode() {
    const e = new Ft();
    return this.updateHashCode(e), e.finish();
  }
  updateHashCode(e) {
    e.update(this.state.stateNumber, this.alt, this.context, this.semanticContext);
  }
  equals(e) {
    return this === e ? !0 : e instanceof Ye ? this.state.stateNumber === e.state.stateNumber && this.alt === e.alt && (this.context === null ? e.context === null : this.context.equals(e.context)) && this.semanticContext.equals(e.semanticContext) && this.precedenceFilterSuppressed === e.precedenceFilterSuppressed : !1;
  }
  hashCodeForConfigSet() {
    const e = new Ft();
    return e.update(this.state.stateNumber, this.alt, this.semanticContext), e.finish();
  }
  equalsForConfigSet(e) {
    return this === e ? !0 : e instanceof Ye ? this.state.stateNumber === e.state.stateNumber && this.alt === e.alt && this.semanticContext.equals(e.semanticContext) : !1;
  }
  toString() {
    return "(" + this.state + "," + this.alt + (this.context !== null ? ",[" + this.context.toString() + "]" : "") + (this.semanticContext !== Ie.NONE ? "," + this.semanticContext.toString() : "") + (this.reachesIntoOuterContext > 0 ? ",up=" + this.reachesIntoOuterContext : "") + ")";
  }
}
class Re {
  constructor(e, n) {
    this.start = e, this.stop = n;
  }
  clone() {
    return new Re(this.start, this.stop);
  }
  contains(e) {
    return e >= this.start && e < this.stop;
  }
  toString() {
    return this.start === this.stop - 1 ? this.start.toString() : this.start.toString() + ".." + (this.stop - 1).toString();
  }
  get length() {
    return this.stop - this.start;
  }
}
Re.INVALID_INTERVAL = new Re(-1, -2);
class Gt {
  constructor() {
    this.intervals = null, this.readOnly = !1;
  }
  first(e) {
    return this.intervals === null || this.intervals.length === 0 ? M.INVALID_TYPE : this.intervals[0].start;
  }
  addOne(e) {
    this.addInterval(new Re(e, e + 1));
  }
  addRange(e, n) {
    this.addInterval(new Re(e, n + 1));
  }
  addInterval(e) {
    if (this.intervals === null)
      this.intervals = [], this.intervals.push(e.clone());
    else {
      for (let n = 0; n < this.intervals.length; n++) {
        const r = this.intervals[n];
        if (e.stop < r.start) {
          this.intervals.splice(n, 0, e);
          return;
        } else if (e.stop === r.start) {
          this.intervals[n] = new Re(e.start, r.stop);
          return;
        } else if (e.start <= r.stop) {
          this.intervals[n] = new Re(Math.min(r.start, e.start), Math.max(r.stop, e.stop)), this.reduce(n);
          return;
        }
      }
      this.intervals.push(e.clone());
    }
  }
  addSet(e) {
    return e.intervals !== null && e.intervals.forEach((n) => this.addInterval(n), this), this;
  }
  reduce(e) {
    if (e < this.intervals.length - 1) {
      const n = this.intervals[e], r = this.intervals[e + 1];
      n.stop >= r.stop ? (this.intervals.splice(e + 1, 1), this.reduce(e)) : n.stop >= r.start && (this.intervals[e] = new Re(n.start, r.stop), this.intervals.splice(e + 1, 1));
    }
  }
  complement(e, n) {
    const r = new Gt();
    return r.addInterval(new Re(e, n + 1)), this.intervals !== null && this.intervals.forEach((s) => r.removeRange(s)), r;
  }
  contains(e) {
    if (this.intervals === null)
      return !1;
    for (let n = 0; n < this.intervals.length; n++)
      if (this.intervals[n].contains(e))
        return !0;
    return !1;
  }
  removeRange(e) {
    if (e.start === e.stop - 1)
      this.removeOne(e.start);
    else if (this.intervals !== null) {
      let n = 0;
      for (let r = 0; r < this.intervals.length; r++) {
        const s = this.intervals[n];
        if (e.stop <= s.start)
          return;
        if (e.start > s.start && e.stop < s.stop) {
          this.intervals[n] = new Re(s.start, e.start);
          const i = new Re(e.stop, s.stop);
          this.intervals.splice(n, 0, i);
          return;
        } else
          e.start <= s.start && e.stop >= s.stop ? (this.intervals.splice(n, 1), n = n - 1) : e.start < s.stop ? this.intervals[n] = new Re(s.start, e.start) : e.stop < s.stop && (this.intervals[n] = new Re(e.stop, s.stop));
        n += 1;
      }
    }
  }
  removeOne(e) {
    if (this.intervals !== null)
      for (let n = 0; n < this.intervals.length; n++) {
        const r = this.intervals[n];
        if (e < r.start)
          return;
        if (e === r.start && e === r.stop - 1) {
          this.intervals.splice(n, 1);
          return;
        } else if (e === r.start) {
          this.intervals[n] = new Re(r.start + 1, r.stop);
          return;
        } else if (e === r.stop - 1) {
          this.intervals[n] = new Re(r.start, r.stop - 1);
          return;
        } else if (e < r.stop - 1) {
          const s = new Re(r.start, e);
          r.start = e + 1, this.intervals.splice(n, 0, s);
          return;
        }
      }
  }
  toString(e, n, r) {
    return e = e || null, n = n || null, r = r || !1, this.intervals === null ? "{}" : e !== null || n !== null ? this.toTokenString(e, n) : r ? this.toCharString() : this.toIndexString();
  }
  toCharString() {
    const e = [];
    for (let n = 0; n < this.intervals.length; n++) {
      const r = this.intervals[n];
      r.stop === r.start + 1 ? r.start === M.EOF ? e.push("<EOF>") : e.push("'" + String.fromCharCode(r.start) + "'") : e.push("'" + String.fromCharCode(r.start) + "'..'" + String.fromCharCode(r.stop - 1) + "'");
    }
    return e.length > 1 ? "{" + e.join(", ") + "}" : e[0];
  }
  toIndexString() {
    const e = [];
    for (let n = 0; n < this.intervals.length; n++) {
      const r = this.intervals[n];
      r.stop === r.start + 1 ? r.start === M.EOF ? e.push("<EOF>") : e.push(r.start.toString()) : e.push(r.start.toString() + ".." + (r.stop - 1).toString());
    }
    return e.length > 1 ? "{" + e.join(", ") + "}" : e[0];
  }
  toTokenString(e, n) {
    const r = [];
    for (let s = 0; s < this.intervals.length; s++) {
      const i = this.intervals[s];
      for (let o = i.start; o < i.stop; o++)
        r.push(this.elementName(e, n, o));
    }
    return r.length > 1 ? "{" + r.join(", ") + "}" : r[0];
  }
  elementName(e, n, r) {
    return r === M.EOF ? "<EOF>" : r === M.EPSILON ? "<EPSILON>" : e[r] || n[r];
  }
  get length() {
    return this.intervals.map((e) => e.length).reduce((e, n) => e + n);
  }
}
class J {
  constructor() {
    this.atn = null, this.stateNumber = J.INVALID_STATE_NUMBER, this.stateType = null, this.ruleIndex = 0, this.epsilonOnlyTransitions = !1, this.transitions = [], this.nextTokenWithinRule = null;
  }
  toString() {
    return this.stateNumber;
  }
  equals(e) {
    return e instanceof J ? this.stateNumber === e.stateNumber : !1;
  }
  isNonGreedyExitState() {
    return !1;
  }
  addTransition(e, n) {
    n === void 0 && (n = -1), this.transitions.length === 0 ? this.epsilonOnlyTransitions = e.isEpsilon : this.epsilonOnlyTransitions !== e.isEpsilon && (this.epsilonOnlyTransitions = !1), n === -1 ? this.transitions.push(e) : this.transitions.splice(n, 1, e);
  }
}
J.INVALID_TYPE = 0;
J.BASIC = 1;
J.RULE_START = 2;
J.BLOCK_START = 3;
J.PLUS_BLOCK_START = 4;
J.STAR_BLOCK_START = 5;
J.TOKEN_START = 6;
J.RULE_STOP = 7;
J.BLOCK_END = 8;
J.STAR_LOOP_BACK = 9;
J.STAR_LOOP_ENTRY = 10;
J.PLUS_LOOP_BACK = 11;
J.LOOP_END = 12;
J.serializationNames = [
  "INVALID",
  "BASIC",
  "RULE_START",
  "BLOCK_START",
  "PLUS_BLOCK_START",
  "STAR_BLOCK_START",
  "TOKEN_START",
  "RULE_STOP",
  "BLOCK_END",
  "STAR_LOOP_BACK",
  "STAR_LOOP_ENTRY",
  "PLUS_LOOP_BACK",
  "LOOP_END"
];
J.INVALID_STATE_NUMBER = -1;
class gt extends J {
  constructor() {
    return super(), this.stateType = J.RULE_STOP, this;
  }
}
class K {
  constructor(e) {
    if (e == null)
      throw "target cannot be null.";
    this.target = e, this.isEpsilon = !1, this.label = null;
  }
}
K.EPSILON = 1;
K.RANGE = 2;
K.RULE = 3;
K.PREDICATE = 4;
K.ATOM = 5;
K.ACTION = 6;
K.SET = 7;
K.NOT_SET = 8;
K.WILDCARD = 9;
K.PRECEDENCE = 10;
K.serializationNames = [
  "INVALID",
  "EPSILON",
  "RANGE",
  "RULE",
  "PREDICATE",
  "ATOM",
  "ACTION",
  "SET",
  "NOT_SET",
  "WILDCARD",
  "PRECEDENCE"
];
K.serializationTypes = {
  EpsilonTransition: K.EPSILON,
  RangeTransition: K.RANGE,
  RuleTransition: K.RULE,
  PredicateTransition: K.PREDICATE,
  AtomTransition: K.ATOM,
  ActionTransition: K.ACTION,
  SetTransition: K.SET,
  NotSetTransition: K.NOT_SET,
  WildcardTransition: K.WILDCARD,
  PrecedencePredicateTransition: K.PRECEDENCE
};
class Xi extends K {
  constructor(e, n, r, s) {
    super(e), this.ruleIndex = n, this.precedence = r, this.followState = s, this.serializationType = K.RULE, this.isEpsilon = !0;
  }
  matches(e, n, r) {
    return !1;
  }
}
class hl extends K {
  constructor(e, n) {
    super(e), this.serializationType = K.SET, n != null ? this.label = n : (this.label = new Gt(), this.label.addOne(M.INVALID_TYPE));
  }
  matches(e, n, r) {
    return this.label.contains(e);
  }
  toString() {
    return this.label.toString();
  }
}
class dl extends hl {
  constructor(e, n) {
    super(e, n), this.serializationType = K.NOT_SET;
  }
  matches(e, n, r) {
    return e >= n && e <= r && !super.matches(e, n, r);
  }
  toString() {
    return "~" + super.toString();
  }
}
class V2 extends K {
  constructor(e) {
    super(e), this.serializationType = K.WILDCARD;
  }
  matches(e, n, r) {
    return e >= n && e <= r;
  }
  toString() {
    return ".";
  }
}
class pl extends K {
  constructor(e) {
    super(e);
  }
}
class y6 {
}
class v6 extends y6 {
}
class G2 extends v6 {
}
class Ji extends G2 {
  getRuleContext() {
    throw new Error("missing interface implementation");
  }
}
class En extends G2 {
}
class Mo extends En {
}
function b6(t, e) {
  return t = t.replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r"), e && (t = t.replace(/ /g, "·")), t;
}
const Jt = {
  toStringTree: function(t, e, n) {
    e = e || null, n = n || null, n !== null && (e = n.ruleNames);
    let r = Jt.getNodeText(t, e);
    r = b6(r, !1);
    const s = t.getChildCount();
    if (s === 0)
      return r;
    let i = "(" + r + " ";
    s > 0 && (r = Jt.toStringTree(t.getChild(0), e), i = i.concat(r));
    for (let o = 1; o < s; o++)
      r = Jt.toStringTree(t.getChild(o), e), i = i.concat(" " + r);
    return i = i.concat(")"), i;
  },
  getNodeText: function(t, e, n) {
    if (e = e || null, n = n || null, n !== null && (e = n.ruleNames), e !== null)
      if (t instanceof Ji) {
        const s = t.getRuleContext().getAltNumber();
        return s != 0 ? e[t.ruleIndex] + ":" + s : e[t.ruleIndex];
      } else {
        if (t instanceof Mo)
          return t.toString();
        if (t instanceof En && t.symbol !== null)
          return t.symbol.text;
      }
    const r = t.getPayload();
    return r instanceof M ? r.text : t.getPayload().toString();
  },
  getChildren: function(t) {
    const e = [];
    for (let n = 0; n < t.getChildCount(); n++)
      e.push(t.getChild(n));
    return e;
  },
  getAncestors: function(t) {
    let e = [];
    for (t = t.getParent(); t !== null; )
      e = [t].concat(e), t = t.getParent();
    return e;
  },
  findAllTokenNodes: function(t, e) {
    return Jt.findAllNodes(t, e, !0);
  },
  findAllRuleNodes: function(t, e) {
    return Jt.findAllNodes(t, e, !1);
  },
  findAllNodes: function(t, e, n) {
    const r = [];
    return Jt._findAllNodes(t, e, n, r), r;
  },
  _findAllNodes: function(t, e, n, r) {
    n && t instanceof En ? t.symbol.type === e && r.push(t) : !n && t instanceof Ji && t.ruleIndex === e && r.push(t);
    for (let s = 0; s < t.getChildCount(); s++)
      Jt._findAllNodes(t.getChild(s), e, n, r);
  },
  descendants: function(t) {
    let e = [t];
    for (let n = 0; n < t.getChildCount(); n++)
      e = e.concat(Jt.descendants(t.getChild(n)));
    return e;
  }
};
class Kr extends Ji {
  constructor(e, n) {
    super(), this.parentCtx = e || null, this.invokingState = n || -1;
  }
  depth() {
    let e = 0, n = this;
    for (; n !== null; )
      n = n.parentCtx, e += 1;
    return e;
  }
  isEmpty() {
    return this.invokingState === -1;
  }
  getSourceInterval() {
    return Re.INVALID_INTERVAL;
  }
  getRuleContext() {
    return this;
  }
  getPayload() {
    return this;
  }
  getText() {
    return this.getChildCount() === 0 ? "" : this.children.map(function(e) {
      return e.getText();
    }).join("");
  }
  getAltNumber() {
    return 0;
  }
  setAltNumber(e) {
  }
  getChild(e) {
    return null;
  }
  getChildCount() {
    return 0;
  }
  accept(e) {
    return e.visitChildren(this);
  }
  toStringTree(e, n) {
    return Jt.toStringTree(this, e, n);
  }
  toString(e, n) {
    e = e || null, n = n || null;
    let r = this, s = "[";
    for (; r !== null && r !== n; ) {
      if (e === null)
        r.isEmpty() || (s += r.invokingState);
      else {
        const i = r.ruleIndex, o = i >= 0 && i < e.length ? e[i] : "" + i;
        s += o;
      }
      r.parentCtx !== null && (e !== null || !r.parentCtx.isEmpty()) && (s += " "), r = r.parentCtx;
    }
    return s += "]", s;
  }
}
class xe {
  constructor(e) {
    this.cachedHashCode = e;
  }
  isEmpty() {
    return this === xe.EMPTY;
  }
  hasEmptyPath() {
    return this.getReturnState(this.length - 1) === xe.EMPTY_RETURN_STATE;
  }
  hashCode() {
    return this.cachedHashCode;
  }
  updateHashCode(e) {
    e.update(this.cachedHashCode);
  }
}
xe.EMPTY = null;
xe.EMPTY_RETURN_STATE = 2147483647;
xe.globalNodeCount = 1;
xe.id = xe.globalNodeCount;
class dn extends xe {
  constructor(e, n) {
    const r = new Ft();
    r.update(e, n);
    const s = r.finish();
    return super(s), this.parents = e, this.returnStates = n, this;
  }
  isEmpty() {
    return this.returnStates[0] === xe.EMPTY_RETURN_STATE;
  }
  getParent(e) {
    return this.parents[e];
  }
  getReturnState(e) {
    return this.returnStates[e];
  }
  equals(e) {
    return this === e ? !0 : e instanceof dn ? this.hashCode() !== e.hashCode() ? !1 : Yr(this.returnStates, e.returnStates) && Yr(this.parents, e.parents) : !1;
  }
  toString() {
    if (this.isEmpty())
      return "[]";
    {
      let e = "[";
      for (let n = 0; n < this.returnStates.length; n++) {
        if (n > 0 && (e = e + ", "), this.returnStates[n] === xe.EMPTY_RETURN_STATE) {
          e = e + "$";
          continue;
        }
        e = e + this.returnStates[n], this.parents[n] !== null ? e = e + " " + this.parents[n] : e = e + "null";
      }
      return e + "]";
    }
  }
  get length() {
    return this.returnStates.length;
  }
}
class mt extends xe {
  constructor(e, n) {
    let r = 0;
    const s = new Ft();
    e !== null ? s.update(e, n) : s.update(1), r = s.finish(), super(r), this.parentCtx = e, this.returnState = n;
  }
  getParent(e) {
    return this.parentCtx;
  }
  getReturnState(e) {
    return this.returnState;
  }
  equals(e) {
    return this === e ? !0 : e instanceof mt ? this.hashCode() !== e.hashCode() || this.returnState !== e.returnState ? !1 : this.parentCtx == null ? e.parentCtx == null : this.parentCtx.equals(e.parentCtx) : !1;
  }
  toString() {
    const e = this.parentCtx === null ? "" : this.parentCtx.toString();
    return e.length === 0 ? this.returnState === xe.EMPTY_RETURN_STATE ? "$" : "" + this.returnState : "" + this.returnState + " " + e;
  }
  get length() {
    return 1;
  }
  static create(e, n) {
    return n === xe.EMPTY_RETURN_STATE && e === null ? xe.EMPTY : new mt(e, n);
  }
}
class ta extends mt {
  constructor() {
    super(null, xe.EMPTY_RETURN_STATE);
  }
  isEmpty() {
    return !0;
  }
  getParent(e) {
    return null;
  }
  getReturnState(e) {
    return this.returnState;
  }
  equals(e) {
    return this === e;
  }
  toString() {
    return "$";
  }
}
xe.EMPTY = new ta();
const gs = "h-";
class ii {
  constructor(e, n) {
    this.data = {}, this.hashFunction = e || B2, this.equalsFunction = n || U2;
  }
  set(e, n) {
    const r = gs + this.hashFunction(e);
    if (r in this.data) {
      const s = this.data[r];
      for (let i = 0; i < s.length; i++) {
        const o = s[i];
        if (this.equalsFunction(e, o.key)) {
          const a = o.value;
          return o.value = n, a;
        }
      }
      return s.push({ key: e, value: n }), n;
    } else
      return this.data[r] = [{ key: e, value: n }], n;
  }
  containsKey(e) {
    const n = gs + this.hashFunction(e);
    if (n in this.data) {
      const r = this.data[n];
      for (let s = 0; s < r.length; s++) {
        const i = r[s];
        if (this.equalsFunction(e, i.key))
          return !0;
      }
    }
    return !1;
  }
  get(e) {
    const n = gs + this.hashFunction(e);
    if (n in this.data) {
      const r = this.data[n];
      for (let s = 0; s < r.length; s++) {
        const i = r[s];
        if (this.equalsFunction(e, i.key))
          return i.value;
      }
    }
    return null;
  }
  entries() {
    return Object.keys(this.data).filter((e) => e.startsWith(gs)).flatMap((e) => this.data[e], this);
  }
  getKeys() {
    return this.entries().map((e) => e.key);
  }
  getValues() {
    return this.entries().map((e) => e.value);
  }
  toString() {
    return "[" + this.entries().map((e) => "{" + e.key + ":" + e.value + "}").join(", ") + "]";
  }
  get length() {
    return Object.keys(this.data).filter((e) => e.startsWith(gs)).map((e) => this.data[e].length, this).reduce((e, n) => e + n, 0);
  }
}
function fl(t, e) {
  if (e == null && (e = Kr.EMPTY), e.parentCtx === null || e === Kr.EMPTY)
    return xe.EMPTY;
  const n = fl(t, e.parentCtx), r = t.states[e.invokingState].transitions[0];
  return mt.create(n, r.followState.stateNumber);
}
function j2(t, e, n) {
  if (t.isEmpty())
    return t;
  let r = n.get(t) || null;
  if (r !== null)
    return r;
  if (r = e.get(t), r !== null)
    return n.set(t, r), r;
  let s = !1, i = [];
  for (let a = 0; a < i.length; a++) {
    const l = j2(t.getParent(a), e, n);
    if (s || l !== t.getParent(a)) {
      if (!s) {
        i = [];
        for (let c = 0; c < t.length; c++)
          i[c] = t.getParent(c);
        s = !0;
      }
      i[a] = l;
    }
  }
  if (!s)
    return e.add(t), n.set(t, t), t;
  let o = null;
  return i.length === 0 ? o = xe.EMPTY : i.length === 1 ? o = mt.create(i[0], t.getReturnState(0)) : o = new dn(i, t.returnStates), e.add(o), n.set(o, o), n.set(t, o), o;
}
function gl(t, e, n, r) {
  if (t === e)
    return t;
  if (t instanceof mt && e instanceof mt)
    return C6(t, e, n, r);
  if (n) {
    if (t instanceof ta)
      return t;
    if (e instanceof ta)
      return e;
  }
  return t instanceof mt && (t = new dn([t.getParent()], [t.returnState])), e instanceof mt && (e = new dn([e.getParent()], [e.returnState])), _6(t, e, n, r);
}
function _6(t, e, n, r) {
  if (r !== null) {
    let u = r.get(t, e);
    if (u !== null || (u = r.get(e, t), u !== null))
      return u;
  }
  let s = 0, i = 0, o = 0, a = [], l = [];
  for (; s < t.returnStates.length && i < e.returnStates.length; ) {
    const u = t.parents[s], d = e.parents[i];
    if (t.returnStates[s] === e.returnStates[i]) {
      const p = t.returnStates[s];
      p === xe.EMPTY_RETURN_STATE && u === null && d === null || u !== null && d !== null && u === d ? (l[o] = u, a[o] = p) : (l[o] = gl(u, d, n, r), a[o] = p), s += 1, i += 1;
    } else
      t.returnStates[s] < e.returnStates[i] ? (l[o] = u, a[o] = t.returnStates[s], s += 1) : (l[o] = d, a[o] = e.returnStates[i], i += 1);
    o += 1;
  }
  if (s < t.returnStates.length)
    for (let u = s; u < t.returnStates.length; u++)
      l[o] = t.parents[u], a[o] = t.returnStates[u], o += 1;
  else
    for (let u = i; u < e.returnStates.length; u++)
      l[o] = e.parents[u], a[o] = e.returnStates[u], o += 1;
  if (o < l.length) {
    if (o === 1) {
      const u = mt.create(
        l[0],
        a[0]
      );
      return r !== null && r.set(t, e, u), u;
    }
    l = l.slice(0, o), a = a.slice(0, o);
  }
  const c = new dn(l, a);
  return c === t ? (r !== null && r.set(t, e, t), t) : c === e ? (r !== null && r.set(t, e, e), e) : (w6(l), r !== null && r.set(t, e, c), c);
}
function w6(t) {
  const e = new ii();
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    e.containsKey(r) || e.set(r, r);
  }
  for (let n = 0; n < t.length; n++)
    t[n] = e.get(t[n]);
}
function C6(t, e, n, r) {
  if (r !== null) {
    let i = r.get(t, e);
    if (i !== null || (i = r.get(e, t), i !== null))
      return i;
  }
  const s = E6(t, e, n);
  if (s !== null)
    return r !== null && r.set(t, e, s), s;
  if (t.returnState === e.returnState) {
    const i = gl(t.parentCtx, e.parentCtx, n, r);
    if (i === t.parentCtx)
      return t;
    if (i === e.parentCtx)
      return e;
    const o = mt.create(i, t.returnState);
    return r !== null && r.set(t, e, o), o;
  } else {
    let i = null;
    if ((t === e || t.parentCtx !== null && t.parentCtx === e.parentCtx) && (i = t.parentCtx), i !== null) {
      const c = [t.returnState, e.returnState];
      t.returnState > e.returnState && (c[0] = e.returnState, c[1] = t.returnState);
      const u = [i, i], d = new dn(u, c);
      return r !== null && r.set(t, e, d), d;
    }
    const o = [t.returnState, e.returnState];
    let a = [t.parentCtx, e.parentCtx];
    t.returnState > e.returnState && (o[0] = e.returnState, o[1] = t.returnState, a = [e.parentCtx, t.parentCtx]);
    const l = new dn(a, o);
    return r !== null && r.set(t, e, l), l;
  }
}
function E6(t, e, n) {
  if (n) {
    if (t === xe.EMPTY || e === xe.EMPTY)
      return xe.EMPTY;
  } else {
    if (t === xe.EMPTY && e === xe.EMPTY)
      return xe.EMPTY;
    if (t === xe.EMPTY) {
      const r = [
        e.returnState,
        xe.EMPTY_RETURN_STATE
      ], s = [e.parentCtx, null];
      return new dn(s, r);
    } else if (e === xe.EMPTY) {
      const r = [t.returnState, xe.EMPTY_RETURN_STATE], s = [t.parentCtx, null];
      return new dn(s, r);
    }
  }
  return null;
}
class ln {
  constructor() {
    this.data = [];
  }
  add(e) {
    this.data[e] = !0;
  }
  or(e) {
    Object.keys(e.data).map((n) => this.add(n), this);
  }
  remove(e) {
    delete this.data[e];
  }
  has(e) {
    return this.data[e] === !0;
  }
  values() {
    return Object.keys(this.data);
  }
  minValue() {
    return Math.min.apply(null, this.values());
  }
  hashCode() {
    return Ft.hashStuff(this.values());
  }
  equals(e) {
    return e instanceof ln && Yr(this.data, e.data);
  }
  toString() {
    return "{" + this.values().join(", ") + "}";
  }
  get length() {
    return this.values().length;
  }
}
class Qr {
  constructor(e) {
    this.atn = e;
  }
  getDecisionLookahead(e) {
    if (e === null)
      return null;
    const n = e.transitions.length, r = [];
    for (let s = 0; s < n; s++) {
      r[s] = new Gt();
      const i = new Pt(), o = !1;
      this._LOOK(
        e.transition(s).target,
        null,
        xe.EMPTY,
        r[s],
        i,
        new ln(),
        o,
        !1
      ), (r[s].length === 0 || r[s].contains(Qr.HIT_PRED)) && (r[s] = null);
    }
    return r;
  }
  LOOK(e, n, r) {
    const s = new Gt(), i = !0;
    r = r || null;
    const o = r !== null ? fl(e.atn, r) : null;
    return this._LOOK(e, n, o, s, new Pt(), new ln(), i, !0), s;
  }
  _LOOK(e, n, r, s, i, o, a, l) {
    const c = new Ye({ state: e, alt: 0, context: r }, null);
    if (!i.has(c)) {
      if (i.add(c), e === n) {
        if (r === null) {
          s.addOne(M.EPSILON);
          return;
        } else if (r.isEmpty() && l) {
          s.addOne(M.EOF);
          return;
        }
      }
      if (e instanceof gt) {
        if (r === null) {
          s.addOne(M.EPSILON);
          return;
        } else if (r.isEmpty() && l) {
          s.addOne(M.EOF);
          return;
        }
        if (r !== xe.EMPTY) {
          const u = o.has(e.ruleIndex);
          try {
            o.remove(e.ruleIndex);
            for (let d = 0; d < r.length; d++) {
              const p = this.atn.states[r.getReturnState(d)];
              this._LOOK(p, n, r.getParent(d), s, i, o, a, l);
            }
          } finally {
            u && o.add(e.ruleIndex);
          }
          return;
        }
      }
      for (let u = 0; u < e.transitions.length; u++) {
        const d = e.transitions[u];
        if (d.constructor === Xi) {
          if (o.has(d.target.ruleIndex))
            continue;
          const p = mt.create(r, d.followState.stateNumber);
          try {
            o.add(d.target.ruleIndex), this._LOOK(d.target, n, p, s, i, o, a, l);
          } finally {
            o.remove(d.target.ruleIndex);
          }
        } else if (d instanceof pl)
          a ? this._LOOK(d.target, n, r, s, i, o, a, l) : s.addOne(Qr.HIT_PRED);
        else if (d.isEpsilon)
          this._LOOK(d.target, n, r, s, i, o, a, l);
        else if (d.constructor === V2)
          s.addRange(M.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
        else {
          let p = d.label;
          p !== null && (d instanceof dl && (p = p.complement(M.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType)), s.addSet(p));
        }
      }
    }
  }
}
Qr.HIT_PRED = M.INVALID_TYPE;
class je {
  constructor(e, n) {
    this.grammarType = e, this.maxTokenType = n, this.states = [], this.decisionToState = [], this.ruleToStartState = [], this.ruleToStopState = null, this.modeNameToStartState = {}, this.ruleToTokenType = null, this.lexerActions = null, this.modeToStartState = [];
  }
  nextTokensInContext(e, n) {
    return new Qr(this).LOOK(e, null, n);
  }
  nextTokensNoContext(e) {
    return e.nextTokenWithinRule !== null || (e.nextTokenWithinRule = this.nextTokensInContext(e, null), e.nextTokenWithinRule.readOnly = !0), e.nextTokenWithinRule;
  }
  nextTokens(e, n) {
    return n === void 0 ? this.nextTokensNoContext(e) : this.nextTokensInContext(e, n);
  }
  addState(e) {
    e !== null && (e.atn = this, e.stateNumber = this.states.length), this.states.push(e);
  }
  removeState(e) {
    this.states[e.stateNumber] = null;
  }
  defineDecisionState(e) {
    return this.decisionToState.push(e), e.decision = this.decisionToState.length - 1, e.decision;
  }
  getDecisionState(e) {
    return this.decisionToState.length === 0 ? null : this.decisionToState[e];
  }
  getExpectedTokens(e, n) {
    if (e < 0 || e >= this.states.length)
      throw "Invalid state number.";
    const r = this.states[e];
    let s = this.nextTokens(r);
    if (!s.contains(M.EPSILON))
      return s;
    const i = new Gt();
    for (i.addSet(s), i.removeOne(M.EPSILON); n !== null && n.invokingState >= 0 && s.contains(M.EPSILON); ) {
      const o = this.states[n.invokingState].transitions[0];
      s = this.nextTokens(o.followState), i.addSet(s), i.removeOne(M.EPSILON), n = n.parentCtx;
    }
    return s.contains(M.EPSILON) && i.addOne(M.EOF), i;
  }
}
je.INVALID_ALT_NUMBER = 0;
const Ii = {
  LEXER: 0,
  PARSER: 1
};
class b0 extends J {
  constructor() {
    super(), this.stateType = J.BASIC;
  }
}
class rs extends J {
  constructor() {
    return super(), this.decision = -1, this.nonGreedy = !1, this;
  }
}
class Gr extends rs {
  constructor() {
    return super(), this.endState = null, this;
  }
}
class y1 extends J {
  constructor() {
    return super(), this.stateType = J.BLOCK_END, this.startState = null, this;
  }
}
class Ir extends J {
  constructor() {
    return super(), this.stateType = J.LOOP_END, this.loopBackState = null, this;
  }
}
class _0 extends J {
  constructor() {
    return super(), this.stateType = J.RULE_START, this.stopState = null, this.isPrecedenceRule = !1, this;
  }
}
class k6 extends rs {
  constructor() {
    return super(), this.stateType = J.TOKEN_START, this;
  }
}
class w0 extends rs {
  constructor() {
    return super(), this.stateType = J.PLUS_LOOP_BACK, this;
  }
}
class v1 extends J {
  constructor() {
    return super(), this.stateType = J.STAR_LOOP_BACK, this;
  }
}
class er extends rs {
  constructor() {
    return super(), this.stateType = J.STAR_LOOP_ENTRY, this.loopBackState = null, this.isPrecedenceDecision = null, this;
  }
}
class b1 extends Gr {
  constructor() {
    return super(), this.stateType = J.PLUS_BLOCK_START, this.loopBackState = null, this;
  }
}
class _1 extends Gr {
  constructor() {
    return super(), this.stateType = J.STAR_BLOCK_START, this;
  }
}
class C0 extends Gr {
  constructor() {
    return super(), this.stateType = J.BLOCK_START, this;
  }
}
class Hi extends K {
  constructor(e, n) {
    super(e), this.label_ = n, this.label = this.makeLabel(), this.serializationType = K.ATOM;
  }
  makeLabel() {
    const e = new Gt();
    return e.addOne(this.label_), e;
  }
  matches(e, n, r) {
    return this.label_ === e;
  }
  toString() {
    return this.label_;
  }
}
class E0 extends K {
  constructor(e, n, r) {
    super(e), this.serializationType = K.RANGE, this.start = n, this.stop = r, this.label = this.makeLabel();
  }
  makeLabel() {
    const e = new Gt();
    return e.addRange(this.start, this.stop), e;
  }
  matches(e, n, r) {
    return e >= this.start && e <= this.stop;
  }
  toString() {
    return "'" + String.fromCharCode(this.start) + "'..'" + String.fromCharCode(this.stop) + "'";
  }
}
class $2 extends K {
  constructor(e, n, r, s) {
    super(e), this.serializationType = K.ACTION, this.ruleIndex = n, this.actionIndex = r === void 0 ? -1 : r, this.isCtxDependent = s === void 0 ? !1 : s, this.isEpsilon = !0;
  }
  matches(e, n, r) {
    return !1;
  }
  toString() {
    return "action_" + this.ruleIndex + ":" + this.actionIndex;
  }
}
class ms extends K {
  constructor(e, n) {
    super(e), this.serializationType = K.EPSILON, this.isEpsilon = !0, this.outermostPrecedenceReturn = n;
  }
  matches(e, n, r) {
    return !1;
  }
  toString() {
    return "epsilon";
  }
}
class Fo extends Ie {
  constructor(e, n, r) {
    super(), this.ruleIndex = e === void 0 ? -1 : e, this.predIndex = n === void 0 ? -1 : n, this.isCtxDependent = r === void 0 ? !1 : r;
  }
  evaluate(e, n) {
    const r = this.isCtxDependent ? n : null;
    return e.sempred(r, this.ruleIndex, this.predIndex);
  }
  updateHashCode(e) {
    e.update(this.ruleIndex, this.predIndex, this.isCtxDependent);
  }
  equals(e) {
    return this === e ? !0 : e instanceof Fo ? this.ruleIndex === e.ruleIndex && this.predIndex === e.predIndex && this.isCtxDependent === e.isCtxDependent : !1;
  }
  toString() {
    return "{" + this.ruleIndex + ":" + this.predIndex + "}?";
  }
}
Ie.NONE = new Fo();
class q2 extends pl {
  constructor(e, n, r, s) {
    super(e), this.serializationType = K.PREDICATE, this.ruleIndex = n, this.predIndex = r, this.isCtxDependent = s, this.isEpsilon = !0;
  }
  matches(e, n, r) {
    return !1;
  }
  getPredicate() {
    return new Fo(this.ruleIndex, this.predIndex, this.isCtxDependent);
  }
  toString() {
    return "pred_" + this.ruleIndex + ":" + this.predIndex;
  }
}
class zo extends Ie {
  constructor(e) {
    super(), this.precedence = e === void 0 ? 0 : e;
  }
  evaluate(e, n) {
    return e.precpred(n, this.precedence);
  }
  evalPrecedence(e, n) {
    return e.precpred(n, this.precedence) ? Ie.NONE : null;
  }
  compareTo(e) {
    return this.precedence - e.precedence;
  }
  updateHashCode(e) {
    e.update(this.precedence);
  }
  equals(e) {
    return this === e ? !0 : e instanceof zo ? this.precedence === e.precedence : !1;
  }
  toString() {
    return "{" + this.precedence + ">=prec}?";
  }
}
Ie.PrecedencePredicate = zo;
class T6 extends pl {
  constructor(e, n) {
    super(e), this.serializationType = K.PRECEDENCE, this.precedence = n, this.isEpsilon = !0;
  }
  matches(e, n, r) {
    return !1;
  }
  getPredicate() {
    return new zo(this.precedence);
  }
  toString() {
    return this.precedence + " >= _p";
  }
}
class Hs {
  constructor(e) {
    e === void 0 && (e = null), this.readOnly = !1, this.verifyATN = e === null ? !0 : e.verifyATN, this.generateRuleBypassTransitions = e === null ? !1 : e.generateRuleBypassTransitions;
  }
}
Hs.defaultOptions = new Hs();
Hs.defaultOptions.readOnly = !0;
const ct = {
  CHANNEL: 0,
  CUSTOM: 1,
  MODE: 2,
  MORE: 3,
  POP_MODE: 4,
  PUSH_MODE: 5,
  SKIP: 6,
  TYPE: 7
};
class In {
  constructor(e) {
    this.actionType = e, this.isPositionDependent = !1;
  }
  hashCode() {
    const e = new Ft();
    return this.updateHashCode(e), e.finish();
  }
  updateHashCode(e) {
    e.update(this.actionType);
  }
  equals(e) {
    return this === e;
  }
}
class na extends In {
  constructor() {
    super(ct.SKIP);
  }
  execute(e) {
    e.skip();
  }
  toString() {
    return "skip";
  }
}
na.INSTANCE = new na();
class ml extends In {
  constructor(e) {
    super(ct.CHANNEL), this.channel = e;
  }
  execute(e) {
    e._channel = this.channel;
  }
  updateHashCode(e) {
    e.update(this.actionType, this.channel);
  }
  equals(e) {
    return this === e ? !0 : e instanceof ml ? this.channel === e.channel : !1;
  }
  toString() {
    return "channel(" + this.channel + ")";
  }
}
class xl extends In {
  constructor(e, n) {
    super(ct.CUSTOM), this.ruleIndex = e, this.actionIndex = n, this.isPositionDependent = !0;
  }
  execute(e) {
    e.action(null, this.ruleIndex, this.actionIndex);
  }
  updateHashCode(e) {
    e.update(this.actionType, this.ruleIndex, this.actionIndex);
  }
  equals(e) {
    return this === e ? !0 : e instanceof xl ? this.ruleIndex === e.ruleIndex && this.actionIndex === e.actionIndex : !1;
  }
}
class ra extends In {
  constructor() {
    super(ct.MORE);
  }
  execute(e) {
    e.more();
  }
  toString() {
    return "more";
  }
}
ra.INSTANCE = new ra();
class Ll extends In {
  constructor(e) {
    super(ct.TYPE), this.type = e;
  }
  execute(e) {
    e.type = this.type;
  }
  updateHashCode(e) {
    e.update(this.actionType, this.type);
  }
  equals(e) {
    return this === e ? !0 : e instanceof Ll ? this.type === e.type : !1;
  }
  toString() {
    return "type(" + this.type + ")";
  }
}
class yl extends In {
  constructor(e) {
    super(ct.PUSH_MODE), this.mode = e;
  }
  execute(e) {
    e.pushMode(this.mode);
  }
  updateHashCode(e) {
    e.update(this.actionType, this.mode);
  }
  equals(e) {
    return this === e ? !0 : e instanceof yl ? this.mode === e.mode : !1;
  }
  toString() {
    return "pushMode(" + this.mode + ")";
  }
}
class sa extends In {
  constructor() {
    super(ct.POP_MODE);
  }
  execute(e) {
    e.popMode();
  }
  toString() {
    return "popMode";
  }
}
sa.INSTANCE = new sa();
class vl extends In {
  constructor(e) {
    super(ct.MODE), this.mode = e;
  }
  execute(e) {
    e.mode(this.mode);
  }
  updateHashCode(e) {
    e.update(this.actionType, this.mode);
  }
  equals(e) {
    return this === e ? !0 : e instanceof vl ? this.mode === e.mode : !1;
  }
  toString() {
    return "mode(" + this.mode + ")";
  }
}
const w1 = 4;
function Oi(t, e) {
  const n = [];
  return n[t - 1] = e, n.map(function(r) {
    return e;
  });
}
class Z2 {
  constructor(e) {
    e == null && (e = Hs.defaultOptions), this.deserializationOptions = e, this.stateFactories = null, this.actionFactories = null;
  }
  deserialize(e) {
    const n = this.reset(e);
    this.checkVersion(n), n && this.skipUUID();
    const r = this.readATN();
    this.readStates(r, n), this.readRules(r, n), this.readModes(r);
    const s = [];
    return this.readSets(r, s, this.readInt.bind(this)), n && this.readSets(r, s, this.readInt32.bind(this)), this.readEdges(r, s), this.readDecisions(r), this.readLexerActions(r, n), this.markPrecedenceDecisions(r), this.verifyATN(r), this.deserializationOptions.generateRuleBypassTransitions && r.grammarType === Ii.PARSER && (this.generateRuleBypassTransitions(r), this.verifyATN(r)), r;
  }
  reset(e) {
    if ((e.charCodeAt ? e.charCodeAt(0) : e[0]) === w1 - 1) {
      const n = function(s) {
        const i = s.charCodeAt(0);
        return i > 1 ? i - 2 : i + 65534;
      }, r = e.split("").map(n);
      return r[0] = e.charCodeAt(0), this.data = r, this.pos = 0, !0;
    } else
      return this.data = e, this.pos = 0, !1;
  }
  skipUUID() {
    let e = 0;
    for (; e++ < 8; )
      this.readInt();
  }
  checkVersion(e) {
    const n = this.readInt();
    if (!e && n !== w1)
      throw "Could not deserialize ATN with version " + n + " (expected " + w1 + ").";
  }
  readATN() {
    const e = this.readInt(), n = this.readInt();
    return new je(e, n);
  }
  readStates(e, n) {
    let r, s, i;
    const o = [], a = [], l = this.readInt();
    for (let d = 0; d < l; d++) {
      const p = this.readInt();
      if (p === J.INVALID_TYPE) {
        e.addState(null);
        continue;
      }
      let g = this.readInt();
      n && g === 65535 && (g = -1);
      const _ = this.stateFactory(p, g);
      if (p === J.LOOP_END) {
        const k = this.readInt();
        o.push([_, k]);
      } else if (_ instanceof Gr) {
        const k = this.readInt();
        a.push([_, k]);
      }
      e.addState(_);
    }
    for (r = 0; r < o.length; r++)
      s = o[r], s[0].loopBackState = e.states[s[1]];
    for (r = 0; r < a.length; r++)
      s = a[r], s[0].endState = e.states[s[1]];
    let c = this.readInt();
    for (r = 0; r < c; r++)
      i = this.readInt(), e.states[i].nonGreedy = !0;
    let u = this.readInt();
    for (r = 0; r < u; r++)
      i = this.readInt(), e.states[i].isPrecedenceRule = !0;
  }
  readRules(e, n) {
    let r;
    const s = this.readInt();
    for (e.grammarType === Ii.LEXER && (e.ruleToTokenType = Oi(s, 0)), e.ruleToStartState = Oi(s, 0), r = 0; r < s; r++) {
      const i = this.readInt();
      if (e.ruleToStartState[r] = e.states[i], e.grammarType === Ii.LEXER) {
        let o = this.readInt();
        n && o === 65535 && (o = M.EOF), e.ruleToTokenType[r] = o;
      }
    }
    for (e.ruleToStopState = Oi(s, 0), r = 0; r < e.states.length; r++) {
      const i = e.states[r];
      i instanceof gt && (e.ruleToStopState[i.ruleIndex] = i, e.ruleToStartState[i.ruleIndex].stopState = i);
    }
  }
  readModes(e) {
    const n = this.readInt();
    for (let r = 0; r < n; r++) {
      let s = this.readInt();
      e.modeToStartState.push(e.states[s]);
    }
  }
  readSets(e, n, r) {
    const s = this.readInt();
    for (let i = 0; i < s; i++) {
      const o = new Gt();
      n.push(o);
      const a = this.readInt();
      this.readInt() !== 0 && o.addOne(-1);
      for (let l = 0; l < a; l++) {
        const c = r(), u = r();
        o.addRange(c, u);
      }
    }
  }
  readEdges(e, n) {
    let r, s, i, o, a;
    const l = this.readInt();
    for (r = 0; r < l; r++) {
      const c = this.readInt(), u = this.readInt(), d = this.readInt(), p = this.readInt(), g = this.readInt(), _ = this.readInt();
      o = this.edgeFactory(e, d, c, u, p, g, _, n), e.states[c].addTransition(o);
    }
    for (r = 0; r < e.states.length; r++)
      for (i = e.states[r], s = 0; s < i.transitions.length; s++) {
        const c = i.transitions[s];
        if (!(c instanceof Xi))
          continue;
        let u = -1;
        e.ruleToStartState[c.target.ruleIndex].isPrecedenceRule && c.precedence === 0 && (u = c.target.ruleIndex), o = new ms(c.followState, u), e.ruleToStopState[c.target.ruleIndex].addTransition(o);
      }
    for (r = 0; r < e.states.length; r++) {
      if (i = e.states[r], i instanceof Gr) {
        if (i.endState === null || i.endState.startState !== null)
          throw "IllegalState";
        i.endState.startState = i;
      }
      if (i instanceof w0)
        for (s = 0; s < i.transitions.length; s++)
          a = i.transitions[s].target, a instanceof b1 && (a.loopBackState = i);
      else if (i instanceof v1)
        for (s = 0; s < i.transitions.length; s++)
          a = i.transitions[s].target, a instanceof er && (a.loopBackState = i);
    }
  }
  readDecisions(e) {
    const n = this.readInt();
    for (let r = 0; r < n; r++) {
      const s = this.readInt(), i = e.states[s];
      e.decisionToState.push(i), i.decision = r;
    }
  }
  readLexerActions(e, n) {
    if (e.grammarType === Ii.LEXER) {
      const r = this.readInt();
      e.lexerActions = Oi(r, null);
      for (let s = 0; s < r; s++) {
        const i = this.readInt();
        let o = this.readInt();
        n && o === 65535 && (o = -1);
        let a = this.readInt();
        n && a === 65535 && (a = -1), e.lexerActions[s] = this.lexerActionFactory(i, o, a);
      }
    }
  }
  generateRuleBypassTransitions(e) {
    let n;
    const r = e.ruleToStartState.length;
    for (n = 0; n < r; n++)
      e.ruleToTokenType[n] = e.maxTokenType + n + 1;
    for (n = 0; n < r; n++)
      this.generateRuleBypassTransition(e, n);
  }
  generateRuleBypassTransition(e, n) {
    let r, s;
    const i = new C0();
    i.ruleIndex = n, e.addState(i);
    const o = new y1();
    o.ruleIndex = n, e.addState(o), i.endState = o, e.defineDecisionState(i), o.startState = i;
    let a = null, l = null;
    if (e.ruleToStartState[n].isPrecedenceRule) {
      for (l = null, r = 0; r < e.states.length; r++)
        if (s = e.states[r], this.stateIsEndStateFor(s, n)) {
          l = s, a = s.loopBackState.transitions[0];
          break;
        }
      if (a === null)
        throw "Couldn't identify final state of the precedence rule prefix section.";
    } else
      l = e.ruleToStopState[n];
    for (r = 0; r < e.states.length; r++) {
      s = e.states[r];
      for (let p = 0; p < s.transitions.length; p++) {
        const g = s.transitions[p];
        g !== a && g.target === l && (g.target = o);
      }
    }
    const c = e.ruleToStartState[n], u = c.transitions.length;
    for (; u > 0; )
      i.addTransition(c.transitions[u - 1]), c.transitions = c.transitions.slice(-1);
    e.ruleToStartState[n].addTransition(new ms(i)), o.addTransition(new ms(l));
    const d = new b0();
    e.addState(d), d.addTransition(new Hi(o, e.ruleToTokenType[n])), i.addTransition(new ms(d));
  }
  stateIsEndStateFor(e, n) {
    if (e.ruleIndex !== n || !(e instanceof er))
      return null;
    const r = e.transitions[e.transitions.length - 1].target;
    return r instanceof Ir && r.epsilonOnlyTransitions && r.transitions[0].target instanceof gt ? e : null;
  }
  markPrecedenceDecisions(e) {
    for (let n = 0; n < e.states.length; n++) {
      const r = e.states[n];
      if (r instanceof er && e.ruleToStartState[r.ruleIndex].isPrecedenceRule) {
        const s = r.transitions[r.transitions.length - 1].target;
        s instanceof Ir && s.epsilonOnlyTransitions && s.transitions[0].target instanceof gt && (r.isPrecedenceDecision = !0);
      }
    }
  }
  verifyATN(e) {
    if (this.deserializationOptions.verifyATN)
      for (let n = 0; n < e.states.length; n++) {
        const r = e.states[n];
        if (r !== null)
          if (this.checkCondition(r.epsilonOnlyTransitions || r.transitions.length <= 1), r instanceof b1)
            this.checkCondition(r.loopBackState !== null);
          else if (r instanceof er)
            if (this.checkCondition(r.loopBackState !== null), this.checkCondition(r.transitions.length === 2), r.transitions[0].target instanceof _1)
              this.checkCondition(r.transitions[1].target instanceof Ir), this.checkCondition(!r.nonGreedy);
            else if (r.transitions[0].target instanceof Ir)
              this.checkCondition(r.transitions[1].target instanceof _1), this.checkCondition(r.nonGreedy);
            else
              throw "IllegalState";
          else
            r instanceof v1 ? (this.checkCondition(r.transitions.length === 1), this.checkCondition(r.transitions[0].target instanceof er)) : r instanceof Ir ? this.checkCondition(r.loopBackState !== null) : r instanceof _0 ? this.checkCondition(r.stopState !== null) : r instanceof Gr ? this.checkCondition(r.endState !== null) : r instanceof y1 ? this.checkCondition(r.startState !== null) : r instanceof rs ? this.checkCondition(r.transitions.length <= 1 || r.decision >= 0) : this.checkCondition(r.transitions.length <= 1 || r instanceof gt);
      }
  }
  checkCondition(e, n) {
    if (!e)
      throw n == null && (n = "IllegalState"), n;
  }
  readInt() {
    return this.data[this.pos++];
  }
  readInt32() {
    const e = this.readInt(), n = this.readInt();
    return e | n << 16;
  }
  edgeFactory(e, n, r, s, i, o, a, l) {
    const c = e.states[s];
    switch (n) {
      case K.EPSILON:
        return new ms(c);
      case K.RANGE:
        return a !== 0 ? new E0(c, M.EOF, o) : new E0(c, i, o);
      case K.RULE:
        return new Xi(e.states[i], o, a, c);
      case K.PREDICATE:
        return new q2(c, i, o, a !== 0);
      case K.PRECEDENCE:
        return new T6(c, i);
      case K.ATOM:
        return a !== 0 ? new Hi(c, M.EOF) : new Hi(c, i);
      case K.ACTION:
        return new $2(c, i, o, a !== 0);
      case K.SET:
        return new hl(c, l[i]);
      case K.NOT_SET:
        return new dl(c, l[i]);
      case K.WILDCARD:
        return new V2(c);
      default:
        throw "The specified transition type: " + n + " is not valid.";
    }
  }
  stateFactory(e, n) {
    if (this.stateFactories === null) {
      const r = [];
      r[J.INVALID_TYPE] = null, r[J.BASIC] = () => new b0(), r[J.RULE_START] = () => new _0(), r[J.BLOCK_START] = () => new C0(), r[J.PLUS_BLOCK_START] = () => new b1(), r[J.STAR_BLOCK_START] = () => new _1(), r[J.TOKEN_START] = () => new k6(), r[J.RULE_STOP] = () => new gt(), r[J.BLOCK_END] = () => new y1(), r[J.STAR_LOOP_BACK] = () => new v1(), r[J.STAR_LOOP_ENTRY] = () => new er(), r[J.PLUS_LOOP_BACK] = () => new w0(), r[J.LOOP_END] = () => new Ir(), this.stateFactories = r;
    }
    if (e > this.stateFactories.length || this.stateFactories[e] === null)
      throw "The specified state type " + e + " is not valid.";
    {
      const r = this.stateFactories[e]();
      if (r !== null)
        return r.ruleIndex = n, r;
    }
  }
  lexerActionFactory(e, n, r) {
    if (this.actionFactories === null) {
      const s = [];
      s[ct.CHANNEL] = (i, o) => new ml(i), s[ct.CUSTOM] = (i, o) => new xl(i, o), s[ct.MODE] = (i, o) => new vl(i), s[ct.MORE] = (i, o) => ra.INSTANCE, s[ct.POP_MODE] = (i, o) => sa.INSTANCE, s[ct.PUSH_MODE] = (i, o) => new yl(i), s[ct.SKIP] = (i, o) => na.INSTANCE, s[ct.TYPE] = (i, o) => new Ll(i), this.actionFactories = s;
    }
    if (e > this.actionFactories.length || this.actionFactories[e] === null)
      throw "The specified lexer action type " + e + " is not valid.";
    return this.actionFactories[e](n, r);
  }
}
class Do {
  syntaxError(e, n, r, s, i, o) {
  }
  reportAmbiguity(e, n, r, s, i, o, a) {
  }
  reportAttemptingFullContext(e, n, r, s, i, o) {
  }
  reportContextSensitivity(e, n, r, s, i, o) {
  }
}
class ia extends Do {
  constructor() {
    super();
  }
  syntaxError(e, n, r, s, i, o) {
    console.error("line " + r + ":" + s + " " + i);
  }
}
ia.INSTANCE = new ia();
class A6 extends Do {
  constructor(e) {
    if (super(), e === null)
      throw "delegates";
    return this.delegates = e, this;
  }
  syntaxError(e, n, r, s, i, o) {
    this.delegates.map((a) => a.syntaxError(e, n, r, s, i, o));
  }
  reportAmbiguity(e, n, r, s, i, o, a) {
    this.delegates.map((l) => l.reportAmbiguity(e, n, r, s, i, o, a));
  }
  reportAttemptingFullContext(e, n, r, s, i, o) {
    this.delegates.map((a) => a.reportAttemptingFullContext(e, n, r, s, i, o));
  }
  reportContextSensitivity(e, n, r, s, i, o) {
    this.delegates.map((a) => a.reportContextSensitivity(e, n, r, s, i, o));
  }
}
class Bo {
  constructor() {
    this._listeners = [ia.INSTANCE], this._interp = null, this._stateNumber = -1;
  }
  checkVersion(e) {
    const n = "4.11.0";
    n !== e && console.log("ANTLR runtime and generated code versions disagree: " + n + "!=" + e);
  }
  addErrorListener(e) {
    this._listeners.push(e);
  }
  removeErrorListeners() {
    this._listeners = [];
  }
  getLiteralNames() {
    return Object.getPrototypeOf(this).constructor.literalNames || [];
  }
  getSymbolicNames() {
    return Object.getPrototypeOf(this).constructor.symbolicNames || [];
  }
  getTokenNames() {
    if (!this.tokenNames) {
      const e = this.getLiteralNames(), n = this.getSymbolicNames(), r = e.length > n.length ? e.length : n.length;
      this.tokenNames = [];
      for (let s = 0; s < r; s++)
        this.tokenNames[s] = e[s] || n[s] || "<INVALID";
    }
    return this.tokenNames;
  }
  getTokenTypeMap() {
    const e = this.getTokenNames();
    if (e === null)
      throw "The current recognizer does not provide a list of token names.";
    let n = this.tokenTypeMapCache[e];
    return n === void 0 && (n = e.reduce(function(r, s, i) {
      r[s] = i;
    }), n.EOF = M.EOF, this.tokenTypeMapCache[e] = n), n;
  }
  getRuleIndexMap() {
    const e = this.ruleNames;
    if (e === null)
      throw "The current recognizer does not provide a list of rule names.";
    let n = this.ruleIndexMapCache[e];
    return n === void 0 && (n = e.reduce(function(r, s, i) {
      r[s] = i;
    }), this.ruleIndexMapCache[e] = n), n;
  }
  getTokenType(e) {
    const n = this.getTokenTypeMap()[e];
    return n !== void 0 ? n : M.INVALID_TYPE;
  }
  getErrorHeader(e) {
    const n = e.getOffendingToken().line, r = e.getOffendingToken().column;
    return "line " + n + ":" + r;
  }
  getTokenErrorDisplay(e) {
    if (e === null)
      return "<no token>";
    let n = e.text;
    return n === null && (e.type === M.EOF ? n = "<EOF>" : n = "<" + e.type + ">"), n = n.replace(`
`, "\\n").replace("\r", "\\r").replace("	", "\\t"), "'" + n + "'";
  }
  getErrorListenerDispatch() {
    return new A6(this._listeners);
  }
  sempred(e, n, r) {
    return !0;
  }
  precpred(e, n) {
    return !0;
  }
  get state() {
    return this._stateNumber;
  }
  set state(e) {
    this._stateNumber = e;
  }
}
Bo.tokenTypeMapCache = {};
Bo.ruleIndexMapCache = {};
class Lr extends M {
  constructor(e, n, r, s, i) {
    super(), this.source = e !== void 0 ? e : Lr.EMPTY_SOURCE, this.type = n !== void 0 ? n : null, this.channel = r !== void 0 ? r : M.DEFAULT_CHANNEL, this.start = s !== void 0 ? s : -1, this.stop = i !== void 0 ? i : -1, this.tokenIndex = -1, this.source[0] !== null ? (this.line = e[0].line, this.column = e[0].column) : this.column = -1;
  }
  clone() {
    const e = new Lr(this.source, this.type, this.channel, this.start, this.stop);
    return e.tokenIndex = this.tokenIndex, e.line = this.line, e.column = this.column, e.text = this.text, e;
  }
  toString() {
    let e = this.text;
    return e !== null ? e = e.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : e = "<no text>", "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + e + "',<" + this.type + ">" + (this.channel > 0 ? ",channel=" + this.channel : "") + "," + this.line + ":" + this.column + "]";
  }
  get text() {
    if (this._text !== null)
      return this._text;
    const e = this.getInputStream();
    if (e === null)
      return null;
    const n = e.size;
    return this.start < n && this.stop < n ? e.getText(this.start, this.stop) : "<EOF>";
  }
  set text(e) {
    this._text = e;
  }
}
Lr.EMPTY_SOURCE = [null, null];
class S6 {
}
class oa extends S6 {
  constructor(e) {
    super(), this.copyText = e === void 0 ? !1 : e;
  }
  create(e, n, r, s, i, o, a, l) {
    const c = new Lr(e, n, s, i, o);
    return c.line = a, c.column = l, r !== null ? c.text = r : this.copyText && e[1] !== null && (c.text = e[1].getText(i, o)), c;
  }
  createThin(e, n) {
    const r = new Lr(null, e);
    return r.text = n, r;
  }
}
oa.DEFAULT = new oa();
class Qn extends Error {
  constructor(e) {
    super(e.message), Error.captureStackTrace && Error.captureStackTrace(this, Qn), this.message = e.message, this.recognizer = e.recognizer, this.input = e.input, this.ctx = e.ctx, this.offendingToken = null, this.offendingState = -1, this.recognizer !== null && (this.offendingState = this.recognizer.state);
  }
  getExpectedTokens() {
    return this.recognizer !== null ? this.recognizer.atn.getExpectedTokens(this.offendingState, this.ctx) : null;
  }
  toString() {
    return this.message;
  }
}
class bl extends Qn {
  constructor(e, n, r, s) {
    super({ message: "", recognizer: e, input: n, ctx: null }), this.startIndex = r, this.deadEndConfigs = s;
  }
  toString() {
    let e = "";
    return this.startIndex >= 0 && this.startIndex < this.input.size && (e = this.input.getText(new Re(this.startIndex, this.startIndex))), "LexerNoViableAltException" + e;
  }
}
class We extends Bo {
  constructor(e) {
    super(), this._input = e, this._factory = oa.DEFAULT, this._tokenFactorySourcePair = [this, e], this._interp = null, this._token = null, this._tokenStartCharIndex = -1, this._tokenStartLine = -1, this._tokenStartColumn = -1, this._hitEOF = !1, this._channel = M.DEFAULT_CHANNEL, this._type = M.INVALID_TYPE, this._modeStack = [], this._mode = We.DEFAULT_MODE, this._text = null;
  }
  reset() {
    this._input !== null && this._input.seek(0), this._token = null, this._type = M.INVALID_TYPE, this._channel = M.DEFAULT_CHANNEL, this._tokenStartCharIndex = -1, this._tokenStartColumn = -1, this._tokenStartLine = -1, this._text = null, this._hitEOF = !1, this._mode = We.DEFAULT_MODE, this._modeStack = [], this._interp.reset();
  }
  nextToken() {
    if (this._input === null)
      throw "nextToken requires a non-null input stream.";
    const e = this._input.mark();
    try {
      for (; ; ) {
        if (this._hitEOF)
          return this.emitEOF(), this._token;
        this._token = null, this._channel = M.DEFAULT_CHANNEL, this._tokenStartCharIndex = this._input.index, this._tokenStartColumn = this._interp.column, this._tokenStartLine = this._interp.line, this._text = null;
        let n = !1;
        for (; ; ) {
          this._type = M.INVALID_TYPE;
          let r = We.SKIP;
          try {
            r = this._interp.match(this._input, this._mode);
          } catch (s) {
            if (s instanceof Qn)
              this.notifyListeners(s), this.recover(s);
            else
              throw console.log(s.stack), s;
          }
          if (this._input.LA(1) === M.EOF && (this._hitEOF = !0), this._type === M.INVALID_TYPE && (this._type = r), this._type === We.SKIP) {
            n = !0;
            break;
          }
          if (this._type !== We.MORE)
            break;
        }
        if (!n)
          return this._token === null && this.emit(), this._token;
      }
    } finally {
      this._input.release(e);
    }
  }
  skip() {
    this._type = We.SKIP;
  }
  more() {
    this._type = We.MORE;
  }
  mode(e) {
    this._mode = e;
  }
  pushMode(e) {
    this._interp.debug && console.log("pushMode " + e), this._modeStack.push(this._mode), this.mode(e);
  }
  popMode() {
    if (this._modeStack.length === 0)
      throw "Empty Stack";
    return this._interp.debug && console.log("popMode back to " + this._modeStack.slice(0, -1)), this.mode(this._modeStack.pop()), this._mode;
  }
  emitToken(e) {
    this._token = e;
  }
  emit() {
    const e = this._factory.create(
      this._tokenFactorySourcePair,
      this._type,
      this._text,
      this._channel,
      this._tokenStartCharIndex,
      this.getCharIndex() - 1,
      this._tokenStartLine,
      this._tokenStartColumn
    );
    return this.emitToken(e), e;
  }
  emitEOF() {
    const e = this.column, n = this.line, r = this._factory.create(
      this._tokenFactorySourcePair,
      M.EOF,
      null,
      M.DEFAULT_CHANNEL,
      this._input.index,
      this._input.index - 1,
      n,
      e
    );
    return this.emitToken(r), r;
  }
  getCharIndex() {
    return this._input.index;
  }
  getAllTokens() {
    const e = [];
    let n = this.nextToken();
    for (; n.type !== M.EOF; )
      e.push(n), n = this.nextToken();
    return e;
  }
  notifyListeners(e) {
    const n = this._tokenStartCharIndex, r = this._input.index, s = this._input.getText(n, r), i = "token recognition error at: '" + this.getErrorDisplay(s) + "'";
    this.getErrorListenerDispatch().syntaxError(
      this,
      null,
      this._tokenStartLine,
      this._tokenStartColumn,
      i,
      e
    );
  }
  getErrorDisplay(e) {
    const n = [];
    for (let r = 0; r < e.length; r++)
      n.push(e[r]);
    return n.join("");
  }
  getErrorDisplayForChar(e) {
    return e.charCodeAt(0) === M.EOF ? "<EOF>" : e === `
` ? "\\n" : e === "	" ? "\\t" : e === "\r" ? "\\r" : e;
  }
  getCharErrorDisplay(e) {
    return "'" + this.getErrorDisplayForChar(e) + "'";
  }
  recover(e) {
    this._input.LA(1) !== M.EOF && (e instanceof bl ? this._interp.consume(this._input) : this._input.consume());
  }
  get inputStream() {
    return this._input;
  }
  set inputStream(e) {
    this._input = null, this._tokenFactorySourcePair = [this, this._input], this.reset(), this._input = e, this._tokenFactorySourcePair = [this, this._input];
  }
  get sourceName() {
    return this._input.sourceName;
  }
  get type() {
    return this._type;
  }
  set type(e) {
    this._type = e;
  }
  get line() {
    return this._interp.line;
  }
  set line(e) {
    this._interp.line = e;
  }
  get column() {
    return this._interp.column;
  }
  set column(e) {
    this._interp.column = e;
  }
  get text() {
    return this._text !== null ? this._text : this._interp.getText(this._input);
  }
  set text(e) {
    this._text = e;
  }
}
We.DEFAULT_MODE = 0;
We.MORE = -2;
We.SKIP = -3;
We.DEFAULT_TOKEN_CHANNEL = M.DEFAULT_CHANNEL;
We.HIDDEN = M.HIDDEN_CHANNEL;
We.MIN_CHAR_VALUE = 0;
We.MAX_CHAR_VALUE = 1114111;
function R6(t) {
  return t.hashCodeForConfigSet();
}
function I6(t, e) {
  return t === e ? !0 : t === null || e === null ? !1 : t.equalsForConfigSet(e);
}
class pt {
  constructor(e) {
    this.configLookup = new Pt(R6, I6), this.fullCtx = e === void 0 ? !0 : e, this.readOnly = !1, this.configs = [], this.uniqueAlt = 0, this.conflictingAlts = null, this.hasSemanticContext = !1, this.dipsIntoOuterContext = !1, this.cachedHashCode = -1;
  }
  add(e, n) {
    if (n === void 0 && (n = null), this.readOnly)
      throw "This set is readonly";
    e.semanticContext !== Ie.NONE && (this.hasSemanticContext = !0), e.reachesIntoOuterContext > 0 && (this.dipsIntoOuterContext = !0);
    const r = this.configLookup.add(e);
    if (r === e)
      return this.cachedHashCode = -1, this.configs.push(e), !0;
    const s = !this.fullCtx, i = gl(r.context, e.context, s, n);
    return r.reachesIntoOuterContext = Math.max(r.reachesIntoOuterContext, e.reachesIntoOuterContext), e.precedenceFilterSuppressed && (r.precedenceFilterSuppressed = !0), r.context = i, !0;
  }
  getStates() {
    const e = new Pt();
    for (let n = 0; n < this.configs.length; n++)
      e.add(this.configs[n].state);
    return e;
  }
  getPredicates() {
    const e = [];
    for (let n = 0; n < this.configs.length; n++) {
      const r = this.configs[n].semanticContext;
      r !== Ie.NONE && e.push(r.semanticContext);
    }
    return e;
  }
  optimizeConfigs(e) {
    if (this.readOnly)
      throw "This set is readonly";
    if (this.configLookup.length !== 0)
      for (let n = 0; n < this.configs.length; n++) {
        const r = this.configs[n];
        r.context = e.getCachedContext(r.context);
      }
  }
  addAll(e) {
    for (let n = 0; n < e.length; n++)
      this.add(e[n]);
    return !1;
  }
  equals(e) {
    return this === e || e instanceof pt && Yr(this.configs, e.configs) && this.fullCtx === e.fullCtx && this.uniqueAlt === e.uniqueAlt && this.conflictingAlts === e.conflictingAlts && this.hasSemanticContext === e.hasSemanticContext && this.dipsIntoOuterContext === e.dipsIntoOuterContext;
  }
  hashCode() {
    const e = new Ft();
    return e.update(this.configs), e.finish();
  }
  updateHashCode(e) {
    this.readOnly ? (this.cachedHashCode === -1 && (this.cachedHashCode = this.hashCode()), e.update(this.cachedHashCode)) : e.update(this.hashCode());
  }
  isEmpty() {
    return this.configs.length === 0;
  }
  contains(e) {
    if (this.configLookup === null)
      throw "This method is not implemented for readonly sets.";
    return this.configLookup.contains(e);
  }
  containsFast(e) {
    if (this.configLookup === null)
      throw "This method is not implemented for readonly sets.";
    return this.configLookup.containsFast(e);
  }
  clear() {
    if (this.readOnly)
      throw "This set is readonly";
    this.configs = [], this.cachedHashCode = -1, this.configLookup = new Pt();
  }
  setReadonly(e) {
    this.readOnly = e, e && (this.configLookup = null);
  }
  toString() {
    return Un(this.configs) + (this.hasSemanticContext ? ",hasSemanticContext=" + this.hasSemanticContext : "") + (this.uniqueAlt !== je.INVALID_ALT_NUMBER ? ",uniqueAlt=" + this.uniqueAlt : "") + (this.conflictingAlts !== null ? ",conflictingAlts=" + this.conflictingAlts : "") + (this.dipsIntoOuterContext ? ",dipsIntoOuterContext" : "");
  }
  get items() {
    return this.configs;
  }
  get length() {
    return this.configs.length;
  }
}
class yn {
  constructor(e, n) {
    return e === null && (e = -1), n === null && (n = new pt()), this.stateNumber = e, this.configs = n, this.edges = null, this.isAcceptState = !1, this.prediction = 0, this.lexerActionExecutor = null, this.requiresFullContext = !1, this.predicates = null, this;
  }
  getAltSet() {
    const e = new Pt();
    if (this.configs !== null)
      for (let n = 0; n < this.configs.length; n++) {
        const r = this.configs[n];
        e.add(r.alt);
      }
    return e.length === 0 ? null : e;
  }
  equals(e) {
    return this === e || e instanceof yn && this.configs.equals(e.configs);
  }
  toString() {
    let e = "" + this.stateNumber + ":" + this.configs;
    return this.isAcceptState && (e = e + "=>", this.predicates !== null ? e = e + this.predicates : e = e + this.prediction), e;
  }
  hashCode() {
    const e = new Ft();
    return e.update(this.configs), e.finish();
  }
}
class rn {
  constructor(e, n) {
    return this.atn = e, this.sharedContextCache = n, this;
  }
  getCachedContext(e) {
    if (this.sharedContextCache === null)
      return e;
    const n = new ii();
    return j2(e, this.sharedContextCache, n);
  }
}
rn.ERROR = new yn(2147483647, new pt());
class k0 extends pt {
  constructor() {
    super(), this.configLookup = new Pt();
  }
}
class bt extends Ye {
  constructor(e, n) {
    super(e, n);
    const r = e.lexerActionExecutor || null;
    return this.lexerActionExecutor = r || (n !== null ? n.lexerActionExecutor : null), this.passedThroughNonGreedyDecision = n !== null ? this.checkNonGreedyDecision(n, this.state) : !1, this.hashCodeForConfigSet = bt.prototype.hashCode, this.equalsForConfigSet = bt.prototype.equals, this;
  }
  updateHashCode(e) {
    e.update(this.state.stateNumber, this.alt, this.context, this.semanticContext, this.passedThroughNonGreedyDecision, this.lexerActionExecutor);
  }
  equals(e) {
    return this === e || e instanceof bt && this.passedThroughNonGreedyDecision === e.passedThroughNonGreedyDecision && (this.lexerActionExecutor ? this.lexerActionExecutor.equals(e.lexerActionExecutor) : !e.lexerActionExecutor) && super.equals(e);
  }
  checkNonGreedyDecision(e, n) {
    return e.passedThroughNonGreedyDecision || n instanceof rs && n.nonGreedy;
  }
}
class Ts extends In {
  constructor(e, n) {
    super(n.actionType), this.offset = e, this.action = n, this.isPositionDependent = !0;
  }
  execute(e) {
    this.action.execute(e);
  }
  updateHashCode(e) {
    e.update(this.actionType, this.offset, this.action);
  }
  equals(e) {
    return this === e ? !0 : e instanceof Ts ? this.offset === e.offset && this.action === e.action : !1;
  }
}
class Pr {
  constructor(e) {
    return this.lexerActions = e === null ? [] : e, this.cachedHashCode = Ft.hashStuff(e), this;
  }
  fixOffsetBeforeMatch(e) {
    let n = null;
    for (let r = 0; r < this.lexerActions.length; r++)
      this.lexerActions[r].isPositionDependent && !(this.lexerActions[r] instanceof Ts) && (n === null && (n = this.lexerActions.concat([])), n[r] = new Ts(
        e,
        this.lexerActions[r]
      ));
    return n === null ? this : new Pr(n);
  }
  execute(e, n, r) {
    let s = !1;
    const i = n.index;
    try {
      for (let o = 0; o < this.lexerActions.length; o++) {
        let a = this.lexerActions[o];
        if (a instanceof Ts) {
          const l = a.offset;
          n.seek(r + l), a = a.action, s = r + l !== i;
        } else
          a.isPositionDependent && (n.seek(i), s = !1);
        a.execute(e);
      }
    } finally {
      s && n.seek(i);
    }
  }
  hashCode() {
    return this.cachedHashCode;
  }
  updateHashCode(e) {
    e.update(this.cachedHashCode);
  }
  equals(e) {
    if (this === e)
      return !0;
    if (e instanceof Pr) {
      if (this.cachedHashCode != e.cachedHashCode || this.lexerActions.length != e.lexerActions.length)
        return !1;
      {
        const n = this.lexerActions.length;
        for (let r = 0; r < n; ++r)
          if (!this.lexerActions[r].equals(e.lexerActions[r]))
            return !1;
        return !0;
      }
    } else
      return !1;
  }
  static append(e, n) {
    if (e === null)
      return new Pr([n]);
    const r = e.lexerActions.concat([n]);
    return new Pr(r);
  }
}
function T0(t) {
  t.index = -1, t.line = 0, t.column = -1, t.dfaState = null;
}
class O6 {
  constructor() {
    T0(this);
  }
  reset() {
    T0(this);
  }
}
class Ze extends rn {
  constructor(e, n, r, s) {
    super(n, s), this.decisionToDFA = r, this.recog = e, this.startIndex = -1, this.line = 1, this.column = 0, this.mode = We.DEFAULT_MODE, this.prevAccept = new O6();
  }
  copyState(e) {
    this.column = e.column, this.line = e.line, this.mode = e.mode, this.startIndex = e.startIndex;
  }
  match(e, n) {
    this.mode = n;
    const r = e.mark();
    try {
      this.startIndex = e.index, this.prevAccept.reset();
      const s = this.decisionToDFA[n];
      return s.s0 === null ? this.matchATN(e) : this.execATN(e, s.s0);
    } finally {
      e.release(r);
    }
  }
  reset() {
    this.prevAccept.reset(), this.startIndex = -1, this.line = 1, this.column = 0, this.mode = We.DEFAULT_MODE;
  }
  matchATN(e) {
    const n = this.atn.modeToStartState[this.mode];
    Ze.debug && console.log("matchATN mode " + this.mode + " start: " + n);
    const r = this.mode, s = this.computeStartState(e, n), i = s.hasSemanticContext;
    s.hasSemanticContext = !1;
    const o = this.addDFAState(s);
    i || (this.decisionToDFA[this.mode].s0 = o);
    const a = this.execATN(e, o);
    return Ze.debug && console.log("DFA after matchATN: " + this.decisionToDFA[r].toLexerString()), a;
  }
  execATN(e, n) {
    Ze.debug && console.log("start state closure=" + n.configs), n.isAcceptState && this.captureSimState(this.prevAccept, e, n);
    let r = e.LA(1), s = n;
    for (; ; ) {
      Ze.debug && console.log("execATN loop starting closure: " + s.configs);
      let i = this.getExistingTargetState(s, r);
      if (i === null && (i = this.computeTargetState(e, s, r)), i === rn.ERROR || (r !== M.EOF && this.consume(e), i.isAcceptState && (this.captureSimState(this.prevAccept, e, i), r === M.EOF)))
        break;
      r = e.LA(1), s = i;
    }
    return this.failOrAccept(this.prevAccept, e, s.configs, r);
  }
  getExistingTargetState(e, n) {
    if (e.edges === null || n < Ze.MIN_DFA_EDGE || n > Ze.MAX_DFA_EDGE)
      return null;
    let r = e.edges[n - Ze.MIN_DFA_EDGE];
    return r === void 0 && (r = null), Ze.debug && r !== null && console.log("reuse state " + e.stateNumber + " edge to " + r.stateNumber), r;
  }
  computeTargetState(e, n, r) {
    const s = new k0();
    return this.getReachableConfigSet(e, n.configs, s, r), s.items.length === 0 ? (s.hasSemanticContext || this.addDFAEdge(n, r, rn.ERROR), rn.ERROR) : this.addDFAEdge(n, r, null, s);
  }
  failOrAccept(e, n, r, s) {
    if (this.prevAccept.dfaState !== null) {
      const i = e.dfaState.lexerActionExecutor;
      return this.accept(
        n,
        i,
        this.startIndex,
        e.index,
        e.line,
        e.column
      ), e.dfaState.prediction;
    } else {
      if (s === M.EOF && n.index === this.startIndex)
        return M.EOF;
      throw new bl(this.recog, n, this.startIndex, r);
    }
  }
  getReachableConfigSet(e, n, r, s) {
    let i = je.INVALID_ALT_NUMBER;
    for (let o = 0; o < n.items.length; o++) {
      const a = n.items[o], l = a.alt === i;
      if (!(l && a.passedThroughNonGreedyDecision)) {
        Ze.debug && console.log(`testing %s at %s
`, this.getTokenName(s), a.toString(this.recog, !0));
        for (let c = 0; c < a.state.transitions.length; c++) {
          const u = a.state.transitions[c], d = this.getReachableTarget(u, s);
          if (d !== null) {
            let p = a.lexerActionExecutor;
            p !== null && (p = p.fixOffsetBeforeMatch(e.index - this.startIndex));
            const g = s === M.EOF, _ = new bt({ state: d, lexerActionExecutor: p }, a);
            this.closure(
              e,
              _,
              r,
              l,
              !0,
              g
            ) && (i = a.alt);
          }
        }
      }
    }
  }
  accept(e, n, r, s, i, o) {
    Ze.debug && console.log(`ACTION %s
`, n), e.seek(s), this.line = i, this.column = o, n !== null && this.recog !== null && n.execute(this.recog, e, r);
  }
  getReachableTarget(e, n) {
    return e.matches(n, 0, We.MAX_CHAR_VALUE) ? e.target : null;
  }
  computeStartState(e, n) {
    const r = xe.EMPTY, s = new k0();
    for (let i = 0; i < n.transitions.length; i++) {
      const o = n.transitions[i].target, a = new bt({ state: o, alt: i + 1, context: r }, null);
      this.closure(e, a, s, !1, !1, !1);
    }
    return s;
  }
  closure(e, n, r, s, i, o) {
    let a = null;
    if (Ze.debug && console.log("closure(" + n.toString(this.recog, !0) + ")"), n.state instanceof gt) {
      if (Ze.debug && (this.recog !== null ? console.log(`closure at %s rule stop %s
`, this.recog.ruleNames[n.state.ruleIndex], n) : console.log(`closure at rule stop %s
`, n)), n.context === null || n.context.hasEmptyPath()) {
        if (n.context === null || n.context.isEmpty())
          return r.add(n), !0;
        r.add(new bt({ state: n.state, context: xe.EMPTY }, n)), s = !0;
      }
      if (n.context !== null && !n.context.isEmpty()) {
        for (let l = 0; l < n.context.length; l++)
          if (n.context.getReturnState(l) !== xe.EMPTY_RETURN_STATE) {
            const c = n.context.getParent(l), u = this.atn.states[n.context.getReturnState(l)];
            a = new bt({ state: u, context: c }, n), s = this.closure(
              e,
              a,
              r,
              s,
              i,
              o
            );
          }
      }
      return s;
    }
    n.state.epsilonOnlyTransitions || (!s || !n.passedThroughNonGreedyDecision) && r.add(n);
    for (let l = 0; l < n.state.transitions.length; l++) {
      const c = n.state.transitions[l];
      a = this.getEpsilonTarget(e, n, c, r, i, o), a !== null && (s = this.closure(
        e,
        a,
        r,
        s,
        i,
        o
      ));
    }
    return s;
  }
  getEpsilonTarget(e, n, r, s, i, o) {
    let a = null;
    if (r.serializationType === K.RULE) {
      const l = mt.create(n.context, r.followState.stateNumber);
      a = new bt({ state: r.target, context: l }, n);
    } else {
      if (r.serializationType === K.PRECEDENCE)
        throw "Precedence predicates are not supported in lexers.";
      if (r.serializationType === K.PREDICATE)
        Ze.debug && console.log("EVAL rule " + r.ruleIndex + ":" + r.predIndex), s.hasSemanticContext = !0, this.evaluatePredicate(e, r.ruleIndex, r.predIndex, i) && (a = new bt({ state: r.target }, n));
      else if (r.serializationType === K.ACTION)
        if (n.context === null || n.context.hasEmptyPath()) {
          const l = Pr.append(
            n.lexerActionExecutor,
            this.atn.lexerActions[r.actionIndex]
          );
          a = new bt({ state: r.target, lexerActionExecutor: l }, n);
        } else
          a = new bt({ state: r.target }, n);
      else
        r.serializationType === K.EPSILON ? a = new bt({ state: r.target }, n) : (r.serializationType === K.ATOM || r.serializationType === K.RANGE || r.serializationType === K.SET) && o && r.matches(M.EOF, 0, We.MAX_CHAR_VALUE) && (a = new bt({ state: r.target }, n));
    }
    return a;
  }
  evaluatePredicate(e, n, r, s) {
    if (this.recog === null)
      return !0;
    if (!s)
      return this.recog.sempred(null, n, r);
    const i = this.column, o = this.line, a = e.index, l = e.mark();
    try {
      return this.consume(e), this.recog.sempred(null, n, r);
    } finally {
      this.column = i, this.line = o, e.seek(a), e.release(l);
    }
  }
  captureSimState(e, n, r) {
    e.index = n.index, e.line = this.line, e.column = this.column, e.dfaState = r;
  }
  addDFAEdge(e, n, r, s) {
    if (r === void 0 && (r = null), s === void 0 && (s = null), r === null && s !== null) {
      const i = s.hasSemanticContext;
      if (s.hasSemanticContext = !1, r = this.addDFAState(s), i)
        return r;
    }
    return n < Ze.MIN_DFA_EDGE || n > Ze.MAX_DFA_EDGE || (Ze.debug && console.log("EDGE " + e + " -> " + r + " upon " + n), e.edges === null && (e.edges = []), e.edges[n - Ze.MIN_DFA_EDGE] = r), r;
  }
  addDFAState(e) {
    const n = new yn(null, e);
    let r = null;
    for (let a = 0; a < e.items.length; a++) {
      const l = e.items[a];
      if (l.state instanceof gt) {
        r = l;
        break;
      }
    }
    r !== null && (n.isAcceptState = !0, n.lexerActionExecutor = r.lexerActionExecutor, n.prediction = this.atn.ruleToTokenType[r.state.ruleIndex]);
    const s = this.decisionToDFA[this.mode], i = s.states.get(n);
    if (i !== null)
      return i;
    const o = n;
    return o.stateNumber = s.states.length, e.setReadonly(!0), o.configs = e, s.states.add(o), o;
  }
  getDFA(e) {
    return this.decisionToDFA[e];
  }
  getText(e) {
    return e.getText(this.startIndex, e.index - 1);
  }
  consume(e) {
    e.LA(1) === `
`.charCodeAt(0) ? (this.line += 1, this.column = 0) : this.column += 1, e.consume();
  }
  getTokenName(e) {
    return e === -1 ? "EOF" : "'" + String.fromCharCode(e) + "'";
  }
}
Ze.debug = !1;
Ze.dfa_debug = !1;
Ze.MIN_DFA_EDGE = 0;
Ze.MAX_DFA_EDGE = 127;
class W2 {
  constructor(e, n) {
    this.alt = n, this.pred = e;
  }
  toString() {
    return "(" + this.pred + ", " + this.alt + ")";
  }
}
class N6 {
  constructor() {
    this.data = {};
  }
  get(e) {
    return this.data["k-" + e] || null;
  }
  set(e, n) {
    this.data["k-" + e] = n;
  }
  values() {
    return Object.keys(this.data).filter((e) => e.startsWith("k-")).map((e) => this.data[e], this);
  }
}
const De = {
  SLL: 0,
  LL: 1,
  LL_EXACT_AMBIG_DETECTION: 2,
  hasSLLConflictTerminatingPrediction: function(t, e) {
    if (De.allConfigsInRuleStopStates(e))
      return !0;
    if (t === De.SLL && e.hasSemanticContext) {
      const r = new pt();
      for (let s = 0; s < e.items.length; s++) {
        let i = e.items[s];
        i = new Ye({ semanticContext: Ie.NONE }, i), r.add(i);
      }
      e = r;
    }
    const n = De.getConflictingAltSubsets(e);
    return De.hasConflictingAltSet(n) && !De.hasStateAssociatedWithOneAlt(e);
  },
  hasConfigInRuleStopState: function(t) {
    for (let e = 0; e < t.items.length; e++)
      if (t.items[e].state instanceof gt)
        return !0;
    return !1;
  },
  allConfigsInRuleStopStates: function(t) {
    for (let e = 0; e < t.items.length; e++)
      if (!(t.items[e].state instanceof gt))
        return !1;
    return !0;
  },
  resolvesToJustOneViableAlt: function(t) {
    return De.getSingleViableAlt(t);
  },
  allSubsetsConflict: function(t) {
    return !De.hasNonConflictingAltSet(t);
  },
  hasNonConflictingAltSet: function(t) {
    for (let e = 0; e < t.length; e++)
      if (t[e].length === 1)
        return !0;
    return !1;
  },
  hasConflictingAltSet: function(t) {
    for (let e = 0; e < t.length; e++)
      if (t[e].length > 1)
        return !0;
    return !1;
  },
  allSubsetsEqual: function(t) {
    let e = null;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (e === null)
        e = r;
      else if (r !== e)
        return !1;
    }
    return !0;
  },
  getUniqueAlt: function(t) {
    const e = De.getAlts(t);
    return e.length === 1 ? e.minValue() : je.INVALID_ALT_NUMBER;
  },
  getAlts: function(t) {
    const e = new ln();
    return t.map(function(n) {
      e.or(n);
    }), e;
  },
  getConflictingAltSubsets: function(t) {
    const e = new ii();
    return e.hashFunction = function(n) {
      Ft.hashStuff(n.state.stateNumber, n.context);
    }, e.equalsFunction = function(n, r) {
      return n.state.stateNumber === r.state.stateNumber && n.context.equals(r.context);
    }, t.items.map(function(n) {
      let r = e.get(n);
      r === null && (r = new ln(), e.set(n, r)), r.add(n.alt);
    }), e.getValues();
  },
  getStateToAltMap: function(t) {
    const e = new N6();
    return t.items.map(function(n) {
      let r = e.get(n.state);
      r === null && (r = new ln(), e.set(n.state, r)), r.add(n.alt);
    }), e;
  },
  hasStateAssociatedWithOneAlt: function(t) {
    const e = De.getStateToAltMap(t).values();
    for (let n = 0; n < e.length; n++)
      if (e[n].length === 1)
        return !0;
    return !1;
  },
  getSingleViableAlt: function(t) {
    let e = null;
    for (let n = 0; n < t.length; n++) {
      const r = t[n].minValue();
      if (e === null)
        e = r;
      else if (e !== r)
        return je.INVALID_ALT_NUMBER;
    }
    return e;
  }
};
class _l extends Qn {
  constructor(e, n, r, s, i, o) {
    o = o || e._ctx, s = s || e.getCurrentToken(), r = r || e.getCurrentToken(), n = n || e.getInputStream(), super({ message: "", recognizer: e, input: n, ctx: o }), this.deadEndConfigs = i, this.startToken = r, this.offendingToken = s;
  }
}
class P6 {
  constructor(e) {
    this.defaultMapCtor = e || ii, this.cacheMap = new this.defaultMapCtor();
  }
  get(e, n) {
    const r = this.cacheMap.get(e) || null;
    return r === null ? null : r.get(n) || null;
  }
  set(e, n, r) {
    let s = this.cacheMap.get(e) || null;
    s === null && (s = new this.defaultMapCtor(), this.cacheMap.set(e, s)), s.set(n, r);
  }
}
class M6 extends rn {
  constructor(e, n, r, s) {
    super(n, s), this.parser = e, this.decisionToDFA = r, this.predictionMode = De.LL, this._input = null, this._startIndex = 0, this._outerContext = null, this._dfa = null, this.mergeCache = null, this.debug = !1, this.debug_closure = !1, this.debug_add = !1, this.debug_list_atn_decisions = !1, this.dfa_debug = !1, this.retry_debug = !1;
  }
  reset() {
  }
  adaptivePredict(e, n, r) {
    (this.debug || this.debug_list_atn_decisions) && console.log("adaptivePredict decision " + n + " exec LA(1)==" + this.getLookaheadName(e) + " line " + e.LT(1).line + ":" + e.LT(1).column), this._input = e, this._startIndex = e.index, this._outerContext = r;
    const s = this.decisionToDFA[n];
    this._dfa = s;
    const i = e.mark(), o = e.index;
    try {
      let a;
      if (s.precedenceDfa ? a = s.getPrecedenceStartState(this.parser.getPrecedence()) : a = s.s0, a === null) {
        r === null && (r = Kr.EMPTY), (this.debug || this.debug_list_atn_decisions) && console.log("predictATN decision " + s.decision + " exec LA(1)==" + this.getLookaheadName(e) + ", outerContext=" + r.toString(this.parser.ruleNames));
        const c = !1;
        let u = this.computeStartState(s.atnStartState, Kr.EMPTY, c);
        s.precedenceDfa ? (s.s0.configs = u, u = this.applyPrecedenceFilter(u), a = this.addDFAState(s, new yn(null, u)), s.setPrecedenceStartState(this.parser.getPrecedence(), a)) : (a = this.addDFAState(s, new yn(null, u)), s.s0 = a);
      }
      const l = this.execATN(s, a, e, o, r);
      return this.debug && console.log("DFA after predictATN: " + s.toString(this.parser.literalNames, this.parser.symbolicNames)), l;
    } finally {
      this._dfa = null, this.mergeCache = null, e.seek(o), e.release(i);
    }
  }
  execATN(e, n, r, s, i) {
    (this.debug || this.debug_list_atn_decisions) && console.log("execATN decision " + e.decision + " exec LA(1)==" + this.getLookaheadName(r) + " line " + r.LT(1).line + ":" + r.LT(1).column);
    let o, a = n;
    this.debug && console.log("s0 = " + n);
    let l = r.LA(1);
    for (; ; ) {
      let c = this.getExistingTargetState(a, l);
      if (c === null && (c = this.computeTargetState(e, a, l)), c === rn.ERROR) {
        const u = this.noViableAlt(r, i, a.configs, s);
        if (r.seek(s), o = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(a.configs, i), o !== je.INVALID_ALT_NUMBER)
          return o;
        throw u;
      }
      if (c.requiresFullContext && this.predictionMode !== De.SLL) {
        let u = null;
        if (c.predicates !== null) {
          this.debug && console.log("DFA state has preds in DFA sim LL failover");
          const g = r.index;
          if (g !== s && r.seek(s), u = this.evalSemanticContext(c.predicates, i, !0), u.length === 1)
            return this.debug && console.log("Full LL avoided"), u.minValue();
          g !== s && r.seek(g);
        }
        this.dfa_debug && console.log("ctx sensitive state " + i + " in " + c);
        const d = !0, p = this.computeStartState(e.atnStartState, i, d);
        return this.reportAttemptingFullContext(e, u, c.configs, s, r.index), o = this.execATNWithFullContext(e, c, p, r, s, i), o;
      }
      if (c.isAcceptState) {
        if (c.predicates === null)
          return c.prediction;
        const u = r.index;
        r.seek(s);
        const d = this.evalSemanticContext(c.predicates, i, !0);
        if (d.length === 0)
          throw this.noViableAlt(r, i, c.configs, s);
        return d.length === 1 || this.reportAmbiguity(e, c, s, u, !1, d, c.configs), d.minValue();
      }
      a = c, l !== M.EOF && (r.consume(), l = r.LA(1));
    }
  }
  getExistingTargetState(e, n) {
    const r = e.edges;
    return r === null ? null : r[n + 1] || null;
  }
  computeTargetState(e, n, r) {
    const s = this.computeReachSet(n.configs, r, !1);
    if (s === null)
      return this.addDFAEdge(e, n, r, rn.ERROR), rn.ERROR;
    let i = new yn(null, s);
    const o = this.getUniqueAlt(s);
    if (this.debug) {
      const a = De.getConflictingAltSubsets(s);
      console.log("SLL altSubSets=" + Un(a) + ", configs=" + s + ", predict=" + o + ", allSubsetsConflict=" + De.allSubsetsConflict(a) + ", conflictingAlts=" + this.getConflictingAlts(s));
    }
    return o !== je.INVALID_ALT_NUMBER ? (i.isAcceptState = !0, i.configs.uniqueAlt = o, i.prediction = o) : De.hasSLLConflictTerminatingPrediction(this.predictionMode, s) && (i.configs.conflictingAlts = this.getConflictingAlts(s), i.requiresFullContext = !0, i.isAcceptState = !0, i.prediction = i.configs.conflictingAlts.minValue()), i.isAcceptState && i.configs.hasSemanticContext && (this.predicateDFAState(i, this.atn.getDecisionState(e.decision)), i.predicates !== null && (i.prediction = je.INVALID_ALT_NUMBER)), i = this.addDFAEdge(e, n, r, i), i;
  }
  predicateDFAState(e, n) {
    const r = n.transitions.length, s = this.getConflictingAltsOrUniqueAlt(e.configs), i = this.getPredsForAmbigAlts(s, e.configs, r);
    i !== null ? (e.predicates = this.getPredicatePredictions(s, i), e.prediction = je.INVALID_ALT_NUMBER) : e.prediction = s.minValue();
  }
  execATNWithFullContext(e, n, r, s, i, o) {
    (this.debug || this.debug_list_atn_decisions) && console.log("execATNWithFullContext " + r);
    const a = !0;
    let l = !1, c, u = r;
    s.seek(i);
    let d = s.LA(1), p = -1;
    for (; ; ) {
      if (c = this.computeReachSet(u, d, a), c === null) {
        const _ = this.noViableAlt(s, o, u, i);
        s.seek(i);
        const k = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(u, o);
        if (k !== je.INVALID_ALT_NUMBER)
          return k;
        throw _;
      }
      const g = De.getConflictingAltSubsets(c);
      if (this.debug && console.log("LL altSubSets=" + g + ", predict=" + De.getUniqueAlt(g) + ", resolvesToJustOneViableAlt=" + De.resolvesToJustOneViableAlt(g)), c.uniqueAlt = this.getUniqueAlt(c), c.uniqueAlt !== je.INVALID_ALT_NUMBER) {
        p = c.uniqueAlt;
        break;
      } else if (this.predictionMode !== De.LL_EXACT_AMBIG_DETECTION) {
        if (p = De.resolvesToJustOneViableAlt(g), p !== je.INVALID_ALT_NUMBER)
          break;
      } else if (De.allSubsetsConflict(g) && De.allSubsetsEqual(g)) {
        l = !0, p = De.getSingleViableAlt(g);
        break;
      }
      u = c, d !== M.EOF && (s.consume(), d = s.LA(1));
    }
    return c.uniqueAlt !== je.INVALID_ALT_NUMBER ? (this.reportContextSensitivity(e, p, c, i, s.index), p) : (this.reportAmbiguity(e, n, i, s.index, l, null, c), p);
  }
  computeReachSet(e, n, r) {
    this.debug && console.log("in computeReachSet, starting closure: " + e), this.mergeCache === null && (this.mergeCache = new P6());
    const s = new pt(r);
    let i = null;
    for (let a = 0; a < e.items.length; a++) {
      const l = e.items[a];
      if (this.debug && console.log("testing " + this.getTokenName(n) + " at " + l), l.state instanceof gt) {
        (r || n === M.EOF) && (i === null && (i = []), i.push(l), this.debug_add && console.log("added " + l + " to skippedStopStates"));
        continue;
      }
      for (let c = 0; c < l.state.transitions.length; c++) {
        const u = l.state.transitions[c], d = this.getReachableTarget(u, n);
        if (d !== null) {
          const p = new Ye({ state: d }, l);
          s.add(p, this.mergeCache), this.debug_add && console.log("added " + p + " to intermediate");
        }
      }
    }
    let o = null;
    if (i === null && n !== M.EOF && (s.items.length === 1 || this.getUniqueAlt(s) !== je.INVALID_ALT_NUMBER) && (o = s), o === null) {
      o = new pt(r);
      const a = new Pt(), l = n === M.EOF;
      for (let c = 0; c < s.items.length; c++)
        this.closure(s.items[c], o, a, !1, r, l);
    }
    if (n === M.EOF && (o = this.removeAllConfigsNotInRuleStopState(o, o === s)), i !== null && (!r || !De.hasConfigInRuleStopState(o)))
      for (let a = 0; a < i.length; a++)
        o.add(i[a], this.mergeCache);
    return o.items.length === 0 ? null : o;
  }
  removeAllConfigsNotInRuleStopState(e, n) {
    if (De.allConfigsInRuleStopStates(e))
      return e;
    const r = new pt(e.fullCtx);
    for (let s = 0; s < e.items.length; s++) {
      const i = e.items[s];
      if (i.state instanceof gt) {
        r.add(i, this.mergeCache);
        continue;
      }
      if (n && i.state.epsilonOnlyTransitions && this.atn.nextTokens(i.state).contains(M.EPSILON)) {
        const o = this.atn.ruleToStopState[i.state.ruleIndex];
        r.add(new Ye({ state: o }, i), this.mergeCache);
      }
    }
    return r;
  }
  computeStartState(e, n, r) {
    const s = fl(this.atn, n), i = new pt(r);
    for (let o = 0; o < e.transitions.length; o++) {
      const a = e.transitions[o].target, l = new Ye({ state: a, alt: o + 1, context: s }, null), c = new Pt();
      this.closure(l, i, c, !0, r, !1);
    }
    return i;
  }
  applyPrecedenceFilter(e) {
    let n;
    const r = [], s = new pt(e.fullCtx);
    for (let i = 0; i < e.items.length; i++) {
      if (n = e.items[i], n.alt !== 1)
        continue;
      const o = n.semanticContext.evalPrecedence(this.parser, this._outerContext);
      o !== null && (r[n.state.stateNumber] = n.context, o !== n.semanticContext ? s.add(new Ye({ semanticContext: o }, n), this.mergeCache) : s.add(n, this.mergeCache));
    }
    for (let i = 0; i < e.items.length; i++)
      if (n = e.items[i], n.alt !== 1) {
        if (!n.precedenceFilterSuppressed) {
          const o = r[n.state.stateNumber] || null;
          if (o !== null && o.equals(n.context))
            continue;
        }
        s.add(n, this.mergeCache);
      }
    return s;
  }
  getReachableTarget(e, n) {
    return e.matches(n, 0, this.atn.maxTokenType) ? e.target : null;
  }
  getPredsForAmbigAlts(e, n, r) {
    let s = [];
    for (let o = 0; o < n.items.length; o++) {
      const a = n.items[o];
      e.has(a.alt) && (s[a.alt] = Ie.orContext(s[a.alt] || null, a.semanticContext));
    }
    let i = 0;
    for (let o = 1; o < r + 1; o++) {
      const a = s[o] || null;
      a === null ? s[o] = Ie.NONE : a !== Ie.NONE && (i += 1);
    }
    return i === 0 && (s = null), this.debug && console.log("getPredsForAmbigAlts result " + Un(s)), s;
  }
  getPredicatePredictions(e, n) {
    const r = [];
    let s = !1;
    for (let i = 1; i < n.length; i++) {
      const o = n[i];
      e !== null && e.has(i) && r.push(new W2(o, i)), o !== Ie.NONE && (s = !0);
    }
    return s ? r : null;
  }
  getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(e, n) {
    const r = this.splitAccordingToSemanticValidity(e, n), s = r[0], i = r[1];
    let o = this.getAltThatFinishedDecisionEntryRule(s);
    return o !== je.INVALID_ALT_NUMBER || i.items.length > 0 && (o = this.getAltThatFinishedDecisionEntryRule(i), o !== je.INVALID_ALT_NUMBER) ? o : je.INVALID_ALT_NUMBER;
  }
  getAltThatFinishedDecisionEntryRule(e) {
    const n = [];
    for (let r = 0; r < e.items.length; r++) {
      const s = e.items[r];
      (s.reachesIntoOuterContext > 0 || s.state instanceof gt && s.context.hasEmptyPath()) && n.indexOf(s.alt) < 0 && n.push(s.alt);
    }
    return n.length === 0 ? je.INVALID_ALT_NUMBER : Math.min.apply(null, n);
  }
  splitAccordingToSemanticValidity(e, n) {
    const r = new pt(e.fullCtx), s = new pt(e.fullCtx);
    for (let i = 0; i < e.items.length; i++) {
      const o = e.items[i];
      o.semanticContext !== Ie.NONE ? o.semanticContext.evaluate(this.parser, n) ? r.add(o) : s.add(o) : r.add(o);
    }
    return [r, s];
  }
  evalSemanticContext(e, n, r) {
    const s = new ln();
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
      if (o.pred === Ie.NONE) {
        if (s.add(o.alt), !r)
          break;
        continue;
      }
      const a = o.pred.evaluate(this.parser, n);
      if ((this.debug || this.dfa_debug) && console.log("eval pred " + o + "=" + a), a && ((this.debug || this.dfa_debug) && console.log("PREDICT " + o.alt), s.add(o.alt), !r))
        break;
    }
    return s;
  }
  closure(e, n, r, s, i, o) {
    this.closureCheckingStopState(
      e,
      n,
      r,
      s,
      i,
      0,
      o
    );
  }
  closureCheckingStopState(e, n, r, s, i, o, a) {
    if ((this.debug || this.debug_closure) && (console.log("closure(" + e.toString(this.parser, !0) + ")"), e.reachesIntoOuterContext > 50))
      throw "problem";
    if (e.state instanceof gt)
      if (e.context.isEmpty())
        if (i) {
          n.add(e, this.mergeCache);
          return;
        } else
          this.debug && console.log("FALLING off rule " + this.getRuleName(e.state.ruleIndex));
      else {
        for (let l = 0; l < e.context.length; l++) {
          if (e.context.getReturnState(l) === xe.EMPTY_RETURN_STATE) {
            if (i) {
              n.add(new Ye({ state: e.state, context: xe.EMPTY }, e), this.mergeCache);
              continue;
            } else
              this.debug && console.log("FALLING off rule " + this.getRuleName(e.state.ruleIndex)), this.closure_(
                e,
                n,
                r,
                s,
                i,
                o,
                a
              );
            continue;
          }
          const c = this.atn.states[e.context.getReturnState(l)], u = e.context.getParent(l), d = { state: c, alt: e.alt, context: u, semanticContext: e.semanticContext }, p = new Ye(d, null);
          p.reachesIntoOuterContext = e.reachesIntoOuterContext, this.closureCheckingStopState(p, n, r, s, i, o - 1, a);
        }
        return;
      }
    this.closure_(e, n, r, s, i, o, a);
  }
  closure_(e, n, r, s, i, o, a) {
    const l = e.state;
    l.epsilonOnlyTransitions || n.add(e, this.mergeCache);
    for (let c = 0; c < l.transitions.length; c++) {
      if (c === 0 && this.canDropLoopEntryEdgeInLeftRecursiveRule(e))
        continue;
      const u = l.transitions[c], d = s && !(u instanceof $2), p = this.getEpsilonTarget(e, u, d, o === 0, i, a);
      if (p !== null) {
        let g = o;
        if (e.state instanceof gt) {
          if (this._dfa !== null && this._dfa.precedenceDfa && u.outermostPrecedenceReturn === this._dfa.atnStartState.ruleIndex && (p.precedenceFilterSuppressed = !0), p.reachesIntoOuterContext += 1, r.add(p) !== p)
            continue;
          n.dipsIntoOuterContext = !0, g -= 1, this.debug && console.log("dips into outer ctx: " + p);
        } else {
          if (!u.isEpsilon && r.add(p) !== p)
            continue;
          u instanceof Xi && g >= 0 && (g += 1);
        }
        this.closureCheckingStopState(p, n, r, d, i, g, a);
      }
    }
  }
  canDropLoopEntryEdgeInLeftRecursiveRule(e) {
    const n = e.state;
    if (n.stateType !== J.STAR_LOOP_ENTRY || n.stateType !== J.STAR_LOOP_ENTRY || !n.isPrecedenceDecision || e.context.isEmpty() || e.context.hasEmptyPath())
      return !1;
    const r = e.context.length;
    for (let o = 0; o < r; o++)
      if (this.atn.states[e.context.getReturnState(o)].ruleIndex !== n.ruleIndex)
        return !1;
    const s = n.transitions[0].target.endState.stateNumber, i = this.atn.states[s];
    for (let o = 0; o < r; o++) {
      const a = e.context.getReturnState(o), l = this.atn.states[a];
      if (l.transitions.length !== 1 || !l.transitions[0].isEpsilon)
        return !1;
      const c = l.transitions[0].target;
      if (!(l.stateType === J.BLOCK_END && c === n) && l !== i && c !== i && !(c.stateType === J.BLOCK_END && c.transitions.length === 1 && c.transitions[0].isEpsilon && c.transitions[0].target === n))
        return !1;
    }
    return !0;
  }
  getRuleName(e) {
    return this.parser !== null && e >= 0 ? this.parser.ruleNames[e] : "<rule " + e + ">";
  }
  getEpsilonTarget(e, n, r, s, i, o) {
    switch (n.serializationType) {
      case K.RULE:
        return this.ruleTransition(e, n);
      case K.PRECEDENCE:
        return this.precedenceTransition(e, n, r, s, i);
      case K.PREDICATE:
        return this.predTransition(e, n, r, s, i);
      case K.ACTION:
        return this.actionTransition(e, n);
      case K.EPSILON:
        return new Ye({ state: n.target }, e);
      case K.ATOM:
      case K.RANGE:
      case K.SET:
        return o && n.matches(M.EOF, 0, 1) ? new Ye({ state: n.target }, e) : null;
      default:
        return null;
    }
  }
  actionTransition(e, n) {
    if (this.debug) {
      const r = n.actionIndex === -1 ? 65535 : n.actionIndex;
      console.log("ACTION edge " + n.ruleIndex + ":" + r);
    }
    return new Ye({ state: n.target }, e);
  }
  precedenceTransition(e, n, r, s, i) {
    this.debug && (console.log("PRED (collectPredicates=" + r + ") " + n.precedence + ">=_p, ctx dependent=true"), this.parser !== null && console.log("context surrounding pred is " + Un(this.parser.getRuleInvocationStack())));
    let o = null;
    if (r && s)
      if (i) {
        const a = this._input.index;
        this._input.seek(this._startIndex);
        const l = n.getPredicate().evaluate(this.parser, this._outerContext);
        this._input.seek(a), l && (o = new Ye({ state: n.target }, e));
      } else {
        const a = Ie.andContext(e.semanticContext, n.getPredicate());
        o = new Ye({ state: n.target, semanticContext: a }, e);
      }
    else
      o = new Ye({ state: n.target }, e);
    return this.debug && console.log("config from pred transition=" + o), o;
  }
  predTransition(e, n, r, s, i) {
    this.debug && (console.log("PRED (collectPredicates=" + r + ") " + n.ruleIndex + ":" + n.predIndex + ", ctx dependent=" + n.isCtxDependent), this.parser !== null && console.log("context surrounding pred is " + Un(this.parser.getRuleInvocationStack())));
    let o = null;
    if (r && (n.isCtxDependent && s || !n.isCtxDependent))
      if (i) {
        const a = this._input.index;
        this._input.seek(this._startIndex);
        const l = n.getPredicate().evaluate(this.parser, this._outerContext);
        this._input.seek(a), l && (o = new Ye({ state: n.target }, e));
      } else {
        const a = Ie.andContext(e.semanticContext, n.getPredicate());
        o = new Ye({ state: n.target, semanticContext: a }, e);
      }
    else
      o = new Ye({ state: n.target }, e);
    return this.debug && console.log("config from pred transition=" + o), o;
  }
  ruleTransition(e, n) {
    this.debug && console.log("CALL rule " + this.getRuleName(n.target.ruleIndex) + ", ctx=" + e.context);
    const r = n.followState, s = mt.create(e.context, r.stateNumber);
    return new Ye({ state: n.target, context: s }, e);
  }
  getConflictingAlts(e) {
    const n = De.getConflictingAltSubsets(e);
    return De.getAlts(n);
  }
  getConflictingAltsOrUniqueAlt(e) {
    let n = null;
    return e.uniqueAlt !== je.INVALID_ALT_NUMBER ? (n = new ln(), n.add(e.uniqueAlt)) : n = e.conflictingAlts, n;
  }
  getTokenName(e) {
    if (e === M.EOF)
      return "EOF";
    if (this.parser !== null && this.parser.literalNames !== null)
      if (e >= this.parser.literalNames.length && e >= this.parser.symbolicNames.length)
        console.log("" + e + " ttype out of range: " + this.parser.literalNames), console.log("" + this.parser.getInputStream().getTokens());
      else
        return (this.parser.literalNames[e] || this.parser.symbolicNames[e]) + "<" + e + ">";
    return "" + e;
  }
  getLookaheadName(e) {
    return this.getTokenName(e.LA(1));
  }
  dumpDeadEndConfigs(e) {
    console.log("dead end configs: ");
    const n = e.getDeadEndConfigs();
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      let i = "no edges";
      if (s.state.transitions.length > 0) {
        const o = s.state.transitions[0];
        o instanceof Hi ? i = "Atom " + this.getTokenName(o.label) : o instanceof hl && (i = (o instanceof dl ? "~" : "") + "Set " + o.set);
      }
      console.error(s.toString(this.parser, !0) + ":" + i);
    }
  }
  noViableAlt(e, n, r, s) {
    return new _l(this.parser, e, e.get(s), e.LT(1), r, n);
  }
  getUniqueAlt(e) {
    let n = je.INVALID_ALT_NUMBER;
    for (let r = 0; r < e.items.length; r++) {
      const s = e.items[r];
      if (n === je.INVALID_ALT_NUMBER)
        n = s.alt;
      else if (s.alt !== n)
        return je.INVALID_ALT_NUMBER;
    }
    return n;
  }
  addDFAEdge(e, n, r, s) {
    if (this.debug && console.log("EDGE " + n + " -> " + s + " upon " + this.getTokenName(r)), s === null)
      return null;
    if (s = this.addDFAState(e, s), n === null || r < -1 || r > this.atn.maxTokenType)
      return s;
    if (n.edges === null && (n.edges = []), n.edges[r + 1] = s, this.debug) {
      const i = this.parser === null ? null : this.parser.literalNames, o = this.parser === null ? null : this.parser.symbolicNames;
      console.log(`DFA=
` + e.toString(i, o));
    }
    return s;
  }
  addDFAState(e, n) {
    if (n === rn.ERROR)
      return n;
    const r = e.states.get(n);
    return r !== null ? r : (n.stateNumber = e.states.length, n.configs.readOnly || (n.configs.optimizeConfigs(this), n.configs.setReadonly(!0)), e.states.add(n), this.debug && console.log("adding new DFA state: " + n), n);
  }
  reportAttemptingFullContext(e, n, r, s, i) {
    if (this.debug || this.retry_debug) {
      const o = new Re(s, i + 1);
      console.log("reportAttemptingFullContext decision=" + e.decision + ":" + r + ", input=" + this.parser.getTokenStream().getText(o));
    }
    this.parser !== null && this.parser.getErrorListenerDispatch().reportAttemptingFullContext(this.parser, e, s, i, n, r);
  }
  reportContextSensitivity(e, n, r, s, i) {
    if (this.debug || this.retry_debug) {
      const o = new Re(s, i + 1);
      console.log("reportContextSensitivity decision=" + e.decision + ":" + r + ", input=" + this.parser.getTokenStream().getText(o));
    }
    this.parser !== null && this.parser.getErrorListenerDispatch().reportContextSensitivity(this.parser, e, s, i, n, r);
  }
  reportAmbiguity(e, n, r, s, i, o, a) {
    if (this.debug || this.retry_debug) {
      const l = new Re(r, s + 1);
      console.log("reportAmbiguity " + o + ":" + a + ", input=" + this.parser.getTokenStream().getText(l));
    }
    this.parser !== null && this.parser.getErrorListenerDispatch().reportAmbiguity(this.parser, e, r, s, i, o, a);
  }
}
const F6 = { ATN: je, ATNDeserializer: Z2, LexerATNSimulator: Ze, ParserATNSimulator: M6, PredictionMode: De };
class wl {
  constructor(e, n, r) {
    this.dfa = e, this.literalNames = n || [], this.symbolicNames = r || [];
  }
  toString() {
    if (this.dfa.s0 === null)
      return null;
    let e = "";
    const n = this.dfa.sortedStates();
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      if (s.edges !== null) {
        const i = s.edges.length;
        for (let o = 0; o < i; o++) {
          const a = s.edges[o] || null;
          a !== null && a.stateNumber !== 2147483647 && (e = e.concat(this.getStateString(s)), e = e.concat("-"), e = e.concat(this.getEdgeLabel(o)), e = e.concat("->"), e = e.concat(this.getStateString(a)), e = e.concat(`
`));
        }
      }
    }
    return e.length === 0 ? null : e;
  }
  getEdgeLabel(e) {
    return e === 0 ? "EOF" : this.literalNames !== null || this.symbolicNames !== null ? this.literalNames[e - 1] || this.symbolicNames[e - 1] : String.fromCharCode(e - 1);
  }
  getStateString(e) {
    const n = (e.isAcceptState ? ":" : "") + "s" + e.stateNumber + (e.requiresFullContext ? "^" : "");
    return e.isAcceptState ? e.predicates !== null ? n + "=>" + Un(e.predicates) : n + "=>" + e.prediction.toString() : n;
  }
}
class Y2 extends wl {
  constructor(e) {
    super(e, null);
  }
  getEdgeLabel(e) {
    return "'" + String.fromCharCode(e) + "'";
  }
}
class z6 {
  constructor(e, n) {
    if (n === void 0 && (n = 0), this.atnStartState = e, this.decision = n, this._states = new Pt(), this.s0 = null, this.precedenceDfa = !1, e instanceof er && e.isPrecedenceDecision) {
      this.precedenceDfa = !0;
      const r = new yn(null, new pt());
      r.edges = [], r.isAcceptState = !1, r.requiresFullContext = !1, this.s0 = r;
    }
  }
  getPrecedenceStartState(e) {
    if (!this.precedenceDfa)
      throw "Only precedence DFAs may contain a precedence start state.";
    return e < 0 || e >= this.s0.edges.length ? null : this.s0.edges[e] || null;
  }
  setPrecedenceStartState(e, n) {
    if (!this.precedenceDfa)
      throw "Only precedence DFAs may contain a precedence start state.";
    e < 0 || (this.s0.edges[e] = n);
  }
  setPrecedenceDfa(e) {
    if (this.precedenceDfa !== e) {
      if (this._states = new Pt(), e) {
        const n = new yn(null, new pt());
        n.edges = [], n.isAcceptState = !1, n.requiresFullContext = !1, this.s0 = n;
      } else
        this.s0 = null;
      this.precedenceDfa = e;
    }
  }
  sortedStates() {
    return this._states.values().sort(function(e, n) {
      return e.stateNumber - n.stateNumber;
    });
  }
  toString(e, n) {
    return e = e || null, n = n || null, this.s0 === null ? "" : new wl(this, e, n).toString();
  }
  toLexerString() {
    return this.s0 === null ? "" : new Y2(this).toString();
  }
  get states() {
    return this._states;
  }
}
const D6 = { DFA: z6, DFASerializer: wl, LexerDFASerializer: Y2, PredPrediction: W2 };
class K2 {
  visitTerminal(e) {
  }
  visitErrorNode(e) {
  }
  enterEveryRule(e) {
  }
  exitEveryRule(e) {
  }
}
class B6 {
  visit(e) {
    return Array.isArray(e) ? e.map(function(n) {
      return n.accept(this);
    }, this) : e.accept(this);
  }
  visitChildren(e) {
    return e.children ? this.visit(e.children) : null;
  }
  visitTerminal(e) {
  }
  visitErrorNode(e) {
  }
}
class aa {
  walk(e, n) {
    if (n instanceof Mo || n.isErrorNode !== void 0 && n.isErrorNode())
      e.visitErrorNode(n);
    else if (n instanceof En)
      e.visitTerminal(n);
    else {
      this.enterRule(e, n);
      for (let r = 0; r < n.getChildCount(); r++) {
        const s = n.getChild(r);
        this.walk(e, s);
      }
      this.exitRule(e, n);
    }
  }
  enterRule(e, n) {
    const r = n.getRuleContext();
    e.enterEveryRule(r), r.enterRule(e);
  }
  exitRule(e, n) {
    const r = n.getRuleContext();
    r.exitRule(e), e.exitEveryRule(r);
  }
}
aa.DEFAULT = new aa();
const U6 = { Trees: Jt, RuleNode: Ji, ErrorNode: Mo, TerminalNode: En, ParseTreeListener: K2, ParseTreeVisitor: B6, ParseTreeWalker: aa };
class As extends Qn {
  constructor(e) {
    super({ message: "", recognizer: e, input: e.getInputStream(), ctx: e._ctx }), this.offendingToken = e.getCurrentToken();
  }
}
class Q2 extends Qn {
  constructor(e, n, r) {
    super({
      message: H6(n, r || null),
      recognizer: e,
      input: e.getInputStream(),
      ctx: e._ctx
    });
    const s = e._interp.atn.states[e.state].transitions[0];
    s instanceof q2 ? (this.ruleIndex = s.ruleIndex, this.predicateIndex = s.predIndex) : (this.ruleIndex = 0, this.predicateIndex = 0), this.predicate = n, this.offendingToken = e.getCurrentToken();
  }
}
function H6(t, e) {
  return e !== null ? e : "failed predicate: {" + t + "}?";
}
class V6 extends Do {
  constructor(e) {
    super(), e = e || !0, this.exactOnly = e;
  }
  reportAmbiguity(e, n, r, s, i, o, a) {
    if (this.exactOnly && !i)
      return;
    const l = "reportAmbiguity d=" + this.getDecisionDescription(e, n) + ": ambigAlts=" + this.getConflictingAlts(o, a) + ", input='" + e.getTokenStream().getText(new Re(r, s)) + "'";
    e.notifyErrorListeners(l);
  }
  reportAttemptingFullContext(e, n, r, s, i, o) {
    const a = "reportAttemptingFullContext d=" + this.getDecisionDescription(e, n) + ", input='" + e.getTokenStream().getText(new Re(r, s)) + "'";
    e.notifyErrorListeners(a);
  }
  reportContextSensitivity(e, n, r, s, i, o) {
    const a = "reportContextSensitivity d=" + this.getDecisionDescription(e, n) + ", input='" + e.getTokenStream().getText(new Re(r, s)) + "'";
    e.notifyErrorListeners(a);
  }
  getDecisionDescription(e, n) {
    const r = n.decision, s = n.atnStartState.ruleIndex, i = e.ruleNames;
    if (s < 0 || s >= i.length)
      return "" + r;
    const o = i[s] || null;
    return o === null || o.length === 0 ? "" + r : `${r} (${o})`;
  }
  getConflictingAlts(e, n) {
    if (e !== null)
      return e;
    const r = new ln();
    for (let s = 0; s < n.items.length; s++)
      r.add(n.items[s].alt);
    return `{${r.values().join(", ")}}`;
  }
}
class Cl extends Error {
  constructor() {
    super(), Error.captureStackTrace(this, Cl);
  }
}
class G6 {
  reset(e) {
  }
  recoverInline(e) {
  }
  recover(e, n) {
  }
  sync(e) {
  }
  inErrorRecoveryMode(e) {
  }
  reportError(e) {
  }
}
class El extends G6 {
  constructor() {
    super(), this.errorRecoveryMode = !1, this.lastErrorIndex = -1, this.lastErrorStates = null, this.nextTokensContext = null, this.nextTokenState = 0;
  }
  reset(e) {
    this.endErrorCondition(e);
  }
  beginErrorCondition(e) {
    this.errorRecoveryMode = !0;
  }
  inErrorRecoveryMode(e) {
    return this.errorRecoveryMode;
  }
  endErrorCondition(e) {
    this.errorRecoveryMode = !1, this.lastErrorStates = null, this.lastErrorIndex = -1;
  }
  reportMatch(e) {
    this.endErrorCondition(e);
  }
  reportError(e, n) {
    this.inErrorRecoveryMode(e) || (this.beginErrorCondition(e), n instanceof _l ? this.reportNoViableAlternative(e, n) : n instanceof As ? this.reportInputMismatch(e, n) : n instanceof Q2 ? this.reportFailedPredicate(e, n) : (console.log("unknown recognition error type: " + n.constructor.name), console.log(n.stack), e.notifyErrorListeners(n.getOffendingToken(), n.getMessage(), n)));
  }
  recover(e, n) {
    this.lastErrorIndex === e.getInputStream().index && this.lastErrorStates !== null && this.lastErrorStates.indexOf(e.state) >= 0 && e.consume(), this.lastErrorIndex = e._input.index, this.lastErrorStates === null && (this.lastErrorStates = []), this.lastErrorStates.push(e.state);
    const r = this.getErrorRecoverySet(e);
    this.consumeUntil(e, r);
  }
  sync(e) {
    if (this.inErrorRecoveryMode(e))
      return;
    const n = e._interp.atn.states[e.state], r = e.getTokenStream().LA(1), s = e.atn.nextTokens(n);
    if (s.contains(r)) {
      this.nextTokensContext = null, this.nextTokenState = J.INVALID_STATE_NUMBER;
      return;
    } else if (s.contains(M.EPSILON)) {
      this.nextTokensContext === null && (this.nextTokensContext = e._ctx, this.nextTokensState = e._stateNumber);
      return;
    }
    switch (n.stateType) {
      case J.BLOCK_START:
      case J.STAR_BLOCK_START:
      case J.PLUS_BLOCK_START:
      case J.STAR_LOOP_ENTRY:
        if (this.singleTokenDeletion(e) !== null)
          return;
        throw new As(e);
      case J.PLUS_LOOP_BACK:
      case J.STAR_LOOP_BACK:
        {
          this.reportUnwantedToken(e);
          const i = new Gt();
          i.addSet(e.getExpectedTokens());
          const o = i.addSet(this.getErrorRecoverySet(e));
          this.consumeUntil(e, o);
        }
        break;
    }
  }
  reportNoViableAlternative(e, n) {
    const r = e.getTokenStream();
    let s;
    r !== null ? n.startToken.type === M.EOF ? s = "<EOF>" : s = r.getText(new Re(n.startToken.tokenIndex, n.offendingToken.tokenIndex)) : s = "<unknown input>";
    const i = "no viable alternative at input " + this.escapeWSAndQuote(s);
    e.notifyErrorListeners(i, n.offendingToken, n);
  }
  reportInputMismatch(e, n) {
    const r = "mismatched input " + this.getTokenErrorDisplay(n.offendingToken) + " expecting " + n.getExpectedTokens().toString(e.literalNames, e.symbolicNames);
    e.notifyErrorListeners(r, n.offendingToken, n);
  }
  reportFailedPredicate(e, n) {
    const r = "rule " + e.ruleNames[e._ctx.ruleIndex] + " " + n.message;
    e.notifyErrorListeners(r, n.offendingToken, n);
  }
  reportUnwantedToken(e) {
    if (this.inErrorRecoveryMode(e))
      return;
    this.beginErrorCondition(e);
    const n = e.getCurrentToken(), r = this.getTokenErrorDisplay(n), s = this.getExpectedTokens(e), i = "extraneous input " + r + " expecting " + s.toString(e.literalNames, e.symbolicNames);
    e.notifyErrorListeners(i, n, null);
  }
  reportMissingToken(e) {
    if (this.inErrorRecoveryMode(e))
      return;
    this.beginErrorCondition(e);
    const n = e.getCurrentToken(), r = "missing " + this.getExpectedTokens(e).toString(e.literalNames, e.symbolicNames) + " at " + this.getTokenErrorDisplay(n);
    e.notifyErrorListeners(r, n, null);
  }
  recoverInline(e) {
    const n = this.singleTokenDeletion(e);
    if (n !== null)
      return e.consume(), n;
    if (this.singleTokenInsertion(e))
      return this.getMissingSymbol(e);
    throw new As(e);
  }
  singleTokenInsertion(e) {
    const n = e.getTokenStream().LA(1), r = e._interp.atn, s = r.states[e.state].transitions[0].target;
    return r.nextTokens(s, e._ctx).contains(n) ? (this.reportMissingToken(e), !0) : !1;
  }
  singleTokenDeletion(e) {
    const n = e.getTokenStream().LA(2);
    if (this.getExpectedTokens(e).contains(n)) {
      this.reportUnwantedToken(e), e.consume();
      const r = e.getCurrentToken();
      return this.reportMatch(e), r;
    } else
      return null;
  }
  getMissingSymbol(e) {
    const n = e.getCurrentToken(), r = this.getExpectedTokens(e).first();
    let s;
    r === M.EOF ? s = "<missing EOF>" : s = "<missing " + e.literalNames[r] + ">";
    let i = n;
    const o = e.getTokenStream().LT(-1);
    return i.type === M.EOF && o !== null && (i = o), e.getTokenFactory().create(
      i.source,
      r,
      s,
      M.DEFAULT_CHANNEL,
      -1,
      -1,
      i.line,
      i.column
    );
  }
  getExpectedTokens(e) {
    return e.getExpectedTokens();
  }
  getTokenErrorDisplay(e) {
    if (e === null)
      return "<no token>";
    let n = e.text;
    return n === null && (e.type === M.EOF ? n = "<EOF>" : n = "<" + e.type + ">"), this.escapeWSAndQuote(n);
  }
  escapeWSAndQuote(e) {
    return e = e.replace(/\n/g, "\\n"), e = e.replace(/\r/g, "\\r"), e = e.replace(/\t/g, "\\t"), "'" + e + "'";
  }
  getErrorRecoverySet(e) {
    const n = e._interp.atn;
    let r = e._ctx;
    const s = new Gt();
    for (; r !== null && r.invokingState >= 0; ) {
      const i = n.states[r.invokingState].transitions[0], o = n.nextTokens(i.followState);
      s.addSet(o), r = r.parentCtx;
    }
    return s.removeOne(M.EPSILON), s;
  }
  consumeUntil(e, n) {
    let r = e.getTokenStream().LA(1);
    for (; r !== M.EOF && !n.contains(r); )
      e.consume(), r = e.getTokenStream().LA(1);
  }
}
class j6 extends El {
  constructor() {
    super();
  }
  recover(e, n) {
    let r = e._ctx;
    for (; r !== null; )
      r.exception = n, r = r.parentCtx;
    throw new Cl(n);
  }
  recoverInline(e) {
    this.recover(e, new As(e));
  }
  sync(e) {
  }
}
const $6 = {
  RecognitionException: Qn,
  NoViableAltException: _l,
  LexerNoViableAltException: bl,
  InputMismatchException: As,
  FailedPredicateException: Q2,
  DiagnosticErrorListener: V6,
  BailErrorStrategy: j6,
  DefaultErrorStrategy: El,
  ErrorListener: Do
};
class sr {
  constructor(e, n) {
    if (this.name = "<empty>", this.strdata = e, this.decodeToUnicodeCodePoints = n || !1, this._index = 0, this.data = [], this.decodeToUnicodeCodePoints)
      for (let r = 0; r < this.strdata.length; ) {
        const s = this.strdata.codePointAt(r);
        this.data.push(s), r += s <= 65535 ? 1 : 2;
      }
    else {
      this.data = new Array(this.strdata.length);
      for (let r = 0; r < this.strdata.length; r++) {
        const s = this.strdata.charCodeAt(r);
        this.data[r] = s;
      }
    }
    this._size = this.data.length;
  }
  reset() {
    this._index = 0;
  }
  consume() {
    if (this._index >= this._size)
      throw "cannot consume EOF";
    this._index += 1;
  }
  LA(e) {
    if (e === 0)
      return 0;
    e < 0 && (e += 1);
    const n = this._index + e - 1;
    return n < 0 || n >= this._size ? M.EOF : this.data[n];
  }
  LT(e) {
    return this.LA(e);
  }
  mark() {
    return -1;
  }
  release(e) {
  }
  seek(e) {
    if (e <= this._index) {
      this._index = e;
      return;
    }
    this._index = Math.min(e, this._size);
  }
  getText(e, n) {
    if (n >= this._size && (n = this._size - 1), e >= this._size)
      return "";
    if (this.decodeToUnicodeCodePoints) {
      let r = "";
      for (let s = e; s <= n; s++)
        r += String.fromCodePoint(this.data[s]);
      return r;
    } else
      return this.strdata.slice(e, n + 1);
  }
  toString() {
    return this.strdata;
  }
  get index() {
    return this._index;
  }
  get size() {
    return this._size;
  }
}
const la = {}, q6 = {
  fromString: function(t) {
    return new sr(t, !0);
  },
  fromBlob: function(t, e, n, r) {
    const s = new window.FileReader();
    s.onload = function(i) {
      const o = new sr(i.target.result, !0);
      n(o);
    }, s.onerror = r, s.readAsText(t, e);
  },
  fromBuffer: function(t, e) {
    return new sr(t.toString(e), !0);
  },
  fromPath: function(t, e, n) {
    la.readFile(t, e, function(r, s) {
      let i = null;
      s !== null && (i = new sr(s, !0)), n(r, i);
    });
  },
  fromPathSync: function(t, e) {
    const n = la.readFileSync(t, e);
    return new sr(n, !0);
  }
};
class Z6 extends sr {
  constructor(e, n) {
    const r = la.readFileSync(e, "utf8");
    super(r, n), this.fileName = e;
  }
}
class W6 {
}
class Y6 extends W6 {
  constructor(e) {
    super(), this.tokenSource = e, this.tokens = [], this.index = -1, this.fetchedEOF = !1;
  }
  mark() {
    return 0;
  }
  release(e) {
  }
  reset() {
    this.seek(0);
  }
  seek(e) {
    this.lazyInit(), this.index = this.adjustSeekIndex(e);
  }
  get(e) {
    return this.lazyInit(), this.tokens[e];
  }
  consume() {
    let e = !1;
    if (this.index >= 0 ? this.fetchedEOF ? e = this.index < this.tokens.length - 1 : e = this.index < this.tokens.length : e = !1, !e && this.LA(1) === M.EOF)
      throw "cannot consume EOF";
    this.sync(this.index + 1) && (this.index = this.adjustSeekIndex(this.index + 1));
  }
  sync(e) {
    const n = e - this.tokens.length + 1;
    return n > 0 ? this.fetch(n) >= n : !0;
  }
  fetch(e) {
    if (this.fetchedEOF)
      return 0;
    for (let n = 0; n < e; n++) {
      const r = this.tokenSource.nextToken();
      if (r.tokenIndex = this.tokens.length, this.tokens.push(r), r.type === M.EOF)
        return this.fetchedEOF = !0, n + 1;
    }
    return e;
  }
  getTokens(e, n, r) {
    if (r === void 0 && (r = null), e < 0 || n < 0)
      return null;
    this.lazyInit();
    const s = [];
    n >= this.tokens.length && (n = this.tokens.length - 1);
    for (let i = e; i < n; i++) {
      const o = this.tokens[i];
      if (o.type === M.EOF)
        break;
      (r === null || r.contains(o.type)) && s.push(o);
    }
    return s;
  }
  LA(e) {
    return this.LT(e).type;
  }
  LB(e) {
    return this.index - e < 0 ? null : this.tokens[this.index - e];
  }
  LT(e) {
    if (this.lazyInit(), e === 0)
      return null;
    if (e < 0)
      return this.LB(-e);
    const n = this.index + e - 1;
    return this.sync(n), n >= this.tokens.length ? this.tokens[this.tokens.length - 1] : this.tokens[n];
  }
  adjustSeekIndex(e) {
    return e;
  }
  lazyInit() {
    this.index === -1 && this.setup();
  }
  setup() {
    this.sync(0), this.index = this.adjustSeekIndex(0);
  }
  setTokenSource(e) {
    this.tokenSource = e, this.tokens = [], this.index = -1, this.fetchedEOF = !1;
  }
  nextTokenOnChannel(e, n) {
    if (this.sync(e), e >= this.tokens.length)
      return -1;
    let r = this.tokens[e];
    for (; r.channel !== this.channel; ) {
      if (r.type === M.EOF)
        return -1;
      e += 1, this.sync(e), r = this.tokens[e];
    }
    return e;
  }
  previousTokenOnChannel(e, n) {
    for (; e >= 0 && this.tokens[e].channel !== n; )
      e -= 1;
    return e;
  }
  getHiddenTokensToRight(e, n) {
    if (n === void 0 && (n = -1), this.lazyInit(), e < 0 || e >= this.tokens.length)
      throw "" + e + " not in 0.." + this.tokens.length - 1;
    const r = this.nextTokenOnChannel(e + 1, We.DEFAULT_TOKEN_CHANNEL), s = e + 1, i = r === -1 ? this.tokens.length - 1 : r;
    return this.filterForChannel(s, i, n);
  }
  getHiddenTokensToLeft(e, n) {
    if (n === void 0 && (n = -1), this.lazyInit(), e < 0 || e >= this.tokens.length)
      throw "" + e + " not in 0.." + this.tokens.length - 1;
    const r = this.previousTokenOnChannel(e - 1, We.DEFAULT_TOKEN_CHANNEL);
    if (r === e - 1)
      return null;
    const s = r + 1, i = e - 1;
    return this.filterForChannel(s, i, n);
  }
  filterForChannel(e, n, r) {
    const s = [];
    for (let i = e; i < n + 1; i++) {
      const o = this.tokens[i];
      r === -1 ? o.channel !== We.DEFAULT_TOKEN_CHANNEL && s.push(o) : o.channel === r && s.push(o);
    }
    return s.length === 0 ? null : s;
  }
  getSourceName() {
    return this.tokenSource.getSourceName();
  }
  getText(e) {
    this.lazyInit(), this.fill(), e == null && (e = new Re(0, this.tokens.length - 1));
    let n = e.start;
    n instanceof M && (n = n.tokenIndex);
    let r = e.stop;
    if (r instanceof M && (r = r.tokenIndex), n === null || r === null || n < 0 || r < 0)
      return "";
    r >= this.tokens.length && (r = this.tokens.length - 1);
    let s = "";
    for (let i = n; i < r + 1; i++) {
      const o = this.tokens[i];
      if (o.type === M.EOF)
        break;
      s = s + o.text;
    }
    return s;
  }
  fill() {
    for (this.lazyInit(); this.fetch(1e3) === 1e3; )
      ;
  }
}
class K6 extends Y6 {
  constructor(e, n) {
    super(e), this.channel = n === void 0 ? M.DEFAULT_CHANNEL : n;
  }
  adjustSeekIndex(e) {
    return this.nextTokenOnChannel(e, this.channel);
  }
  LB(e) {
    if (e === 0 || this.index - e < 0)
      return null;
    let n = this.index, r = 1;
    for (; r <= e; )
      n = this.previousTokenOnChannel(n - 1, this.channel), r += 1;
    return n < 0 ? null : this.tokens[n];
  }
  LT(e) {
    if (this.lazyInit(), e === 0)
      return null;
    if (e < 0)
      return this.LB(-e);
    let n = this.index, r = 1;
    for (; r < e; )
      this.sync(n + 1) && (n = this.nextTokenOnChannel(n + 1, this.channel)), r += 1;
    return this.tokens[n];
  }
  getNumberOfOnChannelTokens() {
    let e = 0;
    this.fill();
    for (let n = 0; n < this.tokens.length; n++) {
      const r = this.tokens[n];
      if (r.channel === this.channel && (e += 1), r.type === M.EOF)
        break;
    }
    return e;
  }
}
class Q6 extends K2 {
  constructor(e) {
    super(), this.parser = e;
  }
  enterEveryRule(e) {
    console.log("enter   " + this.parser.ruleNames[e.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
  }
  visitTerminal(e) {
    console.log("consume " + e.symbol + " rule " + this.parser.ruleNames[this.parser._ctx.ruleIndex]);
  }
  exitEveryRule(e) {
    console.log("exit    " + this.parser.ruleNames[e.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
  }
}
class X2 extends Bo {
  constructor(e) {
    super(), this._input = null, this._errHandler = new El(), this._precedenceStack = [], this._precedenceStack.push(0), this._ctx = null, this.buildParseTrees = !0, this._tracer = null, this._parseListeners = null, this._syntaxErrors = 0, this.setInputStream(e);
  }
  reset() {
    this._input !== null && this._input.seek(0), this._errHandler.reset(this), this._ctx = null, this._syntaxErrors = 0, this.setTrace(!1), this._precedenceStack = [], this._precedenceStack.push(0), this._interp !== null && this._interp.reset();
  }
  match(e) {
    let n = this.getCurrentToken();
    return n.type === e ? (this._errHandler.reportMatch(this), this.consume()) : (n = this._errHandler.recoverInline(this), this.buildParseTrees && n.tokenIndex === -1 && this._ctx.addErrorNode(n)), n;
  }
  matchWildcard() {
    let e = this.getCurrentToken();
    return e.type > 0 ? (this._errHandler.reportMatch(this), this.consume()) : (e = this._errHandler.recoverInline(this), this._buildParseTrees && e.tokenIndex === -1 && this._ctx.addErrorNode(e)), e;
  }
  getParseListeners() {
    return this._parseListeners || [];
  }
  addParseListener(e) {
    if (e === null)
      throw "listener";
    this._parseListeners === null && (this._parseListeners = []), this._parseListeners.push(e);
  }
  removeParseListener(e) {
    if (this._parseListeners !== null) {
      const n = this._parseListeners.indexOf(e);
      n >= 0 && this._parseListeners.splice(n, 1), this._parseListeners.length === 0 && (this._parseListeners = null);
    }
  }
  removeParseListeners() {
    this._parseListeners = null;
  }
  triggerEnterRuleEvent() {
    if (this._parseListeners !== null) {
      const e = this._ctx;
      this._parseListeners.forEach(function(n) {
        n.enterEveryRule(e), e.enterRule(n);
      });
    }
  }
  triggerExitRuleEvent() {
    if (this._parseListeners !== null) {
      const e = this._ctx;
      this._parseListeners.slice(0).reverse().forEach(function(n) {
        e.exitRule(n), n.exitEveryRule(e);
      });
    }
  }
  getTokenFactory() {
    return this._input.tokenSource._factory;
  }
  setTokenFactory(e) {
    this._input.tokenSource._factory = e;
  }
  getATNWithBypassAlts() {
    const e = this.getSerializedATN();
    if (e === null)
      throw "The current parser does not support an ATN with bypass alternatives.";
    let n = this.bypassAltsAtnCache[e];
    if (n === null) {
      const r = new Hs();
      r.generateRuleBypassTransitions = !0, n = new Z2(r).deserialize(e), this.bypassAltsAtnCache[e] = n;
    }
    return n;
  }
  getInputStream() {
    return this.getTokenStream();
  }
  setInputStream(e) {
    this.setTokenStream(e);
  }
  getTokenStream() {
    return this._input;
  }
  setTokenStream(e) {
    this._input = null, this.reset(), this._input = e;
  }
  getCurrentToken() {
    return this._input.LT(1);
  }
  notifyErrorListeners(e, n, r) {
    n = n || null, r = r || null, n === null && (n = this.getCurrentToken()), this._syntaxErrors += 1;
    const s = n.line, i = n.column;
    this.getErrorListenerDispatch().syntaxError(this, n, s, i, e, r);
  }
  consume() {
    const e = this.getCurrentToken();
    e.type !== M.EOF && this.getInputStream().consume();
    const n = this._parseListeners !== null && this._parseListeners.length > 0;
    if (this.buildParseTrees || n) {
      let r;
      this._errHandler.inErrorRecoveryMode(this) ? r = this._ctx.addErrorNode(e) : r = this._ctx.addTokenNode(e), r.invokingState = this.state, n && this._parseListeners.forEach(function(s) {
        r instanceof Mo || r.isErrorNode !== void 0 && r.isErrorNode() ? s.visitErrorNode(r) : r instanceof En && s.visitTerminal(r);
      });
    }
    return e;
  }
  addContextToParseTree() {
    this._ctx.parentCtx !== null && this._ctx.parentCtx.addChild(this._ctx);
  }
  enterRule(e, n, r) {
    this.state = n, this._ctx = e, this._ctx.start = this._input.LT(1), this.buildParseTrees && this.addContextToParseTree(), this.triggerEnterRuleEvent();
  }
  exitRule() {
    this._ctx.stop = this._input.LT(-1), this.triggerExitRuleEvent(), this.state = this._ctx.invokingState, this._ctx = this._ctx.parentCtx;
  }
  enterOuterAlt(e, n) {
    e.setAltNumber(n), this.buildParseTrees && this._ctx !== e && this._ctx.parentCtx !== null && (this._ctx.parentCtx.removeLastChild(), this._ctx.parentCtx.addChild(e)), this._ctx = e;
  }
  getPrecedence() {
    return this._precedenceStack.length === 0 ? -1 : this._precedenceStack[this._precedenceStack.length - 1];
  }
  enterRecursionRule(e, n, r, s) {
    this.state = n, this._precedenceStack.push(s), this._ctx = e, this._ctx.start = this._input.LT(1), this.triggerEnterRuleEvent();
  }
  pushNewRecursionContext(e, n, r) {
    const s = this._ctx;
    s.parentCtx = e, s.invokingState = n, s.stop = this._input.LT(-1), this._ctx = e, this._ctx.start = s.start, this.buildParseTrees && this._ctx.addChild(s), this.triggerEnterRuleEvent();
  }
  unrollRecursionContexts(e) {
    this._precedenceStack.pop(), this._ctx.stop = this._input.LT(-1);
    const n = this._ctx, r = this.getParseListeners();
    if (r !== null && r.length > 0)
      for (; this._ctx !== e; )
        this.triggerExitRuleEvent(), this._ctx = this._ctx.parentCtx;
    else
      this._ctx = e;
    n.parentCtx = e, this.buildParseTrees && e !== null && e.addChild(n);
  }
  getInvokingContext(e) {
    let n = this._ctx;
    for (; n !== null; ) {
      if (n.ruleIndex === e)
        return n;
      n = n.parentCtx;
    }
    return null;
  }
  precpred(e, n) {
    return n >= this._precedenceStack[this._precedenceStack.length - 1];
  }
  inContext(e) {
    return !1;
  }
  isExpectedToken(e) {
    const n = this._interp.atn;
    let r = this._ctx;
    const s = n.states[this.state];
    let i = n.nextTokens(s);
    if (i.contains(e))
      return !0;
    if (!i.contains(M.EPSILON))
      return !1;
    for (; r !== null && r.invokingState >= 0 && i.contains(M.EPSILON); ) {
      const o = n.states[r.invokingState].transitions[0];
      if (i = n.nextTokens(o.followState), i.contains(e))
        return !0;
      r = r.parentCtx;
    }
    return !!(i.contains(M.EPSILON) && e === M.EOF);
  }
  getExpectedTokens() {
    return this._interp.atn.getExpectedTokens(this.state, this._ctx);
  }
  getExpectedTokensWithinCurrentRule() {
    const e = this._interp.atn, n = e.states[this.state];
    return e.nextTokens(n);
  }
  getRuleIndex(e) {
    const n = this.getRuleIndexMap()[e];
    return n !== null ? n : -1;
  }
  getRuleInvocationStack(e) {
    e = e || null, e === null && (e = this._ctx);
    const n = [];
    for (; e !== null; ) {
      const r = e.ruleIndex;
      r < 0 ? n.push("n/a") : n.push(this.ruleNames[r]), e = e.parentCtx;
    }
    return n;
  }
  getDFAStrings() {
    return this._interp.decisionToDFA.toString();
  }
  dumpDFA() {
    let e = !1;
    for (let n = 0; n < this._interp.decisionToDFA.length; n++) {
      const r = this._interp.decisionToDFA[n];
      r.states.length > 0 && (e && console.log(), this.printer.println("Decision " + r.decision + ":"), this.printer.print(r.toString(this.literalNames, this.symbolicNames)), e = !0);
    }
  }
  getSourceName() {
    return this._input.sourceName;
  }
  setTrace(e) {
    e ? (this._tracer !== null && this.removeParseListener(this._tracer), this._tracer = new Q6(this), this.addParseListener(this._tracer)) : (this.removeParseListener(this._tracer), this._tracer = null);
  }
}
X2.bypassAltsAtnCache = {};
class X6 {
  constructor() {
    this.cache = new ii();
  }
  add(e) {
    if (e === xe.EMPTY)
      return xe.EMPTY;
    const n = this.cache.get(e) || null;
    return n !== null ? n : (this.cache.set(e, e), e);
  }
  get(e) {
    return this.cache.get(e) || null;
  }
  get length() {
    return this.cache.length;
  }
}
class J2 extends En {
  constructor(e) {
    super(), this.parentCtx = null, this.symbol = e;
  }
  getChild(e) {
    return null;
  }
  getSymbol() {
    return this.symbol;
  }
  getParent() {
    return this.parentCtx;
  }
  getPayload() {
    return this.symbol;
  }
  getSourceInterval() {
    if (this.symbol === null)
      return Re.INVALID_INTERVAL;
    const e = this.symbol.tokenIndex;
    return new Re(e, e);
  }
  getChildCount() {
    return 0;
  }
  accept(e) {
    return e.visitTerminal(this);
  }
  getText() {
    return this.symbol.text;
  }
  toString() {
    return this.symbol.type === M.EOF ? "<EOF>" : this.symbol.text;
  }
}
class A0 extends J2 {
  constructor(e) {
    super(e);
  }
  isErrorNode() {
    return !0;
  }
  accept(e) {
    return e.visitErrorNode(this);
  }
}
class ed extends Kr {
  constructor(e, n) {
    e = e || null, n = n || null, super(e, n), this.ruleIndex = -1, this.children = null, this.start = null, this.stop = null, this.exception = null;
  }
  copyFrom(e) {
    this.parentCtx = e.parentCtx, this.invokingState = e.invokingState, this.children = null, this.start = e.start, this.stop = e.stop, e.children && (this.children = [], e.children.map(function(n) {
      n instanceof A0 && (this.children.push(n), n.parentCtx = this);
    }, this));
  }
  enterRule(e) {
  }
  exitRule(e) {
  }
  addChild(e) {
    return this.children === null && (this.children = []), this.children.push(e), e;
  }
  removeLastChild() {
    this.children !== null && this.children.pop();
  }
  addTokenNode(e) {
    const n = new J2(e);
    return this.addChild(n), n.parentCtx = this, n;
  }
  addErrorNode(e) {
    const n = new A0(e);
    return this.addChild(n), n.parentCtx = this, n;
  }
  getChild(e, n) {
    if (n = n || null, this.children === null || e < 0 || e >= this.children.length)
      return null;
    if (n === null)
      return this.children[e];
    for (let r = 0; r < this.children.length; r++) {
      const s = this.children[r];
      if (s instanceof n) {
        if (e === 0)
          return s;
        e -= 1;
      }
    }
    return null;
  }
  getToken(e, n) {
    if (this.children === null || n < 0 || n >= this.children.length)
      return null;
    for (let r = 0; r < this.children.length; r++) {
      const s = this.children[r];
      if (s instanceof En && s.symbol.type === e) {
        if (n === 0)
          return s;
        n -= 1;
      }
    }
    return null;
  }
  getTokens(e) {
    if (this.children === null)
      return [];
    {
      const n = [];
      for (let r = 0; r < this.children.length; r++) {
        const s = this.children[r];
        s instanceof En && s.symbol.type === e && n.push(s);
      }
      return n;
    }
  }
  getTypedRuleContext(e, n) {
    return this.getChild(n, e);
  }
  getTypedRuleContexts(e) {
    if (this.children === null)
      return [];
    {
      const n = [];
      for (let r = 0; r < this.children.length; r++) {
        const s = this.children[r];
        s instanceof e && n.push(s);
      }
      return n;
    }
  }
  getChildCount() {
    return this.children === null ? 0 : this.children.length;
  }
  getSourceInterval() {
    return this.start === null || this.stop === null ? Re.INVALID_INTERVAL : new Re(this.start.tokenIndex, this.stop.tokenIndex);
  }
}
Kr.EMPTY = new ed();
const J6 = { arrayToString: Un }, v = {
  atn: F6,
  dfa: D6,
  tree: U6,
  error: $6,
  Token: M,
  CommonToken: Lr,
  CharStreams: q6,
  InputStream: sr,
  FileStream: Z6,
  CommonTokenStream: K6,
  Lexer: We,
  Parser: X2,
  PredictionContextCache: X6,
  ParserRuleContext: ed,
  Interval: Re,
  IntervalSet: Gt,
  LL1Analyzer: Qr,
  Utils: J6
}, ef = [
  4,
  0,
  65,
  511,
  6,
  -1,
  6,
  -1,
  6,
  -1,
  2,
  0,
  7,
  0,
  2,
  1,
  7,
  1,
  2,
  2,
  7,
  2,
  2,
  3,
  7,
  3,
  2,
  4,
  7,
  4,
  2,
  5,
  7,
  5,
  2,
  6,
  7,
  6,
  2,
  7,
  7,
  7,
  2,
  8,
  7,
  8,
  2,
  9,
  7,
  9,
  2,
  10,
  7,
  10,
  2,
  11,
  7,
  11,
  2,
  12,
  7,
  12,
  2,
  13,
  7,
  13,
  2,
  14,
  7,
  14,
  2,
  15,
  7,
  15,
  2,
  16,
  7,
  16,
  2,
  17,
  7,
  17,
  2,
  18,
  7,
  18,
  2,
  19,
  7,
  19,
  2,
  20,
  7,
  20,
  2,
  21,
  7,
  21,
  2,
  22,
  7,
  22,
  2,
  23,
  7,
  23,
  2,
  24,
  7,
  24,
  2,
  25,
  7,
  25,
  2,
  26,
  7,
  26,
  2,
  27,
  7,
  27,
  2,
  28,
  7,
  28,
  2,
  29,
  7,
  29,
  2,
  30,
  7,
  30,
  2,
  31,
  7,
  31,
  2,
  32,
  7,
  32,
  2,
  33,
  7,
  33,
  2,
  34,
  7,
  34,
  2,
  35,
  7,
  35,
  2,
  36,
  7,
  36,
  2,
  37,
  7,
  37,
  2,
  38,
  7,
  38,
  2,
  39,
  7,
  39,
  2,
  40,
  7,
  40,
  2,
  41,
  7,
  41,
  2,
  42,
  7,
  42,
  2,
  43,
  7,
  43,
  2,
  44,
  7,
  44,
  2,
  45,
  7,
  45,
  2,
  46,
  7,
  46,
  2,
  47,
  7,
  47,
  2,
  48,
  7,
  48,
  2,
  49,
  7,
  49,
  2,
  50,
  7,
  50,
  2,
  51,
  7,
  51,
  2,
  52,
  7,
  52,
  2,
  53,
  7,
  53,
  2,
  54,
  7,
  54,
  2,
  55,
  7,
  55,
  2,
  56,
  7,
  56,
  2,
  57,
  7,
  57,
  2,
  58,
  7,
  58,
  2,
  59,
  7,
  59,
  2,
  60,
  7,
  60,
  2,
  61,
  7,
  61,
  2,
  62,
  7,
  62,
  2,
  63,
  7,
  63,
  2,
  64,
  7,
  64,
  2,
  65,
  7,
  65,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  8,
  1,
  8,
  1,
  8,
  1,
  9,
  1,
  9,
  1,
  9,
  1,
  10,
  1,
  10,
  1,
  11,
  1,
  11,
  4,
  11,
  201,
  8,
  11,
  11,
  11,
  12,
  11,
  202,
  1,
  12,
  1,
  12,
  1,
  12,
  1,
  13,
  1,
  13,
  1,
  13,
  1,
  14,
  1,
  14,
  1,
  14,
  1,
  15,
  1,
  15,
  1,
  15,
  1,
  16,
  1,
  16,
  1,
  17,
  1,
  17,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  20,
  1,
  20,
  1,
  21,
  1,
  21,
  1,
  22,
  1,
  22,
  1,
  23,
  1,
  23,
  1,
  24,
  1,
  24,
  1,
  25,
  1,
  25,
  1,
  26,
  1,
  26,
  1,
  27,
  1,
  27,
  1,
  28,
  1,
  28,
  1,
  29,
  1,
  29,
  1,
  30,
  1,
  30,
  1,
  31,
  1,
  31,
  1,
  32,
  1,
  32,
  1,
  33,
  1,
  33,
  1,
  34,
  1,
  34,
  1,
  34,
  1,
  34,
  1,
  34,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  36,
  1,
  36,
  1,
  36,
  1,
  36,
  1,
  36,
  1,
  36,
  1,
  36,
  3,
  36,
  273,
  8,
  36,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  38,
  1,
  38,
  1,
  38,
  1,
  38,
  1,
  38,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  39,
  3,
  39,
  309,
  8,
  39,
  1,
  40,
  1,
  40,
  1,
  40,
  1,
  40,
  1,
  40,
  1,
  40,
  1,
  40,
  1,
  41,
  1,
  41,
  1,
  41,
  1,
  41,
  1,
  42,
  1,
  42,
  1,
  42,
  1,
  42,
  1,
  43,
  1,
  43,
  1,
  43,
  1,
  43,
  1,
  43,
  1,
  43,
  1,
  44,
  1,
  44,
  1,
  44,
  1,
  44,
  1,
  45,
  1,
  45,
  1,
  45,
  1,
  46,
  1,
  46,
  1,
  46,
  1,
  46,
  1,
  47,
  1,
  47,
  1,
  47,
  1,
  47,
  1,
  47,
  1,
  47,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  49,
  1,
  49,
  1,
  49,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  3,
  50,
  376,
  8,
  50,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  3,
  51,
  404,
  8,
  51,
  1,
  52,
  1,
  52,
  5,
  52,
  408,
  8,
  52,
  10,
  52,
  12,
  52,
  411,
  9,
  52,
  1,
  53,
  1,
  53,
  1,
  54,
  1,
  54,
  5,
  54,
  417,
  8,
  54,
  10,
  54,
  12,
  54,
  420,
  9,
  54,
  1,
  55,
  4,
  55,
  423,
  8,
  55,
  11,
  55,
  12,
  55,
  424,
  1,
  56,
  4,
  56,
  428,
  8,
  56,
  11,
  56,
  12,
  56,
  429,
  1,
  56,
  1,
  56,
  5,
  56,
  434,
  8,
  56,
  10,
  56,
  12,
  56,
  437,
  9,
  56,
  1,
  56,
  1,
  56,
  4,
  56,
  441,
  8,
  56,
  11,
  56,
  12,
  56,
  442,
  3,
  56,
  445,
  8,
  56,
  1,
  57,
  1,
  57,
  1,
  57,
  1,
  57,
  5,
  57,
  451,
  8,
  57,
  10,
  57,
  12,
  57,
  454,
  9,
  57,
  1,
  57,
  3,
  57,
  457,
  8,
  57,
  1,
  58,
  1,
  58,
  1,
  58,
  1,
  58,
  1,
  59,
  1,
  59,
  1,
  59,
  1,
  59,
  5,
  59,
  467,
  8,
  59,
  10,
  59,
  12,
  59,
  470,
  9,
  59,
  1,
  59,
  1,
  59,
  1,
  59,
  1,
  59,
  1,
  60,
  1,
  60,
  1,
  61,
  1,
  61,
  5,
  61,
  480,
  8,
  61,
  10,
  61,
  12,
  61,
  483,
  9,
  61,
  1,
  61,
  1,
  61,
  1,
  61,
  1,
  61,
  5,
  61,
  489,
  8,
  61,
  10,
  61,
  12,
  61,
  492,
  9,
  61,
  1,
  62,
  4,
  62,
  495,
  8,
  62,
  11,
  62,
  12,
  62,
  496,
  1,
  63,
  1,
  63,
  1,
  63,
  1,
  63,
  1,
  64,
  4,
  64,
  504,
  8,
  64,
  11,
  64,
  12,
  64,
  505,
  1,
  65,
  1,
  65,
  1,
  65,
  1,
  65,
  1,
  468,
  0,
  66,
  3,
  1,
  5,
  2,
  7,
  3,
  9,
  4,
  11,
  5,
  13,
  6,
  15,
  7,
  17,
  8,
  19,
  9,
  21,
  10,
  23,
  0,
  25,
  11,
  27,
  12,
  29,
  13,
  31,
  14,
  33,
  15,
  35,
  16,
  37,
  17,
  39,
  18,
  41,
  19,
  43,
  20,
  45,
  21,
  47,
  22,
  49,
  23,
  51,
  24,
  53,
  25,
  55,
  26,
  57,
  27,
  59,
  28,
  61,
  29,
  63,
  30,
  65,
  31,
  67,
  32,
  69,
  33,
  71,
  34,
  73,
  35,
  75,
  36,
  77,
  37,
  79,
  38,
  81,
  39,
  83,
  40,
  85,
  41,
  87,
  42,
  89,
  43,
  91,
  44,
  93,
  45,
  95,
  46,
  97,
  47,
  99,
  48,
  101,
  49,
  103,
  50,
  105,
  51,
  107,
  52,
  109,
  53,
  111,
  54,
  113,
  55,
  115,
  56,
  117,
  57,
  119,
  58,
  121,
  59,
  123,
  60,
  125,
  61,
  127,
  62,
  129,
  63,
  131,
  64,
  133,
  65,
  3,
  0,
  1,
  2,
  7,
  2,
  0,
  9,
  9,
  32,
  32,
  3,
  0,
  48,
  57,
  65,
  70,
  97,
  102,
  4,
  0,
  48,
  57,
  65,
  90,
  95,
  95,
  97,
  122,
  3,
  0,
  65,
  90,
  95,
  95,
  97,
  122,
  1,
  0,
  48,
  57,
  3,
  0,
  10,
  10,
  13,
  13,
  34,
  34,
  2,
  0,
  10,
  10,
  13,
  13,
  532,
  0,
  3,
  1,
  0,
  0,
  0,
  0,
  5,
  1,
  0,
  0,
  0,
  0,
  7,
  1,
  0,
  0,
  0,
  0,
  9,
  1,
  0,
  0,
  0,
  0,
  11,
  1,
  0,
  0,
  0,
  0,
  13,
  1,
  0,
  0,
  0,
  0,
  15,
  1,
  0,
  0,
  0,
  0,
  17,
  1,
  0,
  0,
  0,
  0,
  19,
  1,
  0,
  0,
  0,
  0,
  21,
  1,
  0,
  0,
  0,
  0,
  25,
  1,
  0,
  0,
  0,
  0,
  27,
  1,
  0,
  0,
  0,
  0,
  29,
  1,
  0,
  0,
  0,
  0,
  31,
  1,
  0,
  0,
  0,
  0,
  33,
  1,
  0,
  0,
  0,
  0,
  35,
  1,
  0,
  0,
  0,
  0,
  37,
  1,
  0,
  0,
  0,
  0,
  39,
  1,
  0,
  0,
  0,
  0,
  41,
  1,
  0,
  0,
  0,
  0,
  43,
  1,
  0,
  0,
  0,
  0,
  45,
  1,
  0,
  0,
  0,
  0,
  47,
  1,
  0,
  0,
  0,
  0,
  49,
  1,
  0,
  0,
  0,
  0,
  51,
  1,
  0,
  0,
  0,
  0,
  53,
  1,
  0,
  0,
  0,
  0,
  55,
  1,
  0,
  0,
  0,
  0,
  57,
  1,
  0,
  0,
  0,
  0,
  59,
  1,
  0,
  0,
  0,
  0,
  61,
  1,
  0,
  0,
  0,
  0,
  63,
  1,
  0,
  0,
  0,
  0,
  65,
  1,
  0,
  0,
  0,
  0,
  67,
  1,
  0,
  0,
  0,
  0,
  69,
  1,
  0,
  0,
  0,
  0,
  71,
  1,
  0,
  0,
  0,
  0,
  73,
  1,
  0,
  0,
  0,
  0,
  75,
  1,
  0,
  0,
  0,
  0,
  77,
  1,
  0,
  0,
  0,
  0,
  79,
  1,
  0,
  0,
  0,
  0,
  81,
  1,
  0,
  0,
  0,
  0,
  83,
  1,
  0,
  0,
  0,
  0,
  85,
  1,
  0,
  0,
  0,
  0,
  87,
  1,
  0,
  0,
  0,
  0,
  89,
  1,
  0,
  0,
  0,
  0,
  91,
  1,
  0,
  0,
  0,
  0,
  93,
  1,
  0,
  0,
  0,
  0,
  95,
  1,
  0,
  0,
  0,
  0,
  97,
  1,
  0,
  0,
  0,
  0,
  99,
  1,
  0,
  0,
  0,
  0,
  101,
  1,
  0,
  0,
  0,
  0,
  103,
  1,
  0,
  0,
  0,
  0,
  105,
  1,
  0,
  0,
  0,
  0,
  107,
  1,
  0,
  0,
  0,
  0,
  109,
  1,
  0,
  0,
  0,
  0,
  111,
  1,
  0,
  0,
  0,
  0,
  113,
  1,
  0,
  0,
  0,
  0,
  115,
  1,
  0,
  0,
  0,
  0,
  117,
  1,
  0,
  0,
  0,
  0,
  119,
  1,
  0,
  0,
  0,
  0,
  121,
  1,
  0,
  0,
  0,
  0,
  123,
  1,
  0,
  0,
  0,
  0,
  125,
  1,
  0,
  0,
  0,
  1,
  127,
  1,
  0,
  0,
  0,
  1,
  129,
  1,
  0,
  0,
  0,
  2,
  131,
  1,
  0,
  0,
  0,
  2,
  133,
  1,
  0,
  0,
  0,
  3,
  135,
  1,
  0,
  0,
  0,
  5,
  139,
  1,
  0,
  0,
  0,
  7,
  147,
  1,
  0,
  0,
  0,
  9,
  158,
  1,
  0,
  0,
  0,
  11,
  167,
  1,
  0,
  0,
  0,
  13,
  175,
  1,
  0,
  0,
  0,
  15,
  183,
  1,
  0,
  0,
  0,
  17,
  187,
  1,
  0,
  0,
  0,
  19,
  190,
  1,
  0,
  0,
  0,
  21,
  193,
  1,
  0,
  0,
  0,
  23,
  196,
  1,
  0,
  0,
  0,
  25,
  198,
  1,
  0,
  0,
  0,
  27,
  204,
  1,
  0,
  0,
  0,
  29,
  207,
  1,
  0,
  0,
  0,
  31,
  210,
  1,
  0,
  0,
  0,
  33,
  213,
  1,
  0,
  0,
  0,
  35,
  216,
  1,
  0,
  0,
  0,
  37,
  218,
  1,
  0,
  0,
  0,
  39,
  220,
  1,
  0,
  0,
  0,
  41,
  223,
  1,
  0,
  0,
  0,
  43,
  226,
  1,
  0,
  0,
  0,
  45,
  228,
  1,
  0,
  0,
  0,
  47,
  230,
  1,
  0,
  0,
  0,
  49,
  232,
  1,
  0,
  0,
  0,
  51,
  234,
  1,
  0,
  0,
  0,
  53,
  236,
  1,
  0,
  0,
  0,
  55,
  238,
  1,
  0,
  0,
  0,
  57,
  240,
  1,
  0,
  0,
  0,
  59,
  242,
  1,
  0,
  0,
  0,
  61,
  244,
  1,
  0,
  0,
  0,
  63,
  246,
  1,
  0,
  0,
  0,
  65,
  248,
  1,
  0,
  0,
  0,
  67,
  250,
  1,
  0,
  0,
  0,
  69,
  252,
  1,
  0,
  0,
  0,
  71,
  254,
  1,
  0,
  0,
  0,
  73,
  259,
  1,
  0,
  0,
  0,
  75,
  272,
  1,
  0,
  0,
  0,
  77,
  274,
  1,
  0,
  0,
  0,
  79,
  277,
  1,
  0,
  0,
  0,
  81,
  308,
  1,
  0,
  0,
  0,
  83,
  310,
  1,
  0,
  0,
  0,
  85,
  317,
  1,
  0,
  0,
  0,
  87,
  321,
  1,
  0,
  0,
  0,
  89,
  325,
  1,
  0,
  0,
  0,
  91,
  331,
  1,
  0,
  0,
  0,
  93,
  335,
  1,
  0,
  0,
  0,
  95,
  338,
  1,
  0,
  0,
  0,
  97,
  342,
  1,
  0,
  0,
  0,
  99,
  348,
  1,
  0,
  0,
  0,
  101,
  356,
  1,
  0,
  0,
  0,
  103,
  375,
  1,
  0,
  0,
  0,
  105,
  403,
  1,
  0,
  0,
  0,
  107,
  405,
  1,
  0,
  0,
  0,
  109,
  412,
  1,
  0,
  0,
  0,
  111,
  414,
  1,
  0,
  0,
  0,
  113,
  422,
  1,
  0,
  0,
  0,
  115,
  444,
  1,
  0,
  0,
  0,
  117,
  446,
  1,
  0,
  0,
  0,
  119,
  458,
  1,
  0,
  0,
  0,
  121,
  462,
  1,
  0,
  0,
  0,
  123,
  475,
  1,
  0,
  0,
  0,
  125,
  477,
  1,
  0,
  0,
  0,
  127,
  494,
  1,
  0,
  0,
  0,
  129,
  498,
  1,
  0,
  0,
  0,
  131,
  503,
  1,
  0,
  0,
  0,
  133,
  507,
  1,
  0,
  0,
  0,
  135,
  136,
  7,
  0,
  0,
  0,
  136,
  137,
  1,
  0,
  0,
  0,
  137,
  138,
  6,
  0,
  0,
  0,
  138,
  4,
  1,
  0,
  0,
  0,
  139,
  140,
  5,
  99,
  0,
  0,
  140,
  141,
  5,
  111,
  0,
  0,
  141,
  142,
  5,
  110,
  0,
  0,
  142,
  143,
  5,
  115,
  0,
  0,
  143,
  144,
  5,
  116,
  0,
  0,
  144,
  145,
  1,
  0,
  0,
  0,
  145,
  146,
  6,
  1,
  1,
  0,
  146,
  6,
  1,
  0,
  0,
  0,
  147,
  148,
  5,
  114,
  0,
  0,
  148,
  149,
  5,
  101,
  0,
  0,
  149,
  150,
  5,
  97,
  0,
  0,
  150,
  151,
  5,
  100,
  0,
  0,
  151,
  152,
  5,
  111,
  0,
  0,
  152,
  153,
  5,
  110,
  0,
  0,
  153,
  154,
  5,
  108,
  0,
  0,
  154,
  155,
  5,
  121,
  0,
  0,
  155,
  156,
  1,
  0,
  0,
  0,
  156,
  157,
  6,
  2,
  1,
  0,
  157,
  8,
  1,
  0,
  0,
  0,
  158,
  159,
  5,
  115,
  0,
  0,
  159,
  160,
  5,
  116,
  0,
  0,
  160,
  161,
  5,
  97,
  0,
  0,
  161,
  162,
  5,
  116,
  0,
  0,
  162,
  163,
  5,
  105,
  0,
  0,
  163,
  164,
  5,
  99,
  0,
  0,
  164,
  165,
  1,
  0,
  0,
  0,
  165,
  166,
  6,
  3,
  1,
  0,
  166,
  10,
  1,
  0,
  0,
  0,
  167,
  168,
  5,
  97,
  0,
  0,
  168,
  169,
  5,
  119,
  0,
  0,
  169,
  170,
  5,
  97,
  0,
  0,
  170,
  171,
  5,
  105,
  0,
  0,
  171,
  172,
  5,
  116,
  0,
  0,
  172,
  173,
  1,
  0,
  0,
  0,
  173,
  174,
  6,
  4,
  1,
  0,
  174,
  12,
  1,
  0,
  0,
  0,
  175,
  176,
  5,
  116,
  0,
  0,
  176,
  177,
  5,
  105,
  0,
  0,
  177,
  178,
  5,
  116,
  0,
  0,
  178,
  179,
  5,
  108,
  0,
  0,
  179,
  180,
  5,
  101,
  0,
  0,
  180,
  181,
  1,
  0,
  0,
  0,
  181,
  182,
  6,
  5,
  2,
  0,
  182,
  14,
  1,
  0,
  0,
  0,
  183,
  184,
  5,
  58,
  0,
  0,
  184,
  185,
  1,
  0,
  0,
  0,
  185,
  186,
  6,
  6,
  3,
  0,
  186,
  16,
  1,
  0,
  0,
  0,
  187,
  188,
  5,
  60,
  0,
  0,
  188,
  189,
  5,
  60,
  0,
  0,
  189,
  18,
  1,
  0,
  0,
  0,
  190,
  191,
  5,
  62,
  0,
  0,
  191,
  192,
  5,
  62,
  0,
  0,
  192,
  20,
  1,
  0,
  0,
  0,
  193,
  194,
  5,
  45,
  0,
  0,
  194,
  195,
  5,
  62,
  0,
  0,
  195,
  22,
  1,
  0,
  0,
  0,
  196,
  197,
  7,
  1,
  0,
  0,
  197,
  24,
  1,
  0,
  0,
  0,
  198,
  200,
  5,
  35,
  0,
  0,
  199,
  201,
  3,
  23,
  10,
  0,
  200,
  199,
  1,
  0,
  0,
  0,
  201,
  202,
  1,
  0,
  0,
  0,
  202,
  200,
  1,
  0,
  0,
  0,
  202,
  203,
  1,
  0,
  0,
  0,
  203,
  26,
  1,
  0,
  0,
  0,
  204,
  205,
  5,
  124,
  0,
  0,
  205,
  206,
  5,
  124,
  0,
  0,
  206,
  28,
  1,
  0,
  0,
  0,
  207,
  208,
  5,
  38,
  0,
  0,
  208,
  209,
  5,
  38,
  0,
  0,
  209,
  30,
  1,
  0,
  0,
  0,
  210,
  211,
  5,
  61,
  0,
  0,
  211,
  212,
  5,
  61,
  0,
  0,
  212,
  32,
  1,
  0,
  0,
  0,
  213,
  214,
  5,
  33,
  0,
  0,
  214,
  215,
  5,
  61,
  0,
  0,
  215,
  34,
  1,
  0,
  0,
  0,
  216,
  217,
  5,
  62,
  0,
  0,
  217,
  36,
  1,
  0,
  0,
  0,
  218,
  219,
  5,
  60,
  0,
  0,
  219,
  38,
  1,
  0,
  0,
  0,
  220,
  221,
  5,
  62,
  0,
  0,
  221,
  222,
  5,
  61,
  0,
  0,
  222,
  40,
  1,
  0,
  0,
  0,
  223,
  224,
  5,
  60,
  0,
  0,
  224,
  225,
  5,
  61,
  0,
  0,
  225,
  42,
  1,
  0,
  0,
  0,
  226,
  227,
  5,
  43,
  0,
  0,
  227,
  44,
  1,
  0,
  0,
  0,
  228,
  229,
  5,
  45,
  0,
  0,
  229,
  46,
  1,
  0,
  0,
  0,
  230,
  231,
  5,
  42,
  0,
  0,
  231,
  48,
  1,
  0,
  0,
  0,
  232,
  233,
  5,
  47,
  0,
  0,
  233,
  50,
  1,
  0,
  0,
  0,
  234,
  235,
  5,
  37,
  0,
  0,
  235,
  52,
  1,
  0,
  0,
  0,
  236,
  237,
  5,
  94,
  0,
  0,
  237,
  54,
  1,
  0,
  0,
  0,
  238,
  239,
  5,
  33,
  0,
  0,
  239,
  56,
  1,
  0,
  0,
  0,
  240,
  241,
  5,
  59,
  0,
  0,
  241,
  58,
  1,
  0,
  0,
  0,
  242,
  243,
  5,
  44,
  0,
  0,
  243,
  60,
  1,
  0,
  0,
  0,
  244,
  245,
  5,
  61,
  0,
  0,
  245,
  62,
  1,
  0,
  0,
  0,
  246,
  247,
  5,
  40,
  0,
  0,
  247,
  64,
  1,
  0,
  0,
  0,
  248,
  249,
  5,
  41,
  0,
  0,
  249,
  66,
  1,
  0,
  0,
  0,
  250,
  251,
  5,
  123,
  0,
  0,
  251,
  68,
  1,
  0,
  0,
  0,
  252,
  253,
  5,
  125,
  0,
  0,
  253,
  70,
  1,
  0,
  0,
  0,
  254,
  255,
  5,
  116,
  0,
  0,
  255,
  256,
  5,
  114,
  0,
  0,
  256,
  257,
  5,
  117,
  0,
  0,
  257,
  258,
  5,
  101,
  0,
  0,
  258,
  72,
  1,
  0,
  0,
  0,
  259,
  260,
  5,
  102,
  0,
  0,
  260,
  261,
  5,
  97,
  0,
  0,
  261,
  262,
  5,
  108,
  0,
  0,
  262,
  263,
  5,
  115,
  0,
  0,
  263,
  264,
  5,
  101,
  0,
  0,
  264,
  74,
  1,
  0,
  0,
  0,
  265,
  266,
  5,
  110,
  0,
  0,
  266,
  267,
  5,
  105,
  0,
  0,
  267,
  273,
  5,
  108,
  0,
  0,
  268,
  269,
  5,
  110,
  0,
  0,
  269,
  270,
  5,
  117,
  0,
  0,
  270,
  271,
  5,
  108,
  0,
  0,
  271,
  273,
  5,
  108,
  0,
  0,
  272,
  265,
  1,
  0,
  0,
  0,
  272,
  268,
  1,
  0,
  0,
  0,
  273,
  76,
  1,
  0,
  0,
  0,
  274,
  275,
  5,
  105,
  0,
  0,
  275,
  276,
  5,
  102,
  0,
  0,
  276,
  78,
  1,
  0,
  0,
  0,
  277,
  278,
  5,
  101,
  0,
  0,
  278,
  279,
  5,
  108,
  0,
  0,
  279,
  280,
  5,
  115,
  0,
  0,
  280,
  281,
  5,
  101,
  0,
  0,
  281,
  80,
  1,
  0,
  0,
  0,
  282,
  283,
  5,
  119,
  0,
  0,
  283,
  284,
  5,
  104,
  0,
  0,
  284,
  285,
  5,
  105,
  0,
  0,
  285,
  286,
  5,
  108,
  0,
  0,
  286,
  309,
  5,
  101,
  0,
  0,
  287,
  288,
  5,
  102,
  0,
  0,
  288,
  289,
  5,
  111,
  0,
  0,
  289,
  309,
  5,
  114,
  0,
  0,
  290,
  291,
  5,
  102,
  0,
  0,
  291,
  292,
  5,
  111,
  0,
  0,
  292,
  293,
  5,
  114,
  0,
  0,
  293,
  294,
  5,
  101,
  0,
  0,
  294,
  295,
  5,
  97,
  0,
  0,
  295,
  296,
  5,
  99,
  0,
  0,
  296,
  309,
  5,
  104,
  0,
  0,
  297,
  298,
  5,
  102,
  0,
  0,
  298,
  299,
  5,
  111,
  0,
  0,
  299,
  300,
  5,
  114,
  0,
  0,
  300,
  301,
  5,
  69,
  0,
  0,
  301,
  302,
  5,
  97,
  0,
  0,
  302,
  303,
  5,
  99,
  0,
  0,
  303,
  309,
  5,
  104,
  0,
  0,
  304,
  305,
  5,
  108,
  0,
  0,
  305,
  306,
  5,
  111,
  0,
  0,
  306,
  307,
  5,
  111,
  0,
  0,
  307,
  309,
  5,
  112,
  0,
  0,
  308,
  282,
  1,
  0,
  0,
  0,
  308,
  287,
  1,
  0,
  0,
  0,
  308,
  290,
  1,
  0,
  0,
  0,
  308,
  297,
  1,
  0,
  0,
  0,
  308,
  304,
  1,
  0,
  0,
  0,
  309,
  82,
  1,
  0,
  0,
  0,
  310,
  311,
  5,
  114,
  0,
  0,
  311,
  312,
  5,
  101,
  0,
  0,
  312,
  313,
  5,
  116,
  0,
  0,
  313,
  314,
  5,
  117,
  0,
  0,
  314,
  315,
  5,
  114,
  0,
  0,
  315,
  316,
  5,
  110,
  0,
  0,
  316,
  84,
  1,
  0,
  0,
  0,
  317,
  318,
  5,
  110,
  0,
  0,
  318,
  319,
  5,
  101,
  0,
  0,
  319,
  320,
  5,
  119,
  0,
  0,
  320,
  86,
  1,
  0,
  0,
  0,
  321,
  322,
  5,
  112,
  0,
  0,
  322,
  323,
  5,
  97,
  0,
  0,
  323,
  324,
  5,
  114,
  0,
  0,
  324,
  88,
  1,
  0,
  0,
  0,
  325,
  326,
  5,
  103,
  0,
  0,
  326,
  327,
  5,
  114,
  0,
  0,
  327,
  328,
  5,
  111,
  0,
  0,
  328,
  329,
  5,
  117,
  0,
  0,
  329,
  330,
  5,
  112,
  0,
  0,
  330,
  90,
  1,
  0,
  0,
  0,
  331,
  332,
  5,
  111,
  0,
  0,
  332,
  333,
  5,
  112,
  0,
  0,
  333,
  334,
  5,
  116,
  0,
  0,
  334,
  92,
  1,
  0,
  0,
  0,
  335,
  336,
  5,
  97,
  0,
  0,
  336,
  337,
  5,
  115,
  0,
  0,
  337,
  94,
  1,
  0,
  0,
  0,
  338,
  339,
  5,
  116,
  0,
  0,
  339,
  340,
  5,
  114,
  0,
  0,
  340,
  341,
  5,
  121,
  0,
  0,
  341,
  96,
  1,
  0,
  0,
  0,
  342,
  343,
  5,
  99,
  0,
  0,
  343,
  344,
  5,
  97,
  0,
  0,
  344,
  345,
  5,
  116,
  0,
  0,
  345,
  346,
  5,
  99,
  0,
  0,
  346,
  347,
  5,
  104,
  0,
  0,
  347,
  98,
  1,
  0,
  0,
  0,
  348,
  349,
  5,
  102,
  0,
  0,
  349,
  350,
  5,
  105,
  0,
  0,
  350,
  351,
  5,
  110,
  0,
  0,
  351,
  352,
  5,
  97,
  0,
  0,
  352,
  353,
  5,
  108,
  0,
  0,
  353,
  354,
  5,
  108,
  0,
  0,
  354,
  355,
  5,
  121,
  0,
  0,
  355,
  100,
  1,
  0,
  0,
  0,
  356,
  357,
  5,
  105,
  0,
  0,
  357,
  358,
  5,
  110,
  0,
  0,
  358,
  102,
  1,
  0,
  0,
  0,
  359,
  360,
  5,
  64,
  0,
  0,
  360,
  361,
  5,
  83,
  0,
  0,
  361,
  362,
  5,
  116,
  0,
  0,
  362,
  363,
  5,
  97,
  0,
  0,
  363,
  364,
  5,
  114,
  0,
  0,
  364,
  365,
  5,
  116,
  0,
  0,
  365,
  366,
  5,
  101,
  0,
  0,
  366,
  376,
  5,
  114,
  0,
  0,
  367,
  368,
  5,
  64,
  0,
  0,
  368,
  369,
  5,
  115,
  0,
  0,
  369,
  370,
  5,
  116,
  0,
  0,
  370,
  371,
  5,
  97,
  0,
  0,
  371,
  372,
  5,
  114,
  0,
  0,
  372,
  373,
  5,
  116,
  0,
  0,
  373,
  374,
  5,
  101,
  0,
  0,
  374,
  376,
  5,
  114,
  0,
  0,
  375,
  359,
  1,
  0,
  0,
  0,
  375,
  367,
  1,
  0,
  0,
  0,
  376,
  104,
  1,
  0,
  0,
  0,
  377,
  378,
  5,
  64,
  0,
  0,
  378,
  379,
  5,
  82,
  0,
  0,
  379,
  380,
  5,
  101,
  0,
  0,
  380,
  381,
  5,
  116,
  0,
  0,
  381,
  382,
  5,
  117,
  0,
  0,
  382,
  383,
  5,
  114,
  0,
  0,
  383,
  404,
  5,
  110,
  0,
  0,
  384,
  385,
  5,
  64,
  0,
  0,
  385,
  386,
  5,
  114,
  0,
  0,
  386,
  387,
  5,
  101,
  0,
  0,
  387,
  388,
  5,
  116,
  0,
  0,
  388,
  389,
  5,
  117,
  0,
  0,
  389,
  390,
  5,
  114,
  0,
  0,
  390,
  404,
  5,
  110,
  0,
  0,
  391,
  392,
  5,
  64,
  0,
  0,
  392,
  393,
  5,
  82,
  0,
  0,
  393,
  394,
  5,
  101,
  0,
  0,
  394,
  395,
  5,
  112,
  0,
  0,
  395,
  396,
  5,
  108,
  0,
  0,
  396,
  404,
  5,
  121,
  0,
  0,
  397,
  398,
  5,
  64,
  0,
  0,
  398,
  399,
  5,
  114,
  0,
  0,
  399,
  400,
  5,
  101,
  0,
  0,
  400,
  401,
  5,
  112,
  0,
  0,
  401,
  402,
  5,
  108,
  0,
  0,
  402,
  404,
  5,
  121,
  0,
  0,
  403,
  377,
  1,
  0,
  0,
  0,
  403,
  384,
  1,
  0,
  0,
  0,
  403,
  391,
  1,
  0,
  0,
  0,
  403,
  397,
  1,
  0,
  0,
  0,
  404,
  106,
  1,
  0,
  0,
  0,
  405,
  409,
  5,
  64,
  0,
  0,
  406,
  408,
  7,
  2,
  0,
  0,
  407,
  406,
  1,
  0,
  0,
  0,
  408,
  411,
  1,
  0,
  0,
  0,
  409,
  407,
  1,
  0,
  0,
  0,
  409,
  410,
  1,
  0,
  0,
  0,
  410,
  108,
  1,
  0,
  0,
  0,
  411,
  409,
  1,
  0,
  0,
  0,
  412,
  413,
  5,
  46,
  0,
  0,
  413,
  110,
  1,
  0,
  0,
  0,
  414,
  418,
  7,
  3,
  0,
  0,
  415,
  417,
  7,
  2,
  0,
  0,
  416,
  415,
  1,
  0,
  0,
  0,
  417,
  420,
  1,
  0,
  0,
  0,
  418,
  416,
  1,
  0,
  0,
  0,
  418,
  419,
  1,
  0,
  0,
  0,
  419,
  112,
  1,
  0,
  0,
  0,
  420,
  418,
  1,
  0,
  0,
  0,
  421,
  423,
  7,
  4,
  0,
  0,
  422,
  421,
  1,
  0,
  0,
  0,
  423,
  424,
  1,
  0,
  0,
  0,
  424,
  422,
  1,
  0,
  0,
  0,
  424,
  425,
  1,
  0,
  0,
  0,
  425,
  114,
  1,
  0,
  0,
  0,
  426,
  428,
  7,
  4,
  0,
  0,
  427,
  426,
  1,
  0,
  0,
  0,
  428,
  429,
  1,
  0,
  0,
  0,
  429,
  427,
  1,
  0,
  0,
  0,
  429,
  430,
  1,
  0,
  0,
  0,
  430,
  431,
  1,
  0,
  0,
  0,
  431,
  435,
  5,
  46,
  0,
  0,
  432,
  434,
  7,
  4,
  0,
  0,
  433,
  432,
  1,
  0,
  0,
  0,
  434,
  437,
  1,
  0,
  0,
  0,
  435,
  433,
  1,
  0,
  0,
  0,
  435,
  436,
  1,
  0,
  0,
  0,
  436,
  445,
  1,
  0,
  0,
  0,
  437,
  435,
  1,
  0,
  0,
  0,
  438,
  440,
  5,
  46,
  0,
  0,
  439,
  441,
  7,
  4,
  0,
  0,
  440,
  439,
  1,
  0,
  0,
  0,
  441,
  442,
  1,
  0,
  0,
  0,
  442,
  440,
  1,
  0,
  0,
  0,
  442,
  443,
  1,
  0,
  0,
  0,
  443,
  445,
  1,
  0,
  0,
  0,
  444,
  427,
  1,
  0,
  0,
  0,
  444,
  438,
  1,
  0,
  0,
  0,
  445,
  116,
  1,
  0,
  0,
  0,
  446,
  452,
  5,
  34,
  0,
  0,
  447,
  451,
  8,
  5,
  0,
  0,
  448,
  449,
  5,
  34,
  0,
  0,
  449,
  451,
  5,
  34,
  0,
  0,
  450,
  447,
  1,
  0,
  0,
  0,
  450,
  448,
  1,
  0,
  0,
  0,
  451,
  454,
  1,
  0,
  0,
  0,
  452,
  450,
  1,
  0,
  0,
  0,
  452,
  453,
  1,
  0,
  0,
  0,
  453,
  456,
  1,
  0,
  0,
  0,
  454,
  452,
  1,
  0,
  0,
  0,
  455,
  457,
  7,
  5,
  0,
  0,
  456,
  455,
  1,
  0,
  0,
  0,
  456,
  457,
  1,
  0,
  0,
  0,
  457,
  118,
  1,
  0,
  0,
  0,
  458,
  459,
  7,
  6,
  0,
  0,
  459,
  460,
  1,
  0,
  0,
  0,
  460,
  461,
  6,
  58,
  0,
  0,
  461,
  120,
  1,
  0,
  0,
  0,
  462,
  463,
  5,
  47,
  0,
  0,
  463,
  464,
  5,
  47,
  0,
  0,
  464,
  468,
  1,
  0,
  0,
  0,
  465,
  467,
  9,
  0,
  0,
  0,
  466,
  465,
  1,
  0,
  0,
  0,
  467,
  470,
  1,
  0,
  0,
  0,
  468,
  469,
  1,
  0,
  0,
  0,
  468,
  466,
  1,
  0,
  0,
  0,
  469,
  471,
  1,
  0,
  0,
  0,
  470,
  468,
  1,
  0,
  0,
  0,
  471,
  472,
  5,
  10,
  0,
  0,
  472,
  473,
  1,
  0,
  0,
  0,
  473,
  474,
  6,
  59,
  4,
  0,
  474,
  122,
  1,
  0,
  0,
  0,
  475,
  476,
  9,
  0,
  0,
  0,
  476,
  124,
  1,
  0,
  0,
  0,
  477,
  481,
  4,
  61,
  0,
  0,
  478,
  480,
  3,
  3,
  0,
  0,
  479,
  478,
  1,
  0,
  0,
  0,
  480,
  483,
  1,
  0,
  0,
  0,
  481,
  479,
  1,
  0,
  0,
  0,
  481,
  482,
  1,
  0,
  0,
  0,
  482,
  484,
  1,
  0,
  0,
  0,
  483,
  481,
  1,
  0,
  0,
  0,
  484,
  485,
  5,
  61,
  0,
  0,
  485,
  486,
  5,
  61,
  0,
  0,
  486,
  490,
  1,
  0,
  0,
  0,
  487,
  489,
  8,
  6,
  0,
  0,
  488,
  487,
  1,
  0,
  0,
  0,
  489,
  492,
  1,
  0,
  0,
  0,
  490,
  488,
  1,
  0,
  0,
  0,
  490,
  491,
  1,
  0,
  0,
  0,
  491,
  126,
  1,
  0,
  0,
  0,
  492,
  490,
  1,
  0,
  0,
  0,
  493,
  495,
  8,
  6,
  0,
  0,
  494,
  493,
  1,
  0,
  0,
  0,
  495,
  496,
  1,
  0,
  0,
  0,
  496,
  494,
  1,
  0,
  0,
  0,
  496,
  497,
  1,
  0,
  0,
  0,
  497,
  128,
  1,
  0,
  0,
  0,
  498,
  499,
  7,
  6,
  0,
  0,
  499,
  500,
  1,
  0,
  0,
  0,
  500,
  501,
  6,
  63,
  5,
  0,
  501,
  130,
  1,
  0,
  0,
  0,
  502,
  504,
  8,
  6,
  0,
  0,
  503,
  502,
  1,
  0,
  0,
  0,
  504,
  505,
  1,
  0,
  0,
  0,
  505,
  503,
  1,
  0,
  0,
  0,
  505,
  506,
  1,
  0,
  0,
  0,
  506,
  132,
  1,
  0,
  0,
  0,
  507,
  508,
  7,
  6,
  0,
  0,
  508,
  509,
  1,
  0,
  0,
  0,
  509,
  510,
  6,
  65,
  5,
  0,
  510,
  134,
  1,
  0,
  0,
  0,
  23,
  0,
  1,
  2,
  202,
  272,
  308,
  375,
  403,
  409,
  418,
  424,
  429,
  435,
  442,
  444,
  450,
  452,
  456,
  468,
  481,
  490,
  496,
  505,
  6,
  0,
  1,
  0,
  0,
  3,
  0,
  5,
  2,
  0,
  5,
  1,
  0,
  0,
  2,
  0,
  4,
  0,
  0
], ca = new v.atn.ATNDeserializer().deserialize(ef), tf = ca.decisionToState.map((t, e) => new v.dfa.DFA(t, e));
class H extends v.Lexer {
  constructor(e) {
    super(e), this._interp = new v.atn.LexerATNSimulator(
      this,
      ca,
      tf,
      new v.PredictionContextCache()
    );
  }
  get atn() {
    return ca;
  }
}
W(H, "grammarFileName", "sequenceLexer.g4"), W(H, "channelNames", ["DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENT_CHANNEL", "MODIFIER_CHANNEL"]), W(H, "modeNames", ["DEFAULT_MODE", "EVENT", "TITLE_MODE"]), W(H, "literalNames", [
  null,
  null,
  "'const'",
  "'readonly'",
  "'static'",
  "'await'",
  "'title'",
  "':'",
  "'<<'",
  "'>>'",
  "'->'",
  null,
  "'||'",
  "'&&'",
  "'=='",
  "'!='",
  "'>'",
  "'<'",
  "'>='",
  "'<='",
  "'+'",
  "'-'",
  "'*'",
  "'/'",
  "'%'",
  "'^'",
  "'!'",
  "';'",
  "','",
  "'='",
  "'('",
  "')'",
  "'{'",
  "'}'",
  "'true'",
  "'false'",
  null,
  "'if'",
  "'else'",
  null,
  "'return'",
  "'new'",
  "'par'",
  "'group'",
  "'opt'",
  "'as'",
  "'try'",
  "'catch'",
  "'finally'",
  "'in'",
  null,
  null,
  null,
  "'.'"
]), W(H, "symbolicNames", [
  null,
  "WS",
  "CONSTANT",
  "READONLY",
  "STATIC",
  "AWAIT",
  "TITLE",
  "COL",
  "SOPEN",
  "SCLOSE",
  "ARROW",
  "COLOR",
  "OR",
  "AND",
  "EQ",
  "NEQ",
  "GT",
  "LT",
  "GTEQ",
  "LTEQ",
  "PLUS",
  "MINUS",
  "MULT",
  "DIV",
  "MOD",
  "POW",
  "NOT",
  "SCOL",
  "COMMA",
  "ASSIGN",
  "OPAR",
  "CPAR",
  "OBRACE",
  "CBRACE",
  "TRUE",
  "FALSE",
  "NIL",
  "IF",
  "ELSE",
  "WHILE",
  "RETURN",
  "NEW",
  "PAR",
  "GROUP",
  "OPT",
  "AS",
  "TRY",
  "CATCH",
  "FINALLY",
  "IN",
  "STARTER_LXR",
  "ANNOTATION_RET",
  "ANNOTATION",
  "DOT",
  "ID",
  "INT",
  "FLOAT",
  "STRING",
  "CR",
  "COMMENT",
  "OTHER",
  "DIVIDER",
  "EVENT_PAYLOAD_LXR",
  "EVENT_END",
  "TITLE_CONTENT",
  "TITLE_END"
]), W(H, "ruleNames", [
  "WS",
  "CONSTANT",
  "READONLY",
  "STATIC",
  "AWAIT",
  "TITLE",
  "COL",
  "SOPEN",
  "SCLOSE",
  "ARROW",
  "HEX",
  "COLOR",
  "OR",
  "AND",
  "EQ",
  "NEQ",
  "GT",
  "LT",
  "GTEQ",
  "LTEQ",
  "PLUS",
  "MINUS",
  "MULT",
  "DIV",
  "MOD",
  "POW",
  "NOT",
  "SCOL",
  "COMMA",
  "ASSIGN",
  "OPAR",
  "CPAR",
  "OBRACE",
  "CBRACE",
  "TRUE",
  "FALSE",
  "NIL",
  "IF",
  "ELSE",
  "WHILE",
  "RETURN",
  "NEW",
  "PAR",
  "GROUP",
  "OPT",
  "AS",
  "TRY",
  "CATCH",
  "FINALLY",
  "IN",
  "STARTER_LXR",
  "ANNOTATION_RET",
  "ANNOTATION",
  "DOT",
  "ID",
  "INT",
  "FLOAT",
  "STRING",
  "CR",
  "COMMENT",
  "OTHER",
  "DIVIDER",
  "EVENT_PAYLOAD_LXR",
  "EVENT_END",
  "TITLE_CONTENT",
  "TITLE_END"
]);
H.EOF = v.Token.EOF;
H.WS = 1;
H.CONSTANT = 2;
H.READONLY = 3;
H.STATIC = 4;
H.AWAIT = 5;
H.TITLE = 6;
H.COL = 7;
H.SOPEN = 8;
H.SCLOSE = 9;
H.ARROW = 10;
H.COLOR = 11;
H.OR = 12;
H.AND = 13;
H.EQ = 14;
H.NEQ = 15;
H.GT = 16;
H.LT = 17;
H.GTEQ = 18;
H.LTEQ = 19;
H.PLUS = 20;
H.MINUS = 21;
H.MULT = 22;
H.DIV = 23;
H.MOD = 24;
H.POW = 25;
H.NOT = 26;
H.SCOL = 27;
H.COMMA = 28;
H.ASSIGN = 29;
H.OPAR = 30;
H.CPAR = 31;
H.OBRACE = 32;
H.CBRACE = 33;
H.TRUE = 34;
H.FALSE = 35;
H.NIL = 36;
H.IF = 37;
H.ELSE = 38;
H.WHILE = 39;
H.RETURN = 40;
H.NEW = 41;
H.PAR = 42;
H.GROUP = 43;
H.OPT = 44;
H.AS = 45;
H.TRY = 46;
H.CATCH = 47;
H.FINALLY = 48;
H.IN = 49;
H.STARTER_LXR = 50;
H.ANNOTATION_RET = 51;
H.ANNOTATION = 52;
H.DOT = 53;
H.ID = 54;
H.INT = 55;
H.FLOAT = 56;
H.STRING = 57;
H.CR = 58;
H.COMMENT = 59;
H.OTHER = 60;
H.DIVIDER = 61;
H.EVENT_PAYLOAD_LXR = 62;
H.EVENT_END = 63;
H.TITLE_CONTENT = 64;
H.TITLE_END = 65;
H.COMMENT_CHANNEL = 2;
H.MODIFIER_CHANNEL = 3;
H.EVENT = 1;
H.TITLE_MODE = 2;
H.prototype.sempred = function(t, e, n) {
  switch (e) {
    case 61:
      return this.DIVIDER_sempred(t, n);
    default:
      throw "No registered predicate for:" + e;
  }
};
H.prototype.DIVIDER_sempred = function(t, e) {
  switch (e) {
    case 0:
      return this.column === 0;
    default:
      throw "No predicate with index:" + e;
  }
};
class w extends v.tree.ParseTreeListener {
  enterProg(e) {
  }
  exitProg(e) {
  }
  enterTitle(e) {
  }
  exitTitle(e) {
  }
  enterHead(e) {
  }
  exitHead(e) {
  }
  enterGroup(e) {
  }
  exitGroup(e) {
  }
  enterStarterExp(e) {
  }
  exitStarterExp(e) {
  }
  enterStarter(e) {
  }
  exitStarter(e) {
  }
  enterParticipant(e) {
  }
  exitParticipant(e) {
  }
  enterStereotype(e) {
  }
  exitStereotype(e) {
  }
  enterLabel(e) {
  }
  exitLabel(e) {
  }
  enterParticipantType(e) {
  }
  exitParticipantType(e) {
  }
  enterName(e) {
  }
  exitName(e) {
  }
  enterWidth(e) {
  }
  exitWidth(e) {
  }
  enterBlock(e) {
  }
  exitBlock(e) {
  }
  enterRet(e) {
  }
  exitRet(e) {
  }
  enterDivider(e) {
  }
  exitDivider(e) {
  }
  enterDividerNote(e) {
  }
  exitDividerNote(e) {
  }
  enterStat(e) {
  }
  exitStat(e) {
  }
  enterPar(e) {
  }
  exitPar(e) {
  }
  enterOpt(e) {
  }
  exitOpt(e) {
  }
  enterCreation(e) {
  }
  exitCreation(e) {
  }
  enterCreationBody(e) {
  }
  exitCreationBody(e) {
  }
  enterMessage(e) {
  }
  exitMessage(e) {
  }
  enterMessageBody(e) {
  }
  exitMessageBody(e) {
  }
  enterFunc(e) {
  }
  exitFunc(e) {
  }
  enterFrom(e) {
  }
  exitFrom(e) {
  }
  enterTo(e) {
  }
  exitTo(e) {
  }
  enterSignature(e) {
  }
  exitSignature(e) {
  }
  enterInvocation(e) {
  }
  exitInvocation(e) {
  }
  enterAssignment(e) {
  }
  exitAssignment(e) {
  }
  enterAsyncMessage(e) {
  }
  exitAsyncMessage(e) {
  }
  enterContent(e) {
  }
  exitContent(e) {
  }
  enterConstruct(e) {
  }
  exitConstruct(e) {
  }
  enterType(e) {
  }
  exitType(e) {
  }
  enterAssignee(e) {
  }
  exitAssignee(e) {
  }
  enterMethodName(e) {
  }
  exitMethodName(e) {
  }
  enterParameters(e) {
  }
  exitParameters(e) {
  }
  enterParameter(e) {
  }
  exitParameter(e) {
  }
  enterDeclaration(e) {
  }
  exitDeclaration(e) {
  }
  enterTcf(e) {
  }
  exitTcf(e) {
  }
  enterTryBlock(e) {
  }
  exitTryBlock(e) {
  }
  enterCatchBlock(e) {
  }
  exitCatchBlock(e) {
  }
  enterFinallyBlock(e) {
  }
  exitFinallyBlock(e) {
  }
  enterAlt(e) {
  }
  exitAlt(e) {
  }
  enterIfBlock(e) {
  }
  exitIfBlock(e) {
  }
  enterElseIfBlock(e) {
  }
  exitElseIfBlock(e) {
  }
  enterElseBlock(e) {
  }
  exitElseBlock(e) {
  }
  enterBraceBlock(e) {
  }
  exitBraceBlock(e) {
  }
  enterLoop(e) {
  }
  exitLoop(e) {
  }
  enterAssignmentExpr(e) {
  }
  exitAssignmentExpr(e) {
  }
  enterFuncExpr(e) {
  }
  exitFuncExpr(e) {
  }
  enterAtomExpr(e) {
  }
  exitAtomExpr(e) {
  }
  enterOrExpr(e) {
  }
  exitOrExpr(e) {
  }
  enterAdditiveExpr(e) {
  }
  exitAdditiveExpr(e) {
  }
  enterRelationalExpr(e) {
  }
  exitRelationalExpr(e) {
  }
  enterPlusExpr(e) {
  }
  exitPlusExpr(e) {
  }
  enterNotExpr(e) {
  }
  exitNotExpr(e) {
  }
  enterUnaryMinusExpr(e) {
  }
  exitUnaryMinusExpr(e) {
  }
  enterCreationExpr(e) {
  }
  exitCreationExpr(e) {
  }
  enterParenthesizedExpr(e) {
  }
  exitParenthesizedExpr(e) {
  }
  enterMultiplicationExpr(e) {
  }
  exitMultiplicationExpr(e) {
  }
  enterEqualityExpr(e) {
  }
  exitEqualityExpr(e) {
  }
  enterAndExpr(e) {
  }
  exitAndExpr(e) {
  }
  enterNumberAtom(e) {
  }
  exitNumberAtom(e) {
  }
  enterBooleanAtom(e) {
  }
  exitBooleanAtom(e) {
  }
  enterIdAtom(e) {
  }
  exitIdAtom(e) {
  }
  enterStringAtom(e) {
  }
  exitStringAtom(e) {
  }
  enterNilAtom(e) {
  }
  exitNilAtom(e) {
  }
  enterParExpr(e) {
  }
  exitParExpr(e) {
  }
  enterCondition(e) {
  }
  exitCondition(e) {
  }
  enterInExpr(e) {
  }
  exitInExpr(e) {
  }
}
const nf = [
  4,
  1,
  65,
  550,
  2,
  0,
  7,
  0,
  2,
  1,
  7,
  1,
  2,
  2,
  7,
  2,
  2,
  3,
  7,
  3,
  2,
  4,
  7,
  4,
  2,
  5,
  7,
  5,
  2,
  6,
  7,
  6,
  2,
  7,
  7,
  7,
  2,
  8,
  7,
  8,
  2,
  9,
  7,
  9,
  2,
  10,
  7,
  10,
  2,
  11,
  7,
  11,
  2,
  12,
  7,
  12,
  2,
  13,
  7,
  13,
  2,
  14,
  7,
  14,
  2,
  15,
  7,
  15,
  2,
  16,
  7,
  16,
  2,
  17,
  7,
  17,
  2,
  18,
  7,
  18,
  2,
  19,
  7,
  19,
  2,
  20,
  7,
  20,
  2,
  21,
  7,
  21,
  2,
  22,
  7,
  22,
  2,
  23,
  7,
  23,
  2,
  24,
  7,
  24,
  2,
  25,
  7,
  25,
  2,
  26,
  7,
  26,
  2,
  27,
  7,
  27,
  2,
  28,
  7,
  28,
  2,
  29,
  7,
  29,
  2,
  30,
  7,
  30,
  2,
  31,
  7,
  31,
  2,
  32,
  7,
  32,
  2,
  33,
  7,
  33,
  2,
  34,
  7,
  34,
  2,
  35,
  7,
  35,
  2,
  36,
  7,
  36,
  2,
  37,
  7,
  37,
  2,
  38,
  7,
  38,
  2,
  39,
  7,
  39,
  2,
  40,
  7,
  40,
  2,
  41,
  7,
  41,
  2,
  42,
  7,
  42,
  2,
  43,
  7,
  43,
  2,
  44,
  7,
  44,
  2,
  45,
  7,
  45,
  2,
  46,
  7,
  46,
  2,
  47,
  7,
  47,
  2,
  48,
  7,
  48,
  2,
  49,
  7,
  49,
  2,
  50,
  7,
  50,
  2,
  51,
  7,
  51,
  2,
  52,
  7,
  52,
  1,
  0,
  3,
  0,
  108,
  8,
  0,
  1,
  0,
  1,
  0,
  3,
  0,
  112,
  8,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  3,
  0,
  118,
  8,
  0,
  1,
  0,
  3,
  0,
  121,
  8,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  3,
  0,
  126,
  8,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  3,
  1,
  131,
  8,
  1,
  1,
  2,
  1,
  2,
  4,
  2,
  135,
  8,
  2,
  11,
  2,
  12,
  2,
  136,
  1,
  2,
  1,
  2,
  5,
  2,
  141,
  8,
  2,
  10,
  2,
  12,
  2,
  144,
  9,
  2,
  1,
  2,
  3,
  2,
  147,
  8,
  2,
  1,
  3,
  1,
  3,
  3,
  3,
  151,
  8,
  3,
  1,
  3,
  1,
  3,
  5,
  3,
  155,
  8,
  3,
  10,
  3,
  12,
  3,
  158,
  9,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  3,
  3,
  163,
  8,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  3,
  3,
  168,
  8,
  3,
  3,
  3,
  170,
  8,
  3,
  1,
  4,
  1,
  4,
  1,
  4,
  3,
  4,
  175,
  8,
  4,
  1,
  4,
  3,
  4,
  178,
  8,
  4,
  1,
  4,
  3,
  4,
  181,
  8,
  4,
  1,
  5,
  1,
  5,
  1,
  6,
  3,
  6,
  186,
  8,
  6,
  1,
  6,
  3,
  6,
  189,
  8,
  6,
  1,
  6,
  1,
  6,
  3,
  6,
  193,
  8,
  6,
  1,
  6,
  3,
  6,
  196,
  8,
  6,
  1,
  6,
  3,
  6,
  199,
  8,
  6,
  1,
  6,
  1,
  6,
  3,
  6,
  203,
  8,
  6,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  3,
  7,
  212,
  8,
  7,
  1,
  7,
  1,
  7,
  3,
  7,
  216,
  8,
  7,
  3,
  7,
  218,
  8,
  7,
  1,
  8,
  1,
  8,
  1,
  8,
  3,
  8,
  223,
  8,
  8,
  1,
  9,
  1,
  9,
  1,
  10,
  1,
  10,
  1,
  11,
  1,
  11,
  1,
  12,
  4,
  12,
  232,
  8,
  12,
  11,
  12,
  12,
  12,
  233,
  1,
  13,
  1,
  13,
  3,
  13,
  238,
  8,
  13,
  1,
  13,
  3,
  13,
  241,
  8,
  13,
  1,
  13,
  1,
  13,
  1,
  13,
  3,
  13,
  246,
  8,
  13,
  3,
  13,
  248,
  8,
  13,
  1,
  14,
  1,
  14,
  1,
  15,
  1,
  15,
  1,
  16,
  1,
  16,
  1,
  16,
  1,
  16,
  1,
  16,
  1,
  16,
  1,
  16,
  1,
  16,
  3,
  16,
  262,
  8,
  16,
  1,
  16,
  1,
  16,
  1,
  16,
  1,
  16,
  1,
  16,
  3,
  16,
  269,
  8,
  16,
  1,
  17,
  1,
  17,
  1,
  17,
  3,
  17,
  274,
  8,
  17,
  1,
  18,
  1,
  18,
  1,
  18,
  3,
  18,
  279,
  8,
  18,
  1,
  19,
  1,
  19,
  1,
  19,
  3,
  19,
  284,
  8,
  19,
  1,
  20,
  3,
  20,
  287,
  8,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  3,
  20,
  293,
  8,
  20,
  1,
  20,
  3,
  20,
  296,
  8,
  20,
  1,
  20,
  3,
  20,
  299,
  8,
  20,
  1,
  20,
  3,
  20,
  302,
  8,
  20,
  1,
  21,
  1,
  21,
  1,
  21,
  3,
  21,
  307,
  8,
  21,
  1,
  22,
  3,
  22,
  310,
  8,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  3,
  22,
  315,
  8,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  3,
  22,
  320,
  8,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  3,
  22,
  327,
  8,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  3,
  22,
  332,
  8,
  22,
  1,
  23,
  1,
  23,
  1,
  23,
  5,
  23,
  337,
  8,
  23,
  10,
  23,
  12,
  23,
  340,
  9,
  23,
  1,
  24,
  1,
  24,
  1,
  25,
  1,
  25,
  1,
  26,
  1,
  26,
  3,
  26,
  348,
  8,
  26,
  1,
  27,
  1,
  27,
  3,
  27,
  352,
  8,
  27,
  1,
  27,
  1,
  27,
  1,
  28,
  3,
  28,
  357,
  8,
  28,
  1,
  28,
  1,
  28,
  1,
  28,
  1,
  29,
  1,
  29,
  1,
  29,
  3,
  29,
  365,
  8,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  3,
  29,
  374,
  8,
  29,
  3,
  29,
  376,
  8,
  29,
  1,
  30,
  1,
  30,
  1,
  31,
  1,
  31,
  1,
  32,
  1,
  32,
  1,
  33,
  1,
  33,
  1,
  33,
  1,
  33,
  5,
  33,
  388,
  8,
  33,
  10,
  33,
  12,
  33,
  391,
  9,
  33,
  1,
  33,
  3,
  33,
  394,
  8,
  33,
  1,
  34,
  1,
  34,
  1,
  35,
  1,
  35,
  1,
  35,
  5,
  35,
  401,
  8,
  35,
  10,
  35,
  12,
  35,
  404,
  9,
  35,
  1,
  35,
  3,
  35,
  407,
  8,
  35,
  1,
  36,
  1,
  36,
  3,
  36,
  411,
  8,
  36,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  38,
  1,
  38,
  5,
  38,
  418,
  8,
  38,
  10,
  38,
  12,
  38,
  421,
  9,
  38,
  1,
  38,
  3,
  38,
  424,
  8,
  38,
  1,
  39,
  1,
  39,
  1,
  39,
  1,
  40,
  1,
  40,
  3,
  40,
  431,
  8,
  40,
  1,
  40,
  1,
  40,
  1,
  41,
  1,
  41,
  1,
  41,
  1,
  42,
  1,
  42,
  5,
  42,
  440,
  8,
  42,
  10,
  42,
  12,
  42,
  443,
  9,
  42,
  1,
  42,
  3,
  42,
  446,
  8,
  42,
  1,
  43,
  1,
  43,
  1,
  43,
  1,
  43,
  1,
  44,
  1,
  44,
  1,
  44,
  1,
  44,
  1,
  44,
  1,
  45,
  1,
  45,
  1,
  45,
  1,
  46,
  1,
  46,
  3,
  46,
  462,
  8,
  46,
  1,
  46,
  1,
  46,
  1,
  47,
  1,
  47,
  1,
  47,
  1,
  47,
  1,
  47,
  1,
  47,
  1,
  47,
  3,
  47,
  473,
  8,
  47,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  3,
  48,
  484,
  8,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  3,
  48,
  495,
  8,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  5,
  48,
  518,
  8,
  48,
  10,
  48,
  12,
  48,
  521,
  9,
  48,
  1,
  49,
  1,
  49,
  1,
  49,
  1,
  49,
  1,
  49,
  3,
  49,
  528,
  8,
  49,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  1,
  50,
  3,
  50,
  539,
  8,
  50,
  1,
  51,
  1,
  51,
  1,
  51,
  3,
  51,
  544,
  8,
  51,
  1,
  52,
  1,
  52,
  1,
  52,
  1,
  52,
  1,
  52,
  0,
  1,
  96,
  53,
  0,
  2,
  4,
  6,
  8,
  10,
  12,
  14,
  16,
  18,
  20,
  22,
  24,
  26,
  28,
  30,
  32,
  34,
  36,
  38,
  40,
  42,
  44,
  46,
  48,
  50,
  52,
  54,
  56,
  58,
  60,
  62,
  64,
  66,
  68,
  70,
  72,
  74,
  76,
  78,
  80,
  82,
  84,
  86,
  88,
  90,
  92,
  94,
  96,
  98,
  100,
  102,
  104,
  0,
  10,
  2,
  0,
  54,
  54,
  57,
  57,
  2,
  0,
  8,
  8,
  17,
  17,
  2,
  0,
  9,
  9,
  16,
  16,
  2,
  0,
  10,
  10,
  21,
  21,
  1,
  0,
  22,
  24,
  1,
  0,
  20,
  21,
  1,
  0,
  16,
  19,
  1,
  0,
  14,
  15,
  1,
  0,
  55,
  56,
  1,
  0,
  34,
  35,
  606,
  0,
  125,
  1,
  0,
  0,
  0,
  2,
  127,
  1,
  0,
  0,
  0,
  4,
  146,
  1,
  0,
  0,
  0,
  6,
  169,
  1,
  0,
  0,
  0,
  8,
  180,
  1,
  0,
  0,
  0,
  10,
  182,
  1,
  0,
  0,
  0,
  12,
  202,
  1,
  0,
  0,
  0,
  14,
  217,
  1,
  0,
  0,
  0,
  16,
  222,
  1,
  0,
  0,
  0,
  18,
  224,
  1,
  0,
  0,
  0,
  20,
  226,
  1,
  0,
  0,
  0,
  22,
  228,
  1,
  0,
  0,
  0,
  24,
  231,
  1,
  0,
  0,
  0,
  26,
  247,
  1,
  0,
  0,
  0,
  28,
  249,
  1,
  0,
  0,
  0,
  30,
  251,
  1,
  0,
  0,
  0,
  32,
  268,
  1,
  0,
  0,
  0,
  34,
  273,
  1,
  0,
  0,
  0,
  36,
  278,
  1,
  0,
  0,
  0,
  38,
  280,
  1,
  0,
  0,
  0,
  40,
  301,
  1,
  0,
  0,
  0,
  42,
  303,
  1,
  0,
  0,
  0,
  44,
  331,
  1,
  0,
  0,
  0,
  46,
  333,
  1,
  0,
  0,
  0,
  48,
  341,
  1,
  0,
  0,
  0,
  50,
  343,
  1,
  0,
  0,
  0,
  52,
  345,
  1,
  0,
  0,
  0,
  54,
  349,
  1,
  0,
  0,
  0,
  56,
  356,
  1,
  0,
  0,
  0,
  58,
  375,
  1,
  0,
  0,
  0,
  60,
  377,
  1,
  0,
  0,
  0,
  62,
  379,
  1,
  0,
  0,
  0,
  64,
  381,
  1,
  0,
  0,
  0,
  66,
  393,
  1,
  0,
  0,
  0,
  68,
  395,
  1,
  0,
  0,
  0,
  70,
  397,
  1,
  0,
  0,
  0,
  72,
  410,
  1,
  0,
  0,
  0,
  74,
  412,
  1,
  0,
  0,
  0,
  76,
  415,
  1,
  0,
  0,
  0,
  78,
  425,
  1,
  0,
  0,
  0,
  80,
  428,
  1,
  0,
  0,
  0,
  82,
  434,
  1,
  0,
  0,
  0,
  84,
  437,
  1,
  0,
  0,
  0,
  86,
  447,
  1,
  0,
  0,
  0,
  88,
  451,
  1,
  0,
  0,
  0,
  90,
  456,
  1,
  0,
  0,
  0,
  92,
  459,
  1,
  0,
  0,
  0,
  94,
  472,
  1,
  0,
  0,
  0,
  96,
  494,
  1,
  0,
  0,
  0,
  98,
  527,
  1,
  0,
  0,
  0,
  100,
  538,
  1,
  0,
  0,
  0,
  102,
  543,
  1,
  0,
  0,
  0,
  104,
  545,
  1,
  0,
  0,
  0,
  106,
  108,
  3,
  2,
  1,
  0,
  107,
  106,
  1,
  0,
  0,
  0,
  107,
  108,
  1,
  0,
  0,
  0,
  108,
  109,
  1,
  0,
  0,
  0,
  109,
  126,
  5,
  0,
  0,
  1,
  110,
  112,
  3,
  2,
  1,
  0,
  111,
  110,
  1,
  0,
  0,
  0,
  111,
  112,
  1,
  0,
  0,
  0,
  112,
  113,
  1,
  0,
  0,
  0,
  113,
  114,
  3,
  4,
  2,
  0,
  114,
  115,
  5,
  0,
  0,
  1,
  115,
  126,
  1,
  0,
  0,
  0,
  116,
  118,
  3,
  2,
  1,
  0,
  117,
  116,
  1,
  0,
  0,
  0,
  117,
  118,
  1,
  0,
  0,
  0,
  118,
  120,
  1,
  0,
  0,
  0,
  119,
  121,
  3,
  4,
  2,
  0,
  120,
  119,
  1,
  0,
  0,
  0,
  120,
  121,
  1,
  0,
  0,
  0,
  121,
  122,
  1,
  0,
  0,
  0,
  122,
  123,
  3,
  24,
  12,
  0,
  123,
  124,
  5,
  0,
  0,
  1,
  124,
  126,
  1,
  0,
  0,
  0,
  125,
  107,
  1,
  0,
  0,
  0,
  125,
  111,
  1,
  0,
  0,
  0,
  125,
  117,
  1,
  0,
  0,
  0,
  126,
  1,
  1,
  0,
  0,
  0,
  127,
  128,
  5,
  6,
  0,
  0,
  128,
  130,
  5,
  64,
  0,
  0,
  129,
  131,
  5,
  65,
  0,
  0,
  130,
  129,
  1,
  0,
  0,
  0,
  130,
  131,
  1,
  0,
  0,
  0,
  131,
  3,
  1,
  0,
  0,
  0,
  132,
  135,
  3,
  6,
  3,
  0,
  133,
  135,
  3,
  12,
  6,
  0,
  134,
  132,
  1,
  0,
  0,
  0,
  134,
  133,
  1,
  0,
  0,
  0,
  135,
  136,
  1,
  0,
  0,
  0,
  136,
  134,
  1,
  0,
  0,
  0,
  136,
  137,
  1,
  0,
  0,
  0,
  137,
  147,
  1,
  0,
  0,
  0,
  138,
  141,
  3,
  6,
  3,
  0,
  139,
  141,
  3,
  12,
  6,
  0,
  140,
  138,
  1,
  0,
  0,
  0,
  140,
  139,
  1,
  0,
  0,
  0,
  141,
  144,
  1,
  0,
  0,
  0,
  142,
  140,
  1,
  0,
  0,
  0,
  142,
  143,
  1,
  0,
  0,
  0,
  143,
  145,
  1,
  0,
  0,
  0,
  144,
  142,
  1,
  0,
  0,
  0,
  145,
  147,
  3,
  8,
  4,
  0,
  146,
  134,
  1,
  0,
  0,
  0,
  146,
  142,
  1,
  0,
  0,
  0,
  147,
  5,
  1,
  0,
  0,
  0,
  148,
  150,
  5,
  43,
  0,
  0,
  149,
  151,
  3,
  20,
  10,
  0,
  150,
  149,
  1,
  0,
  0,
  0,
  150,
  151,
  1,
  0,
  0,
  0,
  151,
  152,
  1,
  0,
  0,
  0,
  152,
  156,
  5,
  32,
  0,
  0,
  153,
  155,
  3,
  12,
  6,
  0,
  154,
  153,
  1,
  0,
  0,
  0,
  155,
  158,
  1,
  0,
  0,
  0,
  156,
  154,
  1,
  0,
  0,
  0,
  156,
  157,
  1,
  0,
  0,
  0,
  157,
  159,
  1,
  0,
  0,
  0,
  158,
  156,
  1,
  0,
  0,
  0,
  159,
  170,
  5,
  33,
  0,
  0,
  160,
  162,
  5,
  43,
  0,
  0,
  161,
  163,
  3,
  20,
  10,
  0,
  162,
  161,
  1,
  0,
  0,
  0,
  162,
  163,
  1,
  0,
  0,
  0,
  163,
  164,
  1,
  0,
  0,
  0,
  164,
  170,
  5,
  32,
  0,
  0,
  165,
  167,
  5,
  43,
  0,
  0,
  166,
  168,
  3,
  20,
  10,
  0,
  167,
  166,
  1,
  0,
  0,
  0,
  167,
  168,
  1,
  0,
  0,
  0,
  168,
  170,
  1,
  0,
  0,
  0,
  169,
  148,
  1,
  0,
  0,
  0,
  169,
  160,
  1,
  0,
  0,
  0,
  169,
  165,
  1,
  0,
  0,
  0,
  170,
  7,
  1,
  0,
  0,
  0,
  171,
  177,
  5,
  50,
  0,
  0,
  172,
  174,
  5,
  30,
  0,
  0,
  173,
  175,
  3,
  10,
  5,
  0,
  174,
  173,
  1,
  0,
  0,
  0,
  174,
  175,
  1,
  0,
  0,
  0,
  175,
  176,
  1,
  0,
  0,
  0,
  176,
  178,
  5,
  31,
  0,
  0,
  177,
  172,
  1,
  0,
  0,
  0,
  177,
  178,
  1,
  0,
  0,
  0,
  178,
  181,
  1,
  0,
  0,
  0,
  179,
  181,
  5,
  52,
  0,
  0,
  180,
  171,
  1,
  0,
  0,
  0,
  180,
  179,
  1,
  0,
  0,
  0,
  181,
  9,
  1,
  0,
  0,
  0,
  182,
  183,
  7,
  0,
  0,
  0,
  183,
  11,
  1,
  0,
  0,
  0,
  184,
  186,
  3,
  18,
  9,
  0,
  185,
  184,
  1,
  0,
  0,
  0,
  185,
  186,
  1,
  0,
  0,
  0,
  186,
  188,
  1,
  0,
  0,
  0,
  187,
  189,
  3,
  14,
  7,
  0,
  188,
  187,
  1,
  0,
  0,
  0,
  188,
  189,
  1,
  0,
  0,
  0,
  189,
  190,
  1,
  0,
  0,
  0,
  190,
  192,
  3,
  20,
  10,
  0,
  191,
  193,
  3,
  22,
  11,
  0,
  192,
  191,
  1,
  0,
  0,
  0,
  192,
  193,
  1,
  0,
  0,
  0,
  193,
  195,
  1,
  0,
  0,
  0,
  194,
  196,
  3,
  16,
  8,
  0,
  195,
  194,
  1,
  0,
  0,
  0,
  195,
  196,
  1,
  0,
  0,
  0,
  196,
  198,
  1,
  0,
  0,
  0,
  197,
  199,
  5,
  11,
  0,
  0,
  198,
  197,
  1,
  0,
  0,
  0,
  198,
  199,
  1,
  0,
  0,
  0,
  199,
  203,
  1,
  0,
  0,
  0,
  200,
  203,
  3,
  14,
  7,
  0,
  201,
  203,
  3,
  18,
  9,
  0,
  202,
  185,
  1,
  0,
  0,
  0,
  202,
  200,
  1,
  0,
  0,
  0,
  202,
  201,
  1,
  0,
  0,
  0,
  203,
  13,
  1,
  0,
  0,
  0,
  204,
  205,
  5,
  8,
  0,
  0,
  205,
  206,
  3,
  20,
  10,
  0,
  206,
  207,
  5,
  9,
  0,
  0,
  207,
  218,
  1,
  0,
  0,
  0,
  208,
  209,
  5,
  8,
  0,
  0,
  209,
  211,
  3,
  20,
  10,
  0,
  210,
  212,
  5,
  16,
  0,
  0,
  211,
  210,
  1,
  0,
  0,
  0,
  211,
  212,
  1,
  0,
  0,
  0,
  212,
  218,
  1,
  0,
  0,
  0,
  213,
  215,
  7,
  1,
  0,
  0,
  214,
  216,
  7,
  2,
  0,
  0,
  215,
  214,
  1,
  0,
  0,
  0,
  215,
  216,
  1,
  0,
  0,
  0,
  216,
  218,
  1,
  0,
  0,
  0,
  217,
  204,
  1,
  0,
  0,
  0,
  217,
  208,
  1,
  0,
  0,
  0,
  217,
  213,
  1,
  0,
  0,
  0,
  218,
  15,
  1,
  0,
  0,
  0,
  219,
  220,
  5,
  45,
  0,
  0,
  220,
  223,
  3,
  20,
  10,
  0,
  221,
  223,
  5,
  45,
  0,
  0,
  222,
  219,
  1,
  0,
  0,
  0,
  222,
  221,
  1,
  0,
  0,
  0,
  223,
  17,
  1,
  0,
  0,
  0,
  224,
  225,
  5,
  52,
  0,
  0,
  225,
  19,
  1,
  0,
  0,
  0,
  226,
  227,
  7,
  0,
  0,
  0,
  227,
  21,
  1,
  0,
  0,
  0,
  228,
  229,
  5,
  55,
  0,
  0,
  229,
  23,
  1,
  0,
  0,
  0,
  230,
  232,
  3,
  32,
  16,
  0,
  231,
  230,
  1,
  0,
  0,
  0,
  232,
  233,
  1,
  0,
  0,
  0,
  233,
  231,
  1,
  0,
  0,
  0,
  233,
  234,
  1,
  0,
  0,
  0,
  234,
  25,
  1,
  0,
  0,
  0,
  235,
  237,
  5,
  40,
  0,
  0,
  236,
  238,
  3,
  96,
  48,
  0,
  237,
  236,
  1,
  0,
  0,
  0,
  237,
  238,
  1,
  0,
  0,
  0,
  238,
  240,
  1,
  0,
  0,
  0,
  239,
  241,
  5,
  27,
  0,
  0,
  240,
  239,
  1,
  0,
  0,
  0,
  240,
  241,
  1,
  0,
  0,
  0,
  241,
  248,
  1,
  0,
  0,
  0,
  242,
  243,
  5,
  51,
  0,
  0,
  243,
  245,
  3,
  58,
  29,
  0,
  244,
  246,
  5,
  63,
  0,
  0,
  245,
  244,
  1,
  0,
  0,
  0,
  245,
  246,
  1,
  0,
  0,
  0,
  246,
  248,
  1,
  0,
  0,
  0,
  247,
  235,
  1,
  0,
  0,
  0,
  247,
  242,
  1,
  0,
  0,
  0,
  248,
  27,
  1,
  0,
  0,
  0,
  249,
  250,
  3,
  30,
  15,
  0,
  250,
  29,
  1,
  0,
  0,
  0,
  251,
  252,
  5,
  61,
  0,
  0,
  252,
  31,
  1,
  0,
  0,
  0,
  253,
  269,
  3,
  84,
  42,
  0,
  254,
  269,
  3,
  34,
  17,
  0,
  255,
  269,
  3,
  36,
  18,
  0,
  256,
  269,
  3,
  94,
  47,
  0,
  257,
  269,
  3,
  38,
  19,
  0,
  258,
  269,
  3,
  42,
  21,
  0,
  259,
  261,
  3,
  58,
  29,
  0,
  260,
  262,
  5,
  63,
  0,
  0,
  261,
  260,
  1,
  0,
  0,
  0,
  261,
  262,
  1,
  0,
  0,
  0,
  262,
  269,
  1,
  0,
  0,
  0,
  263,
  269,
  3,
  26,
  13,
  0,
  264,
  269,
  3,
  28,
  14,
  0,
  265,
  269,
  3,
  76,
  38,
  0,
  266,
  267,
  5,
  60,
  0,
  0,
  267,
  269,
  6,
  16,
  -1,
  0,
  268,
  253,
  1,
  0,
  0,
  0,
  268,
  254,
  1,
  0,
  0,
  0,
  268,
  255,
  1,
  0,
  0,
  0,
  268,
  256,
  1,
  0,
  0,
  0,
  268,
  257,
  1,
  0,
  0,
  0,
  268,
  258,
  1,
  0,
  0,
  0,
  268,
  259,
  1,
  0,
  0,
  0,
  268,
  263,
  1,
  0,
  0,
  0,
  268,
  264,
  1,
  0,
  0,
  0,
  268,
  265,
  1,
  0,
  0,
  0,
  268,
  266,
  1,
  0,
  0,
  0,
  269,
  33,
  1,
  0,
  0,
  0,
  270,
  271,
  5,
  42,
  0,
  0,
  271,
  274,
  3,
  92,
  46,
  0,
  272,
  274,
  5,
  42,
  0,
  0,
  273,
  270,
  1,
  0,
  0,
  0,
  273,
  272,
  1,
  0,
  0,
  0,
  274,
  35,
  1,
  0,
  0,
  0,
  275,
  276,
  5,
  44,
  0,
  0,
  276,
  279,
  3,
  92,
  46,
  0,
  277,
  279,
  5,
  44,
  0,
  0,
  278,
  275,
  1,
  0,
  0,
  0,
  278,
  277,
  1,
  0,
  0,
  0,
  279,
  37,
  1,
  0,
  0,
  0,
  280,
  283,
  3,
  40,
  20,
  0,
  281,
  284,
  5,
  27,
  0,
  0,
  282,
  284,
  3,
  92,
  46,
  0,
  283,
  281,
  1,
  0,
  0,
  0,
  283,
  282,
  1,
  0,
  0,
  0,
  283,
  284,
  1,
  0,
  0,
  0,
  284,
  39,
  1,
  0,
  0,
  0,
  285,
  287,
  3,
  56,
  28,
  0,
  286,
  285,
  1,
  0,
  0,
  0,
  286,
  287,
  1,
  0,
  0,
  0,
  287,
  288,
  1,
  0,
  0,
  0,
  288,
  289,
  5,
  41,
  0,
  0,
  289,
  295,
  3,
  62,
  31,
  0,
  290,
  292,
  5,
  30,
  0,
  0,
  291,
  293,
  3,
  70,
  35,
  0,
  292,
  291,
  1,
  0,
  0,
  0,
  292,
  293,
  1,
  0,
  0,
  0,
  293,
  294,
  1,
  0,
  0,
  0,
  294,
  296,
  5,
  31,
  0,
  0,
  295,
  290,
  1,
  0,
  0,
  0,
  295,
  296,
  1,
  0,
  0,
  0,
  296,
  302,
  1,
  0,
  0,
  0,
  297,
  299,
  3,
  56,
  28,
  0,
  298,
  297,
  1,
  0,
  0,
  0,
  298,
  299,
  1,
  0,
  0,
  0,
  299,
  300,
  1,
  0,
  0,
  0,
  300,
  302,
  5,
  41,
  0,
  0,
  301,
  286,
  1,
  0,
  0,
  0,
  301,
  298,
  1,
  0,
  0,
  0,
  302,
  41,
  1,
  0,
  0,
  0,
  303,
  306,
  3,
  44,
  22,
  0,
  304,
  307,
  5,
  27,
  0,
  0,
  305,
  307,
  3,
  92,
  46,
  0,
  306,
  304,
  1,
  0,
  0,
  0,
  306,
  305,
  1,
  0,
  0,
  0,
  306,
  307,
  1,
  0,
  0,
  0,
  307,
  43,
  1,
  0,
  0,
  0,
  308,
  310,
  3,
  56,
  28,
  0,
  309,
  308,
  1,
  0,
  0,
  0,
  309,
  310,
  1,
  0,
  0,
  0,
  310,
  319,
  1,
  0,
  0,
  0,
  311,
  312,
  3,
  48,
  24,
  0,
  312,
  313,
  5,
  10,
  0,
  0,
  313,
  315,
  1,
  0,
  0,
  0,
  314,
  311,
  1,
  0,
  0,
  0,
  314,
  315,
  1,
  0,
  0,
  0,
  315,
  316,
  1,
  0,
  0,
  0,
  316,
  317,
  3,
  50,
  25,
  0,
  317,
  318,
  5,
  53,
  0,
  0,
  318,
  320,
  1,
  0,
  0,
  0,
  319,
  314,
  1,
  0,
  0,
  0,
  319,
  320,
  1,
  0,
  0,
  0,
  320,
  321,
  1,
  0,
  0,
  0,
  321,
  332,
  3,
  46,
  23,
  0,
  322,
  332,
  3,
  56,
  28,
  0,
  323,
  324,
  3,
  48,
  24,
  0,
  324,
  325,
  5,
  10,
  0,
  0,
  325,
  327,
  1,
  0,
  0,
  0,
  326,
  323,
  1,
  0,
  0,
  0,
  326,
  327,
  1,
  0,
  0,
  0,
  327,
  328,
  1,
  0,
  0,
  0,
  328,
  329,
  3,
  50,
  25,
  0,
  329,
  330,
  5,
  53,
  0,
  0,
  330,
  332,
  1,
  0,
  0,
  0,
  331,
  309,
  1,
  0,
  0,
  0,
  331,
  322,
  1,
  0,
  0,
  0,
  331,
  326,
  1,
  0,
  0,
  0,
  332,
  45,
  1,
  0,
  0,
  0,
  333,
  338,
  3,
  52,
  26,
  0,
  334,
  335,
  5,
  53,
  0,
  0,
  335,
  337,
  3,
  52,
  26,
  0,
  336,
  334,
  1,
  0,
  0,
  0,
  337,
  340,
  1,
  0,
  0,
  0,
  338,
  336,
  1,
  0,
  0,
  0,
  338,
  339,
  1,
  0,
  0,
  0,
  339,
  47,
  1,
  0,
  0,
  0,
  340,
  338,
  1,
  0,
  0,
  0,
  341,
  342,
  7,
  0,
  0,
  0,
  342,
  49,
  1,
  0,
  0,
  0,
  343,
  344,
  7,
  0,
  0,
  0,
  344,
  51,
  1,
  0,
  0,
  0,
  345,
  347,
  3,
  68,
  34,
  0,
  346,
  348,
  3,
  54,
  27,
  0,
  347,
  346,
  1,
  0,
  0,
  0,
  347,
  348,
  1,
  0,
  0,
  0,
  348,
  53,
  1,
  0,
  0,
  0,
  349,
  351,
  5,
  30,
  0,
  0,
  350,
  352,
  3,
  70,
  35,
  0,
  351,
  350,
  1,
  0,
  0,
  0,
  351,
  352,
  1,
  0,
  0,
  0,
  352,
  353,
  1,
  0,
  0,
  0,
  353,
  354,
  5,
  31,
  0,
  0,
  354,
  55,
  1,
  0,
  0,
  0,
  355,
  357,
  3,
  64,
  32,
  0,
  356,
  355,
  1,
  0,
  0,
  0,
  356,
  357,
  1,
  0,
  0,
  0,
  357,
  358,
  1,
  0,
  0,
  0,
  358,
  359,
  3,
  66,
  33,
  0,
  359,
  360,
  5,
  29,
  0,
  0,
  360,
  57,
  1,
  0,
  0,
  0,
  361,
  362,
  3,
  48,
  24,
  0,
  362,
  363,
  5,
  10,
  0,
  0,
  363,
  365,
  1,
  0,
  0,
  0,
  364,
  361,
  1,
  0,
  0,
  0,
  364,
  365,
  1,
  0,
  0,
  0,
  365,
  366,
  1,
  0,
  0,
  0,
  366,
  367,
  3,
  50,
  25,
  0,
  367,
  368,
  5,
  7,
  0,
  0,
  368,
  369,
  3,
  60,
  30,
  0,
  369,
  376,
  1,
  0,
  0,
  0,
  370,
  371,
  3,
  48,
  24,
  0,
  371,
  373,
  7,
  3,
  0,
  0,
  372,
  374,
  3,
  50,
  25,
  0,
  373,
  372,
  1,
  0,
  0,
  0,
  373,
  374,
  1,
  0,
  0,
  0,
  374,
  376,
  1,
  0,
  0,
  0,
  375,
  364,
  1,
  0,
  0,
  0,
  375,
  370,
  1,
  0,
  0,
  0,
  376,
  59,
  1,
  0,
  0,
  0,
  377,
  378,
  5,
  62,
  0,
  0,
  378,
  61,
  1,
  0,
  0,
  0,
  379,
  380,
  7,
  0,
  0,
  0,
  380,
  63,
  1,
  0,
  0,
  0,
  381,
  382,
  7,
  0,
  0,
  0,
  382,
  65,
  1,
  0,
  0,
  0,
  383,
  394,
  3,
  98,
  49,
  0,
  384,
  389,
  5,
  54,
  0,
  0,
  385,
  386,
  5,
  28,
  0,
  0,
  386,
  388,
  5,
  54,
  0,
  0,
  387,
  385,
  1,
  0,
  0,
  0,
  388,
  391,
  1,
  0,
  0,
  0,
  389,
  387,
  1,
  0,
  0,
  0,
  389,
  390,
  1,
  0,
  0,
  0,
  390,
  394,
  1,
  0,
  0,
  0,
  391,
  389,
  1,
  0,
  0,
  0,
  392,
  394,
  5,
  57,
  0,
  0,
  393,
  383,
  1,
  0,
  0,
  0,
  393,
  384,
  1,
  0,
  0,
  0,
  393,
  392,
  1,
  0,
  0,
  0,
  394,
  67,
  1,
  0,
  0,
  0,
  395,
  396,
  7,
  0,
  0,
  0,
  396,
  69,
  1,
  0,
  0,
  0,
  397,
  402,
  3,
  72,
  36,
  0,
  398,
  399,
  5,
  28,
  0,
  0,
  399,
  401,
  3,
  72,
  36,
  0,
  400,
  398,
  1,
  0,
  0,
  0,
  401,
  404,
  1,
  0,
  0,
  0,
  402,
  400,
  1,
  0,
  0,
  0,
  402,
  403,
  1,
  0,
  0,
  0,
  403,
  406,
  1,
  0,
  0,
  0,
  404,
  402,
  1,
  0,
  0,
  0,
  405,
  407,
  5,
  28,
  0,
  0,
  406,
  405,
  1,
  0,
  0,
  0,
  406,
  407,
  1,
  0,
  0,
  0,
  407,
  71,
  1,
  0,
  0,
  0,
  408,
  411,
  3,
  74,
  37,
  0,
  409,
  411,
  3,
  96,
  48,
  0,
  410,
  408,
  1,
  0,
  0,
  0,
  410,
  409,
  1,
  0,
  0,
  0,
  411,
  73,
  1,
  0,
  0,
  0,
  412,
  413,
  3,
  64,
  32,
  0,
  413,
  414,
  5,
  54,
  0,
  0,
  414,
  75,
  1,
  0,
  0,
  0,
  415,
  419,
  3,
  78,
  39,
  0,
  416,
  418,
  3,
  80,
  40,
  0,
  417,
  416,
  1,
  0,
  0,
  0,
  418,
  421,
  1,
  0,
  0,
  0,
  419,
  417,
  1,
  0,
  0,
  0,
  419,
  420,
  1,
  0,
  0,
  0,
  420,
  423,
  1,
  0,
  0,
  0,
  421,
  419,
  1,
  0,
  0,
  0,
  422,
  424,
  3,
  82,
  41,
  0,
  423,
  422,
  1,
  0,
  0,
  0,
  423,
  424,
  1,
  0,
  0,
  0,
  424,
  77,
  1,
  0,
  0,
  0,
  425,
  426,
  5,
  46,
  0,
  0,
  426,
  427,
  3,
  92,
  46,
  0,
  427,
  79,
  1,
  0,
  0,
  0,
  428,
  430,
  5,
  47,
  0,
  0,
  429,
  431,
  3,
  54,
  27,
  0,
  430,
  429,
  1,
  0,
  0,
  0,
  430,
  431,
  1,
  0,
  0,
  0,
  431,
  432,
  1,
  0,
  0,
  0,
  432,
  433,
  3,
  92,
  46,
  0,
  433,
  81,
  1,
  0,
  0,
  0,
  434,
  435,
  5,
  48,
  0,
  0,
  435,
  436,
  3,
  92,
  46,
  0,
  436,
  83,
  1,
  0,
  0,
  0,
  437,
  441,
  3,
  86,
  43,
  0,
  438,
  440,
  3,
  88,
  44,
  0,
  439,
  438,
  1,
  0,
  0,
  0,
  440,
  443,
  1,
  0,
  0,
  0,
  441,
  439,
  1,
  0,
  0,
  0,
  441,
  442,
  1,
  0,
  0,
  0,
  442,
  445,
  1,
  0,
  0,
  0,
  443,
  441,
  1,
  0,
  0,
  0,
  444,
  446,
  3,
  90,
  45,
  0,
  445,
  444,
  1,
  0,
  0,
  0,
  445,
  446,
  1,
  0,
  0,
  0,
  446,
  85,
  1,
  0,
  0,
  0,
  447,
  448,
  5,
  37,
  0,
  0,
  448,
  449,
  3,
  100,
  50,
  0,
  449,
  450,
  3,
  92,
  46,
  0,
  450,
  87,
  1,
  0,
  0,
  0,
  451,
  452,
  5,
  38,
  0,
  0,
  452,
  453,
  5,
  37,
  0,
  0,
  453,
  454,
  3,
  100,
  50,
  0,
  454,
  455,
  3,
  92,
  46,
  0,
  455,
  89,
  1,
  0,
  0,
  0,
  456,
  457,
  5,
  38,
  0,
  0,
  457,
  458,
  3,
  92,
  46,
  0,
  458,
  91,
  1,
  0,
  0,
  0,
  459,
  461,
  5,
  32,
  0,
  0,
  460,
  462,
  3,
  24,
  12,
  0,
  461,
  460,
  1,
  0,
  0,
  0,
  461,
  462,
  1,
  0,
  0,
  0,
  462,
  463,
  1,
  0,
  0,
  0,
  463,
  464,
  5,
  33,
  0,
  0,
  464,
  93,
  1,
  0,
  0,
  0,
  465,
  466,
  5,
  39,
  0,
  0,
  466,
  467,
  3,
  100,
  50,
  0,
  467,
  468,
  3,
  92,
  46,
  0,
  468,
  473,
  1,
  0,
  0,
  0,
  469,
  470,
  5,
  39,
  0,
  0,
  470,
  473,
  3,
  100,
  50,
  0,
  471,
  473,
  5,
  39,
  0,
  0,
  472,
  465,
  1,
  0,
  0,
  0,
  472,
  469,
  1,
  0,
  0,
  0,
  472,
  471,
  1,
  0,
  0,
  0,
  473,
  95,
  1,
  0,
  0,
  0,
  474,
  475,
  6,
  48,
  -1,
  0,
  475,
  495,
  3,
  98,
  49,
  0,
  476,
  477,
  5,
  21,
  0,
  0,
  477,
  495,
  3,
  96,
  48,
  13,
  478,
  479,
  5,
  26,
  0,
  0,
  479,
  495,
  3,
  96,
  48,
  12,
  480,
  481,
  3,
  50,
  25,
  0,
  481,
  482,
  5,
  53,
  0,
  0,
  482,
  484,
  1,
  0,
  0,
  0,
  483,
  480,
  1,
  0,
  0,
  0,
  483,
  484,
  1,
  0,
  0,
  0,
  484,
  485,
  1,
  0,
  0,
  0,
  485,
  495,
  3,
  46,
  23,
  0,
  486,
  495,
  3,
  38,
  19,
  0,
  487,
  488,
  5,
  30,
  0,
  0,
  488,
  489,
  3,
  96,
  48,
  0,
  489,
  490,
  5,
  31,
  0,
  0,
  490,
  495,
  1,
  0,
  0,
  0,
  491,
  492,
  3,
  56,
  28,
  0,
  492,
  493,
  3,
  96,
  48,
  1,
  493,
  495,
  1,
  0,
  0,
  0,
  494,
  474,
  1,
  0,
  0,
  0,
  494,
  476,
  1,
  0,
  0,
  0,
  494,
  478,
  1,
  0,
  0,
  0,
  494,
  483,
  1,
  0,
  0,
  0,
  494,
  486,
  1,
  0,
  0,
  0,
  494,
  487,
  1,
  0,
  0,
  0,
  494,
  491,
  1,
  0,
  0,
  0,
  495,
  519,
  1,
  0,
  0,
  0,
  496,
  497,
  10,
  11,
  0,
  0,
  497,
  498,
  7,
  4,
  0,
  0,
  498,
  518,
  3,
  96,
  48,
  12,
  499,
  500,
  10,
  10,
  0,
  0,
  500,
  501,
  7,
  5,
  0,
  0,
  501,
  518,
  3,
  96,
  48,
  11,
  502,
  503,
  10,
  9,
  0,
  0,
  503,
  504,
  7,
  6,
  0,
  0,
  504,
  518,
  3,
  96,
  48,
  10,
  505,
  506,
  10,
  8,
  0,
  0,
  506,
  507,
  7,
  7,
  0,
  0,
  507,
  518,
  3,
  96,
  48,
  9,
  508,
  509,
  10,
  7,
  0,
  0,
  509,
  510,
  5,
  13,
  0,
  0,
  510,
  518,
  3,
  96,
  48,
  8,
  511,
  512,
  10,
  6,
  0,
  0,
  512,
  513,
  5,
  12,
  0,
  0,
  513,
  518,
  3,
  96,
  48,
  7,
  514,
  515,
  10,
  5,
  0,
  0,
  515,
  516,
  5,
  20,
  0,
  0,
  516,
  518,
  3,
  96,
  48,
  6,
  517,
  496,
  1,
  0,
  0,
  0,
  517,
  499,
  1,
  0,
  0,
  0,
  517,
  502,
  1,
  0,
  0,
  0,
  517,
  505,
  1,
  0,
  0,
  0,
  517,
  508,
  1,
  0,
  0,
  0,
  517,
  511,
  1,
  0,
  0,
  0,
  517,
  514,
  1,
  0,
  0,
  0,
  518,
  521,
  1,
  0,
  0,
  0,
  519,
  517,
  1,
  0,
  0,
  0,
  519,
  520,
  1,
  0,
  0,
  0,
  520,
  97,
  1,
  0,
  0,
  0,
  521,
  519,
  1,
  0,
  0,
  0,
  522,
  528,
  7,
  8,
  0,
  0,
  523,
  528,
  7,
  9,
  0,
  0,
  524,
  528,
  5,
  54,
  0,
  0,
  525,
  528,
  5,
  57,
  0,
  0,
  526,
  528,
  5,
  36,
  0,
  0,
  527,
  522,
  1,
  0,
  0,
  0,
  527,
  523,
  1,
  0,
  0,
  0,
  527,
  524,
  1,
  0,
  0,
  0,
  527,
  525,
  1,
  0,
  0,
  0,
  527,
  526,
  1,
  0,
  0,
  0,
  528,
  99,
  1,
  0,
  0,
  0,
  529,
  530,
  5,
  30,
  0,
  0,
  530,
  531,
  3,
  102,
  51,
  0,
  531,
  532,
  5,
  31,
  0,
  0,
  532,
  539,
  1,
  0,
  0,
  0,
  533,
  534,
  5,
  30,
  0,
  0,
  534,
  539,
  3,
  102,
  51,
  0,
  535,
  536,
  5,
  30,
  0,
  0,
  536,
  539,
  5,
  31,
  0,
  0,
  537,
  539,
  5,
  30,
  0,
  0,
  538,
  529,
  1,
  0,
  0,
  0,
  538,
  533,
  1,
  0,
  0,
  0,
  538,
  535,
  1,
  0,
  0,
  0,
  538,
  537,
  1,
  0,
  0,
  0,
  539,
  101,
  1,
  0,
  0,
  0,
  540,
  544,
  3,
  98,
  49,
  0,
  541,
  544,
  3,
  96,
  48,
  0,
  542,
  544,
  3,
  104,
  52,
  0,
  543,
  540,
  1,
  0,
  0,
  0,
  543,
  541,
  1,
  0,
  0,
  0,
  543,
  542,
  1,
  0,
  0,
  0,
  544,
  103,
  1,
  0,
  0,
  0,
  545,
  546,
  5,
  54,
  0,
  0,
  546,
  547,
  5,
  49,
  0,
  0,
  547,
  548,
  5,
  54,
  0,
  0,
  548,
  105,
  1,
  0,
  0,
  0,
  76,
  107,
  111,
  117,
  120,
  125,
  130,
  134,
  136,
  140,
  142,
  146,
  150,
  156,
  162,
  167,
  169,
  174,
  177,
  180,
  185,
  188,
  192,
  195,
  198,
  202,
  211,
  215,
  217,
  222,
  233,
  237,
  240,
  245,
  247,
  261,
  268,
  273,
  278,
  283,
  286,
  292,
  295,
  298,
  301,
  306,
  309,
  314,
  319,
  326,
  331,
  338,
  347,
  351,
  356,
  364,
  373,
  375,
  389,
  393,
  402,
  406,
  410,
  419,
  423,
  430,
  441,
  445,
  461,
  472,
  483,
  494,
  517,
  519,
  527,
  538,
  543
], ua = new v.atn.ATNDeserializer().deserialize(nf), rf = ua.decisionToState.map((t, e) => new v.dfa.DFA(t, e)), sf = new v.PredictionContextCache(), L = class extends v.Parser {
  constructor(t) {
    super(t), this._interp = new v.atn.ParserATNSimulator(this, ua, rf, sf), this.ruleNames = L.ruleNames, this.literalNames = L.literalNames, this.symbolicNames = L.symbolicNames;
  }
  get atn() {
    return ua;
  }
  sempred(t, e, n) {
    switch (e) {
      case 48:
        return this.expr_sempred(t, n);
      default:
        throw "No predicate with index:" + e;
    }
  }
  expr_sempred(t, e) {
    switch (e) {
      case 0:
        return this.precpred(this._ctx, 11);
      case 1:
        return this.precpred(this._ctx, 10);
      case 2:
        return this.precpred(this._ctx, 9);
      case 3:
        return this.precpred(this._ctx, 8);
      case 4:
        return this.precpred(this._ctx, 7);
      case 5:
        return this.precpred(this._ctx, 6);
      case 6:
        return this.precpred(this._ctx, 5);
      default:
        throw "No predicate with index:" + e;
    }
  }
  prog() {
    let t = new td(this, this._ctx, this.state);
    this.enterRule(t, 0, L.RULE_prog);
    var e = 0;
    try {
      this.state = 125, this._errHandler.sync(this);
      var n = this._interp.adaptivePredict(this._input, 4, this._ctx);
      switch (n) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 107, this._errHandler.sync(this), e = this._input.LA(1), e === 6 && (this.state = 106, this.title()), this.state = 109, this.match(L.EOF);
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 111, this._errHandler.sync(this), e = this._input.LA(1), e === 6 && (this.state = 110, this.title()), this.state = 113, this.head(), this.state = 114, this.match(L.EOF);
          break;
        case 3:
          this.enterOuterAlt(t, 3), this.state = 117, this._errHandler.sync(this), e = this._input.LA(1), e === 6 && (this.state = 116, this.title()), this.state = 120, this._errHandler.sync(this);
          var n = this._interp.adaptivePredict(this._input, 3, this._ctx);
          n === 1 && (this.state = 119, this.head()), this.state = 122, this.block(), this.state = 123, this.match(L.EOF);
          break;
      }
    } catch (r) {
      if (r instanceof v.error.RecognitionException)
        t.exception = r, this._errHandler.reportError(this, r), this._errHandler.recover(this, r);
      else
        throw r;
    } finally {
      this.exitRule();
    }
    return t;
  }
  title() {
    let t = new kl(this, this._ctx, this.state);
    this.enterRule(t, 2, L.RULE_title);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 127, this.match(L.TITLE), this.state = 128, this.match(L.TITLE_CONTENT), this.state = 130, this._errHandler.sync(this), e = this._input.LA(1), e === 65 && (this.state = 129, this.match(L.TITLE_END));
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  head() {
    let t = new Tl(this, this._ctx, this.state);
    this.enterRule(t, 4, L.RULE_head);
    try {
      this.state = 146, this._errHandler.sync(this);
      var e = this._interp.adaptivePredict(this._input, 10, this._ctx);
      switch (e) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 134, this._errHandler.sync(this);
          var n = 1;
          do {
            switch (n) {
              case 1:
                switch (this.state = 134, this._errHandler.sync(this), this._input.LA(1)) {
                  case 43:
                    this.state = 132, this.group();
                    break;
                  case 8:
                  case 17:
                  case 52:
                  case 54:
                  case 57:
                    this.state = 133, this.participant();
                    break;
                  default:
                    throw new v.error.NoViableAltException(this);
                }
                break;
              default:
                throw new v.error.NoViableAltException(this);
            }
            this.state = 136, this._errHandler.sync(this), n = this._interp.adaptivePredict(this._input, 7, this._ctx);
          } while (n != 2 && n != v.atn.ATN.INVALID_ALT_NUMBER);
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 142, this._errHandler.sync(this);
          for (var n = this._interp.adaptivePredict(this._input, 9, this._ctx); n != 2 && n != v.atn.ATN.INVALID_ALT_NUMBER; ) {
            if (n === 1)
              switch (this.state = 140, this._errHandler.sync(this), this._input.LA(1)) {
                case 43:
                  this.state = 138, this.group();
                  break;
                case 8:
                case 17:
                case 52:
                case 54:
                case 57:
                  this.state = 139, this.participant();
                  break;
                default:
                  throw new v.error.NoViableAltException(this);
              }
            this.state = 144, this._errHandler.sync(this), n = this._interp.adaptivePredict(this._input, 9, this._ctx);
          }
          this.state = 145, this.starterExp();
          break;
      }
    } catch (r) {
      if (r instanceof v.error.RecognitionException)
        t.exception = r, this._errHandler.reportError(this, r), this._errHandler.recover(this, r);
      else
        throw r;
    } finally {
      this.exitRule();
    }
    return t;
  }
  group() {
    let t = new eo(this, this._ctx, this.state);
    this.enterRule(t, 6, L.RULE_group);
    var e = 0;
    try {
      this.state = 169, this._errHandler.sync(this);
      var n = this._interp.adaptivePredict(this._input, 15, this._ctx);
      switch (n) {
        case 1:
          for (this.enterOuterAlt(t, 1), this.state = 148, this.match(L.GROUP), this.state = 150, this._errHandler.sync(this), e = this._input.LA(1), (e === 54 || e === 57) && (this.state = 149, this.name()), this.state = 152, this.match(L.OBRACE), this.state = 156, this._errHandler.sync(this), e = this._input.LA(1); e === 8 || e === 17 || !(e - 52 & -32) && 1 << e - 52 & 37; )
            this.state = 153, this.participant(), this.state = 158, this._errHandler.sync(this), e = this._input.LA(1);
          this.state = 159, this.match(L.CBRACE);
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 160, this.match(L.GROUP), this.state = 162, this._errHandler.sync(this), e = this._input.LA(1), (e === 54 || e === 57) && (this.state = 161, this.name()), this.state = 164, this.match(L.OBRACE);
          break;
        case 3:
          this.enterOuterAlt(t, 3), this.state = 165, this.match(L.GROUP), this.state = 167, this._errHandler.sync(this);
          var n = this._interp.adaptivePredict(this._input, 14, this._ctx);
          n === 1 && (this.state = 166, this.name());
          break;
      }
    } catch (r) {
      if (r instanceof v.error.RecognitionException)
        t.exception = r, this._errHandler.reportError(this, r), this._errHandler.recover(this, r);
      else
        throw r;
    } finally {
      this.exitRule();
    }
    return t;
  }
  starterExp() {
    let t = new Al(this, this._ctx, this.state);
    this.enterRule(t, 8, L.RULE_starterExp);
    var e = 0;
    try {
      switch (this.state = 180, this._errHandler.sync(this), this._input.LA(1)) {
        case 50:
          this.enterOuterAlt(t, 1), this.state = 171, this.match(L.STARTER_LXR), this.state = 177, this._errHandler.sync(this), e = this._input.LA(1), e === 30 && (this.state = 172, this.match(L.OPAR), this.state = 174, this._errHandler.sync(this), e = this._input.LA(1), (e === 54 || e === 57) && (this.state = 173, this.starter()), this.state = 176, this.match(L.CPAR));
          break;
        case 52:
          this.enterOuterAlt(t, 2), this.state = 179, this.match(L.ANNOTATION);
          break;
        default:
          throw new v.error.NoViableAltException(this);
      }
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  starter() {
    let t = new Sl(this, this._ctx, this.state);
    this.enterRule(t, 10, L.RULE_starter);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 182, e = this._input.LA(1), e === 54 || e === 57 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  participant() {
    let t = new Xr(this, this._ctx, this.state);
    this.enterRule(t, 12, L.RULE_participant);
    var e = 0;
    try {
      this.state = 202, this._errHandler.sync(this);
      var n = this._interp.adaptivePredict(this._input, 24, this._ctx);
      switch (n) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 185, this._errHandler.sync(this), e = this._input.LA(1), e === 52 && (this.state = 184, this.participantType()), this.state = 188, this._errHandler.sync(this), e = this._input.LA(1), (e === 8 || e === 17) && (this.state = 187, this.stereotype()), this.state = 190, this.name(), this.state = 192, this._errHandler.sync(this);
          var n = this._interp.adaptivePredict(this._input, 21, this._ctx);
          n === 1 && (this.state = 191, this.width()), this.state = 195, this._errHandler.sync(this), e = this._input.LA(1), e === 45 && (this.state = 194, this.label()), this.state = 198, this._errHandler.sync(this), e = this._input.LA(1), e === 11 && (this.state = 197, this.match(L.COLOR));
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 200, this.stereotype();
          break;
        case 3:
          this.enterOuterAlt(t, 3), this.state = 201, this.participantType();
          break;
      }
    } catch (r) {
      if (r instanceof v.error.RecognitionException)
        t.exception = r, this._errHandler.reportError(this, r), this._errHandler.recover(this, r);
      else
        throw r;
    } finally {
      this.exitRule();
    }
    return t;
  }
  stereotype() {
    let t = new Rl(this, this._ctx, this.state);
    this.enterRule(t, 14, L.RULE_stereotype);
    var e = 0;
    try {
      this.state = 217, this._errHandler.sync(this);
      var n = this._interp.adaptivePredict(this._input, 27, this._ctx);
      switch (n) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 204, this.match(L.SOPEN), this.state = 205, this.name(), this.state = 206, this.match(L.SCLOSE);
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 208, this.match(L.SOPEN), this.state = 209, this.name(), this.state = 211, this._errHandler.sync(this), e = this._input.LA(1), e === 16 && (this.state = 210, this.match(L.GT));
          break;
        case 3:
          this.enterOuterAlt(t, 3), this.state = 213, e = this._input.LA(1), e === 8 || e === 17 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 215, this._errHandler.sync(this), e = this._input.LA(1), (e === 9 || e === 16) && (this.state = 214, e = this._input.LA(1), e === 9 || e === 16 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this));
          break;
      }
    } catch (r) {
      if (r instanceof v.error.RecognitionException)
        t.exception = r, this._errHandler.reportError(this, r), this._errHandler.recover(this, r);
      else
        throw r;
    } finally {
      this.exitRule();
    }
    return t;
  }
  label() {
    let t = new Il(this, this._ctx, this.state);
    this.enterRule(t, 16, L.RULE_label);
    try {
      this.state = 222, this._errHandler.sync(this);
      var e = this._interp.adaptivePredict(this._input, 28, this._ctx);
      switch (e) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 219, this.match(L.AS), this.state = 220, this.name();
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 221, this.match(L.AS);
          break;
      }
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  participantType() {
    let t = new Ol(this, this._ctx, this.state);
    this.enterRule(t, 18, L.RULE_participantType);
    try {
      this.enterOuterAlt(t, 1), this.state = 224, this.match(L.ANNOTATION);
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
  name() {
    let t = new ss(this, this._ctx, this.state);
    this.enterRule(t, 20, L.RULE_name);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 226, e = this._input.LA(1), e === 54 || e === 57 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  width() {
    let t = new Nl(this, this._ctx, this.state);
    this.enterRule(t, 22, L.RULE_width);
    try {
      this.enterOuterAlt(t, 1), this.state = 228, this.match(L.INT);
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
  block() {
    let t = new Uo(this, this._ctx, this.state);
    this.enterRule(t, 24, L.RULE_block);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 231, this._errHandler.sync(this), e = this._input.LA(1);
      do
        this.state = 230, this.stat(), this.state = 233, this._errHandler.sync(this), e = this._input.LA(1);
      while (!(e - 34 & -32) && 1 << e - 34 & 217191919);
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  ret() {
    let t = new Pl(this, this._ctx, this.state);
    this.enterRule(t, 26, L.RULE_ret);
    var e = 0;
    try {
      switch (this.state = 247, this._errHandler.sync(this), this._input.LA(1)) {
        case 40:
          this.enterOuterAlt(t, 1), this.state = 235, this.match(L.RETURN), this.state = 237, this._errHandler.sync(this);
          var n = this._interp.adaptivePredict(this._input, 30, this._ctx);
          n === 1 && (this.state = 236, this.expr(0)), this.state = 240, this._errHandler.sync(this), e = this._input.LA(1), e === 27 && (this.state = 239, this.match(L.SCOL));
          break;
        case 51:
          this.enterOuterAlt(t, 2), this.state = 242, this.match(L.ANNOTATION_RET), this.state = 243, this.asyncMessage(), this.state = 245, this._errHandler.sync(this), e = this._input.LA(1), e === 63 && (this.state = 244, this.match(L.EVENT_END));
          break;
        default:
          throw new v.error.NoViableAltException(this);
      }
    } catch (r) {
      if (r instanceof v.error.RecognitionException)
        t.exception = r, this._errHandler.reportError(this, r), this._errHandler.recover(this, r);
      else
        throw r;
    } finally {
      this.exitRule();
    }
    return t;
  }
  divider() {
    let t = new Ml(this, this._ctx, this.state);
    this.enterRule(t, 28, L.RULE_divider);
    try {
      this.enterOuterAlt(t, 1), this.state = 249, this.dividerNote();
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
  dividerNote() {
    let t = new Fl(this, this._ctx, this.state);
    this.enterRule(t, 30, L.RULE_dividerNote);
    try {
      this.enterOuterAlt(t, 1), this.state = 251, this.match(L.DIVIDER);
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
  stat() {
    let t = new to(this, this._ctx, this.state);
    this.enterRule(t, 32, L.RULE_stat);
    var e = 0;
    try {
      this.state = 268, this._errHandler.sync(this);
      var n = this._interp.adaptivePredict(this._input, 35, this._ctx);
      switch (n) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 253, this.alt();
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 254, this.par();
          break;
        case 3:
          this.enterOuterAlt(t, 3), this.state = 255, this.opt();
          break;
        case 4:
          this.enterOuterAlt(t, 4), this.state = 256, this.loop();
          break;
        case 5:
          this.enterOuterAlt(t, 5), this.state = 257, this.creation();
          break;
        case 6:
          this.enterOuterAlt(t, 6), this.state = 258, this.message();
          break;
        case 7:
          this.enterOuterAlt(t, 7), this.state = 259, this.asyncMessage(), this.state = 261, this._errHandler.sync(this), e = this._input.LA(1), e === 63 && (this.state = 260, this.match(L.EVENT_END));
          break;
        case 8:
          this.enterOuterAlt(t, 8), this.state = 263, this.ret();
          break;
        case 9:
          this.enterOuterAlt(t, 9), this.state = 264, this.divider();
          break;
        case 10:
          this.enterOuterAlt(t, 10), this.state = 265, this.tcf();
          break;
        case 11:
          this.enterOuterAlt(t, 11), this.state = 266, t._OTHER = this.match(L.OTHER), console.log("unknown char: " + (t._OTHER === null ? null : t._OTHER.text));
          break;
      }
    } catch (r) {
      if (r instanceof v.error.RecognitionException)
        t.exception = r, this._errHandler.reportError(this, r), this._errHandler.recover(this, r);
      else
        throw r;
    } finally {
      this.exitRule();
    }
    return t;
  }
  par() {
    let t = new zl(this, this._ctx, this.state);
    this.enterRule(t, 34, L.RULE_par);
    try {
      this.state = 273, this._errHandler.sync(this);
      var e = this._interp.adaptivePredict(this._input, 36, this._ctx);
      switch (e) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 270, this.match(L.PAR), this.state = 271, this.braceBlock();
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 272, this.match(L.PAR);
          break;
      }
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  opt() {
    let t = new Dl(this, this._ctx, this.state);
    this.enterRule(t, 36, L.RULE_opt);
    try {
      this.state = 278, this._errHandler.sync(this);
      var e = this._interp.adaptivePredict(this._input, 37, this._ctx);
      switch (e) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 275, this.match(L.OPT), this.state = 276, this.braceBlock();
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 277, this.match(L.OPT);
          break;
      }
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  creation() {
    let t = new Ho(this, this._ctx, this.state);
    this.enterRule(t, 38, L.RULE_creation);
    try {
      this.enterOuterAlt(t, 1), this.state = 280, this.creationBody(), this.state = 283, this._errHandler.sync(this);
      var e = this._interp.adaptivePredict(this._input, 38, this._ctx);
      e === 1 ? (this.state = 281, this.match(L.SCOL)) : e === 2 && (this.state = 282, this.braceBlock());
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  creationBody() {
    let t = new Bl(this, this._ctx, this.state);
    this.enterRule(t, 40, L.RULE_creationBody);
    var e = 0;
    try {
      this.state = 301, this._errHandler.sync(this);
      var n = this._interp.adaptivePredict(this._input, 43, this._ctx);
      switch (n) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 286, this._errHandler.sync(this), e = this._input.LA(1), !(e - 34 & -32) && 1 << e - 34 & 15728647 && (this.state = 285, this.assignment()), this.state = 288, this.match(L.NEW), this.state = 289, this.construct(), this.state = 295, this._errHandler.sync(this);
          var n = this._interp.adaptivePredict(this._input, 41, this._ctx);
          n === 1 && (this.state = 290, this.match(L.OPAR), this.state = 292, this._errHandler.sync(this), e = this._input.LA(1), (!(e & -32) && 1 << e & 1142947840 || !(e - 34 & -32) && 1 << e - 34 & 15728775) && (this.state = 291, this.parameters()), this.state = 294, this.match(L.CPAR));
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 298, this._errHandler.sync(this), e = this._input.LA(1), !(e - 34 & -32) && 1 << e - 34 & 15728647 && (this.state = 297, this.assignment()), this.state = 300, this.match(L.NEW);
          break;
      }
    } catch (r) {
      if (r instanceof v.error.RecognitionException)
        t.exception = r, this._errHandler.reportError(this, r), this._errHandler.recover(this, r);
      else
        throw r;
    } finally {
      this.exitRule();
    }
    return t;
  }
  message() {
    let t = new Ul(this, this._ctx, this.state);
    this.enterRule(t, 42, L.RULE_message);
    try {
      switch (this.enterOuterAlt(t, 1), this.state = 303, this.messageBody(), this.state = 306, this._errHandler.sync(this), this._input.LA(1)) {
        case 27:
          this.state = 304, this.match(L.SCOL);
          break;
        case 32:
          this.state = 305, this.braceBlock();
          break;
        case -1:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 39:
        case 40:
        case 41:
        case 42:
        case 44:
        case 46:
        case 51:
        case 54:
        case 55:
        case 56:
        case 57:
        case 60:
        case 61:
          break;
        default:
          break;
      }
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
  messageBody() {
    let t = new Hl(this, this._ctx, this.state);
    this.enterRule(t, 44, L.RULE_messageBody);
    try {
      this.state = 331, this._errHandler.sync(this);
      var e = this._interp.adaptivePredict(this._input, 49, this._ctx);
      switch (e) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 309, this._errHandler.sync(this);
          var e = this._interp.adaptivePredict(this._input, 45, this._ctx);
          e === 1 && (this.state = 308, this.assignment()), this.state = 319, this._errHandler.sync(this);
          var e = this._interp.adaptivePredict(this._input, 47, this._ctx);
          if (e === 1) {
            this.state = 314, this._errHandler.sync(this);
            var e = this._interp.adaptivePredict(this._input, 46, this._ctx);
            e === 1 && (this.state = 311, this.from(), this.state = 312, this.match(L.ARROW)), this.state = 316, this.to(), this.state = 317, this.match(L.DOT);
          }
          this.state = 321, this.func();
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 322, this.assignment();
          break;
        case 3:
          this.enterOuterAlt(t, 3), this.state = 326, this._errHandler.sync(this);
          var e = this._interp.adaptivePredict(this._input, 48, this._ctx);
          e === 1 && (this.state = 323, this.from(), this.state = 324, this.match(L.ARROW)), this.state = 328, this.to(), this.state = 329, this.match(L.DOT);
          break;
      }
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  func() {
    let t = new Vo(this, this._ctx, this.state);
    this.enterRule(t, 46, L.RULE_func);
    try {
      this.enterOuterAlt(t, 1), this.state = 333, this.signature(), this.state = 338, this._errHandler.sync(this);
      for (var e = this._interp.adaptivePredict(this._input, 50, this._ctx); e != 2 && e != v.atn.ATN.INVALID_ALT_NUMBER; )
        e === 1 && (this.state = 334, this.match(L.DOT), this.state = 335, this.signature()), this.state = 340, this._errHandler.sync(this), e = this._interp.adaptivePredict(this._input, 50, this._ctx);
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  from() {
    let t = new Go(this, this._ctx, this.state);
    this.enterRule(t, 48, L.RULE_from);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 341, e = this._input.LA(1), e === 54 || e === 57 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  to() {
    let t = new oi(this, this._ctx, this.state);
    this.enterRule(t, 50, L.RULE_to);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 343, e = this._input.LA(1), e === 54 || e === 57 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  signature() {
    let t = new no(this, this._ctx, this.state);
    this.enterRule(t, 52, L.RULE_signature);
    try {
      this.enterOuterAlt(t, 1), this.state = 345, this.methodName(), this.state = 347, this._errHandler.sync(this);
      var e = this._interp.adaptivePredict(this._input, 51, this._ctx);
      e === 1 && (this.state = 346, this.invocation());
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  invocation() {
    let t = new jo(this, this._ctx, this.state);
    this.enterRule(t, 54, L.RULE_invocation);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 349, this.match(L.OPAR), this.state = 351, this._errHandler.sync(this), e = this._input.LA(1), (!(e & -32) && 1 << e & 1142947840 || !(e - 34 & -32) && 1 << e - 34 & 15728775) && (this.state = 350, this.parameters()), this.state = 353, this.match(L.CPAR);
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  assignment() {
    let t = new ai(this, this._ctx, this.state);
    this.enterRule(t, 56, L.RULE_assignment);
    try {
      this.enterOuterAlt(t, 1), this.state = 356, this._errHandler.sync(this);
      var e = this._interp.adaptivePredict(this._input, 53, this._ctx);
      e === 1 && (this.state = 355, this.type()), this.state = 358, this.assignee(), this.state = 359, this.match(L.ASSIGN);
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  asyncMessage() {
    let t = new $o(this, this._ctx, this.state);
    this.enterRule(t, 58, L.RULE_asyncMessage);
    var e = 0;
    try {
      this.state = 375, this._errHandler.sync(this);
      var n = this._interp.adaptivePredict(this._input, 56, this._ctx);
      switch (n) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 364, this._errHandler.sync(this);
          var n = this._interp.adaptivePredict(this._input, 54, this._ctx);
          n === 1 && (this.state = 361, this.from(), this.state = 362, this.match(L.ARROW)), this.state = 366, this.to(), this.state = 367, this.match(L.COL), this.state = 368, this.content();
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 370, this.from(), this.state = 371, e = this._input.LA(1), e === 10 || e === 21 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 373, this._errHandler.sync(this);
          var n = this._interp.adaptivePredict(this._input, 55, this._ctx);
          n === 1 && (this.state = 372, this.to());
          break;
      }
    } catch (r) {
      if (r instanceof v.error.RecognitionException)
        t.exception = r, this._errHandler.reportError(this, r), this._errHandler.recover(this, r);
      else
        throw r;
    } finally {
      this.exitRule();
    }
    return t;
  }
  content() {
    let t = new Vl(this, this._ctx, this.state);
    this.enterRule(t, 60, L.RULE_content);
    try {
      this.enterOuterAlt(t, 1), this.state = 377, this.match(L.EVENT_PAYLOAD_LXR);
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
  construct() {
    let t = new Gl(this, this._ctx, this.state);
    this.enterRule(t, 62, L.RULE_construct);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 379, e = this._input.LA(1), e === 54 || e === 57 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  type() {
    let t = new qo(this, this._ctx, this.state);
    this.enterRule(t, 64, L.RULE_type);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 381, e = this._input.LA(1), e === 54 || e === 57 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  assignee() {
    let t = new jl(this, this._ctx, this.state);
    this.enterRule(t, 66, L.RULE_assignee);
    var e = 0;
    try {
      this.state = 393, this._errHandler.sync(this);
      var n = this._interp.adaptivePredict(this._input, 58, this._ctx);
      switch (n) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 383, this.atom();
          break;
        case 2:
          for (this.enterOuterAlt(t, 2), this.state = 384, this.match(L.ID), this.state = 389, this._errHandler.sync(this), e = this._input.LA(1); e === 28; )
            this.state = 385, this.match(L.COMMA), this.state = 386, this.match(L.ID), this.state = 391, this._errHandler.sync(this), e = this._input.LA(1);
          break;
        case 3:
          this.enterOuterAlt(t, 3), this.state = 392, this.match(L.STRING);
          break;
      }
    } catch (r) {
      if (r instanceof v.error.RecognitionException)
        t.exception = r, this._errHandler.reportError(this, r), this._errHandler.recover(this, r);
      else
        throw r;
    } finally {
      this.exitRule();
    }
    return t;
  }
  methodName() {
    let t = new $l(this, this._ctx, this.state);
    this.enterRule(t, 68, L.RULE_methodName);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 395, e = this._input.LA(1), e === 54 || e === 57 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  parameters() {
    let t = new Zo(this, this._ctx, this.state);
    this.enterRule(t, 70, L.RULE_parameters);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 397, this.parameter(), this.state = 402, this._errHandler.sync(this);
      for (var n = this._interp.adaptivePredict(this._input, 59, this._ctx); n != 2 && n != v.atn.ATN.INVALID_ALT_NUMBER; )
        n === 1 && (this.state = 398, this.match(L.COMMA), this.state = 399, this.parameter()), this.state = 404, this._errHandler.sync(this), n = this._interp.adaptivePredict(this._input, 59, this._ctx);
      this.state = 406, this._errHandler.sync(this), e = this._input.LA(1), e === 28 && (this.state = 405, this.match(L.COMMA));
    } catch (r) {
      if (r instanceof v.error.RecognitionException)
        t.exception = r, this._errHandler.reportError(this, r), this._errHandler.recover(this, r);
      else
        throw r;
    } finally {
      this.exitRule();
    }
    return t;
  }
  parameter() {
    let t = new ro(this, this._ctx, this.state);
    this.enterRule(t, 72, L.RULE_parameter);
    try {
      this.state = 410, this._errHandler.sync(this);
      var e = this._interp.adaptivePredict(this._input, 61, this._ctx);
      switch (e) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 408, this.declaration();
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 409, this.expr(0);
          break;
      }
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  declaration() {
    let t = new ql(this, this._ctx, this.state);
    this.enterRule(t, 74, L.RULE_declaration);
    try {
      this.enterOuterAlt(t, 1), this.state = 412, this.type(), this.state = 413, this.match(L.ID);
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
  tcf() {
    let t = new Zl(this, this._ctx, this.state);
    this.enterRule(t, 76, L.RULE_tcf);
    var e = 0;
    try {
      for (this.enterOuterAlt(t, 1), this.state = 415, this.tryBlock(), this.state = 419, this._errHandler.sync(this), e = this._input.LA(1); e === 47; )
        this.state = 416, this.catchBlock(), this.state = 421, this._errHandler.sync(this), e = this._input.LA(1);
      this.state = 423, this._errHandler.sync(this), e = this._input.LA(1), e === 48 && (this.state = 422, this.finallyBlock());
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  tryBlock() {
    let t = new Wl(this, this._ctx, this.state);
    this.enterRule(t, 78, L.RULE_tryBlock);
    try {
      this.enterOuterAlt(t, 1), this.state = 425, this.match(L.TRY), this.state = 426, this.braceBlock();
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
  catchBlock() {
    let t = new so(this, this._ctx, this.state);
    this.enterRule(t, 80, L.RULE_catchBlock);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 428, this.match(L.CATCH), this.state = 430, this._errHandler.sync(this), e = this._input.LA(1), e === 30 && (this.state = 429, this.invocation()), this.state = 432, this.braceBlock();
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  finallyBlock() {
    let t = new Yl(this, this._ctx, this.state);
    this.enterRule(t, 82, L.RULE_finallyBlock);
    try {
      this.enterOuterAlt(t, 1), this.state = 434, this.match(L.FINALLY), this.state = 435, this.braceBlock();
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
  alt() {
    let t = new Kl(this, this._ctx, this.state);
    this.enterRule(t, 84, L.RULE_alt);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 437, this.ifBlock(), this.state = 441, this._errHandler.sync(this);
      for (var n = this._interp.adaptivePredict(this._input, 65, this._ctx); n != 2 && n != v.atn.ATN.INVALID_ALT_NUMBER; )
        n === 1 && (this.state = 438, this.elseIfBlock()), this.state = 443, this._errHandler.sync(this), n = this._interp.adaptivePredict(this._input, 65, this._ctx);
      this.state = 445, this._errHandler.sync(this), e = this._input.LA(1), e === 38 && (this.state = 444, this.elseBlock());
    } catch (r) {
      if (r instanceof v.error.RecognitionException)
        t.exception = r, this._errHandler.reportError(this, r), this._errHandler.recover(this, r);
      else
        throw r;
    } finally {
      this.exitRule();
    }
    return t;
  }
  ifBlock() {
    let t = new Ql(this, this._ctx, this.state);
    this.enterRule(t, 86, L.RULE_ifBlock);
    try {
      this.enterOuterAlt(t, 1), this.state = 447, this.match(L.IF), this.state = 448, this.parExpr(), this.state = 449, this.braceBlock();
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
  elseIfBlock() {
    let t = new io(this, this._ctx, this.state);
    this.enterRule(t, 88, L.RULE_elseIfBlock);
    try {
      this.enterOuterAlt(t, 1), this.state = 451, this.match(L.ELSE), this.state = 452, this.match(L.IF), this.state = 453, this.parExpr(), this.state = 454, this.braceBlock();
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
  elseBlock() {
    let t = new Xl(this, this._ctx, this.state);
    this.enterRule(t, 90, L.RULE_elseBlock);
    try {
      this.enterOuterAlt(t, 1), this.state = 456, this.match(L.ELSE), this.state = 457, this.braceBlock();
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
  braceBlock() {
    let t = new Dt(this, this._ctx, this.state);
    this.enterRule(t, 92, L.RULE_braceBlock);
    var e = 0;
    try {
      this.enterOuterAlt(t, 1), this.state = 459, this.match(L.OBRACE), this.state = 461, this._errHandler.sync(this), e = this._input.LA(1), !(e - 34 & -32) && 1 << e - 34 & 217191919 && (this.state = 460, this.block()), this.state = 463, this.match(L.CBRACE);
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  loop() {
    let t = new Jl(this, this._ctx, this.state);
    this.enterRule(t, 94, L.RULE_loop);
    try {
      this.state = 472, this._errHandler.sync(this);
      var e = this._interp.adaptivePredict(this._input, 68, this._ctx);
      switch (e) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 465, this.match(L.WHILE), this.state = 466, this.parExpr(), this.state = 467, this.braceBlock();
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 469, this.match(L.WHILE), this.state = 470, this.parExpr();
          break;
        case 3:
          this.enterOuterAlt(t, 3), this.state = 471, this.match(L.WHILE);
          break;
      }
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  expr(t) {
    t === void 0 && (t = 0);
    const e = this._ctx, n = this.state;
    let r = new pe(this, this._ctx, n), s = r;
    const i = 96;
    this.enterRecursionRule(r, 96, L.RULE_expr, t);
    var o = 0;
    try {
      this.enterOuterAlt(r, 1), this.state = 494, this._errHandler.sync(this);
      var a = this._interp.adaptivePredict(this._input, 70, this._ctx);
      switch (a) {
        case 1:
          r = new sd(this, r), this._ctx = r, s = r, this.state = 475, this.atom();
          break;
        case 2:
          r = new ud(this, r), this._ctx = r, s = r, this.state = 476, this.match(L.MINUS), this.state = 477, this.expr(13);
          break;
        case 3:
          r = new cd(this, r), this._ctx = r, s = r, this.state = 478, this.match(L.NOT), this.state = 479, this.expr(12);
          break;
        case 4:
          r = new rd(this, r), this._ctx = r, s = r, this.state = 483, this._errHandler.sync(this);
          var a = this._interp.adaptivePredict(this._input, 69, this._ctx);
          a === 1 && (this.state = 480, this.to(), this.state = 481, this.match(L.DOT)), this.state = 485, this.func();
          break;
        case 5:
          r = new hd(this, r), this._ctx = r, s = r, this.state = 486, this.creation();
          break;
        case 6:
          r = new dd(this, r), this._ctx = r, s = r, this.state = 487, this.match(L.OPAR), this.state = 488, this.expr(0), this.state = 489, this.match(L.CPAR);
          break;
        case 7:
          r = new nd(this, r), this._ctx = r, s = r, this.state = 491, this.assignment(), this.state = 492, this.expr(1);
          break;
      }
      this._ctx.stop = this._input.LT(-1), this.state = 519, this._errHandler.sync(this);
      for (var l = this._interp.adaptivePredict(this._input, 72, this._ctx); l != 2 && l != v.atn.ATN.INVALID_ALT_NUMBER; ) {
        if (l === 1) {
          this._parseListeners !== null && this.triggerExitRuleEvent(), s = r, this.state = 517, this._errHandler.sync(this);
          var a = this._interp.adaptivePredict(this._input, 71, this._ctx);
          switch (a) {
            case 1:
              if (r = new pd(
                this,
                new pe(this, e, n)
              ), this.pushNewRecursionContext(r, i, L.RULE_expr), this.state = 496, !this.precpred(this._ctx, 11))
                throw new v.error.FailedPredicateException(
                  this,
                  "this.precpred(this._ctx, 11)"
                );
              this.state = 497, r.op = this._input.LT(1), o = this._input.LA(1), !(o & -32) && 1 << o & 29360128 ? (this._errHandler.reportMatch(this), this.consume()) : r.op = this._errHandler.recoverInline(this), this.state = 498, this.expr(12);
              break;
            case 2:
              if (r = new od(
                this,
                new pe(this, e, n)
              ), this.pushNewRecursionContext(r, i, L.RULE_expr), this.state = 499, !this.precpred(this._ctx, 10))
                throw new v.error.FailedPredicateException(
                  this,
                  "this.precpred(this._ctx, 10)"
                );
              this.state = 500, r.op = this._input.LT(1), o = this._input.LA(1), o === 20 || o === 21 ? (this._errHandler.reportMatch(this), this.consume()) : r.op = this._errHandler.recoverInline(this), this.state = 501, this.expr(11);
              break;
            case 3:
              if (r = new ad(
                this,
                new pe(this, e, n)
              ), this.pushNewRecursionContext(r, i, L.RULE_expr), this.state = 502, !this.precpred(this._ctx, 9))
                throw new v.error.FailedPredicateException(
                  this,
                  "this.precpred(this._ctx, 9)"
                );
              this.state = 503, r.op = this._input.LT(1), o = this._input.LA(1), !(o & -32) && 1 << o & 983040 ? (this._errHandler.reportMatch(this), this.consume()) : r.op = this._errHandler.recoverInline(this), this.state = 504, this.expr(10);
              break;
            case 4:
              if (r = new fd(
                this,
                new pe(this, e, n)
              ), this.pushNewRecursionContext(r, i, L.RULE_expr), this.state = 505, !this.precpred(this._ctx, 8))
                throw new v.error.FailedPredicateException(
                  this,
                  "this.precpred(this._ctx, 8)"
                );
              this.state = 506, r.op = this._input.LT(1), o = this._input.LA(1), o === 14 || o === 15 ? (this._errHandler.reportMatch(this), this.consume()) : r.op = this._errHandler.recoverInline(this), this.state = 507, this.expr(9);
              break;
            case 5:
              if (r = new gd(this, new pe(this, e, n)), this.pushNewRecursionContext(r, i, L.RULE_expr), this.state = 508, !this.precpred(this._ctx, 7))
                throw new v.error.FailedPredicateException(
                  this,
                  "this.precpred(this._ctx, 7)"
                );
              this.state = 509, this.match(L.AND), this.state = 510, this.expr(8);
              break;
            case 6:
              if (r = new id(this, new pe(this, e, n)), this.pushNewRecursionContext(r, i, L.RULE_expr), this.state = 511, !this.precpred(this._ctx, 6))
                throw new v.error.FailedPredicateException(
                  this,
                  "this.precpred(this._ctx, 6)"
                );
              this.state = 512, this.match(L.OR), this.state = 513, this.expr(7);
              break;
            case 7:
              if (r = new ld(this, new pe(this, e, n)), this.pushNewRecursionContext(r, i, L.RULE_expr), this.state = 514, !this.precpred(this._ctx, 5))
                throw new v.error.FailedPredicateException(
                  this,
                  "this.precpred(this._ctx, 5)"
                );
              this.state = 515, this.match(L.PLUS), this.state = 516, this.expr(6);
              break;
          }
        }
        this.state = 521, this._errHandler.sync(this), l = this._interp.adaptivePredict(this._input, 72, this._ctx);
      }
    } catch (c) {
      if (c instanceof v.error.RecognitionException)
        r.exception = c, this._errHandler.reportError(this, c), this._errHandler.recover(this, c);
      else
        throw c;
    } finally {
      this.unrollRecursionContexts(e);
    }
    return r;
  }
  atom() {
    let t = new fn(this, this._ctx, this.state);
    this.enterRule(t, 98, L.RULE_atom);
    var e = 0;
    try {
      switch (this.state = 527, this._errHandler.sync(this), this._input.LA(1)) {
        case 55:
        case 56:
          t = new vd(this, t), this.enterOuterAlt(t, 1), this.state = 522, e = this._input.LA(1), e === 55 || e === 56 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
          break;
        case 34:
        case 35:
          t = new md(this, t), this.enterOuterAlt(t, 2), this.state = 523, e = this._input.LA(1), e === 34 || e === 35 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
          break;
        case 54:
          t = new xd(this, t), this.enterOuterAlt(t, 3), this.state = 524, this.match(L.ID);
          break;
        case 57:
          t = new Ld(this, t), this.enterOuterAlt(t, 4), this.state = 525, this.match(L.STRING);
          break;
        case 36:
          t = new yd(this, t), this.enterOuterAlt(t, 5), this.state = 526, this.match(L.NIL);
          break;
        default:
          throw new v.error.NoViableAltException(this);
      }
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  parExpr() {
    let t = new li(this, this._ctx, this.state);
    this.enterRule(t, 100, L.RULE_parExpr);
    try {
      this.state = 538, this._errHandler.sync(this);
      var e = this._interp.adaptivePredict(this._input, 74, this._ctx);
      switch (e) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 529, this.match(L.OPAR), this.state = 530, this.condition(), this.state = 531, this.match(L.CPAR);
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 533, this.match(L.OPAR), this.state = 534, this.condition();
          break;
        case 3:
          this.enterOuterAlt(t, 3), this.state = 535, this.match(L.OPAR), this.state = 536, this.match(L.CPAR);
          break;
        case 4:
          this.enterOuterAlt(t, 4), this.state = 537, this.match(L.OPAR);
          break;
      }
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  condition() {
    let t = new ec(this, this._ctx, this.state);
    this.enterRule(t, 102, L.RULE_condition);
    try {
      this.state = 543, this._errHandler.sync(this);
      var e = this._interp.adaptivePredict(this._input, 75, this._ctx);
      switch (e) {
        case 1:
          this.enterOuterAlt(t, 1), this.state = 540, this.atom();
          break;
        case 2:
          this.enterOuterAlt(t, 2), this.state = 541, this.expr(0);
          break;
        case 3:
          this.enterOuterAlt(t, 3), this.state = 542, this.inExpr();
          break;
      }
    } catch (n) {
      if (n instanceof v.error.RecognitionException)
        t.exception = n, this._errHandler.reportError(this, n), this._errHandler.recover(this, n);
      else
        throw n;
    } finally {
      this.exitRule();
    }
    return t;
  }
  inExpr() {
    let t = new tc(this, this._ctx, this.state);
    this.enterRule(t, 104, L.RULE_inExpr);
    try {
      this.enterOuterAlt(t, 1), this.state = 545, this.match(L.ID), this.state = 546, this.match(L.IN), this.state = 547, this.match(L.ID);
    } catch (e) {
      if (e instanceof v.error.RecognitionException)
        t.exception = e, this._errHandler.reportError(this, e), this._errHandler.recover(this, e);
      else
        throw e;
    } finally {
      this.exitRule();
    }
    return t;
  }
};
let h = L;
W(h, "grammarFileName", "java-escape"), W(h, "literalNames", [
  null,
  null,
  "'const'",
  "'readonly'",
  "'static'",
  "'await'",
  "'title'",
  "':'",
  "'<<'",
  "'>>'",
  "'->'",
  null,
  "'||'",
  "'&&'",
  "'=='",
  "'!='",
  "'>'",
  "'<'",
  "'>='",
  "'<='",
  "'+'",
  "'-'",
  "'*'",
  "'/'",
  "'%'",
  "'^'",
  "'!'",
  "';'",
  "','",
  "'='",
  "'('",
  "')'",
  "'{'",
  "'}'",
  "'true'",
  "'false'",
  null,
  "'if'",
  "'else'",
  null,
  "'return'",
  "'new'",
  "'par'",
  "'group'",
  "'opt'",
  "'as'",
  "'try'",
  "'catch'",
  "'finally'",
  "'in'",
  null,
  null,
  null,
  "'.'"
]), W(h, "symbolicNames", [
  null,
  "WS",
  "CONSTANT",
  "READONLY",
  "STATIC",
  "AWAIT",
  "TITLE",
  "COL",
  "SOPEN",
  "SCLOSE",
  "ARROW",
  "COLOR",
  "OR",
  "AND",
  "EQ",
  "NEQ",
  "GT",
  "LT",
  "GTEQ",
  "LTEQ",
  "PLUS",
  "MINUS",
  "MULT",
  "DIV",
  "MOD",
  "POW",
  "NOT",
  "SCOL",
  "COMMA",
  "ASSIGN",
  "OPAR",
  "CPAR",
  "OBRACE",
  "CBRACE",
  "TRUE",
  "FALSE",
  "NIL",
  "IF",
  "ELSE",
  "WHILE",
  "RETURN",
  "NEW",
  "PAR",
  "GROUP",
  "OPT",
  "AS",
  "TRY",
  "CATCH",
  "FINALLY",
  "IN",
  "STARTER_LXR",
  "ANNOTATION_RET",
  "ANNOTATION",
  "DOT",
  "ID",
  "INT",
  "FLOAT",
  "STRING",
  "CR",
  "COMMENT",
  "OTHER",
  "DIVIDER",
  "EVENT_PAYLOAD_LXR",
  "EVENT_END",
  "TITLE_CONTENT",
  "TITLE_END"
]), W(h, "ruleNames", [
  "prog",
  "title",
  "head",
  "group",
  "starterExp",
  "starter",
  "participant",
  "stereotype",
  "label",
  "participantType",
  "name",
  "width",
  "block",
  "ret",
  "divider",
  "dividerNote",
  "stat",
  "par",
  "opt",
  "creation",
  "creationBody",
  "message",
  "messageBody",
  "func",
  "from",
  "to",
  "signature",
  "invocation",
  "assignment",
  "asyncMessage",
  "content",
  "construct",
  "type",
  "assignee",
  "methodName",
  "parameters",
  "parameter",
  "declaration",
  "tcf",
  "tryBlock",
  "catchBlock",
  "finallyBlock",
  "alt",
  "ifBlock",
  "elseIfBlock",
  "elseBlock",
  "braceBlock",
  "loop",
  "expr",
  "atom",
  "parExpr",
  "condition",
  "inExpr"
]);
h.EOF = v.Token.EOF;
h.WS = 1;
h.CONSTANT = 2;
h.READONLY = 3;
h.STATIC = 4;
h.AWAIT = 5;
h.TITLE = 6;
h.COL = 7;
h.SOPEN = 8;
h.SCLOSE = 9;
h.ARROW = 10;
h.COLOR = 11;
h.OR = 12;
h.AND = 13;
h.EQ = 14;
h.NEQ = 15;
h.GT = 16;
h.LT = 17;
h.GTEQ = 18;
h.LTEQ = 19;
h.PLUS = 20;
h.MINUS = 21;
h.MULT = 22;
h.DIV = 23;
h.MOD = 24;
h.POW = 25;
h.NOT = 26;
h.SCOL = 27;
h.COMMA = 28;
h.ASSIGN = 29;
h.OPAR = 30;
h.CPAR = 31;
h.OBRACE = 32;
h.CBRACE = 33;
h.TRUE = 34;
h.FALSE = 35;
h.NIL = 36;
h.IF = 37;
h.ELSE = 38;
h.WHILE = 39;
h.RETURN = 40;
h.NEW = 41;
h.PAR = 42;
h.GROUP = 43;
h.OPT = 44;
h.AS = 45;
h.TRY = 46;
h.CATCH = 47;
h.FINALLY = 48;
h.IN = 49;
h.STARTER_LXR = 50;
h.ANNOTATION_RET = 51;
h.ANNOTATION = 52;
h.DOT = 53;
h.ID = 54;
h.INT = 55;
h.FLOAT = 56;
h.STRING = 57;
h.CR = 58;
h.COMMENT = 59;
h.OTHER = 60;
h.DIVIDER = 61;
h.EVENT_PAYLOAD_LXR = 62;
h.EVENT_END = 63;
h.TITLE_CONTENT = 64;
h.TITLE_END = 65;
h.RULE_prog = 0;
h.RULE_title = 1;
h.RULE_head = 2;
h.RULE_group = 3;
h.RULE_starterExp = 4;
h.RULE_starter = 5;
h.RULE_participant = 6;
h.RULE_stereotype = 7;
h.RULE_label = 8;
h.RULE_participantType = 9;
h.RULE_name = 10;
h.RULE_width = 11;
h.RULE_block = 12;
h.RULE_ret = 13;
h.RULE_divider = 14;
h.RULE_dividerNote = 15;
h.RULE_stat = 16;
h.RULE_par = 17;
h.RULE_opt = 18;
h.RULE_creation = 19;
h.RULE_creationBody = 20;
h.RULE_message = 21;
h.RULE_messageBody = 22;
h.RULE_func = 23;
h.RULE_from = 24;
h.RULE_to = 25;
h.RULE_signature = 26;
h.RULE_invocation = 27;
h.RULE_assignment = 28;
h.RULE_asyncMessage = 29;
h.RULE_content = 30;
h.RULE_construct = 31;
h.RULE_type = 32;
h.RULE_assignee = 33;
h.RULE_methodName = 34;
h.RULE_parameters = 35;
h.RULE_parameter = 36;
h.RULE_declaration = 37;
h.RULE_tcf = 38;
h.RULE_tryBlock = 39;
h.RULE_catchBlock = 40;
h.RULE_finallyBlock = 41;
h.RULE_alt = 42;
h.RULE_ifBlock = 43;
h.RULE_elseIfBlock = 44;
h.RULE_elseBlock = 45;
h.RULE_braceBlock = 46;
h.RULE_loop = 47;
h.RULE_expr = 48;
h.RULE_atom = 49;
h.RULE_parExpr = 50;
h.RULE_condition = 51;
h.RULE_inExpr = 52;
class td extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_prog;
  }
  EOF() {
    return this.getToken(h.EOF, 0);
  }
  title() {
    return this.getTypedRuleContext(kl, 0);
  }
  head() {
    return this.getTypedRuleContext(Tl, 0);
  }
  block() {
    return this.getTypedRuleContext(Uo, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterProg(this);
  }
  exitRule(e) {
    e instanceof w && e.exitProg(this);
  }
}
class kl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_title;
  }
  TITLE() {
    return this.getToken(h.TITLE, 0);
  }
  TITLE_CONTENT() {
    return this.getToken(h.TITLE_CONTENT, 0);
  }
  TITLE_END() {
    return this.getToken(h.TITLE_END, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterTitle(this);
  }
  exitRule(e) {
    e instanceof w && e.exitTitle(this);
  }
}
class Tl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), W(this, "group", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTypedRuleContexts(eo) : this.getTypedRuleContext(eo, s);
    }), W(this, "participant", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTypedRuleContexts(Xr) : this.getTypedRuleContext(Xr, s);
    }), this.parser = e, this.ruleIndex = h.RULE_head;
  }
  starterExp() {
    return this.getTypedRuleContext(Al, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterHead(this);
  }
  exitRule(e) {
    e instanceof w && e.exitHead(this);
  }
}
class eo extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), W(this, "participant", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTypedRuleContexts(Xr) : this.getTypedRuleContext(Xr, s);
    }), this.parser = e, this.ruleIndex = h.RULE_group;
  }
  GROUP() {
    return this.getToken(h.GROUP, 0);
  }
  OBRACE() {
    return this.getToken(h.OBRACE, 0);
  }
  CBRACE() {
    return this.getToken(h.CBRACE, 0);
  }
  name() {
    return this.getTypedRuleContext(ss, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterGroup(this);
  }
  exitRule(e) {
    e instanceof w && e.exitGroup(this);
  }
}
class Al extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_starterExp;
  }
  STARTER_LXR() {
    return this.getToken(h.STARTER_LXR, 0);
  }
  OPAR() {
    return this.getToken(h.OPAR, 0);
  }
  CPAR() {
    return this.getToken(h.CPAR, 0);
  }
  starter() {
    return this.getTypedRuleContext(Sl, 0);
  }
  ANNOTATION() {
    return this.getToken(h.ANNOTATION, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterStarterExp(this);
  }
  exitRule(e) {
    e instanceof w && e.exitStarterExp(this);
  }
}
class Sl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_starter;
  }
  ID() {
    return this.getToken(h.ID, 0);
  }
  STRING() {
    return this.getToken(h.STRING, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterStarter(this);
  }
  exitRule(e) {
    e instanceof w && e.exitStarter(this);
  }
}
class Xr extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_participant;
  }
  name() {
    return this.getTypedRuleContext(ss, 0);
  }
  participantType() {
    return this.getTypedRuleContext(Ol, 0);
  }
  stereotype() {
    return this.getTypedRuleContext(Rl, 0);
  }
  width() {
    return this.getTypedRuleContext(Nl, 0);
  }
  label() {
    return this.getTypedRuleContext(Il, 0);
  }
  COLOR() {
    return this.getToken(h.COLOR, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterParticipant(this);
  }
  exitRule(e) {
    e instanceof w && e.exitParticipant(this);
  }
}
class Rl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_stereotype;
  }
  SOPEN() {
    return this.getToken(h.SOPEN, 0);
  }
  name() {
    return this.getTypedRuleContext(ss, 0);
  }
  SCLOSE() {
    return this.getToken(h.SCLOSE, 0);
  }
  GT() {
    return this.getToken(h.GT, 0);
  }
  LT() {
    return this.getToken(h.LT, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterStereotype(this);
  }
  exitRule(e) {
    e instanceof w && e.exitStereotype(this);
  }
}
class Il extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_label;
  }
  AS() {
    return this.getToken(h.AS, 0);
  }
  name() {
    return this.getTypedRuleContext(ss, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterLabel(this);
  }
  exitRule(e) {
    e instanceof w && e.exitLabel(this);
  }
}
class Ol extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_participantType;
  }
  ANNOTATION() {
    return this.getToken(h.ANNOTATION, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterParticipantType(this);
  }
  exitRule(e) {
    e instanceof w && e.exitParticipantType(this);
  }
}
class ss extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_name;
  }
  ID() {
    return this.getToken(h.ID, 0);
  }
  STRING() {
    return this.getToken(h.STRING, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterName(this);
  }
  exitRule(e) {
    e instanceof w && e.exitName(this);
  }
}
class Nl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_width;
  }
  INT() {
    return this.getToken(h.INT, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterWidth(this);
  }
  exitRule(e) {
    e instanceof w && e.exitWidth(this);
  }
}
class Uo extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), W(this, "stat", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTypedRuleContexts(to) : this.getTypedRuleContext(to, s);
    }), this.parser = e, this.ruleIndex = h.RULE_block;
  }
  enterRule(e) {
    e instanceof w && e.enterBlock(this);
  }
  exitRule(e) {
    e instanceof w && e.exitBlock(this);
  }
}
class Pl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_ret;
  }
  RETURN() {
    return this.getToken(h.RETURN, 0);
  }
  expr() {
    return this.getTypedRuleContext(pe, 0);
  }
  SCOL() {
    return this.getToken(h.SCOL, 0);
  }
  ANNOTATION_RET() {
    return this.getToken(h.ANNOTATION_RET, 0);
  }
  asyncMessage() {
    return this.getTypedRuleContext($o, 0);
  }
  EVENT_END() {
    return this.getToken(h.EVENT_END, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterRet(this);
  }
  exitRule(e) {
    e instanceof w && e.exitRet(this);
  }
}
class Ml extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_divider;
  }
  dividerNote() {
    return this.getTypedRuleContext(Fl, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterDivider(this);
  }
  exitRule(e) {
    e instanceof w && e.exitDivider(this);
  }
}
class Fl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_dividerNote;
  }
  DIVIDER() {
    return this.getToken(h.DIVIDER, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterDividerNote(this);
  }
  exitRule(e) {
    e instanceof w && e.exitDividerNote(this);
  }
}
class to extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_stat, this._OTHER = null;
  }
  alt() {
    return this.getTypedRuleContext(Kl, 0);
  }
  par() {
    return this.getTypedRuleContext(zl, 0);
  }
  opt() {
    return this.getTypedRuleContext(Dl, 0);
  }
  loop() {
    return this.getTypedRuleContext(Jl, 0);
  }
  creation() {
    return this.getTypedRuleContext(Ho, 0);
  }
  message() {
    return this.getTypedRuleContext(Ul, 0);
  }
  asyncMessage() {
    return this.getTypedRuleContext($o, 0);
  }
  EVENT_END() {
    return this.getToken(h.EVENT_END, 0);
  }
  ret() {
    return this.getTypedRuleContext(Pl, 0);
  }
  divider() {
    return this.getTypedRuleContext(Ml, 0);
  }
  tcf() {
    return this.getTypedRuleContext(Zl, 0);
  }
  OTHER() {
    return this.getToken(h.OTHER, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterStat(this);
  }
  exitRule(e) {
    e instanceof w && e.exitStat(this);
  }
}
class zl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_par;
  }
  PAR() {
    return this.getToken(h.PAR, 0);
  }
  braceBlock() {
    return this.getTypedRuleContext(Dt, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterPar(this);
  }
  exitRule(e) {
    e instanceof w && e.exitPar(this);
  }
}
class Dl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_opt;
  }
  OPT() {
    return this.getToken(h.OPT, 0);
  }
  braceBlock() {
    return this.getTypedRuleContext(Dt, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterOpt(this);
  }
  exitRule(e) {
    e instanceof w && e.exitOpt(this);
  }
}
class Ho extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_creation;
  }
  creationBody() {
    return this.getTypedRuleContext(Bl, 0);
  }
  SCOL() {
    return this.getToken(h.SCOL, 0);
  }
  braceBlock() {
    return this.getTypedRuleContext(Dt, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterCreation(this);
  }
  exitRule(e) {
    e instanceof w && e.exitCreation(this);
  }
}
class Bl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_creationBody;
  }
  NEW() {
    return this.getToken(h.NEW, 0);
  }
  construct() {
    return this.getTypedRuleContext(Gl, 0);
  }
  assignment() {
    return this.getTypedRuleContext(ai, 0);
  }
  OPAR() {
    return this.getToken(h.OPAR, 0);
  }
  CPAR() {
    return this.getToken(h.CPAR, 0);
  }
  parameters() {
    return this.getTypedRuleContext(Zo, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterCreationBody(this);
  }
  exitRule(e) {
    e instanceof w && e.exitCreationBody(this);
  }
}
class Ul extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_message;
  }
  messageBody() {
    return this.getTypedRuleContext(Hl, 0);
  }
  SCOL() {
    return this.getToken(h.SCOL, 0);
  }
  braceBlock() {
    return this.getTypedRuleContext(Dt, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterMessage(this);
  }
  exitRule(e) {
    e instanceof w && e.exitMessage(this);
  }
}
class Hl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_messageBody;
  }
  func() {
    return this.getTypedRuleContext(Vo, 0);
  }
  assignment() {
    return this.getTypedRuleContext(ai, 0);
  }
  to() {
    return this.getTypedRuleContext(oi, 0);
  }
  DOT() {
    return this.getToken(h.DOT, 0);
  }
  from() {
    return this.getTypedRuleContext(Go, 0);
  }
  ARROW() {
    return this.getToken(h.ARROW, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterMessageBody(this);
  }
  exitRule(e) {
    e instanceof w && e.exitMessageBody(this);
  }
}
class Vo extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), W(this, "signature", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTypedRuleContexts(no) : this.getTypedRuleContext(no, s);
    }), W(this, "DOT", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTokens(h.DOT) : this.getToken(h.DOT, s);
    }), this.parser = e, this.ruleIndex = h.RULE_func;
  }
  enterRule(e) {
    e instanceof w && e.enterFunc(this);
  }
  exitRule(e) {
    e instanceof w && e.exitFunc(this);
  }
}
class Go extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_from;
  }
  ID() {
    return this.getToken(h.ID, 0);
  }
  STRING() {
    return this.getToken(h.STRING, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterFrom(this);
  }
  exitRule(e) {
    e instanceof w && e.exitFrom(this);
  }
}
class oi extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_to;
  }
  ID() {
    return this.getToken(h.ID, 0);
  }
  STRING() {
    return this.getToken(h.STRING, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterTo(this);
  }
  exitRule(e) {
    e instanceof w && e.exitTo(this);
  }
}
class no extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_signature;
  }
  methodName() {
    return this.getTypedRuleContext($l, 0);
  }
  invocation() {
    return this.getTypedRuleContext(jo, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterSignature(this);
  }
  exitRule(e) {
    e instanceof w && e.exitSignature(this);
  }
}
class jo extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_invocation;
  }
  OPAR() {
    return this.getToken(h.OPAR, 0);
  }
  CPAR() {
    return this.getToken(h.CPAR, 0);
  }
  parameters() {
    return this.getTypedRuleContext(Zo, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterInvocation(this);
  }
  exitRule(e) {
    e instanceof w && e.exitInvocation(this);
  }
}
class ai extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_assignment;
  }
  assignee() {
    return this.getTypedRuleContext(jl, 0);
  }
  ASSIGN() {
    return this.getToken(h.ASSIGN, 0);
  }
  type() {
    return this.getTypedRuleContext(qo, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterAssignment(this);
  }
  exitRule(e) {
    e instanceof w && e.exitAssignment(this);
  }
}
class $o extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_asyncMessage;
  }
  to() {
    return this.getTypedRuleContext(oi, 0);
  }
  COL() {
    return this.getToken(h.COL, 0);
  }
  content() {
    return this.getTypedRuleContext(Vl, 0);
  }
  from() {
    return this.getTypedRuleContext(Go, 0);
  }
  ARROW() {
    return this.getToken(h.ARROW, 0);
  }
  MINUS() {
    return this.getToken(h.MINUS, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterAsyncMessage(this);
  }
  exitRule(e) {
    e instanceof w && e.exitAsyncMessage(this);
  }
}
class Vl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_content;
  }
  EVENT_PAYLOAD_LXR() {
    return this.getToken(h.EVENT_PAYLOAD_LXR, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterContent(this);
  }
  exitRule(e) {
    e instanceof w && e.exitContent(this);
  }
}
class Gl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_construct;
  }
  ID() {
    return this.getToken(h.ID, 0);
  }
  STRING() {
    return this.getToken(h.STRING, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterConstruct(this);
  }
  exitRule(e) {
    e instanceof w && e.exitConstruct(this);
  }
}
class qo extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_type;
  }
  ID() {
    return this.getToken(h.ID, 0);
  }
  STRING() {
    return this.getToken(h.STRING, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterType(this);
  }
  exitRule(e) {
    e instanceof w && e.exitType(this);
  }
}
class jl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), W(this, "ID", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTokens(h.ID) : this.getToken(h.ID, s);
    }), W(this, "COMMA", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTokens(h.COMMA) : this.getToken(h.COMMA, s);
    }), this.parser = e, this.ruleIndex = h.RULE_assignee;
  }
  atom() {
    return this.getTypedRuleContext(fn, 0);
  }
  STRING() {
    return this.getToken(h.STRING, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterAssignee(this);
  }
  exitRule(e) {
    e instanceof w && e.exitAssignee(this);
  }
}
class $l extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_methodName;
  }
  ID() {
    return this.getToken(h.ID, 0);
  }
  STRING() {
    return this.getToken(h.STRING, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterMethodName(this);
  }
  exitRule(e) {
    e instanceof w && e.exitMethodName(this);
  }
}
class Zo extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), W(this, "parameter", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTypedRuleContexts(ro) : this.getTypedRuleContext(ro, s);
    }), W(this, "COMMA", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTokens(h.COMMA) : this.getToken(h.COMMA, s);
    }), this.parser = e, this.ruleIndex = h.RULE_parameters;
  }
  enterRule(e) {
    e instanceof w && e.enterParameters(this);
  }
  exitRule(e) {
    e instanceof w && e.exitParameters(this);
  }
}
class ro extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_parameter;
  }
  declaration() {
    return this.getTypedRuleContext(ql, 0);
  }
  expr() {
    return this.getTypedRuleContext(pe, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterParameter(this);
  }
  exitRule(e) {
    e instanceof w && e.exitParameter(this);
  }
}
class ql extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_declaration;
  }
  type() {
    return this.getTypedRuleContext(qo, 0);
  }
  ID() {
    return this.getToken(h.ID, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterDeclaration(this);
  }
  exitRule(e) {
    e instanceof w && e.exitDeclaration(this);
  }
}
class Zl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), W(this, "catchBlock", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTypedRuleContexts(so) : this.getTypedRuleContext(so, s);
    }), this.parser = e, this.ruleIndex = h.RULE_tcf;
  }
  tryBlock() {
    return this.getTypedRuleContext(Wl, 0);
  }
  finallyBlock() {
    return this.getTypedRuleContext(Yl, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterTcf(this);
  }
  exitRule(e) {
    e instanceof w && e.exitTcf(this);
  }
}
class Wl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_tryBlock;
  }
  TRY() {
    return this.getToken(h.TRY, 0);
  }
  braceBlock() {
    return this.getTypedRuleContext(Dt, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterTryBlock(this);
  }
  exitRule(e) {
    e instanceof w && e.exitTryBlock(this);
  }
}
class so extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_catchBlock;
  }
  CATCH() {
    return this.getToken(h.CATCH, 0);
  }
  braceBlock() {
    return this.getTypedRuleContext(Dt, 0);
  }
  invocation() {
    return this.getTypedRuleContext(jo, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterCatchBlock(this);
  }
  exitRule(e) {
    e instanceof w && e.exitCatchBlock(this);
  }
}
class Yl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_finallyBlock;
  }
  FINALLY() {
    return this.getToken(h.FINALLY, 0);
  }
  braceBlock() {
    return this.getTypedRuleContext(Dt, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterFinallyBlock(this);
  }
  exitRule(e) {
    e instanceof w && e.exitFinallyBlock(this);
  }
}
class Kl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), W(this, "elseIfBlock", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTypedRuleContexts(io) : this.getTypedRuleContext(io, s);
    }), this.parser = e, this.ruleIndex = h.RULE_alt;
  }
  ifBlock() {
    return this.getTypedRuleContext(Ql, 0);
  }
  elseBlock() {
    return this.getTypedRuleContext(Xl, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterAlt(this);
  }
  exitRule(e) {
    e instanceof w && e.exitAlt(this);
  }
}
class Ql extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_ifBlock;
  }
  IF() {
    return this.getToken(h.IF, 0);
  }
  parExpr() {
    return this.getTypedRuleContext(li, 0);
  }
  braceBlock() {
    return this.getTypedRuleContext(Dt, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterIfBlock(this);
  }
  exitRule(e) {
    e instanceof w && e.exitIfBlock(this);
  }
}
class io extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_elseIfBlock;
  }
  ELSE() {
    return this.getToken(h.ELSE, 0);
  }
  IF() {
    return this.getToken(h.IF, 0);
  }
  parExpr() {
    return this.getTypedRuleContext(li, 0);
  }
  braceBlock() {
    return this.getTypedRuleContext(Dt, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterElseIfBlock(this);
  }
  exitRule(e) {
    e instanceof w && e.exitElseIfBlock(this);
  }
}
class Xl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_elseBlock;
  }
  ELSE() {
    return this.getToken(h.ELSE, 0);
  }
  braceBlock() {
    return this.getTypedRuleContext(Dt, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterElseBlock(this);
  }
  exitRule(e) {
    e instanceof w && e.exitElseBlock(this);
  }
}
class Dt extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_braceBlock;
  }
  OBRACE() {
    return this.getToken(h.OBRACE, 0);
  }
  CBRACE() {
    return this.getToken(h.CBRACE, 0);
  }
  block() {
    return this.getTypedRuleContext(Uo, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterBraceBlock(this);
  }
  exitRule(e) {
    e instanceof w && e.exitBraceBlock(this);
  }
}
class Jl extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_loop;
  }
  WHILE() {
    return this.getToken(h.WHILE, 0);
  }
  parExpr() {
    return this.getTypedRuleContext(li, 0);
  }
  braceBlock() {
    return this.getTypedRuleContext(Dt, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterLoop(this);
  }
  exitRule(e) {
    e instanceof w && e.exitLoop(this);
  }
}
class pe extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_expr;
  }
  copyFrom(e) {
    super.copyFrom(e);
  }
}
class nd extends pe {
  constructor(e, n) {
    super(e), super.copyFrom(n);
  }
  assignment() {
    return this.getTypedRuleContext(ai, 0);
  }
  expr() {
    return this.getTypedRuleContext(pe, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterAssignmentExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitAssignmentExpr(this);
  }
}
h.AssignmentExprContext = nd;
class rd extends pe {
  constructor(e, n) {
    super(e), super.copyFrom(n);
  }
  func() {
    return this.getTypedRuleContext(Vo, 0);
  }
  to() {
    return this.getTypedRuleContext(oi, 0);
  }
  DOT() {
    return this.getToken(h.DOT, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterFuncExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitFuncExpr(this);
  }
}
h.FuncExprContext = rd;
class sd extends pe {
  constructor(e, n) {
    super(e), super.copyFrom(n);
  }
  atom() {
    return this.getTypedRuleContext(fn, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterAtomExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitAtomExpr(this);
  }
}
h.AtomExprContext = sd;
class id extends pe {
  constructor(e, n) {
    super(e), W(this, "expr", function(r) {
      return r === void 0 && (r = null), r === null ? this.getTypedRuleContexts(pe) : this.getTypedRuleContext(pe, r);
    }), super.copyFrom(n);
  }
  OR() {
    return this.getToken(h.OR, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterOrExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitOrExpr(this);
  }
}
h.OrExprContext = id;
class od extends pe {
  constructor(e, n) {
    super(e), W(this, "expr", function(r) {
      return r === void 0 && (r = null), r === null ? this.getTypedRuleContexts(pe) : this.getTypedRuleContext(pe, r);
    }), this.op = null, super.copyFrom(n);
  }
  PLUS() {
    return this.getToken(h.PLUS, 0);
  }
  MINUS() {
    return this.getToken(h.MINUS, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterAdditiveExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitAdditiveExpr(this);
  }
}
h.AdditiveExprContext = od;
class ad extends pe {
  constructor(e, n) {
    super(e), W(this, "expr", function(r) {
      return r === void 0 && (r = null), r === null ? this.getTypedRuleContexts(pe) : this.getTypedRuleContext(pe, r);
    }), this.op = null, super.copyFrom(n);
  }
  LTEQ() {
    return this.getToken(h.LTEQ, 0);
  }
  GTEQ() {
    return this.getToken(h.GTEQ, 0);
  }
  LT() {
    return this.getToken(h.LT, 0);
  }
  GT() {
    return this.getToken(h.GT, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterRelationalExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitRelationalExpr(this);
  }
}
h.RelationalExprContext = ad;
class ld extends pe {
  constructor(e, n) {
    super(e), W(this, "expr", function(r) {
      return r === void 0 && (r = null), r === null ? this.getTypedRuleContexts(pe) : this.getTypedRuleContext(pe, r);
    }), super.copyFrom(n);
  }
  PLUS() {
    return this.getToken(h.PLUS, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterPlusExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitPlusExpr(this);
  }
}
h.PlusExprContext = ld;
class cd extends pe {
  constructor(e, n) {
    super(e), super.copyFrom(n);
  }
  NOT() {
    return this.getToken(h.NOT, 0);
  }
  expr() {
    return this.getTypedRuleContext(pe, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterNotExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitNotExpr(this);
  }
}
h.NotExprContext = cd;
class ud extends pe {
  constructor(e, n) {
    super(e), super.copyFrom(n);
  }
  MINUS() {
    return this.getToken(h.MINUS, 0);
  }
  expr() {
    return this.getTypedRuleContext(pe, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterUnaryMinusExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitUnaryMinusExpr(this);
  }
}
h.UnaryMinusExprContext = ud;
class hd extends pe {
  constructor(e, n) {
    super(e), super.copyFrom(n);
  }
  creation() {
    return this.getTypedRuleContext(Ho, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterCreationExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitCreationExpr(this);
  }
}
h.CreationExprContext = hd;
class dd extends pe {
  constructor(e, n) {
    super(e), super.copyFrom(n);
  }
  OPAR() {
    return this.getToken(h.OPAR, 0);
  }
  expr() {
    return this.getTypedRuleContext(pe, 0);
  }
  CPAR() {
    return this.getToken(h.CPAR, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterParenthesizedExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitParenthesizedExpr(this);
  }
}
h.ParenthesizedExprContext = dd;
class pd extends pe {
  constructor(e, n) {
    super(e), W(this, "expr", function(r) {
      return r === void 0 && (r = null), r === null ? this.getTypedRuleContexts(pe) : this.getTypedRuleContext(pe, r);
    }), this.op = null, super.copyFrom(n);
  }
  MULT() {
    return this.getToken(h.MULT, 0);
  }
  DIV() {
    return this.getToken(h.DIV, 0);
  }
  MOD() {
    return this.getToken(h.MOD, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterMultiplicationExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitMultiplicationExpr(this);
  }
}
h.MultiplicationExprContext = pd;
class fd extends pe {
  constructor(e, n) {
    super(e), W(this, "expr", function(r) {
      return r === void 0 && (r = null), r === null ? this.getTypedRuleContexts(pe) : this.getTypedRuleContext(pe, r);
    }), this.op = null, super.copyFrom(n);
  }
  EQ() {
    return this.getToken(h.EQ, 0);
  }
  NEQ() {
    return this.getToken(h.NEQ, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterEqualityExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitEqualityExpr(this);
  }
}
h.EqualityExprContext = fd;
class gd extends pe {
  constructor(e, n) {
    super(e), W(this, "expr", function(r) {
      return r === void 0 && (r = null), r === null ? this.getTypedRuleContexts(pe) : this.getTypedRuleContext(pe, r);
    }), super.copyFrom(n);
  }
  AND() {
    return this.getToken(h.AND, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterAndExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitAndExpr(this);
  }
}
h.AndExprContext = gd;
class fn extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_atom;
  }
  copyFrom(e) {
    super.copyFrom(e);
  }
}
class md extends fn {
  constructor(e, n) {
    super(e), super.copyFrom(n);
  }
  TRUE() {
    return this.getToken(h.TRUE, 0);
  }
  FALSE() {
    return this.getToken(h.FALSE, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterBooleanAtom(this);
  }
  exitRule(e) {
    e instanceof w && e.exitBooleanAtom(this);
  }
}
h.BooleanAtomContext = md;
class xd extends fn {
  constructor(e, n) {
    super(e), super.copyFrom(n);
  }
  ID() {
    return this.getToken(h.ID, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterIdAtom(this);
  }
  exitRule(e) {
    e instanceof w && e.exitIdAtom(this);
  }
}
h.IdAtomContext = xd;
class Ld extends fn {
  constructor(e, n) {
    super(e), super.copyFrom(n);
  }
  STRING() {
    return this.getToken(h.STRING, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterStringAtom(this);
  }
  exitRule(e) {
    e instanceof w && e.exitStringAtom(this);
  }
}
h.StringAtomContext = Ld;
class yd extends fn {
  constructor(e, n) {
    super(e), super.copyFrom(n);
  }
  NIL() {
    return this.getToken(h.NIL, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterNilAtom(this);
  }
  exitRule(e) {
    e instanceof w && e.exitNilAtom(this);
  }
}
h.NilAtomContext = yd;
class vd extends fn {
  constructor(e, n) {
    super(e), super.copyFrom(n);
  }
  INT() {
    return this.getToken(h.INT, 0);
  }
  FLOAT() {
    return this.getToken(h.FLOAT, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterNumberAtom(this);
  }
  exitRule(e) {
    e instanceof w && e.exitNumberAtom(this);
  }
}
h.NumberAtomContext = vd;
class li extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_parExpr;
  }
  OPAR() {
    return this.getToken(h.OPAR, 0);
  }
  condition() {
    return this.getTypedRuleContext(ec, 0);
  }
  CPAR() {
    return this.getToken(h.CPAR, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterParExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitParExpr(this);
  }
}
class ec extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), this.parser = e, this.ruleIndex = h.RULE_condition;
  }
  atom() {
    return this.getTypedRuleContext(fn, 0);
  }
  expr() {
    return this.getTypedRuleContext(pe, 0);
  }
  inExpr() {
    return this.getTypedRuleContext(tc, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterCondition(this);
  }
  exitRule(e) {
    e instanceof w && e.exitCondition(this);
  }
}
class tc extends v.ParserRuleContext {
  constructor(e, n, r) {
    n === void 0 && (n = null), r == null && (r = -1), super(n, r), W(this, "ID", function(s) {
      return s === void 0 && (s = null), s === null ? this.getTokens(h.ID) : this.getToken(h.ID, s);
    }), this.parser = e, this.ruleIndex = h.RULE_inExpr;
  }
  IN() {
    return this.getToken(h.IN, 0);
  }
  enterRule(e) {
    e instanceof w && e.enterInExpr(this);
  }
  exitRule(e) {
    e instanceof w && e.exitInExpr(this);
  }
}
h.ProgContext = td;
h.TitleContext = kl;
h.HeadContext = Tl;
h.GroupContext = eo;
h.StarterExpContext = Al;
h.StarterContext = Sl;
h.ParticipantContext = Xr;
h.StereotypeContext = Rl;
h.LabelContext = Il;
h.ParticipantTypeContext = Ol;
h.NameContext = ss;
h.WidthContext = Nl;
h.BlockContext = Uo;
h.RetContext = Pl;
h.DividerContext = Ml;
h.DividerNoteContext = Fl;
h.StatContext = to;
h.ParContext = zl;
h.OptContext = Dl;
h.CreationContext = Ho;
h.CreationBodyContext = Bl;
h.MessageContext = Ul;
h.MessageBodyContext = Hl;
h.FuncContext = Vo;
h.FromContext = Go;
h.ToContext = oi;
h.SignatureContext = no;
h.InvocationContext = jo;
h.AssignmentContext = ai;
h.AsyncMessageContext = $o;
h.ContentContext = Vl;
h.ConstructContext = Gl;
h.TypeContext = qo;
h.AssigneeContext = jl;
h.MethodNameContext = $l;
h.ParametersContext = Zo;
h.ParameterContext = ro;
h.DeclarationContext = ql;
h.TcfContext = Zl;
h.TryBlockContext = Wl;
h.CatchBlockContext = so;
h.FinallyBlockContext = Yl;
h.AltContext = Kl;
h.IfBlockContext = Ql;
h.ElseIfBlockContext = io;
h.ElseBlockContext = Xl;
h.BraceBlockContext = Dt;
h.LoopContext = Jl;
h.ExprContext = pe;
h.AtomContext = fn;
h.ParExprContext = li;
h.ConditionContext = ec;
h.InExprContext = tc;
function of() {
  this.__data__ = [], this.size = 0;
}
var af = of;
function lf(t, e) {
  return t === e || t !== t && e !== e;
}
var Wo = lf, cf = Wo;
function uf(t, e) {
  for (var n = t.length; n--; )
    if (cf(t[n][0], e))
      return n;
  return -1;
}
var Yo = uf, hf = Yo, df = Array.prototype, pf = df.splice;
function ff(t) {
  var e = this.__data__, n = hf(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : pf.call(e, n, 1), --this.size, !0;
}
var gf = ff, mf = Yo;
function xf(t) {
  var e = this.__data__, n = mf(e, t);
  return n < 0 ? void 0 : e[n][1];
}
var Lf = xf, yf = Yo;
function vf(t) {
  return yf(this.__data__, t) > -1;
}
var bf = vf, _f = Yo;
function wf(t, e) {
  var n = this.__data__, r = _f(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
var Cf = wf, Ef = af, kf = gf, Tf = Lf, Af = bf, Sf = Cf;
function is(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
is.prototype.clear = Ef;
is.prototype.delete = kf;
is.prototype.get = Tf;
is.prototype.has = Af;
is.prototype.set = Sf;
var Ko = is, Rf = Ko;
function If() {
  this.__data__ = new Rf(), this.size = 0;
}
var Of = If;
function Nf(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
var Pf = Nf;
function Mf(t) {
  return this.__data__.get(t);
}
var Ff = Mf;
function zf(t) {
  return this.__data__.has(t);
}
var Df = zf, Bf = Cr, Uf = Bf.Symbol, bd = Uf, S0 = bd, _d = Object.prototype, Hf = _d.hasOwnProperty, Vf = _d.toString, xs = S0 ? S0.toStringTag : void 0;
function Gf(t) {
  var e = Hf.call(t, xs), n = t[xs];
  try {
    t[xs] = void 0;
    var r = !0;
  } catch {
  }
  var s = Vf.call(t);
  return r && (e ? t[xs] = n : delete t[xs]), s;
}
var jf = Gf, $f = Object.prototype, qf = $f.toString;
function Zf(t) {
  return qf.call(t);
}
var Wf = Zf, R0 = bd, Yf = jf, Kf = Wf, Qf = "[object Null]", Xf = "[object Undefined]", I0 = R0 ? R0.toStringTag : void 0;
function Jf(t) {
  return t == null ? t === void 0 ? Xf : Qf : I0 && I0 in Object(t) ? Yf(t) : Kf(t);
}
var Qo = Jf;
function e8(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Er = e8, t8 = Qo, n8 = Er, r8 = "[object AsyncFunction]", s8 = "[object Function]", i8 = "[object GeneratorFunction]", o8 = "[object Proxy]";
function a8(t) {
  if (!n8(t))
    return !1;
  var e = t8(t);
  return e == s8 || e == i8 || e == r8 || e == o8;
}
var nc = a8, l8 = Cr, c8 = l8["__core-js_shared__"], u8 = c8, C1 = u8, O0 = function() {
  var t = /[^.]+$/.exec(C1 && C1.keys && C1.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function h8(t) {
  return !!O0 && O0 in t;
}
var d8 = h8, p8 = Function.prototype, f8 = p8.toString;
function g8(t) {
  if (t != null) {
    try {
      return f8.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var m8 = g8, x8 = nc, L8 = d8, y8 = Er, v8 = m8, b8 = /[\\^$.*+?()[\]{}|]/g, _8 = /^\[object .+?Constructor\]$/, w8 = Function.prototype, C8 = Object.prototype, E8 = w8.toString, k8 = C8.hasOwnProperty, T8 = RegExp(
  "^" + E8.call(k8).replace(b8, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function A8(t) {
  if (!y8(t) || L8(t))
    return !1;
  var e = x8(t) ? T8 : _8;
  return e.test(v8(t));
}
var S8 = A8;
function R8(t, e) {
  return t == null ? void 0 : t[e];
}
var I8 = R8, O8 = S8, N8 = I8;
function P8(t, e) {
  var n = N8(t, e);
  return O8(n) ? n : void 0;
}
var rc = P8, M8 = rc, F8 = Cr, z8 = M8(F8, "Map"), wd = z8, D8 = rc, B8 = D8(Object, "create"), Xo = B8, N0 = Xo;
function U8() {
  this.__data__ = N0 ? N0(null) : {}, this.size = 0;
}
var H8 = U8;
function V8(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var G8 = V8, j8 = Xo, $8 = "__lodash_hash_undefined__", q8 = Object.prototype, Z8 = q8.hasOwnProperty;
function W8(t) {
  var e = this.__data__;
  if (j8) {
    var n = e[t];
    return n === $8 ? void 0 : n;
  }
  return Z8.call(e, t) ? e[t] : void 0;
}
var Y8 = W8, K8 = Xo, Q8 = Object.prototype, X8 = Q8.hasOwnProperty;
function J8(t) {
  var e = this.__data__;
  return K8 ? e[t] !== void 0 : X8.call(e, t);
}
var e7 = J8, t7 = Xo, n7 = "__lodash_hash_undefined__";
function r7(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = t7 && e === void 0 ? n7 : e, this;
}
var s7 = r7, i7 = H8, o7 = G8, a7 = Y8, l7 = e7, c7 = s7;
function os(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
os.prototype.clear = i7;
os.prototype.delete = o7;
os.prototype.get = a7;
os.prototype.has = l7;
os.prototype.set = c7;
var u7 = os, P0 = u7, h7 = Ko, d7 = wd;
function p7() {
  this.size = 0, this.__data__ = {
    hash: new P0(),
    map: new (d7 || h7)(),
    string: new P0()
  };
}
var f7 = p7;
function g7(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var m7 = g7, x7 = m7;
function L7(t, e) {
  var n = t.__data__;
  return x7(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
var Jo = L7, y7 = Jo;
function v7(t) {
  var e = y7(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var b7 = v7, _7 = Jo;
function w7(t) {
  return _7(this, t).get(t);
}
var C7 = w7, E7 = Jo;
function k7(t) {
  return E7(this, t).has(t);
}
var T7 = k7, A7 = Jo;
function S7(t, e) {
  var n = A7(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
var R7 = S7, I7 = f7, O7 = b7, N7 = C7, P7 = T7, M7 = R7;
function as(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
as.prototype.clear = I7;
as.prototype.delete = O7;
as.prototype.get = N7;
as.prototype.has = P7;
as.prototype.set = M7;
var F7 = as, z7 = Ko, D7 = wd, B7 = F7, U7 = 200;
function H7(t, e) {
  var n = this.__data__;
  if (n instanceof z7) {
    var r = n.__data__;
    if (!D7 || r.length < U7 - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new B7(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
var V7 = H7, G7 = Ko, j7 = Of, $7 = Pf, q7 = Ff, Z7 = Df, W7 = V7;
function ls(t) {
  var e = this.__data__ = new G7(t);
  this.size = e.size;
}
ls.prototype.clear = j7;
ls.prototype.delete = $7;
ls.prototype.get = q7;
ls.prototype.has = Z7;
ls.prototype.set = W7;
var Y7 = ls, K7 = rc, Q7 = function() {
  try {
    var t = K7(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Cd = Q7, M0 = Cd;
function X7(t, e, n) {
  e == "__proto__" && M0 ? M0(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
var sc = X7, J7 = sc, eg = Wo;
function tg(t, e, n) {
  (n !== void 0 && !eg(t[e], n) || n === void 0 && !(e in t)) && J7(t, e, n);
}
var Ed = tg;
function ng(t) {
  return function(e, n, r) {
    for (var s = -1, i = Object(e), o = r(e), a = o.length; a--; ) {
      var l = o[t ? a : ++s];
      if (n(i[l], l, i) === !1)
        break;
    }
    return e;
  };
}
var rg = ng, sg = rg, ig = sg(), og = ig, ha = { exports: {} };
(function(t, e) {
  var n = Cr, r = e && !e.nodeType && e, s = r && !0 && t && !t.nodeType && t, i = s && s.exports === r, o = i ? n.Buffer : void 0, a = o ? o.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var d = c.length, p = a ? a(d) : new c.constructor(d);
    return c.copy(p), p;
  }
  t.exports = l;
})(ha, ha.exports);
var ag = Cr, lg = ag.Uint8Array, cg = lg, F0 = cg;
function ug(t) {
  var e = new t.constructor(t.byteLength);
  return new F0(e).set(new F0(t)), e;
}
var hg = ug, dg = hg;
function pg(t, e) {
  var n = e ? dg(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var fg = pg;
function gg(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var mg = gg, xg = Er, z0 = Object.create, Lg = function() {
  function t() {
  }
  return function(e) {
    if (!xg(e))
      return {};
    if (z0)
      return z0(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
}(), yg = Lg;
function vg(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var bg = vg, _g = bg, wg = _g(Object.getPrototypeOf, Object), kd = wg, Cg = Object.prototype;
function Eg(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Cg;
  return t === n;
}
var Td = Eg, kg = yg, Tg = kd, Ag = Td;
function Sg(t) {
  return typeof t.constructor == "function" && !Ag(t) ? kg(Tg(t)) : {};
}
var Rg = Sg;
function Ig(t) {
  return t != null && typeof t == "object";
}
var ci = Ig, Og = Qo, Ng = ci, Pg = "[object Arguments]";
function Mg(t) {
  return Ng(t) && Og(t) == Pg;
}
var Fg = Mg, D0 = Fg, zg = ci, Ad = Object.prototype, Dg = Ad.hasOwnProperty, Bg = Ad.propertyIsEnumerable, Ug = D0(function() {
  return arguments;
}()) ? D0 : function(t) {
  return zg(t) && Dg.call(t, "callee") && !Bg.call(t, "callee");
}, Sd = Ug, Hg = Array.isArray, Rd = Hg, Vg = 9007199254740991;
function Gg(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Vg;
}
var Id = Gg, jg = nc, $g = Id;
function qg(t) {
  return t != null && $g(t.length) && !jg(t);
}
var ic = qg, Zg = ic, Wg = ci;
function Yg(t) {
  return Wg(t) && Zg(t);
}
var Kg = Yg, oo = { exports: {} };
function Qg() {
  return !1;
}
var Xg = Qg;
(function(t, e) {
  var n = Cr, r = Xg, s = e && !e.nodeType && e, i = s && !0 && t && !t.nodeType && t, o = i && i.exports === s, a = o ? n.Buffer : void 0, l = a ? a.isBuffer : void 0, c = l || r;
  t.exports = c;
})(oo, oo.exports);
var Jg = Qo, em = kd, tm = ci, nm = "[object Object]", rm = Function.prototype, sm = Object.prototype, Od = rm.toString, im = sm.hasOwnProperty, om = Od.call(Object);
function am(t) {
  if (!tm(t) || Jg(t) != nm)
    return !1;
  var e = em(t);
  if (e === null)
    return !0;
  var n = im.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && Od.call(n) == om;
}
var lm = am, cm = Qo, um = Id, hm = ci, dm = "[object Arguments]", pm = "[object Array]", fm = "[object Boolean]", gm = "[object Date]", mm = "[object Error]", xm = "[object Function]", Lm = "[object Map]", ym = "[object Number]", vm = "[object Object]", bm = "[object RegExp]", _m = "[object Set]", wm = "[object String]", Cm = "[object WeakMap]", Em = "[object ArrayBuffer]", km = "[object DataView]", Tm = "[object Float32Array]", Am = "[object Float64Array]", Sm = "[object Int8Array]", Rm = "[object Int16Array]", Im = "[object Int32Array]", Om = "[object Uint8Array]", Nm = "[object Uint8ClampedArray]", Pm = "[object Uint16Array]", Mm = "[object Uint32Array]", Ue = {};
Ue[Tm] = Ue[Am] = Ue[Sm] = Ue[Rm] = Ue[Im] = Ue[Om] = Ue[Nm] = Ue[Pm] = Ue[Mm] = !0;
Ue[dm] = Ue[pm] = Ue[Em] = Ue[fm] = Ue[km] = Ue[gm] = Ue[mm] = Ue[xm] = Ue[Lm] = Ue[ym] = Ue[vm] = Ue[bm] = Ue[_m] = Ue[wm] = Ue[Cm] = !1;
function Fm(t) {
  return hm(t) && um(t.length) && !!Ue[cm(t)];
}
var zm = Fm;
function Dm(t) {
  return function(e) {
    return t(e);
  };
}
var Bm = Dm, da = { exports: {} };
(function(t, e) {
  var n = D2, r = e && !e.nodeType && e, s = r && !0 && t && !t.nodeType && t, i = s && s.exports === r, o = i && n.process, a = function() {
    try {
      var l = s && s.require && s.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  t.exports = a;
})(da, da.exports);
var Um = zm, Hm = Bm, B0 = da.exports, U0 = B0 && B0.isTypedArray, Vm = U0 ? Hm(U0) : Um, Nd = Vm;
function Gm(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
var Pd = Gm, jm = sc, $m = Wo, qm = Object.prototype, Zm = qm.hasOwnProperty;
function Wm(t, e, n) {
  var r = t[e];
  (!(Zm.call(t, e) && $m(r, n)) || n === void 0 && !(e in t)) && jm(t, e, n);
}
var Ym = Wm, Km = Ym, Qm = sc;
function Xm(t, e, n, r) {
  var s = !n;
  n || (n = {});
  for (var i = -1, o = e.length; ++i < o; ) {
    var a = e[i], l = r ? r(n[a], t[a], a, n, t) : void 0;
    l === void 0 && (l = t[a]), s ? Qm(n, a, l) : Km(n, a, l);
  }
  return n;
}
var Jm = Xm;
function ex(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var tx = ex, nx = 9007199254740991, rx = /^(?:0|[1-9]\d*)$/;
function sx(t, e) {
  var n = typeof t;
  return e = e ?? nx, !!e && (n == "number" || n != "symbol" && rx.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var Md = sx, ix = tx, ox = Sd, ax = Rd, lx = oo.exports, cx = Md, ux = Nd, hx = Object.prototype, dx = hx.hasOwnProperty;
function px(t, e) {
  var n = ax(t), r = !n && ox(t), s = !n && !r && lx(t), i = !n && !r && !s && ux(t), o = n || r || s || i, a = o ? ix(t.length, String) : [], l = a.length;
  for (var c in t)
    (e || dx.call(t, c)) && !(o && (c == "length" || s && (c == "offset" || c == "parent") || i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || cx(c, l))) && a.push(c);
  return a;
}
var fx = px;
function gx(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var mx = gx, xx = Er, Lx = Td, yx = mx, vx = Object.prototype, bx = vx.hasOwnProperty;
function _x(t) {
  if (!xx(t))
    return yx(t);
  var e = Lx(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !bx.call(t, r)) || n.push(r);
  return n;
}
var wx = _x, Cx = fx, Ex = wx, kx = ic;
function Tx(t) {
  return kx(t) ? Cx(t, !0) : Ex(t);
}
var Fd = Tx, Ax = Jm, Sx = Fd;
function Rx(t) {
  return Ax(t, Sx(t));
}
var Ix = Rx, H0 = Ed, Ox = ha.exports, Nx = fg, Px = mg, Mx = Rg, V0 = Sd, G0 = Rd, Fx = Kg, zx = oo.exports, Dx = nc, Bx = Er, Ux = lm, Hx = Nd, j0 = Pd, Vx = Ix;
function Gx(t, e, n, r, s, i, o) {
  var a = j0(t, n), l = j0(e, n), c = o.get(l);
  if (c) {
    H0(t, n, c);
    return;
  }
  var u = i ? i(a, l, n + "", t, e, o) : void 0, d = u === void 0;
  if (d) {
    var p = G0(l), g = !p && zx(l), _ = !p && !g && Hx(l);
    u = l, p || g || _ ? G0(a) ? u = a : Fx(a) ? u = Px(a) : g ? (d = !1, u = Ox(l, !0)) : _ ? (d = !1, u = Nx(l, !0)) : u = [] : Ux(l) || V0(l) ? (u = a, V0(a) ? u = Vx(a) : (!Bx(a) || Dx(a)) && (u = Mx(l))) : d = !1;
  }
  d && (o.set(l, u), s(u, l, r, i, o), o.delete(l)), H0(t, n, u);
}
var jx = Gx, $x = Y7, qx = Ed, Zx = og, Wx = jx, Yx = Er, Kx = Fd, Qx = Pd;
function zd(t, e, n, r, s) {
  t !== e && Zx(e, function(i, o) {
    if (s || (s = new $x()), Yx(i))
      Wx(t, e, o, n, zd, r, s);
    else {
      var a = r ? r(Qx(t, o), i, o + "", t, e, s) : void 0;
      a === void 0 && (a = i), qx(t, o, a);
    }
  }, Kx);
}
var Xx = zd;
function Jx(t) {
  return t;
}
var Dd = Jx;
function eL(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
var tL = eL, nL = tL, $0 = Math.max;
function rL(t, e, n) {
  return e = $0(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, s = -1, i = $0(r.length - e, 0), o = Array(i); ++s < i; )
      o[s] = r[e + s];
    s = -1;
    for (var a = Array(e + 1); ++s < e; )
      a[s] = r[s];
    return a[e] = n(o), nL(t, this, a);
  };
}
var sL = rL;
function iL(t) {
  return function() {
    return t;
  };
}
var oL = iL, aL = oL, q0 = Cd, lL = Dd, cL = q0 ? function(t, e) {
  return q0(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: aL(e),
    writable: !0
  });
} : lL, uL = cL, hL = 800, dL = 16, pL = Date.now;
function fL(t) {
  var e = 0, n = 0;
  return function() {
    var r = pL(), s = dL - (r - n);
    if (n = r, s > 0) {
      if (++e >= hL)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
var gL = fL, mL = uL, xL = gL, LL = xL(mL), yL = LL, vL = Dd, bL = sL, _L = yL;
function wL(t, e) {
  return _L(bL(t, e, vL), t + "");
}
var CL = wL, EL = Wo, kL = ic, TL = Md, AL = Er;
function SL(t, e, n) {
  if (!AL(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? kL(n) && TL(e, n.length) : r == "string" && e in n) ? EL(n[e], t) : !1;
}
var RL = SL, IL = CL, OL = RL;
function NL(t) {
  return IL(function(e, n) {
    var r = -1, s = n.length, i = s > 1 ? n[s - 1] : void 0, o = s > 2 ? n[2] : void 0;
    for (i = t.length > 3 && typeof i == "function" ? (s--, i) : void 0, o && OL(n[0], n[1], o) && (i = s < 3 ? void 0 : i, s = 1), e = Object(e); ++r < s; ) {
      var a = n[r];
      a && t(e, a, r, i);
    }
    return e;
  });
}
var PL = NL, ML = Xx, FL = PL, zL = FL(function(t, e, n, r) {
  ML(t, e, n, r);
}), DL = zL;
class BL {
  constructor(e, n, r, s, i, o, a, l, c, u) {
    W(this, "name"), W(this, "stereotype"), W(this, "width"), W(this, "groupId"), W(this, "explicit"), W(this, "isStarter"), W(this, "label"), W(this, "type"), W(this, "color"), W(this, "comment"), this.name = e, this.stereotype = r, this.width = s, this.groupId = i, this.explicit = a, this.isStarter = n, this.label = o, this.type = l, this.color = c, this.comment = u;
  }
  Type() {
    var e;
    switch ((e = this.type) == null ? void 0 : e.toLowerCase()) {
      case "@actor":
        return 1;
      case "@boundary":
        return 2;
      case "@collection":
        return 3;
      case "@control":
        return 4;
      case "@database":
        return 5;
      case "@entity":
        return 6;
      case "@queue":
        return 7;
      case "@ec2":
        return 8;
      case "@ecs":
        return 9;
      case "@iam":
        return 10;
      case "@lambda":
        return 11;
      case "@rds":
        return 12;
      case "@s3":
        return 13;
    }
    return 14;
  }
}
class UL {
  constructor() {
    W(this, "participants", /* @__PURE__ */ new Map());
  }
  Add(e, n, r, s, i, o, a, l, c, u) {
    const d = new BL(
      e,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      c,
      u
    );
    this.participants.set(
      e,
      DL({}, this.Get(e), d, (p, g) => p || g)
    );
  }
  ImplicitArray() {
    return this.Array().filter((e) => !e.explicit && !e.isStarter);
  }
  Array() {
    return Array.from(this.participants.entries()).map((e) => e[1]);
  }
  Names() {
    return Array.from(this.participants.keys());
  }
  First() {
    return this.participants.values().next().value;
  }
  Get(e) {
    return this.participants.get(e);
  }
  Size() {
    return this.participants.size;
  }
  Starter() {
    const e = this.First();
    return e.isStarter ? e : void 0;
  }
}
const HL = h, VL = HL.ProgContext;
let vn, kr = !1, oc;
const Tt = new w();
let GL = function(t) {
  var e, n, r, s, i, o, a;
  if (kr)
    return;
  const l = (e = t == null ? void 0 : t.participantType()) == null ? void 0 : e.getFormattedText().replace("@", ""), c = ((n = t == null ? void 0 : t.name()) == null ? void 0 : n.getFormattedText()) || "Missing `Participant`", u = (s = (r = t.stereotype()) == null ? void 0 : r.name()) == null ? void 0 : s.getFormattedText(), d = t.width && t.width() && Number.parseInt(t.width().getText()) || void 0, p = t.label && ((o = (i = t.label()) == null ? void 0 : i.name()) == null ? void 0 : o.getFormattedText()), g = !0, _ = (a = t.COLOR()) == null ? void 0 : a.getText(), k = t.getComment();
  vn.Add(
    c,
    !1,
    u,
    d,
    oc,
    p,
    g,
    l,
    _,
    k
  );
};
Tt.enterParticipant = GL;
let Bd = function(t) {
  if (kr)
    return;
  let e = t.getFormattedText();
  vn.Add(e);
};
Tt.enterFrom = Bd;
Tt.enterTo = Bd;
Tt.enterStarter = function(t) {
  let e = t.getFormattedText();
  vn.Add(e, !0);
};
Tt.enterCreation = function(t) {
  if (kr)
    return;
  const e = t.Owner();
  vn.Add(e);
};
Tt.enterParameters = function() {
  kr = !0;
};
Tt.exitParameters = function() {
  kr = !1;
};
Tt.enterCondition = function() {
  kr = !0;
};
Tt.exitCondition = function() {
  kr = !1;
};
Tt.enterGroup = function(t) {
  var e;
  oc = (e = t.name()) == null ? void 0 : e.getFormattedText();
};
Tt.exitGroup = function() {
  oc = void 0;
};
Tt.enterRet = function(t) {
  t.asyncMessage() || (vn.Add(t.From()), vn.Add(t.ReturnTo()));
};
const jL = v.tree.ParseTreeWalker.DEFAULT;
Tt.getParticipants = function(t, e) {
  return vn = new UL(), e && t instanceof VL && vn.Add(t.Starter(), !0), jL.walk(this, t), vn;
};
const $L = v.tree.ParseTreeWalker.DEFAULT;
var Wt = new w(), ht = 0, jt = 0;
Wt.enterTcf = function() {
  ht++;
};
Wt.enterOpt = function() {
  ht++;
};
Wt.enterPar = function() {
  ht++;
};
Wt.enterAlt = function() {
  ht++;
};
Wt.enterLoop = function() {
  ht++;
};
Wt.exitTcf = function() {
  jt = Math.max(jt, ht), ht--;
};
Wt.exitOpt = function() {
  jt = Math.max(jt, ht), ht--;
};
Wt.exitPar = function() {
  jt = Math.max(jt, ht), ht--;
};
Wt.exitAlt = function() {
  jt = Math.max(jt, ht), ht--;
};
Wt.exitLoop = function() {
  jt = Math.max(jt, ht), ht--;
};
Wt.depth = function(t) {
  return function(e) {
    return ht = 0, jt = 0, e.children.map(function(n) {
      $L.walk(t, n);
    }), jt;
  };
};
const qL = h, ZL = qL.TitleContext;
ZL.prototype.content = function() {
  return this.children.length < 2 ? "Untiled" : this.children[1].getText().trim();
};
const Ud = h, pa = Ud.CreationContext;
pa.prototype.Body = pa.prototype.creationBody;
pa.prototype.isCurrent = function(t) {
  return Hd.bind(this)(t);
};
const fa = Ud.MessageContext;
fa.prototype.Body = fa.prototype.messageBody;
fa.prototype.isCurrent = function(t) {
  return Hd.bind(this)(t);
};
function Hd(t) {
  try {
    if (t == null)
      return !1;
    const e = this.start.start, n = this.Body().stop.stop + 1;
    return t >= e && t <= n;
  } catch {
    return !1;
  }
}
const ac = h, e1 = ac.CreationContext, lc = ac.MessageContext, Vd = ac.AsyncMessageContext;
e1.prototype.Assignee = function() {
  var t, e, n;
  return (n = (e = (t = this.creationBody()) == null ? void 0 : t.assignment()) == null ? void 0 : e.assignee()) == null ? void 0 : n.getFormattedText();
};
e1.prototype.Constructor = function() {
  var t, e;
  return (e = (t = this.creationBody()) == null ? void 0 : t.construct()) == null ? void 0 : e.getFormattedText();
};
e1.prototype.Owner = function() {
  if (!this.Constructor())
    return "Missing Constructor";
  const t = this.Assignee(), e = this.Constructor();
  return t ? `${t}:${e}` : e;
};
lc.prototype.To = function() {
  var t, e;
  return (e = (t = this.messageBody()) == null ? void 0 : t.to()) == null ? void 0 : e.getFormattedText();
};
lc.prototype.Owner = function() {
  return this.To() || Gd(this.parentCtx);
};
function Gd(t) {
  for (; t; ) {
    if (t instanceof e1 || t instanceof lc)
      return t.Owner();
    t = t.parentCtx;
  }
}
Vd.prototype.To = function() {
  var t;
  return (t = this.to()) == null ? void 0 : t.getFormattedText();
};
Vd.prototype.Owner = function() {
  return this.To() || Gd(this.parentCtx);
};
const WL = h.ProgContext;
WL.prototype.Starter = function() {
  var t, e, n, r, s, i, o, a, l, c, u, d;
  const p = (n = (e = (t = this.head()) == null ? void 0 : t.starterExp()) == null ? void 0 : e.starter()) == null ? void 0 : n.getFormattedText();
  let g, _, k;
  const j = (r = this.block()) == null ? void 0 : r.stat();
  if (j && j[0]) {
    const b = (o = (i = (s = j[0].message()) == null ? void 0 : s.messageBody()) == null ? void 0 : i.from()) == null ? void 0 : o.getFormattedText(), m = (l = (a = j[0].asyncMessage()) == null ? void 0 : a.from()) == null ? void 0 : l.getFormattedText();
    g = b || m;
  } else {
    const b = (c = this.head()) == null ? void 0 : c.children;
    if (b && b[0]) {
      const m = b[0];
      if (m instanceof h.ParticipantContext && (_ = (u = m.name()) == null ? void 0 : u.getFormattedText()), m instanceof h.GroupContext) {
        const y = m.participant();
        y && y[0] && (k = (d = y[0].name()) == null ? void 0 : d.getFormattedText());
      }
    }
  }
  return p || g || _ || k || "_STARTER_";
};
const t1 = h, YL = t1.RetContext, Z0 = t1.ProgContext, W0 = t1.MessageContext, KL = t1.CreationContext;
YL.prototype.ReturnTo = function() {
  var t, e;
  const n = this.parentCtx.parentCtx.parentCtx;
  if (n instanceof Z0)
    return n.Starter();
  {
    let r = n;
    for (; r && !(r instanceof W0) && !(r instanceof KL); ) {
      if (r instanceof Z0)
        return r.Starter();
      r = r.parentCtx;
    }
    return r instanceof W0 && ((e = (t = r.messageBody()) == null ? void 0 : t.from()) == null ? void 0 : e.getFormattedText()) || r.ClosestAncestorStat().Origin();
  }
};
const QL = v.ParserRuleContext, jd = h.StatContext, cc = h.ProgContext, XL = h.MessageContext, JL = h.CreationContext;
QL.prototype.Origin = function() {
  let t = this.parentCtx;
  for (; t && !(t instanceof jd || t instanceof cc); )
    t = this.parentCtx;
  return t.Origin();
};
jd.prototype.Origin = function() {
  let t = this.parentCtx;
  for (; t; ) {
    if (t instanceof cc)
      return t.Starter();
    if (t instanceof XL || t instanceof JL) {
      const e = t.Owner();
      if (e)
        return e;
    }
    t = t.parentCtx;
  }
};
cc.prototype.Origin = function() {
  return this.Starter();
};
const ey = h, ty = ey.DividerContext;
ty.prototype.Note = function() {
  var t;
  let e = (t = this.dividerNote()) == null ? void 0 : t.getFormattedText().trim();
  if (!e.startsWith("=="))
    throw new Error("Divider note must start with ==");
  return e == null ? void 0 : e.replace(/^=+|=+$/g, "");
};
const uc = h, ny = uc.MessageContext, ry = uc.AsyncMessageContext, sy = uc.CreationContext;
ny.prototype.SignatureText = function() {
  var t, e, n;
  return (n = (e = (t = this.messageBody()) == null ? void 0 : t.func()) == null ? void 0 : e.signature()) == null ? void 0 : n.map((r) => r == null ? void 0 : r.getFormattedText()).join(".");
};
ry.prototype.SignatureText = function() {
  var t;
  return (t = this.content()) == null ? void 0 : t.getFormattedText();
};
sy.prototype.SignatureText = function() {
  var t;
  const e = this.creationBody().parameters();
  return "«" + (((t = e == null ? void 0 : e.parameter()) == null ? void 0 : t.length) > 0 ? e.getFormattedText() : "create") + "»";
};
const iy = h, oy = iy.MessageContext;
class ay {
  constructor(e, n) {
    if (W(this, "assignee"), W(this, "type"), n && !e)
      throw new Error("assignee must be defined if type is defined");
    this.assignee = e || "", this.type = n || "";
  }
  getText() {
    return [this.assignee, this.type].filter(Boolean).join(":");
  }
}
oy.prototype.Assignment = function() {
  var t, e;
  let n = this.messageBody().assignment();
  const r = (t = n == null ? void 0 : n.assignee()) == null ? void 0 : t.getFormattedText(), s = (e = n == null ? void 0 : n.type()) == null ? void 0 : e.getFormattedText();
  if (r)
    return new ay(r, s);
};
const ui = h, ly = ui.CreationContext, cy = ui.StatContext, $d = ui.MessageContext, uy = ui.AsyncMessageContext, hy = ui.RetContext;
ly.prototype.From = function() {
  if (this.parentCtx instanceof cy)
    return this.ClosestAncestorStat().Origin();
};
$d.prototype.ProvidedFrom = function() {
  var t, e;
  return (e = (t = this.messageBody()) == null ? void 0 : t.from()) == null ? void 0 : e.getFormattedText();
};
$d.prototype.From = function() {
  return this.ProvidedFrom() || this.ClosestAncestorStat().Origin();
};
uy.prototype.From = function() {
  return this.from() ? this.from().getFormattedText() : this.ClosestAncestorStat().Origin();
};
hy.prototype.From = function() {
  return this.ClosestAncestorStat().Origin();
};
v.ParserRuleContext.prototype.Key = function() {
  return `${this.start.start}:${this.stop.stop}`;
};
const hc = h, ga = hc.CreationContext;
ga.prototype.Body = ga.prototype.creationBody;
ga.prototype.isInitedFromOccurrence = function(t) {
  return qd.bind(this)(t);
};
const ma = hc.MessageContext;
ma.prototype.Body = ma.prototype.messageBody;
ma.prototype.isInitedFromOccurrence = function(t) {
  return qd.bind(this)(t);
};
function qd(t) {
  let e = this;
  for (; e != null; ) {
    if (e instanceof hc.StatContext) {
      let n;
      if (e.message && e.message() ? n = e.message().Owner() : e.creation && e.creation() ? n = e.creation().Owner() : e.asyncMessage && e.asyncMessage() && (n = e.asyncMessage().to().getFormattedText()), n === t)
        return !0;
    }
    e = e.parentCtx;
  }
  return !1;
}
const Zd = h, Y0 = Zd.StatContext;
v.ParserRuleContext.prototype.ClosestAncestorStat = function() {
  let t = this;
  for (; !(t instanceof Y0); )
    t = t.parentCtx;
  if (t instanceof Y0)
    return t;
};
v.ParserRuleContext.prototype.ClosestAncestorBlock = function() {
  var t;
  const e = (t = this.ClosestAncestorStat()) == null ? void 0 : t.parentCtx;
  if (e instanceof Zd.BlockContext)
    return e;
  console.warn("Cannot find closest ancestor block for context:", this);
};
function dy(t, e) {
  switch (t) {
    case 0:
      return function() {
        return e.apply(this, arguments);
      };
    case 1:
      return function(n) {
        return e.apply(this, arguments);
      };
    case 2:
      return function(n, r) {
        return e.apply(this, arguments);
      };
    case 3:
      return function(n, r, s) {
        return e.apply(this, arguments);
      };
    case 4:
      return function(n, r, s, i) {
        return e.apply(this, arguments);
      };
    case 5:
      return function(n, r, s, i, o) {
        return e.apply(this, arguments);
      };
    case 6:
      return function(n, r, s, i, o, a) {
        return e.apply(this, arguments);
      };
    case 7:
      return function(n, r, s, i, o, a, l) {
        return e.apply(this, arguments);
      };
    case 8:
      return function(n, r, s, i, o, a, l, c) {
        return e.apply(this, arguments);
      };
    case 9:
      return function(n, r, s, i, o, a, l, c, u) {
        return e.apply(this, arguments);
      };
    case 10:
      return function(n, r, s, i, o, a, l, c, u, d) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
var Wd = dy;
function py(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
var fy = py;
function gy(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
var dc = gy, my = dc;
function xy(t) {
  return function e(n) {
    return arguments.length === 0 || my(n) ? e : t.apply(this, arguments);
  };
}
var n1 = xy, E1 = n1, Ls = dc;
function Ly(t) {
  return function e(n, r) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return Ls(n) ? e : E1(function(s) {
          return t(n, s);
        });
      default:
        return Ls(n) && Ls(r) ? e : Ls(n) ? E1(function(s) {
          return t(s, r);
        }) : Ls(r) ? E1(function(s) {
          return t(n, s);
        }) : t(n, r);
    }
  };
}
var Yd = Ly, Ni = n1, Or = Yd, it = dc;
function yy(t) {
  return function e(n, r, s) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return it(n) ? e : Or(function(i, o) {
          return t(n, i, o);
        });
      case 2:
        return it(n) && it(r) ? e : it(n) ? Or(function(i, o) {
          return t(i, r, o);
        }) : it(r) ? Or(function(i, o) {
          return t(n, i, o);
        }) : Ni(function(i) {
          return t(n, r, i);
        });
      default:
        return it(n) && it(r) && it(s) ? e : it(n) && it(r) ? Or(function(i, o) {
          return t(i, o, s);
        }) : it(n) && it(s) ? Or(function(i, o) {
          return t(i, r, o);
        }) : it(r) && it(s) ? Or(function(i, o) {
          return t(n, i, o);
        }) : it(n) ? Ni(function(i) {
          return t(i, r, s);
        }) : it(r) ? Ni(function(i) {
          return t(n, i, s);
        }) : it(s) ? Ni(function(i) {
          return t(n, r, i);
        }) : t(n, r, s);
    }
  };
}
var pc = yy, Kd = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function vy(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
var by = vy, _y = n1, wy = Kd, Cy = by, Ey = /* @__PURE__ */ _y(function(t) {
  return wy(t) ? !0 : !t || typeof t != "object" || Cy(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
}), ky = Ey, Ty = /* @__PURE__ */ function() {
  function t(e) {
    this.f = e;
  }
  return t.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  }, t.prototype["@@transducer/result"] = function(e) {
    return e;
  }, t.prototype["@@transducer/step"] = function(e, n) {
    return this.f(e, n);
  }, t;
}();
function Ay(t) {
  return new Ty(t);
}
var Sy = Ay, Ry = Wd, Iy = Yd, Oy = /* @__PURE__ */ Iy(function(t, e) {
  return Ry(t.length, function() {
    return t.apply(e, arguments);
  });
}), Ny = Oy, Py = ky, My = Sy, Fy = Ny;
function zy(t, e, n) {
  for (var r = 0, s = n.length; r < s; ) {
    if (e = t["@@transducer/step"](e, n[r]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    r += 1;
  }
  return t["@@transducer/result"](e);
}
function K0(t, e, n) {
  for (var r = n.next(); !r.done; ) {
    if (e = t["@@transducer/step"](e, r.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    r = n.next();
  }
  return t["@@transducer/result"](e);
}
function Q0(t, e, n, r) {
  return t["@@transducer/result"](n[r](Fy(t["@@transducer/step"], t), e));
}
var X0 = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function Dy(t, e, n) {
  if (typeof t == "function" && (t = My(t)), Py(n))
    return zy(t, e, n);
  if (typeof n["fantasy-land/reduce"] == "function")
    return Q0(t, e, n, "fantasy-land/reduce");
  if (n[X0] != null)
    return K0(t, e, n[X0]());
  if (typeof n.next == "function")
    return K0(t, e, n);
  if (typeof n.reduce == "function")
    return Q0(t, e, n, "reduce");
  throw new TypeError("reduce: list must be array or iterable");
}
var By = Dy, Uy = pc, Hy = By, Vy = /* @__PURE__ */ Uy(Hy), Gy = Vy, jy = Kd;
function $y(t, e) {
  return function() {
    var n = arguments.length;
    if (n === 0)
      return e();
    var r = arguments[n - 1];
    return jy(r) || typeof r[t] != "function" ? e.apply(this, arguments) : r[t].apply(r, Array.prototype.slice.call(arguments, 0, n - 1));
  };
}
var Qd = $y, qy = Qd, Zy = pc, Wy = /* @__PURE__ */ Zy(
  /* @__PURE__ */ qy("slice", function(t, e, n) {
    return Array.prototype.slice.call(n, t, e);
  })
), Yy = Wy, Ky = Qd, Qy = n1, Xy = Yy, Jy = /* @__PURE__ */ Qy(
  /* @__PURE__ */ Ky(
    "tail",
    /* @__PURE__ */ Xy(1, 1 / 0)
  )
), ev = Jy, tv = Wd, nv = fy, rv = Gy, sv = ev;
function iv() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return tv(arguments[0].length, rv(nv, arguments[0], sv(arguments)));
}
var ov = iv;
const av = ov;
var lv = pc, cv = /* @__PURE__ */ lv(function(t, e, n) {
  return n.replace(t, e);
}), uv = cv;
const hi = uv, hv = hi(/[\n\r]/g, " "), dv = hi(/\s+/g, " "), pv = hi(/\s*([,;.()])\s*/g, "$1"), fv = hi(/\s+$/g, ""), gv = hi(/^"(.*)"$/, "$1"), mv = av(
  hv,
  dv,
  pv,
  fv,
  gv
);
class xv extends v.error.ErrorListener {
  syntaxError(e, n, r, s, i) {
  }
}
function Lv(t) {
  const e = new v.InputStream(t), n = new H(e), r = new v.CommonTokenStream(n), s = new h(r);
  return s.addErrorListener(new xv()), s._syntaxErrors ? null : s.prog();
}
v.ParserRuleContext.prototype.getFormattedText = function() {
  const t = this.parser.getTokenStream().getText(this.getSourceInterval());
  return mv(t);
};
v.ParserRuleContext.prototype.getComment = function() {
  let t = this.start.tokenIndex, e = H.channelNames.indexOf("COMMENT_CHANNEL");
  this.constructor.name === "BraceBlockContext" && (t = this.stop.tokenIndex);
  let n = this.parser.getTokenStream().getHiddenTokensToLeft(t, e);
  return n && n.map((r) => r.text.substring(2)).join("");
};
v.ParserRuleContext.prototype.returnedValue = function() {
  return this.braceBlock().block().ret().value();
};
const yv = h.ProgContext, vv = Lv, Xd = h.GroupContext, Jd = h.ParticipantContext, cs = function(t, e) {
  return Tt.getParticipants(t, e);
};
var Yn = /* @__PURE__ */ ((t) => (t[t.MessageContent = 0] = "MessageContent", t[t.ParticipantName = 1] = "ParticipantName", t))(Yn || {});
function kn(t, e) {
  let n = document.querySelector(".textarea-hidden-div");
  if (!n) {
    const r = document.createElement("div");
    r.className = "textarea-hidden-div ", r.style.fontSize = e === Yn.MessageContent ? "0.875rem" : "1rem", r.style.fontFamily = "Helvetica, Verdana, serif", r.style.display = "inline", r.style.whiteSpace = "nowrap", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0", r.style.left = "0", r.style.overflow = "hidden", r.style.width = "0px", r.style.paddingLeft = "0px", r.style.paddingRight = "0px", r.style.margin = "0px", r.style.border = "0px", document.body.appendChild(r), n = r;
  }
  return n.textContent = t, n.scrollWidth;
}
const bv = 100, xa = 20, _v = 10, wv = 14, Cv = 100, Ev = h;
class fc extends w {
  constructor() {
    super(...arguments), W(this, "explicitParticipants", []), W(this, "starter", ""), W(this, "implicitParticipants", []), W(this, "isBlind", !1);
  }
  enterCondition() {
    this.isBlind = !0;
  }
  exitCondition() {
    this.isBlind = !1;
  }
  enterParameters() {
    this.isBlind = !0;
  }
  exitParameters() {
    this.isBlind = !1;
  }
  enterStarter(e) {
    this.starter = e.getFormattedText();
  }
  enterParticipant(e) {
    var n, r, s;
    const i = ((n = e == null ? void 0 : e.name()) == null ? void 0 : n.getFormattedText()) || "Missing `Participant` name", o = (s = (r = e.label()) == null ? void 0 : r.name()) == null ? void 0 : s.getFormattedText(), a = { name: i, label: o, left: "" };
    this.explicitParticipants.push(a);
  }
  enterFrom(e) {
    if (this.isBlind)
      return;
    const n = e == null ? void 0 : e.getFormattedText();
    if (e.ClosestAncestorBlock().parentCtx instanceof Ev.ProgContext && e.ClosestAncestorStat() === e.ClosestAncestorBlock().children[0]) {
      this.starter = n;
      return;
    }
    this.enterTo(e);
  }
  enterTo(e) {
    if (this.isBlind)
      return;
    const n = e == null ? void 0 : e.getFormattedText();
    if (n === this.starter || this.explicitParticipants.some((s) => s.name === n))
      return;
    const r = { name: n, left: "" };
    this.implicitParticipants.push(r);
  }
  enterCreation(e) {
    if (this.isBlind)
      return;
    const n = e == null ? void 0 : e.Owner();
    if (n === this.starter || this.explicitParticipants.some((s) => s.name === n))
      return;
    const r = { name: n, left: "" };
    this.implicitParticipants.push(r);
  }
  result() {
    let e = [...this.explicitParticipants, ...this.implicitParticipants];
    return this._isStarterExplicitlyPositioned() || e.unshift(this._getStarter()), e = this._dedup(e), fc._assignLeft(e), e;
  }
  _isStarterExplicitlyPositioned() {
    return this.starter && this.explicitParticipants.find((e) => e.name === this.starter);
  }
  _getStarter() {
    return { name: this.starter || "_STARTER_", left: "" };
  }
  _dedup(e) {
    return e.filter((n, r) => e.findIndex((s) => s.name === n.name) === r);
  }
  static _assignLeft(e) {
    e.reduce(
      (n, r) => (r.left = n.name || "", r),
      { name: "", left: "" }
    );
  }
}
function kv(t) {
  const e = new fc();
  return v.tree.ParseTreeWalker.DEFAULT.walk(e, t), e.result();
}
function r1(t, e) {
  return { position: t, velocity: e };
}
function J0(t, e) {
  return r1(t.position + e.position, t.velocity + e.velocity);
}
const eu = Math.sqrt(Number.EPSILON);
function Tv(t, e) {
  let n = t.position - e.position;
  return n < -eu || Math.abs(n) <= eu && t.velocity < e.velocity;
}
function Av() {
  return {
    delta: 1 / 0,
    dualLessThan: function(t, e) {
      let n = Tv(t, e);
      return n && ([t, e] = [e, t]), t.velocity < e.velocity && (this.delta = Math.min(this.delta, (t.position - e.position) / (e.velocity - t.velocity))), n;
    }
  };
}
function Sv(t, e) {
  let n = Array();
  for (let r = 0; r < t; r++) {
    n.push([]);
    for (let s = 0; s < r; s++)
      e[s][r] > 0 && n[r].push({ i: s, length: r1(e[s][r], 0) });
  }
  return n;
}
function Rv(t, e) {
  let n = Av(), r = r1(0, 0), s = [];
  for (let i = 0; i < t.length; i++) {
    let o = null;
    i > 0 && (r = J0(r, e[i - 1]));
    for (let a of t[i]) {
      let l = J0(s[a.i].maximum, a.length);
      n.dualLessThan(r, l) && (o = a.i, r = l);
    }
    s.push({ argument: o, maximum: r });
  }
  return [n.delta, s];
}
function Iv(t, e, n) {
  let r = t.length - 1;
  for (; r > 0; ) {
    let s = t[r].argument;
    s !== null ? r = s : (r--, n[r].velocity = 0);
  }
}
function Ov(t, e) {
  for (let n = 0; n < t.length; n++)
    t[n].position += t[n].velocity * e;
}
function Nv(t) {
  let e = [];
  for (let n of t)
    e.push(n.maximum.position);
  return e;
}
function Pv(t) {
  const e = t.length;
  let n = Sv(e, t), r = [];
  for (let s = 1; s < e; s++)
    r.push(r1(0, 1));
  for (; ; ) {
    let [s, i] = Rv(n, r);
    if (s == 1 / 0)
      return Nv(i);
    i[e - 1].maximum.velocity > 0 ? Iv(i, n, r) : Ov(r, s);
  }
}
var Ss = /* @__PURE__ */ ((t) => (t[t.SyncMessage = 0] = "SyncMessage", t[t.AsyncMessage = 1] = "AsyncMessage", t[t.CreationMessage = 2] = "CreationMessage", t))(Ss || {});
class Mv extends w {
  constructor() {
    super(...arguments), W(this, "isBlind", !1), W(this, "ownableMessages", []), W(this, "enterMessage", (e) => this._addOwnedMessage(Ss.SyncMessage)(e)), W(this, "enterAsyncMessage", (e) => this._addOwnedMessage(Ss.AsyncMessage)(e)), W(this, "enterCreation", (e) => this._addOwnedMessage(Ss.CreationMessage)(e)), W(this, "_addOwnedMessage", (e) => (n) => {
      if (this.isBlind)
        return;
      let r = n.From();
      const s = n == null ? void 0 : n.Owner(), i = n == null ? void 0 : n.SignatureText();
      this.ownableMessages.push({ from: r, signature: i, type: e, to: s });
    });
  }
  enterParameters() {
    this.isBlind = !0;
  }
  exitParameters() {
    this.isBlind = !1;
  }
  result() {
    return this.ownableMessages;
  }
}
function e4(t) {
  const e = v.tree.ParseTreeWalker.DEFAULT, n = new Mv();
  return e.walk(n, t), n.result();
}
class sn {
  constructor(e, n) {
    W(this, "m", []), W(this, "widthProvider"), W(this, "participantModels"), W(this, "ownableMessages"), this.participantModels = kv(e), this.ownableMessages = e4(e), this.widthProvider = n, this.walkThrough();
  }
  orderedParticipantNames() {
    return this.participantModels.map((e) => e.name);
  }
  getPosition(e) {
    const n = this.participantModels.findIndex((s) => s.name === e);
    if (n === -1)
      throw Error(`Participant ${e} not found`);
    const r = this.getParticipantGap(this.participantModels[0]) + Pv(this.m)[n];
    return console.debug(`Position of ${e} is ${r}`), r;
  }
  walkThrough() {
    this.withParticipantGaps(this.participantModels), this.withMessageGaps(this.ownableMessages, this.participantModels);
  }
  withMessageGaps(e, n) {
    e.forEach((r) => {
      const s = n.findIndex((l) => l.name === r.from), i = n.findIndex((l) => l.name === r.to);
      if (s === -1 || i === -1) {
        console.warn(`Participant ${r.from} or ${r.to} not found`);
        return;
      }
      let o = Math.min(s, i), a = Math.max(s, i);
      try {
        let l = this.getMessageWidth(r);
        this.m[o][a] = Math.max(
          l + _v + wv,
          this.m[o][a]
        );
      } catch {
        console.warn(`Could not set message gap between ${r.from} and ${r.to}`);
      }
    });
  }
  getMessageWidth(e) {
    const n = sn.half(this.widthProvider, e.to);
    let r = this.widthProvider(e.signature, Yn.MessageContent);
    return e.type === Ss.CreationMessage && (r += n), r;
  }
  withParticipantGaps(e) {
    this.m = e.map((n, r) => e.map((s, i) => i - r === 1 ? this.getParticipantGap(s) : 0));
  }
  getParticipantGap(e) {
    let n = this.labelOrName(e.left);
    const r = sn.half(this.widthProvider, n), s = sn.half(this.widthProvider, e.label || e.name), i = e.left && e.left !== "_STARTER_", o = e.name && e.name !== "_STARTER_";
    return (i && r || 0) + (o && s || 0);
  }
  labelOrName(e) {
    const n = this.participantModels.findIndex((r) => r.name === e);
    return n === -1 ? "" : this.participantModels[n].label || this.participantModels[n].name;
  }
  static half(e, n) {
    if (n === "_STARTER_")
      return xa / 2;
    const r = this.halfWithMargin(e, n);
    return Math.max(r, bv / 2);
  }
  static halfWithMargin(e, n) {
    return this._getParticipantWidth(e, n) / 2 + xa / 2;
  }
  static _getParticipantWidth(e, n) {
    return Math.max(
      e(n || "", Yn.ParticipantName),
      Cv
    );
  }
  getWidth() {
    const e = this.participantModels[this.participantModels.length - 1].name, n = this.getPosition(e) + sn.half(this.widthProvider, e);
    return Math.max(n, 200);
  }
  distance(e, n) {
    return this.getPosition(n) - this.getPosition(e);
  }
}
let t4 = 0;
setTimeout(function() {
  t4 || console.warn("[vue-sequence] Store is a function and is not initiated in 1 second.");
}, 1e3);
const Fv = () => (t4 = x6(), {
  state: {
    warning: void 0,
    code: "",
    theme: "naked",
    scale: 1,
    selected: [],
    cursor: null,
    showTips: !1,
    onElementClick: (t) => {
      console.log("Element clicked", t);
    }
  },
  getters: {
    rootContext: (t) => vv(t.code),
    title: (t, e) => {
      var n, r;
      return (r = (n = e.rootContext) == null ? void 0 : n.title()) == null ? void 0 : r.content();
    },
    participants: (t, e) => cs(e.rootContext, !0),
    coordinates: (t, e) => new sn(e.rootContext, kn),
    centerOf: (t, e) => (n) => {
      if (!n)
        return console.error("[vue-sequence] centerOf: entity is undefined"), 0;
      try {
        return e.coordinates.getPosition(n) || 0;
      } catch (r) {
        return console.error(r), 0;
      }
    },
    GroupContext: () => Xd,
    ParticipantContext: () => Jd,
    cursor: (t) => t.cursor,
    distance: (t, e) => (n, r) => e.centerOf(n) - e.centerOf(r),
    distance2: (t, e) => (n, r) => !n || !r ? 0 : e.centerOf(r) - e.centerOf(n),
    onElementClick: (t) => t.onElementClick
  },
  mutations: {
    code: function(t, e) {
      t.code = e;
    },
    setScale: function(t, e) {
      t.scale = e;
    },
    onSelect: function(t, e) {
      t.selected.includes(e) ? t.selected = t.selected.filter((n) => n !== e) : t.selected.push(e);
    },
    cursor: function(t, e) {
      t.cursor = e;
    }
  },
  actions: {
    updateCode: function({ commit: t, getters: e }, n) {
      if (typeof n == "string")
        throw Error(
          "You are using a old version of vue-sequence. New version requires {code, cursor}."
        );
      t("code", n.code);
    }
  },
  strict: !1
}), Oe = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, s] of e)
    n[r] = s;
  return n;
}, zv = {
  name: "Privacy"
}, Dv = (t) => (br("data-v-70836592"), t = t(), _r(), t), Bv = /* @__PURE__ */ Dv(() => /* @__PURE__ */ T("div", {
  class: "tooltip bottom whitespace-normal",
  "data-tooltip": "We (the vendor) do not have access to your data. The diagram is generated in this browser."
}, [
  /* @__PURE__ */ T("svg", {
    class: "fill-current h-6 w-6 m-auto",
    xmlns: "http://www.w3.org/2000/svg",
    "xml:space": "preserve",
    viewBox: "0 0 214.27 214.27"
  }, [
    /* @__PURE__ */ T("path", { d: "M196.926 55.171c-.11-5.785-.215-11.25-.215-16.537a7.5 7.5 0 0 0-7.5-7.5c-32.075 0-56.496-9.218-76.852-29.01a7.498 7.498 0 0 0-10.457 0c-20.354 19.792-44.771 29.01-76.844 29.01a7.5 7.5 0 0 0-7.5 7.5c0 5.288-.104 10.755-.215 16.541-1.028 53.836-2.436 127.567 87.331 158.682a7.495 7.495 0 0 0 4.912 0c89.774-31.116 88.368-104.849 87.34-158.686zm-89.795 143.641c-76.987-27.967-75.823-89.232-74.79-143.351.062-3.248.122-6.396.164-9.482 30.04-1.268 54.062-10.371 74.626-28.285 20.566 17.914 44.592 27.018 74.634 28.285.042 3.085.102 6.231.164 9.477 1.032 54.121 2.195 115.388-74.798 143.356z" }),
    /* @__PURE__ */ T("path", { d: "m132.958 81.082-36.199 36.197-15.447-15.447a7.501 7.501 0 0 0-10.606 10.607l20.75 20.75a7.477 7.477 0 0 0 5.303 2.196 7.477 7.477 0 0 0 5.303-2.196l41.501-41.5a7.498 7.498 0 0 0 .001-10.606 7.5 7.5 0 0 0-10.606-.001z" })
  ])
], -1)), Uv = [
  Bv
];
function Hv(t, e, n, r, s, i) {
  return P(), ee("div", null, Uv);
}
const Vv = /* @__PURE__ */ Oe(zv, [["render", Hv], ["__scopeId", "data-v-70836592"]]), Gv = {
  name: "DiagramTitle",
  props: ["context"],
  computed: {
    title: function() {
      var t;
      return (t = this.context) == null ? void 0 : t.content();
    }
  }
}, jv = { class: "title text-skin-title text-base font-semibold" };
function $v(t, e, n, r, s, i) {
  return P(), ee("div", jv, Ke(i.title), 1);
}
const qv = /* @__PURE__ */ Oe(Gv, [["render", $v]]), n4 = new k2();
var gc = { exports: {} }, Zv = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, r4 = { exports: {} }, Wv = function(t) {
  return !t || typeof t == "string" ? !1 : t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && t.constructor.name !== "String");
}, Yv = Wv, Kv = Array.prototype.concat, Qv = Array.prototype.slice, tu = r4.exports = function(t) {
  for (var e = [], n = 0, r = t.length; n < r; n++) {
    var s = t[n];
    Yv(s) ? e = Kv.call(e, Qv.call(s)) : e.push(s);
  }
  return e;
};
tu.wrap = function(t) {
  return function() {
    return t(tu(arguments));
  };
};
var Vi = Zv, di = r4.exports, s4 = {};
for (var k1 in Vi)
  Vi.hasOwnProperty(k1) && (s4[Vi[k1]] = k1);
var Ot = gc.exports = {
  to: {},
  get: {}
};
Ot.get = function(t) {
  var e = t.substring(0, 3).toLowerCase(), n, r;
  switch (e) {
    case "hsl":
      n = Ot.get.hsl(t), r = "hsl";
      break;
    case "hwb":
      n = Ot.get.hwb(t), r = "hwb";
      break;
    default:
      n = Ot.get.rgb(t), r = "rgb";
      break;
  }
  return n ? { model: r, value: n } : null;
};
Ot.get.rgb = function(t) {
  if (!t)
    return null;
  var e = /^#([a-f0-9]{3,4})$/i, n = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, r = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/, s = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/, i = /(\D+)/, o = [0, 0, 0, 1], a, l, c;
  if (a = t.match(n)) {
    for (c = a[2], a = a[1], l = 0; l < 3; l++) {
      var u = l * 2;
      o[l] = parseInt(a.slice(u, u + 2), 16);
    }
    c && (o[3] = parseInt(c, 16) / 255);
  } else if (a = t.match(e)) {
    for (a = a[1], c = a[3], l = 0; l < 3; l++)
      o[l] = parseInt(a[l] + a[l], 16);
    c && (o[3] = parseInt(c + c, 16) / 255);
  } else if (a = t.match(r)) {
    for (l = 0; l < 3; l++)
      o[l] = parseInt(a[l + 1], 0);
    a[4] && (o[3] = parseFloat(a[4]));
  } else if (a = t.match(s)) {
    for (l = 0; l < 3; l++)
      o[l] = Math.round(parseFloat(a[l + 1]) * 2.55);
    a[4] && (o[3] = parseFloat(a[4]));
  } else
    return (a = t.match(i)) ? a[1] === "transparent" ? [0, 0, 0, 0] : (o = Vi[a[1]], o ? (o[3] = 1, o) : null) : null;
  for (l = 0; l < 3; l++)
    o[l] = $n(o[l], 0, 255);
  return o[3] = $n(o[3], 0, 1), o;
};
Ot.get.hsl = function(t) {
  if (!t)
    return null;
  var e = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/, n = t.match(e);
  if (n) {
    var r = parseFloat(n[4]), s = (parseFloat(n[1]) + 360) % 360, i = $n(parseFloat(n[2]), 0, 100), o = $n(parseFloat(n[3]), 0, 100), a = $n(isNaN(r) ? 1 : r, 0, 1);
    return [s, i, o, a];
  }
  return null;
};
Ot.get.hwb = function(t) {
  if (!t)
    return null;
  var e = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/, n = t.match(e);
  if (n) {
    var r = parseFloat(n[4]), s = (parseFloat(n[1]) % 360 + 360) % 360, i = $n(parseFloat(n[2]), 0, 100), o = $n(parseFloat(n[3]), 0, 100), a = $n(isNaN(r) ? 1 : r, 0, 1);
    return [s, i, o, a];
  }
  return null;
};
Ot.to.hex = function() {
  var t = di(arguments);
  return "#" + Pi(t[0]) + Pi(t[1]) + Pi(t[2]) + (t[3] < 1 ? Pi(Math.round(t[3] * 255)) : "");
};
Ot.to.rgb = function() {
  var t = di(arguments);
  return t.length < 4 || t[3] === 1 ? "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")" : "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")";
};
Ot.to.rgb.percent = function() {
  var t = di(arguments), e = Math.round(t[0] / 255 * 100), n = Math.round(t[1] / 255 * 100), r = Math.round(t[2] / 255 * 100);
  return t.length < 4 || t[3] === 1 ? "rgb(" + e + "%, " + n + "%, " + r + "%)" : "rgba(" + e + "%, " + n + "%, " + r + "%, " + t[3] + ")";
};
Ot.to.hsl = function() {
  var t = di(arguments);
  return t.length < 4 || t[3] === 1 ? "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" : "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")";
};
Ot.to.hwb = function() {
  var t = di(arguments), e = "";
  return t.length >= 4 && t[3] !== 1 && (e = ", " + t[3]), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + e + ")";
};
Ot.to.keyword = function(t) {
  return s4[t.slice(0, 3)];
};
function $n(t, e, n) {
  return Math.min(Math.max(e, t), n);
}
function Pi(t) {
  var e = t.toString(16).toUpperCase();
  return e.length < 2 ? "0" + e : e;
}
function Xv(t) {
  const e = gc.exports.get.rgb(t);
  let [n, r, s] = e;
  return (n * 299 + r * 587 + s * 114) / 1e3;
}
function Jv(t) {
  const e = gc.exports.get.rgb(t);
  let [n, r, s] = e;
  return `rgb(${n}, ${r}, ${s})`;
}
const eb = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_544_54)">
    <path d="M15.5489 4.19771C15.5489 5.18773 15.1485 6.13721 14.4358 6.83726C13.7231 7.53731 12.7565 7.93058 11.7486 7.93058C10.7407 7.93058 9.77403 7.53731 9.06133 6.83726C8.34863 6.13721 7.94824 5.18773 7.94824 4.19771C7.94824 3.20768 8.34863 2.25822 9.06133 1.55818C9.77403 0.858126 10.7407 0.464844 11.7486 0.464844C12.7565 0.464844 13.7231 0.858126 14.4358 1.55818C15.1485 2.25822 15.5489 3.20768 15.5489 4.19771Z" stroke="black"/>
    <path d="M6.54883 11.2152L17.2025 11.2073M11.7471 8.06641V19.5806V8.06641ZM11.7471 19.4385L6.79789 23.5738L11.7471 19.4385ZM11.7551 19.4385L17.1864 23.3055L11.7551 19.4385Z" stroke="black"/>
  </g>
  <defs>
    <clipPath id="clip0_544_54">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
`, tb = `<svg width="101" height="78" viewBox="0 0 101 78" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M96.3563 39.4479C96.3563 48.4904 92.6755 57.1625 86.1237 63.5566C79.5718 69.9506 70.6856 73.5427 61.4199 73.5427C52.1541 73.5427 43.2679 69.9506 36.7161 63.5566C30.1642 57.1625 26.4834 48.4904 26.4834 39.4479C26.4834 30.147 30.1642 21.2271 36.7161 14.6504C43.2679 8.07366 52.1541 4.37891 61.4199 4.37891C70.6856 4.37891 79.5718 8.07366 86.1237 14.6504C92.6755 21.2271 96.3563 30.147 96.3563 39.4479V39.4479Z" stroke="black" stroke-width="7.56826"/>
	<path d="M27.3611 39.4482H3.93945" stroke="black" stroke-width="8"/>
	<path d="M4.91504 4.37891V74.5168" stroke="black" stroke-width="8"/>
</svg>
`, nb = `<svg width="77" height="86" viewBox="0 0 77 86" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_544_57)">
		<path d="M74.0149 46.8888C74.0149 51.5755 73.0918 56.2163 71.2983 60.5463C69.5048 64.8762 66.876 68.8105 63.562 72.1245C60.248 75.4385 56.3137 78.0673 51.9838 79.8608C47.6538 81.6543 43.013 82.5774 38.3263 82.5774C33.6396 82.5774 28.9988 81.6543 24.6689 79.8608C20.3389 78.0673 16.4046 75.4385 13.0907 72.1245C9.77666 68.8105 7.14785 64.8762 5.35433 60.5463C3.56081 56.2163 2.6377 51.5755 2.6377 46.8888C2.6377 42.2021 3.56081 37.5613 5.35433 33.2314C7.14785 28.9014 9.77666 24.9671 13.0907 21.6532C16.4046 18.3392 20.3389 15.7104 24.6689 13.9168C28.9988 12.1233 33.6396 11.2002 38.3263 11.2002C43.013 11.2002 47.6538 12.1233 51.9838 13.9168C56.3137 15.7104 60.248 18.3392 63.562 21.6532C66.876 24.9671 69.5048 28.9014 71.2983 33.2314C73.0918 37.5613 74.0149 42.2021 74.0149 46.8888V46.8888Z" stroke="black" stroke-width="4.98203"/>
		<path d="M47.5352 2.30371L37.5352 11.5001L47.5352 20.6966" stroke="black" stroke-width="6"/>
	</g>
	<defs>
		<clipPath id="clip0_544_57">
			<rect width="77" height="86" fill="white"/>
		</clipPath>
	</defs>
</svg>
`, rb = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.258 0.001L12.514 0.005L12.769 0.01L13.022 0.018L13.273 0.028L13.522 0.04L13.769 0.055L14.015 0.071L14.257 0.09L14.498 0.11L14.737 0.133L14.973 0.157L15.206 0.184L15.437 0.212L15.666 0.243L15.891 0.275L16.114 0.309L16.334 0.345L16.551 0.383L16.765 0.423L16.976 0.464L17.184 0.507L17.389 0.552L17.59 0.598L17.788 0.646L17.982 0.696L18.173 0.747L18.36 0.8L18.543 0.854L18.723 0.91L18.898 0.967L19.07 1.026L19.238 1.086L19.401 1.147L19.561 1.21L19.716 1.274L19.866 1.34L19.94 1.373L20.013 1.406L20.084 1.44L20.154 1.474L20.223 1.509L20.291 1.544L20.358 1.579L20.424 1.614L20.488 1.65L20.552 1.686L20.614 1.722L20.674 1.758L20.734 1.795L20.792 1.832L20.85 1.869L20.905 1.907L20.96 1.945L21.013 1.983L21.065 2.021L21.116 2.06L21.166 2.099L21.214 2.138L21.261 2.177L21.306 2.217L21.35 2.257L21.393 2.297L21.434 2.337L21.474 2.378L21.513 2.419L21.55 2.46L21.586 2.501L21.62 2.542L21.653 2.584L21.685 2.626L21.715 2.668L21.744 2.71L21.771 2.752L21.797 2.795L21.821 2.838L21.844 2.881L21.865 2.924L21.885 2.967L21.903 3.011L21.92 3.054L21.935 3.098L21.948 3.142L21.96 3.186L21.971 3.231L21.98 3.275L21.987 3.32L21.993 3.365L21.997 3.41L21.999 3.455L22 3.5V20.5L21.999 20.545L21.997 20.59L21.993 20.635L21.987 20.68L21.98 20.725L21.971 20.769L21.96 20.814L21.948 20.858L21.935 20.902L21.92 20.946L21.903 20.989L21.885 21.033L21.865 21.076L21.844 21.119L21.821 21.162L21.797 21.205L21.771 21.248L21.744 21.29L21.715 21.332L21.685 21.374L21.653 21.416L21.62 21.458L21.586 21.499L21.55 21.54L21.513 21.581L21.474 21.622L21.434 21.663L21.393 21.703L21.35 21.743L21.306 21.783L21.261 21.823L21.214 21.862L21.166 21.901L21.116 21.94L21.065 21.979L21.013 22.017L20.96 22.055L20.905 22.093L20.85 22.131L20.792 22.168L20.734 22.205L20.674 22.242L20.614 22.278L20.552 22.314L20.488 22.35L20.424 22.386L20.358 22.421L20.291 22.456L20.223 22.491L20.154 22.526L20.084 22.56L20.013 22.594L19.94 22.627L19.866 22.66L19.716 22.726L19.561 22.79L19.401 22.853L19.238 22.914L19.07 22.974L18.898 23.033L18.723 23.09L18.543 23.146L18.36 23.2L18.173 23.253L17.982 23.304L17.788 23.354L17.59 23.402L17.389 23.448L17.184 23.493L16.976 23.536L16.765 23.577L16.551 23.617L16.334 23.655L16.114 23.691L15.891 23.725L15.666 23.757L15.437 23.788L15.206 23.816L14.973 23.843L14.737 23.867L14.498 23.89L14.257 23.91L14.015 23.929L13.769 23.945L13.522 23.96L13.273 23.972L13.022 23.982L12.769 23.99L12.514 23.995L12.258 23.999L12 24L11.742 23.999L11.486 23.995L11.231 23.99L10.978 23.982L10.727 23.972L10.478 23.96L10.231 23.945L9.986 23.929L9.743 23.91L9.502 23.89L9.264 23.867L9.028 23.843L8.794 23.816L8.563 23.788L8.335 23.757L8.109 23.725L7.886 23.691L7.666 23.655L7.449 23.617L7.235 23.577L7.024 23.536L6.816 23.493L6.612 23.448L6.411 23.402L6.213 23.354L6.018 23.304L5.828 23.253L5.641 23.2L5.457 23.146L5.278 23.09L5.102 23.033L4.93 22.974L4.763 22.914L4.599 22.853L4.44 22.79L4.285 22.726L4.134 22.66L4.06 22.627L3.988 22.594L3.916 22.56L3.846 22.526L3.777 22.491L3.709 22.456L3.642 22.421L3.576 22.386L3.512 22.35L3.449 22.314L3.387 22.278L3.326 22.242L3.266 22.205L3.208 22.168L3.151 22.131L3.095 22.093L3.04 22.055L2.987 22.017L2.935 21.979L2.884 21.94L2.835 21.901L2.786 21.862L2.74 21.823L2.694 21.783L2.65 21.743L2.607 21.703L2.566 21.663L2.526 21.622L2.487 21.581L2.45 21.54L2.414 21.499L2.38 21.458L2.347 21.416L2.315 21.374L2.285 21.332L2.256 21.29L2.229 21.248L2.203 21.205L2.179 21.162L2.156 21.119L2.135 21.076L2.115 21.033L2.097 20.989L2.08 20.946L2.065 20.902L2.052 20.858L2.04 20.814L2.029 20.769L2.02 20.725L2.013 20.68L2.007 20.635L2.003 20.59L2.001 20.545L2 20.5V3.5L2.001 3.455L2.003 3.41L2.007 3.365L2.013 3.32L2.02 3.275L2.029 3.231L2.04 3.186L2.052 3.142L2.065 3.098L2.08 3.054L2.097 3.011L2.115 2.967L2.135 2.924L2.156 2.881L2.179 2.838L2.203 2.795L2.229 2.752L2.256 2.71L2.285 2.668L2.315 2.626L2.347 2.584L2.38 2.542L2.414 2.501L2.45 2.46L2.487 2.419L2.526 2.378L2.566 2.337L2.607 2.297L2.65 2.257L2.694 2.217L2.74 2.177L2.786 2.138L2.835 2.099L2.884 2.06L2.935 2.021L2.987 1.983L3.04 1.945L3.095 1.907L3.151 1.869L3.208 1.832L3.266 1.795L3.326 1.758L3.387 1.722L3.449 1.686L3.512 1.65L3.576 1.614L3.642 1.579L3.709 1.544L3.777 1.509L3.846 1.474L3.916 1.44L3.988 1.406L4.06 1.373L4.134 1.34L4.285 1.274L4.44 1.21L4.599 1.147L4.763 1.086L4.93 1.026L5.102 0.967L5.278 0.91L5.457 0.854L5.641 0.8L5.828 0.747L6.018 0.696L6.213 0.646L6.411 0.598L6.612 0.552L6.816 0.507L7.024 0.464L7.235 0.423L7.449 0.383L7.666 0.345L7.886 0.309L8.109 0.275L8.335 0.243L8.563 0.212L8.794 0.184L9.028 0.157L9.264 0.133L9.502 0.11L9.743 0.09L9.986 0.071L10.231 0.055L10.478 0.04L10.727 0.028L10.978 0.018L11.231 0.01L11.486 0.005L11.742 0.001L12 0L12.258 0.001V0.001ZM3 20.5V20.51L3.001 20.531L3.004 20.552L3.008 20.574L3.013 20.595L3.019 20.617L3.026 20.639L3.035 20.662L3.045 20.684L3.056 20.707L3.068 20.73L3.081 20.753L3.096 20.776L3.112 20.8L3.129 20.823L3.147 20.847L3.166 20.871L3.187 20.895L3.209 20.92L3.232 20.944L3.256 20.969L3.308 21.018L3.364 21.068L3.425 21.119L3.491 21.17L3.561 21.221L3.636 21.272L3.715 21.324L3.799 21.376L3.887 21.428L3.979 21.48L4.076 21.532L4.178 21.583L4.283 21.635L4.393 21.687L4.507 21.738L4.626 21.789L4.749 21.84L4.876 21.89L5.007 21.94L5.142 21.99L5.281 22.038L5.425 22.087L5.572 22.134L5.724 22.181L5.879 22.228L6.039 22.273L6.202 22.318L6.369 22.361L6.54 22.404L6.716 22.445L6.894 22.486L7.077 22.525L7.264 22.564L7.454 22.601L7.648 22.636L7.845 22.671L8.047 22.704L8.251 22.735L8.46 22.765L8.672 22.794L8.888 22.821L9.107 22.846L9.329 22.87L9.555 22.891L9.785 22.911L10.018 22.929L10.254 22.945L10.494 22.96L10.737 22.972L10.983 22.982L11.232 22.99L11.485 22.995L11.741 22.999L12 23L12.26 22.999L12.517 22.995L12.771 22.99L13.021 22.982L13.268 22.971L13.512 22.959L13.753 22.945L13.99 22.929L14.223 22.911L14.454 22.89L14.68 22.869L14.904 22.845L15.124 22.819L15.34 22.792L15.552 22.764L15.762 22.733L15.967 22.702L16.169 22.668L16.367 22.634L16.561 22.598L16.752 22.561L16.939 22.522L17.122 22.482L17.301 22.442L17.476 22.4L17.648 22.357L17.816 22.313L17.979 22.268L18.139 22.222L18.294 22.176L18.446 22.129L18.594 22.081L18.737 22.032L18.876 21.983L19.012 21.933L19.143 21.883L19.269 21.833L19.392 21.782L19.51 21.73L19.624 21.679L19.734 21.627L19.84 21.575L19.941 21.523L20.037 21.471L20.129 21.419L20.217 21.366L20.3 21.315L20.379 21.263L20.453 21.211L20.523 21.16L20.588 21.109L20.648 21.058L20.704 21.008L20.755 20.958L20.778 20.934L20.801 20.909L20.822 20.885L20.842 20.861L20.861 20.837L20.879 20.813L20.896 20.789L20.911 20.766L20.925 20.742L20.938 20.719L20.95 20.696L20.96 20.673L20.97 20.651L20.978 20.629L20.984 20.607L20.99 20.585L20.994 20.563L20.998 20.542L20.999 20.521L21 20.5V16.373L20.923 16.428L20.843 16.481L20.76 16.535L20.675 16.588L20.588 16.64L20.498 16.692L20.405 16.743L20.31 16.793L20.213 16.843L20.113 16.892L20.011 16.941L19.906 16.989L19.8 17.036L19.691 17.083L19.58 17.129L19.466 17.174L19.351 17.219L19.233 17.263L19.113 17.306L18.991 17.348L18.867 17.39L18.741 17.431L18.613 17.471L18.483 17.511L18.351 17.549L18.217 17.587L18.082 17.624L17.944 17.661L17.805 17.696L17.663 17.731L17.52 17.765L17.376 17.798L17.229 17.83L17.081 17.861L16.931 17.891L16.78 17.921L16.627 17.95L16.473 17.977L16.317 18.004L16.159 18.03L16 18.055L15.839 18.079L15.677 18.102L15.514 18.124L15.349 18.145L15.183 18.165L15.016 18.184L14.847 18.202L14.678 18.219L14.507 18.235L14.334 18.25L14.161 18.264L13.986 18.277L13.811 18.289L13.634 18.3L13.456 18.31L13.277 18.318L13.098 18.326L12.917 18.332L12.735 18.337L12.553 18.341L12.369 18.344L12.185 18.346H11.815L11.631 18.344L11.447 18.341L11.265 18.337L11.083 18.332L10.902 18.326L10.723 18.318L10.544 18.31L10.366 18.3L10.19 18.289L10.014 18.277L9.839 18.264L9.666 18.25L9.494 18.235L9.323 18.219L9.153 18.202L8.984 18.184L8.817 18.165L8.651 18.145L8.486 18.124L8.323 18.102L8.161 18.079L8 18.055L7.841 18.03L7.684 18.004L7.528 17.977L7.373 17.95L7.22 17.921L7.069 17.891L6.919 17.861L6.771 17.83L6.625 17.798L6.48 17.765L6.337 17.731L6.196 17.696L6.056 17.661L5.919 17.624L5.783 17.587L5.649 17.549L5.517 17.511L5.387 17.471L5.259 17.431L5.133 17.39L5.009 17.348L4.887 17.306L4.767 17.262L4.65 17.219L4.534 17.174L4.421 17.129L4.309 17.083L4.2 17.036L4.094 16.989L3.989 16.941L3.887 16.892L3.787 16.843L3.69 16.793L3.595 16.743L3.502 16.691L3.412 16.64L3.325 16.588L3.24 16.535L3.157 16.481L3.077 16.427L3 16.373V20.5V20.5ZM3 14.846V14.857L3.001 14.878L3.004 14.899L3.008 14.92L3.013 14.942L3.019 14.964L3.026 14.986L3.035 15.008L3.045 15.03L3.056 15.053L3.068 15.076L3.081 15.099L3.096 15.123L3.112 15.146L3.129 15.17L3.147 15.194L3.166 15.218L3.187 15.242L3.209 15.266L3.232 15.291L3.256 15.315L3.308 15.365L3.364 15.415L3.425 15.465L3.491 15.516L3.561 15.567L3.636 15.619L3.715 15.67L3.799 15.722L3.887 15.774L3.979 15.826L4.076 15.878L4.178 15.93L4.283 15.982L4.393 16.033L4.507 16.084L4.626 16.136L4.749 16.186L4.876 16.237L5.007 16.287L5.142 16.336L5.281 16.385L5.425 16.433L5.572 16.481L5.724 16.528L5.879 16.574L6.039 16.619L6.202 16.664L6.369 16.708L6.54 16.75L6.716 16.792L6.894 16.832L7.077 16.872L7.264 16.91L7.454 16.947L7.648 16.983L7.845 17.017L8.047 17.05L8.251 17.082L8.46 17.112L8.672 17.14L8.888 17.167L9.107 17.192L9.329 17.216L9.555 17.238L9.785 17.258L10.018 17.276L10.254 17.292L10.494 17.306L10.737 17.318L10.983 17.328L11.232 17.336L11.485 17.342L11.741 17.345L12 17.346L12.26 17.345L12.517 17.342L12.771 17.336L13.021 17.328L13.268 17.318L13.512 17.306L13.753 17.291L13.99 17.275L14.223 17.257L14.454 17.237L14.68 17.215L14.904 17.191L15.124 17.166L15.34 17.139L15.552 17.11L15.762 17.08L15.967 17.048L16.169 17.015L16.367 16.98L16.561 16.944L16.752 16.907L16.939 16.868L17.122 16.829L17.301 16.788L17.476 16.746L17.648 16.703L17.816 16.659L17.979 16.614L18.139 16.569L18.294 16.522L18.446 16.475L18.594 16.427L18.737 16.379L18.876 16.329L19.012 16.28L19.143 16.23L19.269 16.179L19.392 16.128L19.51 16.077L19.624 16.025L19.734 15.973L19.84 15.921L19.941 15.869L20.037 15.817L20.129 15.765L20.217 15.713L20.3 15.661L20.379 15.609L20.453 15.558L20.523 15.506L20.588 15.455L20.648 15.405L20.704 15.354L20.755 15.305L20.778 15.28L20.801 15.256L20.822 15.231L20.842 15.207L20.861 15.183L20.879 15.159L20.896 15.135L20.911 15.112L20.925 15.089L20.938 15.065L20.95 15.043L20.96 15.02L20.97 14.997L20.978 14.975L20.984 14.953L20.99 14.931L20.994 14.91L20.998 14.888L20.999 14.867L21 14.846V10.707L20.923 10.761L20.843 10.815L20.76 10.869L20.675 10.921L20.588 10.974L20.498 11.025L20.405 11.076L20.31 11.127L20.213 11.177L20.113 11.226L20.011 11.275L19.906 11.323L19.8 11.37L19.691 11.417L19.58 11.463L19.466 11.508L19.351 11.552L19.233 11.596L19.113 11.64L18.991 11.682L18.867 11.724L18.741 11.765L18.613 11.805L18.483 11.844L18.351 11.883L18.217 11.921L18.082 11.958L17.944 11.994L17.805 12.03L17.663 12.065L17.52 12.098L17.376 12.131L17.229 12.164L17.081 12.195L16.931 12.225L16.78 12.255L16.627 12.283L16.473 12.311L16.317 12.338L16.159 12.364L16 12.389L15.839 12.413L15.677 12.436L15.514 12.458L15.349 12.479L15.183 12.499L15.016 12.518L14.847 12.536L14.678 12.553L14.507 12.569L14.334 12.584L14.161 12.598L13.986 12.611L13.811 12.623L13.634 12.634L13.456 12.643L13.277 12.652L13.098 12.659L12.917 12.666L12.735 12.671L12.553 12.675L12.369 12.678L12.185 12.68H11.815L11.631 12.678L11.447 12.675L11.265 12.671L11.083 12.666L10.902 12.659L10.723 12.652L10.544 12.643L10.366 12.634L10.19 12.623L10.014 12.611L9.839 12.598L9.666 12.584L9.494 12.569L9.323 12.553L9.153 12.536L8.984 12.518L8.817 12.499L8.651 12.479L8.486 12.458L8.323 12.436L8.161 12.413L8 12.389L7.841 12.364L7.684 12.338L7.528 12.311L7.373 12.283L7.22 12.255L7.069 12.225L6.919 12.195L6.771 12.164L6.625 12.131L6.48 12.098L6.337 12.065L6.196 12.03L6.056 11.994L5.919 11.958L5.783 11.921L5.649 11.883L5.517 11.844L5.387 11.805L5.259 11.765L5.133 11.724L5.009 11.682L4.887 11.639L4.767 11.596L4.65 11.552L4.534 11.508L4.421 11.462L4.309 11.416L4.2 11.37L4.094 11.323L3.989 11.275L3.887 11.226L3.787 11.177L3.69 11.127L3.595 11.076L3.502 11.025L3.412 10.974L3.325 10.921L3.24 10.869L3.157 10.815L3.077 10.761L3 10.707V14.846V14.846ZM3 9.18V9.191L3.001 9.211L3.004 9.233L3.008 9.254L3.013 9.276L3.019 9.297L3.026 9.319L3.035 9.342L3.045 9.364L3.056 9.387L3.068 9.41L3.081 9.433L3.096 9.456L3.112 9.48L3.129 9.504L3.147 9.527L3.166 9.551L3.187 9.576L3.209 9.6L3.232 9.624L3.256 9.649L3.308 9.699L3.364 9.749L3.425 9.799L3.491 9.85L3.561 9.901L3.636 9.953L3.715 10.004L3.799 10.056L3.887 10.108L3.979 10.16L4.076 10.212L4.178 10.264L4.283 10.315L4.393 10.367L4.507 10.418L4.626 10.469L4.749 10.52L4.876 10.57L5.007 10.62L5.142 10.67L5.281 10.719L5.425 10.767L5.572 10.815L5.724 10.862L5.879 10.908L6.039 10.953L6.202 10.998L6.369 11.041L6.54 11.084L6.716 11.126L6.894 11.166L7.077 11.206L7.264 11.244L7.454 11.281L7.648 11.317L7.845 11.351L8.047 11.384L8.251 11.416L8.46 11.446L8.672 11.474L8.888 11.501L9.107 11.526L9.329 11.55L9.555 11.571L9.785 11.591L10.018 11.609L10.254 11.626L10.494 11.64L10.737 11.652L10.983 11.662L11.232 11.67L11.485 11.676L11.741 11.679L12 11.68L12.26 11.679L12.517 11.676L12.771 11.67L13.021 11.662L13.268 11.652L13.512 11.639L13.753 11.625L13.99 11.609L14.223 11.591L14.454 11.571L14.68 11.549L14.904 11.525L15.124 11.5L15.34 11.473L15.552 11.444L15.762 11.414L15.967 11.382L16.169 11.349L16.367 11.314L16.561 11.278L16.752 11.241L16.939 11.202L17.122 11.163L17.301 11.122L17.476 11.08L17.648 11.037L17.816 10.993L17.979 10.948L18.139 10.903L18.294 10.856L18.446 10.809L18.594 10.761L18.737 10.712L18.876 10.663L19.012 10.614L19.143 10.563L19.269 10.513L19.392 10.462L19.51 10.41L19.624 10.359L19.734 10.307L19.84 10.255L19.941 10.203L20.037 10.151L20.129 10.099L20.217 10.047L20.3 9.995L20.379 9.943L20.453 9.891L20.523 9.84L20.588 9.789L20.648 9.738L20.704 9.688L20.755 9.639L20.778 9.614L20.801 9.589L20.822 9.565L20.842 9.541L20.861 9.517L20.879 9.493L20.896 9.469L20.911 9.446L20.925 9.422L20.938 9.399L20.95 9.376L20.96 9.354L20.97 9.331L20.978 9.309L20.984 9.287L20.99 9.265L20.994 9.243L20.998 9.222L20.999 9.201L21 9.18V5.027L20.923 5.081L20.843 5.135L20.76 5.188L20.675 5.241L20.588 5.294L20.498 5.345L20.405 5.396L20.31 5.447L20.213 5.497L20.113 5.546L20.011 5.594L19.906 5.642L19.8 5.69L19.691 5.736L19.58 5.782L19.466 5.828L19.351 5.872L19.233 5.916L19.113 5.959L18.991 6.002L18.867 6.044L18.741 6.085L18.613 6.125L18.483 6.164L18.351 6.203L18.217 6.241L18.082 6.278L17.944 6.314L17.805 6.35L17.663 6.384L17.52 6.418L17.376 6.451L17.229 6.483L17.081 6.515L16.931 6.545L16.78 6.575L16.627 6.603L16.473 6.631L16.317 6.658L16.159 6.684L16 6.708L15.839 6.732L15.677 6.755L15.514 6.778L15.349 6.799L15.183 6.819L15.016 6.838L14.847 6.856L14.678 6.873L14.507 6.889L14.334 6.904L14.161 6.918L13.986 6.931L13.811 6.943L13.634 6.953L13.456 6.963L13.277 6.972L13.098 6.979L12.917 6.985L12.735 6.991L12.553 6.995L12.369 6.998L12.185 6.999L12 7L11.815 6.999L11.631 6.998L11.447 6.995L11.265 6.991L11.083 6.985L10.902 6.979L10.723 6.972L10.544 6.963L10.366 6.953L10.19 6.943L10.014 6.931L9.839 6.918L9.666 6.904L9.494 6.889L9.323 6.873L9.153 6.856L8.984 6.838L8.817 6.819L8.651 6.799L8.486 6.778L8.323 6.755L8.161 6.732L8 6.708L7.841 6.684L7.684 6.658L7.528 6.631L7.373 6.603L7.22 6.575L7.069 6.545L6.919 6.515L6.771 6.483L6.625 6.451L6.48 6.418L6.337 6.384L6.196 6.35L6.056 6.314L5.919 6.278L5.783 6.241L5.649 6.203L5.517 6.164L5.387 6.125L5.259 6.084L5.133 6.043L5.009 6.002L4.887 5.959L4.767 5.916L4.65 5.872L4.534 5.828L4.421 5.782L4.309 5.736L4.2 5.69L4.094 5.642L3.989 5.594L3.887 5.546L3.787 5.496L3.69 5.447L3.595 5.396L3.502 5.345L3.412 5.293L3.325 5.241L3.24 5.188L3.157 5.135L3.077 5.081L3 5.027V9.18V9.18ZM11.74 1.001L11.483 1.005L11.229 1.01L10.979 1.018L10.732 1.029L10.488 1.041L10.247 1.055L10.01 1.071L9.777 1.089L9.546 1.11L9.32 1.132L9.096 1.155L8.876 1.181L8.66 1.208L8.448 1.236L8.238 1.267L8.033 1.299L7.831 1.332L7.633 1.366L7.439 1.402L7.248 1.44L7.061 1.478L6.878 1.518L6.699 1.559L6.524 1.601L6.352 1.644L6.184 1.687L6.021 1.732L5.861 1.778L5.706 1.824L5.554 1.872L5.406 1.92L5.263 1.968L5.124 2.017L4.988 2.067L4.857 2.117L4.731 2.168L4.608 2.219L4.49 2.27L4.376 2.322L4.266 2.374L4.16 2.426L4.059 2.478L3.963 2.53L3.871 2.582L3.783 2.634L3.7 2.686L3.621 2.738L3.547 2.789L3.477 2.841L3.412 2.892L3.352 2.942L3.296 2.992L3.245 3.042L3.222 3.067L3.199 3.091L3.178 3.115L3.158 3.14L3.139 3.164L3.121 3.188L3.104 3.211L3.089 3.235L3.075 3.258L3.062 3.281L3.05 3.304L3.04 3.327L3.03 3.349L3.022 3.371L3.016 3.394L3.01 3.415L3.006 3.437L3.002 3.458L3.001 3.479L3 3.5L3.001 3.521L3.002 3.542L3.006 3.563L3.01 3.585L3.016 3.606L3.022 3.629L3.03 3.651L3.04 3.673L3.05 3.696L3.062 3.719L3.075 3.742L3.089 3.765L3.104 3.789L3.121 3.812L3.139 3.836L3.158 3.86L3.178 3.885L3.199 3.909L3.222 3.933L3.245 3.958L3.296 4.008L3.352 4.058L3.412 4.108L3.477 4.159L3.547 4.211L3.621 4.262L3.7 4.314L3.783 4.366L3.871 4.418L3.963 4.47L4.059 4.522L4.16 4.574L4.266 4.626L4.376 4.678L4.49 4.73L4.608 4.781L4.731 4.832L4.857 4.883L4.988 4.933L5.124 4.983L5.263 5.032L5.406 5.08L5.554 5.128L5.706 5.176L5.861 5.222L6.021 5.268L6.184 5.313L6.352 5.356L6.524 5.399L6.699 5.441L6.878 5.482L7.061 5.522L7.248 5.56L7.439 5.598L7.633 5.634L7.831 5.668L8.033 5.701L8.238 5.733L8.448 5.764L8.66 5.792L8.876 5.819L9.096 5.845L9.32 5.868L9.546 5.89L9.777 5.911L10.01 5.929L10.247 5.945L10.488 5.959L10.732 5.971L10.979 5.982L11.229 5.99L11.483 5.995L11.74 5.999L12 6L12.26 5.999L12.517 5.995L12.771 5.99L13.021 5.982L13.268 5.971L13.512 5.959L13.753 5.945L13.99 5.929L14.223 5.911L14.454 5.89L14.68 5.868L14.904 5.845L15.124 5.819L15.34 5.792L15.552 5.764L15.762 5.733L15.967 5.701L16.169 5.668L16.367 5.634L16.561 5.598L16.752 5.56L16.939 5.522L17.122 5.482L17.301 5.441L17.476 5.399L17.648 5.356L17.816 5.313L17.979 5.268L18.139 5.222L18.294 5.176L18.446 5.128L18.594 5.08L18.737 5.032L18.876 4.983L19.012 4.933L19.143 4.883L19.269 4.832L19.392 4.781L19.51 4.73L19.624 4.678L19.734 4.626L19.84 4.574L19.941 4.522L20.037 4.47L20.129 4.418L20.217 4.366L20.3 4.314L20.379 4.262L20.453 4.211L20.523 4.159L20.588 4.108L20.648 4.058L20.704 4.008L20.755 3.958L20.778 3.933L20.801 3.909L20.822 3.885L20.842 3.86L20.861 3.836L20.879 3.812L20.896 3.789L20.911 3.765L20.925 3.742L20.938 3.719L20.95 3.696L20.96 3.673L20.97 3.651L20.978 3.629L20.984 3.606L20.99 3.585L20.994 3.563L20.998 3.542L20.999 3.521L21 3.5L20.999 3.479L20.998 3.458L20.994 3.437L20.99 3.415L20.984 3.394L20.978 3.371L20.97 3.349L20.96 3.327L20.95 3.304L20.938 3.281L20.925 3.258L20.911 3.235L20.896 3.211L20.879 3.188L20.861 3.164L20.842 3.14L20.822 3.115L20.801 3.091L20.778 3.067L20.755 3.042L20.704 2.992L20.648 2.942L20.588 2.892L20.523 2.841L20.453 2.789L20.379 2.738L20.3 2.686L20.217 2.634L20.129 2.582L20.037 2.53L19.941 2.478L19.84 2.426L19.734 2.374L19.624 2.322L19.51 2.27L19.392 2.219L19.269 2.168L19.143 2.117L19.012 2.067L18.876 2.017L18.737 1.968L18.594 1.92L18.446 1.872L18.294 1.824L18.139 1.778L17.979 1.732L17.816 1.687L17.648 1.644L17.476 1.601L17.301 1.559L17.122 1.518L16.939 1.478L16.752 1.44L16.561 1.402L16.367 1.366L16.169 1.332L15.967 1.299L15.762 1.267L15.552 1.236L15.34 1.208L15.124 1.181L14.904 1.155L14.68 1.132L14.454 1.11L14.223 1.089L13.99 1.071L13.753 1.055L13.512 1.041L13.268 1.029L13.021 1.018L12.771 1.01L12.517 1.005L12.26 1.001L12 1L11.74 1.001V1.001Z" fill="black"/>
</svg>
`, sb = `<svg width="77" height="80" viewBox="0 0 77 80" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_544_61)">
		<path d="M74.0149 38.8888C74.0149 43.5755 73.0918 48.2163 71.2983 52.5463C69.5048 56.8762 66.876 60.8105 63.562 64.1245C60.248 67.4385 56.3137 70.0673 51.9838 71.8608C47.6538 73.6543 43.013 74.5774 38.3263 74.5774C33.6396 74.5774 28.9988 73.6543 24.6689 71.8608C20.3389 70.0673 16.4046 67.4385 13.0907 64.1245C9.77666 60.8105 7.14785 56.8762 5.35433 52.5463C3.56081 48.2163 2.6377 43.5755 2.6377 38.8888C2.6377 34.2021 3.56081 29.5613 5.35433 25.2314C7.14785 20.9014 9.77666 16.9671 13.0907 13.6532C16.4046 10.3392 20.3389 7.71035 24.6689 5.91683C28.9988 4.12331 33.6396 3.2002 38.3263 3.2002C43.013 3.2002 47.6538 4.12331 51.9838 5.91683C56.3137 7.71035 60.248 10.3392 63.562 13.6532C66.876 16.9671 69.5048 20.9014 71.2983 25.2314C73.0918 29.5613 74.0149 34.2021 74.0149 38.8888V38.8888Z" stroke="black" stroke-width="4.98203"/>
		<path d="M2.69922 75.4727L75.6992 75.5154" stroke="black" stroke-width="8"/>
	</g>
	<defs>
		<clipPath id="clip0_544_61">
			<rect width="77" height="80" fill="white"/>
		</clipPath>
	</defs>
</svg>
`, ib = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-CloudWatch_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#B0084D" offset="0%"></stop>
            <stop stop-color="#FF4F8B" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-CloudWatch_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Management-Governance" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M18.9074368,18.522369 L16.9527886,16.7879726 C16.8210145,16.9276688 16.6782593,17.0526083 16.5285161,17.1726289 L18.5220975,18.9453925 C18.6388972,19.048689 18.8235806,19.0408188 18.9303974,18.9227657 C19.0352176,18.8086477 19.0252348,18.627633 18.9074368,18.522369 M14.0248095,17.0831053 C15.6769763,17.0831053 17.0196739,15.7589433 17.0196739,14.1317785 C17.0196739,12.5046136 15.6769763,11.1804516 14.0248095,11.1804516 C12.3736409,11.1804516 11.0299451,12.5046136 11.0299451,14.1317785 C11.0299451,15.7589433 12.3736409,17.0831053 14.0248095,17.0831053 M19.6721255,19.5818954 C19.417562,19.8593201 19.0651663,20 18.7137689,20 C18.4062961,20 18.0988234,19.8937522 17.8542428,19.6763378 L15.6510209,17.7186243 C15.1528751,17.9380063 14.6048149,18.0668809 14.0248095,18.0668809 C11.8225858,18.0668809 10.0316569,16.3019875 10.0316569,14.1317785 C10.0316569,11.9625532 11.8225858,10.196676 14.0248095,10.196676 C16.2270331,10.196676 18.017962,11.9625532 18.017962,14.1317785 C18.017962,14.8017297 17.8312821,15.4234758 17.5307974,15.9763577 L19.5762898,17.7924075 C20.1013894,18.2606847 20.1443158,19.0634456 19.6721255,19.5818954 M6.53764845,14.1317785 L9.03336879,14.1317785 L9.03336879,15.1155541 L6.53764845,15.1155541 C5.3127489,15.1155541 4,13.9596177 4,12.2389942 C4,10.8459679 4.75171097,9.77660381 6.03251465,9.30832662 C6.03151636,9.27389447 6.03151636,9.23847855 6.03151636,9.2040464 C6.03151636,7.60934613 7.12963331,5.95463555 8.58713399,5.3555162 C10.2832255,4.65506796 12.0871322,5.00234075 13.4008794,6.28518415 C13.7492819,6.62458674 14.0437769,7.02498342 14.2813695,7.4814553 C14.6028183,7.28273263 14.9731832,7.17451731 15.3585224,7.17451731 C16.2619732,7.17451731 17.2722408,7.81593901 17.5048419,9.21388416 C18.7596901,9.54246521 19.9726102,10.4829547 19.9726102,12.2606372 C19.9726102,12.6334882 19.9206992,12.9876474 19.815879,13.3113096 L18.8645104,13.0142094 C18.9373854,12.7859734 18.9743221,12.5331431 18.9743221,12.2606372 C18.9743221,10.6147806 17.5637409,10.2035624 16.95778,10.1032173 C16.8250077,10.0805905 16.7072097,10.0077911 16.6313398,9.89859199 C16.5544716,9.79037667 16.524523,9.65559941 16.5504785,9.52574103 C16.4736103,8.54196541 15.8596631,8.15829292 15.3585224,8.15829292 C15.0270908,8.15829292 14.7146266,8.31963213 14.5009929,8.60099195 C14.3911812,8.74560697 14.2154825,8.81545504 14.0268061,8.7928282 C13.8461159,8.76626625 13.6933778,8.6432943 13.6314839,8.47310112 C13.4128588,7.87594932 13.0993964,7.37422376 12.6990828,6.98366484 C12.2099216,6.50751744 10.8652275,5.4804557 8.97247321,6.26354109 C7.88234257,6.71115899 7.0298045,8.00285638 7.0298045,9.2040464 C7.0298045,9.33882366 7.03679251,9.47163337 7.05376341,9.60050798 C7.07273089,9.74118789 7.02880621,9.8818678 6.93396884,9.98811557 C6.86009551,10.0707527 6.7602667,10.1258442 6.65245158,10.1465034 C6.02353005,10.3088264 4.99828814,10.7957953 4.99828814,12.2389942 C4.99828814,13.3545957 5.80989639,14.1317785 6.53764845,14.1317785" id="Amazon-CloudWatch_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, ob = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-CloudFront_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#4D27A8" offset="0%"></stop>
            <stop stop-color="#A166FF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-CloudFront_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Networking-Content-Delivery" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M16,15.4980737 C16,15.2219556 15.775,14.9978597 15.5,14.9978597 C15.225,14.9978597 15,15.2219556 15,15.4980737 C15,15.7741919 15.225,15.9982877 15.5,15.9982877 C15.775,15.9982877 16,15.7741919 16,15.4980737 M17,15.4980737 C17,16.3254277 16.327,16.9987158 15.5,16.9987158 C14.673,16.9987158 14,16.3254277 14,15.4980737 C14,14.6707197 14.673,13.9974316 15.5,13.9974316 C16.327,13.9974316 17,14.6707197 17,15.4980737 M9,11.4963614 C9,11.2202433 8.775,10.9961474 8.5,10.9961474 C8.225,10.9961474 8,11.2202433 8,11.4963614 C8,11.7724796 8.225,11.9965755 8.5,11.9965755 C8.775,11.9965755 9,11.7724796 9,11.4963614 M10,11.4963614 C10,12.3237155 9.327,12.9970035 8.5,12.9970035 C7.673,12.9970035 7,12.3237155 7,11.4963614 C7,10.6690074 7.673,9.99571934 8.5,9.99571934 C9.327,9.99571934 10,10.6690074 10,11.4963614 M12,7.49464918 C12,7.77076733 12.225,7.99486321 12.5,7.99486321 C12.775,7.99486321 13,7.77076733 13,7.49464918 C13,7.21853103 12.775,6.99443515 12.5,6.99443515 C12.225,6.99443515 12,7.21853103 12,7.49464918 M11,7.49464918 C11,6.66729517 11.673,5.99400708 12.5,5.99400708 C13.327,5.99400708 14,6.66729517 14,7.49464918 C14,8.32200319 13.327,8.99529128 12.5,8.99529128 C11.673,8.99529128 11,8.32200319 11,7.49464918 M19,11.9965755 C19,9.73960976 17.903,7.63971125 16.101,6.33215177 C15.917,6.27312651 15.407,6.42319072 14.566,6.78434525 C14.415,6.84837265 14.287,6.90239576 14.197,6.93540989 L13.857,5.99400708 C13.935,5.96699552 14.044,5.91897498 14.173,5.86395143 C14.394,5.76991119 14.611,5.67987267 14.823,5.59983842 C13.939,5.20867105 12.979,4.99357901 12,4.99357901 C11.313,4.99357901 10.642,5.09162097 10.002,5.28470358 C9.956,5.29770915 9.915,5.32071899 9.87,5.33472499 C10.22,5.46578106 10.637,5.6348534 11.132,5.85694844 L10.724,6.76933883 C9.518,6.22810725 8.828,6.02702121 8.507,5.9519891 C6.692,7.00443943 5.429,8.82721936 5.104,10.9291187 C5.426,10.8871007 5.751,10.86209 6.097,10.8530862 L6.122,11.8535143 C5.725,11.8635185 5.363,11.9055365 5.001,11.9645618 C5.001,11.9745661 5,11.9855708 5,11.9965755 C5,14.29756 6.125,16.4174671 7.976,17.7180236 C7.775,17.0167235 7.604,16.1773644 7.604,15.3310022 C7.604,15.1749354 7.599,15.0098648 7.594,14.8427933 C7.578,14.3655891 7.562,13.8723781 7.65,13.4231859 L8.631,13.6162685 C8.564,13.9534128 8.579,14.388599 8.593,14.8097792 C8.599,14.9888558 8.604,15.1639307 8.604,15.3310022 C8.604,16.2293866 8.853,17.3548682 9.277,18.4433339 C10.504,18.9595548 11.859,19.1086186 13.154,18.8935266 C13.266,18.6874384 13.402,18.4783489 13.546,18.2662582 C13.76,17.9501229 13.981,17.6239833 14.067,17.3278566 L15.028,17.6069761 C14.938,17.9191096 14.774,18.2012303 14.601,18.4743472 C15.199,18.2352449 15.768,17.934116 16.279,17.5369461 C18.009,16.1983734 19,14.1785091 19,11.9965755 M20,11.9965755 C20,14.4906426 18.867,16.7986302 16.892,18.3272843 C16.193,18.8695163 15.416,19.2876952 14.582,19.5688155 C13.76,19.8539375 12.89,20 12,20 C10.686,20 9.381,19.6718596 8.225,19.0525946 C5.619,17.6569975 4,14.9538408 4,11.9965755 C4,11.8315048 4.004,11.6674346 4.018,11.5063657 C4.212,8.17393984 6.502,5.28270273 9.715,4.32629349 C11.729,3.71903366 14.052,3.96513896 15.91,5.01658886 C18.433,6.43019372 20,9.10433794 20,11.9965755 M11.075,8.93526559 L10.419,8.18194326 C9.903,8.63013503 9.765,8.86023349 9.534,9.24039615 C9.467,9.35144367 9.389,9.48149932 9.285,9.64056738 L10.123,10.1858007 C10.233,10.0157279 10.317,9.87766883 10.39,9.75861789 C10.594,9.42147363 10.678,9.28241413 11.075,8.93526559 M10.649,11.3663058 L10.325,12.3117103 C11.438,12.6948743 12.411,13.3071362 13.387,14.2375343 L14.076,13.5132244 C12.993,12.4797822 11.904,11.7974903 10.649,11.3663058 M13.285,9.07432509 L14.121,8.52509009 C15.083,9.99271806 15.624,11.6044077 15.73,13.3161401 L14.732,13.3781666 C14.638,11.8425096 14.15,10.3938897 13.285,9.07432509" id="Amazon-CloudFront_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, ab = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-Cognito_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#BD0816" offset="0%"></stop>
            <stop stop-color="#FF5252" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-Cognito_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Security-Identity-Compliance" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M15.188,16.891 L13.938,15.891 L14.563,15.11 L15.387,15.769 L17.084,13.223 L17.917,13.778 L15.917,16.778 C15.838,16.894 15.715,16.973 15.578,16.995 C15.551,16.998 15.526,17 15.5,17 C15.388,17 15.278,16.962 15.188,16.891 L15.188,16.891 Z M6,12 L8,12 L8,11 L6,11 L6,12 Z M6.001,10 L9.001,10 L9.001,9 L6.001,9 L6.001,10 Z M18.001,7 L18.001,6.5 C18.001,6.224 17.777,6 17.501,6 L10.501,6 C10.224,6 10.001,6.224 10.001,6.5 L10.001,7 L5,7 L5,5.6 C5,5.281 5.198,5 5.422,5 L18.578,5 C18.803,5 19.001,5.281 19.001,5.6 L19.001,7 L18.001,7 Z M15.625,12 C17.487,12 19.001,13.571 19.001,15.5 C19.001,17.43 17.487,19 15.625,19 C13.764,19 12.25,17.43 12.25,15.5 C12.25,13.571 13.764,12 15.625,12 L15.625,12 Z M20,12 L20,5.6 C20,4.718 19.362,4 18.578,4 L5.422,4 C4.638,4 4,4.718 4,5.6 L4,14.4 C4,15.283 4.638,16 5.422,16 L11.299,16 C11.545,18.244 13.379,20 15.625,20 C18.038,20 20,17.982 20,15.5 C20,13.019 18.038,11 15.625,11 C13.379,11 11.545,12.757 11.299,15 L5.422,15 C5.198,15 5,14.72 5,14.4 L5,8 L10.001,8 L10.001,12 L11.001,12 L11.001,8 L11.001,7 L17,7 L17,8 L17,10 L18.001,10 L18.001,8 L19.001,8 L19.001,12 L20,12 Z" id="Amazon-Cognito_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, lb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-DynamoDB_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#2E27AD" offset="0%"></stop>
            <stop stop-color="#527FFF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-DynamoDB_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Database" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M14.3871979,13.0634319 L15.4218955,9.61738691 C15.468467,9.46474602 15.4391067,9.29896386 15.3439388,9.17058378 C15.2487709,9.04220369 15.0979197,8.96739955 14.9379567,8.96739955 L14.2383715,8.96739955 L15.2507958,6.94566591 L17.7798316,6.94566591 L16.9881159,9.313116 C16.9374946,9.46676775 16.9628052,9.63659338 17.0589856,9.76800607 C17.153141,9.90042962 17.3060171,9.97826636 17.4690174,9.97826636 L18.095708,9.97826636 L14.3871979,13.0634319 Z M19.9697053,9.29997473 C19.8968108,9.10083397 19.7074875,8.96739955 19.4938659,8.96739955 L18.1706274,8.96739955 L18.9623432,6.59994946 C19.0129644,6.4462977 18.9876538,6.27647207 18.8914735,6.14404852 C18.7963056,6.01263584 18.644442,5.93479909 18.4814417,5.93479909 L14.9379567,5.93479909 C14.7455961,5.93479909 14.5714591,6.04296184 14.485403,6.21379833 L12.9667666,9.24639879 C12.88881,9.40308314 12.8958969,9.58908264 12.9880275,9.73768006 C13.0811706,9.88728835 13.2441709,9.97826636 13.4193203,9.97826636 L14.2576076,9.97826636 L12.9343691,14.3816022 C12.8705863,14.595906 12.9536051,14.8253728 13.1409036,14.9486985 C13.2259472,15.0042962 13.3221275,15.0326005 13.4193203,15.0326005 C13.5347366,15.0326005 13.6491406,14.9931766 13.743296,14.9153399 L19.8178417,9.86100581 C19.980842,9.72453879 20.0425999,9.50113723 19.9697053,9.29997473 L19.9697053,9.29997473 Z M14.8346894,17.6285064 C14.8346894,18.0904726 13.2775809,18.9891332 10.4235568,18.9891332 C7.56953281,18.9891332 6.01242428,18.0904726 6.01242428,17.6285064 L6.01242428,16.562042 C7.04914673,17.1786707 8.74293255,17.495072 10.4235568,17.495072 C12.1041811,17.495072 13.797967,17.1786707 14.8346894,16.562042 L14.8346894,17.6285064 Z M14.8346894,15.1235785 C14.8346894,15.5855446 13.2775809,16.4842052 10.4235568,16.4842052 C7.56953281,16.4842052 6.01242428,15.5855446 6.01242428,15.1235785 C6.01242428,15.0275461 6.08633125,14.9133182 6.21187186,14.7950468 C7.21214704,15.316654 8.74698225,15.6239575 10.4235568,15.6239575 C10.4438053,15.6239575 11.9948393,15.5916098 11.9948393,15.5916098 L11.9948393,14.580743 C11.9745908,14.580743 10.4235568,14.6130907 10.4235568,14.6130907 C8.77128043,14.6130907 7.24656947,14.2886025 6.44574187,13.7680061 C6.17542458,13.5900935 6.0134367,13.3980288 6.01242428,13.252464 L6.01242428,12.1859995 C7.04914673,12.8026283 8.74293255,13.1200404 10.4235568,13.1200404 C10.6898244,13.1200404 11.8348763,13.0391711 12.1922621,13.0138994 L12.213523,12.5054334 L12.1203799,12.0050543 C11.7761557,12.0293151 10.6786878,12.1091736 10.4235568,12.1091736 C7.56953281,12.1091736 6.01242428,11.2095021 6.01242428,10.747536 C6.01242428,10.6474602 6.09139337,10.5281779 6.22503337,10.405863 C7.01877401,10.7566338 8.57183285,11.1508719 12.3178027,11.1963609 L12.3299518,10.1854941 C9.27951741,10.1491029 7.3437622,9.88223402 6.44574187,9.39095274 C6.17542458,9.21304018 6.0134367,9.02097549 6.01242428,8.87541066 L6.01242428,7.80995704 C7.04914673,8.4265858 8.74293255,8.74298711 10.4235568,8.74298711 C10.5015135,8.74298711 12.480803,8.70659591 12.5587596,8.70356331 L12.5152254,7.69370735 C12.4079084,7.69775082 10.5187247,7.73212029 10.4235568,7.73212029 C7.56953281,7.73212029 6.01242428,6.83345969 6.01242428,6.37149356 C6.01242428,5.90952742 7.56953281,5.01086682 10.4235568,5.01086682 C11.7447705,5.01086682 13.0001766,5.21809452 13.8668118,5.5809957 L14.25862,4.64796563 C13.2573324,4.23047763 11.8956217,4 10.4235568,4 C7.72949585,4 5.00101242,4.81374779 5,6.36947182 L5,8.88147587 C5,8.88147587 5.09213061,9.46070255 5.40092001,9.80742987 C5.08808091,10.1551681 5,10.4938084 5,10.7465251 L5,13.2625727 C5.00101242,13.510235 5.09213061,13.8438211 5.39788274,14.1875158 C5.08808091,14.5342431 5,14.8718726 5,15.1235785 L5,17.6335608 C5.00506212,19.1872631 7.7315207,20 10.4235568,20 C13.1186303,20 15.8471137,19.1862522 15.8471137,17.6305282 L15.8471137,15.1235785 L14.8346894,15.1235785 Z" id="Amazon-DynamoDB_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, cb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-Elastic-Block-Store_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#1B660F" offset="0%"></stop>
            <stop stop-color="#6CAE3E" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-Elastic-Block-Store_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Storage" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M19,16.5 L20,16.5 L20,20 L16.5,20 L16.5,19 L18.293,19 L16.646,17.354 L17.354,16.646 L19,18.293 L19,16.5 Z M6.707,19 L8.5,19 L8.5,20 L5,20 L5,16.5 L6,16.5 L6,18.293 L7.646,16.646 L8.354,17.354 L6.707,19 Z M20,4 L20,7.5 L19,7.5 L19,5.707 L17.354,7.354 L16.646,6.646 L18.293,5 L16.5,5 L16.5,4 L20,4 Z M5,4 L8.5,4 L8.5,5 L6.707,5 L8.354,6.646 L7.646,7.354 L6,5.707 L6,7.5 L5,7.5 L5,4 Z M12.561,15.5 C11.004,15.5 10.17,15.156 10.092,14.996 L10.082,10.053 C10.875,10.342 11.952,10.391 12.561,10.391 C13.161,10.391 14.216,10.337 15.002,10.051 L15.011,14.946 C14.896,15.14 13.955,15.5 12.561,15.5 L12.561,15.5 Z M14.943,8.994 C14.708,9.151 13.956,9.391 12.561,9.391 C11.031,9.391 10.271,9.108 10.119,9.009 C10.322,8.809 11.216,8.5 12.561,8.5 C13.78,8.5 14.684,8.796 14.943,8.994 L14.943,8.994 Z M12.561,7.5 C11.272,7.5 9.092,7.814 9.092,8.992 L9.092,14.996 C9.092,16.392 11.747,16.5 12.561,16.5 C13.838,16.5 16,16.183 16,14.996 L16,8.992 C16,7.812 13.75,7.5 12.561,7.5 L12.561,7.5 Z" id="Amazon-Elastic-Block-Store_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, ub = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-EC2_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#C8511B" offset="0%"></stop>
            <stop stop-color="#FF9900" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-EC2_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Compute" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M15,9 L14,9 L13,9 L12,9 L11,9 L10,9 L10,10 L10,11 L10,12 L10,13 L10,14 L11,14 L12,14 L13,14 L14,14 L15,14 L15,13 L15,12 L15,11 L15,10 L15,9 Z M16,9 L17,9 L17,10 L16,10 L16,11 L17,11 L17,12 L16,12 L16,13 L17,13 L17,14 L16,14 L16,14.308 C16,14.689 15.689,15 15.308,15 L15,15 L15,16 L14,16 L14,15 L13,15 L13,16 L12,16 L12,15 L11,15 L11,16 L10,16 L10,15 L9.692,15 C9.311,15 9,14.689 9,14.308 L9,14 L8,14 L8,13 L9,13 L9,12 L8,12 L8,11 L9,11 L9,10 L8,10 L8,9 L9,9 L9,8.692 C9,8.311 9.311,8 9.692,8 L10,8 L10,7 L11,7 L11,8 L12,8 L12,7 L13,7 L13,8 L14,8 L14,7 L15,7 L15,8 L15.308,8 C15.689,8 16,8.311 16,8.692 L16,9 Z M12,19 L5,19 L5,13 L7,13 L7,12 L4.8,12 C4.358,12 4,12.342 4,12.762 L4,19.219 C4,19.65 4.351,20 4.781,20 L12.2,20 C12.642,20 13,19.658 13,19.238 L13,17 L12,17 L12,19 Z M20,4.781 L20,12.219 C20,12.65 19.649,13 19.219,13 L18,13 L18,12 L19,12 L19,5 L12,5 L12,6 L11,6 L11,4.781 C11,4.35 11.351,4 11.781,4 L19.219,4 C19.649,4 20,4.35 20,4.781 L20,4.781 Z" id="Amazon-EC2_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, hb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-Elastic-Container-Service_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#C8511B" offset="0%"></stop>
            <stop stop-color="#FF9900" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-Elastic-Container-Service_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Compute" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <g id="Icon-Service/16/Amazon-Elastic-Container-Service" transform="translate(4.000000, 4.000000)" fill="#FFFFFF">
            <path d="M14.9951095,10.0569914 L13.036578,8.5362249 L13.036578,5.70726144 C13.036578,5.5354178 12.9471428,5.37549395 12.7994239,5.28510221 L9.99577946,3.56765916 L9.99577946,1.38435098 L14.9951095,4.31065939 L14.9951095,10.0569914 Z M15.7538018,3.60043858 L9.7495813,0.0850938804 C9.59482816,-0.00529785955 9.4008843,-0.0072844912 9.24412139,0.0811206171 C9.08836337,0.169525725 8.99088899,0.333422836 8.99088899,0.512219684 L8.99088899,3.84380096 C8.99088899,4.01564459 9.08132914,4.17556844 9.22804314,4.26596018 L12.0316875,5.98340324 L12.0316875,8.77760065 C12.0316875,8.92957797 12.1030348,9.07360876 12.2246265,9.16797377 L15.1870436,11.4704798 C15.2774838,11.5410053 15.3860119,11.5767646 15.4975548,11.5767646 C15.5719167,11.5767646 15.6472834,11.5598783 15.7166209,11.5261055 C15.889462,11.4436603 16,11.26983 16,11.0801067 L16,4.02756438 C16,3.85174748 15.9065452,3.68884369 15.7538018,3.60043858 L15.7538018,3.60043858 Z M8.53466872,14.959005 L2.00489047,11.6701363 L2.00489047,4.30966608 L6.9871374,1.37143787 L6.9871374,3.55573937 L4.24780599,5.27020248 C4.10310176,5.36158753 4.0146714,5.51952475 4.0146714,5.69037507 L4.0146714,10.2566479 C4.0146714,10.4453779 4.12219468,10.6172216 4.29403095,10.7016534 L8.25631406,12.6425925 C8.39699873,12.7121246 8.56481544,12.710138 8.70650499,12.6396126 L11.816641,11.0751401 L13.9058083,12.8154295 L8.53466872,14.959005 Z M12.2085483,10.1036773 C12.0558049,9.97553953 11.8357339,9.95169995 11.6568634,10.0410984 L8.47538018,11.6413302 L5.01956187,9.94872 L5.01956187,5.96254361 L7.75788839,4.2480805 C7.90359751,4.15669544 7.99202787,3.99875822 7.99202787,3.8279079 L7.99202787,0.497319947 C7.99202787,0.318523099 7.89455349,0.153632672 7.73779058,0.0652275639 C7.57901789,-0.0241708602 7.38507403,-0.0211909127 7.23233068,0.0711874588 L1.24519327,3.60043858 C1.09345481,3.689837 1,3.85174748 1,4.02756438 L1,11.974091 C1,12.1608343 1.1055135,12.3316847 1.2743351,12.4161165 L8.28244121,15.9463609 C8.35278355,15.9821203 8.431165,16 8.51055135,16 C8.57385945,16 8.63716755,15.9880802 8.69846587,15.9642406 L15.0564079,13.4283053 C15.2192001,13.3627465 15.3367723,13.2177224 15.3649092,13.0448854 C15.3920413,12.8730418 15.3267234,12.6992115 15.1920681,12.5869668 L12.2085483,10.1036773 Z" id="Amazon-Elastic-Container-Service_Icon_16_Squid"></path>
        </g>
    </g>
</svg>`, nu = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-Elastic-File-System_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#1B660F" offset="0%"></stop>
            <stop stop-color="#6CAE3E" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-Elastic-File-System_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Storage" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M19,18.293 L17.354,16.647 L16.646,17.354 L18.293,19 L17,19 L17,20 L19.5,20 C19.776,20 20,19.776 20,19.5 L20,17 L19,17 L19,18.293 Z M6.646,16.647 L5,18.293 L5,17 L4,17 L4,19.5 C4,19.776 4.224,20 4.5,20 L7,20 L7,19 L5.707,19 L7.354,17.354 L6.646,16.647 Z M19.5,4 L17,4 L17,5 L18.293,5 L16.646,6.647 L17.354,7.354 L19,5.707 L19,7 L20,7 L20,4.5 C20,4.224 19.776,4 19.5,4 L19.5,4 Z M5,5.707 L6.646,7.354 L7.354,6.647 L5.707,5 L7,5 L7,4 L4.5,4 C4.224,4 4,4.224 4,4.5 L4,7 L5,7 L5,5.707 Z M15,12.117 C15,12.088 14.976,12.062 14.962,12.048 C14.923,12.012 14.872,11.989 14.854,11.999 L11.487,12 C11.211,12 10.987,11.776 10.987,11.5 L10.987,11.493 L10.451,11.498 C10.449,11.506 10.448,11.513 10.447,11.52 C10.447,11.795 10.225,12 9.948,12 L9.25,12 C9.103,11.989 9.002,12.031 8.979,12.054 L8.998,16 L15,16 L15,12.117 Z M15.644,11.317 C15.874,11.532 16,11.815 16,12.117 L16,16.5 C16,16.776 15.776,17 15.5,17 L8.5,17 C8.224,17 8,16.776 8,16.5 L8,12 C8,11.742 8.105,11.501 8.297,11.323 C8.584,11.055 8.992,10.981 9.284,11.001 L9.555,11.001 C9.649,10.751 9.827,10.5 10.156,10.5 L11.323,10.5 C11.637,10.557 11.803,10.779 11.89,11 L14.82,11 C15.096,10.974 15.41,11.099 15.644,11.317 L15.644,11.317 Z M16.131,10.972 C15.91,10.926 15.747,10.737 15.734,10.512 C15.687,9.71 15.266,9.425 14.918,9.425 C14.691,9.425 14.477,9.539 14.328,9.737 C14.218,9.884 14.035,9.959 13.854,9.932 C13.671,9.904 13.519,9.779 13.457,9.606 C13.292,9.144 13.055,8.757 12.752,8.458 C12.384,8.091 11.368,7.305 9.944,7.903 C9.141,8.241 8.486,9.251 8.486,10.155 C8.486,10.259 8.495,10.363 8.507,10.463 C8.538,10.713 8.377,10.948 8.131,11.009 C7.567,11.149 6.896,11.535 6.896,12.581 C6.896,12.582 6.9,12.709 6.9,12.709 C6.921,13.076 7.082,13.432 7.354,13.704 L6.646,14.411 C6.201,13.965 5.937,13.378 5.901,12.758 L5.896,12.581 C5.896,11.444 6.482,10.567 7.486,10.168 L7.486,10.155 C7.486,8.841 8.377,7.477 9.559,6.981 C10.936,6.404 12.393,6.692 13.456,7.748 C13.712,8.001 13.932,8.296 14.113,8.629 C14.996,8.154 16.402,8.511 16.688,10.083 C17.951,10.46 18.641,11.342 18.641,12.595 C18.641,13.72 18.123,14.543 17.184,14.914 L16.816,13.983 C17.379,13.762 17.641,13.32 17.641,12.595 C17.641,12.272 17.641,11.29 16.131,10.972 L16.131,10.972 Z" id="Amazon-Elastic-File-System_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, db = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-ElastiCache_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#2E27AD" offset="0%"></stop>
            <stop stop-color="#527FFF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-ElastiCache_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Database" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M10,13 L15,13 L15,11 L10,11 L10,13 Z M10,16 L15,16 L15,14 L10,14 L10,16 Z M10,19 L15,19 L15,17 L10,17 L10,19 Z M16,10.5 L16,19.5 C16,19.777 15.776,20 15.5,20 L9.5,20 C9.224,20 9,19.777 9,19.5 L9,10.5 C9,10.224 9.224,10 9.5,10 L15.5,10 C15.776,10 16,10.224 16,10.5 L16,10.5 Z M17,12 L18,12 L18,6.5 C18,6.224 17.776,6 17.5,6 L15.5,6 C15.224,6 15,6.224 15,6.5 L15,9 L16,9 L16,7 L17,7 L17,12 Z M14,9 L14,6.5 C14,6.224 13.776,6 13.5,6 L11.5,6 C11.224,6 11,6.224 11,6.5 L11,9 L12,9 L12,7 L13,7 L13,9 L14,9 Z M9,9 L10,9 L10,6.5 C10,6.224 9.776,6 9.5,6 L7.5,6 C7.224,6 7,6.224 7,6.5 L7,12 L8,12 L8,7 L9,7 L9,9 Z M20,4.5 L20,14.5 C20,14.777 19.776,15 19.5,15 L17,15 L17,14 L19,14 L19,5 L6,5 L6,14 L8,14 L8,15 L5.5,15 C5.224,15 5,14.777 5,14.5 L5,4.5 C5,4.224 5.224,4 5.5,4 L19.5,4 C19.776,4 20,4.224 20,4.5 L20,4.5 Z" id="Amazon-ElastiCache_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, pb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_AWS-Elastic-Beanstalk_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#C8511B" offset="0%"></stop>
            <stop stop-color="#FF9900" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_AWS-Elastic-Beanstalk_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Compute" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M14.9985007,13.6428238 C14.9985007,13.373991 14.7736132,13.1558078 14.4987506,13.1558078 C14.2238881,13.1558078 13.9990005,13.373991 13.9990005,13.6428238 C13.9990005,13.9116567 14.2238881,14.1298398 14.4987506,14.1298398 C14.7736132,14.1298398 14.9985007,13.9116567 14.9985007,13.6428238 M11.0004998,9.7466957 C11.0004998,10.0155285 11.2253873,10.2337117 11.5002499,10.2337117 C11.7751124,10.2337117 12,10.0155285 12,9.7466957 C12,9.47786286 11.7751124,9.25967968 11.5002499,9.25967968 C11.2253873,9.25967968 11.0004998,9.47786286 11.0004998,9.7466957 M8.001999,12.6687918 C8.001999,12.9376246 8.22688656,13.1558078 8.50174913,13.1558078 C8.77661169,13.1558078 9.00149925,12.9376246 9.00149925,12.6687918 C9.00149925,12.399959 8.77661169,12.1817758 8.50174913,12.1817758 C8.22688656,12.1817758 8.001999,12.399959 8.001999,12.6687918 M15.998001,13.6428238 C15.998001,14.2769187 15.5792104,14.8126363 14.9985007,15.0142609 L14.9985007,16.5649199 C14.9985007,16.8337528 14.7746127,17.0519359 14.4987506,17.0519359 L12,17.0519359 L12,19 L11.0004998,19 L11.0004998,16.0779039 L8.50174913,16.0779039 C8.22588706,16.0779039 8.001999,15.8597207 8.001999,15.5908879 L8.001999,14.0402289 C7.42128936,13.8386043 7.00249875,13.3028866 7.00249875,12.6687918 C7.00249875,11.8632673 7.67516242,11.2077437 8.50174913,11.2077437 C9.32833583,11.2077437 10.0009995,11.8632673 10.0009995,12.6687918 C10.0009995,13.3028866 9.5822089,13.8386043 9.00149925,14.0402289 L9.00149925,15.1038719 L11.0004998,15.1038719 L11.0004998,11.1181328 C10.4197901,10.9165082 10.0009995,10.3807906 10.0009995,9.7466957 C10.0009995,8.94117121 10.6736632,8.28564765 11.5002499,8.28564765 C12.3268366,8.28564765 12.9995002,8.94117121 12.9995002,9.7466957 C12.9995002,10.3807906 12.5807096,10.9165082 12,11.1181328 L12,16.0779039 L13.9990005,16.0779039 L13.9990005,15.0142609 C13.4182909,14.8126363 12.9995002,14.2769187 12.9995002,13.6428238 C12.9995002,12.8372993 13.6721639,12.1817758 14.4987506,12.1817758 C15.3253373,12.1817758 15.998001,12.8372993 15.998001,13.6428238 M20,12.0590477 C20,13.8054872 18.8965517,14.9392605 17.0504748,15.0892614 L16.9665167,14.1191255 C17.894053,14.043151 19.0004998,13.6243172 19.0004998,12.0590477 C19.0004998,10.9369628 18.3148426,10.2337117 16.9635182,9.96974904 C16.7406297,9.92591759 16.5767116,9.74182554 16.5627186,9.52072027 C16.4987506,8.45805132 15.888056,8.08207496 15.3843078,8.08207496 C15.0474763,8.08207496 14.7306347,8.23889412 14.5167416,8.51357115 C14.4067966,8.65480579 14.2218891,8.7249361 14.0449775,8.7005853 C13.864068,8.6733124 13.7131434,8.55350646 13.6501749,8.38694698 C13.4312844,7.80739793 13.1174413,7.32232997 12.7186407,6.94635361 C12.2278861,6.48174033 10.8795602,5.48530556 8.97751124,6.24505055 C7.88805597,6.67752077 7.03448276,7.9281779 7.03448276,9.09312021 C7.03448276,9.22169244 7.04247876,9.3512387 7.05847076,9.47786286 C7.08945527,9.7223449 6.92853573,9.9502684 6.68265867,10.0106584 C6.05397301,10.1616333 4.99950025,10.6272207 4.99950025,12.037619 L5.00449775,12.1652172 C5.06246877,13.1850288 5.93203398,14.011982 7.02848576,14.1181515 L6.93053473,15.0873133 C5.34732634,14.9353643 4.09095452,13.7139282 4.007996,12.2470359 L4,12.037619 C4,10.6827405 4.75262369,9.64150024 6.03598201,9.18467922 C6.03498251,9.15448423 6.03498251,9.1233152 6.03498251,9.09312021 C6.03498251,7.53466896 7.13743128,5.92361998 8.59970015,5.34309689 C10.2988506,4.66614462 12.0989505,5.00315971 13.4132934,6.24602458 C13.7631184,6.57524741 14.0589705,6.96583425 14.2978511,7.40999286 C14.6216892,7.21323839 14.9945027,7.10804293 15.3843078,7.10804293 C16.2858571,7.10804293 17.2903548,7.73337149 17.5192404,9.09701634 C19.1224388,9.52072027 20,10.5619605 20,12.0590477" id="AWS-Elastic-Beanstalk_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, fb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-Glacier_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#1B660F" offset="0%"></stop>
            <stop stop-color="#6CAE3E" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-Glacier_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Storage" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <polygon id="Amazon-Glacier_Icon_16_Squid" fill="#FFFFFF" points="18.3212076 12 20 13.6022806 19.2789148 14.2914755 17.3889984 12.4867195 13.3827429 12.4867195 15.3858707 15.7973856 17.9683144 16.4573773 17.7051744 17.3977194 15.4103488 16.8107356 14.7963555 19 13.8100904 18.7488527 14.5026178 16.2831317 12.50051 12.973439 10.4984021 16.2831317 11.1909295 18.7488527 10.2046644 19 9.58965119 16.8107356 7.29482559 17.3977194 7.03270551 16.4573773 9.61514925 15.7973856 11.618277 12.4867195 7.61202149 12.4867195 5.7210852 14.2914755 5 13.6022806 6.67981233 12 5 10.3977194 5.7210852 9.70852454 7.61202149 11.5132805 11.618277 11.5132805 9.61514925 8.20261438 7.03270551 7.54262272 7.29482559 6.60228063 9.58965119 7.18926436 10.2046644 5 11.1909295 5.25114727 10.4984021 7.71686831 12.50051 11.026561 14.5026178 7.71686831 13.8100904 5.25114727 14.7963555 5 15.4103488 7.18926436 17.7051744 6.60228063 17.9683144 7.54262272 15.3858707 8.20261438 13.3827429 11.5132805 17.3889984 11.5132805 19.2789148 9.70852454 20 10.3977194"></polygon>
    </g>
</svg>`, gb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_AWS-Identity-and-Access-Management_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#BD0816" offset="0%"></stop>
            <stop stop-color="#FF5252" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_AWS-Identity-and-Access-Management_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Security-Identity-Compliance" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M5,18 L19,18 L19,7 L5,7 L5,18 Z M20,6.5 L20,18.5 C20,18.776 19.776,19 19.5,19 L4.5,19 C4.224,19 4,18.776 4,18.5 L4,6.5 C4,6.224 4.224,6 4.5,6 L19.5,6 C19.776,6 20,6.224 20,6.5 L20,6.5 Z M7,14.998 L10.998,15 L11,12.002 L7.002,12 L7,14.998 Z M8,11 L10,11.001 L10,9.854 C10,9.264 9.645,8.939 9,8.939 L8.999,8.939 C8.67,8.939 8.407,9.027 8.239,9.193 C8.042,9.388 8.001,9.659 8.001,9.852 L8,11 Z M6.146,15.852 C6.053,15.758 6,15.63 6,15.498 L6.002,11.5 C6.002,11.224 6.226,11 6.502,11 L7,11 L7.001,9.852 C7.001,9.301 7.187,8.827 7.537,8.481 C7.896,8.127 8.401,7.939 8.999,7.939 L9,7.939 C10.196,7.939 11,8.708 11,9.854 L11,11.002 L11.5,11.002 C11.633,11.002 11.76,11.055 11.854,11.148 C11.947,11.242 12,11.37 12,11.502 L11.998,15.5 C11.998,15.776 11.774,16 11.498,16 L6.5,15.998 C6.367,15.998 6.24,15.945 6.146,15.852 L6.146,15.852 Z M14,14 L16,14 L16,13 L14,13 L14,14 Z M14,11 L18,11 L18,10 L14,10 L14,11 Z" id="AWS-Identity-and-Access-Management_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, mb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-Kinesis_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#4D27A8" offset="0%"></stop>
            <stop stop-color="#A166FF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-Kinesis_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Analytics" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M6.7337492,17.8414023 L7.72616432,17.8414023 C7.72616432,16.9338898 7.72616432,14.8073456 19,14.8073456 L19,13.8056761 C8.21939463,13.8056761 6.7337492,15.7449082 6.7337492,17.8414023 M8.03778266,20 L9.03019777,20 C9.03019777,18.9632721 9.03019777,16.5342237 19,16.5342237 L19,15.5325543 C9.3408237,15.5325543 8.03778266,17.7903172 8.03778266,20 M5.99241511,9.38931553 L5,9.38931553 C5,10.8287145 5.99340753,11.9105175 9.81718296,12.4994992 C5.99340753,13.0894825 5,14.1712855 5,15.6096828 L5.99241511,15.6096828 C5.99241511,14.3956594 7.47111363,13.0003339 19,13.0003339 L19,11.9986644 C7.47111363,11.9986644 5.99241511,10.6043406 5.99241511,9.38931553 M7.72616432,7.15859766 L6.7337492,7.15859766 C6.7337492,9.25409015 8.21939463,11.1943239 19,11.1943239 L19,10.1926544 C7.72616432,10.1926544 7.72616432,8.06611018 7.72616432,7.15859766 M19,8.46577629 L19,9.46744574 C9.3408237,9.46744574 8.03778266,7.20868114 8.03778266,5 L9.03019777,5 C9.03019777,6.03672788 9.03019777,8.46577629 19,8.46577629" id="Amazon-Kinesis_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, xb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_AWS-Lambda_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#C8511B" offset="0%"></stop>
            <stop stop-color="#FF9900" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_AWS-Lambda_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Compute" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M8.35471698,19 L5.33377354,19 L8.87677893,11.806 L10.3893141,14.832 L8.35471698,19 Z M9.3369363,10.435 C9.25026989,10.262 9.06971487,10.153 8.87265196,10.153 L8.87058847,10.153 C8.67352556,10.153 8.49297054,10.264 8.40733588,10.437 L4.05028527,19.285 C3.97393629,19.439 3.98528546,19.622 4.07917407,19.767 C4.17409443,19.912 4.33814156,20 4.51560135,20 L8.68074777,20 C8.8809059,20 9.06249267,19.889 9.14812734,19.714 L11.4282793,15.043 C11.4943109,14.907 11.4932791,14.748 11.4262158,14.611 L9.3369363,10.435 Z M18.968257,19 L15.7987426,19 L10.1747116,7.289 C10.0901087,7.113 9.90749017,7 9.70733203,7 L7.61598901,7 L7.6180525,5 L11.7883576,5 L17.386595,16.71 C17.471198,16.887 17.6548482,17 17.8550063,17 L18.968257,17 L18.968257,19 Z M19.4841285,16 L18.1841324,16 L12.5869267,4.29 C12.5023238,4.113 12.3186735,4 12.1174836,4 L7.10321275,4 C6.81845169,4 6.58734126,4.224 6.58734126,4.5 L6.58424603,7.5 C6.58424603,7.632 6.63892841,7.759 6.73591225,7.854 C6.83186434,7.947 6.9628957,8 7.10011752,8 L9.37820602,8 L15.002237,19.711 C15.0868399,19.887 15.2694584,20 15.4696166,20 L19.4841285,20 C19.7688896,20 20,19.776 20,19.5 L20,16.5 C20,16.224 19.7688896,16 19.4841285,16 L19.4841285,16 Z" id="AWS-Lambda_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, Lb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-Lightsail_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#C8511B" offset="0%"></stop>
            <stop stop-color="#FF9900" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-Lightsail_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Compute" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M20,12.5 C20,16.636 16.636,20 12.5,20 C9.458,20 6.738,18.185 5.571,15.376 L6.495,14.992 C7.506,17.427 9.863,19 12.5,19 C16.084,19 19,16.084 19,12.5 C19,8.916 16.084,6 12.5,6 C9.826,6 7.386,7.677 6.429,10.173 L5.495,9.815 C6.6,6.935 9.415,5 12.5,5 C16.636,5 20,8.364 20,12.5 L20,12.5 Z M7,13 L10,13 L10,12 L7,12 L7,13 Z M4,13 L6,13 L6,12 L4,12 L4,13 Z M14.193,9.163 C14.792,10.014 15.392,11.192 15.392,12.501 C15.392,13.794 14.737,15.02 14.188,15.82 C13.856,14.343 13.213,13.192 12.331,12.501 C13.217,11.807 13.862,10.65 14.193,9.163 L14.193,9.163 Z M13.382,17.081 C13.402,17.277 13.537,17.443 13.725,17.504 C13.775,17.521 13.827,17.528 13.879,17.528 C14.018,17.528 14.153,17.47 14.25,17.363 C14.753,16.806 16.392,14.81 16.392,12.501 C16.392,10.33 15.051,8.521 14.251,7.636 C14.118,7.49 13.913,7.434 13.725,7.496 C13.537,7.557 13.403,7.723 13.383,7.919 C13.163,10 12.334,11.541 11.165,12.042 C10.981,12.12 10.862,12.301 10.862,12.501 C10.862,12.701 10.981,12.882 11.165,12.96 C12.334,13.462 13.162,15.002 13.382,17.081 L13.382,17.081 Z" id="Amazon-Lightsail-Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, yb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-RDS_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#2E27AD" offset="0%"></stop>
            <stop stop-color="#527FFF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-RDS_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Database" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M5.707,5 L7.853,7.146 L7.146,7.854 L5,5.707 L5,7.5 L4,7.5 L4,4.5 C4,4.224 4.224,4 4.5,4 L7.5,4 L7.5,5 L5.707,5 Z M7.853,16.854 L5.707,19 L7.5,19 L7.5,20 L4.5,20 C4.224,20 4,19.776 4,19.5 L4,16.5 L5,16.5 L5,18.293 L7.146,16.146 L7.853,16.854 Z M5,12 C5,12.75 5.966,13.542 7.519,14.069 L7.199,15.016 C5.166,14.328 4,13.228 4,12 C4,10.772 5.166,9.672 7.199,8.984 L7.519,9.931 C5.966,10.458 5,11.25 5,12 L5,12 Z M19,16.5 L20,16.5 L20,19.5 C20,19.776 19.776,20 19.5,20 L16.5,20 L16.5,19 L18.293,19 L16.146,16.854 L16.853,16.146 L19,18.293 L19,16.5 Z M20,4.5 L20,7.5 L19,7.5 L19,5.707 L16.853,7.854 L16.146,7.146 L18.293,5 L16.5,5 L16.5,4 L19.5,4 C19.776,4 20,4.224 20,4.5 L20,4.5 Z M20,12 C20,13.228 18.834,14.328 16.801,15.016 L16.48,14.069 C18.034,13.542 19,12.75 19,12 C19,11.25 18.034,10.458 16.48,9.931 L16.801,8.984 C18.834,9.672 20,10.772 20,12 L20,12 Z M12,15.402 C10.81,15.402 10.087,15.104 10,15.032 L10,10.651 C10.564,10.886 11.294,11 12,11 C12.708,11 13.439,10.886 14.004,10.65 L14.02,14.952 C13.913,15.104 13.19,15.402 12,15.402 L12,15.402 Z M12,9 C13.174,9 13.858,9.336 13.987,9.5 C13.858,9.664 13.174,10 12,10 C10.771,10 10.08,9.632 10,9.531 L10,9.521 C10.08,9.368 10.771,9 12,9 L12,9 Z M12,8 C10.555,8 9,8.469 9,9.5 L9,15.032 C9,15.979 10.507,16.402 12,16.402 C13.493,16.402 15,15.979 15,15.032 L15,9.5 C15,8.469 13.445,8 12,8 L12,8 Z" id="Amazon-RDS_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, vb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-Redshift_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#4D27A8" offset="0%"></stop>
            <stop stop-color="#A166FF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-Redshift_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Analytics" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M14.4737051,10.7348035 C14.4737051,10.6013584 14.5788847,10.4925493 14.7078785,10.4925493 C14.8368724,10.4925493 14.9430443,10.6013584 14.9430443,10.7348035 C14.9430443,11.0016937 14.4737051,11.0016937 14.4737051,10.7348035 M13.2562016,13.756822 C13.2562016,13.6233768 13.3623735,13.5145678 13.4913673,13.5145678 C13.6203612,13.5145678 13.7245485,13.6233768 13.7245485,13.756822 C13.7245485,14.0247387 13.2562016,14.0247387 13.2562016,13.756822 M10.3349871,13.25281 C10.3349871,13.1193649 10.441159,13.0105559 10.5691605,13.0105559 C10.6981544,13.0105559 10.8043263,13.1193649 10.8043263,13.25281 C10.8043263,13.5207268 10.3349871,13.5207268 10.3349871,13.25281 M9.11847589,16.0233358 C9.11847589,15.8898907 9.22365549,15.7810816 9.35264934,15.7810816 C9.48164318,15.7810816 9.58583052,15.8898907 9.58583052,16.0233358 C9.58583052,16.290226 9.11847589,16.290226 9.11847589,16.0233358 M14.7078785,9.46604849 C14.0321492,9.46604849 13.4814447,10.0347299 13.4814447,10.7348035 C13.4814447,11.0899728 13.6253225,11.4092146 13.8525501,11.6401772 L13.5270887,12.4952524 C13.5141893,12.4952524 13.5032745,12.4880669 13.4913673,12.4880669 C13.0359198,12.4880669 12.6529073,12.7580366 12.4405636,13.1409215 L11.7420123,12.9766813 C11.6159952,12.4131324 11.1506251,11.984055 10.5691605,11.984055 C9.89343124,11.984055 9.34272673,12.5527365 9.34272673,13.25281 C9.34272673,13.5145678 9.43897599,13.7455304 9.57094662,13.9477511 L9.22762453,14.7802433 C8.6124231,14.8490188 8.12621552,15.3694548 8.12621552,16.0233358 C8.12621552,16.7234094 8.67592776,17.2920908 9.35264934,17.2920908 C10.0293709,17.2920908 10.5780909,16.7234094 10.5780909,16.0233358 C10.5780909,15.654822 10.4203215,15.3294212 10.1762254,15.097432 L10.4262751,14.4917965 C10.4748958,14.4989821 10.5185553,14.5215651 10.5691605,14.5215651 C10.9779718,14.5215651 11.3222862,14.3008674 11.5455448,13.9836786 L12.3453066,14.1715283 C12.5129986,14.6663017 12.9575313,15.025577 13.4913673,15.025577 C14.1670966,15.025577 14.7168089,14.455869 14.7168089,13.756822 C14.7168089,13.4478452 14.5967454,13.1737695 14.4181385,12.9530718 L14.7862671,11.9871345 C15.4242905,11.942995 15.9353046,11.4061351 15.9353046,10.7348035 C15.9353046,10.0347299 15.3846001,9.46604849 14.7078785,9.46604849 M12,18.9734992 C9.35562612,18.9734992 7.99226037,18.1461395 7.99226037,17.7930232 L7.99226037,8.59044328 C8.95276841,9.14885973 10.4808494,9.43730646 12,9.43730646 C13.5191506,9.43730646 15.0472316,9.14885973 16.0077396,8.59044328 L16.0077396,17.7930232 C16.0077396,18.1461395 14.6443739,18.9734992 12,18.9734992 M12,5.99236968 C14.4866045,5.99236968 16.0077396,6.77558981 16.0077396,7.20261416 C16.0077396,7.628612 14.4866045,8.41080563 12,8.41080563 C9.51339551,8.41080563 7.99226037,7.628612 7.99226037,7.20261416 C7.99226037,6.77558981 9.51339551,5.99236968 12,5.99236968 M17,7.20261416 C17,4.26579528 7,4.26579528 7,7.20261416 C7,7.20466716 7.00099226,7.20672016 7.00099226,7.20877316 L7,7.20877316 L7,17.7930232 C7,19.2424424 9.51538004,20 12,20 C14.48462,20 17,19.2424424 17,17.7930232 L17,7.20877316 L16.9990077,7.20877316 C16.9990077,7.20672016 17,7.20466716 17,7.20261416" id="Amazon-Redshift_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, bb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Icon-Architecture/16/Arch_Amazon-Simple-Storage-Service_16</title>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#1B660F" offset="0%"></stop>
            <stop stop-color="#6CAE3E" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-Simple-Storage-Service_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Rectangle" fill="url(#linearGradient-1)">
            <rect x="0" y="0" width="24" height="24"></rect>
        </g>
        <g id="Icon-Service/16/Amazon-Simple-Storage-Service_16" transform="translate(4.000000, 4.000000)" fill="#FFFFFF">
            <path d="M13.9082,9.0508 L13.9492,8.8068 C14.2152,8.9598 14.4192,9.0888 14.5642,9.1918 C14.3942,9.1638 14.1662,9.1138 13.9082,9.0508 L13.9082,9.0508 Z M12.0492,14.0928 C11.9992,14.3958 10.9792,14.9998 7.4782,14.9998 C4.0442,14.9998 3.0432,14.3968 2.9932,14.0898 L1.2592,3.9648 C2.6962,4.6678 5.1522,4.9998 7.5002,4.9998 C9.8502,4.9998 12.3112,4.6658 13.7482,3.9618 L12.9402,8.7748 C11.3852,8.2668 9.5682,7.3978 8.6442,6.9548 L8.4742,6.8728 C8.4092,6.3838 8.0072,5.9998 7.5002,5.9998 C6.9482,5.9998 6.5002,6.4488 6.5002,6.9998 C6.5002,7.5508 6.9482,7.9998 7.5002,7.9998 C7.7212,7.9998 7.9142,7.9138 8.0792,7.7928 L8.2132,7.8568 C9.1842,8.3228 11.1192,9.2468 12.7732,9.7698 L12.0492,14.0928 Z M7.5002,0.9998 C11.7612,0.9998 13.9712,2.0368 14.0002,2.4898 L14.0002,2.5188 C13.9462,2.9768 11.7352,3.9998 7.5002,3.9998 C3.2702,3.9998 1.0592,2.9798 1.0002,2.5208 L1.0002,2.4888 C1.0302,2.0348 3.2422,0.9998 7.5002,0.9998 L7.5002,0.9998 Z M15.0002,2.4998 C15.0002,0.7818 11.1122,-0.0002 7.5002,-0.0002 C3.8872,-0.0002 0.0002,0.7818 0.0002,2.4998 L0.0472,2.8158 L2.0072,14.2548 C2.1972,15.4248 3.9362,15.9998 7.4782,15.9998 C12.2072,15.9998 12.9142,14.9908 13.0352,14.2568 L13.7422,10.0428 C14.3202,10.1828 14.7312,10.2388 15.0232,10.2388 C15.4852,10.2388 15.6612,10.1038 15.7832,9.9598 C15.9292,9.7858 15.9852,9.5668 15.9422,9.3428 C15.8492,8.8678 15.3302,8.4158 14.1252,7.7598 L14.9542,2.8138 L15.0002,2.4998 Z" id="Amazon-Simple-Storage-Service-Icon_16_Squid"></path>
        </g>
    </g>
</svg>`, _b = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_AWS-Simple-Notification-Service_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#B0084D" offset="0%"></stop>
            <stop stop-color="#FF4F8B" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_AWS-Simple-Notification-Service_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Application-Integration" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M6.4951189,11.5607705 C6.4951189,11.9743992 6.15969962,12.3097195 5.74818523,12.3097195 C5.33667084,12.3097195 5.00125156,11.9743992 5.00125156,11.5607705 C5.00125156,11.1471419 5.33667084,10.8118215 5.74818523,10.8118215 C6.15969962,10.8118215 6.4951189,11.1471419 6.4951189,11.5607705 L6.4951189,11.5607705 Z M12.4395494,18.9960469 C9.28861076,18.9960469 6.52015019,16.6006149 5.7261577,13.3116647 C5.73316646,13.3116647 5.74017522,13.3136726 5.74818523,13.3136726 C6.71239049,13.3136726 7.49637046,12.5275773 7.49637046,11.5607705 C7.49637046,10.6441614 6.78948686,9.89822426 5.89436796,9.82292778 C6.84155194,6.99579595 9.47083855,5.00395307 12.4395494,5.00395307 C13.7481852,5.00395307 14.8715895,5.23486227 15.7787234,5.68965301 L16.2272841,4.79111502 C15.1789737,4.26604756 13.9043805,4 12.4395494,4 C8.82202753,4 5.62302879,6.56610403 4.74593242,10.1291335 C4.29637046,10.4463826 4,10.9684382 4,11.5607705 C4,12.0958775 4.24530663,12.5697434 4.62377972,12.8910083 C5.29461827,16.9570183 8.61677096,20 12.4395494,20 C13.58398,20 14.9296621,19.6395808 16.2282854,18.9850035 L15.7777222,18.0874694 C14.6162703,18.673778 13.4307885,18.9960469 12.4395494,18.9960469 L12.4395494,18.9960469 Z M8.75994994,9.96046935 L12.2392991,9.96046935 L11.0217772,12.8056723 C10.9947434,12.8689214 10.9807259,12.9361862 10.9807259,13.0034511 L10.9807259,14.7061555 L10.0455569,15.1910648 L10.0455569,13.0034511 C10.0455569,12.9341783 10.0305382,12.8659095 10.0035044,12.8016565 L8.75994994,9.96046935 Z M9.28460576,16.4450022 C9.36370463,16.4931919 9.45481852,16.5172868 9.54493116,16.5172868 C9.62403004,16.5172868 9.70212766,16.4992157 9.77421777,16.4620694 L11.7116395,15.4581163 C11.8778473,15.3717764 11.9819775,15.2001004 11.9819775,15.0123612 L11.9819775,13.1068583 L13.4588235,9.65727552 C13.5249061,9.5016628 13.5098874,9.32295915 13.4177722,9.18240572 C13.3246558,9.04185229 13.1674593,8.95651628 12.9992491,8.95651628 L7.99299124,8.95651628 C7.82377972,8.95651628 7.66658323,9.04285625 7.57346683,9.18441363 C7.48135169,9.32597101 7.46733417,9.50567861 7.53441802,9.66028738 L9.04430538,13.1088662 L9.04430538,16.0153103 C9.04430538,16.1910021 9.13541927,16.3536425 9.28460576,16.4450022 L9.28460576,16.4450022 Z M18.2518148,14.823618 C18.6633292,14.823618 18.9987484,15.1589383 18.9987484,15.572567 C18.9987484,15.9861956 18.6633292,16.3225199 18.2518148,16.3225199 C17.8403004,16.3225199 17.5048811,15.9861956 17.5048811,15.572567 C17.5048811,15.1589383 17.8403004,14.823618 18.2518148,14.823618 L18.2518148,14.823618 Z M18.2518148,6.75384326 C18.6633292,6.75384326 18.9987484,7.09016753 18.9987484,7.50279224 C18.9987484,7.91642091 18.6633292,8.25274518 18.2518148,8.25274518 C17.8403004,8.25274518 17.5048811,7.91642091 17.5048811,7.50279224 C17.5048811,7.09016753 17.8403004,6.75384326 18.2518148,6.75384326 L18.2518148,6.75384326 Z M18.2518148,10.8118215 C18.6633292,10.8118215 18.9987484,11.1471419 18.9987484,11.5607705 C18.9987484,11.9743992 18.6633292,12.3097195 18.2518148,12.3097195 C17.8403004,12.3097195 17.5048811,11.9743992 17.5048811,11.5607705 C17.5048811,11.1471419 17.8403004,10.8118215 18.2518148,10.8118215 L18.2518148,10.8118215 Z M16.0030038,12.0627471 L16.5857322,12.0627471 C16.8030038,12.7835854 17.4628285,13.3136726 18.2518148,13.3136726 C19.21602,13.3136726 20,12.5275773 20,11.5607705 C20,10.5939637 19.21602,9.80786848 18.2518148,9.80786848 C17.4628285,9.80786848 16.8030038,10.3379557 16.5857322,11.058794 L16.0030038,11.058794 L16.0030038,8.00476878 L16.5857322,8.00476878 C16.8030038,8.72661103 17.4628285,9.25669825 18.2518148,9.25669825 C19.21602,9.25669825 20,8.46959905 20,7.50279224 C20,6.5369894 19.21602,5.74989019 18.2518148,5.74989019 C17.4628285,5.74989019 16.8030038,6.27997741 16.5857322,7.00081571 L15.502378,7.00081571 C15.2260325,7.00081571 15.0017522,7.2257012 15.0017522,7.50279224 L15.0017522,11.058794 L14.0005006,11.058794 L14.0005006,12.0627471 L15.0017522,12.0627471 L15.0017522,15.572567 C15.0017522,15.849658 15.2260325,16.0745435 15.502378,16.0745435 L16.5857322,16.0745435 C16.8030038,16.7953818 17.4628285,17.326473 18.2518148,17.326473 C19.21602,17.326473 20,16.5393738 20,15.572567 C20,14.6057602 19.21602,13.8196649 18.2518148,13.8196649 C17.4628285,13.8196649 16.8030038,14.3497521 16.5857322,15.0705904 L16.0030038,15.0705904 L16.0030038,12.0627471 Z" id="AWS-Simple-Notification-Service_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, wb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_AWS-Simple-Queue-Service_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#B0084D" offset="0%"></stop>
            <stop stop-color="#FF4F8B" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_AWS-Simple-Queue-Service_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Application-Integration" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M8.00538392,12.9850432 L9.00704291,12.9850432 L9.00704291,11.9942745 L8.00538392,11.9942745 L8.00538392,12.9850432 Z M15.0169969,12.986034 L16.0186559,12.986034 L16.0186559,11.9952653 L15.0169969,11.9952653 L15.0169969,12.986034 Z M12.7903089,11.2234565 C12.2824678,11.3522564 11.741572,11.3522564 11.2337309,11.2234565 C11.4350643,12.005173 11.4350643,12.8780402 11.2337309,13.6597567 C11.4881523,13.5953567 11.7485836,13.5626614 12.0120199,13.5626614 C12.2754562,13.5626614 12.5358876,13.5953567 12.7903089,13.6597567 C12.5889755,12.8780402 12.5889755,12.005173 12.7903089,11.2234565 L12.7903089,11.2234565 Z M14.3699252,10.3149216 C13.4053276,11.2690318 13.4053276,13.6141813 14.3699252,14.5682916 C14.4670861,14.6653869 14.5161674,14.7922053 14.5161674,14.9190237 C14.5161674,15.0458421 14.4670861,15.1726605 14.3699252,15.2687651 C14.2717626,15.3658604 14.1435503,15.4144081 14.0153379,15.4144081 C13.8871256,15.4144081 13.7589132,15.3658604 13.6617523,15.2687651 C12.7282061,14.3463594 11.2958337,14.3463594 10.3632892,15.2687651 C10.166964,15.4629557 9.85043979,15.4629557 9.65511629,15.2687651 C9.5569537,15.1726605 9.50787241,15.0458421 9.50787241,14.9190237 C9.50787241,14.7922053 9.5569537,14.6653869 9.65511629,14.5682916 C10.6187122,13.6141813 10.6187122,11.2690318 9.65511629,10.3149216 C9.5569537,10.218817 9.50787241,10.0919986 9.50787241,9.96518021 C9.50787241,9.83836181 9.5569537,9.71154342 9.65511629,9.61444809 C9.85043979,9.42124819 10.166964,9.42124819 10.3632892,9.61444809 C11.2958337,10.5378445 12.7282061,10.5378445 13.6617523,9.61444809 C13.8570758,9.42124819 14.1736,9.42124819 14.3699252,9.61444809 C14.4670861,9.71154342 14.5161674,9.83836181 14.5161674,9.96518021 C14.5161674,10.0919986 14.4670861,10.218817 14.3699252,10.3149216 L14.3699252,10.3149216 Z M18.8162895,12.0794806 C18.6980937,11.9635607 18.5418349,11.8991607 18.3755595,11.8991607 C18.2082825,11.8991607 18.051022,11.9635607 17.9328262,12.0794806 C17.6894231,12.3212282 17.6894231,12.7125818 17.9328262,12.9533386 C18.1692178,13.1851785 18.5788963,13.18716 18.8162895,12.9533386 C19.0596926,12.7125818 19.0596926,12.3212282 18.8162895,12.0794806 L18.8162895,12.0794806 Z M19.5244624,13.6538121 C19.2169531,13.9569873 18.8092779,14.1244272 18.3755595,14.1244272 C17.9398379,14.1244272 17.5321626,13.9569873 17.2246533,13.6538121 C16.5906032,13.0266555 16.5906032,12.0061637 17.2246533,11.3790071 C17.8376686,10.7726567 18.9094438,10.7716659 19.5244624,11.3790071 C20.1585125,12.0061637 20.1585125,13.0266555 19.5244624,13.6538121 L19.5244624,13.6538121 Z M6.0661721,12.0854252 C5.94797634,11.9695053 5.79171753,11.9051053 5.62544214,11.9051053 C5.45816509,11.9051053 5.30190628,11.9695053 5.18371052,12.0854252 C4.93930573,12.326182 4.93930573,12.7185264 5.18371052,12.9592832 C5.42010204,13.1911231 5.82978057,13.1931046 6.0661721,12.9592832 C6.31057689,12.7185264 6.31057689,12.326182 6.0661721,12.0854252 L6.0661721,12.0854252 Z M6.77534667,13.6597567 C6.46783736,13.9629319 6.06016214,14.1303718 5.62544214,14.1303718 C5.18972047,14.1303718 4.78204526,13.9629319 4.47553761,13.6597567 C3.84148746,13.0326001 3.84148746,12.0121083 4.47553761,11.3849518 C5.08955457,10.7776105 6.15932638,10.7776105 6.77534667,11.3849518 C7.40839515,12.0121083 7.40839515,13.0326001 6.77534667,13.6597567 L6.77534667,13.6597567 Z M15.8844336,16.4081491 C13.7248568,18.5432556 10.2130403,18.5422649 8.05546687,16.4081491 C7.47650797,15.8354848 7.10889911,15.3371281 6.86148934,14.7922053 L5.94797634,15.196439 C6.24647072,15.8562909 6.67818575,16.4467891 7.34729396,17.1086225 C8.6214042,18.3698711 10.2951764,19 11.9699502,19 C13.6437224,19 15.3184963,18.3698711 16.5926065,17.1086225 C17.1044543,16.6033305 17.6753999,15.9821185 18.0400038,15.2013928 L17.1294957,14.7862607 C16.8330047,15.423325 16.356215,15.9424878 15.8844336,16.4081491 L15.8844336,16.4081491 Z M6.8795192,10.1722509 L5.97001283,9.75711878 C6.26750556,9.12104527 6.70523054,8.52856559 7.34929727,7.89051055 C9.8965161,5.36999497 14.0433844,5.36999497 16.5906032,7.88951978 C17.0563746,8.35121799 17.6393402,8.97936535 18.0139606,9.7501834 L17.1124675,10.1791862 C16.8670611,9.67587575 16.4994522,9.20129754 15.8824303,8.58999325 C13.7238551,6.45686824 10.214042,6.45884977 8.05747018,8.58999325 C7.49153285,9.15076834 7.12893229,9.63822654 6.8795192,10.1722509 L6.8795192,10.1722509 Z" id="AWS-Simple-Queue-Service_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, Cb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_AWS-SageMaker_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#055F4E" offset="0%"></stop>
            <stop stop-color="#56C0A7" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_AWS-SageMaker_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Machine-Learning" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M19.000533,13.6672874 L17.3104344,12.3579393 L16.6857676,13.1152694 L18.5747601,14.5766646 L17.2604611,15.2080958 C17.0895522,15.2894458 16.9816098,15.4579566 16.9816098,15.6419626 L16.9816098,17.2989853 L14.0161914,18.9482603 L12.96875,18.2858386 L12.96875,15.6574578 L14.9986674,15.6574578 L14.9986674,14.6890051 L12.96875,14.6890051 L12.96875,12.7366043 L11.969283,12.7366043 L11.969283,18.2906809 L10.9788113,18.9453549 L9.91038113,18.350725 L11.3546109,16.9532476 L10.6479877,16.2685515 L9.01285981,17.8519718 L8.01839019,17.2989853 L8.01839019,15.6419626 C8.01839019,15.4579566 7.91044776,15.2894458 7.73953891,15.2080958 L5.99946695,14.3732895 L5.99946695,11.0941084 L7.43370203,10.3726111 L9.00186567,11.1047614 L9.00186567,12.477059 L7.72554638,13.3021807 L8.27925107,14.1079334 L9.77845149,13.1394807 C9.9173774,13.0494146 10.0013326,12.8983359 10.0013326,12.7366043 L10.0013326,11.0592442 L11.2776519,10.2341224 L10.7239472,9.42836971 L9.46162047,10.2438069 L7.9244403,9.52715189 L7.9244403,7.24644565 L9.00186567,6.80386274 L9.00186567,8.827929 L10.0013326,8.827929 L10.0013326,6.39323877 L10.958822,6.00004695 L11.969283,6.31188874 L11.969283,9.83124606 C11.969283,9.97941933 12.0392457,10.1188765 12.1591818,10.2108795 L14.6898321,12.147785 L15.3085021,11.3885181 L12.96875,9.59688049 L12.96875,6.30704647 L13.9132463,6.0010154 L16.9976013,7.24838255 L16.9976013,7.95535307 L14.9986674,7.95535307 L14.9986674,8.92380582 L16.9976013,8.92380582 L16.9976013,9.83124606 C16.9976013,10.0152521 17.1055437,10.1827944 17.2734542,10.2641444 L19.000533,11.0989507 L19.000533,13.6672874 Z M19.7241471,10.3668004 L17.9970682,9.53199415 L17.9970682,6.92588779 C17.9970682,6.73026033 17.8761327,6.55400193 17.6892324,6.47943106 L14.1251333,5.03740491 C14.013193,4.99188763 13.8892591,4.98898227 13.7743204,5.02578348 L12.4660181,5.44899733 L11.0857543,5.02287812 C10.9728145,4.98801382 10.8498801,4.99285608 10.7389392,5.03837336 L7.22981077,6.48039952 C7.04490938,6.55593883 6.92497335,6.73122878 6.92497335,6.92588779 L6.92497335,9.53683642 L5.26985608,10.3697058 C5.10394456,10.4529927 5,10.6195666 5,10.7996988 L5,14.6735098 C5,14.8575159 5.10794243,15.0260266 5.27885128,15.1073767 L7.01892324,15.9431514 L7.01892324,17.5788681 C7.01892324,17.7522212 7.1138726,17.9129843 7.26978945,17.9991766 L10.7519323,19.9360821 C10.8288913,19.978694 10.9148454,20 11.0007996,20 C11.0997468,20 11.1966951,19.9719149 11.2816498,19.9157446 L12.4750133,19.129361 L13.7263459,19.9215553 C13.8093017,19.9738518 13.9032516,20 13.9992004,20 C14.0851546,20 14.1711087,19.978694 14.2480677,19.9360821 L17.7302106,17.9991766 C17.8861274,17.9129843 17.9810768,17.7522212 17.9810768,17.5788681 L17.9810768,15.9431514 L19.7221482,15.1073767 C19.893057,15.0260266 20,14.8575159 20,14.6735098 L20,10.7996988 C20,10.6166612 19.893057,10.4481505 19.7241471,10.3668004 L19.7241471,10.3668004 Z" id="AWS-SageMaker_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, Eb = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Icon-Architecture/16/Arch_Amazon-Virtual-Private-Cloud_16</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stop-color="#4D27A8" offset="0%"></stop>
            <stop stop-color="#A166FF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Icon-Architecture/16/Arch_Amazon-Virtual-Private-Cloud_16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-Architecture-BG/16/Networking-Content-Delivery" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
        <path d="M16.997,11.8210743 L15.074,10.8030743 L15.074,18.4610743 C16.958,18.0830743 16.996,15.6320743 16.997,15.5190743 L16.997,11.8210743 Z M12.851,17.8750743 C13.178,18.2020743 13.581,18.4000743 14.074,18.4770743 L14.074,10.7820743 L11.981,11.8290743 L11.981,15.5200743 C11.981,15.5370743 11.988,17.0100743 12.851,17.8750743 L12.851,17.8750743 Z M17.997,11.5200743 L17.997,15.5200743 C17.997,16.9020743 17.28,19.5140743 14.567,19.5140743 C13.573,19.5140743 12.756,19.1990743 12.138,18.5760743 C10.980946,17.4110743 10.98,15.5930743 10.980946,15.5160743 L10.980946,11.5200743 C10.980946,11.3300743 11.089,11.1570743 11.258,11.0720743 L14.351,9.52607432 C14.495,9.45307432 14.667,9.45607432 14.808,9.53107432 L17.73,11.0780743 C17.894,11.1640743 17.997,11.3350743 17.997,11.5200743 L17.997,11.5200743 Z M19.69,9.73507432 L18.753,10.0810743 C18.547,9.52407432 18.199,9.29607432 17.555,9.29607432 C17.29,9.29607432 17.071,9.09007432 17.056,8.82607432 C16.986,7.66307432 16.389,7.10607432 15.862,7.07907432 C15.189,7.04807432 14.968,7.33607432 14.894,7.43107432 C14.783,7.57707432 14.6,7.64907432 14.422,7.62407432 C14.241,7.59607432 14.089,7.47307432 14.026,7.30107432 C13.811,6.71307432 13.509,6.24207432 13.076,5.82007432 C12.144,4.91807432 10.407,4.73107432 8.851,5.36907432 C7.789,5.80407432 7.102,6.92707432 7.102,8.23007432 C7.102,8.37407432 7.121,8.59807432 7.138,8.73707432 C7.168,8.98707432 7.007,9.22007432 6.762,9.28107432 C5.576,9.57507432 5,10.2550743 5,11.3570743 C5,11.4070743 4.999,11.4580743 5.004,11.5080743 C5.061,12.5170743 5.613,13.5770743 6.995,13.5770743 L8.997,13.5770743 L8.997,14.5770743 L6.995,14.5770743 C5.309,14.5770743 4.107,13.3730743 4.007,11.5810743 C4.001,11.5170743 4,11.4370743 4,11.3570743 C4,9.93307432 4.745,8.90807432 6.109,8.43307432 C6.105,8.36007432 6.102,8.28907432 6.102,8.23007432 C6.102,6.51907432 7.033,5.03307432 8.473,4.44307432 C10.386,3.66207432 12.564,3.93307432 13.772,5.10207432 C14.145,5.46607432 14.447,5.86907432 14.686,6.32307432 C14.986,6.16107432 15.382,6.05107432 15.913,6.08007432 C16.968,6.13407432 17.786,7.03507432 18.004,8.32807432 C18.824,8.44907432 19.39,8.92107432 19.69,9.73507432 L19.69,9.73507432 Z" id="Amazon-Virtual-Private-Cloud_Icon_16_Squid" fill="#FFFFFF"></path>
    </g>
</svg>`, kb = '<svg id="bdb56329-4717-4410-aa13-4505ecaa4e46" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><defs><linearGradient id="ba2610c3-a45a-4e7e-a0c0-285cfd7e005d" x1="13.25" y1="13.02" x2="8.62" y2="4.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1988d9" /><stop offset="0.9" stop-color="#54aef0" /></linearGradient><linearGradient id="bd8f618b-4f2f-4cb7-aff0-2fd2d211326d" x1="11.26" y1="10.47" x2="14.46" y2="15.99" gradientUnits="userSpaceOnUse"><stop offset="0.1" stop-color="#54aef0" /><stop offset="0.29" stop-color="#4fabee" /><stop offset="0.51" stop-color="#41a2e9" /><stop offset="0.74" stop-color="#2a93e0" /><stop offset="0.88" stop-color="#1988d9" /></linearGradient></defs><title>Icon-identity-221</title><polygon points="1.01 10.19 8.93 15.33 16.99 10.17 18 11.35 8.93 17.19 0 11.35 1.01 10.19" fill="#50e6ff" /><polygon points="1.61 9.53 8.93 0.81 16.4 9.54 8.93 14.26 1.61 9.53" fill="#fff" /><polygon points="8.93 0.81 8.93 14.26 1.61 9.53 8.93 0.81" fill="#50e6ff" /><polygon points="8.93 0.81 8.93 14.26 16.4 9.54 8.93 0.81" fill="url(#ba2610c3-a45a-4e7e-a0c0-285cfd7e005d)" /><polygon points="8.93 7.76 16.4 9.54 8.93 14.26 8.93 7.76" fill="#53b1e0" /><polygon points="8.93 14.26 1.61 9.53 8.93 7.76 8.93 14.26" fill="#9cebff" /><polygon points="8.93 17.19 18 11.35 16.99 10.17 8.93 15.33 8.93 17.19" fill="url(#bd8f618b-4f2f-4cb7-aff0-2fd2d211326d)" /></svg>', Tb = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><defs><linearGradient id="fdd5d44a-d038-42da-afe7-cecaad9f8ff9" x1="6.49" y1="17.38" x2="6.49" y2="0.44" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#949494" /><stop offset="0.53" stop-color="#a2a2a2" /><stop offset="1" stop-color="#b3b3b3" /></linearGradient><linearGradient id="bf4a560d-147b-4f76-9d70-f90bc5f8ddd6" x1="10.06" y1="13.89" x2="16.48" y2="13.89" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#005ba1" /><stop offset="0.07" stop-color="#0060a9" /><stop offset="0.36" stop-color="#0071c8" /><stop offset="0.52" stop-color="#0078d4" /><stop offset="0.64" stop-color="#0074cd" /><stop offset="0.82" stop-color="#006abb" /><stop offset="1" stop-color="#005ba1" /></linearGradient></defs><g id="a55981fb-ccb2-4f5b-acf6-743ff717cb3a"><g><path d="M11,9.57a6.72,6.72,0,0,0-2.23.32,6.64,6.64,0,0,0,2.23.33,6.56,6.56,0,0,0,2.23-.33A6.63,6.63,0,0,0,11,9.57Z" fill="#198ab3" /><g><path d="M11.47,16.81a.57.57,0,0,1-.58.57H2.09a.56.56,0,0,1-.57-.57V1A.57.57,0,0,1,2.09.44h8.8a.58.58,0,0,1,.58.57Z" fill="url(#fdd5d44a-d038-42da-afe7-cecaad9f8ff9)" /><path d="M3,6.38A1.08,1.08,0,0,1,4.06,5.3H9a1.08,1.08,0,0,1,1.08,1.08h0A1.08,1.08,0,0,1,9,7.47H4.06A1.08,1.08,0,0,1,3,6.38Z" fill="#003067" /><path d="M3,3.17A1.08,1.08,0,0,1,4.06,2.09H9a1.08,1.08,0,0,1,1.08,1.08h0A1.08,1.08,0,0,1,9,4.25H4.06A1.08,1.08,0,0,1,3,3.17Z" fill="#003067" /><circle cx="4.11" cy="3.17" r="0.73" fill="#50e6ff" /><circle cx="4.11" cy="6.38" r="0.73" fill="#50e6ff" /></g><path d="M13.27,11.38c-1.77,0-3.21-.53-3.21-1.17V16.4c0,.63,1.42,1.15,3.17,1.16h0c1.78,0,3.21-.52,3.21-1.16V10.21C16.48,10.85,15.05,11.38,13.27,11.38Z" fill="url(#bf4a560d-147b-4f76-9d70-f90bc5f8ddd6)" /><path d="M16.48,10.21c0,.64-1.43,1.17-3.21,1.17s-3.21-.53-3.21-1.17,1.44-1.16,3.21-1.16,3.21.52,3.21,1.16" fill="#e6e6e6" /><path d="M15.73,10.12c0,.41-1.1.74-2.46.74s-2.46-.33-2.46-.74,1.1-.74,2.46-.74,2.46.33,2.46.74" fill="#50e6ff" /><path d="M13.68,8.66l2.13-2.13a.11.11,0,0,0-.08-.19H14.49c0-2.57-1.37-5.13-3.84-5.13a6.68,6.68,0,0,1,2,5.13H11.47a.11.11,0,0,0-.08.19l2.13,2.13A.12.12,0,0,0,13.68,8.66Z" fill="#50e6ff" /></g></g></svg>', Ab = '<svg id="b300f0d1-2ad8-4418-a1c5-23d0b9d21841" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><defs><linearGradient id="b8cad6fd-ec7f-45e9-be2a-125e8b87bd03" x1="10.79" y1="2.17" x2="10.79" y2="16.56" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#5ea0ef" /><stop offset="1" stop-color="#0078d4" /></linearGradient></defs><title>Icon-web-43</title><rect x="3.7" y="5.49" width="1.18" height="5.26" rx="0.52" transform="translate(-3.83 12.41) rotate(-90)" fill="#b3b3b3" /><rect x="2.04" y="7.88" width="1.18" height="5.26" rx="0.52" transform="translate(-7.88 13.14) rotate(-90)" fill="#a3a3a3" /><rect x="3.7" y="10.26" width="1.18" height="5.26" rx="0.52" transform="translate(-8.6 17.19) rotate(-90)" fill="#7a7a7a" /><path d="M18,11a3.28,3.28,0,0,0-2.81-3.18,4.13,4.13,0,0,0-4.21-4,4.23,4.23,0,0,0-4,2.8,3.89,3.89,0,0,0-3.38,3.8,4,4,0,0,0,4.06,3.86l.36,0h6.58l.17,0A3.32,3.32,0,0,0,18,11Z" fill="url(#b8cad6fd-ec7f-45e9-be2a-125e8b87bd03)" /></svg>', Sb = '<svg id="f9ed9690-6753-43a7-8b32-d66ac7b8a99a" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><defs><linearGradient id="f710a364-083f-494c-9d96-89b92ee2d5a8" x1="0.5" y1="9.77" x2="9" y2="9.77" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#005ba1" /><stop offset="0.07" stop-color="#0060a9" /><stop offset="0.36" stop-color="#0071c8" /><stop offset="0.52" stop-color="#0078d4" /><stop offset="0.64" stop-color="#0074cd" /><stop offset="0.81" stop-color="#006abb" /><stop offset="0.99" stop-color="#005ba1" /></linearGradient></defs><title>Icon-databases-126</title><g><path d="M13.25,10.48V6.57a.14.14,0,0,0-.24-.1l-4,4L4.85,14.63V17.5H16.93a.56.56,0,0,0,.57-.57V6.57a.14.14,0,0,0-.24-.1Z" fill="#005ba1" /><path d="M4.75,3.58C2.4,3.58.5,2.89.5,2V7.67h0v9.26a.56.56,0,0,0,.57.57H9V2C9,2.89,7.1,3.58,4.75,3.58Z" fill="url(#f710a364-083f-494c-9d96-89b92ee2d5a8)" /><rect x="12.91" y="12.97" width="2.27" height="2.27" rx="0.28" fill="#fff" /><rect x="8.97" y="12.97" width="2.27" height="2.27" rx="0.28" fill="#fff" /><rect x="5.03" y="12.97" width="2.27" height="2.27" rx="0.28" fill="#fff" /><path d="M9,2c0,.85-1.9,1.54-4.25,1.54S.5,2.89.5,2,2.4.5,4.75.5,9,1.19,9,2" fill="#eaeaea" /><path d="M8,1.91c0,.55-1.46,1-3.26,1s-3.26-.43-3.26-1S3,.94,4.75.94,8,1.37,8,1.91" fill="#50e6ff" /><path d="M4.75,2.14a8.07,8.07,0,0,0-2.58.37,7.64,7.64,0,0,0,2.58.38,7.64,7.64,0,0,0,2.58-.38A8.07,8.07,0,0,0,4.75,2.14Z" fill="#198ab3" /></g></svg>', Rb = '<svg id="f4337506-5d95-4e80-b7ca-68498c6e008e" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><defs><linearGradient id="ba420277-700e-42cc-9de9-5388a5c16e54" x1="9" y1="16.97" x2="9" y2="1.03" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0078d4" /><stop offset="0.16" stop-color="#1380da" /><stop offset="0.53" stop-color="#3c91e5" /><stop offset="0.82" stop-color="#559cec" /><stop offset="1" stop-color="#5ea0ef" /></linearGradient></defs><title>Icon-devops-261</title><path id="a91f0ca4-8fb7-4019-9c09-0a52e2c05754" d="M17,4v9.74l-4,3.28-6.2-2.26V17L3.29,12.41l10.23.8V4.44Zm-3.41.49L7.85,1V3.29L2.58,4.84,1,6.87v4.61l2.26,1V6.57Z" fill="url(#ba420277-700e-42cc-9de9-5388a5c16e54)" /></svg>', Ib = '<svg id="a2c88306-fa03-4e5b-b192-401f0b77808b" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><defs><linearGradient id="b403aca7-f387-4434-96b4-ae157edc835f" x1="-175.993" y1="-343.723" x2="-175.993" y2="-359.232" gradientTransform="translate(212.573 370.548) scale(1.156 1.029)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fea11b" /><stop offset="0.284" stop-color="#fea51a" /><stop offset="0.547" stop-color="#feb018" /><stop offset="0.8" stop-color="#ffc314" /><stop offset="1" stop-color="#ffd70f" /></linearGradient></defs><title>Icon-compute-29</title><g><path d="M2.37,7.475H3.2a.267.267,0,0,1,.267.267v6.148a.533.533,0,0,1-.533.533H2.1a0,0,0,0,1,0,0V7.741a.267.267,0,0,1,.267-.267Z" transform="translate(12.507 16.705) rotate(134.919)" fill="#50e6ff" /><path d="M2.325,3.6h.833a.267.267,0,0,1,.267.267v6.583a0,0,0,0,1,0,0H2.591a.533.533,0,0,1-.533-.533V3.865A.267.267,0,0,1,2.325,3.6Z" transform="translate(5.759 0.114) rotate(44.919)" fill="#1490df" /></g><g><path d="M14.53,7.475h.833a.533.533,0,0,1,.533.533v6.148a.267.267,0,0,1-.267.267H14.8a.267.267,0,0,1-.267-.267V7.475a0,0,0,0,1,0,0Z" transform="translate(12.223 -7.555) rotate(45.081)" fill="#50e6ff" /><path d="M15.108,3.6h.833a0,0,0,0,1,0,0v6.583a.267.267,0,0,1-.267.267h-.833a.267.267,0,0,1-.267-.267V4.131a.533.533,0,0,1,.533-.533Z" transform="translate(31.022 1.222) rotate(135.081)" fill="#1490df" /></g><path d="M8.459,9.9H4.87a.193.193,0,0,1-.2-.181.166.166,0,0,1,.018-.075L8.991,1.13a.206.206,0,0,1,.186-.106h4.245a.193.193,0,0,1,.2.181.165.165,0,0,1-.035.1L8.534,7.966h4.928a.193.193,0,0,1,.2.181.176.176,0,0,1-.052.122L5.421,16.788c-.077.046-.624.5-.356-.189h0Z" fill="url(#b403aca7-f387-4434-96b4-ae157edc835f)" /></svg>', Ob = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><defs><linearGradient id="f67d1585-6164-4ad0-b2dd-f9cc59b2969f" x1="9.908" y1="15.943" x2="7.516" y2="2.383" gradientUnits="userSpaceOnUse"><stop offset="0.15" stop-color="#0078d4" /><stop offset="0.8" stop-color="#5ea0ef" /><stop offset="1" stop-color="#83b9f9" /></linearGradient></defs><g id="a4fd1868-54fe-4ca6-8ff6-3b01866dc27b"><path d="M14.49,7.15A5.147,5.147,0,0,0,9.24,2.164,5.272,5.272,0,0,0,4.216,5.653,4.869,4.869,0,0,0,0,10.4a4.946,4.946,0,0,0,5.068,4.814H13.82A4.292,4.292,0,0,0,18,11.127,4.105,4.105,0,0,0,14.49,7.15Z" fill="url(#f67d1585-6164-4ad0-b2dd-f9cc59b2969f)" /><path d="M12.9,11.4V8H12v4.13h2.46V11.4ZM5.76,9.73a1.825,1.825,0,0,1-.51-.31.441.441,0,0,1-.12-.32.342.342,0,0,1,.15-.3.683.683,0,0,1,.42-.12,1.62,1.62,0,0,1,1,.29V8.11a2.58,2.58,0,0,0-1-.16,1.641,1.641,0,0,0-1.09.34,1.08,1.08,0,0,0-.42.89c0,.51.32.91,1,1.21a2.907,2.907,0,0,1,.62.36.419.419,0,0,1,.15.32.381.381,0,0,1-.16.31.806.806,0,0,1-.45.11,1.66,1.66,0,0,1-1.09-.42V12a2.173,2.173,0,0,0,1.07.24,1.877,1.877,0,0,0,1.18-.33A1.08,1.08,0,0,0,6.84,11a1.048,1.048,0,0,0-.25-.7A2.425,2.425,0,0,0,5.76,9.73ZM11,11.32A2.191,2.191,0,0,0,11,9a1.808,1.808,0,0,0-.7-.75,2,2,0,0,0-1-.26,2.112,2.112,0,0,0-1.08.27A1.856,1.856,0,0,0,7.49,9a2.465,2.465,0,0,0-.26,1.14,2.256,2.256,0,0,0,.24,1,1.766,1.766,0,0,0,.69.74,2.056,2.056,0,0,0,1,.3l.86,1h1.21L10,12.08A1.79,1.79,0,0,0,11,11.32Zm-1-.25a.941.941,0,0,1-.76.35.916.916,0,0,1-.76-.36,1.523,1.523,0,0,1-.29-1,1.529,1.529,0,0,1,.29-1,1,1,0,0,1,.78-.37.869.869,0,0,1,.75.37,1.619,1.619,0,0,1,.27,1A1.459,1.459,0,0,1,10,11.07Z" fill="#f2f2f2" /></g>​
</svg>`, Nb = '<svg id="b089cfca-0de1-451c-a1ca-6680ea50cb4f" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><defs><radialGradient id="b25d0836-964a-4c84-8c20-855f66e8345e" cx="-105.006" cy="-10.409" r="5.954" gradientTransform="translate(117.739 19.644) scale(1.036 1.027)" gradientUnits="userSpaceOnUse"><stop offset="0.183" stop-color="#5ea0ef" /><stop offset="1" stop-color="#0078d4" /></radialGradient><clipPath id="b36c7f5d-2ef1-4760-8a25-eeb9661f4e47"><path d="M14.969,7.53A6.137,6.137,0,1,1,7.574,2.987,6.137,6.137,0,0,1,14.969,7.53Z" fill="none" /></clipPath></defs><title>Icon-databases-121</title><path d="M2.954,5.266a.175.175,0,0,1-.176-.176h0A2.012,2.012,0,0,0,.769,3.081a.176.176,0,0,1-.176-.175h0a.176.176,0,0,1,.176-.176A2.012,2.012,0,0,0,2.778.72.175.175,0,0,1,2.954.544h0A.175.175,0,0,1,3.13.72h0A2.012,2.012,0,0,0,5.139,2.729a.175.175,0,0,1,.176.176h0a.175.175,0,0,1-.176.176h0A2.011,2.011,0,0,0,3.13,5.09.177.177,0,0,1,2.954,5.266Z" fill="#50e6ff" /><path d="M15.611,17.456a.141.141,0,0,1-.141-.141h0a1.609,1.609,0,0,0-1.607-1.607.141.141,0,0,1-.141-.14h0a.141.141,0,0,1,.141-.141h0a1.608,1.608,0,0,0,1.607-1.607.141.141,0,0,1,.141-.141h0a.141.141,0,0,1,.141.141h0a1.608,1.608,0,0,0,1.607,1.607.141.141,0,1,1,0,.282h0a1.609,1.609,0,0,0-1.607,1.607A.141.141,0,0,1,15.611,17.456Z" fill="#50e6ff" /><g><path d="M14.969,7.53A6.137,6.137,0,1,1,7.574,2.987,6.137,6.137,0,0,1,14.969,7.53Z" fill="url(#b25d0836-964a-4c84-8c20-855f66e8345e)" /><g clip-path="url(#b36c7f5d-2ef1-4760-8a25-eeb9661f4e47)"><path d="M5.709,13.115A1.638,1.638,0,1,0,5.714,9.84,1.307,1.307,0,0,0,5.721,9.7,1.651,1.651,0,0,0,4.06,8.064H2.832a6.251,6.251,0,0,0,1.595,5.051Z" fill="#f2f2f2" /><path d="M15.045,7.815c0-.015,0-.03-.007-.044a5.978,5.978,0,0,0-1.406-2.88,1.825,1.825,0,0,0-.289-.09,1.806,1.806,0,0,0-2.3,1.663,2,2,0,0,0-.2-.013,1.737,1.737,0,0,0-.581,3.374,1.451,1.451,0,0,0,.541.1h2.03A13.453,13.453,0,0,0,15.045,7.815Z" fill="#f2f2f2" /></g></g><path d="M17.191,3.832c-.629-1.047-2.1-1.455-4.155-1.149a14.606,14.606,0,0,0-2.082.452,6.456,6.456,0,0,1,1.528.767c.241-.053.483-.116.715-.151A7.49,7.49,0,0,1,14.3,3.662a2.188,2.188,0,0,1,1.959.725h0c.383.638.06,1.729-.886,3a16.723,16.723,0,0,1-4.749,4.051A16.758,16.758,0,0,1,4.8,13.7c-1.564.234-2.682,0-3.065-.636s-.06-1.73.886-2.995c.117-.157.146-.234.279-.392a6.252,6.252,0,0,1,.026-1.63A11.552,11.552,0,0,0,1.756,9.419C.517,11.076.181,12.566.809,13.613a3.165,3.165,0,0,0,2.9,1.249,8.434,8.434,0,0,0,1.251-.1,17.855,17.855,0,0,0,6.219-2.4,17.808,17.808,0,0,0,5.061-4.332C17.483,6.369,17.819,4.88,17.191,3.832Z" fill="#50e6ff" /></svg>', Pb = '<svg id="b5b638e5-1de7-4378-8f50-7c3738e5874c" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><defs><linearGradient id="e20ae4ca-8128-4625-bcc6-863bc1bc51d9" x1="5.05" y1="10.55" x2="5.05" y2="13.48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#76bc2d" /><stop offset="1" stop-color="#5e9624" /></linearGradient><linearGradient id="b6fa89de-29eb-462e-97de-5bdbdaeb090e" x1="12.84" y1="10.57" x2="12.84" y2="13.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#76bc2d" /><stop offset="1" stop-color="#5e9624" /></linearGradient></defs><title>Icon-integration-204</title><g><path d="M3.19,15.6a2.49,2.49,0,0,1-1.53-.38,1.7,1.7,0,0,1-.45-1.36V10.33c0-.58-.23-.89-.71-.89V8.56c.48,0,.71-.31.71-.92V4.17a1.79,1.79,0,0,1,.45-1.39A2.29,2.29,0,0,1,3.19,2.4v.89c-.51,0-.79.27-.79.85v3.4c0,.78-.23,1.26-.74,1.46a1.42,1.42,0,0,1,.74,1.46v3.37a1.25,1.25,0,0,0,.17.68.74.74,0,0,0,.58.2l0,.89Z" fill="#949494" /><path d="M14.81,2.4a2.49,2.49,0,0,1,1.53.38,1.7,1.7,0,0,1,.45,1.36V7.67c0,.58.23.89.71.89v.88c-.48,0-.71.31-.71.92v3.43a1.8,1.8,0,0,1-.45,1.4,2.28,2.28,0,0,1-1.53.41v-.89c.51,0,.79-.27.79-.85v-3.4c0-.78.23-1.26.74-1.46a1.42,1.42,0,0,1-.74-1.46V4.17a1.25,1.25,0,0,0-.17-.68.74.74,0,0,0-.58-.2Z" fill="#949494" /><path d="M9.41,8.35V7.08h-.9V8.35a.18.18,0,0,1-.18.18H5a.36.36,0,0,0-.36.36v1.65h.9V9.63a.18.18,0,0,1,.17-.18h6.54a.18.18,0,0,1,.18.18v.93h.89V8.89a.36.36,0,0,0-.35-.36H9.59A.18.18,0,0,1,9.41,8.35Z" fill="#005ba1" /><path d="M10.61,3.21H7.25a.38.38,0,0,0-.38.37V6.94a.37.37,0,0,0,.38.37h3.36A.37.37,0,0,0,11,6.94V3.58A.38.38,0,0,0,10.61,3.21Zm-.32,3.17a.25.25,0,0,1-.25.24H7.81a.25.25,0,0,1-.25-.24V4.15a.25.25,0,0,1,.25-.25H10a.25.25,0,0,1,.25.25Z" fill="#0078d4" /><rect x="3.58" y="10.55" width="2.94" height="2.94" rx="0.27" fill="url(#e20ae4ca-8128-4625-bcc6-863bc1bc51d9)" /><rect x="11.38" y="10.57" width="2.94" height="2.94" rx="0.27" fill="url(#b6fa89de-29eb-462e-97de-5bdbdaeb090e)" /></g></svg>', Mb = '<svg id="fd454f1c-5506-44b8-874e-8814b8b2f70b" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><defs><linearGradient id="f34d9569-2bd0-4002-8f16-3d01d8106cb5" x1="8.88" y1="12.21" x2="8.88" y2="0.21" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0078d4" /><stop offset="0.82" stop-color="#5ea0ef" /></linearGradient><linearGradient id="bdb45a0b-eb58-4970-a60a-fb2ce314f866" x1="8.88" y1="16.84" x2="8.88" y2="12.21" gradientUnits="userSpaceOnUse"><stop offset="0.15" stop-color="#ccc" /><stop offset="1" stop-color="#707070" /></linearGradient></defs><title>Icon-compute-21</title><rect x="-0.12" y="0.21" width="18" height="12" rx="0.6" fill="url(#f34d9569-2bd0-4002-8f16-3d01d8106cb5)" /><polygon points="11.88 4.46 11.88 7.95 8.88 9.71 8.88 6.21 11.88 4.46" fill="#50e6ff" /><polygon points="11.88 4.46 8.88 6.22 5.88 4.46 8.88 2.71 11.88 4.46" fill="#c3f1ff" /><polygon points="8.88 6.22 8.88 9.71 5.88 7.95 5.88 4.46 8.88 6.22" fill="#9cebff" /><polygon points="5.88 7.95 8.88 6.21 8.88 9.71 5.88 7.95" fill="#c3f1ff" /><polygon points="11.88 7.95 8.88 6.21 8.88 9.71 11.88 7.95" fill="#9cebff" /><path d="M12.49,15.84c-1.78-.28-1.85-1.56-1.85-3.63H7.11c0,2.07-.06,3.35-1.84,3.63a1,1,0,0,0-.89,1h9A1,1,0,0,0,12.49,15.84Z" fill="url(#bdb45a0b-eb58-4970-a60a-fb2ce314f866)" /></svg>', Fb = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#669df6;}.cls-1,.cls-2,.cls-3{fill-rule:evenodd;}.cls-2{fill:#aecbfa;}.cls-3{fill:#4285f4;}</style></defs><title>Icon_24px_BigTable_Color</title><g data-name="Product Icons"><g ><path class="cls-1" d="M16.22,6.45,12,3.94a2.86,2.86,0,0,1-1.25-1.71s.16-.32.38-.2,3.5,2.06,5.25,3.1c.63.37.24,2,.24,2A.77.77,0,0,0,16.22,6.45Z"/><path class="cls-2" d="M17.49,12.69a.35.35,0,0,1-.16.33l-1,.68V5.75c0-.27.17-.56-.06-.7l.92.68a.73.73,0,0,1,.35.65Z"/><path class="cls-1" d="M12,13.6a.36.36,0,0,1-.2-.06L8.34,11.48v.9L12,14.56l.29-.57s-.22-.39-.29-.39Z"/><path class="cls-1" d="M12.2,15.4a.36.36,0,0,1-.4,0L8.34,13.34V14a.42.42,0,0,0,.19.35l3.28,2a.37.37,0,0,0,.38,0,2,2,0,0,0,.2-.52l-.19-.39Z"/><path class="cls-2" d="M12,12.73l3.66-2.18v-.43a.39.39,0,0,0-.19-.34l-3.28-2a.37.37,0,0,0-.38,0l-3.28,2a.41.41,0,0,0-.19.34v.43L12,12.73Z"/><path class="cls-1" d="M12,11.83,8.53,9.78a.41.41,0,0,0-.19.34v.43L12,12.73l.28-.56L12,11.83Z"/><path class="cls-3" d="M12,13.6v1l3.66-2.18v-.9L12.2,13.54a.65.65,0,0,1-.2.06Z"/><path class="cls-3" d="M12.2,15.4a.36.36,0,0,1-.2.06c0,.28,0,.9,0,.9a.5.5,0,0,0,.21-.05l3.28-2a.39.39,0,0,0,.19-.35v-.66L12.2,15.4Z"/><path class="cls-3" d="M15.47,9.78,12,11.83v.9l3.66-2.18v-.43a.39.39,0,0,0-.19-.34Z"/><path class="cls-1" d="M7.78,17.53,11.93,20a2.72,2.72,0,0,1,1.28,1.8.18.18,0,0,1-.28.18L7.48,18.75c-.53-.32-.07-1.88-.07-1.88A.77.77,0,0,0,7.78,17.53Z"/><path class="cls-2" d="M6.51,17.73V11.17a.41.41,0,0,1,.19-.33l1-.59v7.91c0,.27,0,.69.21.83l-1.06-.66A.75.75,0,0,1,6.51,17.73Z"/><path class="cls-1" d="M10.16,5.46a.75.75,0,0,0-.74,0L5.22,8a2.63,2.63,0,0,1-2.08.26.23.23,0,0,1,0-.4c.18-.09,6.32-3.74,6.32-3.74.23-.14.74,1.39.74,1.39Z"/><path class="cls-2" d="M10.15,4.08l5.32,3.15a.37.37,0,0,1,.2.31V8.72L9,4.76a.75.75,0,0,0-.74,0l1.18-.69a.71.71,0,0,1,.73,0Z"/><path class="cls-1" d="M13.82,18.49a.73.73,0,0,0,.74,0L18.76,16a2.63,2.63,0,0,1,2.1-.25.21.21,0,0,1,0,.38l-6.33,3.75c-.22.14-.74-1.4-.74-1.4Z"/><path class="cls-2" d="M8.51,16.75a.56.56,0,0,1-.17-.33V15.26L15,19.19a.69.69,0,0,0,.73,0l-1.18.7a.7.7,0,0,1-.74,0Z"/><path class="cls-1" d="M6.26,9.81a.76.76,0,0,0-.37.65v5a2.75,2.75,0,0,1-.87,2,.18.18,0,0,1-.3-.13V9.77c0-.28,1.54,0,1.54,0Z"/><path class="cls-2" d="M9.77,6.52a.34.34,0,0,1,.36,0l1,.59L5.05,10.67a.77.77,0,0,0-.37.66V9.94a.72.72,0,0,1,.38-.64Z"/><path class="cls-1" d="M18.17,13.44v-5a2.81,2.81,0,0,1,.84-2s.33-.11.31.21,0,7.37,0,7.37c-.31.37-1.61,0-1.61,0A.81.81,0,0,0,18.17,13.44Z"/><path class="cls-2" d="M19,14.61l-4.74,2.85a.35.35,0,0,1-.37,0l-1-.57L19,13.22a.77.77,0,0,0,.37-.66V14C19.35,14.23,19,14.61,19,14.61Z"/></g></g></svg>', zb = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#aecbfa;}.cls-1,.cls-2,.cls-3{fill-rule:evenodd;}.cls-2{fill:#669df6;}.cls-3{fill:#4285f4;}</style></defs><title>Icon_24px_BigQuery_Color</title><g data-name="Product Icons"><g ><path class="cls-1" d="M6.73,10.83v2.63A4.91,4.91,0,0,0,8.44,15.2V10.83Z"/><path class="cls-2" d="M9.89,8.41v7.53A7.62,7.62,0,0,0,11,16,8,8,0,0,0,12,16V8.41Z"/><path class="cls-1" d="M13.64,11.86v3.29a5,5,0,0,0,1.7-1.82V11.86Z"/><path class="cls-3" d="M17.74,16.32l-1.42,1.42a.42.42,0,0,0,0,.6l3.54,3.54a.42.42,0,0,0,.59,0l1.43-1.43a.42.42,0,0,0,0-.59l-3.54-3.54a.42.42,0,0,0-.6,0"/><path class="cls-2" d="M11,2a9,9,0,1,0,9,9,9,9,0,0,0-9-9m0,15.69A6.68,6.68,0,1,1,17.69,11,6.68,6.68,0,0,1,11,17.69"/></g></g></svg>', Db = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;}.cls-2{fill:#669df6;}.cls-2,.cls-3,.cls-4{fill-rule:evenodd;}.cls-3{fill:#aecbfa;}.cls-4{fill:#4285f4;}</style></defs><title>Icon_24px_CDN_Color</title><g data-name="Product Icons"><rect class="cls-1" x="2" y="2" width="20" height="20"/><g ><polygon id="Fill-1" class="cls-2" points="12 2 12 4.41 15.13 7.63 15.13 5.21 12 2"/><polygon id="Fill-1-Copy-2" class="cls-2" points="19.5 12 16.38 15.13 18.88 15.13 22 12 19.5 12"/><polygon id="Fill-1-Copy-3" class="cls-2" points="4.5 12 7.63 15.13 5.13 15.13 2 12 4.5 12"/><polygon id="Fill-1-Copy" class="cls-2" points="12 22 12 19.59 15.13 16.38 15.13 18.79 12 22"/><polygon id="Fill-2" class="cls-3" points="12 2 8.88 5.21 8.88 7.63 12 4.41 12 2"/><polygon id="Fill-2-Copy-2" class="cls-3" points="18.88 8.88 16.38 8.88 19.5 12 22 12 18.88 8.88"/><polygon id="Fill-2-Copy-3" class="cls-3" points="5.13 8.88 7.63 8.88 4.5 12 2 12 5.13 8.88"/><polygon id="Fill-2-Copy" class="cls-3" points="12 22 8.88 18.79 8.88 16.38 12 19.59 12 22"/><polygon id="Fill-9" class="cls-3" points="15.13 15.13 8.88 15.13 8.88 8.88 15.13 8.88 15.13 15.13"/><polygon id="Fill-10" class="cls-2" points="15.13 8.88 15.13 15.13 8.88 15.13 15.13 8.88"/><polygon class="cls-4" points="15.13 8.88 15.13 15.13 12 12 15.13 8.88"/></g></g></svg>', Bb = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#4285f4;}.cls-2{fill:#669df6;}.cls-3{fill:#aecbfa;}.cls-4{fill:#fff;}</style></defs><title>Icon_24px_DNS_Color</title><g data-name="Product Icons"><g data-name="colored-32/dns"><g ><polygon id="Fill-1" class="cls-1" points="13 18 11 18 11 8 13 8 13 18"/><polygon id="Fill-2" class="cls-2" points="2 21 22 21 22 19 2 19 2 21"/><polygon id="Fill-3" class="cls-3" points="10 22 14 22 14 18 10 18 10 22"/></g></g><rect class="cls-3" x="2" y="2" width="20" height="6"/><rect class="cls-2" x="12" y="2" width="10" height="6"/><rect class="cls-4" x="4" y="4" width="2" height="2"/><rect class="cls-3" x="2" y="10" width="20" height="6"/><rect class="cls-2" x="12" y="10" width="10" height="6"/><rect class="cls-4" x="4" y="12" width="2" height="2"/></g></svg>', Ub = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#4285f4;}.cls-1,.cls-2,.cls-3{fill-rule:evenodd;}.cls-2{fill:#aecbfa;}.cls-3{fill:#669df6;}</style></defs><title>Icon_24px_Interconnect_Color</title><g data-name="Product Icons"><g ><polygon id="Fill-3" class="cls-1" points="2 13 6 13 6 11 2 11 2 13"/><polygon id="Fill-6" class="cls-2" points="15 17 5 17 5 7 15 7 15 17"/><polygon id="Fill-1" class="cls-1" points="17.33 13 22 13 22 11 17.33 11 17.33 13"/><polygon class="cls-3" points="8 3 8 5 17 5 17 19 8 19 8 21 19 21 19 19 19 5 19 3 8 3"/><polygon id="Fill-7" class="cls-3" points="15 17 10 17 10 7 15 7 15 17"/></g></g></svg>', Hb = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;}.cls-2{fill:#669df6;}.cls-3{fill:#4285f4;}.cls-4{fill:#aecbfa;}</style></defs><title>Icon_24px_LoadBalancing_Color</title><g data-name="Product Icons"><g data-name="colored-32/load-balancing"><rect class="cls-1" width="24" height="24"/><g ><rect class="cls-2" x="18" y="12" width="2" height="4"/><rect class="cls-2" x="11" y="12" width="2" height="4"/><rect class="cls-2" x="4" y="12" width="2" height="4"/><polygon id="Fill-2" class="cls-3" points="13 11 11 11 11 7 13 7 13 11"/><rect class="cls-2" x="4" y="11" width="16" height="2"/><rect class="cls-4" x="6" y="2" width="12" height="5"/><rect class="cls-2" x="12" y="2" width="6" height="5"/><rect class="cls-4" x="16" y="16" width="6" height="6"/><rect class="cls-4" x="2" y="16" width="6" height="6"/><rect class="cls-2" x="5" y="16" width="3" height="6"/><rect class="cls-4" x="9" y="16" width="6" height="6"/><rect class="cls-2" x="12" y="16" width="3" height="6"/><rect class="cls-2" x="19" y="16" width="3" height="6"/></g></g></g></svg>', Vb = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#aecbfa;}.cls-1,.cls-2,.cls-3{fill-rule:evenodd;}.cls-2{fill:#669df6;}.cls-3{fill:#4285f4;}</style></defs><title>Icon_24px_SQL_Color</title><g data-name="Product Icons"><g ><polygon class="cls-1" points="4.67 10.44 4.67 13.45 12 17.35 12 14.34 4.67 10.44"/><polygon class="cls-1" points="4.67 15.09 4.67 18.1 12 22 12 18.99 4.67 15.09"/><polygon class="cls-2" points="12 17.35 19.33 13.45 19.33 10.44 12 14.34 12 17.35"/><polygon class="cls-2" points="12 22 19.33 18.1 19.33 15.09 12 18.99 12 22"/><polygon class="cls-3" points="19.33 8.91 19.33 5.9 12 2 12 5.01 19.33 8.91"/><polygon class="cls-2" points="12 2 4.67 5.9 4.67 8.91 12 5.01 12 2"/><polygon class="cls-1" points="4.67 5.87 4.67 8.89 12 12.79 12 9.77 4.67 5.87"/><polygon class="cls-2" points="12 12.79 19.33 8.89 19.33 5.87 12 9.77 12 12.79"/></g></g></svg>', Gb = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#aecbfa;}.cls-2{fill:#669df6;}.cls-3{fill:#4285f4;}.cls-4{fill:#fff;}</style></defs><title>Icon_24px_CloudStorage_Color</title><g data-name="Product Icons"><rect class="cls-1" x="2" y="4" width="20" height="7"/><rect class="cls-2" x="20" y="4" width="2" height="7"/><polygon class="cls-3" points="22 4 20 4 20 11 22 4"/><rect class="cls-2" x="2" y="4" width="2" height="7"/><rect class="cls-4" x="6" y="7" width="6" height="1"/><rect class="cls-4" x="15" y="6" width="3" height="3" rx="1.5"/><rect class="cls-1" x="2" y="13" width="20" height="7"/><rect class="cls-2" x="20" y="13" width="2" height="7"/><polygon class="cls-3" points="22 13 20 13 20 20 22 13"/><rect class="cls-2" x="2" y="13" width="2" height="7"/><rect class="cls-4" x="6" y="16" width="6" height="1"/><rect class="cls-4" x="15" y="15" width="3" height="3" rx="1.5"/></g></svg>', jb = `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M14.7110701,8.84507935 C14.7717439,8.84507935 14.8231931,8.88719721 14.8413458,8.94564457 L14.8483412,8.99213893 L14.8483412,9.80096662 C14.8483412,9.86590813 14.8090267,9.92106136 14.7544697,9.94052499 L14.7110701,9.9480262 L14.1619856,9.9480262 L14.1619856,11.3971513 C14.1619856,11.4393574 14.1689102,11.4810733 14.1822916,11.5204472 L14.2071478,11.5775199 L17.9097614,18.3983638 C18.0128912,18.5897093 18.0276241,18.8190863 17.9539599,19.0212979 L17.9097614,19.1198381 L16.5667009,21.6392628 C16.4635711,21.8306084 16.2854576,21.9589644 16.0851783,21.9917325 L15.983436,22 L8.01656405,22 C7.8103044,22 7.61750853,21.8989791 7.49086453,21.7295356 L7.43329911,21.6392628 L6.09023859,19.1198381 C5.98710877,18.9284926 5.97237594,18.6991157 6.0460401,18.496904 L6.09023859,18.3983638 L9.78310593,11.5775199 C9.80278146,11.5409511 9.8205962,11.5011143 9.83028652,11.4598613 L9.83794574,11.3971513 L9.83794574,9.9480262 L9.28886131,9.9480262 C9.22824239,9.9480262 9.17676023,9.90586128 9.15859212,9.84743274 L9.1515902,9.80096662 L9.1515902,8.99213893 C9.1515902,8.9271386 9.19094857,8.87202066 9.24548803,8.85257351 L9.28886131,8.84507935 L14.7110701,8.84507935 Z M13.1324523,9.9480262 L10.867479,9.9480262 L10.867479,11.6220054 C10.867479,11.7170243 10.8499898,11.810761 10.8163145,11.8979731 L10.7772919,11.9828161 L7.23720733,18.5909383 C7.18910754,18.6801741 7.17948758,18.7860688 7.2083826,18.8820057 L7.23727597,18.9516755 L8.15266835,20.6500666 C8.20076815,20.7393612 8.28154945,20.8012203 8.37354086,20.8223922 L8.44430082,20.8304352 L9.572,20.83 L8.57527805,18.9792271 C8.52717825,18.8899325 8.51755829,18.7840732 8.54641817,18.6881527 L8.57527805,18.6184899 L9.44379234,17.006864 L15.913,17.006 L15.399,16.047 L13.0053393,16.0472267 L12.6160384,15.3248701 L15.012,15.324 L14.292,13.979 L11.8745205,13.9792234 L11.4852196,13.2568668 L13.904,13.256 L13.2227081,11.9828161 C13.1783867,11.9005363 13.1497785,11.8099843 13.1382445,11.7164027 L13.1324523,11.6220054 L13.1324523,9.9480262 Z M16.347,17.815 L13.9560996,17.8156917 L14.3454004,18.5509896 L16.741,18.55 L16.347,17.815 Z M10.630604,5.77278412 C11.0025401,5.77278412 11.3040561,6.09587402 11.3040561,6.49433196 C11.3040561,6.89278989 11.0025401,7.21580626 10.630604,7.21580626 C10.258668,7.21580626 9.95715197,6.89278989 9.95715197,6.49433196 C9.95715197,6.09587402 10.258668,5.77278412 10.630604,5.77278412 Z M13.1716089,4.22465851 C13.7295473,4.22465851 14.1818556,4.7091463 14.1818556,5.30686996 C14.1818556,5.9045201 13.7295473,6.38908141 13.1716089,6.38908141 C12.6136705,6.38908141 12.1614308,5.9045201 12.1614308,5.30686996 C12.1614308,4.7091463 12.6136705,4.22465851 13.1716089,4.22465851 Z M11.6407615,2 C12.0126976,2 12.3142822,2.3230899 12.3142822,2.72154783 C12.3142822,3.12000576 12.0126976,3.44302213 11.6407615,3.44302213 C11.2688941,3.44302213 10.9673095,3.12000576 10.9673095,2.72154783 C10.9673095,2.3230899 11.2688941,2 11.6407615,2 Z" fill="#4285F4"></path>
    </g>
</svg>`, $b = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;}.cls-2{fill:#aecbfa;}.cls-2,.cls-3,.cls-4{fill-rule:evenodd;}.cls-3{fill:#4285f4;}.cls-4{fill:#669df6;}</style></defs><title>Icon_24px_DataProc_Color</title><g data-name="Product Icons"><rect class="cls-1" x="2" y="2" width="20" height="20"/><g ><polygon class="cls-2" points="17.85 14.2 7.67 20.08 6.69 18.4 16.88 12.51 17.85 14.2"/><polygon class="cls-2" points="7.63 18.16 7.63 6.4 9.5 6.4 9.5 16.75 7.63 18.16"/><polygon class="cls-2" points="9.56 9.69 9.3 7.33 19.49 13.2 18.52 14.88 9.56 9.69"/><path class="cls-3" d="M14.39,10.26,9.3,7.33l.26,2.36,1.51.86a4,4,0,0,0,3.32-.29Z"/><path class="cls-2" d="M8.13,8.29h0a3.78,3.78,0,1,1,3.27,1.89A3.8,3.8,0,0,1,8.13,8.29ZM13,5.49a1.84,1.84,0,0,0-1.59-.92A1.83,1.83,0,0,0,9.57,6.4a1.84,1.84,0,1,0,3.67,0A1.8,1.8,0,0,0,13,5.49Z"/><path class="cls-3" d="M7.63,12.94v5.22L9.5,16.75V15.12a3.29,3.29,0,0,0-1.87-2.18Z"/><path class="cls-3" d="M13.33,16.81l4.52-2.61-2.21-1L14.39,14a4.23,4.23,0,0,0-1.06,2.86Z"/><path class="cls-2" d="M2.51,18.7h0a3.77,3.77,0,0,1,1.38-5.16,3.72,3.72,0,0,1,2.86-.38A3.78,3.78,0,1,1,2.51,18.7Zm4.85-2.81A1.79,1.79,0,0,0,6.25,15a1.83,1.83,0,0,0-2.06,2.69h0a1.83,1.83,0,1,0,3.17-1.84Z"/><path class="cls-2" d="M14.33,18.36h0a3.79,3.79,0,0,1,0-3.77,3.79,3.79,0,0,1,5.16-1.39,3.78,3.78,0,0,1,1.38,5.16,3.78,3.78,0,0,1-6.54,0Zm4.86-2.81a2,2,0,0,0-.67-.67,1.85,1.85,0,0,0-2.51.68,1.86,1.86,0,0,0,0,1.83,1.83,1.83,0,0,0,2.07.85,1.82,1.82,0,0,0,1.11-.85,1.88,1.88,0,0,0,0-1.84Z"/><path class="cls-4" d="M9.49,16.15s-2.34,2-2.8,2.25l2.86-1.65a4.07,4.07,0,0,0-.06-.6Z"/><path class="cls-4" d="M10.15,10S9.56,6.72,9.56,6.4V9.69a3.47,3.47,0,0,0,.59.27Z"/><path class="cls-4" d="M15.3,13.47s2.76,1.15,3.22,1.41l-2.86-1.64a1.69,1.69,0,0,0-.36.23Z"/></g></g></svg>', qb = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#669df6;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#4285f4;}</style></defs><title>Icon_24px_IAM_Color</title><g data-name="Product Icons"><g ><path class="cls-1" d="M12,2,3.79,5.42v5.63c0,5.06,3.5,9.8,8.21,11,4.71-1.15,8.21-5.89,8.21-10.95V5.42Zm0,3.79a2.63,2.63,0,1,1-1.86.77A2.63,2.63,0,0,1,12,5.79Zm4.11,11.15A8.64,8.64,0,0,1,12,19.87a8.64,8.64,0,0,1-4.11-2.93V14.69c0-1.67,2.74-2.52,4.11-2.52s4.11.85,4.11,2.52v2.25Z"/><path class="cls-2" d="M12,2V5.79a2.63,2.63,0,1,1,0,5.26v1.12c1.37,0,4.11.85,4.11,2.52v2.25A8.64,8.64,0,0,1,12,19.87V22c4.71-1.15,8.21-5.89,8.21-10.95V5.42Z"/></g></g></svg>', Zb = `<svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" overflow="visible" xml:space="preserve">
<g >
	<g transform="translate(4.000000, 1.000000)">
		<path fill="#85A4E6" d="M8,0l-9,4v6c0,5.6,3.8,10.7,9,12c5.2-1.3,9-6.4,9-12V4L8,0z M8,11h7c-0.5,4.1-3.3,7.8-7,8.9V11l-7,0V5.3
			l7-3.1V11z"/>
		<path fill="#5C85DE" d="M8,0v22c5.2-1.3,9-6.4,9-12V4L8,0z M15,11c-0.5,4.1-3.3,7.8-7,8.9V11L15,11z"/>
		<path fill-rule="evenodd" fill="#3367D6" d="M17,11h-2c0,0,0,0.3-0.1,0.6L17,11z"/>
		<polygon fill-rule="evenodd" fill="#3367D6" points="-1,11 1,11 1,10.4 		"/>
	</g>
</g>
</svg>
`, Wb = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#aecbfa;}.cls-2{fill:#669df6;}.cls-3{fill:#4285f4;}</style></defs><title>Icon_24px_VirtualPrivateCloud_Color</title><g data-name="Product Icons"><rect class="cls-1" x="16" y="2" width="6" height="6"/><rect class="cls-2" x="19" y="2" width="3" height="6"/><rect class="cls-1" x="16" y="16" width="6" height="6"/><rect class="cls-2" x="19" y="16" width="3" height="6"/><rect class="cls-1" x="2" y="2" width="6" height="6"/><rect class="cls-2" x="5" y="2" width="3" height="6"/><rect class="cls-1" x="2" y="16" width="6" height="6"/><rect class="cls-2" x="5" y="16" width="3" height="6"/><rect class="cls-2" x="8" y="4" width="8" height="2"/><rect class="cls-2" x="8" y="18" width="8" height="2"/><rect class="cls-2" x="18" y="8" width="2" height="8"/><rect class="cls-2" x="4" y="8" width="2" height="8"/><rect class="cls-3" x="4" y="8" width="2" height="2"/><rect class="cls-3" x="18" y="8" width="2" height="2"/><rect class="cls-3" x="8" y="4" width="2" height="2"/><rect class="cls-3" x="8" y="18" width="2" height="2"/></g></svg>', Yb = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{filter:url(#luminosity-noclip);}.cls-2{fill:#669df6;}.cls-3{mask:url(#mask);}.cls-4{fill:#4285f4;}.cls-5{fill:#aecbfa;}</style><filter id="luminosity-noclip" x="4.64" y="4.19" width="14.73" height="12.76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-color="#fff" result="bg"/><feBlend in="SourceGraphic" in2="bg"/></filter><mask id="mask" x="4.64" y="4.19" width="14.73" height="12.76" maskUnits="userSpaceOnUse"><circle class="cls-1" cx="12" cy="12.23" r="3.58"/></mask></defs><title>Icon_24px_Pub-Sub_Color</title><g data-name="Product Icons"><circle class="cls-2" cx="18.97" cy="8.21" r="1.72"/><circle class="cls-2" cx="5.03" cy="8.21" r="1.72"/><circle class="cls-2" cx="12" cy="20.28" r="1.72"/><g class="cls-3"><rect class="cls-4" x="14.69" y="10.22" width="1.59" height="8.04" transform="matrix(0.5, -0.87, 0.87, 0.5, -4.59, 20.53)"/><rect class="cls-4" x="4.49" y="13.45" width="8.04" height="1.59" transform="translate(-5.98 6.17) rotate(-30)"/><rect class="cls-4" x="11.2" y="4.19" width="1.59" height="8.04"/></g><circle class="cls-5" cx="12" cy="12.23" r="2.78"/><circle class="cls-5" cx="5.03" cy="16.25" r="2.19"/><circle class="cls-5" cx="18.97" cy="16.25" r="2.19"/><circle class="cls-5" cx="12" cy="4.19" r="2.19"/></g></svg>', Kb = '<svg id="Artwork" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><circle cx="11.45" cy="11.51" r="2.89" style="fill:#669df6"/><path d="M18.05,6.81a8.12,8.12,0,0,0-4.94-3.23l-.27,1.3A6.79,6.79,0,1,1,6.65,6.74l-1-.94a8.1,8.1,0,1,0,13,2.12A1.31,1.31,0,0,1,18.05,6.81Z" style="fill:#aecbfa"/><path d="M14.46,20.42a2,2,0,1,1,0-3.93" style="fill:#669df6"/><path d="M14.46,16.49a2,2,0,1,1,0,3.93" style="fill:#4285f4"/><path d="M19.38,8.1a1.34,1.34,0,0,1,0-2.67v-1h0a2.38,2.38,0,0,0,0,4.75Z" style="fill:#669df6"/><path d="M19.38,5.43a1.34,1.34,0,0,1,0,2.67v1h0a2.38,2.38,0,0,0,0-4.75Z" style="fill:#4285f4"/><path d="M4.22,12.78a2,2,0,1,1,0-3.93" style="fill:#669df6"/><path d="M4.22,8.85a2,2,0,0,1,0,3.93" style="fill:#4285f4"/></svg>', Qb = '<svg id="Artwork" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><polygon points="11.19 11.35 15.75 3.51 6.75 3.51 2.25 11.35 11.19 11.35" style="fill:#aecbfa"/><polygon points="2.25 12.65 6.74 20.49 15.73 20.49 11.25 12.65 2.25 12.65" style="fill:#4285f4"/><path d="M21.75,12l-4.5-7.87L12.74,12l4.51,7.87Z" style="fill:#669df6"/></svg>', Xb = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;}.cls-2{fill:#669df6;}.cls-3{fill:#aecbfa;}.cls-4{fill:#4285f4;}</style></defs><title>Icon_24px_VisionAPI_Color</title><g data-name="Product Icons"><g data-name="colored-32/vision"><rect class="cls-1" width="24" height="24"/><g ><polygon class="cls-2" points="6 12 12 16.99 12 20 2 12 6 12"/><polygon id="Shape-2" data-name="Shape" class="cls-2" points="12 16.99 18 12 22 12 12 20 12 16.99"/><polygon id="Shape-3" data-name="Shape" class="cls-3" points="2 12 12 4 12 7.01 6 12 2 12"/><polygon id="Shape-4" data-name="Shape" class="cls-3" points="12 7.01 18 12 22 12 12 4 12 7.01"/><circle id="Oval" class="cls-4" cx="12" cy="12" r="2"/></g></g></g></svg>', i4 = {
  actor: eb,
  boundary: tb,
  control: nb,
  database: rb,
  entity: sb,
  cloudwatch: ib,
  cloudfront: ob,
  cognito: ab,
  dynamodb: lb,
  ebs: cb,
  ec2: ub,
  ecs: hb,
  efs: nu,
  elasticache: db,
  elasticbeantalk: pb,
  elasticfilesystem: nu,
  glacier: fb,
  iam: gb,
  kinesis: mb,
  lambda: xb,
  lightsail: Lb,
  rds: yb,
  redshift: vb,
  s3: bb,
  sns: _b,
  sqs: wb,
  sagemaker: Cb,
  vpc: Eb,
  azureactivedirectory: kb,
  azurebackup: Tb,
  azurecdn: Ab,
  azuredatafactory: Sb,
  azuredevops: Rb,
  azurefunction: Ib,
  azuresql: Ob,
  cosmosdb: Nb,
  logicapps: Pb,
  virtualmachine: Mb,
  bigtable: Fb,
  bigquery: zb,
  cloudcdn: Db,
  clouddns: Bb,
  cloudinterconnect: Ub,
  cloudloadbalancing: Hb,
  cloudsql: Vb,
  cloudstorage: Gb,
  datalab: jb,
  dataproc: $b,
  googleiam: qb,
  googlesecurity: Zb,
  googlevpc: Wb,
  pubsub: Yb,
  securityscanner: Kb,
  stackdriver: Qb,
  visionapi: Xb
}, Jb = {
  name: "Participant",
  props: {
    entity: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      color: void 0
    };
  },
  mounted() {
    this.updateFontColor();
  },
  updated() {
    this.updateFontColor();
  },
  computed: {
    selected() {
      return this.$store.state.selected.includes(this.entity.name);
    },
    stereotype() {
      return this.entity.stereotype;
    },
    comment() {
      return this.entity.comment;
    },
    icon() {
      var t;
      return i4[(t = this.entity.type) == null ? void 0 : t.toLowerCase()];
    },
    backgroundColor() {
      try {
        return this.entity.color ? this.entity.color && Jv(this.entity.color) : void 0;
      } catch {
        return;
      }
    }
  },
  methods: {
    onSelect() {
      this.$store.commit("onSelect", this.entity.name);
    },
    updateFontColor() {
      if (!this.backgroundColor)
        return;
      let t = window.getComputedStyle(this.$refs.participant).getPropertyValue("background-color");
      if (!t)
        return;
      let e = Xv(t);
      this.color = e > 128 ? "#000" : "#fff";
    }
  }
}, e_ = ["innerHTML", "alt"], t_ = { class: "h-5 group flex flex-col justify-center" }, n_ = {
  key: 0,
  class: "absolute hidden rounded-lg transform -translate-y-8 bg-gray-400 px-2 py-1 text-center text-sm text-white group-hover:flex"
}, r_ = {
  key: 1,
  class: "interface leading-4"
}, s_ = { class: "name leading-4 zenuml-name" };
function i_(t, e, n, r, s, i) {
  return P(), ee("div", {
    class: ze(["participant bg-skin-participant border-skin-participant text-skin-participant rounded text-base leading-4 flex flex-col justify-center z-10 h-10 sticky top-8", { selected: i.selected }]),
    ref: "participant",
    style: be({ backgroundColor: i.backgroundColor, color: s.color }),
    onClick: e[0] || (e[0] = (...o) => i.onSelect && i.onSelect(...o))
  }, [
    i.icon ? (P(), ee("div", {
      key: 0,
      innerHTML: i.icon,
      class: "absolute left-1/2 transform -translate-x-1/2 -translate-y-full h-8 [&>svg]:w-full [&>svg]:h-full",
      alt: `icon for ${n.entity.name}`
    }, null, 8, e_)) : Te("", !0),
    T("div", t_, [
      i.comment ? (P(), ee("span", n_, Ke(i.comment), 1)) : Te("", !0),
      i.stereotype ? (P(), ee("label", r_, "«" + Ke(i.stereotype) + "»", 1)) : Te("", !0),
      T("label", s_, Ke(n.entity.label || n.entity.name), 1)
    ])
  ], 6);
}
const o4 = /* @__PURE__ */ Oe(Jb, [["render", i_]]), ys = js.child({ name: "LifeLine" }), o_ = {
  name: "life-line",
  components: { Participant: o4 },
  props: ["entity", "context", "groupLeft", "inGroup", "renderParticipants"],
  data: () => ({
    translateX: 0,
    top: 0
  }),
  computed: {
    ...zt(["centerOf"]),
    ...ol(["scale"]),
    debug() {
      return !!localStorage.zenumlDebug;
    },
    left() {
      return this.centerOf(this.entity.name) - 8 - (this.groupLeft || 0);
    }
  },
  mounted() {
    ys.debug(`LifeLine mounted for ${this.entity.name}`), this.$nextTick(() => {
      this.setTop(), ys.debug(`nextTick after updated for ${this.entity.name}`);
    }), n4.$on("participant_set_top", () => this.$nextTick(() => this.setTop()));
  },
  updated() {
    ys.debug(`updated for ${this.entity.name}`), this.$nextTick(() => {
      this.setTop(), ys.debug(`nextTick after updated for ${this.entity.name}`);
    });
  },
  methods: {
    onSelect() {
      this.$store.commit("onSelect", this.entity.name);
    },
    setTop() {
      const t = this.entity.name.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, "\\$1"), e = this.$root.$refs.diagram.$el.querySelector(`[data-to="${t}"]`), n = (e == null ? void 0 : e.offsetParent) != null;
      if (e && e.attributes["data-type"].value === "creation" && n) {
        ys.debug(`First message to ${this.entity.name} is creation`);
        const r = this.$el.getBoundingClientRect().y, s = e.getBoundingClientRect().y;
        this.top = (s - r) / this.scale;
      } else
        this.top = 0;
    }
  }
}, a_ = ["id"], l_ = {
  key: 1,
  class: "line bg-skin-lifeline w0 mx-auto flex-grow w-px"
};
function c_(t, e, n, r, s, i) {
  const o = fe("participant");
  return P(), ee("div", {
    id: n.entity.name,
    class: "lifeline absolute flex flex-col mx-2 transform -translate-x-1/2 h-full",
    style: be({ paddingTop: t.top + "px", left: i.left + "px" })
  }, [
    ko(T("div", null, Ke(t.centerOf(n.entity.name)), 513), [
      [si, i.debug]
    ]),
    n.renderParticipants ? (P(), Me(o, {
      key: 0,
      entity: n.entity
    }, null, 8, ["entity"])) : (P(), ee("div", l_))
  ], 12, a_);
}
const a4 = /* @__PURE__ */ Oe(o_, [["render", c_], ["__scopeId", "data-v-6efc771f"]]), u_ = {
  name: "lifeline-group",
  props: ["context", "renderParticipants"],
  computed: {
    ...zt(["centerOf"]),
    name() {
      var t, e;
      return (e = (t = this.context) == null ? void 0 : t.name()) == null ? void 0 : e.getFormattedText();
    },
    offset() {
      return 0;
    },
    left() {
      const t = this.entities[0].name, e = Math.max(kn(t, Yn.ParticipantName), "100");
      return this.centerOf(t) - e / 2 - 8;
    },
    right() {
      const t = Math.max(
        kn(this.entities.slice(-1).name, Yn.ParticipantName),
        "100"
      ), e = this.entities.slice(0).pop().name;
      return this.centerOf(e) + t / 2 + 20;
    },
    entities() {
      return cs(this.context).Array();
    }
  },
  components: {
    LifeLine: a4
  }
}, h_ = { class: "lifeline-group relative flex-grow" };
function d_(t, e, n, r, s, i) {
  const o = fe("life-line");
  return i.entities.length > 0 ? (P(), ee("div", {
    key: 0,
    class: "container absolute flex flex-col h-full",
    style: be({ left: `${i.left}px`, width: `${i.right - i.left}px` })
  }, [
    T("div", {
      class: ze(["flex flex-col flex-grow", { shadow: n.renderParticipants, "shadow-slate-500/50": !n.renderParticipants }])
    }, [
      T("div", h_, [
        (P(!0), ee(He, null, Cn(i.entities, (a) => (P(), Me(o, {
          inGroup: "true",
          key: a.name,
          ref_for: !0,
          ref: a.name,
          entity: a,
          "group-left": i.left,
          renderParticipants: n.renderParticipants
        }, null, 8, ["entity", "group-left", "renderParticipants"]))), 128))
      ])
    ], 2)
  ], 4)) : Te("", !0);
}
const p_ = /* @__PURE__ */ Oe(u_, [["render", d_]]), ru = js.child({ name: "LifeLineLayer" }), f_ = {
  name: "life-line-layer",
  props: ["context", "renderParticipants"],
  computed: {
    ...zt(["participants", "GroupContext", "ParticipantContext", "centerOf"]),
    debug() {
      return !!localStorage.zenumlDebug;
    },
    invisibleStarter() {
      return this.starterParticipant.name === "_STARTER_";
    },
    starterParticipant() {
      return this.participants.Starter();
    },
    starterOnTheLeft() {
      return !this.starterParticipant.explicit;
    },
    implicitParticipants() {
      return this.participants.ImplicitArray();
    },
    explicitGroupAndParticipants() {
      var t;
      return (t = this.context) == null ? void 0 : t.children.filter((e) => {
        const n = e instanceof Xd, r = e instanceof Jd;
        return n || r;
      });
    }
  },
  methods: {
    ...al(["increaseGeneration"]),
    getParticipantEntity(t) {
      return cs(t).First();
    }
  },
  updated() {
    ru.debug("LifeLineLayer updated");
  },
  mounted() {
    ru.debug("LifeLineLayer mounted");
  },
  components: {
    LifeLine: a4,
    LifeLineGroup: p_
  }
}, g_ = { class: "container relative grow" };
function m_(t, e, n, r, s, i) {
  const o = fe("life-line"), a = fe("life-line-group");
  return P(), ee("div", {
    class: "life-line-layer lifeline-layer absolute h-full flex flex-col pt-8 top-0",
    style: be({ "min-width": "200px", pointerEvents: n.renderParticipants ? "none" : "all" })
  }, [
    T("div", g_, [
      i.starterOnTheLeft ? (P(), Me(o, {
        key: 0,
        entity: i.starterParticipant,
        class: ze(["starter", { invisible: i.invisibleStarter && !i.debug }]),
        renderParticipants: n.renderParticipants
      }, null, 8, ["entity", "class", "renderParticipants"])) : Te("", !0),
      (P(!0), ee(He, null, Cn(i.explicitGroupAndParticipants, (l, c) => (P(), ee(He, null, [
        l instanceof t.GroupContext ? (P(), Me(a, {
          key: c,
          context: l,
          renderParticipants: n.renderParticipants
        }, null, 8, ["context", "renderParticipants"])) : Te("", !0),
        l instanceof t.ParticipantContext ? (P(), Me(o, {
          key: c,
          entity: i.getParticipantEntity(l),
          renderParticipants: n.renderParticipants
        }, null, 8, ["entity", "renderParticipants"])) : Te("", !0)
      ], 64))), 256)),
      (P(!0), ee(He, null, Cn(i.implicitParticipants, (l) => (P(), Me(o, {
        key: l.name,
        entity: l,
        renderParticipants: n.renderParticipants
      }, null, 8, ["entity", "renderParticipants"]))), 128))
    ])
  ], 4);
}
const x_ = /* @__PURE__ */ Oe(f_, [["render", m_]]), su = js.child({ name: "MessageLayer" }), L_ = {
  name: "message-layer",
  props: ["context"],
  data() {
    return {
      left: 0,
      right: 0,
      totalWidth: 0
    };
  },
  computed: {
    ...zt(["participants", "centerOf"]),
    paddingLeft() {
      if (this.participants.Array().length >= 1) {
        const t = this.participants.Array().slice(0)[0].name;
        return this.centerOf(t);
      }
      return 0;
    }
  },
  methods: {
    ...al(["onMessageLayerMountedOrUpdated"]),
    participantNames() {
      return this.participants.Names();
    }
  },
  updated() {
    su.debug("MessageLayer updated");
  },
  mounted() {
    su.debug("MessageLayer mounted");
  }
}, y_ = { class: "message-layer pt-24 pb-10" };
function v_(t, e, n, r, s, i) {
  const o = fe("block");
  return P(), ee("div", y_, [
    ne(o, {
      context: n.context,
      style: be({ "padding-left": i.paddingLeft + "px" })
    }, null, 8, ["context", "style"])
  ]);
}
const b_ = /* @__PURE__ */ Oe(L_, [["render", v_]]), __ = v.tree.ParseTreeWalker.DEFAULT;
class mc extends w {
  constructor(e) {
    super(), W(this, "_orderedParticipants"), W(this, "frameRoot", null), W(this, "parents", []), this._orderedParticipants = e;
  }
  getLocalParticipants(e) {
    return [
      e.Origin(),
      ...cs(e).ImplicitArray().map((n) => n.name)
    ];
  }
  getLeft(e) {
    let n = this.getLocalParticipants(e);
    return this._orderedParticipants.find((r) => n.includes(r)) || "";
  }
  getRight(e) {
    return this._orderedParticipants.slice().reverse().find((n) => this.getLocalParticipants(e).includes(n)) || "";
  }
  enterFragment(e) {
    var n;
    const r = { left: this.getLeft(e), right: this.getRight(e), children: [] };
    this.frameRoot || (this.frameRoot = r), this.parents.length > 0 && ((n = this.parents[this.parents.length - 1].children) == null || n.push(r)), this.parents.push(r);
  }
  exitFragment() {
    this.parents.pop();
  }
  enterTcf(e) {
    this.enterFragment(e);
  }
  enterOpt(e) {
    this.enterFragment(e);
  }
  enterPar(e) {
    this.enterFragment(e);
  }
  enterAlt(e) {
    this.enterFragment(e);
  }
  enterLoop(e) {
    this.enterFragment(e);
  }
  exitTcf() {
    this.exitFragment();
  }
  exitOpt() {
    this.exitFragment();
  }
  exitPar() {
    this.exitFragment();
  }
  exitAlt() {
    this.exitFragment();
  }
  exitLoop() {
    this.exitFragment();
  }
  getFrame(e) {
    return e.children.map((n) => {
      __.walk(this, n);
    }), this.frameRoot;
  }
}
function La(t, e) {
  if (!t.children || t.children.length === 0)
    return 1;
  let n = 0;
  for (let r of t.children)
    e === "LEFT" && r.left !== t.left || e === "RIGHT" && r.right !== t.right || (n = Math.max(n, La(r, e)));
  return n + 1;
}
function xc(t) {
  return t ? {
    left: 10 * La(t, "LEFT"),
    right: 10 * La(t, "RIGHT")
  } : { left: 0, right: 0 };
}
function l4(t, e) {
  const n = e.orderedParticipantNames(), r = [t.Origin(), ...cs(t).Names()], s = n.find((c) => r.includes(c)) || "", i = n.slice().reverse().find((c) => r.includes(c)) || "", o = new mc(n).getFrame(t), a = xc(o), l = w_(t, i, e);
  return console.debug(`frame: ${JSON.stringify(o)} extraWidth: ${l}, leftParticipant: ${s}, rightParticipant: ${i}, border: ${JSON.stringify(a)}`), e.distance(s, i) + a.left + a.right + sn.half(kn, s) + sn.half(kn, i) + l;
}
function w_(t, e, n) {
  const r = e4(t).filter((s) => s.from === s.to).map((s) => kn(s.signature, Yn.MessageContent) + 37 - n.distance(s.from, e) - sn.half(kn, e));
  return Math.max.apply(null, [0, ...r]);
}
const C_ = {
  name: "seq-diagram",
  components: {
    LifeLineLayer: x_,
    MessageLayer: b_
  },
  computed: {
    ...zt(["rootContext", "coordinates"]),
    width() {
      return l4(this.rootContext, this.coordinates);
    },
    paddingLeft: function() {
      const t = this.coordinates.orderedParticipantNames(), e = new mc(t).getFrame(this.rootContext);
      return e ? xc(e).left + xa : 0;
    }
  }
};
function E_(t, e, n, r, s, i) {
  const o = fe("life-line-layer"), a = fe("message-layer");
  return P(), ee("div", {
    class: "zenuml sequence-diagram relative box-border text-left overflow-visible",
    style: be({ paddingLeft: `${i.paddingLeft}px` }),
    ref: "diagram"
  }, [
    ne(o, {
      context: t.rootContext.head(),
      renderParticipants: !1
    }, null, 8, ["context"]),
    ne(a, {
      context: t.rootContext.block(),
      style: be({ width: `${i.width}px` })
    }, null, 8, ["context", "style"]),
    ne(o, {
      context: t.rootContext.head(),
      renderParticipants: !0
    }, null, 8, ["context"])
  ], 4);
}
const c4 = /* @__PURE__ */ Oe(C_, [["render", E_]]), k_ = {
  name: "IconList",
  props: ["types"],
  computed: {},
  methods: {
    icon(t) {
      return i4[t == null ? void 0 : t.toLowerCase()];
    }
  }
}, T_ = {
  role: "list",
  class: "mt-3 grid grid-cols-4 gap-5 sm:gap-6 sm:grid-cols-6 lg:grid-cols-8"
}, A_ = { class: "h-12 flex items-center justify-center bg-gray-50 text-white text-sm font-medium rounded-t-md" }, S_ = ["innerHTML", "alt"], R_ = { class: "flex items-center justify-center border-t border-r border-b border-gray-200 bg-white rounded-b-md" }, I_ = { class: "px-2 py-2 text-xs" }, O_ = { class: "text-gray-900 font-medium hover:text-gray-600" };
function N_(t, e, n, r, s, i) {
  return P(), ee("ul", T_, [
    (P(!0), ee(He, null, Cn(n.types, (o) => (P(), ee("li", {
      key: o,
      class: "col-span-1 flex flex-col shadow-sm rounded-md"
    }, [
      T("div", A_, [
        i.icon ? (P(), ee("i", {
          key: 0,
          innerHTML: i.icon(o),
          class: "object-contain h-8 w-8 m-auto [&>svg]:w-full [&>svg]:h-full",
          alt: `icon for ${o}`
        }, null, 8, S_)) : Te("", !0)
      ]),
      T("div", R_, [
        T("div", I_, [
          T("span", O_, "@" + Ke(o), 1)
        ])
      ])
    ]))), 128))
  ]);
}
const P_ = /* @__PURE__ */ Oe(k_, [["render", N_]]), M_ = {
  name: "TipsDialog",
  components: { IconList: P_ },
  computed: {
    standardTypes() {
      return ["Actor", "Boundary", "Control", "Database", "Entity"];
    },
    awsServices() {
      return [
        "CloudWatch",
        "CloudFront",
        "Cognito",
        "DynamoDB",
        "EBS",
        "EC2",
        "ECS",
        "EFS",
        "ElastiCache",
        "ElasticBeantalk",
        "ElasticFileSystem",
        "Glacier",
        "IAM",
        "Kinesis",
        "Lambda",
        "LightSail",
        "RDS",
        "Redshift",
        "S3",
        "SNS",
        "SQS",
        "Sagemaker",
        "VPC"
      ];
    },
    azureServices() {
      return [
        "AzureActiveDirectory",
        "AzureBackup",
        "AzureCDN",
        "AzureDataFactory",
        "AzureDevOps",
        "AzureFunction",
        "AzureSQL",
        "CosmosDB",
        "LogicApps",
        "VirtualMachine"
      ];
    },
    googleServices() {
      return [
        "BigTable",
        "BigQuery",
        "CloudCDN",
        "CloudDNS",
        "CloudInterconnect",
        "CloudLoadBalancing",
        "CloudSQL",
        "CloudStorage",
        "DataLab",
        "DataProc",
        "GoogleIAM",
        "GoogleSecurity",
        "GoogleVPC",
        "PubSub",
        "SecurityScanner",
        "StackDriver",
        "VisionAPI"
      ];
    }
  },
  methods: {
    closeTipsDialog() {
      var t;
      this.$store.state.showTips = !1;
      try {
        (t = this.$gtag) == null || t.event("close", {
          event_category: "help",
          event_label: "tips dialog"
        });
      } catch (e) {
        console.error(e);
      }
    }
  }
}, F_ = { class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block" }, z_ = /* @__PURE__ */ T("div", {
  class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
  "aria-hidden": "true"
}, null, -1), D_ = /* @__PURE__ */ T("span", {
  class: "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1), B_ = { class: "z-40 inline-block align-bottom bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-2" }, U_ = {
  class: "bg-white px-4 py-5 border-b border-gray-200 sm:px-6",
  slot: "header"
}, H_ = /* @__PURE__ */ T("h3", { class: "text-xl leading-6 font-medium text-gray-900 inline-block" }, "ZenUML Tips", -1), V_ = /* @__PURE__ */ T("span", { class: "sr-only" }, "Close menu", -1), G_ = /* @__PURE__ */ T("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ T("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), j_ = [
  V_,
  G_
], $_ = { slot: "body" }, q_ = { class: "relative bg-white pb-32 mt-4 overflow-hidden" }, Z_ = { class: "relative" }, W_ = { class: "lg:mx-auto lg:max-w-11/12 lg:px-8" }, Y_ = /* @__PURE__ */ ti(`<div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"><div><div class="px-4 max-w-full mx-auto sm:px-6 lg:max-w-none lg:mx-0"><h2 class="mt-4 mb-4 text-lg leading-6 font-medium text-gray-900"> Declare Participants </h2><pre class="text-xs w-full bg-gray-50 text-gray-600 p-2 rounded-lg"><code>// Define a Starter (optional)
@Starter(A)

// Show icons
@EC2 A

// Use &#39;group&#39; keyword
group GroupName {  B  C }

// Use stereotype
&lt;&lt;servlet&gt;&gt; ServiceX</code></pre></div><div class="px-4 max-w-7xl mx-auto sm:px-6 lg:max-w-none lg:mx-0"><h2 class="mt-4 mb-4 text-lg leading-6 font-medium text-gray-900">Divider</h2><pre class="text-xs w-full bg-gray-50 text-gray-600 p-2 rounded-lg"><code>A.method()
==divider name==
B.method()
</code></pre></div></div><div class="px-4 w-full mx-auto lg:max-w-none lg:mx-0"><h2 class="mt-4 mb-4 text-lg leading-6 font-medium text-gray-900">Fragments</h2><pre class="text-xs w-full bg-gray-50 text-gray-600 p-2 rounded-lg"><code>// Alt (AKA if/else)
if(condition1) {}
else if (condition2) {}
else {}

// \`loop\`, \`for\`, \`forEach\`, \`while\`
// are treated the same
forEach(records) {}

// Opt
opt {}

// Par
par {}

// Try Catch Finally
try {} catch() {} finally {}
</code></pre></div><div class="px-4 w-full mx-auto lg:max-w-none lg:mx-0"><h2 class="mt-4 mb-4 text-lg leading-6 font-medium text-gray-900">Messages</h2><pre class="text-xs w-full bg-gray-50 text-gray-600 p-2 rounded-lg"><code>//Creation
new ParticipantName()

//Sync Message
A.method
A-&gt;B.method

//Async Message
A-&gt;B: async message

//Reply Message, three styles
x = A.method
A.method() {
  return x
}
A.method() {
  @return A-&gt;B: message
}</code></pre></div></div>`, 1), K_ = { class: "px-4 max-w-7xl mx-auto sm:px-6 lg:max-w-none lg:mx-0" }, Q_ = /* @__PURE__ */ T("h2", { class: "mt-8 mb-4 text-lg leading-6 font-medium text-gray-900" }, " Builtin Icons ", -1), X_ = /* @__PURE__ */ T("p", { class: "text-sm text-gray-500" }, [
  /* @__PURE__ */ xr(" Use "),
  /* @__PURE__ */ T("span", { class: "rounded inline-block bg-gray-50 text-gray-600" }, [
    /* @__PURE__ */ T("code", { class: "text-xs" }, "@Actor TheParticipant")
  ]),
  /* @__PURE__ */ xr(" to define the type of the participant. ")
], -1), J_ = /* @__PURE__ */ T("hr", { class: "mt-4" }, null, -1), ew = /* @__PURE__ */ T("hr", { class: "mt-4" }, null, -1), tw = /* @__PURE__ */ T("hr", { class: "mt-4" }, null, -1);
function nw(t, e, n, r, s, i) {
  const o = fe("IconList");
  return P(), ee("div", F_, [
    z_,
    D_,
    T("div", B_, [
      T("div", null, [
        T("div", U_, [
          H_,
          T("button", {
            type: "button",
            onClick: e[0] || (e[0] = (a) => i.closeTipsDialog()),
            class: "float-right bg-white rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          }, j_)
        ]),
        T("div", $_, [
          T("div", q_, [
            T("div", Z_, [
              T("div", W_, [
                Y_,
                T("div", K_, [
                  Q_,
                  X_,
                  ne(o, { types: i.standardTypes }, null, 8, ["types"]),
                  J_,
                  ne(o, { types: i.awsServices }, null, 8, ["types"]),
                  ew,
                  ne(o, { types: i.azureServices }, null, 8, ["types"]),
                  tw,
                  ne(o, { types: i.googleServices }, null, 8, ["types"])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ]);
}
const rw = /* @__PURE__ */ Oe(M_, [["render", nw]]), sw = {
  name: "point",
  props: ["fill", "rtl"]
}, u4 = (t) => (br("data-v-ca07199a"), t = t(), _r(), t), iw = {
  key: 0,
  class: "arrow stroke-2",
  height: "10",
  width: "10"
}, ow = /* @__PURE__ */ u4(() => /* @__PURE__ */ T("polyline", {
  class: "right head fill-current stroke-current",
  points: "0,0 10,5 0,10"
}, null, -1)), aw = [
  ow
], lw = {
  key: 1,
  class: "arrow stroke-2",
  height: "10",
  width: "10"
}, cw = /* @__PURE__ */ u4(() => /* @__PURE__ */ T("polyline", {
  class: "left head fill-current stroke-current",
  points: "10,0 0,5 10,10"
}, null, -1)), uw = [
  cw
];
function hw(t, e, n, r, s, i) {
  return P(), ee("div", {
    class: ze(["point text-skin-message-arrow", { fill: n.fill, "no-fill": !n.fill, "right-to-left": n.rtl }])
  }, [
    n.rtl ? Te("", !0) : (P(), ee("svg", iw, aw)),
    n.rtl ? (P(), ee("svg", lw, uw)) : Te("", !0)
  ], 2);
}
const dw = /* @__PURE__ */ Oe(sw, [["render", hw], ["__scopeId", "data-v-ca07199a"]]), pw = {
  name: "message",
  props: ["content", "rtl", "type", "color"],
  computed: {
    isAsync: function() {
      return this.type === "async";
    },
    borderStyle() {
      switch (this.type) {
        case "sync":
        case "async":
          return "solid";
        case "creation":
        case "return":
          return "dashed";
      }
      return "";
    },
    fill() {
      switch (this.type) {
        case "sync":
        case "async":
          return !0;
        case "creation":
        case "return":
          return !1;
      }
      return !1;
    }
  },
  components: {
    Point: dw
  }
};
function fw(t, e, n, r, s, i) {
  const o = fe("point");
  return P(), ee("div", {
    class: ze(["message border-skin-message-arrow border-b-2 flex items-end", {
      "flex-row-reverse": n.rtl,
      return: n.type === "return",
      "right-to-left": n.rtl,
      "text-left": i.isAsync,
      "text-center": !i.isAsync
    }]),
    style: be({ "border-bottom-style": i.borderStyle })
  }, [
    T("div", {
      class: "name flex-grow text-sm truncate hover:whitespace-normal hover:text-skin-message-hover hover:bg-skin-message-hover zenuml-name",
      style: be({ color: n.color })
    }, Ke(n.content), 5),
    ne(o, {
      class: "flex-shrink-0 transform translate-y-1/2 -my-px",
      fill: i.fill,
      rtl: n.rtl
    }, null, 8, ["fill", "rtl"])
  ], 6);
}
const pi = /* @__PURE__ */ Oe(pw, [["render", fw]]), gw = {
  name: "WidthProvider",
  components: { Message: pi },
  data: function() {
    return {
      text: "abcd"
    };
  },
  methods: {
    width: function(t, e) {
      return console.log(t, e), this.text = t, this.$el.clientWidth;
    }
  },
  mounted() {
    this.$store.state.widthProvider = this;
  }
}, mw = { class: "invisible" };
function xw(t, e, n, r, s, i) {
  const o = fe("message");
  return P(), ee("div", mw, [
    ne(o, {
      content: t.text,
      rtl: "false",
      type: "sync"
    }, null, 8, ["content"])
  ]);
}
const Lw = /* @__PURE__ */ Oe(gw, [["render", xw]]);
function yw(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), s = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(s), e && (r.href = e), s.href = t, s.href;
}
const vw = (() => {
  let t = 0;
  const e = () => `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4);
  return () => (t += 1, `u${e()}${t}`);
})();
function Kn(t) {
  const e = [];
  for (let n = 0, r = t.length; n < r; n++)
    e.push(t[n]);
  return e;
}
function ao(t, e) {
  const n = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return n ? parseFloat(n.replace("px", "")) : 0;
}
function bw(t) {
  const e = ao(t, "border-left-width"), n = ao(t, "border-right-width");
  return t.clientWidth + e + n;
}
function _w(t) {
  const e = ao(t, "border-top-width"), n = ao(t, "border-bottom-width");
  return t.clientHeight + e + n;
}
function h4(t, e = {}) {
  const n = e.width || bw(t), r = e.height || _w(t);
  return { width: n, height: r };
}
function ww() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const n = e && e.env ? e.env.devicePixelRatio : null;
  return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const St = 16384;
function Cw(t) {
  (t.width > St || t.height > St) && (t.width > St && t.height > St ? t.width > t.height ? (t.height *= St / t.width, t.width = St) : (t.width *= St / t.height, t.height = St) : t.width > St ? (t.height *= St / t.width, t.width = St) : (t.width *= St / t.height, t.height = St));
}
function Ew(t, e = {}) {
  return t.toBlob ? new Promise((n) => {
    t.toBlob(n, e.type ? e.type : "image/png", e.quality ? e.quality : 1);
  }) : new Promise((n) => {
    const r = window.atob(t.toDataURL(e.type ? e.type : void 0, e.quality ? e.quality : void 0).split(",")[1]), s = r.length, i = new Uint8Array(s);
    for (let o = 0; o < s; o += 1)
      i[o] = r.charCodeAt(o);
    n(new Blob([i], {
      type: e.type ? e.type : "image/png"
    }));
  });
}
function lo(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.decode = () => e(r), r.onload = () => e(r), r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = t;
  });
}
async function kw(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Tw(t, e, n) {
  const r = "http://www.w3.org/2000/svg", s = document.createElementNS(r, "svg"), i = document.createElementNS(r, "foreignObject");
  return s.setAttribute("width", `${e}`), s.setAttribute("height", `${n}`), s.setAttribute("viewBox", `0 0 ${e} ${n}`), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"), i.setAttribute("x", "0"), i.setAttribute("y", "0"), i.setAttribute("externalResourcesRequired", "true"), s.appendChild(i), i.appendChild(t), kw(s);
}
function Aw(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Sw(t) {
  return Kn(t).map((e) => {
    const n = t.getPropertyValue(e), r = t.getPropertyPriority(e);
    return `${e}: ${n}${r ? " !important" : ""};`;
  }).join(" ");
}
function Rw(t, e, n) {
  const r = `.${t}:${e}`, s = n.cssText ? Aw(n) : Sw(n);
  return document.createTextNode(`${r}{${s}}`);
}
function iu(t, e, n) {
  const r = window.getComputedStyle(t, n), s = r.getPropertyValue("content");
  if (s === "" || s === "none")
    return;
  const i = vw();
  try {
    e.className = `${e.className} ${i}`;
  } catch {
    return;
  }
  const o = document.createElement("style");
  o.appendChild(Rw(i, n, r)), e.appendChild(o);
}
function Iw(t, e) {
  iu(t, e, ":before"), iu(t, e, ":after");
}
const ou = "application/font-woff", au = "image/jpeg", Ow = {
  woff: ou,
  woff2: ou,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: au,
  jpeg: au,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Nw(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function Lc(t) {
  const e = Nw(t).toLowerCase();
  return Ow[e] || "";
}
function Pw(t) {
  return t.split(/,/)[1];
}
function ya(t) {
  return t.search(/^(data:)/) !== -1;
}
function d4(t, e) {
  return `data:${e};base64,${t}`;
}
async function p4(t, e, n) {
  const r = await fetch(t, e);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const s = await r.blob();
  return new Promise((i, o) => {
    const a = new FileReader();
    a.onerror = o, a.onloadend = () => {
      try {
        i(n({ res: r, result: a.result }));
      } catch (l) {
        o(l);
      }
    }, a.readAsDataURL(s);
  });
}
const T1 = {};
function Mw(t, e, n) {
  let r = t.replace(/\?.*/, "");
  return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? `[${e}]${r}` : r;
}
async function yc(t, e, n) {
  const r = Mw(t, e, n.includeQueryParams);
  if (T1[r] != null)
    return T1[r];
  n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let s;
  try {
    const i = await p4(t, n.fetchRequestInit, ({ res: o, result: a }) => (e || (e = o.headers.get("Content-Type") || ""), Pw(a)));
    s = d4(i, e);
  } catch (i) {
    s = n.imagePlaceholder || "";
    let o = `Failed to fetch resource: ${t}`;
    i && (o = typeof i == "string" ? i : i.message), o && console.warn(o);
  }
  return T1[r] = s, s;
}
async function Fw(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : lo(e);
}
async function zw(t, e) {
  if (t.currentSrc) {
    const i = document.createElement("canvas"), o = i.getContext("2d");
    i.width = t.clientWidth, i.height = t.clientHeight, o == null || o.drawImage(t, 0, 0, i.width, i.height);
    const a = i.toDataURL();
    return lo(a);
  }
  const n = t.poster, r = Lc(n), s = await yc(n, r, e);
  return lo(s);
}
async function Dw(t) {
  var e;
  try {
    if (!((e = t == null ? void 0 : t.contentDocument) === null || e === void 0) && e.body)
      return await s1(t.contentDocument.body, {}, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function Bw(t, e) {
  return t instanceof HTMLCanvasElement ? Fw(t) : t instanceof HTMLVideoElement ? zw(t, e) : t instanceof HTMLIFrameElement ? Dw(t) : t.cloneNode(!1);
}
const Uw = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
async function Hw(t, e, n) {
  var r;
  const s = Uw(t) && t.assignedNodes ? Kn(t.assignedNodes()) : Kn(((r = t.shadowRoot) !== null && r !== void 0 ? r : t).childNodes);
  return s.length === 0 || t instanceof HTMLVideoElement || await s.reduce((i, o) => i.then(() => s1(o, n)).then((a) => {
    a && e.appendChild(a);
  }), Promise.resolve()), e;
}
function Vw(t, e) {
  const n = e.style;
  if (!n)
    return;
  const r = window.getComputedStyle(t);
  r.cssText ? (n.cssText = r.cssText, n.transformOrigin = r.transformOrigin) : Kn(r).forEach((s) => {
    let i = r.getPropertyValue(s);
    s === "font-size" && i.endsWith("px") && (i = `${Math.floor(parseFloat(i.substring(0, i.length - 2))) - 0.1}px`), n.setProperty(s, i, r.getPropertyPriority(s));
  });
}
function Gw(t, e) {
  t instanceof HTMLTextAreaElement && (e.innerHTML = t.value), t instanceof HTMLInputElement && e.setAttribute("value", t.value);
}
function jw(t, e) {
  if (t instanceof HTMLSelectElement) {
    const n = e, r = Array.from(n.children).find((s) => t.value === s.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function $w(t, e) {
  return e instanceof Element && (Vw(t, e), Iw(t, e), Gw(t, e), jw(t, e)), e;
}
async function qw(t, e) {
  const n = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (n.length === 0)
    return t;
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const o = n[i].getAttribute("xlink:href");
    if (o) {
      const a = t.querySelector(o), l = document.querySelector(o);
      !a && l && !r[o] && (r[o] = await s1(l, e, !0));
    }
  }
  const s = Object.values(r);
  if (s.length) {
    const i = "http://www.w3.org/1999/xhtml", o = document.createElementNS(i, "svg");
    o.setAttribute("xmlns", i), o.style.position = "absolute", o.style.width = "0", o.style.height = "0", o.style.overflow = "hidden", o.style.display = "none";
    const a = document.createElementNS(i, "defs");
    o.appendChild(a);
    for (let l = 0; l < s.length; l++)
      a.appendChild(s[l]);
    t.appendChild(o);
  }
  return t;
}
async function s1(t, e, n) {
  return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((r) => Bw(r, e)).then((r) => Hw(t, r, e)).then((r) => $w(t, r)).then((r) => qw(r, e));
}
const f4 = /url\((['"]?)([^'"]+?)\1\)/g, Zw = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Ww = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Yw(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function Kw(t) {
  const e = [];
  return t.replace(f4, (n, r, s) => (e.push(s), n)), e.filter((n) => !ya(n));
}
async function Qw(t, e, n, r, s) {
  try {
    const i = n ? yw(e, n) : e, o = Lc(e);
    let a;
    if (s) {
      const l = await s(i);
      a = d4(l, o);
    } else
      a = await yc(i, o, r);
    return t.replace(Yw(e), `$1${a}$3`);
  } catch {
  }
  return t;
}
function Xw(t, { preferredFontFormat: e }) {
  return e ? t.replace(Ww, (n) => {
    for (; ; ) {
      const [r, , s] = Zw.exec(n) || [];
      if (!s)
        return "";
      if (s === e)
        return `src: ${r};`;
    }
  }) : t;
}
function g4(t) {
  return t.search(f4) !== -1;
}
async function m4(t, e, n) {
  if (!g4(t))
    return t;
  const r = Xw(t, n);
  return Kw(r).reduce((s, i) => s.then((o) => Qw(o, i, e, n)), Promise.resolve(r));
}
async function Jw(t, e) {
  var n;
  const r = (n = t.style) === null || n === void 0 ? void 0 : n.getPropertyValue("background");
  if (r) {
    const s = await m4(r, null, e);
    t.style.setProperty("background", s, t.style.getPropertyPriority("background"));
  }
}
async function eC(t, e) {
  if (!(t instanceof HTMLImageElement && !ya(t.src)) && !(t instanceof SVGImageElement && !ya(t.href.baseVal)))
    return;
  const n = t instanceof HTMLImageElement ? t.src : t.href.baseVal, r = await yc(n, Lc(n), e);
  await new Promise((s, i) => {
    t.onload = s, t.onerror = i;
    const o = t;
    o.decode && (o.decode = s), t instanceof HTMLImageElement ? (t.srcset = "", t.src = r) : t.href.baseVal = r;
  });
}
async function tC(t, e) {
  const n = Kn(t.childNodes).map((r) => x4(r, e));
  await Promise.all(n).then(() => t);
}
async function x4(t, e) {
  t instanceof Element && (await Jw(t, e), await eC(t, e), await tC(t, e));
}
function nC(t, e) {
  const { style: n } = t;
  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
  const r = e.style;
  return r != null && Object.keys(r).forEach((s) => {
    n[s] = r[s];
  }), t;
}
const lu = {};
async function cu(t) {
  let e = lu[t];
  if (e != null)
    return e;
  const n = await (await fetch(t)).text();
  return e = { url: t, cssText: n }, lu[t] = e, e;
}
async function uu(t, e) {
  let n = t.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, s = (n.match(/url\([^)]+\)/g) || []).map(async (i) => {
    let o = i.replace(r, "$1");
    return o.startsWith("https://") || (o = new URL(o, t.url).href), p4(o, e.fetchRequestInit, ({ result: a }) => (n = n.replace(i, `url(${a})`), [i, a]));
  });
  return Promise.all(s).then(() => n);
}
function hu(t) {
  if (t == null)
    return [];
  const e = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let r = t.replace(n, "");
  const s = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const l = s.exec(r);
    if (l === null)
      break;
    e.push(l[0]);
  }
  r = r.replace(s, "");
  const i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, o = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", a = new RegExp(o, "gi");
  for (; ; ) {
    let l = i.exec(r);
    if (l === null) {
      if (l = a.exec(r), l === null)
        break;
      i.lastIndex = a.lastIndex;
    } else
      a.lastIndex = i.lastIndex;
    e.push(l[0]);
  }
  return e;
}
async function rC(t, e) {
  const n = [], r = [];
  return t.forEach((s) => {
    if ("cssRules" in s)
      try {
        Kn(s.cssRules || []).forEach((i, o) => {
          if (i.type === CSSRule.IMPORT_RULE) {
            let a = o + 1;
            const l = i.href, c = cu(l).then((u) => uu(u, e)).then((u) => hu(u).forEach((d) => {
              try {
                s.insertRule(d, d.startsWith("@import") ? a += 1 : s.cssRules.length);
              } catch (p) {
                console.error("Error inserting rule from remote css", {
                  rule: d,
                  error: p
                });
              }
            })).catch((u) => {
              console.error("Error loading remote css", u.toString());
            });
            r.push(c);
          }
        });
      } catch (i) {
        const o = t.find((a) => a.href == null) || document.styleSheets[0];
        s.href != null && r.push(cu(s.href).then((a) => uu(a, e)).then((a) => hu(a).forEach((l) => {
          o.insertRule(l, s.cssRules.length);
        })).catch((a) => {
          console.error("Error loading remote stylesheet", a.toString());
        })), console.error("Error inlining remote css file", i.toString());
      }
  }), Promise.all(r).then(() => (t.forEach((s) => {
    if ("cssRules" in s)
      try {
        Kn(s.cssRules || []).forEach((i) => {
          n.push(i);
        });
      } catch (i) {
        console.error(`Error while reading CSS rules from ${s.href}`, i.toString());
      }
  }), n));
}
function sC(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => g4(e.style.getPropertyValue("src")));
}
async function iC(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Kn(t.ownerDocument.styleSheets), r = await rC(n, e);
  return sC(r);
}
async function oC(t, e) {
  const n = await iC(t, e);
  return (await Promise.all(n.map((r) => {
    const s = r.parentStyleSheet ? r.parentStyleSheet.href : null;
    return m4(r.cssText, s, e);
  }))).join(`
`);
}
async function aC(t, e) {
  const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await oC(t, e);
  if (n) {
    const r = document.createElement("style"), s = document.createTextNode(n);
    r.appendChild(s), t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r);
  }
}
async function L4(t, e = {}) {
  const { width: n, height: r } = h4(t, e), s = await s1(t, e, !0);
  return await aC(s, e), await x4(s, e), nC(s, e), await Tw(s, n, r);
}
async function vc(t, e = {}) {
  const { width: n, height: r } = h4(t, e), s = await L4(t, e), i = await lo(s), o = document.createElement("canvas"), a = o.getContext("2d"), l = e.pixelRatio || ww(), c = e.canvasWidth || n, u = e.canvasHeight || r;
  return o.width = c * l, o.height = u * l, e.skipAutoScale || Cw(o), o.style.width = `${c}`, o.style.height = `${u}`, e.backgroundColor && (a.fillStyle = e.backgroundColor, a.fillRect(0, 0, o.width, o.height)), a.drawImage(i, 0, 0, o.width, o.height), o;
}
async function lC(t, e = {}) {
  return (await vc(t, e)).toDataURL();
}
async function cC(t, e = {}) {
  return (await vc(t, e)).toDataURL("image/jpeg", e.quality || 1);
}
async function uC(t, e = {}) {
  const n = await vc(t, e);
  return await Ew(n);
}
const hC = "process.env.VUE_APP_GIT_HASH", dC = "process.env.VUE_APP_GIT_BRANCH", pC = {
  name: "Debug",
  data() {
    return {
      commitHash: hC,
      gitBranch: dC
    };
  },
  computed: {
    debug() {
      return !!localStorage.zenumlDebug;
    }
  }
}, fC = { class: "flex flex-nowrap m-2 text-sm" }, gC = { class: "ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-green-200 text-green-700 rounded-sm" }, mC = /* @__PURE__ */ ti('<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>', 1), xC = { class: "inline-block px-2" };
function LC(t, e, n, r, s, i) {
  return ko((P(), ee("div", null, [
    T("div", fC, [
      T("div", gC, [
        mC,
        T("span", xC, Ke(s.gitBranch) + ":" + Ke(s.commitHash), 1)
      ])
    ])
  ], 512)), [
    [si, i.debug]
  ]);
}
const yC = /* @__PURE__ */ Oe(pC, [["render", LC]]), vC = {
  name: "DiagramFrame",
  computed: {
    ...ol(["showTips", "scale", "theme"]),
    ...zt(["rootContext"]),
    title() {
      var t;
      return this.rootContext || console.error("`rootContext` is empty. Please make sure `store` is properly configured."), (t = this.rootContext) == null ? void 0 : t.title();
    }
  },
  mounted() {
    this.$el.__vue__ = this;
  },
  methods: {
    ...al(["setScale"]),
    showTipsDialog() {
      var t;
      this.$store.state.showTips = !0;
      try {
        (t = this.$gtag) == null || t.event("view", {
          event_category: "help",
          event_label: "tips dialog"
        });
      } catch (e) {
        console.error(e);
      }
    },
    toPng() {
      return lC(this.$refs.export, {
        backgroundColor: "white",
        filter: (t) => {
          var e;
          return !((e = t == null ? void 0 : t.classList) != null && e.contains("hide-export"));
        }
      });
    },
    toSvg() {
      return L4(this.$refs.export, {
        backgroundColor: "white",
        filter: (t) => {
          var e;
          return !((e = t == null ? void 0 : t.classList) != null && e.contains("hide-export"));
        }
      });
    },
    toBlob() {
      return uC(this.$refs.export, {
        backgroundColor: "white",
        filter: (t) => {
          var e;
          return !((e = t == null ? void 0 : t.classList) != null && e.contains("hide-export"));
        }
      });
    },
    toJpeg() {
      return cC(this.$refs.export, {
        backgroundColor: "white",
        filter: (t) => {
          var e;
          return !((e = t == null ? void 0 : t.classList) != null && e.contains("hide-export"));
        }
      });
    },
    zoomIn() {
      const t = Math.min(1, this.scale + 0.1);
      this.setScale(t);
    },
    zoomOut() {
      this.setScale(this.scale - 0.1);
    },
    setTheme(t) {
      this.theme = t;
    },
    setStyle(t) {
      const e = "zenuml-style";
      let n = document.getElementById(e);
      n || (n = document.createElement("style"), n.id = e, document.head.append(n)), n.textContent = t;
    },
    setRemoteCss(t) {
      const e = new URL(t).hostname;
      if (e === "https://github.com" || e === "https://githubusercontent.com") {
        fetch(t.replace("github.com", "raw.githubusercontent.com").replace("blob/", "")).then((s) => s.text()).then((s) => {
          this.setStyle(s);
        });
        return;
      }
      const n = "zenuml-remote-css";
      let r = document.getElementById(n);
      r || (r = document.createElement("link"), r.id = n, r.rel = "stylesheet", document.head.append(r)), r.href = t;
    }
  },
  components: {
    Debug: yC,
    WidthProvider: Lw,
    TipsDialog: rw,
    DiagramTitle: qv,
    SeqDiagram: c4,
    Privacy: Vv
  }
}, bC = { class: "frame text-skin-frame bg-skin-frame border-skin-frame relative m-1 origin-top-left whitespace-nowrap rounded" }, _C = { ref: "content" }, wC = { class: "header text-skin-title bg-skin-title border-skin-frame border-b p-1 flex justify-between rounded-t" }, CC = { class: "left hide-export" }, EC = { class: "right flex-grow flex justify-between" }, kC = {
  key: 0,
  class: "fixed z-40 inset-0 overflow-y-auto",
  "aria-labelledby": "modal-title",
  role: "dialog",
  "aria-modal": "true"
}, TC = { class: "footer p-1 flex justify-between" }, AC = {
  class: "filter grayscale",
  style: { width: "1em", height: "1em", "vertical-align": "middle", fill: "currentColor", overflow: "hidden" },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, SC = /* @__PURE__ */ T("path", {
  d: "M514 912c-219.9 0-398.8-178.9-398.8-398.9 0-219.9 178.9-398.8 398.8-398.8s398.9 178.9 398.9 398.8c-0.1 220-179 398.9-398.9 398.9z m0-701.5c-166.9 0-302.7 135.8-302.7 302.7S347.1 815.9 514 815.9s302.7-135.8 302.7-302.7S680.9 210.5 514 210.5z",
  fill: "#BDD2EF"
}, null, -1), RC = /* @__PURE__ */ T("path", {
  d: "M431.1 502.4c-0.1 0.3 0.3 0.4 0.4 0.2 6.9-11.7 56.5-89.1 23.4 167.3-17.4 134.7 122.9 153.6 142.3-7.9 0.1-1-1.3-1.4-1.7-0.4-11.9 37.2-49.6 104.9-4.7-155.2 18.6-107.2-127.6-146-159.7-4z",
  fill: "#2867CE"
}, null, -1), IC = /* @__PURE__ */ T("path", {
  d: "M541.3 328m-68 0a68 68 0 1 0 136 0 68 68 0 1 0-136 0Z",
  fill: "#2867CE"
}, null, -1), OC = [
  SC,
  RC,
  IC
], NC = { class: "zoom-controls bg-skin-base text-skin-control flex justify-between w-28 hide-export" }, PC = /* @__PURE__ */ T("a", {
  target: "_blank",
  href: "https://zenuml.com",
  class: "brand text-skin-link absolute bottom-1 right-1 text-xs"
}, "ZenUML.com", -1);
function MC(t, e, n, r, s, i) {
  const o = fe("debug"), a = fe("diagram-title"), l = fe("privacy"), c = fe("TipsDialog"), u = fe("seq-diagram"), d = fe("width-provider");
  return P(), ee("div", {
    ref: "export",
    class: ze(["zenuml p-1 bg-skin-canvas", t.theme]),
    style: { display: "inline-block" }
  }, [
    ne(o),
    T("div", bC, [
      T("div", _C, [
        // T("div", wC, [
        //   T("div", CC, [
        //     Za(t.$slots, "default")
        //   ]),
        //   T("div", EC, [
        //     ne(a, { context: i.title }, null, 8, ["context"]),
        //     ne(l, { class: "hide-export flex items-center" })
        //   ])
        // ]),
        T("div", null, [
          t.showTips ? (P(), ee("div", kC, [
            ne(c)
          ])) : Te("", !0)
        ]),
        ne(u, {
          ref: "diagram",
          style: be({ transform: `scale(${t.scale})` }),
          class: "origin-top-left"
        }, null, 8, ["style"])
      ], 512),
      T("div", TC, [
        T("button", {
          class: "bottom-1 left-1 hide-export",
          onClick: e[0] || (e[0] = (p) => i.showTipsDialog())
        }, [
          (P(), ee("svg", AC, OC))
        ]),
        T("div", NC, [
          T("button", {
            class: "zoom-in px-1",
            onClick: e[1] || (e[1] = (p) => i.zoomIn())
          }, "+"),
          T("label", null, Ke(Number(t.scale * 100).toFixed(0)) + " %", 1),
          T("button", {
            class: "zoom-out px-1",
            onClick: e[2] || (e[2] = (p) => i.zoomOut())
          }, "-")
        ]),
        ne(d),
        PC
      ])
    ])
  ], 2);
}
const FC = /* @__PURE__ */ Oe(vC, [["render", MC]]);
function y4() {
  return {
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartLists: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1
  };
}
let us = y4();
function zC(t) {
  us = t;
}
const DC = /[&<>"']/, BC = /[&<>"']/g, UC = /[<>"']|&(?!#?\w+;)/, HC = /[<>"']|&(?!#?\w+;)/g, VC = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, du = (t) => VC[t];
function nt(t, e) {
  if (e) {
    if (DC.test(t))
      return t.replace(BC, du);
  } else if (UC.test(t))
    return t.replace(HC, du);
  return t;
}
const GC = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function v4(t) {
  return t.replace(GC, (e, n) => (n = n.toLowerCase(), n === "colon" ? ":" : n.charAt(0) === "#" ? n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1)) : ""));
}
const jC = /(^|[^\[])\^/g;
function Be(t, e) {
  t = t.source || t, e = e || "";
  const n = {
    replace: (r, s) => (s = s.source || s, s = s.replace(jC, "$1"), t = t.replace(r, s), n),
    getRegex: () => new RegExp(t, e)
  };
  return n;
}
const $C = /[^\w:]/g, qC = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function pu(t, e, n) {
  if (t) {
    let r;
    try {
      r = decodeURIComponent(v4(n)).replace($C, "").toLowerCase();
    } catch {
      return null;
    }
    if (r.indexOf("javascript:") === 0 || r.indexOf("vbscript:") === 0 || r.indexOf("data:") === 0)
      return null;
  }
  e && !qC.test(n) && (n = KC(e, n));
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const Mi = {}, ZC = /^[^:]+:\/*[^/]*$/, WC = /^([^:]+:)[\s\S]*$/, YC = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function KC(t, e) {
  Mi[" " + t] || (ZC.test(t) ? Mi[" " + t] = t + "/" : Mi[" " + t] = Gi(t, "/", !0)), t = Mi[" " + t];
  const n = t.indexOf(":") === -1;
  return e.substring(0, 2) === "//" ? n ? e : t.replace(WC, "$1") + e : e.charAt(0) === "/" ? n ? e : t.replace(YC, "$1") + e : t + e;
}
const co = { exec: function() {
} };
function Yt(t) {
  let e = 1, n, r;
  for (; e < arguments.length; e++) {
    n = arguments[e];
    for (r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function fu(t, e) {
  const n = t.replace(/\|/g, (i, o, a) => {
    let l = !1, c = o;
    for (; --c >= 0 && a[c] === "\\"; )
      l = !l;
    return l ? "|" : " |";
  }), r = n.split(/ \|/);
  let s = 0;
  if (r[0].trim() || r.shift(), r[r.length - 1].trim() || r.pop(), r.length > e)
    r.splice(e);
  else
    for (; r.length < e; )
      r.push("");
  for (; s < r.length; s++)
    r[s] = r[s].trim().replace(/\\\|/g, "|");
  return r;
}
function Gi(t, e, n) {
  const r = t.length;
  if (r === 0)
    return "";
  let s = 0;
  for (; s < r; ) {
    const i = t.charAt(r - s - 1);
    if (i === e && !n)
      s++;
    else if (i !== e && n)
      s++;
    else
      break;
  }
  return t.substr(0, r - s);
}
function QC(t, e) {
  if (t.indexOf(e[1]) === -1)
    return -1;
  const n = t.length;
  let r = 0, s = 0;
  for (; s < n; s++)
    if (t[s] === "\\")
      s++;
    else if (t[s] === e[0])
      r++;
    else if (t[s] === e[1] && (r--, r < 0))
      return s;
  return -1;
}
function b4(t) {
  t && t.sanitize && !t.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
}
function gu(t, e) {
  if (e < 1)
    return "";
  let n = "";
  for (; e > 1; )
    e & 1 && (n += t), e >>= 1, t += t;
  return n + t;
}
function mu(t, e, n, r) {
  const s = e.href, i = e.title ? nt(e.title) : null, o = t[1].replace(/\\([\[\]])/g, "$1");
  if (t[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const a = {
      type: "link",
      raw: n,
      href: s,
      title: i,
      text: o,
      tokens: r.inlineTokens(o, [])
    };
    return r.state.inLink = !1, a;
  } else
    return {
      type: "image",
      raw: n,
      href: s,
      title: i,
      text: nt(o)
    };
}
function XC(t, e) {
  const n = t.match(/^(\s+)(?:```)/);
  if (n === null)
    return e;
  const r = n[1];
  return e.split(`
`).map((s) => {
    const i = s.match(/^\s+/);
    if (i === null)
      return s;
    const [o] = i;
    return o.length >= r.length ? s.slice(r.length) : s;
  }).join(`
`);
}
class bc {
  constructor(e) {
    this.options = e || us;
  }
  space(e) {
    const n = this.rules.block.newline.exec(e);
    if (n && n[0].length > 0)
      return {
        type: "space",
        raw: n[0]
      };
  }
  code(e) {
    const n = this.rules.block.code.exec(e);
    if (n) {
      const r = n[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: n[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? r : Gi(r, `
`)
      };
    }
  }
  fences(e) {
    const n = this.rules.block.fences.exec(e);
    if (n) {
      const r = n[0], s = XC(r, n[3] || "");
      return {
        type: "code",
        raw: r,
        lang: n[2] ? n[2].trim() : n[2],
        text: s
      };
    }
  }
  heading(e) {
    const n = this.rules.block.heading.exec(e);
    if (n) {
      let r = n[2].trim();
      if (/#$/.test(r)) {
        const i = Gi(r, "#");
        (this.options.pedantic || !i || / $/.test(i)) && (r = i.trim());
      }
      const s = {
        type: "heading",
        raw: n[0],
        depth: n[1].length,
        text: r,
        tokens: []
      };
      return this.lexer.inline(s.text, s.tokens), s;
    }
  }
  hr(e) {
    const n = this.rules.block.hr.exec(e);
    if (n)
      return {
        type: "hr",
        raw: n[0]
      };
  }
  blockquote(e) {
    const n = this.rules.block.blockquote.exec(e);
    if (n) {
      const r = n[0].replace(/^ *> ?/gm, "");
      return {
        type: "blockquote",
        raw: n[0],
        tokens: this.lexer.blockTokens(r, []),
        text: r
      };
    }
  }
  list(e) {
    let n = this.rules.block.list.exec(e);
    if (n) {
      let r, s, i, o, a, l, c, u, d, p, g, _, k = n[1].trim();
      const j = k.length > 1, b = {
        type: "list",
        raw: "",
        ordered: j,
        start: j ? +k.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      k = j ? `\\d{1,9}\\${k.slice(-1)}` : `\\${k}`, this.options.pedantic && (k = j ? k : "[*+-]");
      const m = new RegExp(`^( {0,3}${k})((?: [^\\n]*)?(?:\\n|$))`);
      for (; e && (_ = !1, !(!(n = m.exec(e)) || this.rules.block.hr.test(e))); ) {
        if (r = n[0], e = e.substring(r.length), u = n[2].split(`
`, 1)[0], d = e.split(`
`, 1)[0], this.options.pedantic ? (o = 2, g = u.trimLeft()) : (o = n[2].search(/[^ ]/), o = o > 4 ? 1 : o, g = u.slice(o), o += n[1].length), l = !1, !u && /^ *$/.test(d) && (r += d + `
`, e = e.substring(d.length + 1), _ = !0), !_) {
          const C = new RegExp(`^ {0,${Math.min(3, o - 1)}}(?:[*+-]|\\d{1,9}[.)])`);
          for (; e && (p = e.split(`
`, 1)[0], u = p, this.options.pedantic && (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !C.test(u)); ) {
            if (u.search(/[^ ]/) >= o || !u.trim())
              g += `
` + u.slice(o);
            else if (!l)
              g += `
` + u;
            else
              break;
            !l && !u.trim() && (l = !0), r += p + `
`, e = e.substring(p.length + 1);
          }
        }
        b.loose || (c ? b.loose = !0 : /\n *\n *$/.test(r) && (c = !0)), this.options.gfm && (s = /^\[[ xX]\] /.exec(g), s && (i = s[0] !== "[ ] ", g = g.replace(/^\[[ xX]\] +/, ""))), b.items.push({
          type: "list_item",
          raw: r,
          task: !!s,
          checked: i,
          loose: !1,
          text: g
        }), b.raw += r;
      }
      b.items[b.items.length - 1].raw = r.trimRight(), b.items[b.items.length - 1].text = g.trimRight(), b.raw = b.raw.trimRight();
      const y = b.items.length;
      for (a = 0; a < y; a++) {
        this.lexer.state.top = !1, b.items[a].tokens = this.lexer.blockTokens(b.items[a].text, []);
        const C = b.items[a].tokens.filter((G) => G.type === "space"), F = C.every((G) => {
          const Y = G.raw.split("");
          let S = 0;
          for (const oe of Y)
            if (oe === `
` && (S += 1), S > 1)
              return !0;
          return !1;
        });
        !b.loose && C.length && F && (b.loose = !0, b.items[a].loose = !0);
      }
      return b;
    }
  }
  html(e) {
    const n = this.rules.block.html.exec(e);
    if (n) {
      const r = {
        type: "html",
        raw: n[0],
        pre: !this.options.sanitizer && (n[1] === "pre" || n[1] === "script" || n[1] === "style"),
        text: n[0]
      };
      return this.options.sanitize && (r.type = "paragraph", r.text = this.options.sanitizer ? this.options.sanitizer(n[0]) : nt(n[0]), r.tokens = [], this.lexer.inline(r.text, r.tokens)), r;
    }
  }
  def(e) {
    const n = this.rules.block.def.exec(e);
    if (n)
      return n[3] && (n[3] = n[3].substring(1, n[3].length - 1)), {
        type: "def",
        tag: n[1].toLowerCase().replace(/\s+/g, " "),
        raw: n[0],
        href: n[2],
        title: n[3]
      };
  }
  table(e) {
    const n = this.rules.block.table.exec(e);
    if (n) {
      const r = {
        type: "table",
        header: fu(n[1]).map((s) => ({ text: s })),
        align: n[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: n[3] ? n[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (r.header.length === r.align.length) {
        r.raw = n[0];
        let s = r.align.length, i, o, a, l;
        for (i = 0; i < s; i++)
          /^ *-+: *$/.test(r.align[i]) ? r.align[i] = "right" : /^ *:-+: *$/.test(r.align[i]) ? r.align[i] = "center" : /^ *:-+ *$/.test(r.align[i]) ? r.align[i] = "left" : r.align[i] = null;
        for (s = r.rows.length, i = 0; i < s; i++)
          r.rows[i] = fu(r.rows[i], r.header.length).map((c) => ({ text: c }));
        for (s = r.header.length, o = 0; o < s; o++)
          r.header[o].tokens = [], this.lexer.inlineTokens(r.header[o].text, r.header[o].tokens);
        for (s = r.rows.length, o = 0; o < s; o++)
          for (l = r.rows[o], a = 0; a < l.length; a++)
            l[a].tokens = [], this.lexer.inlineTokens(l[a].text, l[a].tokens);
        return r;
      }
    }
  }
  lheading(e) {
    const n = this.rules.block.lheading.exec(e);
    if (n) {
      const r = {
        type: "heading",
        raw: n[0],
        depth: n[2].charAt(0) === "=" ? 1 : 2,
        text: n[1],
        tokens: []
      };
      return this.lexer.inline(r.text, r.tokens), r;
    }
  }
  paragraph(e) {
    const n = this.rules.block.paragraph.exec(e);
    if (n) {
      const r = {
        type: "paragraph",
        raw: n[0],
        text: n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1],
        tokens: []
      };
      return this.lexer.inline(r.text, r.tokens), r;
    }
  }
  text(e) {
    const n = this.rules.block.text.exec(e);
    if (n) {
      const r = {
        type: "text",
        raw: n[0],
        text: n[0],
        tokens: []
      };
      return this.lexer.inline(r.text, r.tokens), r;
    }
  }
  escape(e) {
    const n = this.rules.inline.escape.exec(e);
    if (n)
      return {
        type: "escape",
        raw: n[0],
        text: nt(n[1])
      };
  }
  tag(e) {
    const n = this.rules.inline.tag.exec(e);
    if (n)
      return !this.lexer.state.inLink && /^<a /i.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) && (this.lexer.state.inRawBlock = !1), {
        type: this.options.sanitize ? "text" : "html",
        raw: n[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : nt(n[0]) : n[0]
      };
  }
  link(e) {
    const n = this.rules.inline.link.exec(e);
    if (n) {
      const r = n[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        const o = Gi(r.slice(0, -1), "\\");
        if ((r.length - o.length) % 2 === 0)
          return;
      } else {
        const o = QC(n[2], "()");
        if (o > -1) {
          const a = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + o;
          n[2] = n[2].substring(0, o), n[0] = n[0].substring(0, a).trim(), n[3] = "";
        }
      }
      let s = n[2], i = "";
      if (this.options.pedantic) {
        const o = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        o && (s = o[1], i = o[3]);
      } else
        i = n[3] ? n[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (this.options.pedantic && !/>$/.test(r) ? s = s.slice(1) : s = s.slice(1, -1)), mu(n, {
        href: s && s.replace(this.rules.inline._escapes, "$1"),
        title: i && i.replace(this.rules.inline._escapes, "$1")
      }, n[0], this.lexer);
    }
  }
  reflink(e, n) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      let s = (r[2] || r[1]).replace(/\s+/g, " ");
      if (s = n[s.toLowerCase()], !s || !s.href) {
        const i = r[0].charAt(0);
        return {
          type: "text",
          raw: i,
          text: i
        };
      }
      return mu(r, s, r[0], this.lexer);
    }
  }
  emStrong(e, n, r = "") {
    let s = this.rules.inline.emStrong.lDelim.exec(e);
    if (!s || s[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    const i = s[1] || s[2] || "";
    if (!i || i && (r === "" || this.rules.inline.punctuation.exec(r))) {
      const o = s[0].length - 1;
      let a, l, c = o, u = 0;
      const d = s[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (d.lastIndex = 0, n = n.slice(-1 * e.length + o); (s = d.exec(n)) != null; ) {
        if (a = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !a)
          continue;
        if (l = a.length, s[3] || s[4]) {
          c += l;
          continue;
        } else if ((s[5] || s[6]) && o % 3 && !((o + l) % 3)) {
          u += l;
          continue;
        }
        if (c -= l, c > 0)
          continue;
        if (l = Math.min(l, l + c + u), Math.min(o, l) % 2) {
          const g = e.slice(1, o + s.index + l);
          return {
            type: "em",
            raw: e.slice(0, o + s.index + l + 1),
            text: g,
            tokens: this.lexer.inlineTokens(g, [])
          };
        }
        const p = e.slice(2, o + s.index + l - 1);
        return {
          type: "strong",
          raw: e.slice(0, o + s.index + l + 1),
          text: p,
          tokens: this.lexer.inlineTokens(p, [])
        };
      }
    }
  }
  codespan(e) {
    const n = this.rules.inline.code.exec(e);
    if (n) {
      let r = n[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(r), i = /^ /.test(r) && / $/.test(r);
      return s && i && (r = r.substring(1, r.length - 1)), r = nt(r, !0), {
        type: "codespan",
        raw: n[0],
        text: r
      };
    }
  }
  br(e) {
    const n = this.rules.inline.br.exec(e);
    if (n)
      return {
        type: "br",
        raw: n[0]
      };
  }
  del(e) {
    const n = this.rules.inline.del.exec(e);
    if (n)
      return {
        type: "del",
        raw: n[0],
        text: n[2],
        tokens: this.lexer.inlineTokens(n[2], [])
      };
  }
  autolink(e, n) {
    const r = this.rules.inline.autolink.exec(e);
    if (r) {
      let s, i;
      return r[2] === "@" ? (s = nt(this.options.mangle ? n(r[1]) : r[1]), i = "mailto:" + s) : (s = nt(r[1]), i = s), {
        type: "link",
        raw: r[0],
        text: s,
        href: i,
        tokens: [
          {
            type: "text",
            raw: s,
            text: s
          }
        ]
      };
    }
  }
  url(e, n) {
    let r;
    if (r = this.rules.inline.url.exec(e)) {
      let s, i;
      if (r[2] === "@")
        s = nt(this.options.mangle ? n(r[0]) : r[0]), i = "mailto:" + s;
      else {
        let o;
        do
          o = r[0], r[0] = this.rules.inline._backpedal.exec(r[0])[0];
        while (o !== r[0]);
        s = nt(r[0]), r[1] === "www." ? i = "http://" + s : i = s;
      }
      return {
        type: "link",
        raw: r[0],
        text: s,
        href: i,
        tokens: [
          {
            type: "text",
            raw: s,
            text: s
          }
        ]
      };
    }
  }
  inlineText(e, n) {
    const r = this.rules.inline.text.exec(e);
    if (r) {
      let s;
      return this.lexer.state.inRawBlock ? s = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : nt(r[0]) : r[0] : s = nt(this.options.smartypants ? n(r[0]) : r[0]), {
        type: "text",
        raw: r[0],
        text: s
      };
    }
  }
}
const ce = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: co,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
ce._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
ce._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
ce.def = Be(ce.def).replace("label", ce._label).replace("title", ce._title).getRegex();
ce.bullet = /(?:[*+-]|\d{1,9}[.)])/;
ce.listItemStart = Be(/^( *)(bull) */).replace("bull", ce.bullet).getRegex();
ce.list = Be(ce.list).replace(/bull/g, ce.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + ce.def.source + ")").getRegex();
ce._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
ce._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
ce.html = Be(ce.html, "i").replace("comment", ce._comment).replace("tag", ce._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
ce.paragraph = Be(ce._paragraph).replace("hr", ce.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ce._tag).getRegex();
ce.blockquote = Be(ce.blockquote).replace("paragraph", ce.paragraph).getRegex();
ce.normal = Yt({}, ce);
ce.gfm = Yt({}, ce.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
});
ce.gfm.table = Be(ce.gfm.table).replace("hr", ce.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ce._tag).getRegex();
ce.gfm.paragraph = Be(ce._paragraph).replace("hr", ce.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", ce.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ce._tag).getRegex();
ce.pedantic = Yt({}, ce.normal, {
  html: Be(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", ce._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: co,
  paragraph: Be(ce.normal._paragraph).replace("hr", ce.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ce.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
const Q = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: co,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: co,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
Q._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
Q.punctuation = Be(Q.punctuation).replace(/punctuation/g, Q._punctuation).getRegex();
Q.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
Q.escapedEmSt = /\\\*|\\_/g;
Q._comment = Be(ce._comment).replace("(?:-->|$)", "-->").getRegex();
Q.emStrong.lDelim = Be(Q.emStrong.lDelim).replace(/punct/g, Q._punctuation).getRegex();
Q.emStrong.rDelimAst = Be(Q.emStrong.rDelimAst, "g").replace(/punct/g, Q._punctuation).getRegex();
Q.emStrong.rDelimUnd = Be(Q.emStrong.rDelimUnd, "g").replace(/punct/g, Q._punctuation).getRegex();
Q._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
Q._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
Q._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
Q.autolink = Be(Q.autolink).replace("scheme", Q._scheme).replace("email", Q._email).getRegex();
Q._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
Q.tag = Be(Q.tag).replace("comment", Q._comment).replace("attribute", Q._attribute).getRegex();
Q._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
Q._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
Q._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
Q.link = Be(Q.link).replace("label", Q._label).replace("href", Q._href).replace("title", Q._title).getRegex();
Q.reflink = Be(Q.reflink).replace("label", Q._label).replace("ref", ce._label).getRegex();
Q.nolink = Be(Q.nolink).replace("ref", ce._label).getRegex();
Q.reflinkSearch = Be(Q.reflinkSearch, "g").replace("reflink", Q.reflink).replace("nolink", Q.nolink).getRegex();
Q.normal = Yt({}, Q);
Q.pedantic = Yt({}, Q.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: Be(/^!?\[(label)\]\((.*?)\)/).replace("label", Q._label).getRegex(),
  reflink: Be(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Q._label).getRegex()
});
Q.gfm = Yt({}, Q.normal, {
  escape: Be(Q.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
Q.gfm.url = Be(Q.gfm.url, "i").replace("email", Q.gfm._extended_email).getRegex();
Q.breaks = Yt({}, Q.gfm, {
  br: Be(Q.br).replace("{2,}", "*").getRegex(),
  text: Be(Q.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
function JC(t) {
  return t.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function xu(t) {
  let e = "", n, r;
  const s = t.length;
  for (n = 0; n < s; n++)
    r = t.charCodeAt(n), Math.random() > 0.5 && (r = "x" + r.toString(16)), e += "&#" + r + ";";
  return e;
}
class Tn {
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || us, this.options.tokenizer = this.options.tokenizer || new bc(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      block: ce.normal,
      inline: Q.normal
    };
    this.options.pedantic ? (n.block = ce.pedantic, n.inline = Q.pedantic) : this.options.gfm && (n.block = ce.gfm, this.options.breaks ? n.inline = Q.breaks : n.inline = Q.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return {
      block: ce,
      inline: Q
    };
  }
  static lex(e, n) {
    return new Tn(n).lex(e);
  }
  static lexInline(e, n) {
    return new Tn(n).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`).replace(/\t/g, "    "), this.blockTokens(e, this.tokens);
    let n;
    for (; n = this.inlineQueue.shift(); )
      this.inlineTokens(n.src, n.tokens);
    return this.tokens;
  }
  blockTokens(e, n = []) {
    this.options.pedantic && (e = e.replace(/^ +$/gm, ""));
    let r, s, i, o;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => (r = a.call({ lexer: this }, e, n)) ? (e = e.substring(r.raw.length), n.push(r), !0) : !1))) {
        if (r = this.tokenizer.space(e)) {
          e = e.substring(r.raw.length), r.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += `
` : n.push(r);
          continue;
        }
        if (r = this.tokenizer.code(e)) {
          e = e.substring(r.raw.length), s = n[n.length - 1], s && (s.type === "paragraph" || s.type === "text") ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : n.push(r);
          continue;
        }
        if (r = this.tokenizer.fences(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.heading(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.hr(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.blockquote(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.list(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.html(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.def(e)) {
          e = e.substring(r.raw.length), s = n[n.length - 1], s && (s.type === "paragraph" || s.type === "text") ? (s.raw += `
` + r.raw, s.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
            href: r.href,
            title: r.title
          });
          continue;
        }
        if (r = this.tokenizer.table(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.lheading(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startBlock) {
          let a = 1 / 0;
          const l = e.slice(1);
          let c;
          this.options.extensions.startBlock.forEach(function(u) {
            c = u.call({ lexer: this }, l), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
          }), a < 1 / 0 && a >= 0 && (i = e.substring(0, a + 1));
        }
        if (this.state.top && (r = this.tokenizer.paragraph(i))) {
          s = n[n.length - 1], o && s.type === "paragraph" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : n.push(r), o = i.length !== e.length, e = e.substring(r.raw.length);
          continue;
        }
        if (r = this.tokenizer.text(e)) {
          e = e.substring(r.raw.length), s = n[n.length - 1], s && s.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : n.push(r);
          continue;
        }
        if (e) {
          const a = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(a);
            break;
          } else
            throw new Error(a);
        }
      }
    return this.state.top = !0, n;
  }
  inline(e, n) {
    this.inlineQueue.push({ src: e, tokens: n });
  }
  inlineTokens(e, n = []) {
    let r, s, i, o = e, a, l, c;
    if (this.tokens.links) {
      const u = Object.keys(this.tokens.links);
      if (u.length > 0)
        for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null; )
          u.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, a.index) + "[" + gu("a", a[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; )
      o = o.slice(0, a.index) + "[" + gu("a", a[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.escapedEmSt.exec(o)) != null; )
      o = o.slice(0, a.index) + "++" + o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    for (; e; )
      if (l || (c = ""), l = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((u) => (r = u.call({ lexer: this }, e, n)) ? (e = e.substring(r.raw.length), n.push(r), !0) : !1))) {
        if (r = this.tokenizer.escape(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.tag(e)) {
          e = e.substring(r.raw.length), s = n[n.length - 1], s && r.type === "text" && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : n.push(r);
          continue;
        }
        if (r = this.tokenizer.link(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(r.raw.length), s = n[n.length - 1], s && r.type === "text" && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : n.push(r);
          continue;
        }
        if (r = this.tokenizer.emStrong(e, o, c)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.codespan(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.br(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.del(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.autolink(e, xu)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(e, xu))) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startInline) {
          let u = 1 / 0;
          const d = e.slice(1);
          let p;
          this.options.extensions.startInline.forEach(function(g) {
            p = g.call({ lexer: this }, d), typeof p == "number" && p >= 0 && (u = Math.min(u, p));
          }), u < 1 / 0 && u >= 0 && (i = e.substring(0, u + 1));
        }
        if (r = this.tokenizer.inlineText(i, JC)) {
          e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (c = r.raw.slice(-1)), l = !0, s = n[n.length - 1], s && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : n.push(r);
          continue;
        }
        if (e) {
          const u = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(u);
            break;
          } else
            throw new Error(u);
        }
      }
    return n;
  }
}
class _c {
  constructor(e) {
    this.options = e || us;
  }
  code(e, n, r) {
    const s = (n || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const i = this.options.highlight(e, s);
      i != null && i !== e && (r = !0, e = i);
    }
    return e = e.replace(/\n$/, "") + `
`, s ? '<pre><code class="' + this.options.langPrefix + nt(s, !0) + '">' + (r ? e : nt(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : nt(e, !0)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
` + e + `</blockquote>
`;
  }
  html(e) {
    return e;
  }
  heading(e, n, r, s) {
    return this.options.headerIds ? "<h" + n + ' id="' + this.options.headerPrefix + s.slug(r) + '">' + e + "</h" + n + `>
` : "<h" + n + ">" + e + "</h" + n + `>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(e, n, r) {
    const s = n ? "ol" : "ul", i = n && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + s + i + `>
` + e + "</" + s + `>
`;
  }
  listitem(e) {
    return "<li>" + e + `</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(e) {
    return "<p>" + e + `</p>
`;
  }
  table(e, n) {
    return n && (n = "<tbody>" + n + "</tbody>"), `<table>
<thead>
` + e + `</thead>
` + n + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
` + e + `</tr>
`;
  }
  tablecell(e, n) {
    const r = n.header ? "th" : "td";
    return (n.align ? "<" + r + ' align="' + n.align + '">' : "<" + r + ">") + e + "</" + r + `>
`;
  }
  strong(e) {
    return "<strong>" + e + "</strong>";
  }
  em(e) {
    return "<em>" + e + "</em>";
  }
  codespan(e) {
    return "<code>" + e + "</code>";
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(e) {
    return "<del>" + e + "</del>";
  }
  link(e, n, r) {
    if (e = pu(this.options.sanitize, this.options.baseUrl, e), e === null)
      return r;
    let s = '<a href="' + nt(e) + '"';
    return n && (s += ' title="' + n + '"'), s += ">" + r + "</a>", s;
  }
  image(e, n, r) {
    if (e = pu(this.options.sanitize, this.options.baseUrl, e), e === null)
      return r;
    let s = '<img src="' + e + '" alt="' + r + '"';
    return n && (s += ' title="' + n + '"'), s += this.options.xhtml ? "/>" : ">", s;
  }
  text(e) {
    return e;
  }
}
class _4 {
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, n, r) {
    return "" + r;
  }
  image(e, n, r) {
    return "" + r;
  }
  br() {
    return "";
  }
}
class w4 {
  constructor() {
    this.seen = {};
  }
  serialize(e) {
    return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(e, n) {
    let r = e, s = 0;
    if (this.seen.hasOwnProperty(r)) {
      s = this.seen[e];
      do
        s++, r = e + "-" + s;
      while (this.seen.hasOwnProperty(r));
    }
    return n || (this.seen[e] = s, this.seen[r] = 0), r;
  }
  slug(e, n = {}) {
    const r = this.serialize(e);
    return this.getNextSafeSlug(r, n.dryrun);
  }
}
class An {
  constructor(e) {
    this.options = e || us, this.options.renderer = this.options.renderer || new _c(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new _4(), this.slugger = new w4();
  }
  static parse(e, n) {
    return new An(n).parse(e);
  }
  static parseInline(e, n) {
    return new An(n).parseInline(e);
  }
  parse(e, n = !0) {
    let r = "", s, i, o, a, l, c, u, d, p, g, _, k, j, b, m, y, C, F, G;
    const Y = e.length;
    for (s = 0; s < Y; s++) {
      if (g = e[s], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[g.type] && (G = this.options.extensions.renderers[g.type].call({ parser: this }, g), G !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(g.type))) {
        r += G || "";
        continue;
      }
      switch (g.type) {
        case "space":
          continue;
        case "hr": {
          r += this.renderer.hr();
          continue;
        }
        case "heading": {
          r += this.renderer.heading(
            this.parseInline(g.tokens),
            g.depth,
            v4(this.parseInline(g.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          r += this.renderer.code(
            g.text,
            g.lang,
            g.escaped
          );
          continue;
        }
        case "table": {
          for (d = "", u = "", a = g.header.length, i = 0; i < a; i++)
            u += this.renderer.tablecell(
              this.parseInline(g.header[i].tokens),
              { header: !0, align: g.align[i] }
            );
          for (d += this.renderer.tablerow(u), p = "", a = g.rows.length, i = 0; i < a; i++) {
            for (c = g.rows[i], u = "", l = c.length, o = 0; o < l; o++)
              u += this.renderer.tablecell(
                this.parseInline(c[o].tokens),
                { header: !1, align: g.align[o] }
              );
            p += this.renderer.tablerow(u);
          }
          r += this.renderer.table(d, p);
          continue;
        }
        case "blockquote": {
          p = this.parse(g.tokens), r += this.renderer.blockquote(p);
          continue;
        }
        case "list": {
          for (_ = g.ordered, k = g.start, j = g.loose, a = g.items.length, p = "", i = 0; i < a; i++)
            m = g.items[i], y = m.checked, C = m.task, b = "", m.task && (F = this.renderer.checkbox(y), j ? m.tokens.length > 0 && m.tokens[0].type === "paragraph" ? (m.tokens[0].text = F + " " + m.tokens[0].text, m.tokens[0].tokens && m.tokens[0].tokens.length > 0 && m.tokens[0].tokens[0].type === "text" && (m.tokens[0].tokens[0].text = F + " " + m.tokens[0].tokens[0].text)) : m.tokens.unshift({
              type: "text",
              text: F
            }) : b += F), b += this.parse(m.tokens, j), p += this.renderer.listitem(b, C, y);
          r += this.renderer.list(p, _, k);
          continue;
        }
        case "html": {
          r += this.renderer.html(g.text);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(this.parseInline(g.tokens));
          continue;
        }
        case "text": {
          for (p = g.tokens ? this.parseInline(g.tokens) : g.text; s + 1 < Y && e[s + 1].type === "text"; )
            g = e[++s], p += `
` + (g.tokens ? this.parseInline(g.tokens) : g.text);
          r += n ? this.renderer.paragraph(p) : p;
          continue;
        }
        default: {
          const S = 'Token with "' + g.type + '" type was not found.';
          if (this.options.silent) {
            console.error(S);
            return;
          } else
            throw new Error(S);
        }
      }
    }
    return r;
  }
  parseInline(e, n) {
    n = n || this.renderer;
    let r = "", s, i, o;
    const a = e.length;
    for (s = 0; s < a; s++) {
      if (i = e[s], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type] && (o = this.options.extensions.renderers[i.type].call({ parser: this }, i), o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type))) {
        r += o || "";
        continue;
      }
      switch (i.type) {
        case "escape": {
          r += n.text(i.text);
          break;
        }
        case "html": {
          r += n.html(i.text);
          break;
        }
        case "link": {
          r += n.link(i.href, i.title, this.parseInline(i.tokens, n));
          break;
        }
        case "image": {
          r += n.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          r += n.strong(this.parseInline(i.tokens, n));
          break;
        }
        case "em": {
          r += n.em(this.parseInline(i.tokens, n));
          break;
        }
        case "codespan": {
          r += n.codespan(i.text);
          break;
        }
        case "br": {
          r += n.br();
          break;
        }
        case "del": {
          r += n.del(this.parseInline(i.tokens, n));
          break;
        }
        case "text": {
          r += n.text(i.text);
          break;
        }
        default: {
          const l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) {
            console.error(l);
            return;
          } else
            throw new Error(l);
        }
      }
    }
    return r;
  }
}
function he(t, e, n) {
  if (typeof t > "u" || t === null)
    throw new Error("marked(): input parameter is undefined or null");
  if (typeof t != "string")
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected");
  if (typeof e == "function" && (n = e, e = null), e = Yt({}, he.defaults, e || {}), b4(e), n) {
    const r = e.highlight;
    let s;
    try {
      s = Tn.lex(t, e);
    } catch (a) {
      return n(a);
    }
    const i = function(a) {
      let l;
      if (!a)
        try {
          e.walkTokens && he.walkTokens(s, e.walkTokens), l = An.parse(s, e);
        } catch (c) {
          a = c;
        }
      return e.highlight = r, a ? n(a) : n(null, l);
    };
    if (!r || r.length < 3 || (delete e.highlight, !s.length))
      return i();
    let o = 0;
    he.walkTokens(s, function(a) {
      a.type === "code" && (o++, setTimeout(() => {
        r(a.text, a.lang, function(l, c) {
          if (l)
            return i(l);
          c != null && c !== a.text && (a.text = c, a.escaped = !0), o--, o === 0 && i();
        });
      }, 0));
    }), o === 0 && i();
    return;
  }
  try {
    const r = Tn.lex(t, e);
    return e.walkTokens && he.walkTokens(r, e.walkTokens), An.parse(r, e);
  } catch (r) {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e.silent)
      return "<p>An error occurred:</p><pre>" + nt(r.message + "", !0) + "</pre>";
    throw r;
  }
}
he.options = he.setOptions = function(t) {
  return Yt(he.defaults, t), zC(he.defaults), he;
};
he.getDefaults = y4;
he.defaults = us;
he.use = function(...t) {
  const e = Yt({}, ...t), n = he.defaults.extensions || { renderers: {}, childTokens: {} };
  let r;
  t.forEach((s) => {
    if (s.extensions && (r = !0, s.extensions.forEach((i) => {
      if (!i.name)
        throw new Error("extension name required");
      if (i.renderer) {
        const o = n.renderers ? n.renderers[i.name] : null;
        o ? n.renderers[i.name] = function(...a) {
          let l = i.renderer.apply(this, a);
          return l === !1 && (l = o.apply(this, a)), l;
        } : n.renderers[i.name] = i.renderer;
      }
      if (i.tokenizer) {
        if (!i.level || i.level !== "block" && i.level !== "inline")
          throw new Error("extension level must be 'block' or 'inline'");
        n[i.level] ? n[i.level].unshift(i.tokenizer) : n[i.level] = [i.tokenizer], i.start && (i.level === "block" ? n.startBlock ? n.startBlock.push(i.start) : n.startBlock = [i.start] : i.level === "inline" && (n.startInline ? n.startInline.push(i.start) : n.startInline = [i.start]));
      }
      i.childTokens && (n.childTokens[i.name] = i.childTokens);
    })), s.renderer) {
      const i = he.defaults.renderer || new _c();
      for (const o in s.renderer) {
        const a = i[o];
        i[o] = (...l) => {
          let c = s.renderer[o].apply(i, l);
          return c === !1 && (c = a.apply(i, l)), c;
        };
      }
      e.renderer = i;
    }
    if (s.tokenizer) {
      const i = he.defaults.tokenizer || new bc();
      for (const o in s.tokenizer) {
        const a = i[o];
        i[o] = (...l) => {
          let c = s.tokenizer[o].apply(i, l);
          return c === !1 && (c = a.apply(i, l)), c;
        };
      }
      e.tokenizer = i;
    }
    if (s.walkTokens) {
      const i = he.defaults.walkTokens;
      e.walkTokens = function(o) {
        s.walkTokens.call(this, o), i && i.call(this, o);
      };
    }
    r && (e.extensions = n), he.setOptions(e);
  });
};
he.walkTokens = function(t, e) {
  for (const n of t)
    switch (e.call(he, n), n.type) {
      case "table": {
        for (const r of n.header)
          he.walkTokens(r.tokens, e);
        for (const r of n.rows)
          for (const s of r)
            he.walkTokens(s.tokens, e);
        break;
      }
      case "list": {
        he.walkTokens(n.items, e);
        break;
      }
      default:
        he.defaults.extensions && he.defaults.extensions.childTokens && he.defaults.extensions.childTokens[n.type] ? he.defaults.extensions.childTokens[n.type].forEach(function(r) {
          he.walkTokens(n[r], e);
        }) : n.tokens && he.walkTokens(n.tokens, e);
    }
};
he.parseInline = function(t, e) {
  if (typeof t > "u" || t === null)
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  if (typeof t != "string")
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected");
  e = Yt({}, he.defaults, e || {}), b4(e);
  try {
    const n = Tn.lexInline(t, e);
    return e.walkTokens && he.walkTokens(n, e.walkTokens), An.parseInline(n, e);
  } catch (n) {
    if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e.silent)
      return "<p>An error occurred:</p><pre>" + nt(n.message + "", !0) + "</pre>";
    throw n;
  }
};
he.Parser = An;
he.parser = An.parse;
he.Renderer = _c;
he.TextRenderer = _4;
he.Lexer = Tn;
he.lexer = Tn.lex;
he.Tokenizer = bc;
he.Slugger = w4;
he.parse = he;
he.options;
he.setOptions;
he.use;
he.walkTokens;
he.parseInline;
An.parse;
Tn.lex;
function wc(t) {
  return t instanceof Map ? t.clear = t.delete = t.set = function() {
    throw new Error("map is read-only");
  } : t instanceof Set && (t.add = t.clear = t.delete = function() {
    throw new Error("set is read-only");
  }), Object.freeze(t), Object.getOwnPropertyNames(t).forEach(function(e) {
    var n = t[e];
    typeof n == "object" && !Object.isFrozen(n) && wc(n);
  }), t;
}
var C4 = wc, eE = wc;
C4.default = eE;
class Lu {
  constructor(e) {
    e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function jr(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function Hn(t, ...e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r in t)
    n[r] = t[r];
  return e.forEach(function(r) {
    for (const s in r)
      n[s] = r[s];
  }), n;
}
const tE = "</span>", yu = (t) => !!t.kind;
class nE {
  constructor(e, n) {
    this.buffer = "", this.classPrefix = n.classPrefix, e.walk(this);
  }
  addText(e) {
    this.buffer += jr(e);
  }
  openNode(e) {
    if (!yu(e))
      return;
    let n = e.kind;
    e.sublanguage || (n = `${this.classPrefix}${n}`), this.span(n);
  }
  closeNode(e) {
    !yu(e) || (this.buffer += tE);
  }
  value() {
    return this.buffer;
  }
  span(e) {
    this.buffer += `<span class="${e}">`;
  }
}
class Cc {
  constructor() {
    this.rootNode = { children: [] }, this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  add(e) {
    this.top.children.push(e);
  }
  openNode(e) {
    const n = { kind: e, children: [] };
    this.add(n), this.stack.push(n);
  }
  closeNode() {
    if (this.stack.length > 1)
      return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); )
      ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  walk(e) {
    return this.constructor._walk(e, this.rootNode);
  }
  static _walk(e, n) {
    return typeof n == "string" ? e.addText(n) : n.children && (e.openNode(n), n.children.forEach((r) => this._walk(e, r)), e.closeNode(n)), e;
  }
  static _collapse(e) {
    typeof e != "string" && (!e.children || (e.children.every((n) => typeof n == "string") ? e.children = [e.children.join("")] : e.children.forEach((n) => {
      Cc._collapse(n);
    })));
  }
}
class rE extends Cc {
  constructor(e) {
    super(), this.options = e;
  }
  addKeyword(e, n) {
    e !== "" && (this.openNode(n), this.addText(e), this.closeNode());
  }
  addText(e) {
    e !== "" && this.add(e);
  }
  addSublanguage(e, n) {
    const r = e.root;
    r.kind = n, r.sublanguage = !0, this.add(r);
  }
  toHTML() {
    return new nE(this, this.options).value();
  }
  finalize() {
    return !0;
  }
}
function sE(t) {
  return new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m");
}
function Vs(t) {
  return t ? typeof t == "string" ? t : t.source : null;
}
function iE(...t) {
  return t.map((e) => Vs(e)).join("");
}
function oE(...t) {
  return "(" + t.map((e) => Vs(e)).join("|") + ")";
}
function aE(t) {
  return new RegExp(t.toString() + "|").exec("").length - 1;
}
function lE(t, e) {
  const n = t && t.exec(e);
  return n && n.index === 0;
}
const cE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function uE(t, e = "|") {
  let n = 0;
  return t.map((r) => {
    n += 1;
    const s = n;
    let i = Vs(r), o = "";
    for (; i.length > 0; ) {
      const a = cE.exec(i);
      if (!a) {
        o += i;
        break;
      }
      o += i.substring(0, a.index), i = i.substring(a.index + a[0].length), a[0][0] === "\\" && a[1] ? o += "\\" + String(Number(a[1]) + s) : (o += a[0], a[0] === "(" && n++);
    }
    return o;
  }).map((r) => `(${r})`).join(e);
}
const hE = /\b\B/, E4 = "[a-zA-Z]\\w*", Ec = "[a-zA-Z_]\\w*", kc = "\\b\\d+(\\.\\d+)?", k4 = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", T4 = "\\b(0b[01]+)", dE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", pE = (t = {}) => {
  const e = /^#![ ]*\//;
  return t.binary && (t.begin = iE(
    e,
    /.*\b/,
    t.binary,
    /\b.*/
  )), Hn({
    className: "meta",
    begin: e,
    end: /$/,
    relevance: 0,
    "on:begin": (n, r) => {
      n.index !== 0 && r.ignoreMatch();
    }
  }, t);
}, Gs = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
}, fE = {
  className: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [Gs]
}, gE = {
  className: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [Gs]
}, A4 = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
}, i1 = function(t, e, n = {}) {
  const r = Hn(
    {
      className: "comment",
      begin: t,
      end: e,
      contains: []
    },
    n
  );
  return r.contains.push(A4), r.contains.push({
    className: "doctag",
    begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
    relevance: 0
  }), r;
}, mE = i1("//", "$"), xE = i1("/\\*", "\\*/"), LE = i1("#", "$"), yE = {
  className: "number",
  begin: kc,
  relevance: 0
}, vE = {
  className: "number",
  begin: k4,
  relevance: 0
}, bE = {
  className: "number",
  begin: T4,
  relevance: 0
}, _E = {
  className: "number",
  begin: kc + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
  relevance: 0
}, wE = {
  begin: /(?=\/[^/\n]*\/)/,
  contains: [{
    className: "regexp",
    begin: /\//,
    end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      Gs,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [Gs]
      }
    ]
  }]
}, CE = {
  className: "title",
  begin: E4,
  relevance: 0
}, EE = {
  className: "title",
  begin: Ec,
  relevance: 0
}, kE = {
  begin: "\\.\\s*" + Ec,
  relevance: 0
}, TE = function(t) {
  return Object.assign(
    t,
    {
      "on:begin": (e, n) => {
        n.data._beginMatch = e[1];
      },
      "on:end": (e, n) => {
        n.data._beginMatch !== e[1] && n.ignoreMatch();
      }
    }
  );
};
var Fi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MATCH_NOTHING_RE: hE,
  IDENT_RE: E4,
  UNDERSCORE_IDENT_RE: Ec,
  NUMBER_RE: kc,
  C_NUMBER_RE: k4,
  BINARY_NUMBER_RE: T4,
  RE_STARTERS_RE: dE,
  SHEBANG: pE,
  BACKSLASH_ESCAPE: Gs,
  APOS_STRING_MODE: fE,
  QUOTE_STRING_MODE: gE,
  PHRASAL_WORDS_MODE: A4,
  COMMENT: i1,
  C_LINE_COMMENT_MODE: mE,
  C_BLOCK_COMMENT_MODE: xE,
  HASH_COMMENT_MODE: LE,
  NUMBER_MODE: yE,
  C_NUMBER_MODE: vE,
  BINARY_NUMBER_MODE: bE,
  CSS_NUMBER_MODE: _E,
  REGEXP_MODE: wE,
  TITLE_MODE: CE,
  UNDERSCORE_TITLE_MODE: EE,
  METHOD_GUARD: kE,
  END_SAME_AS_BEGIN: TE
});
function AE(t, e) {
  t.input[t.index - 1] === "." && e.ignoreMatch();
}
function SE(t, e) {
  !e || !t.beginKeywords || (t.begin = "\\b(" + t.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", t.__beforeBegin = AE, t.keywords = t.keywords || t.beginKeywords, delete t.beginKeywords, t.relevance === void 0 && (t.relevance = 0));
}
function RE(t, e) {
  !Array.isArray(t.illegal) || (t.illegal = oE(...t.illegal));
}
function IE(t, e) {
  if (t.match) {
    if (t.begin || t.end)
      throw new Error("begin & end are not supported with match");
    t.begin = t.match, delete t.match;
  }
}
function OE(t, e) {
  t.relevance === void 0 && (t.relevance = 1);
}
const NE = [
  "of",
  "and",
  "for",
  "in",
  "not",
  "or",
  "if",
  "then",
  "parent",
  "list",
  "value"
], PE = "keyword";
function S4(t, e, n = PE) {
  const r = {};
  return typeof t == "string" ? s(n, t.split(" ")) : Array.isArray(t) ? s(n, t) : Object.keys(t).forEach(function(i) {
    Object.assign(
      r,
      S4(t[i], e, i)
    );
  }), r;
  function s(i, o) {
    e && (o = o.map((a) => a.toLowerCase())), o.forEach(function(a) {
      const l = a.split("|");
      r[l[0]] = [i, ME(l[0], l[1])];
    });
  }
}
function ME(t, e) {
  return e ? Number(e) : FE(t) ? 0 : 1;
}
function FE(t) {
  return NE.includes(t.toLowerCase());
}
function zE(t, { plugins: e }) {
  function n(a, l) {
    return new RegExp(
      Vs(a),
      "m" + (t.case_insensitive ? "i" : "") + (l ? "g" : "")
    );
  }
  class r {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    addRule(l, c) {
      c.position = this.position++, this.matchIndexes[this.matchAt] = c, this.regexes.push([c, l]), this.matchAt += aE(l) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const l = this.regexes.map((c) => c[1]);
      this.matcherRe = n(uE(l), !0), this.lastIndex = 0;
    }
    exec(l) {
      this.matcherRe.lastIndex = this.lastIndex;
      const c = this.matcherRe.exec(l);
      if (!c)
        return null;
      const u = c.findIndex((p, g) => g > 0 && p !== void 0), d = this.matchIndexes[u];
      return c.splice(0, u), Object.assign(c, d);
    }
  }
  class s {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    getMatcher(l) {
      if (this.multiRegexes[l])
        return this.multiRegexes[l];
      const c = new r();
      return this.rules.slice(l).forEach(([u, d]) => c.addRule(u, d)), c.compile(), this.multiRegexes[l] = c, c;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    addRule(l, c) {
      this.rules.push([l, c]), c.type === "begin" && this.count++;
    }
    exec(l) {
      const c = this.getMatcher(this.regexIndex);
      c.lastIndex = this.lastIndex;
      let u = c.exec(l);
      if (this.resumingScanAtSamePosition() && !(u && u.index === this.lastIndex)) {
        const d = this.getMatcher(0);
        d.lastIndex = this.lastIndex + 1, u = d.exec(l);
      }
      return u && (this.regexIndex += u.position + 1, this.regexIndex === this.count && this.considerAll()), u;
    }
  }
  function i(a) {
    const l = new s();
    return a.contains.forEach((c) => l.addRule(c.begin, { rule: c, type: "begin" })), a.terminatorEnd && l.addRule(a.terminatorEnd, { type: "end" }), a.illegal && l.addRule(a.illegal, { type: "illegal" }), l;
  }
  function o(a, l) {
    const c = a;
    if (a.isCompiled)
      return c;
    [
      IE
    ].forEach((d) => d(a, l)), t.compilerExtensions.forEach((d) => d(a, l)), a.__beforeBegin = null, [
      SE,
      RE,
      OE
    ].forEach((d) => d(a, l)), a.isCompiled = !0;
    let u = null;
    if (typeof a.keywords == "object" && (u = a.keywords.$pattern, delete a.keywords.$pattern), a.keywords && (a.keywords = S4(a.keywords, t.case_insensitive)), a.lexemes && u)
      throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
    return u = u || a.lexemes || /\w+/, c.keywordPatternRe = n(u, !0), l && (a.begin || (a.begin = /\B|\b/), c.beginRe = n(a.begin), a.endSameAsBegin && (a.end = a.begin), !a.end && !a.endsWithParent && (a.end = /\B|\b/), a.end && (c.endRe = n(a.end)), c.terminatorEnd = Vs(a.end) || "", a.endsWithParent && l.terminatorEnd && (c.terminatorEnd += (a.end ? "|" : "") + l.terminatorEnd)), a.illegal && (c.illegalRe = n(a.illegal)), a.contains || (a.contains = []), a.contains = [].concat(...a.contains.map(function(d) {
      return DE(d === "self" ? a : d);
    })), a.contains.forEach(function(d) {
      o(d, c);
    }), a.starts && o(a.starts, l), c.matcher = i(c), c;
  }
  if (t.compilerExtensions || (t.compilerExtensions = []), t.contains && t.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return t.classNameAliases = Hn(t.classNameAliases || {}), o(t);
}
function R4(t) {
  return t ? t.endsWithParent || R4(t.starts) : !1;
}
function DE(t) {
  return t.variants && !t.cachedVariants && (t.cachedVariants = t.variants.map(function(e) {
    return Hn(t, { variants: null }, e);
  })), t.cachedVariants ? t.cachedVariants : R4(t) ? Hn(t, { starts: t.starts ? Hn(t.starts) : null }) : Object.isFrozen(t) ? Hn(t) : t;
}
var BE = "10.7.3";
function UE(t) {
  return !!(t || t === "");
}
function HE(t) {
  const e = {
    props: ["language", "code", "autodetect"],
    data: function() {
      return {
        detectedLanguage: "",
        unknownLanguage: !1
      };
    },
    computed: {
      className() {
        return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage;
      },
      highlighted() {
        if (!this.autoDetect && !t.getLanguage(this.language))
          return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage = !0, jr(this.code);
        let n = {};
        return this.autoDetect ? (n = t.highlightAuto(this.code), this.detectedLanguage = n.language) : (n = t.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage = this.language), n.value;
      },
      autoDetect() {
        return !this.language || UE(this.autodetect);
      },
      ignoreIllegals() {
        return !0;
      }
    },
    render(n) {
      return n("pre", {}, [
        n("code", {
          class: this.className,
          domProps: { innerHTML: this.highlighted }
        })
      ]);
    }
  };
  return { Component: e, VuePlugin: {
    install(n) {
      n.component("highlightjs", e);
    }
  } };
}
const VE = {
  "after:highlightElement": ({ el: t, result: e, text: n }) => {
    const r = vu(t);
    if (!r.length)
      return;
    const s = document.createElement("div");
    s.innerHTML = e.value, e.value = GE(r, vu(s), n);
  }
};
function va(t) {
  return t.nodeName.toLowerCase();
}
function vu(t) {
  const e = [];
  return function n(r, s) {
    for (let i = r.firstChild; i; i = i.nextSibling)
      i.nodeType === 3 ? s += i.nodeValue.length : i.nodeType === 1 && (e.push({
        event: "start",
        offset: s,
        node: i
      }), s = n(i, s), va(i).match(/br|hr|img|input/) || e.push({
        event: "stop",
        offset: s,
        node: i
      }));
    return s;
  }(t, 0), e;
}
function GE(t, e, n) {
  let r = 0, s = "";
  const i = [];
  function o() {
    return !t.length || !e.length ? t.length ? t : e : t[0].offset !== e[0].offset ? t[0].offset < e[0].offset ? t : e : e[0].event === "start" ? t : e;
  }
  function a(u) {
    function d(p) {
      return " " + p.nodeName + '="' + jr(p.value) + '"';
    }
    s += "<" + va(u) + [].map.call(u.attributes, d).join("") + ">";
  }
  function l(u) {
    s += "</" + va(u) + ">";
  }
  function c(u) {
    (u.event === "start" ? a : l)(u.node);
  }
  for (; t.length || e.length; ) {
    let u = o();
    if (s += jr(n.substring(r, u[0].offset)), r = u[0].offset, u === t) {
      i.reverse().forEach(l);
      do
        c(u.splice(0, 1)[0]), u = o();
      while (u === t && u.length && u[0].offset === r);
      i.reverse().forEach(a);
    } else
      u[0].event === "start" ? i.push(u[0].node) : i.pop(), c(u.splice(0, 1)[0]);
  }
  return s + jr(n.substr(r));
}
const bu = {}, A1 = (t) => {
  console.error(t);
}, _u = (t, ...e) => {
  console.log(`WARN: ${t}`, ...e);
}, Ht = (t, e) => {
  bu[`${t}/${e}`] || (console.log(`Deprecated as of ${t}. ${e}`), bu[`${t}/${e}`] = !0);
}, S1 = jr, wu = Hn, Cu = Symbol("nomatch"), jE = function(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), r = [];
  let s = !0;
  const i = /(^(<[^>]+>|\t|)+|\n)/gm, o = "Could not find the language '{}', did you forget to load/include a language module?", a = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let l = {
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    tabReplace: null,
    useBR: !1,
    languages: null,
    __emitter: rE
  };
  function c(O) {
    return l.noHighlightRe.test(O);
  }
  function u(O) {
    let te = O.className + " ";
    te += O.parentNode ? O.parentNode.className : "";
    const we = l.languageDetectRe.exec(te);
    if (we) {
      const ve = Le(we[1]);
      return ve || (_u(o.replace("{}", we[1])), _u("Falling back to no-highlight mode for this block.", O)), ve ? we[1] : "no-highlight";
    }
    return te.split(/\s+/).find((ve) => c(ve) || Le(ve));
  }
  function d(O, te, we, ve) {
    let qe = "", Qt = "";
    typeof te == "object" ? (qe = O, we = te.ignoreIllegals, Qt = te.language, ve = void 0) : (Ht("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Ht("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), Qt = O, qe = te);
    const lt = {
      code: qe,
      language: Qt
    };
    At("before:highlight", lt);
    const Lt = lt.result ? lt.result : p(lt.language, lt.code, we, ve);
    return Lt.code = lt.code, At("after:highlight", Lt), Lt;
  }
  function p(O, te, we, ve) {
    function qe(Z, ae) {
      const me = B.case_insensitive ? ae[0].toLowerCase() : ae[0];
      return Object.prototype.hasOwnProperty.call(Z.keywords, me) && Z.keywords[me];
    }
    function Qt() {
      if (!N.keywords) {
        q.addText(X);
        return;
      }
      let Z = 0;
      N.keywordPatternRe.lastIndex = 0;
      let ae = N.keywordPatternRe.exec(X), me = "";
      for (; ae; ) {
        me += X.substring(Z, ae.index);
        const Ee = qe(N, ae);
        if (Ee) {
          const [st, tt] = Ee;
          if (q.addText(me), me = "", ge += tt, st.startsWith("_"))
            me += ae[0];
          else {
            const Bt = B.classNameAliases[st] || st;
            q.addKeyword(ae[0], Bt);
          }
        } else
          me += ae[0];
        Z = N.keywordPatternRe.lastIndex, ae = N.keywordPatternRe.exec(X);
      }
      me += X.substr(Z), q.addText(me);
    }
    function lt() {
      if (X === "")
        return;
      let Z = null;
      if (typeof N.subLanguage == "string") {
        if (!e[N.subLanguage]) {
          q.addText(X);
          return;
        }
        Z = p(N.subLanguage, X, !0, re[N.subLanguage]), re[N.subLanguage] = Z.top;
      } else
        Z = _(X, N.subLanguage.length ? N.subLanguage : null);
      N.relevance > 0 && (ge += Z.relevance), q.addSublanguage(Z.emitter, Z.language);
    }
    function Lt() {
      N.subLanguage != null ? lt() : Qt(), X = "";
    }
    function yt(Z) {
      return Z.className && q.openNode(B.classNameAliases[Z.className] || Z.className), N = Object.create(Z, { parent: { value: N } }), N;
    }
    function f(Z, ae, me) {
      let Ee = lE(Z.endRe, me);
      if (Ee) {
        if (Z["on:end"]) {
          const st = new Lu(Z);
          Z["on:end"](ae, st), st.isMatchIgnored && (Ee = !1);
        }
        if (Ee) {
          for (; Z.endsParent && Z.parent; )
            Z = Z.parent;
          return Z;
        }
      }
      if (Z.endsWithParent)
        return f(Z.parent, ae, me);
    }
    function x(Z) {
      return N.matcher.regexIndex === 0 ? (X += Z[0], 1) : (Ge = !0, 0);
    }
    function E(Z) {
      const ae = Z[0], me = Z.rule, Ee = new Lu(me), st = [me.__beforeBegin, me["on:begin"]];
      for (const tt of st)
        if (tt && (tt(Z, Ee), Ee.isMatchIgnored))
          return x(ae);
      return me && me.endSameAsBegin && (me.endRe = sE(ae)), me.skip ? X += ae : (me.excludeBegin && (X += ae), Lt(), !me.returnBegin && !me.excludeBegin && (X = ae)), yt(me), me.returnBegin ? 0 : ae.length;
    }
    function R(Z) {
      const ae = Z[0], me = te.substr(Z.index), Ee = f(N, Z, me);
      if (!Ee)
        return Cu;
      const st = N;
      st.skip ? X += ae : (st.returnEnd || st.excludeEnd || (X += ae), Lt(), st.excludeEnd && (X = ae));
      do
        N.className && q.closeNode(), !N.skip && !N.subLanguage && (ge += N.relevance), N = N.parent;
      while (N !== Ee.parent);
      return Ee.starts && (Ee.endSameAsBegin && (Ee.starts.endRe = Ee.endRe), yt(Ee.starts)), st.returnEnd ? 0 : ae.length;
    }
    function A() {
      const Z = [];
      for (let ae = N; ae !== B; ae = ae.parent)
        ae.className && Z.unshift(ae.className);
      Z.forEach((ae) => q.openNode(ae));
    }
    let D = {};
    function $(Z, ae) {
      const me = ae && ae[0];
      if (X += Z, me == null)
        return Lt(), 0;
      if (D.type === "begin" && ae.type === "end" && D.index === ae.index && me === "") {
        if (X += te.slice(ae.index, ae.index + 1), !s) {
          const Ee = new Error("0 width match regex");
          throw Ee.languageName = O, Ee.badRule = D.rule, Ee;
        }
        return 1;
      }
      if (D = ae, ae.type === "begin")
        return E(ae);
      if (ae.type === "illegal" && !we) {
        const Ee = new Error('Illegal lexeme "' + me + '" for mode "' + (N.className || "<unnamed>") + '"');
        throw Ee.mode = N, Ee;
      } else if (ae.type === "end") {
        const Ee = R(ae);
        if (Ee !== Cu)
          return Ee;
      }
      if (ae.type === "illegal" && me === "")
        return 1;
      if (Se > 1e5 && Se > ae.index * 3)
        throw new Error("potential infinite loop, way more iterations than matches");
      return X += me, me.length;
    }
    const B = Le(O);
    if (!B)
      throw A1(o.replace("{}", O)), new Error('Unknown language: "' + O + '"');
    const U = zE(B, { plugins: r });
    let I = "", N = ve || U;
    const re = {}, q = new l.__emitter(l);
    A();
    let X = "", ge = 0, Ne = 0, Se = 0, Ge = !1;
    try {
      for (N.matcher.considerAll(); ; ) {
        Se++, Ge ? Ge = !1 : N.matcher.considerAll(), N.matcher.lastIndex = Ne;
        const Z = N.matcher.exec(te);
        if (!Z)
          break;
        const ae = te.substring(Ne, Z.index), me = $(ae, Z);
        Ne = Z.index + me;
      }
      return $(te.substr(Ne)), q.closeAllNodes(), q.finalize(), I = q.toHTML(), {
        relevance: Math.floor(ge),
        value: I,
        language: O,
        illegal: !1,
        emitter: q,
        top: N
      };
    } catch (Z) {
      if (Z.message && Z.message.includes("Illegal"))
        return {
          illegal: !0,
          illegalBy: {
            msg: Z.message,
            context: te.slice(Ne - 100, Ne + 100),
            mode: Z.mode
          },
          sofar: I,
          relevance: 0,
          value: S1(te),
          emitter: q
        };
      if (s)
        return {
          illegal: !1,
          relevance: 0,
          value: S1(te),
          emitter: q,
          language: O,
          top: N,
          errorRaised: Z
        };
      throw Z;
    }
  }
  function g(O) {
    const te = {
      relevance: 0,
      emitter: new l.__emitter(l),
      value: S1(O),
      illegal: !1,
      top: a
    };
    return te.emitter.addText(O), te;
  }
  function _(O, te) {
    te = te || l.languages || Object.keys(e);
    const we = g(O), ve = te.filter(Le).filter(de).map(
      (yt) => p(yt, O, !1)
    );
    ve.unshift(we);
    const qe = ve.sort((yt, f) => {
      if (yt.relevance !== f.relevance)
        return f.relevance - yt.relevance;
      if (yt.language && f.language) {
        if (Le(yt.language).supersetOf === f.language)
          return 1;
        if (Le(f.language).supersetOf === yt.language)
          return -1;
      }
      return 0;
    }), [Qt, lt] = qe, Lt = Qt;
    return Lt.second_best = lt, Lt;
  }
  function k(O) {
    return l.tabReplace || l.useBR ? O.replace(i, (te) => te === `
` ? l.useBR ? "<br>" : te : l.tabReplace ? te.replace(/\t/g, l.tabReplace) : te) : O;
  }
  function j(O, te, we) {
    const ve = te ? n[te] : we;
    O.classList.add("hljs"), ve && O.classList.add(ve);
  }
  const b = {
    "before:highlightElement": ({ el: O }) => {
      l.useBR && (O.innerHTML = O.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, `
`));
    },
    "after:highlightElement": ({ result: O }) => {
      l.useBR && (O.value = O.value.replace(/\n/g, "<br>"));
    }
  }, m = /^(<[^>]+>|\t)+/gm, y = {
    "after:highlightElement": ({ result: O }) => {
      l.tabReplace && (O.value = O.value.replace(
        m,
        (te) => te.replace(/\t/g, l.tabReplace)
      ));
    }
  };
  function C(O) {
    let te = null;
    const we = u(O);
    if (c(we))
      return;
    At(
      "before:highlightElement",
      { el: O, language: we }
    ), te = O;
    const ve = te.textContent, qe = we ? d(ve, { language: we, ignoreIllegals: !0 }) : _(ve);
    At("after:highlightElement", { el: O, result: qe, text: ve }), O.innerHTML = qe.value, j(O, we, qe.language), O.result = {
      language: qe.language,
      re: qe.relevance,
      relavance: qe.relevance
    }, qe.second_best && (O.second_best = {
      language: qe.second_best.language,
      re: qe.second_best.relevance,
      relavance: qe.second_best.relevance
    });
  }
  function F(O) {
    O.useBR && (Ht("10.3.0", "'useBR' will be removed entirely in v11.0"), Ht("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559")), l = wu(l, O);
  }
  const G = () => {
    G.called || (G.called = !0, Ht("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead."), document.querySelectorAll("pre code").forEach(C));
  };
  function Y() {
    Ht("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."), S = !0;
  }
  let S = !1;
  function oe() {
    if (document.readyState === "loading") {
      S = !0;
      return;
    }
    document.querySelectorAll("pre code").forEach(C);
  }
  function se() {
    S && oe();
  }
  typeof window < "u" && window.addEventListener && window.addEventListener("DOMContentLoaded", se, !1);
  function ue(O, te) {
    let we = null;
    try {
      we = te(t);
    } catch (ve) {
      if (A1("Language definition for '{}' could not be registered.".replace("{}", O)), s)
        A1(ve);
      else
        throw ve;
      we = a;
    }
    we.name || (we.name = O), e[O] = we, we.rawDefinition = te.bind(null, t), we.aliases && z(we.aliases, { languageName: O });
  }
  function $e(O) {
    delete e[O];
    for (const te of Object.keys(n))
      n[te] === O && delete n[te];
  }
  function Ae() {
    return Object.keys(e);
  }
  function ie(O) {
    Ht("10.4.0", "requireLanguage will be removed entirely in v11."), Ht("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");
    const te = Le(O);
    if (te)
      return te;
    throw new Error("The '{}' language is required, but not loaded.".replace("{}", O));
  }
  function Le(O) {
    return O = (O || "").toLowerCase(), e[O] || e[n[O]];
  }
  function z(O, { languageName: te }) {
    typeof O == "string" && (O = [O]), O.forEach((we) => {
      n[we.toLowerCase()] = te;
    });
  }
  function de(O) {
    const te = Le(O);
    return te && !te.disableAutodetect;
  }
  function Je(O) {
    O["before:highlightBlock"] && !O["before:highlightElement"] && (O["before:highlightElement"] = (te) => {
      O["before:highlightBlock"](
        Object.assign({ block: te.el }, te)
      );
    }), O["after:highlightBlock"] && !O["after:highlightElement"] && (O["after:highlightElement"] = (te) => {
      O["after:highlightBlock"](
        Object.assign({ block: te.el }, te)
      );
    });
  }
  function On(O) {
    Je(O), r.push(O);
  }
  function At(O, te) {
    const we = O;
    r.forEach(function(ve) {
      ve[we] && ve[we](te);
    });
  }
  function Nn(O) {
    return Ht("10.2.0", "fixMarkup will be removed entirely in v11.0"), Ht("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"), k(O);
  }
  function Kt(O) {
    return Ht("10.7.0", "highlightBlock will be removed entirely in v12.0"), Ht("10.7.0", "Please use highlightElement now."), C(O);
  }
  Object.assign(t, {
    highlight: d,
    highlightAuto: _,
    highlightAll: oe,
    fixMarkup: Nn,
    highlightElement: C,
    highlightBlock: Kt,
    configure: F,
    initHighlighting: G,
    initHighlightingOnLoad: Y,
    registerLanguage: ue,
    unregisterLanguage: $e,
    listLanguages: Ae,
    getLanguage: Le,
    registerAliases: z,
    requireLanguage: ie,
    autoDetection: de,
    inherit: wu,
    addPlugin: On,
    vuePlugin: HE(t).VuePlugin
  }), t.debugMode = function() {
    s = !1;
  }, t.safeMode = function() {
    s = !0;
  }, t.versionString = BE;
  for (const O in Fi)
    typeof Fi[O] == "object" && C4(Fi[O]);
  return Object.assign(t, Fi), t.addPlugin(b), t.addPlugin(VE), t.addPlugin(y), t;
};
var $E = jE({}), dr = $E;
function qE(t) {
  return {
    name: "Plain text",
    aliases: [
      "text",
      "txt"
    ],
    disableAutodetect: !0
  };
}
var ZE = qE;
const Eu = "[A-Za-z$_][0-9A-Za-z$_]*", WE = [
  "as",
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
], YE = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], KE = [
  "Intl",
  "DataView",
  "Number",
  "Math",
  "Date",
  "String",
  "RegExp",
  "Object",
  "Function",
  "Boolean",
  "Error",
  "Symbol",
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  "Proxy",
  "Reflect",
  "JSON",
  "Promise",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Float32Array",
  "Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "ArrayBuffer",
  "BigInt64Array",
  "BigUint64Array",
  "BigInt"
], QE = [
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], XE = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], JE = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "module",
  "global"
], ek = [].concat(
  XE,
  JE,
  KE,
  QE
);
function tk(t) {
  return t ? typeof t == "string" ? t : t.source : null;
}
function ku(t) {
  return ba("(?=", t, ")");
}
function ba(...t) {
  return t.map((e) => tk(e)).join("");
}
function nk(t) {
  const e = (y, { after: C }) => {
    const F = "</" + y[0].slice(1);
    return y.input.indexOf(F, C) !== -1;
  }, n = Eu, r = {
    begin: "<>",
    end: "</>"
  }, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    isTrulyOpeningTag: (y, C) => {
      const F = y[0].length + y.index, G = y.input[F];
      if (G === "<") {
        C.ignoreMatch();
        return;
      }
      G === ">" && (e(y, { after: F }) || C.ignoreMatch());
    }
  }, i = {
    $pattern: Eu,
    keyword: WE,
    literal: YE,
    built_in: ek
  }, o = "[0-9](_?[0-9])*", a = `\\.(${o})`, l = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", c = {
    className: "number",
    variants: [
      { begin: `(\\b(${l})((${a})|\\.)?|(${a}))[eE][+-]?(${o})\\b` },
      { begin: `\\b(${l})\\b((${a})\\b|\\.)?|(${a})\\b` },
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, u = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: i,
    contains: []
  }, d = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        t.BACKSLASH_ESCAPE,
        u
      ],
      subLanguage: "xml"
    }
  }, p = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        t.BACKSLASH_ESCAPE,
        u
      ],
      subLanguage: "css"
    }
  }, g = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      t.BACKSLASH_ESCAPE,
      u
    ]
  }, _ = {
    className: "comment",
    variants: [
      t.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+",
              contains: [
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: n + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      t.C_BLOCK_COMMENT_MODE,
      t.C_LINE_COMMENT_MODE
    ]
  }, k = [
    t.APOS_STRING_MODE,
    t.QUOTE_STRING_MODE,
    d,
    p,
    g,
    c,
    t.REGEXP_MODE
  ];
  u.contains = k.concat({
    begin: /\{/,
    end: /\}/,
    keywords: i,
    contains: [
      "self"
    ].concat(k)
  });
  const j = [].concat(_, u.contains), b = j.concat([
    {
      begin: /\(/,
      end: /\)/,
      keywords: i,
      contains: ["self"].concat(j)
    }
  ]), m = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: i,
    contains: b
  };
  return {
    name: "Javascript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: i,
    exports: { PARAMS_CONTAINS: b },
    illegal: /#(?![$_A-z])/,
    contains: [
      t.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      d,
      p,
      g,
      _,
      c,
      {
        begin: ba(
          /[{,\n]\s*/,
          ku(ba(
            /(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,
            n + "\\s*:"
          ))
        ),
        relevance: 0,
        contains: [
          {
            className: "attr",
            begin: n + ku("\\s*:"),
            relevance: 0
          }
        ]
      },
      {
        begin: "(" + t.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        contains: [
          _,
          t.REGEXP_MODE,
          {
            className: "function",
            begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + t.UNDERSCORE_IDENT_RE + ")\\s*=>",
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: t.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: i,
                    contains: b
                  }
                ]
              }
            ]
          },
          {
            begin: /,/,
            relevance: 0
          },
          {
            className: "",
            begin: /\s/,
            end: /\s*/,
            skip: !0
          },
          {
            variants: [
              { begin: r.begin, end: r.end },
              {
                begin: s.begin,
                "on:begin": s.isTrulyOpeningTag,
                end: s.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: s.begin,
                end: s.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: "function",
        beginKeywords: "function",
        end: /[{;]/,
        excludeEnd: !0,
        keywords: i,
        contains: [
          "self",
          t.inherit(t.TITLE_MODE, { begin: n }),
          m
        ],
        illegal: /%/
      },
      {
        beginKeywords: "while if switch catch for"
      },
      {
        className: "function",
        begin: t.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: !0,
        contains: [
          m,
          t.inherit(t.TITLE_MODE, { begin: n })
        ]
      },
      {
        variants: [
          { begin: "\\." + n },
          { begin: "\\$" + n }
        ],
        relevance: 0
      },
      {
        className: "class",
        beginKeywords: "class",
        end: /[{;=]/,
        excludeEnd: !0,
        illegal: /[:"[\]]/,
        contains: [
          { beginKeywords: "extends" },
          t.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        begin: /\b(?=constructor)/,
        end: /[{;]/,
        excludeEnd: !0,
        contains: [
          t.inherit(t.TITLE_MODE, { begin: n }),
          "self",
          m
        ]
      },
      {
        begin: "(get|set)\\s+(?=" + n + "\\()",
        end: /\{/,
        keywords: "get set",
        contains: [
          t.inherit(t.TITLE_MODE, { begin: n }),
          { begin: /\(\)/ },
          m
        ]
      },
      {
        begin: /\$[(.]/
      }
    ]
  };
}
var rk = nk;
function sk(t) {
  return t ? typeof t == "string" ? t : t.source : null;
}
function ik(...t) {
  return t.map((e) => sk(e)).join("");
}
function ok(t) {
  const e = {}, n = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [e]
      }
    ]
  };
  Object.assign(e, {
    className: "variable",
    variants: [
      { begin: ik(
        /\$[\w\d#@][\w\d_]*/,
        "(?![\\w\\d])(?![$])"
      ) },
      n
    ]
  });
  const r = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [t.BACKSLASH_ESCAPE]
  }, s = {
    begin: /<<-?\s*(?=\w+)/,
    starts: {
      contains: [
        t.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: "string"
        })
      ]
    }
  }, i = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      t.BACKSLASH_ESCAPE,
      e,
      r
    ]
  };
  r.contains.push(i);
  const o = {
    className: "",
    begin: /\\"/
  }, a = {
    className: "string",
    begin: /'/,
    end: /'/
  }, l = {
    begin: /\$\(\(/,
    end: /\)\)/,
    contains: [
      { begin: /\d+#[0-9a-f]+/, className: "number" },
      t.NUMBER_MODE,
      e
    ]
  }, c = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], u = t.SHEBANG({
    binary: `(${c.join("|")})`,
    relevance: 10
  }), d = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [t.inherit(t.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  };
  return {
    name: "Bash",
    aliases: ["sh", "zsh"],
    keywords: {
      $pattern: /\b[a-z._-]+\b/,
      keyword: "if then else elif fi for while in do done case esac function",
      literal: "true false",
      built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"
    },
    contains: [
      u,
      t.SHEBANG(),
      d,
      l,
      t.HASH_COMMENT_MODE,
      s,
      i,
      o,
      a,
      e
    ]
  };
}
var ak = ok;
function lk(t) {
  var e = "true false yes no null", n = "[\\w#;/?:@&=+$,.~*'()[\\]]+", r = {
    className: "attr",
    variants: [
      { begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" },
      { begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)' },
      { begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)" }
    ]
  }, s = {
    className: "template-variable",
    variants: [
      { begin: /\{\{/, end: /\}\}/ },
      { begin: /%\{/, end: /\}/ }
    ]
  }, i = {
    className: "string",
    relevance: 0,
    variants: [
      { begin: /'/, end: /'/ },
      { begin: /"/, end: /"/ },
      { begin: /\S+/ }
    ],
    contains: [
      t.BACKSLASH_ESCAPE,
      s
    ]
  }, o = t.inherit(i, {
    variants: [
      { begin: /'/, end: /'/ },
      { begin: /"/, end: /"/ },
      { begin: /[^\s,{}[\]]+/ }
    ]
  }), a = "[0-9]{4}(-[0-9][0-9]){0,2}", l = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?", c = "(\\.[0-9]*)?", u = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?", d = {
    className: "number",
    begin: "\\b" + a + l + c + u + "\\b"
  }, p = {
    end: ",",
    endsWithParent: !0,
    excludeEnd: !0,
    keywords: e,
    relevance: 0
  }, g = {
    begin: /\{/,
    end: /\}/,
    contains: [p],
    illegal: "\\n",
    relevance: 0
  }, _ = {
    begin: "\\[",
    end: "\\]",
    contains: [p],
    illegal: "\\n",
    relevance: 0
  }, k = [
    r,
    {
      className: "meta",
      begin: "^---\\s*$",
      relevance: 10
    },
    {
      className: "string",
      begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
    },
    {
      begin: "<%[%=-]?",
      end: "[%-]?%>",
      subLanguage: "ruby",
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0
    },
    {
      className: "type",
      begin: "!\\w+!" + n
    },
    {
      className: "type",
      begin: "!<" + n + ">"
    },
    {
      className: "type",
      begin: "!" + n
    },
    {
      className: "type",
      begin: "!!" + n
    },
    {
      className: "meta",
      begin: "&" + t.UNDERSCORE_IDENT_RE + "$"
    },
    {
      className: "meta",
      begin: "\\*" + t.UNDERSCORE_IDENT_RE + "$"
    },
    {
      className: "bullet",
      begin: "-(?=[ ]|$)",
      relevance: 0
    },
    t.HASH_COMMENT_MODE,
    {
      beginKeywords: e,
      keywords: { literal: e }
    },
    d,
    {
      className: "number",
      begin: t.C_NUMBER_RE + "\\b",
      relevance: 0
    },
    g,
    _,
    i
  ], j = [...k];
  return j.pop(), j.push(o), p.contains = j, {
    name: "YAML",
    case_insensitive: !0,
    aliases: ["yml"],
    contains: k
  };
}
var ck = lk;
dr.registerLanguage("plaintext", ZE);
dr.registerLanguage("javascript", rk);
dr.registerLanguage("bash", ak);
dr.registerLanguage("yaml", ck);
const uk = {
  codespan(t) {
    let e = /(GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH)\s+(.+)/gi.exec(t);
    return (e == null ? void 0 : e.length) === 3 ? `
          <code class="rest-api">
          <span class="http-method-${e[1].toLowerCase()}">${e[1]}</span>
          <span class="http-path">${e[2]}</span>
          </code>
        ` : `<code>${t}</code>`;
  }
};
he.setOptions({
  highlight: function(t, e) {
    if (!e)
      return dr.highlightAuto(t).value;
    const n = dr.getLanguage(e) ? e : "plaintext";
    return dr.highlight(n, t).value;
  },
  breaks: !0
});
he.use({ renderer: uk });
const hk = {
  name: "comment",
  props: ["comment", "commentObj"],
  computed: {
    markedComment() {
      var t, e;
      return ((t = this.commentObj) == null ? void 0 : t.text) && he.parse((e = this.commentObj) == null ? void 0 : e.text) || this.comment && he.parse(this.comment);
    },
    color() {
      var t;
      return (t = this.commentObj) == null ? void 0 : t.color;
    }
  }
}, dk = ["innerHTML"];
function pk(t, e, n, r, s, i) {
  return P(), ee("div", {
    class: "comments text-skin-comment min-w-[100px] flex justify-around text-left text-sm opacity-50 hover:opacity-100 zenuml-comments",
    style: be({ color: i.color })
  }, [
    T("div", { innerHTML: i.markedComment }, null, 8, dk)
  ], 4);
}
const fi = /* @__PURE__ */ Oe(hk, [["render", pk], ["__scopeId", "data-v-15224042"]]), fk = {
  name: "occurrence",
  props: ["context", "selfCallIndent", "participant", "rtl"],
  data: function() {
    return {
      center: 0
    };
  },
  computed: {
    ...zt(["centerOf", "messageLayerLeft"]),
    ...ol(["code"]),
    computedCenter: function() {
      try {
        return this.centerOf(this.participant);
      } catch (t) {
        return console.error(t), 0;
      }
    }
  }
}, gk = ["data-belongs-to", "data-x-offset", "data-debug-center-of"];
function mk(t, e, n, r, s, i) {
  const o = fe("block");
  return P(), ee("div", {
    class: ze(["occurrence border-skin-occurrence bg-skin-occurrence rounded-sm border-2 relative left-full", { "right-to-left": n.rtl }]),
    "data-el-type": "occurrence",
    "data-belongs-to": n.participant,
    "data-x-offset": t.center,
    "data-debug-center-of": i.computedCenter
  }, [
    this.context.braceBlock() ? (P(), Me(o, {
      key: 0,
      context: n.context.braceBlock().block(),
      selfCallIndent: n.selfCallIndent
    }, null, 8, ["context", "selfCallIndent"])) : Te("", !0)
  ], 10, gk);
}
const I4 = /* @__PURE__ */ Oe(fk, [["render", mk], ["__scopeId", "data-v-054f42d1"]]);
class hs {
  constructor(e, n, r, s) {
    W(this, "start"), W(this, "stop"), this.start = { line: e, col: n }, this.stop = { line: r, col: s };
  }
  static from(e) {
    const n = e.start, r = e.stop;
    return new hs(n.line, n.column, r.line, r.column + r.text.length);
  }
}
const Tu = js.child({ name: "Creation" }), xk = {
  name: "creation",
  props: ["context", "comment", "selfCallIndent"],
  computed: {
    ...zt(["cursor", "onElementClick", "distance"]),
    from() {
      return this.context.Origin();
    },
    creation() {
      return this.context.creation();
    },
    interactionWidth() {
      let t = Math.abs(this.distance(this.to, this.from)), e = this.selfCallIndent || 0;
      return t + (this.rightToLeft ? e : -e);
    },
    rightToLeft() {
      return this.distance(this.to, this.from) < 0;
    },
    signature() {
      return this.creation.SignatureText();
    },
    assignee() {
      function t(s) {
        return s && s.getFormattedText() || "";
      }
      let e = this.creation.creationBody().assignment();
      if (!e)
        return "";
      let n = t(e.assignee());
      const r = t(e.type());
      return n + (r ? ":" + r : "");
    },
    to() {
      return this.creation.Owner();
    },
    isCurrent() {
      return this.creation.isCurrent(this.cursor);
    },
    isInitedFromOccurrence: function() {
      return this.creation.isInitedFromOccurrence(this.from);
    }
  },
  mounted() {
    this.layoutMessageContainer(), Tu.log(`mounted for ${this.to}`);
  },
  updated() {
    this.layoutMessageContainer(), Tu.debug(`mounted for ${this.to}`);
  },
  methods: {
    layoutMessageContainer() {
      (() => {
        if (!this.$refs.participantPlaceHolder || !this.$refs.messageContainer)
          return;
        const t = this.$refs.participantPlaceHolder.offsetWidth / 2;
        this.$refs.messageContainer.style.width = `calc(100% + ${t + 6}px`, this.rightToLeft && (this.$refs.messageContainer.style.transform = `translateX( ${-(t + 6)}px`);
      })();
    },
    onClick() {
      this.onElementClick(hs.from(this.context));
    }
  },
  components: {
    Participant: o4,
    Comment: fi,
    Occurrence: I4,
    Message: pi
  }
}, Lk = ["data-signature"], yk = ["data-to"], vk = {
  ref: "participantPlaceHolder",
  class: "invisible right-0 flex flex-col justify-center flex-shrink-0"
};
function bk(t, e, n, r, s, i) {
  const o = fe("comment"), a = fe("message"), l = fe("participant"), c = fe("occurrence");
  return P(), ee("div", {
    class: ze(["interaction creation sync text-center transform", {
      "right-to-left": i.rightToLeft,
      "-translate-x-full": i.rightToLeft,
      highlight: i.isCurrent,
      "inited-from-occurrence": i.isInitedFromOccurrence
    }]),
    onClick: e[0] || (e[0] = ri((...u) => i.onClick && i.onClick(...u), ["stop"])),
    "data-signature": i.signature,
    style: be({ width: i.interactionWidth + "px" })
  }, [
    n.comment ? (P(), Me(o, {
      key: 0,
      comment: n.comment
    }, null, 8, ["comment"])) : Te("", !0),
    T("div", {
      ref: "messageContainer",
      class: ze(["message-container pointer-events-none flex items-center h-10", { "flex-row-reverse": i.rightToLeft }]),
      "data-type": "creation",
      "data-to": i.to
    }, [
      ne(a, {
        ref: "messageEl",
        class: "invocation w-full transform -translate-y-1/2 pointer-events-auto",
        content: i.signature,
        rtl: i.rightToLeft,
        type: "creation"
      }, null, 8, ["content", "rtl"]),
      T("div", vk, [
        ne(l, {
          entity: { name: i.to }
        }, null, 8, ["entity"])
      ], 512)
    ], 10, yk),
    ne(c, {
      context: i.creation,
      class: "pointer-events-auto",
      participant: i.to
    }, null, 8, ["context", "participant"]),
    i.assignee ? (P(), Me(a, {
      key: 1,
      class: "return transform -translate-y-full pointer-events-auto",
      content: i.assignee,
      rtl: !i.rightToLeft,
      type: "return"
    }, null, 8, ["content", "rtl"])) : Te("", !0)
  ], 14, Lk);
}
const _k = /* @__PURE__ */ Oe(xk, [["render", bk]]), wk = {
  name: "self-invocation",
  props: ["content", "assignee"]
}, Ck = {
  class: "message self text-sm flex items-start",
  style: { "border-width": "0" }
}, Ek = /* @__PURE__ */ T("svg", {
  class: "arrow text-skin-message-arrow",
  width: "30",
  height: "24"
}, [
  /* @__PURE__ */ T("polyline", {
    class: "line stroke-current fill-none stroke-2",
    points: "0,2 28,2 28,15 14,15"
  }),
  /* @__PURE__ */ T("polyline", {
    class: "head stroke-current fill-current stroke-2",
    points: "18,9 8,15 18,21"
  })
], -1), kk = { class: "name px-px hover:text-skin-message-hover hover:bg-skin-message-hover zenuml-name" }, Tk = { key: 0 };
function Ak(t, e, n, r, s, i) {
  return P(), ee("div", Ck, [
    Ek,
    T("label", kk, [
      n.assignee ? (P(), ee("span", Tk, Ke(n.assignee) + " = ", 1)) : Te("", !0),
      xr(" " + Ke(n.content), 1)
    ])
  ]);
}
const Sk = /* @__PURE__ */ Oe(wk, [["render", Ak]]), Rk = {
  name: "interaction",
  props: ["context", "selfCallIndent", "commentObj"],
  computed: {
    ...zt(["participants", "distance2", "cursor", "onElementClick"]),
    hasComment() {
      var t, e;
      return ((t = this.commentObj) == null ? void 0 : t.text) !== "" || ((e = this.commentObj) == null ? void 0 : e.color) !== "";
    },
    color() {
      var t;
      return (t = this.commentObj) == null ? void 0 : t.color;
    },
    message: function() {
      var t;
      return (t = this.context) == null ? void 0 : t.message();
    },
    providedFrom: function() {
      var t, e;
      return (e = (t = this.context) == null ? void 0 : t.message()) == null ? void 0 : e.ProvidedFrom();
    },
    from: function() {
      return this.providedFrom || this.origin;
    },
    outOfBand: function() {
      return !!this.providedFrom && this.providedFrom !== this.origin;
    },
    assignee: function() {
      var t;
      let e = (t = this.message) == null ? void 0 : t.Assignment();
      return e ? e.getText() : "";
    },
    signature: function() {
      var t;
      return (t = this.message) == null ? void 0 : t.SignatureText();
    },
    translateX: function() {
      if (!this.rightToLeft && !this.outOfBand)
        return 0;
      const t = this.rightToLeft ? this.to : this.providedFrom, e = this.distance2(this.origin, t), n = this.selfCallIndent || 0;
      return e + 0 - n;
    },
    rightToLeft: function() {
      return this.distance2(this.from, this.to) < 0;
    },
    isCurrent: function() {
      var t;
      return (t = this.message) == null ? void 0 : t.isCurrent(this.cursor);
    },
    showStarter() {
      return this.participants.Starter().name !== "_STARTER_";
    },
    isRootBlock() {
      var t, e;
      return ((e = (t = this.context) == null ? void 0 : t.parentCtx) == null ? void 0 : e.parentCtx) instanceof yv;
    },
    origin: function() {
      var t;
      return (t = this.context) == null ? void 0 : t.Origin();
    },
    passOnOffset: function() {
      return this.isSelf ? (this.selfCallIndent || 0) + 6 : 0;
    },
    interactionWidth: function() {
      if (this.context && this.isSelf)
        return 0;
      let t = this.outOfBand ? 0 : this.selfCallIndent || 0;
      return Math.abs(this.distance2(this.from, this.to) - t);
    },
    to: function() {
      var t, e;
      return (e = (t = this.context) == null ? void 0 : t.message()) == null ? void 0 : e.Owner();
    },
    isSelf: function() {
      return !this.to || this.to === this.from;
    },
    invocation: function() {
      return this.isSelf ? "SelfInvocation" : "Message";
    },
    isInitedFromOccurrence: function() {
      var t;
      return (t = this.message) == null ? void 0 : t.isInitedFromOccurrence(this.from);
    }
  },
  methods: {
    onClick() {
      this.onElementClick(hs.from(this.context));
    }
  },
  components: {
    Message: pi,
    SelfInvocation: Sk,
    Comment: fi,
    Occurrence: I4
  }
}, Ik = ["data-to", "data-signature"];
function Ok(t, e, n, r, s, i) {
  const o = fe("comment"), a = fe("occurrence"), l = fe("message");
  return P(), ee("div", {
    class: ze(["interaction sync inline-block", { highlight: i.isCurrent, self: i.isSelf, "inited-from-occurrence": i.isInitedFromOccurrence }]),
    onClick: e[0] || (e[0] = ri((...c) => i.onClick && i.onClick(...c), ["stop"])),
    "data-to": i.to,
    "data-type": "interaction",
    "data-signature": i.signature,
    style: be({
      width: !i.isSelf && i.interactionWidth + "px",
      transform: "translateX(" + i.translateX + "px)"
    })
  }, [
    i.showStarter && i.isRootBlock || i.outOfBand ? (P(), ee("div", {
      key: 0,
      class: ze(["occurrence source border-2", { "right-to-left": i.rightToLeft }])
    }, null, 2)) : Te("", !0),
    i.hasComment ? (P(), Me(o, {
      key: 1,
      commentObj: n.commentObj
    }, null, 8, ["commentObj"])) : Te("", !0),
    (P(), Me(Js(i.invocation), {
      class: "text-center",
      color: i.color,
      content: i.signature,
      assignee: i.assignee,
      rtl: i.rightToLeft,
      type: "sync"
    }, null, 8, ["color", "content", "assignee", "rtl"])),
    ne(a, {
      context: i.message,
      participant: i.to,
      selfCallIndent: i.passOnOffset,
      rtl: i.rightToLeft
    }, null, 8, ["context", "participant", "selfCallIndent", "rtl"]),
    i.assignee && !i.isSelf ? (P(), Me(l, {
      key: 2,
      class: "return transform -translate-y-full",
      content: i.assignee,
      rtl: !i.rightToLeft,
      type: "return"
    }, null, 8, ["content", "rtl"])) : Te("", !0)
  ], 14, Ik);
}
const Nk = /* @__PURE__ */ Oe(Rk, [["render", Ok], ["__scopeId", "data-v-05daaa2d"]]), Pk = {
  name: "self-invocation-async",
  props: ["content"]
}, Mk = (t) => (br("data-v-25f755f6"), t = t(), _r(), t), Fk = {
  class: "message self flex items-start",
  style: { "border-width": "0" }
}, zk = /* @__PURE__ */ Mk(() => /* @__PURE__ */ T("svg", {
  class: "arrow text-skin-message-arrow",
  width: "34",
  height: "34"
}, [
  /* @__PURE__ */ T("polyline", {
    class: "stroke-current stroke-2 fill-none",
    points: "0,2 28,2 28,25 1,25"
  }),
  /* @__PURE__ */ T("polyline", {
    class: "head stroke-current stroke-2 fill-none",
    points: "11,19 1,25 11,31"
  })
], -1)), Dk = { class: "name px-px hover:text-skin-message-hover hover:bg-skin-message-hover zenuml-name" };
function Bk(t, e, n, r, s, i) {
  return P(), ee("div", Fk, [
    zk,
    T("label", Dk, Ke(n.content), 1)
  ]);
}
const Uk = /* @__PURE__ */ Oe(Pk, [["render", Bk], ["__scopeId", "data-v-25f755f6"]]);
function R1(t) {
  return t == null;
}
const Hk = {
  name: "interaction-async",
  props: ["context", "comment", "selfCallIndent"],
  computed: {
    ...zt(["distance", "cursor", "onElementClick"]),
    from: function() {
      return this.context.Origin();
    },
    asyncMessage: function() {
      var t;
      return (t = this.context) == null ? void 0 : t.asyncMessage();
    },
    interactionWidth: function() {
      var t;
      return this.isSelf ? 10 * (((t = this.signature) == null ? void 0 : t.length) || 0) + 100 : Math.abs(this.distance(this.target, this.source));
    },
    translateX: function() {
      return this.rightToLeft ? this.distance(this.target, this.from) : this.distance(this.source, this.from);
    },
    rightToLeft: function() {
      return this.distance(this.target, this.source) < 0;
    },
    signature: function() {
      var t, e;
      return (e = (t = this.asyncMessage) == null ? void 0 : t.content()) == null ? void 0 : e.getFormattedText();
    },
    source: function() {
      var t, e;
      return ((e = (t = this.asyncMessage) == null ? void 0 : t.from()) == null ? void 0 : e.getFormattedText()) || this.from;
    },
    target: function() {
      var t, e;
      return (e = (t = this.asyncMessage) == null ? void 0 : t.to()) == null ? void 0 : e.getFormattedText();
    },
    isCurrent: function() {
      const t = this.asyncMessage.start.start, e = this.asyncMessage.stop.stop + 1;
      return R1(this.cursor) || R1(t) || R1(e) ? !1 : this.cursor >= t && this.cursor <= e;
    },
    isSelf: function() {
      return this.source === this.target;
    },
    invocation: function() {
      return this.isSelf ? "SelfInvocationAsync" : "Message";
    }
  },
  methods: {
    onClick() {
      this.onElementClick(hs.from(this.context));
    }
  },
  components: {
    Comment: fi,
    SelfInvocationAsync: Uk,
    Message: pi
  }
}, Vk = ["data-signature"];
function Gk(t, e, n, r, s, i) {
  const o = fe("comment");
  return P(), ee("div", {
    class: ze(["interaction async", { "right-to-left": i.rightToLeft, highlight: i.isCurrent, "self-invocation": i.isSelf }]),
    onClick: e[0] || (e[0] = ri((...a) => i.onClick && i.onClick(...a), ["stop"])),
    "data-signature": i.signature,
    style: be({ width: i.interactionWidth + "px", transform: "translateX(" + i.translateX + "px)" })
  }, [
    n.comment ? (P(), Me(o, {
      key: 0,
      comment: n.comment
    }, null, 8, ["comment"])) : Te("", !0),
    (P(), Me(Js(i.invocation), {
      content: i.signature,
      rtl: i.rightToLeft,
      type: "async"
    }, null, 8, ["content", "rtl"]))
  ], 14, Vk);
}
const jk = /* @__PURE__ */ Oe(Hk, [["render", Gk], ["__scopeId", "data-v-eb21ece9"]]), $k = {
  props: ["label", "collapsed"],
  emits: ["click"]
}, qk = { class: "collapsible-header" }, Zk = { class: "p-0 mb-0" }, Wk = /* @__PURE__ */ ti('<g id="SVGRepo_bgCarrier" stroke-width="0" data-v-b41acdfc></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-b41acdfc></g><g id="SVGRepo_iconCarrier" data-v-b41acdfc><line x1="14" y1="10" x2="21" y2="3" data-v-b41acdfc></line><polyline points="20 10 14 10 14 4" data-v-b41acdfc></polyline><line x1="3" y1="21" x2="10" y2="14" data-v-b41acdfc></line><polyline points="4 14 10 14 10 20" data-v-b41acdfc></polyline></g>', 3), Yk = [
  Wk
], Kk = /* @__PURE__ */ ti('<g id="SVGRepo_bgCarrier" stroke-width="0" data-v-b41acdfc></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-b41acdfc></g><g id="SVGRepo_iconCarrier" data-v-b41acdfc><title data-v-b41acdfc></title> <g id="Complete" data-v-b41acdfc><g id="expand" data-v-b41acdfc><g data-v-b41acdfc><polyline data-name="Right" fill="none" id="Right-2" points="3 17.3 3 21 6.7 21" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" data-v-b41acdfc></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" x1="10" x2="3.8" y1="14" y2="20.2" data-v-b41acdfc></line> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" x1="14" x2="20.2" y1="10" y2="3.8" data-v-b41acdfc></line> <polyline data-name="Right" fill="none" id="Right-3" points="21 6.7 21 3 17.3 3" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" data-v-b41acdfc></polyline></g></g></g></g>', 3), Qk = [
  Kk
];
function Xk(t, e, n, r, s, i) {
  return P(), ee("div", qk, [
    T("label", Zk, Ke(n.label), 1),
    (P(), ee("svg", {
      width: "16px",
      height: "16px",
      class: ze([{ hidden: n.collapsed, expanded: !n.collapsed }, "collapse-button cursor-pointer"]),
      onClick: e[0] || (e[0] = (o) => t.$emit("click", o)),
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      stroke: "#000000",
      "stroke-width": "1",
      "stroke-linecap": "round",
      "stroke-linejoin": "miter"
    }, Yk, 2)),
    (P(), ee("svg", {
      width: "16px",
      height: "16px",
      viewBox: "0 0 24 24",
      class: ze([{ hidden: !n.collapsed }, "cursor-pointer"]),
      onClick: e[1] || (e[1] = (o) => t.$emit("click", o)),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000"
    }, Qk, 2))
  ]);
}
const Jk = /* @__PURE__ */ Oe($k, [["render", Xk], ["__scopeId", "data-v-b41acdfc"]]), gi = {
  computed: {
    ...zt(["coordinates"]),
    offsetX: function() {
      const t = this.coordinates.orderedParticipantNames(), e = new mc(t).getFrame(this.context), n = xc(e), r = [this.context.Origin(), ...cs(this.context).Names()], s = t.find((o) => r.includes(o));
      let i = sn.half(kn, s);
      return console.debug(`left participant: ${s} ${i}`), this.coordinates.distance(s, this.from) + n.left + i;
    },
    fragmentStyle: function() {
      return {
        transform: "translateX(" + (this.offsetX + 1) * -1 + "px)",
        width: l4(this.context, this.coordinates) + "px"
      };
    }
  },
  data: function() {
    return { collapsed: !1 };
  },
  methods: {
    toggle(t) {
      this.collapsed = !this.collapsed, n4.$emit("participant_set_top");
    }
  },
  components: { CollapseButton: Jk },
  watch: {
    context(t) {
      this.collapsed && (this.collapsed = !1);
    }
  }
}, eT = {
  name: "fragment-alt",
  props: ["context", "comment", "selfCallIndent", "commentObj"],
  mixins: [gi],
  computed: {
    from: function() {
      return this.context.Origin();
    },
    alt: function() {
      return this.context.alt();
    },
    blockInIfBlock: function() {
      var t, e, n;
      return (n = (e = (t = this.alt) == null ? void 0 : t.ifBlock()) == null ? void 0 : e.braceBlock()) == null ? void 0 : n.block();
    },
    condition: function() {
      var t;
      return this.conditionFromIfElseBlock((t = this.alt) == null ? void 0 : t.ifBlock());
    },
    elseBlock: function() {
      var t, e, n;
      return (n = (e = (t = this.alt) == null ? void 0 : t.elseBlock()) == null ? void 0 : e.braceBlock()) == null ? void 0 : n.block();
    }
  },
  methods: {
    conditionFromIfElseBlock(t) {
      var e, n;
      return (n = (e = t == null ? void 0 : t.parExpr()) == null ? void 0 : e.condition()) == null ? void 0 : n.getFormattedText();
    },
    blockInElseIfBlock(t) {
      var e;
      return (e = t == null ? void 0 : t.braceBlock()) == null ? void 0 : e.block();
    }
  }
}, O4 = (t) => (br("data-v-125017f4"), t = t(), _r(), t), tT = { class: "segment" }, nT = { class: "header bg-skin-fragment-header text-skin-fragment-header text-base leading-4 rounded-t" }, rT = { class: "name font-semibold p-1 border-b" }, sT = { class: "segment" }, iT = { class: "text-skin-fragment" }, oT = { class: "condition p-1" }, aT = /* @__PURE__ */ O4(() => /* @__PURE__ */ T("label", { class: "else-if hidden" }, "else if", -1)), lT = { class: "condition p-1" }, cT = {
  key: 0,
  class: "segment mt-2 border-t border-solid"
}, uT = /* @__PURE__ */ O4(() => /* @__PURE__ */ T("div", { class: "text-skin-fragment" }, [
  /* @__PURE__ */ T("label", { class: "p-1" }, "[else]")
], -1));
function hT(t, e, n, r, s, i) {
  const o = fe("comment"), a = fe("collapse-button"), l = fe("block");
  return P(), ee("div", {
    class: "fragment alt border-skin-fragment rounded",
    style: be(t.fragmentStyle)
  }, [
    T("div", tT, [
      n.comment ? (P(), Me(o, {
        key: 0,
        comment: n.comment,
        commentObj: n.commentObj
      }, null, 8, ["comment", "commentObj"])) : Te("", !0),
      T("div", nT, [
        T("div", rT, [
          ne(a, {
            label: "Alt",
            collapsed: t.collapsed,
            onClick: this.toggle
          }, null, 8, ["collapsed", "onClick"])
        ])
      ])
    ]),
    T("div", {
      class: ze({ hidden: t.collapsed })
    }, [
      T("div", sT, [
        T("div", iT, [
          T("label", oT, "[" + Ke(i.condition) + "]", 1)
        ]),
        i.blockInIfBlock ? (P(), Me(l, {
          key: 0,
          style: be({ paddingLeft: `${t.offsetX}px` }),
          context: i.blockInIfBlock,
          selfCallIndent: n.selfCallIndent
        }, null, 8, ["style", "context", "selfCallIndent"])) : Te("", !0)
      ]),
      (P(!0), ee(He, null, Cn(i.alt.elseIfBlock(), (c, u) => (P(), ee("div", {
        key: u + 500,
        class: "segment mt-2 border-t border-solid"
      }, [
        (P(), ee("div", {
          class: "text-skin-fragment",
          key: u + 1e3
        }, [
          aT,
          T("label", lT, "[" + Ke(i.conditionFromIfElseBlock(c)) + "]", 1)
        ])),
        (P(), Me(l, {
          style: be({ paddingLeft: `${t.offsetX}px` }),
          context: i.blockInElseIfBlock(c),
          selfCallIndent: n.selfCallIndent,
          key: u + 2e3
        }, null, 8, ["style", "context", "selfCallIndent"]))
      ]))), 128)),
      i.elseBlock ? (P(), ee("div", cT, [
        uT,
        ne(l, {
          style: be({ paddingLeft: `${t.offsetX}px` }),
          context: i.elseBlock,
          selfCallIndent: n.selfCallIndent
        }, null, 8, ["style", "context", "selfCallIndent"])
      ])) : Te("", !0)
    ], 2)
  ], 4);
}
const dT = /* @__PURE__ */ Oe(eT, [["render", hT], ["__scopeId", "data-v-125017f4"]]), pT = {
  name: "fragment-par",
  props: ["context", "comment", "selfCallIndent"],
  mixins: [gi],
  computed: {
    from: function() {
      return this.context.Origin();
    },
    par: function() {
      return this.context.par();
    }
  }
}, fT = { class: "header bg-skin-fragment-header text-skin-fragment-header text-base leading-4 rounded-t" }, gT = { class: "name font-semibold p-1 border-b" };
function mT(t, e, n, r, s, i) {
  const o = fe("comment"), a = fe("collapse-button"), l = fe("block");
  return P(), ee("div", {
    class: "fragment par border-skin-fragment rounded",
    style: be(t.fragmentStyle)
  }, [
    n.comment ? (P(), Me(o, {
      key: 0,
      comment: n.comment
    }, null, 8, ["comment"])) : Te("", !0),
    T("div", fT, [
      T("div", gT, [
        ne(a, {
          label: "Par",
          collapsed: t.collapsed,
          onClick: this.toggle
        }, null, 8, ["collapsed", "onClick"])
      ])
    ]),
    ne(l, {
      class: ze({ hidden: t.collapsed }),
      style: be({ paddingLeft: `${t.offsetX}px` }),
      context: i.par.braceBlock().block(),
      selfCallIndent: n.selfCallIndent
    }, null, 8, ["class", "style", "context", "selfCallIndent"])
  ], 4);
}
const xT = /* @__PURE__ */ Oe(pT, [["render", mT], ["__scopeId", "data-v-4545e2e3"]]), LT = {
  name: "fragment-loop",
  props: ["context", "comment", "selfCallIndent"],
  mixins: [gi],
  computed: {
    from: function() {
      return this.context.Origin();
    },
    loop: function() {
      return this.context.loop();
    },
    blockInLoop: function() {
      var t, e;
      return (e = (t = this.loop) == null ? void 0 : t.braceBlock()) == null ? void 0 : e.block();
    },
    condition: function() {
      var t, e, n;
      return (n = (e = (t = this.loop) == null ? void 0 : t.parExpr()) == null ? void 0 : e.condition()) == null ? void 0 : n.getFormattedText();
    }
  }
}, yT = { class: "header text-skin-fragment-header bg-skin-fragment-header text-base leading-4" }, vT = { class: "name font-semibold p-1 border-b" }, bT = { class: "segment" }, _T = { class: "text-skin-fragment" }, wT = { class: "condition p-1" };
function CT(t, e, n, r, s, i) {
  const o = fe("comment"), a = fe("collapse-button"), l = fe("block");
  return P(), ee("div", {
    class: "fragment loop border-skin-fragment rounded",
    style: be(t.fragmentStyle)
  }, [
    n.comment ? (P(), Me(o, {
      key: 0,
      comment: n.comment
    }, null, 8, ["comment"])) : Te("", !0),
    T("div", yT, [
      T("div", vT, [
        ne(a, {
          label: "Loop",
          collapsed: t.collapsed,
          onClick: this.toggle
        }, null, 8, ["collapsed", "onClick"])
      ])
    ]),
    T("div", {
      class: ze({ hidden: t.collapsed })
    }, [
      T("div", bT, [
        T("div", _T, [
          T("label", wT, "[" + Ke(i.condition) + "]", 1)
        ]),
        ne(l, {
          style: be({ paddingLeft: `${t.offsetX}px` }),
          context: i.blockInLoop,
          selfCallIndent: n.selfCallIndent
        }, null, 8, ["style", "context", "selfCallIndent"])
      ])
    ], 2)
  ], 4);
}
const ET = /* @__PURE__ */ Oe(LT, [["render", CT], ["__scopeId", "data-v-771edb8e"]]), kT = {
  name: "fragment-opt",
  props: ["context", "comment", "selfCallIndent"],
  mixins: [gi],
  computed: {
    from: function() {
      return this.context.Origin();
    },
    opt: function() {
      return this.context.opt();
    }
  }
}, TT = { class: "header bg-skin-fragment-header text-skin-fragment-header text-base leading-4" }, AT = { class: "name font-semibold p-1 border-b" };
function ST(t, e, n, r, s, i) {
  const o = fe("comment"), a = fe("collapse-button"), l = fe("block");
  return P(), ee("div", {
    class: "fragment opt border-skin-fragment rounded",
    style: be(t.fragmentStyle)
  }, [
    n.comment ? (P(), Me(o, {
      key: 0,
      comment: n.comment
    }, null, 8, ["comment"])) : Te("", !0),
    T("div", TT, [
      T("div", AT, [
        ne(a, {
          label: "Opt",
          collapsed: t.collapsed,
          onClick: this.toggle
        }, null, 8, ["collapsed", "onClick"])
      ])
    ]),
    ne(l, {
      class: ze({ hidden: t.collapsed }),
      style: be({ paddingLeft: `${t.offsetX}px` }),
      context: i.opt.braceBlock().block(),
      selfCallIndent: n.selfCallIndent
    }, null, 8, ["class", "style", "context", "selfCallIndent"])
  ], 4);
}
const RT = /* @__PURE__ */ Oe(kT, [["render", ST], ["__scopeId", "data-v-06cc8e56"]]), IT = {
  name: "fragment-tcf",
  props: ["context", "comment", "selfCallIndent"],
  mixins: [gi],
  computed: {
    from: function() {
      return this.context.Origin();
    },
    tcf: function() {
      return this.context.tcf();
    },
    blockInTryBlock: function() {
      var t, e, n;
      return (n = (e = (t = this.tcf) == null ? void 0 : t.tryBlock()) == null ? void 0 : e.braceBlock()) == null ? void 0 : n.block();
    },
    finallyBlock: function() {
      var t, e, n;
      return (n = (e = (t = this.tcf) == null ? void 0 : t.finallyBlock()) == null ? void 0 : e.braceBlock()) == null ? void 0 : n.block();
    }
  },
  methods: {
    exception(t) {
      var e;
      return (e = t == null ? void 0 : t.invocation()) == null ? void 0 : e.parameters().getText();
    },
    blockInCatchBlock(t) {
      var e;
      return (e = t == null ? void 0 : t.braceBlock()) == null ? void 0 : e.block();
    }
  }
}, N4 = (t) => (br("data-v-1ae75b06"), t = t(), _r(), t), OT = { class: "segment" }, NT = { class: "header bg-skin-fragment-header text-skin-fragment-header text-base leading-4 rounded-t" }, PT = { class: "name font-semibold p-1 border-b" }, MT = { class: "segment" }, FT = /* @__PURE__ */ N4(() => /* @__PURE__ */ T("label", { class: "keyword catch p-1" }, "catch", -1)), zT = { class: "exception p-1" }, DT = {
  key: 0,
  class: "segment mt-2 border-t border-solid"
}, BT = /* @__PURE__ */ N4(() => /* @__PURE__ */ T("div", { class: "header text-skin-fragment finally" }, [
  /* @__PURE__ */ T("label", { class: "keyword finally p-1" }, "finally")
], -1));
function UT(t, e, n, r, s, i) {
  const o = fe("comment"), a = fe("collapse-button"), l = fe("block");
  return P(), ee("div", {
    class: "fragment tcf border-skin-fragment rounded",
    style: be(t.fragmentStyle)
  }, [
    T("div", OT, [
      n.comment ? (P(), Me(o, {
        key: 0,
        comment: n.comment
      }, null, 8, ["comment"])) : Te("", !0),
      T("div", NT, [
        T("div", PT, [
          ne(a, {
            label: "Try",
            collapsed: t.collapsed,
            onClick: this.toggle
          }, null, 8, ["collapsed", "onClick"])
        ])
      ])
    ]),
    T("div", {
      class: ze({ hidden: t.collapsed })
    }, [
      T("div", MT, [
        i.blockInTryBlock ? (P(), Me(l, {
          key: 0,
          style: be({ paddingLeft: `${t.offsetX}px` }),
          context: i.blockInTryBlock,
          selfCallIndent: n.selfCallIndent
        }, null, 8, ["style", "context", "selfCallIndent"])) : Te("", !0)
      ]),
      (P(!0), ee(He, null, Cn(i.tcf.catchBlock(), (c, u) => (P(), ee("div", {
        key: u + 500,
        class: "segment mt-2 border-t border-solid"
      }, [
        (P(), ee("div", {
          class: "header text-skin-fragment",
          key: u + 1e3
        }, [
          FT,
          T("label", zT, Ke(i.exception(c)), 1)
        ])),
        (P(), Me(l, {
          style: be({ paddingLeft: `${t.offsetX}px` }),
          context: i.blockInCatchBlock(c),
          selfCallIndent: n.selfCallIndent,
          key: u + 2e3
        }, null, 8, ["style", "context", "selfCallIndent"]))
      ]))), 128)),
      i.finallyBlock ? (P(), ee("div", DT, [
        BT,
        ne(l, {
          style: be({ paddingLeft: `${t.offsetX}px` }),
          context: i.finallyBlock,
          selfCallIndent: n.selfCallIndent
        }, null, 8, ["style", "context", "selfCallIndent"])
      ])) : Te("", !0)
    ], 2)
  ], 4);
}
const HT = /* @__PURE__ */ Oe(IT, [["render", UT], ["__scopeId", "data-v-1ae75b06"]]), VT = {
  name: "return",
  props: ["context", "comment"],
  computed: {
    ...zt(["distance", "cursor", "onElementClick", "participants"]),
    from: function() {
      return this.context.Origin();
    },
    asyncMessage: function() {
      var t;
      return (t = this.context) == null ? void 0 : t.ret().asyncMessage();
    },
    width: function() {
      return this.isSelf ? kn(this.signature, Yn.MessageContent) : Math.abs(this.distance(this.target, this.source));
    },
    left: function() {
      return this.rightToLeft ? this.distance(this.target, this.from) + 2 : this.distance(this.source, this.from) + 2;
    },
    rightToLeft: function() {
      return this.distance(this.target, this.source) < 0;
    },
    signature: function() {
      var t, e, n, r, s;
      return ((e = (t = this.asyncMessage) == null ? void 0 : t.content()) == null ? void 0 : e.getFormattedText()) || ((s = (r = (n = this.context) == null ? void 0 : n.ret()) == null ? void 0 : r.expr()) == null ? void 0 : s.getFormattedText());
    },
    source: function() {
      var t, e;
      return ((e = (t = this.asyncMessage) == null ? void 0 : t.from()) == null ? void 0 : e.getFormattedText()) || this.from;
    },
    target: function() {
      var t, e, n, r;
      return ((e = (t = this.asyncMessage) == null ? void 0 : t.to()) == null ? void 0 : e.getFormattedText()) || ((r = (n = this.context) == null ? void 0 : n.ret()) == null ? void 0 : r.ReturnTo());
    },
    isCurrent: function() {
      return !1;
    },
    isSelf: function() {
      return this.source === this.target;
    },
    isReturnToStart() {
      return this.target === this.participants.Starter().name;
    }
  },
  methods: {
    onClick() {
      this.onElementClick(hs.from(this.context));
    }
  },
  components: {
    Comment: fi,
    Message: pi
  }
}, GT = ["data-signature"], jT = {
  key: 1,
  class: "flex items-center"
}, $T = /* @__PURE__ */ T("svg", {
  class: "w-3 h-3 flex-shrink-0 fill-current m-1",
  viewBox: "0 0 512 512"
}, [
  /* @__PURE__ */ T("path", {
    class: "cls-1",
    d: "M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0Zm0 469.33c-117.63 0-213.33-95.7-213.33-213.33S138.37 42.67 256 42.67 469.33 138.37 469.33 256 373.63 469.33 256 469.33Z"
  }),
  /* @__PURE__ */ T("path", {
    class: "cls-1",
    d: "M288 192h-87.16l27.58-27.58a21.33 21.33 0 1 0-30.17-30.17l-64 64a21.33 21.33 0 0 0 0 30.17l64 64a21.33 21.33 0 0 0 30.17-30.17l-27.58-27.58H288a53.33 53.33 0 0 1 0 106.67h-32a21.33 21.33 0 0 0 0 42.66h32a96 96 0 0 0 0-192Z"
  })
], -1), qT = { class: "name text-sm" };
function ZT(t, e, n, r, s, i) {
  const o = fe("comment"), a = fe("Message");
  return P(), ee("div", {
    class: ze(["interaction return relative", { "right-to-left": i.rightToLeft, highlight: i.isCurrent, "return-to-start": i.isReturnToStart }]),
    onClick: e[0] || (e[0] = ri((...l) => i.onClick && i.onClick(...l), ["stop"])),
    "data-signature": i.signature,
    style: be({ width: i.width + "px", left: i.left + "px" })
  }, [
    n.comment ? (P(), Me(o, {
      key: 0,
      comment: n.comment
    }, null, 8, ["comment"])) : Te("", !0),
    i.isSelf ? (P(), ee("div", jT, [
      $T,
      T("span", qT, Ke(i.signature), 1)
    ])) : Te("", !0),
    i.isSelf ? Te("", !0) : (P(), Me(a, {
      key: 2,
      content: i.signature,
      rtl: i.rightToLeft,
      type: "return"
    }, null, 8, ["content", "rtl"]))
  ], 14, GT);
}
const WT = /* @__PURE__ */ Oe(VT, [["render", ZT]]), YT = {
  name: "divider",
  props: ["context"],
  computed: {
    ...zt(["participants", "centerOf"]),
    width() {
      let t = this.participants.Names().pop();
      return this.centerOf(t) + 10;
    },
    from: function() {
      return this.context.Origin();
    },
    centerOfFrom() {
      return this.centerOf(this.from);
    },
    name: function() {
      return this.context.divider().Note();
    }
  }
}, P4 = (t) => (br("data-v-9e567e69"), t = t(), _r(), t), KT = /* @__PURE__ */ P4(() => /* @__PURE__ */ T("div", { class: "left bg-skin-divider" }, null, -1)), QT = { class: "name" }, XT = /* @__PURE__ */ P4(() => /* @__PURE__ */ T("div", { class: "right bg-skin-divider" }, null, -1));
function JT(t, e, n, r, s, i) {
  return P(), ee("div", {
    class: "divider",
    style: be({ width: i.width + "px", transform: "translateX(" + (-1 * i.centerOfFrom + 10) + "px)" })
  }, [
    KT,
    T("div", QT, Ke(i.name), 1),
    XT
  ], 4);
}
const eA = /* @__PURE__ */ Oe(YT, [["render", JT], ["__scopeId", "data-v-9e567e69"]]);
class tA {
  constructor(e) {
    W(this, "text"), W(this, "color");
    const n = e.split(`
`);
    this.color = n.find((s) => s.trimStart().startsWith("[red]")) ? "red" : void 0;
    const r = n.map((s) => s.replace("[red]", ""));
    this.text = r.join(`
`), this.text = this.text.trimEnd();
  }
}
const nA = {
  name: "statement",
  props: ["context", "selfCallIndent"],
  computed: {
    comment: function() {
      return this.context.getComment() ? this.context.getComment() : "";
    },
    commentObj: function() {
      return new tA(this.comment);
    },
    subStatement: function() {
      let t = this, e = {
        loop: "FragmentLoop",
        alt: "FragmentAlt",
        par: "FragmentPar",
        opt: "FragmentOpt",
        tcf: "FragmentTryCatchFinally",
        creation: "Creation",
        message: "Interaction",
        asyncMessage: "InteractionAsync",
        divider: "Divider",
        ret: "Return"
      }, n = Object.keys(e).find((r) => t.context[r]() !== null);
      return e[n];
    }
  },
  components: {
    Creation: _k,
    Interaction: Nk,
    InteractionAsync: jk,
    FragmentAlt: dT,
    FragmentPar: xT,
    FragmentOpt: RT,
    FragmentTryCatchFinally: HT,
    FragmentLoop: ET,
    Divider: eA,
    Return: WT
  }
};
function rA(t, e, n, r, s, i) {
  return P(), Me(Js(i.subStatement), {
    class: "text-left text-sm text-skin-message",
    context: n.context,
    comment: i.comment,
    commentObj: i.commentObj,
    selfCallIndent: n.selfCallIndent
  }, null, 8, ["context", "comment", "commentObj", "selfCallIndent"]);
}
const sA = /* @__PURE__ */ Oe(nA, [["render", rA]]), iA = {
  name: "block",
  props: ["context", "selfCallIndent"],
  computed: {
    statements: function() {
      var t;
      return (t = this.context) == null ? void 0 : t.stat();
    }
  },
  components: {
    Statement: sA
  }
}, oA = { class: "block" };
function aA(t, e, n, r, s, i) {
  const o = fe("statement");
  return P(), ee("div", oA, [
    (P(!0), ee(He, null, Cn(i.statements, (a, l) => (P(), ee("div", {
      class: "statement-container mt-1",
      key: l
    }, [
      ne(o, {
        context: a,
        selfCallIndent: n.selfCallIndent
      }, null, 8, ["context", "selfCallIndent"])
    ]))), 128))
  ]);
}
const lA = /* @__PURE__ */ Oe(iA, [["render", aA]]), cA = js.child({ name: "core" });
class Au {
  constructor(e, n = !1) {
    W(this, "el"), W(this, "_code"), W(this, "_theme"), W(this, "store"), W(this, "app"), this.el = e, this.store = c6(Fv()), this.app = No(n ? c4 : FC), this.app.component("Comment", fi), this.app.component("Block", lA), this.app.use(this.store), this.app.mount(this.el);
  }
  async render(e, n) {
    return cA.debug("rendering", e, n), this._code = e || this._code, this._theme = n || this._theme, this.store.state.theme = this._theme || "default", await this.store.dispatch("updateCode", { code: this._code }), Promise.resolve(this);
  }
  get code() {
    return this._code;
  }
  get theme() {
    return this._theme;
  }
  async getPng() {
    return this.el.children[0].__vue__.toPng();
  }
}
const uA = /^\s*zenuml/;
function hA(t) {
  const e = document.createElement("div");
  e.id = `container-${t}`;
  e.style.display = "flex";
  e.style.backgroundColor = "white";
  e.innerHTML = `\
  <div id="zenUMLApp-${t}" data-fancybox data-src="#fancybox-data-${t}" style="overflow-x: auto;"></div>\
  <div id="fancybox-data-${t}" style="display:none;"></div>\
  `;
  const n = e.querySelector(`#zenUMLApp-${t}`);
  const box = e.querySelector(`#fancybox-data-${t}`);
  return { container: e, app: n, box: box };
}
function dA(t) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
  e.setAttribute("x", "0"), e.setAttribute("y", "0"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%");
  const { container: n, app: r, box: box } = hA(t);
  return e.appendChild(n), { foreignObject: e, container: n, app: r, box: box };
}
const pA = async function(t, e) {
  var p;
  mn.info("draw with Zen UML renderer", Au), t = t.replace(uA, "");
  const { securityLevel: n } = Su();
  let r = null;
  n === "sandbox" && (r = document.getElementById("i" + e));
  const s = n === "sandbox" ? (p = r == null ? void 0 : r.contentWindow) == null ? void 0 : p.document : document, i = s == null ? void 0 : s.querySelector(`svg#${e}`);
  if (!s || !i) {
    mn.error("Cannot find root or svgContainer");
    return;
  }
  const { foreignObject: o, container: a, app: l, box: box } = dA(e);
  i.appendChild(o), await new Au(l).render(t, "theme-mermaid");
  await new Au(box).render(t, "theme-mermaid");
  const { width: u, height: d } = window.getComputedStyle(a);
  mn.debug("zenuml diagram size", u, d), i.setAttribute("style", `width: ${u}; height: ${d};`);
}, fA = {
  draw: pA
}, gA = {
  db: {
    clear: () => {
    }
  },
  renderer: fA,
  parser: F4,
  styles: () => {
  },
  injectUtils: M4
};
export {
  gA as diagram
};
