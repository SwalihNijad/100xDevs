export function Button(props) {
    return <div style={{cursor: "pointer",border: "1px solid black",borderRadius:5,padding:"10px 40px",marginTop:"20px",display:"flex",}} onClick={props.onClick}>
        <div style={{display:"flex",alignItems:"center",paddingRight:10}}>
            {props.leftIcon}
        </div>
        {props.children}
        <div style={{display:"flex",alignItems:"center",paddingLeft:10}}>
            {props.rightIcon}
        </div>
    </div>
}