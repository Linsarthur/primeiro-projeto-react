import { Card} from "react-bootstrap";
import Rodape from "../components/Rodape.jsx";


function NotFound () {
    return (
        <>
        <main className={"mt-3"}>

            <Card className={"form-section"}>
                <Card.Title className={"form-control"}>Página não encontrada.</Card.Title>
                <Card.Text className={"form-control"}>Página não encontrada. 404 :x</Card.Text>
            </Card>

        </main>

        <Rodape/>
        </>
    )
}

export default NotFound;