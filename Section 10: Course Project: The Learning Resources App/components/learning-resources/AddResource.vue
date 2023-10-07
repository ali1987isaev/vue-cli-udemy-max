<template>
  <base-card>
    <form @submit.prevent="addResource" ref="addResourceForm">
      <div class="form-control">
        <label for="title"></label>
        <input type="text" id="title" name="title" placeholder="Resource Name">
      </div>
      <div class="form-control">
        <label for="description"></label>
        <textarea name="description" id="description" rows="3" placeholder="Description"></textarea>
      </div>
      <div class="form-control">
        <label for="link"></label>
        <input type="url" id="link" name="link" placeholder="Resource Link">
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
  <base-dialog v-if="showError" title="Invalid Input" @close="confirmError">
    <!-- <template #header><h2>Error</h2></template> -->
    <template #default>
      <p>The value of the inputs must be added!</p>
    </template>
    <template #actions>
        <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';

export default {
  components: {
    BaseButton
  },
  inject: ['addNewResource'],
  data() {
    return {
      showError: false,
    }
  },
  mounted() {
    this.$refs.addResourceForm['title'].focus();
  },
  methods: {
    addResource() {
      const title = this.$refs.addResourceForm['title'].value;
      const description = this.$refs.addResourceForm['description'].value;
      const link = this.$refs.addResourceForm['link'].value;

      if (title.trim() === '' || description.trim() === '' || link === '') {
        this.showError = true;
        return;
      }

      const newResourceObject = {
        id: new Date().valueOf(),
        title,
        description,
        link,
      }

      this.addNewResource(newResourceObject);
      this.resetData();
    },
    resetData() {
      this.$refs.addResourceForm['title'].value = '';
      this.$refs.addResourceForm['description'].value = '';
      this.$refs.addResourceForm['link'].value = '';
      this.$refs.addResourceForm['title'].focus();
    },
    confirmError() {
      this.showError = false;
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>