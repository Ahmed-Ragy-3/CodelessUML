import { useAppContext } from "../AppContext";
import AttributesBlock from "./Components/AttributeBlock";
import MethodsBlock from "./Components/MethodsBlock";
import NameBlock from "./Components/NameBlock";
import PackageBlock from "./Components/PackageBlock";
import { useState, useCallback } from "react";
import Dot from "./Dot";

import {
  Handle,
  Position,
} from '@xyflow/react';

function ClassNode({ data }) {

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const {
    nodeColors
  } = useAppContext();

  const [isHovered, setIsHovered] = useState(false);
  const [attributes, setAttributes] = useState([]);
  const [methods, setMethods] = useState([]);

  const addAttribute = () => {
    setAttributes([...attributes, `Attribute ${attributes.length + 1}`]);
  };

  const addMethode = () => {
    setMethods([...methods, `Method ${methods.length + 1}`]);
  };

  return (
    <div >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <PackageBlock packageName={data.package}/>
        
        <Dot id={data.id} />
        
        <NameBlock color={nodeColors.enum} name={data.name} />
        
        <AttributesBlock
          data={data}
          attributes={attributes}
          setAttributes={setAttributes}
          methods={methods}
          isHovered={isHovered}
          addAttribute={addAttribute}
        />
      </div>
      {isHovered && (attributes.length === 0 || methods.length === 0) && (
          <button className="attribute-buttons" onClick={addAttribute} onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
               style={{left:"50%"}}>
            + attribute
          </button>
      )}
    </div>
  );
}

export default ClassNode;