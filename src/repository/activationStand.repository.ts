import { ActivationStand, PrismaClient } from "@prisma/client";
import { CreateActivationStandDto } from "../dto/ActivationStand.dto";
import { ModelCast } from "../utils/ModelCast";


export class ActivationStandRepository {
    private prismaClient: PrismaClient;

    constructor(){
        this.prismaClient = new PrismaClient();
    }

    public async findAll(): Promise<ActivationStand[]> {
        return this.prismaClient.activationStand.findMany();
    }

    public async create(stand: CreateActivationStandDto): Promise<ActivationStand> {
        const modelCast = new ModelCast<CreateActivationStandDto, ActivationStand>();
        return this.prismaClient.activationStand.create({ data: modelCast.cast(stand)});
    }


}