import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as u,i as l}from"./assets/vendor-77e16229.js";const e={datetimePicker:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),daysEl:document.querySelector("[data-days]"),hoursEl:document.querySelector("[data-hours]"),minutesEl:document.querySelector("[data-minutes]"),secondsEl:document.querySelector("[data-seconds]")},m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){n=t[0],h(n)?(l.error({position:"topRight",title:"Error",message:"Please choose a date in the future"}),e.startBtn.disabled=!0):(a(n-Date.now()),e.startBtn.disabled=!1)}};u(e.datetimePicker,m);let n;e.startBtn.disabled=!0;let o=null;e.startBtn.addEventListener("click",()=>{e.startBtn.disabled=!0,e.datetimePicker.disabled=!0,o=setInterval(()=>{const t=n-Date.now();if(t<=0){clearInterval(o),e.datetimePicker.disabled=!1,a(0);return}a(t)},1e3)});function f(t){const s=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:i,minutes:d,seconds:c}}function a(t){const r=f(t);e.daysEl.innerText=String(r.days).padStart(2,"0"),e.hoursEl.innerText=String(r.hours).padStart(2,"0"),e.minutesEl.innerText=String(r.minutes).padStart(2,"0"),e.secondsEl.innerText=String(r.seconds).padStart(2,"0")}function h(t){return t<=Date.now()}
//# sourceMappingURL=commonHelpers.js.map
