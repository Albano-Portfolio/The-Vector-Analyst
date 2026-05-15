const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
document.getElementById('year').textContent=new Date().getFullYear();
const skills=['Healthcare Claims','Cost Containment','SQL','Databricks','Databricks Genie','Tableau','Power BI','Python','SAS','Prompt Engineering','Microsoft Copilot','AI Governance','Data Validation','Executive Dashboards','Provider Analytics','Utilization Trends','Fraud / Waste Signals','SAS to SQL Modernization'];
const cloud=document.getElementById('skillCloud');skills.forEach(s=>{const b=document.createElement('button');b.textContent=s;b.title='Core strength: '+s;cloud.appendChild(b)});
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.14});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('[data-tilt]').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`rotateY(${x*10}deg) rotateX(${-y*10}deg)`});card.addEventListener('pointerleave',()=>card.style.transform='rotateY(0) rotateX(0)')});
const canvas=document.getElementById('matrix'),ctx=canvas.getContext('2d');function size(){canvas.width=innerWidth;canvas.height=innerHeight}size();addEventListener('resize',size);let nodes=Array.from({length:55},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.55,vy:(Math.random()-.5)*.55}));function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);nodes.forEach((n,i)=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>canvas.width)n.vx*=-1;if(n.y<0||n.y>canvas.height)n.vy*=-1;ctx.beginPath();ctx.arc(n.x,n.y,2,0,Math.PI*2);ctx.fillStyle='rgba(104,225,253,.55)';ctx.fill();for(let j=i+1;j<nodes.length;j++){const m=nodes[j],d=Math.hypot(n.x-m.x,n.y-m.y);if(d<150){ctx.strokeStyle=`rgba(167,139,250,${(150-d)/900})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(n.x,n.y);ctx.lineTo(m.x,m.y);ctx.stroke()}}});requestAnimationFrame(draw)}draw();


// Jason AI portfolio chatbot: client-side, no API key required.
const chatbotData={
  profile:'Jason Albano is an AI-enabled Senior Healthcare Data Analyst / BI professional focused on healthcare claims, cost containment, SQL analytics, Databricks, Tableau, Power BI, executive dashboards, and practical AI adoption.',
  ai:'Jason uses AI to accelerate analyst workflows, including Databricks Genie prompts, Microsoft Copilot summaries, AI-assisted SQL/code optimization, SAS-to-SQL modernization, documentation, and human-in-the-loop validation.',
  healthcare:'Jason works with healthcare claims analytics, cost containment opportunities, service-code trends, utilization, provider patterns, cost-share analysis, data validation, and operational reporting.',
  skills:'Core skills include SQL, Databricks, Tableau, Power BI, Python, SAS, healthcare claims analysis, KPI design, dashboard storytelling, prompt engineering, Microsoft Copilot, and AI governance.',
  projects:'Featured concepts include an AI Claims Cost Containment Assistant, Healthcare Executive KPI Command Center, SAS to Databricks Modernization Playbook, and Healthcare AI Governance Checklist.',
  certifications:'Jason has highlighted Tableau, Databricks, BI/data analytics, healthcare analytics, and AI literacy training/certification areas. See the credentials section for the current portfolio view.',
  contact:'You can contact Jason at japi782004@yahoo.com or visit his LinkedIn profile at linkedin.com/in/jasonalbano.'
};
const chatbotToggle=document.getElementById('chatbotToggle');
const chatbotPanel=document.getElementById('chatbotPanel');
const chatbotClose=document.getElementById('chatbotClose');
const chatbotForm=document.getElementById('chatbotForm');
const chatbotInput=document.getElementById('chatbotInput');
const chatbotMessages=document.getElementById('chatbotMessages');
function toggleChat(open){const shouldOpen=open??!chatbotPanel.classList.contains('open');chatbotPanel.classList.toggle('open',shouldOpen);chatbotToggle.setAttribute('aria-expanded',String(shouldOpen));if(shouldOpen)setTimeout(()=>chatbotInput.focus(),120)}
chatbotToggle?.addEventListener('click',()=>toggleChat());
chatbotClose?.addEventListener('click',()=>toggleChat(false));
function addMessage(text,type='bot'){const div=document.createElement('div');div.className='message '+type;div.innerHTML=text;chatbotMessages.appendChild(div);chatbotMessages.scrollTop=chatbotMessages.scrollHeight;return div}
function answerQuestion(q){const query=q.toLowerCase();
  if(/contact|email|reach|linkedin|hire/.test(query)){location.hash='contact';return chatbotData.contact+' <br><br><a href="#contact">Jump to contact section</a>';}
  if(/project|portfolio|demo|featured|work/.test(query)){location.hash='projects';return chatbotData.projects+' <br><br><a href="#projects">Jump to projects</a>';}
  if(/skill|tool|technology|sql|tableau|power bi|python|sas|databricks/.test(query)){location.hash='skills';return chatbotData.skills+' <br><br><a href="#skills">Jump to skills</a>';}
  if(/ai|genie|copilot|prompt|automation|governance|xai/.test(query)){location.hash='skills';return chatbotData.ai+' He focuses on practical, explainable AI that still requires analyst validation. <br><br><a href="#skills">See AI skill stack</a>';}
  if(/health|claim|cost|provider|utilization|medical|insurance|cpt|analytics/.test(query)){location.hash='experience';return chatbotData.healthcare+' <br><br><a href="#experience">Jump to experience</a>';}
  if(/cert|training|education|tableau|credential/.test(query)){return chatbotData.certifications+' <br><br><a href="#top">View portfolio</a>';}
  if(/who|about|special|background|summary|jason/.test(query)){location.hash='about';return chatbotData.profile+' <br><br><a href="#about">Jump to about Jason</a>';}
  return 'I can help with Jason’s background, healthcare analytics experience, AI skills, Databricks/Tableau/Power BI strengths, certifications, featured projects, or contact info. Try asking: “What are Jason’s AI skills?” or “How do I contact Jason?”';
}
chatbotForm?.addEventListener('submit',e=>{e.preventDefault();const q=chatbotInput.value.trim();if(!q)return;addMessage(q,'user');chatbotInput.value='';const typing=addMessage('Thinking...','bot');setTimeout(()=>{typing.innerHTML=answerQuestion(q)},420)});
document.querySelectorAll('.quick-prompts button').forEach(btn=>btn.addEventListener('click',()=>{toggleChat(true);const q=btn.dataset.question;addMessage(q,'user');const typing=addMessage('Thinking...','bot');setTimeout(()=>{typing.innerHTML=answerQuestion(q)},360)}));

// Expanded AI portfolio simulations — all client-side, GitHub Pages friendly.
document.querySelectorAll('.lab-card,.feature-card,.strategy-card').forEach(card=>{
  card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');card.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%')})
});

// Route mini feature buttons into chatbot
function askPortfolioBot(q){toggleChat(true);addMessage(q,'user');const typing=addMessage('Thinking...','bot');setTimeout(()=>{typing.innerHTML=answerQuestion(q)},360)}
document.querySelectorAll('[data-chatjump]').forEach(btn=>btn.addEventListener('click',()=>askPortfolioBot(btn.dataset.chatjump)));

// Resume matcher
const jobBtn=document.getElementById('analyzeJobBtn');
jobBtn?.addEventListener('click',()=>{
  const jd=(document.getElementById('jobDescription').value||'').toLowerCase();
  const terms=['healthcare','claims','sql','tableau','power bi','databricks','python','sas','analytics','dashboard','bi','ai','copilot','prompt','governance','cost','utilization','provider','kpi','executive'];
  const hits=terms.filter(t=>jd.includes(t));
  const score=Math.min(96,Math.max(58,Math.round(55+(hits.length/terms.length)*45)));
  const result=document.getElementById('matchResult');
  result.innerHTML=`<strong>${score}% Match</strong><span>Detected strengths: ${hits.slice(0,9).join(', ')||'analytics, BI, healthcare'}.<br><br>AI-style summary: Jason appears strongest where the role needs healthcare analytics, SQL/BI reporting, Databricks/Tableau/Power BI, executive dashboards, and practical AI adoption.</span>`;
});

// Fraud/anomaly demo
const syntheticClaims=[
  {id:'CLM-1048',title:'Repeated high-cost imaging',risk:'high',why:'Same member received multiple advanced imaging services within a short window. AI explanation: frequency + high allowed amount + repeated category = review priority.'},
  {id:'CLM-2197',title:'Possible duplicate professional service',risk:'med',why:'Similar CPT/service combination appears for same member/provider/date. AI explanation: duplicate-like keys should be checked before payment or recovery action.'},
  {id:'CLM-3302',title:'Normal preventive visit pattern',risk:'low',why:'Utilization and cost fall within expected benchmark range. AI explanation: low concern, no immediate review needed.'},
  {id:'CLM-4410',title:'Provider utilization outlier',risk:'high',why:'Provider volume is much higher than peer pattern for comparable service mix. AI explanation: outlier does not prove fraud, but deserves targeted analysis.'}
];
const claimList=document.getElementById('claimList');
if(claimList){syntheticClaims.forEach(c=>{const row=document.createElement('button');row.className='claim-item';row.innerHTML=`<span><strong>${c.id}</strong><br>${c.title}</span><span class="risk ${c.risk}">${c.risk.toUpperCase()}</span>`;row.addEventListener('click',()=>{document.getElementById('claimExplain').innerHTML=`<strong>${c.title}</strong><br>${c.why}<br><br><em>Human-in-the-loop note: This is a signal for review, not an accusation or final decision.</em>`});claimList.appendChild(row)})}

// Simulated Databricks Genie
const genieResponses={
  cost:`-- Simulated Databricks Genie output\nSELECT service_category, SUM(allowed_amount) AS total_cost, COUNT(*) AS claim_count\nFROM claims\nWHERE service_date >= add_months(current_date(), -12)\nGROUP BY service_category\nORDER BY total_cost DESC;\n\nAI Insight: Outpatient imaging and professional services are the biggest cost drivers. Recommended next step: segment by provider, place of service, and month-over-month trend.`,
  provider:`-- Simulated outlier query\nSELECT provider_id, service_category, COUNT(*) AS visits, AVG(allowed_amount) AS avg_allowed\nFROM claims\nGROUP BY provider_id, service_category\nHAVING visits > 2 * AVG(visits) OVER (PARTITION BY service_category);\n\nAI Insight: Outlier providers should be reviewed against peer benchmarks. Outlier status is not proof of fraud.`,
  duplicate:`-- Simulated duplicate claim screen\nSELECT member_id, provider_id, service_date, cpt_code, COUNT(*) AS duplicate_count\nFROM claims\nGROUP BY member_id, provider_id, service_date, cpt_code\nHAVING COUNT(*) > 1;\n\nAI Insight: Duplicate-like claims should be validated using claim status, modifiers, and adjustment logic.`,
  forecast:`-- Simulated forecast workflow\nSELECT month, service_category, SUM(allowed_amount) AS monthly_cost\nFROM claims\nGROUP BY month, service_category\nORDER BY month;\n\nAI Insight: Imaging cost trend is projected to rise next quarter. Recommended action: build a monitoring dashboard and drill into provider/location drivers.`
};
document.getElementById('runGenieBtn')?.addEventListener('click',()=>{const key=document.getElementById('genieQuestion').value;document.getElementById('genieOutput').textContent=genieResponses[key]});

// Prompt playground
const prompts={
  claims:'Prompt: Review synthetic healthcare claims by service category, provider, and month. Identify cost drivers, utilization outliers, and questions an analyst should validate before presenting findings to leadership.\n\nBusiness value: Speeds up first-pass investigation while preserving human validation.',
  sql:'Prompt: Optimize this SQL query for readability and performance. Explain the logic, add comments, and identify joins or filters that may affect claim counts.\n\nBusiness value: Faster code review, better documentation, fewer reporting mistakes.',
  sas:'Prompt: Translate this SAS data step and PROC SQL logic into Databricks SQL or PySpark. Preserve business rules, identify assumptions, and create validation checks.\n\nBusiness value: Supports legacy modernization and migration from SAS to Databricks.',
  governance:'Prompt: Create an AI governance checklist for using AI with healthcare data. Include PHI cautions, validation steps, audit trail, model limitations, and stakeholder sign-off.\n\nBusiness value: Makes AI adoption safer and more trusted.'
};
const promptOutput=document.getElementById('promptOutput');
function setPrompt(k){if(promptOutput)promptOutput.textContent=prompts[k];document.querySelectorAll('#promptTabs button').forEach(b=>b.classList.toggle('active',b.dataset.prompt===k))}
document.querySelectorAll('#promptTabs button').forEach(b=>b.addEventListener('click',()=>setPrompt(b.dataset.prompt)));setPrompt('claims');

// Workflow visualizer
const workflows={
  before:['Manually pull data and write SQL from scratch','Create dashboard views and manually document logic','Review trends and summarize findings after multiple handoffs','Spend extra time rewriting findings for leadership'],
  after:['Use AI to brainstorm questions and generate starter SQL','Validate results against source logic and known business rules','Use AI to summarize findings, risks, and next steps','Deliver executive-ready insights faster with human review']
};
function setWorkflow(k){const list=document.getElementById('workflowList');if(list){list.innerHTML=workflows[k].map(x=>`<li>${x}</li>`).join('')}document.querySelectorAll('.workflow-toggle button').forEach(b=>b.classList.toggle('active',b.dataset.workflow===k))}
document.querySelectorAll('.workflow-toggle button').forEach(b=>b.addEventListener('click',()=>setWorkflow(b.dataset.workflow)));setWorkflow('before');

// Voice assistant
const voiceBtn=document.getElementById('voiceBtn');
voiceBtn?.addEventListener('click',()=>{
  const status=document.getElementById('voiceStatus');
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){status.textContent='Voice recognition is not supported in this browser. You can still use the Ask Jason AI chatbot.';return}
  const rec=new SR();rec.lang='en-US';rec.interimResults=false;status.textContent='Listening... ask about Jason, AI skills, projects, or contact info.';
  rec.onresult=e=>{const q=e.results[0][0].transcript;status.textContent='Heard: '+q;askPortfolioBot(q)};
  rec.onerror=()=>status.textContent='Voice input did not complete. Try again or use the chatbot.';
  rec.start();
});

// Project generator
const projectPlans={
  'rising-costs':'Project: Claims Cost Driver Analysis. KPIs: allowed amount PMPM, top service categories, provider mix, member cohorts, month-over-month cost trend. Tools: SQL, Databricks, Tableau/Power BI, AI-generated executive summary.',
  'duplicate-claims':'Project: Duplicate Claim Detection. KPIs: duplicate-like claim count, potential recovery amount, provider/member/date/CPT match rate. Tools: SQL matching logic, AI explanation layer, analyst validation queue.',
  'provider-variation':'Project: Provider Variation Review. KPIs: utilization per 1,000 members, average allowed amount, peer benchmark variance, outlier providers. Tools: Databricks, Tableau, explainable AI notes.',
  'denials':'Project: Denials Trend Dashboard. KPIs: denial rate, appeal overturn rate, top denial reasons, aging, financial impact. Tools: SQL, BI dashboard, AI-generated root-cause summary.'
};
document.getElementById('generateProjectBtn')?.addEventListener('click',()=>{const key=document.getElementById('projectProblem').value;document.getElementById('projectPlan').textContent=projectPlans[key]});

// Heatmap
const heatData=[['SQL',.82],['Healthcare Claims',.92],['Databricks',.78],['Tableau',.9],['Power BI',.72],['Prompt Engineering',.84],['AI Governance',.7],['Cost Containment',.88],['Python',.64],['SAS Modernization',.74],['Executive Storytelling',.86],['Data Validation',.9]];
const heat=document.getElementById('heatmap');
if(heat){heatData.forEach(([name,val])=>{const cell=document.createElement('div');cell.className='heat-cell';cell.style.setProperty('--intensity',String(.08+val*.36));cell.style.setProperty('--glow',String(18+val*38));cell.textContent=name;heat.appendChild(cell)})}

// Case solver
const caseAnswers={
  cost:'Jason would start by validating claim totals, segmenting by service category, provider, geography, member cohort, and month. Then he would use AI to accelerate hypothesis generation, but confirm findings with SQL, business rules, and stakeholder review.',
  fraud:'Jason would treat the signal as a review opportunity, not an accusation. He would compare provider patterns to peers, review service codes/modifiers/dates, quantify financial impact, and document the rationale for audit teams.',
  quality:'Jason would define the executive question first, choose 5–7 core KPIs, build a Tableau/Power BI dashboard, add AI-generated commentary, and validate that each metric ties to a trusted source.'
};
document.getElementById('solveCaseBtn')?.addEventListener('click',()=>{const key=document.getElementById('caseSelect').value;document.getElementById('caseAnswer').textContent=caseAnswers[key]});
