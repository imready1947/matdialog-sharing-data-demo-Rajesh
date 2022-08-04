import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="saveTemplateForm" (ngSubmit)="submit(saveTemplateForm)">
      <h1 mat-dialog-title>Save Template</h1>
      <mat-dialog-content>
        <mat-form-field>
          <input matInput formControlName="templateName" placeholder="Enter template name">
        </mat-form-field>
        

  <mat-form-field>
      <mat-select
        name="countryString"
        formControlName="selectedTemplate"
        placeholder="Country"
      >
        <mat-option [value]="'wellTemplate'">Well Template</mat-option>
        <mat-option [value]="'myTemplate'">My Template</mat-option>
      </mat-select>
    </mat-form-field>
      </mat-dialog-content>
      <mat-dialog-actions>
        <button mat-button type="submit">Add</button>
        <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
      </mat-dialog-actions>
    </form>
    <div>{{saveTemplateForm.value | json}}
  `,
})
export class FileNameDialogComponent implements OnInit {
  saveTemplateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FileNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngOnInit() {
    this.saveTemplateForm = this.formBuilder.group({
      templateName: this.data.filename ? this.data.filename : '',
      selectedTemplate: this.data.selectedTemplate
        ? this.data.selectedTemplate
        : '',
    });
    console.log('form data ----', this.data);
  }

  submit(form) {
    this.dialogRef.close(
      `${form.value.templateName}` + `${form.value.selectedTemplate}`
    );

    console.log(
      'form data',
      `${form.value.templateName}` + '  ' + `${form.value.selectedTemplate}`
    );
    console.log('form data ----', form.value);
  }
}
