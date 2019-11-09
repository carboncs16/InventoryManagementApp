import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ProductInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        const userToken = sessionStorage.getItem('x-access-token');
        console.log(userToken);
        
        const modifiedReq = req.clone({
            headers: req.headers.set('x-access-token', `${userToken}`),
        });
        return next.handle(modifiedReq);
    }
}