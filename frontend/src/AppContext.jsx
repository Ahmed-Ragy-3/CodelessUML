import React, { createContext, useEffect, useContext, useCallback, useState, useRef } from 'react';
import { abstractClassNode, classNode, enumNode, initialNodes, interfaceNode } from './nodes.js';
import { dependency, inheritance, association, composition, implementation } from './edges.jsx';

import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  SmoothStepEdge,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
} from '@xyflow/react';


const NodeTypes = {
  class: classNode,
  interface: interfaceNode,
  abstractClass: abstractClassNode,
  enum: enumNode,
}


const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const documentRef = useRef(document);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [selectedEdges, setSelectedEdges] = useState([]);

  const [focusedItem, setFocusedItem] = useState(null);
  const [expandedItems, setExpandedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [treeItems, setTreeItems] = useState({
    virtualRoot: {
      index: 'virtualRoot',
      isFolder: true,
      children: ['root'],
      data: '',
    },
    root: {
      index: 'root',
      canMove: true,
      isFolder: true,
      children: [],
      data: 'src',
      canRename: true,
    }
  });

  const [nodeColors, setNodeColors] = useState({
    class:'#0fd2e8',
    abstractClass: '#d256ce',
    interface:'#04da00',
    enum: '#e9ff23'
  });

  const [selectedEdgeType, setSelectedEdgeType] = useState(dependency)
  
  const [copied, setCopied] = useState([])


  function nodeExists(id) {
    return nodes.some((node) => node.id === id)
  }

  /*
   * When key is 'package' value must be the package id (index).
   * This function handles all the side effects, and should be the exposed
   * function for all other components to use.
   */
  function updateNode(id, key, value) {
    switch (key) {
      case 'package':
        moveTreeItems([treeItems[id]], value)
        if (nodeExists(id)) updateNodeData(id, 'package', treeItems[value].data)
        return
      case 'name':
        renameTreeItem(id, value)
        if (nodeExists(id)) {
          updateNodeData(id, 'name', value)
        }
        else {
          treeItems[id].children.forEach((item) => {
            if (!treeItems[item].isFolder) {
              console.log(item, 'package', value)
              updateNodeData(item, 'package', value)
            }
          })
        }
        break
      default:
        updateNodeData(id, key, value)
        break
    }
  }


  function updateNodeData(id, key, value){
    setNodes(prevNodes =>
      prevNodes.map(node =>
        node.id === id ? { ...node, data: { ...node.data, [key]: value } } : node
      )
    )
  }


  function createNode(type) {
    console.log('Creating node with type:', type)

    const targetIndex = focusedItem ?
        (treeItems[focusedItem].isFolder ? focusedItem : treeItems[focusedItem].parentId)
        : 'root'

    const node = NodeTypes[type]

    console.log('Creating:', node)

    const newNode = {
      ...node,
      id: `${type}-${Date.now()}`,
      data: {
        ...node.data,
        package: treeItems[targetIndex].data
      }}

    console.log('New node:', newNode)
    setNodes((prevNodes) => ([...prevNodes, newNode]))
    addTreeItem(newNode, targetIndex)
  }


  function deleteNode(id) {
    const { updatedTreeItems, updatedNodes } = deleteNodeRec(id, treeItems, nodes);
    const updatedSelectedItems = selectedItems.filter((selectedItem) => (selectedItem.index !== id))
    setNodes(() => updatedNodes);
    setTreeItems(() => updatedTreeItems);
    setSelectedItems(() => updatedSelectedItems)
    setFocusedItem(() => (focusedItem === id)? null : focusedItem)
  }

  function deleteNodeRec(id, treeItems, nodes) {
    console.log('rec', id, treeItems, nodes)
    let updatedTreeItems = treeItems
    let updatedNodes = nodes

    if (nodes.some((node) => node.id === id)) {
      updatedNodes = nodes.filter((node) => node.id !== id);
    }
    else {
      updatedTreeItems[id].children.forEach((child) => {
        ({updatedTreeItems, updatedNodes} =
            deleteNodeRec(child, updatedTreeItems, updatedNodes))
      })
    }

    updatedTreeItems = deleteTreeItem(updatedTreeItems[id], updatedTreeItems)
    return { updatedTreeItems,  updatedNodes }
  }

  /*
   * Since this function is used recursively so it must not set the useState
   * instead it must return the updated list for the calling function to set.
   */
  // function deleteEdges(ids) {
  //   return edges.filter((edge) => !ids.includes(edge.source) && !ids.includes(edge.target))
  // }

  function addTreeItem(newNode, targetIndex) {
    console.log('Adding new node to project tree...')

    console.log('Adding class to package: ', targetIndex)


    // Get target package
    const treeClassItem = {
      index: newNode.id,
      isFolder: false,
      children: [],
      data: newNode.data.name,
      parentId: targetIndex
    }

    console.log('Adding item:', treeClassItem, 'to the tree')

    let updatedTreeItems = treeItems

    // Add new tree class item to the tree
    updatedTreeItems[newNode.id] = treeClassItem

    // Append new tree class to target package children list
    const targetItem = updatedTreeItems[targetIndex]
    updatedTreeItems[targetIndex] = {
      ...targetItem,
      children: [...targetItem.children, treeClassItem.index]
    }

    setTreeItems(() => updatedTreeItems)
  }

  function renameTreeItem(itemIndex, name) {
    const updatedTreeItems = { ...treeItems };

    updatedTreeItems[itemIndex].data = name;

    setTreeItems(() => updatedTreeItems);
  }

  function moveTreeItems(items, targetIndex) {

    const targetItem = treeItems[targetIndex];
    const updatedTreeItems = { ...treeItems };

    items.forEach((item) => {
      if (item.parentId) {
        if (targetItem.index === item.parentId) return;

        const parentItem = treeItems[item.parentId];
        const updatedChildren = parentItem.children.filter((c) => c !== item.index);
        updatedTreeItems[item.parentId] = {
          ...parentItem,
          children: updatedChildren,
        };
      }

      updatedTreeItems[targetItem.index] = {
        ...targetItem,
        children: [...targetItem.children, item.index],
      };

      updatedTreeItems[item.index] = {
        ...item,
        parentId: targetItem.index,
      };
    });

    setTreeItems(() => updatedTreeItems);
  }


  function deleteTreeItem(item, treeItems){
    if (!item || item.index === 'root') return

    console.log('Deleting item: ', item, 'from tree items:', treeItems);
    const updatedTreeItems = { ...treeItems };

    // Delete tree item
    delete updatedTreeItems[item.index];

    // Delete tree item from children list of all items
    for (const treeItemKey in updatedTreeItems) {
      let treeItem = updatedTreeItems[treeItemKey]
      if (treeItem.isFolder) {
        treeItem = {
          ...treeItem,
          children: treeItem.children.filter((i) => i !== item.index)
        }
        updatedTreeItems[treeItem.index] = treeItem;
      }
    }
    return updatedTreeItems
  }


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey || event.metaKey) { // Support both Ctrl and Command keys
        if (event.key.toLowerCase() === 'c') {
          // Copy selected nodes and edges
          setCopied({
            nodes: nodes.filter((node) => selectedNodes.includes(node.id)),
            edges: edges.filter((edge) =>
              selectedEdges.includes(edge.id) ||
              selectedNodes.includes(edge.source) ||
              selectedNodes.includes(edge.target)
            ),
          });
        } else if (event.key.toLowerCase() === 'v' && copied.nodes.length > 0) {
          // Paste copied nodes and edges
          const nodeIdMap = {}; // Map old IDs to new IDs
  
          const newNodes = copied.nodes.map((node, index) => {
            const newId = `${node.id}_copy_${index}`;
            nodeIdMap[node.id] = newId;
  
            return {
              ...node,
              id: newId,
              position: {
                x: node.position.x + 25, // Offset to avoid overlap
                y: node.position.y + 25,
              },
              selected: false,
            };
          });
  
          const newEdges = copied.edges.map((edge) => ({
            ...edge,
            id: `${edge.id}_copy`,
            source: nodeIdMap[edge.source] || edge.source,
            target: nodeIdMap[edge.target] || edge.target,
          }));
  
          setNodes((prevNodes) => [...prevNodes, ...newNodes]);
          if(newNodes.length == 1) return;
          setEdges((prevEdges) => [...prevEdges, ...newEdges]);
        }
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nodes, edges, copied, selectedNodes, selectedEdges]);
  

  const handleNodesChange = useCallback((changes) => {
    onNodesChange(changes);
    const selected = changes
      .filter((change) => change.selected) // Filter selected nodes
      .map((node) => node.id); // Map to IDs
    
    setSelectedNodes(selected);
  }, [onNodesChange]);


  return (
    <AppContext.Provider
      value={{
        documentRef,
        nodes, setNodes, onNodesChange,
        edges, setEdges, onEdgesChange,
        nodeColors, setNodeColors,
        selectedEdgeType, setSelectedEdgeType,
        createNode,
        updateNode,
        deleteNode,
        deleteTreeItem,
        moveTreeItems,
        updateNodeData, 
        // onNodesDelete, 
        // onEdgesDelete,
        selectedNodes, setSelectedNodes,
        selectedEdges, setSelectedEdges,
        focusedItem, setFocusedItem,
        expandedItems, setExpandedItems,
        selectedItems, setSelectedItems,
        treeItems, setTreeItems
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to access the context
export const useAppContext = () => useContext(AppContext)
