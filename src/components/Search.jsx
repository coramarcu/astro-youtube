import { useState } from "react";

export default function Search() {
  let [searchTerm, setSearchTerm] = useState();
  let [videoList, setVideoList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    let endpoint = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&${searchTerm}&key=AIzaSyAf7tTu7IqkaxfRz3Wdem-bUsrq7oK9XjA`;

    const res = await fetch(endpoint);
    const body = res.body;
    const reader = body.getReader();
    const value = (await reader.read()).value;
    const decoder = new TextDecoder();
    const data = decoder.decode(value);
    const jsonData = JSON.parse(data);
    const videos = jsonData.items;
    console.log(videos);
    console.log(typeof videos);
    console.log(Array.isArray(videos));

    setVideoList(videos);
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <form
        action=""
        method="POST"
        id="myForm"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <label htmlFor="searchbar">Type your search term </label>
        <input type="text" id="searchbar" />
        <input type="submit" />
      </form>

      <ul>
        {videoList.map((video) => {
          const { id, snippet = {} } = video;
          const { title, thumbnails = {}, publishedAt, description } = snippet;
          const { medium = {} } = thumbnails;

          return (
            <li key={id}>
              <h3>{title}</h3>
              <a href={`https://www.youtube.com/watch?v=${id}`}>
                <img
                  width={medium.width}
                  height={medium.height}
                  src={medium.url}
                  alt=""
                />
              </a>
              <p>{publishedAt}</p>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
