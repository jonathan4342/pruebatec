import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home"
import { Questions } from "../pages/Questions"

export const RouteApp=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/questions" element={<Questions/>}/>
            </Routes>
        </Router>
    )
}