function Timer(callback, timeInterval) {
    this.timeInterval = timeInterval;

    this.start = () => {
        this.expected = Date.now() + this.timeInterval;
        this.timeout = setTimeout(this.tick, this.timeInterval);
    }

    this.stop = () => {
        clearTimeout(this.timeout);
    }

    this.tick = () => {
        const drift = Date.now() - this.expected;

        if (drift < 300)
            callback();

        this.expected += drift;
        this.timeout = setTimeout(this.tick, this.timeInterval - drift);
    }
}

let globalTimer;
let i = 0;

export default {
    start: (bpm, measure) => {
        i = 0;
        const tick = document.getElementById("sound-tick");
        const tock = document.getElementById("sound-tock");

        const t = new Timer(() => {
            if (i % measure === 0) {
                tick.play();
            } else {
                tock.play();
            }

            i++;
        }, 60 / bpm * 1000);

        t.start();

        globalTimer = t;
    },

    stop: () => {
        globalTimer?.stop();
    }
}