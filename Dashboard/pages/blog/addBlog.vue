<template>
    <div>
        <h1 class="text-lg font-semibold mb-10">Thêm tin tức</h1>
        <form class="bg-white p-8">
            <div class="mb-8">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                >
                    Tiêu đề:
                </label>
                <!-- <ValidationProvider
                    rules="required"
                    :custom-messages="customErrorMessages.name"
                    v-slot="{ errors }"
                > -->
                <input
                    placeholder="Tiêu đề bài viết..."
                    type="text"
                    v-model="newBlog.title"
                    class="appearance-none border border-black  
                        rounded w-2/5 py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <!-- <p class="mt-1 text-sm italic text-red-500">
                        {{ errors[0] }}
                    </p> -->
                <!-- </ValidationProvider> -->
            </div>

            <div class="mb-8">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                >
                    Ảnh:
                </label>
                <!-- <ValidationProvider
                    rules="required"
                    :custom-messages="customErrorMessages.name"
                    v-slot="{ errors }"
                > -->
                <input type="file" @change="onImageChange" />
                <!-- <p class="mt-1 text-sm italic text-red-500">
                        {{ errors[0] }}
                    </p> -->
                <!-- </ValidationProvider> -->
            </div>

            <div class="mb-8">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                >
                    Tóm tắt bài viết:
                </label>
                <!-- <ValidationProvider
                    rules="required"
                    :custom-messages="customErrorMessages.name"
                    v-slot="{ errors }"
                > -->
                <textarea
                    id="about"
                    name="about"
                    rows="3"
                    v-model="newBlog.summary"
                    class="appearance-none border border-black  
                        rounded w-2/5 py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Tóm tắt bài viết..."
                >
                </textarea>
                <!-- <p class="mt-1 text-sm italic text-red-500">
                        {{ errors[0] }}
                    </p> -->
                <!-- </ValidationProvider> -->
            </div>

            <div class="mb-8">
                <label class="block mb-4">Danh mục</label>
                <!-- <ValidationProvider
                    rules="required"
                    :custom-messages="customErrorMessages.category"
                    v-slot="{ errors }"
                > -->
                <select
                    class="w-2/5 border border-solid border-gray-300 
                        focus:ring-indigo-500 focus:border-indigo-500 h-full py-2 pl-2 pr-7 
                        border-transparent bg-transparent text-gray-500 sm:text-sm"
                    v-model="newBlog.category"
                >
                    <option
                        v-for="option in categoryOptions"
                        :value="option.id"
                        :key="option.id"
                        v-html="option.name"
                    >
                    </option>
                </select>
                <!-- <p class="mt-1 text-sm italic text-red-500">
                        {{ errors[0] }}
                    </p> -->
                <!-- </ValidationProvider> -->
            </div>

            <div class="mb-8">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                >
                    Nội dung bài viết:
                </label>
                <div
                    style="min-height:150px;"
                    class="quill-editor"
                    :content="content"
                    @change="onEditorChange($event)"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)"
                    v-quill:myQuillEditor="editorOption"
                ></div>
                <!-- <p class="mt-1 text-sm italic text-red-500">
                        {{ errors[0] }}
                    </p> -->
                <!-- </ValidationProvider> -->
            </div>

            <div class="mb-8">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                >
                    Tình trạng bài viết:
                </label>

                <div class="flex items-center">
                    <input
                        class="mx-2"
                        value="1"
                        name="hidden"
                        type="radio"
                        v-model="newBlog.hidden"
                    />
                    Ẩn
                    <input
                        class="mx-2"
                        value="0"
                        name="hidden"
                        type="radio"
                        v-model="newBlog.hidden"
                    />
                    Hiện
                </div>
            </div>

            <div class="mb-8">
                <button
                    @click.prevent="addNewBlog()"
                    class="mr-4 inline-block text-center lg:text-none py-2 px-10 text-md rounded-md 
                    text-white bg-blue-600 hover:bg-blue-800 transition-all duration-500"
                >
                    Thêm bài viết
                </button>
            </div>
        </form>
        <Alert
            :visible="alert.isVisible"
            :alertType="alert.type"
            :message="alert.message"
        />
    </div>
</template>

<script>
import Alert from '@/components/UIcomponents/Alert.vue';
import util from '@/helpers/util.js';
export default {
    middleware: ['unAuthenticated'],
    components: {
        Alert
    },
    data() {
        return {
            alert: {
                type: '',
                message: '',
                isVisible: false
            },
            content: '',
            newBlog: {
                title: '',
                summary: '',
                category: '',
                thumbnail: '',
                hidden: 0
            },
            categories: [],
            editorOption: {
                placeholder: 'Nhập nội dung bài viết',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        // Bold, italic, underline, strikethrough
                        ['blockquote', 'code-block'],
                        // Reference, code block

                        [{ header: 1 }, { header: 2 }],
                        // Title, the form of key-value pairs; 1, 2 represents the font size
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        // list
                        [{ script: 'sub' }, { script: 'super' }],
                        // superscript and subscript
                        [{ indent: '-1' }, { indent: '+1' }],
                        // indent
                        [{ direction: 'rtl' }],
                        // text direction

                        [{ size: ['small', false, 'large', 'huge'] }],
                        // font size
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        // Several levels of title

                        [{ color: [] }, { background: [] }],
                        // font color, font background color
                        [{ font: [] }],
                        // font
                        [{ align: [] }],
                        // alignment

                        ['clean'],
                        // Clear font style
                        ['image', 'video']
                        // Upload pictures, upload videos
                    ]
                }
            }
        };
    },
    async created() {
        try {
            const response = await this.$services.Category.all('blog');
            this.categories = response.data;
        } catch (error) {
            console.log(error);
        }
    },
    computed: {
        categoryOptions() {
            const tree = this.categories;
            return util.recursiveCategory(tree, '&nbsp;&nbsp;');
        }
    },
    methods: {
        async addNewBlog() {
            try {
                let formData = new FormData();
                formData.append('blog_content', this.content);
                formData.append('title', this.newBlog.title);
                formData.append('summary', this.newBlog.summary);
                formData.append('cate_id', this.newBlog.category);
                formData.append('thumbnail', this.newBlog.thumbnail);
                formData.append('hidden', this.newBlog.hidden);
                await this.$axios.post(process.env.BASE_URL + '/blog', formData);
                this.content = '';
                this.newBlog.title = '';
                this.newBlog.summary = '';
                this.newBlog.category = '';
                this.newBlog.thumbnail = '';
                this.newBlog.hidden = 0;
                this.alertTrigger('success', 'Thêm bài viết thành công !', 2000);
            } catch (error) {
                console.log(error);
            }
        },
        alertTrigger(type, msg, ms) {
            this.alert.isVisible = true;
            this.alert.message = msg;
            this.alert.type = type;
            setTimeout(_ => {
                this.alert.isVisible = false;
            }, ms);
        },
        onImageChange($event) {
            this.newBlog.thumbnail = $event.target.files[0];
        },
        onEditorBlur(editor) {
            // console.log("editor blur!", editor);
        },
        onEditorFocus(editor) {
            // console.log("editor focus!", editor);
        },
        onEditorReady(editor) {
            // console.log("editor ready!", editor);
        },
        onEditorChange({ editor, html, text }) {
            // console.log("editor change!", editor, html, text);
            this.content = html;
        }
    }
};
</script>

<style></style>
