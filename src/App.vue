<template>
  <div id="app">
    <audio src="@/assets/sounds/Click1.wav" id="sound-tick"></audio>

    <BPM ref="bpm" />

    <PlayButton @play="start" @pause="stop" />

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

  methods: {
    start() {
      Timer.start(this.$refs.bpm.bpm);
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
