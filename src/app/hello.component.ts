import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {CountryService} from './country.service';

@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
  styleUrls: ['hello.component.css']
})
export class HelloComponent implements OnInit, AfterViewInit  {
  @Input() name: string;
  countries = [];
  showLoading = true;
  constructor(
    private countryService: CountryService,
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadCountries();
  }

  private async loadCountries(): Promise<object> {
    const response = await this.countryService.GetList();
    this.countries = (Array.isArray(response)) ? response : [];
    this.showLoading = false;
    return null;
  }

}
