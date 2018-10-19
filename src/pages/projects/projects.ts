import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Project } from './project.interface';
import projectData from './project-data';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage implements OnInit {
  projectList: Project[];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.projectList = projectData;
  }

  openPublished(linkUri: string) {
    window.open(linkUri);
  }
}
