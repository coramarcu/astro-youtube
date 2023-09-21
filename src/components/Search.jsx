import { useState } from "react";

export default function Search() {
  let [searchTerm, setSearchTerm] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    let endpoint = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&${searchTerm}&key=AIzaSyAf7tTu7IqkaxfRz3Wdem-bUsrq7oK9XjA`;

    const res = await fetch(endpoint);
    const body = res.body;
    const reader = body.getReader();
    const value = (await reader.read()).value;
    const decoder = new TextDecoder();
    const data = decoder.decode(value);
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
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
  );
}
