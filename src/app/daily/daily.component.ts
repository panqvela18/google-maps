import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent {
  @Input() daily=''
  @Input() maxWindSpeed=''
  @Input() maxTemp=''
}
