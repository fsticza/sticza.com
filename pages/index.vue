<template>
  <div class="index">
    <section class="section bg-secondary section--bordered vcard">
      <div class="container">
        <div class="row align-items-center text-center">
          <div class="col-sm-6 text-md-right">
            <span class="avatar-wrapper">
              <img
                class="avatar"
                height="220"
                src="~/assets/img/ferenc-sticza.jpg"
                alt="Ferenc Sticza">
            </span>
          </div>
          <div class="col-sm-6 my-4 text-md-left">
            <h1 class="section__title">Ferenc Sticza</h1>
            <h2 class="h4 mb-4">Full-Stack JavaScript Engineer</h2>

            <div>Budapest, Hungary</div>

            <div class="row align-items-center">
              <div class="col-md-6">
                <div>
                  <a
                    class="inline-link"
                    href="tel:+36306360775">+36/30-636-0775</a>
                </div>
                <div>
                  <a
                    class="inline-link"
                    href="mailto:ferenc@sticza.com">
                    ferenc@sticza.com
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <a
                  class="d-inline-block m-3"
                  href="https://github.com/fsticza"
                  target="_blank">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32">
                    <title>github</title>
                    <path
                      fill="currentColor"
                      d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z" />
                  </svg>
                </a>
                <a
                  class="d-inline-block m-3"
                  href="https://www.linkedin.com/in/ferenc-sticza-ab9a1814/"
                  target="_blank">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32">
                    <title>linkedin</title>
                    <path
                      fill="currentColor"
                      d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"/>
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
        <h1 class="section__title mb-4">About</h1>
        <p>
          I started my software developer career in 2006 with the classical WAMP
          stack, HTML and CSS. For some reason, I was more interested in the
          front-end parts. Soon, I found myself working on high traffic sites
          where quality, reusable components, maintenance and performance
          optimization were all important aspects. In 2014 I became a Tech Leader
          of 10-12 Front-end Developers.
        </p>
        <p>
          I started to be more interested in server-side development when Node.js
          became a thing. In late 2013, I begun to work with a software
          architecture I believe fits best as a web client for RESTful APIs and I
          felt it was a real redemption. I also started to learn how to create the
          APIs for myself and became a Full-Stack JavaScript Engineer. Nowadays I
          use JavaScript to create desktop, mobile and web applications.
        </p>
      </section>

      <section class="section section--bordered">
        <h1 class="section__title">Experience</h1>

        <article-box
          src="logo.svg"
          title="Freelance - Full-Stack JavaScript Engineer"
          from="NOV 2017"
          to="present"
          link="https://limberbits.com/">
          <div>
            <strong>Technologies:</strong> Node.js, MongoDB, OpenAPI, Webpack, Git, Vue.js, React, HTML5, Bootstrap 4
          </div>
          <div>
            <strong>Role:</strong> Full-Stack JavaScript development, cross-platform desktop/mobile/web application development, knowledge sharing.
          </div>
          <div>
            <strong>Partners:</strong> Star Alliance, MSCI, IdomSoft
          </div>
        </article-box>

        <article-box
          :is-odd="false"
          src="bene.jpg"
          title="Bene Studio - Full-Stack JavaScript Engineer"
          from="JUL 2017"
          to="SEP 2017"
          height="160"
          link="https://benestudio.co/">
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
          link="https://systems.virgo.hu/">
          <div>
            <strong>Technologies:</strong> Node.js, Webpack, Grunt, Vue.js, Backbone.js, jQuery, HTML5, SVG, CSS3 (LESS, SASS), various template engines, responsive design, Git, Redis, MongoDB
          </div>
          <div>
            <strong>Role:</strong> Leading front-end team, mentoring, creating web interface of API based social and e-commerce applications (expatconnect.com, eer.gov.hu, etc.).
          </div>
        </article-box>

        <article-box
          :is-odd="false"
          src="logmeinlogo.jpg"
          title="LogMeIn - Software Engineer"
          from="JAN 2013"
          to="SEP 2013"
          link="https://www.logmeininc.com/">
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
          link="https://systems.virgo.hu/">
          <div>
            <strong>Technologies:</strong> JSP, XHTML, CSS, JavaScript (jQuery, prototype.js), SVN
          </div>
          <div>
            <strong>Role:</strong> Front-end development of iwiw.hu social networking service and other Virgo related sites (klapp.hu, aranyoldalak.hu, ado.hu, etterem.hu, etc.).
          </div>
        </article-box>

        <article-box
          :is-odd="false"
          src="sensenet.png"
          title="Sense/Net Inc - Portal builder"
          from="FEB 2010"
          to="MAY 2010"
          height="140"
          link="https://www.sensenet.com/">
          <div>
            <strong>Technologies:</strong> XSLT, XHTML, CSS, C#, jQuery, SVN
          </div>
          <div>
            <strong>Role:</strong> Front-end development of portals – e.g. Tigáz, Tigáz DSO, Fővárosi Gázművek Ltd.
          </div>
        </article-box>

        <article-box
          src="docler-holding.png"
          title="Docler Holding - Sitebuilder"
          from="DEC 2008"
          to="FEB 2010"
          link="https://www.doclerholding.com/en/main/">
          <div>
            <strong>Technologies:</strong> XHTML, CSS, PHP, JavaScript (jQuery), SVN
          </div>
          <div>
            <strong>Role:</strong> Client side development of docler.hu – social- and video sharing portal as well as other other frequented sites in Docler Holding.
          </div>
        </article-box>

      </section>

      <section class="section section--bordered section--projects">
        <h1 class="section__title">Projects</h1>

        <article-box
          src="anda.png"
          title="ANDA Present - Full-Stack JavaScript Developer"
          from="JUL 2016"
          to="JUL 2017"
          height="140"
          link="https://andapresent.com/row/en">
          <div>
            <strong>Technologies:</strong> Node.js, Handlebars.js, Backbone.js, jQuery, Bootstrap 4, Sass, HTML5
          </div>
        </article-box>

        <article-box
          :is-odd="false"
          src="expat.png"
          title="Expat Connect - Full-Stack JavaScript Developer"
          from="DEC 2014"
          to="JUL 2016"
          link="https://expatconnect.com/">
          <div>
            <strong>Technologies:</strong> Node.js, Dust.js, Backbone.js, jQuery, Bootstrap, Sass, HTML5
          </div>
        </article-box>

        <article-box
          src="eer-logo.svg"
          title="EÉR - Electronic Sales System - Full-Stack JavaScript Developer"
          from="AUG 2014"
          to="DEC 2014"
          height="140"
          link="https://eer.gov.hu/">
          <div>
            <strong>Technologies:</strong> Node.js, Kraken.js, Dust.js, Bootstrap 3, Less, HTML5
          </div>
        </article-box>

        <footer class="mt-3">
          <a
            href="https://www.linkedin.com/in/ferenc-sticza-ab9a1814/"
            target="_blank">More projects &raquo;</a>
        </footer>
      </section>

      <section class="section">
        <h1 class="section__title">Education</h1>

        <article-box
          src="corvinus.png"
          title="Corvinus University of Budapest - Business Information Systems (BSc)"
          from="2007"
          to="2010"
          height="200"
          link="http://www.uni-corvinus.hu/index.php?id=en">
          <div>
            <strong>Achieved:</strong> Comprehensive knowledge about the diverse e-World in the following topics: the business models, e-commercial and online business solutions, basics of e-business, common economical laws and IT solutions (e.g. portal technology)
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
  }
}
</script>

<style lang="scss">
@import './assets/scss/abstracts/variables';

.inline-link {
  display: inline-block;
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

@media screen {
  .article__title {
    background: -webkit-linear-gradient($pink, $body-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

@media print {
  body {
    padding-top: 0;
    -webkit-print-color-adjust: exact !important;
  }
  article {
    page-break-inside: avoid;
  }
  // .section--projects {
  //   page-break-before: always;
  // }
}
</style>
