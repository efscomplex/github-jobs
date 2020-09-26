<template>
   <header>
      <Search icon='work' type='description'>
         <Btn/>
      </Search>
   </header>
   <Aside/>
   <Main :jobs='jobs'/>
   <footer> <small>Created by @efscomplex. An <strong>easyDev</strong> production.</small></footer>
</template>

<script>
import Search from '@/components/base/Search.vue'
import Btn from '@/components/common/Btn'
import Aside from '@/components/core/Aside'
import Main from '@/components/core/Main'
import useInput from '@/hooks/useInput'

import getJobs from '@/services/githubJobs'
import initialState from '@/config'

import './styles/index.sass'

import { ref, reactive, watchEffect } from 'vue'

function reducer(state, {type, payload}){
   switch(type){
      case 'LOCATION':
       state.location= payload
       return
      case 'FULL_TIME':
       state.fullTime = payload
       return
      case 'DESCRIPTION':
       state.description = payload
       return
      default:
         return state
   }
}

export default {
  name: 'App',
  components: {
    Search,
      Btn,
      Aside,
      Main
  },
  setup(){
     const jobs = ref([])
     const state = reactive(initialState)
      useInput(action => reducer(state, action))
      watchEffect(() =>{
         getJobs(state).then( data=>{
            console.log('new data', data);
            jobs.value = data
         })}
      )
      return {
         jobs,
      }
  }
}
</script>

<style scoped lang='sass'>
header
   padding: 3rem 10vw
   grid-area: header
   background-image: url('./assets/images/bg.png')

footer
   grid-area: footer
   text-align: center
   color: gray
</style>
