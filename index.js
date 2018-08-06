var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value) {
      return Object.assign({}, recipes, { [key]: value })
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

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, key)
  delete newObj.key
}
