import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  // To-Do and Done lists
  todo: string[] = ['Task 1', 'Task 2', 'Task 3'];
  done: string[] = [];

  // New task input
  newTask: string = '';

  // Function to add a new task to the To-Do list
  addTask() {
    if (this.newTask.trim()) {
      this.todo.push(this.newTask.trim());
      this.newTask = '';  // Clear input field
      console.log('New task added:', this.todo);  // Debugging
    }
  }

 
  drop(event: CdkDragDrop<string[]>) {
    console.log('Drop event triggered:', event);
    console.log('Previous container:', event.previousContainer);
    console.log('Current container:', event.container);
    const previousContainerId = event.previousContainer.id;
    const currentContainerId = event.container.id;
  
    // Log container IDs for debugging
    console.log('Previous container ID:', previousContainerId);
    console.log('Current container ID:', currentContainerId);
  
    // Check if we're moving between different lists
    if (previousContainerId !== currentContainerId) {
      console.log('Moving task between lists');
  
      // Transfer the item from the previous list to the current list
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
  
      // If moved to Done, start the removal timer
      if (currentContainerId === 'doneList') {
        const taskIndex = event.currentIndex;
        setTimeout(() => {
          console.log('Removing task from Done after 10 seconds:', this.done[taskIndex]);
          this.done.splice(taskIndex, 1); // Remove task after 10 seconds
        }, 10000);
      }
    } else {
      // This is for moving within the same list
      console.log('Moving within the same list:', currentContainerId);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  
    // Log the updated lists
    console.log('Updated To-Do List:', this.todo);
    console.log('Updated Done List:', this.done);
  }
  editTask(index: number) {
    const newTask = prompt("Enter new task name:");
    if (newTask) {
      this.todo[index] = newTask;
    }
  }
  
  deleteTask(index: number) {
    this.todo.splice(index, 1);
  }
 
  
}  