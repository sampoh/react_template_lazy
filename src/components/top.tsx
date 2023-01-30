import {Fragment} from 'react'

const Top = () => {
    return (
        <Fragment>
            <h1>TOP page</h1>
            <table className="warning-table">
                <thead>
                    <tr>
                        <th colSpan={2}>ビルド時の注意</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>Apache</td>
                        <td>Rewrite等で実ファイルが無いリクエストは全てindex.htmlを参照するようにしないと動作しないので注意。</td>
                    </tr>
                    <tr>
                        <td>4D</td>
                        <td>On Web Connection で常時 WEB SEND FILE("index.html") とする必要あり。</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default Top;
