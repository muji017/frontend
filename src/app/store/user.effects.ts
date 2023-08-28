import { AuthService } from "src/app/services/auth.service";
// import { loginFail, loginStart, loginSuccess, signup, signupSuccess } from "./auth.action";
import { catchError, exhaustMap, map, of, switchMap, tap } from "rxjs";
// import { AuthUser, Error } from "src/app/store/user.state";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Actions, act, createEffect, ofType } from "@ngrx/effects";
import { deleteUser, getAllUserApi, getAllUserApiSuccess, getUserApi, getUserApiSuccess } from "./user.action";

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

  getAllUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllUserApi),
      exhaustMap(() => {
        return this.service.getAllUsers().pipe(
          map((data) => {
            console.log("effect",Object.values(data))
            return getAllUserApiSuccess({userdetails:Object.values(data)}); // Dispatch the action with userdetails
          })
        );
      })
    );
  });

  signupredirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteUser),
      map((action) => {
        console.log(action.userId)
        this.service.deleteUser(action.userId).subscribe(() => {
          
        });
      })
      );
  },
    { dispatch: false }
  )


}