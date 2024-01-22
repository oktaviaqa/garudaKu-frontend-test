<template>
    <header>
        <h1 class="heading-1">{{ news.title }}</h1>

        <div class="sub-heading">
            <p>Saturday, <span>January 01, 2024</span></p>
        </div>
    </header>
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
        ...mapState(['news'])
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
