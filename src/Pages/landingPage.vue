<template>
     <div class="w-full h-full absolute flex">
        <div class="h-fit m-auto px-2 flex flex-col-reverse rounded-lg md:flex-row w-4/5 md:w-2/3 py-10 bg-slate-50 shadow-2xl">
          <div class="flex z-50 md:py-2 w-full h-full ">
          <div class="w-full h-full py-2 flex flex-col px-2 md:h-full  m-auto md:m-0 ">
            <!-- <img :src="logo" alt="logo" class="w-16 -mt-2 md:w-28 md:m-auto  mx-auto"> -->

            <div class="w-full h-full flex flex-col space-y-8 text-center md:space-y-12">
              <h2 class="text-slate-800 mx-auto font-bold text-lg ">Welcome!</h2>
              <h4 class="text-slate-800 font-semibold text-xs md:text-base">Sign in with your Gmail account to login.</h4>
              

              
              <Tag  @click="googleSignIn" class="cursor-pointer mx-auto flex flex-row justify-between mt-44 py-4 pr-4 shadow-xl drop-shadow-sm rounded-full">
                <img alt="gmail" src="/gmail.png" class="w-12 -ml-1 m-2 px-2 md:w-16" />
                <h3 class=" mr-4 text-xs text-slate-800 font-bold md:text-base">Log in with Gmail</h3>
              </Tag>
              
            </div>
          </div>
        </div>
    </div>
    </div>

</template>

<script setup>
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import router from '../router';

function googleSignIn() {
      const auth = getAuth()

      const provider = new GoogleAuthProvider()

    
      signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    
    

     router.push('/load')
     return {
      token,
      user, 
     }
    }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    // const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
    return{
      errorCode,
      errorMessage,
      credential
    }
    })
    
    }

</script>

<style>

</style>