import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
import { AssigntestService } from '../assigntest.service';
import { Exam } from '../Exam';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
exam : Exam;
examId:number;
marks:number;
correctAnswerCount : number;
WrongAnswerCount : number;
userId : number;
  constructor(private route: ActivatedRoute,private router: Router,private testService: TestService,private assignTestService:AssigntestService) 
  {
    
   }

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
   this.marks=this.route.snapshot.params['mark'];
   this.correctAnswerCount=this.route.snapshot.params['correctAnswer'];
   this.WrongAnswerCount=this.route.snapshot.params['wrongAnswer'];
   this.userId=this.route.snapshot.params['userid'];
   console.log(this.userId);
   this.testService.findExamById(this.examId).subscribe(data=>this.exam=data)
  
  }
  

 
}
