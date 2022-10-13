import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignments.model';
import { LoggingService } from './logging.service';

@Injectable({
  // permet d'éviter de l'ajouter dans les modules
    providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      nom:"TP1 sur WebComponents, un lecteur audio amélioré",
      dateDeRendu: new Date('2020-01-17'),
      rendu:true
    },
    {
      nom:"TP2 sur Angular, un joli gestionnaire de devoir",
      dateDeRendu: new Date('2020-12-15'),
      rendu:false
    },
    {
      nom:"TP3 sur Angular, utilisation du routeur et de Web Services",
      dateDeRendu: new Date('2020-01-04'),
      rendu:false
    }
  ]
  constructor(private loggingService:LoggingService) {}
    
  getAssignments():Observable<Assignment[]>{
      return of(this.assignments);
    }
  
  addAssignment(assignment:Assignment): Observable<string>{
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté");
    return of('Assignment ajouté');
  }
  updateAssignment(assignment:Assignment):Observable<string>{
    return of("Assignment service: assignment modifié")
  }
  deleteAssignment(assignment:Assignment):Observable<string>{
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos,1);

    return of("Assignment service: assignment supprimé !")
  }
}
