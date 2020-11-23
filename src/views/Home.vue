<template>
  <div class="home">
    <div class="accueil">
      <h1>Bienvenue au test des intelligences multiples</h1>
      <div class="explication">
        <div class="expl">Plusieurs questions vont vous être posées et vous aurez 5 choix de réponses :</div>
        <div class="cards-group">
          <div :key="i" class="card" v-for="(choice, i) in choices">
            <div class="card-body">
              <div class="choice">{{ choice }}</div>
              <div class="choice-value"><span class="badge badge-pill badge-primary">{{ i+1 }}</span></div>
            </div>
          </div>
        </div>
        <div class="expl">
          <div>Après avoir répondu aux questions, le résultat de votre test sera envoyé à votre conseiller(ère)
            pour qu'il(elle) puisse en discuter avec vous.</div>
        </div>
        <div class="expl gl">Bon test à vous !</div>
        <div class="button">
          <button class="btn btn-primary btn-lg" type="button" @click="launchTest()">Commencer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        choices: [
          'Cela ne me correspond pas du tout',
          'Cela me correspond un peu',
          'Cela me correspond moyennement',
          'Cela me correspond beaucoup',
          'Cela me correspond tout à fait'
        ]
      }
    },
    methods: {
      launchTest: function () {
        this.$router.push({path: '/questions'})
      }
    }
  }
</script>

<style scoped>
  .home {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2.5fr 1fr;
    grid-template-rows: 1fr 3.5fr 1fr;
    background-color: dodgerblue;
  }

  .accueil {
    height: 100%;
    width: 100%;
    grid-column: 2/3;
    grid-row: 2/3;
    background-color: white;
    border-radius: 20px;
    overflow-y: auto;
  }

  h1 {
    margin: 3%;
  }

  .expl {
    margin-bottom: 1.5%;
  }

  .gl {
    font-weight: 600;
  }

  .cards-group {
    width: 60%;
    margin: 0 auto 1.5% auto;
  }

  .card-body {
    display: flex;
    justify-content: space-between;
    padding: 2%;
  }

  .choice {
    font-weight: 600;
  }
</style>
