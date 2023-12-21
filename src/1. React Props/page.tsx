import { useState } from "react";
import Button from "./button";

export default function Home(){
    return(
        <main className="home-class">
            {/* <Button backgroundColor="red" fontSize={16} buttonEnabled = {true}/> */}
            <Button 
            type="submit"
            autoFocus={true}
            defaultValue="test"
            />
        </main>
    )
}