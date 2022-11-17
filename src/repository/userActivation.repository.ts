import { PrismaClient, UserActivation } from "@prisma/client";
import { CreateUserActivationDto } from "../dto/UserActivation.dto";
import { ModelCast } from "../utils/ModelCast";


export class UserActivationRepository {
    private prismaClient: PrismaClient;

    constructor(){
        this.prismaClient = new PrismaClient();
    }

    public async create(userActivation: CreateUserActivationDto): Promise<UserActivation> {
        const modelCast = new ModelCast<CreateUserActivationDto, UserActivation>();
        return this.prismaClient.userActivation.create({ data: modelCast.cast(userActivation) });
    }

    public async fetchAll(): Promise<UserActivation[]> {
        return this.prismaClient.userActivation.findMany({
            include: {
                user: true,
                activationStand: true
            }
        });
    }
}