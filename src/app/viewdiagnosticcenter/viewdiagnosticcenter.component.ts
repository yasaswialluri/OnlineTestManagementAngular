import { Component, OnInit } from '@angular/core';
import { DiagnosticcenterService } from '../diagnosticcenter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnoscticCenter } from '../center';

@Component({
  selector: 'app-viewdiagnosticcenter',
  templateUrl: './viewdiagnosticcenter.component.html',
  styleUrls: ['./viewdiagnosticcenter.component.css']
})
export class ViewdiagnosticcenterComponent implements OnInit {
center : DiagnoscticCenter[]=[];
center1 : DiagnoscticCenter= new DiagnoscticCenter();
  constructor(private route: ActivatedRoute,private router: Router,
    private centerService : DiagnosticcenterService) { }

  ngOnInit(): void {
    this.centerService.getTestList().subscribe( data =>{this.center = data.body;
      console.log(data);
      })
  }
showTest(centerId:number)
{
  this.router.navigate(['listtest', centerId]);
}
}
