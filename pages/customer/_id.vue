<template>
  <h1>customer-ID: {{ customer.id }}</h1>
</template>

<script>
export default {
  async asyncData({ params }) {
    const customerid = params.id // When calling /abc the slug will be "abc"
    return { customerid }
  },
  data() {
    return {
      customer: {},
    }
  },
  async fetch() {
    this.post = await fetch(
      'https://api.nuxtjs.dev/posts/' + this.customerid
    ).then((res) => res.json())
  },
}
</script>
