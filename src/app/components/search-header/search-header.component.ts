import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  defaultBackground: string = 'url(../../../assets/background/bg-header.jpg)';

  @Input()
  title: string;

  @Input()
  bgURL: string;

  constructor() { }

  ngOnInit(): void {
  }

}
