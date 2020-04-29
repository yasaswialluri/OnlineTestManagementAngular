import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-questiondetail',
  templateUrl: './questiondetail.component.html',
  styleUrls: ['./questiondetail.component.css']
})
export class QuestiondetailComponent implements OnInit {
  questionId: number;
  question :Question;

  constructor(private route: ActivatedRoute,private router: Router,
    private questionService: QuestionService) { }

  ngOnInit() {
    this.question = new Question();

    this.questionId = this.route.snapshot.params['questionId'];
    
    this.questionService.getQuestion(this.questionId)
      .subscribe(data => {
        console.log(data)
        this.question = data;
      }, error => console.log(error));
  
  }

  list(examId:number)
  {
    this.router.navigate(['/listquestion',examId]);
  }

}
