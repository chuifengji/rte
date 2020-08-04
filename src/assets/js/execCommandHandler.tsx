import { setTitle } from './util'

let execCommandHandler = (cmd: string, aValueArgument?: string, aShowDefaultUI?: boolean) => {
    console.log(cmd, aValueArgument)
    if (cmd === ("bold" || "insertorderedlist" || "insertunorderedlist" || "italic")) {
        document.execCommand(cmd, false, null);
    } else if (cmd === 'forecolor') {
        document.execCommand(cmd, false, aValueArgument);
    } else if (cmd === 'setTitle') {
        setTitle(aValueArgument);
    }
    console.log(cmd);
}

export {
    execCommandHandler
}
