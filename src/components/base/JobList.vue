<template>
   <div class='job-list' >
      <JobCard v-bind='job' v-for='(job, i) in jobs' :key='i' />
   </div>
</template>

<script>
import JobCard from './JobCard'

export default {
   components:{
      JobCard
   },
   props: {
      jobs: Array
   }
}
</script>

<style lang="sass" scoped>
.job-list
   display: flex
   flex-direction: column
   gap: 2rem 0
</style>