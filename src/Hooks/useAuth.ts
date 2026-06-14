import {useState} from "react";

interface LoginData{
    email:string;
    password:string;
}

interface LoginResponse{
    ok: boolean;
    message: string;
    data?:{
        id:string;
        name:string;
        email:string;
    };
}

export function useAuth(){
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState<string | null>(null);

    const login = async (loginData: LoginData) =>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("http://localhost:3000/api/authRoutes/login",
                {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify(loginData),
                });

            const data: LoginResponse = await response.json();

            if (!response.ok) {
                setError(data.message);
                return data;
            }

            return data;

        } catch (error) {
            setError(error instanceof Error ? error.message: "Ocurrió un error inesperado");
            return null;
        }finally{
            setLoading(false);
        }
    };

    return{
        login,
        loading,
        error,
    };


}
