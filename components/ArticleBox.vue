<template>
  <article
    :class="[!isOdd ? 'article-box--even' : 'article-box--odd']"
    class="article-box"
  >
    <div
      :class="{ 'text-md-right': isOdd }"
      class="row align-items-center"
    >
      <div
        :class="{ 'order-sm-2': isOdd }"
        class="col-sm-6 my-4"
      >
        <a
          :href="link"
          rel="noopener"
          target="_blank"
          class="text-center d-block article__link"
        >
          <img
            :src="require(`~/assets/img/${src}`)"
            :height="height"
            class="d-inline-block bg-white p-2 article__image"
            alt="Logo"
          >
        </a>
      </div>
      <div class="col-sm-6 my-4">
        <header class="mb-1">
          <h1 class="h4 article__title">
            {{ title }}
          </h1>
          <time>{{ from }}</time> -
          <time>{{ to }}</time>
        </header>
        <div class="article__botdy">
          <slot />
        </div>
      </div>
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

$width: 3px;

.article-box {
  position: relative;
  padding: 0 1rem;
  border-radius: 10px;
}

.article-box--odd {
  background: $body-color;
  color: #fff;
}

.article__image {
  transition: all 200ms ease-in-out;
}

.article__link {
  &:hover .article__image {
    transform: scale(1.1);
  }
}

@include media-breakpoint-up(sm) {
  .article-box {
    background: linear-gradient(
      to right,
      $body-color,
      $body-color 50%,
      #fff 50%
    );
    color: #fff;
  }
  .article-box--odd {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .article-box--even {
    background: linear-gradient(
      to left,
      $body-color,
      $body-color 50%,
      #fff 50%
    );
  }
}
// @media screen {
// }
</style>
