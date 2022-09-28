import { useState } from "react"

export const RazerPayComponent = () => {
    const [amount,setAmount] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(amount === 0) alert("Please Enter the Amount")
        else{
            const options = {
                key: "rzp_test_cmGuuAd3iINOA7",
                key_secret:"FMBsyDJASXcaurRvXXBRjzuu",
                amount: amount *100,
                currency: "INR",
                name: "Test Gateway",
                description: "Test Transaction",
                handler: async function (response) {
                    const data = {
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    };
        
                    console.log(data);
                },
                prefill: {
                    name: "Bhuvanesh",
                    email: "bhu@gamil.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "Bhu Corporate Office",
                },
                theme: {
                    color: "#61dafb",
                },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        
        }


    }

    

    return <>
        <input placeholder="Enter Your Amount" value={amount} onChange={(e) => {
            setAmount(e.target.value)
        }}></input>
        <button type="submit" onClick={handleSubmit}>Pay</button>
    </>
}