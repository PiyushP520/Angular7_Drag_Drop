import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-drag-drop',
  templateUrl: './file-drag-drop.component.html',
  styleUrls: ['./file-drag-drop.component.css']
})
export class FileDragDropComponent implements OnInit {

  constructor() { }
  ngOnInit() {}

  files: any = [];
  uploadFile(FileList) {
    for (let index = 0; index < FileList.length; index++) {
      const element = FileList[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index ,fileInput) {
    this.files.splice(index, 1)
  }
}
