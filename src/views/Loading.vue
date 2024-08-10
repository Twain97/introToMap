<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="loading absolute opacity-70 h-full w-full bg-slate-200">
    
  </div>
  <div class="w-full h-full absolute flex">
      <div class="h-fit m-auto px-2 flex flex-col rounded-lg w-4/5 md:w-2/4 md:space-y-4 py-10 bg-slate-50 shadow-2xl">
        <fingerprint-spinner
        :animation-duration="1500"
        :size="100"
        color="#a855f7"
        class="m-auto"
        /> 
        <p class="text-sm text-center font-semibold md:text-base md:font-bold">
          Loading...
        </p>
      </div>
    </div>
</template>

<script setup>
import { auth } from '@/firebase/firebase';
import router from '@/router';
import { FingerprintSpinner } from 'epic-spinners'
import { onMounted } from 'vue';
onMounted(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      setTimeout(()=>{
        router.push('/Home')
      }, 3000)
    }else{
      router.push('/')
    }
  })
 
})
</script>

<style>

</style>