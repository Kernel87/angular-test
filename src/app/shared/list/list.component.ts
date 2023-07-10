import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() classNames: string = 'list';
  @Input() brand: any;
  @Output() sendData: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sendData.unsubscribe();
  }

  sendId() {
    this.sendData.emit(this.brand);
  }

}
