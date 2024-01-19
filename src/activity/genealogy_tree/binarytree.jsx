import React, { Component } from 'react';

// Define a Node component to represent individual nodes in the binary tree
class TreeNode extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="tree-node">
        {data}
      </div>
    );
  }
}

// Define a BinaryTree component to render the entire binary tree
const binaryTreeData = {
    data: 50,
    left: {
      data: 30,
      left: {
        data: 20,
        left: null,
        right: null
      },
      right: {
        data: 40,
        left: null,
        right: null
      }
    },
    right: {
      data: 70,
      left: null,
      right: null
    }
  };
class BinaryTree extends Component {
  renderTree(node) {
    if (node === null) {
      return null;
    }

    return (
      <div className="tree-node">
        <TreeNode data={node.data} />
        {this.renderTree(node.left)}
        {this.renderTree(node.right)}
      </div>
    );
  }

  render() {
    const { binaryTreeData } = this.props;

    return (
      <div className="binary-tree">
        {this.renderTree(binaryTreeData)}
      </div>
    );
  }
}

export default BinaryTree;