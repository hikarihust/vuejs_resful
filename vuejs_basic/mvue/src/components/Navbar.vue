<template>
  <div>
      <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/profile/1">Profile(1)</router-link></li>
        </ul>
      </nav>

        <div>
            <ul>
                <li v-for="(id, index) in userIds" :key="index">
                    <router-link :to="{name: 'Profile', params:{ user_id: id}}">Profile {{ id }}</router-link>
                </li>
            </ul>
        </div>

        <button @click="contact">Contact</button>
        <button @click="about">About</button>
        <div>

        </div>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
      return {
          userIds: ['1', '2', '3', '4', '5', '6', '7', '8']
      }
  },
  methods: {
      contact() {
          this.$router.push({ name: 'Contact' });
      },
      about() {
          this.$router.push({ name: 'About' });
      }
  }
}
</script>

<style scoped>
    nav {
        text-align: center;
    }
    nav ul {
        padding: 0;
    }
    nav li {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        padding: 8px;
    }
    a.router-link-exact-active {
        color: red;
    }
</style>
