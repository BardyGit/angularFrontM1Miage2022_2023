import { Component, OnInit/*, EventEmitter, Output*/ } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from '../assignments/assignments.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
//@Output() nouvelAssignment = new EventEmitter<Assignment>();

  ajoutActive = true
  id:number = 0;
  nomDevoir:string = ""
  dateDeRendu: Date = new Date();

  constructor(private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newAssignment = new Assignment();
    newAssignment.id = this.id;
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;

    //this.nouvelAssignment.emit(newAssignment);
    this.assignmentsService.addAssignment(newAssignment)
      .subscribe(message => console.log(message));
  }
}
