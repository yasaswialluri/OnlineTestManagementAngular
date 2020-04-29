import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssigntestService } from '../assigntest.service';
import { TestService } from '../test.service';
import { AssignExam } from '../assignexam';

@Component({
  selector: 'app-assignedtest',
  templateUrl: './assignedtest.component.html',
  styleUrls: ['./assignedtest.component.css']
})
export class AssignedtestComponent implements OnInit {
assignExamArray : AssignExam[] =  [];
assignExam : AssignExam=new AssignExam;
userId : number;
  constructor(private route: ActivatedRoute,private assignTestSevice: AssigntestService,private router : Router) 
  { 
    
  }
  
  ngOnInit(): void {
   
this.userId=this.route.snapshot.params['userId'];
   this.assignTestSevice.checkAssignedExam(this.userId).subscribe(data=>this.assignExamArray=data);
  }
startExam(examId:number)
{
  
  this.assignTestSevice.check(this.userId,examId).subscribe(data=>this.assignExam=data);
  console.log("status"+this.assignExam.status);
  this.check(examId);
}
check(examId:number)
{
  if(this.assignExam.status=="no")
  {
  this.router.navigate(['assignedquestion', examId,this.userId]);
  }
  else
  {
    alert('Test Already Attempted');
  console.log("Test Already attempted");
  }

}
}