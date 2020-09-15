import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivated-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServerResolver } from "./servers/server/server.resolver.service";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const myRoutes: Routes = [
    { path: '', component: HomeComponent,},
  
    { path: 'users', component:  UsersComponent, children: [
      { path: ':id/:name', component: UserComponent,}
    ]}, // localhost:4200/users
    
    { path: 'servers', 
      // canActivate: [AuthGuardService] 
      canActivateChild: [AuthGuardService],
      component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} }
    ] },
  
    // { path: 'not-found', component: PageNotFoundComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {msg: "Page not found!"} },

    { path: '**', redirectTo: '/not-found'},
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(myRoutes)        // RouterModule.forRoot(myRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}