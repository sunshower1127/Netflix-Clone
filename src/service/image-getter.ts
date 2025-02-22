import ky from "ky";

const api = ky.create({ prefixUrl: "http://localhost:3000", timeout: false });

export async function getThumbnailImageURL(index: number) {
  console.log("getThumbnailImageURL start");
  const imageBlob = await api.get(`image/${index}`).blob();
  console.log("getThumbnailImageURL end");
  return URL.createObjectURL(imageBlob);
}
