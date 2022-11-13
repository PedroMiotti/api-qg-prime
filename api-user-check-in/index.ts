import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { UserActivationController } from "../src/controller/userActivation.controller";
import { CreateActivationStandDto } from "../src/dto/ActivationStand.dto";
import { CreateUserActivationDto, UserActivationDto } from "../src/dto/UserActivation.dto";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const userActivationController = new UserActivationController();

    try {
        const { userId, activationStandId } = req.body;
        
        const userActivationDto: CreateUserActivationDto = {
            userId: +userId,
            activationStandId: +activationStandId
        }

        const userActivation = await userActivationController.checkIn(userActivationDto);

        context.res = {
            body: userActivation,
            Headers:  {'Content-Type': 'application/json'}
        };
        
    } catch (error) {
        context.res = {
            status: 500,
            body: { message: error.message },
            headers:  {'Content-Type': 'application/json'}
        };
    }

};

export default httpTrigger;