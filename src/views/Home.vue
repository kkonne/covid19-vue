<template>
  <div id="home">
    <div class="container" v-if="countriesData">
      <div class="text-center">
        <h1>Corona virus info page</h1>

        <div class="spacer-sm"></div>

        <p>Get current info about Covid19 here:</p>

        <div class="spacer-md"></div>

        <h2>🌍 Worldwide stats</h2>
        <div class="d-flex">
          <div class="text-center d-flex-item">
            <p>😷 <br> Total confirmed</p>
            <p class="font-bold"> {{ countriesData.Global.TotalConfirmed }} </p>
          </div>
          <div class="text-center d-flex-item">
            <p>💀 <br> Total deaths</p>
            <p class="font-bold"> {{ countriesData.Global.TotalDeaths }} </p>
          </div>
          <div class="text-center d-flex-item">
            <p>🥳 <br> Total recovered</p>
            <p class="font-bold"> {{ countriesData.Global.TotalRecovered }} </p>
          </div>
        </div>

        <div class="spacer-md"></div>
      </div>

      <table>
        <tr>
          <th>Country</th>
          <th>Country code</th>
          <th>Infected</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>

          <tr v-for="(country, i) in countriesData.Countries" :key="i">
            <td class="font-bold">
              <router-link class="country-router-link" :to="`/country/${country.Slug}`">
                {{ country.Country }}
              </router-link>
            </td>
            <td> {{ country.CountryCode }} </td>
            <td> {{ country.TotalConfirmed }} </td>
            <td> {{ country.TotalDeaths }} </td>
            <td> {{ country.TotalRecovered }} </td>
          </tr>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

  data(){
    return {
      countriesData: undefined,
      API_URL: "https://api.covid19api.com/summary"
    }
  },

  mounted() {
    this.axios.get(this.API_URL).then((response) => {
      this.countriesData = response.data;
    });
  }
}
</script>

<style scoped>
#home {
  min-height: 100vh;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #d7d7d7;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #d7d7d7;
}

.d-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.d-flex-item {
  flex-grow: 1;
  margin: 15px 0;
}

.country-router-link {
  color: #353535;
}

@media screen and (max-width: 768px) {
  .d-flex {
    flex-direction: column;
  }
}
</style>