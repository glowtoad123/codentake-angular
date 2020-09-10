import { Component, OnInit, Input } from '@angular/core';
import {FirebaseService} from '../firebase.service'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @Input() title: string = "";
  @Input() Description: string = "";
  @Input() Repository: string = "";
  Categories: Array<string> = [];
  @Input() category: string;
  Links: Array<string> = [];
  @Input() link: string;
  Roadmap: Array<string> = []
  @Input() goal: string;
  Creator: string;

  constructor(public firebaseService: FirebaseService) {
   }

  ngOnInit(): void {
  }

  readTitle(): void {
    console.log(this.title)
  }

  readCategory(): void {
    console.log(this.category)
    console.log(this.Categories)
  }

  addCategory(): void {
    this.Categories.push(this.category)
    this.category = ""
  }

  deleteCategory(each): void {
    const position = this.Categories.indexOf(each);
    this.Categories.splice(position, 1)
  }

  addLink(): void {
    this.Links.push(this.link)
    this.link = ""
  }

  deleteLink(each){
    const position = this.Links.indexOf(each);
    this.Links.splice(position, 1)
  }

  addGoal(): void {
    this.Roadmap.push(this.goal)
    this.goal = ""
  }

  deleteGoal(each): void {
    const position = this.Roadmap.indexOf(each);
    this.Roadmap.splice(position, 1)
  }

  saveData(): void {
    const Project = {
      Project_Title: this.title,
      Description: this.Description,
      Repository: this.Repository,
      Categories: this.Categories,
      Links: this.Links,
      Roadmap: this.Roadmap,
      Creator: "placeman",
      inquisitors: "",
    }
    console.log(Project)
    this.firebaseService.putData(Project)
  }

}
