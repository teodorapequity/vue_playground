<template lang="pug">
  div#beer-details(v-if="beer")
    h1 Here is our Beer Details page!
    div Name: {{this.beer.name}}
    div Tagline: {{beer.tagline}}
    div First brewed: {{beer.first_brewed}}
    div Description: {{beer.description}}
</template>

<script>

export default {
  name: 'BeerDetails',
  data() {
      return {
      isLoading: true,
      isError: false,
      errors: [],
      beer: null
    }
  },
  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
          "https://api.punkapi.com/v2/beers/" + this.$route.params.id
        );
        // JSON responses are automatically parsed.
        this.beer = response.data[0];
      } catch (error) {
        console.log(error);
      }
    }
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getData'
  },
  created() {
    this.getData();
  }
}
</script>

<style>

</style>
