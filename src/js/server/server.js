function getTruckIdsCallback(callback) {
  setTimeout(() => {
    callback([1, 2, 3, 4, 5]);
  }, 1000);
}

function getTruckIds() {
  return new Promise(resolve => {
    getTruckIdsCallback(result => resolve(result));
  });
}

function getTruckByIdCallback(id, callback) {
  setTimeout(() => {
    const isError = Math.ceil(Math.random() * 1000) < 300;
    if (isError) {
      callback(undefined, new Error(`Error on element id: ${id}`));
    } else {
      callback({
        id,
        model: `truck ${id}`,
      });
    }
  });
}

function getTruckById(callback) {
  getTruckIds().then(data => {
    data.forEach(id => {
      getTruckByIdCallback(id, (truck, error) => {
        if (error) {
          // console.log('First Error on element:', id);
          getTruckByIdCallback(id, (tr, err) => callback(tr, err));
        } else {
          callback(truck, error);
        }
      });
    });
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('magic').style.display = 'none';
    document.getElementById('console').style.display = 'block';
  });
}

export default getTruckById;
