import "./Spinner.css"
export const Spinner = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center flex-col">
            <div className="lds-roller scale-150"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h1 className="text-center font-bold text-4xl block my-8">Cargando....</h1>
        </div>
    )
}
