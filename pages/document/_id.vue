<template>
  <h1>document-ID: {{ this.document.id }}</h1>
</template>

<script>
  export default {
    data(){
      return {
        document: {},
      }
    },
    async asyncData({ params }) {
      const documentid = params.id // When calling /abc the slug will be "abc"
      return { documentid }
    },
    async fetch() {
      this.post = await fetch('https://api.nuxtjs.dev/posts/' + this.documentid).then(res =>
        res.json()
      )
    },
  }
</script>