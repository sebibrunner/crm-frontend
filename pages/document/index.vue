<template>
  <div>
    <h1>documents:</h1>
    <div v-for="(document, key) in documents" :key="key">
      {{ document.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documents: [],
    }
  },
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    )
  },
}
</script>
