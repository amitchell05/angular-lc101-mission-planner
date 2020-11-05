import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    if (!this.listItemExists(memberName)) {
      this.crew.push({name: memberName, firstMission: isFirst});
    } else {
      alert('Crew member already exists');
    }
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  save(name: string, member: object) {
    if (!this.listItemExists(name)) {
      member['name'] = name;
      this.memberBeingEdited = null;
    } else {
      alert('Crew member already exists');
    }
  }

  listItemExists(listItem: string) {
    let found = false;
    for (let member of this.crew) {
      if (member['name'] === listItem) {
        found = true;
        break;
      }
    }
    return found;
  }
}
