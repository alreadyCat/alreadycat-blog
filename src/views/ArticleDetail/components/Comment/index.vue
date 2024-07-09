<template>
    <div  id="tcomment">

    </div>
</template>

<script setup lang="ts">
const route = useRoute()
watch(()=>route.query.id,()=>{
    init()
        const el = document.getElementsByClassName("tk-icon __comments")?.[0]
        el && el.click()
    
},{immediate:true})
onMounted(()=>{
    init()
})
function init(){
  // @ts-ignore
  if(route.query.id){
     //@ts-ignore
    twikoo.init({
      envId: 'https://twikoo-api-pi-gules.vercel.app',
      el: '#tcomment', // 容器元素
      path: location.pathname + "article/" + route.query.id, 
    })
  }
}
</script>

<style scoped>

</style>