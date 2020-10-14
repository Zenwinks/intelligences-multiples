<template>
  <div class="questions-wrapper">
    <div class="questions-block">
      <div class="questions">
        <question-block v-if="actualPage === 1" :questionResults="resultVerboLing"/>
        <question-block v-if="actualPage === 2" :questionResults="resultLogiqueMath"/>
        <question-block v-if="actualPage === 3" :questionResults="resultVisioSpatiale"/>
        <question-block v-if="actualPage === 4" :questionResults="resultInterperso"/>
        <question-block v-if="actualPage === 5" :questionResults="resultIntraperso"/>
        <question-block v-if="actualPage === 6" :questionResults="resultCorpoKine"/>
        <question-block v-if="actualPage === 7" :questionResults="resultMusicale"/>
        <question-block v-if="actualPage === 8" :questionResults="resultNaturaliste"/>
      </div>
      <div class="buttons">
        <div v-if="actualPage > 1" class="button">
          <button class="btn btn-primary btn-lg" type="button">Précédent</button>
        </div>
        <div v-if="actualPage > 1" class="button">
          <button class="btn btn-primary btn-lg" type="button">Suivant</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
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
}

.questions {
  width: 100%;
  height: 80%;
}

.buttons {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.button {
  width: 15%;
  margin: 5px;
}

.button > button {
  width: 100%;
}
</style>
