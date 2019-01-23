import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { FakeBackendService } from './../../services/fake-backend.service';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tasks: any[] = [];
  myTask: string;

  constructor() { }

  ngOnInit() {
  }
}
