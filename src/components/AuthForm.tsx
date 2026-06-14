
type AuthField={
    name:string;
    label: string;
    type:string;
};

type AuthFormProps = {
    title: string;
    subtitle: string;
    fields: AuthField[];
    buttonText: string;
    linkText?:string;
    linkto?:string;
};

const AuthForm = ({title,subtitle,fields,buttonText,linkText,linkto}:AuthFormProps)=>{
    return(
        <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6">
            <div className="w-full max-w-[720px] min-h-[520px] bg-[#02387E] flex flex-col items-center px-8 py-12">
                <h1 className="mb-8 text-sm text-gray-400 self-start">
                    {title}
                </h1>
                <div className="mb-10 flex items-center gap-2">

                    <img src="/CysamLogo.png" alt="Logo Cysam" className="w-32 h-auto" />

                    <h2>

                    </h2>
                </div>

                <p className="mb-10 text-center text-xs text-white">{subtitle}</p>

                <div className="w-full max-w-[260px] flex flex-col gap-4">
                    {fields.map((field)=>(
                        <div key={field.name} className='flex flex-col gap-2'>
                            <label htmlFor={field.name} className='text-[10px] text-white font-semibold'>{field.label}</label>
                            <input
                                id={field.name}
                                name = {field.name}
                                type={field.type}
                                className="h-10 rounded-lg bg-[#dedede] px-3 text-sm outline-none"
                            />
                        </div>
                    ))}

                    <button type='button' className='mt-2 h-8 rounded-lg bg-[#D7AD4F] text-xs font-semibold text-white hover:bg-[#051F41]'>{buttonText}</button>

                    {linkto && (
                        <a href={linkto} className="text-center text-xs text-white hover:text-[#D7AD4F]">{linkText}</a>
                    )}

                </div>
            </div>
        </div>
    );
}

export default AuthForm