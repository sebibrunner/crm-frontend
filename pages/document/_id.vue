<template>
  <h1>document-ID: {{ document.id }}</h1>
</template>

<script>
export default {
  async asyncData({ params }) {
    const documentid = params.id // When calling /abc the slug will be "abc"
    return { documentid }
  },
  data() {
    return {
      document: {},
    }
  },
  async fetch() {
    this.post = await fetch(
      'https://api.nuxtjs.dev/posts/' + this.documentid
    ).then((res) => res.json())
  },
}
</script>
