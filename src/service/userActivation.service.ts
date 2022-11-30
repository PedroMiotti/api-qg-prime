import { CreateUserActivationDto } from "../dto/UserActivation.dto";
import { UserActivationRepository } from "../repository/userActivation.repository";


export class UserActivationService{
    private userActivationRepository: UserActivationRepository;

    constructor(){
        this.userActivationRepository = new UserActivationRepository();
    }

    public async fetchAllUserActivations(dateFilter: string){
        let filterByDate: Date;

        if(dateFilter !== 'all'){
            const separatedDate = dateFilter.split('/');
            
            const constructedDate = new Date(
                parseInt(separatedDate[2]),
                parseInt(separatedDate[1]) - 1,
                parseInt(separatedDate[0]),
              );

            filterByDate = constructedDate; 
        } 

        return this.userActivationRepository.fetchAll(filterByDate ? filterByDate : null);
    }

    public async checkIn(userActivation: CreateUserActivationDto){
        if(!userActivation.userId || !userActivation.activationStandId)
            throw Error('Missing information');

        return this.userActivationRepository.create(userActivation);
    }
}