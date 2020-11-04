<template>
  <article
    class="card mb-4 animated-card"
  >
    <div class="card-img-top article-top d-flex align-items-center">
      <img
        class="mx-auto d-block article-img"
        :src="require(`~/assets/img/${src}`)"
        loading="lazy"
        :height="height"
        alt="Logo"
      >
    </div>
    <div class="card-body">
      <header class="mb-1">
        <h1 class="h4 card-title">
          {{ title }}
        </h1>
        <time>{{ from }}</time>
        <template v-if="to">
          -
          <time>{{ to }}</time>
        </template>
      </header>
      <div class="card-text">
        <slot />
      </div>
      <a
        :href="link"
        rel="noopener noreferrer nofollow"
        target="_blank"
        class="stretched-link"
      ><span class="sr-only">Let me see</span>
      </a>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    from: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    height: {
      type: [Number, String],
      default: '180'
    },
    isOdd: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/abstracts/variables';

.article-top {
  height: 200px;
}
.article-img {
  transition: transform 0.8s;
}
.card-body {
  transition: all 0.8s;
  box-shadow: 0 -1px 0 lighten($dark, 75%);
  background: $dark;
  color: #fff;
}
.animated-card {
  &:hover {
    .article-img {
      transform: scale(1.1);
    }
    .card-body {
      background-color: #fff;
      color: $dark;
    }
  }
}


</style>
