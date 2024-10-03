import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCadastroComponent } from './home-cadastro.component';

describe('HomeCadastroComponent', () => {
  let component: HomeCadastroComponent;
  let fixture: ComponentFixture<HomeCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
