<template>
  <div class="index">
    <section class="section section--header section--bordered vcard">
      <div class="container">
        <div class="row align-items-center text-center">
          <div class="col-sm-6 text-md-left">
            <h1 class="section__title mb-1">
              Ferenc Sticza
            </h1>
            <h2 class="h4 mb-2">
              Full-Stack JavaScript Engineer
            </h2>
          </div>
          <div class="col-sm-6 my-2 text-md-right">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <a
                  class="btn btn-sm btn-outline-dark"
                  href="tel:+36306360775"
                >
                  &#9742; Call me
                </a>
                <a
                  class="btn btn-sm btn-outline-dark"
                  href="mailto:ferenc@sticza.com"
                >
                  @ E-mail me
                </a>
              </div>
              <div class="col-lg-6 mb-lg-3">
                <a
                  class="d-inline-block mt-3 mr-3 mb-0 ml-3 ml-md-0"
                  href="https://github.com/fsticza"
                  rel="noopener"
                  target="_blank"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>Github</title>
                    <path
                      fill="currentColor"
                      d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"
                    />
                  </svg>
                </a>
                <a
                  class="d-inline-block mt-3 mr-3 mb-0 ml-3"
                  href="https://www.linkedin.com/in/ferenc-sticza-ab9a1814/"
                  rel="noopener"
                  target="_blank"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>LinkedIn</title>
                    <path
                      fill="currentColor"
                      d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"
                    />
                  </svg>
                </a>
                <a
                  class="d-inline-block mt-3 mr-3 mb-0 ml-3 mr-md-0"
                  href="/"
                  target="_blank"
                  @click.prevent="onPDFClick"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>Print preview</title>
                    <path
                      fill="currentColor"
                      d="M26.313 18.421c-0.427-0.42-1.372-0.643-2.812-0.662-0.974-0.011-2.147 0.075-3.38 0.248-0.552-0.319-1.122-0.665-1.568-1.083-1.202-1.122-2.205-2.68-2.831-4.394 0.041-0.16 0.075-0.301 0.108-0.444 0 0 0.677-3.846 0.498-5.146-0.025-0.178-0.040-0.23-0.088-0.369l-0.059-0.151c-0.184-0.425-0.545-0.875-1.111-0.85l-0.341-0.011c-0.631 0-1.146 0.323-1.281 0.805-0.411 1.514 0.013 3.778 0.781 6.711l-0.197 0.478c-0.55 1.34-1.238 2.689-1.846 3.88l-0.079 0.155c-0.639 1.251-1.22 2.313-1.745 3.213l-0.543 0.287c-0.040 0.021-0.97 0.513-1.188 0.645-1.852 1.106-3.079 2.361-3.282 3.357-0.065 0.318-0.017 0.725 0.313 0.913l0.525 0.264c0.228 0.114 0.468 0.172 0.714 0.172 1.319 0 2.85-1.643 4.959-5.324 2.435-0.793 5.208-1.452 7.638-1.815 1.852 1.043 4.129 1.767 5.567 1.767 0.255 0 0.475-0.024 0.654-0.072 0.276-0.073 0.508-0.23 0.65-0.444 0.279-0.42 0.335-0.998 0.26-1.59-0.023-0.176-0.163-0.393-0.315-0.541zM6.614 25.439c0.241-0.658 1.192-1.958 2.6-3.111 0.088-0.072 0.306-0.276 0.506-0.466-1.472 2.348-2.458 3.283-3.106 3.577zM14.951 6.24c0.424 0 0.665 1.069 0.685 2.070s-0.214 1.705-0.505 2.225c-0.241-0.77-0.357-1.984-0.357-2.778 0 0-0.018-1.517 0.177-1.517v0zM12.464 19.922c0.295-0.529 0.603-1.086 0.917-1.677 0.765-1.447 1.249-2.58 1.609-3.511 0.716 1.303 1.608 2.41 2.656 3.297 0.131 0.111 0.269 0.222 0.415 0.333-2.132 0.422-3.974 0.935-5.596 1.558v0zM25.903 19.802c-0.13 0.081-0.502 0.128-0.741 0.128-0.772 0-1.727-0.353-3.066-0.927 0.515-0.038 0.986-0.057 1.409-0.057 0.774 0 1.004-0.003 1.761 0.19s0.767 0.585 0.637 0.667v0z"
                    />
                    <path
                      fill="currentColor"
                      d="M28.681 7.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378 0-2.5 1.121-2.5 2.5v27c0 1.378 1.121 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841v0zM24.543 5.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268v0zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-23c-0.271 0-0.5-0.229-0.5-0.5v-27c0-0.271 0.229-0.5 0.5-0.5 0 0 15.499-0 15.5 0v7c0 0.552 0.448 1 1 1h7v19.5z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-3">
      <section class="section section--bordered">
        <h1 class="section__title">
          About
        </h1>
        <p class="text-justify">
          Quality-driven and motivated Full-Stack JavaScript Engineer with 10+ years
          of extensive experience.
          Adept at leading, training, supervising and determined to achieve
          extraordinary results.
        </p>
        <p>
          Current preferred development stack: <br>
          Linux, Docker, Git, OpenAPI, Node.js, Webpack, React or Vue.js and CSS processors.
        </p>
      </section>

      <section class="section section--bordered">
        <h1 class="section__title">
          Experience
        </h1>

        <article-box
          src="logo-v2.svg"
          title="Freelance - Full-Stack JavaScript Engineer"
          from="NOV 2017"
          to="present"
        >
          <div>
            <strong>Technologies:</strong> Node.js, MongoDB, OpenAPI, Webpack, Git, Vue.js, React, HTML5, Bootstrap 4
          </div>
          <div>
            <strong>Role:</strong> Full-Stack JavaScript development, cross-platform
            desktop/mobile/web application development, knowledge sharing.
          </div>
          <div>
            <strong>Partners:</strong>
            <a
              class="btn btn-outline-light mb-1"
              href="https://www.staralliance.com/en/"
              rel="noopener"
              target="_blank"
            >
              Star Alliance
            </a>
            <a
              class="btn btn-outline-light mb-1"
              href="https://www.msci.com/"
              rel="noopener"
              target="_blank"
            >
              MSCI
            </a>
            <a
              class="btn btn-outline-light mb-1"
              href="https://www.ahrt.hu/en"
              rel="noopener"
              target="_blank"
            >
              Antenna Hungária Zrt.
            </a>
            <a
              class="btn btn-outline-light mb-1"
              href="https://www.idomsoft.hu/?lang=en"
              rel="noopener"
              target="_blank"
            >
              IdomSoft
            </a>
            <a
              class="btn btn-outline-light mb-1"
              href="https://servomovement.com/"
              rel="noopener"
              target="_blank"
            >
              Servo Movement
            </a>
          </div>
        </article-box>

        <article-box
          :is-odd="false"
          src="bene.jpg"
          title="Bene Studio - Full-Stack JavaScript Engineer"
          from="JUL 2017"
          to="SEP 2017"
          height="160"
          link="https://benestudio.co/"
        >
          <div>
            <strong>Technologies:</strong> Node.js, Webpack, React, React Native.
          </div>
          <div>
            <strong>Role:</strong> Back-End, Front-End and cross-platform native mobile application development.
          </div>
        </article-box>

        <article-box
          src="virgo.jpg"
          title="Virgo Systems - Lead Front-end & Full-Stack JavaScript Developer"
          from="SEP 2013"
          to="JUL 2017"
          height="140"
          link="https://systems.virgo.hu/"
        >
          <div>
            <strong>Technologies:</strong> Node.js, Webpack, Grunt, Vue.js, Backbone.js,
            jQuery, HTML5, SVG, CSS3 (LESS, SASS), various template engines, responsive design, Git, Redis, MongoDB
          </div>
          <div>
            <strong>Role:</strong> Leading front-end team, mentoring, creating web
            interface of API based social and e-commerce applications (expatconnect.com, eer.gov.hu, etc.).
          </div>
        </article-box>

        <article-box
          :is-odd="false"
          src="logmeinlogo.jpg"
          title="LogMeIn - Software Engineer"
          height="140"
          from="JAN 2013"
          to="SEP 2013"
          link="https://www.logmeininc.com/"
        >
          <div>
            <strong>Technologies:</strong> JSP, JavaScript (YUI, jQuery), HTML5, CSS3, SVN, Git
          </div>
          <div>
            <strong>Role:</strong> Improving front-end code quality, performance and UX of BoldChat.
          </div>
        </article-box>

        <article-box
          src="virgo.jpg"
          title="Virgo Systems - Front-end Developer"
          from="MAY 2010"
          to="DEC 2012"
          height="140"
          link="https://systems.virgo.hu/"
        >
          <div>
            <strong>Technologies:</strong> JSP, XHTML, CSS, JavaScript (jQuery, prototype.js), SVN
          </div>
          <div>
            <strong>Role:</strong> Front-end development of iwiw.hu social networking
            service and other Virgo related sites (klapp.hu, aranyoldalak.hu, ado.hu, etterem.hu, etc.).
          </div>
        </article-box>

        <article-box
          :is-odd="false"
          src="sensenet.png"
          title="Sense/Net Inc - Portal builder"
          from="FEB 2010"
          to="MAY 2010"
          height="140"
          link="https://www.sensenet.com/"
        >
          <div>
            <strong>Technologies:</strong> XSLT, XHTML, CSS, C#, jQuery, SVN
          </div>
          <div>
            <strong>Role:</strong> Front-end development of portals – e.g. Tigáz,
            Tigáz DSO, Fővárosi Gázművek Ltd.
          </div>
        </article-box>

        <article-box
          src="docler-holding.png"
          title="Docler Holding - Sitebuilder"
          from="DEC 2008"
          to="FEB 2010"
          link="https://www.doclerholding.com/en/main/"
        >
          <div>
            <strong>Technologies:</strong> XHTML, CSS, PHP, JavaScript (jQuery), SVN
          </div>
          <div>
            <strong>Role:</strong> Client side development of docler.hu – social-
            and video sharing portal as well as other other frequented sites in Docler Holding.
          </div>
        </article-box>
      </section>

      <section class="section section--bordered section--projects">
        <h1 class="section__title">
          Projects
        </h1>

        <article-box
          src="ps-logo.svg"
          title="Servo Movement - Head of Software Engineering"
          from="2019"
          to="present"
          height="70"
          link="https://servomovement.com/"
        >
          <div>
            <strong>Technologies:</strong> Node.js, MongoDB, Redis, OpenAPI, Vue.js, Vuex, Bootstrap, Sass, HTML5, AWS
          </div>
        </article-box>

        <article-box
          :is-odd="false"
          src="logo-in-a-day.svg"
          title="Logo in a day - Full-Stack JavaScript Engineer"
          from="2020"
          to="2020"
          height="100"
          link="https://logo.kobi.design/"
        >
          <div>
            <strong>Technologies:</strong> Nuxt.js, Vue.js, Vuex, AWS
          </div>
        </article-box>

        <article-box
          src="phe-logo.svg"
          title="PHE corporate site - Full-Stack JavaScript Engineer"
          from="2019"
          height="140"
          link="https://pheproject.hu/"
        >
          <div>
            <strong>Technologies:</strong> JAMstack, Netlify CMS, Vue.js, Vuex, Bootstrap, Sass, HTML5
          </div>
        </article-box>

        <article-box
          :is-odd="false"
          src="peak-wallet.png"
          title="PeakWallet - React Native Mobile Developer"
          from="2019"
          to="2018"
          height="140"
          link="https://play.google.com/store/apps/details?id=com.peak.peakwallet"
        >
          <div>
            <strong>Technologies:</strong> React Native, React, Redux
          </div>
        </article-box>

        <article-box
          src="anda.png"
          title="ANDA Present - Full-Stack JavaScript Engineer"
          from="JUL 2016"
          to="JUL 2017"
          height="140"
          link="https://andapresent.com/row/en"
        >
          <div>
            <strong>Technologies:</strong> Node.js, Handlebars.js, Backbone.js, jQuery, Bootstrap 4, Sass, HTML5
          </div>
        </article-box>

        <article-box
          :is-odd="false"
          src="expat.png"
          title="Expat Connect - Full-Stack JavaScript Engineer"
          from="DEC 2014"
          to="JUL 2016"
          link="https://expatconnect.com/"
        >
          <div>
            <strong>Technologies:</strong> Node.js, Dust.js, Backbone.js, jQuery, Bootstrap, Sass, HTML5, AWS
          </div>
        </article-box>

        <article-box
          src="eer-logo.svg"
          title="EÉR - Electronic Sales System - Full-Stack JavaScript Engineer"
          from="AUG 2014"
          to="DEC 2014"
          height="140"
          link="https://eer.gov.hu/"
        >
          <div>
            <strong>Technologies:</strong> Node.js, Kraken.js, Dust.js, Bootstrap 3, Less, HTML5
          </div>
        </article-box>

        <footer class="mt-3 text-center">
          <a
            href="https://www.linkedin.com/in/ferenc-sticza-ab9a1814/"
            rel="noopener"
            target="_blank"
            class="btn btn-sm btn-outline-dark"
          >
            More projects &raquo;
          </a>
        </footer>
      </section>

      <section class="section">
        <h1 class="section__title">
          Education
        </h1>

        <article-box
          src="corvinus.png"
          title="Corvinus University of Budapest - Business Information Systems (BSc)"
          from="2007"
          to="2010"
          height="200"
          link="http://www.uni-corvinus.hu/index.php?id=en"
        >
          <div>
            <strong>Achieved:</strong> Comprehensive knowledge about the diverse e-World in the following topics:
            the business models, e-commercial and online business solutions, basics of e-business, common economical
            laws and IT solutions (e.g. portal technology)
          </div>
        </article-box>
      </section>
    </div>
  </div>
</template>

<script>
import ArticleBox from '~/components/ArticleBox'

export default {
  components: {
    ArticleBox
  },
  methods: {
    onPDFClick() {
      window.print()
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/abstracts/variables';

.section--header {
  background: $secondary;
  border-bottom: 1px solid lighten($body-color, 70%);
}

.avatar-wrapper {
  background: #000;
  width: 220px;
  border-radius: 50%;
  box-shadow: 0 0 2px #000;
  overflow: hidden;
  display: inline-block;
  text-align: center;
}

@media print {
  body {
    padding-top: 0;
    -webkit-print-color-adjust: exact !important;
  }
  article {
    page-break-inside: avoid;
  }
}
</style>
