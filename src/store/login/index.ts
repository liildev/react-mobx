import { IRootStore } from "..";
import { login, fetchUsers } from "../api";
import { action, computed, observable, makeObservable } from "mobx";
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from "../../libs";

const token = getLocalStorage("token") ? getLocalStorage("token") : null;
const user = getLocalStorage("user") ? getLocalStorage("user") : null;


export class LoginStore {
  rootStore: IRootStore;
  @observable
  userDetails: IUserDetail | null = user;
  @observable
  token: string | null = token;
  @observable
  loading: boolean = false;

  constructor(rootStore: IRootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  signOut() {
    this.token = null;
    this.userDetails = null;
    removeLocalStorage("user");
    removeLocalStorage("token");
  }

  @action
  async signIn(body: IBody) {
    this.loading = true;

    const { token } = await login(body);
    const users = await fetchUsers();
    const user = users.find((user) => user.username === body.username);

    if (user && token) {
      this.token = token;
      this.loading = false;
      this.userDetails = user;
      setLocalStorage("token", token);
      setLocalStorage("user", user);
    }
  }

  @computed
  get getToken() {
    return this.token;
  }

  @computed
  get getUserDetails() {
    return this.userDetails;
  }
}
