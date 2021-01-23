import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanoTarjetaComponent } from './villano-tarjeta.component';

describe('VillanoTarjetaComponent', () => {
  let component: VillanoTarjetaComponent;
  let fixture: ComponentFixture<VillanoTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillanoTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillanoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
