import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-certification',
  standalone: true,
  imports: [],
  templateUrl: './skills-certification.component.html',
  styleUrl: './skills-certification.component.css'
})
export class SkillsCertificationComponent {
  title1: string = "Certifications";
  title2: string = "Skills";
  extracurricular1: string = "Finance Officer of GDSC - HAU";
  extracurricular2: string = "Web Design Competition 2024 by Code Geeks";
  certificate1: string = "CompTIA ITF+";
  certificate2: string = "Cybersecurity Essentials by Cisco";
  certificate3: string = "Introduction to Networks by Cisco";
  school: string = "Holy Angel University";
  skill1: string[] = ['HTML', ' CSS', ' Javascript'];
  skill2: string = "Responsive Design";
  skill3: string = "Wordpress";
}
