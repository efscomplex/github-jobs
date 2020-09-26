<template>
  <main class='main'>
     <JobList :jobs='jobs'/>
  </main>
</template>

<script>
import JobList from '@/components/base/JobList'
import { ref } from 'vue'

const mockJobs = [
   {
      description: 'javascript',
      fullTime: 'full time',
      location: 'Denver, Colorado',
      pic:'https://picsum.photos/200/300'

   },
   {
      description: 'javascript',
      fullTime: 'full time',
      location: 'Denver, Colorado',
      pic:'https://picsum.photos/200/300'

   },
   {
      description: 'javascript',
      fullTime: 'full time',
      location: 'Denver, Colorado',
      pic:'https://picsum.photos/200/300'

   }
]
export default {
   components: {
      JobList
   },
   setup(){
      const jobs = ref(mockJobs)

      return {
         jobs
      }
   }
}
</script>

<style lang='sass' scoped>
main
   grid-area: main
</style>