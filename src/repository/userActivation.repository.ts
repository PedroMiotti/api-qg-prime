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

    public async fetchAll(dateFilter: Date): Promise<UserActivation[]> {
        return this.prismaClient.userActivation.findMany({
            include: {
                user: true,
                activationStand: true
            },
            ...(dateFilter && {
                where: {
                  user: {
                    createdAt: {
                      gte: new Date(dateFilter.setUTCHours(0)),
                      lt: new Date(dateFilter.setUTCHours(23)),
                    },
                  },
                },
              }),
        });
    }
}