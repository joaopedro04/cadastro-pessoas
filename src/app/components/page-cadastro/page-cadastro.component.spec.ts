import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCadastroComponent } from './page-cadastro.component';

describe('PageCadastroComponent', () => {
  let component: PageCadastroComponent;
  let fixture: ComponentFixture<PageCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
