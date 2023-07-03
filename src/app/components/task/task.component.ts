import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  taskId: any;
  task: any

  constructor(public route: ActivatedRoute, public taskSer: TasksService, public router: Router){
    this.taskId = this.route.snapshot.paramMap.get('id')
    this.task   = this.taskSer.tasks[this.taskId]
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id')
    this.task   = this.taskSer.tasks[this.taskId - 1]
  }

 saveTask(){
  this.taskSer.editTask(this.taskId, this.task);
  this.router.navigate([''])

 }
deleteTask(){
  this.taskSer.deleteTask(this.taskId)
}


}
