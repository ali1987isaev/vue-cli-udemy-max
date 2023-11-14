import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/teams'}, // URL changes
    {path: '/teams', component: TeamsList}, 
    // OR
    // {path: '/teams', component: TeamsList, alias: '/'}, // the url doesn't change
    {
      path: '/users', 
      component: UsersList,
      beforeEnter(to, from, next) {
        console.log('Users beforeEnter')
        console.log('to', to)
        console.log('from', from)
        next()
      }
    },
    {path: '/teams/:teamId', component: TeamMembers, props: true}, // the prop name in this case will be - 'teamId'
    // {path: '/:notFound(.*)', redirect: '/teams'}
    {path: '/:notFound(.*)', component: NotFound}
  ],
  linkActiveClass: 'active',
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0}
  }
});

export default router;