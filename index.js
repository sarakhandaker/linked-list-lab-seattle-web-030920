// let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
// masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
// ntrandm: {name: 'Juliet', next: null}
// }

function getName(node) {
    return node["name"]
}

function headNode(linkedList, collection){
    return collection[linkedList]
  }

function next(node, collection) {
    let address = node["next"]
    return collection[address]
}

function nodeAt(index, linkedlist, collection){
let node= headNode(linkedlist, collection)
    for(let i=0; i<index; i++){
        let address= node.next
        node=collection[address]
    }
return node
}