<template>
  <h1>position-ID: {{ position.id }}</h1>
</template>

<script>
export default {
  async asyncData({ params }) {
    const positionid = params.id // When calling /abc the slug will be "abc"
    return { positionid }
  },
  data() {
    return {
      position: {},
    }
  },
  async fetch() {
    this.post = await fetch(
      'https://api.nuxtjs.dev/posts/' + this.positionid
    ).then((res) => res.json())
  },
}
</script>
