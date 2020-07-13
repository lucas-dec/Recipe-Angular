import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  errorIcon: string = "../../assets/icons/error.png"
  infoIcon: string = "../../assets/icons/info.png"

  @Input() error: string
  constructor() { }

  ngOnInit(): void {
  }

}
