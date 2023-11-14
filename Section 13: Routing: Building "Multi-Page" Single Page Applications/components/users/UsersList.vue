<template>
  <button @click="submitRedirect">click to redirect</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    submitRedirect() {
      this.$router.push('/teams')
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UserList beforeRouteEnter')
    console.log('to', to)
    console.log('from', from)
    next()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>