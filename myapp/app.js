import express from 'express'
import {getRestaurants, getRestaurant} from './api/restaurants.js'

const app = express()
const port = 3000

const restaurants = [
  {
      name : 'spicy',
      adress: 'Le Lamentin',
  },

  {
      name : 'spicy',
      adress : 'Le Lamentin',
  },

  {
      name : 'spicy',
      adress : 'Le Lamentin',
  },
]

app.set('view engine', 'ejs')
app.use(express.static('public'))



// home.ejs
app.get('/', async (req, res) => {
  const data = await getRestaurants(req)
  console.log(data) 
  res.render('home.ejs', {
      title: "Home",
      list: data
  })
})




// restaurant.ejs
app.get('/restaurant', async (req, res) => {
  const data = await getRestaurant(req.query.id)
  console.log(data)
  res.render('restaurant.ejs', {
      title: "Restaurants",
      list: data
  })
})




// about.ejs
app.get('/about', (req, res) => {
  res.render('about.ejs')
})




app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})