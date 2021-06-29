import clsx from "clsx";
import {Code} from "./type";

type Props = {
  className?: string
  code: Code
}

export const ReactPreviewer = (props: Props) => {
  return (
    <iframe
      className={clsx(props.className)}
      srcDoc={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <style type="text/css">
    ${props.code.css}
    </style>
    <title></title>
</head>
<body>
<div id="root"></div>
<script type="javascript">
    window.onerror = event => {
      console.log('hello', event)
    }
</script>
<script type="text/babel">
  try {
    ${props.code.js}
  } catch (e) {
    ReactDOM.render(
      <div>{e.message}</div>,
      document.getElementById('root')
    )
  }
</script>
</body>
</html>`}/>
  )
}