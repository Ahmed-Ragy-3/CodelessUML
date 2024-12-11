import AttributesBlock from "./Components/AttributeBlock";
import MethodsBlock from "./Components/MethodsBlock";
import NameBlock from "./Components/NameBlock";
import PackageBlock from "./Components/PackageBlock";
import { useState } from "react"

function ClassNode({ data }) {
   // const onChange = useCallback((evt) => {
   //    console.log(evt.target.value);
   // }, []);
   
   const styles = {
      button: {
         padding: "2px",
         alignItems: 'center',
         fontSize: "15px",
         backgroundColor: "black",
         color: "white",
         border: "solid black",
         borderRadius: "20px",
         cursor: 'pointer',
      },
      buttons: {
         marginTop: "-20px",
         width: `${data.width}px`,
         padding: "2px",
         display: "flex",
         justifyContent: "space-evenly",
         opacity: 0,
         transition: 'opacity 0.2s ease-in-out',
      },
      buttonsVisible: {
         opacity: 1,
      }
   };

   const [methodesHeight, setMethodesHeight] = useState(30);
   const [attributesHeight, setAttributesHeight] = useState(30);
   const [methodesNo, setMethodesNo] = useState(0);
   const [attributesNo, setAttributesNo] = useState(0);
   const [isHovered, setIsHovered] = useState(false);

   const handleMouseEnter = () => {
      setIsHovered(true);
   };

   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   const addAttribute = () => {
      setAttributesNo(attributesNo + 1);
      setAttributesHeight(attributesHeight + 30);
   };
   const addMethode = () => {
      setMethodesNo(methodesNo + 1);
      setMethodesHeight(methodesHeight + 30);
   };

   return (
   <>
      <div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
         
         <PackageBlock packageName={data.packageName} width={data.width}/>
         <NameBlock color={data.color} width={data.width} type={data.type} name={data.name}/>
         <AttributesBlock attributesHeight={attributesHeight} setAttributesHeight={setAttributesHeight} isHovered={isHovered} setAttributesNo={setAttributesNo} attributesNo={attributesNo} width={data.width}/>
         <MethodsBlock methodesHeight={methodesHeight} setMethodesHeight={setMethodesHeight} isHovered={isHovered} setMethodesNo={setMethodesNo} methodesNo={methodesNo} width={data.width}/>
      
      </div>
      
      <div style={{ ...styles.buttons, ...(isHovered ? styles.buttonsVisible : {}) }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
         <button style={styles.button} onClick={addAttribute}>+ attribute</button>
         <button style={styles.button} onClick={addMethode}>+ method</button>
      </div>
   </>
   )
  }
  
  export default ClassNode