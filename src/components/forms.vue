<template>
  <form>
    <select id="myNum">
      <option v-for="num in classNumber" :key="num" :value="num">
        {{ num }}人の教室▼
      </option>
    </select>
  </form>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  setup() {
    const classNumber = computed(() => {
      return [...Array(366)].map((_, i) => i);
    });
    return {
      classNumber,
    };
  },
});
</script>
<style scoped>
</style>
