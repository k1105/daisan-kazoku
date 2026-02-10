import Layout from "../layout";
import {useState} from "react";
import styles from "@/styles/About.module.scss";
import BlockContainer from "@/components/BlockContainer";

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
    <Layout pageTitle="公式LINE・メルマガ">
          <div  className="container">
            <div className="containerItem">
              <h2>公式LINE</h2>
              <p>少年少女が抱える問題や第3の家族の活動を「ライトに」不定期でお届けします（数ヶ月程度に一回目安）。</p>
              <a
                href="https://lin.ee/7r0Z5HH"
                target="_blank"
                rel="noopener"
                className={styles.externalLink}
              >
                第3の家族 公式LINE
              </a>
              <img src="https://qr-official.line.me/gs/M_700iihuf_GW.png?oat_content=qr" className="lineqr"></img>
              <span className={styles.smallp}><p>※第3の家族の「現ユーザー」「過去ユーザー」が集まるLINE公式アカウントは別にあります。</p></span>
              <a
                href="https://lin.ee/mqlemPn"
                target="_blank"
                rel="noopener"
                className={styles.externalLink}
              >
                少年少女向け 公式LINE
              </a>
            </div>
            <div className="containerItem">
              <h2>メルマガ</h2>
                <p>少年少女が抱える問題や第3の家族の活動を「しっかり」不定期でお届けします（数ヶ月程度に一回目安）。</p>
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
            </div>
           
          </div>


      <style jsx>{`
        .container{
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
        }

        .containerItem{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          max-width: 600px;
          gap: 0.2rem;
            h2 {
            font-weight: normal;
            font-size: 1.8rem;
          }
          p{
            overflow-wrap: wrap;
            margin: 0.5rem 0rem;
            color: var(---font-gray);
          }
          span{
            font-size: 0.8rem;
            p{line-height: 1.6;}
          }
        }
        .lineqr{
          margin-top: 0.5rem;
          max-height: 12rem;
          display: block;
        }
        .form_conteiner{
          display: flex;
          flex-direction: column;
          min-width: 100%;
          margin-top: 0.5rem;
        }
        .field-group {
          display: flex;
          width: 100%;
          margin-bottom: 1rem;
          label{
            width: 160px;
          }
        }

        input {
          height: 3rem;
          width: 440px;
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
        }

        input#submit {
          width: 10rem;
          background-color: var(--green);
          border: none;
          color: white;
        }



        @media screen and (max-width: 720px) {
          .field-group {
            flex-direction: column;
            gap: 0.3rem;
          }
          input{
                        width: 90vw;
          }
        input {
          width: 100%;
        }
        .containerItem{
          min-width: 100%;
          gap: 0.5rem;
           h2 {
            font-weight: normal;
            font-size: 1.6rem;
          }
          p{
            margin: 0px;
          }
          .lineqr{
            margin-top: 0px;
          }
        }
        .information-input-container{
          margin-bottom: 2rem;
        }
      }
      `}</style>
    </Layout>
  );
};

export default Magazine;
