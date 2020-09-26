<template>
   <div class="checkbox">
      <input 
         type='checkbox' 
         v-on:change='next'  
         v-model="location"
         :true-value='truly || label.toLowerCase()'
         false-value=""/>
      <span class='label'> {{label}}</span>
   </div>
</template>

<script>
import { inject, ref } from 'vue'
export default {
   props: {
      label: {
         type: String,
         required: false
      },
      type: {
         type: String,
         required: true
      },
      truly:{
         type: String,
         required: false
      }
   },
   setup(props){
      const input$ = inject('input$')
      const location = ref('')
      const next = () => {
         input$.next({
            type: props.type.toUpperCase().replaceAll(' ','_'),
            payload: location.value
         })
      }
      return {
         next,
         location
      }
   }
}
</script>

<style lang='sass' scoped>
.checkbox
   display: flex
   align-items: center
   gap: 1rem
</style>