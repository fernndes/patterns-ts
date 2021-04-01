import { MyDatabaseClassic } from './db/my-database-classic'

const myDBClassic = MyDatabaseClassic.getInstance();
myDBClassic.add({ name: 'João', age: 50 });
myDBClassic.show();