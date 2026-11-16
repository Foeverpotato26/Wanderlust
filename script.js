const P='https://images.unsplash.com/photo-';
const DEST=[
{id:'Paris',pays:'France',cat:'Villes',img:'1502602898657-3e91760cbb34',prix:180,mois:'Avril – Juin',txt:'La tour Eiffel, les quais de Seine et une cuisine de bistrot à chaque coin de rue.'},
{id:'Rome',pays:'Italie',cat:'Villes',img:'1552832230-c0197dd311b5',prix:160,mois:'Avril – Mai',txt:'Colisée, fontaines et ruelles : deux mille ans d’histoire à pied.'},
{id:'Londres',pays:'Royaume-Uni',cat:'Villes',img:'1513635269975-59663e0ac1ad',prix:210,mois:'Mai – Septembre',txt:'Big Ben, musées gratuits et marchés animés au bord de la Tamise.'},
{id:'Istanbul',pays:'Turquie',cat:'Villes',img:'1524231757912-21f4fe3a7200',prix:190,mois:'Avril – Juin',txt:'Entre Europe et Asie : mosquées, bazars et traversées du Bosphore.'},
{id:'Dubai',pays:'Émirats arabes unis',cat:'Luxe',img:'1512453979798-5ea266f8880c',prix:420,mois:'Novembre – Mars',txt:'Gratte-ciel, désert et hôtels de luxe sous le soleil d’hiver.'},
{id:'Tunis',pays:'Tunisie',cat:'Plages',img:'1565689157206-0fddef7589a2',prix:90,mois:'Mai – Octobre',txt:'Médina classée, Sidi Bou Saïd et plages de la Méditerranée.'},
{id:'Maldives',pays:'Maldives',cat:'Plages',img:'1507525428034-b723cf961d3e',prix:980,mois:'Novembre – Avril',txt:'Lagons turquoise et bungalows sur pilotis. Destination non proposée dans le formulaire de démonstration.',nobook:1},
{id:'Alpes',pays:'Suisse',cat:'Montagne',img:'1506905925346-21bda4d32df4',prix:320,mois:'Décembre – Mars',txt:'Sommets enneigés, trains panoramiques et randonnées en été.',nobook:1}
];
const PAYS={Tunis:'Tunisie',Paris:'France',Londres:'Royaume-Uni',Rome:'Italie',Istanbul:'Turquie',Dubai:'Émirats arabes unis'};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
// En-tête et pied de page partagés
const cur=location.pathname.split('/').pop()||'index.html';
const links=[['index.html','Accueil'],['categories.html','Destinations'],['booking.html','Réserver un vol'],['index.html#faq','FAQ'],['index.html#contact','Contact']];
$('#site-header').innerHTML=`<header class="nav"><div class="wrap"><a class="logo" href="index.html">🌍 Wanderlust</a><button class="burger" aria-label="Ouvrir le menu" aria-expanded="false">☰</button><nav aria-label="Navigation principale"><ul>${links.map(([h,t])=>`<li><a class="l" href="${h}" ${h===cur?'aria-current="page"':''}>${t}</a></li>`).join('')}</ul></nav></div></header>`;
$('#site-footer').innerHTML=`<footer id="contact"><div class="wrap"><div><h3>Wanderlust</h3><p>Agence de voyage fictive créée pour un projet web. Aucune réservation réelle n’est possible.</p></div><div><h3>Contact</h3><a href="mailto:contact@wanderlust.example">contact@wanderlust.example</a><a href="tel:+21600000000">+216 00 000 000</a><p>Monastir, Tunisie</p></div><div><h3>Explorer</h3>${links.slice(0,3).map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}</div><div><h3>Suivez-nous</h3><a href="https://www.instagram.com" target="_blank" rel="noopener">Instagram</a><a href="https://www.facebook.com" target="_blank" rel="noopener">Facebook</a></div></div><p class="copy">&copy; 2026 Wanderlust – Tous droits réservés.</p></footer><dialog id="dlg"></dialog>`;
const burger=$('.burger'),menu=$('.nav ul');
burger.onclick=()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)};
// Cartes destinations
const card=d=>`<article class="card"><img src="${P}${d.img}?auto=format&fit=crop&w=700&q=70" alt="${d.id}, ${d.pays}" loading="lazy" onerror="this.removeAttribute('src')"><div><h3>${d.id}</h3><small>${d.pays} · ${d.cat}</small><p>${d.txt.split('.')[0]}.</p><span class="price">À partir de ${d.prix} €</span><small>Meilleure période : ${d.mois}</small><button class="btn" data-id="${d.id}">Explorer</button></div></article>`;
const box=$('#dest-grid');
function render(list){box.innerHTML=list.length?list.map(card).join(''):'<p>Aucune destination ne correspond. Essayez un autre mot-clé.</p>'}
let cat='Toutes',q='';
function filter(){const n=q.trim().toLowerCase();render(DEST.filter(d=>(cat==='Toutes'||d.cat===cat)&&(!n||(d.id+d.pays+d.cat).toLowerCase().includes(n))))}
if(box){render(box.dataset.limit?DEST.slice(0,+box.dataset.limit):DEST)}
$$('.chip').forEach(c=>c.onclick=()=>{cat=c.dataset.cat;$$('.chip').forEach(x=>x.classList.toggle('on',x===c));filter()});
const sf=$('#search');
if(sf)sf.onsubmit=e=>{e.preventDefault();q=$('#q').value;if(box.dataset.limit){location.href='categories.html?q='+encodeURIComponent(q)}else filter()};
if(box&&!box.dataset.limit){const p=new URLSearchParams(location.search).get('q');if(p){q=p;$('#q').value=p;filter()}}
// Fenêtre de détails
document.addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(!b)return;const d=DEST.find(x=>x.id===b.dataset.id),dlg=$('#dlg');
dlg.innerHTML=`<img src="${P}${d.img}?auto=format&fit=crop&w=900&q=70" alt="${d.id}" onerror="this.removeAttribute('src')"><div><h3>${d.id}, ${d.pays}</h3><p>${d.txt}</p><p><b>Prix indicatif :</b> dès ${d.prix} € · <b>Période :</b> ${d.mois}</p>${d.nobook?'<p class="demo">Cette destination n’est pas disponible dans le formulaire de démonstration.</p>':`<a class="btn" href="booking.html?to=${d.id}">Réserver un vol vers ${d.id}</a>`}<button class="btn o" onclick="this.closest('dialog').close()">Fermer</button></div>`;dlg.showModal()});
// Formulaire de réservation
const f=$('#booking');
if(f){
const today=new Date().toISOString().slice(0,10);$('#date_depart').min=today;$('#date_retour').min=today;
const to=new URLSearchParams(location.search).get('to');if(PAYS[to])$('#arrivee').value=to;
const sync=()=>{$('#pays_depart').value=PAYS[$('#depart').value]||'';$('#pays_arrivee').value=PAYS[$('#arrivee').value]||'';const rt=$('#aller_retour').checked;$('#date_retour').disabled=!rt;$('#date_retour').required=rt;if(!rt)$('#date_retour').value=''};
f.addEventListener('change',sync);sync();
const set=(id,m)=>{$('#e_'+id).textContent=m;$('#'+id).setAttribute('aria-invalid',!!m)};
f.onsubmit=e=>{e.preventDefault();let bad=0;
const chk=(id,m)=>{set(id,m);if(m)bad++};
['depart','arrivee'].forEach(i=>chk(i,''));
chk('arrivee',$('#depart').value&&$('#depart').value===$('#arrivee').value?'La ville d’arrivée doit être différente du départ.':'');
chk('date_retour',$('#date_retour').value&&$('#date_retour').value<$('#date_depart').value?'Le retour doit être après le départ.':'');
chk('telephone',/^[+\d][\d\s().-]{6,}$/.test($('#telephone').value)?'':'Numéro invalide (chiffres, espaces et + uniquement).');
if(!f.checkValidity()){f.reportValidity();return}
if(bad){const x=$('[aria-invalid=true]');x&&x.focus();return}
const v=Object.fromEntries(new FormData(f));
$('#confirm').innerHTML=`<div class="ok" role="status" tabindex="-1"><h2>Demande enregistrée (démonstration)</h2><p><b>Aucun vol n’a été réservé</b> et aucun paiement n’a été effectué : une vraie réservation nécessiterait une API de compagnie aérienne et un service de paiement.</p><p>${v.prenom} ${v.nom} · ${v.depart} → ${v.arrivee} · ${v.compagnie} · ${v.type_vol}<br>Départ le ${v.date_depart}${v.date_retour?`, retour le ${v.date_retour}`:''} · ${v.classe} · ${v.passagers} passager(s) · ${v.bagages} bagage(s)</p></div>`;
$('#confirm .ok').focus();f.reset();sync();window.scrollTo({top:0,behavior:'smooth'})}}
