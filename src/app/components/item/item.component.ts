import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  defaultImage: string = 'url(../../../assets/background/default-image.jpg)';
  imageURL: string;

  @Input()
  item: Recipe

  constructor() { }

  ngOnInit(): void {
    this.imageURL = `url(https://spoonacular.com/recipeImages/${this.item.id}-556x370.jpg)`;
  }
}
