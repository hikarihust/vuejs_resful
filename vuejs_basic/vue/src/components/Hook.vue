<template>
    <div class="hook">
        <h1>{{ title }}</h1>
        <button @click="ChangeTitle">Click Me</button>
    </div>
</template>

<script>

export default {
  name: 'Hook',
  data() {
      return {
        title: 'Hook Main Data'
      }
  },
  methods: {
      ChangeTitle() {
          this.title = "easy to learning"
      }
  },
  beforeCreate() {
      alert("beforeCreate Hook");
  },
  created() {
      alert("created");
  },
  beforeUpdate() {
      alert("beforeUpdate");
  },
  updated() {
      alert("updated");
  }
}
</script>

<style>
</style>
