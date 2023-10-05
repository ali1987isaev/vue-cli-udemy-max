<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" anotherProp="test"></slot>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        goals: ['Complete the course.', 'Learn the Vue.js.']
      }
    }
  }
</script>