import AuthForm from "../components/AuthForm";

const RegisterFields = [
    {
        name: "Username",
        label: "Nombre de Usuario",
        type: "text",
    },
    {
        name: "email",
        label: "Correo Electrónico",
        type: "email",
    },
    {
        name: "password",
        label: "Contraseña",
        type: "password",
    },
    {
        name: "confirmpassword",
        label: "Confirmar Contraseña",
        type: "password",
    },
];

const Register = () => {
    return(
        <AuthForm
            title="Sign Up"
            subtitle="Regístrate en nuestra aplicación ingresando tus datos"
            fields={RegisterFields}
            buttonText="Registrarse"
            linkto="/login"
            linkText="¿Ya tienes cuenta? Inicia sesión"
        />
    );
};

export default Register