<template>
  <table>
    <tr-component v-for="(rowData, index) in tableData" :key="rowData.key" :row-index="index"></tr-component>
  </table>
</template>

<script>
import TrComponent from './TrComponent'
export default {
  components: {
    TrComponent
  },
  computed: {
    tableData() {
      return this.$store.state.tableData
    }
    // turnMessage() {
    //   return this.$store.getters.turnMessage
    // }, //turnMessage 사용예
  }
}
</script>

<style></style>
