import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  //generamors una metodo para mostrar una alerta
  showAlert(message: string){
    alert(message)
  }

}
