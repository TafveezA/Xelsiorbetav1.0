import logo from'../Images/xumm_logo.svg';
import qr from'../Images/dummy_qr_code.png';
const QR_Xumm = () => {
    return (<div className="qr-xumm" style={{ height:'100%',  display: 'flex', flexDirection: 'column',  alignItems: 'center', gap: '15px'}} >
        <div className="qr-xumm__title" style={{ textAlign: 'center'}}>
            <span>Connect with <img src={logo} width={80} /> Wallet
            </span>
        </div>
        <div className="qr-xumm__desc">
            Add an account from a XUMM Wallet
        </div>
        <div>
            <img src={qr} style={{width: '20vw'}}/>
        </div>
    </div>)
};

export default QR_Xumm;