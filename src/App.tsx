import { TreeNodeViewList } from '@/views/tree-node-view-list'
import { StateTreeProvider } from '@/shared/providers'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <StateTreeProvider>
      <TreeNodeViewList />
      <ToastContainer />
    </StateTreeProvider>
  )
}

export default App
