<template>
  <div id="bydate">
      <div class="container text-center" v-if="countryData">
          <div class="spacer-md"></div>

          <h1> {{ country[0].toUpperCase() + country.slice(1) }} data for day {{ `${dateFrom.split("T")[0].split("-")[2]}.${dateFrom.split("T")[0].split("-")[1]}.${dateFrom.split("T")[0].split("-")[0]}.` }}</h1>
          
            <div class="spacer-lg"></div>

            <h2>
                <span> {{ dataType === "infected" ? "😷" : ( dataType === "deaths" ? "💀" : "🥳" )  }} </span>
                {{ dataType[0].toUpperCase() + dataType.slice(1) }}
            </h2>

            <div class="spacer-md"></div>
            
          <h1> {{ countryData[0].Cases }} </h1>
      </div>
  </div>
</template>

<script>
export default {
    name: "ByDate",

    data(){
        return {
            dataType: undefined,
            dateFrom: undefined,
            dateTo: undefined,
            country: undefined,
            countryData: undefined,
            // https://api.covid19api.com/country/croatia/status/deaths?from=2021-03-01T00:00:00Z&to=2021-03-01T23:59:59Z
            API_BASEURL: 'https://api.covid19api.com/country/'
        }
    },

    mounted(){
        this.dataType = this.$route.query.dataType;
        this.dateFrom = this.$route.query.dateValue;
        this.dateTo = this.dateFrom.split("T")[0] + 'T23:59:59Z';
        this.country = this.$route.query.country;

        this.axios.get(`${this.API_BASEURL + this.country}/status/${this.dataType}?from=${this.dateFrom}&to=${this.dateTo}`).then((response) => {
            this.countryData = response.data;
        });
    }
}
</script>

<style scoped>
#bydate {
  min-height: 100vh;
}
</style>