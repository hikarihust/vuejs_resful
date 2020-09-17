<template>
  <div class="profile">
      <h2>Profile Page ({{ userId }})</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  components: {
  },
  data() {
      return {
          userId: this.$route.params.user_id
      }
  },
  methods: {
      updateId() {
          this.userId = this.$route.params.user_id
      }
  },
  watch: {
      $route: 'updateId'
  }
}
</script>

<style scoped>
    h2 {
        color: green
    }
</style>
