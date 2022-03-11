import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() name: string = ""
  @Input() github: string = ""
  @Input() imageUrl: string = ""
  @Input() location: string = ""
  @Input() twitter: string = ""
  @Input() bio: string = ""
  constructor() {
    console.log(this.github.length)
    console.log(this.imageUrl)
  }

  ngOnInit(): void {
  }

}
