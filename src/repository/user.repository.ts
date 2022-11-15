import { PrismaClient, User } from '@prisma/client';
import { CreateUserDto } from '../dto/User.dto';
import { ModelCast } from '../utils/ModelCast';


export class UserRepository {
    private prismaClient: PrismaClient;

    constructor(){
        this.prismaClient = new PrismaClient();
    }

    public async findAll(): Promise<User[]> {
        return this.prismaClient.user.findMany();
    }

    public async create(user: CreateUserDto): Promise<User> {
        const modelCast = new ModelCast<CreateUserDto, User>();
        return this.prismaClient.user.create({ data: modelCast.cast(user) });
    }

    public async findById(id: number): Promise<User> {
        return this.prismaClient.user.findUnique({ where: { id } });
    }

}