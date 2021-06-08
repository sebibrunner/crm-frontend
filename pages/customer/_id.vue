<template>
  <h1>customer-ID: {{ this.customer.id }}</h1>
</template>

<script>
  export default {
    data(){
      return {
        customer: {},
      }
    },
    async asyncData({ params }) {
      const customerid = params.id // When calling /abc the slug will be "abc"
      return { customerid }
    },
    async fetch() {
      this.post = await fetch('https://api.nuxtjs.dev/posts/' + this.customerid).then(res =>
        res.json()
      )
    },
  }
</script>