import styled from 'styled-components';

interface Props{ 
    backgroundColor?: string
    border?:string
}
export const ContBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:30px;
    gap:6rem;
    .title{
        color:#ffffff;
        font-weight:bold;
        font-size:48px;
        animation: bounce; 
        animation-duration: 2s;
    }
`;
export const Span = styled.span`
        color:#ffffff;
        font-weight:400;
        font-size:20px
`;
export const Button = styled.button`
    border:${({border}: Props)=>border?border:'1px solid #256D85'};
    color:#8FE3CF;
    cursor:pointer;
    width:80px;
    height:30px;
    border-radius: 3px;
    background-color:${({ backgroundColor }: Props) => backgroundColor ? backgroundColor : '#256D85'};
`;
export const QuestionCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    padding-top: 20px;
    >div{
        color:#ffffff;
        font-weight:bold;
        font-size:48px;
    }
`;
export const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
`;