import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
title: string = "References";
ref__person1: string = "Dr. Joseph A. Esquivel from Holy Angel University";
email1: string = "jesquivel@hau.edu.ph";
ref__person2: string = "Mr. Chris Almocera from Holy Angel University";
email2: string = "calmocera@hau.edu.ph";
ref__person3: string = "Mr. Leonilo T. Natividad from LCN Surplus Center & Enterprises";
email3: string = "lcn_surplus@yahoo.com"
}
