import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignments/assignments.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
@Output() nouvelAssignment = new EventEmitter<Assignment>();

  ajoutActive = true
  nomDevoir:string = ""
  dateDeRendu: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.nomDevoir);
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;

    this.nouvelAssignment.emit(newAssignment);
  }
}
