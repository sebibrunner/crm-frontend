<template>
  <div>
    <h1>customers:</h1>
    <div v-for="(customer, key) in customers" :key="key">
      {{ customer.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [],
    }
  },
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    )
  },
}
</script>
