// Botão "Início" para qualquer página. Uso: <script src="home-btn.js"></script> antes de </body>
(function(){
 if(document.querySelector('.fk-home-btn'))return;
 const a=document.createElement('a');a.href='index.html';a.className='fk-home-btn';a.innerHTML='🏠 Início';
 a.style.cssText='display:inline-flex;align-items:center;background:#28a745;color:#fff;padding:7px 12px;border-radius:8px;font:700 .85rem Arial,sans-serif;text-decoration:none;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,.25);z-index:99999';
 const h=document.querySelector('header');
 if(h){a.style.marginLeft='10px';h.appendChild(a);}
 else{a.style.position='fixed';a.style.top='10px';a.style.left='10px';document.body.appendChild(a);}
})();
