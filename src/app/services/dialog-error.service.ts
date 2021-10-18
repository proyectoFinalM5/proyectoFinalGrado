import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DialogErrorService {
  private config: MatSnackBarConfig = {
    direction: 'ltr',
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  }
  constructor(private snackBar: MatSnackBar) { }
  openSnackBarSuccess(message: string) {
    this.snackBar.open(message, 'close', { ...this.config, panelClass: 'success-snackbar' });
  }
  openSnackBarError(message: string) {
    this.snackBar.open(message, 'close', { ...this.config, panelClass: 'error-snackbar' });
  }
}
