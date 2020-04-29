import { Component, OnInit } from '@angular/core';

import { TestService } from '../test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Exam } from '../Exam';


@Component({
  selector: 'app-updatetest',
  templateUrl: './updatetest.component.html',
  styleUrls: ['./updatetest.component.css']
})
export class UpdatetestComponent implements OnInit {

  examId: number;
  exam : Exam;
  submitted = false;
  constructor(private route: ActivatedRoute,private testService : TestService,private router : Router) { }

  ngOnInit() {
    this.exam = new Exam();

    this.examId = this.route.snapshot.params['examId'];

    this.testService.getExam(this.examId)
      .subscribe(data => {
        console.log(data)
        this.exam = data;
      }, error => console.log(error));
  }

  updateExam() {
    this.testService.updateExam(this.examId, this.exam)
      .subscribe(data => console.log(data), error => console.log(error));
    this.exam = new Exam();

    alert('Test updated successfully');
    this.gotoList();
  }

  onSubmit() {
    this.updateExam();
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['/list']);
    
  }

}
