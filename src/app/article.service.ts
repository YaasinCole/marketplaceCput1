/*import { SignUpComponent } from './sign-up/sign-up.component';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
 
@Injectable()
export class ArticleService {
//URL for CRUD operations
    articleUrl = "http://localhost:3000/article";
    //Create constructor to get Http instance
    constructor(private http:Http) {
    }
    
    //Fetch all articles
getAllArticles(): Observable<SignUpComponent[]> {
return this.http.get(this.articleUrl+"/get-article")
              .map(this.extractData)
         .catch(this.handleError);
 
}
    //Create article
createArticle(SignUp: SignUpComponent):Observable<number> {
     let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: cpHeaders });
return this.http.post(this.articleUrl+"/create-article", SignUp, options)
.map(success => success.status)
.catch(this.handleError);
}
    //Fetch article by id
getArticleById(articleId: string): Observable<SignUpComponent> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.articleUrl +"/get-article-by-id?id="+ articleId);
        return this.http.get(this.articleUrl +"/get-article-by-id?id="+ articleId)
             .map(this.extractData)
             .catch(this.handleError);
}   
    //Update article
updateArticle(article: SignUpComponent):Observable<number> {
     let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
return this.http.put(this.articleUrl +"/update-article", article, options)
.map(success => success.status)
.catch(this.handleError);
}
//Delete article    
deleteArticleById(articleId: string): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.articleUrl +"/delete-article?id="+ articleId)
             .map(success => success.status)
             .catch(this.handleError);
}   
    private extractData(res: Response) {
        let body = res.json();
return body;
}
private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
}
}
*/