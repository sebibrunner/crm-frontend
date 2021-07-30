<template>
  <h1>offer-ID: {{ offer.id }}</h1>
</template>

<script>
export default {
  async asyncData({ params }) {
    const offerid = params.id // When calling /abc the slug will be "abc"
    return { offerid }
  },
  data() {
    return {
      offer: {},
    }
  },
  async fetch() {
    this.post = await fetch(
      'https://api.nuxtjs.dev/posts/' + this.offerid
    ).then((res) => res.json())
  },
}
</script>
