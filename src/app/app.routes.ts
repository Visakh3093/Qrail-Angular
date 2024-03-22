import { Routes } from '@angular/router';
import { IndexPageComponent } from './Pages/index-page/index-page.component';
import { LoggedindexComponent } from './Pages/loggedindex/loggedindex.component';
import { PagenotfoundComponent } from './Pages/pagenotfound/pagenotfound.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Pages/change-password/change-password.component';
import { CommonTemplateComponent } from './Pages/common-template/common-template.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { CreateNewPasswordComponent } from './Pages/create-new-password/create-new-password.component';
import { EditProfileComponent } from './Pages/edit-profile/edit-profile.component';
import { FaqsComponent } from './Pages/faqs/faqs.component';
import { FirstLastTrainComponent } from './Pages/first-last-train/first-last-train.component';
import { AboutMetroTramComponent } from './Pages/about-metro-tram/about-metro-tram.component';
import { LicensedRetailersComponent } from './Pages/licensed-retailers/licensed-retailers.component';
import { ManageCardsComponent } from './Pages/manage-cards/manage-cards.component';
import { MetroexpressComponent } from './Pages/metroexpress/metroexpress.component';
import { MetroLinkComponent } from './Pages/metro-link/metro-link.component';
import { NewsDetailsComponent } from './Pages/news-details/news-details.component';
import { NewsComponent } from './Pages/news/news.component';
import { PasswordSuccessComponent } from './components/password-success/password-success.component';
import { PromotionsComponent } from './Pages/promotions/promotions.component';
import { RetailAndFacilitiesComponent } from './Pages/retail-and-facilities/retail-and-facilities.component';
import { TermsAndConditionsComponent } from './Pages/terms-and-conditions/terms-and-conditions.component';
import { TopUpGuestUserComponent } from './Pages/top-up-guest-user/top-up-guest-user.component';
import { TopUpComponent } from './Pages/top-up/top-up.component';
import { TopupCardsComponent } from './Pages/topup-cards/topup-cards.component';


export const routes: Routes = [
    {
        path: '', component: IndexPageComponent, pathMatch: "full"
    },

    {
        path: "login", component: LoginComponent
    },
    {
        path: "register", component: RegisterComponent
    },
    {
        path: 'forgot-password', component: ForgotPasswordComponent
    },
    {
        path: "loggedindex", component: LoggedindexComponent
    },
    {
        path: "change-password", component: ChangePasswordComponent
    },
    {
        path: "common-template", component: CommonTemplateComponent
    },
    {
        path: "contact-us", component: ContactUsComponent
    },
    {
        path: "create-new-password", component: CreateNewPasswordComponent
    },
    {
        path: "edit-profile", component: EditProfileComponent
    },
    {
        path: "faqs", component: FaqsComponent
    },
    {
        path: "first-last-train", component: FirstLastTrainComponent
    },
    {
        path: "about-metro-tram", component: AboutMetroTramComponent
    },
    {
        path: "licensed-retailers", component: LicensedRetailersComponent
    },
    {
        path: "manage-cards", component: ManageCardsComponent
    },
    {
        path: "metro-express", component: MetroexpressComponent
    },
    {
        path: "metrolink", component: MetroLinkComponent
    },
    {
        path: "news-details", component: NewsDetailsComponent
    },
    {
        path: "news", component: NewsComponent
    },
    {
        path: "password-success", component: PasswordSuccessComponent
    },
    {
        path: "promotions", component: PromotionsComponent
    },
    {
        path: "retail-and-facilities", component: RetailAndFacilitiesComponent
    },
    {
        path: "terms-and-condition", component: TermsAndConditionsComponent
    },
    {
        path: "topup-guest", component: TopUpGuestUserComponent
    },
    {
        path: "top-up", component: TopUpComponent
    },
    {
        path:"topup-card", component:TopupCardsComponent
    },
    {
        path: "**", component: PagenotfoundComponent
    }
];
