import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import { LoginForm } from "./UI/organisms/LoginForm"
import { HomeTemplate } from "./UI/templates/HomeTemplate"
import UserRoute from "./routes/mainRoute"

function App() {

  console.log("object.");

  return (
    <Router>
      <Routes>
        {
          UserRoute && UserRoute.length > 0 &&
          UserRoute?.map((userRote, index) => {
            return (
              <>
                <Route key={index} path={userRote?.path} element={userRote?.element} >
                {
                  userRote?.children && userRote?.children.length > 0 && (
                    userRote?.children.map((childrenRoute: any, index: number) => {
                      return (
                        <Route key={index} path={childrenRoute?.path} element={childrenRoute?.element} />

                      )

                    })
                  )
                }
                </Route>
              </>


            )

          })

         
        }

      </Routes>
    </Router>
  )
}

export default App
