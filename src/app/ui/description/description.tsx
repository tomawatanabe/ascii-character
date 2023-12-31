export default function Description() {
  return (
    <>
      <div className="">
        <p>
          入力した文字をX（旧Twitter）用のアスキーアートにして返すサイトです。{" "}
          <br />
          ・スペースと改行が省略をを防ぐため、1行目にドットを置いています。
          <br />
          ・漢字、ひらがなはカタカナに変換されます。
          <br />
          ・ひらがなは対応予定です。（のちのち...）
          <br />
          ・漢字の対応予定はないです。（無理なので...）
          <br />
          ・文字コードはUnicodeです。
          <br />
          ・使っていい記号「！」「!」「？」「?」「ー」「-」「♡」。
        </p>
      </div>
    </>
  );
}
