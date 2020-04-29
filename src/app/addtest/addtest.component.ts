import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';
import { Exam } from '../Exam';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {

  exam : Exam = new Exam();
  temp : Exam = new Exam();
  flag: boolean;
  constructor(private service : TestService,private route : Router) { }

  ngOnInit(): void {
  }

  addExam()
  {
    
    this.service.addExam(this.exam).subscribe(data=>this.temp=data);
    alert('Test added sucessfully')
    this.route.navigate(['/list']);
  }

  
}
