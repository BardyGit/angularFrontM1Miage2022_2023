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
      id:1,
      nom:"TP1 sur WebComponents, un lecteur audio amélioré",
      dateDeRendu: new Date('2020-01-17'),
      rendu:true
    },
    {
      id:2,
      nom:"TP2 sur Angular, un joli gestionnaire de devoir",
      dateDeRendu: new Date('2020-12-15'),
      rendu:false
    },
    {
      id:3,
      nom:"TP3 sur Angular, utilisation du routeur et de Web Services",
      dateDeRendu: new Date('2020-01-04'),
      rendu:false
    }
  ]
  constructor(private loggingService:LoggingService) {}
    
  getAssignments():Observable<Assignment[]>{
      return of(this.assignments);
    }

  getAssignment(id:number) : Observable<Assignment | undefined> {
    return of(this.assignments.find(a => a.id === id));
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
