<script setup>
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue';
import { ref } from 'vue';

const router = useRouter()
let id = ref('')

let handleSubmitForm = () => {
    if (!id.value) {
        document.querySelector('.field').classList.add('error');
    } else {
        router.push('/success')
    }
}
</script>

<template>
    <Header />
    <main>
        <div class="field required">
            <input v-model="id" type="number" placeholder="Nhập ID người chơi của bạn bè">
            <div class="message">Nhập ID người chơi của bạn bè</div>
        </div>

        <div class="field">
            <button class="primary" @click="handleSubmitForm">Giúp bạn bè</button>
        </div>
    </main>
</template>

<style>
.field {
    position: relative;
    margin-top: 20px;
    padding-inline: 20px;
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

input {
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
