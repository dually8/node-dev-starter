import { IEntity } from './entity';

export interface ICollection<T extends IEntity> {
    readonly items: Array<T>;
    getItem(id: string): T;
}

export class Collection<T extends IEntity> implements ICollection<T> {
    private _items: Array<T>;

    constructor(items?: Array<T>) {
        this._items = items ? items : new Array<T>();
    }

    get items(): Array<T> { return this._items; }

    public getItem(id: string): T {
        return this.items.find(x => x._id === id);
    }
}
