<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <new-friend @add-friend="addNewFriend"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :email="friend.email"
        :phone="friend.phone"
        :is-favorit="friend.favorit"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-contact="deleteContact"
      ></friend-contact>
    </ul>
  </section>
  <section>
    <div class="custom-header">
      <h1>active user</h1>
    </div>
    <user-data @set-custom-user="setCustomUser"></user-data>
    <active-user v-if="activeUser.name !== '' && activeUser.age !== ''" :activeUser="activeUser"></active-user>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        friends: [
          {
            id: '4523454325',
            name: 'John Doe',
            phone: '0123 23453 34',
            email: 'johndoe@gmail.com',
            favorit: true,
          },
          {
            id: '3634643644',
            name: 'Monica Lay',
            phone: '0123 64323 42',
            email: 'monicalay@gmail.com',
            favorit: false,
          },
          {
            id: '5634634544',
            name: 'Mikel Klandy',
            phone: '0532 35226 65',
            email: 'mikelklandy@gmail.com',
            favorit: false,
          }
        ],
        activeUser: {
          name: '',
          age: '',
        }
      }
    },
    methods: {
      toggleFavoriteStatus(id) {
        const indentifiedFriend = this.friends.find(friend => friend.id === id);
        indentifiedFriend.favorit = !indentifiedFriend.favorit;
      },
      addNewFriend(obj) {
        this.friends = [...this.friends, obj];
      },
      deleteContact(friendId) {
        this.friends = this.friends.filter(friend => friend.id !== friendId);
      },
      setCustomUser(newUserName, newUserAge) {
        this.activeUser.name = newUserName;
        this.activeUser.age = newUserAge;
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Jost', sans-serif;
  }

  body {
    margin: 0;
  }

  header,
  .custom-header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }

  #app ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #app li,
  #app form,
  .container {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }

  #app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
  }

  #app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  }

  #app button:hover,
  #app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  }
</style>