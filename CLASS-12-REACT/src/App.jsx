
function App() {
  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", }}>
        <div>
          <div>
            <PostComponent />
            <br />
          </div>
          <div>
            <PostComponent />
            <br />
          </div>
          <div>
            <PostComponent />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

const style = { width: 400, backgroundColor: "white", borderWidth: 1,borderRadius:10, padding:10, paddingBottom: 150 }

function PostComponent() {
  return <div style={style}>
    <div style={{ display: "flex",marginBottom:10 }}>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7B4jRWqzPl_7RPqByfRZR0lqNXRIFS6m9uDaL2MnUg&s"} style={{
        width: 32,
        height: 32,
        borderRadius: 30
      }} />
      <div style={{ fontSize: 11, marginLeft: 10 }}>
        <b>SwalihNijad</b>
        <div>78,008 followers</div>
        <div>12M</div>
      </div>
    </div>
    <div>
      Want to know how to win big? Check out these folks have made $5000 in bounties
    </div>
  </div>
}

export default App
