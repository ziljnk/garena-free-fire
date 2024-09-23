<template>
    <header class="topbar">
        <div class="container">
            <a class="logo" href="https://www.garena.sg/">
                <img alt="Garena Logo" src="https://sso.garena.com/universal/assets/logo-9d415851.svg"/>
            </a>
        </div>

        <select class="lang">
            <option value="en-US">International - English</option>
            <option value="en-SG">Singapore - English</option>
            <option value="zh-SG">新加坡 - 简体中文</option>
            <option value="zh-TW">台灣 - 繁体中文</option>
            <option value="en-PH">Philippines - English</option>
            <option value="th-TH">ไทย - ไทย</option>
            <option value="id-ID">Indonesia - Bahasa Indonesia</option>
            <option value="vi-VN">Việt Nam - Tiếng việt</option>
            <option value="ru-RU">Россия - Русский</option>
            <option value="en-MY">Malaysia - English</option>
            <option value="pt-PT">Portugal - Português</option>
            <option value="es-ES">España - Español</option></select>
    </header>
</template>

<style scoped>
.topbar {
    background: #fff;
    border-bottom: .01rem solid #d9d9d9;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    box-sizing: border-box;
}

.logo img{
    max-width: 100%;
    display: block;
    height: 22.5px;
}

.lang {
    overflow: hidden;
    background: url('https://sso.garena.com/universal/assets/globe-55d5d6b1.svg') right center / contain no-repeat;
    border: none;
    color: transparent;
    line-height: .4rem;
    text-align: right;
    display: block;
    border-radius: .2rem;
    width: 20px;
    height: 20px;
}
</style>