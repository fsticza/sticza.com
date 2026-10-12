<template>
  <main class="ats-cv ats-cv--fde">
    <header class="ats-cv__header">
      <h1 class="ats-cv__name">
        Ferenc Sticza
      </h1>
      <p class="ats-cv__title">
        Forward Deployed Engineer | Full-Stack TypeScript, Integrations &amp; Applied AI
      </p>
      <p class="ats-cv__summary">
        Hands-on engineer with 20+ years of delivery, the last nine of them embedded inside client organizations - a banking group, an insurance comparison platform, a regulated bank, and the Hungarian public sector - taking loosely defined business problems to software running in production.
      </p>
      <p class="ats-cv__summary">
        I work inside the customer's constraints: their cloud, their message brokers, their partners' APIs, their compliance rules. I own the outcome end to end - discovery and scoping, architecture, frontend and backend implementation, rollout - and I can explain the trade-offs to both the engineers and the leadership who sign off on them.
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
        Forward Deployed Highlights
      </h2>
      <ul class="ats-cv__highlights">
        <li>Embedded with client teams since 2017 across regulated banking (Magyar Bankholding), OTP Group (Fizz), insurance (Netrisk), and national public-sector systems (IdomSoft), often in multi-year engagements.</li>
        <li>Shipped production systems on whatever the customer runs: Azure, Oracle Cloud, and AWS; Kafka and IBM MQ; Kubernetes with GitOps.</li>
        <li>Integration-heavy delivery: Kafka-based real-time integration with multiple insurance partners, event-driven banking integration, and e-invoicing adapters including one verified against the Hungarian tax authority's NAV Online Szamla test environment.</li>
        <li>Outcomes the customer measured: several hundred thousand USD in annual savings from search modernization, CI feedback cut from roughly 1 hour to about 6 minutes, and the Hungarian election system re-architected to handle millions of requests per day.</li>
        <li>Applied AI with governance built in: an LLM agent platform where every model call crosses a fail-closed PII boundary, with an egress audit trail and per-project spend ceilings.</li>
        <li>Trusted at the leadership level: ran the CTO search for Netrisk - interviewed candidates, selected the hire, and coached them into the role.</li>
      </ul>
    </section>

    <section class="ats-cv__section">
      <h2 class="ats-cv__section-title">
        Client Deployments
      </h2>
      <article class="ats-cv__role">
        <div class="ats-cv__role-header">
          <div class="ats-cv__role-title">
            Fizz (OTP Group) - Principal Engineer, embedded
          </div>
          <div class="ats-cv__date">
            2022 - 2026
          </div>
        </div>
        <ul class="ats-cv__bullets">
          <li>Problem: a slow and flaky third-party search provider, unclear service boundaries, and an hour-long path from commit to the development environment. Replaced the search provider with an Azure AI Search implementation behind an adapter pattern - major speed gains and several hundred thousand USD in annual savings - and led the microservice platform redesign around observability and API design-first governance.</li>
          <li>Cut CI feedback to the development environment from roughly 1 hour to about 6 minutes; stood up new feature teams and the platform team to carry the work forward.</li>
        </ul>
      </article>
      <article class="ats-cv__role">
        <div class="ats-cv__role-header">
          <div class="ats-cv__role-title">
            IdomSoft - Hungarian election system
          </div>
          <div class="ats-cv__date">
            2023 - 2026
          </div>
        </div>
        <ul class="ats-cv__bullets">
          <li>Problem: a national public-sector system (the former Electoral Information System) that had to stay reliable under sustained high request volumes. Redesigned the architecture and implemented the full frontend on the client's Oracle Cloud and Kubernetes/GitOps stack; the system now handles millions of requests per day without operational glitches.</li>
        </ul>
      </article>
      <article class="ats-cv__role">
        <div class="ats-cv__role-header">
          <div class="ats-cv__role-title">
            Netrisk - Lead Architect &amp; Principal Engineer
          </div>
          <div class="ats-cv__date">
            2023 - 2025
          </div>
        </div>
        <ul class="ats-cv__bullets">
          <li>Problem: integrations with insurance providers needed reliable asynchronous communication and a backend that new partners could plug into. Designed and led implementation of a Kafka-based event-driven insurance platform on Azure with GitOps delivery, enabling robust real-time integration with multiple insurance partners.</li>
          <li>Ran the client's CTO search and coached the selected CTO into the role.</li>
        </ul>
      </article>
      <article class="ats-cv__role">
        <div class="ats-cv__role-header">
          <div class="ats-cv__role-title">
            Magyar Bankholding - Full-Stack Engineer, embedded
          </div>
          <div class="ats-cv__date">
            2021 - 2022
          </div>
        </div>
        <ul class="ats-cv__bullets">
          <li>Problem: teams in a regulated banking environment needed a consistent way to define APIs and bootstrap new services quickly. Introduced API spec-driven development (OpenAPI, AsyncAPI) over Kafka and IBM MQ, and helped build Internal Developer Platform foundations with service templates and internal packages - improving delivery consistency and service start-up time across teams.</li>
        </ul>
      </article>
    </section>

    <section class="ats-cv__section">
      <h2 class="ats-cv__section-title">
        Applied AI &amp; Product Builds
      </h2>
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
          <li>Built an agent-based platform that turns a task note into a reviewed pull request against production repositories; human review is a hard gate.</li>
          <li>All model traffic crosses a fail-closed PII service - deterministic Hungarian and English recognizers, reversible per-run tokenization, hash-chained egress audit - with per-project spend ceilings and a pinned no-training provider allowlist.</li>
          <li>Instrumented review-gate pass rate and change-failure rate so agent-assisted throughput is judged on evidence (TypeScript, Fastify, PostgreSQL, React, Kubernetes, OpenRouter).</li>
        </ul>
      </article>
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
          <li>Mapped the contract-to-cash workflow that Hungarian service SMEs and government suppliers run by hand - contracts, timesheets, certificates of performance, billing - and turned it into 24 capability modules with approval trails and tamper-evident audit logs.</li>
          <li>Spec-first Fastify services with generated OpenAPI and AsyncAPI clients, PostgreSQL with row-level security, and e-invoicing integrations (Szamlazz.hu, Billingo, and an in-house NAV Online Szamla adapter verified against the NAV test environment); 400+ merged pull requests over two years.</li>
        </ul>
      </article>
    </section>

    <section class="ats-cv__section">
      <h2 class="ats-cv__section-title">
        Experience
      </h2>

      <article class="ats-cv__role">
        <div class="ats-cv__role-header">
          <div>
            <div class="ats-cv__role-title">
              Founder &amp; Principal Engineer (client-embedded delivery)
            </div>
            <div class="ats-cv__company">
              MONAD SYSTEMS
            </div>
          </div>
          <div class="ats-cv__date">
            May 2021 - Present
          </div>
        </div>
        <ul class="ats-cv__bullets">
          <li>Work embedded in client engineering organizations, turning business problems into shipped systems: platform redesigns, partner integrations, high-traffic public services, and search modernization.</li>
          <li>Own engagements end to end - scoping with stakeholders, architecture, hands-on frontend and backend implementation, CI/CD and observability, and enablement of the client's own teams.</li>
          <li>Build reusable foundations the client keeps after the engagement: spec-first API templates, internal developer platform pieces, and delivery quality gates.</li>
        </ul>
      </article>

      <article class="ats-cv__role">
        <div class="ats-cv__role-header">
          <div>
            <div class="ats-cv__role-title">
              Independent Engineering Consultant
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
          <li>Delivered backend services, APIs, web and mobile applications across multiple production client engagements, advising startups and product teams on architecture while staying hands-on in their codebases.</li>
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
        <p class="ats-cv__meta">
          Node.js, Vue.js, Backbone.js, Webpack, Redis, MongoDB, AWS
        </p>
        <ul class="ats-cv__bullets">
          <li>Led the 12-engineer JavaScript division delivering social and e-commerce products, staying hands-on across Node.js services, frontend frameworks, and AWS infrastructure; reformed recruitment and built a company-wide mentoring network.</li>
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
        <ul class="ats-cv__bullets">
          <li>Frontend and web application engineering across product (LogMeIn BoldChat), social, portal, and utility-sector client systems.</li>
        </ul>
      </article>
    </section>

    <section class="ats-cv__section">
      <h2 class="ats-cv__section-title">
        Skills
      </h2>
      <ul class="ats-cv__skills">
        <li>Customer-facing: problem discovery and scoping, translating business workflows into systems, stakeholder communication from engineers to leadership, enabling and mentoring client teams</li>
        <li>Applied AI: LLM orchestration, agentic workflows, model routing and spend governance, PII redaction and DLP boundaries, quality gates for AI-authored code</li>
        <li>Integration: Kafka, IBM MQ, NATS, OpenAPI, AsyncAPI, REST APIs, partner and e-invoicing integrations, adapter-based provider replacement</li>
        <li>Full-stack: TypeScript, JavaScript, Node.js, Fastify, AJV, React, Vue.js, React Native</li>
        <li>Cloud / DevOps: Docker, Kubernetes, Terraform, ArgoCD, GitOps, Azure, Oracle Cloud, AWS</li>
        <li>Data: PostgreSQL (row-level security), MongoDB, Redis, Azure AI Search</li>
        <li>Domains: banking, insurance, public sector, ERP and FinOps</li>
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
const pageTitle = 'Ferenc Sticza | Forward Deployed Engineer CV'
const pageDescription = 'Forward Deployed Engineer CV for Ferenc Sticza - customer-embedded full-stack TypeScript delivery, integrations, and governed applied AI across banking, insurance, and public-sector clients.'

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
  .ats-cv--fde .ats-cv__section-title {
    break-after: avoid;
    page-break-after: avoid;
  }
}
</style>
