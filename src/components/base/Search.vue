<template>
   <div class='search'>
      <slot name='icon'>
         <i class="material-icons md-18">{{icon}}</i>
      </slot>
      <input type='text' :placeholder='placeholder'/>
      <slot></slot>
   </div>
</template>

<script>

export default {
   props:{
      icon: {
         type: String,
         default: 'search'
      }
   },
   setup(){
      const placeholder = 'title, companies, expertise or benefices'

      return {
         placeholder
      }
   }
}
</script>

<style lang='sass' scoped>
.search
   display: flex
   align-items: center
   justify-content: space-between
   gap: 1rem
   padding: 6px
   background-color: white
   border-radius: 6px

   input 
      padding: .4rem
      margin-right: auto
      flex-basis: 40ch
</style>