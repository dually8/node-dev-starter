import { Context, IContext } from './context';
import { IRepository, Repository } from './repository';

import { IUser } from './entities/user';

const isProd = process.env.NODE_ENV === 'prod';

export class RepositoryDirectory {
    private _connectionString = `mongodb://${isProd ? '10.132.101.62' : 'localhost'}/node-dev-starter`;
    private _context: IContext;

    private _userRepository: IRepository<IUser>;

    constructor() {
        this._context = new Context(this._connectionString);
        this._userRepository = new Repository<IUser>('user', this._context);
    }

    get userRepository(): IRepository<IUser> { return this._userRepository; }
}
