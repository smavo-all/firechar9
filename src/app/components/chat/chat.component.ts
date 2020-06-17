import { Component, OnInit } from '@angular/core';

import {ChatService}  from '../../providers/chat.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  mensaje: string = '';

  constructor( public _cs: ChatService) {
    this._cs.cargarMensajes()
            .subscribe( (mensaje:any[]) =>{
              console.log(mensaje);
            });
  }

  ngOnInit(): void {
    
  }

  enviar_mensaje() {
    console.log(this.mensaje);
  }
}
