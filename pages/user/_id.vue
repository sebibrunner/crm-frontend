<template>
  <h1>User-ID: {{ post.title }}</h1>
</template>

<script>
export default {
  async asyncData({ params }) {
    const userid = params.id // When calling /abc the slug will be "abc"
    return { userid }
  },
  data() {
    return {
      post: {},
    }
  },
  async fetch() {
    this.post = await fetch('https://api.nuxtjs.dev/posts/' + this.userid).then(
      (res) => res.json()
    )
  },
}
</script>
