<template>
    <article v-if="isToday(data.pubDate)">
        <router-link :to="'/detail/' + data.title">
            <img :src="data.thumbnail" />

        </router-link>
        <div>
            <router-link :to="'/detail/' + data.title">
                <h3>{{ data.title }}</h3>

            </router-link>
            <p>
                {{ truncateDescription(data.description, 10) }}
            </p>
            <!-- <a href="#">Read More <span>>></span></a> -->
        </div>
    </article>
</template>

<script>
import { isToday } from '@/utils/isToday';
export default {
    props: ['data'],
    methods: {
        truncateDescription(description, wordCount) {
            const words = description.split(' ');
            if (words.length > wordCount) {
                return words.slice(0, wordCount).join(' ') + '...';
            } else {
                return description;
            }
        },
        isToday
    }
}
</script>