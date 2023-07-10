import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = 'default';
  @Input() classNames: string = '';
  @Input() filteredOptions: any;
  @Input() elements: any[] = [];
  @Output() sendDetail: EventEmitter<any> = new EventEmitter();
  searchControl = new FormControl('');

  constructor(
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  ngOnDestroy(): void {
    this.sendDetail.unsubscribe();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.elements.filter((element) =>
      element.MakeName.toLowerCase().includes(filterValue)
    );
  }

  openDetail(detail: any) {
    this.sendDetail.emit(detail.MakeId);
    this._router.navigate(['./detail']);
  }
}
