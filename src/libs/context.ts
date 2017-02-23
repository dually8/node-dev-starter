import { Collection, Cursor, Db, MongoClient } from 'mongodb';

import { ICollection } from './collection';
import { IEntity } from './entity';
import { errorHandler } from './utils/error-handler';

export interface IContext {
    getCollection(collectionName: string): Promise<Collection>;
}

export class Context implements IContext {
    private _client: MongoClient;
    private _connectionString: string;
    private _dbPromise: Promise<Db>;

    constructor(connectionString: string) {
        this._client = new MongoClient();
        this._connectionString = connectionString;
        this._dbPromise = this._client.connect(connectionString).catch(errorHandler);
    }

    public getCollection(collectionName: string): Promise<Collection> {
        return this._dbPromise.then(db => {
            return db.collection(collectionName);
        });
    }
}
