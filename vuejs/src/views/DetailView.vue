<template>
    <div>
        <HeaderVue />
        <section class="main-container-detail">
            <!-- header -->

            <HeaderDetail />

            <div class="detail-main">
                <div class="home">
                    <SectionLeftDetailVue />

                    <SectionRightDetailVue />
                </div>
            </div>

            <ArticleDetailVue />

            <BlockQuoteVue />

            <CardDetailVue />
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
    }
}
</script>