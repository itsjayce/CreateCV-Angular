import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
address: string = "28-4 Dale St. Holy Family Village Phase 1 Cutcut, Angeles City, Pampanga 2009";
contact__details: string[] = ["0908 226 4571", "github.com/itsjayceee", "jasline.natividad7@gmail.com"];
key__skills = ["HTML", "CSS", "Javascript"]
}
