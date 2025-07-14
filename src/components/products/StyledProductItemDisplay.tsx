import styled from 'styled-components'

export const StyledProductItemDisplay = styled.div`
  @media only screen and (min-width: 768px) {
    min-width: 300px;
  }

  position: relative;
  overflow: hidden;
  flex: 1;
  min-width: 200px;
  max-width: 500px;
  width: 100%;
  margin: 3px;

  &:hover {
    .productText {
      opacity: 1;
    }
  }

  .productText {
    //position: absolute;
    //opacity: 0;
    right: 0;
    left: 0;
    bottom: 0;

    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .moreButton {
    font-size: 1em;
    border: 1px solid #444;
    color: #444;
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.5s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }

  .item {
    height: 300px;
    cursor: pointer;
  }

  .itemTitle {
    font-weight: 500;
    font-size: 1.3rem;
    border-width: 1px 0;
    border-style: solid;
    border-color: #000;
    line-height: 1.2rem;
    padding: 10px 0;
  }

  .itemDesc {
    font-size: 1rem;
    line-height: 1.1rem;
  }

  p.old-price {
    font-size: 0.9rem;
    color: #888;
  }

  .seal-img {
    position: absolute;
    width: 90px;
    top: 10px;
    left: 10px;
  }

  .price-discount {
    position: absolute;
    background-color: #fff;
    top: 10px;
    right: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #222;
    text-align: center;
    line-height: 0.8rem;
  }

  .modal {
    visibility: hidden;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
    overflow: auto;
    position: absolute;
    left: 0;
    .modalItem {
      display: none;
      position: absolute;
      top: 0;
    }
    &.expanded {
      opacity: 1;
      visibility: visible;
      display: flex;
      flex-wrap: wrap;
      position: fixed;
      z-index: 10;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      top: 0;
      .modalItem {
        display: block;
      }
    }
  }
  .detailedItem {
    background-color: #fff;
    max-width: 1000px;
    width: 100%;
    padding: 25px;

    @media only screen and (min-width: 768px) {
      padding: 50px;
      .infoOverflowArea {
        max-height: 80vh;
      }
    }
    .infoOverflowArea {
      display: flex;
      flex-wrap: wrap;
      overflow-x: auto;
      max-height: 400px;
    }
    .itemTitle {
      margin-bottom: 50px;
    }
    .image {
      min-width: 300px;
      min-height: 300px;
      flex: 1;
      margin-top: 25px;
    }
    .detailedDescription {
      flex: 1;
      margin-top: 25px;
      text-align: left;
      min-width: 300px;
      @media only screen and (min-width: 768px) {
        margin-left: 25px;
      }
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
  }
`
