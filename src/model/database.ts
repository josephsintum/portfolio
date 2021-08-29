// First, create the adapter to the underlying database:
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {Database} from '@nozbe/watermelondb';
import schema from './schema';
import {TransactionModel} from './Transaction';
import {CategoryModel} from './Category';

const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  // migrations,
  // (optional database name or file system path)
  // dbName: 'bohikorApp',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: true,
  // (optional, but you should implement this method)
  //   onSetUpError: error => {
  // Database failed to load -- offer the user to reload the app or log out
  //   },
});

// Then, make a Watermelon database from it!
export const database = new Database({
  adapter,
  modelClasses: [CategoryModel, TransactionModel],
});

console.log('database created');

/// ReactNativeFlipperDatabases - START

if (__DEV__) {
  // Import connectDatabases function
  const connectDatabases = require('react-native-flipper-databases').default;

  // Import required DBDrivers
  const WatermelonDBDriver =
    require('react-native-flipper-databases/src/drivers/watermelondb').default;

  connectDatabases([
    new WatermelonDBDriver(database), // Pass in database definition
  ]);
}

/// ReactNativeFlipperDatabases - END
