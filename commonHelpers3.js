import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as r}from"./assets/vendor-651d7991.js";r.settings({closeOnClick:!0,position:"topRight",progressBar:!1,timeout:5e3,transitionIn:"bounceInUp"});const m=document.querySelector(".form");m.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements,s=e.delay.value,o=e.step.value,n=e.amount.value;setTimeout(()=>{for(let i=1;i<=n;i++)u(i,o*i)},s),m.reset()});function l(t,e){const s=Math.random()>.3;return new Promise((o,n)=>{setTimeout(()=>{s?o({position:t,delay:e}):n({position:t,delay:e})},e)})}function u(t,e){l(t,e).then(({position:s,delay:o})=>{r.success({title:"Resolved",message:`Fulfilled promise ${s} in ${o}ms`})}).catch(({position:s,delay:o})=>{r.error({title:"Rejected",message:`Rejected promise ${s} in ${o}ms`})})}
//# sourceMappingURL=commonHelpers3.js.map
