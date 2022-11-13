import { CreateActivationStandDto } from "../dto/ActivationStand.dto";
import { APILogger } from "../logger/api.logger";
import { ActivationStandService } from "../service/activationStand.service";

export class ActivationStandController {
    private activationStandService: ActivationStandService;
    private logger: APILogger;

    constructor() {
        this.activationStandService = new ActivationStandService();
    }

    public async fetchAll(){
        try{
            return this.activationStandService.fetchAllActivationStands();
        } catch(e) {
            this.logger.error(e);            
            throw Error(e);
        }
    }

    public async create(stand: CreateActivationStandDto){
        try {
            return this.activationStandService.createActivationStand(stand);
        } catch (e) {
            this.logger.error(e);
            throw Error(e);
        }
    }
}