import { PrismaClient, User } from '@prisma/client';
import { CreateUserDto } from '../dto/User.dto';
import { ModelCast } from '../utils/ModelCast';


export class UserRepository {
    private prismaClient: PrismaClient;

    constructor(){
        this.prismaClient = new PrismaClient();
    }

    public async findAll(dateFilter: Date): Promise<User[]> {
        return this.prismaClient.user.findMany({
            include: {
                userActivations: {
                    select: {
                        activationStand: true
                    }
                }
            },
            ...(dateFilter && {
                where: {
                    createdAt: {
                      gte: new Date(dateFilter.setUTCHours(0)),
                      lt: new Date(dateFilter.setUTCHours(23)),
                    },
                },
              }),
        });
    }

    public async create(): Promise<User> {
        const user: Partial<User> = {};
        return this.prismaClient.user.create({data: user});
    }

    public async findById(id: number): Promise<User> {
        return this.prismaClient.user.findUnique({ where: { id } });
    }

}