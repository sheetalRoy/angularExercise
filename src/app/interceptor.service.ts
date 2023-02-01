import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  token = '';
  omitCalls = ['auth'];
  skipInterceptor = false;
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //this.token = this.facadeService.getUserToken();
    this.omitCalls.forEach(api => {
      if (req.url.includes(api)) {
        this.skipInterceptor = true;
      }
    });
   if (this.token || this.skipInterceptor) {
      const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.token) });
      //console.log(req)
      //return next.handle(tokenizedReq);
      return next.handle(tokenizedReq).pipe(map((event: HttpEvent<any>) => {
        console.log(event, 'event');
        if (event instanceof HttpResponse) {
          if (event.status === 401) {
            // this.facadeService.userLoggedOut();
            // this.router.navigateByUrl('core/login');
          }
        }
        return event;
      }));
    }else{
      console.log(req)
      // this.facadeService.userLoggedOut();
      // this.router.navigateByUrl('core/login');
    }
    return next.handle(req);
  }
}
