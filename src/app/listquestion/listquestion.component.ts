import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrls: ['./listquestion.component.css']
})
export class ListquestionComponent implements OnInit {
  examId: number;
  //question: Question;
  arr : Question [] =[];
  question : Question = new Question();

  constructor(private route: ActivatedRoute,private router: Router,
    private questionService: QuestionService) {
     
    }

  ngOnInit() {
    this.examId = this.route.snapshot.params['examId'];
      this.questionService.getQuestionList(this.examId).subscribe( data =>{this.arr = data.body;
        console.log(data);
        })
  }

 
  deleteQuestion(questionId: number) {
    this.questionService.deleteQuestionById(questionId).subscribe(data=>this.question=data);
    alert('question deleted successfully');
    this.router.navigate(['/listquestion']);
  }

  questionDetails(questionId: number){
    this.router.navigate(['questiondetail', questionId]);
  }

  updateQuestion(questionId: number){
    this.router.navigate(['updatequestion', questionId]);
  }

 
  add()
  {
    this.router.navigate(['addquestion', this.examId]);
  }
  
}
