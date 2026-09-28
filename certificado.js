const C128="212222,222122,222221,121223,121322,131222,122213,122312,132212,221213,221312,231212,112232,122132,122231,113222,123122,123221,223211,221132,221231,213212,223112,312131,311222,321122,321221,312212,322112,322211,212123,212321,232121,111323,131123,131321,112313,132113,132311,211313,231113,231311,112133,112331,132131,113123,113321,133121,313121,211331,231131,213113,213311,213131,311123,311321,331121,312113,312311,332111,314111,221411,431111,111224,111422,121124,121421,141122,141221,112214,112412,122114,122411,142112,142211,241211,221114,413111,241112,134111,111242,121142,121241,114212,124112,124211,411212,421112,421211,212141,214121,412121,111143,111341,131141,114113,114311,411113,411311,113141,114131,311141,411131,211412,211214,211232,2331112".split(',');
function barcodeSVG(txt){
 const v=[104];for(const ch of txt)v.push(ch.charCodeAt(0)-32);
 let s=104;for(let i=1;i<v.length;i++)s+=v[i]*i;v.push(s%103,106);
 let x=10,r='';
 v.forEach(k=>{const p=C128[k];for(let i=0;i<p.length;i++){const w=+p[i];if(i%2===0)r+=`<rect x="${x}" y="0" width="${w}" height="50"/>`;x+=w;}});
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${x+10} 50" preserveAspectRatio="none" shape-rendering="crispEdges" fill="#000">${r}</svg>`;
}

// Abre o certificado numa janela pronta a imprimir / guardar em PDF.
// w = janela já aberta (window.open), rec = registo da tabela certificados
function abrirCertificado(w,rec,nome,curso){
 const e=t=>String(t??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const data=new Date(rec.emitido_em).toLocaleDateString('pt-PT',{day:'numeric',month:'long',year:'numeric'});
 const logo=new URL('FK.png',location.href).href, ver=new URL('verificar.html',location.href).href;
 w.document.open();
 w.document.write(`<!DOCTYPE html><html lang="pt-PT"><head><meta charset="utf-8"><title>Certificado - ${e(nome)}</title><style>
 @page{size:A4 landscape;margin:0}*{box-sizing:border-box}body{margin:0;font-family:Georgia,'Times New Roman',serif;color:#1c2b3a}
 .pg{width:297mm;height:210mm;padding:10mm;background:#fff}.b1{height:100%;border:3mm solid #0055a5;padding:2mm}
 .b2{height:100%;border:.6mm solid #c9a227;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:9mm 14mm;text-align:center}
 img{height:22mm}h1{font-size:15mm;letter-spacing:1.5mm;margin:0;color:#0055a5;text-transform:uppercase}
 .s{font-size:5mm;color:#555}.n{font-size:13mm;font-style:italic;border-bottom:.5mm solid #c9a227;padding:0 10mm 1mm;margin:2mm 0}
 .c{font-size:8.5mm;font-weight:bold;color:#0055a5}.ft{display:flex;justify-content:space-around;width:100%;font-size:4mm;align-items:flex-end}
 .ass{width:60mm;border-top:.4mm solid #444;padding-top:1.5mm}.cod{font-size:3.4mm;color:#666}.bc svg{width:64mm;height:11mm;display:block;margin:0 auto 1mm}
 @media screen{body{background:#ddd}.pg{margin:10px auto}}</style></head><body><div class="pg"><div class="b1"><div class="b2">
 <div><img src="${logo}" onerror="this.style.display='none'"><h1>Certificado</h1><div class="s">de Conclusão de Curso</div></div>
 <div><div class="s">Certificamos que</div><div class="n">${e(nome)}</div><div class="s">concluiu com aproveitamento o curso de</div><div class="c">${e(curso)}</div></div>
 <div class="ft"><div class="ass">Direção Académica</div><div>Luanda, ${data}</div><div class="ass">Formador</div></div>
 <div class="cod"><div class="bc">${barcodeSVG(rec.codigo)}</div>Código de verificação: <b>${e(rec.codigo)}</b><br>Verifique a autenticidade em ${e(ver)} · FEKA KAWIÇO — A Terra Natural do Conhecimento</div>
 </div></div></div><script>window.onload=()=>setTimeout(()=>print(),400)<\/script></body></html>`);
 w.document.close();
}
