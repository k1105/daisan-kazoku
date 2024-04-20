const Contact = () => {
  return (
    <>
      <div className="main">
        <h1>お問い合わせ</h1>
        <form
          action="/submit-your-htmlForm-handler"
          method="POST"
          className="form"
        >
          <div className="form-item">
            <label htmlFor="subject">
              お問い合わせ種別<span className="required">*</span>
            </label>
            <div className="select-box">
              <select name="subject" id="subject">
                <option value="donation">ご寄付について</option>
                <option value="lecture">講演・取材について</option>
                <option value="collaboration">連携について</option>
                <option value="third_family">第3の家族について</option>
                <option value="staff_application">スタッフ応募について</option>
                <option value="other">その他</option>
              </select>
            </div>
          </div>

          <div className="form-item">
            <label htmlFor="name">
              お名前<span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="名前を入力してください。"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="company">会社名</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="会社名を入力してください。"
            />
          </div>

          <div className="form-item">
            <label htmlFor="email">
              メールアドレス<span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="sample@gmail.com"
            />
          </div>

          <div className="form-item">
            <label htmlFor="confirm_email">
              確認のため再度ご入力ください<span className="required">*</span>
            </label>
            <input
              type="email"
              id="confirm_email"
              name="confirm_email"
              placeholder="sample@gmail.com"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="phone">
              電話番号<span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="電話番号を入力してください"
            />
          </div>

          <div className="form-item">
            <label>
              属性<span className="required">*</span>
            </label>
            <div className="select-box">
              <select name="attribute" required>
                <option value="corporate">企業の方</option>
                <option value="htmlFormer">元当事者の方</option>
                <option value="student">学生の方</option>
                <option value="government">地方自治体行政の方</option>
                <option value="school">学校関係の方</option>
                <option value="other">その他</option>
              </select>
            </div>
          </div>

          <div className="form-item">
            <label htmlFor="content">
              お問い合わせ内容<span className="required">*</span>
            </label>
            <textarea id="content" name="content" required></textarea>
          </div>

          <div className="form-item">
            <p className="note">
              ご登録いただいた個人情報は、適正に管理・取り扱いをさせていただきます。活動の報告・案内のメールをお送りする場合もございますが、ご了承いただければ幸いです。
            </p>

            <div>
              <label htmlFor="agree">
                <input type="checkbox" id="agree" name="agree" required />
                同意する
              </label>
            </div>
          </div>

          <input type="submit" value="送信" />
        </form>
      </div>
      <style jsx>{`
        h1 {
          font-weight: 100;
          margin-bottom: 3rem;
        }
        .main {
          width: 40vw;
          margin: 3rem auto;
        }
        .form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 0.4rem;
        }

        .form-item {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .required {
          color: red;
        }

        .select-box {
          position: relative;

          display: flex;
        }
        select {
          width: 100%;
          height: 56px;
          padding: 16px;
          font-size: 1rem;
        }

        input[type="text"],
        input[type="tel"],
        input[type="email"] {
          height: 56px;
          font-size: 1rem;
          border-radius: 10px;
          border: 1px solid #ddd;
          padding: 16px;
        }

        input[type="submit"] {
          height: 56px;
          font-size: 1rem;
          font-weight: bold;
        }

        label[for="agree"] {
          display: flex;
          width: 6rem;
          gap: 10px;
          margin: 0 auto;
          text-align: center;
        }

        textarea {
          font-size: 1rem;
          height: 10rem;
          border-radius: 10px;
          border: 1px solid #ddd;
          padding: 16px;
        }

        .note {
          font-size: 0.9rem;
          line-height: 1.2rem;
          margin-bottom: 2rem;
        }

        @media screen and (max-width: 600px) {
          .main {
            width: 94vw;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
