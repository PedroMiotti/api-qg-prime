import { PrismaClient, UserAnswer } from "@prisma/client";
import { CreateUserAnswerDto } from "../dto/UserAnswer.dto";
import { ModelCast } from "../utils/ModelCast";


export class UserAnswerRepository {
    private prismaClient: PrismaClient;

    constructor(){
        this.prismaClient = new PrismaClient();
    }

    public async create(userAnswer: CreateUserAnswerDto): Promise<UserAnswer> {
        const modelCast = new ModelCast<CreateUserAnswerDto, UserAnswer>();
        return this.prismaClient.userAnswer.create({ data: modelCast.cast(userAnswer) });
    }

}