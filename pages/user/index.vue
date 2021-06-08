<template>
    <div>
        <h1>Posts:</h1>
        <div v-for="(post, key) in this.posts" :key="key">
            {{post.title}}
        </div>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        posts: [],
      }
    },
    async asyncData({ params }) {
      const userid = params.slug // When calling /abc the slug will be "abc"
      return { userid }
    },
    async fetch() {
      this.posts = await fetch('https://api.nuxtjs.dev/posts').then(res =>
        res.json()
      )
    },
  }
</script>