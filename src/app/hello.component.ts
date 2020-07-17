import { Component, Input, OnInit } from '@angular/core';
import {CountryService} from './country.service';

@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit  {
  @Input() name: string;
  counties = [];
  showLoading = true;
  constructor(
    private countryService: CountryService,
  ) {}

  ngOnInit() {
    this.loadCountries();
  }

  private async loadCountries(): Promise<object> {
    const response = await this.countryService.GetList();
    this.counties = (Array.isArray(response)) ? response : [];
    return null;
  }

}
