function Lightswitch(props) {
  return (
    <>
        <button onClick={props.toggleON}>{props.on? "Turn OFF" : "Turn ON"}</button>
    </>
  )
}
export default Lightswitch