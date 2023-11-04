import React, { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./EditorTools";
import "./Editor.css";

type Props = {
    data: any;
    onChange: React.Dispatch<React.SetStateAction<any>>;
    editorblock: string;
}

const Editor = ({ data, onChange, editorblock }: Props) => {
    const ref = useRef();

    useEffect(() => {

        if (!ref.current) {
            const editor = new EditorJS({
                holder: editorblock,

                tools: EDITOR_JS_TOOLS,
                data: data,
                placeholder: "Untitle!",
                inlineToolbar: true,
                async onChange(api, event) {
                    const data = await api.saver.save();
                    onChange(data);
                },
            });
            ref.current = editor;
        }


        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, []);
    return <div id={editorblock} />;
};

export default memo(Editor);