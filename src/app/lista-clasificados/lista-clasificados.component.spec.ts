import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClasificadosComponent } from './lista-clasificados.component';

describe('ListaClasificadosComponent', () => {
  let component: ListaClasificadosComponent;
  let fixture: ComponentFixture<ListaClasificadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaClasificadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClasificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
