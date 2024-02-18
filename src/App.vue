<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>


  <button @click="getLocation()">Get Location</button>
  <p>lat = {{ lat }}</p>
  <p>lng = {{ lng }}</p>

  Map
  <div ref="mapContainer" class="w-full h-screen"></div>
  <!-- <RouterView /> -->
</template>

<script setup>
import {onMounted, ref} from 'vue'
import school from "@/images/school.png"
import L from "leaflet"
const lat = ref(0)
const lng = ref(0)
const map = ref()
const mapContainer = ref()
var myIcon = L.icon({
    iconUrl: school,
    iconSize: [25, 25],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    labelAnchor: [6, 0]
});
onMounted(()=>{
  map.value = L.map(mapContainer.value).setView([7.594386, 5.299224], 18);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map.value);

L.marker([7.590976, 5.294837], {icon: myIcon})
.bindLabel('A sweet static label!', { noHide: true, direction:'auto' })
.addTo(map.value);

})

function getLocation(){
  if(window.navigator.geolocation){
    window.navigator.geolocation.getCurrentPosition((position)=>{
     lat.value = position.coords.latitude
     lng.value = position.coords.longitude
     map.value.setView([lat.value, lng.value], 13)
     L.marker([lat.value, lng.value], {draggable: true})
     .addTo(map.value).
     on("dragend",(event)=>{
      console.log(event)
     });
    })
  }else{
    alert("error")
  }
}
</script>


<style scoped>

</style>
