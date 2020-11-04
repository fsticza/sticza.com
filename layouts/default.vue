<template>
  <div class="layout-wrapper">
    <header>
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <div class="container">
          <span
            class="navbar-brand d-flex align-items-center"
            to="/"
          >
            <img
              src="~/assets/img/logo-v2.svg"
              height="36"
              class="d-inline-block align-top brand-logo"
              alt="Logo"
            >
            <h1 class="h5 mb-0 ml-2">
              sticza.com | whoami
            </h1>
          </span>

          <div class="ml-auto d-none d-sm-block">
            <a
              class="btn btn-sm btn-outline-light mr-3"
              href="tel:+36306360775"
            >
              <span class="d-inline d-md-none">Call me</span><span class="d-none d-md-inline">+36/30-636-0775</span>
            </a>
            <a
              class="btn btn-sm btn-outline-light"
              href="mailto:ferenc@sticza.com"
            >
              <span class="d-inline d-md-none">Email me</span><span class="d-none d-md-inline">ferenc@sticza.com</span>
            </a>
          </div>
          <!-- <button
            class="navbar-toggler border-0"
            type="button"
            aria-controls="main-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
          </button>
          <div
            id="main-navbar"
            class="collapse navbar-collapse">
            <div class="navbar-nav ml-auto">
              <nuxt-link
                class="nav-item nav-link"
                to="/">Home
              </nuxt-link>
              <a
                class="nav-link nav-link"
                href="#about">About</a>
              <a
                class="nav-link nav-link"
                href="#services">Services</a>
              <nuxt-link
                class="nav-link nav-link"
                to="/blog">Blog</nuxt-link>
              <a
                class="nav-link nav-link"
                href="#contact">Contact</a>
            </div>
          </div> -->
        </div>
      </nav>
    </header>

    <nuxt />

    <footer class="bg-img-secondary main-footer text-center">
      <div class="container">
        <div>
          2020 &copy; Ferenc Sticza
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
const options = {
  rootMargin: '0px',
  threshold: 0.1
}
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      loadImage(entry.target)
    }
  })
}
</script>


<style lang="scss">
@import './assets/scss/app';
$logo-height: 2.25rem;
$nav-paddings: $navbar-padding-y + $navbar-brand-padding-y;
$body-padding-top: $nav-paddings * 2 + $logo-height;

body {
  padding-top: $body-padding-top;
  min-height: 100vh;
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
}

.main-footer {
  margin-top: auto;
  padding: 2rem 0;
}

.bg-img-secondary {
  background-color: $secondary;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='250' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.04'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
}

.section {
  margin: 0;
  padding: 2rem 0;
  position: relative;

  &.section--bordered {

    border-bottom: 1px solid lighten($body-color, 70%);

    &:after {
      content: ' ';
      height: 1px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}

.section__title {
  margin-bottom: 1rem;
}
</style>
