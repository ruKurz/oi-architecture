(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={meta:{version:`0.3.0`,title:`Organizational Intelligence Architecture`,subtitle:`How organizations turn knowledge into action`,created:`2026`},elements:[{id:`#panel-left`,type:`container`,containerType:`panel`,label:`System Development & Interaction`,children:[`#I1`,`#I2`,`#I3`,`#I4`],meta:{variant:`left`}},{id:`#I1`,type:`container`,containerType:`box`,label:`User Interaction`,children:[`#I1-1`,`#I1-2`,`#I1-3`,`#I1-4`]},{id:`#I1-1`,type:`item`,itemType:`concept`,label:`Login & Authentication`},{id:`#I1-2`,type:`item`,itemType:`concept`,label:`User Profile`},{id:`#I1-3`,type:`item`,itemType:`concept`,label:`Click-Through`},{id:`#I1-4`,type:`item`,itemType:`concept`,label:`Input / Output`},{id:`#I2`,type:`container`,containerType:`box`,label:`Context Understanding`,children:[`#I2-1`,`#I2-2`,`#I2-3`,`#I2-4`]},{id:`#I2-1`,type:`item`,itemType:`concept`,label:`Intent Detection`},{id:`#I2-2`,type:`item`,itemType:`concept`,label:`Preference Detection`},{id:`#I2-3`,type:`item`,itemType:`concept`,label:`Context Analysis`},{id:`#I2-4`,type:`item`,itemType:`concept`,label:`Context Enrichment`},{id:`#I3`,type:`container`,containerType:`box`,label:`Feature Orchestration`,children:[`#I3-1`,`#I3-2`,`#I3-3`,`#I3-4`]},{id:`#I3-1`,type:`item`,itemType:`concept`,label:`Pipelines`},{id:`#I3-2`,type:`item`,itemType:`concept`,label:`Workflows`},{id:`#I3-3`,type:`item`,itemType:`concept`,label:`Business Logic`},{id:`#I3-4`,type:`item`,itemType:`concept`,label:`Agents`},{id:`#I4`,type:`container`,containerType:`box`,label:`Model Improvement`,children:[`#I4-1`,`#I4-2`,`#I4-3`,`#I4-4`]},{id:`#I4-1`,type:`item`,itemType:`concept`,label:`Training`},{id:`#I4-2`,type:`item`,itemType:`concept`,label:`Fine-Tuning`},{id:`#I4-3`,type:`item`,itemType:`concept`,label:`Optimization`},{id:`#I4-4`,type:`item`,itemType:`concept`,label:`Monitoring`},{id:`#L10`,type:`container`,containerType:`layer`,label:`Business Outcome`,description:`Where knowledge becomes value`,children:[`#L10-1`,`#L10-2`,`#L10-3`,`#L10-4`,`#L10-5`,`#L10-6`],badges:[`badge-feedback`],meta:{order:10}},{id:`#L10-1`,type:`item`,itemType:`outcome`,label:`Informed Decision`,properties:{outcome_category:[`cognitive`,`strategic`]}},{id:`#L10-2`,type:`item`,itemType:`outcome`,label:`Executed Action`,properties:{outcome_category:[`operational`,`execution`]}},{id:`#L10-3`,type:`item`,itemType:`outcome`,label:`Operational Efficiency`,properties:{outcome_category:[`operational`,`performance`]}},{id:`#L10-4`,type:`item`,itemType:`outcome`,label:`Customer Value`,properties:{outcome_category:[`experience`,`strategic`]}},{id:`#L10-5`,type:`item`,itemType:`outcome`,label:`Risk Reduction`,properties:{outcome_category:[`governance`,`resilience`]}},{id:`#L10-6`,type:`item`,itemType:`outcome`,label:`Continuous Improvement`,properties:{outcome_category:[`adaptive`,`learning`]}},{id:`#L9`,type:`container`,containerType:`layer`,label:`System Participants`,description:`Who initiates, acts, and benefits — and with what accountability`,children:[`#L9-triad`,`#L9-spectrum-autonomy`,`#L9-spectrum-accountability`,`#L9-key-insight`],meta:{order:9}},{id:`#L9-triad`,type:`container`,containerType:`frame`,label:`Triad`,navigationVisible:!1,children:[`#L9-t-initiator`,`#L9-t-actor`,`#L9-t-beneficiary`]},{id:`#L9-t-initiator`,type:`item`,itemType:`participant`,label:`Initiator`,role:`initiator`,triadPosition:1,color:`purple`,weight:`secondary`,description:`Defines the governance frame: goals, permissions, and organizational rules. Interacts with OIA constitutively — not operatively. Sets the conditions under which Actors operate. Accountability always traces back to the Initiator and is always reducible to a human or organization.`},{id:`#L9-t-actor`,type:`item`,itemType:`participant`,label:`Actor`,role:`actor`,triadPosition:2,color:`teal`,weight:`primary`,primary:!0,description:`The primary interaction entity of OIA. Engages with Capabilities, Features, and the Knowledge Core. OIA is built from the Actor's perspective. The Actor can be a Human, an Agent, or a System.`},{id:`#L9-t-beneficiary`,type:`item`,itemType:`participant`,label:`Beneficiary`,role:`beneficiary`,triadPosition:3,color:`amber`,weight:`secondary`,description:`The entity for whom the outcome creates value. Legitimizes the action. Feedback flows back into the architecture from the Beneficiary, but the Beneficiary does not control the process. Can be a human, team, or system.`},{id:`#L9-spectrum-autonomy`,type:`container`,containerType:`spectrum`,label:`Autonomy & Decision Space`,spectrumAxis:`autonomy`,children:[`#L9-sa-system`,`#L9-sa-human`,`#L9-sa-agent`]},{id:`#L9-sa-system`,type:`item`,itemType:`participant`,label:`System`,parent:`#L9-t-actor`,spectrumAxis:`autonomy`,position:1,caption:`Configured · deterministic`,description:`Operates within a fixed configuration set by the Initiator. No independent decision space — executes exactly what was configured. Predictable, deterministic, bounded by design.`,color:`gray`},{id:`#L9-sa-human`,type:`item`,itemType:`participant`,label:`Human`,parent:`#L9-t-actor`,spectrumAxis:`autonomy`,position:2,caption:`Guided · contextual judgment`,description:`Decides contextually, embedded in hierarchy, political consideration, and cognitive limits. Filters before acting — through organization, experience, and judgment. Greater interpretive depth than operational reach.`,color:`teal`},{id:`#L9-sa-agent`,type:`item`,itemType:`participant`,label:`Agent`,parent:`#L9-t-actor`,spectrumAxis:`autonomy`,position:3,caption:`Goal-directed · autonomous`,description:`Greater operational reach than a human: parallel processing, continuous availability, no cognitive bias, no organizational embeddedness. Operates without the filters that constrain human decision-making in organizations. The positioning to the right of Human on this axis is intentional — not a display error.`,color:`teal`,converging:!0},{id:`#L9-spectrum-accountability`,type:`container`,containerType:`spectrum`,label:`Accountability`,spectrumAxis:`accountability`,children:[`#L9-sc-system`,`#L9-sc-agent`,`#L9-sc-human`]},{id:`#L9-sc-system`,type:`item`,itemType:`participant`,label:`System`,parent:`#L9-t-actor`,spectrumAxis:`accountability`,position:1,caption:`Inherits from Initiator`,description:`Carries no independent accountability. Accountability flows back entirely to the Initiator who configured it.`,color:`gray`},{id:`#L9-sc-agent`,type:`item`,itemType:`participant`,label:`Agent`,parent:`#L9-t-actor`,spectrumAxis:`accountability`,position:2,caption:`Governance-bounded · delegated`,description:`Accountability is delegated and explicitly bounded by Organizational Decision Records (ODRs). No legal framework, no societal sanction mechanism. Without ODR-defined boundaries, Agent actions cannot be held accountable.`,color:`teal`},{id:`#L9-sc-human`,type:`item`,itemType:`participant`,label:`Human`,parent:`#L9-t-actor`,spectrumAxis:`accountability`,position:3,caption:`Legal · structural · always`,description:`Carries accountability through law, socialization, and culture — mechanisms no machine brings and that cannot be delegated. Permanently at the rightmost position on this axis, independent of agent autonomy.`,color:`purple`},{id:`#L9-key-insight`,type:`item`,itemType:`keyInsight`,parent:`#L9-t-actor`,label:`Key Insight`,text:`Capabilities converge. Accountability does not. The human remains the legal and structural anchor — independent of agent autonomy.`},{id:`#L8`,type:`container`,containerType:`layer`,label:`Situation Layer`,description:`Context of decisions`,children:[`#L8-1`,`#L8-2`,`#L8-3`,`#L8-4`,`#L8-5`,`#L8-6`,`#L8-7`,`#L8-8`,`#L8-9`,`#L8-10`],meta:{order:8}},{id:`#L8-1`,type:`item`,itemType:`situation`,label:`Employee`,properties:{dimension:`who`}},{id:`#L8-2`,type:`item`,itemType:`situation`,label:`Event`,properties:{dimension:`trigger`}},{id:`#L8-3`,type:`item`,itemType:`situation`,label:`Time`,properties:{dimension:`time`}},{id:`#L8-4`,type:`item`,itemType:`situation`,label:`Place`,properties:{dimension:`place`}},{id:`#L8-5`,type:`item`,itemType:`situation`,label:`Domain`,properties:{dimension:`domain`}},{id:`#L8-6`,type:`item`,itemType:`situation`,label:`Task`,properties:{dimension:`task`}},{id:`#L8-7`,type:`item`,itemType:`situation`,label:`Preferences`,properties:{dimension:`preference`}},{id:`#L8-8`,type:`item`,itemType:`situation`,label:`Language`,properties:{dimension:`language`}},{id:`#L8-9`,type:`item`,itemType:`situation`,label:`Access`,properties:{dimension:`access`}},{id:`#L8-10`,type:`item`,itemType:`situation`,label:`Knowledge`,properties:{dimension:`knowledge`}},{id:`#L7`,type:`container`,containerType:`layer`,label:`Use Cases & Challenges`,description:`Business motivation`,children:[`#L7-1`,`#L7-2`,`#L7-3`,`#L7-4`,`#L7-5`,`#L7-6`],meta:{order:7}},{id:`#L7-1`,type:`item`,itemType:`usecase`,label:`HR Process Consulting`,properties:{domain:`HR`}},{id:`#L7-2`,type:`item`,itemType:`usecase`,label:`Infrastructure Maintenance`,properties:{domain:`Operations`}},{id:`#L7-3`,type:`item`,itemType:`usecase`,label:`Software Development`,properties:{domain:`IT`}},{id:`#L7-4`,type:`item`,itemType:`usecase`,label:`System Documentation`,properties:{domain:`IT`}},{id:`#L7-5`,type:`item`,itemType:`usecase`,label:`Procurement Verification`,properties:{domain:`Procurement`}},{id:`#L7-6`,type:`item`,itemType:`usecase`,label:`24h Customer Support`,properties:{domain:`CX`}},{id:`#L6`,type:`container`,containerType:`layer`,label:`Solutions & Applications`,description:`Interaction points`,children:[`#L6-1`,`#L6-2`,`#L6-3`,`#L6-4`,`#L6-5`],badges:[`badge-feedback`],meta:{order:6}},{id:`#L6-1`,type:`item`,itemType:`solution`,label:`Enterprise Search`,icon:`🔍`,properties:{category:`search`}},{id:`#L6-2`,type:`item`,itemType:`solution`,label:`Knowledge Assistant`,icon:`💬`,properties:{category:`assistant`}},{id:`#L6-3`,type:`item`,itemType:`solution`,label:`Maintenance Assistant`,icon:`🔧`,properties:{category:`assistant`}},{id:`#L6-4`,type:`item`,itemType:`solution`,label:`Code Assistant`,icon:`💻`,properties:{category:`assistant`}},{id:`#L6-5`,type:`item`,itemType:`solution`,label:`Analytics Tools`,icon:`📊`,properties:{category:`analytics`}},{id:`#L5`,type:`container`,containerType:`layer`,label:`Cognitive Capabilities`,description:`What the organization can do`,children:[`#L5-1`,`#L5-2`,`#L5-3`,`#L5-4`,`#L5-5`,`#L5-6`,`#L5-7`,`#L5-8`,`#L5-9`,`#L5-10`],meta:{order:5}},{id:`#L5-1`,type:`item`,itemType:`capability`,label:`Find Information`,properties:{cognitive_level:`find`}},{id:`#L5-2`,type:`item`,itemType:`capability`,label:`Evaluate Facts`,properties:{cognitive_level:`evaluate`}},{id:`#L5-3`,type:`item`,itemType:`capability`,label:`Structure Documents`,properties:{cognitive_level:`structure`}},{id:`#L5-4`,type:`item`,itemType:`capability`,label:`Link Knowledge`,properties:{cognitive_level:`link`}},{id:`#L5-5`,type:`item`,itemType:`capability`,label:`Generate Content`,properties:{cognitive_level:`generate`}},{id:`#L5-6`,type:`item`,itemType:`capability`,label:`Identify Patterns`,properties:{cognitive_level:`evaluate`}},{id:`#L5-7`,type:`item`,itemType:`capability`,label:`Detect Redundancies`,properties:{cognitive_level:`evaluate`}},{id:`#L5-8`,type:`item`,itemType:`capability`,label:`Create Reports`,properties:{cognitive_level:`generate`}},{id:`#L5-9`,type:`item`,itemType:`capability`,label:`Communicate Knowledge`,properties:{cognitive_level:`generate`}},{id:`#L5-10`,type:`item`,itemType:`capability`,label:`Deliver Information`,properties:{cognitive_level:`deliver`}},{id:`#L4`,type:`container`,containerType:`layer`,label:`Features & APIs`,description:`Technical reusability`,children:[`#L4-1`,`#L4-2`,`#L4-3`,`#L4-4`,`#L4-5`,`#L4-6`,`#L4-7`,`#L4-8`,`#L4-9`,`#L4-10`],meta:{order:4}},{id:`#L4-1`,type:`item`,itemType:`feature`,label:`/search`,properties:{endpoint:`/search`}},{id:`#L4-2`,type:`item`,itemType:`feature`,label:`/classify`,properties:{endpoint:`/classify`}},{id:`#L4-3`,type:`item`,itemType:`feature`,label:`/summarize`,properties:{endpoint:`/summarize`}},{id:`#L4-4`,type:`item`,itemType:`feature`,label:`/link`,properties:{endpoint:`/link`}},{id:`#L4-5`,type:`item`,itemType:`feature`,label:`/remember`,properties:{endpoint:`/remember`}},{id:`#L4-6`,type:`item`,itemType:`feature`,label:`/chat`,properties:{endpoint:`/chat`}},{id:`#L4-7`,type:`item`,itemType:`feature`,label:`/transform`,properties:{endpoint:`/transform`}},{id:`#L4-8`,type:`item`,itemType:`feature`,label:`/create`,properties:{endpoint:`/create`}},{id:`#L4-9`,type:`item`,itemType:`feature`,label:`/analyze`,properties:{endpoint:`/analyze`}},{id:`#L4-10`,type:`item`,itemType:`feature`,label:`/calc`,properties:{endpoint:`/calc`}},{id:`#L3`,type:`container`,containerType:`layer`,label:`Organizational Knowledge Core`,description:`Organizational memory`,children:[`#L3-semantic`,`#L3-index`,`#L3-graph`,`#L3-access`],badges:[`badge-feedback`],meta:{order:3,highlighted:!0}},{id:`#L3-semantic`,type:`container`,containerType:`box`,label:`Semantic Layer`,children:[`#L3-s1`,`#L3-s2`,`#L3-s3`]},{id:`#L3-s1`,type:`item`,itemType:`concept`,label:`Ontologies`},{id:`#L3-s2`,type:`item`,itemType:`concept`,label:`Taxonomies`},{id:`#L3-s3`,type:`item`,itemType:`concept`,label:`Entities`},{id:`#L3-index`,type:`container`,containerType:`box`,label:`Index & Search`,children:[`#L3-i1`,`#L3-i2`,`#L3-i3`]},{id:`#L3-i1`,type:`item`,itemType:`concept`,label:`Full-Text Index`},{id:`#L3-i2`,type:`item`,itemType:`concept`,label:`Vector Index`},{id:`#L3-i3`,type:`item`,itemType:`concept`,label:`Metadata Index`},{id:`#L3-graph`,type:`container`,containerType:`box`,label:`Knowledge Graph`,children:[`#L3-g1`,`#L3-g2`,`#L3-g3`]},{id:`#L3-g1`,type:`item`,itemType:`concept`,label:`Relations`},{id:`#L3-g2`,type:`item`,itemType:`concept`,label:`Context Links`},{id:`#L3-g3`,type:`item`,itemType:`concept`,label:`Entity Graph`},{id:`#L3-access`,type:`container`,containerType:`box`,label:`Security & Access`,children:[`#L3-a1`,`#L3-a2`,`#L3-a3`]},{id:`#L3-a1`,type:`item`,itemType:`concept`,label:`Access Control`},{id:`#L3-a2`,type:`item`,itemType:`concept`,label:`API Gateway`},{id:`#L3-a3`,type:`item`,itemType:`concept`,label:`Governance`},{id:`#L2`,type:`container`,containerType:`layer`,label:`AI & Cognitive Infrastructure`,description:`Technology foundation`,children:[`#L2-1`,`#L2-2`,`#L2-3`,`#L2-4`,`#L2-5`,`#L2-6`,`#L2-7`,`#L2-8`],meta:{order:2}},{id:`#L2-1`,type:`item`,itemType:`infrastructure`,label:`Large Language Models`,properties:{tech_type:`llm`}},{id:`#L2-2`,type:`item`,itemType:`infrastructure`,label:`Machine Learning`,properties:{tech_type:`ml`}},{id:`#L2-3`,type:`item`,itemType:`infrastructure`,label:`Deep Learning`,properties:{tech_type:`ml`}},{id:`#L2-4`,type:`item`,itemType:`infrastructure`,label:`NLP`,properties:{tech_type:`nlp`}},{id:`#L2-5`,type:`item`,itemType:`infrastructure`,label:`Vector Indexes`,properties:{tech_type:`vector-index`}},{id:`#L2-6`,type:`item`,itemType:`infrastructure`,label:`Graph Databases`,properties:{tech_type:`graph-db`}},{id:`#L2-7`,type:`item`,itemType:`infrastructure`,label:`Computer Vision`,properties:{tech_type:`cv`}},{id:`#L2-8`,type:`item`,itemType:`infrastructure`,label:`RPA`,properties:{tech_type:`rpa`}},{id:`#L1b`,type:`container`,containerType:`pipeline`,label:`Data Processing Pipeline`,description:`Raw data → usable knowledge`,children:[`#L1b-1`,`#L1b-2`,`#L1b-3`,`#L1b-4`,`#L1b-5`],meta:{order:1.5}},{id:`#L1b-1`,type:`item`,itemType:`processingstep`,label:`Data Ingestion`,icon:`📥`,properties:{order:1}},{id:`#L1b-2`,type:`item`,itemType:`processingstep`,label:`Processing`,icon:`⚙️`,properties:{order:2}},{id:`#L1b-3`,type:`item`,itemType:`processingstep`,label:`Cleansing`,icon:`🧹`,properties:{order:3}},{id:`#L1b-4`,type:`item`,itemType:`processingstep`,label:`Validation`,icon:`✅`,properties:{order:4}},{id:`#L1b-5`,type:`item`,itemType:`processingstep`,label:`Information & Knowledge`,icon:`💡`,properties:{order:5,variant:`output`}},{id:`#L1`,type:`container`,containerType:`layer`,label:`Data Sources`,description:`Organizational raw data`,children:[`#L1-1`,`#L1-2`,`#L1-3`,`#L1-4`,`#L1-5`,`#L1-6`,`#L1-7`,`#L1-8`,`#L1-9`,`#L1-10`],meta:{order:1}},{id:`#L1-1`,type:`item`,itemType:`datasource`,label:`Persons`,icon:`👤`,properties:{source_type:`internal`}},{id:`#L1-2`,type:`item`,itemType:`datasource`,label:`Organizations`,icon:`🏢`,properties:{source_type:`internal`}},{id:`#L1-3`,type:`item`,itemType:`datasource`,label:`Locations`,icon:`📍`,properties:{source_type:`internal`}},{id:`#L1-4`,type:`item`,itemType:`datasource`,label:`Customers`,icon:`👥`,properties:{source_type:`internal`}},{id:`#L1-5`,type:`item`,itemType:`datasource`,label:`Materials`,icon:`📦`,properties:{source_type:`internal`}},{id:`#L1-6`,type:`item`,itemType:`datasource`,label:`Projects`,icon:`📁`,properties:{source_type:`internal`}},{id:`#L1-7`,type:`item`,itemType:`datasource`,label:`News & Media`,icon:`📰`,properties:{source_type:`external`}},{id:`#L1-8`,type:`item`,itemType:`datasource`,label:`Rules & Policies`,icon:`📜`,properties:{source_type:`internal`}},{id:`#L1-9`,type:`item`,itemType:`datasource`,label:`Logs`,icon:`🗒️`,properties:{source_type:`transactional`}},{id:`#L1-10`,type:`item`,itemType:`datasource`,label:`Systems`,icon:`🖥️`,properties:{source_type:`internal`}},{id:`#panel-right`,type:`container`,containerType:`panel`,label:`Data Sources & Processing`,children:[`#D1`,`#D2`,`#D3`,`#D4`,`#D5`],meta:{variant:`right`}},{id:`#D1`,type:`container`,containerType:`box`,label:`People & Docs`,children:[`#D1-1`,`#D1-2`,`#D1-3`]},{id:`#D1-1`,type:`item`,itemType:`datasource`,label:`Employee Profiles`},{id:`#D1-2`,type:`item`,itemType:`datasource`,label:`Expert Documents`},{id:`#D1-3`,type:`item`,itemType:`datasource`,label:`Manuals & Guides`},{id:`#D2`,type:`container`,containerType:`box`,label:`Transactions & Logs`,children:[`#D2-1`,`#D2-2`,`#D2-3`]},{id:`#D2-1`,type:`item`,itemType:`datasource`,label:`System Events`},{id:`#D2-2`,type:`item`,itemType:`datasource`,label:`Process Logs`},{id:`#D2-3`,type:`item`,itemType:`datasource`,label:`Transactions`},{id:`#D3`,type:`container`,containerType:`box`,label:`Projects & Tasks`,children:[`#D3-1`,`#D3-2`,`#D3-3`]},{id:`#D3-1`,type:`item`,itemType:`datasource`,label:`Project Repositories`},{id:`#D3-2`,type:`item`,itemType:`datasource`,label:`Tickets & Issues`},{id:`#D3-3`,type:`item`,itemType:`datasource`,label:`Delivery Artifacts`},{id:`#D4`,type:`container`,containerType:`box`,label:`External Sources`,children:[`#D4-1`,`#D4-2`,`#D4-3`]},{id:`#D4-1`,type:`item`,itemType:`datasource`,label:`Web & News`},{id:`#D4-2`,type:`item`,itemType:`datasource`,label:`Partner Data`},{id:`#D4-3`,type:`item`,itemType:`datasource`,label:`Regulatory Content`},{id:`#D5`,type:`container`,containerType:`box`,label:`Quality Gates`,children:[`#D5-1`,`#D5-2`,`#D5-3`,`#D5-4`],meta:{variant:`highlight`}},{id:`#D5-1`,type:`item`,itemType:`concept`,label:`Schema Validation`},{id:`#D5-2`,type:`item`,itemType:`concept`,label:`Deduplication`},{id:`#D5-3`,type:`item`,itemType:`concept`,label:`Enrichment`},{id:`#D5-4`,type:`item`,itemType:`concept`,label:`Versioning`}],connections:[{id:`conn-triad-1`,from:`#L9-t-initiator`,to:`#L9-t-actor`,connectionType:`generic`,direction:`forward`,edgeType:`defines frame for`},{id:`conn-triad-2`,from:`#L9-t-actor`,to:`#L9-t-beneficiary`,connectionType:`generic`,direction:`forward`,edgeType:`creates value for`},{id:`conn-fb-1`,from:`#L6`,to:`#L3`,connectionType:`feedback`,label:`Applications → Knowledge Core`,direction:`backward`},{id:`conn-fb-2`,from:`#L9`,to:`#L3`,connectionType:`feedback`,label:`System Participants → Knowledge Core`,direction:`backward`},{id:`conn-flow-1`,from:`#L1`,to:`#L1b`,connectionType:`flow`,direction:`forward`},{id:`conn-flow-2`,from:`#L1b`,to:`#L3`,connectionType:`flow`,direction:`forward`},{id:`conn-fb-4`,from:`#L10`,to:`#L3`,connectionType:`feedback`,label:`Outcomes → Knowledge Core`,direction:`backward`}],badges:[{id:`badge-feedback`,icon:`↻`,label:`Feedback Loop`,description:`This element participates in a feedback loop. Actors, systems or processes return information that continuously improves organizational knowledge and capabilities. Details to be defined in a separate process view.`}],views:[{id:`view-overview`,type:`overview`,label:`OIA Overview`,include:[`all`]}],legend:{show:!0,position:`bottom`}};function t(e,t){return e.elements.find(e=>e.id===t)}function n(e,t){return!t||t.length===0?``:t.map(t=>{let n=e.badges.find(e=>e.id===t);return n?`<span class="badge-icon" title="${n.label}: ${n.description}">${n.icon}</span>`:``}).join(``)}function r(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="sit-item">${r.label}</span>`:``}).join(``)}function i(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="usecase-item"><span class="usecase-dot"></span>${r.label}</span>`:``}).join(``)}function a(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="cap-item"><span class="cap-dot"></span>${r.label}</span>`:``}).join(``)}function o(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="tag mono accent2">${r.label}</span>`:``}).join(``)}function s(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="tag"><span class="dot"></span>${r.label}</span>`:``}).join(``)}function c(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<div class="data-item"><span class="data-icon">${r.icon||``}</span>${r.label}</div>`:``}).join(``)}function l(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<div class="sol-item"><span class="sol-icon">${r.icon||``}</span>${r.label}</div>`:``}).join(``)}function u(e,n){return`<div class="core-inner">${n.children.map(n=>{let r=t(e,n);if(!r||r.type!==`container`)return``;let i=r.children.map(n=>{let r=t(e,n);return r?r.label:``}).join(`<br>`);return`<div class="core-block" data-id="${r.id}">
      <div class="core-block-title">${r.label}</div>
      <div class="core-block-items">${i}</div>
    </div>`}).join(``)}</div>`}function d(e,n){return`<div class="pipeline-row">${n.children.map((n,r,i)=>{let a=t(e,n);if(!a)return``;let o=r===i.length-1,s=a.properties?.variant===`output`?` pipeline-step--output`:``,c=o?``:`<div class="pipeline-arrow">→</div>`;return`<div class="pipeline-step${s}">${a.icon||``}<br>${a.label}</div>${c}`}).join(``)}</div>`}function f(e,n){return n.children.map(n=>{let r=t(e,n);if(!r)return``;let i=Array.isArray(r.properties?.outcome_category)?r.properties.outcome_category.join(` · `):r.properties?.outcome_category||``;return`<div class="outcome-item">
      <span class="outcome-label">${r.label}</span>
      ${i?`<span class="outcome-categories">${i}</span>`:``}
    </div>`}).join(``)}var p={purple:`sp-color--purple`,teal:`sp-color--teal`,amber:`sp-color--amber`,gray:`sp-color--gray`},m={initiator:`ACCOUNTABLE · CONSTITUTIVE`,actor:`RESPONSIBLE · OPERATIVE`,beneficiary:`PURPOSIVE · RECEPTIVE`},h={initiator:[`Human`,`Organization`],actor:[`Human`,`Agent`,`System`],beneficiary:[`Human`,`Team`,`System`]},ee={initiator:`Sets governance & goals. Defines what actors may do.`,actor:`Primary interaction layer. Engages capabilities, features & knowledge core.`,beneficiary:`Receives output. Feedback flows back into the architecture.`},g=`OIA is actor-centric — governance flows in from the left, value flows out to the right`;function _(e,n){let r=t(e,n);if(!r||r.type!==`container`)return``;let i=[];return r.children.forEach((n,a)=>{let o=t(e,n);if(!o)return;if(a>0){let t=r.children[a-1],o=e.connections.find(e=>e.from===t&&e.to===n),s=o?.edgeType?` title="${o.edgeType}"`:``;i.push(`<div class="sp-triad__arrow"${s}>→</div>`)}let s=p[o.color??``]??``,c=o.weight===`primary`?`sp-triad__item--primary`:o.weight===`secondary`?`sp-triad__item--secondary`:``,l=o.primary?` title="Primary interaction entity"`:``,u=o.primary?`${o.label} ★`:o.label,d=o.role?m[o.role]??``:``,f=o.role?(h[o.role]??[]).map(e=>`<span class="sp-triad__tag">${e}</span>`).join(``):``,g=o.role?ee[o.role]??``:``;i.push(`<div class="sp-triad__item ${s} ${c}" data-id="${o.id}"${l}>
      <span class="sp-triad__label">${u}</span>
      ${d?`<span class="sp-triad__raci">${d}</span>`:``}
      ${f?`<div class="sp-triad__tags">${f}</div>`:``}
      ${g?`<span class="sp-triad__desc">${g}</span>`:``}
    </div>`)}),`<div class="sp-triad">${i.join(``)}</div>`}function v(e,n){let r=t(e,n);if(!r||r.type!==`container`)return``;let i=r.children.map(n=>t(e,n)),a=i.some(e=>e?.converging),o=i.map(t=>t?`<div class="sp-spectrum__entity ${p[t.color??``]??``}${t.converging?` sp-spectrum__entity--converging`:``}" data-id="${t.spectrumAxis===`accountability`?e.elements.find(e=>e.type===`item`&&e.itemType===`participant`&&e.spectrumAxis===`autonomy`&&e.label===t.label)?.id??t.id:t.id}">
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
  </div>`}function te(e,t){let[n]=t.children;return`<div class="sp-layer">
    ${_(e,n)}
  </div>`}function ne(e,t){let[n,r,i,a]=t.children;return`<div class="sp-layer">
    ${_(e,n)}
    <div class="sp-centric-stmt">${g}</div>
    <div class="sp-spectra-label">Actor types — how they differ</div>
    ${v(e,r)}
    ${v(e,i)}
    ${y(e,a)}
  </div>`}var b={"#L9":(e,t)=>te(e,t),"#L8":(e,t)=>`<div class="sit-grid">${r(e,t)}</div>`,"#L7":(e,t)=>`<div class="usecase-grid">${i(e,t)}</div>`,"#L6":(e,t)=>`<div class="sol-grid">${l(e,t)}</div>`,"#L5":(e,t)=>`<div class="cap-grid">${a(e,t)}</div>`,"#L4":(e,t)=>`<div class="tag-row">${o(e,t)}</div>`,"#L2":(e,t)=>`<div class="tag-row">${s(e,t)}</div>`,"#L10":(e,t)=>`<div class="outcome-grid">${f(e,t)}</div>`,"#L1b":d,"#L1":(e,t)=>`<div class="data-grid">${c(e,t)}</div>`};function re(e,t){let r=t.meta?.highlighted===!0,i=t.containerType===`pipeline`,a=document.createElement(`div`);if(a.dataset.id=t.id,r)return a.className=`layer-core`,a.innerHTML=`
      <div class="layer-header">
        <span class="layer-num layer-num--core">${t.id.replace(`#`,``)}</span>
        <span class="layer-title">${t.label}</span>
        <span class="core-badge">CENTRAL COMPONENT</span>
        <span class="layer-desc layer-desc--core">${t.description||``}</span>
        ${n(e,t.badges)}
      </div>
      ${u(e,t)}
    `,a;a.className=`layer`;let o=t.id.replace(`#`,``),s=b[t.id]??(i?d:null),c=s?s(e,t):``;return a.innerHTML=`
    <div class="layer-header">
      <span class="layer-num">${o}</span>
      <span class="layer-title">${t.label}</span>
      <span class="layer-desc">${t.description||``}</span>
      ${n(e,t.badges)}
    </div>
    ${c}
  `,a}function ie(e,n){return n.map(n=>{let r=t(e,n);if(!r)return``;if(r.type===`item`)return`<div class="side-item">${r.label}</div>`;if(r.type===`container`){let n=r.meta?.variant===`highlight`,i=n?` side-block--highlight`:``,a=n?` side-item--highlight`:``,o=r.children.map(n=>{let r=t(e,n);return r?`<div class="side-item${a}">${r.label}</div>`:``}).join(``);return`<div class="side-block${i}" data-id="${r.id}">
  <div class="side-block-title">${r.label}</div>
  ${o}
</div>`}return``}).join(`
`)}function x(e,t){let n=document.createElement(`div`);return n.className=`side-panel`+(t.meta?.variant===`right`?` right-panel`:``),n.innerHTML=`
    <div class="side-label">${t.label}</div>
    ${ie(e,t.children)}
  `,n}function ae(e){let n=document.createElement(`div`);n.className=`diagram-wrapper`;let r=document.createElement(`div`);r.className=`mobile-notice`,r.textContent=`Best viewed on desktop — pinch to zoom or rotate to landscape`,n.appendChild(r);let i=document.createElement(`div`);i.className=`header`,i.innerHTML=`
    <div class="header-badge">Reference Architecture · V${e.meta.version} · ${e.meta.created}</div>
    <h1>Organizational <span>Intelligence</span> Architecture</h1>
    <p>${e.meta.subtitle}</p>
    <div class="header-line"></div>
  `,n.appendChild(i);let a=document.createElement(`div`);a.className=`main-grid`;let o=t(e,`#panel-left`);o&&a.appendChild(x(e,o));let s=document.createElement(`div`);s.className=`center-col`;let c=e.elements.filter(e=>e.type===`container`&&e.containerType===`layer`).map(e=>e).sort((e,t)=>(t.meta?.order??0)-(e.meta?.order??0)),l=e.elements.filter(e=>e.type===`container`&&e.containerType===`pipeline`).map(e=>e),u=[...c,...l].sort((e,t)=>(t.meta?.order??0)-(e.meta?.order??0));for(let t of u)s.appendChild(re(e,t));a.appendChild(s);let d=t(e,`#panel-right`);if(d&&a.appendChild(x(e,d)),n.appendChild(a),e.legend.show&&e.badges.length>0){let t=document.createElement(`div`);t.className=`legend`,t.innerHTML=`<div class="legend-title">Legend</div><div class="legend-items">${e.badges.map(e=>`
      <div class="legend-item">
        <span class="legend-icon">${e.icon}</span>
        <div class="legend-text">
          <span class="legend-label">${e.label}</span>
          <span class="legend-desc">${e.description}</span>
        </div>
      </div>
    `).join(``)}</div>`,n.appendChild(t)}let f=document.createElement(`div`);return f.className=`footer`,f.textContent=`OIA · Organizational Intelligence Architecture · V${e.meta.version} · © ${e.meta.created} · ${e.meta.subtitle}`,n.appendChild(f),n}function oe(e){let t=t=>t===e?` euai-node--active`:` euai-node--inactive`;return`
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
  `}function se(e,t){return`<button class="info-badge" data-overlay-target="${t}" type="button" aria-expanded="false">ⓘ ${e}</button>`}function ce(e,t){return`<div class="info-overlay" id="${e}" hidden role="dialog" aria-modal="true">
    <div class="info-overlay__panel">
      <button class="info-overlay__close" type="button" aria-label="Close">×</button>
      <div class="info-overlay__content">${t}</div>
    </div>
  </div>`}function le(e){let t=()=>{e.querySelectorAll(`.info-overlay`).forEach(e=>{e.hidden=!0}),e.querySelectorAll(`.info-badge`).forEach(e=>{e.setAttribute(`aria-expanded`,`false`)})};e.querySelectorAll(`.info-badge`).forEach(n=>{n.addEventListener(`click`,r=>{r.stopPropagation();let i=n.dataset.overlayTarget;if(!i)return;let a=e.querySelector(`#${i}`);if(!a)return;let o=a.hidden;t(),o&&(a.hidden=!1,n.setAttribute(`aria-expanded`,`true`))})}),e.querySelectorAll(`.info-overlay`).forEach(e=>{e.addEventListener(`click`,n=>{n.target===e&&t()}),e.querySelector(`.info-overlay__close`)?.addEventListener(`click`,e=>{e.stopPropagation(),t()})})}function S(e,t){return e.elements.find(e=>e.type===`container`&&e.children.includes(t))}function C(e,t){let n=[],r=t;for(;;){let t=S(e,r);if(!t)break;n.unshift(t),r=t.id}return n}var w=new Set([`frame`,`spectrum`]);function T(e,t){let n=C(e,t).filter(e=>!w.has(e.containerType)&&e.navigationVisible!==!1),r=e.elements.find(e=>e.id===t),i=r?.type===`item`?r.parent:void 0,a=i?e.elements.find(e=>e.id===i):void 0,o=[`<a class="detail-breadcrumb__item" href="#/">OIA</a>`];return n.forEach(e=>{o.push(`<span class="detail-breadcrumb__sep">›</span><a class="detail-breadcrumb__item" href="#/detail/${encodeURIComponent(e.id)}">${e.label}</a>`)}),a&&o.push(`<span class="detail-breadcrumb__sep">›</span><a class="detail-breadcrumb__item" href="#/detail/${encodeURIComponent(a.id)}">${a.label}</a>`),r&&o.push(`<span class="detail-breadcrumb__sep">›</span><span class="detail-breadcrumb__item detail-breadcrumb__item--current">${r.label}</span>`),`<nav class="detail-breadcrumb">${o.join(``)}</nav>`}function E(e,t){let n=S(e,t);if(!n)return``;let r=n.children.filter(e=>e!==t);return r.length===0?``:`<div class="detail-related"><span class="detail-related__label">Related:</span>${r.map(t=>{let n=e.elements.find(e=>e.id===t);return n?`<a class="detail-related__item" href="#/detail/${encodeURIComponent(t)}">${n.label}</a>`:``}).filter(Boolean).join(``)}</div>`}var D={"defines frame for":`governs`,"creates value for":`produces`},O={"defines frame for":`The Initiator sets goals, permissions and ODRs under which the Actor operates. No action without a governance frame.`,"creates value for":`The Actor's work produces outcomes that flow to the Beneficiary. Value creation is the purpose of action.`};function k(e,t){if(!t.role)return``;let n=e.connections.filter(t=>{if(!t.edgeType)return!1;let n=e.elements.find(e=>e.id===t.from),r=e.elements.find(e=>e.id===t.to);return n?.type===`item`&&n.role!==void 0&&r?.type===`item`&&r.role!==void 0});if(n.length===0)return``;let r=new Set(n.map(e=>e.to)),i=new Set(n.map(e=>e.from)),a=[...new Set([...i,...r])].find(e=>!r.has(e));if(!a)return``;let o=[a],s=[],c=a;for(;;){let e=n.find(e=>e.from===c);if(!e)break;let t=e.edgeType;s.push({label:t,badge:D[t]??``,tooltip:O[t]??``}),o.push(e.to),c=e.to}let l=[];return o.forEach((n,r)=>{if(r>0){let{label:e,badge:t,tooltip:n}=s[r-1];l.push(`<div class="detail-flow__edge" title="${n}">
        ${t?`<span class="detail-flow__edge-badge">${t}</span>`:``}
        <span class="detail-flow__edge-arrow">→</span>
        <span class="detail-flow__edge-label">${e}</span>
      </div>`)}let i=e.elements.find(e=>e.id===n);if(!i)return;let a=n===t.id,o=a?t.color??``:i.color??``,c=a&&o?` detail-flow__node--${o}`:``,u=a?``:` detail-flow__node--inactive`;a?l.push(`<span class="detail-flow__node detail-flow__node--current${c}">${i.label}</span>`):l.push(`<a class="detail-flow__node${u}" href="#/detail/${encodeURIComponent(n)}">${i.label}</a>`)}),`<div class="detail-flow"><div class="detail-flow__label">Governance flow</div><div class="detail-flow__row">${l.join(``)}</div></div>`}function A(e,t){if(!t.role)return``;let n=e.elements.find(e=>e.type===`container`&&e.children.includes(t.id));if(!n)return``;let r=e.elements.find(e=>e.type===`container`&&e.children.includes(n.id));if(!r)return``;let[,i,a,o]=r.children;return i?`<div class="detail-actor-context">
    ${v(e,i)}
    ${v(e,a)}
    ${o?y(e,o):``}
  </div>`:``}var j={initiator:{was:`The Initiator is the entity that legitimises an action before it takes place. It sets the governance frame: goals, permissions, rules, and the boundaries within which Actors operate. The Initiator interacts with OIA constitutively — not operatively. It appears before the process, not within it. Accountability always traces back to the Initiator. Always reducible to a human or organisation.`,warum:`Organisations fail at AI not because of bad Agents. They fail because no one explicitly defined who the Initiator is. When the governance frame is absent — which data may an Agent use, which goals may it pursue, which decisions may it make autonomously — Agents operate in a vacuum. They optimise without knowing what for. The Initiator is the answer to the question: who is responsible?`,wie:`In RACI terms: <strong>Accountable.</strong> The party that ultimately stands behind the outcome — not the executor.<br><br>In EU AI Act terms: <strong>Deployer.</strong> The entity that puts an AI system into operation within a specific context and bears responsibility for that context. The Deployer has a contract with the Provider (external to OIA) that defines obligations and their limits.`},actor:{was:`The Actor is the primary interaction entity of OIA. It engages with Capabilities, Features, and the Knowledge Core. OIA is built from the Actor's perspective. The Actor can be a Human, an Agent, or a System — three distinct types of organisational asset.`,warum:`Without an Actor, the governance frame of the Initiator has no effect. The Actor is the entity that translates intent into action. In a world where Agents increasingly operate alongside humans, making Actor types explicit is an architectural necessity — not a theoretical exercise.`,wie:`The three Actor types differ in how they are governed:<div class="detail-wwh__actor-types"><div class="detail-wwh__actor-card"><div class="detail-wwh__actor-type">Human</div><div class="detail-wwh__actor-asset">Employee</div><div class="detail-wwh__actor-frame">Employment contract — rights, duties, labour law</div></div><div class="detail-wwh__actor-card"><div class="detail-wwh__actor-type">Agent</div><div class="detail-wwh__actor-asset">AI workforce</div><div class="detail-wwh__actor-frame">Governance document — scope, limits, termination</div></div><div class="detail-wwh__actor-card"><div class="detail-wwh__actor-type">System</div><div class="detail-wwh__actor-asset">Production asset</div><div class="detail-wwh__actor-frame">Service / maintenance contract</div></div></div><p class="detail-wwh__note">The EU AI Act assigns no independent role to AI Agents as actors. When an Agent acts, accountability defaults to the Deployer — which maps to the OIA Initiator. This is the structural basis for the key insight: <strong>Capabilities converge. Accountability does not.</strong></p>`},beneficiary:{was:`The Beneficiary is the entity for whom the outcome creates value. It legitimises the action — without a Beneficiary, there is no purpose. The Beneficiary receives output but does not control the process. Feedback from the Beneficiary flows back into the architecture.`,warum:`The Beneficiary is often the invisible party in AI implementations. Systems are built, Actors are trained, governance is defined — but the question "for whom, and with what outcome?" is answered too late. Making the Beneficiary explicit forces the question before implementation begins.`,wie:`In RACI terms: <strong>Informed.</strong> Receives the result, provides feedback.<br><br>In EU AI Act terms: <strong>Affected person / end user.</strong> Subject to transparency and notification rights under Art. 50 — must be informed when interacting with AI systems.`}};function M(e){if(!e.role)return``;let t=j[e.role];if(!t)return``;let n=(e,t)=>`
    <div class="detail-wwh__section">
      <div class="detail-wwh__label">${e}</div>
      <div class="detail-wwh__body">${t}</div>
    </div>`;return`<div class="detail-wwh">
    ${n(`What`,t.was)}
    ${n(`Why`,t.warum)}
    ${n(`How`,t.wie)}
  </div>`}var N={"#L9-sa-human":{what:`The Human Actor decides contextually, drawing on experience, judgment, and organisational knowledge. Embedded in hierarchy and social context — which constrains and enriches decisions simultaneously.`,why:`The Human brings something no Agent has: accountability. Not just legal accountability — but the lived understanding of consequences. A Human Actor filters through values, relationships, and experience before acting. That friction is not a weakness. It is governance in practice.`,how:`Organisational asset: <strong>Employee.</strong> Governance frame: Employment contract — rights, duties, governed by labour law.<br><br>On the Autonomy spectrum: middle position. More decision space than a System, less operational throughput than an Agent.<br>On the Accountability spectrum: rightmost position — always, regardless of Agent capabilities.`},"#L9-sa-agent":{what:`The Agent Actor operates goal-directed and autonomously within a defined governance frame. It processes information in parallel, runs continuously, and applies consistent logic without cognitive bias or organisational embeddedness.`,why:`Agents do not replace humans — they extend organisational reach into tasks that exceed human throughput: continuous monitoring, parallel processing, pattern recognition at scale. Their value is precisely what makes them require governance: they act without the friction that humans provide naturally.`,how:`Organisational asset: <strong>AI workforce.</strong> Governance frame: Governance document — scope, limits, termination. No legal status, no independent accountability.<br><br>On the Autonomy spectrum: rightmost position.<br>On the Accountability spectrum: middle position — accountability defaults to the Initiator.`},"#L9-sa-system":{what:`The System Actor executes deterministically within fixed parameters. It does not decide — it processes. Configurable, maintainable, replaceable.`,why:`Systems are the stable foundation on which Agents and Humans operate. They provide consistency, auditability, and scalability — without the variability of human judgment or the autonomy of Agents. Their predictability is their value.`,how:`Organisational asset: <strong>Production asset.</strong> Governance frame: Service / maintenance contract.<br><br>On the Autonomy spectrum: leftmost position — no independent decision space.<br>On the Accountability spectrum: leftmost position — inherits accountability from the Initiator.`}};function P(e){let t=N[e.id];if(!t)return``;let n=(e,t)=>`
    <div class="detail-wwh__section">
      <div class="detail-wwh__label">${e}</div>
      <div class="detail-wwh__body">${t}</div>
    </div>`;return`<div class="detail-wwh">
    ${n(`What`,t.what)}
    ${n(`Why`,t.why)}
    ${n(`How`,t.how)}
  </div>`}function F(e,t,n=0){return n>3?``:t.map(t=>{let r=e.elements.find(e=>e.id===t);if(!r)return``;let i=n>0?` style="margin-left:${n*16}px"`:``;if(r.type===`container`){let t=r.children.length>0?`<div class="detail-children">${F(e,r.children,n+1)}</div>`:``;return`<div class="detail-item"${i}>
        <span class="detail-item-label">${r.label}</span>
        <span class="detail-item__meta">${r.containerType}</span>
        ${t}
      </div>`}return`<div class="detail-item"${i}>
      <span class="detail-item-label">${r.icon?r.icon+` `:``}${r.label}</span>
      <span class="detail-item__meta">${r.itemType}</span>
    </div>`}).join(``)}function I(e,t){let n=e.elements.find(e=>e.id===t),r=document.createElement(`div`);if(r.className=`detail-view`,!n)return r.innerHTML=`
      <a class="detail-back" href="#/">← Back</a>
      <div class="detail-title">Element not found: ${t}</div>
    `,r;let i=n.type===`container`?n.children:[],a=n.description||``,o=T(e,t),s=E(e,t);if(n.id===`#L9`&&n.type===`container`)return r.innerHTML=`
      ${o}
      <div class="detail-id">${n.id}</div>
      <div class="detail-title">${n.label}</div>
      ${a?`<div class="detail-desc">${a}</div>`:``}
      ${ne(e,n)}
      ${s}
    `,r;let c=n.type===`item`&&n.itemType===`participant`?n:null,l=c?k(e,c):``,u=c?M(c):``,d=c?P(c):``,f=c?A(e,c):``,p=i.length>0?`<div class="detail-items">${F(e,i)}</div>`:a?``:`<div class="detail-items"><div class="detail-item detail-item--empty">No sub-elements</div></div>`,m=c?.role?se(`EU AI Act context`,`overlay-eu-ai-act`):``,h=c?.role?ce(`overlay-eu-ai-act`,oe(c.role)):``;return r.innerHTML=`
    ${o}
    <div class="detail-header">
      <div>
        <div class="detail-id">${n.id}</div>
        <div class="detail-title">${n.label}</div>
      </div>
      ${m}
    </div>
    ${h}
    ${a?`<div class="detail-desc">${a}</div>`:``}
    ${l}
    ${u}
    ${d}
    ${f}
    ${p}
    ${s}
  `,c?.role&&le(r),r}function L(){let e=document.createElement(`div`);return e.className=`page-view`,e.innerHTML=`
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
  `,e}function R(){let e=document.createElement(`div`);return e.className=`page-view`,e.innerHTML=`
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
  `,e}function ue(){let e=document.createElement(`div`);return e.className=`page-view`,e.innerHTML=`
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
  `,e}function z(){let e=document.createElement(`div`);return e.className=`page-view`,e.innerHTML=`
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
  `,e}var B=[{href:`#/`,label:`OIA`,route:`/`},{href:`#/motivation`,label:`Motivation`,route:`/motivation`},{href:`#/contribute`,label:`Contribute`,route:`/contribute`},{href:`#/about`,label:`About`,route:`/about`},{href:`#/legal`,label:`Legal Notice`,route:`/legal`}];function V(e){return e.startsWith(`#/motivation`)?`/motivation`:e.startsWith(`#/contribute`)?`/contribute`:e.startsWith(`#/about`)?`/about`:e.startsWith(`#/legal`)?`/legal`:`/`}function H(e){let t=V(window.location.hash||`#/`);e.innerHTML=`
    <div class="site-nav__inner">
      <a class="site-nav__brand" href="#/">OIA</a>
      <ul class="site-nav__links">
        ${B.map(e=>`
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
  `}var U=.75,W=.4,G=.05,K,q,J=null,Y=1440;function de(){return Math.max(W,Math.min(U,window.innerWidth/Y))}var X=de();function Z(e){X=e;let t=q.querySelector(`.diagram-wrapper`);if(t){t.style.transform=`scale(${X})`;let e=X<.55?`zoom-far`:X<.75?`zoom-mid`:`zoom-full`;t.classList.remove(`zoom-far`,`zoom-mid`,`zoom-full`),t.classList.add(e)}let n=q.querySelector(`.zoom-label`);n&&(n.textContent=Math.round(X*100)+`%`);let r=q.querySelector(`.zoom-slider`);r&&(r.value=String(X*100))}function Q(){q.querySelectorAll(`[data-id]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.id;n&&(window.location.hash=`#/detail/${n}`)})})}function fe(){q.innerHTML=``;let e=ae(K);q.appendChild(e),Z(X),Q();let t=document.createElement(`div`);t.className=`zoom-controls`,t.innerHTML=`
    <span class="zoom-controls__label">Zoom</span>
    <input class="zoom-slider" type="range" min="${W*100}" max="100" value="${Math.round(X*100)}" step="${G*100}">
    <span class="zoom-label">${Math.round(X*100)}%</span>
  `,q.appendChild(t);let n=t.querySelector(`.zoom-slider`);n.addEventListener(`input`,()=>Z(Number(n.value)/100)),t.addEventListener(`wheel`,e=>{e.preventDefault();let t=e.deltaY<0?G:-G;Z(Math.min(1,Math.max(W,X+t)))})}function pe(e){q.innerHTML=``,q.appendChild(I(K,e)),Q()}function $(e){q.innerHTML=``,q.appendChild(e)}function me(e,t){K=e,q=t,J=document.getElementById(`site-nav`);let n=document.querySelector(`.github-fab`),r=()=>{let e=window.location.hash||`#/`;J&&H(J);let t=e===`#/motivation`||e===`#/contribute`||e===`#/about`||e===`#/legal`;n&&(n.style.display=t?``:`none`),e.startsWith(`#/detail/`)?pe(decodeURIComponent(e.replace(`#/detail/`,``))):e===`#/motivation`?$(L()):e===`#/contribute`?$(R()):e===`#/about`?$(ue()):e===`#/legal`?$(z()):fe()};window.addEventListener(`hashchange`,r),r()}me(e,document.getElementById(`app`));