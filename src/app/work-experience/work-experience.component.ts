import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  title: string = " Work Experience";
  company1: string = "LCN Surplus Center & Enterprises";
  company2: string = "Polartech Air Conditioning Services";
  company3: string = "Lotus Tea and Coffee - Angeles City";
  work__details1: string = "Created engaging graphics and videos for social media, scheduled posts to maintain consistent online presence, and built brand awareness by engaging with followers and responding to client inquiries.";
  work__details2: string = "Developed visually appealing graphics and designs tailored for social media posts, ensuring alignment with brand identity and audience preferences. Strategically managed social media ad campaigns, which includes Facebook Ads.";
  work__details3: string = "Prepared and served a variety of beverages with precision, attention to detail, and creativity, consistently meeting or exceeding quality standards.";
}
