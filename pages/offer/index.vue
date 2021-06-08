<template>
    <div>
        <h1>invoices:</h1>
        <div v-for="(invoice, key) in this.invoices" :key="key">
            {{invoice.title}}
        </div>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        invoices: [],
      }
    },
    async fetch() {
      this.posts = await fetch('https://api.nuxtjs.dev/posts').then(res =>
        res.json()
      )
    },
  }
</script>