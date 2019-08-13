import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Goal} from '../goal';


@Component({
  selector: 'app-goalsform',
  templateUrl: './goalsform.component.html',
  styleUrls: ['./goalsform.component.css']
})
export class GoalsformComponent implements OnInit {

  newGoal = new Goal(0,"","",new Date());
  @Output() addGoal = new EventEmitter<Goal>();

  submitGoal(){
    this.addGoal.emit(this.newGoal);
  }

  constructor() { }

  ngOnInit() {
  }

}
