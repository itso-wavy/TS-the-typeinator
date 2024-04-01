class MyRoom {
  private static instance: MyRoom;

  private constructor(private roomNumber: number) {}

  static getInstance() {
    if (!MyRoom.instance) {
      this.instance = new MyRoom(123); // static 메서드 내부에서만 private 생성자에 접근 가능
    }
    return this.instance;
  }

  get privateRoomNumber() {
    return this.roomNumber;
  }

  set privateRoomNumber(numNumber: number) {
    this.roomNumber = numNumber;
  }
}

const room1 = MyRoom.getInstance(); // 방 생성, 룸넘버 123
room1.privateRoomNumber = 333;
const room2 = MyRoom.getInstance(); // 위와 동일한 인스턴스 반환

console.log(room1, room2);
/* 
MyRoom: {
  "roomNumber": 333
},  MyRoom: {
  "roomNumber": 333
} 
*/
