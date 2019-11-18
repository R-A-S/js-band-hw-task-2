import getTruckById from './server';

async function getTrucksAsync() {
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

async function getTruckListAsyncAwait() {
  const result = await getTrucksAsync();

  return result;
}

export default getTruckListAsyncAwait;
