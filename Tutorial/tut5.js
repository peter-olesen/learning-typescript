"use strict";
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const userNames = new StorageContainer();
userNames.addItem("user1");
userNames.addItem("user2");
console.log(userNames.getItem(0));
const friendsCount = new StorageContainer();
friendsCount.addItem(1);
friendsCount.addItem(0);
console.log(friendsCount.getItem(0));
