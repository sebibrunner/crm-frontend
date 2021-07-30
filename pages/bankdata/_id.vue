<template>
  <h1>bankdata-ID: {{ bankdata.id }}</h1>
</template>

<script>
export default {
  async asyncData({ params }) {
    const bankdataid = params.id // When calling /abc the slug will be "abc"
    return { bankdataid }
  },
  data() {
    return {
      bankdata: {},
    }
  },
  async fetch() {
    this.post = await fetch(
      'https://api.nuxtjs.dev/posts/' + this.bankdataid
    ).then((res) => res.json())
  },
}
</script>
