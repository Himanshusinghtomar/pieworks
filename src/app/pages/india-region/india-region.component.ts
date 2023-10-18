import { Component, ViewChild } from '@angular/core';
import { regionModel } from 'src/app/service/region';
import { RegionService } from 'src/app/service/region.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-india-region',
  templateUrl: './india-region.component.html',
  styleUrls: ['./india-region.component.css']
})
export class IndiaRegionComponent {

  region:regionModel[] = [];

  constructor(private regionservice:RegionService)
  {
    
  }

  @ViewChild('paginator') paginator: MatPaginator;


  

  dataSource: MatTableDataSource<regionModel>;

  ngOnInit() {
    this.regionservice.getRegion().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }


  displayedColumns: string[] = ['State', 'City', 'Weather', 'Temperature','Precipitation','Wind'];
  

}
