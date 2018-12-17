import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(
    private location: Location,
    private router: Router

  ) { }

  ngOnInit() {
  }
  onGoBack() {
    this.location.back();
  }
}
