<template>
   <div class='job-list' >
      <JobCard 
         :description='job.description' 
         :title='job.title' 
         :company='job.company' 
         :location='job.location'
         :fullTime='job.fullTime'
         :logo='job.company_logo'
         v-for='job in jobs' 
         :key='job.id' />
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
   @media (max-width: 620px)
      align-items: center
</style>