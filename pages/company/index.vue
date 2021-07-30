<template>
  <div>
    <h1>companys:</h1>
    <div v-for="(company, key) in companys" :key="key">
      {{ company.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companys: [],
    }
  },
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    )
  },
}
</script>
