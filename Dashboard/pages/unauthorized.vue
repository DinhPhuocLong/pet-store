<template>
    <div class="wrapper">
        <div class="wrapper_content">
            <h1 class="wrapper_title">Dừng lại !!!</h1>
            <p class="wrapper_description">Bạn không có quyền truy cập</p>
            <img class="wrapper_img" src="@/static/catmouse.gif" alt="" />
            <nuxt-link class="wrapper_link" to="/login">
                Về trang đăng nhập
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'login'
};
</script>

<style scoped>
.wrapper {
    position: relative;
    height: 100vh;
    background-color: #327191;
}
.wrapper_content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    text-transform: uppercase;
}
.wrapper_title {
    font-size: 24px;
}
.wrapper_description {
    font-size: 20px;
}
.wrapper_link {
    font-size: 20px;
    padding: 0.5rem;
    background-color: #e62c2c;
    border-radius: 30px;
}
</style>
