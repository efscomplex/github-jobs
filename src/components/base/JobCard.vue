<template>
   <div class='card'>
      <img :src='pic' class='job-pic'/>
      <div class="body">
         <div class="location">{{location}}</div>
         <div class="description">{{description}}</div>
         <div class="full-time">{{fullTime}}</div>
      </div>
      <div class="footer">
         <Icon label='New York, city' name='location_on' size='14'/>
         <Icon label='5 days ago' name='schedule' size='14'/>
      </div>
   </div>
</template>

<script>
   import Icon from '@/components/common/Icon'
   
   export default {
      components: {
         Icon
      },
      props: {
         pic: String,
         location: String,
         description: String,
         fullTime: String
      }
   }
</script>

<style lang="sass" scoped>
.card
   padding: 1rem
   display: flex
   align-items: flex-end
   background-color: white
   border-radius: 9px
   gap: 0 1rem
   .job-pic
      width: 120px
      height: 90px
      object-fit: cover
      object-position: center
   .body
      display: flex
      flex-direction: column
      gap: .6rem
      flex-grow: 1
      .full-time
         border: 1px solid gray
         border-radius: 6px
         padding: 4px 1rem
         width: fit-content
      .description
         text-transform: uppercase
   .footer 
      display: flex
      gap: 0 1em
      & > i
         margin-right: 1rem
</style>