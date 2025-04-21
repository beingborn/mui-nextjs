
import {css} from '@emotion/css'

export default function Sidebar() {
    return (
        <aside className=
            {
                css`
                flex-basis: 260px;
                background-color: #dbdfeb;

                .logo-wrap {
                    border-bottom: 1px solid #ddd;
                }
                `
            }
        >
            <div className="logo-wrap">
                <h1 className="logo">
                    ADMIN
                </h1>
            </div>

        </aside>    
    )
}