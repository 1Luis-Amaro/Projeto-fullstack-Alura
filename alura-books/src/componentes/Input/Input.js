import styled from "styled-components";

const Input = styled.input`
 border: 1px solid #FFF;
        background: transparent;
        border: 1px solid #FFF;
        padding: 20px 140px;
        border-radius: 50px;
        width: 200px;
        color: #FFF;
        font-size: 16px;
        margin-bottom: 10px;
        transition: all 0.3s ease;
        
        

        &::placeholder {
                color: rgba(255, 255, 255, 0.3);
                transition: color 0.3s ease;
                padding: 40px;
                display: flex
                justify-content: center;
                align-items:
        }


        &:focus::placeholder {
                color: #fff; /* Quando focado, placeholder fica branco */
        }

         &:focus {
                background: transparent; /* Mantém fundo transparente no foco */
                outline: none;
        }
                
}
`;

export default Input;
