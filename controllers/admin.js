exports.index = function(req, res) {
  return res.send("I am the index page. I show all recipes list.")
}

exports.create = function(req, res) {
  return res.render("admin/create")
}

exports.show = function(req, res) {
  return res.send("I will show a recipe")
}

exports.edit = function(req, res) {
  return res.send("I will edit a recipe")
}

exports.post = function(req, res) {
  return res.send("I will send the data to save a recipe")
}

exports.put = function(req, res) {
  return res.send("I will edit a recipe")
}

exports.delete = function(req, res) {
  return res.send("I will delete a recipe")
}