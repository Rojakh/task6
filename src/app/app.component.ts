import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit,AfterViewInit {
  @ViewChild('paginator',{static:true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  


  ELEMENT_DATA = [
    {domain: "app.com", price: '$45', clicks: 1.0079, update: 'Feb 12'},
    {domain: "base.com", price: '$32', clicks: 4.0026, update: 'Feb 14'},
    {domain: "max.com", price: '$64', clicks: 6.941, update: 'Mar 10'},
    {domain: "best.com", price: '$40', clicks: 9.0122, update: 'Apr 06'},
    {domain: "pro.com", price: '$35', clicks: 10.811, update: 'Mar 03'},
    {domain: "team.com", price: '$65', clicks: 12.0107, update: 'Apr 27'},
    {domain: "up.com", price: '$45', clicks: 14.0067, update: 'Sep 03'},
    {domain: "view.com", price: '$95', clicks: 15.9994, update: 'Jan 01'},
    {domain: "nice.com", price: '$75', clicks: 18.9984, update: 'May 08'},
    {domain: "fine.com", price: '$36', clicks: 20.1797, update: 'July 09'},
    {domain: "app.com", price: '$85', clicks: 22.9897, update: 'Sep 25'},
  {domain: "base.com", price: '$25', clicks: 24.305, update: 'Nov 19'},
  {domain: "max.com", price: '$80', clicks: 26.9815, update: 'Apr 23'},
  {domain: "best.com", price: '$20', clicks: 28.0855, update: 'Aug 15'},
  {domain: "pro.com", price: '$10', clicks: 30.9738, update: 'Jul 12'},
  {domain: "team.com", price: '$28', clicks: 32.065, update: 'Oct 13'},
  {domain: "up.com", price: '$95', clicks: 35.453, update: 'Nov 14'},
  {domain: "view.com", price: '$65', clicks: 39.948, update: 'Oct 20'},
  {domain: "nice.com", price: '$35', clicks: 39.0983, update: 'Mar 12'},
  {domain: "fine.com", price: '$50', clicks: 40.078, update: 'Apr 25'},
  ];

  displayedColumns: string[] =[];
  dataSource: any;
  constructor(){}

  ngOnInit(): void {
      this.displayedColumns = ['domain','price','clicks','update'];
      // this.dataSource = this.ELEMENT_DATA;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  
  
}


  export interface PeriodicElement {
    domain: string;
    price: string;
    clicks: number;
    update: string;
  }

