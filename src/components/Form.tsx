import { useForm } from "../hooks/useForm";

interface FormData {
    user: string,
    password: string,
}
interface MyProps {
    onSubmit: (data: FormData) => void;
}
export const Form = ({ onSubmit }: MyProps) => {

    const { formValues, handlerChange, resetForm } = useForm<FormData>({
        password: "",
        user: "",
    });

    return (
        <div>
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                onSubmit(formValues);

            }}>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" name="user" value={formValues.user} onChange={handlerChange} />
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" name="password" value={formValues.password} onChange={handlerChange} />
                <button>enviar</button>


                <button onClick={() => {
                    resetForm();
                }}>Reset Button </button>
            </form>
        </div>
    )
}
