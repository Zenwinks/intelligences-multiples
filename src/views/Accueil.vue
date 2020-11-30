<template>
  <user-layout>
    <h1>Bienvenue {{ this.getInfos.firstname }}</h1>
    <div class="explication">
      <div class="expl">Plusieurs questions vont vous être posées et vous aurez 5 choix de réponses :</div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li v-for="(choice, i) in choices" :key="i" class="list-group-item">
            <div class="choice">{{ choice.label }}</div>
            <div class="choice-value">{{ choice.icon }}</div>
          </li>
        </ul>
      </div>
      <div class="expl">
        <div>Après avoir répondu aux questions, le résultat de votre test sera envoyé à votre conseiller(ère)
          pour qu'il(elle) puisse en discuter avec vous.
        </div>
      </div>
      <div class="expl gl">Bon test à vous !</div>
      <div class="buttons">
        <div class="button">
          <button class="btn btn-secondary btn-lg" type="button" @click="$router.go(-1)">Retour</button>
        </div>
        <div class="button">
          <button class="btn btn-primary btn-lg" type="button" @click="launchTest()">Commencer</button>
        </div>
      </div>
    </div>
  </user-layout>
</template>

<script>

import UserLayout from "@/layouts/UserLayout";
import {mapGetters} from "vuex";

export default {
  name: 'Accueil',
  components: {UserLayout},
  data() {
    return {
      choices: [
        {label: 'Cela ne me correspond pas du tout', icon: '😟'},
        {label: 'Cela me correspond un peu', icon: '😕'},
        {label: 'Cela me correspond moyennement', icon: '😐'},
        {label: 'Cela me correspond beaucoup', icon: '🙂'},
        {label: 'Cela me correspond tout à fait', icon: '😀'}
      ]
    }
  },
  computed: {
    ...mapGetters(['getInfos'])
  },
  methods: {
    launchTest: function () {
      this.$router.push({path: '/questions'})
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 3%;
  font-weight: 700;
}

.expl {
  margin-bottom: 1.5%;
}

.gl {
  font-weight: 600;
}

.card {
  margin: 2.5% 20% 2.5% 20%;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
}

.choice {
  font-weight: 600;
}

.buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.button {
  width: auto;
  margin: 5px;
}

.button > button {
  width: 100%;
}
</style>
