import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "daisan-kazoku-test", //作成したサービス「XXXX.microcms.io」のXXXX 部分
  apiKey: "19AC2Gfrt6mmrMLW1xSFSHfaWNAEcaSarF2k",
});
