import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackComponent } from './track/track/track.component';
import { WishlistComponent } from './track/wishlist/wishlist.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: TrackComponent ,
  //   data: {country: 'India'}
  // },
  // {
  //   path: '',
  //   component: ViewCardComponent,
  //   data: {country: 'Australia'}
  // }
  // { path: '', redirectTo: '/track', pathMatch: 'full' },
  // { path: 'track', component: TrackComponent },
  // { path: 'wishlist', component: WishlistComponent },
  // // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
