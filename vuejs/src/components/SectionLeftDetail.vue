<template>
    <div class="left">
        <img :src=news.thumbnail class="home-img" alt="pppppppppppppp" />
        <div style="color: #9c9c9c; font-size: 17px; font-weight: bold; margin-bottom: 10px;">
            <span>{{ news.description }}</span>
        </div>

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            news: {}
        };
    },
    computed: {
        // ...mapState(['news'])
    },
    methods: {
        ...mapActions(['fetchNews'])
    },
    async created() {
        // Mengambil judul berita dari parameter URL
        const title = this.$route.params.title;

        // Mengambil data berita berdasarkan judul menggunakan action
        await this.fetchNews(); // Trigger the action to fetch all news
        this.news = this.$store.getters.getNewsByTitle(title);
    }
}
</script>