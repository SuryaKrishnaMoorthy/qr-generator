import React from "react";
import QRCode from "qrcode.react"

const QrCode = (props) => { 
    console.log("props in code", props.qrValue)       
    return props.qrValue ? <QRCode style={{marginLeft: "45%"}} value={props.qrValue} /> : null;
}

export default QrCode;