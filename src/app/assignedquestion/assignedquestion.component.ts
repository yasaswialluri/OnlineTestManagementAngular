import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

import { QuestiondetailComponent } from '../questiondetail/questiondetail.component';
import { AssigntestService } from '../assigntest.service';
import { AssignExam } from '../assignexam';

@Component({
  selector: 'app-assignedquestion',
  templateUrl: './assignedquestion.component.html',
  styleUrls: ['./assignedquestion.component.css']
})
export class AssignedquestionComponent implements OnInit {
examId:number;
arr : Question [] =[];
mark : number = 0;
currentQuestion : Question = new Question() ;
correctAnswer : number =0;
WrongAnswer : number =0;
assignExam : AssignExam = new AssignExam;
userId : number;
flag = false;
status : String="no";
  constructor(private route: ActivatedRoute,private questionService:QuestionService,
    private assignTestService:AssigntestService,private router : Router) { }

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
    this.userId=this.route.snapshot.params['userId'];
      this.questionService.getQuestionList(this.examId).subscribe( data =>{this.arr = data.body;
        console.log(data);
        })
        
this.assignTestService.check(this.userId,this.examId).subscribe(data=>this.assignExam=data); 
        
      }
     

click(questionId:number)
{
 
  this.questionService.getQuestion(questionId).subscribe(data=>this.currentQuestion=data); 
  this.flag=true;
}
 submit()
{
  
  for(let i =0;i<this.arr.length;i++)
  {
    if(this.arr[i].questionAnswer==this.arr[i].choosenAnswer)
      {
      // this.quesMark= this.arr[i].questionMark;
       console.log(this.arr[i].questionAnswer);
        this.mark=this.mark+this.arr[i].questionMark;
        this.correctAnswer=this.correctAnswer+1;
       this.assignExam.status="yes";

      }
      else{
        this.WrongAnswer=this.WrongAnswer+1;
      }
  }

  this.assignTestService.updateAssignExam(this.assignExam,this.examId,this.userId,this.mark,this.status).subscribe(data => console.log(data), error => console.log(error));


 alert('Test Submitted Sucessfully');
 this.router.navigate(['result', this.mark,this.examId,this.correctAnswer,this.WrongAnswer,this.userId]); 
  
} 
sendAnswer()
{
 
 for(let i =0;i<this.arr.length;i++)
 {
   if(this.currentQuestion.questionId==this.arr[i].questionId)
   {
     this.arr[i].choosenAnswer=this.currentQuestion.choosenAnswer;
   }
 }
 
}

result()
{  
    this.assignTestService.AssignedExamList().subscribe( data =>{this.assignExam = data.body;
      console.log(data);
      })
  
}
}