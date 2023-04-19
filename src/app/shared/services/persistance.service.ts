import { Injectable } from "@angular/core";

@Injectable()
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch(e) {
      console.error('Error saving to LocalStorage', e)
    }
  }

  get(key: string): any {
    try {
      const json = localStorage.getItem(key)
      if (json === null) {
        return null;
      }
      return JSON.parse(json)
    } catch(e) {
      console.error('Error getting data from LocalStorage', e)
      return null
    }
  }
}
