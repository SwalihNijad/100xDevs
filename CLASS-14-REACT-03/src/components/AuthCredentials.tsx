import { Center } from "./Center";
import { Input } from "./input";
import { Button } from "./Button";

export function AuthCredentials() {
    return <div style={{minHeight:"100vh",display:"flex"}}>
       <div style={{width: "100%"}}>
        <Center>
            <div style={{fontSize: 30, padding:"100px",}}>
            Log in to Trello
            </div>
        </Center>
        <Center>
            Connect to Trello with:
        </Center>
        <Center>
            <Button leftIcon={<img style={{height:20}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0nHqS-LXdUu62uiPzZg37RWQv41ywew4SePXU5hJl6oJxAcH2Ohe9ms&s" />}>Google</Button>
        </Center>
        <Center>
            <div style={{padding:20}}>or continue with</div>
        </Center>
        <Center>
            <Input type="text" placeholder="Email" />
        </Center>
        <Center>
            <Input type="text" placeholder="Password" />
        </Center>
        <Center>
            <Button>Signup</Button>
        </Center>
        </div> 
    </div>
}