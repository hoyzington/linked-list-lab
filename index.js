function getName(node) {
	return node.name;
}

function headNode(startLocation, collection) {
	return collection[startLocation];
}

function next(head, collection) {
	return collection[head.next];
}

function nodeAt(index, startLocation, collection) {
	if (index === 0) {
		return collection[startLocation];
	}
	let location = startLocation;
	for (let i = 0; i < index; i++) {
		location = collection[location].next;
	}
	return collection[location];
}

function addressAt(index, startLocation, collection) {
	if (index === 0) {
		return startLocation;
	}
	let location = startLocation;
	for (let i = 0; i < index; i++) {
		location = collection[location].next;
	}
	return location;
}

function indexAt(node, collection, startLocation) {
	let index = 0;
	let location = startLocation;
	let checkedNode = collection[location];
	while (checkedNode !== node) {
		location = checkedNode.next;
		checkedNode = collection[location];
		index += 1;
	}
	return index;
}

function insertNodeAt(index, newLoc, startLocation, collection) {
	let prevNode = collection[startLocation];
	if (index > 0) {
		let idx = index - 1;
		while (idx != 0) {
			prevNode = collection[prevNode.next];
			idx--;
		}
		const nextLoc = prevNode.next;
		prevNode.next = newLoc;
		collection[newLoc].next = nextLoc;
	}
}

function deleteNodeAt(index, startLocation, collection) {
	let prevNode = collection[startLocation];
	if (index > 0) {
		let idx = index - 1;
		while (idx != 0) {
			prevNode = collection[prevNode.next];
			idx--;
		}
		prevNode.next = collection[prevNode.next].next;
	}
}
