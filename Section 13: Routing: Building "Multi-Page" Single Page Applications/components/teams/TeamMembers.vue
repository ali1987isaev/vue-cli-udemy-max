<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">user t2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users', 'teams'],
  props: ['teamId'],
  data() {
    return {
      teamName: 'Test',
      members: [],
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log('TeamMembers - beforeRouteUpdate')
    console.log('to', to)
    console.log('from', from)
    next()
  },
  watch: {
    // $route(newRoute) {
      // console.log('this.$route', this.$route)
      // console.log('newRoute', newRoute)
    //   this.loadTeamMembers(newRoute)
    // }
    teamId(newTeamId) {
      // console.log('this.$route', this.$route)
      // console.log('newRoute', newRoute)
      this.loadTeamMembers(newTeamId)
    }
  },
  methods: {
    loadTeamMembers(teamId) {
      // console.log('this.$route', this.$route)
      // const teamId = route.params.teamId
      const selectedTeam = this.teams.find(team => team.id === teamId)
      const members = selectedTeam.members
      const selectedMembers = []
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member)
        selectedMembers.push(selectedUser)
      }
      this.teamName = selectedTeam.name
      this.members = selectedMembers;
    }
  },
  created() {
    // this.loadTeamMembers(this.$route)
    this.loadTeamMembers(this.teamId)
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>