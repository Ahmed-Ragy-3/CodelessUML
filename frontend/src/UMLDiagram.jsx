import './index.css';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

import { dependency, inheritance, association, composition, implementation } from './edges.jsx';


import ClassNode from './UMLComponents/ClassNode.jsx';
import InterfaceNode from './UMLComponents/InterfaceNode.jsx';
import EnumNode from './UMLComponents/EnumNode.jsx';
import AbstractClassNode from './UMLComponents/AbstractClassNode.jsx';
import TextFrame from './UMLComponents/Components/TextFrame.jsx';
import Note from './UMLComponents/Components/Note.jsx';
import { abstractClassNode, classNode, enumNode, initialNodes, interfaceNode } from './nodes.js';

import HorizontalToolbar from "./UIComponents/HorizontalToolbar.jsx";
import VerticalToolbar from "./UIComponents/VerticalToolbar.jsx";
import Button from "./UIComponents/Button.jsx";
import ContextMenu from "./UIComponents/ContextMenu/ContextMenu.jsx";
import Sidebar from "./UIComponents/Sidebar/Sidebar.jsx"
import ColorMapper from './UIComponents/ColorMapper/ColorMapper.jsx';

import TextIcon from './assets/HorizontalToolbarIcons/Text.png'
import NoteIcon from './assets/HorizontalToolbarIcons/Note.png'
import ClassIcon from './assets/HorizontalToolbarIcons/Class.png'
import AbstractClassIcon from './assets/HorizontalToolbarIcons/AbstractClass.png'
import InterfaceIcon from './assets/HorizontalToolbarIcons/Interface.png'
import EnumIcon from './assets/HorizontalToolbarIcons/Enum.png'

import UndoIcon from './assets/VerticalToolbarIcons/Undo.png'
import RedoIcon from './assets/VerticalToolbarIcons/Redo.png'
import ExportIcon from './assets/VerticalToolbarIcons/Export.png'
import ImportIcon from './assets/VerticalToolbarIcons/Import.png'
import AssociationIcon from "./assets/DropdownMenuIcons/Association.png";
import InheritanceIcon from "./assets/DropdownMenuIcons/Inheritance.png";
import ImplementationIcon from "./assets/DropdownMenuIcons/Implementation.png";
import DependencyIcon from "./assets/DropdownMenuIcons/Dependency.png";
import CompositionIcon from "./assets/DropdownMenuIcons/Composition.png";
import { useAppContext } from './AppContext.jsx';
import '@xyflow/react/dist/style.css';
import AttributesBlock from './UMLComponents/Components/AttributeBlock.jsx';

import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  useOnSelectionChange,
  // panOnDrag,
  // panOnScroll,
  // selectNodesOnDrag,
  addEdge,
  SmoothStepEdge,
  SelectionMode,
} from '@xyflow/react';

const nodeTypes = {
  text: TextFrame,
  note: Note,
  class: ClassNode,
  interface: InterfaceNode,
  enum: EnumNode,
  abstractClass: AbstractClassNode
};

const edgeTypes = {
  association,
  inheritance,
  implementation,
  dependency,
  composition,
  smoothstep: SmoothStepEdge, // Default edge type
};


const initialEdges = [
  // Add any initial edges here if needed
];

function UMLDiagram() {

  const {
    nodes, setNodes, onNodesChange,
    edges, setEdges, onEdgesChange,
    nodeColors, setNodeColors,
    selectedEdgeType, setSelectedEdgeType,
    onNodesDelete, onEdgesDelete,
    selectedEdges, setSelectedEdges,
    selectedNodes, setSelectedNodes,
    undo_stack, setUndoStack,
    redo_stack, setRedoStack,
    Take_Action, deleteEdges, deleteNode,
    updateNodeData, deleteEdge,
  } = useAppContext();


  const contextMenuRef = useRef(null);
  const [contextMenuStatus, setContextMenuStatus] = useState({
    position: {
      x: 0,
      y: 0
    },
    toggled: false,
    visible: false,
  });

  const onChange = useCallback(({ nodes, edges }) => {
    setSelectedNodes(nodes.map((node) => node.id));
    setSelectedEdges(edges.map((edge) => edge.id));
  }, []);
  

  const handleNodeDragStop = (event, node) => {
    const currentNodesState = nodes.map(n => ({ ...n }));
      Take_Action(currentNodesState, edges, nodeColors); // Pass the current state
      console.log(`Node ${node.id} moved to`, node.position); // Log the node movement
    setNodes((nds) => {
      // Capture the current state before updating
      const updatedNodes = nds.map((n) => 
        (n.id === node.id ? { ...n, position: node.position } : n)
      );
  
      console.log(`Node ${node.id} moved to`, node.position); // Log the node movement
      return updatedNodes;
    });
  };

  function handleOnContextMenu(e) {

    e.preventDefault();

    const contextMenuAttr = contextMenuRef.current.getBoundingClientRect();

    const isLeft = e.clientX < window.innerWidth / 2;
    const isTop = e.clientY < window.innerHeight / 2;

    let x;
    let y;

    if (isLeft) {
      x = e.clientX
    } else {
      x = e.clientX - contextMenuAttr.width;
    }

    if (isTop) {
      y = e.clientY
    } else {
      y = e.clientY - contextMenuAttr.height;
    }

    setContextMenuStatus(
      {
        position: {
          x: x,
          y: y
        },
        toggled: true
      }
    )

    console.log(contextMenuStatus)

  }

  function handleOnClick() {
    console.log("selected Nodes")
    console.log(selectedNodes)
    setContextMenuStatus({
      ...contextMenuStatus,
      toggled: false
    });
  }

  function handleMenuClick(option) {
    console.log(option);
    setContextMenuStatus({
      ...contextMenuStatus,
      toggled: false
    });
  }

  function handleRemarks(iconName) {
    const id = `${nodes.length}`;
    const newNode = {
      id,
      type: iconName.toLowerCase(),
      position: { x: Math.random() * 250, y: Math.random() * 250 },
      data: { label: `${iconName} Node` },
    };
    setNodes((nds) => [...nds, newNode]);
    Take_Action(id, `Create ${iconName}`, newNode.data);
  }

  function handleIconClick(iconName) {
    console.log(nodes)
    switch (iconName) {
      case 'Association':
        setSelectedEdgeType(association)
        break;
      case 'Implementation':
        setSelectedEdgeType(implementation)
        console.log(selectedEdgeType)
        break;
      case 'Dependency':
        setSelectedEdgeType(dependency)
        break;
      case 'Inheritance':
        setSelectedEdgeType(inheritance)
        console.log(selectedEdgeType)
        break;
      case 'Composition':
        setSelectedEdgeType(composition)
        console.log(selectedEdgeType)
        break;
        
      default:
        setSelectedEdgeType(inheritance)
        break;
    }
    console.log(iconName)
  }

  function handleGenerateCodeClick(e) {
    window.location.href = `${window.location.origin}/code-viewer`
  }

  const dropdownMenuItems = [
    {
      text: "Association",
      icon: {src: AssociationIcon, alt: 'Association'},
      onClick: () => handleIconClick('Association')
    },
    {
      text: "Inheritance",
      icon: {src: InheritanceIcon, alt: 'Inheritance'},
      onClick: () => handleIconClick('Inheritance')
    },
    {
      text: "Implementation",
      icon: {src: ImplementationIcon, alt: 'Implementation'},
      onClick: () => handleIconClick('Implementation')
    },
    {
      text: "Dependency",
      icon: {src: DependencyIcon, alt: 'Dependency'},
      onClick: () => handleIconClick('Dependency')
    },
    {
      text: "Composition",
      icon: {src: CompositionIcon, alt: 'Composition'},
      onClick: () => handleIconClick('Composition')
    }
  ]

  function handleExportClick() {
    const diagramState = { nodes, edges, nodeColors};
    const blob = new Blob([JSON.stringify(diagramState)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'diagram.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  function handleImportClick(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const diagramState = JSON.parse(loadEvent.target.result);
      console.log(diagramState); // Check the structure of the imported data
      setNodes(diagramState.nodes);
      setEdges(diagramState.edges);
      setNodeColors(diagramState.nodeColors);
    };
    reader.readAsText(file);
  };

  function handleUndoClick() {
    const taken = undo_stack.pop();
    setRedoStack((prev) => [...prev, {Nodes: nodes, Edges: edges, nodeColors: nodeColors}]);
      console.log(taken);
      setNodes(taken.Nodes);
      setEdges(taken.Edges);
      setNodeColors(taken.nodeColors);
  }

  function handleRedoClick(){
    const taken = redo_stack.pop();
    setUndoStack((prev) => [...prev, taken]);
    setNodes(taken.Nodes);
    setEdges(taken.Edges);
    setNodeColors(taken.nodeColors); 
  }

  const horizontalSidebarItems = [
    { type: "icon", src: TextIcon, alt: 'Text', onClick: () => handleRemarks('text') },
    { type: "icon", src: NoteIcon, alt: 'Note', onClick: () => handleRemarks('note') },
    { type: "icon", src: ClassIcon, alt: 'Class', onClick: () => createClass() },
    { type: "icon", src: AbstractClassIcon, alt: 'Abstract Class', onClick: () => createAbstractClass() },
    { type: "icon", src: InterfaceIcon, alt: 'Interface', onClick: () => createInterface() },
    { type: "icon", src: EnumIcon, alt: 'Enum', onClick: () => createEnum() },
    { type: "dropdown", items: dropdownMenuItems, icon: {src: AssociationIcon, alt: 'Association'}},
  ]

  const verticalSidebarItems = [
    { src: UndoIcon, alt: 'Undo', onClick: () => handleUndoClick() },
    { src: RedoIcon, alt: 'Redo', onClick: () => handleRedoClick() },
    { src: ExportIcon, alt: 'Export', onClick: () => handleExportClick()},
    { src: ImportIcon, alt: 'Import', onClick: () => document.getElementById('import-file').click()},
  ]

  const menuItems = [
    { label: 'Copy', shortcut: 'Ctrl + C', onClick: () => handleMenuClick('Copy')},
    { label: 'Cut', shortcut: 'Ctrl + X', onClick: () => handleMenuClick('Cut')},
    { label: 'Paste', shortcut: 'Ctrl + V', onClick: () => handleMenuClick('Paste')},
    { label: 'Delete', divider: true },
    { label: 'Lock', shortcut: 'Ctrl + L', onClick: () => handleMenuClick('Lock'), divider: true },
    { label: 'Add attribute', onClick: () => handleMenuClick('Add attribute') },
    { label: 'Add method', onClick: () => handleMenuClick('Add method'), divider: true },
    { label: 'View constructors', onClick: () => handleMenuClick('View constructors') },
    { label: 'Move to package', onClick: () => handleMenuClick('Move to package') },
    { label: 'Add subclass', onClick: () => handleMenuClick('Add subclass'), divider: true },
    { label: 'Generate class', shortcut: 'Ctrl + G', onClick: () => handleMenuClick('Generate class') },
    { label: 'Generate getters', onClick: () => handleMenuClick('Generate getters') },
    { label: 'Generate setters', onClick: () => handleMenuClick('Generate setters') },
  ];



  function createClass() {
    setNodes((prevNodes) => [...prevNodes,{ ...classNode, id: `${nodes.length}` }]);
    Take_Action(nodes, edges, nodeColors);
  }

  function createInterface() {
    setNodes((prevNodes) => [...prevNodes,{ ...interfaceNode, id: `${nodes.length}` }]);
    Take_Action(nodes, edges, nodeColors);
  }

  function createAbstractClass() {
    setNodes((prevNodes) => [...prevNodes,{ ...abstractClassNode, id: `${nodes.length}` }]);
    Take_Action(nodes, edges, nodeColors);
  }

  function createEnum() {
    setNodes((prevNodes) => [...prevNodes,{ ...enumNode, id: `${nodes.length}` }]);
    Take_Action(nodes, edges, nodeColors);
  }
  

  const onConnect = useCallback((params) => {
    setEdges((eds) =>
      addEdge({ ...selectedEdgeType, ...params }, eds)
    );
    Take_Action(nodes, edges, nodeColors);
  }, [nodes, nodeColors, edges, setEdges, selectedEdgeType, onEdgesChange]);
  
  // const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), [],);
  
  const handleClassColorChange = (color) => {
    // setClassColor(color);
    setNodeColors((prevNodeColors) => {
      return {
        ...prevNodeColors,
        class: color
      }
    })
    Take_Action(nodes, edges, nodeColors);
  };

  const handleAbstractClassColorChange = (color) => {
    // setAbstractClassColor(color);
    setNodeColors((prevNodeColors) => {
      return {
        ...prevNodeColors,
        abstractClass: color
      }
    })
    Take_Action(nodes, edges, nodeColors);
    };

  const handleEnumColorChange = (color) => {
    // setEnumColor(color);
    setNodeColors((prevNodeColors) => {
      return {
        ...prevNodeColors,
        enum: color
      }
    })
    Take_Action(nodes, edges, nodeColors);
  };

  const handleInterfaceColorChange = (color) => {
    // setInterfaceColor(color);
    setNodeColors((prevNodeColors) => {
      return {
        ...prevNodeColors,
        interface: color
      }
    })
    Take_Action(nodes, edges, nodeColors);
  
  };

  // Function to update node color
  
  // const updateNodeColor = (nodeId, color) => {
  //   setNodes((prevNodes) =>
  //     prevNodes.map((node) => 
  //       node.id === nodeId ? { ...node, color } : node
  //     )
  //   );
  // };


  return (
      <motion.div
        onClick={handleOnClick}
        onContextMenu={handleOnContextMenu}
        style={{
          width: window.innerWidth,
          height: window.innerHeight,
        }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          edges={edges}
          onNodesChange={onNodesChange}
          onNodeDragStart={handleNodeDragStop}
          onEdgesChange={onEdgesChange}
          // onNodesDelete={onNodesDelete}
          // onEdgesDelete={onEdgesDelete}
          onSelectionChange={onChange}
          onConnect={onConnect}
          connectionLineStyle={selectedEdgeType.style}
          connectionLineType={selectedEdgeType.type}
          snapToGrid={true}
          snapGrid={[16, 16]}
          // panOnScroll
          // fitView
          selectionOnDrag
          panOnDrag={[1, 2]}
          // selectNodesOnDrag
          // SelectionMode={SelectionMode.Full}
          selectionMode={SelectionMode.Partial}
          onNodesDelete={deleteNode}
          onEdgesDelete={deleteEdge}
        >
          <Controls
            className='controls'
            orientation="horizontal"
            position='bottom-right'
            style= {{
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
              position: "fixed",
              bottom: "10px"
            }}
          />
          <Background style={{zIndex: -1}} gap={16} size={1.5}/>
        </ReactFlow>

        <div className="generate-code-button-component">
          <Button text="GENERATE CODE" onClick={handleGenerateCodeClick}/>
        </div>
        
        <div className="vertical-toolbar-component">
          <VerticalToolbar items={verticalSidebarItems}/>
        </div>

        <div className="horizontal-toolbar-component">
          <HorizontalToolbar items={horizontalSidebarItems}/>
        </div>
        
        <ContextMenu
          contextMenuRef={contextMenuRef}
          items={menuItems}
          positionX={contextMenuStatus.position.x}
          positionY={contextMenuStatus.position.y}
          isToggled={contextMenuStatus.toggled}
        />
        
        <div className='color-mapper-component'>
          <ColorMapper
            onChangeFunctions={[
              handleClassColorChange,
              handleAbstractClassColorChange,
              handleInterfaceColorChange,
              handleEnumColorChange,
            ]}
            nodeTypes={['Class', 'Abstract Class', 'Interface',  'Enum']}
          />
        </div>
        
        <div className="sidebar-component">
          <Sidebar />
        </div>

        <div className='project-name-container'>
          <p className='codeless-uml'>CodelessUML</p>
          <p className='project-name'>Project Name</p>
        </div>

        <input type="file" id="import-file" accept=".json" onChange={handleImportClick} style={{ display: 'none' }} />
      </motion.div>

  );
}

export default UMLDiagram;
