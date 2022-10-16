const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(list, k) {
  function getLength() {
    let current = list;
    let index  = 1;

    while (current.next) {
      current = current.next;
      index++;
    }

    return index;
  }

  let length = getLength();

  function indexOf(value) {
    let current = list;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  function remove(position) {
    if (position < 0 || position > length) {
      return false;
    }

    let current = list;

    if (position === 0) {
      list = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }
    
    length--;
    return current.value;
  }

  function removeAll(value) {
    for (let i = 0; i < length; i++) {
      remove(indexOf(value));
    }

    return list;
  }

  return removeAll(k);
}

module.exports = {
  removeKFromList
};
