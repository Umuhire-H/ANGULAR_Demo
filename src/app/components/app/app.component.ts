import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * Attribut de la class AppComponent
   */
  title = 'Demo';
  items = [];

  ngOnInit(): void {
    this.items.push({nom: "Flavian"}, {nom: "Honorine"}, {nom: "Zaineb"});
  }

  sayHello(e: MouseEvent): void {
    console.table(e);
    console.log("Hello");
  }

  executeDelete(item: any) {
    const index = this.items.findIndex(i => item.nom == i.nom);
    this.items = this.items.splice(index);
  }
}
