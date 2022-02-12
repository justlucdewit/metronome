<template>
  <div id="play-button">
    <button @click="clicked">
      {{ state === "pause" ? "▶" : "⏸" }}
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
  text-align: center;
  margin-top: 20px;

  button {
    border-radius: 0;
    border: none;
    height: 48px;
    width: 200px;
    background: #24184d;
    font-weight: bold;
    font-size: 20px;
    color: #d4cfe1;

    &:hover {
      cursor: pointer;
      background: #322464;
    }
  }
}
</style>