import { Tabs } from "./components/Tabs"
import { tabsData } from "./tabs";


function App() {
  return (
    <div className="mt-24 px-6">
      <Tabs tabsData={tabsData} />
    </div>
  )
}

export default App