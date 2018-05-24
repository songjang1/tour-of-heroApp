import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit, OnDestroy {
  hero: Hero = {id: 1, name: 'winstorm'};
  heroes: Hero[] = HEROES;
  selectedHero: Hero;
  constructor() {
    console.log('constructor 호출');
  }

  ngOnInit() {
    console.log('ngOnInit() 메서드 호출');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy 메서드 호출');
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
