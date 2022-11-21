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

    
    public async fetchAllAnswers(){
        try{
            return this.userService.fetchAllUserAnswers();
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

    public async register(){
        try {
            return this.userService.registerUser();
        } catch (e) {
            this.logger.error(e);
            throw Error(e);
        }
    }

    public async answerQuestion(id: number, answersIds: number[]){
        try {
            return this.userService.answerQuestion(id, answersIds);
        } catch (e) {
            this.logger.error(e);
            throw Error(e);
        }
    }
}