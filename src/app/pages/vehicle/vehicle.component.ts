import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BrandsService } from 'src/app/core/services/brands.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VehicleComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject();
  brands: any[] = [];
  isLoading: boolean = false;

  constructor(private readonly _brandsService: BrandsService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.isLoading = true;
    this._brandsService
      .getBrandsInfo()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: any) => {
        if (data) {
          this.brands = data?.Results;
          this.isLoading = false;
        }
      });
  }

  openDetail(value: any) {
    this._brandsService.updatedDataSelection(value?.MakeId);
  }
}
