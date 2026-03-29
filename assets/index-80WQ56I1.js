(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={meta:{version:`0.3.0`,title:`Organizational Intelligence Architecture`,subtitle:`How organizations turn knowledge into action`,created:`2026`},elements:[{id:`#panel-left`,type:`container`,containerType:`panel`,label:`System Development & Interaction`,children:[`#I1`,`#I2`,`#I3`,`#I4`],meta:{variant:`left`}},{id:`#I1`,type:`container`,containerType:`box`,label:`User Interaction`,children:[`#I1-1`,`#I1-2`,`#I1-3`,`#I1-4`]},{id:`#I1-1`,type:`item`,itemType:`concept`,label:`Login & Authentication`},{id:`#I1-2`,type:`item`,itemType:`concept`,label:`User Profile`},{id:`#I1-3`,type:`item`,itemType:`concept`,label:`Click-Through`},{id:`#I1-4`,type:`item`,itemType:`concept`,label:`Input / Output`},{id:`#I2`,type:`container`,containerType:`box`,label:`Context Understanding`,children:[`#I2-1`,`#I2-2`,`#I2-3`,`#I2-4`]},{id:`#I2-1`,type:`item`,itemType:`concept`,label:`Intent Detection`},{id:`#I2-2`,type:`item`,itemType:`concept`,label:`Preference Detection`},{id:`#I2-3`,type:`item`,itemType:`concept`,label:`Context Analysis`},{id:`#I2-4`,type:`item`,itemType:`concept`,label:`Context Enrichment`},{id:`#I3`,type:`container`,containerType:`box`,label:`Feature Orchestration`,children:[`#I3-1`,`#I3-2`,`#I3-3`,`#I3-4`]},{id:`#I3-1`,type:`item`,itemType:`concept`,label:`Pipelines`},{id:`#I3-2`,type:`item`,itemType:`concept`,label:`Workflows`},{id:`#I3-3`,type:`item`,itemType:`concept`,label:`Business Logic`},{id:`#I3-4`,type:`item`,itemType:`concept`,label:`Agents`},{id:`#I4`,type:`container`,containerType:`box`,label:`Model Improvement`,children:[`#I4-1`,`#I4-2`,`#I4-3`,`#I4-4`]},{id:`#I4-1`,type:`item`,itemType:`concept`,label:`Training`},{id:`#I4-2`,type:`item`,itemType:`concept`,label:`Fine-Tuning`},{id:`#I4-3`,type:`item`,itemType:`concept`,label:`Optimization`},{id:`#I4-4`,type:`item`,itemType:`concept`,label:`Monitoring`},{id:`#L10`,type:`container`,containerType:`layer`,label:`Business Outcome`,description:`Where knowledge becomes value`,children:[`#L10-1`,`#L10-2`,`#L10-3`,`#L10-4`,`#L10-5`,`#L10-6`],badges:[`badge-feedback`],meta:{order:10}},{id:`#L10-1`,type:`item`,itemType:`outcome`,label:`Informed Decision`,properties:{outcome_category:[`cognitive`,`strategic`]}},{id:`#L10-2`,type:`item`,itemType:`outcome`,label:`Executed Action`,properties:{outcome_category:[`operational`,`execution`]}},{id:`#L10-3`,type:`item`,itemType:`outcome`,label:`Operational Efficiency`,properties:{outcome_category:[`operational`,`performance`]}},{id:`#L10-4`,type:`item`,itemType:`outcome`,label:`Customer Value`,properties:{outcome_category:[`experience`,`strategic`]}},{id:`#L10-5`,type:`item`,itemType:`outcome`,label:`Risk Reduction`,properties:{outcome_category:[`governance`,`resilience`]}},{id:`#L10-6`,type:`item`,itemType:`outcome`,label:`Continuous Improvement`,properties:{outcome_category:[`adaptive`,`learning`]}},{id:`#L9`,type:`container`,containerType:`layer`,label:`System Participants`,description:`Who initiates, acts, and benefits — and with what accountability`,children:[`#L9-triad`,`#L9-spectrum-autonomy`,`#L9-spectrum-accountability`,`#L9-key-insight`],meta:{order:9}},{id:`#L9-triad`,type:`container`,containerType:`frame`,label:`Triad`,navigationVisible:!1,children:[`#L9-t-initiator`,`#L9-t-actor`,`#L9-t-beneficiary`]},{id:`#L9-t-initiator`,type:`item`,itemType:`participant`,label:`Initiator`,role:`initiator`,triadPosition:1,color:`purple`,weight:`secondary`,description:`Defines the governance frame: goals, permissions, and organizational rules. Interacts with OIA constitutively — not operatively. Sets the conditions under which Actors operate. Accountability always traces back to the Initiator and is always reducible to a human or organization.`},{id:`#L9-t-actor`,type:`item`,itemType:`participant`,label:`Actor`,role:`actor`,triadPosition:2,color:`teal`,weight:`primary`,primary:!0,description:`The primary interaction entity of OIA. Engages with Capabilities, Features, and the Knowledge Core. OIA is built from the Actor's perspective. The Actor can be a Human, an Agent, or a System.`},{id:`#L9-t-beneficiary`,type:`item`,itemType:`participant`,label:`Beneficiary`,role:`beneficiary`,triadPosition:3,color:`amber`,weight:`secondary`,description:`The entity for whom the outcome creates value. Legitimizes the action. Feedback flows back into the architecture from the Beneficiary, but the Beneficiary does not control the process. Can be a human, team, or system.`},{id:`#L9-spectrum-autonomy`,type:`container`,containerType:`spectrum`,label:`Autonomy & Decision Space`,spectrumAxis:`autonomy`,children:[`#L9-sa-system`,`#L9-sa-human`,`#L9-sa-agent`]},{id:`#L9-sa-system`,type:`item`,itemType:`participant`,label:`System`,parent:`#L9-t-actor`,spectrumAxis:`autonomy`,position:1,caption:`Configured · deterministic`,description:`Operates within a fixed configuration set by the Initiator. No independent decision space — executes exactly what was configured. Predictable, deterministic, bounded by design.`,color:`gray`},{id:`#L9-sa-human`,type:`item`,itemType:`participant`,label:`Human`,parent:`#L9-t-actor`,spectrumAxis:`autonomy`,position:2,caption:`Guided · contextual judgment`,description:`Decides contextually, embedded in hierarchy, political consideration, and cognitive limits. Filters before acting — through organization, experience, and judgment. Greater interpretive depth than operational reach.`,color:`teal`},{id:`#L9-sa-agent`,type:`item`,itemType:`participant`,label:`Agent`,parent:`#L9-t-actor`,spectrumAxis:`autonomy`,position:3,caption:`Goal-directed · autonomous`,description:`Greater operational reach than a human: parallel processing, continuous availability, no cognitive bias, no organizational embeddedness. Operates without the filters that constrain human decision-making in organizations. The positioning to the right of Human on this axis is intentional — not a display error.`,color:`teal`,converging:!0},{id:`#L9-spectrum-accountability`,type:`container`,containerType:`spectrum`,label:`Accountability`,spectrumAxis:`accountability`,children:[`#L9-sc-system`,`#L9-sc-agent`,`#L9-sc-human`]},{id:`#L9-sc-system`,type:`item`,itemType:`participant`,label:`System`,parent:`#L9-t-actor`,spectrumAxis:`accountability`,position:1,caption:`Inherits from Initiator`,description:`Carries no independent accountability. Accountability flows back entirely to the Initiator who configured it.`,color:`gray`},{id:`#L9-sc-agent`,type:`item`,itemType:`participant`,label:`Agent`,parent:`#L9-t-actor`,spectrumAxis:`accountability`,position:2,caption:`Governance-bounded · delegated`,description:`Accountability is delegated and explicitly bounded by Organizational Decision Records (ODRs). No legal framework, no societal sanction mechanism. Without ODR-defined boundaries, Agent actions cannot be held accountable.`,color:`teal`},{id:`#L9-sc-human`,type:`item`,itemType:`participant`,label:`Human`,parent:`#L9-t-actor`,spectrumAxis:`accountability`,position:3,caption:`Legal · structural · always`,description:`Carries accountability through law, socialization, and culture — mechanisms no machine brings and that cannot be delegated. Permanently at the rightmost position on this axis, independent of agent autonomy.`,color:`purple`},{id:`#L9-key-insight`,type:`item`,itemType:`keyInsight`,parent:`#L9-t-actor`,label:`Key Insight`,text:`Capabilities converge. Accountability does not. The human remains the legal and structural anchor — independent of agent autonomy.`},{id:`#L8`,type:`container`,containerType:`layer`,label:`Situation Layer`,description:`Context of decisions`,children:[`#L8-1`,`#L8-2`,`#L8-3`,`#L8-4`,`#L8-5`,`#L8-6`,`#L8-7`,`#L8-8`,`#L8-9`,`#L8-10`],meta:{order:8}},{id:`#L8-1`,type:`item`,itemType:`situation`,label:`Employee`,properties:{dimension:`who`}},{id:`#L8-2`,type:`item`,itemType:`situation`,label:`Event`,properties:{dimension:`trigger`}},{id:`#L8-3`,type:`item`,itemType:`situation`,label:`Time`,properties:{dimension:`time`}},{id:`#L8-4`,type:`item`,itemType:`situation`,label:`Place`,properties:{dimension:`place`}},{id:`#L8-5`,type:`item`,itemType:`situation`,label:`Domain`,properties:{dimension:`domain`}},{id:`#L8-6`,type:`item`,itemType:`situation`,label:`Task`,properties:{dimension:`task`}},{id:`#L8-7`,type:`item`,itemType:`situation`,label:`Preferences`,properties:{dimension:`preference`}},{id:`#L8-8`,type:`item`,itemType:`situation`,label:`Language`,properties:{dimension:`language`}},{id:`#L8-9`,type:`item`,itemType:`situation`,label:`Access`,properties:{dimension:`access`}},{id:`#L8-10`,type:`item`,itemType:`situation`,label:`Knowledge`,properties:{dimension:`knowledge`}},{id:`#L7`,type:`container`,containerType:`layer`,label:`Use Cases & Challenges`,description:`Business motivation`,children:[`#L7-1`,`#L7-2`,`#L7-3`,`#L7-4`,`#L7-5`,`#L7-6`],meta:{order:7}},{id:`#L7-1`,type:`item`,itemType:`usecase`,label:`HR Process Consulting`,properties:{domain:`HR`}},{id:`#L7-2`,type:`item`,itemType:`usecase`,label:`Infrastructure Maintenance`,properties:{domain:`Operations`}},{id:`#L7-3`,type:`item`,itemType:`usecase`,label:`Software Development`,properties:{domain:`IT`}},{id:`#L7-4`,type:`item`,itemType:`usecase`,label:`System Documentation`,properties:{domain:`IT`}},{id:`#L7-5`,type:`item`,itemType:`usecase`,label:`Procurement Verification`,properties:{domain:`Procurement`}},{id:`#L7-6`,type:`item`,itemType:`usecase`,label:`24h Customer Support`,properties:{domain:`CX`}},{id:`#L6`,type:`container`,containerType:`layer`,label:`Solutions & Applications`,description:`Interaction points`,children:[`#L6-1`,`#L6-2`,`#L6-3`,`#L6-4`,`#L6-5`],badges:[`badge-feedback`],meta:{order:6}},{id:`#L6-1`,type:`item`,itemType:`solution`,label:`Enterprise Search`,icon:`🔍`,properties:{category:`search`}},{id:`#L6-2`,type:`item`,itemType:`solution`,label:`Knowledge Assistant`,icon:`💬`,properties:{category:`assistant`}},{id:`#L6-3`,type:`item`,itemType:`solution`,label:`Maintenance Assistant`,icon:`🔧`,properties:{category:`assistant`}},{id:`#L6-4`,type:`item`,itemType:`solution`,label:`Code Assistant`,icon:`💻`,properties:{category:`assistant`}},{id:`#L6-5`,type:`item`,itemType:`solution`,label:`Analytics Tools`,icon:`📊`,properties:{category:`analytics`}},{id:`#L5`,type:`container`,containerType:`layer`,label:`Cognitive Capabilities`,description:`What the organization can do`,children:[`#L5-1`,`#L5-2`,`#L5-3`,`#L5-4`,`#L5-5`,`#L5-6`,`#L5-7`,`#L5-8`,`#L5-9`,`#L5-10`],meta:{order:5}},{id:`#L5-1`,type:`item`,itemType:`capability`,label:`Find Information`,properties:{cognitive_level:`find`}},{id:`#L5-2`,type:`item`,itemType:`capability`,label:`Evaluate Facts`,properties:{cognitive_level:`evaluate`}},{id:`#L5-3`,type:`item`,itemType:`capability`,label:`Structure Documents`,properties:{cognitive_level:`structure`}},{id:`#L5-4`,type:`item`,itemType:`capability`,label:`Link Knowledge`,properties:{cognitive_level:`link`}},{id:`#L5-5`,type:`item`,itemType:`capability`,label:`Generate Content`,properties:{cognitive_level:`generate`}},{id:`#L5-6`,type:`item`,itemType:`capability`,label:`Identify Patterns`,properties:{cognitive_level:`evaluate`}},{id:`#L5-7`,type:`item`,itemType:`capability`,label:`Detect Redundancies`,properties:{cognitive_level:`evaluate`}},{id:`#L5-8`,type:`item`,itemType:`capability`,label:`Create Reports`,properties:{cognitive_level:`generate`}},{id:`#L5-9`,type:`item`,itemType:`capability`,label:`Communicate Knowledge`,properties:{cognitive_level:`generate`}},{id:`#L5-10`,type:`item`,itemType:`capability`,label:`Deliver Information`,properties:{cognitive_level:`deliver`}},{id:`#L4`,type:`container`,containerType:`layer`,label:`Features & APIs`,description:`Technical reusability`,children:[`#L4-1`,`#L4-2`,`#L4-3`,`#L4-4`,`#L4-5`,`#L4-6`,`#L4-7`,`#L4-8`,`#L4-9`,`#L4-10`],meta:{order:4}},{id:`#L4-1`,type:`item`,itemType:`feature`,label:`/search`,properties:{endpoint:`/search`}},{id:`#L4-2`,type:`item`,itemType:`feature`,label:`/classify`,properties:{endpoint:`/classify`}},{id:`#L4-3`,type:`item`,itemType:`feature`,label:`/summarize`,properties:{endpoint:`/summarize`}},{id:`#L4-4`,type:`item`,itemType:`feature`,label:`/link`,properties:{endpoint:`/link`}},{id:`#L4-5`,type:`item`,itemType:`feature`,label:`/remember`,properties:{endpoint:`/remember`}},{id:`#L4-6`,type:`item`,itemType:`feature`,label:`/chat`,properties:{endpoint:`/chat`}},{id:`#L4-7`,type:`item`,itemType:`feature`,label:`/transform`,properties:{endpoint:`/transform`}},{id:`#L4-8`,type:`item`,itemType:`feature`,label:`/create`,properties:{endpoint:`/create`}},{id:`#L4-9`,type:`item`,itemType:`feature`,label:`/analyze`,properties:{endpoint:`/analyze`}},{id:`#L4-10`,type:`item`,itemType:`feature`,label:`/calc`,properties:{endpoint:`/calc`}},{id:`#L3`,type:`container`,containerType:`layer`,label:`Organizational Knowledge Core`,description:`Organizational memory`,children:[`#L3-semantic`,`#L3-index`,`#L3-graph`,`#L3-access`],badges:[`badge-feedback`],meta:{order:3,highlighted:!0}},{id:`#L3-semantic`,type:`container`,containerType:`box`,label:`Semantic Layer`,children:[`#L3-s1`,`#L3-s2`,`#L3-s3`]},{id:`#L3-s1`,type:`item`,itemType:`concept`,label:`Ontologies`},{id:`#L3-s2`,type:`item`,itemType:`concept`,label:`Taxonomies`},{id:`#L3-s3`,type:`item`,itemType:`concept`,label:`Entities`},{id:`#L3-index`,type:`container`,containerType:`box`,label:`Index & Search`,children:[`#L3-i1`,`#L3-i2`,`#L3-i3`]},{id:`#L3-i1`,type:`item`,itemType:`concept`,label:`Full-Text Index`},{id:`#L3-i2`,type:`item`,itemType:`concept`,label:`Vector Index`},{id:`#L3-i3`,type:`item`,itemType:`concept`,label:`Metadata Index`},{id:`#L3-graph`,type:`container`,containerType:`box`,label:`Knowledge Graph`,children:[`#L3-g1`,`#L3-g2`,`#L3-g3`]},{id:`#L3-g1`,type:`item`,itemType:`concept`,label:`Relations`},{id:`#L3-g2`,type:`item`,itemType:`concept`,label:`Context Links`},{id:`#L3-g3`,type:`item`,itemType:`concept`,label:`Entity Graph`},{id:`#L3-access`,type:`container`,containerType:`box`,label:`Security & Access`,children:[`#L3-a1`,`#L3-a2`,`#L3-a3`]},{id:`#L3-a1`,type:`item`,itemType:`concept`,label:`Access Control`},{id:`#L3-a2`,type:`item`,itemType:`concept`,label:`API Gateway`},{id:`#L3-a3`,type:`item`,itemType:`concept`,label:`Governance`},{id:`#L2`,type:`container`,containerType:`layer`,label:`Data Sources`,description:`Organizational raw data`,children:[`#L1-1`,`#L1-2`,`#L1-3`,`#L1-4`,`#L1-5`,`#L1-6`,`#L1-7`,`#L1-8`,`#L1-9`,`#L1-10`],meta:{order:2}},{id:`#L2-1`,type:`item`,itemType:`infrastructure`,label:`Large Language Models`,properties:{tech_type:`llm`}},{id:`#L2-2`,type:`item`,itemType:`infrastructure`,label:`Machine Learning`,properties:{tech_type:`ml`}},{id:`#L2-3`,type:`item`,itemType:`infrastructure`,label:`Deep Learning`,properties:{tech_type:`ml`}},{id:`#L2-4`,type:`item`,itemType:`infrastructure`,label:`NLP`,properties:{tech_type:`nlp`}},{id:`#L2-5`,type:`item`,itemType:`infrastructure`,label:`Vector Indexes`,properties:{tech_type:`vector-index`}},{id:`#L2-6`,type:`item`,itemType:`infrastructure`,label:`Graph Databases`,properties:{tech_type:`graph-db`}},{id:`#L2-7`,type:`item`,itemType:`infrastructure`,label:`Computer Vision`,properties:{tech_type:`cv`}},{id:`#L2-8`,type:`item`,itemType:`infrastructure`,label:`RPA`,properties:{tech_type:`rpa`}},{id:`#L2-9`,type:`item`,itemType:`infrastructure`,label:`RDBMS`,properties:{tech_type:`storage`}},{id:`#L2-10`,type:`item`,itemType:`infrastructure`,label:`Blob Storage`,properties:{tech_type:`storage`}},{id:`#C2`,type:`container`,containerType:`pipeline`,label:`Data Processing Pipeline`,description:`Raw data → usable knowledge`,children:[`#C2-1`,`#C2-2`,`#C2-3`,`#C2-4`,`#C2-5`],meta:{order:2.5}},{id:`#C2-1`,type:`item`,itemType:`processingstep`,label:`Data Ingestion`,icon:`📥`,properties:{order:1}},{id:`#C2-2`,type:`item`,itemType:`processingstep`,label:`Processing`,icon:`⚙️`,properties:{order:2}},{id:`#C2-3`,type:`item`,itemType:`processingstep`,label:`Cleansing`,icon:`🧹`,properties:{order:3}},{id:`#C2-4`,type:`item`,itemType:`processingstep`,label:`Validation`,icon:`✅`,properties:{order:4}},{id:`#C2-5`,type:`item`,itemType:`processingstep`,label:`Information & Knowledge`,icon:`💡`,properties:{order:5,variant:`output`}},{id:`#C1`,type:`container`,containerType:`concept`,label:`Organizational Entities`,description:`Derived from Data Sources · Modeled in Knowledge Core`,children:[`#C1-1`,`#C1-2`,`#C1-3`,`#C1-4`,`#C1-7`,`#C1-5`,`#C1-8`,`#C1-6`],meta:{order:2.7}},{id:`#C1-1`,type:`item`,itemType:`concept`,label:`Persons`},{id:`#C1-2`,type:`item`,itemType:`concept`,label:`Organizations`},{id:`#C1-3`,type:`item`,itemType:`concept`,label:`Locations`},{id:`#C1-4`,type:`item`,itemType:`concept`,label:`Products`},{id:`#C1-7`,type:`item`,itemType:`concept`,label:`Materials`},{id:`#C1-5`,type:`item`,itemType:`concept`,label:`Projects`},{id:`#C1-8`,type:`item`,itemType:`concept`,label:`Activities`},{id:`#C1-6`,type:`item`,itemType:`concept`,label:`Events`},{id:`#L1`,type:`container`,containerType:`layer`,label:`AI & Cognitive Infrastructure`,description:`Technology foundation`,children:[`#L2-1`,`#L2-2`,`#L2-3`,`#L2-4`,`#L2-5`,`#L2-6`,`#L2-7`,`#L2-8`,`#L2-9`,`#L2-10`],meta:{order:1}},{id:`#L1-1`,type:`item`,itemType:`datasource`,label:`Documents & Files`,icon:`📄`,properties:{source_type:`unstructured`}},{id:`#L1-2`,type:`item`,itemType:`datasource`,label:`Databases`,icon:`💾`,properties:{source_type:`structured`}},{id:`#L1-3`,type:`item`,itemType:`datasource`,label:`Email & Messaging`,icon:`📧`,properties:{source_type:`unstructured`}},{id:`#L1-4`,type:`item`,itemType:`datasource`,label:`APIs & Web Services`,icon:`🌐`,properties:{source_type:`external`}},{id:`#L1-5`,type:`item`,itemType:`datasource`,label:`Structured Data`,icon:`📊`,properties:{source_type:`structured`}},{id:`#L1-6`,type:`item`,itemType:`datasource`,label:`Code Repositories`,icon:`📁`,properties:{source_type:`internal`}},{id:`#L1-7`,type:`item`,itemType:`datasource`,label:`Logs & Events`,icon:`📝`,properties:{source_type:`transactional`}},{id:`#L1-8`,type:`item`,itemType:`datasource`,label:`Media & Images`,icon:`🎥`,properties:{source_type:`unstructured`}},{id:`#L1-9`,type:`item`,itemType:`datasource`,label:`External Feeds`,icon:`🔗`,properties:{source_type:`external`}},{id:`#L1-10`,type:`item`,itemType:`datasource`,label:`Legacy Systems`,icon:`🏛️`,properties:{source_type:`internal`}},{id:`#panel-right`,type:`container`,containerType:`panel`,label:`Data Sources & Processing`,children:[`#D1`,`#D2`,`#D3`,`#D4`,`#D5`],meta:{variant:`right`}},{id:`#D1`,type:`container`,containerType:`box`,label:`People & Docs`,children:[`#D1-1`,`#D1-2`,`#D1-3`]},{id:`#D1-1`,type:`item`,itemType:`datasource`,label:`Employee Profiles`},{id:`#D1-2`,type:`item`,itemType:`datasource`,label:`Expert Documents`},{id:`#D1-3`,type:`item`,itemType:`datasource`,label:`Manuals & Guides`},{id:`#D2`,type:`container`,containerType:`box`,label:`Transactions & Logs`,children:[`#D2-1`,`#D2-2`,`#D2-3`]},{id:`#D2-1`,type:`item`,itemType:`datasource`,label:`System Events`},{id:`#D2-2`,type:`item`,itemType:`datasource`,label:`Process Logs`},{id:`#D2-3`,type:`item`,itemType:`datasource`,label:`Transactions`},{id:`#D3`,type:`container`,containerType:`box`,label:`Projects & Tasks`,children:[`#D3-1`,`#D3-2`,`#D3-3`]},{id:`#D3-1`,type:`item`,itemType:`datasource`,label:`Project Repositories`},{id:`#D3-2`,type:`item`,itemType:`datasource`,label:`Tickets & Issues`},{id:`#D3-3`,type:`item`,itemType:`datasource`,label:`Delivery Artifacts`},{id:`#D4`,type:`container`,containerType:`box`,label:`External Sources`,children:[`#D4-1`,`#D4-2`,`#D4-3`]},{id:`#D4-1`,type:`item`,itemType:`datasource`,label:`Web & News`},{id:`#D4-2`,type:`item`,itemType:`datasource`,label:`Partner Data`},{id:`#D4-3`,type:`item`,itemType:`datasource`,label:`Regulatory Content`},{id:`#D5`,type:`container`,containerType:`box`,label:`Quality Gates`,children:[`#D5-1`,`#D5-2`,`#D5-3`,`#D5-4`],meta:{variant:`highlight`}},{id:`#D5-1`,type:`item`,itemType:`concept`,label:`Schema Validation`},{id:`#D5-2`,type:`item`,itemType:`concept`,label:`Deduplication`},{id:`#D5-3`,type:`item`,itemType:`concept`,label:`Enrichment`},{id:`#D5-4`,type:`item`,itemType:`concept`,label:`Versioning`}],connections:[{id:`conn-triad-1`,from:`#L9-t-initiator`,to:`#L9-t-actor`,connectionType:`generic`,direction:`forward`,edgeType:`defines frame for`},{id:`conn-triad-2`,from:`#L9-t-actor`,to:`#L9-t-beneficiary`,connectionType:`generic`,direction:`forward`,edgeType:`creates value for`},{id:`conn-fb-1`,from:`#L6`,to:`#L3`,connectionType:`feedback`,label:`Applications → Knowledge Core`,direction:`backward`},{id:`conn-fb-2`,from:`#L9`,to:`#L3`,connectionType:`feedback`,label:`System Participants → Knowledge Core`,direction:`backward`},{id:`conn-flow-1`,from:`#L2`,to:`#C2`,connectionType:`flow`,direction:`forward`},{id:`conn-flow-2`,from:`#C2`,to:`#L3`,connectionType:`flow`,direction:`forward`},{id:`conn-fb-4`,from:`#L10`,to:`#L3`,connectionType:`feedback`,label:`Outcomes → Knowledge Core`,direction:`backward`}],badges:[{id:`badge-feedback`,icon:`↻`,label:`Feedback Loop`,description:`This element participates in a feedback loop. Actors, systems or processes return information that continuously improves organizational knowledge and capabilities. Details to be defined in a separate process view.`}],views:[{id:`view-overview`,type:`overview`,label:`OIA Overview`,include:[`all`]}],legend:{show:!0,position:`bottom`}};function t(e,t){return e.elements.find(e=>e.id===t)}function n(e,t){return!t||t.length===0?``:t.map(t=>{let n=e.badges.find(e=>e.id===t);return n?`<span class="badge-icon" title="${n.label}: ${n.description}">${n.icon}</span>`:``}).join(``)}function r(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="sit-item">${r.label}</span>`:``}).join(``)}function i(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="usecase-item"><span class="usecase-dot"></span>${r.label}</span>`:``}).join(``)}function a(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="cap-item"><span class="cap-dot"></span>${r.label}</span>`:``}).join(``)}function o(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="tag mono accent2">${r.label}</span>`:``}).join(``)}function s(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="tag"><span class="dot"></span>${r.label}</span>`:``}).join(``)}function c(e,n){return`<div class="concept-chips">${n.children.map(n=>{let r=t(e,n);return r?`<span class="concept-chip">${r.label}</span>`:``}).join(``)}</div>`}function l(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<div class="data-item"><span class="data-icon">${r.icon||``}</span>${r.label}</div>`:``}).join(``)}function u(e,n,r){let i=document.createElement(`div`);i.className=`transform-zone`,i.dataset.id=n.id;let a=n.id.replace(`#`,``),o=r.id.replace(`#`,``),s=n.children.map((n,r,i)=>{let a=t(e,n);if(!a)return``;let o=r===i.length-1,s=a.properties?.variant===`output`?` pipeline-step--output`:``,c=o?``:`<div class="pipeline-arrow">→</div>`;return`<div class="pipeline-step${s}">${a.icon||``}<br>${a.label}</div>${c}`}).join(``),c=r.children.map(n=>{let r=t(e,n);return r?`<span class="concept-chip">${r.label}</span>`:``}).join(``);return i.innerHTML=`
    <div class="transform-output" data-id="${r.id}">
      <div class="transform-output-header">
        <span class="concept-id">${o}</span>
        <span class="concept-name">${r.label}</span>
      </div>
      <div class="concept-chips">${c}</div>
    </div>
    <div class="transform-zone-divider" role="separator"></div>
    <div class="transform-zone-header">
      <span class="layer-num">${a}</span>
      <span class="layer-title">${n.label}</span>
      <span class="layer-desc">${n.description||``}</span>
    </div>
    <div class="pipeline-row">${s}</div>
  `,i}function d(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<div class="sol-item"><span class="sol-icon">${r.icon||``}</span>${r.label}</div>`:``}).join(``)}function f(e,n){return`<div class="core-inner">${n.children.map(n=>{let r=t(e,n);if(!r||r.type!==`container`)return``;let i=r.children.map(n=>{let r=t(e,n);return r?r.label:``}).join(`<br>`);return`<div class="core-block" data-id="${r.id}">
      <div class="core-block-title">${r.label}</div>
      <div class="core-block-items">${i}</div>
    </div>`}).join(``)}</div>`}function p(e,n){return`<div class="pipeline-row">${n.children.map((n,r,i)=>{let a=t(e,n);if(!a)return``;let o=r===i.length-1,s=a.properties?.variant===`output`?` pipeline-step--output`:``,c=o?``:`<div class="pipeline-arrow">→</div>`;return`<div class="pipeline-step${s}">${a.icon||``}<br>${a.label}</div>${c}`}).join(``)}</div>`}function m(e,n){return n.children.map(n=>{let r=t(e,n);if(!r)return``;let i=Array.isArray(r.properties?.outcome_category)?r.properties.outcome_category.join(` · `):r.properties?.outcome_category||``;return`<div class="outcome-item">
      <span class="outcome-label">${r.label}</span>
      ${i?`<span class="outcome-categories">${i}</span>`:``}
    </div>`}).join(``)}var h={purple:`sp-color--purple`,teal:`sp-color--teal`,amber:`sp-color--amber`,gray:`sp-color--gray`},g={initiator:`ACCOUNTABLE · CONSTITUTIVE`,actor:`RESPONSIBLE · OPERATIVE`,beneficiary:`PURPOSIVE · RECEPTIVE`},ee={initiator:[`Human`,`Organization`],actor:[`Human`,`Agent`,`System`],beneficiary:[`Human`,`Team`,`System`]},te={initiator:`Sets governance & goals. Defines what actors may do.`,actor:`Primary interaction layer. Engages capabilities, features & knowledge core.`,beneficiary:`Receives output. Feedback flows back into the architecture.`},ne=`OIA is actor-centric — governance flows in from the left, value flows out to the right`;function _(e,n){let r=t(e,n);if(!r||r.type!==`container`)return``;let i=[];return r.children.forEach((n,a)=>{let o=t(e,n);if(!o)return;if(a>0){let t=r.children[a-1],o=e.connections.find(e=>e.from===t&&e.to===n),s=o?.edgeType?` title="${o.edgeType}"`:``;i.push(`<div class="sp-triad__arrow"${s}>→</div>`)}let s=h[o.color??``]??``,c=o.weight===`primary`?`sp-triad__item--primary`:o.weight===`secondary`?`sp-triad__item--secondary`:``,l=o.primary?` title="Primary interaction entity"`:``,u=o.primary?`${o.label} ★`:o.label,d=o.role?g[o.role]??``:``,f=o.role?(ee[o.role]??[]).map(e=>`<span class="sp-triad__tag">${e}</span>`).join(``):``,p=o.role?te[o.role]??``:``;i.push(`<div class="sp-triad__item ${s} ${c}" data-id="${o.id}"${l}>
      <span class="sp-triad__label">${u}</span>
      ${d?`<span class="sp-triad__raci">${d}</span>`:``}
      ${f?`<div class="sp-triad__tags">${f}</div>`:``}
      ${p?`<span class="sp-triad__desc">${p}</span>`:``}
    </div>`)}),`<div class="sp-triad">${i.join(``)}</div>`}function v(e,n){let r=t(e,n);if(!r||r.type!==`container`)return``;let i=r.children.map(n=>t(e,n)),a=i.some(e=>e?.converging),o=i.map(t=>t?`<div class="sp-spectrum__entity ${h[t.color??``]??``}${t.converging?` sp-spectrum__entity--converging`:``}" data-id="${t.spectrumAxis===`accountability`?e.elements.find(e=>e.type===`item`&&e.itemType===`participant`&&e.spectrumAxis===`autonomy`&&e.label===t.label)?.id??t.id:t.id}">
        <span class="sp-spectrum__entity-label">${t.label}</span>
        ${t.caption??t.description?`<span class="sp-spectrum__entity-desc">${t.caption??t.description}</span>`:``}
      </div>`:``).join(``),s=a?`<div class="sp-spectrum__converging-overlay"><span class="sp-spectrum__converging-text">↔ capabilities converging</span></div>`:``;return`<div class="sp-spectrum">
    <div class="sp-spectrum__header">
      <span class="sp-spectrum__title">${r.label}</span>
    </div>
    <div class="sp-spectrum__axis-row">
      <span class="sp-spectrum__range-label">less</span>
      <div class="sp-spectrum__axis-line"></div>
      <span class="sp-spectrum__range-label">more →</span>
    </div>
    <div class="sp-spectrum__entities${a?` sp-spectrum__entities--converging`:``}">
      ${o}
      ${s}
    </div>
  </div>`}function y(e,n){let r=t(e,n);if(!r||r.itemType!==`keyInsight`)return``;let i=r.text??r.label,a=i.indexOf(`. The human`),o=a>=0?i.slice(0,a+1):i,s=a>=0?i.slice(a+2):``;return`<div class="sp-insight" data-id="${r.id}">
    <p class="sp-insight__primary">${o}</p>
    ${s?`<p class="sp-insight__secondary">${s}</p>`:``}
  </div>`}function re(e,t){let[n]=t.children;return`<div class="sp-layer">
    ${_(e,n)}
  </div>`}function ie(e,t){let[n,r,i,a]=t.children;return`<div class="sp-layer">
    ${_(e,n)}
    <div class="sp-centric-stmt">${ne}</div>
    <div class="sp-spectra-label">Actor types — how they differ</div>
    ${v(e,r)}
    ${v(e,i)}
    ${y(e,a)}
  </div>`}var ae={"#C1":(e,t)=>c(e,t),"#L9":(e,t)=>re(e,t),"#L8":(e,t)=>`<div class="sit-grid">${r(e,t)}</div>`,"#L7":(e,t)=>`<div class="usecase-grid">${i(e,t)}</div>`,"#L6":(e,t)=>`<div class="sol-grid">${d(e,t)}</div>`,"#L5":(e,t)=>`<div class="cap-grid">${a(e,t)}</div>`,"#L4":(e,t)=>`<div class="tag-row">${o(e,t)}</div>`,"#L1":(e,t)=>`<div class="tag-row">${s(e,t)}</div>`,"#L10":(e,t)=>`<div class="outcome-grid">${m(e,t)}</div>`,"#C2":p,"#L2":(e,t)=>`<div class="data-grid">${l(e,t)}</div>`};function b(e,t){let r=t.meta?.highlighted===!0,i=t.containerType===`pipeline`,a=document.createElement(`div`);if(a.dataset.id=t.id,r)return a.className=`layer-core`,a.innerHTML=`
      <div class="layer-header">
        <span class="layer-num layer-num--core">${t.id.replace(`#`,``)}</span>
        <span class="layer-title">${t.label}</span>
        <span class="core-badge">CENTRAL COMPONENT</span>
        <span class="layer-desc layer-desc--core">${t.description||``}</span>
        ${n(e,t.badges)}
      </div>
      ${f(e,t)}
    `,a;a.className=t.containerType===`concept`?`layer layer--concept`:`layer`;let o=t.id.replace(`#`,``),s=ae[t.id]??(i?p:null),c=s?s(e,t):``;return a.innerHTML=`
    <div class="layer-header">
      <span class="layer-num">${o}</span>
      <span class="layer-title">${t.label}</span>
      <span class="layer-desc">${t.description||``}</span>
      ${n(e,t.badges)}
    </div>
    ${c}
  `,a}function oe(e,n){return n.map(n=>{let r=t(e,n);if(!r)return``;if(r.type===`item`)return`<div class="side-item">${r.label}</div>`;if(r.type===`container`){let n=r.meta?.variant===`highlight`,i=n?` side-block--highlight`:``,a=n?` side-item--highlight`:``,o=r.children.map(n=>{let r=t(e,n);return r?`<div class="side-item${a}">${r.label}</div>`:``}).join(``);return`<div class="side-block${i}" data-id="${r.id}">
  <div class="side-block-title">${r.label}</div>
  ${o}
</div>`}return``}).join(`
`)}function x(e,t){let n=document.createElement(`div`);return n.className=`side-panel`+(t.meta?.variant===`right`?` right-panel`:``),n.innerHTML=`
    <div class="side-label">${t.label}</div>
    ${oe(e,t.children)}
  `,n}function se(e){let n=document.createElement(`div`);n.className=`diagram-wrapper`;let r=document.createElement(`div`);r.className=`mobile-notice`,r.textContent=`Best viewed on desktop — pinch to zoom or rotate to landscape`,n.appendChild(r);let i=document.createElement(`div`);i.className=`header`,i.innerHTML=`
    <div class="header-badge">Reference Architecture · V${e.meta.version} · ${e.meta.created}</div>
    <h1>Organizational <span>Intelligence</span> Architecture</h1>
    <p>${e.meta.subtitle}</p>
    <div class="header-line"></div>
  `,n.appendChild(i);let a=document.createElement(`div`);a.className=`main-grid`;let o=t(e,`#panel-left`);o&&a.appendChild(x(e,o));let s=document.createElement(`div`);s.className=`center-col`;let c=e.elements.filter(e=>e.type===`container`&&e.containerType===`layer`).map(e=>e).sort((e,t)=>(t.meta?.order??0)-(e.meta?.order??0)),l=e.elements.filter(e=>e.type===`container`&&(e.containerType===`pipeline`||e.containerType===`concept`)).map(e=>e),d=[...c,...l].sort((e,t)=>(t.meta?.order??0)-(e.meta?.order??0)),f=new Set,p=new Map;for(let e of d)if(e.containerType===`pipeline`){let t=d.find(t=>t.containerType===`concept`&&Math.abs((t.meta?.order??0)-(e.meta?.order??0))<1);t&&(f.add(t.id),p.set(e.id,t))}for(let t of d)if(!f.has(t.id))if(t.containerType===`pipeline`){let n=p.get(t.id);if(n){let r=document.createElement(`div`);r.className=`layer-flow-connector`,r.setAttribute(`aria-hidden`,`true`),r.innerHTML=`<span class="layer-flow-arrow">↑</span><span class="layer-flow-label">Entities feed into Knowledge Core</span>`,s.appendChild(r),s.appendChild(u(e,t,n));let i=document.createElement(`div`);i.className=`layer-flow-connector`,i.setAttribute(`aria-hidden`,`true`),i.innerHTML=`<span class="layer-flow-arrow">↑</span><span class="layer-flow-label">Raw Data from Data Sources</span>`,s.appendChild(i)}else s.appendChild(b(e,t))}else s.appendChild(b(e,t));a.appendChild(s);let m=t(e,`#panel-right`);if(m&&a.appendChild(x(e,m)),n.appendChild(a),e.legend.show&&e.badges.length>0){let t=document.createElement(`div`);t.className=`legend`,t.innerHTML=`<div class="legend-title">Legend</div><div class="legend-items">${e.badges.map(e=>`
      <div class="legend-item">
        <span class="legend-icon">${e.icon}</span>
        <div class="legend-text">
          <span class="legend-label">${e.label}</span>
          <span class="legend-desc">${e.description}</span>
        </div>
      </div>
    `).join(``)}</div>`,n.appendChild(t)}let h=document.createElement(`div`);return h.className=`footer`,h.textContent=`OIA · Organizational Intelligence Architecture · V${e.meta.version} · © ${e.meta.created} · ${e.meta.subtitle}`,n.appendChild(h),n}function S(e){let t=t=>t===e?` euai-node--active`:` euai-node--inactive`;return`
    <div class="euai-overlay__header">
      <h3 class="euai-overlay__title">EU AI Act — accountability in context</h3>
      <p class="euai-overlay__subtitle">OIA describes what happens inside an organisation. The EU AI Act additionally defines a supply chain outside it.</p>
    </div>

    <div class="euai-zone euai-zone--outside">
      <span class="euai-zone__label">Outside OIA</span>
      <div class="euai-node">
        <span class="euai-node__name">Provider</span>
        <span class="euai-node__act">EU AI Act: Provider</span>
        <span class="euai-node__desc">Builds and places AI system on market. Has a contract with the Initiator that defines obligations and their limits.</span>
      </div>
    </div>

    <div class="euai-arrow">↓ contract / service terms ↓</div>

    <div class="euai-boundary">
      <span class="euai-boundary__label">OIA boundary</span>
    </div>

    <div class="euai-zone euai-zone--inside">
      <span class="euai-zone__label">Inside OIA</span>

      <div class="euai-node${t(`initiator`)}">
        <span class="euai-node__name">Initiator = Deployer</span>
        <span class="euai-node__act">EU AI Act: Deployer</span>
        <span class="euai-node__desc">Accountable for all actions within OIA including Agents. Defines usage policy for Actors.</span>
      </div>

      <div class="euai-arrow">↓ delegates to ↓</div>

      <div class="euai-node${t(`actor`)}">
        <span class="euai-node__name">Actor (Human · Agent · System)</span>
        <span class="euai-node__act">EU AI Act: Actor (no independent role assigned to Agents)</span>
        <span class="euai-node__desc">Executes within governance frame. When Actor is an Agent, accountability stays with Initiator.</span>
        <div class="euai-actor-types">
          <div class="euai-actor-card">
            <span class="euai-actor-card__type">Human</span>
            <span class="euai-actor-card__asset">Employee</span>
            <span class="euai-actor-card__frame">Employment contract</span>
            <span class="euai-actor-card__desc">Rights, duties, labour law</span>
          </div>
          <div class="euai-actor-card">
            <span class="euai-actor-card__type">Agent</span>
            <span class="euai-actor-card__asset">AI workforce</span>
            <span class="euai-actor-card__frame">Governance document — scope, limits, termination</span>
            <span class="euai-actor-card__desc">No legal status, accountability at Initiator</span>
          </div>
          <div class="euai-actor-card">
            <span class="euai-actor-card__type">System</span>
            <span class="euai-actor-card__asset">Production asset</span>
            <span class="euai-actor-card__frame">Service / maintenance contract</span>
            <span class="euai-actor-card__desc">Configurable, maintainable, replaceable</span>
          </div>
        </div>
      </div>

      <div class="euai-arrow">↓ produces value for ↓</div>

      <div class="euai-node${t(`beneficiary`)}">
        <span class="euai-node__name">Beneficiary</span>
        <span class="euai-node__act">EU AI Act: affected person / end user</span>
        <span class="euai-node__desc">Subject to transparency rights Art. 50.</span>
      </div>
    </div>

    <div class="euai-insight">
      The EU AI Act assigns no independent role to AI Agents. Accountability defaults to the Deployer — the OIA Initiator. This is the structural basis for: <em>Capabilities converge. Accountability does not.</em>
    </div>
  `}function C(e,t){return`<button class="info-badge" data-overlay-target="${t}" type="button" aria-expanded="false">ⓘ ${e}</button>`}function w(e,t){return`<div class="info-overlay" id="${e}" hidden role="dialog" aria-modal="true">
    <div class="info-overlay__panel">
      <button class="info-overlay__close" type="button" aria-label="Close">×</button>
      <div class="info-overlay__content">${t}</div>
    </div>
  </div>`}function ce(e){let t=()=>{e.querySelectorAll(`.info-overlay`).forEach(e=>{e.hidden=!0}),e.querySelectorAll(`.info-badge`).forEach(e=>{e.setAttribute(`aria-expanded`,`false`)})};e.querySelectorAll(`.info-badge`).forEach(n=>{n.addEventListener(`click`,r=>{r.stopPropagation();let i=n.dataset.overlayTarget;if(!i)return;let a=e.querySelector(`#${i}`);if(!a)return;let o=a.hidden;t(),o&&(a.hidden=!1,n.setAttribute(`aria-expanded`,`true`))})}),e.querySelectorAll(`.info-overlay`).forEach(e=>{e.addEventListener(`click`,n=>{n.target===e&&t()}),e.querySelector(`.info-overlay__close`)?.addEventListener(`click`,e=>{e.stopPropagation(),t()})})}function T(e,t){return e.elements.find(e=>e.type===`container`&&e.children.includes(t))}function le(e,t){let n=[],r=t;for(;;){let t=T(e,r);if(!t)break;n.unshift(t),r=t.id}return n}var ue=new Set([`frame`,`spectrum`]);function E(e,t){let n=le(e,t).filter(e=>!ue.has(e.containerType)&&e.navigationVisible!==!1),r=e.elements.find(e=>e.id===t),i=r?.type===`item`?r.parent:void 0,a=i?e.elements.find(e=>e.id===i):void 0,o=[`<a class="detail-breadcrumb__item" href="#/">OIA</a>`];return n.forEach(e=>{o.push(`<span class="detail-breadcrumb__sep">›</span><a class="detail-breadcrumb__item" href="#/detail/${encodeURIComponent(e.id)}">${e.label}</a>`)}),a&&o.push(`<span class="detail-breadcrumb__sep">›</span><a class="detail-breadcrumb__item" href="#/detail/${encodeURIComponent(a.id)}">${a.label}</a>`),r&&o.push(`<span class="detail-breadcrumb__sep">›</span><span class="detail-breadcrumb__item detail-breadcrumb__item--current">${r.label}</span>`),`<nav class="detail-breadcrumb">${o.join(``)}</nav>`}function D(e,t){let n=T(e,t);if(!n)return``;let r=n.children.filter(e=>e!==t);return r.length===0?``:`<div class="detail-related"><span class="detail-related__label">Related:</span>${r.map(t=>{let n=e.elements.find(e=>e.id===t);return n?`<a class="detail-related__item" href="#/detail/${encodeURIComponent(t)}">${n.label}</a>`:``}).filter(Boolean).join(``)}</div>`}var O={"defines frame for":`governs`,"creates value for":`produces`},k={"defines frame for":`The Initiator sets goals, permissions and ODRs under which the Actor operates. No action without a governance frame.`,"creates value for":`The Actor's work produces outcomes that flow to the Beneficiary. Value creation is the purpose of action.`};function A(e,t){if(!t.role)return``;let n=e.connections.filter(t=>{if(!t.edgeType)return!1;let n=e.elements.find(e=>e.id===t.from),r=e.elements.find(e=>e.id===t.to);return n?.type===`item`&&n.role!==void 0&&r?.type===`item`&&r.role!==void 0});if(n.length===0)return``;let r=new Set(n.map(e=>e.to)),i=new Set(n.map(e=>e.from)),a=[...new Set([...i,...r])].find(e=>!r.has(e));if(!a)return``;let o=[a],s=[],c=a;for(;;){let e=n.find(e=>e.from===c);if(!e)break;let t=e.edgeType;s.push({label:t,badge:O[t]??``,tooltip:k[t]??``}),o.push(e.to),c=e.to}let l=[];return o.forEach((n,r)=>{if(r>0){let{label:e,badge:t,tooltip:n}=s[r-1];l.push(`<div class="detail-flow__edge" title="${n}">
        ${t?`<span class="detail-flow__edge-badge">${t}</span>`:``}
        <span class="detail-flow__edge-arrow">→</span>
        <span class="detail-flow__edge-label">${e}</span>
      </div>`)}let i=e.elements.find(e=>e.id===n);if(!i)return;let a=n===t.id,o=a?t.color??``:i.color??``,c=a&&o?` detail-flow__node--${o}`:``,u=a?``:` detail-flow__node--inactive`;a?l.push(`<span class="detail-flow__node detail-flow__node--current${c}">${i.label}</span>`):l.push(`<a class="detail-flow__node${u}" href="#/detail/${encodeURIComponent(n)}">${i.label}</a>`)}),`<div class="detail-flow"><div class="detail-flow__label">Governance flow</div><div class="detail-flow__row">${l.join(``)}</div></div>`}function j(e,t){if(!t.role)return``;let n=e.elements.find(e=>e.type===`container`&&e.children.includes(t.id));if(!n)return``;let r=e.elements.find(e=>e.type===`container`&&e.children.includes(n.id));if(!r)return``;let[,i,a,o]=r.children;return i?`<div class="detail-actor-context">
    ${v(e,i)}
    ${v(e,a)}
    ${o?y(e,o):``}
  </div>`:``}var M={initiator:{was:`The Initiator is the entity that legitimises an action before it takes place. It sets the governance frame: goals, permissions, rules, and the boundaries within which Actors operate. The Initiator interacts with OIA constitutively — not operatively. It appears before the process, not within it. Accountability always traces back to the Initiator. Always reducible to a human or organisation.`,warum:`Organisations fail at AI not because of bad Agents. They fail because no one explicitly defined who the Initiator is. When the governance frame is absent — which data may an Agent use, which goals may it pursue, which decisions may it make autonomously — Agents operate in a vacuum. They optimise without knowing what for. The Initiator is the answer to the question: who is responsible?`,wie:`In RACI terms: <strong>Accountable.</strong> The party that ultimately stands behind the outcome — not the executor.<br><br>In EU AI Act terms: <strong>Deployer.</strong> The entity that puts an AI system into operation within a specific context and bears responsibility for that context. The Deployer has a contract with the Provider (external to OIA) that defines obligations and their limits.`},actor:{was:`The Actor is the primary interaction entity of OIA. It engages with Capabilities, Features, and the Knowledge Core. OIA is built from the Actor's perspective. The Actor can be a Human, an Agent, or a System — three distinct types of organisational asset.`,warum:`Without an Actor, the governance frame of the Initiator has no effect. The Actor is the entity that translates intent into action. In a world where Agents increasingly operate alongside humans, making Actor types explicit is an architectural necessity — not a theoretical exercise.`,wie:`The three Actor types differ in how they are governed:<div class="detail-wwh__actor-types"><div class="detail-wwh__actor-card"><div class="detail-wwh__actor-type">Human</div><div class="detail-wwh__actor-asset">Employee</div><div class="detail-wwh__actor-frame">Employment contract — rights, duties, labour law</div></div><div class="detail-wwh__actor-card"><div class="detail-wwh__actor-type">Agent</div><div class="detail-wwh__actor-asset">AI workforce</div><div class="detail-wwh__actor-frame">Governance document — scope, limits, termination</div></div><div class="detail-wwh__actor-card"><div class="detail-wwh__actor-type">System</div><div class="detail-wwh__actor-asset">Production asset</div><div class="detail-wwh__actor-frame">Service / maintenance contract</div></div></div><p class="detail-wwh__note">The EU AI Act assigns no independent role to AI Agents as actors. When an Agent acts, accountability defaults to the Deployer — which maps to the OIA Initiator. This is the structural basis for the key insight: <strong>Capabilities converge. Accountability does not.</strong></p>`},beneficiary:{was:`The Beneficiary is the entity for whom the outcome creates value. It legitimises the action — without a Beneficiary, there is no purpose. The Beneficiary receives output but does not control the process. Feedback from the Beneficiary flows back into the architecture.`,warum:`The Beneficiary is often the invisible party in AI implementations. Systems are built, Actors are trained, governance is defined — but the question "for whom, and with what outcome?" is answered too late. Making the Beneficiary explicit forces the question before implementation begins.`,wie:`In RACI terms: <strong>Informed.</strong> Receives the result, provides feedback.<br><br>In EU AI Act terms: <strong>Affected person / end user.</strong> Subject to transparency and notification rights under Art. 50 — must be informed when interacting with AI systems.`}};function N(e){if(!e.role)return``;let t=M[e.role];if(!t)return``;let n=(e,t)=>`
    <div class="detail-wwh__section">
      <div class="detail-wwh__label">${e}</div>
      <div class="detail-wwh__body">${t}</div>
    </div>`;return`<div class="detail-wwh">
    ${n(`What`,t.was)}
    ${n(`Why`,t.warum)}
    ${n(`How`,t.wie)}
  </div>`}var P={"#L9-sa-human":{what:`The Human Actor decides contextually, drawing on experience, judgment, and organisational knowledge. Embedded in hierarchy and social context — which constrains and enriches decisions simultaneously.`,why:`The Human brings something no Agent has: accountability. Not just legal accountability — but the lived understanding of consequences. A Human Actor filters through values, relationships, and experience before acting. That friction is not a weakness. It is governance in practice.`,how:`Organisational asset: <strong>Employee.</strong> Governance frame: Employment contract — rights, duties, governed by labour law.<br><br>On the Autonomy spectrum: middle position. More decision space than a System, less operational throughput than an Agent.<br>On the Accountability spectrum: rightmost position — always, regardless of Agent capabilities.`},"#L9-sa-agent":{what:`The Agent Actor operates goal-directed and autonomously within a defined governance frame. It processes information in parallel, runs continuously, and applies consistent logic without cognitive bias or organisational embeddedness.`,why:`Agents do not replace humans — they extend organisational reach into tasks that exceed human throughput: continuous monitoring, parallel processing, pattern recognition at scale. Their value is precisely what makes them require governance: they act without the friction that humans provide naturally.`,how:`Organisational asset: <strong>AI workforce.</strong> Governance frame: Governance document — scope, limits, termination. No legal status, no independent accountability.<br><br>On the Autonomy spectrum: rightmost position.<br>On the Accountability spectrum: middle position — accountability defaults to the Initiator.`},"#L9-sa-system":{what:`The System Actor executes deterministically within fixed parameters. It does not decide — it processes. Configurable, maintainable, replaceable.`,why:`Systems are the stable foundation on which Agents and Humans operate. They provide consistency, auditability, and scalability — without the variability of human judgment or the autonomy of Agents. Their predictability is their value.`,how:`Organisational asset: <strong>Production asset.</strong> Governance frame: Service / maintenance contract.<br><br>On the Autonomy spectrum: leftmost position — no independent decision space.<br>On the Accountability spectrum: leftmost position — inherits accountability from the Initiator.`}};function F(e){let t=P[e.id];if(!t)return``;let n=(e,t)=>`
    <div class="detail-wwh__section">
      <div class="detail-wwh__label">${e}</div>
      <div class="detail-wwh__body">${t}</div>
    </div>`;return`<div class="detail-wwh">
    ${n(`What`,t.what)}
    ${n(`Why`,t.why)}
    ${n(`How`,t.how)}
  </div>`}function I(e,t,n=0){return n>3?``:t.map(t=>{let r=e.elements.find(e=>e.id===t);if(!r)return``;let i=n>0?` style="margin-left:${n*16}px"`:``;if(r.type===`container`){let t=r.children.length>0?`<div class="detail-children">${I(e,r.children,n+1)}</div>`:``;return`<div class="detail-item"${i}>
        <span class="detail-item-label">${r.label}</span>
        <span class="detail-item__meta">${r.containerType}</span>
        ${t}
      </div>`}return`<div class="detail-item"${i}>
      <span class="detail-item-label">${r.icon?r.icon+` `:``}${r.label}</span>
      <span class="detail-item__meta">${r.itemType}</span>
    </div>`}).join(``)}function L(e){return e.replace(/---\n?/g,`<hr class="sem__hr">`).replace(/\*\*(.+?)\*\*/g,`<strong>$1</strong>`).split(/\n\n+/).map(e=>e.replace(/\n/g,`<br>`).trim()).filter(Boolean).map(e=>`<p class="sem__para">${e}</p>`).join(``)}function R(e){let t=e.sections;if(t.length===0)return``;let n=t[0].sectionId,r=t.map(e=>`<button class="sem__nav-item${e.headerLevel>2?` sem__nav-item--sub`:``}${e.sectionId===n?` sem__nav-item--active`:``}" data-sem-nav="${e.sectionId}" aria-pressed="${e.sectionId===n}">${e.title}</button>`).join(``),i=t.map(e=>{let t=e.sectionId===n?``:` hidden`;return`<div class="sem__panel${e.sectionId===n?` sem__panel--active`:``}" data-sem-panel="${e.sectionId}"${t}>
        <div class="sem__panel-title">${e.title}</div>
        <div class="sem__panel-body">${L(e.rawText)}</div>
      </div>`}).join(``);return`<div class="sem">
    <div class="sem__header">
      <span class="sem__label">Documentation</span>
      <span class="sem__count">${t.length} sections</span>
    </div>
    <div class="sem__body">
      <nav class="sem__nav" aria-label="Semantic sections">${r}</nav>
      <div class="sem__content">${i}</div>
    </div>
  </div>`}function z(e){let t=e.querySelector(`.sem__nav`),n=e.querySelector(`.sem__content`);if(!t||!n)return;let r=t,i=n,a=e.querySelector(`.sem__nav-item--active`)?.dataset.semNav??null;function o(e,t){i.querySelectorAll(`.sem__panel`).forEach(t=>{let n=t,r=n.dataset.semPanel===e;n.hidden=!r,n.classList.toggle(`sem__panel--active`,r)}),r.querySelectorAll(`.sem__nav-item`).forEach(n=>{let r=n;r.classList.toggle(`sem__nav-item--active`,t&&r.dataset.semNav===e),r.setAttribute(`aria-pressed`,String(t&&r.dataset.semNav===e))})}r.querySelectorAll(`.sem__nav-item`).forEach(e=>{let t=e,n=t.dataset.semNav;t.addEventListener(`mouseenter`,()=>{o(n,n===a)}),t.addEventListener(`mouseleave`,()=>{a&&o(a,!0)}),t.addEventListener(`click`,()=>{a=n,o(n,!0)})})}function B(e,t,n=null){let r=e.elements.find(e=>e.id===t),i=document.createElement(`div`);if(i.className=`detail-view`,!r)return i.innerHTML=`
      <a class="detail-back" href="#/">← Back</a>
      <div class="detail-title">Element not found: ${t}</div>
    `,i;let a=r.type===`container`?r.children:[],o=r.description||``,s=E(e,t),c=D(e,t);if(r.id===`#L9`&&r.type===`container`)return i.innerHTML=`
      ${s}
      <div class="detail-id">${r.id}</div>
      <div class="detail-title">${r.label}</div>
      ${o?`<div class="detail-desc">${o}</div>`:``}
      ${n?R(n):``}
      ${ie(e,r)}
      ${c}
    `,n&&z(i),i;let l=r.type===`item`&&r.itemType===`participant`?r:null,u=l?A(e,l):``,d=l?N(l):``,f=l?F(l):``,p=l?j(e,l):``,m=a.length>0?`<div class="detail-items">${I(e,a)}</div>`:o?``:`<div class="detail-items"><div class="detail-item detail-item--empty">No sub-elements</div></div>`,h=l?.role?C(`EU AI Act context`,`overlay-eu-ai-act`):``,g=l?.role?w(`overlay-eu-ai-act`,S(l.role)):``;return i.innerHTML=`
    ${s}
    <div class="detail-header">
      <div>
        <div class="detail-id">${r.id}</div>
        <div class="detail-title">${r.label}</div>
      </div>
      ${h}
    </div>
    ${g}
    ${o?`<div class="detail-desc">${o}</div>`:``}
    ${u}
    ${d}
    ${f}
    ${p}
    ${n?R(n):``}
    ${m}
    ${c}
  `,l?.role&&ce(i),n&&z(i),i}var V={model:{name:`Organizational Intelligence Architecture`,short_name:`OIA`,version:`v3-full-mapping`,schema_version:`v3`,mapping_mode:`strict_mechanical`},source_documents:[{document_id:`doc_c1_entities`,filename:`C1_Entities.md`,element_id:`c1_entities`,document_type:`cross_cutting`,source_of_truth:!0,document_order:1},{document_id:`doc_c2_information_processing_transformation_pipeline`,filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,document_type:`cross_cutting`,source_of_truth:!0,document_order:2},{document_id:`doc_l1_infrastructure`,filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,document_type:`layer`,source_of_truth:!0,document_order:3},{document_id:`doc_l2_data_sources`,filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,document_type:`layer`,source_of_truth:!0,document_order:4},{document_id:`doc_l3_knowledge_core`,filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,document_type:`layer`,source_of_truth:!0,document_order:5},{document_id:`doc_l4_features_in_apis`,filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,document_type:`layer`,source_of_truth:!0,document_order:6},{document_id:`doc_l5_capabilities`,filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,document_type:`layer`,source_of_truth:!0,document_order:7},{document_id:`doc_l6_applications_tools_solutions`,filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,document_type:`layer`,source_of_truth:!0,document_order:8},{document_id:`doc_l7_use_cases_challenges`,filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,document_type:`layer`,source_of_truth:!0,document_order:9},{document_id:`doc_l8_situation_context`,filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,document_type:`layer`,source_of_truth:!0,document_order:10},{document_id:`doc_l9_system_participants`,filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,document_type:`layer`,source_of_truth:!0,document_order:11},{document_id:`doc_l10_business_outcome`,filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,document_type:`layer`,source_of_truth:!0,document_order:12}],elements:[{element_id:`c1_entities`,element_type:`cross_cutting`,name:`Organizational Entities`,source_document_id:`doc_c1_entities`,root_section_ids:[`c1_entities__s001`],section_count:8},{element_id:`c2_information_processing_transformation_pipeline`,element_type:`cross_cutting`,name:`Data Pipelines`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,root_section_ids:[`c2_information_processing_transformation_pipeline__s001`],section_count:8},{element_id:`l1_infrastructure`,element_type:`layer`,name:`AI & Cognitive Infrastructure`,source_document_id:`doc_l1_infrastructure`,root_section_ids:[`l1_infrastructure__s001`],section_count:10},{element_id:`l2_data_sources`,element_type:`layer`,name:`Data Sources`,source_document_id:`doc_l2_data_sources`,root_section_ids:[`l2_data_sources__s001`],section_count:9},{element_id:`l3_knowledge_core`,element_type:`layer`,name:`Knowledge Core`,source_document_id:`doc_l3_knowledge_core`,root_section_ids:[`l3_knowledge_core__s001`],section_count:8},{element_id:`l4_features_in_apis`,element_type:`layer`,name:`Features in APIs`,source_document_id:`doc_l4_features_in_apis`,root_section_ids:[`l4_features_in_apis__s001`],section_count:8},{element_id:`l5_capabilities`,element_type:`layer`,name:`Capabilities`,source_document_id:`doc_l5_capabilities`,root_section_ids:[`l5_capabilities__s001`],section_count:9},{element_id:`l6_applications_tools_solutions`,element_type:`layer`,name:`Applications`,source_document_id:`doc_l6_applications_tools_solutions`,root_section_ids:[`l6_applications_tools_solutions__s001`],section_count:8},{element_id:`l7_use_cases_challenges`,element_type:`layer`,name:`Use Cases`,source_document_id:`doc_l7_use_cases_challenges`,root_section_ids:[`l7_use_cases_challenges__s001`],section_count:8},{element_id:`l8_situation_context`,element_type:`layer`,name:`Situation & Context`,source_document_id:`doc_l8_situation_context`,root_section_ids:[`l8_situation_context__s001`],section_count:11},{element_id:`l9_system_participants`,element_type:`layer`,name:`System Participants`,source_document_id:`doc_l9_system_participants`,root_section_ids:[`l9_system_participants__s001`],section_count:11},{element_id:`l10_business_outcome`,element_type:`layer`,name:`Business Outcome`,source_document_id:`doc_l10_business_outcome`,root_section_ids:[`l10_business_outcome__s001`],section_count:8}],sections:[{section_id:`c1_entities__s001`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:null,child_section_ids:[`c1_entities__s002`,`c1_entities__s003`,`c1_entities__s004`,`c1_entities__s005`,`c1_entities__s006`,`c1_entities__s007`,`c1_entities__s008`],order_index:1,document_index:1,header_level:1,title:`Concept – Organizational Entities`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Concept – Organizational Entities`,header_level:1,document_index:1,path_string:`Concept – Organizational Entities`,line_start:null,line_end:null},section_path:[`Concept – Organizational Entities`]},{section_id:`c1_entities__s002`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:1,document_index:2,header_level:2,title:`Rationale`,section_type:`custom`,raw_text:`Semantic base objects such as Person, Project, Organizational Unit, or Customer.

Entities represent the stable concepts about which an organization thinks, works, and decides.  
They are not raw data, but the **meaning layer** above the data.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Rationale`,header_level:2,document_index:2,path_string:`Concept – Organizational Entities > Rationale`,line_start:null,line_end:null},section_path:[`Concept – Organizational Entities`,`Rationale`]},{section_id:`c1_entities__s003`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:2,document_index:3,header_level:2,title:`Role in the Model`,section_type:`role`,raw_text:`Stable, system-independent units that consolidate information from multiple sources.

- Entities are **uniquely identifiable**
- Entities are **consistent across systems**
- Entities are **stored and managed in the Knowledge Core**
- Entities are the foundation for **context, understanding, and decisions**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Role in the Model`,header_level:2,document_index:3,path_string:`Concept – Organizational Entities > Role in the Model`,line_start:null,line_end:null},section_path:[`Concept – Organizational Entities`,`Role in the Model`]},{section_id:`c1_entities__s004`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:3,document_index:4,header_level:2,title:`Relationships`,section_type:`custom`,raw_text:`- are modeled in the Knowledge Core (L3)  
- are aggregated from different Data Sources (L1)  
- are formed and enriched via Data Pipelines (C2)  
- are used by Capabilities (L5)  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Relationships`,header_level:2,document_index:4,path_string:`Concept – Organizational Entities > Relationships`,line_start:null,line_end:null},section_path:[`Concept – Organizational Entities`,`Relationships`]},{section_id:`c1_entities__s005`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:4,document_index:5,header_level:2,title:`Interlinking (Core Principle)`,section_type:`custom`,raw_text:`Example linkage:

- Organization  
  → has Organizational Units  
  → within which Persons work  
  → who work on Projects  
  → use News & Media for context  

**Insight:**
- Entities do not exist in isolation, but are **systematically interconnected**
- This interlinking produces:
  - Context  
  - Understanding  
  - Decision-making capacity  

➡️ This interconnected knowledge is created in the:
- **Knowledge Core**  
- → as **interlinked data (semantic network)**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Interlinking (Core Principle)`,header_level:2,document_index:5,path_string:`Concept – Organizational Entities > Interlinking (Core Principle)`,line_start:null,line_end:null},section_path:[`Concept – Organizational Entities`,`Interlinking (Core Principle)`]},{section_id:`c1_entities__s006`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:5,document_index:6,header_level:2,title:`Distinction from Data Sources`,section_type:`distinction`,raw_text:`**Important architectural point:**

- Entities:
  - ❌ do not belong in Data Sources  
  - ❌ are not raw data  
  - ❌ are not system-bound artifacts  

- Instead:
  - ✅ they are **extracted / derived** from Data Sources  
  - ✅ they are **unified and modeled** in the Knowledge Core  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Distinction from Data Sources`,header_level:2,document_index:6,path_string:`Concept – Organizational Entities > Distinction from Data Sources`,line_start:null,line_end:null},section_path:[`Concept – Organizational Entities`,`Distinction from Data Sources`]},{section_id:`c1_entities__s007`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:6,document_index:7,header_level:2,title:`Core Statement`,section_type:`core_statement`,raw_text:`Entities consolidate information across systems and make their meaning explicit.

> Entities are not the data of an organization – they are its meaning.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Core Statement`,header_level:2,document_index:7,path_string:`Concept – Organizational Entities > Core Statement`,line_start:null,line_end:null},section_path:[`Concept – Organizational Entities`,`Core Statement`]},{section_id:`c1_entities__s008`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:7,document_index:8,header_level:2,title:`Examples`,section_type:`custom`,raw_text:`- Persons  
- Organizations  
- Locations  
- Customers  
- Materials  
- Projects  
- News & Media  
- Rules & Policies  
- Blogs  
- Systems  `,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Examples`,header_level:2,document_index:8,path_string:`Concept – Organizational Entities > Examples`,line_start:null,line_end:null},section_path:[`Concept – Organizational Entities`,`Examples`]},{section_id:`c2_information_processing_transformation_pipeline__s001`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:null,child_section_ids:[`c2_information_processing_transformation_pipeline__s002`,`c2_information_processing_transformation_pipeline__s003`,`c2_information_processing_transformation_pipeline__s004`,`c2_information_processing_transformation_pipeline__s005`,`c2_information_processing_transformation_pipeline__s006`,`c2_information_processing_transformation_pipeline__s007`,`c2_information_processing_transformation_pipeline__s008`],order_index:1,document_index:9,header_level:1,title:`C2 – Data Pipelines`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`C2 – Data Pipelines`,header_level:1,document_index:9,path_string:`C2 – Data Pipelines`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`]},{section_id:`c2_information_processing_transformation_pipeline__s002`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:1,document_index:10,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Data Pipelines are **reusable transformation mechanisms for the extraction, structuring, and enrichment of data**  
*(i.e., the processing steps that bring together and prepare data from different sources)*

They are not a separate semantic layer, but an operational mechanism within the architecture.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Definition`,header_level:2,document_index:10,path_string:`C2 – Data Pipelines > Definition`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Definition`]},{section_id:`c2_information_processing_transformation_pipeline__s003`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:2,document_index:11,header_level:2,title:`Role in the Model`,section_type:`role`,raw_text:`Data Pipelines process raw data and prepare it for further use.

- extract data from **Data Sources (L2)**
- structure and clean data
- consolidate data from different sources
- contextually enrich data

Important:

- Data Pipelines **operate on data, not on meaning**
- they produce **no semantic interpretation**
- they are **a transformation mechanism, not the overall logic of the architecture**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Role in the Model`,header_level:2,document_index:11,path_string:`C2 – Data Pipelines > Role in the Model`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Role in the Model`]},{section_id:`c2_information_processing_transformation_pipeline__s004`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:3,document_index:12,header_level:2,title:`Position in the Architecture`,section_type:`classification`,raw_text:`Data Pipelines are **not a linear main flow**, but are used at different points:

- between **Data Sources (L2)** and **Knowledge Core (L3)**  
- within **Capabilities (L5)** for transformation and enrichment  
- within **Applications (L6)** for situational processing  

They are thus a **reusable processing concept**, not an independent layer.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Position in the Architecture`,header_level:2,document_index:12,path_string:`C2 – Data Pipelines > Position in the Architecture`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Position in the Architecture`]},{section_id:`c2_information_processing_transformation_pipeline__s005`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:4,document_index:13,header_level:2,title:`Relationships in the Model`,section_type:`custom`,raw_text:`- process data from **Data Sources (L2)**  
- use **Infrastructure (L1)** for execution  
- feed the **Knowledge Core (L3)**  
- can be used by **Features (L4)**, **Capabilities (L5)**, and **Applications (L6)**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Relationships in the Model`,header_level:2,document_index:13,path_string:`C2 – Data Pipelines > Relationships in the Model`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Relationships in the Model`]},{section_id:`c2_information_processing_transformation_pipeline__s006`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:5,document_index:14,header_level:2,title:`Output Types`,section_type:`custom`,raw_text:`The results of Data Pipelines can take two forms:

**1. Persistent**
- structured and enriched data is stored in the **Knowledge Core (L3)**

**2. Ephemeral**
- data is processed situationally and used directly in:
  - **Capabilities (L5)** or
  - **Applications (L6)**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Output Types`,header_level:2,document_index:14,path_string:`C2 – Data Pipelines > Output Types`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Output Types`]},{section_id:`c2_information_processing_transformation_pipeline__s007`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:6,document_index:15,header_level:2,title:`Distinction from Other Concepts`,section_type:`distinction`,raw_text:`**vs. Knowledge Core (L3):**
- Pipeline → processes data  
- Knowledge Core → creates meaning  

**vs. Capabilities (L5):**
- Pipeline → technical processing  
- Capability → business-level effect  

**vs. Features (L4):**
- Pipeline → flow / process  
- Feature → reusable technical function  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Distinction from Other Concepts`,header_level:2,document_index:15,path_string:`C2 – Data Pipelines > Distinction from Other Concepts`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Distinction from Other Concepts`]},{section_id:`c2_information_processing_transformation_pipeline__s008`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:7,document_index:16,header_level:2,title:`Core Statement`,section_type:`core_statement`,raw_text:`Data Pipelines transform data – they do not create meaning.

> They are the operational mechanism of processing, not the logic of the architecture.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Core Statement`,header_level:2,document_index:16,path_string:`C2 – Data Pipelines > Core Statement`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Core Statement`]},{section_id:`l1_infrastructure__s001`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:null,child_section_ids:[`l1_infrastructure__s002`,`l1_infrastructure__s003`,`l1_infrastructure__s004`,`l1_infrastructure__s005`,`l1_infrastructure__s006`,`l1_infrastructure__s009`,`l1_infrastructure__s010`],order_index:1,document_index:17,header_level:1,title:`L1 – AI Infrastructure`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`L1 – AI Infrastructure`,header_level:1,document_index:17,path_string:`L1 – AI Infrastructure`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`]},{section_id:`l1_infrastructure__s002`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[],order_index:1,document_index:18,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`AI Infrastructure is the **technological execution environment for processing, storage, and model usage**  
*(i.e., the technical basis such as servers, databases, and AI models on which everything runs)*

It provides the fundamental technical resources necessary for operating the architecture.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Definition`,header_level:2,document_index:18,path_string:`L1 – AI Infrastructure > Definition`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Definition`]},{section_id:`l1_infrastructure__s003`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[],order_index:2,document_index:19,header_level:2,title:`Role in the Model`,section_type:`role`,raw_text:`AI Infrastructure enables the execution of all technical processes within the architecture, but carries no business or semantic meaning.

- provides **compute, storage, and network resources**  
- enables the execution of **Data Pipelines (C2)**, **Features (L4)**, and **Capabilities (L5)**  
- provides **models and technical services**  
- is the basis for processing data, not for interpreting it  

Important:

- AI Infrastructure **executes – it does not understand**
- it is **not a knowledge store**
- it is **not a carrier of meaning**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Role in the Model`,header_level:2,document_index:19,path_string:`L1 – AI Infrastructure > Role in the Model`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Role in the Model`]},{section_id:`l1_infrastructure__s004`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[],order_index:3,document_index:20,header_level:2,title:`Position in the Architecture`,section_type:`classification`,raw_text:`AI Infrastructure forms the **lowest level of the architecture**.

All other layers build directly or indirectly on it, without themselves being part of the infrastructure.

It is thus an **enabler**, but not an active component of the business logic.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Position in the Architecture`,header_level:2,document_index:20,path_string:`L1 – AI Infrastructure > Position in the Architecture`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Position in the Architecture`]},{section_id:`l1_infrastructure__s005`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[],order_index:4,document_index:21,header_level:2,title:`Relationships in the Model`,section_type:`custom`,raw_text:`- is used by **Data Pipelines (C2)** for data processing  
- is used by **Features (L4)** to provide technical functions  
- is used indirectly by **Capabilities (L5)** via Features and Pipelines  
- supports the connection and processing of **Data Sources (L2)**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Relationships in the Model`,header_level:2,document_index:21,path_string:`L1 – AI Infrastructure > Relationships in the Model`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Relationships in the Model`]},{section_id:`l1_infrastructure__s006`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[`l1_infrastructure__s007`,`l1_infrastructure__s008`],order_index:5,document_index:22,header_level:2,title:`Classification of AI Models`,section_type:`classification`,raw_text:`Models such as machine learning models or Large Language Models (LLMs) are part of AI Infrastructure.

An important distinction must be made here:

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Classification of AI Models`,header_level:2,document_index:22,path_string:`L1 – AI Infrastructure > Classification of AI Models`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Classification of AI Models`]},{section_id:`l1_infrastructure__s007`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s006`,child_section_ids:[],order_index:1,document_index:23,header_level:3,title:`1. Generic Models`,section_type:`custom`,raw_text:`- pre-trained and obtained externally  
- contain no organization-specific, controlled knowledge  
- are used as **pure infrastructure components**  

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`1. Generic Models`,header_level:3,document_index:23,path_string:`L1 – AI Infrastructure > Classification of AI Models > 1. Generic Models`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Classification of AI Models`,`1. Generic Models`]},{section_id:`l1_infrastructure__s008`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s006`,child_section_ids:[],order_index:2,document_index:24,header_level:3,title:`2. Organization-Specific Adapted Models`,section_type:`custom`,raw_text:`- adapted to enterprise data through fine-tuning or training  
- reflect terminology, patterns, and structures of the organization  
- significantly influence behavior and results  

These models are **knowledge-adjacent**, but:

- their "knowledge" is **implicitly embedded in model behavior**  
- it is **not explicit, structured, or directly controllable**  
- it **cannot be used as a reliable knowledge base**  

Therefore:

> Even organization-specifically trained models are not knowledge stores in the sense of the Knowledge Core (L3).

The **Knowledge Core remains the only source of explicit, verifiable organizational knowledge**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`2. Organization-Specific Adapted Models`,header_level:3,document_index:24,path_string:`L1 – AI Infrastructure > Classification of AI Models > 2. Organization-Specific Adapted Models`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Classification of AI Models`,`2. Organization-Specific Adapted Models`]},{section_id:`l1_infrastructure__s009`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[],order_index:6,document_index:25,header_level:2,title:`Distinction from Other Layers`,section_type:`distinction`,raw_text:`**vs. Data Sources (L2):**
- Infrastructure → provides technical environment  
- Data Sources → contain data  

**vs. Knowledge Core (L3):**
- Infrastructure → executes processing  
- Knowledge Core → creates and structures meaning  

**vs. Features (L4):**
- Infrastructure → technical basis  
- Features → concrete technical functions  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Distinction from Other Layers`,header_level:2,document_index:25,path_string:`L1 – AI Infrastructure > Distinction from Other Layers`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Distinction from Other Layers`]},{section_id:`l1_infrastructure__s010`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[],order_index:7,document_index:26,header_level:2,title:`Core Statement`,section_type:`core_statement`,raw_text:`AI Infrastructure enables processing – it creates neither knowledge nor meaning.

> It is the technical foundation of the architecture, not its intelligence.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Core Statement`,header_level:2,document_index:26,path_string:`L1 – AI Infrastructure > Core Statement`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Core Statement`]},{section_id:`l2_data_sources__s001`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:null,child_section_ids:[`l2_data_sources__s002`,`l2_data_sources__s003`,`l2_data_sources__s004`,`l2_data_sources__s005`,`l2_data_sources__s006`,`l2_data_sources__s007`,`l2_data_sources__s008`,`l2_data_sources__s009`],order_index:1,document_index:27,header_level:1,title:`L2 – Data Sources`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`L2 – Data Sources`,header_level:1,document_index:27,path_string:`L2 – Data Sources`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`]},{section_id:`l2_data_sources__s002`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:1,document_index:28,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Data Sources are **system-bound primary sources for fragmented data, documents, and operational representations**  
*(i.e., the many individual systems in which information exists only in fragments and in isolation)*

They form the original storage locations for information within an organization.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Definition`,header_level:2,document_index:28,path_string:`L2 – Data Sources > Definition`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Definition`]},{section_id:`l2_data_sources__s003`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:2,document_index:29,header_level:2,title:`Role in the Model`,section_type:`role`,raw_text:`Data Sources represent the **primary data base** of the organization.

- contain **raw data, documents, and digital artifacts**  
- store information in **concrete systems and formats**  
- are **fragmented, redundant, and system-bound**  
- form the basis for all downstream processing steps  

Important:

- Data Sources contain **no consolidated semantic truth**
- they are **not the location of organized knowledge**
- they provide the starting point for **extraction, consolidation, and modeling**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Role in the Model`,header_level:2,document_index:29,path_string:`L2 – Data Sources > Role in the Model`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Role in the Model`]},{section_id:`l2_data_sources__s004`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:3,document_index:30,header_level:2,title:`Classification as Primary Sources`,section_type:`classification`,raw_text:`Data Sources are the **primary sources of the organization**.

- all downstream structures (e.g., Knowledge Core, indexes, Features) are based on them  
- they contain the **original data** from which all further representations arise  
- if primary sources are lost, reconstruction of downstream systems becomes uncertain or impossible  

This implies:

- downstream systems are **dependent on the integrity of Data Sources**
- they can **derive** content, but cannot fully reproduce it independently  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Classification as Primary Sources`,header_level:2,document_index:30,path_string:`L2 – Data Sources > Classification as Primary Sources`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Classification as Primary Sources`]},{section_id:`l2_data_sources__s005`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:4,document_index:31,header_level:2,title:`Position in the Architecture`,section_type:`classification`,raw_text:`Data Sources are the **operational reality layer of the organization**.

They arise historically through:

- introduction of software solutions  
- establishment of specialized systems  
- storage of documents and data in different contexts  

The result is a:

- distributed  
- heterogeneous  
- system-bound data landscape  

This structure is the starting point for the necessity of a **Knowledge Core (L3)**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Position in the Architecture`,header_level:2,document_index:31,path_string:`L2 – Data Sources > Position in the Architecture`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Position in the Architecture`]},{section_id:`l2_data_sources__s006`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:5,document_index:32,header_level:2,title:`Relationships in the Model`,section_type:`custom`,raw_text:`- supply data for **Data Pipelines (C2)**  
- are connected and processed via **AI Infrastructure (L1)**  
- are the foundation for building the **Knowledge Core (L3)**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Relationships in the Model`,header_level:2,document_index:32,path_string:`L2 – Data Sources > Relationships in the Model`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Relationships in the Model`]},{section_id:`l2_data_sources__s007`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:6,document_index:33,header_level:2,title:`Distinction from Entities`,section_type:`distinction`,raw_text:`A central architectural point is the clear separation between **primary data** and **semantic objects**:

**Data Sources (L2):**
- contain **source-specific representations**
- store data in concrete system contexts  
- form **no cross-system identities**  

**Entities (C1 / L3):**
- are **cross-system consolidated semantic objects**
- arise through extraction, consolidation, and linking from Data Sources  
- are uniformly modeled in the **Knowledge Core (L3)**  

Therefore:

> Data Sources never contain Entities in the architectural sense, but exclusively their local representations.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Distinction from Entities`,header_level:2,document_index:33,path_string:`L2 – Data Sources > Distinction from Entities`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Distinction from Entities`]},{section_id:`l2_data_sources__s008`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:7,document_index:34,header_level:2,title:`Distinction from Knowledge Core`,section_type:`distinction`,raw_text:`**Data Sources (L2):**
- contain data, documents, and artifacts  
- are fragmented and system-bound  
- contain knowledge-relevant signals  

**Knowledge Core (L3):**
- consolidates this data  
- structures it semantically  
- creates a **unified, interconnected knowledge model**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Distinction from Knowledge Core`,header_level:2,document_index:34,path_string:`L2 – Data Sources > Distinction from Knowledge Core`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Distinction from Knowledge Core`]},{section_id:`l2_data_sources__s009`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:8,document_index:35,header_level:2,title:`Core Statement`,section_type:`core_statement`,raw_text:`Data Sources are the primary sources of the organization – they contain data, but no consolidated meaning.

> They are the foundation of all further processing, but not the location of knowledge.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Core Statement`,header_level:2,document_index:35,path_string:`L2 – Data Sources > Core Statement`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Core Statement`]},{section_id:`l3_knowledge_core__s001`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:null,child_section_ids:[`l3_knowledge_core__s002`,`l3_knowledge_core__s003`,`l3_knowledge_core__s004`,`l3_knowledge_core__s005`,`l3_knowledge_core__s006`,`l3_knowledge_core__s007`,`l3_knowledge_core__s008`],order_index:1,document_index:36,header_level:1,title:`L3 – Knowledge Core`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`L3 – Knowledge Core`,header_level:1,document_index:36,path_string:`L3 – Knowledge Core`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`]},{section_id:`l3_knowledge_core__s002`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:1,document_index:37,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`The Knowledge Core is a **central, semantically structured, and controlled knowledge space** in which organization-wide consolidated entities, relationships, and context information are modeled  
*(i.e., the place where a coherent and comprehensible overall picture of the organization emerges from scattered data)*

It is the **sole authoritative source of semantic organizational knowledge**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Definition`,header_level:2,document_index:37,path_string:`L3 – Knowledge Core > Definition`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Definition`]},{section_id:`l3_knowledge_core__s003`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:2,document_index:38,header_level:2,title:`Role in the Model`,section_type:`role`,raw_text:`The Knowledge Core transforms fragmented data into **structured, interconnected, and contextualized meaning**.

- consolidates data from different **Data Sources (L2)**  
- models **Entities (C1)** as central semantic objects  
- explicitly maps **relationships between Entities**  
- integrates **context information** for interpretation  
- makes knowledge available consistently across the organization  

Important:

- Meaning arises **exclusively in the Knowledge Core**
- the Knowledge Core is **not a data store**, but a **semantic system**
- it is the foundation for **understanding, context, and decision-making capacity**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Role in the Model`,header_level:2,document_index:38,path_string:`L3 – Knowledge Core > Role in the Model`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Role in the Model`]},{section_id:`l3_knowledge_core__s004`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:3,document_index:39,header_level:2,title:`Structure of the Knowledge Core`,section_type:`structure`,raw_text:`The Knowledge Core is based on a clear semantic structure:

- **Entities** (identities)  
- **Relationships** (interlinking between entities)  
- **Attributes** (properties of entities and relationships)  
- **Context information** (situational classification and meaning)  

This structure forms a:

→ **interconnected semantic model of the organization**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Structure of the Knowledge Core`,header_level:2,document_index:39,path_string:`L3 – Knowledge Core > Structure of the Knowledge Core`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Structure of the Knowledge Core`]},{section_id:`l3_knowledge_core__s005`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:4,document_index:40,header_level:2,title:`Position in the Architecture`,section_type:`classification`,raw_text:`The Knowledge Core stands at the center of the architecture.

- is fed by **Data Pipelines (C2)** from Data Sources  
- provides knowledge for **Features (L4)**  
- is used by **Capabilities (L5)** to generate effects  
- is interpreted in the context of **Situations (L8)**  

It thus connects data, processing, and action.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Position in the Architecture`,header_level:2,document_index:40,path_string:`L3 – Knowledge Core > Position in the Architecture`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Position in the Architecture`]},{section_id:`l3_knowledge_core__s006`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:5,document_index:41,header_level:2,title:`Governance and Control`,section_type:`governance`,raw_text:`The Knowledge Core is a **controlled and trustworthy knowledge space**.

- Knowledge is **explicitly modeled and traceable**  
- Structures are **versionable and verifiable**  
- Access is **controllable and security-critical**  
- Changes are **controlled and auditable**  

This fundamentally distinguishes the Knowledge Core from:

- Data Sources (fragmented, unstructured)  
- AI Infrastructure / LLMs (implicit, probabilistic)

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Governance and Control`,header_level:2,document_index:41,path_string:`L3 – Knowledge Core > Governance and Control`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Governance and Control`]},{section_id:`l3_knowledge_core__s007`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:6,document_index:42,header_level:2,title:`Distinction from Other Layers`,section_type:`distinction`,raw_text:`**vs. Data Sources (L2):**
- Data Sources → contain primary data  
- Knowledge Core → creates semantic structure and meaning  

**vs. AI Infrastructure (L1):**
- Infrastructure → executes processing  
- Knowledge Core → holds and structures knowledge  

**vs. Data Pipelines (C2):**
- Pipelines → transform data  
- Knowledge Core → models meaning  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Distinction from Other Layers`,header_level:2,document_index:42,path_string:`L3 – Knowledge Core > Distinction from Other Layers`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Distinction from Other Layers`]},{section_id:`l3_knowledge_core__s008`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:7,document_index:43,header_level:2,title:`Core Statement`,section_type:`core_statement`,raw_text:`The Knowledge Core is the place where data becomes meaning.

> It is the central knowledge authority of the organization and the foundation for all intelligent capabilities.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Core Statement`,header_level:2,document_index:43,path_string:`L3 – Knowledge Core > Core Statement`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Core Statement`]},{section_id:`l4_features_in_apis__s001`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:null,child_section_ids:[`l4_features_in_apis__s002`,`l4_features_in_apis__s003`,`l4_features_in_apis__s004`,`l4_features_in_apis__s005`,`l4_features_in_apis__s006`,`l4_features_in_apis__s007`,`l4_features_in_apis__s008`],order_index:1,document_index:44,header_level:1,title:`L4 – Features in APIs`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`L4 – Features in APIs`,header_level:1,document_index:44,path_string:`L4 – Features in APIs`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`]},{section_id:`l4_features_in_apis__s002`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:1,document_index:45,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Features are **context-independent, API-based technical functions for processing data and knowledge**  
*(i.e., individual building blocks such as search, classification, or summarization that can be executed specifically, without themselves deciding what is useful)*

They provide standardized, reusable operations.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Definition`,header_level:2,document_index:45,path_string:`L4 – Features in APIs > Definition`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Definition`]},{section_id:`l4_features_in_apis__s003`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:2,document_index:46,header_level:2,title:`Role in the Model`,section_type:`role`,raw_text:`Features form the **technical function layer** of the architecture.

- execute **clearly defined operations** on data and knowledge  
- access **Data Sources (L2)** and **Knowledge Core (L3)**  
- use **AI Infrastructure (L1)** for execution  
- can incorporate **Data Pipelines (C2)**  

Important:

- Features are **context-independent**
- they are **not goal-directed**
- they produce **no independent effect**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Role in the Model`,header_level:2,document_index:46,path_string:`L4 – Features in APIs > Role in the Model`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Role in the Model`]},{section_id:`l4_features_in_apis__s004`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:3,document_index:47,header_level:2,title:`Position in the Architecture`,section_type:`classification`,raw_text:`Features are **modular building blocks** used by higher layers:

- are combined and orchestrated by **Capabilities (L5)**  
- can be directly incorporated into **Applications (L6)**  

They form the technical foundation for more complex functions, without themselves containing business logic.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Position in the Architecture`,header_level:2,document_index:47,path_string:`L4 – Features in APIs > Position in the Architecture`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Position in the Architecture`]},{section_id:`l4_features_in_apis__s005`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:4,document_index:48,header_level:2,title:`Characteristics`,section_type:`custom`,raw_text:`Features are:

- **deterministic or controllably executable**  
- **clearly specified and reusable**  
- **usable in isolation**  
- **without their own understanding of goals**  

They execute exactly the operation for which they were defined.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Characteristics`,header_level:2,document_index:48,path_string:`L4 – Features in APIs > Characteristics`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Characteristics`]},{section_id:`l4_features_in_apis__s006`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:5,document_index:49,header_level:2,title:`Examples`,section_type:`custom`,raw_text:`- Search  
- Classification  
- Extraction  
- Summarization  
- Calculation  
- OCR  
- Translation  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Examples`,header_level:2,document_index:49,path_string:`L4 – Features in APIs > Examples`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Examples`]},{section_id:`l4_features_in_apis__s007`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:6,document_index:50,header_level:2,title:`Distinction from Other Layers`,section_type:`distinction`,raw_text:`**vs. AI Infrastructure (L1):**
- Infrastructure → technical basis  
- Features → concrete functions  

**vs. Knowledge Core (L3):**
- Knowledge Core → holds meaning  
- Features → process data and knowledge  

**vs. Capabilities (L5):**
- Features → execute operations  
- Capabilities → generate business-level effect and pursue goals  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Distinction from Other Layers`,header_level:2,document_index:50,path_string:`L4 – Features in APIs > Distinction from Other Layers`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Distinction from Other Layers`]},{section_id:`l4_features_in_apis__s008`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:7,document_index:51,header_level:2,title:`Core Statement`,section_type:`core_statement`,raw_text:`Features provide technical functionality – they produce no independent effect.

> They are the building blocks from which capabilities emerge, but are not themselves capabilities.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Core Statement`,header_level:2,document_index:51,path_string:`L4 – Features in APIs > Core Statement`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Core Statement`]},{section_id:`l5_capabilities__s001`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:null,child_section_ids:[`l5_capabilities__s002`,`l5_capabilities__s003`,`l5_capabilities__s004`,`l5_capabilities__s005`,`l5_capabilities__s006`,`l5_capabilities__s007`,`l5_capabilities__s008`,`l5_capabilities__s009`],order_index:1,document_index:52,header_level:1,title:`L5 – Capabilities`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`L5 – Capabilities`,header_level:1,document_index:52,path_string:`L5 – Capabilities`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`]},{section_id:`l5_capabilities__s002`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:1,document_index:53,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Capabilities are **goal-directed, context-dependent abilities for generating effect through the use of knowledge and technical functions**  
*(i.e., what a system or organization can do to achieve a desired result in a concrete situation)*

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Definition`,header_level:2,document_index:53,path_string:`L5 – Capabilities > Definition`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Definition`]},{section_id:`l5_capabilities__s003`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:2,document_index:54,header_level:2,title:`Role in the Model`,section_type:`role`,raw_text:`Capabilities translate technical possibilities and knowledge into **business-effective abilities**.

- use **Features (L4)** as technical building blocks  
- access the **Knowledge Core (L3)**  
- can use **Data Pipelines (C2)** for transformation  
- are applied in the context of **Situations (L8)**  
- are executed by **Actors (L9)**  

Important:

- Capabilities are **goal-directed**
- they are **context-dependent**
- they orchestrate technical and semantic resources

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Role in the Model`,header_level:2,document_index:54,path_string:`L5 – Capabilities > Role in the Model`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Role in the Model`]},{section_id:`l5_capabilities__s004`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:3,document_index:55,header_level:2,title:`Position in the Architecture`,section_type:`classification`,raw_text:`Capabilities form the **business capability layer** of the architecture.

They stand between:

- technical functions (L4)  
- and concrete application (L6)  

and connect:

→ Knowledge + Technology → Action potential

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Position in the Architecture`,header_level:2,document_index:55,path_string:`L5 – Capabilities > Position in the Architecture`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Position in the Architecture`]},{section_id:`l5_capabilities__s005`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:4,document_index:56,header_level:2,title:`Characteristics`,section_type:`custom`,raw_text:`Capabilities are:

- **expressed in business terms and technology-independent**  
- **goal-directed**  
- **context-dependent**  
- **combinable and orchestratable**  
- **more stable than technical implementations**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Characteristics`,header_level:2,document_index:56,path_string:`L5 – Capabilities > Characteristics`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Characteristics`]},{section_id:`l5_capabilities__s006`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:5,document_index:57,header_level:2,title:`Relationship to Business Outcome`,section_type:`custom`,raw_text:`Capabilities are oriented toward effect, but do not produce Business Outcome alone.

> Capabilities enable effect, but Business Outcome only arises through their application by Actors in a concrete situation.

Outcome arises through:

- Application of Capabilities  
- in the context of **Situations (L8)**  
- by **Actors (L9)**  
- typically within **Applications (L6)**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Relationship to Business Outcome`,header_level:2,document_index:57,path_string:`L5 – Capabilities > Relationship to Business Outcome`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Relationship to Business Outcome`]},{section_id:`l5_capabilities__s007`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:6,document_index:58,header_level:2,title:`Examples`,section_type:`custom`,raw_text:`- Analysis of information  
- Evaluation of options  
- Generation of content  
- Linking of knowledge  
- Decision support  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Examples`,header_level:2,document_index:58,path_string:`L5 – Capabilities > Examples`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Examples`]},{section_id:`l5_capabilities__s008`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:7,document_index:59,header_level:2,title:`Distinction from Other Layers`,section_type:`distinction`,raw_text:`**vs. Features (L4):**
- Features → execute operations  
- Capabilities → pursue goals and generate effect potential  

**vs. Knowledge Core (L3):**
- Knowledge Core → holds meaning  
- Capabilities → use meaning to generate effect  

**vs. Applications (L6):**
- Capabilities → describe ability  
- Applications → implement this ability concretely  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Distinction from Other Layers`,header_level:2,document_index:59,path_string:`L5 – Capabilities > Distinction from Other Layers`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Distinction from Other Layers`]},{section_id:`l5_capabilities__s009`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:8,document_index:60,header_level:2,title:`Core Statement`,section_type:`core_statement`,raw_text:`Capabilities are the level at which real possibilities for action emerge from technical functions and knowledge.

> They turn systems into action-capable systems – but only their application generates effect.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Core Statement`,header_level:2,document_index:60,path_string:`L5 – Capabilities > Core Statement`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Core Statement`]},{section_id:`l6_applications_tools_solutions__s001`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:null,child_section_ids:[`l6_applications_tools_solutions__s002`,`l6_applications_tools_solutions__s003`,`l6_applications_tools_solutions__s004`,`l6_applications_tools_solutions__s005`,`l6_applications_tools_solutions__s006`,`l6_applications_tools_solutions__s007`,`l6_applications_tools_solutions__s008`],order_index:1,document_index:61,header_level:1,title:`L6 – Applications`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`L6 – Applications`,header_level:1,document_index:61,path_string:`L6 – Applications`,line_start:null,line_end:null},section_path:[`L6 – Applications`]},{section_id:`l6_applications_tools_solutions__s002`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:1,document_index:62,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Applications are **orchestration and interaction units for the concrete application of Capabilities in the context of Situations**  
*(i.e., the systems or tools in which capabilities are combined and used to implement real tasks)*

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Definition`,header_level:2,document_index:62,path_string:`L6 – Applications > Definition`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Definition`]},{section_id:`l6_applications_tools_solutions__s003`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:2,document_index:63,header_level:2,title:`Role in the Model`,section_type:`role`,raw_text:`Applications are the place where Capabilities are **concretely applied, combined, and executed**.

- orchestrate **Capabilities (L5)** for solving concrete tasks  
- access the **Knowledge Core (L3)**  
- use **Features (L4)** and if applicable **Data Pipelines (C2)**  
- are used in the context of **Situations (L8)**  
- are used or executed by **Actors (L9)**  

Important:

- Applications are **context-dependent**
- they are the place of **concrete implementation**
- they connect capability with action

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Role in the Model`,header_level:2,document_index:63,path_string:`L6 – Applications > Role in the Model`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Role in the Model`]},{section_id:`l6_applications_tools_solutions__s004`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:3,document_index:64,header_level:2,title:`Position in the Architecture`,section_type:`classification`,raw_text:`Applications form the **implementation and orchestration level** of the architecture.

They stand between:

- Capabilities (L5) as ability  
- and concrete action by Actors (L9)  

and enable:

→ the practical use of capabilities in the context of real tasks

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Position in the Architecture`,header_level:2,document_index:64,path_string:`L6 – Applications > Position in the Architecture`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Position in the Architecture`]},{section_id:`l6_applications_tools_solutions__s005`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:4,document_index:65,header_level:2,title:`Characteristics`,section_type:`custom`,raw_text:`Applications are:

- **orchestrating** (combine multiple Capabilities)  
- **context-sensitive**  
- **interactive or automated**  
- **not necessarily UI-based**  
- **close to execution**  

They can take different forms:

- User interfaces (UI)  
- Systems and services  
- Workflows  
- Agentic execution forms  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Characteristics`,header_level:2,document_index:65,path_string:`L6 – Applications > Characteristics`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Characteristics`]},{section_id:`l6_applications_tools_solutions__s006`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:5,document_index:66,header_level:2,title:`Transformation of Applications`,section_type:`custom`,raw_text:`In today's reality and in the target architecture, Applications differ significantly:

**Current state:**
- fragmented, UI-driven tools  
- users execute functions manually  
- low integration between systems  
- focus on individual functions rather than end-to-end tasks  

**Target state:**
- orchestration units for Capabilities  
- combine functions context-dependently  
- support or automate decisions and actions  
- can act partially autonomously (e.g., agentic systems)  

This transformation shifts Applications from:

→ "tools for operating functions"  
to  
→ "systems for implementing capabilities"

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Transformation of Applications`,header_level:2,document_index:66,path_string:`L6 – Applications > Transformation of Applications`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Transformation of Applications`]},{section_id:`l6_applications_tools_solutions__s007`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:6,document_index:67,header_level:2,title:`Distinction from Other Layers`,section_type:`distinction`,raw_text:`**vs. Capabilities (L5):**
- Capabilities → describe what is possible  
- Applications → implement these possibilities concretely  

**vs. Features (L4):**
- Features → individual technical functions  
- Applications → orchestrate these functions to solve tasks  

**vs. Situation (L8):**
- Situation → determines context and frame  
- Applications → implement within this context  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Distinction from Other Layers`,header_level:2,document_index:67,path_string:`L6 – Applications > Distinction from Other Layers`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Distinction from Other Layers`]},{section_id:`l6_applications_tools_solutions__s008`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:7,document_index:68,header_level:2,title:`Core Statement`,section_type:`core_statement`,raw_text:`Applications are the place where capabilities come into concrete use.

> They turn capabilities into actual usage – and connect system logic with action.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Core Statement`,header_level:2,document_index:68,path_string:`L6 – Applications > Core Statement`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Core Statement`]},{section_id:`l7_use_cases_challenges__s001`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:null,child_section_ids:[`l7_use_cases_challenges__s002`,`l7_use_cases_challenges__s003`,`l7_use_cases_challenges__s004`,`l7_use_cases_challenges__s005`,`l7_use_cases_challenges__s006`,`l7_use_cases_challenges__s007`,`l7_use_cases_challenges__s008`],order_index:1,document_index:69,header_level:1,title:`L7 – Use Cases`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`L7 – Use Cases`,header_level:1,document_index:69,path_string:`L7 – Use Cases`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`]},{section_id:`l7_use_cases_challenges__s002`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:1,document_index:70,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Use Cases are **concrete tasks and problems from the real world that must be solved in a situation**  
*(i.e., the actual concerns, challenges, and tasks that people or systems face)*

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Definition`,header_level:2,document_index:70,path_string:`L7 – Use Cases > Definition`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Definition`]},{section_id:`l7_use_cases_challenges__s003`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:2,document_index:71,header_level:2,title:`Role in the Model`,section_type:`role`,raw_text:`Use Cases describe the **concrete need** to which the architecture is directed.

- arise from **Challenges**  
- define **what must be solved**  
- form the basis for the deployment of **Capabilities (L5)** and **Applications (L6)**  
- always take place in the context of **Situations (L8)**  

Important:

- Use Cases are **not a solution space**
- they describe **problems and tasks, not their implementation**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Role in the Model`,header_level:2,document_index:71,path_string:`L7 – Use Cases > Role in the Model`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Role in the Model`]},{section_id:`l7_use_cases_challenges__s004`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:3,document_index:72,header_level:2,title:`Relationship to Challenges`,section_type:`custom`,raw_text:`Challenges are the **starting point of Use Cases**.

- a Challenge describes a challenge or a problem  
- a Use Case describes the concrete situation in which this challenge must be solved  

Example:

- Challenge: "Information is difficult to find"  
- Use Case: "An employee is looking for relevant information for a decision"  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Relationship to Challenges`,header_level:2,document_index:72,path_string:`L7 – Use Cases > Relationship to Challenges`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Relationship to Challenges`]},{section_id:`l7_use_cases_challenges__s005`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:4,document_index:73,header_level:2,title:`Position in the Architecture`,section_type:`classification`,raw_text:`Use Cases stand at the **starting point of the architecture**.

- are defined by **Initiators (L9)**  
- arise within **Situations (L8)**  
- lead to the use of **Capabilities (L5)** and **Applications (L6)**  
- aim at a **Business Outcome (L10)**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Position in the Architecture`,header_level:2,document_index:73,path_string:`L7 – Use Cases > Position in the Architecture`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Position in the Architecture`]},{section_id:`l7_use_cases_challenges__s006`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:5,document_index:74,header_level:2,title:`Transformation of Use Case Understanding`,section_type:`custom`,raw_text:`The concept of "Use Case" has evolved over time:

**Classic understanding:**
- formalized and statically described  
- frequently modeled in fixed structures (e.g., UML)  
- describes clearly defined processes  

**Target state (OIA):**
- dynamic and situational  
- arises from real challenges  
- dependent on context, situation, and goal  
- not fully modelable in advance  

This transformation shifts the focus from:

→ "predefined processes"  
to  
→ "situational challenges that must be solved"

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Transformation of Use Case Understanding`,header_level:2,document_index:74,path_string:`L7 – Use Cases > Transformation of Use Case Understanding`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Transformation of Use Case Understanding`]},{section_id:`l7_use_cases_challenges__s007`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:6,document_index:75,header_level:2,title:`Distinction from Other Layers`,section_type:`distinction`,raw_text:`**vs. Capabilities (L5):**
- Use Cases → describe the problem  
- Capabilities → describe the ability to solve it  

**vs. Applications (L6):**
- Use Cases → define the need  
- Applications → implement the solution concretely  

**vs. Situation (L8):**
- Situation → describes the context  
- Use Cases → describe the task within this context  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Distinction from Other Layers`,header_level:2,document_index:75,path_string:`L7 – Use Cases > Distinction from Other Layers`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Distinction from Other Layers`]},{section_id:`l7_use_cases_challenges__s008`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:7,document_index:76,header_level:2,title:`Core Statement`,section_type:`core_statement`,raw_text:`Use Cases describe real tasks and problems that must be solved in concrete situations.

> They are the starting point for every form of capability, application, and action.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Core Statement`,header_level:2,document_index:76,path_string:`L7 – Use Cases > Core Statement`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Core Statement`]},{section_id:`l8_situation_context__s001`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:null,child_section_ids:[`l8_situation_context__s002`,`l8_situation_context__s003`,`l8_situation_context__s004`,`l8_situation_context__s007`,`l8_situation_context__s008`,`l8_situation_context__s009`,`l8_situation_context__s010`,`l8_situation_context__s011`],order_index:1,document_index:77,header_level:1,title:`L8 – Situation & Context`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`L8 – Situation & Context`,header_level:1,document_index:77,path_string:`L8 – Situation & Context`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`]},{section_id:`l8_situation_context__s002`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:1,document_index:78,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Situation & Context describes the **concrete, action-determining state that governs the selection, interpretation, and application of capabilities**  
*(i.e., the current situation that determines which action is meaningful and how knowledge is used)*

Situation is the **primary control mechanism for action and decision**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Definition`,header_level:2,document_index:78,path_string:`L8 – Situation & Context > Definition`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Definition`]},{section_id:`l8_situation_context__s003`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:2,document_index:79,header_level:2,title:`Role in the Model`,section_type:`role`,raw_text:`Situation & Context determines how tasks are interpreted, capabilities are selected, and actions are executed.

- governs the selection and application of **Capabilities (L5)**  
- shapes the concrete use of **Applications (L6)**  
- influences decisions and actions of **Actors (L9)**  
- determines how knowledge from the **Knowledge Core (L3)** becomes relevant  
- influences the evaluation of **Business Outcomes (L10)**  

Important:

- Meaning is not only embedded in knowledge, but becomes **situationally effective**
- the same capabilities can be used differently depending on the situation
- without Situation and Context, the architecture remains static

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Role in the Model`,header_level:2,document_index:79,path_string:`L8 – Situation & Context > Role in the Model`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Role in the Model`]},{section_id:`l8_situation_context__s004`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[`l8_situation_context__s005`,`l8_situation_context__s006`],order_index:3,document_index:80,header_level:2,title:`Structure of Situation & Context`,section_type:`structure`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Structure of Situation & Context`,header_level:2,document_index:80,path_string:`L8 – Situation & Context > Structure of Situation & Context`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Structure of Situation & Context`]},{section_id:`l8_situation_context__s005`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s004`,child_section_ids:[],order_index:1,document_index:81,header_level:3,title:`Situation`,section_type:`custom`,raw_text:`The Situation is the **concrete, time-bound, and dynamic state of action**.

It encompasses for example:

- current task or challenge  
- temporal constraints  
- available resources and access  
- environmental conditions  
- priorities and restrictions  

The Situation determines:

- what is currently relevant  
- what is useful or necessary  
- which action possibilities are chosen  

`,is_dual_structure_member:!0,dual_structure_group:`l8_situation_context__dual_001`,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Situation`,header_level:3,document_index:81,path_string:`L8 – Situation & Context > Structure of Situation & Context > Situation`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Structure of Situation & Context`,`Situation`]},{section_id:`l8_situation_context__s006`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s004`,child_section_ids:[],order_index:2,document_index:82,header_level:3,title:`Context`,section_type:`custom`,raw_text:`Context is the **activated interpretation and knowledge excerpt within the Situation**.

It describes the part of the available knowledge that actually becomes relevant and action-effective in a concrete situation.

Context is thus:

- not the totality of available knowledge  
- but the **situationally relevant excerpt** of it  
- the basis for classification, understanding, and expectation formation  

It holds:

> Situation determines what currently counts; Context determines how it is to be understood.

---

`,is_dual_structure_member:!0,dual_structure_group:`l8_situation_context__dual_001`,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Context`,header_level:3,document_index:82,path_string:`L8 – Situation & Context > Structure of Situation & Context > Context`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Structure of Situation & Context`,`Context`]},{section_id:`l8_situation_context__s007`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:4,document_index:83,header_level:2,title:`Position in the Architecture`,section_type:`classification`,raw_text:`Situation & Context forms the **control and interpretation layer** of the architecture.

It connects:

- **Use Cases (L7)** as concrete task  
- **Capabilities (L5)** as action potential  
- **Applications (L6)** as implementation  
- **Actors (L9)** as agents of action  
- **Business Outcome (L10)** as effect  

Thus L8 is the level at which possibility becomes **situationally meaningful action**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Position in the Architecture`,header_level:2,document_index:83,path_string:`L8 – Situation & Context > Position in the Architecture`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Position in the Architecture`]},{section_id:`l8_situation_context__s008`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:5,document_index:84,header_level:2,title:`Governance and Traceability`,section_type:`governance`,raw_text:`Situation & Context is central to Governance.

Because in the Situation it is decided:

- which information is relevant  
- which action is permissible or meaningful  
- which priorities apply  
- how results must be evaluated  

Thus L8 is also central to:

- Traceability  
- Reproducibility  
- Responsible decision-making  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Governance and Traceability`,header_level:2,document_index:84,path_string:`L8 – Situation & Context > Governance and Traceability`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Governance and Traceability`]},{section_id:`l8_situation_context__s009`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:6,document_index:85,header_level:2,title:`Methodological Note`,section_type:`custom`,raw_text:`For later operationalization, methods can be used that make context more explicit and less ambiguous.  
Such methods can support work in this layer, but are **not part of the architecture model itself**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Methodological Note`,header_level:2,document_index:85,path_string:`L8 – Situation & Context > Methodological Note`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Methodological Note`]},{section_id:`l8_situation_context__s010`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:7,document_index:86,header_level:2,title:`Distinction from Other Layers`,section_type:`distinction`,raw_text:`**vs. Knowledge Core (L3):**
- Knowledge Core → holds structured knowledge  
- Situation & Context → makes knowledge situationally relevant  

**vs. Use Cases (L7):**
- Use Cases → describe the task  
- Situation & Context → determines how this task is concretely to be understood  

**vs. Capabilities (L5):**
- Capabilities → describe what can be done  
- Situation & Context → determines what of that is meaningfully deployed  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Distinction from Other Layers`,header_level:2,document_index:86,path_string:`L8 – Situation & Context > Distinction from Other Layers`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Distinction from Other Layers`]},{section_id:`l8_situation_context__s011`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:8,document_index:87,header_level:2,title:`Core Statement`,section_type:`core_statement`,raw_text:`Situation & Context determines which action is meaningful in a concrete moment.

> Only through Situation and Context does knowledge become action-relevant and capability become meaningful application.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Core Statement`,header_level:2,document_index:87,path_string:`L8 – Situation & Context > Core Statement`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Core Statement`]},{section_id:`l9_system_participants__s001`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:null,child_section_ids:[`l9_system_participants__s002`,`l9_system_participants__s003`,`l9_system_participants__s004`,`l9_system_participants__s008`,`l9_system_participants__s009`,`l9_system_participants__s010`,`l9_system_participants__s011`],order_index:1,document_index:88,header_level:1,title:`L9 – System Participants`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`L9 – System Participants`,header_level:1,document_index:88,path_string:`L9 – System Participants`,line_start:null,line_end:null},section_path:[`L9 – System Participants`]},{section_id:`l9_system_participants__s002`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[],order_index:1,document_index:89,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`System Participants describe the **roles of stakeholders with respect to responsibility, execution, and effect within an action system**  
*(i.e., who initiates something, who implements it, and who experiences the effects)*

They make responsibility, execution, and effect explicit and attributable.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Definition`,header_level:2,document_index:89,path_string:`L9 – System Participants > Definition`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Definition`]},{section_id:`l9_system_participants__s003`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[],order_index:2,document_index:90,header_level:2,title:`Role in the Model`,section_type:`role`,raw_text:`System Participants define **who takes which role in the emergence of action and effect**.

- link **Use Cases (L7)** with concrete responsible parties  
- connect **Capabilities (L5)** and **Applications (L6)** with execution  
- make visible who is responsible for **Business Outcomes (L10)**  
- act within **Situations (L8)**  

Important:

- every action is assigned to roles  
- responsibility, execution, and effect are **clearly separated**  
- roles are independent of concrete systems or technologies  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Role in the Model`,header_level:2,document_index:90,path_string:`L9 – System Participants > Role in the Model`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Role in the Model`]},{section_id:`l9_system_participants__s004`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[`l9_system_participants__s005`,`l9_system_participants__s006`,`l9_system_participants__s007`],order_index:3,document_index:91,header_level:2,title:`Role Model`,section_type:`custom`,raw_text:`The model distinguishes three central roles:

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Role Model`,header_level:2,document_index:91,path_string:`L9 – System Participants > Role Model`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Role Model`]},{section_id:`l9_system_participants__s005`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s004`,child_section_ids:[],order_index:1,document_index:92,header_level:3,title:`Initiator (Accountability)`,section_type:`custom`,raw_text:`The Initiator defines the occasion and bears responsibility for the purpose.

- defines the **Use Case (L7)**  
- sets goals and expectations  
- bears responsibility for the intended effect  

Guiding question:

→ "Why is action taken?"

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Initiator (Accountability)`,header_level:3,document_index:92,path_string:`L9 – System Participants > Role Model > Initiator (Accountability)`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Role Model`,`Initiator (Accountability)`]},{section_id:`l9_system_participants__s006`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s004`,child_section_ids:[],order_index:2,document_index:93,header_level:3,title:`Actor (Execution)`,section_type:`custom`,raw_text:`The Actor executes the action.

- uses **Applications (L6)** and **Capabilities (L5)**  
- implements tasks concretely  
- can be:
  - Human  
  - System  
  - Agentic instance  

Guiding question:

→ "How is action taken?"

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Actor (Execution)`,header_level:3,document_index:93,path_string:`L9 – System Participants > Role Model > Actor (Execution)`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Role Model`,`Actor (Execution)`]},{section_id:`l9_system_participants__s007`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s004`,child_section_ids:[],order_index:3,document_index:94,header_level:3,title:`Beneficiary (Effect)`,section_type:`custom`,raw_text:`The Beneficiary experiences the effects of the action.

- benefits from results or is affected by them  
- can be:
  - Customer  
  - Employee  
  - Organization  
  - System  

Guiding question:

→ "Who is affected by the effect?"

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Beneficiary (Effect)`,header_level:3,document_index:94,path_string:`L9 – System Participants > Role Model > Beneficiary (Effect)`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Role Model`,`Beneficiary (Effect)`]},{section_id:`l9_system_participants__s008`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[],order_index:4,document_index:95,header_level:2,title:`Position in the Architecture`,section_type:`classification`,raw_text:`System Participants connect responsibility with action and effect.

They stand in direct relationship to:

- **Use Cases (L7)** as trigger  
- **Situation & Context (L8)** as action frame  
- **Capabilities (L5)** and **Applications (L6)** as implementation  
- **Business Outcome (L10)** as result  

This makes visible:

→ who initiates, who acts, and who is affected

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Position in the Architecture`,header_level:2,document_index:95,path_string:`L9 – System Participants > Position in the Architecture`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Position in the Architecture`]},{section_id:`l9_system_participants__s009`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[],order_index:5,document_index:96,header_level:2,title:`Responsibility and Governance`,section_type:`governance`,raw_text:`System Participants are central to Governance.

- the **Actor executes**, but is not necessarily responsible for the purpose  
- the **Initiator bears responsibility for goal and effect**  
- the **Beneficiary makes effects visible**  

This implies:

- responsibility is **not the same as execution**  
- responsibility remains attributable even with automated or agentic systems  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Responsibility and Governance`,header_level:2,document_index:96,path_string:`L9 – System Participants > Responsibility and Governance`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Responsibility and Governance`]},{section_id:`l9_system_participants__s010`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[],order_index:6,document_index:97,header_level:2,title:`Distinction from Other Layers`,section_type:`distinction`,raw_text:`**vs. Capabilities (L5):**
- Capabilities → describe what is possible  
- Participants → describe who acts  

**vs. Applications (L6):**
- Applications → implement capabilities  
- Participants → use or operate this implementation  

**vs. Business Outcome (L10):**
- Outcome → describes effect  
- Participants → attribute this effect to persons or systems  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Distinction from Other Layers`,header_level:2,document_index:97,path_string:`L9 – System Participants > Distinction from Other Layers`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Distinction from Other Layers`]},{section_id:`l9_system_participants__s011`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[],order_index:7,document_index:98,header_level:2,title:`Core Statement`,section_type:`core_statement`,raw_text:`System Participants make responsibility, execution, and effect explicit.

> They ensure that action and result remain traceable and attributable within an organization.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Core Statement`,header_level:2,document_index:98,path_string:`L9 – System Participants > Core Statement`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Core Statement`]},{section_id:`l10_business_outcome__s001`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:null,child_section_ids:[`l10_business_outcome__s002`,`l10_business_outcome__s003`,`l10_business_outcome__s004`,`l10_business_outcome__s005`,`l10_business_outcome__s006`,`l10_business_outcome__s007`,`l10_business_outcome__s008`],order_index:1,document_index:99,header_level:1,title:`L10 – Business Outcome`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`L10 – Business Outcome`,header_level:1,document_index:99,path_string:`L10 – Business Outcome`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`]},{section_id:`l10_business_outcome__s002`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:1,document_index:100,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Business Outcome describes the **actual, context-dependent effect of actions in the real world and serves as a reference point for evaluating the entire architecture**  
*(i.e., what concretely changes through decisions and actions and shows whether the system works)*

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Definition`,header_level:2,document_index:100,path_string:`L10 – Business Outcome > Definition`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Definition`]},{section_id:`l10_business_outcome__s003`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:2,document_index:101,header_level:2,title:`Role in the Model`,section_type:`role`,raw_text:`Business Outcome makes visible whether **actual value** emerges from knowledge, capabilities, and action.

- arises through the application of **Capabilities (L5)**  
- is concretely implemented via **Applications (L6)**  
- is carried out by **Actors (L9)**  
- is dependent on **Situations (L8)**  

Important:

- Outcome is **not a system output**, but a **change in reality**  
- the same action can lead to different outcomes depending on the situation  
- Outcome arises **not in the system alone**, but in the interplay of system, action, and context  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Role in the Model`,header_level:2,document_index:101,path_string:`L10 – Business Outcome > Role in the Model`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Role in the Model`]},{section_id:`l10_business_outcome__s004`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:3,document_index:102,header_level:2,title:`Position in the Architecture`,section_type:`classification`,raw_text:`Business Outcome is the **central reference point of the entire architecture**.

All other layers contribute to it:

- **Data Sources (L2)** provide the foundation  
- **Knowledge Core (L3)** creates meaning  
- **Capabilities (L5)** enable action  
- **Applications (L6)** implement action  
- **Situation (L8)** determines execution  

The Outcome is thus the **end result of this chain of effects**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Position in the Architecture`,header_level:2,document_index:102,path_string:`L10 – Business Outcome > Position in the Architecture`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Position in the Architecture`]},{section_id:`l10_business_outcome__s005`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:4,document_index:103,header_level:2,title:`Measurability and Evaluability`,section_type:`custom`,raw_text:`Business Outcome makes the system **measurable and evaluable**.

- shows whether set goals were achieved  
- enables the definition of **KPIs and success metrics**  
- serves as the basis for analysis and evaluation  
- enables systematic improvement and governance  

This implies:

- the system can **not only be executed, but also evaluated**  
- decisions can **be based on effect rather than activity**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Measurability and Evaluability`,header_level:2,document_index:103,path_string:`L10 – Business Outcome > Measurability and Evaluability`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Measurability and Evaluability`]},{section_id:`l10_business_outcome__s006`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:5,document_index:104,header_level:2,title:`Feedback and Control`,section_type:`custom`,raw_text:`Business Outcome acts as a **feedback mechanism for the entire architecture**.

- positive Outcomes confirm effectiveness  
- negative Outcomes indicate problems  

Possible causes lie in:

- insufficient knowledge (**L3**)  
- unsuitable capabilities (**L5**)  
- faulty implementation (**L6**)  
- incorrect assessment of the situation (**L8**)  

Thus the Outcome enables:

→ targeted analysis  
→ continuous improvement  
→ strategic governance  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Feedback and Control`,header_level:2,document_index:104,path_string:`L10 – Business Outcome > Feedback and Control`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Feedback and Control`]},{section_id:`l10_business_outcome__s007`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:6,document_index:105,header_level:2,title:`Distinction from Other Concepts`,section_type:`distinction`,raw_text:`**vs. Output:**
- Output → result of a system (e.g., report, answer)  
- Outcome → effect in the real world (e.g., better decision, efficiency gain)  

**vs. Capabilities (L5):**
- Capabilities → enable action  
- Outcome → measures their actual effect  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Distinction from Other Concepts`,header_level:2,document_index:105,path_string:`L10 – Business Outcome > Distinction from Other Concepts`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Distinction from Other Concepts`]},{section_id:`l10_business_outcome__s008`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:7,document_index:106,header_level:2,title:`Core Statement`,section_type:`core_statement`,raw_text:`Business Outcome describes the actual effect of actions and makes the system measurable and governable.

> It is the central reference point at which the success of the entire architecture is determined.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Core Statement`,header_level:2,document_index:106,path_string:`L10 – Business Outcome > Core Statement`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Core Statement`]}],documentation_semantic:[]},H={"#C1":`c1_entities`,"#C2":`c2_information_processing_transformation_pipeline`,"#L1":`l1_infrastructure`,"#L2":`l2_data_sources`,"#L3":`l3_knowledge_core`,"#L4":`l4_features_in_apis`,"#L5":`l5_capabilities`,"#L6":`l6_applications_tools_solutions`,"#L7":`l7_use_cases_challenges`,"#L8":`l8_situation_context`,"#L9":`l9_system_participants`,"#L10":`l10_business_outcome`};function U(e){let t=H[e];if(!t)return null;let n=V.sections.filter(e=>e.element_id===t&&e.header_level>=2&&e.raw_text!==``).sort((e,t)=>e.document_index-t.document_index).map(e=>({sectionId:e.section_id,title:e.title,rawText:e.raw_text,sectionType:e.section_type,headerLevel:e.header_level,parentSectionId:e.parent_section_id}));return n.length===0?null:{elementId:t,sections:n}}function W(){let e=document.createElement(`div`);return e.className=`page-view`,e.innerHTML=`
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
          Version <strong>0.3.0</strong> is intentionally early.<br>
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
  `,e}function de(){let e=document.createElement(`div`);return e.className=`page-view`,e.innerHTML=`
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
          It is a <strong>working model</strong> — version <strong>0.3.0</strong>, intentionally early.
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
  `,e}function fe(){let e=document.createElement(`div`);return e.className=`page-view`,e.innerHTML=`
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
  `,e}function pe(){let e=document.createElement(`div`);return e.className=`page-view`,e.innerHTML=`
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
  `,e}var me=[{href:`#/`,label:`OIA`,route:`/`},{href:`#/motivation`,label:`Motivation`,route:`/motivation`},{href:`#/contribute`,label:`Contribute`,route:`/contribute`},{href:`#/about`,label:`About`,route:`/about`},{href:`#/legal`,label:`Legal Notice`,route:`/legal`}];function he(e){return e.startsWith(`#/motivation`)?`/motivation`:e.startsWith(`#/contribute`)?`/contribute`:e.startsWith(`#/about`)?`/about`:e.startsWith(`#/legal`)?`/legal`:`/`}function ge(e){let t=he(window.location.hash||`#/`);e.innerHTML=`
    <div class="site-nav__inner">
      <a class="site-nav__brand" href="#/">OIA</a>
      <ul class="site-nav__links">
        ${me.map(e=>`
          <li>
            <a
              class="site-nav__link${t===e.route?` site-nav__link--active`:``}"
              href="${e.href}"
            >${e.label}</a>
          </li>`).join(``)}
      </ul>
      <a class="site-nav__github" href="https://github.com/ruKurz/oi-architecture" target="_blank" rel="noopener" aria-label="GitHub Repository">
        <svg class="site-nav__github-icon" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </a>
    </div>
  `}var _e=.75,G=.4,K=.05,q,J,Y=null,ve=1440;function ye(){return Math.max(G,Math.min(_e,window.innerWidth/ve))}var X=ye();function Z(e){X=e;let t=J.querySelector(`.diagram-wrapper`);if(t){t.style.transform=`scale(${X})`;let e=X<.55?`zoom-far`:X<.75?`zoom-mid`:`zoom-full`;t.classList.remove(`zoom-far`,`zoom-mid`,`zoom-full`),t.classList.add(e)}let n=J.querySelector(`.zoom-label`);n&&(n.textContent=Math.round(X*100)+`%`);let r=J.querySelector(`.zoom-slider`);r&&(r.value=String(X*100))}function Q(){J.querySelectorAll(`[data-id]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.id;n&&(window.location.hash=`#/detail/${n}`)})})}function be(){J.innerHTML=``;let e=se(q);J.appendChild(e),Z(X),Q();let t=document.createElement(`div`);t.className=`zoom-controls`,t.innerHTML=`
    <span class="zoom-controls__label">Zoom</span>
    <input class="zoom-slider" type="range" min="${G*100}" max="100" value="${Math.round(X*100)}" step="${K*100}">
    <span class="zoom-label">${Math.round(X*100)}%</span>
  `,J.appendChild(t);let n=t.querySelector(`.zoom-slider`);n.addEventListener(`input`,()=>Z(Number(n.value)/100)),t.addEventListener(`wheel`,e=>{e.preventDefault();let t=e.deltaY<0?K:-K;Z(Math.min(1,Math.max(G,X+t)))})}function xe(e){J.innerHTML=``;let t=U(e);J.appendChild(B(q,e,t)),Q()}function $(e){J.innerHTML=``,J.appendChild(e)}function Se(e,t){q=e,J=t,Y=document.getElementById(`site-nav`);let n=document.querySelector(`.github-fab`),r=()=>{let e=window.location.hash||`#/`;Y&&ge(Y);let t=e===`#/motivation`||e===`#/contribute`||e===`#/about`||e===`#/legal`;n&&(n.style.display=t?``:`none`),e.startsWith(`#/detail/`)?xe(decodeURIComponent(e.replace(`#/detail/`,``))):e===`#/motivation`?$(W()):e===`#/contribute`?$(de()):e===`#/about`?$(fe()):e===`#/legal`?$(pe()):be()};window.addEventListener(`hashchange`,r),r()}Se(e,document.getElementById(`app`));