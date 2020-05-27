import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserGroup {
  groupName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  userGrp: UserGroup[];
  currentUserGroup:string;

  setUserGroup(grp:string){
     this.currentUserGroup = grp;
  }

  getUserGroup(){
    return this.currentUserGroup;
  }

  getUserGroupA(): Observable<UserGroup> {
    return new Observable<UserGroup>(o => o.next({ groupName: "A" }));
  }
  getUserGroupB(): Observable<UserGroup[]> {
    return new Observable<UserGroup[]>(o => o.next([ { groupName: "B" }]));
  }
  getUserGroupC(): Observable<UserGroup[]> {
    return new Observable<UserGroup[]>(o => o.next([{ groupName: "C" }]));
  }
  getAdmin(): Observable<UserGroup[]> {
    return new Observable<UserGroup[]>(o => o.next([{ groupName: "admin" }]));
  }
  getUserGroups(): Observable<UserGroup[]> {
    return new Observable<UserGroup[]>(o => o.next([{ groupName: "A" }, { groupName: "B" },
    { groupName: "C" }, { groupName: "admin" }]));
  }
};
