import { PrismaClient, UserAnswer } from "@prisma/client";
import { CreateUserAnswerDto } from "../dto/UserAnswer.dto";
import { ModelCast } from "../utils/ModelCast";

export class UserAnswerRepository {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  public async create(userAnswer: CreateUserAnswerDto): Promise<UserAnswer> {
    const modelCast = new ModelCast<CreateUserAnswerDto, UserAnswer>();
    return this.prismaClient.userAnswer.create({
      data: modelCast.cast(userAnswer),
    });
  }

  public async fetchAll(dateFilter: Date): Promise<UserAnswer[]> {
    return this.prismaClient.userAnswer.findMany({
      include: {
        answer: {
          select: {
            id: true,
            description: true,
            question: true,
          },
        },
        user: true,
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
