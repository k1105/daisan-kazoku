import Layout from "../layout";
import styles from "@/styles/About.module.scss";
import BlockContainer from "@/components/BlockContainer";

const SpecifiedCommercialTransactions = () => {
  return (
    <>
      <Layout pageTitle="特定商取引法に基づく表記" headline="特定商取引法に基づく表記">
        <BlockContainer animation={false}>
          <div className={styles.leftSideItem} />
          <div className={styles.rightSideItem}>
            <div className={styles.item}>
              <h2>運営団体名</h2>
              <p>
                特定非営利活動法人第3の家族
              </p>
            </div>

            <div className={styles.item}>
              <h2>代表者</h2>
              <p>
                理事長 奥村春香
              </p>
            </div>

            <div className={styles.item}>
              <h2>所在地</h2>
              <p>
                神奈川県横浜市中区相生町三丁目６１番地泰生ビル２
              </p>
            </div>

            <div className={styles.item}>
              <h2>電話番号</h2>
              <p>
                045-900-3973
              </p>
            </div>

            <div className={styles.item}>
              <h2>メールアドレス</h2>
              <p>
                info@daisan-kazoku.net
              </p>
            </div>

            <div className={styles.item}>
              <h2>寄付金額/正会員・賛助会員年会費</h2>
              <ul className={styles.list}>
                <li>寄付金額：寄付金額ごとに表示</li>
                <li>正会員年会費：一口 1,000円（個人）、100,000円（団体）</li>
                <li>
                  賛助会員年会費：一口1,000円（個人）、100,000円（団体）
                </li>
              </ul>
            </div>

            <div className={styles.item}>
              <h2>上記金額及び年会費以外に必要な料金等</h2>
              <p>
                郵便振替や銀行振込の手数料は、寄付者様のご負担となります。
              </p>
            </div>

            <div className={styles.item}>
              <h2>支払方法</h2>
              <ul className={styles.list}>
                <li>クレジット決済</li>
                <li>郵便振替</li>
                <li>
                  銀行振込
                </li>
                <li>コンビニ</li>
              </ul>
            </div>

            <div className={styles.item}>
              <h2>支払時期</h2>
              <p>
                寄付者様の任意の時期
              </p>
            </div>

            <div className={styles.item}>
              <h2>商品の引渡時期</h2>
              <p>
                該当なし
              </p>
            </div>

            <div className={styles.item}>
              <h2>返品について</h2>
              <p>
                お支払いを完了された寄付金及び年会費のご返金はできかねますのでご了承ください。
              </p>
            </div>

            <div className={styles.item}>
              <h2>その他</h2>
              <p>マンスリーサポーターとして寄付を頂く場合には、マンスリーサポーター登録後、寄付者様において登録を解除されるまでの間、登録時に選択された金額がクレジット決済により毎月支払われます。</p>
            </div>
          </div>
        </BlockContainer>
      </Layout>
    </>
  );
};

export default SpecifiedCommercialTransactions;
