import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Table from "@editorjs/table";

class ReadOnly {
    static get toolbox() {
        return {
            title: 'ReadOnly',
            icon: ''
        };
    }

    constructor({ data }) {
        this.data = data;
    }

    render() {
        const elem = document.createElement('p');
        elem.textContent = this.data.text;
        elem.style.opacity = "0.4";
        return elem;
    }

    save() {
        return {
            text: this.data.text
        }
    }
}


export const EDITOR_JS_TOOLS = {
    paragraph: {
        class: Paragraph,
        inlineToolbar: true,
    },
    list: List,
    header: Header,
    table: Table,
    ReadOnly: ReadOnly
};