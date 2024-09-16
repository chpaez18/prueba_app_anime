<template>
    <div v-if="selectedAnime" class="max-w-screen-lg mx-auto p-6">
      <!-- Botón para regresar al listado -->
      <div class="mb-4">
        <button @click="goBack" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Volver al listado
        </button>
      </div>

      <div class="flex flex-col lg:flex-row items-center">
        <!-- Imagen del anime -->
        <div class="w-full lg:w-1/3 mb-4 lg:mb-0">
          <img :src="selectedAnime.images.jpg.large_image_url" alt="Imagen del anime" class="rounded shadow-md w-full">
        </div>

        <!-- Detalles del anime -->
        <div class="w-full lg:w-2/3 lg:pl-8">
          <h1 class="text-3xl font-bold mb-4">{{ selectedAnime.title }}</h1>
          <p class="text-gray-600 mb-4">{{ selectedAnime.synopsis }}</p>
          <p class="mb-2"><strong>Puntuación:</strong> {{ selectedAnime.score }}</p>
          <p class="mb-2"><strong>Episodios:</strong> {{ selectedAnime.episodes }}</p>

          <!-- Géneros -->
          <div class="mt-4">
            <h3 class="font-bold text-lg mb-2">Géneros</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="genre in selectedAnime.genres" :key="genre.mal_id" class="px-3 py-1 bg-gray-200 text-gray-800 rounded-full">
                {{ genre.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center p-6">Cargando detalles del anime...</div>
  </template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useAnimeStore } from '@/stores/animes/index.js';
import { onMounted, ref } from 'vue';

    const route = useRoute(); // Obtenemos los parámetros de la ruta
    const router = useRouter(); // Instancia del router para navegar
    const animeId = ref(route.params.id); // Obtenemos el ID del anime seleccionado

    const animeStore = useAnimeStore();
    const selectedAnime = ref(null);

    onMounted(() => {
        fetchAnimeDetails(); // Llamamos a la API para obtener los detalles del anime
    });

    async function fetchAnimeDetails() {
        const anime = await animeStore.fetchAnimeById(animeId.value);
        selectedAnime.value = anime;
    }

    function goBack() {
        router.push({ name: 'ListadoView' });
    }
</script>


