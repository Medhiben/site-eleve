import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConnexionDirectorComponent } from './page-connexion-director.component';

describe('PageConnexionDirectorComponent', () => {
  let component: PageConnexionDirectorComponent;
  let fixture: ComponentFixture<PageConnexionDirectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageConnexionDirectorComponent]
    });
    fixture = TestBed.createComponent(PageConnexionDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
