import { CreateUserDto, UserDto } from "../dto/User.dto";
import { UserRepository } from "../repository/user.repository";


export class UserService {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepository();
    }

    public async fetchAllUsers(){
        return this.userRepository.findAll();
    }

    public async fetchUserById(id: number){
        return this.userRepository.findById(id);
    }

    public async registerUser(user: CreateUserDto){
        if(!user.email || !user.name || !user.lastname || !user.cellphone)
            throw Error('Missing information');

        return this.userRepository.create(user);
    }

}