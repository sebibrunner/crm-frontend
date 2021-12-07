<template>
  <div>
    <h1>addresss:</h1>
    <div v-for="(address, key) in addresses" :key="key">
      {{ address.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addresses: Array<Address>[],
    }
  },
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    )
  },
}
</script>
