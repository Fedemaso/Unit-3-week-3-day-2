import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'utenti_registrati';

  constructor() {}

  registerUser(userData: any): void {
    const existingData = this.getRegisteredUsers() || [];
    existingData.push(userData);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existingData));
  }

  private getRegisteredUsers(): any[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
  login(username: string, password: string): boolean {
    console.log('Username:', username);
    console.log('Password:', password);

    const users = this.getRegisteredUsers();
    console.log('Users:', users);

    const user = users.find((user: any) => user.username === username && user.password === password);
    console.log('User:', user);

    return !!user;
  }


}
