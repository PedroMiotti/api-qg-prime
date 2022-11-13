import { CreateActivationStandDto } from "../dto/ActivationStand.dto";
import { ActivationStandRepository } from "../repository/ActivationStand.repository"


export class ActivationStandService{
    private activationStandRepository: ActivationStandRepository;

    constructor(){
        this.activationStandRepository = new ActivationStandRepository();
    }

    public async fetchAllActivationStands(){
        return this.activationStandRepository.findAll();
    }

    public async createActivationStand(stand: CreateActivationStandDto){
        if(!stand.name)
            throw Error('Missing information: name');
        
        return this.activationStandRepository.create(stand);
    }
}