import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
height: 50px;
background: #262626;
display: flex;
box-sizing: border-box;
justify-content: center;
h3 {
    transition: all ease 1s;
    color: white;
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: 100;
    &:hover {
        color: purple;
    }
}
.nav {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}`

const A = styled.a`
text-decoration: none;`

const Header = () => {
    return (
        <Wrapper>
            <div className="nav">
                <A href='#skills'>
                    <h3>skills</h3>
                </A>
                <A href='#portfolio'>
                    <h3>portfolio</h3>
                </A>
                <A href='#about'>
                    <h3>about</h3>
                </A>
                <A href='#contact'>
                    <h3>contact</h3>
                </A>
            </div>
        </Wrapper>
    )
}

export default Header