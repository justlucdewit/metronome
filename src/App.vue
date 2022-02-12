<template>
  <div id="app">
    <BPM />
  </div>
</template>

<script>
import BPM from "@/components/BPM"

export default {
  components: {
    BPM
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  background: #1a1233;
  color: #d4cfe1;
  font-weight: bold;
  font-size: 30px;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
