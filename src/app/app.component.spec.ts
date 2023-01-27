import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'formulario para test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Formulario para test');
  });

  it(`formulario inicia vacio`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    let user=(<HTMLInputElement>document.getElementById('user'));
    let pass=(<HTMLInputElement>document.getElementById('user'));

    
    expect(user.value).toEqual('')
    expect(pass.value).toEqual('')
  });
});
