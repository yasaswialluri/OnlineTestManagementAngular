import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Exam } from '../Exam';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  question : Question = new Question();
  temp : Question = new Question();
  examId: number;

  constructor(private route: ActivatedRoute,private questionService : QuestionService,private router : Router) { }

  ngOnInit(): void {
    
    this.examId = this.route.snapshot.params['examId'];
  }

  addQuestion()
  {
  // console.log("testId"+testId);
    this.questionService.addQuestion(this.examId,this.question).subscribe(data=>this.temp=data);
    alert('question added successfully')
   this.router.navigate(['/listquestion',this.examId]);
  }


}
