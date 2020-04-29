import { Exam } from './Exam';


export class Question
{
    questionId:number;
    questionTitle:String;
    questionMark:number;
    questionOption1:String;
    questionOption2:String;
    questionOption3:String;
    questionOption4:String;
    questionAnswer:number;
   exam:Exam = new Exam();
   choosenAnswer:number;
  markScored:number;
}