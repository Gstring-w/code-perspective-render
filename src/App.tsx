import { useEffect, useRef, useState } from 'react'
import { Render,FunctionRender } from './types/index'
import Function from './compontents/Function'
import Group,{ createGroup } from './compontents/Group'
import { Graph } from '@antv/x6'

import { BASE_HEIGHT, BASE_WIDTH, NODE_SIZE, CANVAS_WIDTH, CANVAS_HEIGHT, START_X, START_Y} from './const'

import '@antv/x6-react-shape'

import "./App.less"

import { example } from './mock/index'



export default function App() {
  const container = useRef<HTMLDivElement>(null)
  const [graph, setGraph] = useState<Graph>()

  const addFunction = (fRender: FunctionRender,deep:number) =>{
    render(fRender.children,deep + 1)
    graph?.addNode({
      x: 120,
      y: 50,
      ...NODE_SIZE,
      component: <Function text='123' />,
    })
  }


  const render = (data?:Render,deep:number = 0) => {
    if(!data || data.length === 0) return 

    for(let i = 0; i < data.length; i++){
      switch(data[i].type){
        case "Function":
          addFunction(data[i],deep)
          return
      }
    }
  }

  const parseData = (data:Render) => {
    if(!data || !data.length || !graph)  return 
    const group = createGroup('a', 100, 40, 420, 240, '#fffbe6', '#ffe7ba')
    graph.addNode(group)


    graph.on('node:collapse', ({ node }: { node: Group }) => {
      node.toggleCollapse()
      const collapsed = node.isCollapsed()
      const collapse = (parent: Group) => {
        const cells = parent.getChildren()
        if (cells) {
          cells.forEach((cell) => {
            if (collapsed) {
              cell.hide()
            } else {
              cell.show()
            }
    
            if (cell instanceof Group) {
              if (!cell.isCollapsed()) {
                collapse(cell)
              }
            }
          })
        }
      }
    
      collapse(node)
    })
    render(data)
  }

  useEffect(() => {
    if (container.current) {
      setGraph(new Graph({
        container: container.current,
        width:CANVAS_WIDTH,
        height:CANVAS_HEIGHT,
      }))
    }
  }, [container])

  useEffect(() => {
    parseData(example)
  }, [graph])

  return (
    <div id='container' ref={container}></div>
  )
}

