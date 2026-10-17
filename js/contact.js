/* Contact form: validation, then the enquiry is sent as a formatted WhatsApp message to the business number. */
(function(){
var f=document.getElementById('cf');if(!f)return;
var WA='919699938110',fb=document.getElementById('fb');
function iso(d){var m=d.getMonth()+1,x=d.getDate();return d.getFullYear()+'-'+(m<10?'0':'')+m+'-'+(x<10?'0':'')+x}
var dt=document.getElementById('date'),today=iso(new Date());dt.min=today;
var rules={name:function(v){return v.trim().length>=2||'Please enter your full name.'},email:function(v){return/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)||'Please enter a valid email address.'},phone:function(v){return/^[+\d][\d\s()-]{6,17}$/.test(v.trim())||'Please enter a valid phone number.'},service:function(v){return!!v||'Please choose a service.'},date:function(v){if(!v)return'Please choose a preferred date.';return v>=today||'Past dates are not allowed. Please pick today or a later date.'},message:function(v){return v.trim().length>=10||'Please tell us a little about your project (10+ characters).'}};
function check(el){var r=rules[el.name](el.value),ok=r===true,er=document.getElementById('e-'+el.name);el.setAttribute('aria-invalid',!ok);er.textContent=ok?'':r;return ok}
function checkTime(){var ok=!!f.querySelector('input[name=time]:checked');document.getElementById('e-time').textContent=ok?'':'Please pick a preferred time.';return ok}
[].forEach.call(f.elements,function(el){if(rules[el.name]){el.addEventListener('blur',function(){check(el)});if(el.name==='date')el.addEventListener('change',function(){check(el)})}});
[].forEach.call(f.querySelectorAll('input[name=time]'),function(r){r.addEventListener('change',checkTime)});
function fmtDate(v){var p=v.split('-');return p[2]+'-'+p[1]+'-'+p[0]}
function build(d){return['*New Enquiry \u2014 Kestrel Build & Engineering*','','*Name:* '+d.name.trim(),'*Phone:* '+d.phone.trim(),'*Email:* '+d.email.trim(),'*Service:* '+d.service,'*Preferred date:* '+fmtDate(d.date),'*Preferred time:* '+d.time,'','*Project details:*',d.message.trim(),'','_Sent from the website enquiry form_'].join('\n')}
f.addEventListener('submit',function(e){e.preventDefault();fb.className='fb';fb.textContent='';var bad=null;[].forEach.call(f.elements,function(el){if(rules[el.name]&&!check(el)&&!bad)bad=el});var tOk=checkTime();
if(bad||!tOk){fb.className='fb no';fb.textContent='Please fix the highlighted fields and try again.';if(bad)bad.focus();return}
var d={};[].forEach.call(f.elements,function(el){if(el.name&&(el.type!=='radio'||el.checked))d[el.name]=el.value});
var url='https://wa.me/'+WA+'?text='+encodeURIComponent(build(d));
var w=window.open(url,'_blank','noopener');
fb.className='fb ok';fb.innerHTML='Thank you, '+d.name.trim().split(' ')[0].replace(/</g,'')+'. Your enquiry is ready in WhatsApp for +91 96999 38110. Just tap <b>Send</b> there to deliver it. '+(w?'':'')+'<a href="'+url+'" target="_blank" rel="noopener">Not opened? Tap here.</a>';
f.reset();dt.min=today});
})();
