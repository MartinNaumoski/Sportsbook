import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatchesGridService } from 'src/services/matches-grid.service';
import { Pair } from 'src/interfaces/pair';
import { Odd } from 'src/interfaces/odd';
import { Chances } from 'src/interfaces/chances';

@Component({
  selector: 'app-matches-grid',
  templateUrl: './matches-grid.component.html',
  styleUrls: ['./matches-grid.component.css']
})
export class MatchesGridComponent implements OnInit {

  private routeSub: Subscription = new Subscription;
  id : number = 0;
  matchesData: any;
  layoutsData: any = [];
  errorFlag: boolean = true;
  loadingBarFlag: boolean = true;


  constructor( private route: ActivatedRoute, private matchesGridService: MatchesGridService) { }

  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    }); 

    this.takeLayoutsData();
    this.takeMachesData();
  }

  takeMachesData() {
    this.matchesGridService.takeLeagueData(this.id).subscribe(data => {
      this.matchesData = data;
      this.errorFlag = true;
      this.loadingBarFlag = false;
    }, err => {
      this.errorFlag = false;
      this.loadingBarFlag = false;
    });
  }

  takeLayoutsData() {
    this.matchesGridService.takeLayoutsData().subscribe( data => {
      this.layoutsData =  data.data.sort((oddA : Odd, oddB : Odd) => (oddA.priority > oddB.priority) ? 1 : -1);
      this.layoutsData.filter( (element: any) => {
          element.odds.sort((priorityA: Chances, priorityB : Chances) => priorityA.priority > priorityB.priority ? 1 : -1)
      });
    });
  }

  getCoefficient(pair: any, odd : Odd,element: Chances) {
    return pair.odds[odd.index]?.find((it: Chances) => it.name == element.id)?.value;
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
