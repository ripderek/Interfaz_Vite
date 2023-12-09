import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link, NavLink,useNavigate } from "react-router-dom";

//import Router from "next/router";

export function Login() {
    const navigate = useNavigate();
    //funcion para logear y redirigir al menu principal
    const IncioSesion = () => {
        //Router.push("/Inicio");
        navigate('/dashboard/home');
        //alert('Enviar a la ventana de inicio');
    }
    return (
        <div className=" w-full h-full ">
            <Card color="transparent" shadow={false} className="mx-auto w-full max-w-[24rem] mt-10 shadow-xl p-6 border-blue-gray-50 border border-solid text-center">
                <div className="p-2 mx-auto">
                    <img
                        className="h-10"
                        src="/img/Extintor_logo.png"
                        alt="User image"
                    />
                </div>
                <Typography variant="h4" color="blue-gray">
                    Iniciar Sesion
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Ir a la aplicación de formularios
                </Typography>
                <form className="mt-8 mb-2   ">
                    <div className="mb-1 flex flex-col gap-6">
                        <Input
                            variant="outlined"
                            label="Correo Institucional"
                            size="lg"
                        />
                        <Input
                            type="password"
                            label="Contraseña"
                            size="lg"
                            placeholder="********"
                        />
                    </div>

                    <Button className="mt-6 bg-light-green-900 font-bold " fullWidth onClick={IncioSesion}>
                        Aceptar
                    </Button>
                    <div className="h-auto bg-gray-200  flex items-center justify-center mt-4 cursor-pointer text-center rounded-lg mx-auto">
                        <div className="p-2">
                            <img
                                className="h-7 w-7 rounded-full"
                                src="/img/Google.png"
                                alt="User image"
                            />
                        </div>
                        <div className="ml-2 font-bold text-blue-gray-600">
                            Continuar con Google
                        </div>
                    </div>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        ¿No recuerda su contraseña?{" "}
                        <a href="#" className="font-medium text-gray-900">
                            Recuperar acceso
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}

export default Login;
