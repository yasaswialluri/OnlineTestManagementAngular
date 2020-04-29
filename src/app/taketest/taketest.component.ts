import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssigntestService } from '../assigntest.service';
import { AssignExam } from '../assignexam';

@Component({
  selector: 'app-taketest',
  templateUrl: './taketest.component.html',
  styleUrls: ['./taketest.component.css']
})
export class TaketestComponent implements OnInit {
assignExam: AssignExam = new AssignExam()
assignExamArray : AssignExam[]=[];
  constructor(private route: ActivatedRoute,private router: Router,private assignTestService: AssigntestService) { }

  ngOnInit(): void {
    
  }
takeExam(userId:number)
{

  this.assignTestService.checkAssignedExam(userId).subscribe(data=>this.assignExamArray=data);
  this.router.navigate(['assignedtest/',userId]);
}
}
