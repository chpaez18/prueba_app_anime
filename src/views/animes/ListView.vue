<template>
  <div class="w-full max-w-screen-xl mx-auto">
    <h1 class="text-3xl font-bold text-center my-8">Listado de Animes Populares</h1>
    <TopAnimes />
  </div>
</template>

<script>
import TopAnimes from '@/components/TopAnimes.vue';

export default {
  components: {
    TopAnimes,
  },
};
</script>
