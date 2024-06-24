class StorageContainer<T> {
    private contents: T[]

    constructor() {
        this.contents = []
    }

    addItem(item: T):void {
        this.contents.push(item);
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx]
    }
}

const userNames = new StorageContainer<string>();
userNames.addItem("user1");
userNames.addItem("user2");
console.log(userNames.getItem(0));

const friendsCount = new StorageContainer<number>();
friendsCount.addItem(1);
friendsCount.addItem(0);
console.log(friendsCount.getItem(0));