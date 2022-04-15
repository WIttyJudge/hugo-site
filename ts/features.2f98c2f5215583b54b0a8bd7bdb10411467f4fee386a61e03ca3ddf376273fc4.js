(()=>{var s=class{localStorageKey="ThemeColorScheme";currentScheme;systemPreferScheme;constructor(e){this.bindMatchMedia(),this.currentScheme=this.getSavedScheme(),this.dispatchEvent(document.documentElement.dataset.userColorScheme),e&&this.bindClick(e),document.body.style.transition==""&&document.body.style.setProperty("transition","background-color .3s ease")}saveScheme(){localStorage.setItem(this.localStorageKey,this.currentScheme)}bindClick(e){e.addEventListener("click",n=>{this.isDark()?this.currentScheme="light":this.currentScheme="dark",this.setBodyClass(),this.currentScheme==this.systemPreferScheme&&(this.currentScheme="auto"),this.saveScheme()})}isDark(){return this.currentScheme=="dark"||this.currentScheme=="auto"&&this.systemPreferScheme=="dark"}dispatchEvent(e){let n=new CustomEvent("onColorSchemeChange",{detail:e});window.dispatchEvent(n)}setBodyClass(){this.isDark()?document.documentElement.dataset.userColorScheme="dark":document.documentElement.dataset.userColorScheme="light",this.dispatchEvent(document.documentElement.dataset.userColorScheme)}getSavedScheme(){let e=localStorage.getItem(this.localStorageKey);return e=="light"||e=="dark"||e=="auto"?e:"auto"}bindMatchMedia(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{e.matches?this.systemPreferScheme="dark":this.systemPreferScheme="light",this.setBodyClass()})}},d=s;var p=document.querySelectorAll(".article-post .highlight"),l="Copy",f="Copied!",m=function(){p.forEach(t=>{let e=document.createElement("button");e.innerHTML=l,e.classList.add("copyCodeButton"),t.appendChild(e);let n=t.getElementsByTagName("pre"),r=0;n.length==2&&(r=1);let c=n[r].textContent;e.addEventListener("click",()=>{navigator.clipboard.writeText(c).then(()=>{e.textContent=f,setTimeout(()=>{e.textContent=l},1e3)}).catch(o=>{alert(o),console.log("Something went wrong",o)})})})};var i=t=>{!t||(t.remove?t.remove():t.parentNode.removeChild(t))},a=(t,e)=>{t.after?t.after(e):t.parentNode.insertBefore(e,t.nextSibling)},S=t=>{var e=t.parentNode,n=t.innerHTML,r=document.createElement("div");a(e,r),r.appendChild(t),t.innerHTML="",t.appendChild(e),e.innerHTML=n,a(r,r.firstElementChild),i(r)},h=function(){document.querySelectorAll('.footnotes > ol > li[id^="fn"], #refs > div[id^="ref-"]').forEach(function(t){let e=document.querySelectorAll('a[href="#'+t.id+'"]');if(e.length===0)return;e.forEach(function(o){o.removeAttribute("href")});let n=e[0],r=document.createElement("div");if(r.className="side side-right",/^fn/.test(t.id)){r.innerHTML=t.innerHTML;var c=n.innerHTML;r.firstElementChild.innerHTML='<span class="bg-number">'+c+"</span> "+r.firstElementChild.innerHTML,i(r.querySelector('a[href^="#fnref"]')),n.parentNode.tagName==="SUP"&&S(n)}else r.innerHTML=t.outerHTML,n=n.parentNode;a(n,r),n.classList.add("note-ref"),i(t)}),document.querySelectorAll(".footnotes, #refs").forEach(function(t){var e=t.children;if(t.id==="refs")return e.length===0&&i(t);e.length!==2||e[0].tagName!=="HR"||e[1].tagName!=="OL"||e[1].childElementCount===0&&i(t)})};var u=!1;document.currentScript&&(u=document.currentScript.dataset.enableFootnotes=="true");var v=()=>{new d(document.getElementById("dark-mode-button")),u&&h(),m()};window.addEventListener("load",()=>{setTimeout(function(){v()},0)});})();