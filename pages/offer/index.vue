<template>
  <div>
    <h1>offers:</h1>
    <div v-for="(offer, key) in offers" :key="key">
      {{ offer.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offers: [],
    }
  },
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    )
  },
}
</script>
