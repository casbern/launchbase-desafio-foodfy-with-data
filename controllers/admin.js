const data = require("../data.json")
const fs = require("fs")


exports.index = function(req, res) {
  return res.send("I am the index page. I show all recipes list.")
}

exports.create = function(req, res) {
  return res.render("admin/create")
}

exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for(key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all the gaps")
    }
  }

  let {
    recipe_avatar,
    ingredients,
    preparation,
    extra_information
  } = req.body

  const lastRecipe = data.recipes[data.recipes.length - 1]
  let id

  if (lastRecipe) {
    id = lastRecipe.id + 1
  } else {
    id = 1
  }

  data.recipes.push({
    id,
    recipe_avatar,
    ingredients,
    preparation,
    extra_information
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return res.send("Write file error")
    }
    return res.redirect("/recipes")
  })

  //return res.send(req.body)
}

exports.show = function(req, res) {
  return res.send("I will show a recipe")
}

exports.edit = function(req, res) {
  return res.send("I will edit a recipe")
}

exports.put = function(req, res) {
  return res.send("I will edit a recipe")
}

exports.delete = function(req, res) {
  return res.send("I will delete a recipe")
}