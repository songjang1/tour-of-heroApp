import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit, OnDestroy {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
    console.log(this.heroService);
  }

  ngOnInit() {
    console.log('ngOnInit() 메서드 호출');
    this.gerHeroes();
  }
  ngOnDestroy() {
    console.log('ngOnDestroy 메서드 호출');
  }
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  gerHeroes(): void {
    /*this.heroes = this.heroService.getHeroes();*/
    this.heroService.getHeroes().subscribe(res => this.heroes = res);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
