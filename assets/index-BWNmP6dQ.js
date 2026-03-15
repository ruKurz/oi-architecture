(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const R={version:"0.2.0",title:"Organizational Intelligence Architecture",subtitle:"How organizations turn knowledge into action",created:"2026"},M=JSON.parse(`[{"id":"#panel-left","type":"container","containerType":"panel","label":"System Development & Interaction","children":["#I1","#I2","#I3","#I4"],"meta":{"variant":"left"}},{"id":"#I1","type":"container","containerType":"box","label":"User Interaction","children":["#I1-1","#I1-2","#I1-3","#I1-4"]},{"id":"#I1-1","type":"item","itemType":"concept","label":"Login & Authentication"},{"id":"#I1-2","type":"item","itemType":"concept","label":"User Profile"},{"id":"#I1-3","type":"item","itemType":"concept","label":"Click-Through"},{"id":"#I1-4","type":"item","itemType":"concept","label":"Input / Output"},{"id":"#I2","type":"container","containerType":"box","label":"Context Understanding","children":["#I2-1","#I2-2","#I2-3","#I2-4"]},{"id":"#I2-1","type":"item","itemType":"concept","label":"Intent Detection"},{"id":"#I2-2","type":"item","itemType":"concept","label":"Preference Detection"},{"id":"#I2-3","type":"item","itemType":"concept","label":"Context Analysis"},{"id":"#I2-4","type":"item","itemType":"concept","label":"Context Enrichment"},{"id":"#I3","type":"container","containerType":"box","label":"Feature Orchestration","children":["#I3-1","#I3-2","#I3-3","#I3-4"]},{"id":"#I3-1","type":"item","itemType":"concept","label":"Pipelines"},{"id":"#I3-2","type":"item","itemType":"concept","label":"Workflows"},{"id":"#I3-3","type":"item","itemType":"concept","label":"Business Logic"},{"id":"#I3-4","type":"item","itemType":"concept","label":"Agents"},{"id":"#I4","type":"container","containerType":"box","label":"Model Improvement","children":["#I4-1","#I4-2","#I4-3","#I4-4"]},{"id":"#I4-1","type":"item","itemType":"concept","label":"Training"},{"id":"#I4-2","type":"item","itemType":"concept","label":"Fine-Tuning"},{"id":"#I4-3","type":"item","itemType":"concept","label":"Optimization"},{"id":"#I4-4","type":"item","itemType":"concept","label":"Monitoring"},{"id":"#L10","type":"container","containerType":"layer","label":"Business Outcome","description":"Where knowledge becomes value","children":["#L10-1","#L10-2","#L10-3","#L10-4","#L10-5","#L10-6"],"badges":["badge-feedback"],"meta":{"order":10}},{"id":"#L10-1","type":"item","itemType":"outcome","label":"Informed Decision","properties":{"outcome_category":["cognitive","strategic"]}},{"id":"#L10-2","type":"item","itemType":"outcome","label":"Executed Action","properties":{"outcome_category":["operational","execution"]}},{"id":"#L10-3","type":"item","itemType":"outcome","label":"Operational Efficiency","properties":{"outcome_category":["operational","performance"]}},{"id":"#L10-4","type":"item","itemType":"outcome","label":"Customer Value","properties":{"outcome_category":["experience","strategic"]}},{"id":"#L10-5","type":"item","itemType":"outcome","label":"Risk Reduction","properties":{"outcome_category":["governance","resilience"]}},{"id":"#L10-6","type":"item","itemType":"outcome","label":"Continuous Improvement","properties":{"outcome_category":["adaptive","learning"]}},{"id":"#L9","type":"container","containerType":"layer","label":"System Participants","description":"Who initiates, acts, and benefits — and with what accountability","children":["#L9-triad","#L9-spectrum-autonomy","#L9-spectrum-accountability","#L9-key-insight"],"meta":{"order":9}},{"id":"#L9-triad","type":"container","containerType":"frame","label":"Triad","children":["#L9-t-initiator","#L9-t-actor","#L9-t-beneficiary"]},{"id":"#L9-t-initiator","type":"item","itemType":"participant","label":"Initiator","role":"initiator","triadPosition":1,"color":"purple","weight":"secondary","description":"Defines the governance frame: goals, permissions, and organizational rules. Interacts with OIA constitutively — not operatively. Sets the conditions under which Actors operate. Accountability always traces back to the Initiator and is always reducible to a human or organization."},{"id":"#L9-t-actor","type":"item","itemType":"participant","label":"Actor","role":"actor","triadPosition":2,"color":"teal","weight":"primary","primary":true,"description":"The primary interaction entity of OIA. Engages with Capabilities, Features, and the Knowledge Core. OIA is built from the Actor's perspective. The Actor can be a Human, an Agent, or a System."},{"id":"#L9-t-beneficiary","type":"item","itemType":"participant","label":"Beneficiary","role":"beneficiary","triadPosition":3,"color":"amber","weight":"secondary","description":"The entity for whom the outcome creates value. Legitimizes the action. Feedback flows back into the architecture from the Beneficiary, but the Beneficiary does not control the process. Can be a human, team, or system."},{"id":"#L9-spectrum-autonomy","type":"container","containerType":"spectrum","label":"Autonomy & Decision Space","spectrumAxis":"autonomy","children":["#L9-sa-system","#L9-sa-human","#L9-sa-agent"]},{"id":"#L9-sa-system","type":"item","itemType":"participant","label":"System","spectrumAxis":"autonomy","position":1,"caption":"Configured · deterministic","description":"Operates within a fixed configuration set by the Initiator. No independent decision space — executes exactly what was configured. Predictable, deterministic, bounded by design.","color":"gray"},{"id":"#L9-sa-human","type":"item","itemType":"participant","label":"Human","spectrumAxis":"autonomy","position":2,"caption":"Guided · contextual judgment","description":"Decides contextually, embedded in hierarchy, political consideration, and cognitive limits. Filters before acting — through organization, experience, and judgment. Greater interpretive depth than operational reach.","color":"teal"},{"id":"#L9-sa-agent","type":"item","itemType":"participant","label":"Agent","spectrumAxis":"autonomy","position":3,"caption":"Goal-directed · autonomous","description":"Greater operational reach than a human: parallel processing, continuous availability, no cognitive bias, no organizational embeddedness. Operates without the filters that constrain human decision-making in organizations. The positioning to the right of Human on this axis is intentional — not a display error.","color":"teal","converging":true},{"id":"#L9-spectrum-accountability","type":"container","containerType":"spectrum","label":"Accountability","spectrumAxis":"accountability","children":["#L9-sc-system","#L9-sc-agent","#L9-sc-human"]},{"id":"#L9-sc-system","type":"item","itemType":"participant","label":"System","spectrumAxis":"accountability","position":1,"caption":"Inherits from Initiator","description":"Carries no independent accountability. Accountability flows back entirely to the Initiator who configured it.","color":"gray"},{"id":"#L9-sc-agent","type":"item","itemType":"participant","label":"Agent","spectrumAxis":"accountability","position":2,"caption":"ODR-bounded · delegated","description":"Accountability is delegated and explicitly bounded by Organizational Decision Records (ODRs). No legal framework, no societal sanction mechanism. Without ODR-defined boundaries, Agent actions cannot be held accountable.","color":"teal"},{"id":"#L9-sc-human","type":"item","itemType":"participant","label":"Human","spectrumAxis":"accountability","position":3,"caption":"Legal · structural · always","description":"Carries accountability through law, socialization, and culture — mechanisms no machine brings and that cannot be delegated. Permanently at the rightmost position on this axis, independent of agent autonomy.","color":"purple"},{"id":"#L9-key-insight","type":"item","itemType":"keyInsight","label":"Key Insight","text":"Capabilities converge. Accountability does not. The human remains the legal and structural anchor — independent of agent autonomy."},{"id":"#L8","type":"container","containerType":"layer","label":"Situation Layer","description":"Context of decisions","children":["#L8-1","#L8-2","#L8-3","#L8-4","#L8-5","#L8-6","#L8-7","#L8-8","#L8-9","#L8-10"],"meta":{"order":8}},{"id":"#L8-1","type":"item","itemType":"situation","label":"Employee","properties":{"dimension":"who"}},{"id":"#L8-2","type":"item","itemType":"situation","label":"Event","properties":{"dimension":"trigger"}},{"id":"#L8-3","type":"item","itemType":"situation","label":"Time","properties":{"dimension":"time"}},{"id":"#L8-4","type":"item","itemType":"situation","label":"Place","properties":{"dimension":"place"}},{"id":"#L8-5","type":"item","itemType":"situation","label":"Domain","properties":{"dimension":"domain"}},{"id":"#L8-6","type":"item","itemType":"situation","label":"Task","properties":{"dimension":"task"}},{"id":"#L8-7","type":"item","itemType":"situation","label":"Preferences","properties":{"dimension":"preference"}},{"id":"#L8-8","type":"item","itemType":"situation","label":"Language","properties":{"dimension":"language"}},{"id":"#L8-9","type":"item","itemType":"situation","label":"Access","properties":{"dimension":"access"}},{"id":"#L8-10","type":"item","itemType":"situation","label":"Knowledge","properties":{"dimension":"knowledge"}},{"id":"#L7","type":"container","containerType":"layer","label":"Use Cases & Challenges","description":"Business motivation","children":["#L7-1","#L7-2","#L7-3","#L7-4","#L7-5","#L7-6"],"meta":{"order":7}},{"id":"#L7-1","type":"item","itemType":"usecase","label":"HR Process Consulting","properties":{"domain":"HR"}},{"id":"#L7-2","type":"item","itemType":"usecase","label":"Infrastructure Maintenance","properties":{"domain":"Operations"}},{"id":"#L7-3","type":"item","itemType":"usecase","label":"Software Development","properties":{"domain":"IT"}},{"id":"#L7-4","type":"item","itemType":"usecase","label":"System Documentation","properties":{"domain":"IT"}},{"id":"#L7-5","type":"item","itemType":"usecase","label":"Procurement Verification","properties":{"domain":"Procurement"}},{"id":"#L7-6","type":"item","itemType":"usecase","label":"24h Customer Support","properties":{"domain":"CX"}},{"id":"#L6","type":"container","containerType":"layer","label":"Solutions & Applications","description":"Interaction points","children":["#L6-1","#L6-2","#L6-3","#L6-4","#L6-5"],"badges":["badge-feedback"],"meta":{"order":6}},{"id":"#L6-1","type":"item","itemType":"solution","label":"Enterprise Search","icon":"🔍","properties":{"category":"search"}},{"id":"#L6-2","type":"item","itemType":"solution","label":"Knowledge Assistant","icon":"💬","properties":{"category":"assistant"}},{"id":"#L6-3","type":"item","itemType":"solution","label":"Maintenance Assistant","icon":"🔧","properties":{"category":"assistant"}},{"id":"#L6-4","type":"item","itemType":"solution","label":"Code Assistant","icon":"💻","properties":{"category":"assistant"}},{"id":"#L6-5","type":"item","itemType":"solution","label":"Analytics Tools","icon":"📊","properties":{"category":"analytics"}},{"id":"#L5","type":"container","containerType":"layer","label":"Cognitive Capabilities","description":"What the organization can do","children":["#L5-1","#L5-2","#L5-3","#L5-4","#L5-5","#L5-6","#L5-7","#L5-8","#L5-9","#L5-10"],"meta":{"order":5}},{"id":"#L5-1","type":"item","itemType":"capability","label":"Find Information","properties":{"cognitive_level":"find"}},{"id":"#L5-2","type":"item","itemType":"capability","label":"Evaluate Facts","properties":{"cognitive_level":"evaluate"}},{"id":"#L5-3","type":"item","itemType":"capability","label":"Structure Documents","properties":{"cognitive_level":"structure"}},{"id":"#L5-4","type":"item","itemType":"capability","label":"Link Knowledge","properties":{"cognitive_level":"link"}},{"id":"#L5-5","type":"item","itemType":"capability","label":"Generate Content","properties":{"cognitive_level":"generate"}},{"id":"#L5-6","type":"item","itemType":"capability","label":"Identify Patterns","properties":{"cognitive_level":"evaluate"}},{"id":"#L5-7","type":"item","itemType":"capability","label":"Detect Redundancies","properties":{"cognitive_level":"evaluate"}},{"id":"#L5-8","type":"item","itemType":"capability","label":"Create Reports","properties":{"cognitive_level":"generate"}},{"id":"#L5-9","type":"item","itemType":"capability","label":"Communicate Knowledge","properties":{"cognitive_level":"generate"}},{"id":"#L5-10","type":"item","itemType":"capability","label":"Deliver Information","properties":{"cognitive_level":"deliver"}},{"id":"#L4","type":"container","containerType":"layer","label":"Features & APIs","description":"Technical reusability","children":["#L4-1","#L4-2","#L4-3","#L4-4","#L4-5","#L4-6","#L4-7","#L4-8","#L4-9","#L4-10"],"meta":{"order":4}},{"id":"#L4-1","type":"item","itemType":"feature","label":"/search","properties":{"endpoint":"/search"}},{"id":"#L4-2","type":"item","itemType":"feature","label":"/classify","properties":{"endpoint":"/classify"}},{"id":"#L4-3","type":"item","itemType":"feature","label":"/summarize","properties":{"endpoint":"/summarize"}},{"id":"#L4-4","type":"item","itemType":"feature","label":"/link","properties":{"endpoint":"/link"}},{"id":"#L4-5","type":"item","itemType":"feature","label":"/remember","properties":{"endpoint":"/remember"}},{"id":"#L4-6","type":"item","itemType":"feature","label":"/chat","properties":{"endpoint":"/chat"}},{"id":"#L4-7","type":"item","itemType":"feature","label":"/transform","properties":{"endpoint":"/transform"}},{"id":"#L4-8","type":"item","itemType":"feature","label":"/create","properties":{"endpoint":"/create"}},{"id":"#L4-9","type":"item","itemType":"feature","label":"/analyze","properties":{"endpoint":"/analyze"}},{"id":"#L4-10","type":"item","itemType":"feature","label":"/calc","properties":{"endpoint":"/calc"}},{"id":"#L3","type":"container","containerType":"layer","label":"Organizational Knowledge Core","description":"Organizational memory","children":["#L3-semantic","#L3-index","#L3-graph","#L3-access"],"badges":["badge-feedback"],"meta":{"order":3,"highlighted":true}},{"id":"#L3-semantic","type":"container","containerType":"box","label":"Semantic Layer","children":["#L3-s1","#L3-s2","#L3-s3"]},{"id":"#L3-s1","type":"item","itemType":"concept","label":"Ontologies"},{"id":"#L3-s2","type":"item","itemType":"concept","label":"Taxonomies"},{"id":"#L3-s3","type":"item","itemType":"concept","label":"Entities"},{"id":"#L3-index","type":"container","containerType":"box","label":"Index & Search","children":["#L3-i1","#L3-i2","#L3-i3"]},{"id":"#L3-i1","type":"item","itemType":"concept","label":"Full-Text Index"},{"id":"#L3-i2","type":"item","itemType":"concept","label":"Vector Index"},{"id":"#L3-i3","type":"item","itemType":"concept","label":"Metadata Index"},{"id":"#L3-graph","type":"container","containerType":"box","label":"Knowledge Graph","children":["#L3-g1","#L3-g2","#L3-g3"]},{"id":"#L3-g1","type":"item","itemType":"concept","label":"Relations"},{"id":"#L3-g2","type":"item","itemType":"concept","label":"Context Links"},{"id":"#L3-g3","type":"item","itemType":"concept","label":"Entity Graph"},{"id":"#L3-access","type":"container","containerType":"box","label":"Security & Access","children":["#L3-a1","#L3-a2","#L3-a3"]},{"id":"#L3-a1","type":"item","itemType":"concept","label":"Access Control"},{"id":"#L3-a2","type":"item","itemType":"concept","label":"API Gateway"},{"id":"#L3-a3","type":"item","itemType":"concept","label":"Governance"},{"id":"#L2","type":"container","containerType":"layer","label":"AI & Cognitive Infrastructure","description":"Technology foundation","children":["#L2-1","#L2-2","#L2-3","#L2-4","#L2-5","#L2-6","#L2-7","#L2-8"],"meta":{"order":2}},{"id":"#L2-1","type":"item","itemType":"infrastructure","label":"Large Language Models","properties":{"tech_type":"llm"}},{"id":"#L2-2","type":"item","itemType":"infrastructure","label":"Machine Learning","properties":{"tech_type":"ml"}},{"id":"#L2-3","type":"item","itemType":"infrastructure","label":"Deep Learning","properties":{"tech_type":"ml"}},{"id":"#L2-4","type":"item","itemType":"infrastructure","label":"NLP","properties":{"tech_type":"nlp"}},{"id":"#L2-5","type":"item","itemType":"infrastructure","label":"Vector Indexes","properties":{"tech_type":"vector-index"}},{"id":"#L2-6","type":"item","itemType":"infrastructure","label":"Graph Databases","properties":{"tech_type":"graph-db"}},{"id":"#L2-7","type":"item","itemType":"infrastructure","label":"Computer Vision","properties":{"tech_type":"cv"}},{"id":"#L2-8","type":"item","itemType":"infrastructure","label":"RPA","properties":{"tech_type":"rpa"}},{"id":"#L1b","type":"container","containerType":"pipeline","label":"Data Processing Pipeline","description":"Raw data → usable knowledge","children":["#L1b-1","#L1b-2","#L1b-3","#L1b-4","#L1b-5"],"meta":{"order":1.5}},{"id":"#L1b-1","type":"item","itemType":"processingstep","label":"Data Ingestion","icon":"📥","properties":{"order":1}},{"id":"#L1b-2","type":"item","itemType":"processingstep","label":"Processing","icon":"⚙️","properties":{"order":2}},{"id":"#L1b-3","type":"item","itemType":"processingstep","label":"Cleansing","icon":"🧹","properties":{"order":3}},{"id":"#L1b-4","type":"item","itemType":"processingstep","label":"Validation","icon":"✅","properties":{"order":4}},{"id":"#L1b-5","type":"item","itemType":"processingstep","label":"Information & Knowledge","icon":"💡","properties":{"order":5,"variant":"output"}},{"id":"#L1","type":"container","containerType":"layer","label":"Data Sources","description":"Organizational raw data","children":["#L1-1","#L1-2","#L1-3","#L1-4","#L1-5","#L1-6","#L1-7","#L1-8","#L1-9","#L1-10"],"meta":{"order":1}},{"id":"#L1-1","type":"item","itemType":"datasource","label":"Persons","icon":"👤","properties":{"source_type":"internal"}},{"id":"#L1-2","type":"item","itemType":"datasource","label":"Organizations","icon":"🏢","properties":{"source_type":"internal"}},{"id":"#L1-3","type":"item","itemType":"datasource","label":"Locations","icon":"📍","properties":{"source_type":"internal"}},{"id":"#L1-4","type":"item","itemType":"datasource","label":"Customers","icon":"👥","properties":{"source_type":"internal"}},{"id":"#L1-5","type":"item","itemType":"datasource","label":"Materials","icon":"📦","properties":{"source_type":"internal"}},{"id":"#L1-6","type":"item","itemType":"datasource","label":"Projects","icon":"📁","properties":{"source_type":"internal"}},{"id":"#L1-7","type":"item","itemType":"datasource","label":"News & Media","icon":"📰","properties":{"source_type":"external"}},{"id":"#L1-8","type":"item","itemType":"datasource","label":"Rules & Policies","icon":"📜","properties":{"source_type":"internal"}},{"id":"#L1-9","type":"item","itemType":"datasource","label":"Logs","icon":"🗒️","properties":{"source_type":"transactional"}},{"id":"#L1-10","type":"item","itemType":"datasource","label":"Systems","icon":"🖥️","properties":{"source_type":"internal"}},{"id":"#panel-right","type":"container","containerType":"panel","label":"Data Sources & Processing","children":["#D1","#D2","#D3","#D4","#D5"],"meta":{"variant":"right"}},{"id":"#D1","type":"container","containerType":"box","label":"People & Docs","children":["#D1-1","#D1-2","#D1-3"]},{"id":"#D1-1","type":"item","itemType":"datasource","label":"Employee Profiles"},{"id":"#D1-2","type":"item","itemType":"datasource","label":"Expert Documents"},{"id":"#D1-3","type":"item","itemType":"datasource","label":"Manuals & Guides"},{"id":"#D2","type":"container","containerType":"box","label":"Transactions & Logs","children":["#D2-1","#D2-2","#D2-3"]},{"id":"#D2-1","type":"item","itemType":"datasource","label":"System Events"},{"id":"#D2-2","type":"item","itemType":"datasource","label":"Process Logs"},{"id":"#D2-3","type":"item","itemType":"datasource","label":"Transactions"},{"id":"#D3","type":"container","containerType":"box","label":"Projects & Tasks","children":["#D3-1","#D3-2","#D3-3"]},{"id":"#D3-1","type":"item","itemType":"datasource","label":"Project Repositories"},{"id":"#D3-2","type":"item","itemType":"datasource","label":"Tickets & Issues"},{"id":"#D3-3","type":"item","itemType":"datasource","label":"Delivery Artifacts"},{"id":"#D4","type":"container","containerType":"box","label":"External Sources","children":["#D4-1","#D4-2","#D4-3"]},{"id":"#D4-1","type":"item","itemType":"datasource","label":"Web & News"},{"id":"#D4-2","type":"item","itemType":"datasource","label":"Partner Data"},{"id":"#D4-3","type":"item","itemType":"datasource","label":"Regulatory Content"},{"id":"#D5","type":"container","containerType":"box","label":"Quality Gates","children":["#D5-1","#D5-2","#D5-3","#D5-4"],"meta":{"variant":"highlight"}},{"id":"#D5-1","type":"item","itemType":"concept","label":"Schema Validation"},{"id":"#D5-2","type":"item","itemType":"concept","label":"Deduplication"},{"id":"#D5-3","type":"item","itemType":"concept","label":"Enrichment"},{"id":"#D5-4","type":"item","itemType":"concept","label":"Versioning"}]`),N=[{id:"conn-triad-1",from:"#L9-t-initiator",to:"#L9-t-actor",connectionType:"generic",direction:"forward",edgeType:"defines frame for"},{id:"conn-triad-2",from:"#L9-t-actor",to:"#L9-t-beneficiary",connectionType:"generic",direction:"forward",edgeType:"creates value for"},{id:"conn-fb-1",from:"#L6",to:"#L3",connectionType:"feedback",label:"Applications → Knowledge Core",direction:"backward"},{id:"conn-fb-2",from:"#L9",to:"#L3",connectionType:"feedback",label:"System Participants → Knowledge Core",direction:"backward"},{id:"conn-flow-1",from:"#L1",to:"#L1b",connectionType:"flow",direction:"forward"},{id:"conn-flow-2",from:"#L1b",to:"#L3",connectionType:"flow",direction:"forward"},{id:"conn-fb-4",from:"#L10",to:"#L3",connectionType:"feedback",label:"Outcomes → Knowledge Core",direction:"backward"}],j=[{id:"badge-feedback",icon:"↻",label:"Feedback Loop",description:"This element participates in a feedback loop. Actors, systems or processes return information that continuously improves organizational knowledge and capabilities. Details to be defined in a separate process view."}],H=[{id:"view-overview",type:"overview",label:"OIA Overview",include:["all"]}],K={show:!0,position:"bottom"},B={meta:R,elements:M,connections:N,badges:j,views:H,legend:K},V=B;function l(e,i){return e.elements.find(t=>t.id===i)}function $(e,i){return!i||i.length===0?"":i.map(t=>{const a=e.badges.find(n=>n.id===t);return a?`<span class="badge-icon" title="${a.label}: ${a.description}">${a.icon}</span>`:""}).join("")}function G(e,i){return i.children.map(t=>{const a=l(e,t);return a?`<span class="sit-item">${a.label}</span>`:""}).join("")}function W(e,i){return i.children.map(t=>{const a=l(e,t);return a?`<span class="usecase-item"><span class="usecase-dot"></span>${a.label}</span>`:""}).join("")}function U(e,i){return i.children.map(t=>{const a=l(e,t);return a?`<span class="cap-item"><span class="cap-dot"></span>${a.label}</span>`:""}).join("")}function F(e,i){return i.children.map(t=>{const a=l(e,t);return a?`<span class="tag mono accent2">${a.label}</span>`:""}).join("")}function q(e,i){return i.children.map(t=>{const a=l(e,t);return a?`<span class="tag"><span class="dot"></span>${a.label}</span>`:""}).join("")}function Y(e,i){return i.children.map(t=>{const a=l(e,t);return a?`<div class="data-item"><span class="data-icon">${a.icon||""}</span>${a.label}</div>`:""}).join("")}function Z(e,i){return i.children.map(t=>{const a=l(e,t);return a?`<div class="sol-item"><span class="sol-icon">${a.icon||""}</span>${a.label}</div>`:""}).join("")}function Q(e,i){return`<div class="core-inner">${i.children.map(a=>{const n=l(e,a);if(!n||n.type!=="container")return"";const s=n.children.map(o=>{const r=l(e,o);return r?r.label:""}).join("<br>");return`<div class="core-block" data-id="${n.id}">
      <div class="core-block-title">${n.label}</div>
      <div class="core-block-items">${s}</div>
    </div>`}).join("")}</div>`}function D(e,i){return`<div class="pipeline-row">${i.children.map((a,n,s)=>{const o=l(e,a);if(!o)return"";const r=n===s.length-1,d=o.properties?.variant==="output"?" pipeline-step--output":"",g=r?"":'<div class="pipeline-arrow">→</div>';return`<div class="pipeline-step${d}">${o.icon||""}<br>${o.label}</div>${g}`}).join("")}</div>`}function J(e,i){return i.children.map(t=>{const a=l(e,t);if(!a)return"";const n=Array.isArray(a.properties?.outcome_category)?a.properties.outcome_category.join(" · "):a.properties?.outcome_category||"";return`<div class="outcome-item">
      <span class="outcome-label">${a.label}</span>
      ${n?`<span class="outcome-categories">${n}</span>`:""}
    </div>`}).join("")}const x={purple:"sp-color--purple",teal:"sp-color--teal",amber:"sp-color--amber",gray:"sp-color--gray"},X={initiator:"ACCOUNTABLE · CONSTITUTIVE",actor:"RESPONSIBLE · OPERATIVE",beneficiary:"PURPOSIVE · RECEPTIVE"},ee={initiator:["Human","Organization"],actor:["Human","Agent","System"],beneficiary:["Human","Team","System"]},ie={initiator:"Sets governance & goals. Defines what actors may do.",actor:"Primary interaction layer. Engages capabilities, features & knowledge core.",beneficiary:"Receives output. Feedback flows back into the architecture."},te="OIA is actor-centric — governance flows in from the left, value flows out to the right";function z(e,i){const t=l(e,i);if(!t||t.type!=="container")return"";const a=[];return t.children.forEach((n,s)=>{const o=l(e,n);if(!o)return;if(s>0){const y=t.children[s-1],I=e.connections.find(k=>k.from===y&&k.to===n),P=I?.edgeType?` title="${I.edgeType}"`:"";a.push(`<div class="sp-triad__arrow"${P}>→</div>`)}const r=x[o.color??""]??"",p=o.weight==="primary"?"sp-triad__item--primary":o.weight==="secondary"?"sp-triad__item--secondary":"",d=o.primary?' title="Primary interaction entity"':"",g=o.primary?`${o.label} ★`:o.label,_=o.role?X[o.role]??"":"",c=o.role?(ee[o.role]??[]).map(y=>`<span class="sp-triad__tag">${y}</span>`).join(""):"",v=o.role?ie[o.role]??"":"";a.push(`<div class="sp-triad__item ${r} ${p}" data-id="${o.id}"${d}>
      <span class="sp-triad__label">${g}</span>
      ${_?`<span class="sp-triad__raci">${_}</span>`:""}
      ${c?`<div class="sp-triad__tags">${c}</div>`:""}
      ${v?`<span class="sp-triad__desc">${v}</span>`:""}
    </div>`)}),`<div class="sp-triad">${a.join("")}</div>`}function A(e,i){const t=l(e,i);if(!t||t.type!=="container")return"";const a=t.children.map(r=>l(e,r)),n=a.some(r=>r?.converging),s=a.map(r=>{if(!r)return"";const p=x[r.color??""]??"",d=r.converging?" sp-spectrum__entity--converging":"";return`<div class="sp-spectrum__entity ${p}${d}" data-id="${r.id}">
        <span class="sp-spectrum__entity-label">${r.label}</span>
        ${r.caption??r.description?`<span class="sp-spectrum__entity-desc">${r.caption??r.description}</span>`:""}
      </div>`}).join(""),o=n?'<div class="sp-spectrum__converging-overlay"><span class="sp-spectrum__converging-text">↔ capabilities converging</span></div>':"";return`<div class="sp-spectrum">
    <div class="sp-spectrum__header">
      <span class="sp-spectrum__title">${t.label}</span>
    </div>
    <div class="sp-spectrum__axis-row">
      <span class="sp-spectrum__range-label">less</span>
      <div class="sp-spectrum__axis-line"></div>
      <span class="sp-spectrum__range-label">more →</span>
    </div>
    <div class="sp-spectrum__entities${n?" sp-spectrum__entities--converging":""}">
      ${s}
      ${o}
    </div>
  </div>`}function ae(e,i){const t=l(e,i);if(!t||t.itemType!=="keyInsight")return"";const a=t.text??t.label,n=a.indexOf(". The human"),s=n>=0?a.slice(0,n+1):a,o=n>=0?a.slice(n+2):"";return`<div class="sp-insight" data-id="${t.id}">
    <p class="sp-insight__primary">${s}</p>
    ${o?`<p class="sp-insight__secondary">${o}</p>`:""}
  </div>`}function ne(e,i){const[t]=i.children;return`<div class="sp-layer">
    ${z(e,t)}
  </div>`}function se(e,i){const[t,a,n,s]=i.children;return`<div class="sp-layer">
    ${z(e,t)}
    <div class="sp-centric-stmt">${te}</div>
    ${A(e,a)}
    ${A(e,n)}
    ${ae(e,s)}
  </div>`}const oe={"#L9":(e,i)=>ne(e,i),"#L8":(e,i)=>`<div class="sit-grid">${G(e,i)}</div>`,"#L7":(e,i)=>`<div class="usecase-grid">${W(e,i)}</div>`,"#L6":(e,i)=>`<div class="sol-grid">${Z(e,i)}</div>`,"#L5":(e,i)=>`<div class="cap-grid">${U(e,i)}</div>`,"#L4":(e,i)=>`<div class="tag-row">${F(e,i)}</div>`,"#L2":(e,i)=>`<div class="tag-row">${q(e,i)}</div>`,"#L10":(e,i)=>`<div class="outcome-grid">${J(e,i)}</div>`,"#L1b":D,"#L1":(e,i)=>`<div class="data-grid">${Y(e,i)}</div>`};function re(e,i){const t=i.meta?.highlighted===!0,a=i.containerType==="pipeline",n=document.createElement("div");if(n.dataset.id=i.id,t){n.className="layer-core";const p=i.id.replace("#","");return n.innerHTML=`
      <div class="layer-header">
        <span class="layer-num layer-num--core">${p}</span>
        <span class="layer-title">${i.label}</span>
        <span class="core-badge">CENTRAL COMPONENT</span>
        <span class="layer-desc layer-desc--core">${i.description||""}</span>
        ${$(e,i.badges)}
      </div>
      ${Q(e,i)}
    `,n}n.className="layer";const s=i.id.replace("#",""),o=oe[i.id]??(a?D:null),r=o?o(e,i):"";return n.innerHTML=`
    <div class="layer-header">
      <span class="layer-num">${s}</span>
      <span class="layer-title">${i.label}</span>
      <span class="layer-desc">${i.description||""}</span>
      ${$(e,i.badges)}
    </div>
    ${r}
  `,n}function ce(e,i){return i.map(t=>{const a=l(e,t);if(!a)return"";if(a.type==="item")return`<div class="side-item">${a.label}</div>`;if(a.type==="container"){const n=a.meta?.variant==="highlight",s=n?" side-block--highlight":"",o=n?" side-item--highlight":"",r=a.children.map(p=>{const d=l(e,p);return d?`<div class="side-item${o}">${d.label}</div>`:""}).join("");return`<div class="side-block${s}" data-id="${a.id}">
  <div class="side-block-title">${a.label}</div>
  ${r}
</div>`}return""}).join(`
`)}function C(e,i){const t=document.createElement("div");return t.className="side-panel"+(i.meta?.variant==="right"?" right-panel":""),t.innerHTML=`
    <div class="side-label">${i.label}</div>
    ${ce(e,i.children)}
  `,t}function le(e){const i=document.createElement("div");i.className="diagram-wrapper";const t=document.createElement("div");t.className="mobile-notice",t.textContent="Best viewed on desktop — pinch to zoom or rotate to landscape",i.appendChild(t);const a=document.createElement("div");a.className="header",a.innerHTML=`
    <div class="header-badge">Reference Architecture · V${e.meta.version} · ${e.meta.created}</div>
    <h1>Organizational <span>Intelligence</span> Architecture</h1>
    <p>${e.meta.subtitle}</p>
    <div class="header-line"></div>
  `,i.appendChild(a);const n=document.createElement("div");n.className="main-grid";const s=l(e,"#panel-left");s&&n.appendChild(C(e,s));const o=document.createElement("div");o.className="center-col";const r=e.elements.filter(c=>c.type==="container"&&c.containerType==="layer").map(c=>c).sort((c,v)=>(v.meta?.order??0)-(c.meta?.order??0)),p=e.elements.filter(c=>c.type==="container"&&c.containerType==="pipeline").map(c=>c),d=[...r,...p].sort((c,v)=>(v.meta?.order??0)-(c.meta?.order??0));for(const c of d)o.appendChild(re(e,c));n.appendChild(o);const g=l(e,"#panel-right");if(g&&n.appendChild(C(e,g)),i.appendChild(n),e.legend.show&&e.badges.length>0){const c=document.createElement("div");c.className="legend";const v=e.badges.map(y=>`
      <div class="legend-item">
        <span class="legend-icon">${y.icon}</span>
        <div class="legend-text">
          <span class="legend-label">${y.label}</span>
          <span class="legend-desc">${y.description}</span>
        </div>
      </div>
    `).join("");c.innerHTML=`<div class="legend-title">Legend</div><div class="legend-items">${v}</div>`,i.appendChild(c)}const _=document.createElement("div");return _.className="footer",_.textContent=`OIA · Organizational Intelligence Architecture · V${e.meta.version} · © ${e.meta.created} · ${e.meta.subtitle}`,i.appendChild(_),i}function E(e,i){return e.elements.find(t=>t.type==="container"&&t.children.includes(i))}function pe(e,i){const t=[];let a=i;for(;;){const n=E(e,a);if(!n)break;t.unshift(n),a=n.id}return t}function de(e,i){const t=pe(e,i),a=e.elements.find(s=>s.id===i),n=['<a class="detail-breadcrumb__item" href="#/">OIA</a>'];return t.forEach(s=>{n.push(`<span class="detail-breadcrumb__sep">›</span><a class="detail-breadcrumb__item" href="#/detail/${encodeURIComponent(s.id)}">${s.label}</a>`)}),a&&n.push(`<span class="detail-breadcrumb__sep">›</span><span class="detail-breadcrumb__item detail-breadcrumb__item--current">${a.label}</span>`),`<nav class="detail-breadcrumb">${n.join("")}</nav>`}function me(e,i){const t=E(e,i);if(!t)return"";const a=t.children.filter(s=>s!==i);return a.length===0?"":`<div class="detail-related"><span class="detail-related__label">Related:</span>${a.map(s=>{const o=e.elements.find(r=>r.id===s);return o?`<a class="detail-related__item" href="#/detail/${encodeURIComponent(s)}">${o.label}</a>`:""}).filter(Boolean).join("")}</div>`}function ue(e,i){if(!i.role)return"";const t=e.connections.filter(s=>s.from===i.id&&s.edgeType),a=e.connections.filter(s=>s.to===i.id&&s.edgeType);if(t.length===0&&a.length===0)return"";const n=[];return a.forEach(s=>{const o=e.elements.find(r=>r.id===s.from);o&&n.push(`<div class="detail-flow__row"><a class="detail-flow__node" href="#/detail/${encodeURIComponent(o.id)}">${o.label}</a><span class="detail-flow__edge">${s.edgeType}</span><span class="detail-flow__node detail-flow__node--current">${i.label}</span></div>`)}),t.forEach(s=>{const o=e.elements.find(r=>r.id===s.to);o&&n.push(`<div class="detail-flow__row"><span class="detail-flow__node detail-flow__node--current">${i.label}</span><span class="detail-flow__edge">${s.edgeType}</span><a class="detail-flow__node" href="#/detail/${encodeURIComponent(o.id)}">${o.label}</a></div>`)}),`<div class="detail-flow"><div class="detail-flow__label">Governance flow</div>${n.join("")}</div>`}function S(e,i,t=0){return t>3?"":i.map(a=>{const n=e.elements.find(o=>o.id===a);if(!n)return"";const s=t>0?` style="margin-left:${t*16}px"`:"";if(n.type==="container"){const o=n.children.length>0?`<div class="detail-children">${S(e,n.children,t+1)}</div>`:"";return`<div class="detail-item"${s}>
        <span class="detail-item-label">${n.label}</span>
        <span class="detail-item__meta">${n.containerType}</span>
        ${o}
      </div>`}return`<div class="detail-item"${s}>
      <span class="detail-item-label">${n.icon?n.icon+" ":""}${n.label}</span>
      <span class="detail-item__meta">${n.itemType}</span>
    </div>`}).join("")}function ge(e,i){const t=e.elements.find(g=>g.id===i),a=document.createElement("div");if(a.className="detail-view",!t)return a.innerHTML=`
      <a class="detail-back" href="#/">← Back</a>
      <div class="detail-title">Element not found: ${i}</div>
    `,a;const n=t.type==="container"?t.children:[],s=t.description||"",o=de(e,i),r=me(e,i);if(t.id==="#L9"&&t.type==="container")return a.innerHTML=`
      ${o}
      <div class="detail-id">${t.id}</div>
      <div class="detail-title">${t.label}</div>
      ${s?`<div class="detail-desc">${s}</div>`:""}
      ${se(e,t)}
      ${r}
    `,a;const p=t.type==="item"&&t.itemType==="participant"?ue(e,t):"",d=n.length>0?`<div class="detail-items">${S(e,n)}</div>`:s?"":'<div class="detail-items"><div class="detail-item detail-item--empty">No sub-elements</div></div>';return a.innerHTML=`
    ${o}
    <div class="detail-id">${t.id}</div>
    <div class="detail-title">${t.label}</div>
    ${s?`<div class="detail-desc">${s}</div>`:""}
    ${p}
    ${d}
    ${r}
  `,a}function ve(){const e=document.createElement("div");return e.className="page-view",e.innerHTML=`
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
          Version <strong>0.2.0</strong> is intentionally early.<br>
          The architecture will evolve through real implementations, experiments and operational feedback.
        </p>
        <p>Not through theory alone.</p>
      </div>

      <section class="page-view__section">
        <h2 class="page-view__section-title">An Open Architecture of Participation</h2>
        <p class="page-view__body page-view__body--spaced">
          OIA is designed as a <strong>shared architectural thinking model</strong>.
        </p>
        <p class="page-view__body page-view__body--spaced">
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
        <p class="page-view__body page-view__body--spaced">
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
        <p class="page-view__body page-view__body--footnote">
          Real systems create real learning.<br>
          That learning improves the architecture.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">From Reference Model to Real Systems</h2>
        <p class="page-view__body page-view__body--spaced">
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
        <p class="page-view__body page-view__body--footnote">
          This evolution can only happen through <strong>shared practice</strong>.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Join the Work</h2>
        <p class="page-view__body page-view__body--spaced">
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
        <p class="page-view__body page-view__manifesto page-view__manifesto--top-spaced">
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
  `,e}function ye(){const e=document.createElement("div");return e.className="page-view",e.innerHTML=`
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
          It is a <strong>working model</strong> — version <strong>0.2.0</strong>, intentionally early.
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
        <p class="page-view__body page-view__body--spaced">
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
        <p class="page-view__body page-view__body--footnote">
          <a class="page-view__link" href="https://github.com/ruKurz/oi-architecture/issues" target="_blank" rel="noopener">A comment on an issue is a contribution.</a><br>
          <a class="page-view__link" href="https://www.linkedin.com/feed/update/urn:li:activity:7434972082561687552/" target="_blank" rel="noopener">A conversation that improves a concept is a contribution.</a>
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Ready to start?</h2>
        <div class="page-view__badge">First Contribution ≈ 20 minutes</div>
        <a class="page-view__contributing-cta" href="https://github.com/ruKurz/oi-architecture/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">
          <span class="page-view__contributing-cta-label">Read the full contribution guide</span>
          <span class="page-view__contributing-cta-file">CONTRIBUTING.md →</span>
        </a>
        <div class="page-view__join-steps page-view__join-steps--top-gap">
          <div class="page-view__join-step">
            <span class="page-view__step-num">01</span>
            <div>
              <strong>Read the contribution guide</strong><br>
              <a class="page-view__link" href="https://github.com/ruKurz/oi-architecture/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">CONTRIBUTING.md</a>
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
        <p class="page-view__body page-view__body--spaced">
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
        <p class="page-view__body page-view__manifesto page-view__manifesto--top-spaced">
          <strong>Architecture grows from practice.</strong><br>
          Failure is data. Share it.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Start the Conversation</h2>
        <p class="page-view__body page-view__body--spaced">
          If you are building systems where <strong>knowledge must become action</strong>,<br>
          your experience belongs in this architecture.
        </p>
        <p class="page-view__body page-view__body--spaced-lg">
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
  `,e}function _e(){const e=document.createElement("div");return e.className="page-view",e.innerHTML=`
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

      <div class="page-view__audience page-view__audience--section-gap">
        <span class="page-view__audience-item">enterprise search</span>
        <span class="page-view__audience-item">knowledge systems</span>
        <span class="page-view__audience-item">AI-supported information architectures</span>
        <span class="page-view__audience-item">large organizational information landscapes</span>
      </div>

      <p class="page-view__body page-view__manifesto page-view__manifesto--flow-bottom">
        Across different projects one question kept coming back:<br><br>
        <strong>How can organizations turn their knowledge into coordinated action?</strong><br><br>
        Not occasionally — but systematically.
      </p>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Where the idea for OIA comes from</h2>
        <p class="page-view__body page-view__body--spaced-sm">
          In many organizations the situation looks similar.
        </p>
        <p class="page-view__body page-view__body--spaced-sm">
          Information exists everywhere — documents, systems, teams, expert knowledge in people's heads.
          Technology keeps improving. Yet decisions are still often made by <strong>manually piecing
          information together</strong>.
        </p>
        <p class="page-view__body page-view__body--spaced-sm">
          The issue is rarely missing data.<br>
          More often it is <strong>missing architecture</strong>.
        </p>
        <p class="page-view__body page-view__body--spaced">
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
        <p class="page-view__body page-view__body--footnote">
          OIA started as an attempt to describe this architecture.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Practice before theory</h2>
        <p class="page-view__body page-view__body--spaced-sm">
          The ideas behind OIA did not start as a framework.
        </p>
        <p class="page-view__body page-view__body--spaced-sm">
          They emerged from practical work on:
        </p>
        <div class="page-view__card page-view__card--spaced">
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
        <p class="page-view__body page-view__body--spaced-sm">
          OIA is published as an open project because this problem is not specific to a single company.
        </p>
        <p class="page-view__body page-view__body--spaced-sm">
          Many organizations are currently trying to understand:
        </p>
        <div class="page-view__card page-view__card--spaced">
          <ul class="page-view__card-list">
            <li>how AI fits into existing information systems</li>
            <li>how organizational knowledge can be structured</li>
            <li>how humans and AI collaborate around knowledge</li>
          </ul>
        </div>
        <p class="page-view__body page-view__body--note">
          No single team will solve this alone.<br>
          The architecture will improve through shared experience.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">About this site</h2>
        <p class="page-view__body page-view__body--spaced-sm">
          This site hosts the evolving <strong>Organizational Intelligence Architecture (OIA)</strong> model.
        </p>
        <p class="page-view__body page-view__body--spaced-sm">
          The goal is to develop:
        </p>
        <div class="page-view__card page-view__card--spaced">
          <ul class="page-view__card-list">
            <li>a conceptual architecture</li>
            <li>practical patterns</li>
            <li>and eventually reference implementations</li>
          </ul>
        </div>
        <p class="page-view__body page-view__body--note">
          for organizations that want to turn knowledge into action.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Contact</h2>
        <p class="page-view__body page-view__body--spaced-xs">
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
  `,e}function be(){const e=document.createElement("div");return e.className="page-view",e.innerHTML=`
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
          <span class="page-view__legal-ref">§ 55 Abs. 2 RStV</span>
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Lizenz</h2>
        <p class="page-view__body page-view__body--spaced-sm">
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
        <p class="page-view__body page-view__body--caption">
          CC BY 4.0: Weitergabe und Bearbeitung erlaubt, solange der Urheber (Rüdiger Kurz)
          und die Quelle (<a class="page-view__link" href="https://github.com/ruKurz/oi-architecture" target="_blank" rel="noopener">github.com/ruKurz/oi-architecture</a>) genannt werden.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Datenschutz</h2>
        <p class="page-view__body page-view__body--muted">
          Diese Seite verwendet keine Cookies, kein Tracking und keine Analyse-Werkzeuge.
          Es werden keine personenbezogenen Daten erhoben oder gespeichert.<br>
          Hosting: GitHub Pages.
          <a class="page-view__link" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub Privacy Statement →</a>
        </p>
      </section>

    </div>
  `,e}const he=[{href:"#/",label:"OIA",route:"/"},{href:"#/motivation",label:"Motivation",route:"/motivation"},{href:"#/contribute",label:"Contribute",route:"/contribute"},{href:"#/about",label:"About",route:"/about"},{href:"#/legal",label:"Legal Notice",route:"/legal"}];function we(e){return e.startsWith("#/motivation")?"/motivation":e.startsWith("#/contribute")?"/contribute":e.startsWith("#/about")?"/about":e.startsWith("#/legal")?"/legal":"/"}function fe(e){const i=we(window.location.hash||"#/");e.innerHTML=`
    <div class="site-nav__inner">
      <a class="site-nav__brand" href="#/">OIA</a>
      <ul class="site-nav__links">
        ${he.map(t=>`
          <li>
            <a
              class="site-nav__link${i===t.route?" site-nav__link--active":""}"
              href="${t.href}"
            >${t.label}</a>
          </li>`).join("")}
      </ul>
      <a class="site-nav__github" href="https://github.com/ruKurz/oi-architecture" target="_blank" rel="noopener" aria-label="GitHub Repository">
        <svg class="site-nav__github-icon" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </a>
    </div>
  `}const Le=.75,L=.4,O=1,h=.05,Te=.55,Ie=.75;let T,m,w=null;const ke=1440;function $e(){return Math.max(L,Math.min(Le,window.innerWidth/ke))}let u=$e();function f(e){u=e;const i=m.querySelector(".diagram-wrapper");if(i){i.style.transform=`scale(${u})`;const n=u<Te?"zoom-far":u<Ie?"zoom-mid":"zoom-full";i.classList.remove("zoom-far","zoom-mid","zoom-full"),i.classList.add(n)}const t=m.querySelector(".zoom-label");t&&(t.textContent=Math.round(u*100)+"%");const a=m.querySelector(".zoom-slider");a&&(a.value=String(u*100))}function Ae(){m.querySelectorAll("[data-id]").forEach(e=>{e.addEventListener("click",i=>{i.stopPropagation();const t=e.dataset.id;t&&(window.location.hash=`#/detail/${t}`)})})}function Ce(){m.innerHTML="";const e=le(T);m.appendChild(e),f(u),Ae();const i=document.createElement("div");i.className="zoom-controls",i.innerHTML=`
    <span class="zoom-controls__label">Zoom</span>
    <input class="zoom-slider" type="range" min="${L*100}" max="${O*100}" value="${Math.round(u*100)}" step="${h*100}">
    <span class="zoom-label">${Math.round(u*100)}%</span>
  `,m.appendChild(i);const t=i.querySelector(".zoom-slider");t.addEventListener("input",()=>f(Number(t.value)/100)),i.addEventListener("wheel",a=>{a.preventDefault();const n=a.deltaY<0?h:-h;f(Math.min(O,Math.max(L,u+n)))})}function Oe(e){m.innerHTML="",m.appendChild(ge(T,e))}function b(e){m.innerHTML="",m.appendChild(e)}function De(e,i){T=e,m=i,w=document.getElementById("site-nav");const t=document.querySelector(".github-fab"),a=()=>{const n=window.location.hash||"#/";w&&fe(w);const s=n==="#/motivation"||n==="#/contribute"||n==="#/about"||n==="#/legal";t&&(t.style.display=s?"":"none"),n.startsWith("#/detail/")?Oe(decodeURIComponent(n.replace("#/detail/",""))):n==="#/motivation"?b(ve()):n==="#/contribute"?b(ye()):n==="#/about"?b(_e()):n==="#/legal"?b(be()):Ce()};window.addEventListener("hashchange",a),a()}const xe=document.getElementById("app");De(V,xe);
