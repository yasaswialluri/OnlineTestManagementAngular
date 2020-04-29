import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssigntestService } from '../assigntest.service';
import { AssignExam } from '../assignexam';

@Component({
  selector: 'app-viewresult',
  templateUrl: './viewresult.component.html',
  styleUrls: ['./viewresult.component.css']
})
export class ViewresultComponent implements OnInit {
assignExam : AssignExam[]=[];
  constructor(private route: ActivatedRoute,private router: Router,private assignTestService:AssigntestService) { }

  ngOnInit(): void {
    this.assignTestService.AssignedExamList().subscribe( data =>{this.assignExam = data.body;
      console.log(data);
      })
  }

}
