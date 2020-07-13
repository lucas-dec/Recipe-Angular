import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../../models/recipes'

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  itemsArray

  @Input()
  items: Array<Recipes>

  constructor() { }

  ngOnInit(): void {
    this.itemsArray = this.items;
  }
}
