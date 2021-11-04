<template>
    <div class="container">
        <input type="text" v-model="pitch" @change="updateLocation">
        <input type="text" v-model="yaw" @change="updateLocation">
        <div ref="view" class="h-screen w-screen" @click="getCoords">
        </div>
        <div ref="arrowOne" class="arrow-container">
            <div class="text-white">Bed view</div>
            <svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="white" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
            </svg>
        </div>
    </div>
</template>

<script>
import createMarzipano from '../utils/marzipanoBuilder.js'
export default {
    mounted(){
        const elem = this.$refs.view
        const arrowOne = this.$refs.arrowOne
        this.marzObj = createMarzipano(elem, '/assets/scenes/bed/bed.jpg')
        this.hotSpots.arrowOne = this.marzObj.scene.hotspotContainer().createHotspot(arrowOne, { pitch: this.pitch, yaw: this.yaw })
    },
    data(){
        return {
            marzObj: null,
            hotSpots: {

            },
            pitch: -0.1041252045519049,
            yaw: -0.05772739824072036
        }
    },
    methods: {
        getCoords(e){
            console.log(this.marzObj.view.screenToCoordinates({x: e.clientX, y: e.clientY}))
        },
        updateLocation(){
            this.hotSpots.arrowOne.setPosition({ pitch: this.pitch, yaw: this.yaw })
        }
    }
}
</script>

<style>
    .arrow-container{
        text-align: center;
        width: 100px;
        text-shadow: rgb(0 0 0) -1px -1px 0px, rgb(0 0 0) 1px -1px 0px, rgb(0 0 0) -1px 1px 0px, rgb(0 0 0) 1px 1px 0px;
    }
    .arrow{
        width: 60px;
        height: 60px;
        margin: auto;
    }
</style>