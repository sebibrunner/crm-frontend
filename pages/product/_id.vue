<template>
  <h1>Product-ID: {{ this.product.id }}</h1>
</template>

<script>
  export default {
    data(){
      return {
        product: {},
      }
    },
    async asyncData({ params }) {
      const productid = params.id // When calling /abc the slug will be "abc"
      return { productid }
    },
    async fetch() {
      this.post = await fetch('https://api.nuxtjs.dev/posts/' + this.productid).then(res =>
        res.json()
      )
    },
  }
</script>