var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
      return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  objet[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign ({}, object)
  delete newObj.key
  return newObj
}
