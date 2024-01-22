<template>
    <div class="list" v-if="isToday(data.pubDate)">
        <img :src=data.thumbnail alt="photo-1" />

        <p>
            {{ truncateDescription(data.description, 10) }}
        </p>
    </div>
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