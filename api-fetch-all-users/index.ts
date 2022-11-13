import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { UserController } from "../src/controller/user.controller";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const userController = new UserController();

    try {
        const users = await userController.fetchAll();
        context.res = {
            body: users,
            Headers:  {'Content-Type': 'application/json'}
        };

    } catch (error) {
        context.res = {
            status: 500,
            body: {message: error.message},
            headers:  {'Content-Type': 'application/json'}
        };
    }

};

export default httpTrigger;