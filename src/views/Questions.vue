<template>
  <user-layout>
    <div class="progress">
      <div :style="'width:' + (actualPage/8)*100 + '%'" class="progress-bar" role="progressbar">{{ actualPage }}/8</div>
    </div>
    <div class="questions">
      <question-block v-if="actualPage === 1" :questionResults="resultVerboLing"
                      @resultChange="resultVerboLing = $event"/>
      <question-block v-if="actualPage === 2" :questionResults="resultLogiqueMath"
                      @resultChange="resultLogiqueMath = $event"/>
      <question-block v-if="actualPage === 3" :questionResults="resultVisioSpatiale"
                      @resultChange="resultVisioSpatiale = $event"/>
      <question-block v-if="actualPage === 4" :questionResults="resultInterperso"
                      @resultChange="resultInterperso = $event"/>
      <question-block v-if="actualPage === 5" :questionResults="resultIntraperso"
                      @resultChange="resultIntraperso = $event"/>
      <question-block v-if="actualPage === 6" :questionResults="resultCorpoKine"
                      @resultChange="resultCorpoKine = $event"/>
      <question-block v-if="actualPage === 7" :questionResults="resultMusicale"
                      @resultChange="resultMusicale = $event"/>
      <question-block v-if="actualPage === 8" :questionResults="resultNaturaliste"
                      @resultChange="resultNaturaliste = $event"/>
    </div>
    <div class="buttons">
      <div v-if="actualPage === 1" class="button">
        <button class="btn btn-primary btn-lg" type="button" @click="$router.push('/')">Précédent</button>
      </div>
      <div v-if="actualPage > 1" class="button">
        <button class="btn btn-primary btn-lg" type="button" @click="changePage(-1)">Précédent</button>
      </div>
      <div v-if="actualPage < 8" class="button">
        <button class="btn btn-primary btn-lg" type="button" @click="changePage(1)">Suivant</button>
      </div>
      <div v-if="actualPage === 8" class="button">
        <button class="btn btn-success btn-lg" type="button" @click="calculResult()">Terminer</button>
      </div>
    </div>
  </user-layout>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import QuestionBlock from "@/components/QuestionBlock";
import UserLayout from "@/layouts/UserLayout";

export default {
  data() {
    return {
      actualPage: 1,
      resultVerboLing: [],
      resultLogiqueMath: [],
      resultVisioSpatiale: [],
      resultInterperso: [],
      resultIntraperso: [],
      resultCorpoKine: [],
      resultMusicale: [],
      resultNaturaliste: [],
    }
  },
  created() {
    this.buildQuestionResults()
  },
  components: {
    UserLayout,
    QuestionBlock
  },
  computed: {
    ...mapGetters(['getVerboLing', 'getLogiqueMath', 'getVisioSpatiale', 'getInterperso', 'getIntraperso', 'getCorpoKine', 'getMusicale', 'getNaturaliste'])
  },
  methods: {
    ...mapActions(['setResults']),
    buildQuestionResults() {
      this.getVerboLing.forEach(question => {
        this.resultVerboLing.push({question: question, result: 1})
      })
      this.getLogiqueMath.forEach(question => {
        this.resultLogiqueMath.push({question: question, result: 1})
      })
      this.getVisioSpatiale.forEach(question => {
        this.resultVisioSpatiale.push({question: question, result: 1})
      })
      this.getInterperso.forEach(question => {
        this.resultInterperso.push({question: question, result: 1})
      })
      this.getIntraperso.forEach(question => {
        this.resultIntraperso.push({question: question, result: 1})
      })
      this.getCorpoKine.forEach(question => {
        this.resultCorpoKine.push({question: question, result: 1})
      })
      this.getMusicale.forEach(question => {
        this.resultMusicale.push({question: question, result: 1})
      })
      this.getNaturaliste.forEach(question => {
        this.resultNaturaliste.push({question: question, result: 1})
      })
    },
    changePage(value) {
      if ((this.actualPage + value) >= 0 && (this.actualPage + value) <= 8) {
        this.actualPage += value
      }
    },
    calculResult() {
      let tabResults = [
        {label: 'Verbo-Linguistique', result: this.result(this.resultVerboLing)},
        {label: 'Logico-Mathématiques', result: this.result(this.resultLogiqueMath)},
        {label: 'Visuo-Spatiale', result: this.result(this.resultVisioSpatiale)},
        {label: 'Interpersonnelle', result: this.result(this.resultInterperso)},
        {label: 'Intrapersonnelle', result: this.result(this.resultIntraperso)},
        {label: 'Kinesthésique', result: this.result(this.resultCorpoKine)},
        {label: 'Musicale', result: this.result(this.resultMusicale)},
        {label: 'Naturaliste', result: this.result(this.resultNaturaliste)}
      ]
      this.setResults(tabResults)
      this.$router.push('results')
    },
    result(array) {
      let value = 0
      array.forEach(item => {
        value += item.result
      })
      return value
    }
  }
}
</script>

<style scoped>
.progress {
  height: 2.5%;
  margin: 2.5%;
  margin-bottom: 0;
}

.questions {
  width: 100%;
  height: 75%;
}

.buttons {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.button {
  margin: 5px;
}

.button > button {
  width: 100%;
}
</style>
