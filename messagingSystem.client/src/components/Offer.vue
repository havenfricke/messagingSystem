<template>
  <button class="border border-light bg-light col-12" @click="goTo('Offer')">
    <h4 class="p-3">{{ offer.name }}</h4>
  </button>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    offer: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();
    return {
      goTo(page) {
        router.push({
          name: page,
          params: { id: props.offer.id }
        });
      },
    }
  }
}
</script>

<style>
</style>