import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe'

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  itemsArray

  @Input()
  items: Array<Recipe>

  constructor() { }

  ngOnInit(): void {
    this.itemsArray = this.items[0].recipes;

  }
}
