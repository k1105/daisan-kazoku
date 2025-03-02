import { FC, FormEventHandler, useId, useState } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

const recaptchaSiteKey = "6LcaI9wqAAAAAO02R5zvMuo5N3KsnBnCWZyXDdf_";

export const Form: FC = () => {
  const id = useId();
  const [title, setTitle] = useState("ご寄付について");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [tel, setTel] = useState("");
  const [role, setRole] = useState("企業の方");
  const [text, setText] = useState("");
  const [agree, setAgree] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // 簡単にバリデーション: メールアドレスが一致するか
    if (email !== confirmEmail) {
      alert("メールアドレスが一致していません。");
      return;
    }

    // チェックボックスの確認
    if (!agree) {
      alert("個人情報取り扱いに同意してください。");
      return;
    }

    window.grecaptcha.ready(async () => {
      try {
        const captchaToken = await window.grecaptcha.execute(recaptchaSiteKey, {
          action: "contact_form_submit",
        });

        // ★ サーバーが期待している形
        const payload = {
          captchaToken,
          title, // ← "ご寄付について" 等の日本語
          name,
          companyName,
          email,
          tel,
          role, // ← "企業の方" 等の日本語
          text, // ← お問い合わせ内容
        };

        const res = await fetch("https://cms.daisan-kazoku.net/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          alert("送信しました");
          // フォームをリセットしたい場合はステートをクリアする
          setTitle("ご寄付について");
          setName("");
          setCompanyName("");
          setEmail("");
          setConfirmEmail("");
          setTel("");
          setRole("企業の方");
          setText("");
          setAgree(false);
        } else {
          alert("送信に失敗しました");
        }
      } catch (error) {
        console.error(error);
        alert("送信中にエラーが発生しました");
      }
    });
  };

  return (
    <>
      <div className="main">
        <form onSubmit={onSubmit}>
          <div className="form-item">
            <label htmlFor="subject">
              お問い合わせ種別<span className="required">*</span>
            </label>
            <div className="select-box">
              {/* ★ valueを日本語に合わせる */}
              <select
                name="subject"
                id="subject"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              >
                <option value="ご寄付について">ご寄付について</option>
                <option value="講演・取材について">講演・取材について</option>
                <option value="連携について">連携について</option>
                <option value="第3の家族について">第3の家族について</option>
                <option value="スタッフ応募について">
                  スタッフ応募について
                </option>
                <option value="その他">その他</option>
              </select>
            </div>
          </div>

          <div className="form-item">
            <label htmlFor={`${id}_name`}>
              お名前<span className="required">*</span>
            </label>
            <input
              type="text"
              id={`${id}_name`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="名前を入力してください。"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor={`${id}_companyName`}>会社名</label>
            <input
              type="text"
              id={`${id}_companyName`}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              name="company"
              placeholder="会社名を入力してください。"
            />
          </div>

          <div className="form-item">
            <label htmlFor={`${id}_email`}>
              メールアドレス<span className="required">*</span>
            </label>
            <input
              type="email"
              id={`${id}_email`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              placeholder="sample@gmail.com"
            />
          </div>

          <div className="form-item">
            <label htmlFor={`${id}_confirmEmail`}>
              確認のため再度ご入力ください<span className="required">*</span>
            </label>
            <input
              type="email"
              id={`${id}_confirmEmail`}
              name="confirm_email"
              placeholder="sample@gmail.com"
              required
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </div>

          <div className="form-item">
            <label htmlFor={`${id}_tel`}>
              電話番号<span className="required">*</span>
            </label>
            <input
              type="tel"
              id={`${id}_tel`}
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              name="phone"
              placeholder="電話番号を入力してください"
              required
            />
          </div>

          <div className="form-item">
            <label>
              属性<span className="required">*</span>
            </label>
            <div className="select-box">
              {/* ★ role も日本語に合わせる */}
              <select
                name="attribute"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="企業の方">企業の方</option>
                <option value="元当事者の方">元当事者の方</option>
                <option value="学生の方">学生の方</option>
                <option value="地方自治体行政の方">地方自治体行政の方</option>
                <option value="学校関係の方">学校関係の方</option>
                <option value="その他">その他</option>
              </select>
            </div>
          </div>

          <div className="form-item">
            <label htmlFor={`${id}_text`}>
              お問い合わせ内容<span className="required">*</span>
            </label>
            <textarea
              id={`${id}_text`}
              name="text"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="form-item">
            <p className="note">
              ご登録いただいた個人情報は、適正に管理・取り扱いをさせていただきます。活動の報告・案内のメールをお送りする場合もございますが、ご了承いただければ幸いです。
            </p>
            <div>
              <label htmlFor={`${id}_agree`}>
                <input
                  type="checkbox"
                  id={`${id}_agree`}
                  name="agree"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                />
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
          width: 100%;
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
