<template>
  <div class="questions">
    <table>
      <thead>
      <tr>
        <th></th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(questionResult, key) in questionResults" :key="key">
        <td>{{ questionResult.question }}</td>
        <td><input v-model="questionResult.result" :value="1" type="radio"/></td>
        <td><input v-model="questionResult.result" :value="2" type="radio"/></td>
        <td><input v-model="questionResult.result" :value="3" type="radio"/></td>
        <td><input v-model="questionResult.result" :value="4" type="radio"/></td>
        <td><input v-model="questionResult.result" :value="5" type="radio"/></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'QuestionBlock',
  props: {
    questionResults: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
