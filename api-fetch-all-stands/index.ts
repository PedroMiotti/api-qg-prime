import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { ActivationStandController } from "../src/controller/activationStand.controller";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const activationStandController = new ActivationStandController();

    try {
        const stands = await activationStandController.fetchAll();
        context.res = {
            body: stands,
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