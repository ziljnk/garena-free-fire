<script setup>
import Header from '@/components/Header.vue';
</script>
<template>
    <Header/>
    <main>
        <img alt="icon" src="https://icons.veryicon.com/png/o/miscellaneous/8atour/submit-successfully.png"/>
        <h2>Thành công!</h2>
        <p>Bạn đã giúp <span class="name">Duylinh2805</span> thành công. </p>
        <span>Phần thưởng <b>(10 kim cương)</b> sẽ được gửi vào tài khoản của bạn.</span>
    </main>
</template>

<style scoped>
main {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

main img {
    width: 20%;
}

p {
    margin: 0;
    margin-top: 10px;
    text-align: center;
}

h2 {
    margin-bottom: 0;
}

span {
    text-align: center;
}

.name {
    font-weight: bold;
    color: #d43831;
}
</style>