import Link from "next/link";

export default function Work() {
  return (
    <div>
      <h2 className="major">Work</h2>
      <p>
        <p>
          I was born 1989 in a small city near Munich - Germany and working as a
          programmer since 2012.
        </p>
        <p>
          <strong>To reach your goals and wishes in life, i believe:</strong>
        </p>
        You are your greatest enemy, and you should always aim to be a better
        person than you are now. So the most important factor in becoming a good
        developer lies within yourself. Anyone with an interest in solving
        problems and use IT when it's necessary, can be a "good” programmer.
        <br /> No one, not even the best mentor, can help you, if you don't{" "}
        <strong>really</strong> want to.
        <br />
      </p>
      Test yourself with the{" "}
      <Link
        href="https://karrierebibel.de/ikigai-modell/"
        style={{ fontWeight: "bold", justifyContent: "center" }}
      >
        ikigai- modell
      </Link>
      .
      <span className="image main">
        <img src="/beck/images/pic02.jpg" alt="" />
      </span>
      <p>
        <strong>Otagai-ni-rei</strong> - greetings to all practicing
      </p>
    </div>
  );
}
