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
  <div ref="mapContainer" class="w-full h-screen border-4 border-red-500">
  
  </div>
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
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [-3, -76],
});
onMounted(()=>{
  map.value = L.map(mapContainer.value).setView([7.594386, 5.299224], 18);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map.value);
7.592394, 5.295203
L.marker([7.591405, 5.294615], {icon: myIcon})
.bindTooltip("<p class='text-center'> Computer Science <br> Department</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.592394, 5.295203], {icon: myIcon})
.bindTooltip("<p class='text-center'> Math and Stat <br> Department</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.589970, 5.303841], {icon: myIcon})
.bindTooltip("<p class='text-center'> School Of Environment Studies</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.593690, 5.296630], {icon: myIcon})
.bindTooltip("<p class='text-center'> ACADEMIC BOARD OFFICE</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.594694, 5.295476], {icon: myIcon})
.bindTooltip("<p class='text-center'> FIRST BANK</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.594059, 5.294642], {icon: myIcon})
.bindTooltip("<p class='text-center'> OLD ADMIN</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.594257, 5.295477], {icon: myIcon})
.bindTooltip("<p class='text-center'> SKYE BANK</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.594117, 5.295369], {icon: myIcon})
.bindTooltip("<p class='text-center'> ENTERPRISE BANK</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.593650, 5.297629], {icon: myIcon})
.bindTooltip("<p class='text-center'> AFE BABALOLA HALL</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.593795, 5.297657], {icon: myIcon})
.bindTooltip("<p class='text-center'> ADMIN BLOCK</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.592671, 5.297428], {icon: myIcon})
.bindTooltip("<p class='text-center'> ICT</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.592604, 5.299202], {icon: myIcon})
.bindTooltip("<p class='text-center'> School library</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.591429, 5.299449], {icon: myIcon})
.bindTooltip("<p class='text-center'> CICT</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.589560, 5.298328], {icon: myIcon})
.bindTooltip("<p class='text-center'> Mechanical engineering<br/>department</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.590449, 5.298968], {icon: myIcon})
.bindTooltip("<p class='text-center'>New SBS</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.590212, 5.298079], {icon: myIcon})
.bindTooltip("<p class='text-center'>School of engineering</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.591014, 5.297144], {icon: myIcon})
.bindTooltip("<p class='text-center'>Obasanjo Center for <br/> Engineering Innovation</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.590296, 5.297571], {icon: myIcon})
.bindTooltip("<p class='text-center'>Block of engineering<br/> department classrooms</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.592817, 5.294080], {icon: myIcon})
.bindTooltip("<p class='text-center'>Three in one<br/> theater</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.593412, 5.294326], {icon: myIcon})
.bindTooltip("<p class='text-center'>Polytechnic maintenance <br/> workshop</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.592758, 5.295910], {icon: myIcon})
.bindTooltip("<p class='text-center'>Science laboratory <br/> technology</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.602317, 5.296464], {icon: myIcon})
.bindTooltip("<p class='text-center'>Main gate</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.595544, 5.295140], {icon: myIcon})
.bindTooltip("<p class='text-center'>BUS STOP</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)
// .bindPopup('<p class="text-center"> Computer Science <br> Department</p>')
// .openPopup()
// .bindLabel('A sweet static label!', { noHide: true, direction:'auto' })


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
