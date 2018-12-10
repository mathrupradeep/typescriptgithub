import { GithubApiService } from "./GithubApiService";
import { User } from "./User";

let srv = new GithubApiService();
srv.getuserInfo("koushikkothagal", (user: User) => {
  console.log(user);
});
