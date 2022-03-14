import { Component, Input, OnInit } from '@angular/core';
import { GetUserRepositoryDetailsService } from '../services/get-user-repository-details.service';

@Component({
  selector: 'repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.css'],
})
export class RepositoryDetailsComponent implements OnInit {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() languageUrl: string = '';
  @Input() repositoryLink: string = '';
  languageList: string[] = [];
  languageListInit: boolean = false;
  constructor(
    private getUserRepositoryDetails: GetUserRepositoryDetailsService
  ) {}

  ngOnInit() {
    this.getLanguageDetails();
    this.languageListInit = true;
  }

  redirect = () => {
    window.open(this.repositoryLink, '_blank');
  };

  getLanguageDetails = () => {
    this.getUserRepositoryDetails
      .getLanguageData(this.languageUrl)
      .subscribe((data) => {
        this.languageList = Object.keys(data);
        this.languageListInit = true;
      });
  };
}
