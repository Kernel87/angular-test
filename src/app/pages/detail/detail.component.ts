import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BrandsService } from 'src/app/core/services/brands.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private modelSubscription: Subscription;
  private typesAndModels: Subscription;
  types: any[] = [];
  models: any[] = [];
  isLoading: boolean = false;
  brandId: number = 0;
  title: string = 'Types and Models available !';
  typeTitle: string = 'Types';
  modelTitle: string = 'Models';

  constructor(private readonly _brandService: BrandsService) { }

  ngOnInit(): void {
    this.subscription = this._brandService.data.subscribe((data: any) => {
      if (data) {
        this.brandId = data;
      }
    });
    this.getDetailOfVehicles(this.brandId);
    this.getModels(this.brandId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  getDetailOfVehicles(brandId: number) {
    this.isLoading = true;
    this._brandService.getTypesAndModels(brandId).subscribe((data: any) => {
      if (data) {
        this.types = data?.Results;
        this.isLoading = false;
      }
    });
  }

  getModels(brandId: number) {
    this.modelSubscription = this._brandService.getModels(brandId).subscribe((data: any) => {
      if (data) {
        this.models = data?.Results;
      }
    });
  }

}
