<template>
  <div>
    <h1>Products:</h1>
    <div v-for="(product, key) in products" :key="key">
      {{ product.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    )
  },
}
</script>
