<template>
    <section class="main-container-left">
        <h2>Top News</h2>
        <div class="border-subheading"></div>
        <div class="container-top-left">
            <article>
                <div style="color: #cbcbcb; font-size: 13px; font-weight: bold; margin-bottom: 10px;">
                    <span>{{ formattedDate }}</span>
                </div>
                <img :src=newsData.thumbnail />

                <div>
                    <h3>{{ newsData.title }}</h3>

                    <p>
                        {{ truncateDescription(newsData.description, 20) }}
                    </p>

                    <router-link to="/detail">Read More <span>>></span></router-link>
                </div>
            </article>
        </div>
        <SectionBottom />

    </section>
</template>

<script>
import SectionBottom from './SectionBottom.vue';
import { formatCustomDate } from '@/utils/dateUtils'

export default {
    components: {
        SectionBottom
    },
    props: ['newsData'],
    computed: {
        formattedDate() {
            return formatCustomDate(this.newsData.pubDate);
        }
    },
    methods: {
        truncateDescription(description, wordCount) {
            const words = description.split(' ');
            if (words.length > wordCount) {
                return words.slice(0, wordCount).join(' ') + '...';
            } else {
                return description;
            }
        }
    }
}
</script>