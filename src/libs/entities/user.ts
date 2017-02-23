import { Entity, IEntity } from '../entity';

export interface IUser extends IEntity {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: number;
}

export class User extends Entity implements IUser {
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public email: string;
    public streetAddress: string;
    public city: string;
    public state: string;
    public zip: number;
}
