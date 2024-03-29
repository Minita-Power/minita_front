import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get('http://localhost:8080/person/listar')
  }
  create(person: Person){
    return this.http.post('http://localhost:8080/person',person)
  }

  update(id: BigInteger , person: Person){
    return this.http.put('http://localhost:8080/person/'+id,person)
  }

  delete(id:string){
    return this.http.delete('http://localhost:8080/delete/${id}')
  }

}
