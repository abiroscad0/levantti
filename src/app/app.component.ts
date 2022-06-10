import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  primaryCards = [
    {icon: './assets/img/icon/cash-multiple.png', title: 'Empréstimo no Cartão de Crédito', description: 'Use o limite do seu cartão de crédito e receba o dinheiro na mesma hora em sua conta bancária.'},
    {icon: './assets/img/icon/cash-multiple.png', title: 'Empréstimo Consignado', description: 'Use o limite do seu cartão de crédito e receba o dinheiro na mesma hora em sua conta bancária.'},
    {icon: './assets/img/icon/cash-multiple.png', title: 'Empréstimo Pessoal', description: 'O empréstimo pessoal é perfeito para você que quer realizar aquele sonho de viajar, comprar um veículo ou sair do aperto.'},
    {icon: './assets/img/icon/cash-multiple.png', title: 'Dinheiro na hora!', description: 'Assim que aprovado, o dinheiro já cai na sua conta!'},
    {icon: './assets/img/icon/cash-multiple.png', title: 'Dinheiro na hora!', description: 'Assim que aprovado, o dinheiro já cai na sua conta!'},
    {icon: './assets/img/icon/cash-multiple.png', title: 'Dinheiro na hora!', description: 'Assim que aprovado, o dinheiro já cai na sua conta!'}
  ]

}
