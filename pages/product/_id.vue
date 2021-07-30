<template>
  <h1>Product-ID: {{ product.id }}</h1>
</template>

<script>
export default {
  async asyncData({ params }) {
    const productid = params.id // When calling /abc the slug will be "abc"
    return { productid }
  },
  data() {
    return {
      product: {},
    }
  },
  async fetch() {
    this.post = await fetch(
      'https://api.nuxtjs.dev/posts/' + this.productid
    ).then((res) => res.json())
  },
}
</script>
