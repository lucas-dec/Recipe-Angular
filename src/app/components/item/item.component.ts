import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  defaultImage: string = 'url(../../../assets/background/default-image.jpg)';

  imageURL: string;
  @Input()
  item: any

  constructor() { }

  ngOnInit(): void {
    this.imageURL = `url(https://spoonacular.com/recipeImages/${this.item.id}-556x370.jpg)`
  }

}
