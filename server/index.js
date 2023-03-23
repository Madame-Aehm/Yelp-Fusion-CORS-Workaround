
const express = require('express');
const app = express();
const port = 3001;
require('dotenv').config();
const cors = require('cors');

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})

app.use(cors());

app.get('/:term&:location&:categories&:sort_by&:locale', async(req, res) => {
  const { term, location, categories, sort_by, locale } = req.params;
  const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&categories=${categories}&sort_by=${sort_by}&locale=${locale}`;
  
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${process.env.API_KEY}`);
  const options = {
    method: 'GET',
    headers: headers
  }
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
})