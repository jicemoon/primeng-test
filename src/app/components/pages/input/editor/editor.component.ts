import { Component, OnInit, AfterViewInit } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'prime-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  text1 = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
  text2: string;
  quil: any;

  headerBarArr = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
  ];
  headerBars: Array<{ key: string, value: string, isArr?: boolean }[]> = [];

  constructor() { }

  ngOnInit() {
    const lens1 = this.headerBarArr.length;
    for (let i = 0; i < lens1; i++) {
      const temp = [];
      const arr = this.headerBarArr[i];
      const lens2 = arr.length;
      for (let j = 0; j < lens2; j++) {
        const item = arr[j];
        let key, value, isArr = false;
        if (typeof item === 'string') {
          key = item;
          value = '';
        } else {
          key = Object.keys(item)[0];
          value = item[key];
          isArr = Array.isArray(value);
        }
        temp.push({key, value, isArr});
      }
      this.headerBars.push(temp);
    }
  }
  ngAfterViewInit() {
    if (this.quil) {
      this.quil.update();
      this.quil = null;
    }
  }
  customInit(evt) {
    this.quil = evt.editor;
  }
}
