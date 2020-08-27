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
        let nodeAtIndex = this.get(index)
        if(nodeAtIndex){
            nodeAtIndex.value = val
            return true;
        }
        return false;

    }

    // TODO: Implement the insert method here
    insert(index, val) {
        const node = new Node(val)
        if(index > this.length || index < 0){
            return false;
        }

        if(index === 0){
            // this.addToHead(val)
            const temp = this.head;
            this.head = node;
            this.head.next = temp;

            this.length++
            return true;
        }

        const prvNode = this.get(index - 1)
        const currentNode = prvNode.next

        prvNode.next = node;
        node.next = currentNode;

        this.length++
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if(index > this.length || index < 0) {
            return undefined;
        }

        let currNode = this.get(index);
        let prvNode = this.get(index - 1);
        let nextNode = this.get(index + 1);
        prvNode.next = nextNode;

        this.length--;
        return currNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}



exports.Node = Node;
exports.LinkedList = LinkedList;
