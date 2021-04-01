import { MyDatabaseModule } from './db/my-database-module'

const myDBClassic = MyDatabaseModule;
myDBClassic.add({ name: 'João', age: 50 });
myDBClassic.show();