<template>
  <div class="col-12 d-flex justify-content-start">
    <img
      class="img-fluid mt-4 mb-4 rounded-circle"
      style="height: 10vh; width: auto"
      :src="message.creator.picture"
      alt=""
    />
    <h3 class="text-start text-align-center ms-3 mt-5 col-3">
      {{ message.creator.name }}
    </h3>
    <p class="p-4">
      {{ message.body }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {

    }
  }
}
</script>

<style>
</style>