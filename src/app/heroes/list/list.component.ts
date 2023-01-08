import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroes: string[] = ['Spider Man', 'Batman', 'Invincible', 'One Punch Man'];
  deleted: string = '';

  deleteHero() {
    this.deleted = this.heroes.shift() || '';
  }
}
