<template>
  <h1>company-ID: {{ company.id }}</h1>
</template>

<script>
export default {
  async asyncData({ params }) {
    const companyid = params.id // When calling /abc the slug will be "abc"
    return { companyid }
  },
  data() {
    return {
      company: {},
    }
  },
  async fetch() {
    this.post = await fetch(
      'https://api.nuxtjs.dev/posts/' + this.companyid
    ).then((res) => res.json())
  },
}
</script>
