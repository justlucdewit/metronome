<template>
  <div id="play-button">
    <button class="arrow" @click="$emit('changeMeasure', 1)">
      <img src="@/assets/images/arrow_up.png" alt="">
    </button>

    <button @click="clicked" class="long">
      <img src="@/assets/images/play.png" alt="" v-if="state === 'pause'" >
      <img src="@/assets/images/pause.png" alt="" v-else >
    </button>

    <button class="arrow down" @click="$emit('changeMeasure', -1)">
      <img src="@/assets/images/arrow_up.png" alt="">
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    state: "pause"
  }),

  methods: {
    clicked() {
      this.state = this.state === "pause" ? "play" : "pause";
      this.$emit(this.state)
    }
  }
}
</script>

<style scoped lang="scss">
#play-button {
  margin-top: 20px;
  display: flex;
  justify-content: center;

  button {
    border-radius: 0;
    border: none;
    height: 48px;
    padding: 0 20px;
    background: #24184d;
    font-weight: bold;
    font-size: 20px;
    color: #d4cfe1;
    margin-left: 10px;

    &.down {
      transform: rotate(180deg);
    }

    &.long {
      width: 150px;
    }

    &:hover {
      cursor: pointer;
      background: #322464;
    }
  }
}
</style>