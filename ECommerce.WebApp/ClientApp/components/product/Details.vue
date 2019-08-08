<template>
    <div class="details">
        <h1>{{product.name}}</h1>
        <img :src="product.thumbnail" :alt="product.name" />
        <p>{{ product.shortDescription }}</p>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class ProductDetails extends Vue {
        @Prop({ required: true, type: Object }) product: object | undefined;
    };
</script>

<style>
    .details{
        padding: 20px;
    }
</style>


