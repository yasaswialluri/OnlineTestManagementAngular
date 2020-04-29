import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';
import { Exam } from '../Exam';


@Component({
  selector: 'app-testdetails',
  templateUrl: './testdetails.component.html',
  styleUrls: ['./testdetails.component.css']
})
export class TestdetailsComponent implements OnInit {

  examId: number;
  exam :Exam;

  constructor(private route: ActivatedRoute,private router: Router,
    private testService: TestService) { }

  ngOnInit() {
    this.exam = new Exam();

    this.examId = this.route.snapshot.params['examId'];
    
    this.testService.getExam(this.examId)
      .subscribe(data => {
        console.log(data)
        this.exam= data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['list']);
  }
  

}
