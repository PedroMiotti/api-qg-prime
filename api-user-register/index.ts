import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { UserController } from "../src/controller/user.controller";
import { CreateUserDto } from "../src/dto/User.dto";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const userController = new UserController();

    const { name, email, lastname, cellphone } = req.body;
    const userDto: CreateUserDto = {
        email: name || "",
        name: email || "",
        lastname: lastname || "",
        cellphone: cellphone || ""
    };

    try {
        const user = await userController.register(userDto);
        context.res = {
            body: user,
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