import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssigntestService } from '../assigntest.service';
import { TestService } from '../test.service';
import { UserService } from '../user.service';
import { AssignExam } from '../assignexam';


@Component({
  selector: 'app-listassigntest',
  templateUrl: './listassigntest.component.html',
  styleUrls: ['./listassigntest.component.css']
})
export class ListassigntestComponent implements OnInit {
  arr : AssignExam [] =[];
  assignExam : AssignExam = new AssignExam();
  constructor(private route: ActivatedRoute,private router: Router,private assignTestService: AssigntestService
   ) {  assignTestService.AssignedExamList().subscribe( data =>{this.arr = data.body;
    console.log(data);
    })}

  ngOnInit(): void {
    
  }
  deleteAssignedExam(examUserId: number) {
    this.assignTestService.deleteAssignedExam(examUserId).subscribe(data=>this.assignExam=data);
    
    alert('Removed the assigned test ');
    this.router.navigate(['/listassigntest']);
  }

  assignExams()
  {
    this.router.navigate(['/','assigntest']);
  }
}
