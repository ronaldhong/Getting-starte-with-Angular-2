import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
/*transform value back as json  .map*/
import "rxjs/add/operator/map";

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: String;
  constructor(private http: Http) { }


/*Angular 2 use observable (.subscribe), not promise or callback*/
  ngOnInit() {
    this.http.get('data/cribs.json').map(res=> res.json())
    .subscribe(
    data => this.cribs = data,
    error => this.error = error.statusText
    )
  }

}
