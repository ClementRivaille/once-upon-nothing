import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/**
 * Load json sources and cache them
 */
@Injectable()
export class VocabularyService {

  private resourcesPath: string = 'resources/vocabulary.json';
  private resourcesCache: any;

  constructor(private http: Http) {}


  /**
   * Retrieve resources in json file or cached
   */
  getVocabulary(): Promise<any> {
    if (!this.resourcesCache) {
      return this.loadResources();
    }
    else {
      return Promise.resolve(this.resourcesCache);
    }
  }

  /**
   * Load from JSON file
   */
  private loadResources(): Promise<any> {
    return this.http.get('resources/vocabulary.json').toPromise()
      .then(res => {
        let data = res.json();
        this.resourcesCache = data;
        return this.resourcesCache;
      }).catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}