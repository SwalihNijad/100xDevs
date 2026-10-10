import { AuthBanner } from "../components/AuthBanner";
import { AuthCredentials } from "../components/AuthCredentials";

export function Auth() {
    return <div style={{display: "flex"}}>
        <div style={{flex: 4}}>
            <AuthBanner />
        </div>
        <div style={{flex: 6}}>
            <AuthCredentials />
        </div>


        <div>hey there</div>
        <div>This is test code</div>

        <div>This is second test</div>
        <div>supart of this one</div>
        
    </div>
}