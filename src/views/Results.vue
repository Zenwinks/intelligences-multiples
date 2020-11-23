<template>
  <div class="result-wrapper">
    <div v-if="results.length > 0" class="result-card">
      <div class="results">
        <h2>Résultats du test des intelligences multiples</h2>
        <div class="score">
        <span v-for="(result, key) in results" :key="key" class="result">
          <span class="label">Intelligence {{ result.label }} :</span> {{ result.result }}</span>
        </div>
      </div>
      <div class="reset-button">
        <div class="button">
          <button class="btn btn-primary btn-lg" type="button" @click="$router.push('/')">Recommencer le test</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import emailjs from 'emailjs-com';

export default {
  name: "Results",
  data() {
    return {
      results: []
    }
  },
  mounted() {
    this.results = this.getResults
    this.results.sort(this.compare)
    this.sendEmail()
  },
  computed: {
    ...mapGetters(['getResults'])
  },
  methods: {
    compare(a, b) {
      if (a.result < b.result) {
        return 1;
      }
      if (a.result > b.result) {
        return -1;
      }
      return 0;
    },
    sendEmail() {
      let emailLines = ''
      this.results.forEach((result) => {
        emailLines += '    - <b>' + result.label + ' :</b> ' + result.result + '<br>'
      })
      emailjs.send(
          'service_intell_multi',
          'template_intell_multi',
          {results: emailLines},
          'user_5IFrM8CHH0gfe3Xt6kHQI')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((error) => {
            console.log('FAILED...', error);
          })
    }
  }
}
</script>

<style scoped>
.result-wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  grid-template-rows: 1fr 3.5fr 1fr;
  background-color: dodgerblue;
}

.result-card {
  height: 100%;
  width: 100%;
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: white;
  border-radius: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-top: 5%;
}

.results {
  height: 75%;
}

.score {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
}

.result {
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
}

.reset-button {
  height: 20%;
}
</style>
