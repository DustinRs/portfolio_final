import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SuccessMailComponent } from './success-mail/success-mail.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent},
    { path: 'impressum', component: ImpressumComponent},
    { path:'privacyPolicy', component: PrivacyPolicyComponent},
    { path:'successMail', component: SuccessMailComponent}
];
