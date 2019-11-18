import getTruckById from './server';

function getTrucksPromise() {
  const trucks = [];
  const errors = [];

  return new Promise(resolve => {
    getTruckById((truck, error) => {
      if (error) {
        errors.push(error);
      } else if (truck) {
        trucks.push(truck);
      }
    });

    resolve([trucks, errors]);
  });
}

function getTruckListPromise() {
  return new Promise(resolve => {
    const result = getTrucksPromise();

    resolve(result);
  });
}

export default getTruckListPromise;
