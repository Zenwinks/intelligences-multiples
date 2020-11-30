<template>
  <div class="questions-block-wrapper">
    <table>
      <thead>
      <tr>
        <th></th>
        <th>😟</th>
        <th>😕</th>
        <th>😐</th>
        <th>🙂</th>
        <th>😀</th>
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
