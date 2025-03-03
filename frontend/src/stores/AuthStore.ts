import { makeAutoObservable } from "mobx";
import { User } from "../types";
import { login } from "../services";

class AuthStore {
  currentUser?: User;
  accessToken?: string;
  refreshToken?: string;

  constructor() {
    makeAutoObservable(this);
  }

  load() {
    // loading tokens from local storage / cookies / smth
  }

  save() {
    // saving tokens into local storage / cookies smth
  }

  async login(username: string, password: string) {
    const { access, refresh } = await login(username, password);
    this.accessToken = access;
    this.refreshToken = refresh;
  }

  async register(username: string, password: string, email: string) {}

  async logout() {}
}

export default new AuthStore();
