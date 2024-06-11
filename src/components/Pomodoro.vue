<script setup>
import { ref } from "vue";

import BreakCounter from "./BreakCounter.vue";
import LongBreakCounter from "./LongBreakCounter.vue";
import WorkCounter from "./WorkCounter.vue";

const selectedComponent = ref("WorkCounter");

const changeSelectedComponent = (component) => {
  selectedComponent.value = component;
};
</script>

<template>
  <div class="app">
    <h1 class="text-3xl font-bold bg-teal-200 p-10 mb-10">Pomodoro App</h1>

    <div class="my-10">
      <button
        @click="changeSelectedComponent('WorkCounter')"
        class="font-bold mx-4 cursor-pointer bg-red-400 p-3 rounded-md hover:bg-red-500 active:bg-red-300"
      >
        Work Counter
      </button>

      <button
        @click="changeSelectedComponent('BreakCounter')"
        class="font-bold mx-4 cursor-pointer bg-blue-400 p-3 rounded-md hover:bg-blue-500 active:bg-blue-300"
      >
        Break Counter
      </button>

      <button
        @click="changeSelectedComponent('LongBreakCounter')"
        class="font-bold mx-4 cursor-pointer bg-yellow-200 p-3 rounded-md hover:bg-yellow-300 active:bg-yellow-100"
      >
        LongBreak Counter
      </button>
    </div>

    <div class="container shadow-md mx-auto rounded-md">
      <WorkCounter v-if="selectedComponent === 'WorkCounter'" />
      <BreakCounter v-else-if="selectedComponent === 'BreakCounter'" />
      <LongBreakCounter v-else-if="selectedComponent === 'LongBreakCounter'" />
    </div>
  </div>
</template>

<style scoped>
.app {
  margin: 0;
  text-align: center;
}
</style>
