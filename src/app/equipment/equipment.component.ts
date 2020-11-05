import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    this.equipment.push(item);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  save(newItem: string, item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1, newItem);
    this.itemBeingEdited = null;
  }

}
