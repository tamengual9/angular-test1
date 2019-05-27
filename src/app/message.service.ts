import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //se veu que no fa falta per emprar els missatges aqui...
  // constructor() { }

  //property: array of strings
  messages: string[] = [];
 
  //method: add message
  add(message: string) {
    this.messages.push(message);
  }
 
  //method: clear messages
  clear() {
    this.messages = [];
  }
}
