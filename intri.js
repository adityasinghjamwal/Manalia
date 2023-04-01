class ListNode {
  constructor(data) {
      this.data = data
      this.next = null                
  }
}


class LinkedList {
  constructor(head = null) {
      this.head = head
  }

  size() {
      let count = 0; 
      let node = this.head;
      while (node) {
          count++;
          node = node.next
      }
      return count;
  }

  
clear() {
  this.head = null;
}




getLast() {
  let lastNode = this.head;
  if (lastNode) {
      while (lastNode.next) {
          lastNode = lastNode.next
      }
  }
  return lastNode
}


getFirst() {
  return this.head;
}



}




let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2


let list = new LinkedList(node1)


console.log(list.head.next.data) //returns 5

console.log(list.size())


console.log(list.getFirst())

console.log(list.getLast())




LinkedList.prototype.insertAtBeginning = function(data){
  // A newNode object is created with property data and next = null
      let newNode = new ListNode(data);
  // The pointer next is assigned head pointer so that both pointers now point at the same node.
      newNode.next = this.head;
  // As we are inserting at the beginning the head pointer needs to now point at the newNode. 
      
      this.head = newNode;
      return this.head;
  }

list.insertAtBeginning(4)

console.log(list)


LinkedList.prototype.insertAtEnd = function(data){
  // A newNode object is created with property data and next=null
      
      let newNode = new ListNode(data);
  // When head = null i.e. the list is empty, then head itself will point to the newNode.
      if(!this.head){
          this.head = newNode;
          return this.head;
      }
  // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
     let tail = this.head;
     while(tail.next !== null){
          tail = tail.next;
     }
     tail.next = newNode;
     return this.head;
  }

  list.insertAtEnd(9)

  console.log(list.getLast())
  


  
// A helper function getAt() is defined to get to the desired position. This function can also be later used for performing delete operation from a given position.
LinkedList.prototype.getAt = function(index){
  let counter = 0;
  let node = this.head;
  while (node) {
      if (counter === index) {
         return node;
      }
      counter++;
      node = node.next;
  }
  return null;
}

console.log(list.getAt(2))



LinkedList.prototype.deleteFirstNode = function(){
  if(!this.head){
      return;
  }
  this.head = this.head.next;
  return this.head;
}

list.deleteFirstNode()



LinkedList.prototype.deleteAt = function(index){
  // when list is empty i.e. head = null
      if (!this.head) {
           this.head = new Node(data);
           return;
       }
  // node needs to be deleted from the front of the list i.e. before the head.
      if (index === 0) {
          this.head = this.head.next;
          return;
      }
  // else, use getAt() to find the previous node.
      const previous = this.getAt(index - 1);
      
      if (!previous || !previous.next) {
          return;
      }
      
      previous.next = previous.next.next;     
      return this.head
  }
  

console.log(list)

list.deleteAt(2)
console.log(list)



console.log(list.searchElement(5));





class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
      this.head = {
          value: value,
          next: null,
          previous: null
      };
      this.length = 1;
      this.tail = this.head;C
  }

  printList() {
      let array = [];
      let currentList = this.head;
      while (currentList !== null) {
          array.push(currentList.value);
          currentList = currentList.next;
      }

      console.log(array.join(' <--> '));
      return this;
  }

  // Insert node at end of the list
  append(value) {
      let newNode = new Node(value);

      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;

      this.length++;
      this.printList();
  }

  // Insert node at the start of the list
  prepend(value) {
      let newNode = new Node(value);

      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;

      this.length++;
      this.printList();
  }

  // Insert node at a given index
  insert (index, value) {
      if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
          console.log(`Invalid index. Current length is ${this.length}.`);
          return this;
      }

      // If index is 0, prepend
      if (index === 0) {
          this.prepend(value);
          return this;
      }

      // If index is equal to this.length, append
      if (index === this.length) {
          this.append(value);
          return this;
      }

      // Reach the node at that index
      let newNode = new Node(value);
      let previousNode = this.head;

      for (let k = 0; k < index - 1; k++) {
          previousNode = previousNode.next;
      }

      let nextNode = previousNode.next;
      
      newNode.next = nextNode;
      previousNode.next = newNode;
      newNode.previous = previousNode;
      nextNode.previous = newNode;

      this.length++;
      this.printList();
  }

  // Remove a node
  remove (index) {
      if (!Number.isInteger(index) || index < 0 || index > this.length) {
          console.log(`Invalid index. Current length is ${this.length}.`);
          return this;
      }

      // Remove head
      if (index === 0) {
          this.head = this.head.next;
          this.head.previous = null;

          this.length--;
          this.printList();
          return this;
      }

      // Remove tail
      if (index === this.length - 1) {
          this.tail = this.tail.previous;
          this.tail.next = null;

          this.length--;
          this.printList();
          return this;
      }

      // Remove node at an index
      let previousNode = this.head;

      for (let k = 0; k < index - 1; k++) {
          previousNode = previousNode.next;
      }
      let deleteNode = previousNode.next;
      let nextNode = deleteNode.next;

      previousNode.next = nextNode;
      nextNode.previous = previousNode;

      this.length--;
      this.printList();
      return this;
  }
}

let myDoublyList = new DoublyLinkedList(10);

myDoublyList.append(5);                     // 10 <--> 5

myDoublyList.append(16);                    // 10 <--> 5 <--> 16

myDoublyList.prepend(1);                    // 1 <--> 10 <--> 5 <--> 16

myDoublyList.insert(2, 99);                 // 1 <--> 10 <--> 99 <--> 5 <--> 16
myDoublyList.insert(20, 88);                // Invalid index. Current length is 5.
myDoublyList.insert(5, 80);                 // 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80
myDoublyList.insert(0, 80);                 // 80 <--> 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80

myDoublyList.remove(0);                     // 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80
myDoublyList.remove(5);                     // 1 <--> 10 <--> 99 <--> 5 <--> 16
myDoublyList.remove(2);                     // 1 <--> 10 <--> 5 <--> 16