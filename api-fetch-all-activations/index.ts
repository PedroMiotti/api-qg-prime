import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { UserActivationController } from "../src/controller/userActivation.controller";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const userActivationsController = new UserActivationController();

    try{
        const { dateFilter } = req.query;
        const activations = await userActivationsController.fetchAll(dateFilter);

        context.res = {
            body: activations,
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