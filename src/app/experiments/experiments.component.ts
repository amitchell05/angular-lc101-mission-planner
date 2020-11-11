import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
    tests: string[] = [];
    experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

    constructor() { }

    ngOnInit() { }

    // Code the 'addExperiment' function here:
    addExperiment(currentExperiment) {
      let found = false;
      for (let item of this.tests) {
        if (item === currentExperiment) {
          found = true;
        }
      }

      if (this.tests.length < 3 && !found) {
        this.tests.push(currentExperiment);
      } else if (found) {
        this.tests.splice(this.tests.indexOf(currentExperiment), 1);
      }
    }

}
