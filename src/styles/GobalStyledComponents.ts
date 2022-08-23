import styled from 'styled-components';


export const ContBox=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:30px;
    gap:6rem;
    .title{
        color:#002B5B;
        font-weight:bold;
        font-size:48px;
        animation: bounce; 
        animation-duration: 2s;
    }
    >span{
        color:#002B5B;
        font-weight:400;
        font-size:20px
    }
`;

export const Button=styled.button`
    background-color:#256D85;
    border:1px solid #256D85;
    color:#8FE3CF;
    cursor:pointer;
    width:80px;
    height:30px
`;