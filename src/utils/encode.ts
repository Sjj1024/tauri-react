import { privateKey, publickKey } from "@/config";
import JSEncrypt from "jsencrypt";

export const rsaEncode = (content: string) => {
  var encrypt = new JSEncrypt();
  encrypt.setPublicKey(publickKey);
  return encrypt.encrypt(content) as string;
};

export const rsaDecode = (content: string) => {
  const decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privateKey);
  return decrypt.decrypt(content) as string;
};

export const encode64 = (str) => {
  // 首先，我们使用 encodeURIComponent 来获得百分比编码的UTF-8，然后我们将百分比编码转换为原始字节，最后存储到btoa里面
  return btoa(
    encodeURIComponent(str).replace(
      /%([0-9A-F]{2})/g,
      function toSolidBytes(_, p1) {
        return String.fromCharCode(Number("0x" + p1));
      }
    )
  );
};

export const decode64 = (str) => {
  // 过程：从字节流到百分比编码，再到原始字符串
  return decodeURIComponent(
    atob(str)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
};
