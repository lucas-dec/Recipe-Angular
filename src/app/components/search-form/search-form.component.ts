import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  value = ""

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit(event) {
    event.preventDefault();
    event.target.reset()
    this.router.navigate([`/search/${this.value}`])
  }

  onType(event) {
    this.value = event.target.value;
  }

}
