import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  defaultBackground: string = 'url(../../../assets/background/default-image.jpg)';
  bgSource: string;

  @Input()
  bgName: string;

  @Input()
  title: string;

  constructor() { }

  ngOnInit(): void {
    this.bgSource = `url(../../../assets/background/${this.bgName}.jpg)`;
  }

}
