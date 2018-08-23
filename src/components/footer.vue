<!--  -->
<template>
  <div class="footer"><p>this website write by {{author}}</p></div>
</template>

<script>
export default {
  data () {
    return {
        author:"lyy"
    };
  }
}

</script>
<style lang='scss' scoped>
.footer{
    position: fixed;
    bottom: 5vh;
    width: 100%;
   
    p{
    color: #ccc;
    text-align: center;
    font-size: 18px;
    line-height: 35px;
    }
    }
</style>