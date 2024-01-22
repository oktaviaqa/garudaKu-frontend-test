<template>
    <article v-if="!isToday(data.pubDate)">
        <h4>{{ formatDateTime(data.pubDate) }}</h4>
        <div>
            <router-link :to="'/detail/' + data.title">
                <h2>
                    {{ data.title }}
                </h2>
            </router-link>

            <p>
                {{ truncateDescription(data.description, 15) }}

            </p>

        </div>
        <img :src="data.thumbnail" />
    </article>
</template>

<script>
import { isToday } from '@/utils/isToday'
import { truncateDescription } from '@/utils/truncateDescription'
export default {
    props: ['data'],
    methods: {
        isToday,
        truncateDescription,
        formatDateTime(dateTimeString) {
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            };

            const dateTime = new Date(dateTimeString);
            return dateTime.toLocaleString('en-US', options);
        },
    }
}
</script>