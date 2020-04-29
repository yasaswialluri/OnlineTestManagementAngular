import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Exam } from '../Exam';


@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit {

  questionId: number;
  question: Question = new Question();
  submitted = false;

  
  constructor(private route: ActivatedRoute,private questionService : QuestionService,private router : Router) { }

  ngOnInit() {
    
this.question.exam=new Exam();
    this.questionId = this.route.snapshot.params['questionId'];

    this.questionService.getQuestion(this.questionId)
      .subscribe(data => {
        console.log(data)
        this.question = data;
      }, error => console.log(error));
     
  }

  updateQuestion(examId:number ) {
    this.questionService.updateQuestion(this.questionId, this.question,examId)
      .subscribe(data => console.log(data), error => console.log(error));
    this.question = new Question();
    
    alert('Updated question sucessfully');
    this.router.navigate(['/listquestion',examId]);
  }

 
}
