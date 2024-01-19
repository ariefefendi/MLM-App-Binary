import React from 'react';
import ReactDOM from 'react-dom';
import BinaryTree from './binarytree'; // Import the BinaryTree component

// Create or obtain a binary tree data structure
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

// Render the BinaryTree component with the binary tree data
ReactDOM.render(
  <BinaryTree root={binaryTreeData} />,
  document.getElementById('root')
);