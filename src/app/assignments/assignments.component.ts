import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  constructor() { }

  titre = "Mon application sur les Assignments !"
  assignments = [
    {
      nom: 'devoir de maths super sympa',
      dateDeRendu: '16 août 2001',
      rendu: true
    },
    {
      nom: 'devoir de francais super sympa',
      dateDeRendu: '23 août 2001',
      rendu: false
    }
  ]
  ngOnInit(): void {
  }
}
