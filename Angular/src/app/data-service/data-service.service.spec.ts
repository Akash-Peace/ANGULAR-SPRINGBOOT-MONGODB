import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataServiceService } from './data-service.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

describe('DataServiceService', () => {
  let service: DataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('should get data', inject(
  //   [HttpTestingController, DataServiceService],
  //   (httpMock: HttpTestingController, dataService: DataServiceService) => {
  //     const mockUsers = [
  //       { name: 'Alice', website: 'example.com' },
  //       { name: 'Bob', website: 'example.org' }
  //     ];

  //     dataService.chartDataResponse("Buying Appliances", "Household Income").subscribe((event: HttpEvent<any>) => {
  //       switch (event.type) {
  //         case HttpEventType.Response:
  //           expect(event.body).toEqual(mockUsers);
  //       }
  //     });

  //     const mockReq = httpMock.expectOne("http://localhost:8081/niq/getdata?buyingType=Buying Appliances&incomeType=Household Income");

  //     expect(mockReq.cancelled).toBeFalsy();
  //     expect(mockReq.request.responseType).toEqual('json');
  //     mockReq.flush(mockUsers);

  //     httpMock.verify();
  //   }
  // ))
});
