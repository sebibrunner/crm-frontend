<template>
  <h1>User-ID: {{ this.post.title }}</h1>
</template>

<script>
  export default {
    data(){
      return {
        post: {},
      }
    },
    async asyncData({ params }) {
      const userid = params.id // When calling /abc the slug will be "abc"
      return { userid }
    },
    async fetch() {
      this.post = await fetch('https://api.nuxtjs.dev/posts/' + this.userid).then(res =>
        res.json()
      )
    },
  }
</script>