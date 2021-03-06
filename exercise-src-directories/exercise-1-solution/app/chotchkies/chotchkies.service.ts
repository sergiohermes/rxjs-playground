import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Chotchkie} from './chotchkies.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable()
export class ChotchkiesService {

  constructor(private httpClient: HttpClient) { }

  getAllChotchkies(): Observable<Chotchkie[]> {
    return this.httpClient.get<Chotchkie[]>('/api/chotchkies');
  }

  getChotchkiesBySearchTerm(term: string) {
    return this.httpClient.get<Chotchkie[]>(
      '/api/chotchkies', { params: { searchTerm: term }});
  }
}
