<template>
  <div class="hello">
      <img v-bind:src="getUrl_(url_)" alt="image" class="img-wrapper">
      <div class="tile-title">{{name_}}</div>
      <p class="tile-year">{{year_.split('-')[0]}}</p>
  </div>
</template>

<script>
export default {
  name: 'tile',
  props: [
    'name_',
    'url_',
    'year_'
  ],
  data() {
    return {
      msg: 'Tile works',
    };
  },
  methods:{
      getUrl_(url){
          return 'https://image.tmdb.org/t/p/w500/'+url
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.img-wrapper{
  width: 100%;
/* max-height: 250px; */
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  
}
.tile-title{
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #fff;
  font-weight: 100;
  padding-top:12px;
}
.tile-year{
    font-family: 'Courier New', Courier, monospace;
    color:#fff;
}
/* .hello{
    display: inline-block;
} */
</style>
