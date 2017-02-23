export interface IEntity extends Object {
    id: string;
}

export abstract class Entity implements IEntity {
    private _id: string;

    constructor(id?: string) {
        this._id = id !== undefined ? id : '';
    }

    get id(): string { return this._id; }
}
