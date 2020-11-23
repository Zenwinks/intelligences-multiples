<template>
  <div class="questions-wrapper">
    <div class="questions-block">
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
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import QuestionBlock from "@/components/QuestionBlock";

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
.questions-wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  grid-template-rows: 1fr 3.5fr 1fr;
  background-color: dodgerblue;
}

.questions-block {
  height: 100%;
  width: 100%;
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: white;
  border-radius: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.questions {
  width: 100%;
  height: 75%;
}

.buttons {
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.button {
  width: 20%;
  margin: 5px;
}

.button > button {
  width: 100%;
}
</style>
