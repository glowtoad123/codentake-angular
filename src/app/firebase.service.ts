import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  getData(){
    return this.db.collection('Projects').valueChanges()
  }

  getId(){
    return this.db.collection("Projects").snapshotChanges()
  }

  putData(project){
    const initialPut = this.db.collection('Projects')
    return (
      initialPut.add(({
        Categories: project.Categories,
        Creator: project.Creator,
        Description: project.Description,
        Repository: project.Repository,
        Links: project.Links,
        Project_Title: project.Project_Title,
        Roadmap: project.Roadmap,
        Update: [],
        inquisitors: project.inquisitors
      }))
    )
  }

}
