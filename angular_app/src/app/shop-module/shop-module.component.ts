import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface  PurchaseInfo {
  counterValue: number;
  phone: string;
  name: string;
  date: any;
  notes: string;
}
declare var $: any;

@Component({
  selector: 'app-shop-module',
  templateUrl: './shop-module.component.html',
  styleUrls: ['./shop-module.component.scss']
})
export class ShopModuleComponent {
  private displayService: any;
  public shopForm: FormGroup;
  url: string;
  @Output() counterChange = new EventEmitter();
  show = true;
  visibility = true;
  disabled = true;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.url = 'http://localhost:3000/data';
    this.shopForm = fb.group({
      counterValue: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      notes: ['', [Validators.required]]
    });
  }
  @Input() private counterValue: number;
  // get counter() {
  //   return this.counterValue;
  // }
  // set counter(val) {
  //   this.counterValue = val;
  //   this.counterChange.emit(this.counterValue);
  // }

  // decrement() {
  //   this.counter--;
  // }
  //
  // increment() {
  //   this.counter++;
  // }
send() {
    this.postData().subscribe();
}

  postData(): Observable<any> {
    console.log(this.shopForm.value);
    return this.http.post(this.url, this.shopForm.value, {responseType: 'text'});
  }
  showModal() {
    this.visibility = !this.visibility;
  }

  onSubmit(shopForm) {
    if (this.shopForm.value) {
      this.showModal();
    }
  }

  sendModal(): void {
    this.postData();
    this.hideModal();
  }

  hideModal(): void {
    $('#myModal').modal('hide');
  }

  closeModal() {
    this.visibility = !this.visibility;
  }
}
