import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home"

export const RouteApp=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    )
}