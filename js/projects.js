/* Illustrative project data. Replace titles, locations and image ids with your real projects.
   Photos are stock images (see CREDITS.md), not completed company projects. */
(function(){
var px=function(id,w){return'https://images.unsplash.com/photo-'+id+'?auto=format&fit=crop&w='+(w||900)+'&q=80'};
var P=[
{t:'Olive Court Villa',c:'Residential',l:'Pune',a:'6,200 sq ft',s:'Full turnkey build',id:'1512917774080-9991f1c4c750',d:'A single-family villa in stone, timber and glass with a landscaped courtyard.',f:1},
{t:'Stonegate Courtyard Residence',c:'Residential',l:'Lonavala',a:'8,400 sq ft',s:'Structure, finishes, pool',id:'1600596542815-ffad4c1539a9',d:'Two-storey residence arranged around a pool terrace and covered lounge.'},
{t:'Harbour Point Offices',c:'Commercial',l:'Mumbai',a:'42,000 sq ft',s:'Core, shell and fit-out',id:'1486406146926-c627a92ad1ab',d:'Mid-rise office floors with shaded terraces and a naturally lit atrium.',f:1},
{t:'Atrium Retail Pavilion',c:'Commercial',l:'Nashik',a:'18,500 sq ft',s:'Structure and facade',id:'1545324418-cc1a3fa10c00',d:'Warm-toned retail pavilion with deep overhangs and framed glazing.'},
{t:'Northfield Fabrication Works',c:'Industrial',l:'Chakan',a:'60,000 sq ft',s:'Steel frame and civil works',id:'1553413077-190dd305871c',d:'Clear-span fabrication shed with heavy-duty slab and service yard.',f:1},
{t:'Castellan Heritage Restoration',c:'Renovation',l:'Satara',a:'5,100 sq ft',s:'Restoration and redevelopment',id:'1511818966892-d7d671e672a2',d:'Stone facade restoration with new lighting, landscaping and structure.',f:1},
{t:'Terrace Row Residences',c:'Residential',l:'Pune',a:'12,000 sq ft',s:'Multi-unit construction',id:'1494526585095-c41746248156',d:'A row of stepped residences designed to catch the evening light.'},
{t:'Foundry Lane Logistics Hub',c:'Industrial',l:'Talegaon',a:'85,000 sq ft',s:'Warehouse and hardstand',id:'1565793298595-6a879b1d9492',d:'Distribution facility with loading bays, mezzanine and site drainage.'},
{t:'Garden Terrace Villa',c:'Residential',l:'Kolhapur',a:'7,300 sq ft',s:'Turnkey build and landscaping',id:'1564013799919-ab600027ffc6',d:'Split-level villa with planted terraces and warm integrated lighting.'},
{t:'Poolside Pavilion Residences',c:'Residential',l:'Alibaug',a:'9,600 sq ft',s:'Structure, pool and finishes',id:'1600607687939-ce8a6c25118c',d:'Courtyard homes opening onto a shared reflective pool deck.'},
{t:'Meridian Plaza',c:'Commercial',l:'Pune',a:'26,000 sq ft',s:'Core, shell and facade',id:'1460317442991-0ec209397118',d:'Boutique mixed-use block with stepped terraces and a stone-clad base.'},
{t:'Old Quarter Facade Renewal',c:'Renovation',l:'Pune',a:'4,200 sq ft',s:'Facade repair and upgrade',id:'1448630360428-65456885c650',d:'Stone balcony facade repaired and re-detailed with new joinery and railings.'}];
var FB='assets/images/placeholder.svg';
function card(p,i){return'<button class="pc bp" data-r data-i="'+i+'" data-c="'+p.c+'" aria-label="View project: '+p.t+'"><span class="im"><img data-ld src="'+px(p.id)+'" alt="'+p.t+' \u2014 '+p.c+' project (illustrative stock photo)" loading="lazy"></span><span class="ct">'+p.c+'</span><span class="cap"><h3>'+p.t+'</h3><span class="mt"><span><i class="bi bi-geo-alt"></i>'+p.l+'</span><span><i class="bi bi-rulers"></i>'+p.a+'</span></span></span></button>'}
var grid=document.getElementById('pgrid'),feat=document.getElementById('pfeat'),last;
var PAT=[[[5,2],[4,1],[3,1],[3,1],[4,1],[12,1]],[[7,1],[5,2],[7,1],[4,1],[4,1],[4,1]]];
var TAIL={1:[[12,1]],2:[[6,1],[6,1]],3:[[4,1],[4,1],[4,1]],4:[[3,1],[3,1],[3,1],[3,1]],5:[[4,1],[4,1],[4,1],[6,1],[6,1]]};
function lay(){var it=[].filter.call(grid.children,function(e){return!e.classList.contains('h')}),n=it.length,full=Math.floor(n/6)*6,k=(full===0)?2:1;
it.forEach(function(e,i){var s=i<full?PAT[Math.floor(i/6)%2][i%6]:TAIL[n-full][i-full],r=i<full?s[1]:s[1]*k;e.style.gridColumn='span '+s[0];e.style.gridRow='span '+r})}
if(grid){grid.innerHTML=P.map(function(p,i){return card(p,i)}).join('');lay();revealNew(grid);
var fb=document.querySelectorAll('.fl button');[].forEach.call(fb,function(b){b.onclick=function(){[].forEach.call(fb,function(x){x.setAttribute('aria-pressed',x===b)});[].forEach.call(grid.children,function(e){var show=b.dataset.f==='All'||e.dataset.c===b.dataset.f;e.classList.toggle('h',!show);if(show){e.style.animation='none';e.offsetWidth;e.style.animation='';e.classList.remove('in');requestAnimationFrame(function(){e.classList.add('in')})}});lay()}})}
if(feat){feat.innerHTML=P.filter(function(p){return p.f}).map(function(p){return card(p,P.indexOf(p))}).join('');revealNew(feat)}
var dlg=document.getElementById('pm');if(!dlg)return;
function open(i){var p=P[i];last=document.activeElement;var pi=document.getElementById('pm-img');pi.dataset.fb=FB;pi.src=px(p.id,1200);pi.alt=p.t+' \u2014 '+p.c+' project (illustrative stock photo)';pi.style.display='';
document.getElementById('pm-c').textContent=p.c;document.getElementById('pm-c2').textContent=p.c;document.getElementById('pm-t').textContent=p.t;document.getElementById('pm-d').textContent=p.d;document.getElementById('pm-l').textContent=p.l;document.getElementById('pm-a').textContent=p.a;document.getElementById('pm-s').textContent=p.s;dlg.showModal()}
document.addEventListener('click',function(e){var c=e.target.closest&&e.target.closest('.pc');if(c)open(+c.dataset.i);if(e.target===dlg)dlg.close()});
document.getElementById('pm-x').onclick=function(){dlg.close()};dlg.addEventListener('close',function(){if(last)last.focus()});
})();
