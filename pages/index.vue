<template>
  <main class="homepage">
    <section class="hero-section">
      <div class="container">
        <div class="hero-card row align-items-center">
          <div class="col-lg-8">
            <p class="eyebrow">
              Open to Staff+ engineering roles
            </p>
            <h1 class="hero-title">
              {{ profile.name }}
            </h1>
            <p class="hero-role">
              {{ profile.title }}
            </p>
            <div class="hero-summary">
              <p
                v-for="line in profile.summary"
                :key="line"
              >
                {{ line }}
              </p>
            </div>
            <p class="hero-highlight">
              {{ profile.highlight }}
            </p>
            <div class="hero-proof-grid">
              <article
                v-for="proof in proofPoints"
                :key="proof.label"
                class="hero-proof-card"
              >
                <p class="hero-proof-value">
                  {{ proof.value }}
                </p>
                <p class="hero-proof-label mb-0">
                  {{ proof.label }}
                </p>
              </article>
            </div>
            <div class="hero-cta">
              <a
                class="btn btn-dark btn-lg mr-3 mb-3"
                href="#projects"
              >
                See impact stories
              </a>
              <a
                class="btn btn-outline-dark btn-lg mb-3"
                href="mailto:ferenc@sticza.com"
              >
                Email me directly
              </a>
            </div>
            <p class="availability-note mb-0">
              Based in Hungary, working CET / CEST, and open to backend, platform, or full-stack Staff+ IC roles.
            </p>
          </div>
          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="hero-profile-card">
              <dl class="hero-facts mb-0">
                <div
                  v-for="fact in heroFacts"
                  :key="fact.label"
                  class="hero-fact"
                >
                  <dt>{{ fact.label }}</dt>
                  <dd>{{ fact.value }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container page-sections">
      <section
        id="experience"
        class="content-section"
      >
        <div class="section-heading">
          <p class="section-kicker">
            Professional Experience
          </p>
          <h2 class="section-title">
            Experience shaped by consulting, product delivery, and architecture work
          </h2>
        </div>
        <div class="timeline">
          <article
            v-for="entry in featuredExperience"
            :key="`${entry.company}-${entry.dateRange}`"
            class="experience-card surface-card"
          >
            <div class="experience-header">
              <div>
                <h3 class="experience-title">
                  {{ entry.jobTitle }}
                </h3>
                <p class="experience-company mb-2">
                  {{ entry.company }}
                </p>
              </div>
              <p class="experience-date mb-0">
                {{ entry.dateRange }}
              </p>
            </div>
            <p class="experience-summary">
              {{ entry.summary }}
            </p>
            <p
              v-if="!entry.compact"
              class="stack-label"
            >
              Core stack: {{ entry.stack.join(', ') }}
            </p>
            <ul
              v-if="!entry.compact"
              class="achievement-list"
            >
              <li
                v-for="bullet in entry.achievements"
                :key="bullet"
              >
                {{ bullet }}
              </li>
            </ul>
          </article>
        </div>
        <div
          v-if="earlierExperience.length"
          class="earlier-experience"
        >
          <p class="section-kicker mb-3">
            Earlier Experience
          </p>
          <div class="row">
            <div
              v-for="entry in earlierExperience"
              :key="`${entry.company}-${entry.dateRange}`"
              class="col-md-6 col-xl-3 mb-3"
            >
              <article class="surface-card experience-card experience-card--compact h-100">
                <div class="experience-header experience-header--compact">
                  <div>
                    <h3 class="experience-title mb-1">
                      {{ entry.jobTitle }}
                    </h3>
                    <p class="experience-company mb-2">
                      {{ entry.company }}
                    </p>
                  </div>
                  <p class="experience-date mb-0">
                    {{ entry.dateRange }}
                  </p>
                </div>
                <p class="experience-summary mb-0">
                  {{ entry.summary }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="education"
        class="content-section education-section"
      >
        <article class="surface-card education-card">
          <p class="section-kicker">
            Education
          </p>
          <h3 class="group-title">
            Corvinus University of Budapest
          </h3>
          <p class="section-note mb-0">
            B.Sc. in Business Information Systems, 2007 - 2010
          </p>
        </article>
      </section>

      <section
        id="projects"
        class="content-section"
      >
        <div class="section-heading">
          <p class="section-kicker">
            Selected Projects
          </p>
          <h2 class="section-title">
            Recent platform, architecture, and delivery work
          </h2>
        </div>
        <div class="row">
          <div
            v-for="project in projects"
            :key="project.name"
            class="col-lg-6 mb-4"
          >
            <article class="surface-card project-card h-100">
              <div class="project-meta">
                <p class="project-period mb-2">
                  {{ project.dateRange }}
                </p>
                <h3 class="project-title">
                  {{ project.name }}
                </h3>
              </div>
              <p class="project-description">
                {{ project.description }}
              </p>
              <p class="project-detail">
                <strong>Role:</strong> {{ project.role }}
              </p>
              <p class="project-detail">
                <strong>Tech stack:</strong> {{ project.stack.join(', ') }}
              </p>
              <p class="project-detail">
                <strong>Impact / outcome:</strong> {{ project.impact }}
              </p>
              <ul
                v-if="project.highlights"
                class="achievement-list project-highlights"
              >
                <li
                  v-for="highlight in project.highlights"
                  :key="highlight"
                >
                  {{ highlight }}
                </li>
              </ul>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                Visit project site
              </a>
            </article>
          </div>
        </div>
      </section>

      <section
        id="skills"
        class="content-section skills-section"
      >
        <div class="section-heading">
          <p class="section-kicker">
            Skills
          </p>
          <h2 class="section-title">
            Technical strengths across backend, product delivery, and platform work
          </h2>
        </div>
        <div class="row">
          <div
            v-for="group in skillGroups"
            :key="group.title"
            class="col-sm-6 col-xl-3 mb-3"
          >
            <article class="surface-card skill-card h-100">
              <h3 class="group-title">
                {{ group.title }}
              </h3>
              <ul class="chip-list chip-list--compact">
                <li
                  v-for="item in group.items"
                  :key="item"
                  class="chip chip--compact"
                >
                  {{ item }}
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section
        id="contact"
        class="content-section"
      >
        <div class="section-heading">
          <p class="section-kicker">
            Contact
          </p>
          <h2 class="section-title">
            Let&apos;s talk
          </h2>
        </div>
        <div class="row">
          <div
            v-for="item in contact"
            :key="item.label"
            class="col-md-6 col-xl-4 mb-4"
          >
            <article class="surface-card contact-card h-100">
              <p class="contact-label">
                {{ item.label }}
              </p>
              <a
                v-if="item.href"
                :href="item.href"
                :target="item.external ? '_blank' : null"
                :rel="item.external ? 'noopener noreferrer' : null"
                class="contact-value"
              >
                {{ item.value }}
              </a>
              <p
                v-else
                class="contact-value contact-value--text"
              >
                {{ item.value }}
              </p>
            </article>
          </div>
        </div>
        <div class="cta-panel">
          <p class="cta-title">
            Available for backend, platform, or full-stack roles
          </p>
          <p class="cta-copy">
            Best fit: Staff+ IC roles where architecture, hands-on implementation, and product impact stay close together.
          </p>
          <a
            class="btn btn-dark"
            href="mailto:ferenc@sticza.com"
          >
            Start a conversation
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
const pageTitle = 'Ferenc Sticza | Principal / Staff Software Engineer'
const pageDescription = 'Principal / Staff software engineer focused on platform, backend, and TypeScript systems, with 20+ years of delivery, several hundred thousand USD in annual savings, CI feedback cut from about 1 hour to 6 minutes, and systems built for millions of requests per day.'

const profile = {
  name: 'Ferenc Sticza',
  title: 'Principal / Staff Software Engineer | Platform, Backend, TypeScript',
  summary: [
    'Hands-on principal/staff-level engineer with 20+ years building backend systems, product platforms, and distributed services.',
    'Strongest where platform redesign, delivery speed, reliability, and implementation depth all need to move together.'
  ],
  highlight: 'Recent outcomes include full-platform microservice redesign, USD 100Ks+ in annual savings from search modernization, CI feedback reduced from roughly 1 hour to 6 minutes, and public-sector systems reworked to handle millions of requests per day reliably.'
}

const heroFacts = [
  { label: 'Experience', value: '20+ years' },
  { label: 'Base', value: 'Hungary (CET / CEST)' },
  { label: 'Best fit', value: 'Staff / Principal IC roles with architecture and implementation close together' },
  { label: 'Primary stack', value: 'JavaScript, TypeScript, Node.js' },
  { label: 'Focus areas', value: 'Platform engineering, backend systems, distributed architecture' }
]

const proofPoints = [
  { value: 'End-to-end', label: 'Redesigned microservice platforms across architecture, delivery, and observability' },
  { value: '1h -> 6m', label: 'CI feedback time cut to the development environment' },
  { value: 'Millions/day', label: 'Public systems reworked for reliable high-volume traffic' }
]

const skillGroups = [
  {
    title: 'Backend',
    items: ['JavaScript', 'TypeScript', 'Node.js', 'Fastify', 'AJV']
  },
  {
    title: 'Frontend',
    items: ['React', 'Vue.js', 'React Native', 'HTML5', 'CSS3']
  },
  {
    title: 'Cloud / DevOps',
    items: ['Docker', 'Kubernetes', 'Terraform', 'ArgoCD', 'GitOps', 'Azure', 'AWS', 'Oracle Cloud']
  },
  {
    title: 'Messaging / APIs',
    items: ['Kafka', 'IBMMQ', 'OpenAPI', 'AsyncAPI', 'REST APIs']
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'Tools / Practices',
    items: ['Git', 'Vitest', 'Architecture consulting', 'Technical mentoring']
  },
  {
    title: 'Technical leadership',
    items: ['Hands-on technical leadership', 'System design', 'Platform modernization', 'Reliability and observability', 'Spec-first API delivery', 'Cross-team engineering enablement']
  }
]

const experience = [
  {
    jobTitle: 'Principal Engineer & Product Architect',
    company: 'MONAD SYSTEMS',
    dateRange: 'May 2021 - Present',
    summary: 'Hands-on principal engineering work across platform redesign, API-first delivery, event-driven systems, and production operations.',
    stack: ['Node.js', 'TypeScript', 'Kafka', 'OpenAPI', 'AsyncAPI', 'React', 'Vue.js', 'Docker', 'Kubernetes'],
    achievements: [
      'Led platform redesign and implementation across clear microservice boundaries, event-driven integration, and production-grade delivery standards.',
      'Introduced API design-first governance, observability, and quality gates, cutting CI time to the development environment from roughly 1 hour to about 6 minutes.',
      'At Fizz, redesigned the wider microservice platform and modernized search behind an adapter pattern, delivering major speed gains and annual savings of several hundred thousand USD.'
    ]
  },
  {
    jobTitle: 'Full Stack JavaScript Engineer',
    company: 'Self-employed',
    dateRange: 'Jul 2017 - May 2021',
    summary: 'Independent JavaScript/TypeScript consulting across backend services, web apps, modernization work, and technical delivery.',
    stack: ['JavaScript', 'TypeScript', 'Node.js', 'React', 'Vue.js', 'APIs'],
    achievements: [
      'Delivered backend services, APIs, and web applications across multiple production client engagements.',
      'Worked hands-on with Node.js, Redis, Kafka, MongoDB, OpenAPI, React, Vue.js, and React Native.',
      'Combined implementation, modernization, and technical leadership while staying close to delivery.'
    ]
  },
  {
    jobTitle: 'Lead Full Stack JavaScript Developer',
    company: 'Virgo Systems',
    dateRange: 'Sep 2013 - Jun 2017',
    summary: 'Lead full-stack JavaScript delivery for social and e-commerce products.',
    stack: ['Node.js', 'Vue.js', 'Backbone.js', 'Webpack', 'Redis', 'MongoDB', 'Git'],
    achievements: [
      'Led JavaScript delivery for social and e-commerce applications.',
      'Combined architecture work with hands-on implementation and team mentoring.',
      'Worked across Node.js services, frontend frameworks, and supporting build tooling.'
    ]
  },
  {
    jobTitle: 'Software Engineer',
    company: 'LogMeIn',
    dateRange: 'Jan 2013 - Aug 2013',
    summary: 'Improved front-end code quality, performance, and user experience for BoldChat.',
    stack: ['JavaScript', 'YUI', 'jQuery', 'HTML5', 'CSS3', 'Git', 'SVN'],
    achievements: [
      'Improved front-end code quality for BoldChat.',
      'Worked on performance and user experience improvements in a product engineering environment.',
      'Delivered JavaScript, HTML5, and CSS3 changes using YUI, jQuery, Git, and SVN.'
    ]
  },
  {
    jobTitle: 'Senior Frontend Developer',
    company: 'Virgo Systems',
    dateRange: 'May 2010 - Dec 2012',
    summary: 'Senior frontend development role at Virgo Systems.',
    stack: ['JavaScript', 'jQuery', 'prototype.js', 'JSP', 'XHTML', 'CSS', 'SVN'],
    compact: true,
    achievements: [
      'Delivered frontend development for iwiw.hu social networking service web applications.',
      'Worked with JSP, XHTML, CSS, JavaScript, jQuery, and prototype.js.',
      'Took on senior frontend responsibilities within Virgo Systems.'
    ]
  },
  {
    jobTitle: 'Portal Builder',
    company: 'Sense/Net Inc',
    dateRange: 'Feb 2010 - May 2010',
    summary: 'Portal builder role at Sense/Net Inc.',
    stack: ['XSLT', 'XHTML', 'CSS', 'C#', 'jQuery', 'SVN'],
    compact: true,
    achievements: [
      'Delivered front-end development for portals including Tigaz, Tigaz DSO, and Fovarosi Gazmuvek Ltd.',
      'Worked with XSLT, XHTML, CSS, C#, jQuery, and SVN.',
      'Contributed to portal implementation work in an enterprise context.'
    ]
  },
  {
    jobTitle: 'Sitebuilder',
    company: 'Docler Holding',
    dateRange: 'Dec 2008 - Feb 2010',
    summary: 'Sitebuilder role at Docler Holding.',
    stack: ['XHTML', 'CSS', 'PHP', 'jQuery', 'SVN'],
    compact: true,
    achievements: [
      'Delivered client-side development for docler.hu social- and video-sharing portal.',
      'Worked with XHTML, CSS, PHP, jQuery, and SVN.',
      'Contributed to portal UI implementation and site-building work.'
    ]
  },
  {
    jobTitle: 'Web Developer',
    company: 'Consulting Ltd.',
    dateRange: 'Sep 2006 - Dec 2008',
    summary: 'Built online PHP-based systems for apartment buildings managing monthly settlement workflows with Fotav.',
    stack: ['PHP'],
    compact: true,
    achievements: [
      'Built online PHP-based systems for apartment buildings.',
      'Supported monthly reporting and settlement workflows connected to Fotav.',
      'Delivered web application functionality for a real operational business process.'
    ]
  }
]

const projects = [
  {
    name: 'IdomSoft',
    dateRange: '2023 - 2026',
    description: 'Platform engineering and architecture consulting focused on cloud-native delivery and operational foundations.',
    stack: ['Oracle Cloud', 'Kubernetes', 'GitOps', 'ArgoCD', 'Helm', 'Terraform', 'Node.js', 'TypeScript', 'React'],
    role: 'Platform Engineering & Architecture Consultant',
    impact: 'Redesigned and reimplemented the former Electoral Information System while strengthening cloud-native platform foundations for high-volume, reliable public service delivery.',
    highlights: [
      'Problem: the former Electoral Information System needed stronger reliability and scalability to handle sustained high request volumes.',
      'Approach: redesigned and reimplemented the platform architecture while shaping cloud infrastructure and operational practices.',
      'Outcome: enabled the system to reliably handle millions of requests per day without operational glitches.'
    ],
    link: 'https://idomsoft.hu/'
  },
  {
    name: 'Fizz',
    dateRange: '2022 - 2026',
    description: 'Hands-on principal engineering contribution across platform redesign, microservice architecture, team enablement, and implementation for a high-performance product platform.',
    stack: ['Node.js', 'Kafka', 'PostgreSQL', 'MongoDB', 'Redis', 'TypeScript', 'React', 'Azure', 'Azure AI Search', 'Kubernetes', 'OpenAPI', 'AsyncAPI'],
    role: 'Principal Engineer (Platform Engineering & Architecture)',
    impact: 'Redesigned the full microservice platform, including the search capability, to improve service boundaries, observability, delivery confidence, performance, cost efficiency, and provider flexibility.',
    highlights: [
      'Problem: the platform needed clearer service boundaries across all microservices, stronger operational visibility, reliable delivery gates, and a faster, less costly search capability.',
      'Approach: redesigned and led implementation of the new microservice platform around clear service boundaries, production observability, API design-first governance, and CI quality gates.',
      'Search outcome: replaced a slow and flaky third-party provider with an Azure AI Search-based implementation behind an adapter pattern, delivering major speed improvements and annual savings of several hundred thousand USD.',
      'Delivery outcome: reduced CI time to the development environment from roughly 1 hour to about 6 minutes, making iteration substantially faster.'
    ],
    link: 'https://fizz.hu/'
  },
  {
    name: 'Netrisk',
    dateRange: '2023 - 2025',
    description: 'Led design and implementation of a modern event-driven insurance platform on Azure, focused on reliability, extensibility, and partner integrations.',
    stack: ['Node.js', 'TypeScript', 'Kafka', 'Azure', 'GitOps', 'Docker', 'Kubernetes', 'OpenAPI', 'Fastify'],
    role: 'Lead Architect & Principal Engineer',
    impact: 'Designed a scalable event-driven insurance platform with reliable partner integration and cloud-native delivery foundations.',
    highlights: [
      'Problem: insurance provider integrations needed reliable asynchronous communication and extensible backend foundations.',
      'Approach: designed Kafka-based event-driven architecture, GitOps-oriented Azure deployment workflows, and scalable Node.js services.',
      'Outcome: enabled robust real-time communication and integration with multiple insurance partners.'
    ],
    link: 'https://www.netrisk.hu/'
  },
  {
    name: 'Magyar Bankholding',
    dateRange: '2021 - 2022',
    description: 'Full-stack engineering in a regulated environment with event-driven integration, API contracts, and cloud deployment concerns.',
    stack: ['Node.js', 'Fastify', 'Kafka', 'IBMMQ', 'Jest', 'AsyncAPI', 'OpenAPI', 'TypeScript', 'Kubernetes', 'Azure', 'AWS'],
    role: 'Full-Stack JavaScript Engineer',
    impact: 'Pioneered API spec-driven development and helped establish Internal Developer Platform foundations to speed service delivery in a regulated banking environment.',
    highlights: [
      'Problem: teams needed a more consistent way to define APIs and bootstrap new services quickly in a regulated environment.',
      'Approach: introduced API spec-driven development and helped build Internal Developer Platform foundations with service templates and internally developed packages.',
      'Outcome: improved delivery consistency and faster service initialization across teams.'
    ],
    link: 'https://www.magyarbankholding.hu/en'
  }
]

const contact = [
  {
    label: 'Email',
    value: 'ferenc@sticza.com',
    href: 'mailto:ferenc@sticza.com'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ferenc-sticza-ab9a1814',
    href: 'https://www.linkedin.com/in/ferenc-sticza-ab9a1814/',
    external: true
  },
  {
    label: 'GitHub',
    value: 'github.com/fsticza',
    href: 'https://github.com/fsticza',
    external: true
  },
  {
    label: 'Phone',
    value: '+36/30-636-0775',
    href: 'tel:+36306360775'
  },
  {
    label: 'Location / time zone',
    value: 'Gödöllő, Pest, Hungary (CET / CEST)'
  },
  {
    label: 'PDF CV',
    value: 'Download PDF CV',
    href: '/Ferenc-Sticza-CV.pdf'
  },
  {
    label: 'ATS PDF CV',
    value: 'Download ATS-friendly PDF CV',
    href: '/Ferenc-Sticza-ATS-CV.pdf'
  }
]

export default {
  data() {
    return {
      profile,
      heroFacts,
      proofPoints,
      skillGroups,
      experience,
      projects,
      contact
    }
  },
  head() {
    return {
      title: pageTitle,
      meta: [
        { hid: 'description', name: 'description', content: pageDescription },
        { hid: 'og:title', property: 'og:title', content: pageTitle },
        { hid: 'og:description', property: 'og:description', content: pageDescription },
        { hid: 'og:url', property: 'og:url', content: 'https://sticza.com' }
      ]
    }
  },
  computed: {
    featuredExperience() {
      return this.experience.filter(entry => !entry.compact)
    },
    earlierExperience() {
      return this.experience.filter(entry => entry.compact)
    }
  }
}
</script>

<style lang="scss" src="~/assets/scss/pages/index.scss"></style>
