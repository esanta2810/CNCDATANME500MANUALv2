const pages=[...document.querySelectorAll('.page')];
const navItems=[...document.querySelectorAll('.nav-item')];
const completedPractices=JSON.parse(localStorage.getItem('cncPracticesV2')||'[]');
function showPage(id){pages.forEach(p=>p.classList.toggle('active',p.id===id));navItems.forEach(n=>n.classList.toggle('active',n.dataset.section===id));window.scrollTo({top:0,behavior:'smooth'});}
navItems.forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.section)));
document.querySelectorAll('[data-go]').forEach(c=>c.addEventListener('click',()=>showPage(c.dataset.go)));
document.querySelectorAll('.hotspots button').forEach(b=>b.addEventListener('click',()=>{const box=document.createElement('div');box.className='hotspot-label';box.textContent=b.dataset.tip;b.parentElement.querySelectorAll('.hotspot-label').forEach(x=>x.remove());box.style.left=b.style.left;box.style.top=b.style.top;b.parentElement.appendChild(box);}));
document.querySelectorAll('.interactive-question').forEach(q=>q.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{const f=q.querySelector('.feedback');const ok=b.dataset.option===q.dataset.answer;f.textContent=ok?'✓ Correcto. Z es el eje vertical en este esquema.':'✕ Revisa el diagrama: X, Y y Z representan direcciones diferentes.';f.className='feedback '+(ok?'good':'bad');})));
function save(){localStorage.setItem('cncPracticesV2',JSON.stringify(completedPractices));updateProgress();}
function updateProgress(){document.querySelectorAll('.practice').forEach((p,i)=>{const n=i+1,done=completedPractices.includes(n),unlocked=n===1||completedPractices.includes(n-1);p.classList.toggle('done',done);p.classList.toggle('locked',!unlocked);const st=p.querySelector('.status'),btn=p.querySelector('.sim-start');if(done){st.textContent='✓ COMPLETADA';if(btn){btn.textContent='✓ Completada';btn.disabled=true;}}else if(unlocked){st.textContent='DISPONIBLE';if(btn){btn.textContent='▶ Iniciar práctica';btn.disabled=false;}}else{st.textContent='🔒 BLOQUEADA';if(btn){btn.textContent=`🔒 Completa la práctica ${n-1}`;btn.disabled=true;}}});
document.querySelectorAll('.mini-practice').forEach((m,i)=>{const n=i+1,done=completedPractices.includes(n),unlocked=n===1||completedPractices.includes(n-1);m.classList.toggle('done',done);m.classList.toggle('locked-mini',!unlocked);});
const count=completedPractices.length,pct=Math.round(count/3*100);document.getElementById('progressCount').textContent=count;document.getElementById('progressPct').textContent=pct+'%';document.getElementById('progressBar').style.width=pct+'%';}
window.markPractice=n=>{if(!completedPractices.includes(n)){completedPractices.push(n);completedPractices.sort((a,b)=>a-b);save();}};
updateProgress();
