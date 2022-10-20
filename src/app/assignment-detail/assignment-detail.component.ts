import { Component,OnInit } from '@angular/core';
import { Assignment } from '../assignments/assignments.model';
import { AssignmentsService } from '../shared/assignments.service';
import { ActivatedRoute, Router }from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  /*@Input()*/ assignmentTransmis!:Assignment|undefined;

  constructor(private assignmentsService : AssignmentsService,
              private route: ActivatedRoute,
              private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.getAssignment();
  }
  getAssignment(){
    // on récupère l'id dans le snapshot passé par le routeur
    // le "+" force la conversion de l'id de type string en "number"
    const id=+this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
      .subscribe(assignment => this.assignmentTransmis = assignment);
  }
  onAssignmentRendu(){
    if(!this.assignmentTransmis) return;
    this.assignmentTransmis.rendu = true;

    this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe(message => console.log(message));

    this.router.navigate(["/home"]);
  }
  onClickEdit(){
    if(!this.assignmentTransmis) return;
    this.router.navigate(["/assignment", this.assignmentTransmis.id, 'edit'],
    {queryParams:{nom:this.assignmentTransmis.nom}, fragment:'edition'});
  }
  onDelete(){
    if(!this.assignmentTransmis) return;
    this.assignmentsService.deleteAssignment(this.assignmentTransmis)
      .subscribe((message) => console.log(message));

      this.router.navigate(["/home"]);
  }

  isAdmin():boolean{
    return this.authService.loggedIn;
  }

}
