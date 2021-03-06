import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _httpClient: HttpClient) {}

  // fetching token from local storage stored during login
  public httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      token: localStorage.token,
    }),
  };

  public postMethod(url: string, body: any, options: any): Observable<any> {
    return this._httpClient.post(url, body, options);
  }

  public getMethod(url: string, options: any): Observable<any> {
    return this._httpClient.get(url, options);
  }

  public putMethod(url: string, body: any, options: any): Observable<any> {
    return this._httpClient.put(url, body, options);
  }
  public deleteMethod(url: string, options: any): Observable<any> {
    return this._httpClient.delete(url, options);
  }

  public patchMethod(url: string, body: any, options: any): Observable<any> {
    return this._httpClient.patch(url, body, options);
  }
}
