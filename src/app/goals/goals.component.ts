import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  constructor() { }
  title = 'Goals';

  goals:Goal[] = [
    new Goal(1,"Join Moringa java", "vist moringa and request for a chance to join the java module", new Date(2019,7,13) ),
    new Goal(2,"Master Angular", "master how to program Angular Apps professionaly", new Date(2019,8,1)),
    new Goal(3, "Learn Android ", "complete Java module then join Android", new Date(2019,8,1)),
    new Goal(4, "Chess mentorship", "Look for Chess for mentorship", new Date(2019,7,17))
  ];

  showDescription(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  toDelete(completeGoal: any, index: number){
    if(completeGoal){
     let goalToDelete = confirm(`You are about to delete goal ${this.goals[index].name}!`)

     if(goalToDelete){
       this.goals.splice(index, 1);
     }
    }

  }
  submitGoal(goal){
    let goalsLenth = this.goals.length;
    goal.id = goalsLenth+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  


  }
  ngOnInit() {
  }

}
