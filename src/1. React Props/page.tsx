import { useState } from "react";
import Button from "./button";

export default function Home(){
    return(
        <main className="home-class">
            <Button
            countValue={1}
            countHistory={[123]}
            />
        </main>
    )
}