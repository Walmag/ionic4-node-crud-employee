import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<Employee>('http://localhost:3000/api/create-employee', employee, this.httpOptions)
      .pipe(
        catchError(this.handleError<Employee>('Add Employee'))
      );
  }

  getEmployee(id): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/api/get-employee/' + id)
      .pipe(
        tap(_ => console.log(`Employee fetched: ${id}`)),
        catchError(this.handleError<Employee[]>(`Get Employee id=${id}`))
      );
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/api')
      .pipe(
        tap(employees => console.log('Employees fetched!')),
        catchError(this.handleError<Employee[]>('Get Employees', []))
      );
  }

  updateEmployee(id, employee: Employee): Observable<any> {
    return this.http.put('http://localhost:3000/api/update-employee/' + id, employee, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Employee updated: ${id}`)),
        catchError(this.handleError<Employee[]>('Update Employee'))
      );
  }

  deleteEmployee(id): Observable<Employee[]> {
    return this.http.delete<Employee[]>('http://localhost:3000/api/delete-employee/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Employee deleted: ${id}`)),
        catchError(this.handleError<Employee[]>('Delete Employee'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}