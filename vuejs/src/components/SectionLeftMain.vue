<template>
    <section class="main-container-left">
        <h2>Top News</h2>
        <div class="border-subheading"></div>
        <div class="container-top-left">
            <article>
                <div style="color: #cbcbcb; font-size: 13px; font-weight: bold; margin-bottom: 10px;">
                    <span>{{ formattedDate }}</span>
                </div>
                <router-link :to="'/detail/' + newsData.title">
                    <img :src=newsData.thumbnail />
                </router-link>
                <div>
                    <router-link :to="'/detail/' + newsData.title">
                        <h3>{{ newsData.title }}</h3>
                    </router-link>

                    <p>
                        {{ truncateDescription(newsData.description, 15) }}
                    </p>

                    <!-- <router-link to="/detail">Read More <span>>></span></router-link> -->
                </div>
            </article>
        </div>

        <div class="container-bottom-left">
            <SectionBottom v-for="data in news.data.posts" :key="data.link" :data="data" />
        </div>

    </section>
</template>

<script>
import { formatCustomDate } from '@/utils/dateUtils'
import SectionBottom from './SectionBottom.vue';
import { mapActions, mapState } from 'vuex';
import { truncateDescription } from '@/utils/truncateDescription'
export default {
    props: ['newsData'],
    computed: {
        formattedDate() {
            return formatCustomDate(this.newsData.pubDate);
        },
        ...mapState(['news'])
    },
    methods: {
        truncateDescription,
        ...mapActions(['fetchNews']),

    },
    created() {
        this.fetchNews();
    },
    components: {
        SectionBottom
    }
}
</script>