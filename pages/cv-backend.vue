<template>
  <main class="ats-cv ats-cv--backend">
    <header class="ats-cv__header">
      <h1 class="ats-cv__name">
        Ferenc Sticza
      </h1>
      <p class="ats-cv__title">
        Senior Backend Engineer | Node.js, TypeScript, PostgreSQL, AWS | Fintech &amp; Applied AI
      </p>
      <p class="ats-cv__summary">
        Backend engineer with 20+ years of delivery, working at principal level on Node.js and TypeScript services for banking, insurance, and finance-operations products.
      </p>
      <p class="ats-cv__summary">
        My recent work is close to this kind of product: a finance-operations platform on PostgreSQL covering ledger, payments, procurement, and bank reconciliation, and an LLM platform where company data crosses a fail-closed PII boundary before any model provider sees it. I take contract engagements through MONAD SYSTEMS, working remotely from Hungary (CET, one hour ahead of the UK).
      </p>
      <ul class="ats-cv__contact">
        <li>Email: <a href="mailto:ferenc@sticza.com">ferenc@sticza.com</a></li>
        <li>Phone: <a href="tel:+36306360775">+36/30-636-0775</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/ferenc-sticza-ab9a1814/">linkedin.com/in/ferenc-sticza-ab9a1814</a></li>
        <li>GitHub: <a href="https://github.com/fsticza">github.com/fsticza</a></li>
        <li>Location: Gödöllő, Pest, Hungary (CET / CEST)</li>
        <li>Website: <a href="https://sticza.com">sticza.com</a></li>
      </ul>
    </header>

    <section class="ats-cv__section">
      <h2 class="ats-cv__section-title">
        Backend Highlights
      </h2>
      <ul class="ats-cv__highlights">
        <li>Node.js and TypeScript services in production for regulated banking (Magyar Bankholding), OTP Group (Fizz), and insurance (Netrisk): Fastify, spec-first OpenAPI and AsyncAPI contracts, Kafka and IBM MQ.</li>
        <li>PostgreSQL as the system of record for a 24-module ERP and FinOps platform: row-level security, tamper-evident audit trails, ledger, payments, and bank reconciliation.</li>
        <li>LLM pipelines built for sensitive data: a fail-closed PII service with reversible per-run tokenization and a hash-chained egress audit, per-project spend ceilings, and a pinned no-training provider allowlist.</li>
        <li>Cost outcome: several hundred thousand USD in annual savings from replacing a slow third-party search provider with an Azure AI Search implementation behind an adapter.</li>
        <li>Delivery speed: CI feedback to the development environment cut from roughly 1 hour to about 6 minutes.</li>
      </ul>
    </section>

    <section class="ats-cv__section">
      <h2 class="ats-cv__section-title">
        Experience
      </h2>

      <article class="ats-cv__role ats-cv__role--multi">
        <div class="ats-cv__role-header">
          <div>
            <div class="ats-cv__role-title">
              Principal Engineer &amp; Product Architect (contract delivery)
            </div>
            <div class="ats-cv__company">
              MONAD SYSTEMS
            </div>
          </div>
          <div class="ats-cv__date">
            May 2021 - Present
          </div>
        </div>
        <p class="ats-cv__meta">
          Node.js, TypeScript, Fastify, PostgreSQL, Kafka, IBM MQ, AWS, Azure, Kubernetes, LLM orchestration
        </p>
        <ul class="ats-cv__bullets">
          <li>Fizz (OTP Group), 2022 - 2026: redesigned and led implementation of the microservice platform (Node.js, Kafka, PostgreSQL, MongoDB, Redis) around clear service boundaries, production observability, and API design-first governance. Replaced the search provider behind an adapter pattern for major speed gains and several hundred thousand USD in annual savings; cut CI feedback from roughly 1 hour to about 6 minutes.</li>
          <li>Magyar Bankholding, 2021 - 2022: introduced API spec-driven development (OpenAPI, AsyncAPI) for Node.js and Fastify services over Kafka and IBM MQ, deployed on Azure and AWS, and helped build Internal Developer Platform foundations - service templates and internal packages - for faster, more consistent service start-up in a regulated banking environment.</li>
          <li>Netrisk, 2023 - 2025: designed and led implementation of a Kafka-based, event-driven Node.js insurance platform on Azure with GitOps delivery, giving reliable real-time integration with multiple insurance partners.</li>
          <li>IdomSoft, 2023 - 2026: redesigned the architecture of the Hungarian election system, which now handles millions of requests per day without operational glitches.</li>
        </ul>
      </article>

      <article class="ats-cv__role">
        <div class="ats-cv__role-header">
          <div>
            <div class="ats-cv__role-title">
              Full Stack JavaScript Engineer
            </div>
            <div class="ats-cv__company">
              Self-employed
            </div>
          </div>
          <div class="ats-cv__date">
            Jul 2017 - May 2021
          </div>
        </div>
        <ul class="ats-cv__bullets">
          <li>Delivered backend services and APIs across multiple production client engagements, hands-on with Node.js, Redis, Kafka, MongoDB, and OpenAPI.</li>
        </ul>
      </article>

      <article class="ats-cv__role">
        <div class="ats-cv__role-header">
          <div>
            <div class="ats-cv__role-title">
              Lead Full Stack JavaScript Developer, JavaScript Division Lead
            </div>
            <div class="ats-cv__company">
              Virgo Systems
            </div>
          </div>
          <div class="ats-cv__date">
            Sep 2013 - Jun 2017
          </div>
        </div>
        <ul class="ats-cv__bullets">
          <li>Led the 12-engineer JavaScript division for social and e-commerce products, hands-on across Node.js services, Redis, MongoDB, and AWS infrastructure.</li>
        </ul>
      </article>

      <article class="ats-cv__role">
        <div class="ats-cv__role-header">
          <div>
            <div class="ats-cv__role-title">
              Earlier experience
            </div>
            <div class="ats-cv__company">
              LogMeIn, Virgo Systems, Sense/Net Inc, Docler Holding, Consulting Ltd.
            </div>
          </div>
          <div class="ats-cv__date">
            2006 - 2013
          </div>
        </div>
      </article>
    </section>

    <section class="ats-cv__section">
      <h2 class="ats-cv__section-title">
        Finance and AI Product Builds
      </h2>
      <article class="ats-cv__role">
        <div class="ats-cv__role-header">
          <div class="ats-cv__role-title">
            moduLedger (MONAD SYSTEMS) - ERP and FinOps platform
          </div>
          <div class="ats-cv__date">
            2024 - Present
          </div>
        </div>
        <ul class="ats-cv__bullets">
          <li>Architect and principal engineer of 24 capability modules across ledger, contract billing, timesheets, procurement, payments, bank reconciliation, and tax, with approval trails and tamper-evident audit logs.</li>
          <li>Spec-first Fastify services generating OpenAPI and AsyncAPI clients, PostgreSQL with row-level security, NATS, and Keycloak; e-invoicing integrations with Szamlazz.hu, Billingo, and an in-house NAV Online Szamla adapter verified against the Hungarian tax authority's test environment. 400+ merged pull requests over two years.</li>
        </ul>
      </article>
      <article class="ats-cv__role">
        <div class="ats-cv__role-header">
          <div class="ats-cv__role-title">
            Software Factory (MONAD SYSTEMS) - governed LLM agent platform
          </div>
          <div class="ats-cv__date">
            2026 - Present
          </div>
        </div>
        <ul class="ats-cv__bullets">
          <li>Built an agent-based platform that turns a task note into a reviewed pull request against production repositories: Fastify and TypeScript services, PostgreSQL with Kysely, and a React operator UI.</li>
          <li>All model traffic crosses a fail-closed PII service - deterministic Hungarian and English recognizers, reversible tokenization, hash-chained egress audit - so no un-redacted data leaves the boundary; spend ceilings and dashboards for review pass rate and change-failure rate.</li>
        </ul>
      </article>
    </section>

    <section class="ats-cv__section">
      <h2 class="ats-cv__section-title">
        Skills
      </h2>
      <ul class="ats-cv__skills">
        <li>Backend: Node.js, TypeScript, JavaScript, Fastify, AJV, REST APIs, OpenAPI, AsyncAPI, Vitest, Jest</li>
        <li>Data: PostgreSQL (row-level security, Kysely), Redis, MongoDB, Azure AI Search</li>
        <li>Messaging: Kafka, IBM MQ, NATS</li>
        <li>Cloud / DevOps: AWS, Azure, Oracle Cloud, Docker, Kubernetes, Terraform, ArgoCD, GitOps</li>
        <li>Applied AI: LLM orchestration, model routing and spend governance, PII redaction and DLP boundaries</li>
        <li>Finance domain: double-entry ledger, AP automation, payments, bank reconciliation, e-invoicing, audit trails</li>
      </ul>
    </section>

    <section class="ats-cv__section">
      <h2 class="ats-cv__section-title">
        Education
      </h2>
      <p>
        B.Sc. in Business Information Systems, Corvinus University of Budapest, 2007 - 2010
      </p>
    </section>
  </main>
</template>

<script>
const pageTitle = 'Ferenc Sticza | Backend Engineer CV'
const pageDescription = 'Backend Engineer CV for Ferenc Sticza - Node.js, TypeScript, and PostgreSQL services for banking, insurance, and finance-operations products, with governed LLM pipelines for sensitive data.'

export default {
  layout: 'cv',
  head() {
    return {
      title: pageTitle,
      meta: [
        { hid: 'description', name: 'description', content: pageDescription },
        { hid: 'og:title', property: 'og:title', content: pageTitle },
        { hid: 'og:description', property: 'og:description', content: pageDescription }
      ]
    }
  }
}
</script>

<style lang="scss" src="~/assets/scss/pages/cv-ats.scss"></style>

<style lang="scss">
@media print {
  // Keep a section heading on the same page as its first entry.
  .ats-cv--backend .ats-cv__section-title {
    break-after: avoid;
    page-break-after: avoid;
  }

  // The multi-client role is too long to move whole; let it break between
  // clients instead of leaving half of page one empty.
  .ats-cv--backend .ats-cv__role--multi {
    break-inside: auto;
    page-break-inside: auto;
  }

  .ats-cv--backend .ats-cv__role--multi li,
  .ats-cv--backend .ats-cv__role--multi .ats-cv__role-header {
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
</style>
