<template>
  <div class="layout-wrapper">
    <header class="site-header">
      <nav class="navbar navbar-dark bg-dark fixed-top site-nav">
        <div class="container">
          <a
            class="navbar-brand d-flex align-items-center mr-4"
            href="/"
          >
            <img
              src="~/assets/img/logo-v2.svg"
              height="36"
              class="d-inline-block align-top brand-logo"
              alt="sticza.com logo"
            >
            <span class="h5 mb-0 ml-2 brand-text">
              sticza.com
            </span>
          </a>

          <div class="site-nav__links d-none d-lg-flex">
            <a
              class="nav-link"
              href="/#experience"
            >
              Experience
            </a>
            <a
              class="nav-link"
              href="/#projects"
            >
              Projects
            </a>
            <a
              class="nav-link"
              href="/#skills"
            >
              Skills
            </a>
            <a
              class="nav-link"
              href="/#contact"
            >
              Contact
            </a>
          </div>

          <div class="site-nav__actions ml-lg-4">
            <a
              class="btn btn-sm btn-outline-light mr-2"
              href="mailto:ferenc@sticza.com"
            >
              Email
            </a>
            <a
              class="btn btn-sm btn-light"
              href="/#contact"
            >
              Open to roles
            </a>
          </div>
        </div>
      </nav>
    </header>

    <nuxt />

    <footer class="main-footer text-center">
      <div class="container">
        <div class="footer-copy">
          2026 &copy; Ferenc Sticza
        </div>
        <div class="footer-note">
          Senior Full-Stack JavaScript/TypeScript Engineer
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss">
@import './assets/scss/app';
$body-padding-top: 5.75rem;

body {
  padding-top: $body-padding-top;
  min-height: 100vh;
  background: #fff;
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site-nav {
  box-shadow: 0 10px 30px rgba($dark, 0.14);
}

.brand-text {
  color: #fff;
  letter-spacing: 0.04em;
}

.site-nav__links {
  align-items: center;
  margin-left: auto;

  .nav-link {
    color: rgba(#fff, 0.82);
    padding: 0.5rem 0.75rem;
    font-size: 0.95rem;

    &:hover,
    &:focus {
      color: #fff;
      text-decoration: none;
    }
  }
}

.site-nav__actions {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.main-footer {
  margin-top: auto;
  padding: 2.5rem 0;
  background: $dark;
  color: rgba(#fff, 0.8);
}

.footer-copy {
  font-weight: 700;
}

.footer-note {
  margin-top: 0.35rem;
  font-size: 0.95rem;
}

@media (max-width: 991.98px) {
  $body-padding-top-mobile: 7rem;

  body {
    padding-top: $body-padding-top-mobile;
  }

  .site-nav .container {
    row-gap: 0.75rem;
  }

  .site-nav__actions {
    width: 100%;
    justify-content: flex-end;
  }
}

@media (max-width: 575.98px) {
  $body-padding-top-small: 8rem;

  body {
    padding-top: $body-padding-top-small;
  }

  .site-nav__actions {
    justify-content: stretch;

    .btn {
      flex: 1 1 auto;
    }
  }
}
</style>
