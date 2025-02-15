const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addData(this.rootNode, data);

    function addData(node, data){
      if(!node) {
        return new Node(data);
      }

      if(node.data === data){
        return node;
      }

      if(data < node.data){
        node.left = addData(node.left, data);
      }
      else{
        node.right = addData(node.right, data);
      }

      return node;
    }
   
  }

  has(data) {
    return searchData(this.rootNode, data);
    function searchData(node, data){
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      if(data < node.data){
        return searchData(node.left, data);
      }
      else{
        return searchData(node.right, data);
      }
    }
  }

  find(data) {
    return searchNode(this.rootNode, data);
    function searchNode(node, data){
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data){
        return searchNode(node.left, data);
      }
      else{
        return searchNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeData(this.rootNode, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let minNode = this.rootNode;
    while(minNode.left) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let maxNode = this.rootNode;
    while(maxNode.right) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};