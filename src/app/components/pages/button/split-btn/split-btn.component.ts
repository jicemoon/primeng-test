import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/primeng';

@Component({
  selector: 'prime-split-btn',
  templateUrl: './split-btn.component.html',
  styleUrls: ['./split-btn.component.scss']
})
export class SplitBtnComponent implements OnInit {
  btnTypes = ['basic', 'secondary', 'success', 'info', 'warning', 'danger'];
  msgs: Message[] = [];
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Update', icon: 'fa-refresh', command: () => {
          this.update();
        }
      },
      {
        label: 'Delete', icon: 'fa-close', command: () => {
          this.delete();
        }
      },
      { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
      { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
    ];
  }

  save() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
  }

  update() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
  }

}
