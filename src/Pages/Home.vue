<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
   <div class="mt-5 ml-3 w-fit bg-slate-200 px-4 py-2 rounded-lg md:ml-32">
    <h2 class="text-xs md:text-base">Welcome <span class="font-bold">{{ userName }}</span>.</h2>
  </div>

  <div class="flex justify-between text-xs mt-2 font-semibold bg-slate-200 border-red-500 px-1 md:px-4 md:w-wd8 md:mx-auto md:py-2 md:text-base  rounded-lg">
    <div class=" border-green-500 md:w-2/3">
      <h2 class="py-2 text-center">Current location (coordinates): </h2>
    </div>
    <div class="flex justify-around w-full text-center h-fit  border-blue-500 my-auto">
      <p class="bg-purple-500 rounded-lg p-2  md:px-4 mx-1 shadow-lg">Latitude : {{ lat }}</p>
      <p class="bg-purple-500 rounded-lg p-2  md:px-4 mx-1 shadow-lg">Longitude : {{ lng }}</p>
    </div>
  </div>  
  <div class="bg-slate-200 flex justify-between my-2 border-black px-4 md:px-8 md:w-wd8 md:mx-auto md:text-base rounded-lg">
    <h2 class="py-2 text-lg font-semibold md:text-2xl  ">Map</h2>
    <div @click="getLocation()" class="cursor-pointer bg-cyan-600 rounded-xl space-x-1 w-fit text-center flex px-4 py-2 my-2 text-xs font-semibold shadow-lg md:text-base">
      <fingerprint-spinner
        :animation-duration="1500"
        :size="20"
        color="#e2e8f0"
        class="mt-1"
        /> 
        <p class="py-1">Get My Location</p>
        
    </div>
  </div>
  
  
  <div class="mx-auto">
    <div ref="mapContainer" class="w-98 md:w-wd8 lg:w-w7 mx-auto px-4 text-xs md:lg capitalize h-ht8 border rounded-xl shadow-black shadow-lg -shadow-lg"></div>
  </div>
</template>

<script setup>
import { FingerprintSpinner } from 'epic-spinners'
import {onMounted, ref} from 'vue'
import school from "@/images/school.png"
import building from "@/images/building.png"
import bus from "@/images/bus.png"
import gate from "@/images/gate.png"
import { auth } from '@/firebase/firebase'
import L from "leaflet"
import router from '@/router'
const lat = ref("0.0")
const lng = ref("0.0")
const map = ref()
const userName = ref("")
const mapContainer = ref()
var schoolIcon = L.icon({
    iconUrl: school,
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [-3, -76],
});

var buildingIcon = L.icon({
    iconUrl: building,
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [-3, -76],
});

var busIcon = L.icon({
    iconUrl: bus,
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [-3, -76],
});

var gateIcon = L.icon({
    iconUrl: gate,
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [-3, -76],
});


onMounted(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      const getUSer = auth.currentUser.email
      const email = getUSer.split("@", [1])
      userName.value = email.toString()
    }else{
      router.push('/')
    }
    
  })

  map.value = L.map(mapContainer.value).setView([7.593711, 5.297215], 20);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map.value);
7.592394, 5.295203
L.marker([7.591405, 5.294615], {icon: schoolIcon})
.bindTooltip("<p class='text-center'> Computer Science <br> Department</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.592394, 5.295203], {icon: schoolIcon})
.bindTooltip("<p class='text-center'> Math and Stat <br> Department</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.589970, 5.303841], {icon: schoolIcon})
.bindTooltip("<p class='text-center'> School Of Environment<br/> Studies</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.593740, 5.296911], {icon: buildingIcon})
.bindTooltip("<p class='text-center'> Academic board<br/> office</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.594694, 5.295476], {icon: buildingIcon})
.bindTooltip("<p class='text-center'> First bank</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.594059, 5.294642], {icon: buildingIcon})
.bindTooltip("<p class='text-center'> Old admin</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.594257, 5.295477], {icon: buildingIcon})
.bindTooltip("<p class='text-center'> Skye bank</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.594117, 5.295369], {icon: buildingIcon})
.bindTooltip("<p class='text-center'> Enterprise bank</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.593750, 5.297729], {icon: buildingIcon})
.bindTooltip("<p class='text-center'> AFE babalola <br/>hall</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.593999, 5.297557], {icon: buildingIcon})
.bindTooltip("<p class='text-center'> Admin block</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.592671, 5.297428], {icon: buildingIcon})
.bindTooltip("<p class='text-center'> ICT</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value) // this is the icon of ict building

L.marker([7.592604, 5.299202], {icon: schoolIcon})
.bindTooltip("<p class='text-center'> School library</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.591429, 5.299449], {icon: buildingIcon})
.bindTooltip("<p class='text-center'> CICT</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.589560, 5.298328], {icon: schoolIcon})
.bindTooltip("<p class='text-center'> Mechanical engineering<br/>department</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.590449, 5.298968], {icon: schoolIcon})
.bindTooltip("<p class='text-center'>New SBS</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.590212, 5.298079], {icon: schoolIcon})
.bindTooltip("<p class='text-center'>School of engineering</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.591014, 5.297144], {icon: schoolIcon})
.bindTooltip("<p class='text-center'>Obasanjo Center for <br/> Engineering Innovation</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.590296, 5.297571], {icon: schoolIcon})
.bindTooltip("<p class='text-center'>Block of engineering<br/> department classrooms</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.592817, 5.294080], {icon: schoolIcon})
.bindTooltip("<p class='text-center'>Three in one<br/> theater</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.593412, 5.294326], {icon: schoolIcon})
.bindTooltip("<p class='text-center'>Polytechnic maintenance <br/> workshop</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.592758, 5.295910], {icon: schoolIcon})
.bindTooltip("<p class='text-center'>Science laboratory <br/> technology</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.602317, 5.296464], {icon: gateIcon})
.bindTooltip("<p class='text-center'>Main gate</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.595644, 5.295140], {icon: busIcon})
.bindTooltip("<p class='text-center'>Bus stop</p>", {permanent: true, className: "my-label", offset: [22, 10] })
.addTo(map.value)

L.marker([7.596150, 5.295226], {icon: buildingIcon})
.bindTooltip("<p class='text-center'>Multi-purpose <br/> hall</p>", {permanent: true, className: "my-label", offset: [22, 10] })
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

<style>

</style>