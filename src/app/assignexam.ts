import { User } from './user';
import { Exam } from './Exam';


export class AssignExam
{
    examUserId : number;
    marksScored:number;
    status:string;
    user:User = new User();
    test:Exam = new Exam();
}