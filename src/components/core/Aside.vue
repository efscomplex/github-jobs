<template>
  <aside>
     <Checkbox label='Full Time'/>
     <div class='location'>
        <h4 class='text'>Location</h4>
        <Search icon='location_on' class='search' placeholder='City, State, Zip Code or Country'/>
     </div>
     <div class='places'>
        <Checkbox label='Lonton'/>
        <Checkbox label='Amsterdam'/>
        <Checkbox label='New York'/>
        <Checkbox label='Berlin'/>
     </div>
  </aside>
</template>

<script>
import Search from '@/components/base/Search'
import Checkbox from '@/components/common/Checkbox'

export default {
   components:{
      Search,
      Checkbox
   }
}
</script>

<style lang='sass' scoped>
aside
   grid-area: aside
   .search
      max-width: 40ch
      input
         margin: initial
   .places
      display: flex
      flex-direction: column
      gap: 1rem 0
   .location
      margin: 2rem 0
      .text
         color: gray
         margin-bottom: 1rem
</style>