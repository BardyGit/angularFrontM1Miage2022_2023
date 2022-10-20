import { Component,OnInit } from '@angular/core';
import { Assignment } from './assignments.model';
import { AssignmentsService } from '../shared/assignments.service';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  

  titre = "Mon application sur les Assignments !"
  formVisible = false;
  assignmentSelectionne!:Assignment;
  assignments!:Assignment[];
  constructor(private assignmentService:AssignmentsService) { }
  ngOnInit(): void {
    this.getAssignments();
  }

  getAssignments(){
    this.assignmentService.getAssignments()
      .subscribe(assignments => this.assignments = assignments );
  }

  assignmentClique(assignment:Assignment) {
    this.assignmentSelectionne = assignment;
  }

  onAddAssignmentBtnClick(){
    //this.formVisible = true;
  }

  /*onNouvelAssignment(event:Assignment){
    this.assignmentService.addAssignment(event)
      .subscribe(message => console.log(message));

    this.formVisible = false;
  }*/
}
