
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggle:boolean = true;
  @Input() myInput?:string;
  @Output() myOutput: EventEmitter<string>
  arr:string[] = ["Clement","Festus","Rufus","taofiq", "Able", "Edward"];
  constructor() { 
    this.myOutput = new EventEmitter<string>()
  }

  ngOnInit(): void {
  }

  changeToggle(){
    this.toggle = !this.toggle;
    this.myOutput?.emit("Clement");
  }

}
