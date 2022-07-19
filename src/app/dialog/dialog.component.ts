import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  FreshnessList: string[] = ["Brand New", "Second Hand", "Refurbished"];
  productForm !: FormGroup;
  actionBtn: string = "Save";

  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) { }

  ngOnInit(): void {
    this.productForm = this._formBuilder.group({
      productName: ["", Validators.required],
      category: ["", Validators.required],
      freshness: ["", Validators.required],
      price: ["", Validators.required],
      comment: [""],
      date: ["", Validators.required]
    });

    // Set the values
    if (this.editData) {
      this.actionBtn = "Update";

      this.productForm.controls["productName"].setValue(this.editData.productName);
      this.productForm.controls["category"].setValue(this.editData.category);
      this.productForm.controls["freshness"].setValue(this.editData.freshness);
      this.productForm.controls["price"].setValue(this.editData.price);
      this.productForm.controls["comment"].setValue(this.editData.comment);
      this.productForm.controls["date"].setValue(this.editData.date);
    }
  }

  addProduct() {
    if (!this.editData) {
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
    } else {
      this.updateProduct();
    }
  }

  updateProduct() {
    this._apiService.putProduct(this.productForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert("Product Updated Successfully!");
        this.productForm.reset();
        this._dialogRef.close('update');
      },
      error: (res) => {
        alert("Error while updating!");
      }
    });
  }

}
