import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() data: Array<any>
  @Output() delete: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.data && this.data.length != changes.data.currentValue.length) {
      this.data = (changes.data.currentValue) as Array<any>;
    }
  }

  ngOnInit(): void {
  }

  editAction(item: any) {
    item.nom = "Blop";
  }
  deleteAction(item: any) {
    this.delete.emit(item);
  }
}
