import React, { createContext, useContext, useState } from 'react';
import { abstractClassNode, classNode, enumNode, initialNodes, interfaceNode } from './nodes.js';
import { dependency, inheritance, association, composition, implementation } from './edges.jsx';

import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  SmoothStepEdge
} from '@xyflow/react';
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [nodeColors, setNodeColors] = useState({
    class:'#0fd2e8',
    abstractClass: '#d256ce',
    interface:'#04da00',
    enum: '#e9ff23'
  });

  const [selectedEdge, setSelectedEdge] = useState(dependency)

  return (
    <AppContext.Provider
      value={{
        nodeColors, setNodeColors,
        nodes, setNodes, onNodesChange,
        edges, setEdges, onEdgesChange,
        selectedEdge, setSelectedEdge
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access the context
export const useAppContext = () => useContext(AppContext);
