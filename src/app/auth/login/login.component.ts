import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {}

  loginForm: FormGroup = this._fb.group({
    user: ['', [Validators.required]],
  });


  guardarUsuario() {
    sessionStorage.setItem('activeUser', this.loginForm.value.user);
  }

}
