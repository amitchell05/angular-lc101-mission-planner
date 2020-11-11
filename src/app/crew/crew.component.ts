import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", active: false, skills: ["Physicist, Astrophysics"], hoursInSpace: 343, photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", active: false, skills: ["Physician", "Chemical Engineer"], hoursInSpace: 190, photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", active: false, skills: ["Physics", "Electrical Engineer"], hoursInSpace: 979, photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", active: false, skills: ["Information Systems", "Shuttle Pilot", "Fighter Pilot", "Helicopter Pilot", "Colonel USAF"], hoursInSpace: 455, photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", active: false, skills: ["Aerospace Engineer", "Philosophy", "Physics", "Colonel USAF", "Fighter Pilot"], hoursInSpace: 686, photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", active: true, skills: ["Physician", "Surgeon", "Emergency Medicine"], hoursInSpace: 15, photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", active: true, skills: ["Physicist", "Philosophy", "Aerospace Engineer"], hoursInSpace: 0, photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate) {
    let found = false;
    for (let member of this.crew) {
      if (member === candidate) {
        found = true;
      }
    }

    if (this.crew.length < 3 && !found) {
      this.crew.push(candidate);
    } else if (found) {
      this.crew.splice(this.crew.indexOf(candidate), 1);
    }
  }

}
