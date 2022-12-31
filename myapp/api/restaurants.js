import axios from 'axios'




// home.ejs
export async function getRestaurants() {
  const res = await axios.get('https://frozen-reef-84613.herokuapp.com/api/restaurants')
  return res.data.data.flat()   
}




// restaurant.ejs
export async function getRestaurant(id) {
  const res = await axios.get(`https://frozen-reef-84613.herokuapp.com/api/restaurants/${id}`)
  return res.data.data
}