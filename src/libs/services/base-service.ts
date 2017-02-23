import { ICollection } from '../collection';
import { IEntity } from '../entity';
import { IRepository } from '../repository';

export interface IBaseService<T extends IEntity> {
    add(...entities: Array<T>): Promise<T | ICollection<T>>;
    delete(entity: T): void;
    getById(id: string): Promise<T>;
    get(filter?: Object): Promise<ICollection<T>>;
    update(entity: T): void;
}

export abstract class BaseService<T extends IEntity> implements IBaseService<T> {
    private _repository: IRepository<T>;

    constructor(repository: IRepository<T>) {
        this._repository = repository;
    }

    public add(...entities: Array<T>): Promise<T | ICollection<T>> {
        return this._repository.add(...entities);
    }

    public delete(entity: T): void {
        this._repository.delete(entity);
    }

    public getById(id: string): Promise<T> {
        return this._repository.getById(id);
    }

    public get(filter?: Object): Promise<ICollection<T>> {
        return this._repository.get(filter);
    }

    public update(entity: T): void {
        this._repository.update(entity);
    }
}
