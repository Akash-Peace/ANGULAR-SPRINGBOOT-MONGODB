import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {} 
  chartDataResponse(dataIncome: string, dataBuying: string){
    return this.http.get("http://localhost:8081/niq/getdata?buyingType="+dataBuying+"&incomeType="+dataIncome)//+"&manufacturers="+dataMfr)
  };
}