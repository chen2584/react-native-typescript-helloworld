import React, { Fragment } from 'react'
import { Text } from 'react-native'

export interface Props {
}

interface State {
}

export default class PdfViewer extends React.Component<Props, State> {
    render() {
        return (
            <Fragment>
                <Text>Hello Pdf Viewer</Text>
            </Fragment>
        )
    }
}