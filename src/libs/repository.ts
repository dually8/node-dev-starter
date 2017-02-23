import { Collection as MongoCollection, ObjectID } from 'mongodb';

import { Collection, ICollection } from './collection';
import { IContext } from './context';
import { IEntity } from './entity';
import { errorHandler } from './utils/error-handler';

export interface IRepository<T extends IEntity> {
    add(...entities: Array<T>): Promise<T | ICollection<T>>;
    delete(entity: T): void;
    getById(id: string): Promise<T>;
    get(filter?: Object): Promise<ICollection<T>>;
    update(entity: T): void;
}

export class Repository<T extends IEntity> implements IRepository<T> {
    private _collectionPromise: Promise<MongoCollection>;

    constructor(collectionName: string, context: IContext) {
        this._collectionPromise = context.getCollection(collectionName).catch(errorHandler);
    }

    public add(...entities: Array<T>): Promise<T | ICollection<T>> {
        return this._collectionPromise.then(collection => {
            let actionResult: Promise<T | Collection<T>>;
            if (entities.length > 1) {
                actionResult = collection.insertMany(entities).then(result => {
                    return new Collection(result.ops as Array<T>);
                }, errorHandler) as Promise<T | Collection<T>>;
            } else {
                actionResult = collection.insertOne(entities.pop()).then(result => {
                    return result.ops.pop() as T;
                }, errorHandler) as Promise<T | Collection<T>>;
            }
            return actionResult;
        });
    }

    public delete(entity: IEntity): void {
        this._collectionPromise.then(collection => {
            collection.deleteOne({ _id: new ObjectID(entity._id) }).catch(errorHandler);
        });
    }

    public getById(id: string): Promise<T> {
        return this._collectionPromise.then(collection => {
            return collection.findOne({ _id: new ObjectID(id) }).then(result => {
                return result as T;
            }, errorHandler) as Promise<T>;
        });
    }

    public get(filter?: Object): Promise<ICollection<T>> {
        return this._collectionPromise.then(collection => {
            let actionResult: Promise<Collection<T>>;
            if (filter) {
                actionResult = collection.find(filter).toArray().then(result => {
                    return new Collection(result as Array<T>);
                }, errorHandler);
            } else {
                actionResult = collection.find(filter).toArray().then(result => {
                    return new Collection(result as Array<T>);
                }, errorHandler);
            }
            return actionResult;
        });
    }

    public update(entity: T): void {
        this._collectionPromise.then(collection => {
            collection.updateOne({ _id: new ObjectID(entity._id) }, entity);
        });
    }
}
