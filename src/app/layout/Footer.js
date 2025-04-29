import styled from '@emotion/styled'

const Copyright = styled.div`
    height: 60px;
    background-color: #eee;
    text-align: center;
    align-content: center;
`
export default function Footer(){
    return (
        <footer>
            <Copyright>
                <p>© Copyright 2025. All right reserved. Template by ITPUB.</p>
            </Copyright>
        </footer>
    )
}