import { Observable } from 'rxjs';

/* here we will create a generic interface */
export interface CrudService {

  getAll(): Observable<any> ;

  add(item): Observable<any> ;

  update(item): Observable<any> ;

  delete(id: number): Observable<any> ;
}
