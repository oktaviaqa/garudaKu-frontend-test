<template>
    <div>
        <HeaderVue />
        <section class="main-container-detail">
            <!-- header -->

            <HeaderDetail />

            <div class="detail-main">
                <div class="home">
                    <SectionLeftDetailVue />
                    <div class="right">
                        <h2>Latest News</h2>
                        <div class="border-detail"></div>
                        <div class="lists">
                            <SectionRightDetailVue v-for="data in news.data.posts" :key="data.link" :data="data" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- <ArticleDetailVue />

            <BlockQuoteVue />

            <CardDetailVue /> -->
        </section>
    </div>
</template>

<script>
import HeaderDetail from '@/components/HeaderDetail.vue';
import HeaderVue from '../components/Header.vue'
import SectionLeftDetailVue from '../components/SectionLeftDetail.vue';
import SectionRightDetailVue from '../components/SectionRightDetail.vue';
import ArticleDetailVue from '../components/ArticleDetail.vue';
import BlockQuoteVue from '../components/BlockQuote.vue';
import CardDetailVue from '../components/CardDetail.vue';
import { mapActions, mapState } from 'vuex';
export default {
    name: "DetailView",
    components: {
        HeaderVue,
        HeaderDetail,
        SectionLeftDetailVue,
        SectionRightDetailVue,
        ArticleDetailVue,
        BlockQuoteVue,
        CardDetailVue
    },
    computed: {
        ...mapState(['news'])
    },
    methods: {
        ...mapActions(['fetchNews'])
    },
    created() {
        this.fetchNews();
    }
}
</script>