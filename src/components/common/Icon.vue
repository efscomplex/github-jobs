<template>
   <div class='icon'>
      <i :class="`material-icons md-${size}`">
         {{name}}
      </i>
      <span :v-if='label' :style="{fontSize: size+'px'}" class='label'>{{label}}</span>
   </div>
</template>

<script>
   export default {
      props: {
         name: String,
         size: {
            type: String,
            default: '18'
         },
         label: {
            type: String,
            required: false
         }
      }
   }
</script>

<style lang="sass" scoped>
.icon 
   display: flex
   align-items: flex-end
   gap: 0 8px
.label
   opacity: .6
</style>