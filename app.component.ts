import { Component } from '@angular/core';
import { LoginComponent } from './login/loginPage.component';
import {ProjectsComponent} from './projects/project.component'
import {TaskComponent} from './task/tasks.component'
import {UserComponent} from './user/users.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GreatLearningTask';
  component:any;

  constructor()
  {
    
  }
  ngOnInit()
  {
    this.component= LoginComponent;
  }
  
  LoadProjects()
  {
    this.component = ProjectsComponent;
  }
  LoadTask()
  {
    this.component = TaskComponent;
  }
  
  LoadUser()
  {
    this.component = UserComponent;
  }
}




