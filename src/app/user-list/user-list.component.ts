import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersService } from "../service/users-service";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormControl } from "@angular/forms";
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
} from "rxjs";

@Component({
  selector: "app-user-list",
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  readonly searchControl = new FormControl<string>("");

  readonly userList$ = this.searchControl.valueChanges.pipe(
      startWith(""),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm) => this.usersService.getUserList(searchTerm))
  );

  constructor(private readonly usersService: UsersService) {}
}
