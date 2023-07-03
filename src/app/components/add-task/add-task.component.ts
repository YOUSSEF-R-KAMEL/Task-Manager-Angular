import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(public taskSer: TasksService, private router: Router){}

  saveTask(taskTitle: HTMLInputElement, taskDesc: HTMLTextAreaElement){
    this.taskSer.saveTask(taskTitle, taskDesc)
    this.router.navigate(['/'])
  }

}
