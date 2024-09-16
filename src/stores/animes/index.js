import { defineStore } from 'pinia'
import { generateID, sleep } from '../../utils';//eliminar
import axios from 'axios';

export const useAnimeStore = defineStore('animeStore', {

    state: () => ({
        animes: [],
        loading: false,
        error: null,
    }),

    actions: {
        async fetchTopAnimes() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get('https://api.jikan.moe/v4/top/anime');
                this.animes = response.data.data; // Guardamos la lista de animes populares
            } catch (error) {
                this.error = 'Hubo un problema al cargar los animes';
            } finally {
                this.loading = false;
            }
        },
        async fetchAnimeById(id) {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
                return response.data.data; // Retornamos los detalles del anime
            } catch (error) {
                this.error = 'No se pudo cargar el anime seleccionado';
            }
        }
    },
    persist: true
})