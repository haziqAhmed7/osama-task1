import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) { }

  public async GetList(): Promise<object> {
    const countries = [];
    const url = "http://localhost:51142/api/localdata/getCountryList";
    const url2 = "https://restcountries.eu/rest/v2/all";

    await this.http.get(url2).toPromise()
    .then(data => {
        if (Array.isArray(data)) {
          data.forEach((record) => {
            let temp = record;
            countries.push(temp);
          });
        }
    })
    .catch(error => {
      console.log(error.message);
      // load fake data here
      // const faker = new FakeData();
      // countries.push(faker.loadFakeData());
    });
    console.log(countries[0]);
    return countries;
  }
}

/*
export class FakeData {

  loadFakeData() {
    return
    {
      name: "Afghanistan", topLevelDomain: [".af"], alpha2Code: "AF",
        alpha3Code: "AFG",
          callingCodes: ["93"],
            capital: "Kabul",
              altSpellings: ["AF", "Afġānistān"],
                region: "Asia",
                  subregion: "Southern Asia",
                    population: 27657145,
                      latlng: [33.0, 65.0],
                        demonym: "Afghan",
                          area: 652230.0,
                            gini: 27.8,
                              timezones: ["UTC+04:30"],
                                borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
                                  nativeName: "افغانستان",
                                    numericCode: "004",
                                      currencies: [{
                                        code: "AFN",
                                        name: "Afghan afghani",
                                        symbol: "؋"
                                      }],
                                        languages: [{
                                          iso639_1: "ps",
                                          iso639_2: "pus",
                                          name: "Pashto",
                                          nativeName: "پښتو"
                                        }, {
                                          iso639_1: "uz",
                                          iso639_2: "uzb",
                                          name: "Uzbek",
                                          nativeName: "Oʻzbek"
                                        }, {
                                          iso639_1: "tk",
                                          iso639_2: "tuk",
                                          name: "Turkmen",
                                          nativeName: "Türkmen"
                                        }],
                                          translations: {
        de: "Afghanistan",
          es: "Afganistán",
            fr: "Afghanistan",
              ja: "アフガニスタン",
                it: "Afghanistan",
                  br: "Afeganistão",
                    pt: "Afeganistão",
                      nl: "Afghanistan",
                        hr: "Afganistan",
                          fa: "افغانستان"
      },
      flag: "https://restcountries.eu/data/afg.svg",
        regionalBlocs: [{
          acronym: "SAARC",
          name: "South Asian Association for Regional Cooperation",
          otherAcronyms: [],
          otherNames: []
        }],
          cioc: "AFG"
    };
  }
}
*/