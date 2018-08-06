var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
      return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newRecipes = Object.assign ({}, recipes)
  delete newRecipes.key
}

function deleteFromObjectByKey(recipes, key) {
  var newRecipes = Object.assign ({}, recipes)
  delete newRecipes.key
}

function deleteFromObjectByKey(recipe, key) {
  var newRecipes = Object.assign({}, recipes)
  delete newRecipes.recipes
}