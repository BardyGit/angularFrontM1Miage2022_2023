import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignments.model';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  

  titre = "Mon application sur les Assignments !"
  ajoutActive = false
  nomDevoir = ""
  dateDeRendu: Date = new Date();
  assignments = [
    {
      nom: 'devoir de maths super sympa',
      dateDeRendu:new Date("2020-11-17"),
      rendu: true
    },
    {
      nom: 'devoir de francais super sympa',
      dateDeRendu:new Date("2020-12-17"),
      rendu: false
    }
  ]
  constructor() { }
  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000)
  }

  onSubmit(){
    console.log(this.nomDevoir);
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;

    this.assignments.push(newAssignment);
  }
}
