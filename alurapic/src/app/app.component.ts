import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alurapic';

  photos=[
  {url:"https://static.wikia.nocookie.net/watchdogscombined/images/9/99/Wrench_WD2_Render.png.png", description:"wrench"},
  {url:"https://i.ytimg.com/vi/_Tx6mar2kwc/maxresdefault.jpg", description:"wrench2"}]

}
