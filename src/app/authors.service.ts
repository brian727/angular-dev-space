import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuthors() {
    return ["auth1", "auth2", "auth3"]
  }
  constructor() { }
}
