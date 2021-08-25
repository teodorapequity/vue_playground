<template lang="pug">
  div(id="beer-list")
    h1 Here is our Beer List page!
    ul#example-1
      li(v-for="item in beers" v-bind:key="item.id")
        a(v-on:click="select(item)") {{ item.name }}
</template>

<script>

export default {
  name: 'BeerList',
  data() {
    return {
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


