<template>
  <div id="country">
      <div class="container text-center" v-if="countryData">
          <!-- Route param first letter capitalized -->
          <h1>{{ routeParamId[0].toUpperCase() + routeParamId.slice(1) }}</h1>

          <div class="spacer-sm"></div>

          <h3>By day</h3>

          <div class="spacer-md"></div>

            <div v-for="(date, i) in countryData" :key="i">
                    <!-- Date formatted -->
                    <p class="d-inline font-bold"> {{ `${date.Date.split("T")[0].split("-")[2]}.${date.Date.split("T")[0].split("-")[1]}.${date.Date.split("T")[0].split("-")[0]}.` }} </p>
                
                    <router-link class="date-router-link" :to="{ path:'/by-date', query: { dataType:'infected', dateValue: date.Date, country:routeParamId }}">Infected</router-link>
                    
                    <router-link class="date-router-link" :to="{ path:'/by-date', query: { dataType:'deaths', dateValue: date.Date, country:routeParamId }}">Deaths</router-link>
                    
                    <router-link class="date-router-link" :to="{ path:'/by-date', query: { dataType:'recovered', dateValue: date.Date, country:routeParamId }}">Recovered</router-link>

                    <div class="spacer-sm"></div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Country",

    data(){
        return {
            routeParamId: undefined,
            countryData: undefined,
            API_BASEURL: "https://api.covid19api.com/total/country/",
        }
    },

    mounted(){
        this.routeParamId = this.$route.params.id;

        this.axios.get(this.API_BASEURL + this.routeParamId).then((response) => {
            this.countryData = response.data.reverse().slice(0,20);
        });
    }
}
</script>

<style scoped>
#country {
  min-height: 100vh;
}

.d-inline {
    display: inline;
}

.date-router-link {
    color: #353535;
    margin-left: 15px;
}
</style>