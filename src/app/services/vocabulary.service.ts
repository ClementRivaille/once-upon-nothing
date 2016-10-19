import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ipcRenderer } from 'electron';

/**
 * Load json sources and cache them
 */
@Injectable()
export class VocabularyService {

  private defaultResourcesPath: string = 'resources/vocabulary.json';
  private resourcesPath: string = 'resources/vocabulary.json';
  private resourcesCache: any;
  private wordTypes: Array<string> = ['subjects', 'verbs', 'objects', 'adverbs', 'adjectives', 'details', 'slangs', 'conjunctions'];
  private ready: Promise<any>;

  constructor(private http: Http) {
    // Vocabulary need a promise to be ready when it has the correct resources path
    let defer;
    this.ready = new Promise<any>((resolve, reject) => {
      defer = {
        resolve: resolve,
        reject: reject
      };
    });
    // local app behavior
    if (typeof ipcRenderer != 'undefined') {
      // Ask for a local file path
      ipcRenderer.send('vocabulary-path');

      ipcRenderer.on('vocabulary-path', (event, data) => {
        this.resourcesPath = data;
        defer.resolve();
      });
    }
    else {
      defer.resolve();
    }
  }


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

  saveVocabulary(): Promise<any> {
    if (typeof ipcRenderer != 'undefined') {
      // Send a message to electron to save the file locally
      ipcRenderer.send('save-vocabulary', this.resourcesCache);

      // Wait for response
      let savedPromise : Promise<any> = new Promise<any>((resolve) => {
        ipcRenderer.on('vocabulary-saved', () => {
          resolve();
        });
      });

      return savedPromise;
    }
    else {
      return Promise.reject(new Error('Cannot save when running on web'));
    }
  }

  /**
   * Load from JSON file
   */
  private loadResources(): Promise<any> {
    return this.ready.then(() => {
      return this.http.get(this.resourcesPath).toPromise();
      }).then(res => {
        let data = res.json();
        this.resourcesCache = data;
        return this.resourcesCache;
      }).catch(error => {
        console.log(error);
        if (this.resourcesPath !== this.defaultResourcesPath) {
          // Initialize resources
          return this.http.get(this.defaultResourcesPath).toPromise()
            .then(res => {
              let data = res.json();
              this.resourcesCache = data;

              // write resources
              this.saveVocabulary();

              return this.resourcesCache;
            })
            .catch(this.handleError);
        }
        else this.handleError(error);
      });
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

}