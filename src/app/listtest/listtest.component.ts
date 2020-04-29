import { Component, OnInit } from '@angular/core';

import { TestService } from '../test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Exam } from '../Exam';


@Component({
  selector: 'app-listtest',
  templateUrl: './listtest.component.html',
  styleUrls: ['./listtest.component.css']
})
export class ListtestComponent implements OnInit {


  arr : Exam [] =[];
  exam : Exam = new Exam();

  constructor(private testService: TestService,
    private router: Router) {
      testService.getExamList().subscribe( data =>{this.arr = data.body;
        console.log(data);
        })
    }

  ngOnInit() {
   
  }

 
  deleteExam(examId: number) {
    this.testService.deleteExamById(examId).subscribe(data=>this.exam=data);
   
    alert('Test deleted Successfully');
    this.router.navigate(['/list']);
  }

  examDetails(examId: number){
    this.router.navigate(['testdetail', examId]);
  }

  updateExam(examId: number){
    this.router.navigate(['updatetest', examId]);
  }

  showQuestion(examId: number){
    this.router.navigate(['listquestion', examId]);
  }
 
  add()
  {
    this.router.navigate(['/','addtest']);
  }
  
}
