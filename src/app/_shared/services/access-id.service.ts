import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessIdService {

  public id: string;
  public error: HttpErrorResponse;

  constructor(private route: ActivatedRoute) {
  }

  public getId(): void {
    this.route.parent.params.subscribe(
      data => this.id = data.id,
      (err: HttpErrorResponse) => this.error = err,
    );
  }
}
