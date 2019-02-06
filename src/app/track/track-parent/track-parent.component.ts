import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Track } from '../Track';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track-parent',
  templateUrl: './track-parent.component.html',
  styleUrls: ['./track-parent.component.css']
})
export class TrackParentComponent implements OnInit {

tracks: Array<Track>;
searchValue: string;
errorStatus: string;
statusCode: number;
country: string;

  constructor(private trackservice: TrackService,
    ) {
      this.tracks = [];
      // console.log('from to service to component', this.searchValue);
     }

  ngOnInit() {
    // this.trackservice.getTracks(this.country).subscribe((data: any) => {this.trackList = data;
    //   console.log( this.trackList );
    // });
    // const data = this.route.data.subscribe(country => {
    //   this.country = country.country;
    //   console.log('country', country.country);
    // });
    this.trackservice.getTrackDetails().subscribe((tracklist: any) => {
      this.tracks = tracklist.tracks.track;


    });
  }

  // addToWishList(track) {
  //   this.trackservice.addTracktoWishList(track).subscribe(
  //     data => {
  //       // console.log('data in thumbnail', data);
  //       this.statusCode = data.status;
  //       // console.log('success msg', data.body);
  //       if (this.statusCode === 201) {
  //         console.log('Success', this.statusCode);
  //         this.snackBar.open('Track Successfully added !!!', '', {
  //           duration: 1500
  //         });
  //       }
  //     },
  //     err => {
  //       const errorStatus = err;
  //       this.statusCode = parseInt(errorStatus, 10);
  //       if (this.statusCode === 409) {
  //         this.snackBar.open('Track already added', '', {
  //           duration: 1000
  //         });
  //         this.statusCode = 0;
  //       }
  //     }
  //   );
  //   }

}
