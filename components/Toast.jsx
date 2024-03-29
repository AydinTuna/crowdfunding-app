import toast, { Toaster } from 'react-hot-toast';


function Toast({ message, type }) {
    if (type === "error") return toast.error(message)
    else if (type === "success") return toast.success('Successfully toasted!')
    return (
        <>
            {/* <button className="text-black bg-white w-full" onClick={() => notify(message, type)}>Make me a toast</button> */}
            <Toaster position="bottom-right" reverseOrder={false} />
        </>
    );
}

export default Toast;
