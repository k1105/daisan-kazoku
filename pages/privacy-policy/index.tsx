import Layout from "../layout";
import styles from "@/styles/About.module.scss";
import BlockContainer from "@/components/BlockContainer";

const PrivacyPolicy = () => {
  return (
    <>
      <Layout pageTitle="プライバシーポリシー" headline="プライバシーポリシー">
        <BlockContainer animation={false}>
          <div className={styles.leftSideItem} />
          <div className={styles.rightSideItem}>
            <div className={styles.item}>
              <h2>取得する個人情報</h2>
              <p>
                特定非営利活動法人第三の家族（以下「当社」といいます。）が管理、運営する当ウェブサイト（以下「当サイト」といいます。）では、当社が提供する各サービス（以下「本サービス」といいます。）をご利用いただく際、以下の個人情報を入力いただく場合がございます。
              </p>
              <ul className={styles.list}>
                <li>氏名</li>
                <li>生年月日</li>
                <li>性別</li>
                <li>家族構成</li>
                <li>メールアドレス</li>
                <li>SNSなどのアカウントID</li>
              </ul>
            </div>

            <div className={styles.item}>
              <h2>個人情報の利用目的</h2>
              <p>
                当社は、取得した個人情報を以下に定める目的の限りで利用させていただくものであり、これらの目的以外では利用いたしません。
              </p>
              <ul className={styles.list}>
                <li>本サービスの品質改善、新サービスの開発及び提供のため</li>
                <li>
                  本サービスに関するご案内、お問い合わせに対する回答を行うため
                </li>
                <li>当サイトの利用者に関する統計データを作成するため</li>
                <li>匿名化した個人情報を当社と提携する第三者に提供するため</li>
              </ul>
            </div>

            <div className={styles.item}>
              <h2>個人情報の管理と保護</h2>
              <p>
                当社は、個人情報の管理を厳重に行い、法令により認められている場合を除き、利用者の同意がない限り、第三者に対し個人情報を開示・提供することはいたしません。
              </p>
              <p>ただし、以下に定める場合はこの限りではありません。</p>
              <ul className={styles.list}>
                <li>法令に基づく場合</li>
                <li>
                  人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合
                </li>
                <li>
                  公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合
                </li>
                <li>
                  国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合
                </li>
              </ul>
            </div>

            <div className={styles.item}>
              <h2>個人情報の取扱いの委託</h2>
              <p>
                当社は、利用目的の達成に必要な範囲内において、個人情報の取扱いの全部又は一部を委託する場合がございます。
              </p>
            </div>

            <div className={styles.item}>
              <h2>安全管理措置</h2>
              <p>
                当社が利用者よりお預かりした個人情報は、個人情報ファイルへのアクセス制限の実施、アクセスログの記録及び外部からの不正アクセス防止のためのセキュリティ対策の実施等、組織的、物理的、人的、技術的施策を講じることで個人情報への不正な侵入、個人情報の紛失、破壊、改ざん、及び漏えい等を防止いたします。万一、利用者の個人情報の漏えい等の事故が発生した場合、当社は、個人情報保護法及び関連するガイドラインに則り、速やかに監督官庁への報告を行うとともに、当該監督官庁の指示に従い、類似事案の発生防止措置及び再発防止措置等の必要な対応を行います。
              </p>
            </div>

            <div className={styles.item}>
              <h2>個人情報の開示・訂正・利用停止等</h2>
              <p>
                個人情報の内容の開示（個人データの第三者提供記録の開示を含みます。）・訂正・利用停止・消去又は第三者提供の停止の請求があった場合は、当社所定の手続によりご本人であることを確認の上、個人情報保護法に基づき適切・迅速に対応いたします。なお、訂正または利用停止を行わない旨の決定をしたときは、利用者に対しその旨を通知いたします。
              </p>
            </div>

            <div className={styles.item}>
              <h2>アクセス解析ツール等について</h2>
              <p>
                当サイトでは、本サービスのアクセスの解析等を行うため、単独では個人を特定できない情報を収集するモジュール技術（Cookie）を使用して、利用者が本サービスにアクセスした情報、閲覧した情報等を取得することがあります。当サイトで使用するCookie及びプライバシーポリシーは次のとおりです。
              </p>
              <ul className={styles.list}>
                <li>
                  <a
                    href="https://support.google.com/analytics/answer/7318509?hl=ja"
                    className={styles.externalLink}
                  >
                    Googleアナリティクス
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/adsense/answer/1348695?hl=ja&ref_topic=9886175&sjid=12656170945459456653-AP"
                    className={styles.externalLink}
                  >
                    Googleアドセンス
                  </a>
                </li>
                <li>
                  <a
                    href="https://policies.google.com/privacy?hl=ja"
                    className={styles.externalLink}
                  >
                    Google Search Console
                  </a>
                </li>
                <li>
                  <a
                    href="https://karte.io/karte-policy.html"
                    className={styles.externalLink}
                  >
                    KARTE
                  </a>
                </li>
              </ul>
              <p>
                利用者は本サービス上でのCookieの使用について設定することができます。クッキー等の使用を許可しない場合には、利用者のブラウザの設定等においてクッキー等を無効にすることができます。ただし、Cookieを無効にした場合、本サービスの利便性が損なわれ、又は、本サービスで提供するサービスのご利用範囲が限定されることがあります。
              </p>
            </div>

            <div className={styles.item}>
              <h2>免責事項</h2>
              <p>
                当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。また、当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
              </p>
            </div>

            <div className={styles.item}>
              <h2>著作権について</h2>
              <p>
                当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、メールよりご連絡ください。迅速に対応いたします。
              </p>
            </div>

            <div className={styles.item}>
              <h2>リンクについて</h2>
              <p>
                当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
              </p>
            </div>

            <div className={styles.item}>
              <h2>当サイトへの投稿について</h2>
              <p>
                次の各号に掲げる内容を含む投稿は管理人の裁量によって承認せず、削除する事があります。
              </p>
              <ul className={styles.list}>
                <li>特定の自然人または法人を誹謗し、中傷するもの。</li>
                <li>極度にわいせつな内容を含むもの。</li>
                <li>
                  その他、公序良俗に反し、または管理人によって承認すべきでないと認められるもの
                </li>
              </ul>
            </div>

            <div className={styles.item}>
              <h2>個人情報取扱事業者の表示</h2>
              <p>神奈川県横浜市中区相生町3丁目61番地泰生ビル2</p>
              <p>特定非営利活動法人第3の家族</p>
              <p>代表者：奥村春香</p>
              <p>個人情報保護管理者：奥村春香</p>
            </div>

            <div className={styles.item}>
              <h2>お問い合わせ窓口</h2>
              <p>
                当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。
              </p>
              <p>お客様対応窓口</p>
              <p>
                <a
                  href="mailto:support@daisan-kazoku.net"
                  className={styles.externalLink}
                >
                  support@daisan-kazoku.net
                </a>
              </p>
            </div>

            <div className={styles.item}>
              <h2>改訂日</h2>
              <p>2024年5月7日改訂</p>
            </div>
          </div>
        </BlockContainer>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
