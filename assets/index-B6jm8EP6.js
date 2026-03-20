(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={meta:{version:`0.3.0`,title:`Organizational Intelligence Architecture`,subtitle:`How organizations turn knowledge into action`,created:`2026`},elements:[{id:`#panel-left`,type:`container`,containerType:`panel`,label:`System Development & Interaction`,children:[`#I1`,`#I2`,`#I3`,`#I4`],meta:{variant:`left`}},{id:`#I1`,type:`container`,containerType:`box`,label:`User Interaction`,children:[`#I1-1`,`#I1-2`,`#I1-3`,`#I1-4`]},{id:`#I1-1`,type:`item`,itemType:`concept`,label:`Login & Authentication`},{id:`#I1-2`,type:`item`,itemType:`concept`,label:`User Profile`},{id:`#I1-3`,type:`item`,itemType:`concept`,label:`Click-Through`},{id:`#I1-4`,type:`item`,itemType:`concept`,label:`Input / Output`},{id:`#I2`,type:`container`,containerType:`box`,label:`Context Understanding`,children:[`#I2-1`,`#I2-2`,`#I2-3`,`#I2-4`]},{id:`#I2-1`,type:`item`,itemType:`concept`,label:`Intent Detection`},{id:`#I2-2`,type:`item`,itemType:`concept`,label:`Preference Detection`},{id:`#I2-3`,type:`item`,itemType:`concept`,label:`Context Analysis`},{id:`#I2-4`,type:`item`,itemType:`concept`,label:`Context Enrichment`},{id:`#I3`,type:`container`,containerType:`box`,label:`Feature Orchestration`,children:[`#I3-1`,`#I3-2`,`#I3-3`,`#I3-4`]},{id:`#I3-1`,type:`item`,itemType:`concept`,label:`Pipelines`},{id:`#I3-2`,type:`item`,itemType:`concept`,label:`Workflows`},{id:`#I3-3`,type:`item`,itemType:`concept`,label:`Business Logic`},{id:`#I3-4`,type:`item`,itemType:`concept`,label:`Agents`},{id:`#I4`,type:`container`,containerType:`box`,label:`Model Improvement`,children:[`#I4-1`,`#I4-2`,`#I4-3`,`#I4-4`]},{id:`#I4-1`,type:`item`,itemType:`concept`,label:`Training`},{id:`#I4-2`,type:`item`,itemType:`concept`,label:`Fine-Tuning`},{id:`#I4-3`,type:`item`,itemType:`concept`,label:`Optimization`},{id:`#I4-4`,type:`item`,itemType:`concept`,label:`Monitoring`},{id:`#L10`,type:`container`,containerType:`layer`,label:`Business Outcome`,description:`Where knowledge becomes value`,children:[`#L10-1`,`#L10-2`,`#L10-3`,`#L10-4`,`#L10-5`,`#L10-6`],badges:[`badge-feedback`],meta:{order:10}},{id:`#L10-1`,type:`item`,itemType:`outcome`,label:`Informed Decision`,properties:{outcome_category:[`cognitive`,`strategic`]}},{id:`#L10-2`,type:`item`,itemType:`outcome`,label:`Executed Action`,properties:{outcome_category:[`operational`,`execution`]}},{id:`#L10-3`,type:`item`,itemType:`outcome`,label:`Operational Efficiency`,properties:{outcome_category:[`operational`,`performance`]}},{id:`#L10-4`,type:`item`,itemType:`outcome`,label:`Customer Value`,properties:{outcome_category:[`experience`,`strategic`]}},{id:`#L10-5`,type:`item`,itemType:`outcome`,label:`Risk Reduction`,properties:{outcome_category:[`governance`,`resilience`]}},{id:`#L10-6`,type:`item`,itemType:`outcome`,label:`Continuous Improvement`,properties:{outcome_category:[`adaptive`,`learning`]}},{id:`#L9`,type:`container`,containerType:`layer`,label:`System Participants`,description:`Who initiates, acts, and benefits — and with what accountability`,children:[`#L9-triad`,`#L9-spectrum-autonomy`,`#L9-spectrum-accountability`,`#L9-key-insight`],meta:{order:9}},{id:`#L9-triad`,type:`container`,containerType:`frame`,label:`Triad`,navigationVisible:!1,children:[`#L9-t-initiator`,`#L9-t-actor`,`#L9-t-beneficiary`]},{id:`#L9-t-initiator`,type:`item`,itemType:`participant`,label:`Initiator`,role:`initiator`,triadPosition:1,color:`purple`,weight:`secondary`,description:`Defines the governance frame: goals, permissions, and organizational rules. Interacts with OIA constitutively — not operatively. Sets the conditions under which Actors operate. Accountability always traces back to the Initiator and is always reducible to a human or organization.`},{id:`#L9-t-actor`,type:`item`,itemType:`participant`,label:`Actor`,role:`actor`,triadPosition:2,color:`teal`,weight:`primary`,primary:!0,description:`The primary interaction entity of OIA. Engages with Capabilities, Features, and the Knowledge Core. OIA is built from the Actor's perspective. The Actor can be a Human, an Agent, or a System.`},{id:`#L9-t-beneficiary`,type:`item`,itemType:`participant`,label:`Beneficiary`,role:`beneficiary`,triadPosition:3,color:`amber`,weight:`secondary`,description:`The entity for whom the outcome creates value. Legitimizes the action. Feedback flows back into the architecture from the Beneficiary, but the Beneficiary does not control the process. Can be a human, team, or system.`},{id:`#L9-spectrum-autonomy`,type:`container`,containerType:`spectrum`,label:`Autonomy & Decision Space`,spectrumAxis:`autonomy`,children:[`#L9-sa-system`,`#L9-sa-human`,`#L9-sa-agent`]},{id:`#L9-sa-system`,type:`item`,itemType:`participant`,label:`System`,parent:`#L9-t-actor`,spectrumAxis:`autonomy`,position:1,caption:`Configured · deterministic`,description:`Operates within a fixed configuration set by the Initiator. No independent decision space — executes exactly what was configured. Predictable, deterministic, bounded by design.`,color:`gray`},{id:`#L9-sa-human`,type:`item`,itemType:`participant`,label:`Human`,parent:`#L9-t-actor`,spectrumAxis:`autonomy`,position:2,caption:`Guided · contextual judgment`,description:`Decides contextually, embedded in hierarchy, political consideration, and cognitive limits. Filters before acting — through organization, experience, and judgment. Greater interpretive depth than operational reach.`,color:`teal`},{id:`#L9-sa-agent`,type:`item`,itemType:`participant`,label:`Agent`,parent:`#L9-t-actor`,spectrumAxis:`autonomy`,position:3,caption:`Goal-directed · autonomous`,description:`Greater operational reach than a human: parallel processing, continuous availability, no cognitive bias, no organizational embeddedness. Operates without the filters that constrain human decision-making in organizations. The positioning to the right of Human on this axis is intentional — not a display error.`,color:`teal`,converging:!0},{id:`#L9-spectrum-accountability`,type:`container`,containerType:`spectrum`,label:`Accountability`,spectrumAxis:`accountability`,children:[`#L9-sc-system`,`#L9-sc-agent`,`#L9-sc-human`]},{id:`#L9-sc-system`,type:`item`,itemType:`participant`,label:`System`,parent:`#L9-t-actor`,spectrumAxis:`accountability`,position:1,caption:`Inherits from Initiator`,description:`Carries no independent accountability. Accountability flows back entirely to the Initiator who configured it.`,color:`gray`},{id:`#L9-sc-agent`,type:`item`,itemType:`participant`,label:`Agent`,parent:`#L9-t-actor`,spectrumAxis:`accountability`,position:2,caption:`Governance-bounded · delegated`,description:`Accountability is delegated and explicitly bounded by Organizational Decision Records (ODRs). No legal framework, no societal sanction mechanism. Without ODR-defined boundaries, Agent actions cannot be held accountable.`,color:`teal`},{id:`#L9-sc-human`,type:`item`,itemType:`participant`,label:`Human`,parent:`#L9-t-actor`,spectrumAxis:`accountability`,position:3,caption:`Legal · structural · always`,description:`Carries accountability through law, socialization, and culture — mechanisms no machine brings and that cannot be delegated. Permanently at the rightmost position on this axis, independent of agent autonomy.`,color:`purple`},{id:`#L9-key-insight`,type:`item`,itemType:`keyInsight`,parent:`#L9-t-actor`,label:`Key Insight`,text:`Capabilities converge. Accountability does not. The human remains the legal and structural anchor — independent of agent autonomy.`},{id:`#L8`,type:`container`,containerType:`layer`,label:`Situation Layer`,description:`Context of decisions`,children:[`#L8-1`,`#L8-2`,`#L8-3`,`#L8-4`,`#L8-5`,`#L8-6`,`#L8-7`,`#L8-8`,`#L8-9`,`#L8-10`],meta:{order:8}},{id:`#L8-1`,type:`item`,itemType:`situation`,label:`Employee`,properties:{dimension:`who`}},{id:`#L8-2`,type:`item`,itemType:`situation`,label:`Event`,properties:{dimension:`trigger`}},{id:`#L8-3`,type:`item`,itemType:`situation`,label:`Time`,properties:{dimension:`time`}},{id:`#L8-4`,type:`item`,itemType:`situation`,label:`Place`,properties:{dimension:`place`}},{id:`#L8-5`,type:`item`,itemType:`situation`,label:`Domain`,properties:{dimension:`domain`}},{id:`#L8-6`,type:`item`,itemType:`situation`,label:`Task`,properties:{dimension:`task`}},{id:`#L8-7`,type:`item`,itemType:`situation`,label:`Preferences`,properties:{dimension:`preference`}},{id:`#L8-8`,type:`item`,itemType:`situation`,label:`Language`,properties:{dimension:`language`}},{id:`#L8-9`,type:`item`,itemType:`situation`,label:`Access`,properties:{dimension:`access`}},{id:`#L8-10`,type:`item`,itemType:`situation`,label:`Knowledge`,properties:{dimension:`knowledge`}},{id:`#L7`,type:`container`,containerType:`layer`,label:`Use Cases & Challenges`,description:`Business motivation`,children:[`#L7-1`,`#L7-2`,`#L7-3`,`#L7-4`,`#L7-5`,`#L7-6`],meta:{order:7}},{id:`#L7-1`,type:`item`,itemType:`usecase`,label:`HR Process Consulting`,properties:{domain:`HR`}},{id:`#L7-2`,type:`item`,itemType:`usecase`,label:`Infrastructure Maintenance`,properties:{domain:`Operations`}},{id:`#L7-3`,type:`item`,itemType:`usecase`,label:`Software Development`,properties:{domain:`IT`}},{id:`#L7-4`,type:`item`,itemType:`usecase`,label:`System Documentation`,properties:{domain:`IT`}},{id:`#L7-5`,type:`item`,itemType:`usecase`,label:`Procurement Verification`,properties:{domain:`Procurement`}},{id:`#L7-6`,type:`item`,itemType:`usecase`,label:`24h Customer Support`,properties:{domain:`CX`}},{id:`#L6`,type:`container`,containerType:`layer`,label:`Solutions & Applications`,description:`Interaction points`,children:[`#L6-1`,`#L6-2`,`#L6-3`,`#L6-4`,`#L6-5`],badges:[`badge-feedback`],meta:{order:6}},{id:`#L6-1`,type:`item`,itemType:`solution`,label:`Enterprise Search`,icon:`🔍`,properties:{category:`search`}},{id:`#L6-2`,type:`item`,itemType:`solution`,label:`Knowledge Assistant`,icon:`💬`,properties:{category:`assistant`}},{id:`#L6-3`,type:`item`,itemType:`solution`,label:`Maintenance Assistant`,icon:`🔧`,properties:{category:`assistant`}},{id:`#L6-4`,type:`item`,itemType:`solution`,label:`Code Assistant`,icon:`💻`,properties:{category:`assistant`}},{id:`#L6-5`,type:`item`,itemType:`solution`,label:`Analytics Tools`,icon:`📊`,properties:{category:`analytics`}},{id:`#L5`,type:`container`,containerType:`layer`,label:`Cognitive Capabilities`,description:`What the organization can do`,children:[`#L5-1`,`#L5-2`,`#L5-3`,`#L5-4`,`#L5-5`,`#L5-6`,`#L5-7`,`#L5-8`,`#L5-9`,`#L5-10`],meta:{order:5}},{id:`#L5-1`,type:`item`,itemType:`capability`,label:`Find Information`,properties:{cognitive_level:`find`}},{id:`#L5-2`,type:`item`,itemType:`capability`,label:`Evaluate Facts`,properties:{cognitive_level:`evaluate`}},{id:`#L5-3`,type:`item`,itemType:`capability`,label:`Structure Documents`,properties:{cognitive_level:`structure`}},{id:`#L5-4`,type:`item`,itemType:`capability`,label:`Link Knowledge`,properties:{cognitive_level:`link`}},{id:`#L5-5`,type:`item`,itemType:`capability`,label:`Generate Content`,properties:{cognitive_level:`generate`}},{id:`#L5-6`,type:`item`,itemType:`capability`,label:`Identify Patterns`,properties:{cognitive_level:`evaluate`}},{id:`#L5-7`,type:`item`,itemType:`capability`,label:`Detect Redundancies`,properties:{cognitive_level:`evaluate`}},{id:`#L5-8`,type:`item`,itemType:`capability`,label:`Create Reports`,properties:{cognitive_level:`generate`}},{id:`#L5-9`,type:`item`,itemType:`capability`,label:`Communicate Knowledge`,properties:{cognitive_level:`generate`}},{id:`#L5-10`,type:`item`,itemType:`capability`,label:`Deliver Information`,properties:{cognitive_level:`deliver`}},{id:`#L4`,type:`container`,containerType:`layer`,label:`Features & APIs`,description:`Technical reusability`,children:[`#L4-1`,`#L4-2`,`#L4-3`,`#L4-4`,`#L4-5`,`#L4-6`,`#L4-7`,`#L4-8`,`#L4-9`,`#L4-10`],meta:{order:4}},{id:`#L4-1`,type:`item`,itemType:`feature`,label:`/search`,properties:{endpoint:`/search`}},{id:`#L4-2`,type:`item`,itemType:`feature`,label:`/classify`,properties:{endpoint:`/classify`}},{id:`#L4-3`,type:`item`,itemType:`feature`,label:`/summarize`,properties:{endpoint:`/summarize`}},{id:`#L4-4`,type:`item`,itemType:`feature`,label:`/link`,properties:{endpoint:`/link`}},{id:`#L4-5`,type:`item`,itemType:`feature`,label:`/remember`,properties:{endpoint:`/remember`}},{id:`#L4-6`,type:`item`,itemType:`feature`,label:`/chat`,properties:{endpoint:`/chat`}},{id:`#L4-7`,type:`item`,itemType:`feature`,label:`/transform`,properties:{endpoint:`/transform`}},{id:`#L4-8`,type:`item`,itemType:`feature`,label:`/create`,properties:{endpoint:`/create`}},{id:`#L4-9`,type:`item`,itemType:`feature`,label:`/analyze`,properties:{endpoint:`/analyze`}},{id:`#L4-10`,type:`item`,itemType:`feature`,label:`/calc`,properties:{endpoint:`/calc`}},{id:`#L3`,type:`container`,containerType:`layer`,label:`Organizational Knowledge Core`,description:`Organizational memory`,children:[`#L3-semantic`,`#L3-index`,`#L3-graph`,`#L3-access`],badges:[`badge-feedback`],meta:{order:3,highlighted:!0}},{id:`#L3-semantic`,type:`container`,containerType:`box`,label:`Semantic Layer`,children:[`#L3-s1`,`#L3-s2`,`#L3-s3`]},{id:`#L3-s1`,type:`item`,itemType:`concept`,label:`Ontologies`},{id:`#L3-s2`,type:`item`,itemType:`concept`,label:`Taxonomies`},{id:`#L3-s3`,type:`item`,itemType:`concept`,label:`Entities`},{id:`#L3-index`,type:`container`,containerType:`box`,label:`Index & Search`,children:[`#L3-i1`,`#L3-i2`,`#L3-i3`]},{id:`#L3-i1`,type:`item`,itemType:`concept`,label:`Full-Text Index`},{id:`#L3-i2`,type:`item`,itemType:`concept`,label:`Vector Index`},{id:`#L3-i3`,type:`item`,itemType:`concept`,label:`Metadata Index`},{id:`#L3-graph`,type:`container`,containerType:`box`,label:`Knowledge Graph`,children:[`#L3-g1`,`#L3-g2`,`#L3-g3`]},{id:`#L3-g1`,type:`item`,itemType:`concept`,label:`Relations`},{id:`#L3-g2`,type:`item`,itemType:`concept`,label:`Context Links`},{id:`#L3-g3`,type:`item`,itemType:`concept`,label:`Entity Graph`},{id:`#L3-access`,type:`container`,containerType:`box`,label:`Security & Access`,children:[`#L3-a1`,`#L3-a2`,`#L3-a3`]},{id:`#L3-a1`,type:`item`,itemType:`concept`,label:`Access Control`},{id:`#L3-a2`,type:`item`,itemType:`concept`,label:`API Gateway`},{id:`#L3-a3`,type:`item`,itemType:`concept`,label:`Governance`},{id:`#L2`,type:`container`,containerType:`layer`,label:`Data Sources`,description:`Technology foundation`,children:[`#L2-1`,`#L2-2`,`#L2-3`,`#L2-4`,`#L2-5`,`#L2-6`,`#L2-7`,`#L2-8`],meta:{order:2}},{id:`#L2-1`,type:`item`,itemType:`infrastructure`,label:`Large Language Models`,properties:{tech_type:`llm`}},{id:`#L2-2`,type:`item`,itemType:`infrastructure`,label:`Machine Learning`,properties:{tech_type:`ml`}},{id:`#L2-3`,type:`item`,itemType:`infrastructure`,label:`Deep Learning`,properties:{tech_type:`ml`}},{id:`#L2-4`,type:`item`,itemType:`infrastructure`,label:`NLP`,properties:{tech_type:`nlp`}},{id:`#L2-5`,type:`item`,itemType:`infrastructure`,label:`Vector Indexes`,properties:{tech_type:`vector-index`}},{id:`#L2-6`,type:`item`,itemType:`infrastructure`,label:`Graph Databases`,properties:{tech_type:`graph-db`}},{id:`#L2-7`,type:`item`,itemType:`infrastructure`,label:`Computer Vision`,properties:{tech_type:`cv`}},{id:`#L2-8`,type:`item`,itemType:`infrastructure`,label:`RPA`,properties:{tech_type:`rpa`}},{id:`#L1b`,type:`container`,containerType:`pipeline`,label:`Data Processing Pipeline`,description:`Raw data → usable knowledge`,children:[`#L1b-1`,`#L1b-2`,`#L1b-3`,`#L1b-4`,`#L1b-5`],meta:{order:1.5}},{id:`#L1b-1`,type:`item`,itemType:`processingstep`,label:`Data Ingestion`,icon:`📥`,properties:{order:1}},{id:`#L1b-2`,type:`item`,itemType:`processingstep`,label:`Processing`,icon:`⚙️`,properties:{order:2}},{id:`#L1b-3`,type:`item`,itemType:`processingstep`,label:`Cleansing`,icon:`🧹`,properties:{order:3}},{id:`#L1b-4`,type:`item`,itemType:`processingstep`,label:`Validation`,icon:`✅`,properties:{order:4}},{id:`#L1b-5`,type:`item`,itemType:`processingstep`,label:`Information & Knowledge`,icon:`💡`,properties:{order:5,variant:`output`}},{id:`#L1`,type:`container`,containerType:`layer`,label:`AI Infrastructure`,description:`Organizational raw data`,children:[`#L1-1`,`#L1-2`,`#L1-3`,`#L1-4`,`#L1-5`,`#L1-6`,`#L1-7`,`#L1-8`,`#L1-9`,`#L1-10`],meta:{order:1}},{id:`#L1-1`,type:`item`,itemType:`datasource`,label:`Persons`,icon:`👤`,properties:{source_type:`internal`}},{id:`#L1-2`,type:`item`,itemType:`datasource`,label:`Organizations`,icon:`🏢`,properties:{source_type:`internal`}},{id:`#L1-3`,type:`item`,itemType:`datasource`,label:`Locations`,icon:`📍`,properties:{source_type:`internal`}},{id:`#L1-4`,type:`item`,itemType:`datasource`,label:`Customers`,icon:`👥`,properties:{source_type:`internal`}},{id:`#L1-5`,type:`item`,itemType:`datasource`,label:`Materials`,icon:`📦`,properties:{source_type:`internal`}},{id:`#L1-6`,type:`item`,itemType:`datasource`,label:`Projects`,icon:`📁`,properties:{source_type:`internal`}},{id:`#L1-7`,type:`item`,itemType:`datasource`,label:`News & Media`,icon:`📰`,properties:{source_type:`external`}},{id:`#L1-8`,type:`item`,itemType:`datasource`,label:`Rules & Policies`,icon:`📜`,properties:{source_type:`internal`}},{id:`#L1-9`,type:`item`,itemType:`datasource`,label:`Logs`,icon:`🗒️`,properties:{source_type:`transactional`}},{id:`#L1-10`,type:`item`,itemType:`datasource`,label:`Systems`,icon:`🖥️`,properties:{source_type:`internal`}},{id:`#panel-right`,type:`container`,containerType:`panel`,label:`Data Sources & Processing`,children:[`#D1`,`#D2`,`#D3`,`#D4`,`#D5`],meta:{variant:`right`}},{id:`#D1`,type:`container`,containerType:`box`,label:`People & Docs`,children:[`#D1-1`,`#D1-2`,`#D1-3`]},{id:`#D1-1`,type:`item`,itemType:`datasource`,label:`Employee Profiles`},{id:`#D1-2`,type:`item`,itemType:`datasource`,label:`Expert Documents`},{id:`#D1-3`,type:`item`,itemType:`datasource`,label:`Manuals & Guides`},{id:`#D2`,type:`container`,containerType:`box`,label:`Transactions & Logs`,children:[`#D2-1`,`#D2-2`,`#D2-3`]},{id:`#D2-1`,type:`item`,itemType:`datasource`,label:`System Events`},{id:`#D2-2`,type:`item`,itemType:`datasource`,label:`Process Logs`},{id:`#D2-3`,type:`item`,itemType:`datasource`,label:`Transactions`},{id:`#D3`,type:`container`,containerType:`box`,label:`Projects & Tasks`,children:[`#D3-1`,`#D3-2`,`#D3-3`]},{id:`#D3-1`,type:`item`,itemType:`datasource`,label:`Project Repositories`},{id:`#D3-2`,type:`item`,itemType:`datasource`,label:`Tickets & Issues`},{id:`#D3-3`,type:`item`,itemType:`datasource`,label:`Delivery Artifacts`},{id:`#D4`,type:`container`,containerType:`box`,label:`External Sources`,children:[`#D4-1`,`#D4-2`,`#D4-3`]},{id:`#D4-1`,type:`item`,itemType:`datasource`,label:`Web & News`},{id:`#D4-2`,type:`item`,itemType:`datasource`,label:`Partner Data`},{id:`#D4-3`,type:`item`,itemType:`datasource`,label:`Regulatory Content`},{id:`#D5`,type:`container`,containerType:`box`,label:`Quality Gates`,children:[`#D5-1`,`#D5-2`,`#D5-3`,`#D5-4`],meta:{variant:`highlight`}},{id:`#D5-1`,type:`item`,itemType:`concept`,label:`Schema Validation`},{id:`#D5-2`,type:`item`,itemType:`concept`,label:`Deduplication`},{id:`#D5-3`,type:`item`,itemType:`concept`,label:`Enrichment`},{id:`#D5-4`,type:`item`,itemType:`concept`,label:`Versioning`}],connections:[{id:`conn-triad-1`,from:`#L9-t-initiator`,to:`#L9-t-actor`,connectionType:`generic`,direction:`forward`,edgeType:`defines frame for`},{id:`conn-triad-2`,from:`#L9-t-actor`,to:`#L9-t-beneficiary`,connectionType:`generic`,direction:`forward`,edgeType:`creates value for`},{id:`conn-fb-1`,from:`#L6`,to:`#L3`,connectionType:`feedback`,label:`Applications → Knowledge Core`,direction:`backward`},{id:`conn-fb-2`,from:`#L9`,to:`#L3`,connectionType:`feedback`,label:`System Participants → Knowledge Core`,direction:`backward`},{id:`conn-flow-1`,from:`#L1`,to:`#L1b`,connectionType:`flow`,direction:`forward`},{id:`conn-flow-2`,from:`#L1b`,to:`#L3`,connectionType:`flow`,direction:`forward`},{id:`conn-fb-4`,from:`#L10`,to:`#L3`,connectionType:`feedback`,label:`Outcomes → Knowledge Core`,direction:`backward`}],badges:[{id:`badge-feedback`,icon:`↻`,label:`Feedback Loop`,description:`This element participates in a feedback loop. Actors, systems or processes return information that continuously improves organizational knowledge and capabilities. Details to be defined in a separate process view.`}],views:[{id:`view-overview`,type:`overview`,label:`OIA Overview`,include:[`all`]}],legend:{show:!0,position:`bottom`}};function t(e,t){return e.elements.find(e=>e.id===t)}function n(e,t){return!t||t.length===0?``:t.map(t=>{let n=e.badges.find(e=>e.id===t);return n?`<span class="badge-icon" title="${n.label}: ${n.description}">${n.icon}</span>`:``}).join(``)}function r(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="sit-item">${r.label}</span>`:``}).join(``)}function i(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="usecase-item"><span class="usecase-dot"></span>${r.label}</span>`:``}).join(``)}function a(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="cap-item"><span class="cap-dot"></span>${r.label}</span>`:``}).join(``)}function o(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="tag mono accent2">${r.label}</span>`:``}).join(``)}function s(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<span class="tag"><span class="dot"></span>${r.label}</span>`:``}).join(``)}function c(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<div class="data-item"><span class="data-icon">${r.icon||``}</span>${r.label}</div>`:``}).join(``)}function l(e,n){return n.children.map(n=>{let r=t(e,n);return r?`<div class="sol-item"><span class="sol-icon">${r.icon||``}</span>${r.label}</div>`:``}).join(``)}function u(e,n){return`<div class="core-inner">${n.children.map(n=>{let r=t(e,n);if(!r||r.type!==`container`)return``;let i=r.children.map(n=>{let r=t(e,n);return r?r.label:``}).join(`<br>`);return`<div class="core-block" data-id="${r.id}">
      <div class="core-block-title">${r.label}</div>
      <div class="core-block-items">${i}</div>
    </div>`}).join(``)}</div>`}function d(e,n){return`<div class="pipeline-row">${n.children.map((n,r,i)=>{let a=t(e,n);if(!a)return``;let o=r===i.length-1,s=a.properties?.variant===`output`?` pipeline-step--output`:``,c=o?``:`<div class="pipeline-arrow">→</div>`;return`<div class="pipeline-step${s}">${a.icon||``}<br>${a.label}</div>${c}`}).join(``)}</div>`}function f(e,n){return n.children.map(n=>{let r=t(e,n);if(!r)return``;let i=Array.isArray(r.properties?.outcome_category)?r.properties.outcome_category.join(` · `):r.properties?.outcome_category||``;return`<div class="outcome-item">
      <span class="outcome-label">${r.label}</span>
      ${i?`<span class="outcome-categories">${i}</span>`:``}
    </div>`}).join(``)}var p={purple:`sp-color--purple`,teal:`sp-color--teal`,amber:`sp-color--amber`,gray:`sp-color--gray`},m={initiator:`ACCOUNTABLE · CONSTITUTIVE`,actor:`RESPONSIBLE · OPERATIVE`,beneficiary:`PURPOSIVE · RECEPTIVE`},h={initiator:[`Human`,`Organization`],actor:[`Human`,`Agent`,`System`],beneficiary:[`Human`,`Team`,`System`]},g={initiator:`Sets governance & goals. Defines what actors may do.`,actor:`Primary interaction layer. Engages capabilities, features & knowledge core.`,beneficiary:`Receives output. Feedback flows back into the architecture.`},_=`OIA is actor-centric — governance flows in from the left, value flows out to the right`;function v(e,n){let r=t(e,n);if(!r||r.type!==`container`)return``;let i=[];return r.children.forEach((n,a)=>{let o=t(e,n);if(!o)return;if(a>0){let t=r.children[a-1],o=e.connections.find(e=>e.from===t&&e.to===n),s=o?.edgeType?` title="${o.edgeType}"`:``;i.push(`<div class="sp-triad__arrow"${s}>→</div>`)}let s=p[o.color??``]??``,c=o.weight===`primary`?`sp-triad__item--primary`:o.weight===`secondary`?`sp-triad__item--secondary`:``,l=o.primary?` title="Primary interaction entity"`:``,u=o.primary?`${o.label} ★`:o.label,d=o.role?m[o.role]??``:``,f=o.role?(h[o.role]??[]).map(e=>`<span class="sp-triad__tag">${e}</span>`).join(``):``,_=o.role?g[o.role]??``:``;i.push(`<div class="sp-triad__item ${s} ${c}" data-id="${o.id}"${l}>
      <span class="sp-triad__label">${u}</span>
      ${d?`<span class="sp-triad__raci">${d}</span>`:``}
      ${f?`<div class="sp-triad__tags">${f}</div>`:``}
      ${_?`<span class="sp-triad__desc">${_}</span>`:``}
    </div>`)}),`<div class="sp-triad">${i.join(``)}</div>`}function y(e,n){let r=t(e,n);if(!r||r.type!==`container`)return``;let i=r.children.map(n=>t(e,n)),a=i.some(e=>e?.converging),o=i.map(t=>t?`<div class="sp-spectrum__entity ${p[t.color??``]??``}${t.converging?` sp-spectrum__entity--converging`:``}" data-id="${t.spectrumAxis===`accountability`?e.elements.find(e=>e.type===`item`&&e.itemType===`participant`&&e.spectrumAxis===`autonomy`&&e.label===t.label)?.id??t.id:t.id}">
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
  </div>`}function b(e,n){let r=t(e,n);if(!r||r.itemType!==`keyInsight`)return``;let i=r.text??r.label,a=i.indexOf(`. The human`),o=a>=0?i.slice(0,a+1):i,s=a>=0?i.slice(a+2):``;return`<div class="sp-insight" data-id="${r.id}">
    <p class="sp-insight__primary">${o}</p>
    ${s?`<p class="sp-insight__secondary">${s}</p>`:``}
  </div>`}function ee(e,t){let[n]=t.children;return`<div class="sp-layer">
    ${v(e,n)}
  </div>`}function te(e,t){let[n,r,i,a]=t.children;return`<div class="sp-layer">
    ${v(e,n)}
    <div class="sp-centric-stmt">${_}</div>
    <div class="sp-spectra-label">Actor types — how they differ</div>
    ${y(e,r)}
    ${y(e,i)}
    ${b(e,a)}
  </div>`}var ne={"#L9":(e,t)=>ee(e,t),"#L8":(e,t)=>`<div class="sit-grid">${r(e,t)}</div>`,"#L7":(e,t)=>`<div class="usecase-grid">${i(e,t)}</div>`,"#L6":(e,t)=>`<div class="sol-grid">${l(e,t)}</div>`,"#L5":(e,t)=>`<div class="cap-grid">${a(e,t)}</div>`,"#L4":(e,t)=>`<div class="tag-row">${o(e,t)}</div>`,"#L2":(e,t)=>`<div class="tag-row">${s(e,t)}</div>`,"#L10":(e,t)=>`<div class="outcome-grid">${f(e,t)}</div>`,"#L1b":d,"#L1":(e,t)=>`<div class="data-grid">${c(e,t)}</div>`};function re(e,t){let r=t.meta?.highlighted===!0,i=t.containerType===`pipeline`,a=document.createElement(`div`);if(a.dataset.id=t.id,r)return a.className=`layer-core`,a.innerHTML=`
      <div class="layer-header">
        <span class="layer-num layer-num--core">${t.id.replace(`#`,``)}</span>
        <span class="layer-title">${t.label}</span>
        <span class="core-badge">CENTRAL COMPONENT</span>
        <span class="layer-desc layer-desc--core">${t.description||``}</span>
        ${n(e,t.badges)}
      </div>
      ${u(e,t)}
    `,a;a.className=`layer`;let o=t.id.replace(`#`,``),s=ne[t.id]??(i?d:null),c=s?s(e,t):``;return a.innerHTML=`
    <div class="layer-header">
      <span class="layer-num">${o}</span>
      <span class="layer-title">${t.label}</span>
      <span class="layer-desc">${t.description||``}</span>
      ${n(e,t.badges)}
    </div>
    ${c}
  `,a}function x(e,n){return n.map(n=>{let r=t(e,n);if(!r)return``;if(r.type===`item`)return`<div class="side-item">${r.label}</div>`;if(r.type===`container`){let n=r.meta?.variant===`highlight`,i=n?` side-block--highlight`:``,a=n?` side-item--highlight`:``,o=r.children.map(n=>{let r=t(e,n);return r?`<div class="side-item${a}">${r.label}</div>`:``}).join(``);return`<div class="side-block${i}" data-id="${r.id}">
  <div class="side-block-title">${r.label}</div>
  ${o}
</div>`}return``}).join(`
`)}function S(e,t){let n=document.createElement(`div`);return n.className=`side-panel`+(t.meta?.variant===`right`?` right-panel`:``),n.innerHTML=`
    <div class="side-label">${t.label}</div>
    ${x(e,t.children)}
  `,n}function ie(e){let n=document.createElement(`div`);n.className=`diagram-wrapper`;let r=document.createElement(`div`);r.className=`mobile-notice`,r.textContent=`Best viewed on desktop — pinch to zoom or rotate to landscape`,n.appendChild(r);let i=document.createElement(`div`);i.className=`header`,i.innerHTML=`
    <div class="header-badge">Reference Architecture · V${e.meta.version} · ${e.meta.created}</div>
    <h1>Organizational <span>Intelligence</span> Architecture</h1>
    <p>${e.meta.subtitle}</p>
    <div class="header-line"></div>
  `,n.appendChild(i);let a=document.createElement(`div`);a.className=`main-grid`;let o=t(e,`#panel-left`);o&&a.appendChild(S(e,o));let s=document.createElement(`div`);s.className=`center-col`;let c=e.elements.filter(e=>e.type===`container`&&e.containerType===`layer`).map(e=>e).sort((e,t)=>(t.meta?.order??0)-(e.meta?.order??0)),l=e.elements.filter(e=>e.type===`container`&&e.containerType===`pipeline`).map(e=>e),u=[...c,...l].sort((e,t)=>(t.meta?.order??0)-(e.meta?.order??0));for(let t of u)s.appendChild(re(e,t));a.appendChild(s);let d=t(e,`#panel-right`);if(d&&a.appendChild(S(e,d)),n.appendChild(a),e.legend.show&&e.badges.length>0){let t=document.createElement(`div`);t.className=`legend`,t.innerHTML=`<div class="legend-title">Legend</div><div class="legend-items">${e.badges.map(e=>`
      <div class="legend-item">
        <span class="legend-icon">${e.icon}</span>
        <div class="legend-text">
          <span class="legend-label">${e.label}</span>
          <span class="legend-desc">${e.description}</span>
        </div>
      </div>
    `).join(``)}</div>`,n.appendChild(t)}let f=document.createElement(`div`);return f.className=`footer`,f.textContent=`OIA · Organizational Intelligence Architecture · V${e.meta.version} · © ${e.meta.created} · ${e.meta.subtitle}`,n.appendChild(f),n}function C(e){let t=t=>t===e?` euai-node--active`:` euai-node--inactive`;return`
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
  `}function w(e,t){return`<button class="info-badge" data-overlay-target="${t}" type="button" aria-expanded="false">ⓘ ${e}</button>`}function T(e,t){return`<div class="info-overlay" id="${e}" hidden role="dialog" aria-modal="true">
    <div class="info-overlay__panel">
      <button class="info-overlay__close" type="button" aria-label="Close">×</button>
      <div class="info-overlay__content">${t}</div>
    </div>
  </div>`}function ae(e){let t=()=>{e.querySelectorAll(`.info-overlay`).forEach(e=>{e.hidden=!0}),e.querySelectorAll(`.info-badge`).forEach(e=>{e.setAttribute(`aria-expanded`,`false`)})};e.querySelectorAll(`.info-badge`).forEach(n=>{n.addEventListener(`click`,r=>{r.stopPropagation();let i=n.dataset.overlayTarget;if(!i)return;let a=e.querySelector(`#${i}`);if(!a)return;let o=a.hidden;t(),o&&(a.hidden=!1,n.setAttribute(`aria-expanded`,`true`))})}),e.querySelectorAll(`.info-overlay`).forEach(e=>{e.addEventListener(`click`,n=>{n.target===e&&t()}),e.querySelector(`.info-overlay__close`)?.addEventListener(`click`,e=>{e.stopPropagation(),t()})})}function E(e,t){return e.elements.find(e=>e.type===`container`&&e.children.includes(t))}function oe(e,t){let n=[],r=t;for(;;){let t=E(e,r);if(!t)break;n.unshift(t),r=t.id}return n}var se=new Set([`frame`,`spectrum`]);function ce(e,t){let n=oe(e,t).filter(e=>!se.has(e.containerType)&&e.navigationVisible!==!1),r=e.elements.find(e=>e.id===t),i=r?.type===`item`?r.parent:void 0,a=i?e.elements.find(e=>e.id===i):void 0,o=[`<a class="detail-breadcrumb__item" href="#/">OIA</a>`];return n.forEach(e=>{o.push(`<span class="detail-breadcrumb__sep">›</span><a class="detail-breadcrumb__item" href="#/detail/${encodeURIComponent(e.id)}">${e.label}</a>`)}),a&&o.push(`<span class="detail-breadcrumb__sep">›</span><a class="detail-breadcrumb__item" href="#/detail/${encodeURIComponent(a.id)}">${a.label}</a>`),r&&o.push(`<span class="detail-breadcrumb__sep">›</span><span class="detail-breadcrumb__item detail-breadcrumb__item--current">${r.label}</span>`),`<nav class="detail-breadcrumb">${o.join(``)}</nav>`}function D(e,t){let n=E(e,t);if(!n)return``;let r=n.children.filter(e=>e!==t);return r.length===0?``:`<div class="detail-related"><span class="detail-related__label">Related:</span>${r.map(t=>{let n=e.elements.find(e=>e.id===t);return n?`<a class="detail-related__item" href="#/detail/${encodeURIComponent(t)}">${n.label}</a>`:``}).filter(Boolean).join(``)}</div>`}var O={"defines frame for":`governs`,"creates value for":`produces`},k={"defines frame for":`The Initiator sets goals, permissions and ODRs under which the Actor operates. No action without a governance frame.`,"creates value for":`The Actor's work produces outcomes that flow to the Beneficiary. Value creation is the purpose of action.`};function A(e,t){if(!t.role)return``;let n=e.connections.filter(t=>{if(!t.edgeType)return!1;let n=e.elements.find(e=>e.id===t.from),r=e.elements.find(e=>e.id===t.to);return n?.type===`item`&&n.role!==void 0&&r?.type===`item`&&r.role!==void 0});if(n.length===0)return``;let r=new Set(n.map(e=>e.to)),i=new Set(n.map(e=>e.from)),a=[...new Set([...i,...r])].find(e=>!r.has(e));if(!a)return``;let o=[a],s=[],c=a;for(;;){let e=n.find(e=>e.from===c);if(!e)break;let t=e.edgeType;s.push({label:t,badge:O[t]??``,tooltip:k[t]??``}),o.push(e.to),c=e.to}let l=[];return o.forEach((n,r)=>{if(r>0){let{label:e,badge:t,tooltip:n}=s[r-1];l.push(`<div class="detail-flow__edge" title="${n}">
        ${t?`<span class="detail-flow__edge-badge">${t}</span>`:``}
        <span class="detail-flow__edge-arrow">→</span>
        <span class="detail-flow__edge-label">${e}</span>
      </div>`)}let i=e.elements.find(e=>e.id===n);if(!i)return;let a=n===t.id,o=a?t.color??``:i.color??``,c=a&&o?` detail-flow__node--${o}`:``,u=a?``:` detail-flow__node--inactive`;a?l.push(`<span class="detail-flow__node detail-flow__node--current${c}">${i.label}</span>`):l.push(`<a class="detail-flow__node${u}" href="#/detail/${encodeURIComponent(n)}">${i.label}</a>`)}),`<div class="detail-flow"><div class="detail-flow__label">Governance flow</div><div class="detail-flow__row">${l.join(``)}</div></div>`}function j(e,t){if(!t.role)return``;let n=e.elements.find(e=>e.type===`container`&&e.children.includes(t.id));if(!n)return``;let r=e.elements.find(e=>e.type===`container`&&e.children.includes(n.id));if(!r)return``;let[,i,a,o]=r.children;return i?`<div class="detail-actor-context">
    ${y(e,i)}
    ${y(e,a)}
    ${o?b(e,o):``}
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
    `,i;let a=r.type===`container`?r.children:[],o=r.description||``,s=ce(e,t),c=D(e,t);if(r.id===`#L9`&&r.type===`container`)return i.innerHTML=`
      ${s}
      <div class="detail-id">${r.id}</div>
      <div class="detail-title">${r.label}</div>
      ${o?`<div class="detail-desc">${o}</div>`:``}
      ${n?R(n):``}
      ${te(e,r)}
      ${c}
    `,n&&z(i),i;let l=r.type===`item`&&r.itemType===`participant`?r:null,u=l?A(e,l):``,d=l?N(l):``,f=l?F(l):``,p=l?j(e,l):``,m=a.length>0?`<div class="detail-items">${I(e,a)}</div>`:o?``:`<div class="detail-items"><div class="detail-item detail-item--empty">No sub-elements</div></div>`,h=l?.role?w(`EU AI Act context`,`overlay-eu-ai-act`):``,g=l?.role?T(`overlay-eu-ai-act`,C(l.role)):``;return i.innerHTML=`
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
  `,l?.role&&ae(i),n&&z(i),i}var V={model:{name:`Organizational Intelligence Architecture`,short_name:`OIA`,version:`v3-full-mapping`,schema_version:`v3`,mapping_mode:`strict_mechanical`},source_documents:[{document_id:`doc_c1_entities`,filename:`C1_Entities.md`,element_id:`c1_entities`,document_type:`cross_cutting`,source_of_truth:!0,document_order:1},{document_id:`doc_c2_information_processing_transformation_pipeline`,filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,document_type:`cross_cutting`,source_of_truth:!0,document_order:2},{document_id:`doc_l1_infrastructure`,filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,document_type:`layer`,source_of_truth:!0,document_order:3},{document_id:`doc_l2_data_sources`,filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,document_type:`layer`,source_of_truth:!0,document_order:4},{document_id:`doc_l3_knowledge_core`,filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,document_type:`layer`,source_of_truth:!0,document_order:5},{document_id:`doc_l4_features_in_apis`,filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,document_type:`layer`,source_of_truth:!0,document_order:6},{document_id:`doc_l5_capabilities`,filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,document_type:`layer`,source_of_truth:!0,document_order:7},{document_id:`doc_l6_applications_tools_solutions`,filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,document_type:`layer`,source_of_truth:!0,document_order:8},{document_id:`doc_l7_use_cases_challenges`,filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,document_type:`layer`,source_of_truth:!0,document_order:9},{document_id:`doc_l8_situation_context`,filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,document_type:`layer`,source_of_truth:!0,document_order:10},{document_id:`doc_l9_system_participants`,filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,document_type:`layer`,source_of_truth:!0,document_order:11},{document_id:`doc_l10_business_outcome`,filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,document_type:`layer`,source_of_truth:!0,document_order:12}],elements:[{element_id:`c1_entities`,element_type:`cross_cutting`,name:`Organizational Entities`,source_document_id:`doc_c1_entities`,root_section_ids:[`c1_entities__s001`],section_count:8},{element_id:`c2_information_processing_transformation_pipeline`,element_type:`cross_cutting`,name:`Data Pipelines`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,root_section_ids:[`c2_information_processing_transformation_pipeline__s001`],section_count:8},{element_id:`l1_infrastructure`,element_type:`layer`,name:`AI Infrastructure`,source_document_id:`doc_l1_infrastructure`,root_section_ids:[`l1_infrastructure__s001`],section_count:10},{element_id:`l2_data_sources`,element_type:`layer`,name:`Data Sources`,source_document_id:`doc_l2_data_sources`,root_section_ids:[`l2_data_sources__s001`],section_count:9},{element_id:`l3_knowledge_core`,element_type:`layer`,name:`Knowledge Core`,source_document_id:`doc_l3_knowledge_core`,root_section_ids:[`l3_knowledge_core__s001`],section_count:8},{element_id:`l4_features_in_apis`,element_type:`layer`,name:`Features in APIs`,source_document_id:`doc_l4_features_in_apis`,root_section_ids:[`l4_features_in_apis__s001`],section_count:8},{element_id:`l5_capabilities`,element_type:`layer`,name:`Capabilities`,source_document_id:`doc_l5_capabilities`,root_section_ids:[`l5_capabilities__s001`],section_count:9},{element_id:`l6_applications_tools_solutions`,element_type:`layer`,name:`Applications`,source_document_id:`doc_l6_applications_tools_solutions`,root_section_ids:[`l6_applications_tools_solutions__s001`],section_count:8},{element_id:`l7_use_cases_challenges`,element_type:`layer`,name:`Use Cases`,source_document_id:`doc_l7_use_cases_challenges`,root_section_ids:[`l7_use_cases_challenges__s001`],section_count:8},{element_id:`l8_situation_context`,element_type:`layer`,name:`Situation & Context`,source_document_id:`doc_l8_situation_context`,root_section_ids:[`l8_situation_context__s001`],section_count:11},{element_id:`l9_system_participants`,element_type:`layer`,name:`System Participants`,source_document_id:`doc_l9_system_participants`,root_section_ids:[`l9_system_participants__s001`],section_count:11},{element_id:`l10_business_outcome`,element_type:`layer`,name:`Business Outcome`,source_document_id:`doc_l10_business_outcome`,root_section_ids:[`l10_business_outcome__s001`],section_count:8}],sections:[{section_id:`c1_entities__s001`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:null,child_section_ids:[`c1_entities__s002`,`c1_entities__s003`,`c1_entities__s004`,`c1_entities__s005`,`c1_entities__s006`,`c1_entities__s007`,`c1_entities__s008`],order_index:1,document_index:1,header_level:1,title:`Konzept – Organizational Entities`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Konzept – Organizational Entities`,header_level:1,document_index:1,path_string:`Konzept – Organizational Entities`,line_start:null,line_end:null},section_path:[`Konzept – Organizational Entities`]},{section_id:`c1_entities__s002`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:1,document_index:2,header_level:2,title:`Begründung`,section_type:`custom`,raw_text:`Semantische Grundobjekte wie Person, Projekt, Organisationseinheit oder Kunde.

Entitäten repräsentieren die stabilen Konzepte, über die eine Organisation denkt, arbeitet und entscheidet.  
Sie sind keine Rohdaten, sondern die **Bedeutungsschicht** über den Daten.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Begründung`,header_level:2,document_index:2,path_string:`Konzept – Organizational Entities > Begründung`,line_start:null,line_end:null},section_path:[`Konzept – Organizational Entities`,`Begründung`]},{section_id:`c1_entities__s003`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:2,document_index:3,header_level:2,title:`Rolle im Modell`,section_type:`role`,raw_text:`Stabile, systemunabhängige Einheiten, die Informationen aus mehreren Quellen bündeln.

- Entitäten sind **eindeutig identifizierbar**
- Entitäten sind **konsistent über Systeme hinweg**
- Entitäten werden im **Knowledge Core gespeichert und verwaltet**
- Entitäten sind die Grundlage für **Kontext, Verständnis und Entscheidungen**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Rolle im Modell`,header_level:2,document_index:3,path_string:`Konzept – Organizational Entities > Rolle im Modell`,line_start:null,line_end:null},section_path:[`Konzept – Organizational Entities`,`Rolle im Modell`]},{section_id:`c1_entities__s004`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:3,document_index:4,header_level:2,title:`Beziehungen`,section_type:`custom`,raw_text:`- werden im Knowledge Core modelliert (L3)  
- werden aus unterschiedlichen Data Sources aggregiert (L1)  
- werden über Data Pipelines gebildet und angereichert (C2)  
- werden von Capabilities genutzt (L5)  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Beziehungen`,header_level:2,document_index:4,path_string:`Konzept – Organizational Entities > Beziehungen`,line_start:null,line_end:null},section_path:[`Konzept – Organizational Entities`,`Beziehungen`]},{section_id:`c1_entities__s005`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:4,document_index:5,header_level:2,title:`Interlinking (Kernprinzip)`,section_type:`custom`,raw_text:`Beispielhafte Verknüpfung:

- Organisation  
  → hat Organisationseinheiten  
  → darin arbeiten Personen  
  → diese arbeiten an Projekten  
  → nutzen News & Media für Kontext  

**Erkenntnis:**
- Entitäten stehen nicht isoliert, sondern sind **systematisch miteinander verknüpft**
- Dieses Interlinking erzeugt:
  - Kontext  
  - Verständnis  
  - Entscheidungsfähigkeit  

➡️ Dieses vernetzte Wissen entsteht im:
- **Knowledge Core**  
- → als **interlinked data (semantisches Netzwerk)**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Interlinking (Kernprinzip)`,header_level:2,document_index:5,path_string:`Konzept – Organizational Entities > Interlinking (Kernprinzip)`,line_start:null,line_end:null},section_path:[`Konzept – Organizational Entities`,`Interlinking (Kernprinzip)`]},{section_id:`c1_entities__s006`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:5,document_index:6,header_level:2,title:`Abgrenzung zu Data Sources`,section_type:`distinction`,raw_text:`**Wichtiger Architekturpunkt:**

- Entitäten:
  - ❌ gehören nicht in Data Sources  
  - ❌ sind keine Rohdaten  
  - ❌ sind keine systemgebundenen Artefakte  

- Stattdessen:
  - ✅ werden sie aus Data Sources **extrahiert / abgeleitet**  
  - ✅ werden sie im Knowledge Core **vereinheitlicht und modelliert**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Abgrenzung zu Data Sources`,header_level:2,document_index:6,path_string:`Konzept – Organizational Entities > Abgrenzung zu Data Sources`,line_start:null,line_end:null},section_path:[`Konzept – Organizational Entities`,`Abgrenzung zu Data Sources`]},{section_id:`c1_entities__s007`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:6,document_index:7,header_level:2,title:`Kernaussage`,section_type:`core_statement`,raw_text:`Entitäten bündeln Informationen über Systeme hinweg und machen deren Bedeutung explizit.

> Entitäten sind nicht die Daten einer Organisation – sie sind deren Bedeutung.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Kernaussage`,header_level:2,document_index:7,path_string:`Konzept – Organizational Entities > Kernaussage`,line_start:null,line_end:null},section_path:[`Konzept – Organizational Entities`,`Kernaussage`]},{section_id:`c1_entities__s008`,element_id:`c1_entities`,source_document_id:`doc_c1_entities`,parent_section_id:`c1_entities__s001`,child_section_ids:[],order_index:7,document_index:8,header_level:2,title:`Beispiele`,section_type:`custom`,raw_text:`- Persons  
- Organizations  
- Locations  
- Customers  
- Materials  
- Projects  
- News & Media  
- Rules & Policies  
- Blogs  
- Systems  `,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C1_Entities.md`,element_id:`c1_entities`,section_title:`Beispiele`,header_level:2,document_index:8,path_string:`Konzept – Organizational Entities > Beispiele`,line_start:null,line_end:null},section_path:[`Konzept – Organizational Entities`,`Beispiele`]},{section_id:`c2_information_processing_transformation_pipeline__s001`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:null,child_section_ids:[`c2_information_processing_transformation_pipeline__s002`,`c2_information_processing_transformation_pipeline__s003`,`c2_information_processing_transformation_pipeline__s004`,`c2_information_processing_transformation_pipeline__s005`,`c2_information_processing_transformation_pipeline__s006`,`c2_information_processing_transformation_pipeline__s007`,`c2_information_processing_transformation_pipeline__s008`],order_index:1,document_index:9,header_level:1,title:`C2 – Data Pipelines`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`C2 – Data Pipelines`,header_level:1,document_index:9,path_string:`C2 – Data Pipelines`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`]},{section_id:`c2_information_processing_transformation_pipeline__s002`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:1,document_index:10,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Data Pipelines sind **wiederverwendbare Transformationsmechanismen zur Extraktion, Strukturierung und Anreicherung von Daten**  
*(also die Verarbeitungsschritte, die Daten aus verschiedenen Quellen zusammenführen und vorbereiten)*

Sie sind kein eigener semantischer Layer, sondern ein operativer Mechanismus innerhalb der Architektur.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Definition`,header_level:2,document_index:10,path_string:`C2 – Data Pipelines > Definition`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Definition`]},{section_id:`c2_information_processing_transformation_pipeline__s003`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:2,document_index:11,header_level:2,title:`Rolle im Modell`,section_type:`role`,raw_text:`Data Pipelines verarbeiten Rohdaten und bereiten sie für die weitere Nutzung vor.

- extrahieren Daten aus **Data Sources (L2)**
- strukturieren und bereinigen Daten
- führen Daten aus unterschiedlichen Quellen zusammen
- reichern Daten kontextuell an

Wichtig:

- Data Pipelines **arbeiten auf Daten, nicht auf Bedeutung**
- sie erzeugen **keine semantische Interpretation**
- sie sind **ein Transformationsmechanismus, nicht die Gesamtwirklogik der Architektur**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Rolle im Modell`,header_level:2,document_index:11,path_string:`C2 – Data Pipelines > Rolle im Modell`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Rolle im Modell`]},{section_id:`c2_information_processing_transformation_pipeline__s004`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:3,document_index:12,header_level:2,title:`Einordnung in die Architektur`,section_type:`classification`,raw_text:`Data Pipelines sind **kein linearer Hauptfluss**, sondern werden an unterschiedlichen Stellen eingesetzt:

- zwischen **Data Sources (L2)** und **Knowledge Core (L3)**  
- innerhalb von **Capabilities (L5)** zur Transformation und Anreicherung  
- innerhalb von **Applications (L6)** für situative Verarbeitung  

Sie sind damit ein **wiederverwendbares Verarbeitungskonzept**, kein eigenständiger Layer.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Einordnung in die Architektur`,header_level:2,document_index:12,path_string:`C2 – Data Pipelines > Einordnung in die Architektur`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Einordnung in die Architektur`]},{section_id:`c2_information_processing_transformation_pipeline__s005`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:4,document_index:13,header_level:2,title:`Beziehungen im Modell`,section_type:`custom`,raw_text:`- verarbeiten Daten aus **Data Sources (L2)**  
- nutzen **Infrastructure (L1)** zur Ausführung  
- speisen den **Knowledge Core (L3)**  
- können von **Features (L4)**, **Capabilities (L5)** und **Applications (L6)** genutzt werden  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Beziehungen im Modell`,header_level:2,document_index:13,path_string:`C2 – Data Pipelines > Beziehungen im Modell`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Beziehungen im Modell`]},{section_id:`c2_information_processing_transformation_pipeline__s006`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:5,document_index:14,header_level:2,title:`Ergebnisarten`,section_type:`custom`,raw_text:`Die Ergebnisse von Data Pipelines können zwei Formen annehmen:

**1. Persistent**
- strukturierte und angereicherte Daten werden im **Knowledge Core (L3)** gespeichert

**2. Ephemer**
- Daten werden situativ verarbeitet und direkt in:
  - **Capabilities (L5)** oder
  - **Applications (L6)** genutzt

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Ergebnisarten`,header_level:2,document_index:14,path_string:`C2 – Data Pipelines > Ergebnisarten`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Ergebnisarten`]},{section_id:`c2_information_processing_transformation_pipeline__s007`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:6,document_index:15,header_level:2,title:`Abgrenzung zu anderen Konzepten`,section_type:`distinction`,raw_text:`**vs. Knowledge Core (L3):**
- Pipeline → verarbeitet Daten  
- Knowledge Core → erzeugt Bedeutung  

**vs. Capabilities (L5):**
- Pipeline → technische Verarbeitung  
- Capability → fachliche Wirkung  

**vs. Features (L4):**
- Pipeline → Ablauf / Prozess  
- Feature → wiederverwendbare technische Funktion  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Abgrenzung zu anderen Konzepten`,header_level:2,document_index:15,path_string:`C2 – Data Pipelines > Abgrenzung zu anderen Konzepten`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Abgrenzung zu anderen Konzepten`]},{section_id:`c2_information_processing_transformation_pipeline__s008`,element_id:`c2_information_processing_transformation_pipeline`,source_document_id:`doc_c2_information_processing_transformation_pipeline`,parent_section_id:`c2_information_processing_transformation_pipeline__s001`,child_section_ids:[],order_index:7,document_index:16,header_level:2,title:`Kernaussage`,section_type:`core_statement`,raw_text:`Data Pipelines transformieren Daten – sie erzeugen keine Bedeutung.

> Sie sind der operative Mechanismus der Verarbeitung, nicht die Logik der Architektur.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`C2_Data_Pipelines.md`,element_id:`c2_information_processing_transformation_pipeline`,section_title:`Kernaussage`,header_level:2,document_index:16,path_string:`C2 – Data Pipelines > Kernaussage`,line_start:null,line_end:null},section_path:[`C2 – Data Pipelines`,`Kernaussage`]},{section_id:`l1_infrastructure__s001`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:null,child_section_ids:[`l1_infrastructure__s002`,`l1_infrastructure__s003`,`l1_infrastructure__s004`,`l1_infrastructure__s005`,`l1_infrastructure__s006`,`l1_infrastructure__s009`,`l1_infrastructure__s010`],order_index:1,document_index:17,header_level:1,title:`L1 – AI Infrastructure`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`L1 – AI Infrastructure`,header_level:1,document_index:17,path_string:`L1 – AI Infrastructure`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`]},{section_id:`l1_infrastructure__s002`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[],order_index:1,document_index:18,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`AI Infrastructure ist die **technologische Ausführungsumgebung für Verarbeitung, Speicherung und Modellnutzung**  
*(also die technische Basis wie Server, Datenbanken und KI-Modelle, auf denen alles läuft)*

Sie stellt die grundlegenden technischen Ressourcen bereit, die für den Betrieb der Architektur notwendig sind.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Definition`,header_level:2,document_index:18,path_string:`L1 – AI Infrastructure > Definition`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Definition`]},{section_id:`l1_infrastructure__s003`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[],order_index:2,document_index:19,header_level:2,title:`Rolle im Modell`,section_type:`role`,raw_text:`AI Infrastructure ermöglicht die Ausführung aller technischen Prozesse innerhalb der Architektur, trägt jedoch keine fachliche oder semantische Bedeutung.

- stellt **Compute, Storage und Netzwerkressourcen** bereit  
- ermöglicht die Ausführung von **Data Pipelines (C2)**, **Features (L4)** und **Capabilities (L5)**  
- stellt **Modelle und technische Services** zur Verfügung  
- ist Grundlage für die Verarbeitung von Daten, nicht deren Interpretation  

Wichtig:

- AI Infrastructure **führt aus – sie versteht nicht**
- sie ist **kein Wissensspeicher**
- sie ist **kein Träger von Bedeutung**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Rolle im Modell`,header_level:2,document_index:19,path_string:`L1 – AI Infrastructure > Rolle im Modell`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Rolle im Modell`]},{section_id:`l1_infrastructure__s004`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[],order_index:3,document_index:20,header_level:2,title:`Einordnung in die Architektur`,section_type:`classification`,raw_text:`AI Infrastructure bildet die **unterste Ebene der Architektur**.

Alle anderen Layer bauen direkt oder indirekt auf ihr auf, ohne selbst Teil der Infrastruktur zu sein.

Sie ist damit ein **Enabler**, aber kein aktiver Bestandteil der fachlichen Logik.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Einordnung in die Architektur`,header_level:2,document_index:20,path_string:`L1 – AI Infrastructure > Einordnung in die Architektur`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Einordnung in die Architektur`]},{section_id:`l1_infrastructure__s005`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[],order_index:4,document_index:21,header_level:2,title:`Beziehungen im Modell`,section_type:`custom`,raw_text:`- wird von **Data Pipelines (C2)** zur Datenverarbeitung genutzt  
- wird von **Features (L4)** zur Bereitstellung technischer Funktionen genutzt  
- wird von **Capabilities (L5)** indirekt über Features und Pipelines genutzt  
- unterstützt die Anbindung und Verarbeitung von **Data Sources (L2)**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Beziehungen im Modell`,header_level:2,document_index:21,path_string:`L1 – AI Infrastructure > Beziehungen im Modell`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Beziehungen im Modell`]},{section_id:`l1_infrastructure__s006`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[`l1_infrastructure__s007`,`l1_infrastructure__s008`],order_index:5,document_index:22,header_level:2,title:`Einordnung von KI-Modellen`,section_type:`classification`,raw_text:`Modelle wie Machine-Learning-Modelle oder Large Language Models (LLMs) sind Teil der AI Infrastructure.

Dabei ist eine wichtige Unterscheidung zu treffen:

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Einordnung von KI-Modellen`,header_level:2,document_index:22,path_string:`L1 – AI Infrastructure > Einordnung von KI-Modellen`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Einordnung von KI-Modellen`]},{section_id:`l1_infrastructure__s007`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s006`,child_section_ids:[],order_index:1,document_index:23,header_level:3,title:`1. Generische Modelle`,section_type:`custom`,raw_text:`- vortrainiert und extern bezogen  
- enthalten kein organisationsspezifisches, kontrolliertes Wissen  
- werden als **reine Infrastrukturkomponenten** genutzt  

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`1. Generische Modelle`,header_level:3,document_index:23,path_string:`L1 – AI Infrastructure > Einordnung von KI-Modellen > 1. Generische Modelle`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Einordnung von KI-Modellen`,`1. Generische Modelle`]},{section_id:`l1_infrastructure__s008`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s006`,child_section_ids:[],order_index:2,document_index:24,header_level:3,title:`2. Organisationsspezifisch adaptierte Modelle`,section_type:`custom`,raw_text:`- durch Fine-Tuning oder Training an Unternehmensdaten angepasst  
- spiegeln Begriffe, Muster und Strukturen der Organisation wider  
- beeinflussen Verhalten und Ergebnisse signifikant  

Diese Modelle sind **wissensnah**, aber:

- ihr „Wissen“ ist **implizit im Modellverhalten enthalten**  
- es ist **nicht explizit, strukturiert oder direkt kontrollierbar**  
- es kann **nicht als verlässliche Wissensbasis genutzt werden**  

Daher gilt:

> Auch organisationsspezifisch trainierte Modelle sind keine Wissensspeicher im Sinne des Knowledge Core (L3).

Der **Knowledge Core bleibt die einzige Quelle für explizites, überprüfbares Organisationswissen**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`2. Organisationsspezifisch adaptierte Modelle`,header_level:3,document_index:24,path_string:`L1 – AI Infrastructure > Einordnung von KI-Modellen > 2. Organisationsspezifisch adaptierte Modelle`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Einordnung von KI-Modellen`,`2. Organisationsspezifisch adaptierte Modelle`]},{section_id:`l1_infrastructure__s009`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[],order_index:6,document_index:25,header_level:2,title:`Abgrenzung zu anderen Layern`,section_type:`distinction`,raw_text:`**vs. Data Sources (L2):**
- Infrastructure → stellt technische Umgebung bereit  
- Data Sources → enthalten Daten  

**vs. Knowledge Core (L3):**
- Infrastructure → führt Verarbeitung aus  
- Knowledge Core → erzeugt und strukturiert Bedeutung  

**vs. Features (L4):**
- Infrastructure → technische Basis  
- Features → konkrete technische Funktionen  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Abgrenzung zu anderen Layern`,header_level:2,document_index:25,path_string:`L1 – AI Infrastructure > Abgrenzung zu anderen Layern`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Abgrenzung zu anderen Layern`]},{section_id:`l1_infrastructure__s010`,element_id:`l1_infrastructure`,source_document_id:`doc_l1_infrastructure`,parent_section_id:`l1_infrastructure__s001`,child_section_ids:[],order_index:7,document_index:26,header_level:2,title:`Kernaussage`,section_type:`core_statement`,raw_text:`AI Infrastructure ermöglicht Verarbeitung – sie erzeugt weder Wissen noch Bedeutung.

> Sie ist die technische Grundlage der Architektur, nicht deren Intelligenz.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L1_AI_Infrastructure.md`,element_id:`l1_infrastructure`,section_title:`Kernaussage`,header_level:2,document_index:26,path_string:`L1 – AI Infrastructure > Kernaussage`,line_start:null,line_end:null},section_path:[`L1 – AI Infrastructure`,`Kernaussage`]},{section_id:`l2_data_sources__s001`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:null,child_section_ids:[`l2_data_sources__s002`,`l2_data_sources__s003`,`l2_data_sources__s004`,`l2_data_sources__s005`,`l2_data_sources__s006`,`l2_data_sources__s007`,`l2_data_sources__s008`,`l2_data_sources__s009`],order_index:1,document_index:27,header_level:1,title:`L2 – Data Sources`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`L2 – Data Sources`,header_level:1,document_index:27,path_string:`L2 – Data Sources`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`]},{section_id:`l2_data_sources__s002`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:1,document_index:28,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Data Sources sind **systemgebundene Primärquellen für fragmentierte Daten, Dokumente und operative Repräsentationen**  
*(also die vielen Einzelsysteme, in denen Informationen jeweils nur ausschnitthaft und getrennt voneinander vorliegen)*

Sie bilden die ursprünglichen Speicherorte von Informationen innerhalb einer Organisation.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Definition`,header_level:2,document_index:28,path_string:`L2 – Data Sources > Definition`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Definition`]},{section_id:`l2_data_sources__s003`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:2,document_index:29,header_level:2,title:`Rolle im Modell`,section_type:`role`,raw_text:`Data Sources stellen die **Primärdatenbasis** der Organisation dar.

- enthalten **Rohdaten, Dokumente und digitale Artefakte**  
- speichern Informationen in **konkreten Systemen und Formaten**  
- sind **fragmentiert, redundant und systemgebunden**  
- bilden die Grundlage für alle nachgelagerten Verarbeitungsschritte  

Wichtig:

- Data Sources enthalten **keine konsolidierte semantische Wahrheit**
- sie sind **nicht der Ort von organisiertem Wissen**
- sie liefern die Ausgangsbasis für **Extraktion, Konsolidierung und Modellierung**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Rolle im Modell`,header_level:2,document_index:29,path_string:`L2 – Data Sources > Rolle im Modell`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Rolle im Modell`]},{section_id:`l2_data_sources__s004`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:3,document_index:30,header_level:2,title:`Einordnung als Primärquellen`,section_type:`classification`,raw_text:`Data Sources sind die **Primärquellen der Organisation**.

- alle nachgelagerten Strukturen (z. B. Knowledge Core, Indizes, Features) basieren auf ihnen  
- sie enthalten die **originären Daten**, aus denen alle weiteren Repräsentationen entstehen  
- wenn Primärquellen verloren gehen, wird auch die Rekonstruktion nachgelagerter Systeme unsicher oder unmöglich  

Daraus folgt:

- nachgelagerte Systeme sind **abhängig von der Integrität der Data Sources**
- sie können Inhalte **ableiten**, aber nicht vollständig unabhängig reproduzieren  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Einordnung als Primärquellen`,header_level:2,document_index:30,path_string:`L2 – Data Sources > Einordnung als Primärquellen`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Einordnung als Primärquellen`]},{section_id:`l2_data_sources__s005`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:4,document_index:31,header_level:2,title:`Einordnung in die Architektur`,section_type:`classification`,raw_text:`Data Sources sind die **operative Realitätsschicht der Organisation**.

Sie entstehen historisch durch:

- Einführung von Softwarelösungen  
- Aufbau von Fachsystemen  
- Speicherung von Dokumenten und Daten in unterschiedlichen Kontexten  

Das Ergebnis ist eine:

- verteilte  
- heterogene  
- systemgebundene Datenlandschaft  

Diese Struktur ist der Ausgangspunkt für die Notwendigkeit eines **Knowledge Core (L3)**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Einordnung in die Architektur`,header_level:2,document_index:31,path_string:`L2 – Data Sources > Einordnung in die Architektur`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Einordnung in die Architektur`]},{section_id:`l2_data_sources__s006`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:5,document_index:32,header_level:2,title:`Beziehungen im Modell`,section_type:`custom`,raw_text:`- liefern Daten für **Data Pipelines (C2)**  
- werden über **AI Infrastructure (L1)** angebunden und verarbeitet  
- sind die Grundlage für den Aufbau des **Knowledge Core (L3)**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Beziehungen im Modell`,header_level:2,document_index:32,path_string:`L2 – Data Sources > Beziehungen im Modell`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Beziehungen im Modell`]},{section_id:`l2_data_sources__s007`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:6,document_index:33,header_level:2,title:`Abgrenzung zu Entities`,section_type:`distinction`,raw_text:`Ein zentraler Architekturpunkt ist die klare Trennung zwischen **Primärdaten** und **semantischen Objekten**:

**Data Sources (L2):**
- enthalten **quellspezifische Repräsentationen**
- speichern Daten in konkreten Systemkontexten  
- bilden **keine systemübergreifenden Identitäten**  

**Entities (C1 / L3):**
- sind **systemübergreifend konsolidierte semantische Objekte**
- entstehen durch Extraktion, Konsolidierung und Verknüpfung aus Data Sources  
- werden im **Knowledge Core (L3)** einheitlich modelliert  

Daher gilt:

> Data Sources enthalten niemals Entitäten im architektonischen Sinn, sondern ausschließlich deren lokale Repräsentationen.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Abgrenzung zu Entities`,header_level:2,document_index:33,path_string:`L2 – Data Sources > Abgrenzung zu Entities`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Abgrenzung zu Entities`]},{section_id:`l2_data_sources__s008`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:7,document_index:34,header_level:2,title:`Abgrenzung zu Knowledge Core`,section_type:`distinction`,raw_text:`**Data Sources (L2):**
- enthalten Daten, Dokumente und Artefakte  
- sind fragmentiert und systemgebunden  
- enthalten wissensrelevante Signale  

**Knowledge Core (L3):**
- konsolidiert diese Daten  
- strukturiert sie semantisch  
- erzeugt ein **einheitliches, verknüpftes Wissensmodell**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Abgrenzung zu Knowledge Core`,header_level:2,document_index:34,path_string:`L2 – Data Sources > Abgrenzung zu Knowledge Core`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Abgrenzung zu Knowledge Core`]},{section_id:`l2_data_sources__s009`,element_id:`l2_data_sources`,source_document_id:`doc_l2_data_sources`,parent_section_id:`l2_data_sources__s001`,child_section_ids:[],order_index:8,document_index:35,header_level:2,title:`Kernaussage`,section_type:`core_statement`,raw_text:`Data Sources sind die Primärquellen der Organisation – sie enthalten Daten, aber keine konsolidierte Bedeutung.

> Sie sind die Grundlage aller weiteren Verarbeitung, aber nicht der Ort von Wissen.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L2_Data_Sources.md`,element_id:`l2_data_sources`,section_title:`Kernaussage`,header_level:2,document_index:35,path_string:`L2 – Data Sources > Kernaussage`,line_start:null,line_end:null},section_path:[`L2 – Data Sources`,`Kernaussage`]},{section_id:`l3_knowledge_core__s001`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:null,child_section_ids:[`l3_knowledge_core__s002`,`l3_knowledge_core__s003`,`l3_knowledge_core__s004`,`l3_knowledge_core__s005`,`l3_knowledge_core__s006`,`l3_knowledge_core__s007`,`l3_knowledge_core__s008`],order_index:1,document_index:36,header_level:1,title:`L3 – Knowledge Core`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`L3 – Knowledge Core`,header_level:1,document_index:36,path_string:`L3 – Knowledge Core`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`]},{section_id:`l3_knowledge_core__s002`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:1,document_index:37,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Der Knowledge Core ist ein **zentraler, semantisch strukturierter und kontrollierter Wissensraum**, in dem organisationsweit konsolidierte Entities, Beziehungen und Kontextinformationen modelliert werden  
*(also der Ort, an dem aus verstreuten Daten ein zusammenhängendes und verstehbares Gesamtbild der Organisation entsteht)*

Er ist die **einzige autoritative Quelle für semantisches Organisationswissen**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Definition`,header_level:2,document_index:37,path_string:`L3 – Knowledge Core > Definition`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Definition`]},{section_id:`l3_knowledge_core__s003`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:2,document_index:38,header_level:2,title:`Rolle im Modell`,section_type:`role`,raw_text:`Der Knowledge Core transformiert fragmentierte Daten in **strukturierte, verknüpfte und kontextualisierte Bedeutung**.

- konsolidiert Daten aus unterschiedlichen **Data Sources (L2)**  
- modelliert **Entities (C1)** als zentrale semantische Objekte  
- bildet **Beziehungen zwischen Entities** explizit ab  
- integriert **Kontextinformationen** zur Interpretation  
- stellt Wissen organisationsweit konsistent zur Verfügung  

Wichtig:

- Bedeutung entsteht **ausschließlich im Knowledge Core**
- der Knowledge Core ist **kein Datenlager**, sondern ein **semantisches System**
- er ist die Grundlage für **Verständnis, Kontext und Entscheidungsfähigkeit**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Rolle im Modell`,header_level:2,document_index:38,path_string:`L3 – Knowledge Core > Rolle im Modell`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Rolle im Modell`]},{section_id:`l3_knowledge_core__s004`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:3,document_index:39,header_level:2,title:`Struktur des Knowledge Core`,section_type:`structure`,raw_text:`Der Knowledge Core basiert auf einer klaren semantischen Struktur:

- **Entities** (Identitäten)  
- **Beziehungen** (Interlinking zwischen Entities)  
- **Attribute** (Eigenschaften von Entities und Beziehungen)  
- **Kontextinformationen** (situative Einordnung und Bedeutung)  

Diese Struktur bildet ein:

→ **vernetztes semantisches Modell der Organisation**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Struktur des Knowledge Core`,header_level:2,document_index:39,path_string:`L3 – Knowledge Core > Struktur des Knowledge Core`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Struktur des Knowledge Core`]},{section_id:`l3_knowledge_core__s005`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:4,document_index:40,header_level:2,title:`Einordnung in die Architektur`,section_type:`classification`,raw_text:`Der Knowledge Core steht im Zentrum der Architektur.

- wird durch **Data Pipelines (C2)** aus Data Sources gespeist  
- stellt Wissen für **Features (L4)** bereit  
- wird von **Capabilities (L5)** zur Wirkungserzeugung genutzt  
- wird im Kontext von **Situationen (L8)** interpretiert  

Er verbindet damit Daten, Verarbeitung und Handlung.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Einordnung in die Architektur`,header_level:2,document_index:40,path_string:`L3 – Knowledge Core > Einordnung in die Architektur`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Einordnung in die Architektur`]},{section_id:`l3_knowledge_core__s006`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:5,document_index:41,header_level:2,title:`Governance und Kontrolle`,section_type:`governance`,raw_text:`Der Knowledge Core ist ein **kontrollierter und vertrauenswürdiger Wissensraum**.

- Wissen ist **explizit modelliert und nachvollziehbar**  
- Strukturen sind **versionierbar und überprüfbar**  
- Zugriff ist **steuerbar und sicherheitskritisch**  
- Änderungen sind **kontrolliert und auditierbar**  

Damit unterscheidet sich der Knowledge Core fundamental von:

- Data Sources (fragmentiert, unstrukturiert)  
- AI Infrastructure / LLMs (implizit, probabilistisch)

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Governance und Kontrolle`,header_level:2,document_index:41,path_string:`L3 – Knowledge Core > Governance und Kontrolle`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Governance und Kontrolle`]},{section_id:`l3_knowledge_core__s007`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:6,document_index:42,header_level:2,title:`Abgrenzung zu anderen Layern`,section_type:`distinction`,raw_text:`**vs. Data Sources (L2):**
- Data Sources → enthalten Primärdaten  
- Knowledge Core → erzeugt semantische Struktur und Bedeutung  

**vs. AI Infrastructure (L1):**
- Infrastructure → führt Verarbeitung aus  
- Knowledge Core → hält und strukturiert Wissen  

**vs. Data Pipelines (C2):**
- Pipelines → transformieren Daten  
- Knowledge Core → modelliert Bedeutung  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Abgrenzung zu anderen Layern`,header_level:2,document_index:42,path_string:`L3 – Knowledge Core > Abgrenzung zu anderen Layern`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Abgrenzung zu anderen Layern`]},{section_id:`l3_knowledge_core__s008`,element_id:`l3_knowledge_core`,source_document_id:`doc_l3_knowledge_core`,parent_section_id:`l3_knowledge_core__s001`,child_section_ids:[],order_index:7,document_index:43,header_level:2,title:`Kernaussage`,section_type:`core_statement`,raw_text:`Der Knowledge Core ist der Ort, an dem aus Daten Bedeutung wird.

> Er ist die zentrale Wissensinstanz der Organisation und die Grundlage für alle intelligenten Fähigkeiten.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L3_Knowledge_Core.md`,element_id:`l3_knowledge_core`,section_title:`Kernaussage`,header_level:2,document_index:43,path_string:`L3 – Knowledge Core > Kernaussage`,line_start:null,line_end:null},section_path:[`L3 – Knowledge Core`,`Kernaussage`]},{section_id:`l4_features_in_apis__s001`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:null,child_section_ids:[`l4_features_in_apis__s002`,`l4_features_in_apis__s003`,`l4_features_in_apis__s004`,`l4_features_in_apis__s005`,`l4_features_in_apis__s006`,`l4_features_in_apis__s007`,`l4_features_in_apis__s008`],order_index:1,document_index:44,header_level:1,title:`L4 – Features in APIs`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`L4 – Features in APIs`,header_level:1,document_index:44,path_string:`L4 – Features in APIs`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`]},{section_id:`l4_features_in_apis__s002`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:1,document_index:45,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Features sind **kontextunabhängige, API-basierte technische Funktionen zur Verarbeitung von Daten und Wissen**  
*(also einzelne Bausteine wie Suchen, Klassifizieren oder Zusammenfassen, die gezielt ausgeführt werden können, ohne selbst zu entscheiden, was sinnvoll ist)*

Sie stellen standardisierte, wiederverwendbare Operationen bereit.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Definition`,header_level:2,document_index:45,path_string:`L4 – Features in APIs > Definition`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Definition`]},{section_id:`l4_features_in_apis__s003`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:2,document_index:46,header_level:2,title:`Rolle im Modell`,section_type:`role`,raw_text:`Features bilden die **technische Funktionsschicht** der Architektur.

- führen **klar definierte Operationen** auf Daten und Wissen aus  
- greifen auf **Data Sources (L2)** und **Knowledge Core (L3)** zu  
- nutzen **AI Infrastructure (L1)** zur Ausführung  
- können **Data Pipelines (C2)** einbinden  

Wichtig:

- Features sind **kontextunabhängig**
- sie sind **nicht zielgerichtet**
- sie erzeugen **keine eigenständige Wirkung**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Rolle im Modell`,header_level:2,document_index:46,path_string:`L4 – Features in APIs > Rolle im Modell`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Rolle im Modell`]},{section_id:`l4_features_in_apis__s004`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:3,document_index:47,header_level:2,title:`Einordnung in die Architektur`,section_type:`classification`,raw_text:`Features sind **modulare Bausteine**, die von höheren Layern genutzt werden:

- werden von **Capabilities (L5)** kombiniert und orchestriert  
- können in **Applications (L6)** direkt eingebunden werden  

Sie bilden die technische Grundlage für komplexere Funktionen, ohne selbst fachliche Logik zu enthalten.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Einordnung in die Architektur`,header_level:2,document_index:47,path_string:`L4 – Features in APIs > Einordnung in die Architektur`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Einordnung in die Architektur`]},{section_id:`l4_features_in_apis__s005`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:4,document_index:48,header_level:2,title:`Charakteristik`,section_type:`custom`,raw_text:`Features sind:

- **deterministisch oder kontrolliert ausführbar**  
- **klar spezifiziert und wiederverwendbar**  
- **isoliert nutzbar**  
- **ohne eigenes Zielverständnis**  

Sie führen exakt die Operation aus, für die sie definiert wurden.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Charakteristik`,header_level:2,document_index:48,path_string:`L4 – Features in APIs > Charakteristik`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Charakteristik`]},{section_id:`l4_features_in_apis__s006`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:5,document_index:49,header_level:2,title:`Beispiele`,section_type:`custom`,raw_text:`- Suche (Search)  
- Klassifikation  
- Extraktion  
- Zusammenfassung  
- Berechnung  
- OCR  
- Übersetzung  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Beispiele`,header_level:2,document_index:49,path_string:`L4 – Features in APIs > Beispiele`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Beispiele`]},{section_id:`l4_features_in_apis__s007`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:6,document_index:50,header_level:2,title:`Abgrenzung zu anderen Layern`,section_type:`distinction`,raw_text:`**vs. AI Infrastructure (L1):**
- Infrastructure → technische Basis  
- Features → konkrete Funktionen  

**vs. Knowledge Core (L3):**
- Knowledge Core → hält Bedeutung  
- Features → verarbeiten Daten und Wissen  

**vs. Capabilities (L5):**
- Features → führen Operationen aus  
- Capabilities → erzeugen fachliche Wirkung und verfolgen Ziele  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Abgrenzung zu anderen Layern`,header_level:2,document_index:50,path_string:`L4 – Features in APIs > Abgrenzung zu anderen Layern`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Abgrenzung zu anderen Layern`]},{section_id:`l4_features_in_apis__s008`,element_id:`l4_features_in_apis`,source_document_id:`doc_l4_features_in_apis`,parent_section_id:`l4_features_in_apis__s001`,child_section_ids:[],order_index:7,document_index:51,header_level:2,title:`Kernaussage`,section_type:`core_statement`,raw_text:`Features liefern technische Funktionalität – sie erzeugen keine eigenständige Wirkung.

> Sie sind die Bausteine, aus denen Fähigkeiten entstehen, aber selbst keine Fähigkeiten.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L4_Features_in_APIs.md`,element_id:`l4_features_in_apis`,section_title:`Kernaussage`,header_level:2,document_index:51,path_string:`L4 – Features in APIs > Kernaussage`,line_start:null,line_end:null},section_path:[`L4 – Features in APIs`,`Kernaussage`]},{section_id:`l5_capabilities__s001`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:null,child_section_ids:[`l5_capabilities__s002`,`l5_capabilities__s003`,`l5_capabilities__s004`,`l5_capabilities__s005`,`l5_capabilities__s006`,`l5_capabilities__s007`,`l5_capabilities__s008`,`l5_capabilities__s009`],order_index:1,document_index:52,header_level:1,title:`L5 – Capabilities`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`L5 – Capabilities`,header_level:1,document_index:52,path_string:`L5 – Capabilities`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`]},{section_id:`l5_capabilities__s002`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:1,document_index:53,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Capabilities sind **zielgerichtete, kontextabhängige Fähigkeiten zur Erzeugung von Wirkung unter Nutzung von Wissen und technischen Funktionen**  
*(also das, was ein System oder eine Organisation tun kann, um in einer konkreten Situation ein gewünschtes Ergebnis zu erreichen)*

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Definition`,header_level:2,document_index:53,path_string:`L5 – Capabilities > Definition`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Definition`]},{section_id:`l5_capabilities__s003`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:2,document_index:54,header_level:2,title:`Rolle im Modell`,section_type:`role`,raw_text:`Capabilities übersetzen technische Möglichkeiten und Wissen in **fachlich wirksame Fähigkeiten**.

- nutzen **Features (L4)** als technische Bausteine  
- greifen auf den **Knowledge Core (L3)** zu  
- können **Data Pipelines (C2)** zur Transformation einsetzen  
- werden im Kontext von **Situationen (L8)** angewendet  
- werden durch **Actors (L9)** ausgeführt  

Wichtig:

- Capabilities sind **zielgerichtet**
- sie sind **kontextabhängig**
- sie orchestrieren technische und semantische Ressourcen

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Rolle im Modell`,header_level:2,document_index:54,path_string:`L5 – Capabilities > Rolle im Modell`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Rolle im Modell`]},{section_id:`l5_capabilities__s004`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:3,document_index:55,header_level:2,title:`Einordnung in die Architektur`,section_type:`classification`,raw_text:`Capabilities bilden die **fachliche Fähigkeitsschicht** der Architektur.

Sie stehen zwischen:

- technischen Funktionen (L4)  
- und konkreter Anwendung (L6)  

und verbinden:

→ Wissen + Technik → Handlungspotenzial

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Einordnung in die Architektur`,header_level:2,document_index:55,path_string:`L5 – Capabilities > Einordnung in die Architektur`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Einordnung in die Architektur`]},{section_id:`l5_capabilities__s005`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:4,document_index:56,header_level:2,title:`Charakteristik`,section_type:`custom`,raw_text:`Capabilities sind:

- **fachlich formuliert und technologieunabhängig**  
- **zielgerichtet**  
- **kontextabhängig**  
- **kombinierbar und orchestrierbar**  
- **stabiler als technische Implementierungen**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Charakteristik`,header_level:2,document_index:56,path_string:`L5 – Capabilities > Charakteristik`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Charakteristik`]},{section_id:`l5_capabilities__s006`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:5,document_index:57,header_level:2,title:`Beziehung zu Business Outcome`,section_type:`custom`,raw_text:`Capabilities sind auf Wirkung ausgerichtet, erzeugen jedoch keinen Business Outcome allein.

> Capabilities ermöglichen Wirkung, aber der Business Outcome entsteht erst durch ihre Anwendung durch Actors in einer konkreten Situation.

Outcome entsteht durch:

- Anwendung von Capabilities  
- im Kontext von **Situationen (L8)**  
- durch **Actors (L9)**  
- typischerweise innerhalb von **Applications (L6)**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Beziehung zu Business Outcome`,header_level:2,document_index:57,path_string:`L5 – Capabilities > Beziehung zu Business Outcome`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Beziehung zu Business Outcome`]},{section_id:`l5_capabilities__s007`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:6,document_index:58,header_level:2,title:`Beispiele`,section_type:`custom`,raw_text:`- Analyse von Informationen  
- Bewertung von Optionen  
- Generierung von Inhalten  
- Verknüpfung von Wissen  
- Entscheidungsunterstützung  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Beispiele`,header_level:2,document_index:58,path_string:`L5 – Capabilities > Beispiele`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Beispiele`]},{section_id:`l5_capabilities__s008`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:7,document_index:59,header_level:2,title:`Abgrenzung zu anderen Layern`,section_type:`distinction`,raw_text:`**vs. Features (L4):**
- Features → führen Operationen aus  
- Capabilities → verfolgen Ziele und erzeugen Wirkungspotenzial  

**vs. Knowledge Core (L3):**
- Knowledge Core → hält Bedeutung  
- Capabilities → nutzen Bedeutung zur Wirkungserzeugung  

**vs. Applications (L6):**
- Capabilities → beschreiben Fähigkeit  
- Applications → setzen diese Fähigkeit konkret um  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Abgrenzung zu anderen Layern`,header_level:2,document_index:59,path_string:`L5 – Capabilities > Abgrenzung zu anderen Layern`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Abgrenzung zu anderen Layern`]},{section_id:`l5_capabilities__s009`,element_id:`l5_capabilities`,source_document_id:`doc_l5_capabilities`,parent_section_id:`l5_capabilities__s001`,child_section_ids:[],order_index:8,document_index:60,header_level:2,title:`Kernaussage`,section_type:`core_statement`,raw_text:`Capabilities sind die Ebene, auf der aus technischen Funktionen und Wissen echte Handlungsmöglichkeiten entstehen.

> Sie machen aus Systemen handlungsfähige Systeme – aber erst ihre Anwendung erzeugt Wirkung.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L5_Capabilities.md`,element_id:`l5_capabilities`,section_title:`Kernaussage`,header_level:2,document_index:60,path_string:`L5 – Capabilities > Kernaussage`,line_start:null,line_end:null},section_path:[`L5 – Capabilities`,`Kernaussage`]},{section_id:`l6_applications_tools_solutions__s001`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:null,child_section_ids:[`l6_applications_tools_solutions__s002`,`l6_applications_tools_solutions__s003`,`l6_applications_tools_solutions__s004`,`l6_applications_tools_solutions__s005`,`l6_applications_tools_solutions__s006`,`l6_applications_tools_solutions__s007`,`l6_applications_tools_solutions__s008`],order_index:1,document_index:61,header_level:1,title:`L6 – Applications`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`L6 – Applications`,header_level:1,document_index:61,path_string:`L6 – Applications`,line_start:null,line_end:null},section_path:[`L6 – Applications`]},{section_id:`l6_applications_tools_solutions__s002`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:1,document_index:62,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Applications sind **Orchestrierungs- und Interaktionseinheiten zur konkreten Anwendung von Capabilities im Kontext von Situationen**  
*(also die Systeme oder Tools, in denen Fähigkeiten kombiniert und genutzt werden, um reale Aufgaben umzusetzen)*

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Definition`,header_level:2,document_index:62,path_string:`L6 – Applications > Definition`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Definition`]},{section_id:`l6_applications_tools_solutions__s003`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:2,document_index:63,header_level:2,title:`Rolle im Modell`,section_type:`role`,raw_text:`Applications sind der Ort, an dem Capabilities **konkret angewendet, kombiniert und ausgeführt** werden.

- orchestrieren **Capabilities (L5)** zur Lösung konkreter Aufgaben  
- greifen auf den **Knowledge Core (L3)** zu  
- nutzen **Features (L4)** und ggf. **Data Pipelines (C2)**  
- werden im Kontext von **Situationen (L8)** genutzt  
- werden von **Actors (L9)** verwendet oder ausgeführt  

Wichtig:

- Applications sind **kontextabhängig**
- sie sind der Ort der **konkreten Umsetzung**
- sie verbinden Fähigkeit mit Handlung

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Rolle im Modell`,header_level:2,document_index:63,path_string:`L6 – Applications > Rolle im Modell`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Rolle im Modell`]},{section_id:`l6_applications_tools_solutions__s004`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:3,document_index:64,header_level:2,title:`Einordnung in die Architektur`,section_type:`classification`,raw_text:`Applications bilden die **Umsetzungs- und Orchestrierungsebene** der Architektur.

Sie stehen zwischen:

- Capabilities (L5) als Fähigkeit  
- und konkreter Handlung durch Actors (L9)  

und ermöglichen:

→ die praktische Nutzung von Fähigkeiten im Kontext realer Aufgaben

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Einordnung in die Architektur`,header_level:2,document_index:64,path_string:`L6 – Applications > Einordnung in die Architektur`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Einordnung in die Architektur`]},{section_id:`l6_applications_tools_solutions__s005`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:4,document_index:65,header_level:2,title:`Charakteristik`,section_type:`custom`,raw_text:`Applications sind:

- **orchestrierend** (kombinieren mehrere Capabilities)  
- **kontextsensitiv**  
- **interaktiv oder automatisiert**  
- **nicht zwingend UI-basiert**  
- **ausführungsnah**  

Sie können unterschiedliche Formen annehmen:

- Benutzeroberflächen (UI)  
- Systeme und Services  
- Workflows  
- agentische Ausführungsformen  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Charakteristik`,header_level:2,document_index:65,path_string:`L6 – Applications > Charakteristik`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Charakteristik`]},{section_id:`l6_applications_tools_solutions__s006`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:5,document_index:66,header_level:2,title:`Transformation von Applications`,section_type:`custom`,raw_text:`In der heutigen Realität und in der Zielarchitektur unterscheiden sich Applications deutlich:

**Ist-Zustand:**
- fragmentierte, UI-getriebene Werkzeuge  
- Nutzer führen Funktionen manuell aus  
- geringe Integration zwischen Systemen  
- Fokus auf einzelne Funktionen statt auf durchgängige Aufgaben  

**Zielbild:**
- Orchestrierungseinheiten für Capabilities  
- kombinieren Funktionen kontextabhängig  
- unterstützen oder automatisieren Entscheidungen und Handlungen  
- können teilweise autonom agieren (z. B. agentische Systeme)  

Diese Transformation verschiebt Applications von:

→ „Werkzeugen zur Bedienung von Funktionen“  
zu  
→ „Systemen zur Umsetzung von Fähigkeiten“

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Transformation von Applications`,header_level:2,document_index:66,path_string:`L6 – Applications > Transformation von Applications`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Transformation von Applications`]},{section_id:`l6_applications_tools_solutions__s007`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:6,document_index:67,header_level:2,title:`Abgrenzung zu anderen Layern`,section_type:`distinction`,raw_text:`**vs. Capabilities (L5):**
- Capabilities → beschreiben, was möglich ist  
- Applications → setzen diese Möglichkeiten konkret um  

**vs. Features (L4):**
- Features → einzelne technische Funktionen  
- Applications → orchestrieren diese Funktionen zur Lösung von Aufgaben  

**vs. Situation (L8):**
- Situation → bestimmt Kontext und Rahmen  
- Applications → setzen innerhalb dieses Kontexts um  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Abgrenzung zu anderen Layern`,header_level:2,document_index:67,path_string:`L6 – Applications > Abgrenzung zu anderen Layern`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Abgrenzung zu anderen Layern`]},{section_id:`l6_applications_tools_solutions__s008`,element_id:`l6_applications_tools_solutions`,source_document_id:`doc_l6_applications_tools_solutions`,parent_section_id:`l6_applications_tools_solutions__s001`,child_section_ids:[],order_index:7,document_index:68,header_level:2,title:`Kernaussage`,section_type:`core_statement`,raw_text:`Applications sind der Ort, an dem Fähigkeiten konkret zur Anwendung kommen.

> Sie machen aus Fähigkeiten tatsächliche Nutzung – und verbinden Systemlogik mit Handlung.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L6_Applications.md`,element_id:`l6_applications_tools_solutions`,section_title:`Kernaussage`,header_level:2,document_index:68,path_string:`L6 – Applications > Kernaussage`,line_start:null,line_end:null},section_path:[`L6 – Applications`,`Kernaussage`]},{section_id:`l7_use_cases_challenges__s001`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:null,child_section_ids:[`l7_use_cases_challenges__s002`,`l7_use_cases_challenges__s003`,`l7_use_cases_challenges__s004`,`l7_use_cases_challenges__s005`,`l7_use_cases_challenges__s006`,`l7_use_cases_challenges__s007`,`l7_use_cases_challenges__s008`],order_index:1,document_index:69,header_level:1,title:`L7 – Use Cases`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`L7 – Use Cases`,header_level:1,document_index:69,path_string:`L7 – Use Cases`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`]},{section_id:`l7_use_cases_challenges__s002`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:1,document_index:70,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Use Cases sind **konkrete Aufgaben und Probleme aus der realen Welt, die in einer Situation gelöst werden müssen**  
*(also die tatsächlichen Anliegen, Herausforderungen und Aufgaben, mit denen Menschen oder Systeme konfrontiert sind)*

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Definition`,header_level:2,document_index:70,path_string:`L7 – Use Cases > Definition`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Definition`]},{section_id:`l7_use_cases_challenges__s003`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:2,document_index:71,header_level:2,title:`Rolle im Modell`,section_type:`role`,raw_text:`Use Cases beschreiben den **konkreten Bedarf**, auf den die Architektur ausgerichtet ist.

- entstehen aus **Challenges (Herausforderungen)**  
- definieren, **was gelöst werden muss**  
- bilden die Grundlage für den Einsatz von **Capabilities (L5)** und **Applications (L6)**  
- finden immer im Kontext von **Situationen (L8)** statt  

Wichtig:

- Use Cases sind **kein Lösungsraum**
- sie beschreiben **Probleme und Aufgaben, nicht deren Umsetzung**

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Rolle im Modell`,header_level:2,document_index:71,path_string:`L7 – Use Cases > Rolle im Modell`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Rolle im Modell`]},{section_id:`l7_use_cases_challenges__s004`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:3,document_index:72,header_level:2,title:`Zusammenhang mit Challenges`,section_type:`custom`,raw_text:`Challenges sind der **Ausgangspunkt von Use Cases**.

- eine Challenge beschreibt eine Herausforderung oder ein Problem  
- ein Use Case beschreibt die konkrete Situation, in der diese Herausforderung gelöst werden muss  

Beispiel:

- Challenge: „Informationen sind schwer auffindbar“  
- Use Case: „Ein Mitarbeiter sucht relevante Informationen für eine Entscheidung“  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Zusammenhang mit Challenges`,header_level:2,document_index:72,path_string:`L7 – Use Cases > Zusammenhang mit Challenges`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Zusammenhang mit Challenges`]},{section_id:`l7_use_cases_challenges__s005`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:4,document_index:73,header_level:2,title:`Einordnung in die Architektur`,section_type:`classification`,raw_text:`Use Cases stehen am **Ausgangspunkt der Architektur**.

- werden durch **Initiatoren (L9)** definiert  
- entstehen innerhalb von **Situationen (L8)**  
- führen zur Nutzung von **Capabilities (L5)** und **Applications (L6)**  
- zielen auf einen **Business Outcome (L10)**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Einordnung in die Architektur`,header_level:2,document_index:73,path_string:`L7 – Use Cases > Einordnung in die Architektur`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Einordnung in die Architektur`]},{section_id:`l7_use_cases_challenges__s006`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:5,document_index:74,header_level:2,title:`Transformation des Use-Case-Verständnisses`,section_type:`custom`,raw_text:`Der Begriff „Use Case“ hat sich im Laufe der Zeit verändert:

**Klassisches Verständnis:**
- formalisiert und statisch beschrieben  
- häufig in festen Strukturen (z. B. UML) modelliert  
- beschreibt klar definierte Abläufe  

**Zielbild (OIA):**
- dynamisch und situativ  
- entsteht aus realen Herausforderungen  
- abhängig von Kontext, Situation und Ziel  
- nicht vollständig vorab modellierbar  

Diese Transformation verschiebt den Fokus von:

→ „vordefinierten Abläufen“  
zu  
→ „situativen Herausforderungen, die gelöst werden müssen“

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Transformation des Use-Case-Verständnisses`,header_level:2,document_index:74,path_string:`L7 – Use Cases > Transformation des Use-Case-Verständnisses`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Transformation des Use-Case-Verständnisses`]},{section_id:`l7_use_cases_challenges__s007`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:6,document_index:75,header_level:2,title:`Abgrenzung zu anderen Layern`,section_type:`distinction`,raw_text:`**vs. Capabilities (L5):**
- Use Cases → beschreiben das Problem  
- Capabilities → beschreiben die Fähigkeit zur Lösung  

**vs. Applications (L6):**
- Use Cases → definieren den Bedarf  
- Applications → setzen die Lösung konkret um  

**vs. Situation (L8):**
- Situation → beschreibt den Kontext  
- Use Cases → beschreiben die Aufgabe innerhalb dieses Kontexts  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Abgrenzung zu anderen Layern`,header_level:2,document_index:75,path_string:`L7 – Use Cases > Abgrenzung zu anderen Layern`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Abgrenzung zu anderen Layern`]},{section_id:`l7_use_cases_challenges__s008`,element_id:`l7_use_cases_challenges`,source_document_id:`doc_l7_use_cases_challenges`,parent_section_id:`l7_use_cases_challenges__s001`,child_section_ids:[],order_index:7,document_index:76,header_level:2,title:`Kernaussage`,section_type:`core_statement`,raw_text:`Use Cases beschreiben reale Aufgaben und Probleme, die in konkreten Situationen gelöst werden müssen.

> Sie sind der Ausgangspunkt für jede Form von Fähigkeit, Anwendung und Handlung.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L7_UseCases.md`,element_id:`l7_use_cases_challenges`,section_title:`Kernaussage`,header_level:2,document_index:76,path_string:`L7 – Use Cases > Kernaussage`,line_start:null,line_end:null},section_path:[`L7 – Use Cases`,`Kernaussage`]},{section_id:`l8_situation_context__s001`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:null,child_section_ids:[`l8_situation_context__s002`,`l8_situation_context__s003`,`l8_situation_context__s004`,`l8_situation_context__s007`,`l8_situation_context__s008`,`l8_situation_context__s009`,`l8_situation_context__s010`,`l8_situation_context__s011`],order_index:1,document_index:77,header_level:1,title:`L8 – Situation & Context`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`L8 – Situation & Context`,header_level:1,document_index:77,path_string:`L8 – Situation & Context`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`]},{section_id:`l8_situation_context__s002`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:1,document_index:78,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Situation & Context beschreibt den **konkreten, handlungsbestimmenden Zustand, der Auswahl, Interpretation und Anwendung von Fähigkeiten steuert**  
*(also die aktuelle Lage, die bestimmt, welche Handlung sinnvoll ist und wie Wissen genutzt wird)*

Situation ist der **primäre Steuerungsmechanismus für Handlung und Entscheidung**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Definition`,header_level:2,document_index:78,path_string:`L8 – Situation & Context > Definition`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Definition`]},{section_id:`l8_situation_context__s003`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:2,document_index:79,header_level:2,title:`Rolle im Modell`,section_type:`role`,raw_text:`Situation & Context bestimmt, wie Aufgaben interpretiert, Fähigkeiten ausgewählt und Handlungen ausgeführt werden.

- steuert die Auswahl und Anwendung von **Capabilities (L5)**  
- prägt die konkrete Nutzung von **Applications (L6)**  
- beeinflusst Entscheidungen und Handlungen von **Actors (L9)**  
- bestimmt, wie Wissen aus dem **Knowledge Core (L3)** relevant wird  
- beeinflusst die Bewertung von **Business Outcomes (L10)**  

Wichtig:

- Bedeutung ist nicht nur im Wissen angelegt, sondern wird **situativ wirksam**
- gleiche Fähigkeiten können je nach Situation unterschiedlich eingesetzt werden
- ohne Situation und Kontext bleibt die Architektur statisch

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Rolle im Modell`,header_level:2,document_index:79,path_string:`L8 – Situation & Context > Rolle im Modell`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Rolle im Modell`]},{section_id:`l8_situation_context__s004`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[`l8_situation_context__s005`,`l8_situation_context__s006`],order_index:3,document_index:80,header_level:2,title:`Struktur von Situation & Context`,section_type:`structure`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Struktur von Situation & Context`,header_level:2,document_index:80,path_string:`L8 – Situation & Context > Struktur von Situation & Context`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Struktur von Situation & Context`]},{section_id:`l8_situation_context__s005`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s004`,child_section_ids:[],order_index:1,document_index:81,header_level:3,title:`Situation`,section_type:`custom`,raw_text:`Die Situation ist der **konkrete, zeitgebundene und dynamische Handlungszustand**.

Sie umfasst zum Beispiel:

- aktuelle Aufgabe oder Herausforderung  
- zeitliche Rahmenbedingungen  
- verfügbare Mittel und Zugänge  
- Umgebungsbedingungen  
- Prioritäten und Einschränkungen  

Die Situation bestimmt:

- was jetzt relevant ist  
- was sinnvoll oder notwendig ist  
- welche Handlungsmöglichkeiten gewählt werden  

`,is_dual_structure_member:!0,dual_structure_group:`l8_situation_context__dual_001`,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Situation`,header_level:3,document_index:81,path_string:`L8 – Situation & Context > Struktur von Situation & Context > Situation`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Struktur von Situation & Context`,`Situation`]},{section_id:`l8_situation_context__s006`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s004`,child_section_ids:[],order_index:2,document_index:82,header_level:3,title:`Kontext`,section_type:`custom`,raw_text:`Kontext ist der **aktivierte Deutungs- und Wissensausschnitt innerhalb der Situation**.

Er beschreibt den Teil des verfügbaren Wissens, der in einer konkreten Situation tatsächlich relevant und handlungswirksam wird.

Kontext ist damit:

- nicht das gesamte verfügbare Wissen  
- sondern der **situativ relevante Ausschnitt** daraus  
- die Grundlage für Einordnung, Verständnis und Erwartungsbildung  

Es gilt:

> Situation bestimmt, was gerade zählt; Kontext bestimmt, wie es zu verstehen ist.

---

`,is_dual_structure_member:!0,dual_structure_group:`l8_situation_context__dual_001`,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Kontext`,header_level:3,document_index:82,path_string:`L8 – Situation & Context > Struktur von Situation & Context > Kontext`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Struktur von Situation & Context`,`Kontext`]},{section_id:`l8_situation_context__s007`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:4,document_index:83,header_level:2,title:`Einordnung in die Architektur`,section_type:`classification`,raw_text:`Situation & Context bildet die **Steuerungs- und Interpretationsschicht** der Architektur.

Sie verbindet:

- **Use Cases (L7)** als konkrete Aufgabe  
- **Capabilities (L5)** als Handlungspotenzial  
- **Applications (L6)** als Umsetzung  
- **Actors (L9)** als Handlungsträger  
- **Business Outcome (L10)** als Wirkung  

Damit ist L8 die Ebene, auf der aus Möglichkeit **situativ sinnvolles Handeln** wird.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Einordnung in die Architektur`,header_level:2,document_index:83,path_string:`L8 – Situation & Context > Einordnung in die Architektur`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Einordnung in die Architektur`]},{section_id:`l8_situation_context__s008`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:5,document_index:84,header_level:2,title:`Governance und Nachvollziehbarkeit`,section_type:`governance`,raw_text:`Situation & Context ist für Governance zentral.

Denn in der Situation entscheidet sich:

- welche Informationen relevant sind  
- welche Handlung zulässig oder sinnvoll ist  
- welche Prioritäten gelten  
- wie Ergebnisse bewertet werden müssen  

Damit ist L8 auch zentral für:

- Nachvollziehbarkeit  
- Reproduzierbarkeit  
- verantwortliche Entscheidungsfindung  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Governance und Nachvollziehbarkeit`,header_level:2,document_index:84,path_string:`L8 – Situation & Context > Governance und Nachvollziehbarkeit`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Governance und Nachvollziehbarkeit`]},{section_id:`l8_situation_context__s009`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:6,document_index:85,header_level:2,title:`Methodischer Hinweis`,section_type:`custom`,raw_text:`Zur späteren Operationalisierung können Methoden eingesetzt werden, die Kontext expliziter und weniger mehrdeutig machen.  
Solche Methoden können die Arbeit in diesem Layer unterstützen, sind jedoch **nicht Teil des Architekturmodells selbst**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Methodischer Hinweis`,header_level:2,document_index:85,path_string:`L8 – Situation & Context > Methodischer Hinweis`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Methodischer Hinweis`]},{section_id:`l8_situation_context__s010`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:7,document_index:86,header_level:2,title:`Abgrenzung zu anderen Layern`,section_type:`distinction`,raw_text:`**vs. Knowledge Core (L3):**
- Knowledge Core → hält strukturiertes Wissen  
- Situation & Context → macht Wissen situativ relevant  

**vs. Use Cases (L7):**
- Use Cases → beschreiben die Aufgabe  
- Situation & Context → bestimmt, wie diese Aufgabe konkret zu verstehen ist  

**vs. Capabilities (L5):**
- Capabilities → beschreiben, was getan werden kann  
- Situation & Context → bestimmt, was davon sinnvoll eingesetzt wird  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Abgrenzung zu anderen Layern`,header_level:2,document_index:86,path_string:`L8 – Situation & Context > Abgrenzung zu anderen Layern`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Abgrenzung zu anderen Layern`]},{section_id:`l8_situation_context__s011`,element_id:`l8_situation_context`,source_document_id:`doc_l8_situation_context`,parent_section_id:`l8_situation_context__s001`,child_section_ids:[],order_index:8,document_index:87,header_level:2,title:`Kernaussage`,section_type:`core_statement`,raw_text:`Situation & Context bestimmt, welche Handlung in einem konkreten Moment sinnvoll ist.

> Erst durch Situation und Kontext wird Wissen handlungsrelevant und Fähigkeit zu sinnvoller Anwendung.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L8_Situation_Context.md`,element_id:`l8_situation_context`,section_title:`Kernaussage`,header_level:2,document_index:87,path_string:`L8 – Situation & Context > Kernaussage`,line_start:null,line_end:null},section_path:[`L8 – Situation & Context`,`Kernaussage`]},{section_id:`l9_system_participants__s001`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:null,child_section_ids:[`l9_system_participants__s002`,`l9_system_participants__s003`,`l9_system_participants__s004`,`l9_system_participants__s008`,`l9_system_participants__s009`,`l9_system_participants__s010`,`l9_system_participants__s011`],order_index:1,document_index:88,header_level:1,title:`L9 – System Participants`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`L9 – System Participants`,header_level:1,document_index:88,path_string:`L9 – System Participants`,line_start:null,line_end:null},section_path:[`L9 – System Participants`]},{section_id:`l9_system_participants__s002`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[],order_index:1,document_index:89,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`System Participants beschreiben die **Rollen von Beteiligten in Bezug auf Verantwortung, Ausführung und Wirkung innerhalb eines Handlungssystems**  
*(also wer etwas veranlasst, wer es umsetzt und wer die Auswirkungen erlebt)*

Sie machen Verantwortung, Ausführung und Wirkung explizit und zuordenbar.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Definition`,header_level:2,document_index:89,path_string:`L9 – System Participants > Definition`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Definition`]},{section_id:`l9_system_participants__s003`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[],order_index:2,document_index:90,header_level:2,title:`Rolle im Modell`,section_type:`role`,raw_text:`System Participants definieren, **wer welche Rolle im Entstehen von Handlung und Wirkung einnimmt**.

- verknüpfen **Use Cases (L7)** mit konkreten Verantwortlichen  
- verbinden **Capabilities (L5)** und **Applications (L6)** mit Ausführung  
- machen sichtbar, wer für **Business Outcomes (L10)** verantwortlich ist  
- wirken innerhalb von **Situationen (L8)**  

Wichtig:

- jede Handlung ist Rollen zugeordnet  
- Verantwortung, Ausführung und Wirkung sind **klar getrennt**  
- Rollen sind unabhängig von konkreten Systemen oder Technologien  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Rolle im Modell`,header_level:2,document_index:90,path_string:`L9 – System Participants > Rolle im Modell`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Rolle im Modell`]},{section_id:`l9_system_participants__s004`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[`l9_system_participants__s005`,`l9_system_participants__s006`,`l9_system_participants__s007`],order_index:3,document_index:91,header_level:2,title:`Rollenmodell`,section_type:`custom`,raw_text:`Das Modell unterscheidet drei zentrale Rollen:

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Rollenmodell`,header_level:2,document_index:91,path_string:`L9 – System Participants > Rollenmodell`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Rollenmodell`]},{section_id:`l9_system_participants__s005`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s004`,child_section_ids:[],order_index:1,document_index:92,header_level:3,title:`Initiator (Accountability)`,section_type:`custom`,raw_text:`Der Initiator definiert den Anlass und trägt die Verantwortung für den Zweck.

- definiert den **Use Case (L7)**  
- setzt Ziele und Erwartungen  
- trägt Verantwortung für die intendierte Wirkung  

Leitfrage:

→ „Warum wird gehandelt?“

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Initiator (Accountability)`,header_level:3,document_index:92,path_string:`L9 – System Participants > Rollenmodell > Initiator (Accountability)`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Rollenmodell`,`Initiator (Accountability)`]},{section_id:`l9_system_participants__s006`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s004`,child_section_ids:[],order_index:2,document_index:93,header_level:3,title:`Actor (Execution)`,section_type:`custom`,raw_text:`Der Actor führt die Handlung aus.

- nutzt **Applications (L6)** und **Capabilities (L5)**  
- setzt Aufgaben konkret um  
- kann sein:
  - Mensch  
  - System  
  - agentische Instanz  

Leitfrage:

→ „Wie wird gehandelt?“

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Actor (Execution)`,header_level:3,document_index:93,path_string:`L9 – System Participants > Rollenmodell > Actor (Execution)`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Rollenmodell`,`Actor (Execution)`]},{section_id:`l9_system_participants__s007`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s004`,child_section_ids:[],order_index:3,document_index:94,header_level:3,title:`Beneficiary (Wirkung)`,section_type:`custom`,raw_text:`Der Beneficiary erlebt die Auswirkungen der Handlung.

- profitiert von Ergebnissen oder ist davon betroffen  
- kann sein:
  - Kunde  
  - Mitarbeiter  
  - Organisation  
  - System  

Leitfrage:

→ „Wer ist von der Wirkung betroffen?“

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Beneficiary (Wirkung)`,header_level:3,document_index:94,path_string:`L9 – System Participants > Rollenmodell > Beneficiary (Wirkung)`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Rollenmodell`,`Beneficiary (Wirkung)`]},{section_id:`l9_system_participants__s008`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[],order_index:4,document_index:95,header_level:2,title:`Einordnung in die Architektur`,section_type:`classification`,raw_text:`System Participants verbinden Verantwortung mit Handlung und Wirkung.

Sie stehen in direkter Beziehung zu:

- **Use Cases (L7)** als Auslöser  
- **Situation & Context (L8)** als Handlungsrahmen  
- **Capabilities (L5)** und **Applications (L6)** als Umsetzung  
- **Business Outcome (L10)** als Ergebnis  

Damit wird sichtbar:

→ wer initiiert, wer handelt und wer betroffen ist

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Einordnung in die Architektur`,header_level:2,document_index:95,path_string:`L9 – System Participants > Einordnung in die Architektur`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Einordnung in die Architektur`]},{section_id:`l9_system_participants__s009`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[],order_index:5,document_index:96,header_level:2,title:`Verantwortung und Governance`,section_type:`governance`,raw_text:`System Participants sind zentral für Governance.

- der **Actor führt aus**, aber ist nicht zwangsläufig verantwortlich für den Zweck  
- der **Initiator trägt die Verantwortung für Ziel und Wirkung**  
- der **Beneficiary macht Auswirkungen sichtbar**  

Daraus folgt:

- Verantwortung ist **nicht gleich Ausführung**  
- Verantwortung bleibt auch bei automatisierten oder agentischen Systemen zuordenbar  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Verantwortung und Governance`,header_level:2,document_index:96,path_string:`L9 – System Participants > Verantwortung und Governance`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Verantwortung und Governance`]},{section_id:`l9_system_participants__s010`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[],order_index:6,document_index:97,header_level:2,title:`Abgrenzung zu anderen Layern`,section_type:`distinction`,raw_text:`**vs. Capabilities (L5):**
- Capabilities → beschreiben, was möglich ist  
- Participants → beschreiben, wer handelt  

**vs. Applications (L6):**
- Applications → setzen Fähigkeiten um  
- Participants → nutzen oder betreiben diese Umsetzung  

**vs. Business Outcome (L10):**
- Outcome → beschreibt Wirkung  
- Participants → ordnen diese Wirkung Personen oder Systemen zu  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Abgrenzung zu anderen Layern`,header_level:2,document_index:97,path_string:`L9 – System Participants > Abgrenzung zu anderen Layern`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Abgrenzung zu anderen Layern`]},{section_id:`l9_system_participants__s011`,element_id:`l9_system_participants`,source_document_id:`doc_l9_system_participants`,parent_section_id:`l9_system_participants__s001`,child_section_ids:[],order_index:7,document_index:98,header_level:2,title:`Kernaussage`,section_type:`core_statement`,raw_text:`System Participants machen Verantwortung, Ausführung und Wirkung explizit.

> Sie sorgen dafür, dass Handlung und Ergebnis einer Organisation nachvollziehbar und zuordenbar bleiben.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L9_SystemParticipants.md`,element_id:`l9_system_participants`,section_title:`Kernaussage`,header_level:2,document_index:98,path_string:`L9 – System Participants > Kernaussage`,line_start:null,line_end:null},section_path:[`L9 – System Participants`,`Kernaussage`]},{section_id:`l10_business_outcome__s001`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:null,child_section_ids:[`l10_business_outcome__s002`,`l10_business_outcome__s003`,`l10_business_outcome__s004`,`l10_business_outcome__s005`,`l10_business_outcome__s006`,`l10_business_outcome__s007`,`l10_business_outcome__s008`],order_index:1,document_index:99,header_level:1,title:`L10 – Business Outcome`,section_type:`custom`,raw_text:``,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`L10 – Business Outcome`,header_level:1,document_index:99,path_string:`L10 – Business Outcome`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`]},{section_id:`l10_business_outcome__s002`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:1,document_index:100,header_level:2,title:`Definition`,section_type:`definition`,raw_text:`Business Outcome beschreibt die **tatsächliche, kontextabhängige Wirkung von Handlungen in der realen Welt und dient als Referenzpunkt zur Bewertung der gesamten Architektur**  
*(also das, was sich durch Entscheidungen und Aktionen konkret verändert und zeigt, ob das System funktioniert)*

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Definition`,header_level:2,document_index:100,path_string:`L10 – Business Outcome > Definition`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Definition`]},{section_id:`l10_business_outcome__s003`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:2,document_index:101,header_level:2,title:`Rolle im Modell`,section_type:`role`,raw_text:`Business Outcome macht sichtbar, ob aus Wissen, Fähigkeiten und Handlung **tatsächlicher Nutzen entsteht**.

- entsteht durch die Anwendung von **Capabilities (L5)**  
- wird konkret umgesetzt über **Applications (L6)**  
- erfolgt durch **Actors (L9)**  
- ist abhängig von **Situationen (L8)**  

Wichtig:

- Outcome ist **keine Systemausgabe**, sondern eine **Veränderung in der Realität**  
- gleiche Handlung kann je nach Situation zu unterschiedlichen Outcomes führen  
- Outcome entsteht **nicht im System allein**, sondern im Zusammenspiel von System, Handlung und Kontext  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Rolle im Modell`,header_level:2,document_index:101,path_string:`L10 – Business Outcome > Rolle im Modell`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Rolle im Modell`]},{section_id:`l10_business_outcome__s004`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:3,document_index:102,header_level:2,title:`Einordnung in die Architektur`,section_type:`classification`,raw_text:`Business Outcome ist der **zentrale Referenzpunkt der gesamten Architektur**.

Alle anderen Layer zahlen auf ihn ein:

- **Data Sources (L2)** liefern die Grundlage  
- **Knowledge Core (L3)** erzeugt Bedeutung  
- **Capabilities (L5)** ermöglichen Handlung  
- **Applications (L6)** setzen Handlung um  
- **Situation (L8)** bestimmt die Ausführung  

Der Outcome ist damit das **Endergebnis dieser Wirkungskette**.

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Einordnung in die Architektur`,header_level:2,document_index:102,path_string:`L10 – Business Outcome > Einordnung in die Architektur`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Einordnung in die Architektur`]},{section_id:`l10_business_outcome__s005`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:4,document_index:103,header_level:2,title:`Messbarkeit und Auswertbarkeit`,section_type:`custom`,raw_text:`Business Outcome macht das System **messbar und auswertbar**.

- zeigt, ob gesetzte Ziele erreicht wurden  
- ermöglicht die Definition von **KPIs und Erfolgsmetriken**  
- dient als Grundlage für Analyse und Bewertung  
- ermöglicht systematische Verbesserung und Steuerung  

Daraus folgt:

- das System kann **nicht nur ausgeführt, sondern auch bewertet werden**  
- Entscheidungen können **auf Wirkung statt auf Aktivität basieren**  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Messbarkeit und Auswertbarkeit`,header_level:2,document_index:103,path_string:`L10 – Business Outcome > Messbarkeit und Auswertbarkeit`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Messbarkeit und Auswertbarkeit`]},{section_id:`l10_business_outcome__s006`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:5,document_index:104,header_level:2,title:`Rückkopplung und Steuerung`,section_type:`custom`,raw_text:`Business Outcome wirkt als **Feedbackmechanismus für die gesamte Architektur**.

- positive Outcomes bestätigen die Wirksamkeit  
- negative Outcomes weisen auf Probleme hin  

Mögliche Ursachen liegen in:

- unzureichendem Wissen (**L3**)  
- ungeeigneten Fähigkeiten (**L5**)  
- fehlerhafter Umsetzung (**L6**)  
- falscher Einschätzung der Situation (**L8**)  

Damit ermöglicht der Outcome:

→ gezielte Analyse  
→ kontinuierliche Verbesserung  
→ strategische Steuerung  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Rückkopplung und Steuerung`,header_level:2,document_index:104,path_string:`L10 – Business Outcome > Rückkopplung und Steuerung`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Rückkopplung und Steuerung`]},{section_id:`l10_business_outcome__s007`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:6,document_index:105,header_level:2,title:`Abgrenzung zu anderen Konzepten`,section_type:`distinction`,raw_text:`**vs. Output:**
- Output → Ergebnis eines Systems (z. B. Bericht, Antwort)  
- Outcome → Wirkung in der realen Welt (z. B. bessere Entscheidung, Effizienzsteigerung)  

**vs. Capabilities (L5):**
- Capabilities → ermöglichen Handlung  
- Outcome → misst deren tatsächliche Wirkung  

---

`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Abgrenzung zu anderen Konzepten`,header_level:2,document_index:105,path_string:`L10 – Business Outcome > Abgrenzung zu anderen Konzepten`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Abgrenzung zu anderen Konzepten`]},{section_id:`l10_business_outcome__s008`,element_id:`l10_business_outcome`,source_document_id:`doc_l10_business_outcome`,parent_section_id:`l10_business_outcome__s001`,child_section_ids:[],order_index:7,document_index:106,header_level:2,title:`Kernaussage`,section_type:`core_statement`,raw_text:`Business Outcome beschreibt die tatsächliche Wirkung von Handlungen und macht das System messbar und steuerbar.

> Er ist der zentrale Referenzpunkt, an dem sich der Erfolg der gesamten Architektur entscheidet.`,is_dual_structure_member:!1,dual_structure_group:null,source_anchor:{filename:`L10_BusinessOutcome.md`,element_id:`l10_business_outcome`,section_title:`Kernaussage`,header_level:2,document_index:106,path_string:`L10 – Business Outcome > Kernaussage`,line_start:null,line_end:null},section_path:[`L10 – Business Outcome`,`Kernaussage`]}],documentation_semantic:[]},H={"#L1":`l1_infrastructure`,"#L2":`l2_data_sources`,"#L3":`l3_knowledge_core`,"#L4":`l4_features_in_apis`,"#L5":`l5_capabilities`,"#L6":`l6_applications_tools_solutions`,"#L7":`l7_use_cases_challenges`,"#L8":`l8_situation_context`,"#L9":`l9_system_participants`,"#L10":`l10_business_outcome`};function le(e){let t=H[e];if(!t)return null;let n=V.sections.filter(e=>e.element_id===t&&e.header_level>=2&&e.raw_text!==``).sort((e,t)=>e.document_index-t.document_index).map(e=>({sectionId:e.section_id,title:e.title,rawText:e.raw_text,sectionType:e.section_type,headerLevel:e.header_level,parentSectionId:e.parent_section_id}));return n.length===0?null:{elementId:t,sections:n}}function U(){let e=document.createElement(`div`);return e.className=`page-view`,e.innerHTML=`
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
  `,e}function W(){let e=document.createElement(`div`);return e.className=`page-view`,e.innerHTML=`
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
  `,e}function de(){let e=document.createElement(`div`);return e.className=`page-view`,e.innerHTML=`
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
  `,e}var fe=[{href:`#/`,label:`OIA`,route:`/`},{href:`#/motivation`,label:`Motivation`,route:`/motivation`},{href:`#/contribute`,label:`Contribute`,route:`/contribute`},{href:`#/about`,label:`About`,route:`/about`},{href:`#/legal`,label:`Legal Notice`,route:`/legal`}];function pe(e){return e.startsWith(`#/motivation`)?`/motivation`:e.startsWith(`#/contribute`)?`/contribute`:e.startsWith(`#/about`)?`/about`:e.startsWith(`#/legal`)?`/legal`:`/`}function me(e){let t=pe(window.location.hash||`#/`);e.innerHTML=`
    <div class="site-nav__inner">
      <a class="site-nav__brand" href="#/">OIA</a>
      <ul class="site-nav__links">
        ${fe.map(e=>`
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
  `}var he=.75,G=.4,K=.05,q,J,Y=null,ge=1440;function _e(){return Math.max(G,Math.min(he,window.innerWidth/ge))}var X=_e();function Z(e){X=e;let t=J.querySelector(`.diagram-wrapper`);if(t){t.style.transform=`scale(${X})`;let e=X<.55?`zoom-far`:X<.75?`zoom-mid`:`zoom-full`;t.classList.remove(`zoom-far`,`zoom-mid`,`zoom-full`),t.classList.add(e)}let n=J.querySelector(`.zoom-label`);n&&(n.textContent=Math.round(X*100)+`%`);let r=J.querySelector(`.zoom-slider`);r&&(r.value=String(X*100))}function Q(){J.querySelectorAll(`[data-id]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.id;n&&(window.location.hash=`#/detail/${n}`)})})}function ve(){J.innerHTML=``;let e=ie(q);J.appendChild(e),Z(X),Q();let t=document.createElement(`div`);t.className=`zoom-controls`,t.innerHTML=`
    <span class="zoom-controls__label">Zoom</span>
    <input class="zoom-slider" type="range" min="${G*100}" max="100" value="${Math.round(X*100)}" step="${K*100}">
    <span class="zoom-label">${Math.round(X*100)}%</span>
  `,J.appendChild(t);let n=t.querySelector(`.zoom-slider`);n.addEventListener(`input`,()=>Z(Number(n.value)/100)),t.addEventListener(`wheel`,e=>{e.preventDefault();let t=e.deltaY<0?K:-K;Z(Math.min(1,Math.max(G,X+t)))})}function ye(e){J.innerHTML=``;let t=le(e);J.appendChild(B(q,e,t)),Q()}function $(e){J.innerHTML=``,J.appendChild(e)}function be(e,t){q=e,J=t,Y=document.getElementById(`site-nav`);let n=document.querySelector(`.github-fab`),r=()=>{let e=window.location.hash||`#/`;Y&&me(Y);let t=e===`#/motivation`||e===`#/contribute`||e===`#/about`||e===`#/legal`;n&&(n.style.display=t?``:`none`),e.startsWith(`#/detail/`)?ye(decodeURIComponent(e.replace(`#/detail/`,``))):e===`#/motivation`?$(U()):e===`#/contribute`?$(W()):e===`#/about`?$(ue()):e===`#/legal`?$(de()):ve()};window.addEventListener(`hashchange`,r),r()}be(e,document.getElementById(`app`));