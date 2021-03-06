// NgModule
import { NgModule } from '@angular/core';
//#region Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
//#endregion
//#region CDK imports
import { LayoutModule } from '@angular/cdk/layout';
//#endregion
import { DomSanitizer } from '@angular/platform-browser';
//#region Material modules required by the app
const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule
];
//#endregion
//#region CDK modules required by the app
const CDK_MODULES = [
  LayoutModule
];
//#endregion
@NgModule({
  exports: [
    MATERIAL_MODULES,
    CDK_MODULES
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ]
})
export class MaterialModule {
  constructor(private matIconRegistry: MatIconRegistry, private dom: DomSanitizer) {
    matIconRegistry.addSvgIconSet(dom.bypassSecurityTrustResourceUrl('assets/mdi.svg'))
      .addSvgIcon('website-logo', dom.bypassSecurityTrustResourceUrl('assets/website.svg'))
      .addSvgIcon('website-logo-full', dom.bypassSecurityTrustResourceUrl('assets/website-logo-full.svg'));
  }
}
