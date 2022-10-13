import { Component, Input,OnInit } from '@angular/core';
import { Assignment } from '../assignments/assignments.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmis!:Assignment;

  constructor(private assignmentsService : AssignmentsService) { }

  ngOnInit(): void {
  }
  onAssignmentRendu(){
    this.assignmentTransmis.rendu = true;

    this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe(message => console.log(message));
  }
  onDelete(){
    this.assignmentsService.deleteAssignment(this.assignmentTransmis)
      .subscribe((message) => console.log(message));
  }

}
