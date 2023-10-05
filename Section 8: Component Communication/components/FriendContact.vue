<template>
  <li>
    <h2>{{ name }} {{ isFavorit ? '(Favorit)' : '' }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle Favorit</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone: </strong> {{ phone }}
      </li>
      <li>
        <strong>Email: </strong> {{ email }}
      </li>
    </ul>
    <button @click="$emit('delete-contact', id)">Delete</button>
  </li>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true
      },
      isFavorit: {
        type: Boolean,
        required: true,
      },
      email: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
    },
    emits: ['toggle-favorite', 'delete-contact'],
    // emits: {
    //   'toggle-favorite': function(id) {
    //     if (id) {
    //       return true;
    //     } else {
    //       console.warn('ID is missing!');
    //       return false;
    //     }
    //   },
    // },
    data() {
      return {
        detailsAreVisible: false,
      }
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
        this.$emit('toggle-favorite', this.id);
      },
      // deleteContact() {
      //   this.$emit('delete-contact', this.id);
      // }
    }
  }
</script>
