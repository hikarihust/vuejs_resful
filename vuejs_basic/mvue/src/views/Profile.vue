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
  }
}
</script>

<style scoped>
    h2 {
        color: green
    }
</style>
