<template>
  <div>
    <h1>positions:</h1>
    <div v-for="(position, key) in positions" :key="key">
      {{ position.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positions: [],
    }
  },
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    )
  },
}
</script>
