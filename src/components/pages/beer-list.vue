<template lang="pug">
  div.test(:id="beer-list")
    h1 Here is our Beer List page!
    ul#id=example-1
      li(v-for="item in beers" v-bind:key="item.id")
        a(v-on:click="select(item)") {{ item.name }}
</template>

<script>

export default {
  name: 'BeerList',
  data() {
    return {
      isLoading: true,
      isError: false,
      errors: [],
      beers: []
    }
  },
  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
          "https://api.punkapi.com/v2/beers"
        );
        // JSON responses are automatically parsed.
        this.beers = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async select(beer) {
      this.$router.push({ name: 'details', params: { id: beer.id } })
    },
  },
  created() {
    this.getData();
  }
}
</script>

<style lang="sass"> 
.test
    @apply pl-5
    @apply bg-red-700
    @apply border border-gray-300
    border-radius: 5px
</style>
