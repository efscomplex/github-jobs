<template>
   <div class="checkbox">
      <input type='checkbox'/>
      <span class='label'> {{label}}</span>
   </div>
</template>

<script>
export default {
   props: {
      label: {
         type: String,
         require: false
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