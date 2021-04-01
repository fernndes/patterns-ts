import { MyDatabase } from './db/my-database'

const myDBClassic = MyDatabase.instance;
myDBClassic.add({ name: 'Gabriel', age: 24 });
myDBClassic.show();