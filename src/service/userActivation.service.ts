import { CreateUserActivationDto } from "../dto/UserActivation.dto";
import { UserActivationRepository } from "../repository/userActivation.repository";


export class UserActivationService{
    private userActivationRepository: UserActivationRepository;

    constructor(){
        this.userActivationRepository = new UserActivationRepository();
    }

    public async checkIn(userActivation: CreateUserActivationDto){
        if(!userActivation.userId || !userActivation.activationStandId)
            throw Error('Missing information');

        return this.userActivationRepository.create(userActivation);
    }
}