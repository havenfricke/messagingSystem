<template>
  <div class="container-fluid">
    <div class="row p-2">
      <div
        v-for="o in offers"
        :key="o.id"
        class="col-3 hoverable bg-light shadow text-center"
      >
        <Offer :offer="o" />
      </div>
    </div>
    <div
      class="
        home
        flex-grow-1
        d-flex
        flex-column
        align-items-center
        justify-content-center
      "
    >
      <div class="home-card row p-5 bg-white rounded elevation-3">
        <form @submit.prevent="createOffer">
          <input v-model="editable.name" type="text" placeholder="Offer Name" />
          <button>Create Offer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity"
import { offersService } from "../services/OffersService"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { watchEffect } from "@vue/runtime-core"
export default {
  name: 'Home',
  setup() {
    const editable = ref({});
    watchEffect(async () => {
      try {
        await offersService.getAllOffers()
      } catch (error) {
        logger.error(error)
      }
    });
    return {
      editable,
      async createOffer() {
        try {
          await offersService.createOffer(editable.value)
        } catch (error) {
          logger.error(error)
        }
      },
      offers: computed(() => AppState.offers)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.hoverable:hover {
  transform: scale(1.03);
  filter: drop-shadow(0px 15px 10px rgba(0, 0, 0, 0.3));
  transition: 50ms ease-in-out;
  cursor: pointer;
}
.hoverable:active {
  transform: scale(0.98);
  transition: 50ms ease-in-out;
}
</style>
