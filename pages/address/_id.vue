<template>
  <h1>bankdata-ID: {{ this.bankdata.id }}</h1>
</template>

<script>
  export default {
    data(){
      return {
        bankdata: {},
      }
    },
    async asyncData({ params }) {
      const bankdataid = params.id // When calling /abc the slug will be "abc"
      return { bankdataid }
    },
    async fetch() {
      this.post = await fetch('https://api.nuxtjs.dev/posts/' + this.bankdataid).then(res =>
        res.json()
      )
    },
  }
</script>