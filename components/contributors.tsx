import CONTRIBUTORS from "../data/contributors.json";

interface IContributors {}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(CONTRIBUTORS);

const Contributors = ({}: IContributors) => {
  return (
    <ul className="grid grid-cols-4 lg:grid-cols-7">
      {CONTRIBUTORS.map(({ login, name, avatar_url }) => (
        <li className="aspect-w-1 aspect-h-1" key={login}>
          <img
            src={
              avatar_url ||
              `https://github.com/identicons/${login.replace(/[_-]/g, "")}.png`
            }
            alt={`Profile picture of contributor ${name}`}
            className="filter grayscale"
          />
        </li>
      ))}
    </ul>
  );
};

export default Contributors;
