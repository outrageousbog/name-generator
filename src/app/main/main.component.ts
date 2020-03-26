import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NamesService} from '../names.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NamesService]
})
export class MainComponent implements OnInit {
  chosenName: string;
  amongFavorite: boolean = false;
  boy: boolean = false;
  girl: boolean = false;

  constructor(private namesService : NamesService) { }

  ngOnInit() {
  }

  generateName = () => {
    this.chosenName = this.namesService.generateName(this.boy ? 1 : 0, this.amongFavorite);
  }

  handleFavoriteClick() {
    this.amongFavorite = !this.amongFavorite;
  }
}
