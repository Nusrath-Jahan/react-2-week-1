import Image from "next/image";
import styles from "./page.module.css";

export default async function page() {
  let data = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=5YBDTAvSRajF50GWQxEccreEgiS3cbZewXriG3aJ"
  );
  let posts = await data.json();
  return (
    <>
      <ul>
        <li>{posts.title}</li>
        
        <li>{posts.explanation}</li>
      </ul>
      {posts.url && <img src={posts.url} alt={posts.title} />}
    </>
  );
}
