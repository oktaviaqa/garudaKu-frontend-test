<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        <button @click="saveChanges">Save Changes</button>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: 'app',
    data() {
        return {
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // The configuration of the editor.
            }
        };
    }
}
</script>
