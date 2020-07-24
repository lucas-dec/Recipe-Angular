import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {

  @Input()
  extendedIngredients

  constructor() { }

  ngOnInit(): void {

  }

  measure(ingredient) {
    return Math.floor(ingredient.measures.metric.amount)
  }
}
