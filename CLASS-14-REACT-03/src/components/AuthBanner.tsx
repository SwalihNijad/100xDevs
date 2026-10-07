import { Center } from "./Center";

export function AuthBanner() {
    return <div style={{minHeight: "100vh",backgroundColor:"black",color:"white",alignItems:"center",display: "flex"}}>
        <div style={{width:"100%"}}>z   
            <Center>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oxeYdBnm3Se47_dCc0NGbwlmmEG-qkmRGwQl818qQg&s=10" style={{borderRadius: "35px", height:"100px", width:"100px"}} alt="IMAGE" />
            </Center>

            <Center>
                <div  style={{display:"flex",justifyContent:"center",fontFamily:"Outfit",fontSize:"30px"}}>
                <div style={{textAlign:"center",padding:40}}>Build a board, get the job dont before anyone else!</div>
                </div>
            </Center>
            
        </div>
    </div>
}