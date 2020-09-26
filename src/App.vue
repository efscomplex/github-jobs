<template>
   <header>
      <Search icon='work'>
         <Btn/>
      </Search>
   </header>
   <Aside/>
   <Main/>
   <footer> <small>Created by @efscomplex. An <strong>easyDev</strong> production.</small></footer>
</template>

<script>
import Search from '@/components/base/Search.vue'
import Btn from '@/components/common/Btn'
import Aside from '@/components/core/Aside'
import Main from '@/components/core/Main'
import './styles/index.sass'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    Search,
      Btn,
      Aside,
      Main
  },
  async setup(){
     let initialJobs = null
     try{
        const resp = await fetch('https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?search=node')
         initialJobs = await resp.json()
     }catch(err){
        console.log('ups!!!! an error: ', err);
     }
      const jobs = ref(initialJobs || [])  
      console.log(jobs.value);
  }
}
</script>

<style scoped lang='sass'>
header
   padding: 3rem 10vw
   grid-area: header
   background-image: url('./assets/images/bg.png')
   border-radius: 6px

footer
   grid-area: footer
   text-align: center
   color: gray
</style>
