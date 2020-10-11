export function User(userName, password, firstName, lastName, email) {
  this.userName = userName;
  this.password = password;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.savedNews = new Set();

  this.fullName = function() {
    return this.firstName + " " +  this.lastName;
  }

  this.addSavedNews = function(newsId) {
    this.savedNews.add(newsId);
  }

  this.removeSavedNews = function(newsId) {
    if (this.savedNews.has(newsId)) {
      this.savedNews.delete(newsId);
    }
  }
}

export function UserCollection() {
  this.users = new Map();

  this.getUser = function(username) {
    return this.users.get(username);
  }

  this.addNewUser = function (user) {
    this.users.set(user.userName, user);
  }
}

// export class User {
//   constructor(userName, password, firstName, lastName, email) {
//     this.userName = userName;
//     this.password = password;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.savedNews = [];
//   }

//   set username(name) {
//     this.userName = name
//   }
//   set pw(pass) {
//     this.password = pass 
//   }
//   set mail(email) {
//     this.email = email
//   }

//   get username() {
//     return this.userName;
//   }
//   get pw() {
//     return this.pw;
//   }
//   get fullName() {
//     return this.firstName + " " +  this.lastName;
//   }
//   get mail() {
//     return this.email;
//   }
//   get savedNews() {
//     return this.savedNews;
//   }

//   saveNews(newsId) {
//     this.savedNews.push(newsId);
//   }
// }

