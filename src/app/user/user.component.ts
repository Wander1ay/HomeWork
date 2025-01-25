import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {UsersService} from "../service/users-service";
import { Router } from '@angular/router';
import { UserDescription } from '../user-description';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  user$!: Observable<UserDescription | undefined>;

  @Input() set id(id: string) {
    this.user$ = this.usersService.getUserById(+id);
  }

  constructor(private router: Router, private usersService: UsersService) {}

  goBack() {
    this.router.navigate(['']);
  }
}
