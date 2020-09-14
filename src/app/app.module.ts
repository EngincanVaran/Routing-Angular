import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';

const myRoutes: Routes = [
  { path: 'users', component:  UsersComponent, children: [
    { path: ':id/:name', component: UserComponent,}
  ]}, // localhost:4200/users
  
  { path: '', component: HomeComponent,},
  
  { path: 'servers',component: ServersComponent, children: [
    { path: ':id/edit', component: EditServerComponent,},
    { path: ':id', component: ServerComponent,}
  ] },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
