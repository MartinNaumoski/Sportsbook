import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesGridComponent } from 'src/components/matches-grid/matches-grid.component';
import { SportsbookComponent } from 'src/components/sportsbook/sportsbook.component';

const routes: Routes = [
  { path: '',   redirectTo: '/sportsbook', pathMatch: 'full' },
  { path: 'sportsbook', component: SportsbookComponent },
  { path: 'matches/:id', component: MatchesGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
