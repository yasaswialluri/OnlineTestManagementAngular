import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from '../test';

@Component({
  selector: 'app-viewtest',
  templateUrl: './viewtest.component.html',
  styleUrls: ['./viewtest.component.css']
})
export class ViewtestComponent implements OnInit {
  arr :Test [] = [];
  test:Test= new Test();
  centerID:number;
  constructor(private route: ActivatedRoute,private router: Router,
    private testService : TestService) { }

  ngOnInit(): void {

    this.centerID=this.route.snapshot.params['id'];
    this.testService.getTestInCenter(this.centerID).subscribe( data =>{this.arr = data.body;
      console.log(data);
      })
  }


  delete(testId:number)
  {
    this.testService.deleteTestById(testId).subscribe(data=>this.test=data);
    alert('Test '+testId+' deleted sucessfully')
  }
  back()
  {
    this.router.navigate(['/listcenter']);
  }
}
