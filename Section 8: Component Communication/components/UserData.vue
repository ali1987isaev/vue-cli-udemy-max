<template>
  <form @submit.prevent="$emit('set-custom-user', activeUserName, activeUserAge)">
    <div>
      <label for="active-user-name"></label>
      <input v-model="activeUserName" type="text" id="active-user-name">
    </div>
    <div>
      <label for="active-user-age"></label>
      <input v-model="activeUserAge" type="text" id="active-user-age">
    </div>
    <div>
      <button type="submit">Add active user</button>
    </div>
  </form>
</template>

<script>
  export default {
    emits: ['set-custom-user'],
    data() {
      return {
        activeUserName: '',
        activeUserAge: '',
      }
    }
  }
</script>