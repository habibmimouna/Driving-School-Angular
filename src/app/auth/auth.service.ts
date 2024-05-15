import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { MonitorService } from '../services/monitor.service';
import { Monitor } from '../models/monitor';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  secret: string = 'secret';

  constructor(
    private userService: UserService,
    private router: Router,
    private moniteurService: MonitorService
  ) {}
  generateToken(payload: any, secretKey: string, expiresIn: string): string {
    const header = {
      alg: 'HS256',
      typ: 'JWT',
    };

    const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = this.base64UrlEncode(
      JSON.stringify({ ...payload, exp: this.getExpiration(expiresIn) })
    );
    const signature = this.createSignature(
      encodedHeader,
      encodedPayload,
      secretKey
    );

    return `${encodedHeader}.${encodedPayload}.${signature}`;
  }

  private getExpiration(expiresIn: string): number {
    return Math.floor(Date.now() / 1000) + parseInt(expiresIn, 10);
  }
  private base64UrlEncode(input: string): string {
    return btoa(input)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  }
  private async createSignature(
    header: string,
    payload: string,
    secretKey: string
  ): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(header + '.' + payload);

    const keyBuffer = encoder.encode(secretKey).buffer;

    const importedKey = await crypto.subtle.importKey(
      'raw',
      keyBuffer,
      { name: 'HMAC', hash: { name: 'SHA-256' } },
      false,
      ['sign']
    );

    const signature = await crypto.subtle.sign('HMAC', importedKey, data);

    const signatureString = Array.from(new Uint8Array(signature))
      .map((byte) => String.fromCharCode(byte))
      .join('');

    return this.base64UrlEncode(signatureString);
  }

  login(email: string, password: string): void {
    this.userService.getUsersList().subscribe((usersList: User[]) => {
      for (let user of usersList) {
        console.log(user.email, user.password);

        if (email === 'admin@gmail.com' && password === 'admin') {
          const token = this.generateToken(
            { userId: '1', username: 'admin@gmail.com' },
            this.secret,
            '1h'
          );
          let admin={email:"admin@gmail.com",password:"admin"}
          console.log('admin token:', token);
          localStorage.setItem('token', token);
          localStorage.setItem('currentUser', JSON.stringify(admin));

          this.router.navigate(['/admin-dashboard']);
        } else if (user.email === email && user.password === password) {
          const token = this.generateToken(
            { userId: '123', username: 'example' },
            this.secret,
            '1h'
          );
          console.log('Generated token:', token);
          localStorage.setItem('token', token);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['/candidat-sessions']);
          return;
        }
        this.moniteurService
          .getMonitorsList()
          .subscribe((monitorsList: Monitor[]) => {
            for (let user of monitorsList) {
              console.log(user.email, user.password);

              if (user.email === email && user.password === password) {
                const token = this.generateToken(
                  { userId: '1', username: 'admin@gmail.com' },
                  this.secret,
                  '1h'
                );
                console.log('Monitor token:', token);
                localStorage.setItem('token', token);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.router.navigate(['/moniteur-sessions']);
                return;
              }
            }
          });
      }
      
      console.log('Invalid email or password');
    });
    
  }
}
