import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <button (click)="onSave($event)">Save</button>
    <h2>{{title}}</h2>
    
    <img [src]="imageUrl" />
    <table>
      <tr>
        <td [attr.colSpan]="colSpan"]></td>
      </tr>
    </table>
    `
})
export class CoursesComponent {
  title = "List of Courses";
  imageUrl = "https://images.theconversation.com/files/125391/original/image-20160606-13080-s7o3qu.jpg?ixlib=rb-1.1.0&rect=273%2C0%2C2639%2C1379&q=45&auto=format&w=926&fit=clip";
  courses: any;
  colSpan = 2;
  onSave($event: any) {
    console.log("button clicked", $event)
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
