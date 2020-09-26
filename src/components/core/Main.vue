<template>
  <main class='main'>
     <JobList :jobs='jobs' class='job-list'/>
  </main>
</template>

<script>
import JobList from '@/components/base/JobList'

export default {
   props: {
      jobs: Array
   },
   components: {
      JobList
   },
   setup(props){
      console.log(props.jobs);
   }
}
</script>

<style lang='sass' scoped>
main
   grid-area: main
   .job-list
      max-width: 720px
      margin: auto
</style>