<template>
   <router-view/>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component({
        name: 'App'
    })
    export default class App extends Vue {
       
    };
</script>

