<script setup>
import { ref } from "vue";

const counter = ref(300); // 5 * 60 = 300,
const intervalId = ref(null);
const isStarted = ref(false);
const isStoped = ref(true);

const start = () => {
  console.log("start function called");

  if (intervalId.value) {
    stop();
    return;
  }

  isStarted.value = true;
  isStoped.value = false;

  intervalId.value = setInterval(() => {
    if (counter.value < 1) {
      alert("Work Cycle is completed!");
      stop();
      return;
    }

    counter.value -= 1;
  }, 1000);
};

const stop = () => {
  console.log("stop function called", intervalId.value);

  clearInterval(intervalId.value);

  isStarted.value = false;
  isStoped.value = true;
  intervalId.value = null;
};

const formattedTime = (counter = 10) => {
  return `${Math.floor(counter / 60)
    .toString()
    .padStart(2, "0")}:${Math.floor(counter % 60)
    .toString()
    .padStart(2, "0")}`;
};
</script>

<template>
  <div class="p-10">
    <small class="text-xl font-semibold">Break Counter</small>

    <h2 class="timer text-3xl font-extrabold">{{ formattedTime(counter) }}</h2>

    <button
      class="font-bold mx-4 cursor-pointer bg-teal-400 p-3 rounded-md hover:bg-teal-500 active:bg-teal-300"
      v-if="isStoped"
      @click="start()"
    >
      Start
    </button>

    <button
      class="font-bold mx-4 cursor-pointer bg-red-400 p-3 rounded-md hover:bg-red-500 active:bg-red-300"
      v-if="isStarted"
      @click="stop()"
    >
      Stop
    </button>
  </div>
</template>

<style scoped>
.timer {
  margin: 1rem 0;
  padding: 1rem;
  font-size: 3rem;
}

button {
  font-size: 2rem;
  padding: 1rem;
}
</style>
