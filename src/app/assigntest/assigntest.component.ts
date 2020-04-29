import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { TestService } from '../test.service';
import { AssigntestService } from '../assigntest.service';
import { Exam } from '../Exam';
import { AssignExam } from '../assignexam';

@Component({
  selector: 'app-assigntest',
  templateUrl: './assigntest.component.html',
  styleUrls: ['./assigntest.component.css']
})
export class AssigntestComponent implements OnInit {
  userarr : User [] =[];
  user : User = new User();
  examarr : Exam [] =[];
  exam : Exam = new Exam();
  assignExam : AssignExam = new AssignExam();
  temp : AssignExam = new AssignExam();
  
  constructor(private route: ActivatedRoute,private router: Router,private assignTestService: AssigntestService,
    private userService: UserService,private testService : TestService) { }

  ngOnInit(): void {
     this.userService.getUserList().subscribe( data =>{this.userarr = data.body;
      console.log(data);
      }) 
      this.testService.getExamList().subscribe( data =>{this.examarr = data.body;
        console.log(data);
        }) 
  } 

  assignExamToUser(examId:number,userId:number)
  {
  console.log("user"+userId);
  console.log("test"+examId);
    this.assignExam.status="no";
    this.assignTestService.assignExam(examId,userId,this.assignExam).subscribe(data=>this.temp=data,error=>alert(error.error.errorMessage));
   // console.log(testId);
  
   alert('Test '+examId+' is assignning to user '+userId);
   this.router.navigate(['/listassigntest']);
  }

}
