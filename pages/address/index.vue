<template>
  <div>
    <h1>addresss:</h1>
    <div v-for="(address, key) in addresss" :key="key">
      {{ address.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addresss: [],
    }
  },
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    )
  },
}
</script>
