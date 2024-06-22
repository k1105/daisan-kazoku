import Image from "next/image";
import Layout from "../layout";
import Link from "next/link";

const Service = () => {
  return (
    <>
      <Layout pageTitle="サービス">
        <div>
          <h1>Web事業</h1>
          <p>デザイン・テクノロジーによって日常を支えます。</p>
          <div>gedokun</div>
          <div>nigeruno</div>
          <h1>イベント事業</h1>
          <p>支援らしくない入り口を作ります。</p>
          <p>家庭環境データ</p>
          <p>裏母の日</p>
          <p>
            <Link href="/service/daisan-live">音楽ライブ</Link>
          </p>
        </div>
        <style jsx>{``}</style>
      </Layout>
    </>
  );
};

export default Service;
