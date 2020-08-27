// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const node = new Node(val)
        if(this.head === null){
            this.head = node;
            this.tail = node;
        } else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        // console.log(this)
        return this

    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(this.tail === null) {
            return undefined;
        } else {
            let initialTail = this.tail;
            if(this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                // we start with this.head => this.head.next = second node;
                let i = 0;
                let temp = this.head;
                while(i < this.length - 2){
                    temp = temp.next;
                    i++;
                }

                this.tail = temp;
                this.tail.next = null;
            }
            this.length--;
            return initialTail;
        }

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        // console.log('something')

        const node = new Node(val)
        if(this.head === null){
            this.head = node;
            this.tail = node;

        } else {
            const temp = this.head;
            this.head = node;
            this.head.next = temp;

        }

        this.length++
        return this
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        const initialHead = this.head
        if(this.head === null){
            return undefined
        }

        if(this.length === 1){
            this.head = null;
            this.tail = null;

        } else{
            const temp = this.head.next
            this.head = temp

        }

        this.length--
        return initialHead

    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head;
        while(currentNode.value !== target) {
            if(currentNode.next === null) {
                return false;
            }

            currentNode = currentNode.next;
        }
        
        return true;
        
    }

    // TODO: Implement the get method here
    get(index) {
        if(index > this.length || index < 0) {
            return null;
        }

        let currentNode = this.head;
        for(let counter = 0; counter < index; counter++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}



exports.Node = Node;
exports.LinkedList = LinkedList;
