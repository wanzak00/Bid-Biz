import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'my-address',
    loadChildren: () => import('./my-address/my-address.module').then( m => m.MyAddressPageModule)
  },
  {
    path: 'my-wallet',
    loadChildren: () => import('./my-wallet/my-wallet.module').then( m => m.MyWalletPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'dummy',
    loadChildren: () => import('./dummy/dummy.module').then( m => m.DummyPageModule)
  },
  {
    path: 'admin-profile',
    loadChildren: () => import('./admin-profile/admin-profile.module').then( m => m.AdminProfilePageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'profiles',
    loadChildren: () => import('./profiles/profiles.module').then( m => m.ProfilesPageModule)
  },
  {
    path: 'manage-profile',
    loadChildren: () => import('./manage-profile/manage-profile.module').then( m => m.ManageProfilePageModule)
  },
  {
    path: 'manage-reports',
    loadChildren: () => import('./manage-reports/manage-reports.module').then( m => m.ManageReportsPageModule)
  },
  {
    path: 'manage-feedback',
    loadChildren: () => import('./manage-feedback/manage-feedback.module').then( m => m.ManageFeedbackPageModule)
  },
  {
    path: 'view-reports',
    loadChildren: () => import('./view-reports/view-reports.module').then( m => m.ViewReportsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'view-history',
    loadChildren: () => import('./view-history/view-history.module').then( m => m.ViewHistoryPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pay/pay.module').then( m => m.PayPageModule)
  },
  {
    path: 'top-up',
    loadChildren: () => import('./top-up/top-up.module').then( m => m.TopUpPageModule)
  },
  {
    path: 'top-up-success',
    loadChildren: () => import('./top-up-success/top-up-success.module').then( m => m.TopUpSuccessPageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'withdraw-success',
    loadChildren: () => import('./withdraw-success/withdraw-success.module').then( m => m.WithdrawSuccessPageModule)
  },
  {
    path: 'withdraw-unsuccess',
    loadChildren: () => import('./withdraw-unsuccess/withdraw-unsuccess.module').then( m => m.WithdrawUnsuccessPageModule)
  },
  {
    path: 'top-up-unsuccess',
    loadChildren: () => import('./top-up-unsuccess/top-up-unsuccess.module').then( m => m.TopUpUnsuccessPageModule)
  },
  {
    path: 'dummy-buyer',
    loadChildren: () => import('./dummy-buyer/dummy-buyer.module').then( m => m.DummyBuyerPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'post-dummy1',
    loadChildren: () => import('./post-dummy1/post-dummy1.module').then( m => m.PostDummy1PageModule)
  },
  {
    path: 'post-dummy2',
    loadChildren: () => import('./post-dummy2/post-dummy2.module').then( m => m.PostDummy2PageModule)
  },
  {
    path: 'post-dummy3',
    loadChildren: () => import('./post-dummy3/post-dummy3.module').then( m => m.PostDummy3PageModule)
  },
  {
    path: 'new-post',
    loadChildren: () => import('./new-post/new-post.module').then( m => m.NewPostPageModule)
  },
  {
    path: 'edit-address',
    loadChildren: () => import('./edit-address/edit-address.module').then( m => m.EditAddressPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'page-rate',
    loadChildren: () => import('./page-rate/page-rate.module').then( m => m.PageRatePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'feedback-dummy',
    loadChildren: () => import('./feedback-dummy/feedback-dummy.module').then( m => m.FeedbackDummyPageModule)
  },
  {
    path: 'report-dummy',
    loadChildren: () => import('./report-dummy/report-dummy.module').then( m => m.ReportDummyPageModule)
  },
  {
    path: 'give-feedback',
    loadChildren: () => import('./give-feedback/give-feedback.module').then( m => m.GiveFeedbackPageModule)
  },
  {
    path: 'feedback-submitted',
    loadChildren: () => import('./feedback-submitted/feedback-submitted.module').then( m => m.FeedbackSubmittedPageModule)
  },
  {
    path: 'seller-profile',
    loadChildren: () => import('./seller-profile/seller-profile.module').then( m => m.SellerProfilePageModule)
  },
  {
    path: 'manage-post',
    loadChildren: () => import('./manage-post/manage-post.module').then( m => m.ManagePostPageModule)
  },
  {
    path: 'post-manage-dummy',
    loadChildren: () => import('./post-manage-dummy/post-manage-dummy.module').then( m => m.PostManageDummyPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
