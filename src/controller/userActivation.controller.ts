import { CreateUserActivationDto, UserActivationDto } from "../dto/UserActivation.dto";
import { APILogger } from "../logger/api.logger";
import { UserActivationService } from "../service/userActivation.service";



export class UserActivationController {
    private userActivationService: UserActivationService;
    private logger: APILogger;

    constructor() {
        this.userActivationService = new UserActivationService();
    }

    public async checkIn(userActivation: CreateUserActivationDto){
        try{
            return this.userActivationService.checkIn(userActivation);
        } catch(e){
            this.logger.error(e);
            throw Error(e);
        }
    }
}