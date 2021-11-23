import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasProdutoComponent } from './alertas-produto.component';

describe('AlertasProdutoComponent', () => {
  let component: AlertasProdutoComponent;
  let fixture: ComponentFixture<AlertasProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertasProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
