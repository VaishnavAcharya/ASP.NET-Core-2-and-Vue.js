<template>
    <div class="products">
        <h1>Products</h1>
        <div class="list">
            <div class="item" v-for="product in products" :key="product.slug">
                <h3 @click="select(product)">{{ product.name }}</h3>
                <img :src="product.thumbnail" :alt="product.name" @click="select(product)" />
                <p @click="select(product)">
                    {{ product.shortDescription }}
                </p>
                <p @click="select(product)">{{ product.price }}</p>
                <hr />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    import { IProductModel } from "../../models/products/product";

    @Component({})
    export default class ProductList extends Vue {

        @Prop({ required: true, type: Array })
        public products!: IProductModel[]

        select(product: any) {
            this.$router.push(`/products/${product.slug}`);
        }
    };

</script>
<style>
    * {
        box-sizing: border-box !important;
    }

    .products {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .list .item {
        width: 50%;
        float: left;
        padding: 20px 10px 20px 0;
    }

    .list img,
    .list h3,
    .list p {
        cursor: pointer;
    }

    .list img {
        width: 100px;
    }
</style>
