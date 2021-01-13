function insertNodeAtPosition(head, data, position) {
    //a --> b --> c
    //0     1     2
    //you want to insert d
    //traverse to leader
    //save follower
    //move pointer from leader to newNode
    //point new node to follower

    const newNode = {
        data: data,
        next:null
    }
    let counter = 0;
    let currentNode = head;
    while(counter !== position-1){
        currentNode = currentNode.next;
        counter++;
    }
    const leader = currentNode;
    const follower = currentNode.next;
    leader.next = newNode;
    newNode.next = follower;
    return head;

}
