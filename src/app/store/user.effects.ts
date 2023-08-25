import { AuthService } from "src/app/services/auth.service";
// import { loginFail, loginStart, loginSuccess, signup, signupSuccess } from "./auth.action";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
// import { AuthUser, Error } from "src/app/store/user.state";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getUserApi, getUserApiSuccess } from "./user.action";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private service: AuthService,
    private router: Router
  ) { }
  
  getUser$ = createEffect(() => {
    console.log("inside effect");
    return this.actions$.pipe(
      ofType(getUserApi),
      exhaustMap((action) => {
        console.log("Inside get user Effect",action.userId)
        return this.service.getUserDetails(action.userId).pipe(
          map((User) => {
            console.log(User)
            return getUserApiSuccess({ User});
          })
        );
      })
    )
  })

}