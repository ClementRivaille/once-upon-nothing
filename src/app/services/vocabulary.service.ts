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
  private wordTypes: Array<string> = ['subjects', 'verbs', 'objects', 'adverbs', 'adjectives', 'details', 'slangs', 'conjunctions'];

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
   * Check if vocabulary has every needed words
   * Must be called after a first getVocabulary
   */
  validData(): boolean {
    var valid = true;
    for (let typeWord of this.wordTypes) {
      valid = this.resourcesCache && this.resourcesCache[typeWord] && this.resourcesCache[typeWord].length;
      if (!valid) {
        break;
      }
    }

    return valid;
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