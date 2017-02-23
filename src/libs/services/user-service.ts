import { IUser } from '../entities/user';
import { IRepository } from '../repository';
import { BaseService, IBaseService } from './base-service';

export interface IUserService extends IBaseService<IUser> { }

export class UserService extends BaseService<IUser> implements IUserService {
    constructor(repository: IRepository<IUser>) {
        super(repository);
    }
}
