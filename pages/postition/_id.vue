<template>
  <h1>offer-ID: {{ this.offer.id }}</h1>
</template>

<script>
  export default {
    data(){
      return {
        offer: {},
      }
    },
    async asyncData({ params }) {
      const offerid = params.id // When calling /abc the slug will be "abc"
      return { offerid }
    },
    async fetch() {
      this.post = await fetch('https://api.nuxtjs.dev/posts/' + this.offerid).then(res =>
        res.json()
      )
    },
  }
</script>