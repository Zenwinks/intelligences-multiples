<template>
  <div class="questions-block-wrapper">
    <table>
      <thead>
      <tr>
        <th></th>
        <th>
          <span class="fa-stack" style="vertical-align: top; height: auto">
              <i class="fas fa-circle fa-stack-1x" style="color: black"/>
              <i class="fas fa-sad-tear fa-stack-1x fa-inverse"
                 style="font-size: 20px; color: red"/>
            </span>
        </th>
        <th>
          <span class="fa-stack" style="vertical-align: top; height: auto">
              <i class="fas fa-circle fa-stack-1x" style="color: black"/>
              <i class="fas fa-frown fa-stack-1x fa-inverse"
                 style="font-size: 20px; color: orange"/>
            </span>
        </th>
        <th>
          <span class="fa-stack" style="vertical-align: top; height: auto">
              <i class="fas fa-circle fa-stack-1x" style="color: black"/>
              <i class="fas fa-meh fa-stack-1x fa-inverse"
                 style="font-size: 20px; color: yellow"/>
            </span>
        </th>
        <th>
          <span class="fa-stack" style="vertical-align: top; height: auto">
              <i class="fas fa-circle fa-stack-1x" style="color: black"/>
              <i class="fas fa-smile fa-stack-1x fa-inverse"
                 style="font-size: 20px; color: greenyellow"/>
            </span>
        </th>
        <th>
          <span class="fa-stack" style="vertical-align: top; height: auto">
              <i class="fas fa-circle fa-stack-1x" style="color: black"/>
              <i class="fas fa-laugh fa-stack-1x fa-inverse"
                 style="font-size: 20px; color: green"/>
            </span>
        </th>
      </tr>
      </thead>
      <tbody>
      <question-line v-for="(questionResult, key) in newQuestionResults" :key="key" :questionResult="questionResult"
                     @update="updateData($event, key)"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import QuestionLine from "@/components/QuestionLine";

export default {
  name: 'QuestionBlock',
  components: {QuestionLine},
  props: {
    questionResults: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      newQuestionResults: []
    }
  },
  mounted() {
    this.newQuestionResults = this.questionResults
  },
  watch: {
    questionResults() {
      this.newQuestionResults = this.questionResults
    }
  },
  methods: {
    updateData(newValue, index) {
      this.newQuestionResults[index] = newValue
      this.$emit('resultChange', this.newQuestionResults)
    }
  }
}
</script>

<style scoped>
.questions-block-wrapper {
  width: 100%;
  height: 95%;
  margin: 2.5% 0 2.5% 0;
}

table {
  width: 100%;
  height: 100%;
}

</style>
