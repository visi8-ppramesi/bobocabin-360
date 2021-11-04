<template>
    <div class="container">
        <input type="text" v-model="coords.arrowOne.yaw" @change="updateLocation">
        <input type="text" v-model="coords.arrowOne.pitch" @change="updateLocation">
        <div ref="view" class="h-screen w-screen viewer" @click="getCoords">
        </div>
        <div ref="arrowOne" class="arrow-container">
            <router-link to="">
                <div class="text-white">Bed view</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="white" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
            </router-link>
        </div>

        <div ref="arrowTwo" class="arrow-container">
            <router-link to="/bed/">
                <div class="text-white">Outside view</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="white" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
            </router-link>
        </div>

        <div ref="arrowThree" class="arrow-container">
            <router-link to="/bed/">
        <div ref="arrowTwo" class="arrow-container">
            <router-link to="/toilet/">
                <div class="text-white">Toilet view</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="white" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
            </router-link>
        </div>
    </div>
</template>

<script>
import createMarzipano from '../utils/marzipanoBuilder.js'
export default {
    mounted(){
        const elem = this.$refs.view
        const arrowOne = this.$refs.arrowOne
        const arrowTwo = this.$refs.arrowTwo
        const arrowThree = this.$refs.arrowThree
        this.marzObj = createMarzipano(elem, '/assets/scenes/cabin/cabin.jpg')
        this.hotSpots.arrowOne = this.marzObj.scene.hotspotContainer().createHotspot(arrowOne, this.coords.arrowOne)
        this.hotSpots.arrowTwo = this.marzObj.scene.hotspotContainer().createHotspot(arrowTwo, this.coords.arrowTwo)
        this.hotSpots.arrowThree = this.marzObj.scene.hotspotContainer().createHotspot(arrowThree, this.coords.arrowThree)

    },
    data(){
        return {
            marzObj: null,
            hotSpots: {

            },
            coords: {
                arrowOne: {
                    yaw: -0.05450686952374362,
                    pitch: 0.045168875296877076,
                },
                
                arrowTwo: {
                    yaw: 1.5809722048265398,
                    pitch: 0.023208795976405128,
                },

                arrowThree: {
                    yaw: 2.8944521949382933,
                    pitch: 0.011521420157853512,
                    yaw: -0.100649973562619,
                    pitch: 0.05547168452443522,
                },
                arrowTwo: {
                    yaw: 2.9011735977849913,
                    pitch: -0.05547168452443522,
                }
            }
        }
    },
    methods: {
        getCoords(e){
            console.log(this.marzObj.view.screenToCoordinates({x: e.clientX, y: e.clientY}))
        },
        updateLocation(){
            this.hotSpots.arrowOne.setPosition(this.coords.arrowOne)
        }
    }
}
</script>

<style>
    .arrow-container{
        width: 70px;
        height: 70px;
        margin-left: -35px;
        margin-top: -70px;
        text-align: center;
        width: 100px;
        text-shadow: rgb(0 0 0) -1px -1px 0px, rgb(0 0 0) 1px -1px 0px, rgb(0 0 0) -1px 1px 0px, rgb(0 0 0) 1px 1px 0px;
    }
    .arrow{
        width: 60px;
        height: 60px;
        margin: auto;
    }
    /* .viewer{
        top: 0;
        left: 0;
        position: absolute;
    } */
</style>