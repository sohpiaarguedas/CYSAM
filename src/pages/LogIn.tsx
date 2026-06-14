import AuthForm from "../components/AuthForm";

const LoginFields = [
    {
        name: "email",
        label: "Escribe tu correo electrónico",
        type: "email",
    },
    {
        name: "password",
        label: "Digite su contraseña",
        type: "password",
    }
];

const Login = () =>{
    return(
        <AuthForm
            title="Login"
            subtitle="Inicia sesión en nuestra aplicación ingresando tus datos"
            fields={LoginFields}
            buttonText="Iniciar Sesión"
            linkto="/register"
            linkText="¿No tienes una cuenta? ¡Regístrate con nosotros!"
        />
    );
};

export default Login