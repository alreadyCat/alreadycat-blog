<template>
  <div class="music-container" id="music"></div>
</template>

<script setup lang="ts">
import "aplayer/dist/APlayer.min.css";
// @ts-ignore
import APlayer from "aplayer";
import axios from "axios";


async function getMusicList(){
 return await axios.get("http://82.157.100.12:3000/api",{
    params:{
      server:"netease",
      type:"playlist",
      id:"459681037"
    }
  })
}


onMounted(async() => {
const res = await getMusicList()

  new APlayer({
    container: document.getElementById("music"),
    fixed: true,
    preload: "auto",
    audio:res.data.map((item:any)=>{
      return {
        name:item.title,
        artist:item.author,
        url:item.url,
        cover:item.pic,
        lrc:item.lrc
      }
    })
  });
});
</script>

<style scoped></style>
