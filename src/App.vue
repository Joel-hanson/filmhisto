<template>
  <div class="app">
    <div class="container">
      <div class="card">
        <div class="card-wrapper">
          <film-tile v-for="film in filmdata" v-bind="{name_:film.title,url_:film.poster_path,year_:film.release_date}" >
          </film-tile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tile from './components/Tile';

export default {
  name: 'App',
  data() {
    return {
      filmdata: '',
    };
  },
  components: {
    'film-tile': tile,
  },
  created() {
    this.$http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=&language=en-US&page=1').then(response => {
      this.filmdata = response.body.results;
      console.log(response.body.results);
      
    }, response => {
    // error callback
    });
  },
};

</script>

<style>
.app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 16px;
}
.card{
 /* background: #EB3349;  
background: -webkit-linear-gradient(to right, #F45C43, #EB3349);  
background: linear-gradient(to right, #F45C43, #EB3349); */
/* color: #fff;
font-weight: 100; */
  /* box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22); */
}
@media screen and (min-width: 900px) {
.card-wrapper{
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);  
}
}
@media screen and (max-width: 900px) {
.card-wrapper{
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);  
}
}
</style>
