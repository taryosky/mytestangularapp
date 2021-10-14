import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = "Clement";
  myParam?: string;
  title = 'new-app';

  handleEvent(para:string){
      this.myParam = para;
  }
}
