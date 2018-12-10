import * as request from "request";
import { User } from "./User";

export class GithubApiService {
  getuserInfo(userName: string, callback: (user: User) => any) {
    let options: any = {
      headers: {
        "User-Agent": "request"
      },
      json: true
    };
    request.get(
      "https://api.github.com/users/" + userName,
      options,
      (error: any, response: any, body: any) => {
        //console.log(response);
        //console.log(error);
        //console.log(body);
        let user = new User(body);
        //console.log(user);
        callback(user);
      }
    );
  }

  getRepos() {}
}
