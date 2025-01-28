import { Injectable } from "@angular/core";
import { UserDescription } from "../user-description";
import { Observable, delay, of } from "rxjs";
import { map } from "rxjs/operators";
import { MOCK_USERS } from "./mock-users";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  getUserList(searchTerm: string | null): Observable<UserDescription[]> {
    return of(MOCK_USERS).pipe(
        delay(1000),
        map((users) => {
          if (!searchTerm) {
            return users;
          }
          return users.filter((user) =>
              `${user.name} ${user.lastName}`
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
          );
        })
    );
  }

  getUserById(id: number): Observable<UserDescription | undefined> {
    const user = MOCK_USERS.find((userId: UserDescription) => userId.id === id);
    return of(user).pipe(delay(1000));
  }
}
