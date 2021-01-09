import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder , Validators, FormArray  } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  partnerForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.partnerForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.noWhitespaceValidator]),
      address: new FormControl(null, [Validators.required, this.noWhitespaceValidator]),
      phone: new FormControl(null, [Validators.required, this.noWhitespaceValidator]),
      email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), this.noWhitespaceValidator]),
      taxNo: new FormControl(null, [Validators.required, this.noWhitespaceValidator, Validators.pattern("[0-9 ]*$")])
     
    });
   }

  ngOnInit(): void {

  }

  clicksub(){

    var x = this.partnerForm.value
    console.log(x)
  }

  public noWhitespaceValidator(control: FormControl) {
    var isWhitespace = (control.value || '').trim().length === 0;
    var isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}




}
