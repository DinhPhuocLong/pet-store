<template>
    <div class="clear-both">
        <!-- Footer -->
        <footer class="w-full bg-gray-100">
            <div class="w-full border-b border-solid border-gray-200">
                <div class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto">
                    <div
                        class="md:grid md:grid-cols-2 md:py-6 lg:grid-cols-3 justify-center"
                    >
                        <div
                            class="text-center md:text-left flex flex-col md:flex-row md:gap-6 items-center md:border-r border-solid border-gray-300"
                        >
                            <div
                                class="p-3 text-center text-2xl border-2 border-solid border-red-500 rounded-full w-14 h-14 leading-12 inline-block"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M19 9.062s-5.188-.333-7 1.938c2-4.896 7-5.938 7-5.938v-2l5 4-5 4.019v-2.019zm-18.974 14.938h23.947l-11.973-11.607-11.974 
                                11.607zm1.673-14l10.291-7.488 3.053 2.218c.712-.459 1.391-.805 1.953-1.054l-5.006-3.637-11.99 8.725v12.476l7.352-7.127-5.653-4.113zm15.753 
                                4.892l6.548 6.348v-11.612l-6.548 5.264z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h2 class="text-xl font-bold">
                                    Tham gia nhận thư để được giảm giá 10%
                                    <br />
                                    cho đơn hàng tiếp theo!
                                </h2>
                            </div>
                        </div>

                        <div class="text-center">
                            <p
                                class="text-gray-400 font-bold px-10 text-base my-4"
                            >
                                Đăng ký nhận thư để nhận được <br />
                                thông tin mới nhất
                            </p>
                        </div>

                        <div class="col-start-1 col-end-3 lg:col-auto mt-4">
                            <form
                                class="flex items-center w-full mx-auto border border-solid border-gray-300 rounded-full"
                                style="max-width: 480px;"
                            >
                                <input
                                    type="text"
                                    class="w-full border-black rounded-l-full 
                        outline-none py-4 ml-10 bg-gray-100 text-sm font-bold
                        "
                                    placeholder="Địa chỉ email"
                                />
                                <span class="">
                                    <input
                                        type="submit"
                                        value="ĐĂNG KÝ"
                                        class="block relative top-0 
                            bg-black rounded-full px-4 leading-4 h-11 m-1
                            text-xs text-white
                            "
                                    />
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- information -->
            <div class="w-full border-b border-solid border-gray-200 pb-10">
            <div class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto mt-4">
                <div class="grid md:grid-cols-2 lg:grid-cols-4 md:items-end lg:items-start">
                    <div class="md:mb-10">
                        <div class="py-4 flex justify-center">
                            <img class="max-h-28"
                                src="../static/logo.png"
                                alt="">
                            <!-- <p class="text-sm font-medium text-gray-500 leading-6">If you have any question, please
                                contact
                                us
                                at
                                <a href="#" class="text-yellow-600">Longdpps10786@gmail.com.</a>
                            </p> -->
                        </div>
                        <p class="text-[13px] font-bold italic text-justify">
                            Cửa hàng PetMarket có rất nhiều mặt hàng cho thú cưng cần như: thức ăn, quần áo, đồ chơi... Không những có những thứ thiết yếu cửa hàng còn có nhiều dịch vụ chăm sóc sức khỏe và sắc đẹp cũng như chia sẻ những thứ hữu ích đến những người nuôi thú cưng.
                        </p>
                        <!-- <ul class="flex gap-3 mt-6">
                            <li>
                                <a href="#" class="bg-black inline-block w-9 h-9 rounded-full text-center leading-9
                                text-white hover:bg-yellow-500"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="#" class="bg-black inline-block w-9 h-9 rounded-full text-center leading-9
                                text-white hover:bg-yellow-500"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="#" class="bg-black inline-block w-9 h-9 rounded-full text-center leading-9
                                text-white hover:bg-yellow-500"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="#" class="bg-black inline-block w-9 h-9 rounded-full text-center leading-9
                                text-white hover:bg-yellow-500"><i class="fab fa-facebook-f"></i></a>
                            </li>
                        </ul> -->
                    </div>
                    <div class="mt-10 md:mt-0 md:mb-10">
                        <p class="text-black text-center lg:text-left font-bold text-lg py-4">Thông tin Pet-Market</p>
                        <div class="flex flex-col justify-center text-yellow-600">
                            <div class="flex flex-col md:flex-row items-center md:items-start mb-2">
                                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" fill="orange"/>
                                </svg>  
                                <span class="text-black text-sm font-bold">Đường Hậu Giang, Phường 9, Quận 6</span>
                            </div>
                            <div class="flex flex-col md:flex-row items-center md:items-start mb-2">
                                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" fill="orange"/>
                                </svg>
                                <span class="text-black text-sm font-bold">0909 96 82 92</span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10 md:mt-0 md:mb-10">
                        <p class="text-black font-bold text-lg py-4 text-center lg:text-left">Dịch vụ</p>
                        <div class="flex flex-col text-yellow-600">
                            <div class="flex flex-col md:flex-row items-center md:items-start mb-2">
                                <svg width="30" height="28" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M5 11v1h8v-7h-10v-1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3h-1c-.552 0-1-.448-1-1v-6h-2v-2h7v2h-3zm3 5.8c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-10v2h.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h5.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm1-5v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705zm-16-3h8v2h-8v-2z" fill="orange"/>
                                </svg>
                                <span class="text-black text-sm font-bold">Ship toàn quốc</span>
                            </div>
                            <div class="flex flex-col md:flex-row items-center md:items-start mb-2">
                                <svg width="30" height="28" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 2c5.519 0 10 4.481 10 10s-4.481 10-10 10-10-4.481-10-10 4.481-10 10-10zm2 12v-3l5 4-5 4v-3h-9v-2h9zm-4-6v-3l-5 4 5 4v-3h9v-2h-9z" fill="orange"/>
                                </svg>
                                <span class="text-black text-sm font-bold">Đổi hàng trong 7 ngày</span>
                            </div>
                            <div class="flex flex-col md:flex-row items-center md:items-start mb-2">
                                <svg width="30" height="28" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M3.848 19h-.848c-.796 0-1.559-.316-2.121-.879-.563-.562-.879-1.325-.879-2.121v-3c0-7.175 5.377-13 12-13s12 5.825 12 13v3c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879h-.848c-2.69 4.633-6.904 5-8.152 5-1.248 0-5.462-.367-8.152-5zm16.152-5.876c-.601.236-1.269-.18-1.269-.797 0-.304-.022-.61-.053-.915-1.761-.254-3.618-1.926-3.699-3.723-1.315 2.005-4.525 4.17-7.044 4.17 1.086-.699 1.839-2.773 1.903-3.508-.581 1.092-2.898 3.136-4.551 3.487l-.018.489c0 .619-.669 1.032-1.269.797v3.771c.287.256.632.464 1.041.594.225.072.412.224.521.424 2.206 4.046 5.426 4.087 6.438 4.087.929 0 3.719-.035 5.877-3.169-1.071.433-2.265.604-3.759.653-.37.6-1.18 1.016-2.118 1.016-1.288 0-2.333-.784-2.333-1.75s1.045-1.75 2.333-1.75c.933 0 1.738.411 2.112 1.005 1.9-.026 4.336-.334 5.888-2.645v-2.236zm-11-.624c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm6 0c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm5.478-1.5h1.357c-.856-5.118-4.937-9-9.835-9-4.898 0-8.979 3.882-9.835 9h1.357c.52-4.023 3.411-7.722 8.478-7.722s7.958 3.699 8.478 7.722z" fill="orange"/>
                                </svg>
                                <span class="text-black text-sm font-bold">Đặt hàng trực tuyến</span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10 md:mt-0 md:mb-10">
                        <p class="text-black font-bold text-lg py-4">Về chúng tôi</p>
                        <ul class="text-gray-400 tracking-tight text-base font-normal">
                            <li class="my-0.5 hover:text-yellow-500">
                                <nuxt-link class="text-black text-sm font-bold" to="/loai-tin/tin-tuc">Tin tức</nuxt-link>
                            </li>
                            <li class="my-0.5 hover:text-yellow-500">
                                <nuxt-link class="text-black text-sm font-bold" to="/gioi-thieu">Giới thiệu</nuxt-link>
                            </li>
                            <li class="my-0.5 hover:text-yellow-500">
                                <nuxt-link class="text-black text-sm font-bold" to="/lien-he">Liên hệ</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <div
                class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto text-center py-3 flex items-center justify-between"
            >
                <div>
                    <span class="text-black font-medium text-xs"
                        >@ 2021 FPT PETSTORE</span
                    >
                </div>
                <div>
                    <img
                        class="mx-auto mt-4 md:mt-0"
                        src="https://developers.momo.vn/images/favicon/ms-icon-310x310.png"
                        width="35px"
                        alt=""
                    />
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
