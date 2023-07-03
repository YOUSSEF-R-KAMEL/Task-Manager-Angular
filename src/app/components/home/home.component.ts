import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public tasksSer: TasksService){}

  deleteTask(i: number){
    this.tasksSer.deleteTask(i)
  }
}
