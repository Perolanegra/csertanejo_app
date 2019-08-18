import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppController } from './appController';
import { map, catchError } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private appController: AppController, private loadingController: LoadingController) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dialogAguarde = this.appController.abrirAguardeInterceptor();
        const token: string = ''; // implementar getAcessToken

        if(token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if(!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if(event instanceof HttpResponse) {
                    console.log('Interceptor diz é HttpResponse: ', event);
                    this.loadingController.dismiss('interceptor');
                }
                
                return event;
            }),
            catchError((err: HttpErrorResponse) => {
                
                const data = {
                    reason: err && err.error.reason ? err.error.reason : '',
                    status: err.status
                };

                console.log('Interceptor diz: Requisição em Exception');
                this.appController.tratarErro(err);
                this.loadingController.dismiss('interceptor');
                return throwError(err);
            })
        );
    }

}