<template>
  <div id="header" >
    <div class="container">
    <div class="header-title">Header works</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header-title {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #fff;
  font-size: 20px;
  font-weight: 100;
  display: inline-block;
  padding: 22px;
}
.container{
  margin: 0 5%;
}

</style>
