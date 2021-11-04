<template>
    <div>
      <h2>graphData {{ graphData }}</h2>
    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import {useProjectStore} from "./stores/project";
import {GraphData} from "@antv/g6";


export default defineComponent({
  setup() {
    const project = useProjectStore();
    const graphData: GraphData = project.graphData;
    return {
      graphData
    };
  },
});
</script>

<style scoped>
img {
  width: 200px;
}

button,
input {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
