(function(){
  const menu=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav-links');
  if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));}
  const search=document.querySelector('#resource-search');
  const cards=[...document.querySelectorAll('.resource-card')];
  const filters=[...document.querySelectorAll('[data-filter]')];
  let current='all';
  function updateResources(){if(!cards.length)return;const q=(search?.value||'').trim().toLowerCase();cards.forEach(card=>{const category=(card.dataset.category||'').toLowerCase();const text=card.innerText.toLowerCase();const matchCategory=current==='all'||category===current;const matchText=!q||text.includes(q);card.classList.toggle('hidden',!(matchCategory&&matchText));});const empty=document.querySelector('#no-results');if(empty)empty.classList.toggle('hidden',cards.some(c=>!c.classList.contains('hidden')));}
  filters.forEach(btn=>btn.addEventListener('click',()=>{current=btn.dataset.filter;filters.forEach(b=>b.classList.toggle('active',b===btn));updateResources();}));
  if(search)search.addEventListener('input',updateResources);
})();
