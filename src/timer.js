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
        callback();
        this.expected += drift;
        this.timeout = setTimeout(this.tick, this.timeInterval - drift);
    }
}

let globalTimer;

export default {
    start: (bpm) => {
        const tick = document.getElementById("sound-tick");

        const t = new Timer(() => {
            tick.play();
        }, 60 / bpm * 1000);

        t.start();

        globalTimer = t;
    },

    stop: () => {
        globalTimer.stop();
    }
}