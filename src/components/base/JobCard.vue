<template>
   <div class='card'>
      <img :src='logo' class='logo'/>
      <div class="body">
         <div class="company">{{company}}</div>
         <strong class="title">{{title}}</strong>
         <div class="location">{{location}}</div>
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
         logo: String,
         location: String,
         description: String,
         fullTime: String,
         company: String,
         title: String
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
   @media(max-width: 620px)
      flex-wrap: wrap
      gap: 1rem
      justify-content: center
   .logo
      width: 120px
      height: 90px
      object-fit: contain
      object-position: center
   .body
      display: flex
      flex-direction: column
      gap: .6rem
      flex-grow: 1
      @media(max-width: 620px)
         flex-grow: initial
      .company
      .title
         font-size: 1.1rem
      .full-time
         border: 1px solid gray
         border-radius: 6px
         padding: 4px 1rem
         width: fit-content
      .description
         font-size: .8rem  
   .footer 
      display: flex
      gap: 0 1em
      & > i
         margin-right: 1rem
</style>