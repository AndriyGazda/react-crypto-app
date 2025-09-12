import {NavLink} from "react-router-dom";

const NotFound = () => {

  return (
    <section>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <NavLink to='/'>Back to home</NavLink>
    </section>
  )
}

export default NotFound