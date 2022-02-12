<template>
  <div id="bpm-meter">

    <div id="bpm-buttons">
      <div class="bpm-button topleft" @click="bpm += 1"><div class="txt">🡅</div></div>
      <div class="bpm-button topright" @click="bpm += 10"><div class="txt">⯭</div></div>
      <div class="bpm-button bottomleft" @click="bpm -= 1"><div class="txt">🡅</div></div>
      <div class="bpm-button bottomright" @click="bpm -= 10"><div class="txt">⯭</div></div>
    </div>

    <div id="bpm-display">
        {{ bpm }} BPM
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    bpm: 120
  })
}
</script>

<style scoped lang="scss">
#bpm-meter {
  margin-top: calc(30vh - 100px);
  text-align: center;
  user-select: none;

  #bpm-buttons {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    .bpm-button {
      height: 150px;
      width: 150px;
      background: #24184d;
      border-top-right-radius: 100%;

      &:hover {
        background: #322464;
        cursor: pointer;
      }

      &.topleft {
        transform: scaleX(-1);
        justify-self: right;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        .txt {
          padding-left: 30px;
          padding-bottom: 20px;
        }
      }

      &.topright {
        display: flex;
        justify-content: center;
        align-items: center;

        .txt {
          padding-left: 30px;
          padding-bottom: 10px;
        }
      }

      &.bottomleft {
        transform: scaleY(-1) scaleX(-1);
        justify-self: right;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        .txt {
          padding-left: 30px;
          padding-bottom: 20px;
        }
      }

      &.bottomright {
        transform: scaleY(-1);
        display: flex;
        justify-content: center;
        align-items: center;

        .txt {
          padding-left: 30px;
          padding-bottom: 10px;
        }
      }
    }
  }

  #bpm-display {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #3f2f75;
    border-radius: 100%;
    width: 200px;
    height: 200px;
    z-index: 1000;
    position: relative;
    bottom: 250px
  }
}
</style>
