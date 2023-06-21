import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService, TokenDate } from '../auth-service/auth.service';
import { catchError, map, of } from 'rxjs';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const validation = authService.validateTokenServerSide()

  return validation.pipe(
    map((tokenDate: TokenDate) => {
      // Check if token is valid or expired
      if (tokenDate.token) {
        return true; // Allow access to the route
      } else {
        router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false; // Redirect to login page
      }
    }),
    catchError((error) => {
      console.error('Token validation error:', error);
      router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return of(false); // Redirect to login page on error
    })
  );
};
