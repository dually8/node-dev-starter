import { Collection as MongoCollection } from 'mongodb';

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
            let actionResult: T | ICollection<T>;
            if (entities.length > 1) {
                collection.insertMany(entities).then(result => {
                    actionResult = new Collection(result.ops as Array<T>);
                }, errorHandler);
            } else {
                collection.insertOne(entities.pop()).then(result => {
                    actionResult = result.ops.pop() as T;
                }, errorHandler);
            }
            return actionResult;
        });
    }

    public delete(entity: IEntity): void {
        this._collectionPromise.then(collection => {
            collection.deleteOne({ _id: entity.id }).catch(errorHandler);
        });
    }

    public getById(id: string): Promise<T> {
        return this._collectionPromise.then(collection => {
            let actionResult: T;
            collection.findOne({ _id: id }).then(result => {
                actionResult = result;
            }, errorHandler);
            return actionResult;
        });
    }

    public get(filter?: Object): Promise<ICollection<T>> {
        return this._collectionPromise.then(collection => {
            let actionResult: ICollection<T>;
            if (filter) {
                collection.find(filter).toArray().then(result => {
                    actionResult = new Collection(result as Array<T>);
                }, errorHandler);
            } else {
                collection.find().toArray().then(result => {
                    actionResult = new Collection(result as Array<T>);
                }, errorHandler);
            }
            return actionResult;
        });
    }

    public update(entity: T): void {
        this._collectionPromise.then(collection => {
            collection.updateOne({ _id: entity.id }, entity);
        });
    }
}
