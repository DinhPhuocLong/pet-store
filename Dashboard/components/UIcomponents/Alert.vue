<template>
    <transition enter-active-class="alert">
        <div
            v-if="visible"
            :class="type"
            class="w-96 flex py-2 px-3 border-l-4 shadow-md mb-2 fixed top-8 left-2/4 transform -translate-x-2/4"
            style="z-index: 9999999"
        >
            <!-- icons -->
            <div
                class="rounded-full bg-white mr-3"
                v-html="alertIcon"
            ></div>
            <!-- message -->
            <div class="text-white max-w-xs ">
                {{ message }}
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['message', 'alertType', 'visible'],
    data() {
        return {
            successSvg: `<svg
                width="1.8em"
                height="1.8em"
                viewBox="0 0 16 16"
                class="bi bi-check"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                />
            </svg>`,
            errorSvg: `<svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                        </svg>`,
            alertIcon: '',
        };
    },
    computed: {
        type() {
            let type;
            switch (this.alertType) {
                case 'danger':
                    type = 'bg-red-500 border-red-700 text-red-500 ';
                    this.alertIcon = this.errorSvg;
                    break;
                case 'success':
                    type = 'bg-green-500 border-green-700 text-green-500 ';
                    this.alertIcon = this.successSvg
                    break;
                default:
            }
            return type;
        }
    }
};
</script>
<style scoped>
.alert {
    animation-name: fadeInDown;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
}

@-webkit-keyframes fadeInDown {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        -webkit-transform: translate3d(-50%, -100%, 0);
        transform: translate3d(-50%, -100%, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);
    }
}
</style>
