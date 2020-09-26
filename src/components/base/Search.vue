<template>
   <div class='search'>
      <slot name='icon'>
         <i class="material-icons md-18">{{icon}}</i>
      </slot>
      <input type='text' :placeholder='placeholder' v-on:keyup='next'/>
      <slot></slot>
   </div>
</template>

<script>
import { inject } from 'vue'
export default {
   props:{  
      icon: {
         type: String,
         default: 'search'
      },
      placeholder: {
         type: String,
         default: 'title, companies, expertise or benefices'
      },
      type: {
         type: String,
         required: true
      }
   },
   setup(props){
      const input$ = inject('input$')
      const next = event => input$.next({
         type: props.type.toUpperCase(),
         payload: event.target.value
      })

      return {
         next
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