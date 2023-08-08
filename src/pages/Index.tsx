import { Text } from "@mantine/core";
import Navbar from "../components/Navbar";
import Botttombar from "../components/Bottombar";

function Index(){
    return (
        <>
            {/* <Navbar /> */}
            <Navbar showProfileButton={false} />
            <Text>Index Page</Text>
            <Botttombar />
        </>

    );
}

export default Index;