import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from "@angular/core";
import { UsersService } from "../service/users-service";
import { Router } from "@angular/router";
import { UserDescription } from "../user-description";
import { CommonModule } from "@angular/common";
import { Observable, ReplaySubject } from "rxjs";
import { switchMap, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnDestroy {
  @Input() set userId(userId: string) {
    this.userId$.next(+userId);
  }
  private readonly userId$ = new ReplaySubject<number>(1);

  userDetails$ = this.userId$.pipe(
      switchMap((userId) => this.usersService.getUserById(userId)),
      shareReplay(1)
  );

  constructor(private router: Router, private usersService: UsersService) {}

  goBack() {
    this.router.navigate([""]);
  }

  ngOnDestroy() {
    this.userId$.complete();
  }
}
