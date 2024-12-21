import {
   MarkerType,
 } from '@xyflow/react';

export const association = {
   type: 'smoothstep',
   style: { stroke: 'black', strokeWidth: 2 },
   markerStart: {
      type: MarkerType.Arrow,
      width: 20,
      height: 20,
      color: 'black',
   }
}

export const inheritance = {

   style: { stroke: 'black', strokeWidth: 2 },
   type: 'smoothstep',
   markerStart: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: 'black',
   }
}


export const implementation = {

   style: { stroke: 'blue', strokeWidth: 2 , strokeDasharray: '5,5'},
   markerStart: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: 'black',
   },
   type: 'smoothstep'
}

export const dependency = {

   
   markerStart: {
      type: MarkerType.Arrow,
      width: 20,
      height: 20,
      color: 'black',
   },
   type: 'smoothstep',
   style: { stroke: 'black', strokeWidth: 2, strokeDasharray: '5,5' },
}

export const composition = {

   markerStart: {
      type: MarkerType.Arrow,
      width: 20,
      height: 20,
      color: 'black',
   },
   style: { stroke: 'black', strokeWidth: 2 },
   type: 'smoothstep',
}




