<template>
  <button class="pointer">
     {{label}}
  </button>
</template>

<script>
export default {
   props:{
      label: {
         type: String,
         default: 'Search'
      }
   }
}
</script>

<style lang='sass' scoped>
   button
      padding: .4rem 1.6rem
      background-color: var(--primary, gray)
      border: none
      color: white
      border-radius: 6px
      &:active
         transform: scale(1.075)
      &:focus
       outline: none  
       box-shadow: 0 3px 5px rgba(black, .3) 
      
</style>