import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Hello'
import MyInfo from './components/MyInfo'
import ProfileCard from './components/ProfileCard'
import Welcome from './components/welcome'
import Counter from'./components/Counter'
import TeamMember from'./components/TeamMember'
import LikeButton from'./components/LikeButton'



function App() {
  const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
return(
  <>
<h1>Our Team</h1>
       <TeamMember name="Ali" role="Designer" image="https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=mZ2wtnhxBA20wCs2sNhAClC-hSFOkqAJAP3GqiSBIlk="/>
       <TeamMember name="Siti" role="Engineer" image="https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=mZ2wtnhxBA20wCs2sNhAClC-hSFOkqAJAP3GqiSBIlk=" />
       <TeamMember name="Raj" role="Product Manager" image="https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=mZ2wtnhxBA20wCs2sNhAClC-hSFOkqAJAP3GqiSBIlk=" />
      <Counter/>
      <LikeButton/>

</>
)
}

export default App
