let city = '南京'
try {
  city = localStorage.city || city
} catch (e) {}

export default {
  city: city
}
