import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
   comments = [
  
    {
      text: "1",
      comments: [
        {
          text: "1.1",
          comments: [
            {
              text: "1.1.1 "
            }
          ]
        },
         {
          text: "1.2",
          comments: [
            {
              text: "1.2.1"
            }
          ]
        }
      ]
    },
      
    {
      text: "2",
      comments: [
        {
          text: "2.1",
          comments: [
            {
              text: "2.1.1"
            }
          ]
        }
      ]
    }
  ]
}
