import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { SportbookService } from 'src/services/sportbook.service';
import { Countrie } from 'src/interfaces/country';
import { League } from 'src/interfaces/league';
import { Sport } from 'src/interfaces/sport';

@Component({
  selector: 'app-sportsbook',
  templateUrl: './sportsbook.component.html',
  styleUrls: ['./sportsbook.component.css'],
})

export class SportsbookComponent implements OnInit {

  treeControl = new NestedTreeControl<any>(node => node.countries || node.leagues );
  sportsBookData = new MatTreeNestedDataSource<any>();
  id = null;
  hasChild = ( node: any ) => ( (node.countries && node.countries.length > 0) || ((node.leagues && node.leagues.length > 0)));

  constructor(private sportbookService: SportbookService, private router: Router) {}

  ngOnInit(): void {
    this.sportbookService.getSPortsBookData().subscribe( data => {
      this.sportsBookData = data.data.sort((sportA : Sport, sportB : Sport) => (sportA.priority > sportB.priority) ? -1 : 1);
    });
    this.sortArrays();
  }

  takeMaches(node:any) {
    let length = Object.keys(node).length
    this.id = length == 3 ? this.id = node.id : null;
    if( this.id != null ){ this.router.navigateByUrl('/matches/' + this.id); }
  }

  sortArrays() {
    this.sportsBookData.data.filter( element => {
      element.countries.sort((countryA: Countrie, countryB : Countrie) => countryA.name > countryB.name ? 1 : -1)
    });
    this.sportsBookData.data.filter( element => {
      element.countries.filter( (el:Countrie) => {
        el.leagues.sort((leagueA: League, leagueB : League) => leagueA.name > leagueB.name ? 1 : -1)
      });
    });
  }


}
