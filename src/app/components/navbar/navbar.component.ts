import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  latest_date;

  constructor(public datepipe: DatePipe) { 
    
    let date =this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.latest_date = date;
  }

  ngOnInit(): void {
  }

}
