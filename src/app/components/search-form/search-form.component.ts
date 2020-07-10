import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  value = ""

  constructor() { }


  ngOnInit(): void {
  }

  onSubmit(event) {
    event.preventDefault();
    event.target.reset()
    console.log(this.value);
  }

  onType(event) {
    this.value = event.target.value;
  }

}
