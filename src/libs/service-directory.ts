import { IUser } from './entities/user';
import { IRepository, Repository } from './repository';
import { RepositoryDirectory } from './repository-directory';
import { IUserService, UserService } from './services/user-service';

export class ServiceDirectory {
    private _repositoryDirectory: RepositoryDirectory;

    private _userService: IUserService;

    constructor(repositoryDirectory: RepositoryDirectory) {
        this._userService = new UserService(repositoryDirectory.userRepository);
    }

    get userService(): IUserService { return this._userService; }
}
