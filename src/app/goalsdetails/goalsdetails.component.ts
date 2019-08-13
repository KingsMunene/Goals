import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goalsdetails',
  templateUrl: './goalsdetails.component.html',
  styleUrls: ['./goalsdetails.component.css']
})
export class GoalsdetailsComponent implements OnInit {
  constructor() { }

  @Input() goal:Goal;
  @Output() completeGoal = new EventEmitter<boolean>();

  deleteGoal(complete:boolean){
    this.completeGoal.emit(complete);
  }

  ngOnInit() {
  }

}
