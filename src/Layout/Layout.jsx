 
import ConditionalFoot from './ConditionalFoot'
import Conditionalnav from './Conditionalnav'
 

const Layout = ({children}) => {
  return (
    < >
      <Conditionalnav />
        <main>
          {children}
        </main>
      <ConditionalFoot />
        

    </>
  )
}

export default Layout