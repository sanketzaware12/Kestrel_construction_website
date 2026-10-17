/* Kestrel Build — shared header/footer/CTA, inline icons and the motion system:
   word-mask headings, staggered reveals, spotlight + tilt + magnetic hover, nav indicator, counters, parallax. */
(function(){
var d=document,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
d.documentElement.classList.add('js');if(rm)d.documentElement.classList.add('rm');
/* ---- contact details (edit here) ---- */
var PHONE='+91 96999 38110',TEL='tel:+919699938110',MAIL='hello@your-domain.com',ADDR='Pune, Maharashtra, India';
var NAV=[['index.html','Home','house'],['about.html','About','people'],['services.html','Services','grid'],['projects.html','Projects','images'],['safety-quality.html','Safety & Quality','shield-check'],['contact.html','Contact','chat']];
var LOGO='<svg viewBox="0 0 40 40" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 30L20 9l15 21"/><path d="M12 30l8-11 8 11"/></svg>';
var IC={
'arrow-right':'M5 12h14M13 6l6 6-6 6','arrow-up-right':'M7 17L17 7M8 7h9v9','arrow-up':'M12 19V5M6 11l6-6 6 6','x-lg':'M6 6l12 12M18 6L6 18','check2':'M5 12.5l4.5 4.5L19 7.5',
'house':'M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10','grid':'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z','images':'M3 6h14v11H3zM7 10a1.4 1.4 0 1 0 0 .01M3 15l4-3 4 3 3-2 3 2M7 20h14V9','chat':'M4 5h16v11H10l-5 4v-4H4zM8 10h8M8 13h5',
'house-heart':'M3 11l9-8 9 8M5 10v10h14V10M12 17.5s-2.5-1.6-2.5-3.2a1.4 1.4 0 0 1 2.5-.8 1.4 1.4 0 0 1 2.5.8c0 1.6-2.5 3.2-2.5 3.2z',
'buildings':'M4 21V5l8-2v18M12 9l8 2v10M2 21h20M8 9h1M8 13h1M8 17h1M16 14h1M16 18h1',
'gear-wide-connected':'M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1',
'bricks':'M3 5h18v14H3zM3 9.7h18M3 14.3h18M10 5v4.7M15 9.7v4.6M8 14.3V19','arrow-repeat':'M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5',
'kanban':'M4 4h16v16H4zM9 8v6M12 8v9M15 8v4','rulers':'M3 16L16 3l5 5L8 21zM7 12l2 2M10 9l2 2M13 6l2 2',
'telephone':'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z','envelope':'M3 6h18v12H3zM3 7l9 7 9-7',
'geo-alt':'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z','clock':'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
'whatsapp':'M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3zM9 8.5c0 3 3 6 6 6l1.2-1.3-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z',
'linkedin':'M4 4h16v16H4zM8 10v7M8 7v.01M12 17v-7M12 13a3 3 0 0 1 5 0v4','instagram':'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5v.01',
'facebook':'M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z','eye':'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
'bullseye':'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 11.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z',
'gem':'M6 3h12l4 6-10 12L2 9zM2 9h20M9 3L7 9l5 12M15 3l2 6-5 12','shield-check':'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-5',
'lightbulb':'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z','hard-hat':'M3 17h18v2H3zM5 17a7 7 0 0 1 14 0M12 6v5M9 7v4M15 7v4',
'clipboard2-check':'M8 4h8v3H8zM6 5H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1M9 14l2.2 2.2L15.5 12','droplet-half':'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11zM12 3v17',
'journal-check':'M6 3h12v18H6zM6 7H4M6 12H4M6 17H4M9.5 12l2 2 3.5-4','person-check':'M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 21a7 7 0 0 1 14 0M16 11l2 2 4-4','ladder':'M7 3v18M17 3v18M7 7h10M7 12h10M7 17h10',
'lightning-charge':'M13 2L4 14h7l-1 8 9-12h-7z','signpost-split':'M12 3v18M12 5h7l2 2.5-2 2.5h-7M12 12H5l-2 2.5L5 17h7',
'heart-pulse':'M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11zM6 12h3l1.5-2.5 2 4 1.5-1.5h3','calendar':'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
'award':'M12 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM8.5 14.5L7 21l5-3 5 3-1.5-6.5','people':'M9 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM3 20a6 6 0 0 1 12 0M17 7a2.5 2.5 0 1 0 0 5M16 14a5 5 0 0 1 5 6',
'star':'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z','send':'M3 11l18-8-8 18-2-8z','sun':'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19',
'sunset':'M4 18h16M7 18a5 5 0 0 1 10 0M12 6v3M5 10l1.5 1.5M19 10l-1.5 1.5','flag':'M5 21V4M5 4h12l-2 4 2 4H5','layers':'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5','trophy':'M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M12 14v4M8 21h8',
'compass':'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM15.5 8.5l-2 5-5 2 2-5z','pencil-ruler':'M3 21l1-4L16 5l3 3L7 20zM14 7l3 3M3 21l4-1','tools':'M14.5 4.5a4 4 0 0 0-4.8 5L3 16.2 7.8 21l6.7-6.7a4 4 0 0 0 5-4.8l-2.7 2.7-2.6-.7-.7-2.6z',
'key':'M7.5 14a4.5 4.5 0 1 1 4.4-5.5H21v4h-3v3h-3v-3h-3.1A4.5 4.5 0 0 1 7.5 14zM7.5 10.5v.01','search':'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5',
'flask':'M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M7.5 15h9','file-text':'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7','box':'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10',
'patch-check':'M12 3l2.4 1.8 3-.2.9 2.9 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-.9 2.9-3-.2L12 21l-2.4-1.8-3 .2-.9-2.9L3.3 14.7l.9-2.9-.9-2.9 2.4-1.8.9-2.9 3 .2zM8.5 12l2.5 2.5 4.5-5',
'cone':'M12 3l6 17H6zM8.5 13h7M7 17h10','speedometer':'M4 18a9 9 0 1 1 16 0M12 14l4-5M6 18h12','chat-heart':'M4 5h16v11H10l-5 4v-4H4z','building':'M5 21V4h14v17M9 8h2M13 8h2M9 12h2M13 12h2M10 21v-4h4v4'
};
function svg(n){var p=IC[n]||'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z';return'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="'+p+'"/></svg>'}
function $(s,r){return(r||d).querySelector(s)}function $$(s,r){return[].slice.call((r||d).querySelectorAll(s))}
window.vIcons=function(root){$$('i[class*="bi-"]',root).forEach(function(i){var m=/bi-([\w-]+)/.exec(i.className);if(!m)return;var x=i.className.replace(/\bbi\b|\bbi-[\w-]+/g,'').trim();i.className='ico'+(x?' '+x:'');i.innerHTML=svg(m[1])})};
var page=d.body.dataset.page||'index';
var wm='<a class="lg" href="index.html" aria-label="Kestrel Build home"><span class="mk">'+LOGO+'</span><span><b>Kestrel</b><small>Build &amp; Engineering</small></span></a>';
function cur(n,mob){var on=n[0].replace('.html','')===page;return on?(mob?' aria-current="page"':' class="on" aria-current="page"'):''}
var h=$('#site-header');
if(h){h.outerHTML='<a class="sk" href="#main">Skip to content</a><div class="pgb" id="pgb"></div><header class="hdr" id="hdr"><nav class="mm" id="mm" aria-label="Mobile">'+NAV.map(function(n,i){return'<a style="--i:'+i+'" href="'+n[0]+'"'+cur(n,1)+'><i class="bi bi-'+n[2]+'"></i>'+n[1].replace('&','&amp;')+'</a>'}).join('')+'<a class="btn" href="contact.html">Get a Quote <i class="bi bi-arrow-up-right"></i></a></nav><div class="nv">'+wm+'<nav class="lk" id="lk" aria-label="Main"><i class="ind" id="ind"></i>'+NAV.map(function(n){return'<a href="'+n[0]+'"'+cur(n)+'><i class="bi bi-'+n[2]+'"></i>'+n[1].replace('&','&amp;')+'</a>'}).join('')+'<a class="btn sm" href="contact.html">Get a Quote <i class="bi bi-arrow-up-right"></i></a></nav><button class="bg" id="bg" aria-label="Open menu" aria-expanded="false" aria-controls="mm"><i></i><i></i></button></div></header>'}
$$('[data-cta]').forEach(function(e){e.outerHTML='<section class="cta"><div class="w"><div class="cta-in" data-r><div class="cta-l"><span class="eb">Start a project</span><h2 data-split>Planning a build? <em>Let\u2019s talk it through.</em></h2><p>Book a free consultation with our project team. One call, a clear scope, and a plan you can trust.</p></div><div class="cta-act"><a class="btn" href="contact.html">Book a Consultation <i class="bi bi-arrow-up-right"></i></a><a class="tel" href="'+TEL+'"><i class="bi bi-telephone"></i><div><span>Call us</span><b>'+PHONE+'</b></div></a></div></div></div></section>'});
var f=$('#site-footer');
if(f){f.outerHTML='<footer class="ft" id="ft"><div class="w"><div class="fg"><div>'+wm+'<p>Residential, commercial and industrial construction, planned precisely and delivered with care.</p><div class="so"><a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a><a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="https://wa.me/919699938110" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a></div></div><div><h4>Company</h4><ul>'+NAV.map(function(n){return'<li><a href="'+n[0]+'">'+n[1].replace('&','&amp;')+'</a></li>'}).join('')+'</ul></div><div><h4>Services</h4><ul><li><a href="services.html">Residential</a></li><li><a href="services.html">Commercial</a></li><li><a href="services.html">Industrial</a></li><li><a href="services.html">Civil &amp; Structural</a></li><li><a href="services.html">Renovation</a></li></ul></div><div><h4>Contact</h4><ul class="ci2"><li><i class="bi bi-telephone"></i><a href="'+TEL+'">'+PHONE+'</a></li><li><i class="bi bi-envelope"></i><a href="mailto:'+MAIL+'">'+MAIL+'</a></li><li><i class="bi bi-geo-alt"></i><span>'+ADDR+'</span></li></ul></div></div><div class="fbm"><span>&copy; 2026 Kestrel Build &amp; Engineering. All rights reserved.</span><span>Project data on this site is illustrative.</span></div></div><div class="wmk" aria-hidden="true">Kestrel</div></footer>'}
/* headings -> masked words (keeps <em>) */
function split(el){var t=el.textContent.trim(),i=0;el.setAttribute('aria-label',t);
function wrap(s){return s.split(/\s+/).filter(Boolean).map(function(w){return'<span class="sw" aria-hidden="true"><span style="--i:'+(i++)+'">'+w.replace(/&/g,'&amp;')+'</span></span>'}).join(' ')}
var o=[];[].forEach.call(el.childNodes,function(n){if(n.nodeType===3)o.push(wrap(n.textContent));else if(n.nodeType===1){var g=n.tagName.toLowerCase();o.push('<'+g+'>'+wrap(n.textContent)+'</'+g+'>')}});el.innerHTML=o.join(' ')}
$$('[data-split]').forEach(split);
var hd=$('#hdr'),pb=$('#pgb'),tp=d.createElement('button');tp.className='top';tp.setAttribute('aria-label','Back to top');tp.innerHTML='<i class="bi bi-arrow-up"></i>';tp.onclick=function(){scrollTo({top:0})};d.body.appendChild(tp);
function sc(){var y=scrollY,m=d.documentElement.scrollHeight-innerHeight;if(hd)hd.classList.toggle('s',y>30);tp.classList.toggle('v',y>600);if(pb)pb.style.setProperty('--p',m>0?(y/m).toFixed(3):0);if(rm)return;$$('[data-drift]').forEach(function(el){var r=el.parentNode.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;el.style.translate='0 '+(r.top*-.06).toFixed(1)+'px'})}
var tk=false;addEventListener('scroll',function(){if(tk)return;tk=true;requestAnimationFrame(function(){sc();tk=false})},{passive:true});sc();
/* mobile menu */
var bg=$('#bg'),mm=$('#mm');
function menu(o){if(!mm)return;mm.classList.toggle('o',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Close menu':'Open menu')}
if(bg){bg.onclick=function(){menu(!mm.classList.contains('o'))};$$('a',mm).forEach(function(a){a.addEventListener('click',function(){menu(false)})});d.addEventListener('keydown',function(e){if(e.key==='Escape')menu(false)});d.addEventListener('click',function(e){if(mm.classList.contains('o')&&!mm.contains(e.target)&&!bg.contains(e.target))menu(false)});matchMedia('(min-width:961px)').addEventListener('change',function(e){if(e.matches)menu(false)})}
/* nav sliding indicator */
var lk=$('#lk'),ind=$('#ind');
if(lk&&ind){var links=$$('a:not(.btn)',lk),on=$('a.on',lk);
function to(a){if(!a){ind.style.opacity=0;return}ind.style.opacity=1;ind.style.left=a.offsetLeft+'px';ind.style.width=a.offsetWidth+'px';ind.style.top=a.offsetTop+'px';ind.style.height=a.offsetHeight+'px'}
links.forEach(function(a){a.addEventListener('mouseenter',function(){to(a)});a.addEventListener('focus',function(){to(a)})});lk.addEventListener('mouseleave',function(){to(on)});
function init(){to(on)}if(d.fonts&&d.fonts.ready)d.fonts.ready.then(init);init();addEventListener('resize',init)}
/* services accordion */
$$('.xp').forEach(function(p){var it=$$('.xi',p);function set(x){it.forEach(function(y){y.classList.toggle('on',y===x)})}set(it[0]);it.forEach(function(x){x.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')set(x)});x.addEventListener('focusin',function(){set(x)});x.addEventListener('click',function(){set(x)})})});
/* counters + reveal */
function count(el){var t=+el.dataset.count,s=el.dataset.suffix||'',st=performance.now();if(rm){el.textContent=t+s;return}(function k(now){var p=Math.min((now-st)/1800,1);el.textContent=Math.round(t*(1-Math.pow(1-p,4)))+s;if(p<1)requestAnimationFrame(k)})(st)}
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(!x.isIntersecting)return;var t=x.target;t.classList.add('in');$$('[data-count]',t).forEach(count);if(t.hasAttribute('data-count'))count(t);io.unobserve(t)})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
window.revealNew=function(root){$$('[data-r]',root).forEach(function(e){e.style.setProperty('--i',[].indexOf.call(e.parentNode.children,e)%6);io.observe(e)});$$('.flow,.sg,.eb,[data-split]',root).forEach(function(e){io.observe(e)});window.vIcons(root)};
/* images: fade in when loaded; fall back gracefully */
function ok(i){i.classList.add('ok')}
d.addEventListener('load',function(e){if(e.target.tagName==='IMG')ok(e.target)},true);
function pick(t){var s=((t.alt||'')+' '+(t.getAttribute('src')||'')).toLowerCase();if(/villa|residen|home|house|row|pool|terrace|garden/.test(s))return'assets/images/ph-villa.svg';if(/tower|commercial|office|glass|retail|plaza|facade|apartment|building/.test(s))return'assets/images/ph-tower.svg';if(/industr|steel|factory|warehouse|logistic|fabric/.test(s))return'assets/images/ph-industrial.svg';return'assets/images/ph-site.svg'}
d.addEventListener('error',function(e){var t=e.target;if(!t||t.tagName!=='IMG')return;var fb=t.dataset.fb||pick(t);if(t.getAttribute('src')!==fb&&!/\.svg$/.test(t.getAttribute('src')||'')){t.dataset.fb=fb;t.src=fb}else{t.style.display='none'}},true);
$$('img[data-ld]').forEach(function(i){if(i.complete){if(i.naturalWidth>0)ok(i);else i.src=i.dataset.fb||pick(i)}});
/* pointer effects: spotlight, tilt, magnetic buttons */
if(!rm&&matchMedia('(hover:hover)').matches){
d.addEventListener('pointermove',function(e){var t=e.target.closest&&e.target.closest('.sp,.pc');if(t){var r=t.getBoundingClientRect();t.style.setProperty('--mx',(e.clientX-r.left)+'px');t.style.setProperty('--my',(e.clientY-r.top)+'px')}
var m=e.target.closest&&e.target.closest('[data-mag]');if(m){var b=m.getBoundingClientRect();m.style.setProperty('--tx',((e.clientX-b.left-b.width/2)*.18).toFixed(1)+'px');m.style.setProperty('--ty',((e.clientY-b.top-b.height/2)*.28).toFixed(1)+'px')}
var tl=e.target.closest&&e.target.closest('[data-tilt]');if(tl){var q=tl.getBoundingClientRect(),x=(e.clientX-q.left)/q.width-.5,y=(e.clientY-q.top)/q.height-.5;tl.style.transform='rotateY('+(x*10).toFixed(2)+'deg) rotateX('+(-y*10).toFixed(2)+'deg)'}});
d.addEventListener('pointerout',function(e){var m=e.target.closest&&e.target.closest('[data-mag]');if(m&&!m.contains(e.relatedTarget)){m.style.setProperty('--tx','0px');m.style.setProperty('--ty','0px')}var tl=e.target.closest&&e.target.closest('[data-tilt]');if(tl&&!tl.contains(e.relatedTarget))tl.style.transform=''})}
revealNew(d);
})();
