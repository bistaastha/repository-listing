import { Component } from '@angular/core';
import { GetUserRepositoryDetailsService } from './services/get-user-repository-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: Array<any>;
  totalRepositories: number;
  totalPages: number;
  currentPage: number = 1;
  userData: any;
  isLoading: boolean = true;
  constructor(
    private getUserRepositoryDetails: GetUserRepositoryDetailsService
  ) {
    this.data = new Array<any>();
    this.totalRepositories = 0;
    this.totalPages = 0;
  }
  ngOnInit(): void {
    this.getUserDetails();
    this.getRepoDetails();
  }
  ngOnChanges() {
    this.isLoading = false;
  }
  // ngAfterContentInit() {
  //   this.isLoading = false;
  // }
  increment = (num: number) => {
    const currentNum = this.currentPage + num;
    this.currentPage =
      currentNum > this.totalPages
        ? this.totalPages
        : (this.currentPage = currentNum);
  };

  decrement = (num: number) => {
    const currentNum = this.currentPage - num;
    this.currentPage = currentNum < 1 ? 1 : (this.currentPage = currentNum);
  };

  pageChanged = (event: any) => {
    this.currentPage = event;
  };
  getRepoDetails = (pageNumber: number = 1) => {
    let reposPerPage = 100;
    this.isLoading = true;
    this.getUserRepositoryDetails
      .getData(reposPerPage, pageNumber)
      .subscribe((data) => {
        this.ngOnChanges();

        const mappedData = data.map((element: any) => {
          return {
            name: element.name,
            languagesUrl: element.languages_url,
            description: element.description,
            htmlUrl: element.html_url,
          };
        });

        this.data.push(...mappedData);
        if (data.length > 0) {
          this.getRepoDetails(pageNumber + 1);
        }
      });
    console.log(this.data);
    this.totalRepositories = this.data.length;
    this.totalPages = Math.ceil(this.totalRepositories / 10);
    this.data = [...this.data].reverse();
    // console.log(this.data);
  };
  getUserDetails = () => {
    this.getUserRepositoryDetails.getUserData().subscribe((data) => {
      this.userData = data;
    });
  };
}
