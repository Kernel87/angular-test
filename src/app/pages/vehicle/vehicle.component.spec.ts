import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleComponent } from './vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandsService } from 'src/app/core/services/brands.service';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleComponent],
      imports: [HttpClientModule],
      providers: [BrandsService],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test_calls_get_brands_function', () => {
    spyOn(component, 'getBrands');
    component.ngOnInit();
    expect(component.getBrands).toHaveBeenCalled();
  });
});
