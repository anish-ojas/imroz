import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fixed:boolean=false;
  @HostListener('window:scroll',['$event']) scrollNav(){
    if(window.scrollY>100){
      this.fixed=true;
      console.log("scrooled")
    }
    else{
      this.fixed=false;
    }
  }

}
