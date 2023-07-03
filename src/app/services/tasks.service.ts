import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Array<Task> = [];

  constructor() {
    let savedTasks = localStorage.getItem('tasks')
    if(savedTasks) this.tasks = JSON.parse(savedTasks)
    else this.tasks = []
  }

  saveTask(taskTitle: HTMLInputElement, taskDesc: HTMLTextAreaElement){
    this.tasks.push({
      title: taskTitle.value,
      description: taskDesc.value,
    })
    this.saveAll();
  }

  deleteTask(i: number){
    this.tasks.splice(i, 1);
    this.saveAll();
  }

  editTask(taskId: any, task: any){
    this.tasks[taskId - 1] = task;
    this.saveAll();
  }

  saveAll(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
