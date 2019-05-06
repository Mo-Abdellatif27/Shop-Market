<template>
    <div>
        <div class="row">
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-8">
                        <img :src="currentProduct.featuredPhoto" alt="" width="100%" height="100%">
                    </div>
                    <div class="col-sm-4">
                        other image
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                info
            </div>
        </div>

        <template>
            <div class="text-xs-center">
                <v-dialog v-model="dialog" width="65%">
                    <v-card>
                        <v-card-text>
                            <v-container>
                                <v-layout row wrap>
                                    <v-flex sm5 xs12>
                                        <v-layout row wrap>
                                            <v-flex sm7>
                                                <v-img :src="currentProduct.featuredPhoto" width="100%"
                                                       aspect-ratio="1"></v-img>
                                            </v-flex>
                                            <v-spacer></v-spacer>
                                            <v-flex sm4>
                                                <v-layout align-center row wrap fill-height>
                                                    <v-flex sm12 v-for="photo in currentProduct.photos" :key="photo">
                                                        <div class="small-product-photo">
                                                            <v-img :src="photo" width="50px" aspect-ratio="1"></v-img>
                                                            <v-spacer></v-spacer>
                                                        </div>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex sm7 xs12>
                                        <v-layout md12 sm12>
                                            <v-flex sm12>
                                                {{ currentProduct.name }}
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>

                            </v-container>
                        </v-card-text>
                        <!-- this card text contains the dialog content-->
                    </v-card>
                </v-dialog>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "Archieve"
    }
</script>

<style scoped>

</style>
