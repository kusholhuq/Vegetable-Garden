// Complete the sortedInsert function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {
    let currentNode = head;
    let nextNode = currentNode.next;
    const newNode = {
        data: data,
        next: null,
        prev: null
    }
    if(newNode.data<currentNode.data){
        newNode.next = currentNode;
        currentNode.prev = newNode;
        head = newNode;
        return head;

    }
    while(nextNode !== undefined){
        if(nextNode === null){
            currentNode.next = newNode;
            newNode.prev = currentNode;
            return head;
        }
        if(newNode.data < nextNode.data){
            currentNode.next = newNode;
            newNode.prev = currentNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            return head;
        }
        currentNode = nextNode;
        nextNode = nextNode.next;
    }


    }
