import { useCustomisation } from "../contexts/Customisation"

const Start = () => {
  const {intro,setIntro} = useCustomisation();
  return (
    <main>
      <div className="container" style={{color:"white"}}>
          <div>
            <div className="logo">FRAGMENT</div>
            <div className="start" >
              <button className="btn" onClick={()=>setIntro(false)}>Customise</button>
            </div>
          </div>
      </div>
    </main>
  )
}
export default Start