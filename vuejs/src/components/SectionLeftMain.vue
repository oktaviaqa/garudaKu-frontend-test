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

        <div class="container-bottom-left">
            <article>
                <img src="images/bottom-left-1.jpg" />
                <div>
                    <h3>Best smart speakers for the year</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Commodi iure modi animi cupiditate. Explicabo, nihil?
                    </p>

                    <a href="#">Read More <span>>></span></a>
                </div>
            </article>

            <article>
                <img src="images/bottom-left-2.jpg" />
                <div>
                    <h3>
                        iPad Pro, reviewed: Has the iPad become my main computer now?
                    </h3>
                    <p>
                        {{ truncateDescription(newsData.description, 20) }}
                    </p>

                    <a href="#">Read More <span>>></span></a>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
import { formatCustomDate } from '@/utils/dateUtils'

export default {
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