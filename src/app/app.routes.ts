import { Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { UserListComponent } from "./user-list/user-list.component";

export const routes: Routes = [
  { path: "", component: UserListComponent, title: "Список персонажей" },
  { path: "user/:userId", component: UserComponent, title: "Id персонажа" },
];
