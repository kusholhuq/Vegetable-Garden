function getNode(head, positionFromTail) {
    //can loop through once to determine length
    //loop again to length - position
    //O(n) solution
    let length = 1;
    let currentNode = head;
    while(currentNode.next){
        length++;
        currentNode = currentNode.next;
    }

    const index = length - 1 - positionFromTail;
    let counter = 0;
    currentNode = head;
    while(counter !== index){
        currentNode = currentNode.next;
        counter++;
    }
    return currentNode.data;

}
