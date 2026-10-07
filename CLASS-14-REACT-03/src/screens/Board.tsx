import { Appbar } from "../components/Appbar";

export function Board() {
    return <div>

        <Appbar />
        <div style={{display:"flex"}}>
            <div style={{flex:1, borderRight:"1px dotted black",minHeight:"80vh"}}>
                
            </div>
            <div style={{flex:1, borderRight:"1px dotted black",minHeight:"80vh"}}>
              
            </div>
            <div style={{flex:1, borderRight:"1px dotted black",minHeight:"80vh"}}>
            
            </div>
        </div>
    </div>
}