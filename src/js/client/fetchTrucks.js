/* eslint-disable no-console */
import getTruckListCallback from '../server/getTrucksCallback';
import getTruckListPromise from '../server/getTruckListPromise';
import getTruckListAsyncAwait from '../server/getTruckListAsyncAwait';

export default class FetchTrucks {
  static data = [];

  static log = (message, trucks, errors) => {
    this.data.push = [trucks, errors];
    this.output(message, trucks, errors);
  };

  static output = (log, trucks, errors) => {
    setTimeout(() => {
      console.log(log);
      console.log('→ Trucks: ');
      console.table(trucks);
      console.log('→ Errors: ');
      console.table(errors);
    }, 1100);
  };

  static fetchListCallback = () => {
    try {
      getTruckListCallback(([trucks, errors]) => {
        const message = '→ Received in Callback ↓ ';

        this.log(message, trucks, errors);
      });
      console.log('→ Callback instanceof Promise :', getTruckListCallback(() => {}) instanceof Promise);
    } catch (e) {
      console.error(e);
    }
  };

  static fetchListPromise = () => {
    const trucksPromise = getTruckListPromise();
    console.log('→ Promise instanceof Promise :', getTruckListPromise() instanceof Promise);
    trucksPromise
      .then(([trucks, errors]) => {
        const message = '→ Received in Promise ↓ ';

        this.log(message, trucks, errors);
      })
      .catch(e => console.error(e));
  };

  static fetchListAsyncAwait = async () => {
    try {
      const [trucks, errors] = await getTruckListAsyncAwait();
      console.log('→ AsyncAwait instanceof Promise :', getTruckListAsyncAwait() instanceof Promise);
      const message = '→ Received in AsyncAwait ↓ ';

      this.log(message, trucks, errors);
    } catch (e) {
      console.error(e);
    }
  };
}
