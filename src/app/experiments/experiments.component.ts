import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];
  experimentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(experiment: string) {
    if (!this.listItemExists(experiment)) {
      this.experiments.push(experiment);
    } else {
      alert('Experiment already exists');
    }
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  save(newExperiment: string, experiment: string) {
    if (!this.listItemExists(newExperiment)) {
      let index = this.experiments.indexOf(experiment);
      this.experiments.splice(index, 1, newExperiment);
      this.experimentBeingEdited = null;
    } else {
      alert('Experiment already exists');
    }
  }

  listItemExists(listItem: string) {
    let found = false;
    for (let currentExperiment of this.experiments) {
      if (currentExperiment === listItem) {
        found = true;
        break;
      }
    }
    return found;
  }
}
