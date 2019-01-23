import { Injectable } from '@angular/core';
import { } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FakeBackendService } from './fake-backend.service';

@Injectable()
export class AppService {
base_url = 'http://mybackend.com/api/';
tasks_endpoint = 'tasks';
constructor(private http: HttpClient) {}

    getTasks() {
    return this.http
    .get(this.base_url + this.tasks_endpoint)
    // .map(res => res.json());
    .pipe(map((response: any) => response.json));
    }
}
