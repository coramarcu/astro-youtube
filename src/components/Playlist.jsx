const res = await fetch(
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL4-IK0AVhVjNcjfYDQEseNxuarDjSEdZK&key=AIzaSyAf7tTu7IqkaxfRz3Wdem-bUsrq7oK9XjA"
);
const data = await res.json();

const Playlist = () => {
  return (
    <ul>
      {data.items.map((item) => {
        // console.log(item);
        const { id, snippet = {} } = item;
        const { title, thumbnails = {}, resourceId } = snippet;
        const { medium = {} } = thumbnails;

        return (
          <li key={id}>
            <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
              <img
                width={medium.width}
                height={medium.height}
                src={medium.url}
                alt=""
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Playlist;
