const express = require('express')
const routes = express.Router()
const recipeRoutes = require('./controllers/recipes.js')
const websiteRoutes = require('./controllers/website.js')


module.exports = routes

routes.get('/', websiteRoutes.index) 
routes.get('/about', websiteRoutes.about)
routes.get('/recipes', websiteRoutes.recipes)
routes.get('/recipes/:index', websiteRoutes.recipe)

// ADMINISTRATIVE AREA
routes.get("/admin/recipes", recipeRoutes.index)
routes.get("/admin/recipes/create", recipeRoutes.create)
routes.get("/admin/recipes/:id", recipeRoutes.show)
routes.get("/admin/recipes/:id/edit", recipeRoutes.edit)
routes.post("/admin/recipes", recipeRoutes.post)
routes.put("/admin/recipes", recipeRoutes.put)
routes.delete("/admin/recipes", recipeRoutes.delete)
