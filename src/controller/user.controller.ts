import { CreateUserDto } from "../dto/User.dto";
import { APILogger } from "../logger/api.logger";
import { UserService } from "../service/user.service";

export class UserController {
    private userService: UserService;
    private logger: APILogger;

    constructor() {
        this.userService = new UserService();
    }

    public async fetchAll(){
        try{
            return this.userService.fetchAllUsers();
        } catch(e) {
            this.logger.error(e);            
            throw Error(e);
        }
    }

    public async fetchById(id: number){
        try{
            return this.userService.fetchUserById(id);
        } catch(e) {
            this.logger.error(e);            
            throw Error(e);
        }
    }

    public async register(user: CreateUserDto){
        try {
            return this.userService.registerUser(user);
        } catch (e) {
            this.logger.error(e);
            throw Error(e);
        }
    }
}