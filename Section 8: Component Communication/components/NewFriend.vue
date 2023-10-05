<template>
  <form @submit.prevent="addFriend">
    <input v-model="nameValue" type="text" placeholder="Name">
    <input v-model="emailValue" type="email" placeholder="Email">
    <input v-model="telValue"  type="tel" placeholder="Phone number">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
  export default {
    emits: ['add-friend'],
    data() {
      return {
        nameValue: '',
        emailValue: '',
        telValue: '',
      }
    },
    methods: {
      addFriend() {
        if (this.nameValue.trim() === '' || this.emailValue.trim() === '' || this.telValue.trim() === '' ) return;
        this.addFriendHandler();
        this.resetData();
      },
      addFriendHandler() {
        this.$emit('add-friend', {
          id: new Date().toISOString(),
          name: this.nameValue.trim(),
          phone: this.telValue.trim(),
          email: this.emailValue.trim(),
          favorit: false,
        });
      },
      resetData() {
        this.nameValue = '';
        this.telValue = '';
        this.emailValue = '';
      },
    }
  }
</script>