import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { UserController } from "../src/controller/user.controller";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const userController = new UserController();

    try {
        const { dateFilter } = req.query;

        const userAnswers = await userController.fetchAllAnswers(dateFilter);
        context.res = {
            body: userAnswers,
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