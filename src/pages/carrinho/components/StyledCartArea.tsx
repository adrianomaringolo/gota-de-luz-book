import styled from "styled-components";

export const StyledCartArea = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  min-height: 100vh;
  background: url(/images/background-init.jpg) no-repeat 50% / cover;
  //height: 100vh;

  .cart-area {
    background: #fff;
    padding: 15px;
    max-width: 800px;
    height: fit-content;
    @media only screen and (min-width: 768px) {
      padding: 50px;
    }
  }
  .item {
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #eee;
    }

    .remove-button {
      width: 38px;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }

  input {
    padding: 5px;
    font-size: 1.2em;
  }

  .buy-button {
    background-color: #c7e2cb;
    &:hover {
      color: white;
      background-color: #618566;
    }
  }

  .product-name {
    display: block;
    @media only screen and (min-width: 500px) {
      display: inline-block;
    }
  }

  .title {
    font-size: 1.2em;
    margin-bottom: 0;
    margin-top: 0;
  }

  .title-description {
    font-size: 0.9em;
    color: #888;
    margin-top: 0;
  }

  .total-value {
    border-top: 1px solid #aaa;
    padding-top: 10px;
    margin-top: 10px;
    font-weight: bold;
  }

  .remove-button {
    color: #4d0303;
    padding: 5px;
    border: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .item-price {
    font-weight: bold;
    width: 85px;
    display: inline-block;
  }

  .buttonArea {
    text-align: right;
    margin-top: 20px;
  }
  button {
    padding: 15px;
    border: 1px solid #333;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    transition: background-color 0.5s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
