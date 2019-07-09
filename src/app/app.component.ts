import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 b:any;
  
submit(a){
this.b=a.value;
  console.log(a.value);
  alert("registration successfully done");
}
}
