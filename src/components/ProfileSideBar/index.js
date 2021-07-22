import { Box } from "../Box";

export const ProfileSideBar = (user) => {
  return (
    <Box as="aside">
      <>
        <a className="boxLink" href={`https://github.com/${user.githubUser}`}>
          <img src={`https://github.com/${user.githubUser}.png`} />
        </a>
      </>
    </Box>
  );
};
