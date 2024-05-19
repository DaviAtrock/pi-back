import 'dotenv/config';

export const ConfirmPass = async ({ pass, passConfirm }) => {

    const { createHmac } = await import('node:crypto');
    const hash = createHmac('sha512', process.env.SECRET_HASH_PASS).update(passConfirm).digest('hex');

    if(pass !== hash){
        return { status: false, errorMessage: "senha incorreta" };
    }

    return { status: true, pass: hash };
};