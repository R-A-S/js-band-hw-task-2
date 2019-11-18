import getTruckById from './server';

function getTrucksCallback() {
  const trucks = [];
  const errors = [];

  getTruckById((truck, error) => {
    if (error) {
      errors.push(error);
    } else if (truck) {
      trucks.push(truck);
    }
  });

  return [trucks, errors];
}

function getTruckListCallback(callback) {
  const result = getTrucksCallback();

  callback(result);
}

export default getTruckListCallback;
