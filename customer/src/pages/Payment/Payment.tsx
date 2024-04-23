import React, { useEffect, useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Payment.css"
import Back from '@/components/Back';
import { CartMenue } from '../Interface/CartMenueInterFace';
import { useNavigate } from 'react-router';
import GooglePayButton from "@google-pay/button-react"

interface parentcart {
    CartList: CartMenue[];
    setCartList: React.Dispatch<React.SetStateAction<CartMenue[]>>;
}


const Payment: React.FC<parentcart> = ({ CartList, setCartList }) => {
    const [totalPrice, setTotalPrice] = useState<string>("0.00"); // Initialize as string
    
    useEffect(() => {
        let tp = 0;
        CartList.forEach((value) => {
            if(value.quantity>0){
                tp += value.price*value.quantity
              } else {
                tp += value.price
              }
         
        });
        const gst = (18 * tp) / 100;
        const gatewayCharges = (1.6 * tp) / 100;
        const total = tp + gst + gatewayCharges;
        setTotalPrice(total.toFixed(2)); // Format total price with two decimal places
    }, [CartList]); // Ensure the effect runs when CartList changes

    const [phone, setPhone] = useState<string>("91");
    const history = useNavigate();

    const handlePaymentAuthorized = (paymentData: google.payments.api.PaymentData): google.payments.api.PaymentAuthorizationResult => {
        console.log('Payment authorized:', paymentData);
        history("/PaymentSuccess");
        return { transactionState: 'SUCCESS' };
    };
console.log(CartList);

//



//

    return (
        <Back>
            <div style={{
                position: "relative",
                zIndex: "4",
                marginTop: "10%", backgroundColor: "transparent",
                padding: "8%"
            }} className='backcolor phoneparint' >
                <h1 style={{
                    width: "100%",
                    fontSize: "150%",
                    textAlign: "center",
                }} className='Popins' >Tell Us About Yourself</h1>
                <h2
                    className='PopinsRegular'
                    style={{
                        fontSize: "16px",
                        marginTop: "8%"
                    }}>
                    Share a few more details about yourself, allowing us to tailor your app experience to suit your needs.
                </h2>
                <div className='BillFullName'>
                    <h3>Full Name</h3>
                    <input style={{
                        marginTop: '10px',
                        width: '100%',
                        height: '60px',
                        outline: 'none',
                        padding: '24px',
                        borderRadius: '12px',
                        border: 'solid',
                        borderColor: 'gray',
                        borderWidth: '1px'
                    }} type="text" name="" id="" />
                </div>
                <div className='phonenumer'>
                    <h3>Mobile Number</h3>
                    <PhoneInput
                        country={"us"}
                        value={phone}
                        onChange={(value) => setPhone(value)} />
                </div>
                <div className='billcontinuebutton'
                    onClick={() => {
                        history("/Bill")
                    }}>
                    <h1>Make payment</h1>
                </div>
             <div
             className='googlepay'
             >
             <GooglePayButton


                    environment="TEST"
                    buttonType='pay'
                    buttonColor="white"
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                            {
                                type: 'CARD',
                                parameters: {
                                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                },
                                tokenizationSpecification: {
                                    type: 'PAYMENT_GATEWAY',
                                    parameters: {
                                        gateway: 'example',
                                        gatewayMerchantId: 'exampleGatewayMerchantId',
                                    },
                                },
                            },
                            
                        ],
                        merchantInfo: {
                            merchantId: '12345678901234567890',
                            merchantName: 'Demo Merchant',
                        },
                        transactionInfo: {
                            totalPriceStatus: 'FINAL',
                            totalPriceLabel: 'Total',
                            totalPrice: totalPrice,
                            currencyCode: 'INR', // Set currency code to INR for Indian Rupees
                            countryCode: 'IN', // Set country code to IN for India
                            transactionNote: 'Payment for order #123456',
                        },
                        callbackIntents: ['PAYMENT_AUTHORIZATION']
                    }}
                    onPaymentAuthorized={handlePaymentAuthorized} // Handle payment authorization
                    onLoadPaymentData={PaymentRequest => {
                        console.log("success", PaymentRequest);
                    }}/>
             </div>
            </div>
        </Back>
    );
}

export default Payment;
