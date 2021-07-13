export type FunctionType = 'While' | 'DoWhile' | "For" | "Function" | "RecursionFunction" // 后续可以扩充

export interface FunctionRender {
    type: FunctionType
    name: string
    id: string
    children?: Array<FunctionRender>
}

export type Render = Array<FunctionRender> // 整个流程
