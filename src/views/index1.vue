<template>
  <div>
    <div @click="getIndex('aaa')">aaa</div>
    <div @click="getIndex('bbb')">bbb</div>
  </div>
</template>

<script>
export default {
  name: "index1",
  methods: {
    getIndex(e) {
      console.log(e)
    }
  },
  mounted () {}
}
</script>

<style scoped>

</style>
