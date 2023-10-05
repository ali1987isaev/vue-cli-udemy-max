import { createApp } from 'vue';
import App from './App.vue'

import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend.vue'
import UserData from './components/UserData.vue'
import ActiveUser from './components/ActiveUser.vue'

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);
app.component('user-data', UserData);
app.component('active-user', ActiveUser);

app.mount('#app');
