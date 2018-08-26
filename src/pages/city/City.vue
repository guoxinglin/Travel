<template>
  <div>
    <city-header :city="this.city"></city-header>
    <city-search></city-search>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>
<style>
</style>
