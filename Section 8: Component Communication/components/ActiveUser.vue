<template>
  <div class="container">
    <h2>{{ activeUser.name }}</h2>
    <h3>{{ activeUser.age }}</h3>
  </div>
</template>

<script>
  export default {
    props: ['activeUser'],
  }
</script>