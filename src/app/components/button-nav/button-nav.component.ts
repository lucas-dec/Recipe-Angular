import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-nav',
  templateUrl: './button-nav.component.html',
  styleUrls: ['./button-nav.component.scss']
})
export class ButtonNavComponent implements OnInit {

  @Input()
  imageURL: string;

  @Input()
  linkURL: string;

  @Input()
  linkName: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
