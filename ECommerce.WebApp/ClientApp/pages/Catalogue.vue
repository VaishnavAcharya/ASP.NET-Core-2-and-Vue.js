<template>
    <product-list :products="products" />
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import ProductList from "../components/catalogue/ProductList.vue"
    import { IProductModel, ProductModel } from "../models/products/product"

    @Component({
        components: {
            ProductList
        },
        name: "Catalogue"
    })
    export default class Catalogue extends Vue {
        products: IProductModel[] = [];

        async mounted() {
            const products = await fetch("/api/products").then(response => response.json());
            this.products = products;
        }
    }
</script>

