import { TreeNodeViewList } from '@/views/tree-node-view-list'
import { StateTreeProvider } from '@/shared/providers'

function App() {
  return (
    <StateTreeProvider>
      <TreeNodeViewList />
    </StateTreeProvider>
  )
}

export default App
