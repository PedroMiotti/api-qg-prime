import { CreateUserDto, UserDto } from "../dto/User.dto";
import { UserRepository } from "../repository/user.repository";
import { UserAnswerRepository } from "../repository/userAnswer.repository";


export class UserService {
    private userRepository: UserRepository;
    private userAnswerRepository: UserAnswerRepository;

    constructor(){
        this.userRepository = new UserRepository();
        this.userAnswerRepository = new UserAnswerRepository();
    }

    public async fetchAllUsers(dateFilter: string){
        let filterByDate: Date;

        if(dateFilter !== 'all'){
            const separatedDate = dateFilter.split('/');
            
            const constructedDate = new Date(
                parseInt(separatedDate[2]),
                parseInt(separatedDate[1]) - 1,
                parseInt(separatedDate[0]),
              );

            filterByDate = constructedDate; 
        } 

        return this.userRepository.findAll(filterByDate ? filterByDate : null);
    }

    public async fetchAllUserAnswers(dateFilter: string){
        let filterByDate: Date;

        if(dateFilter !== 'all'){
            const separatedDate = dateFilter.split('/');
            
            const constructedDate = new Date(
                parseInt(separatedDate[2]),
                parseInt(separatedDate[1]) - 1,
                parseInt(separatedDate[0]),
              );

            filterByDate = constructedDate; 
        } 
        
        return this.userAnswerRepository.fetchAll(filterByDate ? filterByDate : null);
    }

    public async fetchUserById(id: number){
        return this.userRepository.findById(id);
    }

    public async answerQuestion(id: number, answersIds: number[]) {
        for(const answer of answersIds)
            await this.userAnswerRepository.create({userId: id, answerId: answer})

        return 'Answered question successfully';
    }

    public async registerUser(){
        // if(!user.email || !user.name || !user.lastname || !user.cellphone)
        //     throw Error('Missing information');

        return this.userRepository.create();
    }

}