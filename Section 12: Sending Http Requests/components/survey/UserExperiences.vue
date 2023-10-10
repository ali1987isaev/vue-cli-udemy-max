<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <div v-else-if="!isLoading && !!error">
        <p>{{ error }}</p>
      </div>
      <div v-else-if="!isLoading && (!results || results.length === 0)">
        <h2>Error</h2>
        <p>No data found!</p>
      </div>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    }
  },
  mounted() {
    this.loadExperiences()
  },
  methods: {
    loadExperiences() {
      // works fine withour async!
      // fetch('https://vue-test-fbd13-default-rtdb.firebaseio.com/surveys.json')
      //   .then(res => res.json())
      //   .then(data => this.results = Object.values(data));

      // works fine as well with async/await
      // const res = await fetch('https://vue-test-fbd13-default-rtdb.firebaseio.com/surveys.json');
      // const data = await res.json();
      // console.log('data', Object.values(data))

      // course approach
      this.isLoading = true
      this.error = null
      fetch('https://vue-test-fbd13-default-rtdb.firebaseio.com/surveys.json')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        const results = []
        // works fine
        // for (const key in data) {
        //   if (Object.hasOwnProperty.call(data, key)) {
        //     const user = data[key];
        //     results.push({
        //       id: key,
        //       name: user.name,
        //       rating: user.rating,
        //     });
        //   }
        // }

        // course approach
        for (const id in data) {
          results.push({
            id,
            name: data[id].name,
            rating: data[id].rating,
          })
        }
        this.isLoading = false
        this.results = results
      })
      .catch((error) => {
        console.error(error)
        this.isLoading = false
        this.error = 'Failed to fetch data - please try again later'
      })
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>