import {PropsWithChildren} from "react";

type Props = PropsWithChildren<{
  title: string
}>
export const Details = (props: Props) => {
  const {
    title,
    children
  } = props
  return (
    <details>
      <summary className={'w-max'}>{title}</summary>
      {children}
    </details>
  )
}