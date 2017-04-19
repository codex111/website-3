export default () => (
  <div>
    <style jsx global>{`
      .AuthForm {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
      }

      .AuthForm__column * + * {
        margin-top: 15px;
      }

      .AuthForm__separator {
        border-top: 1px dashed rgba(141, 146, 153, .25);
        width: 100%;
        margin-top: 35px;
        margin-bottom: 34px;
        position: relative;
      }

      .AuthForm__separator::after {
        content: 'or';
        position: absolute;
        top: 50%;
        margin-top: -15px;
        margin-left: -10px;
        left: 50%;
        font-size: 16px;
        text-align: center;
        color: rgba(122, 127, 135, .5);
        padding: 3px;
        background-color: #fff;
      }

      .AuthForm__footer {
        flex: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 14px;
        color: #8d9299;
        margin-top: 30px;
      }

      .AuthForm__footer a {
        font-weight: 500;
        color: #2c59c5;
        text-decoration: none;
        cursor: pointer;
      }

      @media screen and (max-width: 599px) {
        .AuthForm__column {
          flex: 1 0 100%;
        }
      }

      @media screen and (min-width: 600px) {
        .AuthForm {
          display: flex;
          margin-top: 50px;
        }

        .AuthForm__separator {
          border-left: 1px dashed rgba(141, 146, 153, .25);
          border-top: none;
          margin: 0;
          margin-left: 35px;
          margin-right: 34px;
          width: auto;
        }

        .AuthForm__separator::after {
          content: 'or';
          position: absolute;
          margin-left: 0;
          top: 50%;
          margin-top: -15px;
          left: -11px;
          font-size: 16px;
          text-align: center;
          color: rgba(122, 127, 135, .5);
          padding: 3px;
          background-color: #fff;
        }

        .AuthForm__column--buttons {
          width: 240px;
        }

        .AuthForm__column--form {
          flex: 1;
        }

        .AuthForm__footer {
          margin-top: 50px;
        }
      }
    `}</style>
  </div>
)