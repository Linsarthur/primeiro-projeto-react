import {useForm} from "react-hook-form";
import Rodape from "../components/Rodape.jsx";
import {Button} from "react-bootstrap";

export default function Contato() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    function cadastrar(data) {
        console.log(data);
    }

    return (
        <>
            <main>
                <form className={"form-section"} onSubmit={handleSubmit(cadastrar)}>
                    <h1>Contato!</h1>
                    <hr/>
                    <div>
                        <label htmlFor={"nome"}>Nome:</label>
                        <input type={"text"} id={"nome"} className={"form-control"}
                               {...register("nome", {required: true, maxLength: 150})}/>
                    </div>
                    {errors.nome && <small className={"invalid"}>Digite seu nome!</small>}
                    <div>

                        <label htmlFor={"email"}>Email:</label>
                        <input type={"email"} id={"email"} className={"form-control"}
                               {...register("email", {required: true, maxLength: 150})}/>

                    </div>
                    {errors.email && <small className={"invalid"}>Digite seu e-mail!</small>}

                    <div>
                        <label htmlFor={"feedback"}>Deixe seu Feedback:</label>
                        <textarea className={"form-control"} id={"descricao"} {...register("descricao", {
                            required: true,
                            maxLength: 500
                        })}></textarea>
                    </div>
                    <Button variant={"dark"} className={"mt-1 w-100"} type={"submit"}>Enviar</Button>

                </form>


            </main>
            <Rodape/>

        </>


    )


}