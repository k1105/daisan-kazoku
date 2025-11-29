import Layout from "../layout";
import {useState} from "react";
import styles from "@/styles/About.module.scss";

const Magazine = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const [successResponse, setSuccessResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);
    console.log(form);
    console.log(formData);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Mailchimpのリクエストに必要な場合
      });
      if (response.ok) {
        // setSuccessResponse("登録が完了しました！");
        setErrorResponse("");
      } else {
        // setErrorResponse("エラーが発生しました。もう一度お試しください。");
      }
    } catch (error) {
      console.error("Error:", error);
      //   setErrorResponse("エラーが発生しました。もう一度お試しください。");
    }
  };

  return (
    <Layout pageTitle="メルマガ登録">
        <div className="form_conteiner">
          <div id="mc_embed_shell">
            <div id="mc_embed_signup">
              <form
                action="https://daisan-kazoku.us10.list-manage.com/subscribe/post?u=95a9ba6fdfcf463a595073589&amp;id=87b982a588&amp;f_id=0037ede0f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                onSubmit={handleSubmit}
              >
                <div id="mc_embed_signup_scroll">
                  <div className="information-input-container">
                    <div className="field-group">
                      <label htmlFor="mce-EMAIL">
                        メールアドレス <span className="asterisk">*</span>
                      </label>
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="field-group">
                      <label htmlFor="mce-LNAME">姓</label>
                      <input
                        type="text"
                        name="LNAME"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="field-group">
                      <label htmlFor="mce-FNAME">名</label>
                      <input
                        type="text"
                        name="FNAME"
                        id="mce-FNAME"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div
                      className={`response ${errorResponse ? "active" : ""}`}
                      id="mce-error-response"
                    >
                      {errorResponse}
                    </div>
                    <div
                      className={`response ${successResponse ? "active" : ""}`}
                      id="mce-success-response"
                    >
                      {successResponse}
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{position: "absolute", left: "-5000px"}}
                  >
                    <input
                      type="text"
                      name="b_95a9ba6fdfcf463a595073589_87b982a588"
                      tabIndex={-1}
                      value=""
                      readOnly
                    />
                  </div>
                  <div className="submit-button-container">
                    <input
                      type="submit"
                      name="subscribe"
                      id="submit"
                      className="button"
                      value="購読する"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      <style jsx>{`
        .form_conteiner{
          display: flex;
          align-items: center;
          flex-direction: column;
          min-width: 100%;
        }
        .field-group {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-bottom: 1rem;
          gap: 2rem;
        }

        input {
          height: 3rem;
          width: 24rem;
          border-radius: 10px;
          border: 1px solid var(--gray);
          padding: 0 1rem;
          font-size: 1rem;
        }
        
        .information-input-container {
          margin-bottom: 3rem;
        }

        .asterisk {
          color: red;
        }

        .submit-button-container {
          width: 100%;
          text-align: right;
        }

        input#submit {
          width: 10rem;
          background-color: var(--green);
          border: none;
          color: white;
        }



        @media screen and (max-width: 600px) {
        .form_conteiner{
          padding: 0px 20px;
        }
          .field-group {
            flex-direction: column;
            gap: 0.3rem;
          }
          input{
                        width: 90vw;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Magazine;
