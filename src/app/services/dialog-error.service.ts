import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DialogErrorService {
  public isDialogOpen: Boolean = false;
  constructor(private snackBar: MatSnackBar) { }
  openSnackBarSuccess(message: string) {
    this.snackBar.open(message, 'close', { duration: 2000, panelClass: 'successSnack' });
  }
  openSnackBarError(message: string) {
    this.snackBar.open(message, 'close', { duration: 2000, panelClass: 'successSnack' });
  }
}
