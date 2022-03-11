import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'language-label',
  templateUrl: './language-label.component.html',
  styleUrls: ['./language-label.component.css'],
})
export class LanguageLabelComponent implements OnInit {
  @Input() language: string = '';
  constructor() {}

  ngOnInit(): void {}
}
