<template>
  <div class="wrapper">
    <div class="card-block">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLayout"
}
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  grid-template-rows: 1fr 3.5fr 1fr;
  background-color: dodgerblue;
}

.card-block {
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
</style>
