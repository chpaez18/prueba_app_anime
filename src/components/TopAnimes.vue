<template>
    <div class="p-6 w-full">

        <div v-if="loading" class="text-gray-500 text-center">Cargando...</div>

        <div v-if="error" class="text-red-500 text-center">{{ error }}</div>

        <div v-if="!loading && animes.length" class="flex flex-wrap justify-center gap-6">
            <div v-for="(anime, index) in animes" :key="index" @click="goToDetails(anime.mal_id)" class="cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 bg-gray-100 rounded shadow-md hover:bg-gray-200">
                <p class="text-gray-800 font-semibold">{{ anime.title }}</p>
                <p class="text-sm text-gray-600">Puntuación: {{ anime.score }}</p>
            </div>
        </div>

    </div>
  </template>

<script setup>
    import { useAnimeStore } from '@/stores/animes/index.js';
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router'; 

    // Definimos el store a utilizar
    //---------------------------------------------
        const animeStore = useAnimeStore();
        const router = useRouter(); // Instancia del router
    //---------------------------------------------

    // Ejecutamos la acción para cargar los animes al montar el componente
    //--------------------------------------------------------------------
        onMounted(() => {
        animeStore.fetchTopAnimes();
        });
    //--------------------------------------------------------------------


    // Retornamos las propiedades reactivas del store directamente
    const { animes, loading, error } = animeStore;

    // Funcion para navegar a la vista de detalles de un anime
    //--------------------------------------------------------------------
        function goToDetails(id) {
            router.push({ name: 'anime-details', params: { id } });
        }
    //--------------------------------------------------------------------
</script>
