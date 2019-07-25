import{NG_VALIDATORS, Validator,AbstractControl,ValidationErrors}from '@angular/forms';
import{Directive} from '@angular/core';

@Directive({
    selector: '[apppassword]',
    providers: [{provide: NG_VALIDATORS, useExisting: passwordcheck, multi: true}]
  })

 export class passwordcheck implements Validator{
 validate(control:AbstractControl):ValidationErrors{
     const password=control.get("userpassword")
     const confirmpassword=control.get("userconfirmpassword")
     return password && confirmpassword && password.value != confirmpassword.value?{'passwordcheck':true}:null
 }
 } 