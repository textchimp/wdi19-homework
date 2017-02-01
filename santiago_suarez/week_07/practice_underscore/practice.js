// EACH ///////////////////////////////////////////////////////////////////////

const _each = (collection, callback) => {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection)
    }
  } else {
    let keys = Object.keys(collection);
    for (var i = 0; i < keys.length; i++) {
      callback(keys[i], collection[keys[i]], collection);
    }
  }
}


// MAP ////////////////////////////////////////////////////////////////////////

const _map = (collection, callback) => {
  let copy = [];
  _each(collection, (element) => {
    copy.push(callback(element));
  })
  return copy;
}


// REDUCE /////////////////////////////////////////////////////////////////////

const _reduce = (collection, callback, acc) => {
  _each(collection, (e, i, collection) => {
    acc === undefined ? acc = e : acc = callback(acc, e, i, callback);
  });
  return acc;
};


// FIND ///////////////////////////////////////////////////////////////////////

const _find = (collection, callback) => {
  for (var i = 0; i < collection.length; i++) {
    if (callback(collection[i])) { return collection[i] };
  }
}


// FILTER /////////////////////////////////////////////////////////////////////

const _filter = (collection, callback) => {
  let copy = [];
  _each(collection, (e) => {
    if (callback(e)) { copy.push(e) };
  })
  return copy;
}

// REJECT /////////////////////////////////////////////////////////////////////

const _reject = (collection, callback) => {
  return _filter(collection, (e) => {
    return !callback(e)
  })
}
