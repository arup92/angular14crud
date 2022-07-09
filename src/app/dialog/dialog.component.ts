import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  FreshnessList: string[] = ["Brand New", "Second Hand", "Refurbished"];

  productForm !: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _apiService: ApiService, private _dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this._formBuilder.group({
      productName: ["", Validators.required],
      category: ["", Validators.required],
      freshness: ["", Validators.required],
      price: ["", Validators.required],
      comment: ["", Validators.required],
      date: ["", Validators.required]
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      this._apiService.postProduct(this.productForm.value)
        .subscribe({
          next: (res) => {
            alert("Product Added!");
            this.productForm.reset();
            this._dialogRef.close();
          },
          error: () => {
            alert("Error while adding the product.");
          }
        });
    }
  }

}
