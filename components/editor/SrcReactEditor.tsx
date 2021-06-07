import {ReactEditor} from "./ReactEditor";
import useSWR from "swr";
import {fetchStatic} from "../util/fetch";

type Props = {
  js: string
  css?: string
  className?:string
}

export const SrcReactEditor = (props: Props) => {
  const js = useSWR(props.js, fetchStatic);
  const css = useSWR(props.css || null, fetchStatic);

  return (
    <ReactEditor
      className={props.className}
      code={{
        js: js.data || "",
        css: css.data || "",
      }}
      css={props.css !== undefined}
    />
  )
}