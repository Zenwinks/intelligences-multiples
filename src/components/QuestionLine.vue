<template>
  <tr>
    <td class="question">{{ newQuestionResult.question }}</td>
    <td>
      <input v-model="newQuestionResult.result" :value="1" type="radio" @change="$emit('update', newQuestionResult)"/>
    </td>
    <td>
      <input v-model="newQuestionResult.result" :value="2" type="radio" @change="$emit('update', newQuestionResult)"/>
    </td>
    <td>
      <input v-model="newQuestionResult.result" :value="3" type="radio" @change="$emit('update', newQuestionResult)"/>
    </td>
    <td>
      <input v-model="newQuestionResult.result" :value="4" type="radio" @change="$emit('update', newQuestionResult)"/>
    </td>
    <td>
      <input v-model="newQuestionResult.result" :value="5" type="radio" @change="$emit('update', newQuestionResult)"/>
    </td>
  </tr>
</template>

<script>
export default {
  name: "QuestionLine",
  props: {
    questionResult: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      newQuestionResult: {}
    }
  },
  mounted() {
    this.newQuestionResult = this.questionResult
  },
  watch: {
    questionResult() {
      this.newQuestionResult = this.questionResult
    }
  }
}
</script>

<style scoped>
.question {
  width: 70%;
  font-weight: bold;
}

input[type=radio] {
  cursor: pointer;
}
</style>
