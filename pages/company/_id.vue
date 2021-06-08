<template>
  <h1>company-ID: {{ this.company.id }}</h1>
</template>

<script>
  export default {
    data(){
      return {
        company: {},
      }
    },
    async asyncData({ params }) {
      const companyid = params.id // When calling /abc the slug will be "abc"
      return { companyid }
    },
    async fetch() {
      this.post = await fetch('https://api.nuxtjs.dev/posts/' + this.companyid).then(res =>
        res.json()
      )
    },
  }
</script>