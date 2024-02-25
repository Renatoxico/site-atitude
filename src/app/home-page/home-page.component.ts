import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [
    './home-page.component.css'    
]
})
export class HomePageComponent implements OnInit {

  whatsAppLink = 'https://wa.me/5589994463774/?text=';

  //@Input() 
  message! : string;
  
  //@Input() 
  nome! : string;
  
  //@Input() 
  email! : string;

  url_message : string = '';
  encodedMessage : string = '';

  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor() { }

  ngOnInit() {
    this.nome = '';
    this.email = '';  
    this.message = '';
  }

  teste() {
    this.url_message = '';
    this.validateData();
    this.buildUrlMessage();
    console.log('encoded message ' + this.encodedMessage);
    this.enviarMensagem();
  }

  enviarMensagem() {
    this.whatsAppLink = this.whatsAppLink+this.encodedMessage; 
    window.open(this.whatsAppLink, '_blank');
    console.log(this.whatsAppLink);
  }
  
  validateData(){
    this.nome = this.nome.trim();

    this.email = this.email.trim();  

    this.message = this.message.trim();
    if( this.message.length < 1) {
      console.log('Mensagem não pode ser vazia');
      this.message = 'Óla gostaria de saber mais sobre o seu trabalho, poderia me enviar mais informações?';
    }
  }

  buildUrlMessage(){
    if( this.nome.length > 1 ){
      this.url_message  = this.url_message + `Nome: ${this.nome}\n`;
    }

    if( this.email.length > 1 ){
      this.url_message  = this.url_message + `Email: ${this.email}\n`;
    }

    this.url_message  = this.url_message + `${this.message}`;
    this.encodedMessage = encodeURIComponent(this.url_message);
  }

}
