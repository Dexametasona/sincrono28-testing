import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

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

  it('formulario vacio',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.form.valid).toBe(false)
  });

  it('formulario validado',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    let user=app.form.controls['user'];
    let pass=app.form.controls['pass'];
    user.setValue('olluco')
    pass.setValue('lenteja')
    expect(app.form.valid).toBe(true)
  })

  it(' mensaje del formulario',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    let user=app.form.controls['user'];
    let pass=app.form.controls['pass'];
    user.setValue('olluco')
    pass.setValue('lenteja')

    let boton=fixture.debugElement.query(By.css('#boton'))
    boton.nativeElement.click()

    expect(app.mensaje).toEqual('Formulario enviado')
  });


});
