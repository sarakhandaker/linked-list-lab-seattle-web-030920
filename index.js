// let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
// masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
// ntrandm: {name: 'Juliet', next: null}
// }

function getName(node) {
    return node["name"]
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    let address = node["next"]
    return collection[address]
}

function nodeAt(index, linkedlist, collection) {
    let node = headNode(linkedlist, collection)
    for (let i = 0; i < index; i++) {
        let address = node.next
        node = collection[address]
    }
    return node
}

function addressAt(index, linkedList, collection) {
    if (index == 0) {
        return linkedList
    } else {
        let node = nodeAt(index - 1, linkedList, collection)
        return node.next
    }
}

function indexAt(node, collection, linkedList) {
    let currentNode = headNode(linkedList, collection)
    let i = 0
    while (currentNode != node) {
        i++
        currentNode = next(currentNode, collection)
    }
    return i
}

function insertNodeAt(index, newNodeAddress, linkedlist, collection) {
    let previous= nodeAt(index-1, linkedlist, collection)
    let newNode = collection[newNodeAddress]
    newNode.next = previous.next
    previous.next=newNodeAddress
}

function deleteNodeAt(index, linkedList, collection) {
    let previous= nodeAt(index-1, linkedList, collection)
    let deleted= nodeAt(index, linkedList, collection)
    previous.next=deleted.next
}