<template>
  <div id="app">
    <audio src="@/assets/sounds/tick.wav" id="sound-tick"></audio>
    <audio src="@/assets/sounds/tock.wav" id="sound-tock"></audio>

    <BPM ref="bpm" @update="updateBPM" :measure="measure" />

    <PlayButton @play="start" @pause="stop" @changeMeasure="changeMeasure" />

    <div id="credit">
      Made by: Luc de Wit
    </div>
  </div>
</template>

<script>
// Import components
import BPM from "@/components/BPM"
import PlayButton from "@/components/PlayButton";

// Import others
import Timer from "@/timer.js"

export default {
  components: {
    BPM,
    PlayButton
  },

  data: () => ({
    measure: 4
  }),

  methods: {
    changeMeasure(amnt) {
      this.measure += amnt;
      this.updateBPM();
    },

    updateBPM() {
      this.stop();
      this.start(this.$refs.bpm.bpm, this.measure);
    },

    start() {
      this.stop();
      Timer.start(this.$refs.bpm.bpm, this.measure);
    },

    stop() {
      Timer.stop();
    }
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

#credit {
  color: #312654;
  font-size: x-large;
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
