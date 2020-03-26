import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  private girlNames: string[];
  private boyNames: string[];
  private favGirlNames: string[];
  private favBoyNames: string[];

  constructor(private http: HttpClient) {
    this.http.get('assets/boy.txt', {responseType: 'text'})
      .subscribe(data => {
        this.boyNames = data.split("\n");
      });
    this.http.get('assets/girl.txt', {responseType: 'text'})
      .subscribe(data => {
        this.girlNames = data.split("\n");
      });
    this.http.get('assets/favgirl.txt', {responseType: 'text'})
      .subscribe(data => {
        this.favGirlNames = data.split("\n");
      });
    this.http.get('assets/favboy.txt', {responseType: 'text'})
      .subscribe(data => {
        this.favBoyNames = data.split("\n");
      });
  }

  //0 = girl, 1 = boy
  generateName(gender: number, fav: boolean): string {
    // this.http.get('assets/boy.txt', {responseType: 'text'})
    //   .subscribe(data => {
    //     this.boyNames = data.split("\n");
    //   });
    switch (gender) {
      case 0: {
        return fav ? this.favGirlNames[Math.floor(Math.random() * this.favGirlNames.length)] :
          this.girlNames[Math.floor(Math.random() * this.girlNames.length)];
      }
      case 1: {
        return fav ? this.favBoyNames[Math.floor(Math.random() * this.favBoyNames.length)] :
         this.boyNames[Math.floor(Math.random() * this.boyNames.length)];
      }
    }
  }

}
