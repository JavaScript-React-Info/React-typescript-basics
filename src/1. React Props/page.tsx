import Button from "./button";

export default function Home(){
    const onClick = (test: string) => {return 123}
    return(
        <main className="home-class">
            {/* <Button backgroundColor="red" fontSize={16} buttonEnabled = {true}/> */}
            <Button 
            backgroundColor="red" 
            fontSize={16}
            style={{
                backgroundColor: "blue",
                fontSize: 24,
                color: "white",
                borderColor: "red"
            }}
            borderRadius= {{
                "topLeft": 5,
                "topRight": 5
            }}
            onClick={onClick}
            >
                Click me
            </Button>
        </main>
    )
}