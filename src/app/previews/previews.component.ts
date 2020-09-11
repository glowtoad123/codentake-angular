import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { List } from './project'
import { FirebaseService } from '../firebase.service'

@Component({
  selector: 'app-previews',
  templateUrl: './previews.component.html',
  styleUrls: ['./previews.component.css']
})



export class PreviewsComponent implements OnInit {

  /* items: Object; */

  items: Array<any>

  projects: Object;

  projectId: string;

  projectIdList: Array<string>;

  /*   getData(): void {
      var serverClient = new faunadb.Client({ secret: 'fnADpgTNT1ACEiUC4G_M5eNjnIPvv_eL99-n5nhe' });
    }  */

  /* getData()void {
    const admin = firestore.
  } */

  constructor(
    public firebaseService: FirebaseService
  ) {
    /* this.projects = List */
  }

  ngOnInit(): void {
    this.firebaseService.getData().subscribe(ret => {
      console.log(ret);
      this.items = ret.map(project => project);
    })

    this.projects = List
    console.log("work")
    console.log(this.items)

    this.firebaseService.getId().subscribe(ret => {
      this.projectIdList = ret.map(each =>
        each.payload.doc.id
      )
    })
  }

  uploadData(): void {
    List.map((project, index) => {
      console.log(project);
      this.firebaseService.putData(project)
    })
  }
  
  revealItems(): void {
    console.log(this.items)
  }

  setId(item): void {
    console.log(this.projectIdList)
    const position = this.items.indexOf(item);
    this.projectId = this.projectIdList[position]
    console.log(item)
    console.log(this.projectId)
  }

}
