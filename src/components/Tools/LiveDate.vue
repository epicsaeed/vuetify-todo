<template>
  <div class="text-subtitle-1 ml-4">{{ date }}</div>
</template>

<script>
import { format } from "date-fns";

export default {
    data(){
        return {
            date: ''
        }
    },
    methods: {
        getDate() {
            this.date = format(new Date(), 'MMMM d, H:mm:ss a')
            setTimeout(this.getDate, 1000) //recursively calls itself every 1ms
        }
    },
    mounted(){
        this.getDate();
    }
};
</script>

<style></style>
