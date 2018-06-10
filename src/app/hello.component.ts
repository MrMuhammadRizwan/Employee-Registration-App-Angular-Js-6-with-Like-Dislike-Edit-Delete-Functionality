import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h3>Employee Registration <br/>
Like-Dislike-Edit-Delete Functionality</h3>`,
})
export class HelloComponent  {
  @Input() name: string;
}
