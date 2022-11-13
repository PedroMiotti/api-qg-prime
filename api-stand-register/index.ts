import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { ActivationStandController } from "../src/controller/activationStand.controller";
import { CreateActivationStandDto } from "../src/dto/ActivationStand.dto";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const activationStandController = new ActivationStandController();

    const { name, description } = req.body;

    const standDto: CreateActivationStandDto = {
        name: name || "",
        description: description || ""
    }

    try {
        const stand = await activationStandController.create(standDto);
        context.res = {
            body: stand,
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