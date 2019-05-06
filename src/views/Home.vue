<template>
    <v-app :color="'#ffffff'">
        <v-toolbar :color="'#ffffff'" app fixed>
            <v-layout>
                <v-container class="text-left">
                    <v-toolbar-title>Shop Market</v-toolbar-title>
                </v-container>
            </v-layout>
        </v-toolbar>

        <v-content>
            <v-container grid-list-md>
                <v-layout row wrap>
                    <v-flex md3 sm6 xs12 sm12 v-for="product in products">
                        <v-card>
                            <v-img :src="product.featuredPhoto" aspect-ratio="1"></v-img>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{ product.name }}</h3>
                                </div>
                            </v-card-title>
                            <hr style="color: #cccccc; width: 80%; text-align: center; margin: 0 auto">
                            <v-card-actions>
                                {{ product.price }}
                                <v-spacer></v-spacer>
                                <v-btn color="#1565C0" @click="viewProduct(product)"
                                       class="white--text font-weight-light">ADD TO CART
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>

            <keep-alive>
                <template>
                    <v-layout row justify-center>
                        <v-dialog v-model="dialog" width="80%">
                            <v-card>
                                <v-card-text>
                                    <v-container grid-list-md>
                                        <v-layout wrap>
                                            <!-- images container -->
                                            <v-flex xs12 sm6 md6>
                                                <v-layout row wrap>
                                                    <v-flex sm10>
                                                        <v-img :src="mainPhoto" aspect-ratio="1"></v-img>
                                                    </v-flex>
                                                    <v-flex sm2>
                                                        <v-layout justify-space-around column fill-height>
                                                            <v-flex sm12 v-for="photo in currentProduct.photos"
                                                                    class=" justify-center">
                                                                <v-img :src="photo" aspect-ratio="1"
                                                                       class="small-photo-container"
                                                                       @mouseenter="hoverPhoto(photo)"></v-img>
                                                            </v-flex>
                                                        </v-layout>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                            <v-spacer></v-spacer>
                                            <!-- info container -->
                                            <v-flex xs12 sm6 md6>
                                                <v-layout column wrap>
                                                    <v-flex sm12 md12 xs12>
                                                        <h3>{{ currentProduct.name }}</h3>
                                                    </v-flex>
                                                    <v-flex sm12 md12 xs12>
                                                        <v-layout row wrap>
                                                            <v-flex sm4 xs4 md4>
                                                                <!-- price -->
                                                                <h3>${{ currentProduct.price }}</h3>
                                                            </v-flex>
                                                            <v-flex sm4 xs4 md4>
                                                                <el-input-number v-model="num" @change="handleChange"
                                                                                 :min="1" :max="10"></el-input-number>
                                                            </v-flex>
                                                            <v-flex sm4 xs4 md4>
                                                                <h3>${{ currentProduct.price }}</h3>
                                                            </v-flex>
                                                        </v-layout>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                    </v-layout>
                </template>
            </keep-alive>
        </v-content>
    </v-app>
</template>

<script>

    import db from '../assets/db'

    export default {
        components: {},
        data() {
            return {
                products: db.products,
                dialog: false,
                currentProduct: {},
                mainPhoto: "",
                num: 1
            }
        },
        methods: {
            viewProduct(product) {
                this.currentProduct = product;
                this.mainPhoto = product.featuredPhoto;
                this.dialog = true;
                console.log(product.featuredPhoto)
            },
            hoverPhoto(photo) {
                console.log(photo);
                this.mainPhoto = photo;
                console.log(this.mainPhoto)
            },
            handleChange(value) {
                console.log(value)
            }
        },
        created() {
            console.table(db.products.length)
        }
    }
</script>

<style>
    .small-photo-container:hover {
        border: 1px solid blue;
    }
</style>

