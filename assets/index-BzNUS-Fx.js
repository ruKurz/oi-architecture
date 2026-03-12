(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const A={version:"0.1.0",title:"Organizational Intelligence Architecture",subtitle:"How organizations turn knowledge into action",created:"2026"},$=JSON.parse('[{"id":"#panel-left","type":"container","containerType":"panel","label":"System Development & Interaction","children":["#I1","#I2","#I3","#I4"],"meta":{"variant":"left"}},{"id":"#I1","type":"container","containerType":"box","label":"User Interaction","children":["#I1-1","#I1-2","#I1-3","#I1-4"]},{"id":"#I1-1","type":"item","itemType":"concept","label":"Login & Authentication"},{"id":"#I1-2","type":"item","itemType":"concept","label":"User Profile"},{"id":"#I1-3","type":"item","itemType":"concept","label":"Click-Through"},{"id":"#I1-4","type":"item","itemType":"concept","label":"Input / Output"},{"id":"#I2","type":"container","containerType":"box","label":"Context Understanding","children":["#I2-1","#I2-2","#I2-3","#I2-4"]},{"id":"#I2-1","type":"item","itemType":"concept","label":"Intent Detection"},{"id":"#I2-2","type":"item","itemType":"concept","label":"Preference Detection"},{"id":"#I2-3","type":"item","itemType":"concept","label":"Context Analysis"},{"id":"#I2-4","type":"item","itemType":"concept","label":"Context Enrichment"},{"id":"#I3","type":"container","containerType":"box","label":"Feature Orchestration","children":["#I3-1","#I3-2","#I3-3","#I3-4"]},{"id":"#I3-1","type":"item","itemType":"concept","label":"Pipelines"},{"id":"#I3-2","type":"item","itemType":"concept","label":"Workflows"},{"id":"#I3-3","type":"item","itemType":"concept","label":"Business Logic"},{"id":"#I3-4","type":"item","itemType":"concept","label":"Agents"},{"id":"#I4","type":"container","containerType":"box","label":"Model Improvement","children":["#I4-1","#I4-2","#I4-3","#I4-4"]},{"id":"#I4-1","type":"item","itemType":"concept","label":"Training"},{"id":"#I4-2","type":"item","itemType":"concept","label":"Fine-Tuning"},{"id":"#I4-3","type":"item","itemType":"concept","label":"Optimization"},{"id":"#I4-4","type":"item","itemType":"concept","label":"Monitoring"},{"id":"#L10","type":"container","containerType":"layer","label":"Business Outcome","description":"Where knowledge becomes value","children":["#L10-1","#L10-2","#L10-3","#L10-4","#L10-5","#L10-6"],"badges":["badge-feedback"],"meta":{"order":10}},{"id":"#L10-1","type":"item","itemType":"outcome","label":"Informed Decision","properties":{"outcome_category":["cognitive","strategic"]}},{"id":"#L10-2","type":"item","itemType":"outcome","label":"Executed Action","properties":{"outcome_category":["operational","execution"]}},{"id":"#L10-3","type":"item","itemType":"outcome","label":"Operational Efficiency","properties":{"outcome_category":["operational","performance"]}},{"id":"#L10-4","type":"item","itemType":"outcome","label":"Customer Value","properties":{"outcome_category":["experience","strategic"]}},{"id":"#L10-5","type":"item","itemType":"outcome","label":"Risk Reduction","properties":{"outcome_category":["governance","resilience"]}},{"id":"#L10-6","type":"item","itemType":"outcome","label":"Continuous Improvement","properties":{"outcome_category":["adaptive","learning"]}},{"id":"#L9","type":"container","containerType":"layer","label":"Actors","description":"Who interacts with the system","children":["#L9-users","#L9-agents"],"meta":{"order":9}},{"id":"#L9-users","type":"container","containerType":"frame","label":"Users","badges":["badge-feedback"],"meta":{"icon":"👤","variant":"users"},"children":["#L9-u1","#L9-u2","#L9-u3","#L9-u4"]},{"id":"#L9-u1","type":"item","itemType":"actor","label":"Employees","properties":{"role":"human"}},{"id":"#L9-u2","type":"item","itemType":"actor","label":"Developers","properties":{"role":"human"}},{"id":"#L9-u3","type":"item","itemType":"actor","label":"Analysts","properties":{"role":"human"}},{"id":"#L9-u4","type":"item","itemType":"actor","label":"Decision Makers","properties":{"role":"human"}},{"id":"#L9-agents","type":"container","containerType":"frame","label":"Agents","badges":["badge-feedback"],"meta":{"icon":"🤖","variant":"agents"},"children":["#L9-a1","#L9-a2","#L9-a3"]},{"id":"#L9-a1","type":"item","itemType":"actor","label":"AI Assistants","properties":{"role":"agent"}},{"id":"#L9-a2","type":"item","itemType":"actor","label":"AI Agents","properties":{"role":"agent"}},{"id":"#L9-a3","type":"item","itemType":"actor","label":"Autonomous Systems","properties":{"role":"agent"}},{"id":"#L8","type":"container","containerType":"layer","label":"Situation Layer","description":"Context of decisions","children":["#L8-1","#L8-2","#L8-3","#L8-4","#L8-5","#L8-6","#L8-7","#L8-8","#L8-9","#L8-10"],"meta":{"order":8}},{"id":"#L8-1","type":"item","itemType":"situation","label":"Employee","properties":{"dimension":"who"}},{"id":"#L8-2","type":"item","itemType":"situation","label":"Event","properties":{"dimension":"trigger"}},{"id":"#L8-3","type":"item","itemType":"situation","label":"Time","properties":{"dimension":"time"}},{"id":"#L8-4","type":"item","itemType":"situation","label":"Place","properties":{"dimension":"place"}},{"id":"#L8-5","type":"item","itemType":"situation","label":"Domain","properties":{"dimension":"domain"}},{"id":"#L8-6","type":"item","itemType":"situation","label":"Task","properties":{"dimension":"task"}},{"id":"#L8-7","type":"item","itemType":"situation","label":"Preferences","properties":{"dimension":"preference"}},{"id":"#L8-8","type":"item","itemType":"situation","label":"Language","properties":{"dimension":"language"}},{"id":"#L8-9","type":"item","itemType":"situation","label":"Access","properties":{"dimension":"access"}},{"id":"#L8-10","type":"item","itemType":"situation","label":"Knowledge","properties":{"dimension":"knowledge"}},{"id":"#L7","type":"container","containerType":"layer","label":"Use Cases & Challenges","description":"Business motivation","children":["#L7-1","#L7-2","#L7-3","#L7-4","#L7-5","#L7-6"],"meta":{"order":7}},{"id":"#L7-1","type":"item","itemType":"usecase","label":"HR Process Consulting","properties":{"domain":"HR"}},{"id":"#L7-2","type":"item","itemType":"usecase","label":"Infrastructure Maintenance","properties":{"domain":"Operations"}},{"id":"#L7-3","type":"item","itemType":"usecase","label":"Software Development","properties":{"domain":"IT"}},{"id":"#L7-4","type":"item","itemType":"usecase","label":"System Documentation","properties":{"domain":"IT"}},{"id":"#L7-5","type":"item","itemType":"usecase","label":"Procurement Verification","properties":{"domain":"Procurement"}},{"id":"#L7-6","type":"item","itemType":"usecase","label":"24h Customer Support","properties":{"domain":"CX"}},{"id":"#L6","type":"container","containerType":"layer","label":"Solutions & Applications","description":"Interaction points","children":["#L6-1","#L6-2","#L6-3","#L6-4","#L6-5"],"badges":["badge-feedback"],"meta":{"order":6}},{"id":"#L6-1","type":"item","itemType":"solution","label":"Enterprise Search","icon":"🔍","properties":{"category":"search"}},{"id":"#L6-2","type":"item","itemType":"solution","label":"Knowledge Assistant","icon":"💬","properties":{"category":"assistant"}},{"id":"#L6-3","type":"item","itemType":"solution","label":"Maintenance Assistant","icon":"🔧","properties":{"category":"assistant"}},{"id":"#L6-4","type":"item","itemType":"solution","label":"Code Assistant","icon":"💻","properties":{"category":"assistant"}},{"id":"#L6-5","type":"item","itemType":"solution","label":"Analytics Tools","icon":"📊","properties":{"category":"analytics"}},{"id":"#L5","type":"container","containerType":"layer","label":"Cognitive Capabilities","description":"What the organization can do","children":["#L5-1","#L5-2","#L5-3","#L5-4","#L5-5","#L5-6","#L5-7","#L5-8","#L5-9"],"meta":{"order":5}},{"id":"#L5-1","type":"item","itemType":"capability","label":"Find Information","properties":{"cognitive_level":"find"}},{"id":"#L5-2","type":"item","itemType":"capability","label":"Evaluate Facts","properties":{"cognitive_level":"evaluate"}},{"id":"#L5-3","type":"item","itemType":"capability","label":"Structure Documents","properties":{"cognitive_level":"structure"}},{"id":"#L5-4","type":"item","itemType":"capability","label":"Link Knowledge","properties":{"cognitive_level":"link"}},{"id":"#L5-5","type":"item","itemType":"capability","label":"Generate Content","properties":{"cognitive_level":"generate"}},{"id":"#L5-6","type":"item","itemType":"capability","label":"Identify Patterns","properties":{"cognitive_level":"evaluate"}},{"id":"#L5-7","type":"item","itemType":"capability","label":"Detect Redundancies","properties":{"cognitive_level":"evaluate"}},{"id":"#L5-8","type":"item","itemType":"capability","label":"Create Reports","properties":{"cognitive_level":"generate"}},{"id":"#L5-9","type":"item","itemType":"capability","label":"Communicate Knowledge","properties":{"cognitive_level":"generate"}},{"id":"#L4","type":"container","containerType":"layer","label":"Features & APIs","description":"Technical reusability","children":["#L4-1","#L4-2","#L4-3","#L4-4","#L4-5","#L4-6","#L4-7","#L4-8","#L4-9","#L4-10"],"meta":{"order":4}},{"id":"#L4-1","type":"item","itemType":"feature","label":"/search","properties":{"endpoint":"/search"}},{"id":"#L4-2","type":"item","itemType":"feature","label":"/classify","properties":{"endpoint":"/classify"}},{"id":"#L4-3","type":"item","itemType":"feature","label":"/summarize","properties":{"endpoint":"/summarize"}},{"id":"#L4-4","type":"item","itemType":"feature","label":"/link","properties":{"endpoint":"/link"}},{"id":"#L4-5","type":"item","itemType":"feature","label":"/remember","properties":{"endpoint":"/remember"}},{"id":"#L4-6","type":"item","itemType":"feature","label":"/chat","properties":{"endpoint":"/chat"}},{"id":"#L4-7","type":"item","itemType":"feature","label":"/transform","properties":{"endpoint":"/transform"}},{"id":"#L4-8","type":"item","itemType":"feature","label":"/create","properties":{"endpoint":"/create"}},{"id":"#L4-9","type":"item","itemType":"feature","label":"/analyze","properties":{"endpoint":"/analyze"}},{"id":"#L4-10","type":"item","itemType":"feature","label":"/calc","properties":{"endpoint":"/calc"}},{"id":"#L3","type":"container","containerType":"layer","label":"Organizational Knowledge Core","description":"Organizational memory","children":["#L3-semantic","#L3-index","#L3-graph","#L3-access"],"badges":["badge-feedback"],"meta":{"order":3,"highlighted":true}},{"id":"#L3-semantic","type":"container","containerType":"box","label":"Semantic Layer","children":["#L3-s1","#L3-s2","#L3-s3"]},{"id":"#L3-s1","type":"item","itemType":"concept","label":"Ontologies"},{"id":"#L3-s2","type":"item","itemType":"concept","label":"Taxonomies"},{"id":"#L3-s3","type":"item","itemType":"concept","label":"Entities"},{"id":"#L3-index","type":"container","containerType":"box","label":"Index & Search","children":["#L3-i1","#L3-i2","#L3-i3"]},{"id":"#L3-i1","type":"item","itemType":"concept","label":"Full-Text Index"},{"id":"#L3-i2","type":"item","itemType":"concept","label":"Vector Index"},{"id":"#L3-i3","type":"item","itemType":"concept","label":"Metadata Index"},{"id":"#L3-graph","type":"container","containerType":"box","label":"Knowledge Graph","children":["#L3-g1","#L3-g2","#L3-g3"]},{"id":"#L3-g1","type":"item","itemType":"concept","label":"Relations"},{"id":"#L3-g2","type":"item","itemType":"concept","label":"Context Links"},{"id":"#L3-g3","type":"item","itemType":"concept","label":"Entity Graph"},{"id":"#L3-access","type":"container","containerType":"box","label":"Security & Access","children":["#L3-a1","#L3-a2","#L3-a3"]},{"id":"#L3-a1","type":"item","itemType":"concept","label":"Access Control"},{"id":"#L3-a2","type":"item","itemType":"concept","label":"API Gateway"},{"id":"#L3-a3","type":"item","itemType":"concept","label":"Governance"},{"id":"#L2","type":"container","containerType":"layer","label":"AI & Cognitive Infrastructure","description":"Technology foundation","children":["#L2-1","#L2-2","#L2-3","#L2-4","#L2-5","#L2-6","#L2-7","#L2-8"],"meta":{"order":2}},{"id":"#L2-1","type":"item","itemType":"infrastructure","label":"Large Language Models","properties":{"tech_type":"llm"}},{"id":"#L2-2","type":"item","itemType":"infrastructure","label":"Machine Learning","properties":{"tech_type":"ml"}},{"id":"#L2-3","type":"item","itemType":"infrastructure","label":"Deep Learning","properties":{"tech_type":"ml"}},{"id":"#L2-4","type":"item","itemType":"infrastructure","label":"NLP","properties":{"tech_type":"nlp"}},{"id":"#L2-5","type":"item","itemType":"infrastructure","label":"Vector Indexes","properties":{"tech_type":"vector-index"}},{"id":"#L2-6","type":"item","itemType":"infrastructure","label":"Graph Databases","properties":{"tech_type":"graph-db"}},{"id":"#L2-7","type":"item","itemType":"infrastructure","label":"Computer Vision","properties":{"tech_type":"cv"}},{"id":"#L2-8","type":"item","itemType":"infrastructure","label":"RPA","properties":{"tech_type":"rpa"}},{"id":"#L1b","type":"container","containerType":"pipeline","label":"Data Processing Pipeline","description":"Raw data → usable knowledge","children":["#L1b-1","#L1b-2","#L1b-3","#L1b-4","#L1b-5"],"meta":{"order":1.5}},{"id":"#L1b-1","type":"item","itemType":"processingstep","label":"Data Ingestion","icon":"📥","properties":{"order":1}},{"id":"#L1b-2","type":"item","itemType":"processingstep","label":"Processing","icon":"⚙️","properties":{"order":2}},{"id":"#L1b-3","type":"item","itemType":"processingstep","label":"Cleansing","icon":"🧹","properties":{"order":3}},{"id":"#L1b-4","type":"item","itemType":"processingstep","label":"Validation","icon":"✅","properties":{"order":4}},{"id":"#L1b-5","type":"item","itemType":"processingstep","label":"Information & Knowledge","icon":"💡","properties":{"order":5,"variant":"output"}},{"id":"#L1","type":"container","containerType":"layer","label":"Data Sources","description":"Organizational raw data","children":["#L1-1","#L1-2","#L1-3","#L1-4","#L1-5","#L1-6","#L1-7","#L1-8","#L1-9","#L1-10"],"meta":{"order":1}},{"id":"#L1-1","type":"item","itemType":"datasource","label":"Persons","icon":"👤","properties":{"source_type":"internal"}},{"id":"#L1-2","type":"item","itemType":"datasource","label":"Organizations","icon":"🏢","properties":{"source_type":"internal"}},{"id":"#L1-3","type":"item","itemType":"datasource","label":"Locations","icon":"📍","properties":{"source_type":"internal"}},{"id":"#L1-4","type":"item","itemType":"datasource","label":"Customers","icon":"👥","properties":{"source_type":"internal"}},{"id":"#L1-5","type":"item","itemType":"datasource","label":"Materials","icon":"📦","properties":{"source_type":"internal"}},{"id":"#L1-6","type":"item","itemType":"datasource","label":"Projects","icon":"📁","properties":{"source_type":"internal"}},{"id":"#L1-7","type":"item","itemType":"datasource","label":"News & Media","icon":"📰","properties":{"source_type":"external"}},{"id":"#L1-8","type":"item","itemType":"datasource","label":"Rules & Policies","icon":"📜","properties":{"source_type":"internal"}},{"id":"#L1-9","type":"item","itemType":"datasource","label":"Logs","icon":"🗒️","properties":{"source_type":"transactional"}},{"id":"#L1-10","type":"item","itemType":"datasource","label":"Systems","icon":"🖥️","properties":{"source_type":"internal"}},{"id":"#panel-right","type":"container","containerType":"panel","label":"Data Sources & Processing","children":["#D1","#D2","#D3","#D4","#D5"],"meta":{"variant":"right"}},{"id":"#D1","type":"container","containerType":"box","label":"People & Docs","children":["#D1-1","#D1-2","#D1-3"]},{"id":"#D1-1","type":"item","itemType":"datasource","label":"Employee Profiles"},{"id":"#D1-2","type":"item","itemType":"datasource","label":"Expert Documents"},{"id":"#D1-3","type":"item","itemType":"datasource","label":"Manuals & Guides"},{"id":"#D2","type":"container","containerType":"box","label":"Transactions & Logs","children":["#D2-1","#D2-2","#D2-3"]},{"id":"#D2-1","type":"item","itemType":"datasource","label":"System Events"},{"id":"#D2-2","type":"item","itemType":"datasource","label":"Process Logs"},{"id":"#D2-3","type":"item","itemType":"datasource","label":"Transactions"},{"id":"#D3","type":"container","containerType":"box","label":"Projects & Tasks","children":["#D3-1","#D3-2","#D3-3"]},{"id":"#D3-1","type":"item","itemType":"datasource","label":"Project Repositories"},{"id":"#D3-2","type":"item","itemType":"datasource","label":"Tickets & Issues"},{"id":"#D3-3","type":"item","itemType":"datasource","label":"Delivery Artifacts"},{"id":"#D4","type":"container","containerType":"box","label":"External Sources","children":["#D4-1","#D4-2","#D4-3"]},{"id":"#D4-1","type":"item","itemType":"datasource","label":"Web & News"},{"id":"#D4-2","type":"item","itemType":"datasource","label":"Partner Data"},{"id":"#D4-3","type":"item","itemType":"datasource","label":"Regulatory Content"},{"id":"#D5","type":"container","containerType":"box","label":"Quality Gates","children":["#D5-1","#D5-2","#D5-3","#D5-4"],"meta":{"variant":"highlight"}},{"id":"#D5-1","type":"item","itemType":"concept","label":"Schema Validation"},{"id":"#D5-2","type":"item","itemType":"concept","label":"Deduplication"},{"id":"#D5-3","type":"item","itemType":"concept","label":"Enrichment"},{"id":"#D5-4","type":"item","itemType":"concept","label":"Versioning"}]'),C=[{id:"conn-fb-1",from:"#L6",to:"#L3",connectionType:"feedback",label:"Applications → Knowledge Core",direction:"backward"},{id:"conn-fb-2",from:"#L9-agents",to:"#L3",connectionType:"feedback",label:"Agents → Knowledge Core",direction:"backward"},{id:"conn-fb-3",from:"#L9-users",to:"#L3",connectionType:"feedback",label:"Users → Knowledge Core",direction:"backward"},{id:"conn-flow-1",from:"#L1",to:"#L1b",connectionType:"flow",direction:"forward"},{id:"conn-flow-2",from:"#L1b",to:"#L3",connectionType:"flow",direction:"forward"},{id:"conn-fb-4",from:"#L10",to:"#L3",connectionType:"feedback",label:"Outcomes → Knowledge Core",direction:"backward"}],z=[{id:"badge-feedback",icon:"↻",label:"Feedback Loop",description:"This element participates in a feedback loop. Actors, systems or processes return information that continuously improves organizational knowledge and capabilities. Details to be defined in a separate process view."}],D=[{id:"view-overview",type:"overview",label:"OIA Overview",include:["all"]}],O={show:!0,position:"bottom"},M={meta:A,elements:$,connections:C,badges:z,views:D,legend:O},E=M;function l(e,t){return e.elements.find(n=>n.id===t)}function S(e,t){return t.children.map(n=>{const i=l(e,n);if(!i||i.type!=="container")return"";const o=i.meta?.variant==="agents"?"accent4":"",s=i.children.map(c=>{const g=l(e,c);return g?`<span class="tag ${o}"><span class="dot"></span>${g.label}</span>`:""}).join("");return`<div class="actor-group ${i.meta?.variant||""}" data-id="${i.id}" style="cursor:pointer">
      <div class="actor-group-title">${i.meta?.icon||""} ${i.label}${f(e,i.badges)}</div>
      <div class="tag-row">${s}</div>
    </div>`}).join("")}function N(e,t){return t.children.map(n=>{const i=l(e,n);return i?`<span class="sit-item">${i.label}</span>`:""}).join("")}function P(e,t){return t.children.map(n=>{const i=l(e,n);return i?`<span class="usecase-item"><span class="usecase-dot"></span>${i.label}</span>`:""}).join("")}function R(e,t){return t.children.map(n=>{const i=l(e,n);return i?`<div class="sol-item"><span class="sol-icon">${i.icon||""}</span>${i.label}</div>`:""}).join("")}function j(e,t){return t.children.map(n=>{const i=l(e,n);return i?`<span class="cap-item"><span class="cap-dot"></span>${i.label}</span>`:""}).join("")}function H(e,t){return t.children.map(n=>{const i=l(e,n);return i?`<span class="tag mono accent2">${i.label}</span>`:""}).join("")}function K(e,t){return`<div class="core-inner">${t.children.map(i=>{const a=l(e,i);if(!a||a.type!=="container")return"";const o=a.children.map(s=>{const c=l(e,s);return c?c.label:""}).join("<br>");return`<div class="core-block" data-id="${a.id}" style="cursor:pointer">
      <div class="core-block-title">${a.label}</div>
      <div class="core-block-items">${o}</div>
    </div>`}).join("")}</div>`}function V(e,t){return t.children.map(n=>{const i=l(e,n);return i?`<span class="tag"><span class="dot"></span>${i.label}</span>`:""}).join("")}function B(e,t){return`<div class="pipeline-row">${t.children.map((i,a,o)=>{const s=l(e,i);if(!s)return"";const c=a===o.length-1,u=s.properties?.variant==="output"?' style="border-color:rgba(44,242,194,0.3);color:rgba(44,242,194,0.8)"':"",m=c?"":'<div class="pipeline-arrow">→</div>';return`<div class="pipeline-step"${u}>${s.icon||""}<br>${s.label}</div>${m}`}).join("")}</div>`}function W(e,t){return t.children.map(n=>{const i=l(e,n);if(!i)return"";const a=Array.isArray(i.properties?.outcome_category)?i.properties.outcome_category.join(" · "):i.properties?.outcome_category||"";return`<div class="outcome-item">
      <span class="outcome-label">${i.label}</span>
      ${a?`<span class="outcome-categories">${a}</span>`:""}
    </div>`}).join("")}function G(e,t){return t.children.map(n=>{const i=l(e,n);return i?`<div class="data-item"><span class="data-icon">${i.icon||""}</span>${i.label}</div>`:""}).join("")}function f(e,t){return!t||t.length===0?"":t.map(n=>{const i=e.badges.find(a=>a.id===n);return i?`<span class="badge-icon" title="${i.label}: ${i.description}">${i.icon}</span>`:""}).join("")}function F(e,t){const n=t.meta?.highlighted===!0,i=t.containerType==="pipeline",a=document.createElement("div");if(a.dataset.id=t.id,a.style.cursor="pointer",n){a.className="layer-core";const c=t.id.replace("#","");return a.innerHTML=`
      <div class="layer-header">
        <span class="layer-num" style="color:#2cf2c2;opacity:0.6">${c}</span>
        <span class="layer-title">${t.label}</span>
        <span class="core-badge">CENTRAL COMPONENT</span>
        <span class="layer-desc" style="color:rgba(44,242,194,0.5)">${t.description||""}</span>
        ${f(e,t.badges)}
      </div>
      ${K(e,t)}
    `,a}a.className="layer";const o=t.id.replace("#","");let s="";return t.id==="#L9"?s=`<div class="actors-grid">${S(e,t)}</div>`:t.id==="#L8"?s=`<div class="sit-grid">${N(e,t)}</div>`:t.id==="#L7"?s=`<div class="usecase-grid">${P(e,t)}</div>`:t.id==="#L6"?s=`<div class="sol-grid">${R(e,t)}</div>`:t.id==="#L5"?s=`<div class="cap-grid">${j(e,t)}</div>`:t.id==="#L4"?s=`<div class="tag-row">${H(e,t)}</div>`:t.id==="#L2"?s=`<div class="tag-row">${V(e,t)}</div>`:t.id==="#L10"?s=`<div class="outcome-grid">${W(e,t)}</div>`:i?s=B(e,t):t.id==="#L1"&&(s=`<div class="data-grid">${G(e,t)}</div>`),a.innerHTML=`
    <div class="layer-header">
      <span class="layer-num">${o}</span>
      <span class="layer-title">${t.label}</span>
      <span class="layer-desc">${t.description||""}</span>
      ${f(e,t.badges)}
    </div>
    ${s}
  `,a}function U(e,t){return t.map(n=>{const i=l(e,n);if(!i)return"";if(i.type==="item")return`<div class="side-item">${i.label}</div>`;if(i.type==="container"){const a=i.meta?.variant==="highlight",o=a?' style="border-color:rgba(44,242,194,0.25);"':"",s=a?' style="color:var(--accent2)"':"",c=a?' style="border-color:rgba(44,242,194,0.2)"':"",g=i.children.map(u=>{const m=l(e,u);return m?`<div class="side-item"${c}>${m.label}</div>`:""}).join("");return`<div class="side-block" data-id="${i.id}"${o}>
  <div class="side-block-title"${s}>${i.label}</div>
  ${g}
</div>`}return""}).join(`
`)}function T(e,t){const n=document.createElement("div");return n.className="side-panel"+(t.meta?.variant==="right"?" right-panel":""),n.innerHTML=`
    <div class="side-label">${t.label}</div>
    ${U(e,t.children)}
  `,n}function q(e){const t=document.createElement("div");t.className="diagram-wrapper";const n=document.createElement("div");n.className="header",n.innerHTML=`
    <div class="header-badge">Reference Architecture · V${e.meta.version} · ${e.meta.created}</div>
    <h1>Organizational <span>Intelligence</span> Architecture</h1>
    <p>${e.meta.subtitle}</p>
    <div class="header-line"></div>
  `,t.appendChild(n);const i=document.createElement("div");i.className="main-grid";const a=l(e,"#panel-left");a&&i.appendChild(T(e,a));const o=document.createElement("div");o.className="center-col";const s=e.elements.filter(r=>r.type==="container"&&r.containerType==="layer").map(r=>r).sort((r,v)=>(v.meta?.order??0)-(r.meta?.order??0)),c=e.elements.filter(r=>r.type==="container"&&r.containerType==="pipeline").map(r=>r),g=[...s,...c].sort((r,v)=>(v.meta?.order??0)-(r.meta?.order??0));for(const r of g)o.appendChild(F(e,r));i.appendChild(o);const u=l(e,"#panel-right");if(u&&i.appendChild(T(e,u)),t.appendChild(i),e.legend.show&&e.badges.length>0){const r=document.createElement("div");r.className="legend";const v=e.badges.map(b=>`
      <div class="legend-item">
        <span class="legend-icon">${b.icon}</span>
        <div class="legend-text">
          <span class="legend-label">${b.label}</span>
          <span class="legend-desc">${b.description}</span>
        </div>
      </div>
    `).join("");r.innerHTML=`<div class="legend-title">Legend</div><div class="legend-items">${v}</div>`,t.appendChild(r)}const m=document.createElement("div");return m.className="footer",m.textContent=`OIA · Organizational Intelligence Architecture · V${e.meta.version} · © ${e.meta.created} · ${e.meta.subtitle}`,t.appendChild(m),t}function x(e,t,n=0){return n>3?"":t.map(i=>{const a=e.elements.find(s=>s.id===i);if(!a)return"";const o=n>0?` style="margin-left:${n*16}px"`:"";if(a.type==="container"){const s=a.children.length>0?`<div class="detail-children">${x(e,a.children,n+1)}</div>`:"";return`<div class="detail-item"${o}>
        <span class="detail-item-label">${a.label}</span>
        <span style="font-size:10px;color:var(--text-muted);margin-left:8px">${a.containerType}</span>
        ${s}
      </div>`}return`<div class="detail-item"${o}>
      <span class="detail-item-label">${a.icon?a.icon+" ":""}${a.label}</span>
      <span style="font-size:10px;color:var(--text-muted);margin-left:8px">${a.itemType}</span>
    </div>`}).join("")}function Y(e,t){const n=e.elements.find(s=>s.id===t),i=document.createElement("div");if(i.className="detail-view",!n)return i.innerHTML=`
      <a class="detail-back" href="#/">← Back</a>
      <div class="detail-title">Element not found: ${t}</div>
    `,i;const a=n.type==="container"?n.children:[],o=(n.type==="container",n.description||"");return i.innerHTML=`
    <a class="detail-back" href="#/">← Back to Overview</a>
    <div class="detail-id">${n.id}</div>
    <div class="detail-title">${n.label}</div>
    ${o?`<div class="detail-desc">${o}</div>`:""}
    <div class="detail-items">
      ${a.length>0?x(e,a):'<div class="detail-item" style="color:var(--text-muted)">No sub-elements</div>'}
    </div>
  `,i}function Z(){const e=document.createElement("div");return e.className="page-view",e.innerHTML=`
    <div class="page-view__hero">
      <div class="page-view__hero-line">This is an open architecture of participation.</div>
      <div class="page-view__hero-sub">For everyone.</div>
    </div>

    <div class="page-view__content">

      <div class="page-view__eyebrow">Motivation</div>

      <h1 class="page-view__lead">
        Build the Architecture Together
      </h1>

      <div class="page-view__intro">
        <p>OIA is not a finished framework.</p>
        <p>
          It is a <strong>working model</strong> for how organizations can turn knowledge into action.
        </p>
        <p>
          Version <strong>0.1.0</strong> is intentionally early.<br>
          The architecture will evolve through real implementations, experiments and operational feedback.
        </p>
        <p>Not through theory alone.</p>
      </div>

      <section class="page-view__section">
        <h2 class="page-view__section-title">An Open Architecture of Participation</h2>
        <p class="page-view__body" style="margin-bottom: 20px;">
          OIA is designed as a <strong>shared architectural thinking model</strong>.
        </p>
        <p class="page-view__body" style="margin-bottom: 20px;">
          It improves when people who actually build systems contribute their experience:
        </p>
        <div class="page-view__audience">
          <span class="page-view__audience-item">enterprise architects</span>
          <span class="page-view__audience-item">knowledge management practitioners</span>
          <span class="page-view__audience-item">AI engineers</span>
          <span class="page-view__audience-item">data platform teams</span>
          <span class="page-view__audience-item">digital transformation leaders</span>
        </div>
        <p class="page-view__body page-view__manifesto">
          <strong>Architecture that grows from practice.</strong>
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">What Contributions Look Like</h2>
        <p class="page-view__body" style="margin-bottom: 20px;">
          Contributions do not have to be large.<br>
          The most valuable inputs often come from real implementation experience:
        </p>
        <div class="page-view__cards">
          <div class="page-view__card">
            <ul class="page-view__card-list">
              <li>a failed RAG experiment</li>
              <li>a difficult enterprise search integration</li>
              <li>governance challenges around AI assistants</li>
            </ul>
          </div>
          <div class="page-view__card">
            <ul class="page-view__card-list">
              <li>knowledge graph modelling problems</li>
              <li>operational lessons from production systems</li>
              <li>architectural gaps you have encountered</li>
            </ul>
          </div>
        </div>
        <p class="page-view__body" style="margin-top: 20px; font-style: italic; color: var(--text-muted);">
          Real systems create real learning.<br>
          That learning improves the architecture.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">From Reference Model to Real Systems</h2>
        <p class="page-view__body" style="margin-bottom: 20px;">
          The long-term ambition of OIA is to evolve step by step:
        </p>
        <div class="page-view__flow page-view__flow--vertical">
          <span class="page-view__flow-step">Reference Architecture</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step">Architectural Patterns</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step">Reference Implementations</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step accent3">Operational Organizational Intelligence Systems</span>
        </div>
        <p class="page-view__body" style="margin-top: 20px; font-style: italic; color: var(--text-muted);">
          This evolution can only happen through <strong>shared practice</strong>.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Join the Work</h2>
        <p class="page-view__body" style="margin-bottom: 20px;">
          If you are building systems where <strong>knowledge must become action</strong>,<br>
          your experience belongs in this architecture.
        </p>
        <div class="page-view__join-steps">
          <div class="page-view__join-step">
            <span class="page-view__step-num">01</span>
            <span>Explore the model</span>
          </div>
          <div class="page-view__join-step">
            <span class="page-view__step-num">02</span>
            <span>Challenge assumptions</span>
          </div>
          <div class="page-view__join-step">
            <span class="page-view__step-num">03</span>
            <span>Contribute insights from real implementations</span>
          </div>
        </div>
        <p class="page-view__body page-view__manifesto" style="margin-top: 28px;">
          OIA is not a finished answer.<br><br>
          It is a place where the architecture of organizational intelligence is <strong>built in the open</strong>.
        </p>
      </section>

      <div class="page-view__cta">
        <a class="page-view__cta-link" href="#/">← Zum Architekturdiagramm</a>
        <a class="page-view__cta-link primary" href="#/contribute">Join the work →</a>
      </div>

      <div class="page-view__charter">
        <em>Architecture does not emerge from presentations.</em><br>
        <em>It emerges from systems that were built, tested, broken — and rebuilt.</em>
      </div>

    </div>
  `,e}function Q(){const e=document.createElement("div");return e.className="page-view",e.innerHTML=`
    <div class="page-view__hero">
      <div class="page-view__hero-line">OIA is an open model.</div>
      <div class="page-view__hero-sub">Your experience makes it better.</div>
    </div>

    <div class="page-view__content">

      <div class="page-view__eyebrow">Contribute</div>

      <h1 class="page-view__lead">
        Build the Architecture Together
      </h1>

      <div class="page-view__intro">
        <p>OIA is not a finished framework.</p>
        <p>
          It is a <strong>working model</strong> — version <strong>0.1.0</strong>, intentionally early.
        </p>
        <p>
          The architecture will evolve through real implementations, experiments, and operational feedback.<br>
          Not through theory alone.
        </p>
        <p>
          This is where you come in.
        </p>
      </div>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Who Contributes to OIA</h2>
        <div class="page-view__cards">
          <div class="page-view__card">
            <div class="page-view__card-title">Practitioners</div>
            <p class="page-view__card-body">
              You work daily with enterprise search, knowledge management,
              or AI in organizations. Your implementation experience — including failures —
              is exactly what this architecture needs.
            </p>
          </div>
          <div class="page-view__card">
            <div class="page-view__card-title">Architects &amp; Advisors</div>
            <p class="page-view__card-body">
              You design architectures for intelligent organizations.
              Your feedback on completeness, gaps, and real-world applicability
              sharpens the model.
            </p>
          </div>
          <div class="page-view__card">
            <div class="page-view__card-title">Developers</div>
            <p class="page-view__card-body">
              You want to contribute to the interactive renderer or improve
              the tooling. TypeScript, Vite, clear conventions —
              the entry point is small and well-documented.
            </p>
          </div>
        </div>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Ways to Contribute</h2>
        <p class="page-view__body" style="margin-bottom: 20px;">
          Contributions do not have to be large.<br>
          The most valuable inputs often come from real experience:
        </p>
        <div class="page-view__cards">
          <div class="page-view__card">
            <ul class="page-view__card-list">
              <li>Open an issue with a model gap you have encountered</li>
              <li>Share a failed implementation pattern and what it revealed</li>
              <li>Challenge a layer definition that does not match reality</li>
            </ul>
          </div>
          <div class="page-view__card">
            <ul class="page-view__card-list">
              <li>Propose a new use case or capability</li>
              <li>Improve the renderer or documentation</li>
              <li>Submit a pull request for any of the above</li>
            </ul>
          </div>
        </div>
        <p class="page-view__body" style="margin-top: 20px; font-style: italic; color: var(--text-muted);">
          <a class="page-view__link" href="https://github.com/ruKurz/oi-architecture/issues" target="_blank" rel="noopener">A comment on an issue is a contribution.</a><br>
          <a class="page-view__link" href="https://www.linkedin.com/feed/update/urn:li:activity:7434972082561687552/" target="_blank" rel="noopener">A conversation that improves a concept is a contribution.</a>
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Ready to start?</h2>
        <div class="page-view__badge">First Contribution ≈ 20 minutes</div>
        <a class="page-view__contributing-cta" href="https://github.com/ruKurz/oi-architecture/blob/main/docs/CONTRIBUTING.md" target="_blank" rel="noopener">
          <span class="page-view__contributing-cta-label">Read the full contribution guide</span>
          <span class="page-view__contributing-cta-file">docs/CONTRIBUTING.md →</span>
        </a>
        <div class="page-view__join-steps" style="margin-top: 24px;">
          <div class="page-view__join-step">
            <span class="page-view__step-num">01</span>
            <div>
              <strong>Read the contribution guide</strong><br>
              <a class="page-view__link" href="https://github.com/ruKurz/oi-architecture/blob/main/docs/CONTRIBUTING.md" target="_blank" rel="noopener">CONTRIBUTING.md</a>
            </div>
          </div>
          <div class="page-view__join-step">
            <span class="page-view__step-num">02</span>
            <div>
              <strong>Browse good first issues</strong><br>
              <a class="page-view__link" href="https://github.com/ruKurz/oi-architecture/issues?q=label%3Agood-first-issue" target="_blank" rel="noopener">Issues labeled good-first-issue</a>
            </div>
          </div>
          <div class="page-view__join-step">
            <span class="page-view__step-num">03</span>
            <div>
              <strong>Open a discussion or pull request</strong><br>
              <a class="page-view__link" href="https://github.com/ruKurz/oi-architecture" target="_blank" rel="noopener">github.com/ruKurz/oi-architecture</a>
            </div>
          </div>
        </div>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">What We Value in Contributions</h2>
        <p class="page-view__body" style="margin-bottom: 20px;">
          OIA is a <strong>practical architecture</strong>, not an academic framework.
        </p>
        <div class="page-view__cards">
          <div class="page-view__card">
            <ul class="page-view__card-list">
              <li>Lessons from real systems — including what did not work</li>
              <li>Concrete gaps between the model and implementation reality</li>
              <li>Clarity over completeness — sharp definitions beat long lists</li>
            </ul>
          </div>
          <div class="page-view__card">
            <ul class="page-view__card-list">
              <li>Architecture that can be acted upon, not just described</li>
              <li>Honest feedback, even if it challenges existing decisions</li>
              <li>Small, focused changes that improve a single thing well</li>
            </ul>
          </div>
        </div>
        <p class="page-view__body page-view__manifesto" style="margin-top: 28px;">
          <strong>Architecture grows from practice.</strong><br>
          Failure is data. Share it.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Start the Conversation</h2>
        <p class="page-view__body" style="margin-bottom: 20px;">
          If you are building systems where <strong>knowledge must become action</strong>,<br>
          your experience belongs in this architecture.
        </p>
        <p class="page-view__body" style="margin-bottom: 28px;">
          Open an issue. Ask a question. Challenge an assumption.<br>
          Every conversation that improves the model is a contribution.
        </p>
      </section>

      <div class="page-view__cta">
        <a class="page-view__cta-link" href="#/motivation">← Motivation</a>
        <a class="page-view__cta-link primary" href="https://github.com/ruKurz/oi-architecture" target="_blank" rel="noopener">Zum GitHub Repository →</a>
      </div>

      <div class="page-view__charter">
        <em>Architecture does not emerge from presentations.</em><br>
        <em>It emerges from systems that were built, tested, broken — and rebuilt.</em>
      </div>

    </div>
  `,e}function J(){const e=document.createElement("div");return e.className="page-view",e.innerHTML=`
    <div class="page-view__content">

      <div class="page-view__eyebrow">About</div>

      <h1 class="page-view__lead">
        Rüdiger Kurz
      </h1>

      <div class="page-view__intro">
        <p>
          I work on systems where <strong>knowledge, software and organizations intersect</strong>.
        </p>
        <p>
          Most of my work over the past years has been around:
        </p>
      </div>

      <div class="page-view__audience" style="margin-bottom: 40px;">
        <span class="page-view__audience-item">enterprise search</span>
        <span class="page-view__audience-item">knowledge systems</span>
        <span class="page-view__audience-item">AI-supported information architectures</span>
        <span class="page-view__audience-item">large organizational information landscapes</span>
      </div>

      <p class="page-view__body page-view__manifesto" style="margin-bottom: 48px;">
        Across different projects one question kept coming back:<br><br>
        <strong>How can organizations turn their knowledge into coordinated action?</strong><br><br>
        Not occasionally — but systematically.
      </p>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Where the idea for OIA comes from</h2>
        <p class="page-view__body" style="margin-bottom: 16px;">
          In many organizations the situation looks similar.
        </p>
        <p class="page-view__body" style="margin-bottom: 16px;">
          Information exists everywhere — documents, systems, teams, expert knowledge in people's heads.
          Technology keeps improving. Yet decisions are still often made by <strong>manually piecing
          information together</strong>.
        </p>
        <p class="page-view__body" style="margin-bottom: 16px;">
          The issue is rarely missing data.<br>
          More often it is <strong>missing architecture</strong>.
        </p>
        <p class="page-view__body" style="margin-bottom: 20px;">
          Architecture that connects:
        </p>
        <div class="page-view__flow page-view__flow--vertical">
          <span class="page-view__flow-step">information</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step">knowledge</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step">capabilities</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step">decisions</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step accent3">action</span>
        </div>
        <p class="page-view__body" style="margin-top: 20px; font-style: italic; color: var(--text-muted);">
          OIA started as an attempt to describe this architecture.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Practice before theory</h2>
        <p class="page-view__body" style="margin-bottom: 16px;">
          The ideas behind OIA did not start as a framework.
        </p>
        <p class="page-view__body" style="margin-bottom: 16px;">
          They emerged from practical work on:
        </p>
        <div class="page-view__card" style="margin-bottom: 20px;">
          <ul class="page-view__card-list">
            <li>enterprise search systems</li>
            <li>knowledge platforms</li>
            <li>information architecture in large organizations</li>
            <li>early AI-assisted knowledge workflows</li>
          </ul>
        </div>
        <p class="page-view__body page-view__manifesto">
          Working on these systems makes one thing clear:<br><br>
          <strong>Technology alone does not create organizational intelligence.</strong><br>
          Structure does. Architecture does.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Why this project is open</h2>
        <p class="page-view__body" style="margin-bottom: 16px;">
          OIA is published as an open project because this problem is not specific to a single company.
        </p>
        <p class="page-view__body" style="margin-bottom: 16px;">
          Many organizations are currently trying to understand:
        </p>
        <div class="page-view__card" style="margin-bottom: 20px;">
          <ul class="page-view__card-list">
            <li>how AI fits into existing information systems</li>
            <li>how organizational knowledge can be structured</li>
            <li>how humans and AI collaborate around knowledge</li>
          </ul>
        </div>
        <p class="page-view__body" style="font-style: italic; color: var(--text-muted);">
          No single team will solve this alone.<br>
          The architecture will improve through shared experience.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">About this site</h2>
        <p class="page-view__body" style="margin-bottom: 16px;">
          This site hosts the evolving <strong>Organizational Intelligence Architecture (OIA)</strong> model.
        </p>
        <p class="page-view__body" style="margin-bottom: 16px;">
          The goal is to develop:
        </p>
        <div class="page-view__card" style="margin-bottom: 20px;">
          <ul class="page-view__card-list">
            <li>a conceptual architecture</li>
            <li>practical patterns</li>
            <li>and eventually reference implementations</li>
          </ul>
        </div>
        <p class="page-view__body" style="font-style: italic; color: var(--text-muted);">
          for organizations that want to turn knowledge into action.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Contact</h2>
        <p class="page-view__body" style="margin-bottom: 12px;">
          If you work on similar problems or want to discuss ideas around organizational intelligence,
          feel free to reach out.
        </p>
        <div class="page-view__contact">
          <div class="page-view__contact-row">
            <span class="page-view__contact-label">Email</span>
            <a class="page-view__link" href="mailto:kurz@vnc-online">kurz@vnc-online</a>
          </div>
          <div class="page-view__contact-row">
            <span class="page-view__contact-label">GitHub</span>
            <a class="page-view__link" href="https://github.com/ruKurz" target="_blank" rel="noopener">github.com/ruKurz</a>
          </div>
          <div class="page-view__contact-row">
            <span class="page-view__contact-label">LinkedIn</span>
            <a class="page-view__link" href="https://www.linkedin.com/in/r%C3%BCdiger-kurz" target="_blank" rel="noopener">linkedin.com/in/rüdiger-kurz</a>
          </div>
        </div>
      </section>

      <div class="page-view__cta">
        <a class="page-view__cta-link" href="#/motivation">← Motivation</a>
        <a class="page-view__cta-link primary" href="#/contribute">Contribute →</a>
      </div>

    </div>
  `,e}function X(){const e=document.createElement("div");return e.className="page-view",e.innerHTML=`
    <div class="page-view__content">

      <div class="page-view__eyebrow">Legal</div>
      <h1 class="page-view__lead">Legal Notice</h1>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Angaben gemäß § 5 TMG</h2>
        <div class="page-view__contact">
          <div class="page-view__contact-row">
            <span class="page-view__contact-label">Name</span>
            <span class="page-view__body">Rüdiger Kurz</span>
          </div>
          <div class="page-view__contact-row">
            <span class="page-view__contact-label">Anschrift</span>
            <span class="page-view__body">
              Anton-Bruckner-Str. 3<br>
              61250 Usingen<br>
              Deutschland
            </span>
          </div>
          <div class="page-view__contact-row">
            <span class="page-view__contact-label">E-Mail</span>
            <a class="page-view__link" href="mailto:kurz@vnc-online">kurz@vnc-online</a>
          </div>
        </div>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Verantwortlich für den Inhalt</h2>
        <p class="page-view__body">
          Rüdiger Kurz, Anschrift wie oben.<br>
          <span style="color: var(--text-muted); font-size: 12px;">§ 55 Abs. 2 RStV</span>
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Lizenz</h2>
        <p class="page-view__body" style="margin-bottom: 16px;">
          Diese Seite veröffentlicht das <strong>Organizational Intelligence Architecture (OIA)</strong> Modell
          unter einer dualen Lizenz:
        </p>
        <div class="page-view__card">
          <ul class="page-view__card-list">
            <li>
              <strong>Quellcode</strong> (<code>oia-site/</code>) —
              <a class="page-view__link" href="https://github.com/ruKurz/oi-architecture/blob/main/LICENSE" target="_blank" rel="noopener">MIT License</a>
            </li>
            <li>
              <strong>Inhalte</strong> (Modell, Texte, Diagramme, Entscheidungen) —
              <a class="page-view__link" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>
            </li>
          </ul>
        </div>
        <p class="page-view__body" style="margin-top: 16px; font-size: 13px; color: var(--text-muted);">
          CC BY 4.0: Weitergabe und Bearbeitung erlaubt, solange der Urheber (Rüdiger Kurz)
          und die Quelle (<a class="page-view__link" href="https://github.com/ruKurz/oi-architecture" target="_blank" rel="noopener">github.com/ruKurz/oi-architecture</a>) genannt werden.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Datenschutz</h2>
        <p class="page-view__body" style="color: var(--text-muted);">
          Diese Seite verwendet keine Cookies, kein Tracking und keine Analyse-Werkzeuge.
          Es werden keine personenbezogenen Daten erhoben oder gespeichert.<br>
          Hosting: GitHub Pages.
          <a class="page-view__link" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub Privacy Statement →</a>
        </p>
      </section>

    </div>
  `,e}const ee=[{href:"#/",label:"OIA",route:"/"},{href:"#/motivation",label:"Motivation",route:"/motivation"},{href:"#/contribute",label:"Contribute",route:"/contribute"},{href:"#/about",label:"About",route:"/about"},{href:"#/legal",label:"Legal Notice",route:"/legal"}];function te(e){return e.startsWith("#/motivation")?"/motivation":e.startsWith("#/contribute")?"/contribute":e.startsWith("#/about")?"/about":e.startsWith("#/legal")?"/legal":"/"}function ie(e){const t=te(window.location.hash||"#/");e.innerHTML=`
    <div class="site-nav__inner">
      <a class="site-nav__brand" href="#/">OIA</a>
      <ul class="site-nav__links">
        ${ee.map(n=>`
          <li>
            <a
              class="site-nav__link${t===n.route?" site-nav__link--active":""}"
              href="${n.href}"
            >${n.label}</a>
          </li>`).join("")}
      </ul>
      <a class="site-nav__github" href="https://github.com/ruKurz/oi-architecture" target="_blank" rel="noopener" aria-label="GitHub Repository">
        <svg class="site-nav__github-icon" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </a>
    </div>
  `}const ae=.75,k=.4,I=1,_=.05,ne=.55,se=.75;let L,p,h=null,d=ae;function w(e){d=e;const t=p.querySelector(".diagram-wrapper");if(t){t.style.transform=`scale(${d})`;const a=d<ne?"zoom-far":d<se?"zoom-mid":"zoom-full";t.classList.remove("zoom-far","zoom-mid","zoom-full"),t.classList.add(a)}const n=p.querySelector(".zoom-label");n&&(n.textContent=Math.round(d*100)+"%");const i=p.querySelector(".zoom-slider");i&&(i.value=String(d*100))}function oe(){p.querySelectorAll("[data-id]").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const n=e.dataset.id;n&&(window.location.hash=`#/detail/${n}`)})})}function re(){p.innerHTML="";const e=q(L);p.appendChild(e),w(d),oe();const t=document.createElement("div");t.className="zoom-controls",t.innerHTML=`
    <span style="font-size:10px;color:var(--text-muted)">Zoom</span>
    <input class="zoom-slider" type="range" min="${k*100}" max="${I*100}" value="${Math.round(d*100)}" step="${_*100}">
    <span class="zoom-label">${Math.round(d*100)}%</span>
  `,p.appendChild(t);const n=t.querySelector(".zoom-slider");n.addEventListener("input",()=>w(Number(n.value)/100)),t.addEventListener("wheel",i=>{i.preventDefault();const a=i.deltaY<0?_:-_;w(Math.min(I,Math.max(k,d+a)))})}function le(e){p.innerHTML="",p.appendChild(Y(L,e))}function y(e){p.innerHTML="",p.appendChild(e)}function ce(e,t){L=e,p=t,h=document.getElementById("site-nav");const n=document.querySelector(".github-fab"),i=()=>{const a=window.location.hash||"#/";h&&ie(h);const o=a==="#/motivation"||a==="#/contribute"||a==="#/about"||a==="#/legal";n&&(n.style.display=o?"":"none"),a.startsWith("#/detail/")?le(decodeURIComponent(a.replace("#/detail/",""))):a==="#/motivation"?y(Z()):a==="#/contribute"?y(Q()):a==="#/about"?y(J()):a==="#/legal"?y(X()):re()};window.addEventListener("hashchange",i),i()}const pe=document.getElementById("app");ce(E,pe);
