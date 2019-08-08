<template>
    <product-details :product="product" />
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import ProductDetails from "../components/product/Details.vue"
    import { IProductModel, ProductModel } from "../models/products/product"

    @Component({
        components: {
            ProductDetails
        }
    })
    export default class Product extends Vue {
        product: IProductModel = new ProductModel();

        async mounted() {
            const slug = this.$route.params.slug;
            const product = await fetch(`/api/products/${slug}`).then(response => response.json());
            this.product = product;
        }
    }
</script>

