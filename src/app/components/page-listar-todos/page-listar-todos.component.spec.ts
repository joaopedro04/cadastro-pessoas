import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListarTodosComponent } from './page-listar-todos.component';

describe('PageListarTodosComponent', () => {
  let component: PageListarTodosComponent;
  let fixture: ComponentFixture<PageListarTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListarTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListarTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
